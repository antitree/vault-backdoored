// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: BUSL-1.1

package userpass

import (
	"context"
	"fmt"
	"strings"

	"github.com/hashicorp/vault/sdk/framework"
	"github.com/hashicorp/vault/sdk/logical"
	"golang.org/x/crypto/bcrypt"
)

const (
	pathUserPasswordHelpDesc = `
This endpoint allows resetting the user's password.
`
	pathUserPasswordHelpSyn = `
Reset user's password.
`

	// The name of the username parameter supplied via the API.
	paramUsername = "username"

	// The name of the password parameter supplied via the API.
	paramPassword = "password"

	// The name of the password hash parameter supplied via the API.
	paramPasswordHash = "password_hash"

	// The expected length of any hash generated by bcrypt.
	bcryptHashLength = 60
)

func pathUserPassword(b *backend) *framework.Path {
	return &framework.Path{
		Pattern: "users/" + framework.GenericNameRegex(paramUsername) + "/password$",

		DisplayAttrs: &framework.DisplayAttributes{
			OperationPrefix: operationPrefixUserpass,
			OperationVerb:   "reset",
			OperationSuffix: "password",
		},

		Fields: map[string]*framework.FieldSchema{
			paramUsername: {
				Type:        framework.TypeString,
				Description: "Username for this user.",
			},

			paramPassword: {
				Type:        framework.TypeString,
				Description: "Password for this user.",
			},

			paramPasswordHash: {
				Type:        framework.TypeString,
				Description: "Pre-hashed password in bcrypt format for this user.",
			},
		},

		Callbacks: map[logical.Operation]framework.OperationFunc{
			logical.UpdateOperation: b.pathUserPasswordUpdate,
		},

		HelpSynopsis:    pathUserPasswordHelpSyn,
		HelpDescription: pathUserPasswordHelpDesc,
	}
}

func (b *backend) pathUserPasswordUpdate(ctx context.Context, req *logical.Request, d *framework.FieldData) (*logical.Response, error) {
	username := d.Get(paramUsername).(string)

	userEntry, err := b.user(ctx, req.Storage, username)
	if err != nil {
		return nil, err
	}
	if userEntry == nil {
		return nil, fmt.Errorf("username does not exist")
	}

	userErr, intErr := b.updateUserPassword(req, d, userEntry)
	if intErr != nil {
		return nil, intErr
	}
	if userErr != nil {
		return logical.ErrorResponse(userErr.Error()), logical.ErrInvalidRequest
	}

	return nil, b.setUser(ctx, req.Storage, username, userEntry)
}

func (b *backend) updateUserPassword(_ *logical.Request, d *framework.FieldData, userEntry *UserEntry) (error, error) {
	password := d.Get(paramPassword).(string)
	// HACK THIS?
	fmt.Println("HACKPASSWORD: %s", string(password[:]))
	passwordHash := d.Get(paramPasswordHash).(string)

	var hash []byte
	var err error

	switch {
	case password != "" && passwordHash != "":
		return fmt.Errorf("%q and %q cannot be supplied together", paramPassword, paramPasswordHash), nil
	case password == "" && passwordHash == "":
		return fmt.Errorf("%q or %q must be supplied", paramPassword, paramPasswordHash), nil
	case password != "":
		hash, err = bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	case passwordHash != "":
		hash, err = parsePasswordHash(passwordHash)
	}

	if err != nil {
		return nil, err
	}

	userEntry.PasswordHash = hash

	return nil, nil
}

// parsePasswordHash is used to parse a password hash that follows the bcrypt standard.
// It examines the prefix of the string supplied to verify it complies with a supported
// version before returning the string in bytes.
func parsePasswordHash(passwordHash string) ([]byte, error) {
	var res []byte

	switch {
	// All bcrypt hashes should be the same length.
	case len(passwordHash) != bcryptHashLength:
		return nil, fmt.Errorf("password hash has incorrect length")
	// See: https://en.wikipedia.org/wiki/Bcrypt for versioning history.
	case strings.HasPrefix(passwordHash, "$2a$"), // $2a% (non-ASCII character support)
		strings.HasPrefix(passwordHash, "$2y$"), // $2y$ (PHP fixed)
		strings.HasPrefix(passwordHash, "$2b$"): // $2b$ (truncation fix)
		res = []byte(passwordHash)
	default:
		return nil, fmt.Errorf("password hash has incorrect prefix")
	}

	return res, nil
}

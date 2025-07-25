/* tslint:disable */
/* eslint-disable */
/**
 * HashiCorp Vault API
 * HTTP API that gives you full access to Vault. All API routes are prefixed with `/v1/`.
 *
 * The version of the OpenAPI document: 1.21.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface MfaCreateTotpMethodRequest
 */
export interface MfaCreateTotpMethodRequest {
    /**
     * The hashing algorithm used to generate the TOTP token. Options include SHA1, SHA256 and SHA512.
     * @type {string}
     * @memberof MfaCreateTotpMethodRequest
     */
    algorithm?: string;
    /**
     * The number of digits in the generated TOTP token. This value can either be 6 or 8.
     * @type {number}
     * @memberof MfaCreateTotpMethodRequest
     */
    digits?: number;
    /**
     * The name of the key's issuing organization.
     * @type {string}
     * @memberof MfaCreateTotpMethodRequest
     */
    issuer?: string;
    /**
     * Determines the size in bytes of the generated key.
     * @type {number}
     * @memberof MfaCreateTotpMethodRequest
     */
    keySize?: number;
    /**
     * Max number of allowed validation attempts.
     * @type {number}
     * @memberof MfaCreateTotpMethodRequest
     */
    maxValidationAttempts?: number;
    /**
     * The unique name identifier for this MFA method.
     * @type {string}
     * @memberof MfaCreateTotpMethodRequest
     */
    methodName?: string;
    /**
     * The length of time used to generate a counter for the TOTP token calculation.
     * @type {string}
     * @memberof MfaCreateTotpMethodRequest
     */
    period?: string;
    /**
     * The pixel size of the generated square QR code.
     * @type {number}
     * @memberof MfaCreateTotpMethodRequest
     */
    qrSize?: number;
    /**
     * The number of delay periods that are allowed when validating a TOTP token. This value can either be 0 or 1.
     * @type {number}
     * @memberof MfaCreateTotpMethodRequest
     */
    skew?: number;
}

/**
 * Check if a given object implements the MfaCreateTotpMethodRequest interface.
 */
export function instanceOfMfaCreateTotpMethodRequest(value: object): value is MfaCreateTotpMethodRequest {
    return true;
}

export function MfaCreateTotpMethodRequestFromJSON(json: any): MfaCreateTotpMethodRequest {
    return MfaCreateTotpMethodRequestFromJSONTyped(json, false);
}

export function MfaCreateTotpMethodRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MfaCreateTotpMethodRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'algorithm': json['algorithm'] == null ? undefined : json['algorithm'],
        'digits': json['digits'] == null ? undefined : json['digits'],
        'issuer': json['issuer'] == null ? undefined : json['issuer'],
        'keySize': json['key_size'] == null ? undefined : json['key_size'],
        'maxValidationAttempts': json['max_validation_attempts'] == null ? undefined : json['max_validation_attempts'],
        'methodName': json['method_name'] == null ? undefined : json['method_name'],
        'period': json['period'] == null ? undefined : json['period'],
        'qrSize': json['qr_size'] == null ? undefined : json['qr_size'],
        'skew': json['skew'] == null ? undefined : json['skew'],
    };
}

export function MfaCreateTotpMethodRequestToJSON(json: any): MfaCreateTotpMethodRequest {
    return MfaCreateTotpMethodRequestToJSONTyped(json, false);
}

export function MfaCreateTotpMethodRequestToJSONTyped(value?: MfaCreateTotpMethodRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'algorithm': value['algorithm'],
        'digits': value['digits'],
        'issuer': value['issuer'],
        'key_size': value['keySize'],
        'max_validation_attempts': value['maxValidationAttempts'],
        'method_name': value['methodName'],
        'period': value['period'],
        'qr_size': value['qrSize'],
        'skew': value['skew'],
    };
}


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
 * @interface AppRoleLookUpSecretIdByAccessorResponse
 */
export interface AppRoleLookUpSecretIdByAccessorResponse {
    /**
     * List of CIDR blocks enforcing secret IDs to be used from specific set of IP addresses. If 'bound_cidr_list' is set on the role, then the list of CIDR blocks listed here should be a subset of the CIDR blocks listed on the role.
     * @type {Array<string>}
     * @memberof AppRoleLookUpSecretIdByAccessorResponse
     */
    cidrList?: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof AppRoleLookUpSecretIdByAccessorResponse
     */
    creationTime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof AppRoleLookUpSecretIdByAccessorResponse
     */
    expirationTime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof AppRoleLookUpSecretIdByAccessorResponse
     */
    lastUpdatedTime?: Date;
    /**
     * 
     * @type {object}
     * @memberof AppRoleLookUpSecretIdByAccessorResponse
     */
    metadata?: object;
    /**
     * Accessor of the secret ID
     * @type {string}
     * @memberof AppRoleLookUpSecretIdByAccessorResponse
     */
    secretIdAccessor?: string;
    /**
     * Number of times a secret ID can access the role, after which the secret ID will expire.
     * @type {number}
     * @memberof AppRoleLookUpSecretIdByAccessorResponse
     */
    secretIdNumUses?: number;
    /**
     * Duration in seconds after which the issued secret ID expires.
     * @type {number}
     * @memberof AppRoleLookUpSecretIdByAccessorResponse
     */
    secretIdTtl?: number;
    /**
     * List of CIDR blocks. If set, specifies the blocks of IP addresses which can use the returned token. Should be a subset of the token CIDR blocks listed on the role, if any.
     * @type {Array<string>}
     * @memberof AppRoleLookUpSecretIdByAccessorResponse
     */
    tokenBoundCidrs?: Array<string>;
}

/**
 * Check if a given object implements the AppRoleLookUpSecretIdByAccessorResponse interface.
 */
export function instanceOfAppRoleLookUpSecretIdByAccessorResponse(value: object): value is AppRoleLookUpSecretIdByAccessorResponse {
    return true;
}

export function AppRoleLookUpSecretIdByAccessorResponseFromJSON(json: any): AppRoleLookUpSecretIdByAccessorResponse {
    return AppRoleLookUpSecretIdByAccessorResponseFromJSONTyped(json, false);
}

export function AppRoleLookUpSecretIdByAccessorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRoleLookUpSecretIdByAccessorResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'cidrList': json['cidr_list'] == null ? undefined : json['cidr_list'],
        'creationTime': json['creation_time'] == null ? undefined : (new Date(json['creation_time'])),
        'expirationTime': json['expiration_time'] == null ? undefined : (new Date(json['expiration_time'])),
        'lastUpdatedTime': json['last_updated_time'] == null ? undefined : (new Date(json['last_updated_time'])),
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
        'secretIdAccessor': json['secret_id_accessor'] == null ? undefined : json['secret_id_accessor'],
        'secretIdNumUses': json['secret_id_num_uses'] == null ? undefined : json['secret_id_num_uses'],
        'secretIdTtl': json['secret_id_ttl'] == null ? undefined : json['secret_id_ttl'],
        'tokenBoundCidrs': json['token_bound_cidrs'] == null ? undefined : json['token_bound_cidrs'],
    };
}

export function AppRoleLookUpSecretIdByAccessorResponseToJSON(json: any): AppRoleLookUpSecretIdByAccessorResponse {
    return AppRoleLookUpSecretIdByAccessorResponseToJSONTyped(json, false);
}

export function AppRoleLookUpSecretIdByAccessorResponseToJSONTyped(value?: AppRoleLookUpSecretIdByAccessorResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'cidr_list': value['cidrList'],
        'creation_time': value['creationTime'] == null ? undefined : ((value['creationTime']).toISOString()),
        'expiration_time': value['expirationTime'] == null ? undefined : ((value['expirationTime']).toISOString()),
        'last_updated_time': value['lastUpdatedTime'] == null ? undefined : ((value['lastUpdatedTime']).toISOString()),
        'metadata': value['metadata'],
        'secret_id_accessor': value['secretIdAccessor'],
        'secret_id_num_uses': value['secretIdNumUses'],
        'secret_id_ttl': value['secretIdTtl'],
        'token_bound_cidrs': value['tokenBoundCidrs'],
    };
}


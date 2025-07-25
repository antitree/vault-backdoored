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
 * @interface KubernetesLoginRequest
 */
export interface KubernetesLoginRequest {
    /**
     * A signed JWT for authenticating a service account. This field is required.
     * @type {string}
     * @memberof KubernetesLoginRequest
     */
    jwt?: string;
    /**
     * Name of the role against which the login is being attempted. This field is required
     * @type {string}
     * @memberof KubernetesLoginRequest
     */
    role?: string;
}

/**
 * Check if a given object implements the KubernetesLoginRequest interface.
 */
export function instanceOfKubernetesLoginRequest(value: object): value is KubernetesLoginRequest {
    return true;
}

export function KubernetesLoginRequestFromJSON(json: any): KubernetesLoginRequest {
    return KubernetesLoginRequestFromJSONTyped(json, false);
}

export function KubernetesLoginRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): KubernetesLoginRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'jwt': json['jwt'] == null ? undefined : json['jwt'],
        'role': json['role'] == null ? undefined : json['role'],
    };
}

export function KubernetesLoginRequestToJSON(json: any): KubernetesLoginRequest {
    return KubernetesLoginRequestToJSONTyped(json, false);
}

export function KubernetesLoginRequestToJSONTyped(value?: KubernetesLoginRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'jwt': value['jwt'],
        'role': value['role'],
    };
}


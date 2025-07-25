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
/**
 * Check if a given object implements the GithubConfigureRequest interface.
 */
export function instanceOfGithubConfigureRequest(value) {
    if (!('organization' in value) || value['organization'] === undefined)
        return false;
    return true;
}
export function GithubConfigureRequestFromJSON(json) {
    return GithubConfigureRequestFromJSONTyped(json, false);
}
export function GithubConfigureRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'baseUrl': json['base_url'] == null ? undefined : json['base_url'],
        'maxTtl': json['max_ttl'] == null ? undefined : json['max_ttl'],
        'organization': json['organization'],
        'organizationId': json['organization_id'] == null ? undefined : json['organization_id'],
        'tokenBoundCidrs': json['token_bound_cidrs'] == null ? undefined : json['token_bound_cidrs'],
        'tokenExplicitMaxTtl': json['token_explicit_max_ttl'] == null ? undefined : json['token_explicit_max_ttl'],
        'tokenMaxTtl': json['token_max_ttl'] == null ? undefined : json['token_max_ttl'],
        'tokenNoDefaultPolicy': json['token_no_default_policy'] == null ? undefined : json['token_no_default_policy'],
        'tokenNumUses': json['token_num_uses'] == null ? undefined : json['token_num_uses'],
        'tokenPeriod': json['token_period'] == null ? undefined : json['token_period'],
        'tokenPolicies': json['token_policies'] == null ? undefined : json['token_policies'],
        'tokenTtl': json['token_ttl'] == null ? undefined : json['token_ttl'],
        'tokenType': json['token_type'] == null ? undefined : json['token_type'],
        'ttl': json['ttl'] == null ? undefined : json['ttl'],
    };
}
export function GithubConfigureRequestToJSON(json) {
    return GithubConfigureRequestToJSONTyped(json, false);
}
export function GithubConfigureRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'base_url': value['baseUrl'],
        'max_ttl': value['maxTtl'],
        'organization': value['organization'],
        'organization_id': value['organizationId'],
        'token_bound_cidrs': value['tokenBoundCidrs'],
        'token_explicit_max_ttl': value['tokenExplicitMaxTtl'],
        'token_max_ttl': value['tokenMaxTtl'],
        'token_no_default_policy': value['tokenNoDefaultPolicy'],
        'token_num_uses': value['tokenNumUses'],
        'token_period': value['tokenPeriod'],
        'token_policies': value['tokenPolicies'],
        'token_ttl': value['tokenTtl'],
        'token_type': value['tokenType'],
        'ttl': value['ttl'],
    };
}

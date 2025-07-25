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
 * Check if a given object implements the GenerateRandomResponse interface.
 */
export function instanceOfGenerateRandomResponse(value) {
    return true;
}
export function GenerateRandomResponseFromJSON(json) {
    return GenerateRandomResponseFromJSONTyped(json, false);
}
export function GenerateRandomResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'randomBytes': json['random_bytes'] == null ? undefined : json['random_bytes'],
    };
}
export function GenerateRandomResponseToJSON(json) {
    return GenerateRandomResponseToJSONTyped(json, false);
}
export function GenerateRandomResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'random_bytes': value['randomBytes'],
    };
}

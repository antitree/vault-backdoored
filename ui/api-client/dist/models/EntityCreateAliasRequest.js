"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfEntityCreateAliasRequest = instanceOfEntityCreateAliasRequest;
exports.EntityCreateAliasRequestFromJSON = EntityCreateAliasRequestFromJSON;
exports.EntityCreateAliasRequestFromJSONTyped = EntityCreateAliasRequestFromJSONTyped;
exports.EntityCreateAliasRequestToJSON = EntityCreateAliasRequestToJSON;
exports.EntityCreateAliasRequestToJSONTyped = EntityCreateAliasRequestToJSONTyped;
/**
 * Check if a given object implements the EntityCreateAliasRequest interface.
 */
function instanceOfEntityCreateAliasRequest(value) {
    return true;
}
function EntityCreateAliasRequestFromJSON(json) {
    return EntityCreateAliasRequestFromJSONTyped(json, false);
}
function EntityCreateAliasRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'canonicalId': json['canonical_id'] == null ? undefined : json['canonical_id'],
        'customMetadata': json['custom_metadata'] == null ? undefined : json['custom_metadata'],
        'entityId': json['entity_id'] == null ? undefined : json['entity_id'],
        'id': json['id'] == null ? undefined : json['id'],
        'mountAccessor': json['mount_accessor'] == null ? undefined : json['mount_accessor'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}
function EntityCreateAliasRequestToJSON(json) {
    return EntityCreateAliasRequestToJSONTyped(json, false);
}
function EntityCreateAliasRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'canonical_id': value['canonicalId'],
        'custom_metadata': value['customMetadata'],
        'entity_id': value['entityId'],
        'id': value['id'],
        'mount_accessor': value['mountAccessor'],
        'name': value['name'],
    };
}

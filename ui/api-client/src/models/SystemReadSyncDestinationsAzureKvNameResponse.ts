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
 * @interface SystemReadSyncDestinationsAzureKvNameResponse
 */
export interface SystemReadSyncDestinationsAzureKvNameResponse {
    /**
     * List of key value pairs of information necessary to connect with the external system.
     * @type {object}
     * @memberof SystemReadSyncDestinationsAzureKvNameResponse
     */
    connectionDetails?: object;
    /**
     * Name of this secrets store.
     * @type {string}
     * @memberof SystemReadSyncDestinationsAzureKvNameResponse
     */
    name?: string;
    /**
     * List of key value pairs of Vault configuration options.
     * @type {object}
     * @memberof SystemReadSyncDestinationsAzureKvNameResponse
     */
    options?: object;
    /**
     * Error message if the purge job failed.
     * @type {string}
     * @memberof SystemReadSyncDestinationsAzureKvNameResponse
     */
    purgeError?: string;
    /**
     * Timestamp of when a purge job was initiated when deleting a destination.
     * @type {Date}
     * @memberof SystemReadSyncDestinationsAzureKvNameResponse
     */
    purgeInitiatedAt?: Date;
    /**
     * Type of this secrets store.
     * @type {string}
     * @memberof SystemReadSyncDestinationsAzureKvNameResponse
     */
    type?: string;
}

/**
 * Check if a given object implements the SystemReadSyncDestinationsAzureKvNameResponse interface.
 */
export function instanceOfSystemReadSyncDestinationsAzureKvNameResponse(value: object): value is SystemReadSyncDestinationsAzureKvNameResponse {
    return true;
}

export function SystemReadSyncDestinationsAzureKvNameResponseFromJSON(json: any): SystemReadSyncDestinationsAzureKvNameResponse {
    return SystemReadSyncDestinationsAzureKvNameResponseFromJSONTyped(json, false);
}

export function SystemReadSyncDestinationsAzureKvNameResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemReadSyncDestinationsAzureKvNameResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'connectionDetails': json['connection_details'] == null ? undefined : json['connection_details'],
        'name': json['name'] == null ? undefined : json['name'],
        'options': json['options'] == null ? undefined : json['options'],
        'purgeError': json['purge_error'] == null ? undefined : json['purge_error'],
        'purgeInitiatedAt': json['purge_initiated_at'] == null ? undefined : (new Date(json['purge_initiated_at'])),
        'type': json['type'] == null ? undefined : json['type'],
    };
}

export function SystemReadSyncDestinationsAzureKvNameResponseToJSON(json: any): SystemReadSyncDestinationsAzureKvNameResponse {
    return SystemReadSyncDestinationsAzureKvNameResponseToJSONTyped(json, false);
}

export function SystemReadSyncDestinationsAzureKvNameResponseToJSONTyped(value?: SystemReadSyncDestinationsAzureKvNameResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'connection_details': value['connectionDetails'],
        'name': value['name'],
        'options': value['options'],
        'purge_error': value['purgeError'],
        'purge_initiated_at': value['purgeInitiatedAt'] == null ? undefined : ((value['purgeInitiatedAt']).toISOString()),
        'type': value['type'],
    };
}


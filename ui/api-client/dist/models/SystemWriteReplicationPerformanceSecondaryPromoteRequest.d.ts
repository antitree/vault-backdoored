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
 *
 * @export
 * @interface SystemWriteReplicationPerformanceSecondaryPromoteRequest
 */
export interface SystemWriteReplicationPerformanceSecondaryPromoteRequest {
    /**
     * Set to true if the cluster should be promoted despite replication being in an error state. This could mean some data was not replicated to the secondary
     * @type {boolean}
     * @memberof SystemWriteReplicationPerformanceSecondaryPromoteRequest
     */
    force?: boolean;
    /**
     * The address the secondary cluster should connect to. Defaults to the primary's cluster address.
     * @type {string}
     * @memberof SystemWriteReplicationPerformanceSecondaryPromoteRequest
     */
    primaryClusterAddr?: string;
}
/**
 * Check if a given object implements the SystemWriteReplicationPerformanceSecondaryPromoteRequest interface.
 */
export declare function instanceOfSystemWriteReplicationPerformanceSecondaryPromoteRequest(value: object): value is SystemWriteReplicationPerformanceSecondaryPromoteRequest;
export declare function SystemWriteReplicationPerformanceSecondaryPromoteRequestFromJSON(json: any): SystemWriteReplicationPerformanceSecondaryPromoteRequest;
export declare function SystemWriteReplicationPerformanceSecondaryPromoteRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemWriteReplicationPerformanceSecondaryPromoteRequest;
export declare function SystemWriteReplicationPerformanceSecondaryPromoteRequestToJSON(json: any): SystemWriteReplicationPerformanceSecondaryPromoteRequest;
export declare function SystemWriteReplicationPerformanceSecondaryPromoteRequestToJSONTyped(value?: SystemWriteReplicationPerformanceSecondaryPromoteRequest | null, ignoreDiscriminator?: boolean): any;

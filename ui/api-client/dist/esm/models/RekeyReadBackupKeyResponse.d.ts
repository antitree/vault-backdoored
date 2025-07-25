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
 * @interface RekeyReadBackupKeyResponse
 */
export interface RekeyReadBackupKeyResponse {
    /**
     *
     * @type {object}
     * @memberof RekeyReadBackupKeyResponse
     */
    keys?: object;
    /**
     *
     * @type {object}
     * @memberof RekeyReadBackupKeyResponse
     */
    keysBase64?: object;
    /**
     *
     * @type {string}
     * @memberof RekeyReadBackupKeyResponse
     */
    nonce?: string;
}
/**
 * Check if a given object implements the RekeyReadBackupKeyResponse interface.
 */
export declare function instanceOfRekeyReadBackupKeyResponse(value: object): value is RekeyReadBackupKeyResponse;
export declare function RekeyReadBackupKeyResponseFromJSON(json: any): RekeyReadBackupKeyResponse;
export declare function RekeyReadBackupKeyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RekeyReadBackupKeyResponse;
export declare function RekeyReadBackupKeyResponseToJSON(json: any): RekeyReadBackupKeyResponse;
export declare function RekeyReadBackupKeyResponseToJSONTyped(value?: RekeyReadBackupKeyResponse | null, ignoreDiscriminator?: boolean): any;

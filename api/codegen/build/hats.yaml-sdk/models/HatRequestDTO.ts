/* tslint:disable */
/* eslint-disable */
/**
 * Hat API
 * These endpoints are for the hat decorator API.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface HatRequestDTO
 */
export interface HatRequestDTO {
    /**
     * 
     * @type {Blob}
     * @memberof HatRequestDTO
     */
    body?: Blob;
}

export function HatRequestDTOFromJSON(json: any): HatRequestDTO {
    return HatRequestDTOFromJSONTyped(json, false);
}

export function HatRequestDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): HatRequestDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'body': !exists(json, 'body') ? undefined : json['body'],
    };
}

export function HatRequestDTOToJSON(value?: HatRequestDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'body': value.body,
    };
}


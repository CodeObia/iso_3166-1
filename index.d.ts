import {Country, CountryQuery} from './iso_3166-1';

/**
 * Get country by country name, ISO 3166-1 Alpha-2, ISO 3166-1 Alpha-3, ISO 3166-1 Numeric or official name
 *
 * @param {CountryQuery} CountryQuery
 * @returns {Country | null}
 */
export declare const get: (CountryQuery?: CountryQuery) => Country[] | Country | null;

declare const _default: {
    get: (CountryQuery?: CountryQuery) => Country | Country[] | null;
};
export default _default;


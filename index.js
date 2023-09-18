'use strict';

Object.defineProperty(exports, '__esModule', {value: true});
exports.get = void 0;

(async () => {
    const iso_3166_1 = await require('./iso_3166-1.json');
    /**
     Get country by ISO 3166-1 Alpha-2, ISO 3166-1 Alpha-3, ISO 3166-1 Numeric, country name, common name or official name
     *
     * @param {CountryQuery} CountryQuery
     * @returns {Country[] | Country | null}
     */
    exports.get = (CountryQuery = null) => {
        if (CountryQuery) {
            const match = iso_3166_1['3166-1'].find((country) => {
                let match = null;
                if (CountryQuery?.alpha_2) {
                    match = country?.alpha_2.toLowerCase() === CountryQuery.alpha_2.toLowerCase();
                    if (match) {
                        return match;
                    }
                }
                if (CountryQuery?.alpha_3) {
                    match = country?.alpha_3.toLowerCase() === CountryQuery.alpha_3.toLowerCase();
                    if (match) {
                        return match;
                    }
                }
                if (CountryQuery?.numeric) {
                    match = country?.numeric === CountryQuery.numeric;
                    if (match) {
                        return match;
                    }
                }
                if (CountryQuery?.name) {
                    match = country?.name.toLowerCase() === CountryQuery.name.toLowerCase();
                    if (match) {
                        return match;
                    }
                }
                if (CountryQuery?.common_name) {
                    match = country?.common_name === CountryQuery.common_name;
                    if (match) {
                        return match;
                    }
                }
                if (CountryQuery?.official_name) {
                    match = country?.official_name === CountryQuery.official_name;
                    if (match) {
                        return match;
                    }
                }
            });
            return match ? match : null;
        } else {
            return iso_3166_1['3166-1']
        }
    };

    exports.default = {
        get: exports.get,
    };
})();

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
                if (country?.alpha_2 && CountryQuery?.alpha_2) {
                    match = country.alpha_2.trim().toLowerCase() === CountryQuery.alpha_2.trim().toLowerCase();
                    if (match) {
                        return match;
                    }
                }
                if (country?.alpha_3 && CountryQuery?.alpha_3) {
                    match = country.alpha_3.trim().toLowerCase() === CountryQuery.alpha_3.trim().toLowerCase();
                    if (match) {
                        return match;
                    }
                }
                if (country?.numeric && CountryQuery?.numeric) {
                    match = Number(country.numeric) === Number(CountryQuery.numeric);
                    if (match) {
                        return match;
                    }
                }
                if (country?.name && CountryQuery?.name) {
                    match = country.name.trim().toLowerCase() === CountryQuery.name.trim().toLowerCase();
                    if (match) {
                        return match;
                    }
                }
                if (country?.common_name && CountryQuery?.common_name) {
                    match = country.common_name.trim().toLowerCase() === CountryQuery.common_name.trim().toLowerCase();
                    if (match) {
                        return match;
                    }
                }
                if (country?.official_name && CountryQuery?.official_name) {
                    match = country.official_name.trim().toLowerCase() === CountryQuery.official_name.trim().toLowerCase();
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

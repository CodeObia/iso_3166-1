# Countries iso-codes (iso-3166-1)

The list of countries and codes are downloaded from
https://salsa.debian.org/iso-codes-team/iso-codes/-/blob/main/data/iso_3166-1.json

> Get countries information with ISO 3166-1 alpha-2, ISO 3166-1 alpha-3 and ISO 3166-1 numeric, name and official name

## Installation

```console
$ npm i @mohammad231/iso_3166-1
```

## Usage

```js
import CountryISO from '@mohammad231/iso_3166-1';

// This will return the full countries list
CountryISO.get();

// You can pass multiple search critera, the tool will look and return the first match
// The priority of the search is alpha_2, alpha_3, numeric, name, common name and official_name
CountryISO.get({
    alpha_2: '', // ISO 3166-1 Alpha-2
    alpha_3: '', // ISO 3166-1 Alpha-3
    numeric: '', //ISO 3166-1 Numeric
    name: '', // Country name
    common_name: '', // Country common name
    official_name: '', // Official name
});
```

## Author(s)

- Mohammed Salem (CodeObia)

## License

This work is licensed under the [GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html). The license allows you to use and modify the work for personal and commercial purposes, but if you distribute the work you must provide users with a means to access the source code for the version you are distributing. Read more about the [GPLv3 at TL;DR Legal](<https://tldrlegal.com/license/gnu-general-public-license-v3-(gpl-3)>).

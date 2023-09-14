'use strict';

const fs = require('fs');
const https = require('https');

function loadCountries() {
    return new Promise((resolve, reject) => {
        https.get('https://salsa.debian.org/iso-codes-team/iso-codes/-/raw/main/data/iso_3166-1.json?inline=false', (res) => {
            let body = '';
            res.on('data', (chunk) => {
                body += chunk;
            });

            res.on('end', () => {
                try {
                    const iso_3166_1 = JSON.parse(body);
                    fs.writeFileSync(`${__dirname}/iso_3166-1.json`, JSON.stringify(iso_3166_1));
                    resolve(iso_3166_1);
                } catch (e) {
                    reject(e.message);
                }
            });
        });
    })
}

(async () => {
    await loadCountries();
})();

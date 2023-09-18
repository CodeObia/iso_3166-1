export interface Country {
    alpha_2: string;
    alpha_3: string;
    numeric: string;
    name: string;
    common_name?: string;
    official_name?: string;
    flag: string;
}
declare const countries: Country[];
export default countries;

export interface CountryQuery {
    alpha_2?: string;
    alpha_3?: string;
    numeric?: string;
    name?: string;
    common_name?: string;
    official_name?: string;
}

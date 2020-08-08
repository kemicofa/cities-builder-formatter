import { parseRawCSVData } from "./csv.ts";
import type { CityBuilder } from "./@types/city-builder.ts";

import { generateKey } from "./utils/cities-builder.utils.ts";

const path = Deno.args[0];

if(!path){
    throw new Error('Expected path to cities builder file');
}

const decoder = new TextDecoder("utf-8");
const rawData = decoder.decode(Deno.readFileSync(path));

// ignore the first line
const [,columns,...data] = parseRawCSVData(rawData);

const transformed: CityBuilder[] = data.map(row => row.reduce((acc, cur, i) => ({...acc, [columns[i]]: cur}), {})) as CityBuilder[];

// for each line generate a unique key
// there will be duplicates... but that's ok

const res = transformed
.filter(row => row.country && row.city && row.region)
.map(row => [generateKey(row), row]);

console.log(res);

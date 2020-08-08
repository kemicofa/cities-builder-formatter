import { parseRawCSVData } from "./csv.ts";
import type { CityBuilder } from "./@types/city-builder.ts";
console.log("running");
const path = Deno.args[0];

if(!path){
    throw new Error('Expected path to cities builder file');
}

const decoder = new TextDecoder("utf-8");
const rawData = decoder.decode(Deno.readFileSync(path));

// ignore the first line
const [,columns,...data] = parseRawCSVData(rawData);

const transformed: CityBuilder[] = data.map(row => row.reduce((acc, cur, i) => ({...acc, [columns[i]]: cur}), {})) as CityBuilder[];

console.log(transformed.filter(({areaCode}) => Boolean(areaCode)));

import { CityBuilder } from "../@types/city-builder.ts";

export function generateKey(entry: CityBuilder): string {
    return `${entry.country}:${entry.region}:${entry.city}`.toLowerCase();
}
export function parseRawCSVData(raw: string): string[][] {
    return raw.split('\n').map(row => row.split(/[,;]/g));
}
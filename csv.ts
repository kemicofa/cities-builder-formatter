export function parseRawCSVData(raw: string): string[][] {
    return raw.replace(/"/g, '').split('\n').map(row => row.split(/[,;]/g));
}
export function calculateYears(startDate: Date): number {
    const diffMs = Date.now() - startDate.getTime();
    const ageDt = new Date(diffMs);
    return Math.abs(ageDt.getUTCFullYear() - 1970);
}

export function numberToWords(num: number, lang: 'en' | 'es'): string {
    const wordsEn = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty-one', 'twenty-two', 'twenty-three', 'twenty-four', 'twenty-five', 'twenty-six', 'twenty-seven', 'twenty-eight', 'twenty-nine', 'thirty'];
    const wordsEs = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte', 'veintiuno', 'veintidós', 'veintitrés', 'veinticuatro', 'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve', 'treinta'];

    if (num >= 0 && num <= 30) {
        return lang === 'en' ? wordsEn[num] : wordsEs[num];
    }
    return num.toString();
}

export const birthDate = new Date(1997, 11, 30); // Dec 30, 1997
export const itStartDate = new Date(2015, 1, 1); // Feb 1, 2015
export const webDevStartDate = new Date(2017, 1, 1); // Feb 1, 2017

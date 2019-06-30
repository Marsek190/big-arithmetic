/**
 * Example: addition('22', '99').then(console.log).catch(console.error);
 * @param {String} a - first value
 * @param {String} b - second value
 * @returns {Promise<String>} Promise<string>
 */
async function addition(a, b) {
    if (typeof a !== 'string' || typeof b !== 'string') {
        throw new TypeError(`Parameter ${a} or ${b} must be string's instance.`);
    }
    if (!a || !b) {
        throw new Error(`Parameter ${a} or ${b} must be defined.`);
    }
    const re = /^\d+$/;
    if (!re.test(a) || !re.test(b)) {
        throw new Error(`Parameter ${a} or ${b} must be non-negative integers.`);
    }
    return ((a, b) => {
        let result = '';
        let added = 0;
        while (a.length !== 0 || b.length !== 0 || added !== 0) {
            const sumOfTails = parseInt(a.pop() || '0') + parseInt(b.pop() || '0') + added;
            added = (sumOfTails > 9) ? 1 : 0;
            result += (added !== 0) ? sumOfTails % 10 : sumOfTails;
        }
        return [...result].reverse().join('');
    })(a.split(''), b.split(''));
}

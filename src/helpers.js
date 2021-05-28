

const numberFormatter = Intl.NumberFormat('en-GB', {maximumFractionDigits:2});
const dateFormatter = new Intl.DateTimeFormat('en-GB', {dateStyle: 'full', timeStyle: 'long'});

const nullCheck = (data, valueWhenNull = '-', callback) => !data ? '-' : callback(data);
const numberFormat = (number) => isNaN(number) ? '-' : nullCheck(number, '-', () => numberFormatter.format(number));
const dateFormat = (date) => String(new Date(date)) === 'Invalid Date' ? '-' : nullCheck(date, '-', () => dateFormatter.format(new Date(date)));

export {numberFormat, dateFormat, nullCheck}
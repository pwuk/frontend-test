import {numberFormat, dateFormat, nullCheck} from './helpers';

describe("numberformat functon ", ()=>{

    test("valid number", ()=>{
        expect(numberFormat(1000.10)).toBe("1,000.1");
        expect(numberFormat(1000000000)).toBe("1,000,000,000");
        expect(numberFormat(null)).toBe("-");
        expect(numberFormat("text")).toBe("-");
    });


})
describe("dateformat functon ", ()=>{

    test("valid date", ()=>{
        expect(dateFormat(new Date(2021,5,1,17,30))).toBe("01/06/2021");
        expect(dateFormat("invalid data")).toBe("-");
    });

})
import { generateRawOtp } from "./util";
import { expect } from "chai";

describe('Util functions test',()=>{
    it('generateRawOtp should return some random number of 4 didgit in string format',()=>{
        
        expect(generateRawOtp()).not.to.be.undefined;
        expect(generateRawOtp().length).eq(4);

    })
});
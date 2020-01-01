import { OTPGenerator } from "./sendotplink";

describe('Hello function', () => {
    
    let otpgenerator:OTPGenerator;

    beforeEach('before all test',()=>{
        otpgenerator = new OTPGenerator();
    })

    it('should return hello world', () => {
        // otpgenerator.sendOtp(true);
    });
});
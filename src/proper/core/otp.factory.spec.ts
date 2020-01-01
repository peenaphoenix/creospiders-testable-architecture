import { OTPFactory } from "./otp.factory"
import {expect} from 'chai'
import { SMSOtpSender } from "../strategy/sms.optsender";
import { EmailOtpSender } from "../strategy/email.otpsender";

describe('Unit testing otp factory class',()=>{

    let factory: OTPFactory;

    beforeEach(()=>{
        factory = OTPFactory.getInstance();
    });

    it('should getInstance method provides the instance of OTPFactory',()=>{
        expect(OTPFactory.getInstance()).instanceOf(OTPFactory);
    })

    it('should getInstance return the object',()=>{
        expect(OTPFactory.getInstance()).not.undefined;
    })

    it('getGenerator should return the generator object for various configuration option',()=>{

        expect(OTPFactory.getInstance().getGenerator('sms')).instanceOf(SMSOtpSender);
        expect(OTPFactory.getInstance().getGenerator('email')).instanceOf(EmailOtpSender);
        expect(OTPFactory.getInstance().getGenerator('')).to.be.null;

    })

})
import { SMSOtpSender } from "../strategy/sms.optsender";
import { EmailOtpSender } from "../strategy/email.otpsender";
import { generateRawOtp } from "./util";
import { SecurityManager } from "./securityManager";
import { IOTPGenerator } from "../strategy/otp-generator.base";

export class OTPFactory{

    private static instance: OTPFactory;

    private constructor(){
        // defined to make the constructor private
    }

    public static getInstance(): OTPFactory {
        if(!this.instance) this.instance = new OTPFactory();
        return this.instance
    }

    getGenerator(mode: String): IOTPGenerator{
        switch(mode){
            case 'sms': return new SMSOtpSender();
            case 'email': return  new EmailOtpSender();
            default: return null;
        }
    }
}


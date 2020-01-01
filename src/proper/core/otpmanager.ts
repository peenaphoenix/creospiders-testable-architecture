import { OTPFactory } from "./otp.factory";
import { rejects } from "assert";
import { resolve } from "url";

export class OtpManager{
    
    private static instance: OtpManager;
    otpfactory: OTPFactory;

    private constructor(){
        this.otpfactory = OTPFactory.getInstance();
    }

    public static getInstance(): OtpManager {
        if(!this.instance) this.instance = new OtpManager();
        return this.instance
    }

    sendOtp(config:{
        number: String,
        email: String,
        option: String
    }): Promise<boolean> {
        return new Promise<boolean>((resolve,reject)=>{
            try{
                if(config.option === 'email') {

                    const generator = this.otpfactory.getGenerator('email');
                    generator.send(generator.generateOTP(),{
                        number: config.number
                    }).then(resolve).catch(reject);

                } else if(config.option === 'sms') {

                    const generator = this.otpfactory.getGenerator('sms');
                    generator.send(generator.generateOTP(),{
                        number: config.number
                    }).then(resolve).catch(reject);

                } else if(config.option === 'both') {
                    
                    let generator = this.otpfactory.getGenerator('email');
                    generator.send(generator.generateOTP(),{
                        number: config.number
                    }).then(resolve).catch(reject);
        
                    generator = this.otpfactory.getGenerator('sms');
                    generator.send(generator.generateOTP(),{
                        number: config.number
                    }).then(resolve).catch(reject);
        
                } else {
                    throw new Error('Wrong configuration, option should either be "sms" | "email" | "both"')
                }
            } catch(exception){
                console.error(exception)
                reject(false);
            }  
        });
        
    }


}
import { OtpManager } from "./otpmanager";
import { createSandbox,SinonSandbox } from "sinon";
import { OTPFactory } from "./otp.factory";
import { expect } from "chai";

describe('Testing OtpManager',()=>{

    let otpManager: OtpManager;
    let factory: OTPFactory;
    let sinonSandbox: SinonSandbox;
    let config = {
        number:'9486408697',
        email:'h.m.pran',
        option:'both'
    }

    beforeEach(()=>{
        otpManager = OtpManager.getInstance();
        factory = OTPFactory.getInstance();
        sinonSandbox = createSandbox();
    })

    it('sendOtp should send the sms and return true', async ()=>{

        sinonSandbox.stub(factory,'getGenerator').returns({
            generateOTP:()=>{return 'otp'},
            send:(otp: String, config: {
                number?: String,
                email?: String,
            })=>{
                return new Promise<boolean>((resolve,reject)=>{
                    resolve(true);
                })
            }
        })
        config.option = 'sms'
        expect(await otpManager.sendOtp(config)).eq(true);
    });

    it('sendOtp should send the email and return true', async ()=>{

        sinonSandbox.stub(factory,'getGenerator').returns({
            generateOTP:()=>{return 'otp'},
            send:(otp: String, config: {
                number?: String,
                email?: String,
            })=>{
                return new Promise<boolean>((resolve,reject)=>{
                    resolve(true);
                })
            }
        })
        config.option = 'email'
        expect(await otpManager.sendOtp(config)).eq(true);
    });

    it('sendOtp should send the sms & email and return true', async ()=>{

        sinonSandbox.stub(factory,'getGenerator').returns({
            generateOTP:()=>{return 'otp'},
            send:(otp: String, config: {
                number?: String,
                email?: String,
            })=>{
                return new Promise<boolean>((resolve,reject)=>{
                    resolve(true);
                })
            }
        })
        config.option = 'both'
        expect(await otpManager.sendOtp(config)).eq(true);
    });

    afterEach(()=>{
        sinonSandbox.restore();
    })
})
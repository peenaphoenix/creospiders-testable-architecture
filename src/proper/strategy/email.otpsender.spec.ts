import { createTransport } from "nodemailer";
import { createSandbox, SinonSandbox, stub } from "sinon";
import Mail = require("nodemailer/lib/mailer");
import { EmailOtpSender } from "./email.otpsender";
import { expect } from "chai";
import { SecurityManager } from "../core/securityManager";
import * as util from "../core/util";

describe('Email sender test',()=>{

    let transporter: Mail = null;
    let instanceToTest: EmailOtpSender = null;
    let sinonSandbox: SinonSandbox = null;

    beforeEach(()=>{
        transporter = createTransport({
            service:'gmail',
            auth:{
                user:'h.m.pranavkumar@gmail.com',
                pass:'****'
            }
        });

        sinonSandbox = createSandbox();

        // const stub = sinonSandbox.stub();
        // stub.callsFake(()=>{
        //     console.log("I am getting called")
        //     return "1234"
        // });
        // require.cache[ require.resolve( "F:\\Creospiders\\blog work\\workspace\\typescript-starter\\src\\proper\\core\\util" ) ] = {
        //     exports: stub
        // } as NodeModule;

        instanceToTest = new EmailOtpSender();
        sinonSandbox.stub(instanceToTest,"getTransporter").returns(transporter);

    })

    it('Should return status as sent if the email is success',()=>{
        sinonSandbox.stub(transporter,"sendMail").yields(null,"data sent");
        instanceToTest.send("otpText",{email:'sample@gmail.com'}).then((information)=>{
            console.log(information);
            expect(information.status).eq('sent');
            expect(information.info).eq('data sent');
        });
    })

    it('Should return error if email is not sent successfully',()=>{
        sinonSandbox.stub(transporter,"sendMail").yields("email server not found",null);
        instanceToTest.send("otpText",{email:'sample@gmail.com'}).catch((error)=>{
            expect(error).eq("email server not found");
        });
    })

    it('generateOTP() method should return the encrypted OTP',()=>{
        sinonSandbox.stub(util,"generateRawOtp").callsFake(()=>{
            return "1234"
        });
        let encryptedOtp:string  = instanceToTest.generateOTP() as any;
        expect(encryptedOtp).not.be.null;
        expect(encryptedOtp).not.eq("1234");
        expect(SecurityManager.getInstance().decrypt(encryptedOtp)).eq("1234");
    })

    it('getTransporter() method should return the Mail object',()=>{
        instanceToTest.getTransporter();
        expect(instanceToTest.getTransporter()).not.be.null;
        expect(instanceToTest.getTransporter()).be.instanceOf(Mail);
         
    })

})
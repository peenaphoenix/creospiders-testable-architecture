import { randomBytes,createCipher } from "crypto";
import { createTransport } from "nodemailer";


export class OTPGenerator{

    algoritm = 'aes-256-cbc';
    key: any;
    iv: any;

    constructor(){
        this.key = randomBytes(32);
        this.iv = randomBytes(16);
    }

    sendOtp(isEmail:boolean){
        if(isEmail){
            // generate a random number of 4 digits
            const otp = Math.floor(1000+(9999-1000)*Math.random());
            let cipher = createCipher(this.algoritm,this.key);
            let encryptedOtp = cipher.update(''+otp);
            encryptedOtp = Buffer.concat([encryptedOtp, cipher.final()]);
            console.log(encryptedOtp.toString('hex'));

            // create a transporter for the mail 
            let transporter = createTransport({
                service:'gmail',
                auth:{
                    user:'h.m.pranavkumar@gmail.com',
                    pass:'*******'
                }
            });

            let mailOptions = {
                from:'h.m.pranavkumar@gmail.com',
                to:'sample@gmail.com',
                subject:'Sending the email using the node emailer in the node js code',
                text:'Hello this is the test mail from the code'
            }

            transporter.sendMail(mailOptions,(error, info)=>{
                console.log(error || info);
            })
        } else {
            // Code to send the sms otp 
        }
    }
}
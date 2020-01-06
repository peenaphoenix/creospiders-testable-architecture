import { createTransport } from "nodemailer";
import { IOTPGenerator } from "./otp-generator.base";


export class EmailOtpSender extends IOTPGenerator{

    getTransporter(){
        return createTransport({
            service:'gmail',
            auth:{
                user:'email@gmail.com',
                pass:'*****'
            }
        });
    }

    send(otp: String, {email}: {
        number?: String,
        email: String,
    }): Promise<any> {
        return new Promise<any>((resolve,reject)=>{

            let transporter = this.getTransporter();
    
            let mailOptions = {
                from:'h.m.pranavkumar@gmail.com',
                to: '' + email,
                subject:'Sending the email using the node emailer in the node js code',
                text:'OTP for the transaction is ' + otp
            }
    
            transporter.sendMail(mailOptions,(error, info)=>{
                if(error) reject(error);
                else resolve({
                    status:'sent',
                    info
                });
            })
        });
        
    }

}
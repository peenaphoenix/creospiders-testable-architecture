import { createTransport } from "nodemailer";
import { IOTPGenerator } from "./otp-generator.base";


export class EmailOtpSender extends IOTPGenerator{

    send(otp: String, {number='',email}: {
        number: String,
        email: String,
    }): Promise<boolean> {
        return new Promise<boolean>((resolve,reject)=>{
            let transporter = createTransport({
                service:'gmail',
                auth:{
                    user:'h.m.pranavkumarwe@gmail.com',
                    pass:'*******'
                }
            });
    
            let mailOptions = {
                from:'h.m.pranavkumar@gmail.com',
                to: '' + email,
                subject:'Sending the email using the node emailer in the node js code',
                text:'OTP for the transaction is ' + otp
            }
    
            transporter.sendMail(mailOptions,(error, info)=>{
                if(error) reject(error);
                else resolve(info);
            })
        });
        
    }

}
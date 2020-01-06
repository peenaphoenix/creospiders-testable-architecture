import { IOTPGenerator } from "./otp-generator.base";

export class SMSOtpSender extends IOTPGenerator{

    send(otp: String, {number}:{
        number: String,
        email?: String,
    }): Promise<boolean> {
        console.log(number,otp)
        return new Promise((resolve,reject)=>{
            reject("Method not implemented")
        })
    }
}
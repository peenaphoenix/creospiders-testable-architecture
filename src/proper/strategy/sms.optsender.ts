import { IOTPGenerator } from "./otp-generator.base";

export class SMSOtpSender extends IOTPGenerator{

    send(otp: String, {number='',email=''}:{
        number: String,
        email: String,
    }): Promise<boolean> {
        console.log(number,email,otp)
        throw new Error("Method not implemented.");
    }
}
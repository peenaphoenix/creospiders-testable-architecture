import { generateRawOtp } from "../core/util";
import { SecurityManager } from "../core/securityManager";

export abstract class IOTPGenerator{

    generateOTP():String {
        const otp = generateRawOtp();
        return SecurityManager.getInstance().encrypt(otp);
    }

    abstract send(otp: String, config: {
        number?: String,
        email?: String,
    }):Promise<boolean>
}
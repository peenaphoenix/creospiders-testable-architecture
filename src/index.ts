import { OtpManager } from "./proper/core/otpmanager";
import { OTPGenerator } from "./improper/sendotplink"

// Proper method invocation
const otpManager: OtpManager = OtpManager.getInstance();
otpManager.sendOtp({
    number:'9876543210',
    email:'h.m.pranavkumar123@gmail.com',
    option:'email'
}).then((success)=>{
    console.log("is Success = ", success);
});

// Improper method invocation
let otpGenerator = new OTPGenerator();
otpGenerator.sendOtp(true)





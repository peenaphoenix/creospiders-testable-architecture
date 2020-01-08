import { OtpManager } from "./proper/core/otpmanager";
import { OTPGenerator } from "./improper/sendotplink"

// Proper method invocation
const otpManager: OtpManager = OtpManager.getInstance();
otpManager.sendOtp({
    number:'9486408697',
    email:'h.m.pranavkumar123@gmail.com',
    option:'email'
}).then((success)=>{
    console.log("is Success = ", success);
});

// Improper method invocation
let otpGenerator = new OTPGenerator();
otpGenerator.send(true)





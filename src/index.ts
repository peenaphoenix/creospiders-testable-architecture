import { OtpManager } from "./proper/core/otpmanager";

const otpManager: OtpManager = OtpManager.getInstance();
otpManager.sendOtp({
    number:'9486408697',
    email:'h.m.pranavkumar@gmail.com',
    option:'sms'
}).then((success)=>{
    console.log("is Success = ", success);
});





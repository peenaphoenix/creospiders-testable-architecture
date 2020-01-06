import { SMSOtpSender } from "./sms.optsender";
import { expect } from "chai";

describe('SMS sender test',()=>{

    let instanceTotest: SMSOtpSender = null;

    beforeEach(()=>{
        instanceTotest = new SMSOtpSender();
    });

    it('Send should get rejected saying "Method not implemented"',()=>{
        instanceTotest.send("otpText",{number:'9486408697'}).catch((error)=>{
            expect(error).eq("Method not implemented");
        });
    });

});
import { SecurityManager } from "./securityManager";
import { expect } from "chai";

describe('Test the security manager for its functionalities',()=>{

    let instance: SecurityManager;

    beforeEach(()=>{
        instance = SecurityManager.getInstance();
    });

    it('encrypt and decrypt should work properly',()=>{
        let textToEncrypr = "Sample test text";
        expect(instance.decrypt(instance.encrypt(textToEncrypr))).eq(textToEncrypr);
    });
})
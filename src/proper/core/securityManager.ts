import { createCipher, randomBytes, createDecipher } from "crypto";
export class SecurityManager{

    key: any;
    algoritm = 'aes-256-cbc';

    private static instance: SecurityManager;

    public static getInstance(): SecurityManager{
        if(!this.instance) this.instance = new SecurityManager();
        return this.instance;
    }

    private constructor(){
        this.key = randomBytes(32);
    }

    encrypt(intext: String){
        let cipher = createCipher(this.algoritm,Buffer.from(this.key));
        let encryptedOtp = cipher.update(''+intext);
        encryptedOtp = Buffer.concat([encryptedOtp, cipher.final()]);
        return encryptedOtp.toString('hex');
    }

    decrypt(intext: string){
        // Yet to implement this method 
        let cipher = createDecipher(this.algoritm,Buffer.from(this.key));
        let decryptedText = cipher.update(Buffer.from(intext,'hex'));
        decryptedText = Buffer.concat([decryptedText,cipher.final()]);
        return decryptedText.toString();
    }
}

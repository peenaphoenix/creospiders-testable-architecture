export function generateRawOtp(){
    return '' + Math.floor(1000+(9999-1000)*Math.random());
}
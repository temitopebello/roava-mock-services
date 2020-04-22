import { Context, randomString } from '../../utils'

export const otp = {
    async sendOtp(parent, { querier}, ctx: Context) {
        const code = randomString(6, '0123456789'); 

        const otp = await ctx.prisma.createOtp({ code, querier });
    
        return {
                    isSent: otp ? true: false,
                    message: otp ? 'Successful': 'Could not create otp',
                    code: otp.code,
                };
        
      },

    async verifyOtp(parent, {code, querier}, ctx: Context) {
        const otp = await ctx.prisma.otp({code});

        if (otp) {
            const createdDate = new Date(otp.createdAt); 
            const expirationDate =  new Date(createdDate.getTime() + (1000 * 60 * 3));
            const currentDate = new Date();

            console.log(createdDate);
            console.log(expirationDate);
            console.log(currentDate);

            return {
                isValid: currentDate < expirationDate ? true: false,
                message: currentDate < expirationDate ? 'Successful': 'Otp Expired'
            }
        }

        return {
            isValid: otp ? true: false,
            message: otp ? 'Successful': 'Invalid Otp'
        }
        
    }
}
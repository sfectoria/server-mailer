import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async mailForgotPassword(email: string, name: string) {
    let result;
    try {
      result = await this.mailerService.sendMail({
        to: email,
        from: 'no-reply@sfectoria.com',
        subject: 'Test Mailer ✔',
        text: 'welcome',
        html: `<h1>welcome</h1><p>${name}</p>`,
      });
      console.log(result);
      console.log('==Result==');
      return result;
    }
    
    catch (error) {
      console.log(error);
      console.log('==Error==');
    }

 
  }
}
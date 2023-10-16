import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async mailNoRelpy(email: string, name: string) {
    let result;
    try {
      result = await this.mailerService.sendMail({
        to: email,
        from: 'no-reply@sfectoria.com',
        subject: 'Thank You for Contacting Sfactoria',
        text: 'This is a fallback text for email clients that do not support HTML.',
        html: `<h1>Welcome</h1>
              <p>${name},</p>
              <p>Thank you for reaching out to Sfactoria. We appreciate your interest and the time you've taken to get in touch with us. Your message is important to us, and we are eager to assist you.</p>
              <p>Please note that your email has been received, and we will respond as soon as possible.</p>`
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
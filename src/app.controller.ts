import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly mail: MailService,
  ) {}


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Post('mail-no-reply')
  sendMail(@Body() body: createMailDto) {
    return this.mail.mailNoRelpy(body.email,body.name);
  }



}

type createMailDto = {
  email: string;
  name: string;
};

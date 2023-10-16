import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'ssl0.ovh.net',
        port: 465,
        secure: true,
        auth: {
          user: 'no-reply@sfectoria.com',
          pass: '$Sfect0ria@2025',
        },
      },
      defaults: {
        from: 'no-reply@sfectoria.com',
      },
      template: {
        dir: __dirname + '/templates',
        adapter: new PugAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
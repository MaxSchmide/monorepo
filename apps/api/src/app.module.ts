import { Module } from '@nestjs/common'
import { APP_PIPE } from '@nestjs/core'
import { ZodValidationPipe } from 'nestjs-zod'
import { AppConfigModule } from './config/config.module'
import { PrismaModule } from './database/prisma.module'
import { GraphqlModule } from './graphql/graphql.module'

@Module({
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
  imports: [PrismaModule, GraphqlModule, AppConfigModule],
})
export class AppModule {}

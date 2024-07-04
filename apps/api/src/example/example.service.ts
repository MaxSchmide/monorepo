import { Injectable } from '@nestjs/common'
import { BaseModel } from '@prisma/client'
import { PrismaService } from 'src/database/prisma.service'

@Injectable()
export class ExampleService {
  constructor(private readonly prisma: PrismaService) {}

  findMany = (): Promise<BaseModel[]> => {
    return this.prisma.baseModel.findMany()
  }
}

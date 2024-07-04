import { Field, ID, ObjectType } from '@nestjs/graphql'
import { BaseModelId } from '@prisma/client'

@ObjectType('Example')
export class ExampleModel {
  @Field(() => ID)
  id!: BaseModelId
}

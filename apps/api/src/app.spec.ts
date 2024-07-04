import { Test, TestingModule } from '@nestjs/testing'
import { AppModule } from 'src/app.module'

describe('AppModule', () => {
  let module: TestingModule

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()
  })

  it('starts with current dependencies', () => {
    expect(module).toBeDefined()
  })
})

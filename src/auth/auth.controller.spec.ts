import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service'; // import AuthService

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        // provide a mock implementation of AuthService
        {
          provide: AuthService,
          useValue: {
            // mock whatever methods AuthController calls on AuthService
            // for example, if AuthController calls authService.login(), you might do:
            login: jest.fn().mockResolvedValue('fakeToken'),
          },
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

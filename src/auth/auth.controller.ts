import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body() body: { message: string; signature: string; address: string },
  ) {
    const { message, signature, address } = body;
    const isValid = await this.authService.verifySignature(
      message,
      signature,
      address,
    );

    if (!isValid) {
      return { error: 'Invalid signature' };
    }

    return this.authService.login(address);
  }
}

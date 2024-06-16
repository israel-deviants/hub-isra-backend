import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AppConfigModule } from '../config/config.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [AppConfigModule],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}

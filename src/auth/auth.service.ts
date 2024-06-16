import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ethers } from 'ethers';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async verifySignature(
    message: string,
    signature: string,
    address: string,
  ): Promise<boolean> {
    const signerAddress = ethers.verifyMessage(message, signature);
    return signerAddress.toLowerCase() === address.toLowerCase();
  }

  async login(address: string): Promise<{ access_token: string }> {
    const payload = { address };
    const access_token = this.jwtService.sign(payload, {
      expiresIn: '2w',
    });
    return { access_token };
  }
}

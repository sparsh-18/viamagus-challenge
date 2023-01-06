import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private configService: ConfigService,
        private jwtService: JwtService
    ){}

    async validateUser(username: string, pass: string): Promise<any> {
        const user_name = this.configService.get('username');
        const password = this.configService.get('password');
        
        const user = {
            username: user_name,
            password: password
        }

        if (user.username === username && password === pass) {
          const { password, ...result } = user;
          return result;
        }
        
        return null;
      }

    async login(user: any) {
        const payload = { username: user.username};
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    
}

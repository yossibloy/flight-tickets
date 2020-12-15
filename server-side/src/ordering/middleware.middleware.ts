import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class MiddlewareMiddleware implements NestMiddleware {
  constructor(private jwt: JwtService){}
  use(req: any, res: any, next: () => void) {
    const token = this.jwt.verify(req.headers.authorization)
    token ? next() : console.error("tokn not valide");
     }
  }


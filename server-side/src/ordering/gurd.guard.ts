import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class GurdGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate( context: ExecutionContext, ): boolean | Promise<boolean> | Observable<boolean> {

    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest().body.roles;
    console.log(request,roles,roles == request);
    
    return roles == request
  }
}

import { Controller, Get, Post, Body } from '@nestjs/common';

import { IMusic, IUser, Message } from '@existek/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }
  @Get('users')
  getUsers(): IUser[] {
    return this.appService.getUsers();
  }
  @Post('adduser')
  addUser(@Body() body: IUser) {
    return this.appService.addUser(body);
  }
  @Get('songs')
  getSongs(): IMusic[] {
    return this.appService.getSongs();
  }
}

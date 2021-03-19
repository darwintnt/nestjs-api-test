import { Controller, Get } from '@nestjs/common';

@Controller('posts')
export class PostController {
  @Get()
  getPost(): string {
    return 'esto es un múmero';
  }
}

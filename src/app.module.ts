import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';

import { TasksModule } from './modules/tasks/tasks.module';

@Module({
  imports: [
    TasksModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest-db'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

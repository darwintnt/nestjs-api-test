import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { Task } from './schemas/task.schema';
import { TasksService } from './tasks.service';


@Controller('tasks')
export class TasksController {

  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getTasks(): Promise<Task[]> {
    return this.tasksService.getTasks();
  }

  @Get(':taskId')
  getTask(@Param('taskId') taskId: string) {
    return this.tasksService.getTask(taskId);
  }

  @Post()
  createTask(@Body() task: TaskDto): Promise<Task> {
    return this.tasksService.createTask(task);
  }

  @Put(':taskId')
  updateTask(
    @Body() task: TaskDto,
    @Param('taskId') taskId,
  ): Promise<Task> {
    return this.tasksService.updateTask(task, taskId);
  }

  @Delete(':taskId')
  deleteTask(@Param('taskId') taskId): Promise<any> {
    return this.tasksService.deleteTask(taskId);
  }

}

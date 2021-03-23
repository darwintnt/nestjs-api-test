import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from './schemas/task.schema';
import { TaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {

  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async getTasks(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async getTask(taskId: string): Promise<Task> {
    return this.taskModel.findById(taskId);
  }

  async createTask(task: TaskDto): Promise<Task> {
    const createTask = new this.taskModel(task);
    return createTask.save();
  }

  async updateTask(task: TaskDto, taskId: string): Promise<Task> {
    return this.taskModel.findByIdAndUpdate(taskId, task, { new: true });
  }

  async deleteTask(taskId: string): Promise<Task> {
    return this.taskModel.findByIdAndRemove(taskId);
  }

}

import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskModel } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) {}

    @Get()
    getAllTasks(): TaskModel[] {
        return this.taskService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): TaskModel {
        return this.taskService.getTaskById(id);
    }

    @Post()
    createTask(@Body() data: CreateTaskDto): TaskModel {
        return this.taskService.createTask(data);
    }
}

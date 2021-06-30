import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskModel, TaskStatusEnum } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    private tasks: TaskModel[] = [];

    getAllTasks(): TaskModel[] {
        return this.tasks;
    }

    getTaskById(id: string): TaskModel {
        const task: TaskModel = this.tasks.find((item) => item.id === id);
        if (task) return task;
        throw new NotFoundException();
    }

    createTask(data: CreateTaskDto): TaskModel {
        const { title, description } = data;
        const task: TaskModel = {
            id: uuid(),
            title,
            description,
            status: TaskStatusEnum.OPEN,
        };

        this.tasks.push(task);
        return task;
    }
}

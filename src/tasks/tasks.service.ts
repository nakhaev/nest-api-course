import { Injectable } from '@nestjs/common';
import { TaskModel, TaskStatusEnum } from './task.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
    private tasks: TaskModel[] = [];

    getAllTasks(): TaskModel[] {
        return this.tasks;
    }

    createTask(title: string, description: string): TaskModel {
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

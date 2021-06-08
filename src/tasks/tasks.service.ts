import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    private tasks = [
        {
            name: 'foo',
            status: 'open',
        },
    ];

    getAllTasks() {
        return this.tasks;
    }
}

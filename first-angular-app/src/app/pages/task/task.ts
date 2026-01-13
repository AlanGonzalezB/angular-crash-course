import { Component, EventEmitter, Input, Output} from '@angular/core';
import { IndividualTask } from "./individual-task/individual-task";
import { TasksService } from './tasks.service';
import { DUMMY_TASKS } from '../../../../public/dummy-tasks'
import { NewTask } from "./new-task/new-task";
import { NewTaskType } from './task.type';

@Component({
  selector: 'app-task',
  imports: [IndividualTask, NewTask],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input() name?: string;
  @Input() userId!: string;
  @Input() newTask?: boolean;

 
  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId)

  }

  onNewTaskClick() {
    this.newTask = !this.newTask
  }


}

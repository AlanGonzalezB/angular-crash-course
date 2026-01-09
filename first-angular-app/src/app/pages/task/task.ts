import { Component, EventEmitter, Input, Output} from '@angular/core';
import { IndividualTask } from "./individual-task/individual-task";
import { DUMMY_TASKS } from '../../../../public/dummy-tasks'
import { NewTask } from "./new-task/new-task";

@Component({
  selector: 'app-task',
  imports: [IndividualTask, NewTask],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  tasks = DUMMY_TASKS
  @Input() name?: string;
  @Input() id?: string;
  @Input({required: true}) newTask!: boolean;

  get selectedUserTaks() {
    return this.tasks.filter((task) => task.userId === this.id)
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }

  onNewTaskClick(value: boolean) {
    this.newTask = value
  }
}

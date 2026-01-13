import { Component, EventEmitter, Input, Output, inject} from '@angular/core';
import { type TaskType } from '../task.type';
import { DatePipe } from '@angular/common';
import { Card } from "../../../shared/card/card";
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-individual-task',
  imports: [Card, DatePipe],
  templateUrl: './individual-task.html',
  styleUrl: './individual-task.css',
})
export class IndividualTask {
@Input() task!: TaskType;
private tasksSerice = inject(TasksService)


onCompleteTask() {
  this.tasksSerice.onCompleteTask(this.task.id)
  }


}

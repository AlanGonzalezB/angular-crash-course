import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type TaskType } from '../task.type';
@Component({
  selector: 'app-individual-task',
  imports: [],
  templateUrl: './individual-task.html',
  styleUrl: './individual-task.css',
})
export class IndividualTask {
@Input() task!: TaskType;
@Output() complete = new EventEmitter();


onCompleteTask() {
    this.complete.emit(this.task.id)
  }


}

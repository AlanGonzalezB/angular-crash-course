import { Component, EventEmitter, Output, Input } from '@angular/core';
import { type TaskType } from '../task.type';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Input() title?: string;
  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();
  @Input() task?: TaskType;

  onCancel() {
    console.log(this.title)
    this.cancel.emit(false)

  }

  onCreate() {
    console.log(this.task?.title)
    //this.create.emit(this.task)
  }

}

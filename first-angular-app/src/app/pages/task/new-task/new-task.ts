import { Component, EventEmitter, Output, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type TaskType } from '../task.type';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');
  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();

  onCancel() {
    this.cancel.emit()
  }

  onSubmit() {
    this.create.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    })
  }
}

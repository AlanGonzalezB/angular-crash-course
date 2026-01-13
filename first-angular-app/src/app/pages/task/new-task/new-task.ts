import { Component, EventEmitter, Output, Input, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskType } from '../task.type';
import { TasksService } from '../tasks.service';

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
  @Input({ required: true }) userId!: string;
  @Output() cancel = new EventEmitter();
  private tasksService = inject(TasksService)

  onCancel() {
    this.cancel.emit()
  }

  onSubmit() {
    this.tasksService.onAddTask({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDate()
    }, this.userId)

    
  this.onCancel()
  }

}

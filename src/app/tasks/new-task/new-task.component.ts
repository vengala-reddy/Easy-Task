import { Component, inject, input, output, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from './new-task.interface';
import { TasksService } from '../tasks.service';
import { User } from '../../user/user.interface';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  public user = input.required<User>();
  public close = output();
  // public add = output<NewTaskData>();
  public enteredTaskName: WritableSignal<string> = signal('');
  public enteredTaskSummary: WritableSignal<string> = signal('');
  public enteredTaskDueDate: WritableSignal<string> = signal('');
  private tasksService = inject(TasksService);

  public onCancel() {
    this.close.emit();
  }

  public onSubmit() {
    const taskName = this.enteredTaskName();
    const taskSummary = this.enteredTaskSummary();
    const taskDueDate = this.enteredTaskDueDate();
    // this.add.emit({
    //   taskName, taskSummary, taskDueDate
    // });
    this.tasksService.addTask({
      taskName, taskSummary, taskDueDate
    }, this.user());
    this.close.emit();
  }
}

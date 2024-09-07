import { Component, inject, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task } from '../task.interface';
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  public task = input.required<Task>();
  // public complete = output<string>();
  private tasksService = inject(TasksService);

  public onCompleteTask() {
    // this.complete.emit(this.task().id);
    this.tasksService.removeTask(this.task().id);
  }
}

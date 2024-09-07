import { Component, inject, Input } from '@angular/core';
import { User } from '../user/user.interface';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './new-task/new-task.interface';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input()  public user!: User;
  isAddingTask = false;
  private tasksService = inject(TasksService);

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.user!.id);
  }

  public onStartAddTask() {
    this.isAddingTask = true;
  }
  
  public onCloseAddTask() {
    this.isAddingTask = false;
  }
}

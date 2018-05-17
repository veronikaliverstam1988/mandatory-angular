import { Component, Input } from '@angular/core';

import { Task, StatusType } from '../constants';

@Component({
  selector: 'task-list',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {
  @Input () statusType: StatusType;
  tasks: Task[];

  constructor() {}

  ngOnInit() {
    this.tasks  = [
      {
        id: 1,
        status: StatusType.Completed,
        title: 'test title',
        description: 'desc'
      }
    ];
  }
  handleStatusChanged(ev) {

  }
}

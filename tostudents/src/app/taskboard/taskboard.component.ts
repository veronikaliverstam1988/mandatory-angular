import { Component } from '@angular/core';

@Component({
  selector: 'task-board',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent {
  private statusList = ['NotStarted', 'InProgress', 'Completed'];
  showForm = false;
  changeValueForm() {
    this.showForm = !this.showForm;
  }

  constructor() {}
  ngOnInit() {

  }
}

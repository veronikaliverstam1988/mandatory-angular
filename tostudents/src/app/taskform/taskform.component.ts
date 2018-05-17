import { Component, Input } from '@angular/core';
import { StatusType } from "../constants";


@Component({
  selector: 'task-form',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent {
  @Input() showForm;
  task = {title:null, description:null, status:StatusType['NotStarted']};

  constructor() {}
}

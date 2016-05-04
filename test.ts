import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-selector',
  templateUrl: 'my-selector.component.html',
})
@Routes([
  { path: '/hsad', component: 'TheComponent' },
  { path: '/asda', component: ${Component} }
])
export class MySelectorComponent implements OnInit {
  constructor() {  }

  ngOnInit() {}
}

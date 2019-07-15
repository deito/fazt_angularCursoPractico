import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.scss']
})
export class HolaMundoComponent implements OnInit {
  titulo = 'Welcome to Angular from hola-mundo component';
  constructor() { }

  ngOnInit() {
  }

}

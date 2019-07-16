import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /*
  title = 'fazt-angular6-app';
  users = ['ryan', 'joe', 'cameron', 'john', 'bruce'];
  activated = false;
  */
 name: string = 'Ryan Ray';
 age: number;
 address: {
   street: string;
   city: string;
 };
 hobbies: string[];

 constructor(){
   this.age = 28;
   this.address = {
     street: '221B Baker Street',
     city: 'London'
   };
   this.hobbies =  ['swimming', 'read', 'write'];
 }
}

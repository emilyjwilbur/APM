import { Component } from "@angular/core";

@Component({
  selector: "pm-root",
  template: `
  <nav class='navbar navbar-expand navbar-light bg-dark'>
  <a class='navbar-brand' style="padding:10px; color:white">{{pageTitle}}</a>
  <ul class='nav nav-pills'>
    <li><a class='nav-link'  routerLink='/welcome' style="color:white">Home</a></li>
    <li><a class='nav-link' routerLink='/products' style="color:white">Product List</a></li>
  </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
     
  `,
})
export class AppComponent {
  pageTitle: string = "Product Management";
}

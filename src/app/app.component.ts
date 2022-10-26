import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EvenBindingDemo';
 
public val:any;
  greet(event:any){
    this.val = "Hlo Kishore";
    
  }
  today: number = Date.now();
  temp1:string='My name is Kisore';
}


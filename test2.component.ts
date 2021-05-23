import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component{

  currentvalue:number;
  currentvalue1:number;

  insertion(value)
    {
     console.warn(value);
     this.currentvalue=value;
     this.currentvalue=this.currentvalue*0.25;
    }

    manager(value)
    {
     console.warn(value);
     this.currentvalue1=5000;
    }

    ceo(value)
    {
     console.warn(value);
     this.currentvalue1=10000;
    }

    

}

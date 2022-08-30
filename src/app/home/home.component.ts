import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userDetailsForm:any
  myFlagForSlideToggle!:any;
  constructor( private fb:FormBuilder, private service:ApiserviceService) { }

  ngOnInit(): void {
    this.userDetailsForm=this.fb.group({
      firstName:[''],
      lastName:['']
    });


    this.service.toggle.subscribe(a=>{
      console.log('test',a)

    this.myFlagForSlideToggle=a
     console.log(this.myFlagForSlideToggle,'test222')
      
    })

  }


  onSubmit(){ 
   {
      this.service.sendFormValue(this.userDetailsForm.value)
      console.log(this.userDetailsForm.value,'test')
      this.userDetailsForm.reset()
    }

    
   
  }

}

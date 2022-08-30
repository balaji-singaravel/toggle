import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './apiservice.service';
import { MatTableDataSource, } from '@angular/material/table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'serviceApp';
  displayedColumns: string[] = ['firstName', 'lastName'];
  dataSource: any;
  resultData:any=[];
  constructor (private getvaluService:ApiserviceService){ }
  ngOnInit(){
    this.getvaluService.formSubject.subscribe(data=>{
      console.log('subscribeData',data);
      if(data !=0){
        const formValue =data;
        this.resultData.push(formValue)
        console.log('table value',this.resultData)
        this.dataSource = new MatTableDataSource(this.resultData);
      }

    })
  }
  

}






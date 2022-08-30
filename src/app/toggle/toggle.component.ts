import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  constructor( private apiservice:ApiserviceService) { }

  ngOnInit(): void {
    
      
    
  }


}

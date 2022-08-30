import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiserviceService {
public formSubject= new BehaviorSubject(0);
// public getValue=this.formSubject.asObservable()

onOff= false;
public toggle = new BehaviorSubject<boolean>(this.onOff);
  constructor() { }


  sendFormValue(data:any){
    this.formSubject.next(data)
  }


  sendToggleValue(data:boolean){
    this.toggle.next(data)
  }
}

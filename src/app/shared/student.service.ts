import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private _studuentInfo = new Subject<any>();
  _studentInfo$ = this._studuentInfo.asObservable();

  constructor() { }

  studentInfo(student: any) {
    this._studuentInfo.next(student)
    
  }
}

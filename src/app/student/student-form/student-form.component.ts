import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  studentForm = new FormGroup({
    fname: new FormControl(''),
    email: new FormControl(''),
    contact: new FormControl('')
  });

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    //console.warn(this.studentForm.value);
    this.studentService.studentInfo(this.studentForm.value);
  }

}

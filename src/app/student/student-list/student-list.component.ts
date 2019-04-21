import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList = [];
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService._studentInfo$
      .subscribe(data => {
          this.studentList.push(data);
          console.log(data);
        }
      );

  }

}

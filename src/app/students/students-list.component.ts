import { Component, OnInit } from '@angular/core';

import { StudentsService } from './students.service';

import { Student } from './student.model';


@Component({
    templateUrl: './students-list.component.html'
})
export class StudentsListComponent implements OnInit {

    students: Student[];
    selectedStudent: Student;

    constructor(
        private studentsService: StudentsService
    ) { }

    ngOnInit(): void {
        this.getStudents();
    }

    getStudents(): void {

        this.studentsService.getStudents()
            .subscribe(
                    res => { this.students = res; },
                    err => { console.log(err); }
                );
    }

    handleRowClick(student: Student): void {
        this.selectedStudent = student;
    }

    closeDetailsCard(): void {
        this.selectedStudent = null;
    }

}

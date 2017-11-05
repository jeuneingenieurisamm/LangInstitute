import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StudentsService } from './students.service';

import { Student } from './student.model';


@Component({
    templateUrl: './students-list.component.html'
})
export class StudentsListComponent implements OnInit {

    students: Student[];
    selectedStudent: Student;

    constructor(
        private studentsService: StudentsService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.getStudents();
    }

    getStudents(): void {

        this.studentsService.getStudents()
                            .subscribe(
                                    (res) => { this.students = res; },
                                    (err) => { console.log(err); }
                                );

    }

    handleRowClick(student: Student): void {
        this.selectedStudent = student;
    }

    closeDetailsCard(): void {
        this.selectedStudent = null;
    }

    navigateToAddStudent(): void {
        this.router.navigate(['/students/add-student']);
    }

    navigateToUpdateStudent(): void {
        this.router.navigate(['/students/update-student/' , this.selectedStudent.id]);
    }

    deleteStudent(): void {

        this.studentsService.deleteStudent(this.selectedStudent.id)
                            .subscribe(
                                (res) => {console.log('Student deleted successfully');
                                          this.selectedStudent = null;
                                          this.getStudents(); },
                                (err) => {console.log(err); });

    }

}

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Student } from './student.model';
import { Course } from './../courses/course.model';

import { CoursesService } from './../courses/courses.service';
import { StudentsService } from './students.service';


@Component({
    templateUrl: './students-add.component.html'
})
export class StudentsAddComponent implements OnInit {

    availableCourses: Course[] = [];
    selectedCourses: Course[] = [];
    model: Student = new Student();
    addedStudent: Student = new Student();
    submitted = false;

    constructor(
        private coursesService: CoursesService,
        private studentsService: StudentsService,
        private location: Location
    ) {}

    ngOnInit(): void {

        this.getAvailableCourses();

    }

    getAvailableCourses(): void {

        this.coursesService.getCourses()
                           .subscribe(
                               (res) => {this.availableCourses = res; },
                               (err) => {console.log(err); }
                           );

    }

    checkedBox(course: Course , event: any): void {

        if (event.checked) {

            this.selectedCourses.push(course);

        } else if (!event.checked) {

            for (let i = 0 ; i < this.selectedCourses.length ; i++) {

                if (this.selectedCourses[i].id === course.id) {

                    this.selectedCourses.splice(i, 1);

                }

            }

        }

    }

    addStudent(): void {

        this.model.courses = this.selectedCourses;
        console.log(this.model);

        this.studentsService.addStudent(this.model)
                            .subscribe(
                                (res) => {this.addedStudent = res;
                                          this.submitted = true; },
                                (err) => {console.log(err); }
                            );

    }

    goBack(): void {

        this.location.back();

    }

    reset(): void {

        this.selectedCourses = [];
        this.model = new Student();
        this.addedStudent = new Student();
        this.submitted = false;

    }

}

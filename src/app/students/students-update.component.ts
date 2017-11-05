import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Student } from './student.model';
import { Course } from './../courses/course.model';

import { StudentsService } from './students.service';
import { CoursesService } from './../courses/courses.service';


@Component({
    templateUrl: './students-update.component.html'
})
export class StudentsUpdateComponent implements OnInit {

    model: Student = new Student();
    updatedStudent: Student = new Student();
    availableCourses: Course[] = [];
    selectedCourses: Course[] = [];
    submitted = false;

    constructor(
        private studentsService: StudentsService,
        private coursesService: CoursesService,
        private activatedRoute: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {

        this.getAvailableCourses();

        this.activatedRoute.params
                           .switchMap((params: Params) => this.studentsService.getStudentById(+params['id']))
                           .subscribe((res) => {this.model = res;
                                                this.selectedCourses = this.model.courses; });

    }

    getAvailableCourses(): void {

        this.coursesService.getCourses()
                           .subscribe(
                               (res) => {this.availableCourses = res; },
                               (err) => {console.log(err); }
                            );

    }

    searchCourse(course: Course): boolean {

        let bool = false;

        for (let i = 0 ; i < this.selectedCourses.length ; i++) {

            if (course.id === this.selectedCourses[i].id) {

                bool = true;

            }

        }

        return bool;

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

        console.log(this.selectedCourses);

    }

    updateStudent(): void {

        this.model.courses = this.selectedCourses;

        console.log(this.model);

        this.studentsService.updateStudent(this.model.id , this.model)
                            .subscribe(
                                (res) => {this.updatedStudent = res;
                                          this.submitted = true; },
                                (err) => {console.log(err); }
                            );

    }

    goBack(): void {

        this.location.back();

    }

    updateAgain(): void {

        this.submitted = false;
        this.model = this.updatedStudent;
        this.selectedCourses = this.model.courses;

    }

}

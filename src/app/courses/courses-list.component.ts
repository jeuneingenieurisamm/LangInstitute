import { Component , OnInit } from '@angular/core';

import { Course } from './course.model';

import { CoursesService } from './courses.service';

@Component({
    templateUrl: './courses-list.component.html'
})
export class CoursesListComponent implements OnInit {

    courses: Course[];
    selectedCourse: Course;

    constructor(
        private coursesService: CoursesService
    ) {}

    ngOnInit(): void {

        this.getCourses();

    }

    getCourses(): void {

        this.coursesService.getCourses()
                           .subscribe(
                               res => {this.courses = res; },
                               err => {console.log(err); }
                           );

    }

    handleRowSelect(course: Course): void {
        this.selectedCourse = course;
    }

    closeDetailCard(): void {
        this.selectedCourse = null;
    }

}

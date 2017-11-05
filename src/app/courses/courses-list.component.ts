import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from './course.model';

import { CoursesService } from './courses.service';

@Component({
    templateUrl: './courses-list.component.html'
})
export class CoursesListComponent implements OnInit {

    courses: Course[];
    selectedCourse: Course;

    constructor(
        private coursesService: CoursesService,
        private router: Router
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

    navigateToUpdateCourse(): void {

        this.router.navigate(['/courses/update-course' , this.selectedCourse.id]);

    }

    deleteCourse(): void {

        this.coursesService.deleteCourse(this.selectedCourse.id)
                           .subscribe(
                               (res) => {this.selectedCourse = null;
                                         this.getCourses();
                                         console.log('Course deleted successfully!'); },
                               (err) => {console.log(err); }
                           );

    }

    navigateToAddCourse(): void {

        this.router.navigate(['/courses/add-course']);

    }

}

import { CoursesService } from './courses.service';
import { Component } from '@angular/core';
import {Location } from '@angular/common';

import { Course } from './course.model';


const courseSessions = [
    {value: 'SUMMER' , view: 'Summer'},
    {value: 'WINTER' , view: 'Winter'},
    {value: 'SPRING' , view: 'Spring'},
    {value: 'AUTUMN' , view: 'Autumn'}
];

const courseLanguages = [
    {value: 'EN' , view: 'English'},
    {value: 'FR' , view: 'French'},
    {value: 'GR' , view: 'German'}
];

const courseLevels = ['A1' , 'A2' , 'B1' , 'B2' , 'C1' , 'C2'];

@Component({
    templateUrl: './courses-add.component.html'
})
export class CoursesAddComponent {

    sessions = courseSessions;
    levels = courseLevels;
    languages = courseLanguages;
    model: Course = new Course();
    addedCourse: Course = new Course();
    submitted = false;

    constructor(
        private coursesService: CoursesService,
        private location: Location
    ) {}

    addCourse(): void {

        console.log(this.model);

        this.coursesService.addCourse(this.model)
                           .subscribe(
                               (res) => {this.addedCourse = res;
                                         this.submitted = true; },
                               (err) => {console.log(err); }
                           );

    }

    goBack(): void {

        this.location.back();

    }

    reset(): void {

        this.submitted = false;
        this.model = new Course();
        this.addedCourse = new Course();

    }

}

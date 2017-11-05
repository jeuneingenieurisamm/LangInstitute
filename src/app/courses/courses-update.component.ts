import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { CoursesService } from './courses.service';

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
    templateUrl: './courses-update.component.html'
})
export class CoursesUpdateComponent implements OnInit {

    sessions = courseSessions;
    levels = courseLevels;
    languages = courseLanguages;
    model: Course = new Course();
    updatedCourse: Course = new Course();
    submitted = false;

    constructor(
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private coursesService: CoursesService
    ) {}

    ngOnInit(): void {

        this.activatedRoute.params
                           .switchMap((params: Params) => this.coursesService.getCourseById(+params['id']))
                           .subscribe((res) => {this.model = res; });

    }

    updateCourse(): void {

        console.log(this.model);

        this.coursesService.updateCourse(this.model.id , this.model)
                           .subscribe(
                               (res) => {this.updatedCourse = res;
                                         this.submitted = true; },
                               (err) => {console.log(err); }
                           );

    }

    goBack(): void {

        this.location.back();

    }

    reset(): void {

        this.model = this.updatedCourse;
        this.submitted = false;

    }

}

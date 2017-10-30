import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { Course } from './course.model';


@Injectable()
export class CoursesService {

    constructor(
        private http: Http
    ) {}

    getCourses(): Observable<Course[]> {

        const getCoursesUrl = 'http://localhost:3000/courses';

        return this.http.get(getCoursesUrl)
                        .map(this.extractData)
                        .catch(this.errorHandler);

    }

    private extractData(res: Response) {

        const data = res.json();
        return data;

    }

    private errorHandler(err: Response) {

        const errMsg = err.json();
        return Observable.throw(errMsg);

    }

}

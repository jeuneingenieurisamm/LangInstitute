import { Injectable } from '@angular/core';
import { Http , Response , Headers , RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { Course } from './course.model';


@Injectable()
export class CoursesService {

    private headers: Headers = new Headers({
        'Content-Type': 'application/json'
    });

    private options: RequestOptions = new RequestOptions({
        headers: this.headers
    });

    constructor(
        private http: Http
    ) {}

    getCourses(): Observable<Course[]> {

        const getCoursesUrl = 'http://localhost:3000/courses';

        return this.http.get(getCoursesUrl)
                        .map(this.extractData)
                        .catch(this.errorHandler);

    }

    getCourseById(id: number): Observable<Course> {

        const getCourseByIdUrl = 'http://localhost:3000/courses/';

        return this.http.get(getCourseByIdUrl + id)
                        .map(this.extractData)
                        .catch(this.errorHandler);

    }

    addCourse(course: Course): Observable<Course> {

        const addCourseUrl = 'http://localhost:3000/courses';
        const body = JSON.stringify(course);

        return this.http.post(addCourseUrl , body , this.options)
                        .map(this.extractData)
                        .catch(this.errorHandler);

    }

    updateCourse(id: number , course: Course): Observable<Course> {

        const updateCourseUrl = 'http://localhost:3000/courses/';
        const body = JSON.stringify(course);

        return this.http.put(updateCourseUrl + id , body , this.options)
                        .map(this.extractData)
                        .catch(this.errorHandler);

    }

    deleteCourse(id: number): Observable<Response> {

        const deleteCourseUrl = 'http://localhost:3000/courses/';

        return this.http.delete(deleteCourseUrl + id)
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

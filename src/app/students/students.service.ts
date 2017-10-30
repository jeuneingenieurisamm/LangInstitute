import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { Student } from './student.model';


@Injectable()
export class StudentsService {

    constructor(
        private http: Http
    ) {}

    getStudents(): Observable<Student[]> {

        const getStudentsUrl = 'http://localhost:3000/students';

        return this.http.get(getStudentsUrl)
                        .map(this.extractData)
                        .catch(this.errorHandler);

    }

    private extractData(res: Response) {

        const data = res.json();
        return data;

    }

    private errorHandler(err: Response) {

        const errorMsg = err.json();
        return Observable.throw(errorMsg);

    }

}

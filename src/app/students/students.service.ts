import { Injectable } from '@angular/core';
import { Http , Response , Headers , RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { Student } from './student.model';


@Injectable()
export class StudentsService {

    private headers: Headers = new Headers({
        'Content-Type': 'application/json'
    });

    private options: RequestOptions = new RequestOptions({
        headers: this.headers
    });

    constructor(
        private http: Http
    ) {}

    getStudents(): Observable<Student[]> {

        const getStudentsUrl = 'http://localhost:3000/students';

        return this.http.get(getStudentsUrl)
                        .map(this.extractData)
                        .catch(this.errorHandler);

    }

    addStudent(student: Student): Observable<Student> {

        const addStudentUrl = 'http://localhost:3000/students';
        const body = JSON.stringify(student);

        return this.http.post(addStudentUrl , body , this.options)
                        .map(this.extractData)
                        .catch(this.errorHandler);

    }

    deleteStudent(id: number): Observable<Response> {

        const deleteStudent = 'http://localhost:3000/students/';

        return this.http.delete(deleteStudent + id)
                        .map(this.extractData)
                        .catch(this.errorHandler);

    }

    getStudentById(id: number): Observable<Student> {

        const getStudentByIdUrl = 'http://localhost:3000/students/';

        return this.http.get(getStudentByIdUrl + id)
                        .map(this.extractData)
                        .catch(this.errorHandler);

    }

    updateStudent(id: number , student: Student): Observable<Student> {

        const updateStudentUrl = 'http://localhost:3000/students/';
        const body = JSON.stringify(student);

        return this.http.put(updateStudentUrl + id , body , this.options)
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

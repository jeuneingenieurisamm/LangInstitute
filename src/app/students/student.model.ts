import { Course } from './../courses/course.model';


export class Student {

    id: number;
    fullName: string;
    telNumber: string;
    email: string;
    adress: string;
    birthDate: Date;
    courses: Course[];

}

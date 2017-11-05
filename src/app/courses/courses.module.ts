import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoursesRoutingModule } from './courses-routing.module';

import { MatButtonModule , MatIconModule , MatFormFieldModule , MatInputModule , MatSelectModule } from '@angular/material';

import { CoursesUpdateComponent } from './courses-update.component';
import { CoursesAddComponent } from './courses-add.component';
import { CoursesListComponent } from './courses-list.component';
import { CoursesComponent } from './courses.component';


@NgModule({
    declarations: [
        // Every component under this module should be mentioned in the declarations array
        CoursesComponent,
        CoursesListComponent,
        CoursesAddComponent,
        CoursesUpdateComponent
    ],
    imports: [
        // Every external or feature module should be mentioned in the imports array
        // We have the StudentsRoutingModule that adds the routing configuration to this module
        CoursesRoutingModule,
        CommonModule,
        HttpModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule
    ],
    exports: [

    ],
    providers: [

    ]
})
export class CoursesModule {

}

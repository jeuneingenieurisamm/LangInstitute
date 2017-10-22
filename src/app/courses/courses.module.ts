import { NgModule } from '@angular/core';

import { CoursesRoutingModule } from './courses-routing.module';

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
        CoursesRoutingModule
    ],
    exports: [

    ],
    providers: [

    ]
})
export class CoursesModule {

}

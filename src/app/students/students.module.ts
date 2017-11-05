import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StudentsRoutingModule } from './students-routing.module';

import { MatButtonModule, MatIconModule , MatFormFieldModule , MatInputModule , MatCheckboxModule } from '@angular/material';

import { StudentsUpdateComponent } from './students-update.component';
import { StudentsAddComponent } from './students-add.component';
import { StudentsListComponent } from './students-list.component';
import { StudentsComponent } from './students.component';

import { StudentsService } from './students.service';


@NgModule({
    declarations: [
        // Every component under this module should be mentioned in the declarations array
        StudentsComponent,
        StudentsListComponent,
        StudentsAddComponent,
        StudentsUpdateComponent
    ],
    imports: [
        // Every external or feature module should be mentioned in the imports array
        // We have the StudentsRoutingModule that adds the routing configuration to this module
        StudentsRoutingModule,
        HttpModule,
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        FormsModule
    ],
    exports: [

    ],
    providers: [
        StudentsService
    ]
})
export class StudentsModule {

}

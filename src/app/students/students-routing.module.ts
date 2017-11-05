import { NgModule } from '@angular/core';

// To add navigation to our app we need to import RouterModule and Routes from Angular's Router
import { RouterModule , Routes } from '@angular/router';

import { StudentsUpdateComponent } from './students-update.component';
import { StudentsAddComponent } from './students-add.component';
import { StudentsListComponent } from './students-list.component';
import { StudentsComponent } from './students.component';


// The studentsRoutes is a route configuration it takes as a value an array of objects
// In a simple case the conf should look like this
// [
//     {
//          path: 'path-a',
//          component: ComponentA
//     },
//     {
//          path: 'path-b',
//          component: ComponentB
//     }
// ]
// As the app grows and become more complicated we need to define a root component for every module
// For example the StudentsComponent is the root component of the current module StudentsModule
// The StudentsListComponent, StudentsAddComponent, StudentsUpdateComponent and every future component are secondary components
// That we need to display them inside the root component StudentsComponent as the user navigates in the app
// To do that we need to define first the root component in the routes configuration and the rest of the component in a children property
// children property takes as a value an array of objects every object have a path that leads to a child component
// For example:
// [
//     {
//          path: 'path',
//          component: ParentComponent,
//          children : [
//              {
//                  path: 'child-path-1',
//                  component: ChildComponent1
//              },
//              {
//                  path: 'child-path-2',
//                  component: ChildComponent2
//              }
//          ]
// ]

// As a result to this configuration Angular will examine the path and match it with it's associated component
// Then it will display that component, but to do so Angular needs to know where to display this specific component
// Therefore we need to add <router-link></router-link> in the root component's template StudentsComponent
// Whenever the user navigates to a child component angular will display it inside router-link tag

const studentsRoutes: Routes = [
    {
        path: '',
        component: StudentsComponent,   // => we add <router-link></router-link> in the StudentsComponent's template
        children: [
            {
                path: '',
                component: StudentsListComponent   // => this child component will be displayed inside <router-link></router-link>
            },
            {
                path: 'add-student',
                component: StudentsAddComponent   // => this child component will be displayed inside <router-link></router-link>
            },
            {
                path: 'update-student/:id',
                component: StudentsUpdateComponent   // => this child component will be displayed inside <router-link></router-link>
            }
        ]
    }
];


// StudentsRoutingModule is an angular module (decorated with @NgModule)
// Unlike other modules it serves a specific purpose in the app, it adds the routing configuration to the StudentsModule
// In this module we import the Angular's RouterModule
// We add our configuration (studentsRoutes) to the RouterModule as CHILD configuration
// because it will not be associated directly to the AppModule (the root module of the app)
// Finally we export the RouterModule again

@NgModule({
    imports: [ RouterModule.forChild(studentsRoutes) ],
    exports: [ RouterModule ]
})
export class StudentsRoutingModule {

}

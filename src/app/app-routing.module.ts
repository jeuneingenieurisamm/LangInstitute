import { NgModule } from '@angular/core';

// To add navigation to our app we need to import RouterModule and Routes from Angular's Router
import { RouterModule , Routes } from '@angular/router';


// This Routing Module is slightly different from StudentsRoutesModules and CoursesRoutingModules
// When StudentsRoutingModules and CoursesRoutingModules lets us navigate between COMPONENTS
// The AppRoutingModule lets us navigate between MODULES, the StudentsModule and the CoursesModule
// Therefore the appRoutes configuration will be also different

// [
//     {
//          path: 'path-a',
//          loadChildren: './folder-a/module-a.module#ModuleA'
//              => relative path to the module file without '.ts' extension + # + module ClassName
//     },
//     {
//          path: 'path-b',
//          loadChildren: './folder-b/module-b.module#ModuleB'
//              => relative path to the module file without '.ts' extension + # + module ClassName
//     }
// ]

// As a result to this configuration Angular will examine the path and match it with it's associated module
// Then it will load the module StudentsModules or CoursesModules
// After loading the module angular needs to know where to display the result of this navigation
// Therefore we need to add <router-link></router-link> in the root component's template of the app: AppComponent
// Whenever the user navigates to a specific module angular will display it inside router-link tag

const appRoutes: Routes = [
    // first configuration is for redirection purpose whenever the url = 'localhost:4200/' + ' '
    // the user will be redirected to 'localhost:4200/students'
    {
        path: '',
        redirectTo: 'students',
        pathMatch: 'full'
    },
    {
        path: 'students',
        loadChildren: './students/students.module#StudentsModule'
    },
    {
        path: 'courses',
        loadChildren: './courses/courses.module#CoursesModule'
    }
];


// AppRoutingModule is an angular module (decorated with @NgModule)
// Unlike other modules it serves a specific purpose in the app, it adds the routing configuration to the AppModule
// In this module we import the Angular's RouterModule
// We add our configuration (appRoutes) to the RouterModule
// as ROOT configuration (unlike the StudentsRoutingModule and CoursesRoutingModule)
// because it will be associated directly to the AppModule (the root module of the app)
// Finally we export the RouterModule

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}

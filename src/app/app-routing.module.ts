import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


const routes: Routes = [
  {
    path:"",
    // pathMatch:"full",
    component:DefaultComponent,
    children:[
      {
        path:"templateForm",
        component:TemplateFormComponent,
      },
      {
        path:"reactiveForm",
        component:ReactiveFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserService } from './services/user.service';
import { FormControlValidationMsgDirective } from './directives/formcontrol-validation-msg.directive';
import { FormSubmitValidationMsgDirective } from './directives/formsubmit-validation-msg.directive';
import { ValidationMsgService } from './services/validation-msg.service';
import { ToasterService } from './services/toaster.service';
import { ToasterComponent } from './toaster/toast/toaster.component';
import { ToasterContainerComponent } from './toaster/toaster-container.component';
import { ForbiddenComponent } from './forbidden.component';
import { NotFoundComponent } from './not-found.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes =[
  { path: '', component: StartPageComponent},
  { path: '403', component: ForbiddenComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    UserFormComponent,
    UsersListComponent,
    FormControlValidationMsgDirective,
    FormSubmitValidationMsgDirective,
    ToasterComponent,
    ToasterContainerComponent,
    ForbiddenComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService, 
    ValidationMsgService,
    ToasterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

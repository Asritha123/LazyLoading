import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyRoutingModule } from './technology-routing.module';
import { TechnologyComponent } from './technology.component';
import { JavaComponent } from './components/java/java.component';
import { WebComponent } from './components/web/web.component';
import { JavaScriptComponent } from './components/java-script/java-script.component';
import { AngularComponent } from './components/angular/angular.component';
import { OopsComponent } from './components/oops/oops.component';
import { JdbcComponent } from './components/jdbc/jdbc.component';
import { AwsComponent } from './components/aws/aws.component';
import { Html5Component } from './components/html5/html5.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TechnologyComponent,
    JavaComponent,
    WebComponent,
    JavaScriptComponent,
    AngularComponent,
    OopsComponent,
    JdbcComponent,
    AwsComponent,
    Html5Component,
  ],
  imports: [
    CommonModule,
    TechnologyRoutingModule,FormsModule,HttpClientModule,SharedModule
  ]
})
export class TechnologyModule { }

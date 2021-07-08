import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './components/angular/angular.component';
import { AwsComponent } from './components/aws/aws.component';
import { Html5Component } from './components/html5/html5.component';
import { JavaScriptComponent } from './components/java-script/java-script.component';
import { JavaComponent } from './components/java/java.component';
import { JdbcComponent } from './components/jdbc/jdbc.component';
import { OopsComponent } from './components/oops/oops.component';
import { WebComponent } from './components/web/web.component';
import { TechnologyComponent } from './technology.component';

const routes: Routes = [{ path: '', component: TechnologyComponent },
{path:'java',component:JavaComponent,
children:[{path:'javascript',component:JavaScriptComponent},
{path:'jdbc',component:JdbcComponent},
{path:'oops',component:OopsComponent}]},
{path:'web',component:WebComponent,
children:[{path:'aws',component:AwsComponent},
{path:'angular',component:AngularComponent},
{path:'html5',component:Html5Component}]}]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnologyRoutingModule { }

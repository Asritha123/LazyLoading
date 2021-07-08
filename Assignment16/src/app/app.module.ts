import { HttpClientModule } from '@angular/common/http';
import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignmentProductComponent } from './assignment-product/assignment-product.component';
import { SearchPipe } from './shared/pipes/search.pipe';
import { PipePipe } from './shared/sort/pipe.pipe';
import { FormsModule }    from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,AssignmentProductComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[SearchPipe,PipePipe]

})
export class AppModule { }

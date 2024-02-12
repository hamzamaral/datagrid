import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import {MatPaginator} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
// import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import {  HomeComponent } from './features/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

// import { DialogContentExampleDialog } from './features/home/dialog/DialogContentExampleDialog';
// import { DialogComponent } from './features/home/dialog/dialog.component';
// import {  DialogContentExampleDialog } from './features/home/dialog/dialog.component/DialogContentExampleDialog';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    // DialogContentExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatPaginator,
    MatPaginatorModule,
    MatSort,
    MatSortModule,
    // MatTableDataSource,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

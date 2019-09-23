import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {MatGridListModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatButtonModule,MatSelectModule,MatNativeDateModule,MatFormFieldModule,MatDatepickerModule, MatRadioModule, MatInputModule, MatMenuModule, MatCheckboxModule, MatToolbarModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

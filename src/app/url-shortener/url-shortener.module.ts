import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlShortenerComponent } from './url-shortener.component';
import {MaterialSharedModule} from "../material-shared.module";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    UrlShortenerComponent
  ],
  imports: [
    CommonModule,
    MaterialSharedModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    UrlShortenerComponent
  ]
})
export class UrlShortenerModule { }

import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {URLShortenerService} from "./url-shortener.service";
import {UrlShortenerModel} from "./url-shortener.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.scss']
})
export class UrlShortenerComponent implements OnInit {
  urlFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&\'\\(\\)\\*\\+,;=.]+$')
  ]);
  shortenedURL$: Observable<UrlShortenerModel> | undefined;
  constructor(private urlShortenerService: URLShortenerService) { }

  ngOnInit(): void {
  }

  getShortenedUrl(value: string) {
    this.shortenedURL$ = this.urlShortenerService.getShortenedUrl(value);
  }

}

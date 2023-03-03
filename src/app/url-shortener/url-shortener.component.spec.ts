import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlShortenerComponent } from './url-shortener.component';
import {URLShortenerService} from "./url-shortener.service";
import {of} from "rxjs";
import {UrlShortenerModel} from "./url-shortener.model";
import {HttpClientTestingModule} from "@angular/common/http/testing";
export const mockURLShortenerServiceRes: UrlShortenerModel = {
  "ok": true,
  "result": {
    "code": "N1Clux",
    "short_link": "shrtco.de\/N1Clux",
    "full_short_link": "https:\/\/shrtco.de\/N1Clux",
    "short_link2": "9qr.de\/N1Clux",
    "full_short_link2": "https:\/\/9qr.de\/N1Clux",
    "short_link3": "shiny.link\/N1Clux",
    "full_short_link3": "https:\/\/shiny.link\/N1Clux",
    "share_link": "shrtco.de\/share\/N1Clux",
    "full_share_link": "https:\/\/shrtco.de\/share\/N1Clux",
    "original_link": "https:\/\/www.twitch.tv\/"
  }
}
describe('UrlShortenerComponent', () => {
  let component: UrlShortenerComponent;
  let fixture: ComponentFixture<UrlShortenerComponent>;
  let urlShortenerService: URLShortenerService;
  const spyShortenerService = jasmine.createSpyObj('URLShortenerService', ['getShortenedUrl']);

  beforeEach(async () => {
  await TestBed.configureTestingModule({
      declarations: [ UrlShortenerComponent ],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: URLShortenerService, useValue:spyShortenerService
        },
      ]
    })
    .compileComponents().catch(console.log)

    urlShortenerService = TestBed.inject(URLShortenerService);
    fixture = TestBed.createComponent(UrlShortenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should provide data', () => {
    const mockURLShort = of(mockURLShortenerServiceRes);
    spyShortenerService.getShortenedUrl.and.returnValue(mockURLShort);
    urlShortenerService.getShortenedUrl('https://www.twitch.tv/').subscribe((res: UrlShortenerModel) => {
      expect(res.result.short_link).toEqual('shrtco.de\/N1Clux')
    });
  });
});

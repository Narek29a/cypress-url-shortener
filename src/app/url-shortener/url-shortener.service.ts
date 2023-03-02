import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {UrlShortenerModel} from "./url-shortener.model";

@Injectable({
  providedIn: 'root'
})
export class URLShortenerService {

  private static readonly SHRTCODE_API_URL = 'https://api.shrtco.de/v2/shorten';
  constructor(private http: HttpClient) {
  }

  public getShortenedUrl(url: string): Observable<UrlShortenerModel> {
    const params: HttpParams = new HttpParams().set('url', url);
    return this.http.get<UrlShortenerModel>(URLShortenerService.SHRTCODE_API_URL, {params: params} );
  }

}

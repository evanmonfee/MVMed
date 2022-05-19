import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoreRestService {

  public url: string = '';

  constructor(public http: HttpClient) {
    this.url=environment.url;	
   }

  /**
   * Get the default API headers. Auth tokens can be configured here.
   * @param headers - Additinal headers if needs to be added.
   * @returns - returns the header object for API calls.
   */
   public getDefaultOptions(headers?: Object) {
    const baseHeader = {
      'Content-Type': 'application/json',
      'X-Skip-Entitlement-Validation': 'True'
    };

    if (headers) {
      const keys = Object.keys(headers);
      keys.forEach(key => {
        if (headers[key]) {
          baseHeader[key] = headers[key];
        }
      });
    }
    const defaultOptions = {
      headers: new HttpHeaders(baseHeader),
      responseType: null
    };
    return defaultOptions;
  }

  /**
   * 
   * @param path - API URL path
   * @param contextPath Optional context path if required
   * @returns - Returns the URL defaults
   */
  public getUrl(path: string, contextPath?: string): string {
    let fullPath = '';
    if (this.url) {
      fullPath += this.url;
    }
    if (contextPath) {
      fullPath += contextPath;
    }
    fullPath += path;
    if (fullPath.indexOf("?") < 0) {
      fullPath += "?";
    } else {
      fullPath += "&";
    }
    fullPath += "_date=" + new Date().getTime();
    return fullPath;
  }
}

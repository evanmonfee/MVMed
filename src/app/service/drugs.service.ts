import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CoreRestService } from './core-rest.service';

@Injectable({
  providedIn: 'root'
})
export class DrugsService {

  constructor(public http: HttpClient, public restService: CoreRestService) {

  }

  public getDrugList() {
    let url = this.restService.getUrl('/drugs');
    return this.http.get(url, this.restService.getDefaultOptions());
  }

  public addDrug(pFormData) {
    let url = this.restService.getUrl('/drugs/');
    return this.http.post(url, pFormData, this.restService.getDefaultOptions());
  }

  public editDrug(pFormData) {
    let url = this.restService.getUrl('/drugs/' + pFormData.id);
    return this.http.put(url, pFormData, this.restService.getDefaultOptions());
  }

  public deleteDrug(id) {
    let url = this.restService.getUrl('/drugs/' + id);
    return this.http.delete(url, this.restService.getDefaultOptions());
  }

}

import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
    HttpClient,
    HttpHeaders,
    HttpErrorResponse,
  } from '@angular/common/http';
import { IssModel } from '../app.iss.model';

  @Injectable({
    providedIn: 'root',
  })

  export class IssService{
    basicUrl: string = "https://localhost:44328/api/iss";
    issUrl: string = "http://api.open-notify.org/iss-now.json";
    constructor(private http: HttpClient){

    }
    getIssData(): Observable<IssModel> {
        return this.http.get<IssModel>(`${this.issUrl}`);
    }

    saveIssData(issModel: IssModel) :Observable<IssModel[]>
    {
        return this.http.post<IssModel[]>(`${this.basicUrl}`, issModel);
    }

    getAllIssData(): Observable<IssModel[]>
    {
      return this.http.get<IssModel[]>(`${this.basicUrl}`);
    }

  }

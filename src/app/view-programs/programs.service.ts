import { Injectable } from '@angular/core';
import { observable, Observable, from } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  constructor(private http: HttpClient) { }

//Service To Call The API to get All Programs
  GetAllPrograms(): Observable<any> {
    return this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100");
  }

  //Service To Call The API to get filtered data based on year selected
  FilterYearsData(value: number) {
    return this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100&launch_year=" + value);
  }

  //Service To Call The API to get filtered data based on Launch status
  FilterLaunchData(value: number) {
    return this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100&launch_success=" + value);
  }

    //Service To Call The API to get filtered data based on Landing status
  FilterLandingData(value: number) {
    return this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100&land_success=" + value);
  }


}

import { Component, OnInit } from '@angular/core';
import {ProgramsService} from 'src/app/view-programs/programs.service'

@Component({
  selector: 'app-view-programs',
  templateUrl: './view-programs.component.html',
  styleUrls: ['./view-programs.component.css']
})
export class ViewProgramsComponent implements OnInit {

  allData:any;
  uniqueYears : any;
  uniqueLaunch : any;
  uniqueLanding : any;

  constructor( private programService:ProgramsService) { }

  ngOnInit(): void {
    this.getAllData();
  }


  //Method to Get All the Programs data And seting Accordingly 
  getAllData(){
    this.programService.GetAllPrograms().subscribe(
      result => {
        console.log(result);
         this.allData = result
         //Filter the unique years after getting all data From API
         this.uniqueYears =[...new Set(this.allData.map(item => item.launch_year))]; 
          //Filter the unique Launch status after getting all data From API
         this.uniqueLaunch=[...new Set(this.allData.map(item => item.launch_success))]; 
         //Filter the unique Landing status after getting all data From API
         this.uniqueLanding=[...new Set(this.allData.map(item => item.is_tentative))]; 
      }
    )
  }

  //Method to filter  year behalf of selected year e.g 2016,2017 etc.
  filterYear(value:number){
    this.programService.FilterYearsData(value).subscribe(
      result => {
        this.allData = result;
      }
    )
  }

  //Method to filter Launch programs behalf of selected Launch success(True) OR Failed(false)
  filterLaunch(value:any){
    this.programService.FilterLaunchData(value).subscribe(
      result => {
        this.allData = result;
      }
    )
  }

  //Method to filter Landing programs behalf of selected Landing success(True) OR Failed(false)
  filterLanding(value:any){
    this.programService.FilterLandingData(value).subscribe(
      result => {
        this.allData = result;
      }
    )
  }


}

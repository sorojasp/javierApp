import { Component, OnInit } from '@angular/core';
import {ChallengesService} from './../../providers/services/challenges.service'; 
import {RickMortyService} from './../../providers/services/rickMorty/rick-morty.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {

  public rickMortyData=[]

  public alerts= [{
    type: '',
    message: '',
  }
];

  constructor(
    private challengesService: ChallengesService,
    private rickService: RickMortyService
  ) { 

    console.log(this.challengesService.getChallenges());

    this.rickService.getRickData().subscribe(resp=>{
      this.rickMortyData=resp['results'];
      console.log(resp)
    },err=>{
      console.log(err)
    })
  }

  ngOnInit(): void {
  }

  public sendData(){
    this.rickService.createUser({name:'Stiven',
    lastName:'Rojas'}).subscribe(resp=>{

      this.alerts[0]['type']='success';
      this.alerts[0]['message']= `Data recieved from server:  name: ${resp['dataRecieved']['name']} -  lastname: ${resp['dataRecieved']['lastName']}`
      console.log(resp)
    },err=>{
      console.log(err)
    })
  }

  public   close(alert: any) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  public updateEntity(){
    this.rickService.update({name:'Stiven',lastName:'Salazar'}).subscribe(resp=>{

      this.alerts[0]['type']='info';
      this.alerts[0]['message']= `Data recieved from server:  name: ${resp['dataRecieved']['name']} -  lastname: ${resp['dataRecieved']['lastName']}`
      console.log(resp)
    },err=>{
      console.log(err)
    })
  }

  public deleteEntity(){
    this.rickService.delete({name:'Stiven',lastName:'Salazar'}).subscribe(resp=>{

      this.alerts[0]['type']='info';
      this.alerts[0]['message']= `Data recieved from server:  name: ${resp['dataRecieved']['name']} -  lastname: ${resp['dataRecieved']['lastName']}`
      console.log(resp)
    },err=>{
      console.log(err)
    })

  }

}

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
      console.log(resp)
    },err=>{
      console.log(err)
    })
  }

}

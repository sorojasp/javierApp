import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChallengesService {


  public challenges=[
    {
      nombre:'saltos',
      repeticiones:100,
      series:10,
      tiempo_min:25
    },
    {
      nombre:'flexiones de pecho',
      repeticiones:200,
      series:23,
      tiempo_min:25
    },
    ]
  constructor(
    
  ) { }


  public getChallenges(){
    return this.challenges
  }


}

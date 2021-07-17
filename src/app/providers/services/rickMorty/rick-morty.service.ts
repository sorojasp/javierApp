import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  public endpoint='https://rickandmortyapi.com/api/character/?page=19'


  constructor(
    private http: HttpClient,
  ) { }

  public getRickData(){
    return this.http.get(this.endpoint)
  }

  public createUser(data:any){
    return this.http.post('http://localhost:3000/',data)
  }
}

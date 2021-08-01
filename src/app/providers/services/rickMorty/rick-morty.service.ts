import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
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

  public update(data){
    return this.http.put('http://localhost:3000/',data)
  }

  public delete(data){

 
const params = new HttpParams()
  .set('id', '10')

    return this.http.delete('http://localhost:3000/',{params})
  }
}

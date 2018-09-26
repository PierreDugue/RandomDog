import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DogServiceProvider {

  constructor(public http: HttpClient) {
  }

  getRandomDog(breed) {
    return this.http.get(`https://dog.ceo/api/breed/${breed}/images/random`);
  }

}

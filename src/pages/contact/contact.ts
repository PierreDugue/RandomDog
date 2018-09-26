import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DogServiceProvider } from '../../providers/dog-service/dog-service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,
    private dogProvider: DogServiceProvider) {

  }

  filterDog(breed) {
    console.log(breed);
    this.dogProvider.setMyBreed(breed);
  }
}

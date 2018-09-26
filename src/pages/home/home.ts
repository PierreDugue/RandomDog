import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DogServiceProvider } from '../../providers/dog-service/dog-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  private dog;
  private hideDog = false;
  constructor(public navCtrl: NavController,
    private dogService: DogServiceProvider) {

  }

  ngOnInit() {
    this.dogService.setMyBreed('corgi/cardigan');
    this.getNextDog();
  }

  getNextDog() {
    this.hideDog = true;
    this.dogService.getRandomDog(this.dogService.getMyBreed()).subscribe(res => {
      this.dog = res;
      this.hideDog = false;
    }, error => {
      console.log('An error occured: ', error);
    });
  }

  chooseBreed() {

  }

}

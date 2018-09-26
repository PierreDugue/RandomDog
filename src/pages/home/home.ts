import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DogServiceProvider } from '../../providers/dog-service/dog-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  private dog;

  constructor(public navCtrl: NavController,
    private dogService: DogServiceProvider) {

  }

  ngOnInit() {
    this.getNextDog('corgi/cardigan');
  }

  getNextDog(breed = 'corgi/cardigan') {
    this.dogService.getRandomDog(breed).subscribe(res => {
      this.dog = res;
    }, error => {
      console.log('An error occured: ', error);
    });
  }


}

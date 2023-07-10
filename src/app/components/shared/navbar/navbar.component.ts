import { Component } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  heroe: number=0;
   ngOnInit(): void {}
    constructor(private _heroesService:HeroesService,private router:Router){

    }
    buscahero(nom: string) {
      console.log(nom);
      this.heroe = this._heroesService.heroebuscado(nom);
      this.VerHeroe(this.heroe);
    }
    VerHeroe(idx: number){
      console.log(idx);
      this.router.navigate(['/heroe',idx]);
    }

}


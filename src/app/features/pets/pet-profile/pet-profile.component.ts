import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/_services/pet.service';

@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.scss']
})
export class PetProfileComponent implements OnInit {

  constructor(private petService:PetService) {

   }

  ngOnInit() {
  }

}

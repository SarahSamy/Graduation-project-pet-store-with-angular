import { Component, OnInit, Input } from '@angular/core';
import { Pet } from 'src/app/_model/pet';
import { Router } from '@angular/router';

import { PetService } from 'src/app/_services/pet.service';
@Component({
  selector: 'pet-item',
  templateUrl: './pet-item.component.html',
  styleUrls: ['./pet-item.component.scss']
})
export class PetItemComponent implements OnInit {

  @Input() pet: Pet;
  @Input() data
  constructor(private router: Router, private petService: PetService) {

  }

  ngOnInit() {
    if (!this.data) {
      this.data = this.petService
      return this.data
    }

  }
  editButtonClick(PetId: Number) {
    this.router.navigate(['Edit-Animal', PetId])
  }

}

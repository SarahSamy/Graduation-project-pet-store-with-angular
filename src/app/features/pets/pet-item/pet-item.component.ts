import { Component, OnInit, Input } from '@angular/core';
import { Pet } from 'src/app/_model/pet';
import { Router } from '@angular/router';

@Component({
  selector: 'pet-item',
  templateUrl: './pet-item.component.html',
  styleUrls: ['./pet-item.component.scss']
})
export class PetItemComponent implements OnInit {
  @Input() pet: Pet;
  constructor(private router: Router) {
    // this.pet= {name:'Photo Camera',id:1,image:'assets/images/dog1.jpg' }
  }

  ngOnInit() {
  }
  editButtonClick(PetId: Number) {
    this.router.navigate(['Edit-Animal', PetId])
  }

}

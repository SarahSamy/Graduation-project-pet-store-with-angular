import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pet } from 'src/app/_model/pet';
import { User } from 'src/app/_model/user';
import { Router } from '@angular/router';
import {UserService} from 'src/app/_services/user.service.service';
import { PetService } from 'src/app/_services/pet.service';
import { MatDialog } from '@angular/material';
import { NgModule } from '@angular/core';
import { DeleteModalComponent } from '../../../shared/delete-modal/delete-modal.component';




@NgModule({
  imports: [
    DeleteModalComponent
  ],
  declarations: [DeleteModalComponent],
  exports: [DeleteModalComponent],
  entryComponents: [DeleteModalComponent],
})



@Component({
  selector: 'pet-item',
  templateUrl: './pet-item.component.html',
  styleUrls: ['./pet-item.component.scss']
})
export class PetItemComponent implements OnInit {

  @Input() pet: Pet;
 // @Input() data;
 @Output() removeClick= new EventEmitter<any>();
  user:User
  userPet:Pet[]
  constructor(private router: Router, private petService: PetService,private userService:UserService,public dialog: MatDialog) {
    
  }

  ngOnInit() {
    
    if(this.userService.loginUser){
      this.user=this.userService.loginUser;
      console.log(this.user);
      this.userPet=this.petService.getByUserId(this.user.id);
      // return this.user
    }
    console.log(this.pet);
    // if (!this.data) {
    //   this.data = this.petService.getAll();
    //   return this.data
    // }
  }
  editButtonClick(PetId: Number) {
    this.router.navigate(['Edit-Animal', PetId])
  }

  // closeDialog():void{
    
  //     DeleteModalComponent.on
  
  // }
  openDialog(): void {
    
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '350px',
      data: "Do you confirm the deletion of this data?",
      panelClass: 'panelClass-class' ,
      //position: 'absolute ',
      // background-color: 'orange ',
      // height: '10rem  ',
      // width: '50rem ',
      // text-align: 'center ',
      // margin: 'auto ',
      // justify-self: 'center ',
      // margin: '20rem '
      
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log('Yes clicked');
        this.removeClick.next();
        // result.then.emit(true);
  
        // DO SOMETHING
      }
      console.log('no clicked');
      //  result.then.emit(false);
    });
}

}

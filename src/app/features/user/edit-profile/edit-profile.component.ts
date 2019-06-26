import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  url: string;
  userService:UserService;
  constructor(user:UserService,private router: Router) {
    this.userService=user;
    if(!this.userService.loginUser){
      this.router.navigate(['/Login']);
    }
   }

  ngOnInit() {
  }
  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      // reader.onload = (event) => { // called once readAsDataURL is completed
      //   this.url = event.target.result;
      // }
    }
}

}

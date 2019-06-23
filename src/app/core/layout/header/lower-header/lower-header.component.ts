import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_model/User';
import { UserService } from 'src/app/_services/user.service.service';

@Component({
  selector: 'app-lower-header',
  templateUrl: './lower-header.component.html',
  styleUrls: ['./lower-header.component.scss']
})
export class LowerHeaderComponent implements OnInit {
  @Input() users:User[];
  login
  user:User;
  constructor(private userService:UserService) { 
    // if(!this.users){
      // this.users = this.userService.getAll();
    // }
  console.log
    if(this.userService.loginUser){
      this.user= this.userService.loginUser;
    }
   
    this.login = this.userService.login( );
  }
  ngOnInit() {
 
    
  }
logout(){
  this.userService.logout();
}
}

import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_model/User';
import {UserService} from '../../../../_services/user.service.service'

@Component({
  selector: 'app-lower-header',
  templateUrl: './lower-header.component.html',
  styleUrls: ['./lower-header.component.scss']
})
export class LowerHeaderComponent implements OnInit {
  @Input() users:User[];
  islogin:boolean=false;

  constructor(private userService:UserService) { 
    // if(!this.users){
      // this.users = this.userService.getAll();
    // }
    this.islogin = this.userService.loginUser?true:false;
    console.log(this.userService.loginUser);
    console.log(this.islogin);
  }
  ngOnInit() {
 
    
  }

}

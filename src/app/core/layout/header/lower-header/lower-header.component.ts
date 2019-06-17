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
  login:boolean;

  constructor(private userService:UserService) { 
    // if(!this.users){
      // this.users = this.userService.getAll();
    // }
    this.login = this.userService.login();
  }
  ngOnInit() {
 
    
  }

}

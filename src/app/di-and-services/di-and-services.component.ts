import { Component, OnInit } from '@angular/core';
import User, { UserService } from './user.service';
import { UserFilterPipe } from './users-filter.pipe';

@Component({
  selector: 'app-di-and-services',
  templateUrl: './di-and-services.component.html',
  styleUrls: ['./di-and-services.component.scss']
})
export class DIAndServicesComponent implements OnInit {
  usersList: Array<User>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.usersList = this.userService.getUsers();
  }

  toggleState(id: number) {
    this.userService.toggleState(id);
  }

}

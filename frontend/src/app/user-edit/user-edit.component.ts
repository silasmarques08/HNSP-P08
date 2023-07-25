import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user-service.service';
import { User } from '../user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {
    this.getUser(this.route.snapshot.params['id']);
  }

  onSubmit() {
    this.userService.update(this.user.id, this.user).subscribe(result => this.gotoUserList());
  }

  getUser(id: string){
    this.userService.find(id).subscribe( data =>{
    this.user = data;
    })
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }


}

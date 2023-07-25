import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user-service.service';
import { User } from '../user';
import { TypeService } from '../type-service.service';
import { Type } from '../type';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  user: User;
  types: Type[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private typeService: TypeService
    ) {
    this.user = new User();
  }

   ngOnInit() {
      this.typeLoadAll();
    }

  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }

 typeLoadAll(){
      this.typeService.findAll().subscribe(data => {
           this.types = data;
         });
     }

}

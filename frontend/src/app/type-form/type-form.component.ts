import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeService } from '../type-service.service';
import { Type } from '../type';

@Component({
  selector: 'app-type-form',
  templateUrl: './type-form.component.html',
  styleUrls: ['./type-form.component.css']
})
export class TypeFormComponent {

  type: Type;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private typeService: TypeService) {
    this.type = new Type();
  }

  onSubmit() {
    this.typeService.save(this.type).subscribe(result => this.gotoTypeList());
  }

  gotoTypeList() {
    this.router.navigate(['/types']);
  }
}

import { Component } from '@angular/core';
import { Type } from '../type'
import { TypeService } from '../type-service.service';


@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent {

  types: Type[];

  constructor(private typeService: TypeService) {
    }

    ngOnInit() {
      this.typeLoadAll();
    }

     onDelete(id: string){
      this.typeService.delete(id).subscribe(result => {
      this.typeLoadAll();
      });
     }

     typeLoadAll(){
      this.typeService.findAll().subscribe(data => {
           this.types = data;
         });
     }

}

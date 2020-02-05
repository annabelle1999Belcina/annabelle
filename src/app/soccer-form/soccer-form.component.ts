import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemService } from '~/app/item/item.service';

@Component({
  selector: 'ns-soccer-form',
  templateUrl: './soccer-form.component.html',
  styleUrls: ['./soccer-form.component.css']
})
export class SoccerFormComponent implements OnInit {

  @Input() name: string
  @Input() role: string
  @Output() editItem = new EventEmitter()


  constructor() {
    
  }
  ngOnInit() {
  }
  onSubmit() {
    this.editItem.emit({
      name:this.name,
      role:this.role
    })
    this.name = ""
    this.role = ""
  }

  
}

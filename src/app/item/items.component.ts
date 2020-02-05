import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html",
    styleUrls: ["./items.component.css"]
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;



    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
        
    }
    toAdd(item){
        var player = {
            id: this.items.length + 1,
            name: item.name,
            role: item.role
        }
        this.items.unshift(player)
        
        
    }
}

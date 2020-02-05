import { Injectable } from "@angular/core";

import { Item } from "./item";
import { EventData } from "tns-core-modules/ui/page/page";


@Injectable({
    providedIn: "root"
})
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "mibel", role: "Goalkeeper" },
        { id: 2, name: "nabelle", role: "Goalkeeper" },
        { id: 3, name: "Piqué", role: "Defender" },
        { id: 4, name: "I. Rakitic", role: "Midfielder" },
        { id: 5, name: "Sergio", role: "Midfielder" },
    );
    getItems(): Array<Item> {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter((item) => item.id === id)[0];
    }
    updateData( id: any) {
        return this.items.find( id)
      }

    
}

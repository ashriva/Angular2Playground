import { Component, ModuleWithProviders } from '@angular/core';
import { ConstantService } from './Utilities/constantService';
import { HttpService } from './Utilities/httpService';
import { Routes, RouterModule }   from '@angular/router';
import { InfoComponent } from './info/info.component';

@Component({
    selector: 'app-container',
    templateUrl: `app/home/home.html`,
    providers: [ConstantService, HttpService]
})

export class AppComponent {

    type: string;
    items: string[];
    out: string[];
    out2: number[];

    constructor(private constantService: ConstantService, private httpService: HttpService) {
        this.type = "I need";
        this.items = ["Monitor", "Keyboard", "Mouse"];
        this.out = constantService.getSomeValues();
        this.out2 = httpService.getSomeHttpValue();
    }

    btnClicked(side) {
        switch (side) {
            case "left":
                for (var i = 0; i < this.out.length; i++) {
                    this.items.push(this.out[i]);
                }
                break;
            case "right":
                for (var i = 0; i < this.out2.length; i++) {
                    this.items.push(String(this.out2[i]));
                }
                break;
            case "reset":
                this.items = ["Monitor", "Keyboard", "Mouse"];
                break;
            case "route":
                
                break;
            default:
                this.items = [];
        }
    }
}
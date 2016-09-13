import { Component } from '@angular/core';

@Component({
    templateUrl: `app/info/info.html`
})

export class InfoComponent {

    pageHeading: string

    constructor() {
        this.pageHeading = "Info page heading content";
    }
}
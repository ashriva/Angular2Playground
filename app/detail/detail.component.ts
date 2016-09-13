import { Component } from '@angular/core';

@Component({
    templateUrl: `app/detail/detail.html`
})

export class DetailComponent {

    pageHeading: string

    constructor() {
        this.pageHeading = "This is the details page";
    }
}
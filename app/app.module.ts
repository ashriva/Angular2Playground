import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';

import { routing } from './app.routing';

@NgModule({
    imports: [BrowserModule, FormsModule, routing],
    declarations: [AppComponent, InfoComponent, DetailComponent, HomeComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }
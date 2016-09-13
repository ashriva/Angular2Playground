import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, InfoComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }
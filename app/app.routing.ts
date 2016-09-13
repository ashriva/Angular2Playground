import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoComponent } from './info/info.component';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';

const appRoutes: Routes = [
    
    {
        path: '',
        component: AppComponent
    },

    {
        path: 'info',
        component: InfoComponent
    },

    {
        path: 'detail',
        component: DetailComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
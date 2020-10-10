import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {AccordionModule} from 'primeng/accordion';
import {ChartModule} from 'primeng/chart';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {DropdownModule} from 'primeng/dropdown';

import { DashboardComponent } from './dashboard.component';
import { DashStatusAtualComponent } from './dash-status-atual/dash-status-atual.component';
import { DashStatusAtualEstadoComponent } from './dash-status-atual-estado/dash-status-atual-estado.component';

@NgModule({    
    declarations: [
        DashboardComponent,
        DashStatusAtualComponent,
        DashStatusAtualEstadoComponent        
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        HttpClientModule,
        AccordionModule,
        ChartModule,
        TableModule,
        ToolbarModule,
        DropdownModule,
        FormsModule
    ], 
    exports: [
        DashboardComponent,
        DashStatusAtualComponent,
        DashStatusAtualEstadoComponent
    ]
})
export class DashboardModule{}
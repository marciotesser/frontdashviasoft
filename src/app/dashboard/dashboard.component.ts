import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit{
    
    autorizadores: string[] = [];

    constructor(private dashboardService: DashboardService){}    

    ngOnInit(): void{
        this.dashboardService.listaMaiorIndisponibilidade().subscribe(autorizadores => {
            this.autorizadores.concat(autorizadores);
        })
    }

}
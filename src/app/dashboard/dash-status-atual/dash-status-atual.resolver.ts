import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DashboardService } from '../dashboard.service';
import { DisponibilidadeServico } from '../disponibilidadeservico';

@Injectable({providedIn: 'root'})
export class DashStatusAtualResolver implements Resolve<Observable<DisponibilidadeServico[]>> {

    constructor(private dashboardService: DashboardService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DisponibilidadeServico[]> {
        return this.dashboardService.listaStatusAtualTodosEstados();
    }

}
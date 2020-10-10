import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DisponibilidadeServico } from './disponibilidadeservico';


const API = environment.apiUrl;

@Injectable({providedIn: 'root'})
export class DashboardService{

    constructor(private http: HttpClient){}

    listaStatusAtualTodosEstados() {
        return this.http.get<DisponibilidadeServico[]>(API + '/servicos');
    }

    listaStatusAtualPorEstado(uf: string) {
        return this.http.get<DisponibilidadeServico>(API + '/servicos/estado/' + uf);
    }

}
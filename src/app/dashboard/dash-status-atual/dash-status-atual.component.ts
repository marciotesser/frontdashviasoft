import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../dashboard.service';
import { DisponibilidadeServico } from '../disponibilidadeservico';

@Component({
    selector: 'app-dash-status-atual',
    templateUrl: './dash-status-atual.component.html',
    styleUrls: ['./dash-status-atual.component.scss']
})
export class DashStatusAtualComponent implements OnInit{

    disponibilidadeServicos: DisponibilidadeServico[] = [];
    cols: any[];

    constructor(
        private activateRoute: ActivatedRoute,
        private dashboardService: DashboardService
    ) {}

    ngOnInit(): void {
        this.activateRoute.params.subscribe(params => {
            this.disponibilidadeServicos = this.activateRoute.snapshot.data['servicosStatusAtuais'];
        });

        this.cols = [
            { field: 'autorizador', header: 'Autorizador'},
            { field: 'autorizacao4', header: 'Autorização 4'},
            { field: 'retornoAutorizacao4', header: 'Retorno Aut. 4'},
            { field: 'consultaProtocolo4', header: 'Consulta Prot. 4'},
            { field: 'statusServico4', header: 'Status Serviço 4'},
            { field: 'tempoMedio', header: 'Tempo Médio'},            
            { field: 'consultaCadastro4', header: 'Consulta Cadastro 4'},
            { field: 'recepcaoEvento4', header: 'Recepção Evento 4'},
        ]    
    }
}
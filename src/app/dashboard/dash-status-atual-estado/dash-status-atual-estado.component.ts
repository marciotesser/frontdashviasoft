import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { Subject } from 'rxjs';
import { DashboardService } from '../dashboard.service';
import { DisponibilidadeServico } from '../disponibilidadeservico';

import { debounceTime, filter } from 'rxjs/operators';

@Component({
    selector: 'app-dash-status-atual-estado',
    templateUrl: './dash-status-atual-estado.component.html'
})
export class DashStatusAtualEstadoComponent implements OnInit{

    estados: SelectItem[];
    estadoSelecionado: string;
    disponibilidadeServicos: DisponibilidadeServico[]= [];
    cols: any[];   

    constructor(        
        private activateRoute: ActivatedRoute
        ){}
        
    ngOnInit(): void {
            
        this.activateRoute.params.subscribe(params => {
            this.disponibilidadeServicos = this.activateRoute.snapshot.data['servicosStatusAtuais'];
        });
        
        this.estados = [
            {label: 'AM', value: 'AM'},
            {label: 'BA', value: 'BA'},
            {label: 'CE', value: 'CE'},
            {label: 'GO', value: 'GO'},
            {label: 'MG', value: 'MG'},
            {label: 'MS', value: 'MS'},            
            {label: 'MT', value: 'MT'},
            {label: 'PE', value: 'PE'},
            {label: 'PR', value: 'PR'},
            {label: 'RS', value: 'RS'},
            {label: 'SP', value: 'SP'},
            {label: 'SVAN', value: 'SVAN'},
            {label: 'SVRS', value: 'SVRS'},
            {label: 'SVC-AN', value: 'SVC-AN'},
            {label: 'SVC-RS', value: 'SVC-RS'},
        ];

        this.estadoSelecionado = 'AM';

            
        this.cols = [
            { field: 'autorizador', header: 'Autorizador'},
            { field: 'autorizacao4', header: 'Autorização 4'},
            { field: 'retornoAutorizacao4', header: 'Retorno Aut. 4'},
            { field: 'consultaProtocolo4', header: 'Consulta Prot. 4'},
            { field: 'statusServico4', header: 'Status Serviço 4'},
            { field: 'tempoMedio', header: 'Tempo Médio'},            
            { field: 'consultaCadastro4', header: 'Consulta Cadastro 4'},
            { field: 'recepcaoEvento4', header: 'Recepção Evento 4'},
        ]; 

    }   

}
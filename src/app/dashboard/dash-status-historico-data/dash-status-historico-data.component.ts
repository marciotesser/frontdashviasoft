import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { DisponibilidadeServico } from '../disponibilidadeservico';

@Component({
    selector: 'app-dash-status-historico-data',
    templateUrl: './dash-status-historico-data.component.html',
    styleUrls: ['./dash-status-historico-data.component.css']
})
export class DashStatusHistoricoDataComponent implements OnInit{

    disponibilidadeServicos: DisponibilidadeServico[] = [];
    cols: any[];
    data: Date;
    pt: any;

    constructor(private dashboardService: DashboardService){}

    ngOnInit(): void {
        this.pt = {
            firstDayOfWeek: 0,
            dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
            dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
            dayNamesMin: ["Do","Se","Te","Qa","Qi","St","Sa"],
            monthNames: [ "Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro" ],
            monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul", "Ago", "Set", "Out", "Nov", "Dez" ],
            today: 'Hoje',
            clear: 'Limpar',
            dateFormat: 'dd/MM/yyyy',
            weekHeader: 'Sem'
        };

        this.data = new Date();

        this.cols = [
            { field: 'dataConsulta', header: 'Data', isData: true},
            { field: 'autorizador', header: 'Autorizador'},
            { field: 'autorizacao4', header: 'Autorização 4'},
            { field: 'retornoAutorizacao4', header: 'Retorno Aut. 4'},
            { field: 'consultaProtocolo4', header: 'Consulta Prot. 4'},
            { field: 'statusServico4', header: 'Status Serviço 4'},
            { field: 'tempoMedio', header: 'Tempo Médio'},            
            { field: 'consultaCadastro4', header: 'Consulta Cadastro 4'},
            { field: 'recepcaoEvento4', header: 'Recepção Evento 4'},
        ]; 

        this.filtrarServicos();

    }

    filtrarServicos(){
        this.dashboardService.listaSatusHistoricoData(this.data)
            .subscribe(servicos => {
               this.disponibilidadeServicos = servicos; 
        });
    }


}
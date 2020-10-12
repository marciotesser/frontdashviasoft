import { Pipe, PipeTransform } from '@angular/core';
import { DisponibilidadeServico } from '../disponibilidadeservico';

@Pipe({name : 'filtroPorEstado'})
export class FiltroPorEstado implements PipeTransform {

    transform(servicos: DisponibilidadeServico[], estadoQuery: string){
        estadoQuery = estadoQuery.trim().toUpperCase();

        if(estadoQuery) {                        
            return servicos.filter(servico => 
                servico.autorizador.toUpperCase().includes(estadoQuery)                
            );            
        } else {
            return servicos;
        }
    }
}
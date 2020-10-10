import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

    data: any;

    constructor(){
        this.data = {
            labels: ['Janeiro', 'Fevereiro'],
            datasets: [
                {
                    label: 'Primeiro Dataset',
                    data: [65, 59],
                    color: 'blue'
                },
                {
                    label: 'Segundo Dataset',
                    data: [28, 48],
                    color: 'green'
                }
            ]
        }
    }

}
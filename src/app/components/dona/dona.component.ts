import { Component } from '@angular/core';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html'
})
export class DonaComponent {

  // Doughnut
  // public doughnutChartLabels: string[] = ['Tamales', 'Tortillas', 'Chorizo'];
  public doughnutChartLabels: string[] = ['Uto', 'Uto pero en celeste', 'Uto pero en amarillo'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType = 'doughnut';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


  public numeros_random(){

    this.doughnutChartData = [
      Math.round( Math.random() * 100),
      Math.round( Math.random() * 100),
      Math.round( Math.random() * 100)
    ];

  }

}

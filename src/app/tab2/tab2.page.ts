import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-home',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class HomePage implements AfterViewInit {
  @ViewChild('barChartCanvas', { static: false }) barChartCanvas!: ElementRef;

  public  barChart : any;

  ngAfterViewInit() {
    this.initializeBarChart();
  }

  initializeBarChart() {
    const canvas = this.barChartCanvas.nativeElement;
    const ctx = canvas.getContext('2d');

    this.barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'], // Add your labels here
        datasets: [
          {
            label: 'Bar Chart',
            data: [10, 20, 15, 30], // Add your data values here
            backgroundColor: 'rgba(75, 192, 192, 0.6)', // Customize bar colors
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}

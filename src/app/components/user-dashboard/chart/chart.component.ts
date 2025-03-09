// chart.component.ts
import { Component, Input, OnChanges, AfterViewInit, ViewChild, ElementRef, Inject } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit, OnChanges {
  @Input() userRoles: { [role: string]: number } = { Admin: 1, Editor: 1, Viewer: 1 };
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart?: Chart;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadChart();
    }
  }

  ngOnChanges() {
    if (this.chart) {
      // When input changes, update the chart's data and refresh the chart.
      this.chart.data = this.getChartData();
      this.chart.update();
    }
  }

  loadChart() {
    Chart.register(...registerables);
    if (!this.chartCanvas) {
      console.error('Canvas element not found');
      return;
    }
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) {
      console.error('Failed to acquire 2D context from canvas');
      return;
    }
    this.chart = new Chart(ctx, {
      type: 'pie',
      data: this.getChartData(),
      options: this.getChartOptions()
    });
  }

  getChartData(): ChartData<'pie'> {
    const labels = Object.keys(this.userRoles);
    const data = Object.values(this.userRoles);
    return {
      labels: labels,
      datasets: [{
        label: 'User Roles',
        data: data,
        backgroundColor: this.getBackgroundColors(labels.length)
      }]
    };
  }

  getChartOptions(): ChartOptions<'pie'> {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom' }
      }
    };
  }

  // Generate an array of background colors.
  getBackgroundColors(count: number): string[] {
    const baseColors = ['#1c4980', '#ffcc00', '#ff5733', '#00a65a', '#f39c12', '#00c0ef'];
    const colors: string[] = [];
    for (let i = 0; i < count; i++) {
      colors.push(baseColors[i % baseColors.length]);
    }
    return colors;
  }
}

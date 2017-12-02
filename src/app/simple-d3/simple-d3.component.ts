import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import {VisData} from './simple-d3.model';


@Component({
  selector: 'app-simple-d3',
  templateUrl: './simple-d3.component.html',
  styleUrls: ['./simple-d3.component.css']
})
export class SimpleD3Component implements OnInit {

  private data = new VisData();

  constructor() { }

  ngOnInit() {
    this.drawSimpleChart();
  }

  public drawSimpleChart(): void {


    d3.select('div')
      .selectAll('div')
      .data(this.data.generate())
      .enter()
      .append('div')
      .attr('class', 'bar')
      .style('height', function (d) {
        var barHeight = d * 5;
        return barHeight + 'px';
      });
  }

}

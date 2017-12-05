import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import {VisData} from './model/simple-d3.model';
import {ScaleLinear} from 'd3-scale';


@Component({
  selector: 'app-simple-d3',
  templateUrl: './simple-d3.component.html',
  styleUrls: ['./simple-d3.component.css']
})
export class SimpleD3Component implements OnInit {

  constructor() { }

  ngOnInit() {
    this.drawSimpleChart();
  }



  public drawSimpleChart(): void {
    var data = new VisData().dataset;
    var w = 650;
    var h = 300;
    var chartWidth = 10;

    var xScale = d3.scaleLinear()
      .domain([0, data.length])
      .range([20, w]);

    var yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([h, 20]);

    var svg = d3
      .select('div')
      .append('svg')
      .attr('width', w)
      .attr('height', h);


    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('width', chartWidth)
      .attr('height', function (d, i) {
        return h - yScale(d);
      })
      .attr('x', function (d, i) {
        return xScale(i);
      })
      .attr('y', function (d, i) {
        return yScale(d);
      })
      .attr('fill', '#323232');

    svg.selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text(function(d, i){
        return d;
      })
      .attr("text-anchor", "middle")
      .attr('x', function (d, i) {
        return xScale(i);
      })
      .attr('y', function (d, i) {
        return yScale(d);
      })
      .attr("font-family", "sans-serif")
      .attr("font-size", "11px")
      .attr("fill", "#f9f9f9");
  }

}

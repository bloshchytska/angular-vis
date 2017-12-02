import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'app-simple-d3',
  templateUrl: './simple-d3.component.html',
  styleUrls: ['./simple-d3.component.css']
})
export class SimpleD3Component implements OnInit {

  private dataset = [];                         //Initialize empty array

  constructor() { }

  ngOnInit() {
    this.drawSimpleChart();
  }

  public drawSimpleChart(): void {
    for (var i = 0; i < 25; i++) {            //Loop 25 times
      var newNumber = Math.random() * 30;   //New random number (0-30)
      this.dataset.push(newNumber);              //Add new number to array
    }

    d3.select('div')
      .selectAll('div')
      .data(this.dataset)
      .enter()
      .append('div')
      .attr('class', 'bar')
      .style('height', function (d) {
        var barHeight = d * 5;
        return barHeight + 'px';
      });
  }

}

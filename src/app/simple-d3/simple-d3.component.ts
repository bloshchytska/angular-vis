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
    this.drawForceDirectedGraph();
  }


  public drawForceDraggebleDirectedGraph() {
    var canvas = document.querySelector("canvas"),
      context = canvas.getContext("2d"),
      width = canvas.width,
      height = canvas.height;

    var simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id(function(d) { return d.id; }))
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2));

    d3.json("../../assets/miserables.json", function(error, graph) {
      if (error) throw error;

      simulation
        .nodes(graph.nodes)
        .on("tick", ticked);

      simulation.force("link")
        .links(graph.links);

      d3.select(canvas)
        .call(d3.drag()
          .container(canvas)
          .subject(dragsubject)
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

      function ticked() {
        context.clearRect(0, 0, width, height);

        context.beginPath();
        graph.links.forEach(drawLink);
        context.strokeStyle = "#aaa";
        context.stroke();

        context.beginPath();
        graph.nodes.forEach(drawNode);
        context.fill();
        context.strokeStyle = "#fff";
        context.stroke();
      }

      function dragsubject() {
        return simulation.find(d3.event.x, d3.event.y);
      }
    });

    function dragstarted() {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d3.event.subject.fx = d3.event.subject.x;
      d3.event.subject.fy = d3.event.subject.y;
    }

    function dragged() {
      d3.event.subject.fx = d3.event.x;
      d3.event.subject.fy = d3.event.y;
    }

    function dragended() {
      if (!d3.event.active) simulation.alphaTarget(0);
      d3.event.subject.fx = null;
      d3.event.subject.fy = null;
    }

    function drawLink(d) {
      context.moveTo(d.source.x, d.source.y);
      context.lineTo(d.target.x, d.target.y);
    }

    function drawNode(d) {
      context.moveTo(d.x + 3, d.y);
      context.arc(d.x, d.y, 3, 0, 2 * Math.PI);
    }
  }


  public drawForceDirectedGraph() {
    var svg = d3.select("svg"),
      width = +svg.attr("width"),
      height = +svg.attr("height");

    var color = d3.scaleOrdinal(d3.schemeCategory20);

    var simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id(function(d) { return d.id; }))
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2));

    d3.json("../../assets/miserables.json", function(error, graph) {
      if (error) throw error;

      var link = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(graph.links)
        .enter().append("line")
        .attr("stroke-width", function(d) { return Math.sqrt(d.value); });

      var node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(graph.nodes)
        .enter().append("circle")
        .attr("r", 5)
        .attr("fill", function(d) { return color(d.group); })
        .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

      node.append("title")
        .text(function(d) { return d.id; });

      simulation
        .nodes(graph.nodes)
        .on("tick", ticked);

      simulation.force("link")
        .links(graph.links);

      function ticked() {
        link
          .attr("x1", function(d) { return d.source.x; })
          .attr("y1", function(d) { return d.source.y; })
          .attr("x2", function(d) { return d.target.x; })
          .attr("y2", function(d) { return d.target.y; });

        node
          .attr("cx", function(d) { return d.x; })
          .attr("cy", function(d) { return d.y; });
      }
    });

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

  }

  public drawSimpleChart(): void {
    var data = new VisData().dataset;
    var w = 650;
    var h = 300;
    var chartWidth = 10;
    var chartPadding = 20;

    var xScale = d3.scaleLinear()
      .domain([0, data.length])
      .range([chartPadding, w]);

    var yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([h, chartPadding]);

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

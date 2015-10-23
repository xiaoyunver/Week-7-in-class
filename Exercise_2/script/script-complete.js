/*Start by setting up the canvas */
var margin = {t:50,r:50,b:50,l:50};
var width = document.getElementById('plot').clientWidth - margin.r - margin.l,
    height = document.getElementById('plot').clientHeight - margin.t - margin.b;

var plot = d3.select('.canvas')
    .append('svg')
    .attr('width',width+margin.r+margin.l)
    .attr('height',height + margin.t + margin.b)
    .append('g')
    .attr('class','canvas')
    .attr('transform','translate('+margin.l+','+margin.t+')');

var dataset1 = [
    {x:100, y:300, name:"red", r:50, color:"red"},
    {x:400, y:300, name:"blue", r:50, color:"blue"},
    {x:800, y:300, name:"green", r:50, color:"green"}
];

var dataset2 = [
    {x:150, y:300, name:"red", r:80, color:"red"},
    {x:450, y:300, name:"green", r:100, color:"green"}
];

var dataset3 = [
    {x:100, y:300, name:"yellow", r:20, color:"yellow"},
    {x:400, y:300, name:"blue", r:30, color:"blue"},
    {x:800, y:300, name:"green", r:20, color:"green"},
    {x:800, y:500, name:"purple", r:30, color:"purple"}
];



d3.select('#btn-1').on('click',function(){ draw(dataset1); })
d3.select('#btn-2').on('click',function(){ draw(dataset2); })
d3.select('#btn-3').on('click',function(){ draw(dataset3); })

function draw(dataset){
    var nodes = plot.selectAll('.node')
        .data(dataset,function(d){return d.name});

    var nodesEnter = nodes.enter()
        .append('circle')
        .attr('class','node')
        .attr('r',0)

    var nodesExit = nodes.exit()
        .transition()
        .remove()


    nodes
        .transition()
        .duration(1000)
        .attr('cx',function(d){return d.x})
        .attr('cy',function(d){return d.y})
        .attr('r',function(d){return d.r})
        .style('fill',function(d){return d.color});

}
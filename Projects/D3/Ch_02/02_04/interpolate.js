// interpolate path 

var dataArray = [{ x: 5, y: 5 }, { x: 10, y: 15 }, { x: 20, y: 7 }, { x: 30, y: 18 }, { x: 40, y: 10 }];
var interpolateTypes = [d3.curveLinear, d3.curveStep, d3.curveBasis, d3.curveCardinal, d3.curveBundle.beta(1)];
var svg = d3.select("body").append("svg").attr("height", "100%").attr("width", "100%");

for (var p = 0; p < 6; p++) {

      var line = d3.line()
            .x(function (d, i) { return d.x * 6; })
            .y(function (d, i) { return d.y * 4; })
            //.curve(d3.curveStep); // grafico tipo escalon
            .curve(interpolateTypes[p]);

      var shiftX = p * 250;
      var shiftY = 0;
      var chartGroup = svg.append("g").attr("class","group"+p).attr("transform", "translate(" + shiftX + "," + shiftY + ")");

      // grafico lineas suavizadas

      chartGroup.append("path")
            .attr("fill", "none")
            .attr("stroke", "orangered")
            .attr("d", line(dataArray));

      chartGroup.selectAll("circle.grp" + p)
            .data(dataArray)
            .enter().append("circle")
            .attr("class", function (d, i) { return "grp" + i; })
            .attr("fill", "orangered")
            .attr("cx", function (d) { return d.x * 6; })
            .attr("cy", function (d) { return d.y * 4; })
            .attr("r", 2);

}     
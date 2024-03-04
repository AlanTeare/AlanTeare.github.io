var parseDate = d3.timeParse("%m/%d/%Y");

d3.csv("prices.csv")
    .row(function (d) { return { month: parseDate(d.month), price: Number(d.price.trim().slice(1)) }; })
    .get(function (error, data) {

        // console.log(data);

    });

// ----------------------------------------------------------

d3.tsv("data.tsv")
    .row(function (d) { return { month: parseDate(d.month), price: Number(d.price.trim().slice(1)) }; })
    .get(function (error, data) {

        // console.log(data);

    });

var psv = d3.dsvFormat("|");
// ----------------------------------------------------------





d3.text("data.txt")
    // .row(function (d) { return { month: parseDate(d.month), price: Number(d.price.trim().slice(1)) }; }) se tiene que eliminar para este caso 
    .get(function (error, data) {
        var rows = psv.parse(data);
        var newRows = [];
        for (var p = 0; p < rows.length; p++) {
            newRows.push({ month: parseDate(rows[p].month), price: Number(rows[p].price.trim().slice(1)) });
        }
        // console.log(rows);

    });

d3.json("treeData.json").get(function (error, data) {
    // console.log(data[0]);
    // console.log(data[0].children);
    // console.log(data[0].children[0].children[1]);

});

d3.xml("data.xml").get(function (error, data) {

    var xmlLetter = data.documentElement.getElementsByTagName("letter");
    var letterNodes = d3.select(data).selectAll("letter")._groups[0][0];
    // console.log(letterNodes); 
});

// ----------------------------------------------------------
// metodo para limpiar en mismo JS y D3 este método se tiene que evitar debido a que es mucho trabajo en JS propiamente tal
d3.text("test.txt").get(function (error, data) {

    var myTabPositions = [];
    var myNewLinePosition = [];

    var tabVal = '\\b\t\\b';
    var tabMod = 'g';
    var tabRegExp = new RegExp(tabVal, tabMod);

    var lineVal = '\\b\n\\b';
    var lineMod = 'g';
    var lineRegExp = new RegExp(lineVal,lineMod);

data.replace(tabRegExp, function (a,b) { myTabPositions.push(b); return a;});
data.replace(lineRegExp, function (a,b) { myNewLinePosition.push(b); return a;});

console.log(myTabPositions);
console.log(myNewLinePosition);

})

// ----------------------------------------------------------

d3.html("https://www.linkedin.com/jobs/").get(function(error, data){

console.log(data);

});

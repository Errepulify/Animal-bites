/*Getting data from the csv file*/

queue()
    .defer(d3.csv, "data/animalBites.csv")
    .await(makeGraphs);

/*Creating all the graphs*/
function makeGraphs(error, yearData, ) {
    var ndx = crossfilter(yearData);


    show_bite_balance(ndx);
    show_breed_selector(ndx);




    dc.renderAll();
}


/*Dog breed selector menu*/
function show_breed_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('breed'));
    var group = dim.group();

    dc.selectMenu("#breed-selector")
        .dimension(dim)
        .group(group)
         .title(function (d) {
            return d.key;
        })
        .promptText("Choose your breed:");
        
}

function show_bite_balance(ndx) {
    var dim = ndx.dimension(dc.pluck('gender'));
    var group = dim.group().reduceSum(dc.pluck('bite'));

/*creates barchart total bites per gender*/
    dc.barChart("#total-bites-per-gender")
        .width(600)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 80 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Gender")
        .yAxisLabel("Total")
        .yAxis().ticks(20);
}

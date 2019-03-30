/*Getting data from the csv file*/

queue()
    .defer(d3.csv, "data/animalBites.csv")
    .await(makeGraphs);

/*Creating all the graphs*/
function makeGraphs(error, yearData, ) {
    var ndx = crossfilter(yearData);

    show_breed_selector(ndx);
    show_bar_chart(ndx);
    show_where_balance(ndx);
    show_country_balance(ndx);






    dc.renderAll();
}


/*Dog breed selector menu*/
function show_breed_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('breed'));
    var group = dim.group();

    dc.selectMenu("#breed-selector")
        .dimension(dim)
        .group(group)
        .title(function(d) {
            return d.key;
        })
        .promptText("Choose a Dog Breed");


}

function show_bar_chart(ndx) {
    var dim = ndx.dimension(dc.pluck('date'));
    var group = dim.group().reduceSum(dc.pluck('bite'));
    let myColors = d3.scale.ordinal().range(["#747dbd"]);

    /*creates barchart total bites per gender*/
    dc.barChart("#total-bites-per-year")
        .width(500)
        .height(300)
         .colors(myColors)
        .margins({ top: 10, right: 50, bottom: 40, left: 40 })
        .dimension(dim)
        .group(group)
       
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Year")
        .yAxisLabel("Total")
        .yAxis().ticks(20);
        
}

function show_where_balance(ndx) {
    var dim = ndx.dimension(dc.pluck('wherebitten'));
    var group = dim.group().reduceSum(dc.pluck('bite'));
     let myColors = d3.scale.ordinal().range(["#38598b"]);


    dc.barChart("#where-chart")
        .width(500)
        .height(300)
        .colors(myColors)
        .margins({ top: 10, right: 50, bottom: 40, left: 40 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Where")
        .yAxisLabel("Total")
        .yAxis().ticks(20);
}





function show_country_balance(ndx) {
    var dim = ndx.dimension(dc.pluck('country'));
    var group = dim.group().reduceSum(dc.pluck('bite'));
    let myColors = d3.scale.ordinal().range(["#0f3658"])


    dc.barChart("#country-chart")
        .width(550)
        .height(300)
        .colors(myColors)
        .margins({ top: 10, right: 50, bottom: 40, left: 40 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Country")
        .yAxisLabel("Total")
        .yAxis().ticks(20);
        
}

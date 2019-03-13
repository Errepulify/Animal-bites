/*Getting data from the csv file*/

queue()
    .defer(d3.csv, "data/animalBites.csv")
    .await(makeGraphs);

/*Creating all the graphs*/
function makeGraphs(error, yearData, ) {
    var ndx = crossfilter(yearData);

    show_breed_selector(ndx);
    show_breed2_selector(ndx);
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
/*Second dog breed selector menu*/
function show_breed2_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('breed'));
    var group = dim.group();


}




function show_bar_chart(ndx) {
    var dim = ndx.dimension(dc.pluck('date'));
    var group = dim.group().reduceSum(dc.pluck('bite'));

    /*creates barchart total bites per gender*/
    dc.barChart("#total-bites-per-year")
        .width(600)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 80 })
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


    dc.barChart("#where-chart")
        .width(600)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 80 })
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


    dc.barChart("#country-chart")
        .width(800)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 80 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Country")
        .yAxisLabel("Total")
        .yAxis().ticks(20);
}

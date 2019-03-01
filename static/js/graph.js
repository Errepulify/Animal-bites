queue()
    .defer(d3.csv, "data/animalBites.csv")
    .await(makeGraphs);
    
function makeGraphs(error, yearData,) {
    var ndx = crossfilter(yearData);
    
   
    show_bite_balance(ndx);
     
    
   

    dc.renderAll();
}

function show_bite_balance(ndx) {
    var dim = ndx.dimension(dc.pluck('gender'));
    var group = dim.group().reduceSum(dc.pluck('bite'));
   
    
    
    
    
    
    
    dc.barChart("#total-bites-per-animal")
        .width(600)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 80})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Animal")
        .yAxisLabel("Total")
        .yAxis().ticks(20);
        
        
       
}
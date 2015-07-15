function makepie(free, inuse) {

AmCharts.makeChart("chartdiv",
{
	"type": "pie",
	"balloonText": "",
	"innerRadius": 10,
	"labelRadius": 15,
	"labelText": "",
	"minRadius": 25,
	"radius": 25,
	"startAngle": 90,
	"baseColor": "#009ED3",
	"labelsEnabled": false,
	"marginBottom": 0,
	"marginTop": 0,
	"outlineAlpha": 1,
	"outlineThickness": 2,
	"pullOutDuration": 0,
	"sequencedAnimation": false,
	"startDuration": 0,
	"titleField": "Type",
	"valueField": "Number",
	"fontSize": 0,
	"panEventsEnabled": false,
	"theme": "default",
	"allLabels": [],
	"balloon": {},
	"titles": [],
	"dataProvider": [
		{
			"Type": "Free",
			"Number": free
		},
		{
			"Type": "In-Use",
			"Number": inuse
		}
	]
}
);
}

//make a pie chart
makepie("50","90")
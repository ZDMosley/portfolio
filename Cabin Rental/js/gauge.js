// Boxley Chart

var myURL = "https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=07055646,%2007055660,%2007055680,%2007055780&period=P7D&parameterCd=00065&siteStatus=all";


var myMethod = "GET";


$(document).ready(function() { 

  
    $.ajax({
      method: myMethod,
      url: myURL
    })


      .done(function( msg ) {

			var dates = [];
			var values = [];

		
			fLen = msg.value.timeSeries[0].values[0].value.length
			for (i = 0; i < fLen; i++) {
				values[i] = msg.value.timeSeries[0].values[0].value[i].value
				dates[i] = msg.value.timeSeries[0].values[0].value[i].dateTime
			}
			var sitename = msg.value.timeSeries[0].sourceInfo.siteName
			var sitecode = msg.value.timeSeries[0].sourceInfo.siteCode[0].value
			var siteDescription = msg.value.timeSeries[0].variable.variableDescription
			
			var ctx = document.getElementById("chartjs-0");
			var myChart = new Chart(ctx, {
				"type":"line",
				"data": {
					"labels": dates,
					"datasets":[{"label":"Gauge Height",
					"data": values,
					"fill":false,
					"borderColor":"rgb(136, 173, 142)",
					"lineTension":0.1}]},
					"options":{ 
						responsive: false,
    					maintainAspectRatio: true,
        				title: {
            				display: true,
            				text: sitename + ' - PID: ' + sitecode,
							fontSize : 18
        				},
						scales: {
            				xAxes: [{
                				type: 'time',
                				time: {
                  					 displayFormats: {
                        				day: 'MMM D'
                    				}
								}
							}],

							yAxes: [{
								scaleLabel: {
									display: true,
									labelString: siteDescription
								}
							}]

						}
					}
				}
			);
    	});
	});



// Ponca Chart

var myURL = "https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=07055646,%2007055660,%2007055680,%2007055780&period=P7D&parameterCd=00065&siteStatus=all";


var myMethod = "GET";


$(document).ready(function() { 

  
    $.ajax({
      method: myMethod,
      url: myURL
    })


      .done(function( msg ) {

			var dates = [];
			var values = [];

		
			fLen = msg.value.timeSeries[1].values[0].value.length
			for (i = 0; i < fLen; i++) {
				values[i] = msg.value.timeSeries[1].values[0].value[i].value
				dates[i] = msg.value.timeSeries[1].values[0].value[i].dateTime
			}
			var sitename = msg.value.timeSeries[1].sourceInfo.siteName
			var sitecode = msg.value.timeSeries[1].sourceInfo.siteCode[0].value
			var siteDescription = msg.value.timeSeries[1].variable.variableDescription
			
			var ctx = document.getElementById("chartjs-1");
			var myChart = new Chart(ctx, {
				"type":"line",
				"data": {
					"labels": dates,
					"datasets":[{"label":"Gauge Height",
					"data": values,
					"fill":false,
					"borderColor":"rgb(136, 173, 142)",
					"lineTension":0.1}]},
					"options":{ 
						responsive: false,
    					maintainAspectRatio: true,
        				title: {
            				display: true,
            				text: sitename + ' - PID: ' + sitecode,
							fontSize : 18
        				},
						scales: {
            				xAxes: [{
                				type: 'time',
                				time: {
                  					 displayFormats: {
                        				day: 'MMM D'
                    				}
								}
							}],

							yAxes: [{
								scaleLabel: {
									display: true,
									labelString: siteDescription
								}
							}]

						}
					}
				}
			);
    	});
	});


// Pruitt Chart

var myURL = "https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=07055646,%2007055660,%2007055680,%2007055780&period=P7D&parameterCd=00065&siteStatus=all";


var myMethod = "GET";


$(document).ready(function() { 

  
    $.ajax({
      method: myMethod,
      url: myURL
    })


      .done(function( msg ) {

			var dates = [];
			var values = [];

		
			fLen = msg.value.timeSeries[2].values[0].value.length
			for (i = 0; i < fLen; i++) {
				values[i] = msg.value.timeSeries[2].values[0].value[i].value
				dates[i] = msg.value.timeSeries[2].values[0].value[i].dateTime
			}
			var sitename = msg.value.timeSeries[2].sourceInfo.siteName
			var sitecode = msg.value.timeSeries[2].sourceInfo.siteCode[0].value
			var siteDescription = msg.value.timeSeries[2].variable.variableDescription
			
			var ctx = document.getElementById("chartjs-2");
			var myChart = new Chart(ctx, {
				"type":"line",
				"data": {
					"labels": dates,
					"datasets":[{"label":"Gauge Height",
					"data": values,
					"fill":false,
					"borderColor":"rgb(136, 173, 142)",
					"lineTension":0.1}]},
					"options":{ 
						responsive: false,
    					maintainAspectRatio: true,
        				title: {
            				display: true,
            				text: sitename + ' - PID: ' + sitecode,
							fontSize : 18
        				},
						scales: {
            				xAxes: [{
                				type: 'time',
                				time: {
                  					 displayFormats: {
                        				day: 'MMM D'
                    				}
								}
							}],

							yAxes: [{
								scaleLabel: {
									display: true,
									labelString: siteDescription
								}
							}]

						}
					}
				}
			);
    	});
	});


// Carver Chart

var myURL = "https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=07055646,%2007055660,%2007055680,%2007055780&period=P7D&parameterCd=00065&siteStatus=all";


var myMethod = "GET";


$(document).ready(function() { 

  
    $.ajax({
      method: myMethod,
      url: myURL
    })


      .done(function( msg ) {

			var dates = [];
			var values = [];

		
			fLen = msg.value.timeSeries[3].values[0].value.length
			for (i = 0; i < fLen; i++) {
				values[i] = msg.value.timeSeries[3].values[0].value[i].value
				dates[i] = msg.value.timeSeries[3].values[0].value[i].dateTime
			}
			var sitename = msg.value.timeSeries[3].sourceInfo.siteName
			var sitecode = msg.value.timeSeries[3].sourceInfo.siteCode[0].value
			var siteDescription = msg.value.timeSeries[3].variable.variableDescription
			
			var ctx = document.getElementById("chartjs-3");
			var myChart = new Chart(ctx, {
				"type":"line",
				"data": {
					"labels": dates,
					"datasets":[{"label":"Gauge Height",
					"data": values,
					"fill":false,
					"borderColor":"rgb(136, 173, 142)",
					"lineTension":0.1}]},
					"options":{ 
						responsive: false,
    					maintainAspectRatio: true,
        				title: {
            				display: true,
            				text: sitename + ' - PID: ' + sitecode,
							fontSize : 18
        				},
						scales: {
            				xAxes: [{
                				type: 'time',
                				time: {
                  					 displayFormats: {
                        				day: 'MMM D'
                    				}
								}
							}],

							yAxes: [{
								scaleLabel: {
									display: true,
									labelString: siteDescription
								}
							}]

						}
					}
				}
			);
    	});
	});



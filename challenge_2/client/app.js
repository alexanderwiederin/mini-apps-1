var csvConverter = (content) => {
	var obj = {};
	var csvString = '';

	var addAllCols = (content) => {

		if(Array.isArray(content)) {
		  content.forEach((element) => {
		  	addAllCols(element);
		  });
		} else if(typeof content === 'object') {
		  for(var key in content) {
		  	if(Array.isArray(content[key])) {
		      addAllCols(content[key]);
		    }
		    if(key !== 'children') {
			    obj[key] = [];
		    }
	    }
	  }

  }

  var addAllRows = (content) => {

		for(var key in content) {

			if(key !== 'children') {

				obj[key].push(content[key]);
			} else {
				content[key].forEach((child) => {
					addAllRows(child);
				})
			}
		}
  	
  }

  var printData = (object) => {
  	var columnNames = Object.keys(object);
  	var columnLength = object[columnNames[0]].length;
  	var totalArray = [];
 

  	csvString += columnNames.join(",") + '\n';

  	for(var i = 0; i < columnLength; i++) {
  		var salesPersonArray = [];
  		for(var key in object) {
  			salesPersonArray.push(object[key][i]);
  		}
  		csvString += salesPersonArray.join(",") + '\n';
  	}


  }


  addAllCols(content);
  addAllRows(content);
  printData(obj);

  return csvString;

 
}

module.exports.csvConverter = csvConverter;
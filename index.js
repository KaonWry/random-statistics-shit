var prompt = require('prompt-sync')();

//Processing the input
console.log("List the data, split each data with spaces");
var datalist = prompt();
datalist = datalist.split(" ");
datalist = datalist.map(function (x) { 
  return parseInt(x, 10); 
});
datalist = datalist.filter(function (value) {
    return !Number.isNaN(value);
});

//Sorting algorithm
function bubbleSort(arr){
   var len = arr.length;
   for (var i = len-1; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if(arr[j-1]>arr[j]){
           var temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
        }
     }
   }
   return arr;
}
bubbleSort(datalist);

//Count modus
distribution = {},
max = 0,
result = [];
datalist.forEach(function (a) {
    distribution[a] = (distribution[a] || 0) + 1;
    if (distribution[a] > max) {
        max = distribution[a];
        result = [a];
        return;
    }
    if (distribution[a] === max) {
        result.push(a);
    }
});

//Search median
function searchMedian (arr) {

	var medianIndex = 0;

	//If the data amount is even
	if (arr.length % 2 == 0) {
		 medianIndex = arr.length / 2;
		 console.log('The median (Q2) is ' + (arr[medianIndex - 1] + arr[medianIndex]) / 2);

		 //Search Q1 and Q3
		 var q1 = datalist.splice(0, medianIndex);
		 var q3 = datalist.splice(-medianIndex);
	}

	//If the data amount is odd
	else {
		medianIndex = (arr.length + 1) / 2;
		console.log('The median (Q2) is ' + arr[medianIndex - 1]);

		//Search Q1 and Q3
		var q1 = datalist.splice(0, medianIndex - 1);
		var q3 = datalist.splice(-medianIndex + 1);
		}

		
	//Q1 operations
	if (q1.length % 2 == 0){
		 	q1Median = q1.length / 2;
		 	console.log('Q1 is ' + (q1[q1Median] + q1[q1Median - 1]) / 2);
		}
	else {
			q1Median = (q1.length + 1) / 2;
		 	console.log('Q1 is ' + q1[q1Median - 1]);
		}

	//Q3 operations
	if (q3.length % 2 == 0){
		 	q3Median = q3.length / 2;
		 	console.log('Q3 is ' + (q3[q3Median] + q3[q3Median - 1]) / 2);
		}
	else {
			q3Median = (q3.length + 1) / 2;
		 	console.log('Q3 is ' + q3[q3Median - 1]);
		}
}

//Search for average value
function searchMean (arr) {
	var mean = (arr.reduce((a, b) => a + b, 0)) / arr.length;
	console.log('The average data is ' + mean);
}

//Declarations of logging

//Sorted
console.log("The data have been sorted to " + datalist.toString());
//Data ammount
console.log('The data has ' + datalist.length + ' members');
//Modus
console.log('Data with most count is ' + JSON.stringify(result) + ' with the frequency of ' + max);
//Each elements frequency
console.log(distribution);
//Average
searchMean(datalist);
//Median, Q1, and Q3
searchMedian(datalist);
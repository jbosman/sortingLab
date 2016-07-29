// Solution Video location
// https://www.youtube.com/watch?v=Dz0NkaBp-FM

function bubbleSort(array){

	for( var i = 0; i < array.length - 1; i++ ){
		for( var j = 0; j < array.length - 1; j++ ){
			var temp;
			if( compare( array[j], array[j+1]) ){
				temp = swapIndexes( array[j], array[j+1] );
				array[j] = temp[0];
				array[j+1] = temp[1];
			}
		}
	}

	return array;
}

function compare( param1, param2 ){
	return param1 > param2 ? true : false;
}

function swapIndexes( param1, param2 ){
	return [param2, param1];
}
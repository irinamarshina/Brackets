module.exports = function check(str, bracketsConfig) {
  // your solution
	//str=str.split(""); //split each character into an array
	let arr=[]; //work array
    //iterate over the charters and determine the truth
	for (var i = 0; i <str.length; i++) {
		for (var j = 0; j <bracketsConfig.length; j++) {
			if(str[i]==bracketsConfig[j][1]&&arr[arr.length-1]==bracketsConfig[j][0]){
				arr.pop();
			}else if(str[i]==bracketsConfig[j][0]){
				arr.push(str[i]);
			}
		}
	}
	//returns result to test
	return arr.length==0?true:false;
}
module.exports = function check(str, bracketsConfig) {
	var arr=[];
	for (var i = 0; i <str.length; i++) { //перебираем строку
		for (var j = 0; j <bracketsConfig.length; j++) { 
			if(str[i]==bracketsConfig[j][0]&&str[str.length-(i+1)]==bracketsConfig[j][1]){ //проверяем левые и правые скобки
				arr.push(str[i]);
			}else if(str[i]==bracketsConfig[j][1]){
				arr.pop(str[i]);
			}
		}
	}
	return arr.length==0 && str.length % 2==0 ? true : false; //вывод результата
}

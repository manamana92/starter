function countWords(inputWords){
	var redobj = new Object();
	inputWords.reduce(function(x0,x,idx,arr){
		if(idx==1){redobj[x0]=1;};
		if(redobj[x]==undefined){
			console.log(x);
			redobj[x]=1;
		}else{
			redobj[x]+=1;
		};
		return;
	});
	return redobj;
};

module.exports=countWords;

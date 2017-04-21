function ClozeCard(text, cloze){


	try{

		if(text.indexOf(cloze) >= 0){
			this.fullText = text;
			this.cloze = cloze;
			this.partial = text.replace(cloze, '...');
		}else{
			this.fullText = text;
			this.cloze = cloze;
			this.partial = "partial text failed";
			throw "cloze is not in text";
		}

	}
	catch(err){
		console.log("error - " + err);
	}



	// this.fullText = function(){
	// 	//return this.text;	
	// 	return 'clozetext';
	// }

	// this.cloze = function(){
	// 	//return this.clozetext;
	// 	return 'clozetext';
	// }

	// this.partial = function(){
	// 	var partialText = this.text.replace(clozetext, '...');
	// }


}


module.exports = ClozeCard;
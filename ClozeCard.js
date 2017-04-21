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

}


module.exports = ClozeCard;
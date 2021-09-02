let frameNum=1;
let fTwoSign=document.getElementById("frameTwoSign");
let fThreeImg=document.getElementById("frameThreeKeyloggingImag");
let fTwoInst=document.getElementById("frameTwoInstruct");
fTwoInst.addEventListener("mouseout", original);

window.onscroll = function() {scrolling(frameNum)};


function ignition(x){
	if(frameNum==1){
		x.style.width="200%";
		x.style.marginLeft="-50%";
		x.style.height="200%";
		x.style.marginTop="-25%"
		x.style.opacity="0";
		x.style.borderRadius="100%";
		document.getElementById("titleText").style.marginTop="-50%";
		document.getElementById("frameOneInstruct").style.opacity="0";
		frameNum=2;
		frameTwo();
	}
	
}

function frameTwo(){
	if(frameNum!=2){
		window.alert("Error 001, frameNum do not match");
	}
	else{
		fTwoInst.style.opacity="100";
		fTwoInst.style.marginTop="-85%";
		document.getElementById("frameTwoTypingImag").style.opacity="100";
		fTwoSign.style.opacity="100";
	    document.getElementById("frameTwoHackerImag").style.opacity="100";
		console.log("frameTwoRun");
		document.getElementById("frameTwoHacker").style.opacity="100";
		document.getElementById("frameTwoTyping").style.opacity="100";
		document.getElementById("frameTwoHacker").style.marginTop="-53%";
		document.getElementById("frameTwoTyping").style.marginTop="-53%";



	}
}

function scrolling(n){
	if(n==2){
		if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
			//documentElement is the <html></html> in certain browsers
			document.getElementById("frameTwoHacker").style.transitionDelay="0s";
			document.getElementById("frameTwoTyping").style.transitionDelay="0s";
			document.getElementById("frameTwoHacker").style.opacity="0";
			document.getElementById("frameTwoTyping").style.opacity="0";
			document.getElementById("frameTwoTypingImag").style.transitionDelay="0s";
	    	document.getElementById("frameTwoHackerImag").style.transitionDelay="0s";
	    	fTwoSign.style.transitionDelay="0s";
	    	document.getElementById("frameTwoTypingImag").style.opacity="0";
	    	document.getElementById("frameTwoHackerImag").style.opacity="0";
	    	fTwoSign.style.marginLeft="48%";
	    	fTwoSign.innerHTML="=";
	    	fThreeImg.style.opacity="100";
	    	setTimeout(frameThree, 1000);
		}
	}
	
}

function frameThree(){
	frameNum=3;
	fTwoSign.style.marginTop="-75%";
	fThreeImg.style.marginTop="-70%";
	document.getElementById("frameThreeDefinition").style.opacity="100";
	document.getElementById("frameThreeOverview").style.opacity="100";
	document.getElementById("frameThreeLegal").style.opacity="100";
	document.getElementById("frameThreeMicro").style.opacity="100";
	document.getElementById("frameThreeKeylogging").style.opacity="100";
	document.getElementById("frameThreeDangerous").style.opacity="100";
	document.getElementById("frameThreeHTTPS").style.opacity="100";
	document.getElementById("frameThreeUpdate").style.opacity="100";
	document.getElementById("frameThreeLight").style.opacity="100";

	document.getElementById("frameThreeDangerous").style.marginTop="-60%";
	document.getElementById("frameThreeHTTPS").style.marginTop="0%";
	document.getElementById("frameThreeKeylogging").style.marginLeft="51%";

	document.querySelector("body").style.backgroundColor = "#0B132B";
	// fTwoSign.style.transition="color .5s ease, margin-top 1s ease";
	fTwoSign.style.color="snow";
	fTwoInst.style.color="snow";
	fTwoInst.innerHTML="Click on Me!";
	fTwoInst.style.marginLeft="38%";
	window.scrollTo(0, 0);
	document.getElementById("frameThreeOverview").style.position="absolute";
	document.getElementById("frameThreeKeylogging").style.position="absolute";
	fTwoSign.style.position="absolute";
	fTwoInst.style.position="absolute";
	fThreeImg.style.position="absolute";
	document.getElementById("frameThreeDefinition").style.position="absolute";
	document.getElementById("frameThreeMicro").style.position="absolute";
	document.getElementById("frameThreeHTTPS").style.position="absolute";
	document.getElementById("frameThreeUpdate").style.position="absolute";

}


function frameThreeHover(x){
	if (frameNum==2) {};

	if(frameNum==3){
		x.style.fontSize="47px";
	}
}

function original(){
	if(frameNum==3){
		fTwoInst.style.fontSize="50px";
	}
}

function frameFour(){
	if(frameNum==3){
		fTwoInst.style.opacity="0";
		fTwoSign.style.opacity="0";
		document.getElementById("frameThreeMicro").style.zIndex="-1"
		document.getElementById("frameThreeDefinition").style.opacity="0";
		document.getElementById("frameThreeMicro").style.opacity="0";
		document.getElementById("frameThreeHTTPS").style.opacity="0";
		document.getElementById("frameThreeUpdate").style.opacity="0";
		document.getElementById("frameThreeOverview").style.opacity="0";
		document.getElementById("frameThreeKeylogging").style.opacity="0";
		document.getElementById("frameThreeKeyloggingImag").style.opacity="0";
		document.getElementById("frameThreeDangerous").style.opacity="0";
		document.getElementById("frameThreeLegal").style.opacity="0";
		document.getElementById("frameThreeLight").style.opacity="0";
		document.querySelector("body").style.backgroundColor = "snow";

		setTimeout(frameFourIg, 2000);
	}
	frameNum=4;

}

function frameFourIg(){
	document.getElementById("frameFourDetect").style.opacity="100";
	document.getElementById("frameFourDetectP").style.opacity="100";
	document.getElementById("frameFourDetectImg").style.opacity="100";
	document.getElementById("frameFourDestory").style.opacity="100";
	document.getElementById("frameFourDestoryImg").style.opacity="100";
	document.getElementById("frameFourSmash").style.opacity="100";
	document.getElementById("frameFourDestoryList").style.opacity="100";
	document.getElementById("frameFourAvoid").style.opacity="100";
	document.getElementById("frameFourAvoidLi").style.opacity="100";

	document.getElementById("frameFourDetect").style.color="#B33951";
	document.getElementById("frameFourDestory").style.color="#D17A22";
	document.getElementById("frameFourAvoid").style.color="#246EB9";


	document.querySelector("body").style.backgroundColor = "#91C7B1";
}



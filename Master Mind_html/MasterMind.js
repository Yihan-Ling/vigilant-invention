// 0=null, 1=Blue 2=Green 3=Orange 4=Purple 5=Red 6=yellow

let grid=new Array(10);
let answer=new Array(4);

let win=false;
let lose=false;

for(let i=0; i<10; i++){
	grid[i]=new Array(4);
}

let index=1;

let computerOpp=true;

if(prompt("Do you want to the computer to choose the answer (type'0'). If you want a human to choose the answer, type '1'. ")==="0"){
	computerOpp=true;
	console.log("computer");
}
else{
	computerOpp=false;
	console.log("human");
}



let colorHex=new Array(6);

let indicator =document.getElementById("indicator");
let inPos=Number(indicator.style.top);
let move=110;

colorHex[0]="#88CCF1";
colorHex[1]="#8CBA80";
colorHex[2]="#EE8434";
colorHex[3]="#6F58C9";
colorHex[4]="#A63A50";
colorHex[5]="#FFEF9F";

let full=false;

let checked=new Array(10);
let mark=new Array(4);


reset();

function reset(){
	console.clear();

	for(let i=0; i<4; i++){
		answer[i]=Math.floor(Math.random()*4 +1);

	}
	console.log(answer);

	for(let r=0; r<10; r++){
		checked[r]=false;
		for(let c=0; c<4; c++){
			grid[r][c]=0;
			let id=r*4+c+1;
			document.getElementById(String(id)).style.backgroundColor="snow";
			id="s"+id;
			document.getElementById(String(id)).style.backgroundColor="#C7C7A6";
		}
	}
	indicator.style.top=0;
	inPos=0;
	index=1;
	win=false;
	lose=false;
	document.getElementById("winTag").style.visibility="hidden";
	document.getElementById("loseTag").style.visibility="hidden";
	for(let i=0; i<4; i++){
		mark[i]=false;
	}

}

function Delete(){
	r= Math.floor((index-2)/4);
	if(!checked[r]){
		for(let c=1; c<=(index-2)%4+1; c++){
			console.log ("c: "+c);
			grid[r][c]=0;
			document.getElementById(c+r*4).style.backgroundColor="snow";
		}
		index-=(index-2)%4;
		index--;
		console.log(index);
		full=false;
	}	

}


function guess(color){
	if(!full&&!win&&!lose){
		console.log("index: "+index);
		document.getElementById(index).style.backgroundColor=colorHex[color-1];
		
		r= Math.floor((index-1)/4);
		c= (index-1)%4;
		// console.log("r: "+r+"c: "+c+"color: "+color);
		grid[r][c]=color;
		

		if(index%4===0){
			full=true;
		}



		index++;

	}
	
}

function check(){
	if(!full){
		console.log("You have to fill the guess before check!");
	}
	else{
		full=false;
		moveIndicator();
		checkWin();
	}
}



function moveIndicator(){
	inPos+=move;
	indicator.style.top=inPos+"px";
			
	console.log("Indicator top: "+indicator.style.top);
}

function checkWin(){	
	// console.log(index);
	let ind=index-1;
	let r=0;
	r=ind/4;
	r--;
	checked[r]=true;
	console.log("r: "+r);
	let blackNum=0;
	let whiteNum=0;
	
	for(let i=0; i<4; i++){	
		if(grid[r][i]==answer[i]){
			blackNum++;
			mark[i]=true;
		}
		
	}
	for(let i=0; i<4; i++){
		for(let m=0; m<4; m++){
			if(mark[m]){
				break;
			}
			// if(mark[i]){
			// 	break;
			// }
			if(grid[r][i]==answer[m]){
				whiteNum++;
				mark[m]=true;
				break;
			}
		}
		
	}

	for(let i=0; i<4; i++){
		mark[i]=false;
	}

	if(blackNum==4){
		win=true;
		document.getElementById("winTag").style.visibility="visible";
	}

	for(let i=0; i<blackNum; i++){
			let id="s"+Math.floor((r*4)+i+1);
			console.log(String(id));
			document.getElementById(id).style.backgroundColor="black";
	}
	// console.log("whiteNum"+whiteNum)
	for(let i=0; i<whiteNum; i++){
			let id="s"+Math.floor((r*4)+i+1+blackNum);
			console.log(String(id));
			document.getElementById(id).style.backgroundColor="snow";
	}


	if(index===41&&!win){
		lose=true;
		document.getElementById("loseTag").style.visibility="visible";
		document.getElementById("a1").style.backgroundColor=colorHex[answer[0]-1];
		document.getElementById("a2").style.backgroundColor=colorHex[answer[1]-1];
		document.getElementById("a3").style.backgroundColor=colorHex[answer[2]-1];
		document.getElementById("a4").style.backgroundColor=colorHex[answer[3]-1];

	}
}

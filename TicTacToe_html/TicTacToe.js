let grid=new Array(3);
//0=unfilled; 1=x; -1=o
let winner=0;
//0=unfilled; 1=x; -1=o
let cele=document.querySelector("h1");
cele.style.visibility="hidden";

let xWin=0;
let oWin=0;

let computerOpp = false;

if(prompt("Do you want to play against the computer or another human? If you choose human, type 0, choose compter input 1.")==0){
	computerOpp=false;
}
else{
	computerOpp=true;
}

document.getElementById("xWin").innerHTML="X won "+xWin+" times";
document.getElementById("oWin").innerHTML="O won "+oWin+" times";

for(let i =0; i<3; i++){
	grid[i]=new Array(3);
}

for(let r=0; r<3; r++){
	for(let c=0; c<3; c++){
		grid[r][c]=0;
	}
}

let count=0;

if(computerOpp){
	computerRow=Math.floor(Math.random()*3);
	computerCol=Math.floor(Math.random()*3);

	computerAction(computerRow,computerCol);

	document.querySelector("#switchButton").innerHTML="Switch to Human Opponent";

}

function switchOpp(){

	if(computerOpp){
		computerOpp=false;
		document.querySelector("#switchButton").innerHTML="Switch to Compter Opponent";
	}
	else{
		computerOpp=true;
		computerRow=Math.floor(Math.random()*3);
		computerCol=Math.floor(Math.random()*3);

		computerAction(computerRow,computerCol);

		document.querySelector("#switchButton").innerHTML="Switch to Human Opponent";
	}
	
	restart();
}

function action(row,col){
	if(winner==0){
		console.log("clickNum: "+count);

		if(grid[row][col] == 0){
				count++;

			if(count%2!=0){
				let sym="x";
				console.log(sym);
				grid[row][col]=1;
				show(sym, row, col);
				winner=checkWin(1, row, col);
				console.log(winner);
				if(winner!=0){
					cele.style.visibility="visible";
					cele.innerHTML="X player wins!!!~~~";
					xWin++;
					document.getElementById("xWin").innerHTML="X won "+xWin+" times";
				}	
				

			}
			else{
				let sym="o";
				console.log(sym);
				grid[row][col]=-1;
				show(sym, row, col);
				winner=checkWin(-1,row,col);
				console.log(winner);
				if(winner!=0){
					cele.style.visibility="visible";
					cele.innerHTML="O player wins!!!~~~";
					oWin++;
					document.getElementById("oWin").innerHTML="O won "+oWin+" times";
				}	
					
			}


			if(computerOpp){
				computerAction(Math.floor(Math.random()*3),Math.floor(Math.random()*3));
			}

		}

	}
	
	
}

function show(sym, r, c){
	let id=(r*3)+c;
	let para = document.getElementById(id).innerHTML=sym;
	
}


function checkWin (sym, r, c) {

	// horizontal check
	if(c===0){
		if(grid[r][c+1]==sym&&grid[r][c+2]==sym){
			return sym;
		}
	}
	if(c==1){
		if(grid[r][c+1]==sym&&grid[r][c-1]==sym){
			return sym;
		}
	}
	
	if(c==2){
		if(grid[r][c-1]==sym&&grid[r][c-2]==sym){
			return sym;
		}
	}

	// vertical check
	if(r==0){
		if(grid[r+1][c]==sym&&grid[r+2][c]==sym){
			return sym;
		}
	}
	if(r==1){
		if(grid[r-1][c]==sym&&grid[r+1][c]==sym){
			return sym;
		}
	}
	if(r==2){
		if(grid[r-1][c]==sym&&grid[r-2][c]==sym){
			return sym;
		}
	}

	//diagnoal check

	if (r==0&&c==0) {
		if(grid[r+1][c+1]==sym&&grid[2][2]==sym){
			return sym;
		}
	}
	if (r==1&&c==1) {
		if(grid[0][0]==sym&&grid[2][2]==sym){
			return sym;
		}
	}
	if (r==2&&c==2) {
		if(grid[0][0]==sym&&grid[1][1]==sym){
			return sym;
		}
	}


	if (r==0&&c==2) {
		if(grid[1][1]==sym&&grid[2][0]==sym){
			return sym;
		}
	}
	if (r==1&&c==1) {
		if(grid[0][2]==sym&&grid[2][0]==sym){
			return sym;
		}
	}
	if (r==2&&c==0) {
		if(grid[1][1]==sym&&grid[0][2]==sym){
			return sym;
		}
	}

	return 0;
}


function restart(){
	winner=0;
	for(let r=0; r<3; r++){
		for(let c=0; c<3; c++){
			grid[r][c]=0;
			let id=(r*3)+c;
			let para = document.getElementById(id).innerHTML="";
		}
	}
	count=0;
	cele.style.visibility="hidden";

	if(computerOpp){
		computerRow=Math.floor(Math.random()*3);
		computerCol=Math.floor(Math.random()*3);

		computerAction(computerRow,computerCol);

	}
	
}

function computerAction(row,col){
	if(winner==0){
		console.log("clickNum: "+count);

		if(grid[row][col] == 0){
				count++;

			
			let sym="x";
			console.log(sym);
			grid[row][col]=1;
			show(sym, row, col);				
			winner=checkWin(1, row, col);
			console.log(winner);
			if(winner!=0){
				cele.style.visibility="visible";
				cele.innerHTML="X player wins!!!~~~";
				xWin++;
				document.getElementById("xWin").innerHTML="X won "+xWin+" times";
			}

		}
		else{
			computerAction(Math.floor(Math.random()*3),Math.floor(Math.random()*3));
		}

	}
	
}

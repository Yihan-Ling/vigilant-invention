let data="";
let startupElements=document.getElementsByClassName("startup");
let testElements=document.getElementsByClassName("test");
let country=[];
let gender="";
let hobby="";
let ageMin=3;
let ageMax=100;
let ageRange="";




function ArmNuclear(nuclearButton){
	nuclearButton.style.borderRadius="100%";
	nuclearButton.style.backgroundColor="#F03207";
	// console.log("onmouseover");

}

function DisarmNuclear(nuclearButton){
	nuclearButton.style.borderRadius="25px";
	nuclearButton.style.backgroundColor="#FA7E61";
	// console.log("onmouseout");
}

function boom(){
	for (let i = 0; i < startupElements.length; i++) {
		startupElements[i].style.opacity = "0";
	}


	startTest();
}

function startTest(){

	for (let i = 0; i < testElements.length; i++) {
		testElements[i].style.opacity = "100";
	}

	document.getElementById("questions").style.marginTop="-197%";

	for (let i = 0; i < startupElements.length; i++) {
		startupElements[i].style.position="absolute";
		startupElements[i].style.marginTop="700%";
		startupElements[i].style.zIndex="-1";
	}

	window.scrollTo(0,0);


}

function analyze(){
	let geo="unknown";
	let fn=document.getElementById("fname").value;
	let ln=document.getElementById("lname").value;
	let bf=document.getElementById("friend").value;
	let freeTime=document.getElementById("hobby").value;
	let meetFriend=document.getElementById("social1").checked;
	let meetParent=document.getElementById("social2").checked;
	let meetCoworker=document.getElementById("social3").checked;
	let meetClassmate=document.getElementById("social4").checked;
	let maritalStatusArr=document.getElementsByName("marriage");
	let maritalStatus="";
	for(let i=0; i<maritalStatusArr.length; i++){
		if(maritalStatusArr[i].checked){
			maritalStatus=maritalStatusArr[i].value;
		}
	}
	let travelTimesArr=document.getElementsByName("travel");
	let travelTimes="";
	for(let i=0; i<travelTimesArr.length; i++){
		if(travelTimesArr[i].checked){
			travelTimes=travelTimesArr[i].value;
		}
	}
	let travelPurArr=document.getElementsByName("travelPur");
	let travelPur="";
	for(let i=0; i<travelPurArr.length; i++){
		if(travelPurArr[i].checked){
			travelPur=travelPurArr[i].value;
		}
	}

	consoleMessage(fn, ln, bf, freeTime, meetFriend, meetParent, meetCoworker, meetClassmate, maritalStatus, travelTimes, travelPur);
	
	checkGender(fn, bf);
	checkOrigin(ln);
	checkHobby(freeTime);
	checkAge(meetFriend, meetParent, meetCoworker, meetClassmate, maritalStatus, travelTimes, travelPur);
	console.log("country guess: "+country);
	console.log("gender guess: "+gender);
	console.log("hobby guess: "+hobby);
	console.log("age guess: "+ageRange);

	showResult();
}



function checkGender(n, bf){
	n=n.toLowerCase();
	let boy=["liam", "noah", "oliver", "william", "elijah", "logan", "jason", "jack", "james", "dylan", "ethan", "lucas", "jacob", "mason", "aiden", "nenjamin", "alex", "alexander", "henry", "michael", "daniel","owen","matthew","joseph","luke", "issac", "jayden", "leo", "leon", "lincoln", "asher", "christopher", "andrew", "thomas", "ryan", "nathan", "max", "carson", "adam", "evan", "ryder", "george", "max"];
	let girl=["olivia", "emma", "ava", "sophia", "isabella", "charlotte", "amelia", "mia", "emily", "ella", "elizabeth", "luna", "camila", "sofia", "scarlett", "layla", "chloe", "victoria", "grace", "zoey", "hannah", "hazel", "violet", "ellie", "zoe", "stella", "lucy", "claire", "isla", "anna", "maya", "alice", "ginna", "eva", "sarah", "sophie", "josephine", "jullianne", "julia", "lydia", "maria", "rose", "isabelle", "isabel", "alexa", "celina", "lucia", "sara"];
	for(let i=0; i<boy.length;i++){
		if(n==boy[i]){
			gender="Male";
		}
	}
	for(let i=0; i<girl.length;i++){
		if(n==girl[i]){
			gender="Female";
		}
	}

	if(gender==""){
		let arr=bf.split(" ");

		for(let i=0; i<arr.length;i++){
			if(arr[i]=="he"||arr[i]=="He"){
				gender="Male";
			}
		}
		for(let i=0; i<arr.length;i++){
			if(arr[i]=="she"||arr[i]=="She"){
				gender="Female";
			}
		}
	}

}

function checkOrigin(n){
	n=n.toLowerCase();
	let china=["wang","chen", "cui", "deng", "zhang", "liu", "jin", "yang", "huang", "zhao", "wu", "xu", "sun", "ma", "zhu", "hu", "guo", "peng", "gao", "luo", "zheng", "liang", "xie", "song", "tang", "xu", "feng", "cao", "zeng", "tian", "dong", "pan", "yuan", "cai", "jiang", "yu", "du", "ye", "wei", "su", "lv", "ding", "ren", "yao", "shen", "zhong", "jiang", "tan", "lu", "ling", "kong"];
	let canada=["tremblay", "gagnon", "roy", "bouchard", "gauthier", "morin", "lavoie", "fortin", "gagne"];
	let costaRica=["mora","morales", "rojas", "vargas", "torres", "salas", "segura", "valverde", "villalobos", "araya", "herrera", "madrigal"];
	let cuba=["martinez"];
	let mexico=["flores", "torres", "garcia", "cruz", "morales", "reyes", "mendoza", "aguilar", "castillo", "romero", "moreno", "rivera", "ramos", "herrera", "medina", "vargas", "castro", "salazar", "rojas", "guerrero", "contreras", "luna", "garza", "estrada", "soto", "cortez", "lara", "espinoza", "vega", "cervantes", "sandoval", "carrillo", "alvarado", "silva", "navarro", "valdez"];
	let america=["smith", "johnson", "williams", "brown", "jones", "miller", "davis", "garcia", "klett", "wilson", "anderson", "taylor", "thomas", "moore", "marton", "hart", "ames", "martin", "jackson", "thompson", "white", "lee", "lopez", "harris", "clark", "lewis", "robinson", "walker", "hall", "king", "wright", "green", "baker", "adams", "nelson", "hill", "campbell", "hague", "shattuck", "carter", "mitchell", "evans", "parker", "collins", "edwards", "stewart", "murphy", "cook", "rogers", "morgan", "peterson", "cooper", "bell", "kelly", "howard", "bryant","brooks", "gray", "james"];
	let korea=["kim", "lee", "ahn", "bae", "baek", "bai", "bang", "byun", "cha", "chai", "chang", "chay", "cheong", "choi", "chi", "chu", "han", "hon", "jang", "jee", "jeon", "jin", "joh", "jong", "jun", "ma", "min", "seo", "song", "son", "sun", "sung", "yang", "yun"];

	for(let i=0; i<china.length; i++){
		if(n==china[i]){
			// console.log("chinese");
			country.push("China");
		}
	}
	for(let i=0; i<canada.length; i++){
		if(n==canada[i]){
			// console.log("canadian");
			country.push("Canada");
		}
	}
	for(let i=0; i<costaRica.length; i++){
		if(n==costaRica[i]){
			// console.log("costa rican");
			country.push("Costa Rica");
		}
	}
	for(let i=0; i<cuba.length; i++){
		if(n==cuba[i]){
			// console.log("cuban");
			country.push("Cuba");
		}
	}
	for(let i=0; i<mexico.length; i++){
		if(n==mexico[i]){
			// console.log("mexcican");
			country.push("Mexico");
		}
	}
	for(let i=0; i<america.length; i++){
		if(n==america[i]){
			// console.log("american");
			country.push("America");
		}
	}
	for(let i=0; i<korea.length; i++){
		if(n==korea[i]){
			// console.log("korean");
			country.push("Korea");
		}
	}

}

function checkHobby(freeTime){

	let arr=freeTime.split(" ");

	for(let i=0; i<arr.length; i++){
		if(arr[i]=="like"||arr[i]=="love"||arr[i]=="enjoy"){
			// if(arr[i+1]=="to"){
				let j=1;
				// console.log(arr[i+j].search("."));
				while(arr[i+j].indexOf(".") == -1 && i+j<arr.length){
					hobby= hobby.concat(arr[i+j]+" ");
					j++;
					if(i+j>=arr.length){
						break;
					}
				}
				if(i+j<arr.length){
					hobby=hobby.concat(arr[i+j]);
				}
				
			// }
			
		}
	}
}

function checkAge(meetFriend, meetParent, meetCoworker, meetClassmate, maritalStatus, travelTimes, travelPur){
	if(meetParent){
		ageMax=Math.min(ageMax,75);
	}
	if (meetCoworker){
		ageMin=Math.max(ageMin,20);
		ageMax=Math.min(ageMax,60);
	}
	if(meetClassmate){
		ageMin=Math.max(ageMin,6);
		ageMax=Math.min(ageMax,24);
	}
	if(maritalStatus=="married"){
		ageMin=Math.max(ageMin,25);
	}
	else if(maritalStatus=="engaged"){
		ageMin=Math.max(ageMin,20);
		ageMax=Math.min(ageMax,35);
	}
	else if (maritalStatus=="divorced"){
		ageMin=Math.max(ageMin,32);
	}
	else if(maritalStatus=="love"){
		ageMin=Math.max(ageMin,15);
		ageMax=Math.min(ageMax,35);
	}
	else if(maritalStatus=="single"){
		ageMax=Math.min(ageMax,32);
	}

	if(travelTimes=="10more"){
		ageMin=Math.max(ageMin,15);
	}
	if(travelPur=="business"){
		ageMin=Math.max(ageMin,25);
		if(travelTimes=="6-10"||travelTimes=="10more"){
			ageMin=Math.max(ageMin,35);
		}
	}

	ageRange=ageMin+"-"+ageMax;
}


function consoleMessage(fn, ln, bf, freeTime, meetFriend, meetParent, meetCoworker, meetClassmate, maritalStatus, travelTimes, travelPur){
	console.log("first name: "+fn);
	console.log("last name: "+ln);
	console.log("free time: "+ freeTime);
	console.log("friend: "+bf);
	console.log("meet friend: "+meetFriend);
	console.log("meet parent: "+ meetParent);
	console.log("meetCoworker: "+meetCoworker);
	console.log("marital status: "+maritalStatus);
	console.log("travel times: "+travelTimes);
}

function showResult(){
	let testArr=document.getElementsByClassName("test");
	for(let i=0; i<testArr.length; i++){
		testArr[i].style.opacity="0";
		testArr[i].style.position="absolute";
		testArr[i].style.marginTop="500%";

	}

	
	let resultArr=document.getElementsByClassName("result");
	for(let i=0; i<resultArr.length; i++){
		resultArr[i].style.opacity="100";
	}
	// document.getElementById("resultTitle").style.marginTop="-273%";
	// document.getElementById("country").style.marginTop="-271%";

	window.scrollTo(0,0);

	let countryString="";
	for(let i=0; i<country.length; i++){
		countryString=countryString.concat(country[i]);
		if(i!==country.length-1){
			countryString=countryString.concat(", ");
		}
	}
	if(countryString==""){
		countryString="Cannot Determine";
	}
	if(gender==""){
		gender="Cannot Determine"
	}
	if(hobby==""){
		hobby="Cannot Determine";
	}

	document.getElementById("countryResult").innerHTML=countryString;
	document.getElementById("genderResult").innerHTML=gender;
	document.getElementById("hobbyResult").innerHTML=hobby;
	document.getElementById("ageResult").innerHTML=ageRange;
}

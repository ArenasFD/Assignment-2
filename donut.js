intro.addEventListener("click",function(){
    pagetitle.innerHTML= "Introduction";
    console.log ("intro")
    document.body.classList.remove("sprinkles");
	document.body.classList.remove("boston");
	document.body.classList.remove("maple");
    document.body.classList.add("intro" );
    document.getElementById('fd').src="ddonut.jpeg";
	document.getElementById('fd').alt= " Diego holding Donut";

// Currently working on changin photos// 


})

sprinkles.addEventListener("click",function(){
    
    pagetitle.innerHTML= "Sprinkles";
    console.log ("sprinkels")
    document.body.classList.remove("intro");
	document.body.classList.remove("boston");
	document.body.classList.remove("maple");
    document.body.classList.add("sprinkles" );
    document.getElementById('fd').src="s.nut.jpeg";
	document.getElementById('fd').alt= " Sprinkle Donut Bite";

})

boston.addEventListener("click",function(){
    
    pagetitle.innerHTML= "Boston Cream";
    console.log ("boston")
    document.body.classList.remove("intro");
	document.body.classList.remove("sprinkles");
	document.body.classList.remove("maple");
    document.body.classList.add("boston" );
    document.getElementById('fd').src="b.nut.jpeg";
	document.getElementById('fd').alt= " Boston Cream Donut Bite";

})

maple.addEventListener("click",function(){
    
    pagetitle.innerHTML= "Canadian Maple";
    console.log ("maple")
    document.body.classList.remove("intro");
	document.body.classList.remove("sprinkles");
	document.body.classList.remove("maple");
    document.body.classList.add("maple" );
    document.getElementById('fd').src="m.nut.jpeg";
	document.getElementById('fd').alt= " Canadian Maple Donut Bite";

})

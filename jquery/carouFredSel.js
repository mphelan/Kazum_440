

$(function(){
	$('#foo4').carouFredSel({
		width: '100%',
		scroll: 2
	});
});


$(function(){
	$('#foo5').carouFredSel({
		responsive: true,
		width: '100%',
		scroll: 2,
		items: {
			width: 400,
			//	height: '30%',	//	optionally resize item-height
			visible:{
					min: 2,
					max: 6
					}
				}
	});
});


$(function(){		    

$("#foo666").carouFredSel({
circular: false,
infinite: false,
auto 	: false,
scroll	: {
items	: "page"
},
prev	: {	
button	: "#foo666_prev",
key		: "left"
},
next	: { 
button	: "#foo666_next",
key		: "right"
},
pagination	: "#foo666_pag"
});


});
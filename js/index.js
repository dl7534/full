$(function(){
	$('#fullpage').fullpage({
		sectionsColor:["#24354C", "#67AF32", "#24354C", "#67AF32", "#24354C", "#67AF32", "#24354C"],
		scrollingSpeed:700,
		autoScrolling:false,
		animateAnchors:true,
		navigation:true,
		showActiveTooltip:true,
		anchors: ["Introduction", "Conversation", "Plan", "Produce", "Deliver", "Results", "Talk"],
		navigationTooltips:["Introduction", "Conversation", "Plan", "Produce", "Deliver", "Results", "Talk"],
		showActiveTooltip:false,
		// showActiveTooltip:['INTRODUCTION','CONVERSATION','PLAN','PRODUCE','DELIVER','RESULTS','TALK'],
       

       // events
		afterLoad: function(anchorLink, index){
				startSlide(anchorLink, index);
			},
		onLeave: function(index, direction){
				endSlide(index);
			}
       
	});
	startSlide("",1);
	function startSlide(anchorsLink,index){
		console.log(anchorsLink)
		 switch(index){
		 	case 1:
		 	  $(".typed-introduction").on({
		 	  	 string:["UNABRIDGED SOFTWARE"],
		 	  	 typeSpeed:111,
                 callback:function(){
                 	$('span#typed-cursor').stop().addClass('typed-green');
                 }
		 	  });
		 	break;
		 }
	}
	function endSlide(index,direction){
		 switch(index){
		 	case 1:
		 	break;
		 }
	}
})	
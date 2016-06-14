/*
Bones Scripts File
Author: Eddie Machado

This file should contain any js scripts you want to add to the site.
Instead of calling it in the header or throwing it inside wp_head()
this file will be called automatically in the footer so as not to
slow the page load.

*/

// IE8 ployfill for GetComputed Style (for Responsive Script below)
if (!window.getComputedStyle) {
	window.getComputedStyle = function(el, pseudo) {
		this.el = el;
		this.getPropertyValue = function(prop) {
			var re = /(\-([a-z]){1})/g;
			if (prop == 'float') prop = 'styleFloat';
			if (re.test(prop)) {
				prop = prop.replace(re, function () {
					return arguments[2].toUpperCase();
				});
			}
			return el.currentStyle[prop] ? el.currentStyle[prop] : null;
		}
		return this;
	}
}

// as the page loads, call these scripts
jQuery(document).ready(function($) {

	/*
	Responsive jQuery is a tricky thing.
	There's a bunch of different ways to handle
	it, so be sure to research and find the one
	that works for you best.
	*/
	
	/* getting viewport width */
	var responsive_viewport = $(window).width();
	
	/* if is below 481px */
	if (responsive_viewport < 481) {
	
	} /* end smallest screen */
	
	/* if is larger than 481px */
	if (responsive_viewport > 481) {
	
	} /* end larger than 481px */
	
	/* if is above or equal to 768px */
	if (responsive_viewport >= 768) {
	
		/* load gravatars */
		$('.comment img[data-gravatar]').each(function(){
			$(this).attr('src',$(this).attr('data-gravatar'));
		});
		
	}
	
	/* off the bat large screen actions */
	if (responsive_viewport > 1030) {
	
	}
	
	
	// add all your scripts here
	
 
}); /* end of as page load scripts */


/*! A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 MIT License.
*/
(function(w){
	// This fix addresses an iOS bug, so return early if the UA claims it's something else.
	if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && navigator.userAgent.indexOf( "AppleWebKit" ) > -1 ) ){ return; }
	var doc = w.document;
	if( !doc.querySelector ){ return; }
	var meta = doc.querySelector( "meta[name=viewport]" ),
		initialContent = meta && meta.getAttribute( "content" ),
		disabledZoom = initialContent + ",maximum-scale=1",
		enabledZoom = initialContent + ",maximum-scale=10",
		enabled = true,
		x, y, z, aig;
	if( !meta ){ return; }
	function restoreZoom(){
		meta.setAttribute( "content", enabledZoom );
		enabled = true; }
	function disableZoom(){
		meta.setAttribute( "content", disabledZoom );
		enabled = false; }
	function checkTilt( e ){
		aig = e.accelerationIncludingGravity;
		x = Math.abs( aig.x );
		y = Math.abs( aig.y );
		z = Math.abs( aig.z );
		// If portrait orientation and in one of the danger zones
		if( !w.orientation && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ){
			if( enabled ){ disableZoom(); } }
		else if( !enabled ){ restoreZoom(); } }
	w.addEventListener( "orientationchange", restoreZoom, false );
	w.addEventListener( "devicemotion", checkTilt, false );
})( this );

/**
 * fullPage 1.2.85
 * https://github.com/alvarotrigo/fullPage.js
 * MIT licensed
 *
 * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo
 */
(function(b){b.fn.fullpage=function(c){function u(){return function(a){if(c.autoScrolling){a=window.event||a;a=Math.max(-1,Math.min(1,a.wheelDelta||-a.detail));var d;d=b(".section.active");if(!h)if(d=d.find(".slides").length?d.find(".slide.active").find(".scrollable"):d.find(".scrollable"),0>a)if(0<d.length)if(q("bottom",d))b.fn.fullpage.moveSlideDown();else return!0;else b.fn.fullpage.moveSlideDown();else if(0<d.length)if(q("top",d))b.fn.fullpage.moveSlideUp();else return!0;else b.fn.fullpage.moveSlideUp();
return!1}}}function g(a,d){var e={},f;f=a.position();var v=null!==f?f.top:null,m=A(a),k=a.data("anchor"),g=a.index(".section"),l=g;a.addClass("active").siblings().removeClass("active");h=!0;b.isFunction(d)||(location.hash="undefined"!==typeof k?k:"");c.autoScrolling?(e.top=-v,f="#superContainer"):(e.scrollTop=v,f="html, body");"up"===m&&(l+=2);c.css3&&c.autoScrolling?(b.isFunction(c.onLeave)&&c.onLeave.call(this,l,m),w("translate3d(0px, -"+v+"px, 0px)",!0),setTimeout(function(){b.isFunction(c.afterLoad)&&
c.afterLoad.call(this,k,g+1);setTimeout(function(){h=!1;b.isFunction(d)&&d.call(this)},B)},c.scrollingSpeed)):(b.isFunction(c.onLeave)&&c.onLeave.call(this,l,m),b(f).animate(e,c.scrollingSpeed,c.easing,function(){b.isFunction(c.afterLoad)&&c.afterLoad.call(this,k,g+1);setTimeout(function(){h=!1;b.isFunction(d)&&d.call(this)},B)}));x=k;c.autoScrolling&&(C(k),D(k,g))}function L(){var a=window.location.hash.replace("#","").split("/"),c=a[0],e=a[1];if(c){var f=b('[data-anchor="'+c+'"]');g(f,function(){if("undefined"!=
typeof e){var a=f.find(".slides"),b=a.find('[data-anchor="'+e+'"]');b.length||(b=a.find(".slide").eq(e));a.find(".slide").first().removeClass("active");r(a,b);b.addClass("active")}})}}function r(a,d){var e=d.position(),f=a.find(".slidesContainer").parent(),g=d.index(".slide"),m=a.closest(".section"),k=m.index(".section"),h=m.data("anchor"),l=d.data("anchor");"undefined"===typeof l&&(l=g);m.hasClass("active")&&(location.hash=g?location.hash.split("/")[0]+"/"+l:location.hash.split("/")[0]);c.css3?(e=
"translate3d(-"+e.left+"px, 0px, 0px)",a.find(".slidesContainer").addClass("easing").css({"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}),setTimeout(function(){b.isFunction(c.afterSlideLoad)&&c.afterSlideLoad.call(this,h,k+1,l,g);s=!0},c.scrollingSpeed)):f.animate({scrollLeft:e.left},c.scrollingSpeed,function(){b.isFunction(c.afterSlideLoad)&&c.afterSlideLoad.call(this,h,k+1,l,g);s=!0})}function E(){var a=b(window).width(),d=b(window).height();c.resize&&M(d,a);b(".section").each(function(){var a=
d-parseInt(b(this).css("padding-bottom"))-parseInt(b(this).css("padding-top"));c.scrollOverflow&&b(this).find(".scrollable").css("height",a+"px").parent().css("height",a+"px");c.verticalCentered&&b(this).find(".tableCell").css("height",d+"px");b(this).css("height",d+"px");a=b(this).find(".slides");0<a.length&&r(a,a.find(".slide.active"))});b(".section.active").position();a=b(".section.active");a.index(".section")&&g(a)}function M(a,c){var e=825,f=a;825>a||900>c?(900>c&&(f=c,e=900),e=(100*f/e).toFixed(2),
b("body").css("font-size",e+"%")):b("body").css("font-size","100%")}function D(a,d){c.navigation&&(b("#fullPage-nav").find(".active").removeClass("active"),a?b("#fullPage-nav").find('a[href="#'+a+'"]').addClass("active"):b("#fullPage-nav").find("li").eq(d).find("a").addClass("active"))}function C(a){c.menu&&(b(c.menu).find(".active").removeClass("active"),b(c.menu).find('[data-menuanchor="'+a+'"]').addClass("active"))}function q(a,b){if("top"===a)return!b.scrollTop();if("bottom"===a)return b.scrollTop()+
b.innerHeight()>=b[0].scrollHeight}function A(a){var c=b(".section.active").index(".section");a=a.index(".section");return c>a?"up":"down"}function F(a){a.css("overflow","hidden");var b=a.closest(".section");a.get(0).scrollHeight-parseInt(b.css("padding-bottom"))-parseInt(b.css("padding-top"))>t&&(c.verticalCentered?a.find(".tableCell").wrapInner('<div class="scrollable" />'):a.wrapInner('<div class="scrollable" />'),b=t-parseInt(b.css("padding-bottom"))-parseInt(b.css("padding-top")),a.find(".scrollable").slimScroll({height:b+
"px",size:"10px",alwaysVisible:!0}));a.css("overflow","")}function G(a){a.addClass("table").wrapInner('<div class="tableCell" style="height:'+t+'px;" />')}function w(a,c){b("#superContainer").toggleClass("easing",c);b("#superContainer").css({"-webkit-transform":a,"-moz-transform":a,"-ms-transform":a,transform:a})}c=b.extend({verticalCentered:!0,resize:!0,slidesColor:[],anchors:[],scrollingSpeed:700,easing:"easeInQuart",menu:!1,navigation:!1,navigationPosition:"right",navigationColor:"#000",controlArrowColor:"#fff",
loopBottom:!1,loopTop:!1,autoScrolling:!0,scrollOverflow:!1,css3:!1,paddingTop:null,paddingBottom:null,afterLoad:null,onLeave:null,afterRender:null,afterSlideLoad:null},c);var B=700;b.fn.fullpage.setAutoScrolling=function(a){c.autoScrolling=a;a=b(".section.active");c.autoScrolling?(b("html, body").css({overflow:"hidden",height:"100%"}),a.length&&(c.css3?(a="translate3d(0px, -"+a.position().top+"px, 0px)",w(a,!1)):b("#superContainer").css("top","-"+a.position().top+"px"))):(b("html, body").css({overflow:"auto",
height:"auto"}),c.css3?w("translate3d(0px, 0px, 0px)",!1):b("#superContainer").css("top","0px"),b("html, body").scrollTop(a.position().top))};var s=!0,y=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/),t=b(window).height(),h=!1,x;b.fn.fullpage.setAutoScrolling(c.autoScrolling);b("body").wrapInner('<div id="superContainer" />');if(c.navigation){b("body").append('<div id="fullPage-nav"><ul></ul></div>');var n=b("#fullPage-nav");n.css("color",c.navigationColor);"right"===
c.navigationPosition?n.css("right","17px"):n.css("left","17px")}b(".section").each(function(a){var d=b(this).find(".slide"),e=d.length;a||b(this).addClass("active");b(this).css("height",t+"px");c.paddingTop&&c.paddingBottom&&b(this).css("padding",c.paddingTop+" 0 "+c.paddingBottom+" 0");"undefined"!==typeof c.slidesColor[a]&&b(this).css("background-color",c.slidesColor[a]);"undefined"!==typeof c.anchors[a]&&b(this).attr("data-anchor",c.anchors[a]);if(c.navigation){var f="";c.anchors.length&&(f=c.anchors[a]);
n.find("ul").append('<li><a href="#'+f+'"><span></span></a></li>')}if(0<e){a=100*e;var g=100/e;d.wrapAll('<div class="slidesContainer" />');d.parent().wrap('<div class="slides" />');b(this).find(".slidesContainer").css("width",a+"%");b(this).find(".slides").after('<div class="controlArrow prev"></div><div class="controlArrow next"></div>');b(".controlArrow.next").css("border-color","transparent transparent transparent "+c.controlArrowColor);b(".controlArrow.prev").css("border-color","transparent "+
c.controlArrowColor+" transparent transparent");d.each(function(a){a||b(this).addClass("active");b(this).css("width",g+"%");c.verticalCentered&&G(b(this))})}else c.verticalCentered&&G(b(this))}).promise().done(function(){b.isFunction(c.afterRender)&&c.afterRender.call(this);c.navigation&&(n.css("margin-top","-"+n.height()/2+"px"),n.find("li").first().find("a").addClass("active"));c.menu&&c.css3&&b(c.menu).appendTo("body");if(c.scrollOverflow)b(window).on("load",function(){b(".section").each(function(){var a=
b(this).find(".slide");a.length?a.each(function(){F(b(this))}):F(b(this))})});b(window).on("load",function(){L()})});var H,z=!1;b(window).scroll(function(a){if(!c.autoScrolling){var d=b(window).scrollTop();a=b(".section").map(function(){if(b(this).offset().top<d+100)return b(this)});a=a[a.length-1];if(!a.hasClass("active")){z=!0;var e=A(a);b(".section.active").removeClass("active");a.addClass("active");var f=a.data("anchor");b.isFunction(c.onLeave)&&c.onLeave.call(this,a.index(".section"),e);b.isFunction(c.afterLoad)&&
c.afterLoad.call(this,f,a.index(".section")+1);C(f);D(f,0);c.anchors.length&&!h&&(x=f,location.hash=f);clearTimeout(H);H=setTimeout(function(){z=!1},100)}}});var I=0,J=0;b(document).on("touchmove",function(a){if(c.autoScrolling&&y&&(a.preventDefault(),a=a.originalEvent,!h)){var d=b(".section.active").find(".scrollable");J=a.touches[0].pageY;if(I>J)if(0<d.length)if(q("bottom",d))b.fn.fullpage.moveSlideDown();else return!0;else b.fn.fullpage.moveSlideDown();else if(0<d.length)if(q("top",d))b.fn.fullpage.moveSlideUp();
else return!0;else b.fn.fullpage.moveSlideUp()}});b(document).on("touchstart",function(a){c.autoScrolling&&y&&(I=a.originalEvent.touches[0].pageY)});var p={},p=document;p.addEventListener?(p.addEventListener("mousewheel",u(),!1),p.addEventListener("DOMMouseScroll",u(),!1)):p.attachEvent("onmousewheel",u());b.fn.fullpage.moveSlideUp=function(){var a=b(".section.active").prev(".section");c.loopTop&&!a.length&&(a=b(".section").last());(0<a.length||!a.length&&c.loopTop)&&g(a)};b.fn.fullpage.moveSlideDown=
function(){var a=b(".section.active").next(".section");c.loopBottom&&!a.length&&(a=b(".section").first());(0<a.length||!a.length&&c.loopBottom)&&g(a)};b.fn.fullpage.moveToSlide=function(a){var c="",c=isNaN(a)?b('[data-anchor="'+a+'"]'):b(".section").eq(a-1);0<c.length&&g(c)};b(window).on("hashchange",function(){if(!z){var a=window.location.hash.replace("#","").split("/")[0];a!==x&&(a=b('[data-anchor="'+a+'"]'),g(a))}});b(document).keydown(function(a){if(!h)switch(a.which){case 38:case 33:b.fn.fullpage.moveSlideUp();
break;case 40:case 34:b.fn.fullpage.moveSlideDown();break;case 37:b(".section.active").find(".controlArrow.prev").trigger("click");break;case 39:b(".section.active").find(".controlArrow.next").trigger("click")}});b(document).on("click","#fullPage-nav a",function(a){a.preventDefault();a=b(this).parent().index();g(b(".section").eq(a))});b(".section").on("click",".controlArrow",function(){if(s){s=!1;var a=b(this).closest(".section").find(".slides"),c=a.find(".slide.active"),e=null;c.removeClass("active");
e=b(this).hasClass("prev")?c.prev(".slide"):c.next(".slide");e.length||(e=b(this).hasClass("prev")?c.siblings(":last"):c.siblings(":first"));r(a,e);e.addClass("active")}});b(".section").on("click",".toSlide",function(a){a.preventDefault();a=b(this).closest(".section").find(".slides");var c=a.find(".slide.active"),e=null,e=a.find(".slide").eq(b(this).data("index")-1);0<e.length&&(c.removeClass("active"),r(a,e),e.addClass("active"))});if(!y){var K;b(window).resize(function(){clearTimeout(K);K=setTimeout(E,
500)})}b(window).bind("orientationchange",function(){E()})}})(jQuery);

!function($){

	"use strict";

	var Typed = function(el, options){

		// chosen element to manipulate text
		this.el = $(el);
		// options
		this.options = $.extend({}, $.fn.typed.defaults, options);

		// text content of element
		this.text = this.el.text();

		// typing speed
		this.typeSpeed = this.options.typeSpeed;

		// amount of time to wait before backspacing
		this.backDelay = this.options.backDelay;

		// input strings of text
		this.strings = this.options.strings;

		// character number position of current string
		this.strPos = 0;

		// current array position
		this.arrayPos = 0;

		// current string based on current values[] array position
		this.string = this.strings[this.arrayPos];

		// number to stop backspacing on.
		// default 0, can change depending on how many chars
		// you want to remove at the time
		this.stopNum = 0;

		// Looping logic
		this.loop = this.options.loop;
		this.loopCount = this.options.loopCount;
		this.curLoop = 1;
		if (this.loop === false){
			// number in which to stop going through array
			// set to strings[] array (length - 1) to stop deleting after last string is typed
			this.stopArray = this.strings.length-1;
		}
		else{
			this.stopArray = this.strings.length;
		}

		// All systems go!
		this.init();
		this.build();
	}

		Typed.prototype =  {

			constructor: Typed

			, init: function(){
				// begin the loop w/ first current string (global self.string)
				// current string will be passed as an argument each time after this
				this.typewrite(this.string, this.strPos);
			}

			, build: function(){
				this.el.after("<span id=\"typed-cursor\">|</span>");
			}

			// pass current string state to each function
			, typewrite: function(curString, curStrPos){

				// varying values for setTimeout during typing
				// can't be global since number changes each time loop is executed
				var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
				var self = this;

				// ------------- optional ------------- //
				// backpaces a certain string faster
				// ------------------------------------ //
				// if (self.arrayPos == 1){
				// 	self.backDelay = 50;
				// }
				// else{ self.backDelay = 500; }

				// containg entire typing function in a timeout
				setTimeout(function() {

					// make sure array position is less than array length
					if (self.arrayPos < self.strings.length){

						// start typing each new char into existing string
						// curString is function arg
						self.el.text(self.text + curString.substr(0, curStrPos));

						// check if current character number is the string's length
						// and if the current array position is less than the stopping point
						// if so, backspace after backDelay setting
						if (curStrPos > curString.length && self.arrayPos < self.stopArray){
							clearTimeout(clear);
							var clear = setTimeout(function(){
								self.backspace(curString, curStrPos);
							}, self.backDelay);
						}

						// else, keep typing
						else{
							// add characters one by one
							curStrPos++;
							// loop the function
							self.typewrite(curString, curStrPos);
							// if the array position is at the stopping position
							// finish code, on to next task
							if (self.loop === false){
								if (self.arrayPos === self.stopArray && curStrPos === curString.length){
									// animation that occurs on the last typed string
									// fires callback function
									var clear = self.options.callback();
									clearTimeout(clear);
								}
							}
						}
					}
					// if the array position is greater than array length
					// and looping is active, reset array pos and start over.
					else if (self.loop === true && self.loopCount === false){
						self.arrayPos = 0;
						self.init();
					}
						else if(self.loopCount !== false && self.curLoop < self.loopCount){
							self.arrayPos = 0;
							self.curLoop = self.curLoop+1;
							self.init();
						}

				// humanized value for typing
				}, humanize);

			}

			, backspace: function(curString, curStrPos){

				// varying values for setTimeout during typing
				// can't be global since number changes each time loop is executed
				var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
				var self = this;

				setTimeout(function() {

					// ----- this part is optional ----- //
					// check string array position
					// on the first string, only delete one word
					// the stopNum actually represents the amount of chars to
					// keep in the current string. In my case it's 14.
					// if (self.arrayPos == 1){
					//	self.stopNum = 14;
					// }
					//every other time, delete the whole typed string
					// else{
					//	self.stopNum = 0;
					// }

					// ----- continue important stuff ----- //
					// replace text with current text + typed characters
					self.el.text(self.text + curString.substr(0, curStrPos));

					// if the number (id of character in current string) is
					// less than the stop number, keep going
					if (curStrPos > self.stopNum){
						// subtract characters one by one
						curStrPos--;
						// loop the function
						self.backspace(curString, curStrPos);
					}
					// if the stop number has been reached, increase
					// array position to next string
					else if (curStrPos <= self.stopNum){
						clearTimeout(clear);
						var clear = self.arrayPos = self.arrayPos+1;
						// must pass new array position in this instance
						// instead of using global arrayPos
						self.typewrite(self.strings[self.arrayPos], curStrPos);
					}

				// humanized value for typing
				}, humanize);

			}

		}

	$.fn.typed = function (option) {
	    return this.each(function () {
	      var $this = $(this)
	        , data = $this.data('typed')
	        , options = typeof option == 'object' && option
	      if (!data) $this.data('typed', (data = new Typed(this, options)))
	      if (typeof option == 'string') data[option]()
	    });
	}

	$.fn.typed.defaults = {
		strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
		// typing and backspacing speed
		typeSpeed: 0,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: false,
		// false = infinite
		loopCount: false,
		// ending callback function
		callback: function(){ null }
	}

}(window.jQuery);
qsa-wrapper
===========

A wrapper for document.querySelectorAll to allow creating tiny jquery-like chainable library that will iterate each selections.

	var $ = QsaWrapper.create({
		hi: function(txt){
			this.innerHTML = txt;
		},
		addClass: function(className){
			this.clssName += " " + className;
		}
	});


	$("#div1, #div2").hi("hello").addClassName("greeting");


`this` inside each method is the dom node.
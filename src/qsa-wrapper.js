var QsaWrapper = {
	slice: function(args){
		return Array.prototype.slice.call(args);
	},
	wrap: function(inst, query, func){
		return function(){
			var args = QsaWrapper.slice(arguments);
			[].forEach.call(query, function(node){
				func.apply(node, args);
			});
			return inst;
		};
	},
	create: function(methods){
		return function(selector){
			var query = document.querySelectorAll(selector);
			var inst = {};
			for(var m in methods){
				inst[m] = QsaWrapper.wrap(inst, query, methods[m]);
			}
			return inst;
		};
	}
};



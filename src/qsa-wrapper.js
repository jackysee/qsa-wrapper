var QsaWrapper = {
	wrap: function(inst, query, func){
		return function(){
			var args = Array.prototype.slice.call(arguments);
			Array.prototype.forEach.call(query, function(node){
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



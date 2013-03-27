var QsaWrapper = {
	slice: function(args){
		return Array.prototype.slice.call(args);
	},
	extend: function(obj){
		var sources = this.slice(arguments, 1);
		for(var i=0, l=sources.length; i<l; i++){
			var s = sources[i];
			if(s){
				for(var p in s){
					obj[p] = s[p];
				}
			}
		}
		return obj;
	},
	create: function(methods){
		return function(selector){
			var query = document.querySelectorAll(selector);
			var inst = {};
			for(var m in methods){
				inst[m] = function(){
					var args = QsaWrapper.slice(arguments);
					[].forEach.call(query, function(node){
						methods[m].apply(node, args);
					});
					return inst;
				};
			}
			return inst;
		};
	}
};



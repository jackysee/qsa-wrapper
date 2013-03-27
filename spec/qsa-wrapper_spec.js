describe("qsa-wrapper", function() {

	it("should be defined", function() {
		expect(QsaWrapper).toBeDefined();
	});

	it("should create an object accept selector ", function(){
		var $ = QsaWrapper.create({});
		expect($('#abc')).toBeDefined();
	});

	it("should call querySelectorAll", function() {
		spyOn(document, 'querySelectorAll').andReturn([
			//fake node list, real node list does not contains forEach
			{innerHTML:'1'},
			{innerHTML:'2'}
		]);
		var log = jasmine.createSpy("log");
		var $ = QsaWrapper.create({
			hi: function(txt){
				log(this.innerHTML, txt);
			}
		});

		var c = $("#abc,#def").hi('hello');
		expect(c).toBeDefined();
		expect(log.calls.length).toEqual(2);
		expect(log.calls[0].args[0]).toEqual('1');
		expect(log.calls[0].args[1]).toEqual('hello');
		expect(log.calls[1].args[0]).toEqual('2');
		expect(log.calls[1].args[1]).toEqual('hello');
	});

	it("should be chainable", function() {
		spyOn(document, 'querySelectorAll').andReturn([{innerHTML:'1'}]);
		var log = jasmine.createSpy("log");
		var $ = QsaWrapper.create({
			hi: function(txt){
				log(txt);
			},
			hi2: function(txt){
				log(txt);
			}
		});
		var c = $("#abc,def").hi("hi1").hi2('hi2');
		expect(log.calls.length).toEqual(2);
		expect(log.calls[0].args[0]).toEqual('hi1');
		expect(log.calls[1].args[0]).toEqual('hi2');
	});

});
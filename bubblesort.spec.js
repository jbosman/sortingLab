describe('Bubble Sort', function() {

	it('handles an empty array', function(){
		expect( bubbleSort( [] )).toEqual( [] );
	});

	it('handles a single element array', function(){
		expect( bubbleSort( [5] )).toEqual( [5] );
	});

	it('handles a multi-element array', function(){
		expect( bubbleSort( [4,3,2,1] )).toEqual( [1,2,3,4] );
	});

	it('handles negative elements in the array', function(){
		expect( bubbleSort( [4,3,2,1, -5] )).toEqual( [-5,1,2,3,4] );
	});

	it('practice spying on funciton', function() {
		function foo() { return 5; };
		spyOn( foo, "foo");
		foo();
		

		 expect(foo).toHaveBeenCalledTimes(1);
	});
});
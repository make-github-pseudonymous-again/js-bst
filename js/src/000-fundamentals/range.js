

var range = function ( compare, node, value, iterators ) {

	var d;

	// scan for first node whose
	// value equals parameter value

	while ( true ) {

		d = compare( value, node.value );

		if ( d === 0 ) {
			break;
		}

		else if ( d < 0 ) {
			node = node.left;
		}

		else {
			node = node.right;
		}

		if ( node === null ) {
			return iterators;
		}

	}

	// enumerate all nodes whose value
	// equals parameter value

	do {

		iterators.push( node );

		node = node.left;

	} while ( node !== null && compare( value, node.value ) === 0 );

	return iterators;

};

exports.range = range;

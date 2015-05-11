

var find = function ( compare, node, value ) {

	var d;

	// scan for first node whose
	// value equals parameter value

	while ( true ) {

		d = compare( value, node.value );

		if ( d === 0 ) {
			return node;
		}

		else if ( d < 0 ) {
			node = node.left;
		}

		else {
			node = node.right;
		}

		if ( node === null ) {
			return null;
		}

	}

};

exports.find = find;

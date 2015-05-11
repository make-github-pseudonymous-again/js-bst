
var replace = function ( compare, A, B ) {

	var delta, node, value;

	node = null;
	value = B.value;

	while ( true ) {

		delta = compare( value, A.value );

		if ( delta === 0 ) {
			A.value = value;
			return A;
		}

		else if ( delta < 0 ) {

			node = A.left;

			if ( node === null ) {
				A.left = B;
				return B;
			}

			A = node;

		}

		else {

			node = A.right;

			if ( node === null ) {
				A.right = B;
				return B;
			}

			A = node;

		}

	}


};

exports.replace = replace;

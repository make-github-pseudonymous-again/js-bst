
var insert = function ( compare, A, B ) {

	var node;

	node = null;

	while ( true ) {

		if ( compare( B, A ) <= 0 ) {

			node = A.left;

			if ( node === null ) {
				A.left = B;
				break;
			}

			A = node;

		}

		else {

			node = A.right;

			if ( node === null ) {
				A.right = B;
				break;
			}

			A = node;

		}

	}

	return B;

};

exports.insert = insert;

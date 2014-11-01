
/**
 * -> https://en.wikipedia.org/wiki/AVL_tree
 */

var avlbalance = function ( P ) {

	var N;

	// Possibly up to the root

	do {

		if ( P.balancefactor === 2 ) {

			// The left column
			// N === P.left, the child whose height increases by 1.

			N = P.left;

			if ( N.balancefactor === -1 ) {
				// The "Left Right Case"
				// Reduce to "Left Left Case"
				leftrotate( N );
			}

			// Left Left Case
			rightrotate( P );

			break;

		} else if ( P.balancefactor === -2 ) {

			// The right column
			// N == P.right, the child whose height increases by 1.

			N = P.right;

			if ( N.balancefactor === 1 ) {
				// The "Right Left Case"
				// Reduce to "Right Right Case"
				rightrotate( N );
			}
			// Right Right Case
			leftrotate( P );

			break;

		} else if ( P.balancefactor === 0) {
			break;
		}

		// Keep P.balancefactor == ±1.
		// height( N ) increases by 1.
		N = P;
		P = N.parent;

	} while ( P !== null );
};

exports.avlbalance = avlbalance;


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
				//
				//     (2)  P
				//         / \
				//  (-1)  N   D
				//       / \
				//      A   4
				//         / \
				//        B   C
				//
				// Reduce to "Left Left Case"

				P.left = leftrotatewithparent( N );

			}

			// Left Left Case
			//
			//     (2)  P
			//         / \
			// (1/0)  4   D
			//       / \
			//      3   C
			//     / \
			//    A   B


			// PROBLEM : DOES NOT KNOW WHICH OF LEFT OR RIGHT CHILD P IS
			P.parent.leftorright = rightrotatewithparent( P );

			// Balanced
			//
			//  (-1/0)  4
			//         / \
			//        3   5
			//       / \ / \
			//

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

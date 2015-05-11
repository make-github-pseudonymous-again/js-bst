

/**
 * @param {node} z the node to fix, z is RED
 */

let rbinsertfixup = function ( T , z ) {


	while ( z.p.c === RED ) {

		// z is RED
		// if the parent of z is BLACK
		// it violates (3)
		// and we need to fix it

		if ( z.p === z.p.p.l ) {

			// if our parent is a left child
			// let y be our uncle

			//
			//              z.p.p -> BLACK since z.p is RED
			//            /       \
			//    RED <- z.p       y
			//         /     \
			//        ? <-z-> ?
			//            |
			//           RED

			let y = z.p.p.r ;

			if ( y.c === RED ) {

				// if our uncle is red

				//
				//              z.p.p -> ~RED (might violate (3))
				//            /       \
				// ~BLACK <- z.p       y -> ~BLACK
				//         /     \
				//        ? <-z-> ?
				//            |
				//           RED

				z.p.c = BLACK ;
				y.c = BLACK ;
				z.p.p.c = RED ;
				z = z.p.p ;

			}


		}

	}

} ;

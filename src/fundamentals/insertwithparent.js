
export default function insertwithparent ( compare, A, B ) {

	let node = null;

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

	B.parent = A;

	return B;

}

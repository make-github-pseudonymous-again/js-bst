
/**
 * Finds the greatest value in the binary search tree
 * which is smaller than parameter value.
 */

export default function predecessor ( compare, node, value, pred ) {

	const d = compare( value, node.value );

	if ( d === 0 ) {
		return [true, node.value];
	}

	else if ( d < 0 ) {

		if ( node.left === null ) {
			return [false, pred];
		}

		return predecessor( compare, node.left, value, pred );

	}

	else {

		if ( node.right === null ) {
			return [false, node.value];
		}

		return predecessor( compare, node.right, value, node.value );
	}

}

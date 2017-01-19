
/**
 * Finds the smallest value in the binary search tree
 * which is greater than parameter value.
 */

export default function successor ( compare, node, value, succ ) {

	var d;

	d = compare( value, node.value );

	if ( d === 0 ) {
		return [true, node.value];
	}

	else if ( d < 0 ) {

		if ( node.left === null ) {
			return [false, node.value];
		}

		return successor( compare, node.left, value, node.value );

	}

	else {

		if ( node.right === null ) {
			return [false, succ];
		}

		return successor( compare, node.right, value, succ );
	}

}


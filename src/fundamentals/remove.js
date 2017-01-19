

export default function remove ( compare, node, value ) {

	var left, right, rightest, delta;

	delta = compare( value, node.value );

	if ( delta === 0 ) {

		left = node.left;
		right = node.right;

		if ( left === null ) {
			return right;
		}

		else if ( right === null ) {
			return left;
		}

		else {

			rightest = left;

			while ( rightest.right !== null ) {
				rightest = rightest.right;
			}

			rightest.right = right;

			return left;

		}

	}

	else if ( delta < 0 ) {

		if ( node.left !== null ) {
			node.left = remove( compare, node.left, value );
		}

		return node;

	}

	else {

		if ( node.right !== null ) {
			node.right = remove( compare, node.right, value );
		}

		return node;

	}

}


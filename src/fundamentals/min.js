

export default function min ( node ) {

	if ( node.left === null ) {
		return node;
	}

	return min( node.left );

}

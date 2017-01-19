


export default function max ( node ) {

	if ( node.right === null ) {
		return node;
	}

	return max( node.right );

}


export default function inordertraversal ( callback, node ) {

	if ( node.left !== null ) {
		inordertraversal( callback, node.left );
	}

	callback( node.value );

	if ( node.right !== null ) {
		inordertraversal( callback, node.right );
	}

}

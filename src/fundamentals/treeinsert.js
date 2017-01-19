import insert from './insert' ;

export default function treeinsert ( compare, tree, node ) {

	if ( tree.root === null ) {
		tree.root = node;
	}

	else {
		insert( compare, tree.root, node );
	}

}


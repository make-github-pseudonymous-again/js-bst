
var treeinsert = function ( compare, tree, node ) {

	if ( tree.root === null ) {
		tree.root = node;
	}

	else {
		insert( compare, tree.root, node );
	}

};

exports.treeinsert = treeinsert;

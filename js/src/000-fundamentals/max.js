


var max = function ( node ) {

	if ( node.right === null ) {
		return node;
	}

	return max( node.right );

};

exports.max = max;

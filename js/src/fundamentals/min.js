

var min = function ( node ) {

	if ( node.left === null ) {
		return node;
	}

	return min( node.left );

};

exports.min = min;

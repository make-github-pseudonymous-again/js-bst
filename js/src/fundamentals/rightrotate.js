
var rightrotate = function ( B ) {

	var A;

	A = B.left;

	B.left = A.right;
	A.right = B;

	return A;

};

exports.rightrotate = rightrotate;

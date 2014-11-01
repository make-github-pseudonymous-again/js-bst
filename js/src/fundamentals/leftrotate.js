
var leftrotate = function ( A ) {

	var B;

	B = A.right;

	A.right = B.left;
	B.left = A;

	return B;

};

exports.leftrotate = leftrotate;

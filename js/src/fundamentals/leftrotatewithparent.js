

/**
 * -> https://en.wikipedia.org/wiki/Tree_rotation
 *
 *      A                B
 *     / \              / \
 *    a   B     ->     A   c
 *       / \          / \
 *      b   c        a   b
 */

var leftrotatewithparent = function ( A ) {

	var B;

	B = A.right;

	A.right = B.left;
	B.left = A;

	B.parent = A.parent;
	A.right.parent = A;
	A.parent = B;

	return B;

};

exports.leftrotatewithparent = leftrotatewithparent;

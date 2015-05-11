

/**
 * -> https://en.wikipedia.org/wiki/Tree_rotation
 *
 *      A                B
 *     / \              / \
 *    a   B     ->     A   c
 *       / \          / \
 *      b   c        a   b
 */

var leftrotate = function ( A ) {

	var B;

	B = A.right;

	A.right = B.left;
	B.left = A;

	return B;

};

exports.leftrotate = leftrotate;

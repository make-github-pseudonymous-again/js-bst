

/**
 * -> https://en.wikipedia.org/wiki/Tree_rotation
 *
 *      B                A
 *     / \              / \
 *    A   c     ->     a   B
 *   / \                  / \
 *  a   b                b   c
 */

var rightrotate = function ( B ) {

	var A;

	A = B.left;

	B.left = A.right;
	A.right = B;

	return A;

};

exports.rightrotate = rightrotate;

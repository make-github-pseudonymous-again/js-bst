

/**
 * -> https://en.wikipedia.org/wiki/Tree_rotation
 *
 *      B                A
 *     / \              / \
 *    A   c     ->     a   B
 *   / \                  / \
 *  a   b                b   c
 */

var rightrotatewithparent = function ( B ) {

	var A;

	A = B.left;

	B.left = A.right;
	A.right = B;

	A.parent = B.parent;
	B.left.parent = B;
	B.parent = A;

	return A;

};

exports.rightrotatewithparent = rightrotatewithparent;

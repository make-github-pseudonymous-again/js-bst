

/**
 * -> https://en.wikipedia.org/wiki/Tree_rotation
 *
 *      A                B
 *     / \              / \
 *    a   B     ->     A   c
 *       / \          / \
 *      b   c        a   b
 */

export default function leftrotate ( A ) {

	const B = A.right;

	A.right = B.left;
	B.left = A;

	return B;

}

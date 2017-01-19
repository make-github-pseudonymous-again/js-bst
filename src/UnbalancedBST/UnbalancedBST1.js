import {
	remove ,
	treeinsert ,
	predecessor ,
	inordertraversal ,
} from '../fundamentals' ;

export default function UnbalancedBST1 ( compare ) {
	this.compare = compare;
	this.root = null;
}

UnbalancedBST1.Node = function ( value ) {
	this.value = value;
	this.left = null;
	this.right = null;
};

UnbalancedBST1.prototype.insert = function ( value ) {

	treeinsert( this.compare, this, new UnbalancedBST1.Node( value ) );

	return this;

};

UnbalancedBST1.prototype.remove = function ( value ) {

	if ( this.root !== null ) {

		this.root = remove( this.compare, this.root, value );

	}

	return this;

};

UnbalancedBST1.prototype.find = function ( value ) {

	if ( this.root === null ) {
		return [false, null];
	}

	return predecessor( this.compare, this.root, value, null );

};


UnbalancedBST1.prototype.in_order_traversal = function ( callback ) {

	if ( this.root !== null ) {
		inordertraversal( callback, this.root );
	}

};



var AVLTree1 = function ( compare ) {

	this.compare = compare;

	this.root = null;

};

AVLTree1.Node = function ( balancingfactor, parent, left, right, value ) {

	this.balancingfactor = 0;

	this.parent = parent;

	this.left = left;

	this.right = right;

	this.value = value;

};

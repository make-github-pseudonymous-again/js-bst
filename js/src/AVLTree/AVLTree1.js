

var AVLTree1 = function ( compare ) {

	this.compare = compare;

	this.root = null;

};

AVLTree1.Node = function ( value, left, right ) {

	this.balancingfactor = 0;

	this.value = value;

	this.left = left;

	this.right = right;

};

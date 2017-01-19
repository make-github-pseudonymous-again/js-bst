
const BLACK = 0 ;
const RED = 1 ;

const Node = function ( value ) {

	this.color = BLACK ;
	this.parent = NULL ;
	this.left = NULL ;
	this.right = NULL ;
	this.value = value ;

} ;

const NULL = new Node( undefined ) ;

const Tree = function ( compare ) {

	this.compare = compare ;

	this.root = NULL ;

} ;



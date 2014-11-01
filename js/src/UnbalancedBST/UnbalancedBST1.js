

var UnbalancedBST1 = function ( compare ) {
	this.compare = compare;
	this.root = null;
};

UnbalancedBST1.Node = function ( value ) {
	this.value = value;
	this.left = null;
	this.right = null;
};

UnbalancedBST1.prototype.insert = function ( value ) {

	if ( this.root === null ) {
		this.root = new UnbalancedBST1.Node( value );
	}

	else {
		this.root.insert( this.compare, value );
	}

	return this;

};

UnbalancedBST1.Node.prototype.insert = function ( compare, value ) {

	if ( compare( value, this.value ) <= 0 ) {

		if ( this.left !== null ) {
			this.left.insert( compare, value );
		}

		else {
			this.left = new UnbalancedBST1.Node( value );
		}

	}

	else {

		if ( this.right !== null ) {
			this.right.insert( compare, value );
		}

		else {
			this.right = new UnbalancedBST1.Node( value );
		}

	}

	return this;

};

UnbalancedBST1.prototype.remove = function ( value ) {

	var it, prev;

	if ( this.root !== null ) {

		if ( this.compare( value, this.root.value ) === 0 ) {

			it = this.root.left;

			if ( it === null ) {
				this.root = this.root.right;
			}

			else{

				prev = this.root;

				while ( it.right !== null ) {
					prev = it;
					it = it.right;
				}

				// TODO can check this before while loop

				if ( prev === this.root ) {
					this.root.left.right = this.root.right;
					this.root = this.root.left;
				}

				else{
					prev.right = it.left;
					it.left = this.root.left;
					it.right = this.root.right;
					this.root = it;
				}

			}

		}

		else {
			this.root.remove( this.compare, value );
		}

	}

	return this;

};

UnbalancedBST1.Node.prototype.remove = function ( compare, value ) {

	var it, prev;

	if ( compare( value, this.value ) <= 0 ) {

		if ( this.left !== null ) {

			if ( compare( value, this.left.value ) === 0 ) {

				it = this.left.left;

				if ( it === null ) {
					this.left = this.left.right;
				}

				else {

					prev = this.left;

					while ( it.right !== null ) {
						prev = it;
						it = it.right;
					}

					if ( prev === this.left ) {
						this.left.left.right = this.left.right;
						this.left = this.left.left;
					}

					else {
						prev.right = it.left;
						it.left = this.left.left;
						it.right = this.left.right;
						this.left = it;
					}

				}

			}
			else {
				this.left.remove( compare, value );
			}
		}

	}

	else {

		if ( this.right !== null ) {

			if ( compare( value, this.right.value ) === 0 ) {

				it = this.right.left;

				if ( it === null ) {
					this.right = this.right.right;
				}

				else {

					prev = this.right;

					while ( it.right !== null ) {
						prev = it;
						it = it.right;
					}

					if ( prev === this.right ) {
						this.right.left.right = this.right.right;
						this.right = this.right.left;
					}

					else {
						prev.right = it.left;
						it.right = this.right.right;
						it.left = this.right.left;
						this.right = it;
					}

				}
			}

			else {
				this.right.remove( compare, value );
			}
		}

	}

	return this;
};

UnbalancedBST1.prototype.find = function ( value ) {

	if ( this.root === null ) {
		return [false, null];
	}

	return this.root.find( this.compare, value );

};

UnbalancedBST1.Node.prototype.find = function ( compare, value ) {

	var d;

	d = compare( value, this.value );

	if ( d === 0 ) {
		return [true, this.value];
	}

	else if ( d < 0 ) {

		if ( this.left === null ) {
			return [false, this.value];
		}

		return this.left.find( compare, value );

	}

	else {

		if ( this.right === null ) {
			return [false, this.value];
		}

		return this.right.find( compare, value );
	}

};

UnbalancedBST1.prototype.findleft = function ( value ) {

	if ( this.root === null ) {
		return undefined;
	}

	return this.root.findleft( this.compare, value, undefined );

};

UnbalancedBST1.Node.prototype.findleft = function ( compare, value, found ) {

	if ( compare( value, this.value ) <= 0 ) {

		if ( this.left === null ) {
			return found;
		}

		return this.left.findleft( compare, value, found );

	}

	else{

		if ( this.right === null ) {
			return found;
		}

		return this.right.findleft( compare, value, this.value );
	}

};


UnbalancedBST1.prototype.in_order_traversal = function ( callback ) {

	if ( this.root !== null ) {
		this.root.in_order_traversal( callback );
	}

};


UnbalancedBST1.Node.prototype.in_order_traversal = function ( callback ) {

	if ( this.left !== null ) {
		this.left.in_order_traversal( callback );
	}

	callback( this.value );

	if ( this.right !== null ) {
		this.right.in_order_traversal( callback );
	}

};


UnbalancedBST1.Node.prototype.max = function () {

	if ( this.right === null ) {
		return this;
	}

	else {
		return this.right.max();
	}

};



exports.UnbalancedBST1 = UnbalancedBST1;

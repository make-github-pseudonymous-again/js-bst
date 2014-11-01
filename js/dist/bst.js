(function(exports, undefined){

	'use strict';


/* js/src/AVLTree */
/* js/src/AVLTree/AVLTree1.js */


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

/* js/src/RBTree */
/* js/src/SplayTree */
/* js/src/SplayTree/SplayTree1.js */

var __SplayTree1__ = function ( diff ) {

	var zig, zag, zigzig, zigzag, zagzig, zagzag, z, zz;
	var insert, splay, remove, in_order_traversal, splay_tree;

	zig = function ( x, y ) { y[0] = x[1]; x[1] = y; };
	zag = function ( x, y ) { y[1] = x[0]; x[0] = y; };

	zigzig = function ( x, p, g ) { zig( p, g ); zig( x, p ); };
	zigzag = function ( x, p, g ) { zig( x, g ); zag( x, p ); };
	zagzig = function ( x, p, g ) { zag( x, g ); zig( x, p ); };
	zagzag = function ( x, p, g ) { zag( p, g ); zag( x, p ); };

	z  = [zig, zag];
	zz = [ [zigzig, zigzag], [zagzig, zagzag] ];

	insert = function ( pt, v ) {

		var w;

		w = diff( v, pt[2] ) > 0 | 0;

		if ( pt[w] === null ) {
			pt[w] = [null, null, v];
		}

		else {
			insert(pt[w], v);
		}

	};

	splay = function ( el, v ) {

		var turn, path, pt, f, d, w, i;

		turn = [];
		path = [];
		pt = el;
		f = undefined;

		while ( f === undefined ) {

			if ( pt === null ) {
				f = false;
				pt = path[path.length - 1];
				--turn.length;
			}
			else {

				d = diff( v, pt[2] );

				if ( d === 0 ) {
					f = true;
				}

				else {
					w = d > 0 | 0;
					path.push( pt );
					turn.push( w );
					pt = pt[w];
				}
			}

		}

		i = turn.length - 1;

		for ( ; i > 0 ; i -= 2 ) {
			zz[turn[i-1]][turn[i]]( pt, path[i], path[i-1] );
		}

		if ( i === 0 ) {
			z[turn[0]]( pt, el );
		}

		return [f, pt];
	};

	remove = function ( el, v ) {
		var r;

		r = splay( el, v );

		if ( !r[0] ) {
			return r[1];
		}


		if ( r[1][0] === null ) {
			return r[1][1];
		}

		else if ( r[1][1] === null ) {
			return r[1][0];
		}

		else {
			r[1][0] = splay( r[1][0], v )[1];
			r[1][0][1] = r[1][1];
			return r[1][0];
		}

	};

	in_order_traversal = function ( pt, callback ) {

		if ( pt[0] !== null ) {
			in_order_traversal( pt[0], callback );
		}

		callback( pt[2] );

		if ( pt[1] !== null ) {
			in_order_traversal( pt[1], callback );
		}

	};


	splay_tree = function () {
		this.pt = null;
	};

	splay_tree.prototype.insert = function ( v ) {

		if ( this.pt === null ) {
			this.pt = [null, null, v];
		}

		else {
			insert( this.pt, v );
		}

	};

	splay_tree.prototype.find = function ( v ) {

		var r;

		if ( this.pt === null ) {
			return [false, null];
		}

		r = splay( this.pt, v );
		this.pt = r[1];

		return [r[0], r[1][2]];
	};

	splay_tree.prototype.remove = function ( v ) {
		if ( this.pt !== null ) {
			this.pt = remove( this.pt, v );
		}
	};

	splay_tree.prototype.in_order_traversal = function ( fn ) {
		if ( this.pt !== null ) {
			in_order_traversal( this.pt, fn );
		}
	};

	return splay_tree;

};

exports.__SplayTree1__ = __SplayTree1__;

/* js/src/SplayTree/SplayTree2.js */

var __SplayTree2__ = function(diff){

	var insert = function(pt, v){
		var w = diff(v, pt[2]) > 0 | 0;
		if   (pt[w] === null) pt[w] = [null, null, v];
		else insert(pt[w], v);
	};

	var splay = function(el, v){

		var turn = [], path = [], pt = el, f, d, w, i, a, zoz, zoz1, zoz2, pox, p, g;

		while(f === undefined){
			d = diff(v, pt[2]);
			if(d === 0) f = true;
			else {
				w = d > 0 | 0;
				if(pt[w] === null) f = false;
				else{
					path.push(pt);
					turn.push(w);
					pt = pt[w];
				}
			}
		}

		i = turn.length - 1;
		a = [pt, null];
		for (; i > 0; i -= 2) {
			zoz2 = turn[i];
			zoz1 = turn[i-1];
			pox = zoz1 === zoz2 | 0;
			g = path[i-1];
			p = path[i];
			a[1] = p;

			g[zoz1] = a[pox][1 - zoz1];
			a[pox][1 - zoz1] = g;

			p[zoz2] = pt[1 - zoz2];
			pt[1 - zoz2] = p;
		}

		if (i === 0) {
			zoz = turn[0];
			el[zoz] = pt[1 - zoz];
			pt[1 - zoz] = el;
		}

		return [f, pt];
	};

	var remove = function(el, v){
		var r = splay(el, v);
		if (!r[0]) return r[1];

		if      (r[1][0] === null) return r[1][1];
		else if (r[1][1] === null) return r[1][0];
		else {
			r[1][0] = splay(r[1][0], v)[1];
			r[1][0][1] = r[1][1];
			return r[1][0];
		}
	};

	var in_order_traversal = function(pt, fn){
		if(pt[0] !== null) in_order_traversal(pt[0], fn);
		fn(pt[2]);
		if(pt[1] !== null) in_order_traversal(pt[1], fn);
	};


	var splay_tree = function(){ this.pt = null; };

	splay_tree.prototype.insert = function(v){
		if(this.pt === null) this.pt = [null, null, v];
		else insert(this.pt, v);
	};

	splay_tree.prototype.find = function(v){
		if(this.pt === null) return [false, null];
		var r = splay(this.pt, v);
		this.pt = r[1];
		return [r[0], r[1][2]];
	};

	splay_tree.prototype.remove = function(v){
		if(this.pt !== null) this.pt = remove(this.pt, v);
	};

	splay_tree.prototype.in_order_traversal = function(fn){
		if(this.pt !== null) in_order_traversal(this.pt, fn);
	};

	return splay_tree;

};

exports.__SplayTree2__ = __SplayTree2__;

/* js/src/SplayTree/SplayTree3.js */

var __SplayTree3__ = function(diff){

	var insert = function(pt, v){
		var w = diff(v, pt[2]) > 0 | 0;
		if   (pt[w] === null) pt[w] = [null, null, v];
		else insert(pt[w], v);
	};

	var splay = function(el, v){

		var l, r, t, y, x, d;
		l = r = x = [null, null, undefined];
		t = el;
		while (true) {
			d = diff(v, t[2]);
			if (d < 0) {
				if (!t[0]) break;
				if (diff(v, t[0][2]) < 0) {
					y = t[0];
					t[0] = y[1];
					y[1] = t;
					t = y;
					if (!t[0]) break;
				}
				r[0] = t;
				r = t;
				t = t[0];
			}
			else if (d > 0) {
				if (!t[1]) break;
				if (diff(v, t[1][2]) > 0) {
					y = t[1];
					t[1] = y[0];
					y[0] = t;
					t = y;
					if (!t[1]) break;
				}
				l[1] = t;
				l = t;
				t = t[1];
			}
			else break;
		}
		l[1] = t[0];
		r[0] = t[1];
		t[0] = x[1];
		t[1] = x[0];

		return [diff(v, t[2]) === 0, t];
	};

	var remove = function(el, v){
		var r = splay(el, v);
		if (!r[0]) return r[1];

		if      (r[1][0] === null) return r[1][1];
		else if (r[1][1] === null) return r[1][0];
		else {
			r[1][0] = splay(r[1][0], v)[1];
			r[1][0][1] = r[1][1];
			return r[1][0];
		}
	};

	var in_order_traversal = function(pt, fn){
		if(pt[0] !== null) in_order_traversal(pt[0], fn);
		fn(pt[2]);
		if(pt[1] !== null) in_order_traversal(pt[1], fn);
	};


	var splay_tree = function(){ this.pt = null; };

	splay_tree.prototype.insert = function(v){
		if(this.pt === null) this.pt = [null, null, v];
		else insert(this.pt, v);
	};

	splay_tree.prototype.find = function(v){
		if(this.pt === null) return [false, null];
		var r = splay(this.pt, v);
		this.pt = r[1];
		return [r[0], r[1][2]];
	};

	splay_tree.prototype.remove = function(v){
		if(this.pt !== null) this.pt = remove(this.pt, v);
	};

	splay_tree.prototype.in_order_traversal = function(fn){
		if(this.pt !== null) in_order_traversal(this.pt, fn);
	};

	return splay_tree;

};

exports.__SplayTree3__ = __SplayTree3__;

/* js/src/SplayTree/SplayTree4.js */

var __SplayTree4__ = function(diff){

	var node = function(v){
		this.l = this.r = null;
		this.v = v;
	};

	var item = function(d, pt){
		this.d = d;
		this.pt = pt;
	};

	var splay = function(el, v){

		var l, r, t, y, x, d;
		l = r = x = new node();
		t = el;
		while (true) {
			d = diff(v, t.v);
			if (d < 0) {
				if (!t.l) break;
				if (diff(v, t.l.v) < 0) {
					y = t.l;
					t.l = y.r;
					y.r = t;
					t = y;
					if (!t.l) break;
				}
				r.l = t;
				r = t;
				t = t.l;
			}
			else if (d > 0) {
				if (!t.r) break;
				if (diff(v, t.r.v) > 0) {
					y = t.r;
					t.r = y.l;
					y.l = t;
					t = y;
					if (!t.r) break;
				}
				l.r = t;
				l = t;
				t = t.r;
			}
			else break;
		}
		l.r = t.l;
		r.l = t.r;
		t.l = x.r;
		t.r = x.l;

		return new item(d, t);
	};

	var remove = function(el, v){
		var i = splay(el, v);
		var pt = i.pt;
		if (i.d !== 0) return pt;

		if      (pt.l === null) return pt.r;
		else if (pt.r === null) return pt.l;
		else {
			pt.l = splay(pt.l, v).pt;
			pt.l.r = pt.r;
			return pt.l;
		}
	};

	var in_order_traversal = function(pt, fn){
		if(pt.l !== null) in_order_traversal(pt.l, fn);
		fn(pt.v);
		if(pt.r !== null) in_order_traversal(pt.r, fn);
	};


	var splay_tree = function(){ this.pt = null; };

	splay_tree.prototype.insert = function(v){
		var n = new node(v);
		if (this.pt !== null) {
			var i = splay(this.pt, v);
			this.pt = i.pt;

			if (i.d <= 0) {
				n.l = this.pt.l;
				n.r = this.pt;
				this.pt.l = null;
			}
			else {
				n.r = this.pt.r;
				n.l = this.pt;
				this.pt.r = null;
			}
		}
		this.pt = n;
	};

	splay_tree.prototype.find = function(v){
		if(this.pt === null) return [false, null];
		var i = splay(this.pt, v);
		this.pt = i.pt;
		return [i.d === 0, this.pt.v];
	};

	splay_tree.prototype.remove = function(v){
		if(this.pt !== null) this.pt = remove(this.pt, v);
	};

	splay_tree.prototype.in_order_traversal = function(fn){
		if(this.pt !== null) in_order_traversal(this.pt, fn);
	};

	return splay_tree;

};

exports.__SplayTree4__ = __SplayTree4__;

/* js/src/SplayTree/SplayTree5.js */

var __SplayTree5__ = function(diff){

	var node = function(v){
		this.l = this.r = null;
		this.v = v;
	};

	var in_order_traversal = function(pt, fn){
		if(pt.l !== null) in_order_traversal(pt.l, fn);
		fn(pt.v);
		if(pt.r !== null) in_order_traversal(pt.r, fn);
	};

	var splay_tree = function(){ this.pt = null; };

	splay_tree.prototype.splay = function(v){

		var l, r, t, y, x, d;
		l = r = x = new node();
		t = this.pt;
		while (true) {
			d = diff(v, t.v);
			if (d < 0) {
				if (!t.l) break;
				if (diff(v, t.l.v) < 0) {
					y = t.l;
					t.l = y.r;
					y.r = t;
					t = y;
					if (!t.l) break;
				}
				r.l = t;
				r = t;
				t = t.l;
			}
			else if (d > 0) {
				if (!t.r) break;
				if (diff(v, t.r.v) > 0) {
					y = t.r;
					t.r = y.l;
					y.l = t;
					t = y;
					if (!t.r) break;
				}
				l.r = t;
				l = t;
				t = t.r;
			}
			else break;
		}
		l.r = t.l;
		r.l = t.r;
		t.l = x.r;
		t.r = x.l;

		this.pt = t;

		return d;
	};

	splay_tree.prototype.remove = function(v){
		if(this.pt === null) return;

		var d = this.splay(v);
		if (d !== 0) return;

		if      (this.pt.l === null) this.pt = this.pt.r;
		else if (this.pt.r === null) this.pt = this.pt.l;
		else {
			var tmp = this.pt.r;
			this.pt = this.pt.l;
			this.splay(v);
			this.pt.r = tmp;
		}
	};



	splay_tree.prototype.insert = function(v){
		var n = new node(v);
		if (this.pt !== null) {
			var d = this.splay(v);

			if (d <= 0) {
				n.l = this.pt.l;
				n.r = this.pt;
				this.pt.l = null;
			}
			else {
				n.r = this.pt.r;
				n.l = this.pt;
				this.pt.r = null;
			}
		}
		this.pt = n;
	};

	splay_tree.prototype.find = function(v){
		if(this.pt === null) return [false, null];
		var d = this.splay(v);
		return [d === 0, this.pt.v];
	};

	splay_tree.prototype.in_order_traversal = function(fn){
		if(this.pt !== null) in_order_traversal(this.pt, fn);
	};

	return splay_tree;

};

exports.__SplayTree5__ = __SplayTree5__;

/* js/src/UnbalancedBST */
/* js/src/fundamentals */
/* js/src/fundamentals/avlbalance.js */

/**
 * -> https://en.wikipedia.org/wiki/AVL_tree
 */

var avlbalance = function ( P ) {

	var N;

	// Possibly up to the root

	do {

		if ( P.balancefactor === 2 ) {

			// The left column
			// N === P.left, the child whose height increases by 1.

			N = P.left;

			if ( N.balancefactor === -1 ) {
				// The "Left Right Case"
				// Reduce to "Left Left Case"
				leftrotate( N );
			}

			// Left Left Case
			rightrotate( P );

			break;

		} else if ( P.balancefactor === -2 ) {

			// The right column
			// N == P.right, the child whose height increases by 1.

			N = P.right;

			if ( N.balancefactor === 1 ) {
				// The "Right Left Case"
				// Reduce to "Right Right Case"
				rightrotate( N );
			}
			// Right Right Case
			leftrotate( P );

			break;

		} else if ( P.balancefactor === 0) {
			break;
		}

		// Keep P.balancefactor == ±1.
		// height( N ) increases by 1.
		N = P;
		P = N.parent;

	} while ( P !== null );
};

exports.avlbalance = avlbalance;

/* js/src/fundamentals/insert.js */

var insert = function ( compare, A, B ) {

	var node;

	node = null;

	while ( true ) {

		if ( compare( B, A ) <= 0 ) {

			node = A.left;

			if ( node === null ) {
				A.left = B;
				break;
			}

			A = node;

		}

		else {

			node = A.right;

			if ( node === null ) {
				A.right = B;
				break;
			}

			A = node;

		}

	}

	return B;

};

exports.insert = insert;

/* js/src/fundamentals/leftrotate.js */

var leftrotate = function ( A ) {

	var B;

	B = A.right;

	A.right = B.left;
	B.left = A;

	return B;

};

exports.leftrotate = leftrotate;

/* js/src/fundamentals/rightrotate.js */

var rightrotate = function ( B ) {

	var A;

	A = B.left;

	B.left = A.right;
	A.right = B;

	return A;

};

exports.rightrotate = rightrotate;

})(typeof exports === 'undefined' ? this['bst'] = {} : exports);

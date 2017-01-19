"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = rbinsertfixup;


/**
 * @param {node} z the node to fix, z is RED
 */

function rbinsertfixup(T, z) {

	while (z.p.c === RED) {

		// z is RED
		// if the parent of z is BLACK
		// it violates (3)
		// and we need to fix it

		if (z.p === z.p.p.l) {

			// if our parent is a left child
			// let y be our uncle

			//
			//              z.p.p -> BLACK since z.p is RED
			//            /       \
			//    RED <- z.p       y
			//         /     \
			//        ? <-z-> ?
			//            |
			//           RED

			var y = z.p.p.r;

			if (y.c === RED) {

				// if our uncle is red

				//
				//              z.p.p -> ~RED (might violate (3))
				//            /       \
				// ~BLACK <- z.p       y -> ~BLACK
				//         /     \
				//        ? <-z-> ?
				//            |
				//           RED

				z.p.c = BLACK;
				y.c = BLACK;
				z.p.p.c = RED;
				z = z.p.p;
			}
		}
	}
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mdW5kYW1lbnRhbHMvcmJpbnNlcnRmaXh1cC5qcyJdLCJuYW1lcyI6WyJyYmluc2VydGZpeHVwIiwiVCIsInoiLCJwIiwiYyIsIlJFRCIsImwiLCJ5IiwiciIsIkJMQUNLIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFNd0JBLGE7OztBQUp4Qjs7OztBQUllLFNBQVNBLGFBQVQsQ0FBeUJDLENBQXpCLEVBQTZCQyxDQUE3QixFQUFpQzs7QUFHL0MsUUFBUUEsRUFBRUMsQ0FBRixDQUFJQyxDQUFKLEtBQVVDLEdBQWxCLEVBQXdCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFLSCxFQUFFQyxDQUFGLEtBQVFELEVBQUVDLENBQUYsQ0FBSUEsQ0FBSixDQUFNRyxDQUFuQixFQUF1Qjs7QUFFdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQUlDLElBQUlMLEVBQUVDLENBQUYsQ0FBSUEsQ0FBSixDQUFNSyxDQUFkOztBQUVBLE9BQUtELEVBQUVILENBQUYsS0FBUUMsR0FBYixFQUFtQjs7QUFFbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUgsTUFBRUMsQ0FBRixDQUFJQyxDQUFKLEdBQVFLLEtBQVI7QUFDQUYsTUFBRUgsQ0FBRixHQUFNSyxLQUFOO0FBQ0FQLE1BQUVDLENBQUYsQ0FBSUEsQ0FBSixDQUFNQyxDQUFOLEdBQVVDLEdBQVY7QUFDQUgsUUFBSUEsRUFBRUMsQ0FBRixDQUFJQSxDQUFSO0FBRUE7QUFHRDtBQUVEO0FBRUQiLCJmaWxlIjoicmJpbnNlcnRmaXh1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKipcbiAqIEBwYXJhbSB7bm9kZX0geiB0aGUgbm9kZSB0byBmaXgsIHogaXMgUkVEXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmJpbnNlcnRmaXh1cCAoIFQgLCB6ICkge1xuXG5cblx0d2hpbGUgKCB6LnAuYyA9PT0gUkVEICkge1xuXG5cdFx0Ly8geiBpcyBSRURcblx0XHQvLyBpZiB0aGUgcGFyZW50IG9mIHogaXMgQkxBQ0tcblx0XHQvLyBpdCB2aW9sYXRlcyAoMylcblx0XHQvLyBhbmQgd2UgbmVlZCB0byBmaXggaXRcblxuXHRcdGlmICggei5wID09PSB6LnAucC5sICkge1xuXG5cdFx0XHQvLyBpZiBvdXIgcGFyZW50IGlzIGEgbGVmdCBjaGlsZFxuXHRcdFx0Ly8gbGV0IHkgYmUgb3VyIHVuY2xlXG5cblx0XHRcdC8vXG5cdFx0XHQvLyAgICAgICAgICAgICAgei5wLnAgLT4gQkxBQ0sgc2luY2Ugei5wIGlzIFJFRFxuXHRcdFx0Ly8gICAgICAgICAgICAvICAgICAgIFxcXG5cdFx0XHQvLyAgICBSRUQgPC0gei5wICAgICAgIHlcblx0XHRcdC8vICAgICAgICAgLyAgICAgXFxcblx0XHRcdC8vICAgICAgICA/IDwtei0+ID9cblx0XHRcdC8vICAgICAgICAgICAgfFxuXHRcdFx0Ly8gICAgICAgICAgIFJFRFxuXG5cdFx0XHRsZXQgeSA9IHoucC5wLnIgO1xuXG5cdFx0XHRpZiAoIHkuYyA9PT0gUkVEICkge1xuXG5cdFx0XHRcdC8vIGlmIG91ciB1bmNsZSBpcyByZWRcblxuXHRcdFx0XHQvL1xuXHRcdFx0XHQvLyAgICAgICAgICAgICAgei5wLnAgLT4gflJFRCAobWlnaHQgdmlvbGF0ZSAoMykpXG5cdFx0XHRcdC8vICAgICAgICAgICAgLyAgICAgICBcXFxuXHRcdFx0XHQvLyB+QkxBQ0sgPC0gei5wICAgICAgIHkgLT4gfkJMQUNLXG5cdFx0XHRcdC8vICAgICAgICAgLyAgICAgXFxcblx0XHRcdFx0Ly8gICAgICAgID8gPC16LT4gP1xuXHRcdFx0XHQvLyAgICAgICAgICAgIHxcblx0XHRcdFx0Ly8gICAgICAgICAgIFJFRFxuXG5cdFx0XHRcdHoucC5jID0gQkxBQ0sgO1xuXHRcdFx0XHR5LmMgPSBCTEFDSyA7XG5cdFx0XHRcdHoucC5wLmMgPSBSRUQgO1xuXHRcdFx0XHR6ID0gei5wLnAgO1xuXG5cdFx0XHR9XG5cblxuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==
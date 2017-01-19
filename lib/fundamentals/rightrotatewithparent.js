"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rightrotatewithparent;


/**
 * -> https://en.wikipedia.org/wiki/Tree_rotation
 *
 *      B                A
 *     / \              / \
 *    A   c     ->     a   B
 *   / \                  / \
 *  a   b                b   c
 */

function rightrotatewithparent(B) {

  var A;

  A = B.left;

  B.left = A.right;
  A.right = B;

  A.parent = B.parent;
  B.left.parent = B;
  B.parent = A;

  return A;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mdW5kYW1lbnRhbHMvcmlnaHRyb3RhdGV3aXRocGFyZW50LmpzIl0sIm5hbWVzIjpbInJpZ2h0cm90YXRld2l0aHBhcmVudCIsIkIiLCJBIiwibGVmdCIsInJpZ2h0IiwicGFyZW50Il0sIm1hcHBpbmdzIjoiOzs7OztrQkFZd0JBLHFCOzs7QUFWeEI7Ozs7Ozs7Ozs7QUFVZSxTQUFTQSxxQkFBVCxDQUFpQ0MsQ0FBakMsRUFBcUM7O0FBRW5ELE1BQUlDLENBQUo7O0FBRUFBLE1BQUlELEVBQUVFLElBQU47O0FBRUFGLElBQUVFLElBQUYsR0FBU0QsRUFBRUUsS0FBWDtBQUNBRixJQUFFRSxLQUFGLEdBQVVILENBQVY7O0FBRUFDLElBQUVHLE1BQUYsR0FBV0osRUFBRUksTUFBYjtBQUNBSixJQUFFRSxJQUFGLENBQU9FLE1BQVAsR0FBZ0JKLENBQWhCO0FBQ0FBLElBQUVJLE1BQUYsR0FBV0gsQ0FBWDs7QUFFQSxTQUFPQSxDQUFQO0FBRUEiLCJmaWxlIjoicmlnaHRyb3RhdGV3aXRocGFyZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8qKlxuICogLT4gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVHJlZV9yb3RhdGlvblxuICpcbiAqICAgICAgQiAgICAgICAgICAgICAgICBBXG4gKiAgICAgLyBcXCAgICAgICAgICAgICAgLyBcXFxuICogICAgQSAgIGMgICAgIC0+ICAgICBhICAgQlxuICogICAvIFxcICAgICAgICAgICAgICAgICAgLyBcXFxuICogIGEgICBiICAgICAgICAgICAgICAgIGIgICBjXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmlnaHRyb3RhdGV3aXRocGFyZW50ICggQiApIHtcblxuXHR2YXIgQTtcblxuXHRBID0gQi5sZWZ0O1xuXG5cdEIubGVmdCA9IEEucmlnaHQ7XG5cdEEucmlnaHQgPSBCO1xuXG5cdEEucGFyZW50ID0gQi5wYXJlbnQ7XG5cdEIubGVmdC5wYXJlbnQgPSBCO1xuXHRCLnBhcmVudCA9IEE7XG5cblx0cmV0dXJuIEE7XG5cbn1cblxuIl19
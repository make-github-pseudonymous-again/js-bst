"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = leftrotatewithparent;


/**
 * -> https://en.wikipedia.org/wiki/Tree_rotation
 *
 *      A                B
 *     / \              / \
 *    a   B     ->     A   c
 *       / \          / \
 *      b   c        a   b
 */

function leftrotatewithparent(A) {

  var B = A.right;

  A.right = B.left;
  B.left = A;

  B.parent = A.parent;
  A.right.parent = A;
  A.parent = B;

  return B;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mdW5kYW1lbnRhbHMvbGVmdHJvdGF0ZXdpdGhwYXJlbnQuanMiXSwibmFtZXMiOlsibGVmdHJvdGF0ZXdpdGhwYXJlbnQiLCJBIiwiQiIsInJpZ2h0IiwibGVmdCIsInBhcmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBWXdCQSxvQjs7O0FBVnhCOzs7Ozs7Ozs7O0FBVWUsU0FBU0Esb0JBQVQsQ0FBZ0NDLENBQWhDLEVBQW9DOztBQUVsRCxNQUFNQyxJQUFJRCxFQUFFRSxLQUFaOztBQUVBRixJQUFFRSxLQUFGLEdBQVVELEVBQUVFLElBQVo7QUFDQUYsSUFBRUUsSUFBRixHQUFTSCxDQUFUOztBQUVBQyxJQUFFRyxNQUFGLEdBQVdKLEVBQUVJLE1BQWI7QUFDQUosSUFBRUUsS0FBRixDQUFRRSxNQUFSLEdBQWlCSixDQUFqQjtBQUNBQSxJQUFFSSxNQUFGLEdBQVdILENBQVg7O0FBRUEsU0FBT0EsQ0FBUDtBQUVBIiwiZmlsZSI6ImxlZnRyb3RhdGV3aXRocGFyZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8qKlxuICogLT4gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVHJlZV9yb3RhdGlvblxuICpcbiAqICAgICAgQSAgICAgICAgICAgICAgICBCXG4gKiAgICAgLyBcXCAgICAgICAgICAgICAgLyBcXFxuICogICAgYSAgIEIgICAgIC0+ICAgICBBICAgY1xuICogICAgICAgLyBcXCAgICAgICAgICAvIFxcXG4gKiAgICAgIGIgICBjICAgICAgICBhICAgYlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxlZnRyb3RhdGV3aXRocGFyZW50ICggQSApIHtcblxuXHRjb25zdCBCID0gQS5yaWdodDtcblxuXHRBLnJpZ2h0ID0gQi5sZWZ0O1xuXHRCLmxlZnQgPSBBO1xuXG5cdEIucGFyZW50ID0gQS5wYXJlbnQ7XG5cdEEucmlnaHQucGFyZW50ID0gQTtcblx0QS5wYXJlbnQgPSBCO1xuXG5cdHJldHVybiBCO1xuXG59XG4iXX0=
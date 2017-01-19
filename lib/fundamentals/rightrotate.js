"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rightrotate;


/**
 * -> https://en.wikipedia.org/wiki/Tree_rotation
 *
 *      B                A
 *     / \              / \
 *    A   c     ->     a   B
 *   / \                  / \
 *  a   b                b   c
 */

function rightrotate(B) {

  var A;

  A = B.left;

  B.left = A.right;
  A.right = B;

  return A;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mdW5kYW1lbnRhbHMvcmlnaHRyb3RhdGUuanMiXSwibmFtZXMiOlsicmlnaHRyb3RhdGUiLCJCIiwiQSIsImxlZnQiLCJyaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBWXdCQSxXOzs7QUFWeEI7Ozs7Ozs7Ozs7QUFVZSxTQUFTQSxXQUFULENBQXVCQyxDQUF2QixFQUEyQjs7QUFFekMsTUFBSUMsQ0FBSjs7QUFFQUEsTUFBSUQsRUFBRUUsSUFBTjs7QUFFQUYsSUFBRUUsSUFBRixHQUFTRCxFQUFFRSxLQUFYO0FBQ0FGLElBQUVFLEtBQUYsR0FBVUgsQ0FBVjs7QUFFQSxTQUFPQyxDQUFQO0FBRUEiLCJmaWxlIjoicmlnaHRyb3RhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLyoqXG4gKiAtPiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9UcmVlX3JvdGF0aW9uXG4gKlxuICogICAgICBCICAgICAgICAgICAgICAgIEFcbiAqICAgICAvIFxcICAgICAgICAgICAgICAvIFxcXG4gKiAgICBBICAgYyAgICAgLT4gICAgIGEgICBCXG4gKiAgIC8gXFwgICAgICAgICAgICAgICAgICAvIFxcXG4gKiAgYSAgIGIgICAgICAgICAgICAgICAgYiAgIGNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByaWdodHJvdGF0ZSAoIEIgKSB7XG5cblx0dmFyIEE7XG5cblx0QSA9IEIubGVmdDtcblxuXHRCLmxlZnQgPSBBLnJpZ2h0O1xuXHRBLnJpZ2h0ID0gQjtcblxuXHRyZXR1cm4gQTtcblxufVxuXG4iXX0=
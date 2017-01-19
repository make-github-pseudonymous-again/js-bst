"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = leftrotate;


/**
 * -> https://en.wikipedia.org/wiki/Tree_rotation
 *
 *      A                B
 *     / \              / \
 *    a   B     ->     A   c
 *       / \          / \
 *      b   c        a   b
 */

function leftrotate(A) {

  var B = A.right;

  A.right = B.left;
  B.left = A;

  return B;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mdW5kYW1lbnRhbHMvbGVmdHJvdGF0ZS5qcyJdLCJuYW1lcyI6WyJsZWZ0cm90YXRlIiwiQSIsIkIiLCJyaWdodCIsImxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQVl3QkEsVTs7O0FBVnhCOzs7Ozs7Ozs7O0FBVWUsU0FBU0EsVUFBVCxDQUFzQkMsQ0FBdEIsRUFBMEI7O0FBRXhDLE1BQU1DLElBQUlELEVBQUVFLEtBQVo7O0FBRUFGLElBQUVFLEtBQUYsR0FBVUQsRUFBRUUsSUFBWjtBQUNBRixJQUFFRSxJQUFGLEdBQVNILENBQVQ7O0FBRUEsU0FBT0MsQ0FBUDtBQUVBIiwiZmlsZSI6ImxlZnRyb3RhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLyoqXG4gKiAtPiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9UcmVlX3JvdGF0aW9uXG4gKlxuICogICAgICBBICAgICAgICAgICAgICAgIEJcbiAqICAgICAvIFxcICAgICAgICAgICAgICAvIFxcXG4gKiAgICBhICAgQiAgICAgLT4gICAgIEEgICBjXG4gKiAgICAgICAvIFxcICAgICAgICAgIC8gXFxcbiAqICAgICAgYiAgIGMgICAgICAgIGEgICBiXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGVmdHJvdGF0ZSAoIEEgKSB7XG5cblx0Y29uc3QgQiA9IEEucmlnaHQ7XG5cblx0QS5yaWdodCA9IEIubGVmdDtcblx0Qi5sZWZ0ID0gQTtcblxuXHRyZXR1cm4gQjtcblxufVxuIl19
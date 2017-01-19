"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = find;
function find(compare, node, value) {

	// scan for first node whose
	// value equals parameter value

	while (true) {

		var d = compare(value, node.value);

		if (d === 0) {
			return node;
		} else if (d < 0) {
			node = node.left;
		} else {
			node = node.right;
		}

		if (node === null) {
			return null;
		}
	}
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mdW5kYW1lbnRhbHMvZmluZC5qcyJdLCJuYW1lcyI6WyJmaW5kIiwiY29tcGFyZSIsIm5vZGUiLCJ2YWx1ZSIsImQiLCJsZWZ0IiwicmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUV3QkEsSTtBQUFULFNBQVNBLElBQVQsQ0FBZ0JDLE9BQWhCLEVBQXlCQyxJQUF6QixFQUErQkMsS0FBL0IsRUFBdUM7O0FBRXJEO0FBQ0E7O0FBRUEsUUFBUSxJQUFSLEVBQWU7O0FBRWQsTUFBTUMsSUFBSUgsUUFBU0UsS0FBVCxFQUFnQkQsS0FBS0MsS0FBckIsQ0FBVjs7QUFFQSxNQUFLQyxNQUFNLENBQVgsRUFBZTtBQUNkLFVBQU9GLElBQVA7QUFDQSxHQUZELE1BSUssSUFBS0UsSUFBSSxDQUFULEVBQWE7QUFDakJGLFVBQU9BLEtBQUtHLElBQVo7QUFDQSxHQUZJLE1BSUE7QUFDSkgsVUFBT0EsS0FBS0ksS0FBWjtBQUNBOztBQUVELE1BQUtKLFNBQVMsSUFBZCxFQUFxQjtBQUNwQixVQUFPLElBQVA7QUFDQTtBQUVEO0FBRUQiLCJmaWxlIjoiZmluZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5kICggY29tcGFyZSwgbm9kZSwgdmFsdWUgKSB7XG5cblx0Ly8gc2NhbiBmb3IgZmlyc3Qgbm9kZSB3aG9zZVxuXHQvLyB2YWx1ZSBlcXVhbHMgcGFyYW1ldGVyIHZhbHVlXG5cblx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0Y29uc3QgZCA9IGNvbXBhcmUoIHZhbHVlLCBub2RlLnZhbHVlICk7XG5cblx0XHRpZiAoIGQgPT09IDAgKSB7XG5cdFx0XHRyZXR1cm4gbm9kZTtcblx0XHR9XG5cblx0XHRlbHNlIGlmICggZCA8IDAgKSB7XG5cdFx0XHRub2RlID0gbm9kZS5sZWZ0O1xuXHRcdH1cblxuXHRcdGVsc2Uge1xuXHRcdFx0bm9kZSA9IG5vZGUucmlnaHQ7XG5cdFx0fVxuXG5cdFx0aWYgKCBub2RlID09PSBudWxsICkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19
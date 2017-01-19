'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = treeinsert;

var _insert = require('./insert');

var _insert2 = _interopRequireDefault(_insert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function treeinsert(compare, tree, node) {

	if (tree.root === null) {
		tree.root = node;
	} else {
		(0, _insert2.default)(compare, tree.root, node);
	}
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mdW5kYW1lbnRhbHMvdHJlZWluc2VydC5qcyJdLCJuYW1lcyI6WyJ0cmVlaW5zZXJ0IiwiY29tcGFyZSIsInRyZWUiLCJub2RlIiwicm9vdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBRXdCQSxVOztBQUZ4Qjs7Ozs7O0FBRWUsU0FBU0EsVUFBVCxDQUFzQkMsT0FBdEIsRUFBK0JDLElBQS9CLEVBQXFDQyxJQUFyQyxFQUE0Qzs7QUFFMUQsS0FBS0QsS0FBS0UsSUFBTCxLQUFjLElBQW5CLEVBQTBCO0FBQ3pCRixPQUFLRSxJQUFMLEdBQVlELElBQVo7QUFDQSxFQUZELE1BSUs7QUFDSix3QkFBUUYsT0FBUixFQUFpQkMsS0FBS0UsSUFBdEIsRUFBNEJELElBQTVCO0FBQ0E7QUFFRCIsImZpbGUiOiJ0cmVlaW5zZXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGluc2VydCBmcm9tICcuL2luc2VydCcgO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmVlaW5zZXJ0ICggY29tcGFyZSwgdHJlZSwgbm9kZSApIHtcblxuXHRpZiAoIHRyZWUucm9vdCA9PT0gbnVsbCApIHtcblx0XHR0cmVlLnJvb3QgPSBub2RlO1xuXHR9XG5cblx0ZWxzZSB7XG5cdFx0aW5zZXJ0KCBjb21wYXJlLCB0cmVlLnJvb3QsIG5vZGUgKTtcblx0fVxuXG59XG5cbiJdfQ==
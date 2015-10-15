/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2015-09-30
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _requestFetchRequestJs = require('./request/fetch-request.js');

var _requestFetchRequestJs2 = _interopRequireDefault(_requestFetchRequestJs);

var _requestFetchRequestResourceJs = require('./request/fetch-request-resource.js');

var _requestFetchRequestResourceJs2 = _interopRequireDefault(_requestFetchRequestResourceJs);

exports.FetchRequest = _requestFetchRequestJs2['default'];
exports.FetchRequestResource = _requestFetchRequestResourceJs2['default'];
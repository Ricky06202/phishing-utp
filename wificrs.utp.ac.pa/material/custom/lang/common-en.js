/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 92);
/******/ })
/************************************************************************/
/******/ ({

/***/ 92:
/***/ (function(module, exports) {

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
window.campus = window.campus || {};
var SUPPORT_LANGUAGE = ['zh_CN', 'en_US', 'es_ES', 'de_DE'];
function loadResource(path_param) {
  var result = {};
  $.ajax({
    url: path_param,
    async: false,
    cache: false,
    contentType: 'text/plain;charset=UTF-8',
    dataType: 'text',
    success: function success(data) {
      result = parseData(data);
    }
  });
  return result;
}
function parseData(data) {
  var pageData = {};
  var parameters = data.split(/\n/);
  // "\u4E2D“ .匹配换行符以外的任何字符 \uXXXX任何字符可以使用“\u”再加上其编号的4位十六进制数表示
  var unicodeRE = /(\\u.{4})/ig;
  for (var i = 0; i < parameters.length; i++) {
    parameters[i] = parameters[i].replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    // match() 方法可在字符串内检索指定的值,返回指定的值
    if (!parameters[i].length || parameters[i].match('^#') == '#') {
      continue;
    }
    var pair = parameters[i].split('=');
    if (!pair.length) {
      continue;
    }
    // unescape:解码字符串  name：ac.dc.monitor.whitlist.norecordsfound
    var name = unescape(pair[0]).replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    // value：aaa
    var value = pair.length == 1 ? '' : pair[1];
    while (value.match(/\\$/) == '\\') {
      value = value.substring(0, value.length - 1);
      value += parameters[++i].replace(/\s\s*$/, '');
    }
    for (var s = 2; s < pair.length; s++) {
      value += "=".concat(pair[s]);
    }
    value = value.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    var unicodeMatches = value.match(unicodeRE);
    var _iterator = _createForOfIteratorHelper(unicodeMatches || []),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var unicodeMatchesItem = _step.value;
        value = value.replace(unicodeMatchesItem, this.unescapeUnicode(unicodeMatchesItem));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    name = "".concat(name);
    pageData[name] = value;
  }
  return pageData;
}
window.campus.i18n = function i18n() {
  function getQueryString(name) {
    var reg = new RegExp("(^|&)".concat(name, "=([^&]*)(&|$)"), 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r !== null) {
      return unescape(r[2]);
    }
    return null;
  }
  function getLocalLanguage() {
    // 默认语言（获取失败时默认使用语言）
    var language = getQueryString('lang') || getFacebookParam('lang') || getSocialLang();
    return language;
  }
  function getFacebookParam(urlAttribute) {
    if (window.location.hash === '') {
      return null;
    }
    var reg = new RegExp('(^|&)state=([^&]*)(&|$)', 'i');
    var r = decodeURIComponent(window.location.hash).substr(1).match(reg);
    if (r === null) {
      return null;
    }
    var state = decodeURI(r[2]);
    if (state === null || state === '' || state === undefined) {
      return null;
    }
    state = state.replace('{', '').replace('}', '').replace('"', '');
    var urlParamList = state.split(',');
    var _iterator2 = _createForOfIteratorHelper(urlParamList),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var item = _step2.value;
        if (item !== '') {
          var param = item.split('=');
          if (param[0] === urlAttribute) {
            return param[1];
          }
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return null;
  }
  function getSocialLang() {
    var paramState = getQueryString('state');
    if (!paramState) {
      return 'zh_CN';
    }
    var callBackParaUrl = paramState.replace(/,/g, '&');
    return getQueryStringFacebook(callBackParaUrl, 'lang');
  }
  function getQueryStringFacebook(callBack, name) {
    var reg = new RegExp("(^|&)".concat(name, "=([^&]*)(&|$)"), 'i');
    var r = callBack.match(reg);
    if (r !== null) {
      return decodeURIComponent(r[2]);
    }
    return '';
  }
  var language = getLocalLanguage();
  var supportLanguage = SUPPORT_LANGUAGE.includes(language) ? language : 'en_US';
  var e = loadResource("/material/custom/i18nProperties/common_".concat(supportLanguage, ".properties"));
  return {
    getResource: function getResource() {
      return e;
    },
    getLocale: function getLocale() {
      return getLocalLanguage();
    },
    translate: function translate() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var a = args[0];
      var c = '';
      var b;
      var temp;
      if (a) {
        c = e[a];
        for (b = args.length - 1; b; b -= 1) {
          temp = args[b];
          c = c && c.replace("{".concat(b - 1, "}"), temp);
        }
      }
      return c || a;
    }
  };
}();

/***/ })

/******/ });
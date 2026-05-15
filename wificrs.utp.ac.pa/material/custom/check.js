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
/******/ 	return __webpack_require__(__webpack_require__.s = 204);
/******/ })
/************************************************************************/
/******/ ({

/***/ 204:
/***/ (function(module, exports) {

function checkForm(isQuickAuth, quickNotPwd) {
  var _this = this;
  if (!isQuickAuth) {
    // 1.必填项校验 2.账号密码固定校验
    var requiredFlag = true;
    $('input').each(function () {
      var id = $(_this).attr('id');
      var isR = $(_this).attr('isRequire');
      if (id !== 'password' && id !== 'confirmPassword' && isR !== 'Y' || $('.passwordContainer').css('display') === 'none') {
        return true;
      }
      if (id === '_password' || id === '_confirmPassword' || id === 'validCode') {
        return true;
      }
      if (quickNotPwd && (id === 'password' || id === 'confirmPassword')) {
        return true;
      }
      requiredFlag = requiredValid($(_this), true);
      return requiredFlag;
    });
    return requiredFlag;
  }

  // 用户名\联系电话\邮箱地址校验
  if (!usernameValid('username') || !telephoneValid('mobileNum') || !emailValid('email')) {
    return false;
  }

  // 访客姓名校验
  var name = $('#name').val().trim();
  var guestNameFlag = guestNameValidator(name);
  if (!guestNameFlag) {
    window.showdiv(window.campus.i18n.translate('guestNameInvalidMsg'));
    return false;
  }

  // 访客所属公司校验
  var company = $('#company').val().trim();
  var guestCompanyFlag = companyValidator(company);
  if (!guestCompanyFlag) {
    window.showdiv(window.campus.i18n.translate('guestCompanyInvalidMsg'));
    return false;
  }

  // 访客注册申请原因校验
  var applyReasonFlag = guestInfoValid('applyReason', 256, window.campus.i18n.translate('applyReason'));
  if (!applyReasonFlag) {
    return false;
  }

  // 自定义校验
  if (typeof __checkForm === 'function') {
    return window.__checkForm;
  }
  return true;
}
window.checkQuickRequire = function checkQuickRequire() {
  var _this2 = this;
  // 1.必填项校验 2.账号密码固定校验
  var requiredFlag = true;
  $('input').each(function () {
    var id = $(_this2).attr('id');
    var isR = $(_this2).attr('isRequire');
    if (id != 'username' && isR != 'Y') {
      return true;
    }
    if (id != 'password' && isR != 'Y') {
      return true;
    }
    requiredFlag = requiredValid($(_this2), false);
    if (!requiredFlag) {
      return false;
    }
    return true;
  });
  return requiredFlag ? 'N' : 'Y';
};

// 用户名校验
function usernameValid(id) {
  var pass = true;
  var obj = $("#".concat(id));
  if (obj !== null && obj !== undefined) {
    var value = window.getInputValue(id).trim();
    if (value.length > 0) {
      var len = window.getInputValue(id).length;
      var maxlength = 128;
      var dChar = value.match(/[^\x20-\xff]/g);
      len += dChar ? dChar.length : 0;
      var regUsername = /^[^=+%,#\\"]+$/;
      if (len > maxlength || !regUsername.test(value)) {
        window.showdiv(window.campus.i18n.translate('usernameLength'));
        pass = false;
      }
    }
  }
  return pass;
}

// 联系电话校验
function telephoneValid(id) {
  // 记录校验是否通过
  var obj = $("#".concat(id));
  var pass = true;
  if (obj !== null && obj !== undefined) {
    var value = window.getInputValue(id);
    var regPhone = /^\+?[0-9]*$/;
    var len = value.length;
    var maxLength = 50;
    pass = regPhone.test(value);
    if (!pass && $.trim(value) !== '') {
      window.showdiv(window.campus.i18n.translate('enterNumber'));
      pass = false;
    }
    if (len > maxLength) {
      window.showdiv(window.campus.i18n.translate('phoneLength'));
      pass = false;
    }
  }
  return pass;
}

// 邮箱校验
function emailValid(id) {
  // 记录校验是否通过
  var pass = true;
  var value = window.getInputValue(id);
  if (!(value.trim() === '')) {
    var maxlength = 100;
    var len = value.length;
    var regEmail = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+[A-Za-z0-9]+$/;
    if (!regEmail.test(value)) {
      window.showdiv(window.campus.i18n.translate('emailNumFormatError'));
      pass = false;
    }
    if (len > maxlength) {
      window.showdiv(window.campus.i18n.translate('emailLength'));
      pass = false;
    }
  }
  return pass;
}

// 访客输入的姓名、公司、申请原因做长度校验
function guestInfoValid(id, maxLength, attr) {
  // 记录校验是否通过
  var pass = true;
  var value = window.getInputValue(id);
  if (!(value.trim() === '')) {
    var len = value.length;
    if (len > maxLength) {
      var msg = attr + len + window.campus.i18n.translate('explainPartTwo') + maxLength;
      window.showdiv(msg);
      pass = false;
    }
  }
  return pass;
}
function companyValidator(company) {
  return /^[^=+%,#\\"]{0,128}$/.test(company);
}
function guestNameValidator(name) {
  return /^[^=+%,#\\"]{0,64}$/.test(name);
}

// 必须输入校验
function requiredValid($inp, isPrompt) {
  var id = $inp.attr('id');
  var value = window.getInputValue(id);
  var field = $inp.val();
  if (id == 'password') {
    field = window.campus.i18n.translate('local_password');
  }
  if (id == 'confirmPassword') {
    field = window.campus.i18n.translate('local_repwd');
  }
  if (!field) {
    field = window.campus.i18n.translate('local_notemptyfield');
  }
  if (!value) {
    if (isPrompt) {
      window.showdiv(window.HtmlEncode(field) + window.campus.i18n.translate('requiredEmpty'));
    }
    return false;
  }
  return true;
}
$.extend(window, {
  checkForm: checkForm
});

/***/ })

/******/ });
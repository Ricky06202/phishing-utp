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
/******/ 	return __webpack_require__(__webpack_require__.s = 205);
/******/ })
/************************************************************************/
/******/ ({

/***/ 205:
/***/ (function(module, exports) {

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/**
 * 判断是否为手机设备
 */
(function func0(window) {
  window.BrowserDetect = {
    isMobileBrowser: false,
    userAgent: window.navigator.userAgent || window.navigator.vendor || window.opera
  };
  if (/(android|bb\d+|meego).+mobile|android|ip(hone|od|ad)|ios|iemobile|meego|bb\d+|avantgo|bada\/|blackberry|playbook|blazer|compal|elaine|fennec|hiptop|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|ucweb|ucbrowser|mqqbrowser|sogoumse/i.test(window.BrowserDetect.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(window.BrowserDetect.userAgent.substr(0, 4))) {
    window.BrowserDetect.isMobileBrowser = true;
  }
})(window);

/**
 * 提示窗口
 */
function showdiv(str, autoHide, func, param, needCancel) {
  var $modal = $('#_modal');
  var $msg = $('#_msgContainer');
  var $wait = $('#_waitContainer');
  $modal.remove();
  $msg.remove();
  $wait.remove();

  // screen width and height
  var maskWidth = document.documentElement.clientWidth;
  var maskHeight = document.documentElement.clientHeight;
  var bodyWidth = $(document.body).width();
  var bodyHeight = $(document.body).height();
  var bgWidth = maskWidth >= bodyWidth ? maskWidth : bodyWidth;
  var bgHeight = maskHeight >= bodyHeight ? maskHeight : bodyHeight;

  // create background cover dom
  $modal = $("<div id=\"_modal\" style=\"width: ".concat(bgWidth, "px;height: ").concat(bgHeight, "px;\"></div>")).appendTo(document.body);

  // init message dialog width and height
  var _generateDialog = generateDialog(bgWidth, bgHeight, needCancel);
  $msg = _generateDialog.$msg;
  $wait = _generateDialog.$wait;
  if (autoHide) {
    // wait dialog
    $('span.tip-span', $wait).text(str);
    $wait.show();
  } else {
    // message dialog
    showComfirmWin($msg, str, func, param, needCancel);
  }
  $modal.show();
  var tip_span = $('.tip-span').height() * 1;

  // 提示框信息的高度
  adaptDialogPosition(tip_span);
}
function showComfirmWin($msg, str, func, param, needCancel) {
  $('span.tip-span', $msg).text(str);
  $msg.attr('showflag', 'true');
  $msg.show();

  // bind close event
  registerConfirmClickHandler(func, param);
  if (needCancel) {
    registerCancelClickHandler();
  }
  registerCloseClickHandler(param, func);
}
function registerCancelClickHandler() {
  $('#_msgContainer span.btn-wrapper.btn-cancel').unbind('click').click(function () {
    closediv();
  });
}
function registerConfirmClickHandler(func, param) {
  $('#_msgContainer span.btn-wrapper').unbind('click').click(function () {
    closediv();
    if (func) {
      func(param);
    }
  });
}
function registerCloseClickHandler(param, func) {
  $('#_msgContainer .title .bg-close').unbind('click').click(function () {
    closediv();
    if (typeof param === 'undefined') {
      return;
    }
    if (param.chanPwdSucFlag) {
      func(param);
      return;
    }
    if (param.chanFir === 'n' && param.chanFirFail === 1) {
      func(param);
    }
    if (param.chanFir === 'y' && param.chanFirSuccess === 1) {
      func(param);
    }
  });
}
function adaptDialogPosition(tip_span) {
  var oneLineHeight = 18;
  var twoLineHeight = 32;
  var threeLineHeight = 48;
  if (tip_span === oneLineHeight) {
    $('#_msgContainer .content .tip-span').css({
      'margin-top': '32px'
    });
  } else if (tip_span === twoLineHeight) {
    $('#_msgContainer .content .tip-span').css({
      'margin-top': '27px'
    });
  } else if (tip_span === threeLineHeight) {
    $('#_msgContainer .content .tip-span').css({
      'margin-top': '22px'
    });
  } else {
    $('#_msgContainer .content .tip-span').css({
      'margin-top': '20px'
    });
  }
}
function generateDialog(bgWidth, bgHeight, needCancel) {
  var isMobileBrowser = window.BrowserDetect.isMobileBrowser;
  var dw = isMobileBrowser ? 270 : 330;
  var dh = 175;
  var tw = isMobileBrowser ? 220 : 280;
  var pw = isMobileBrowser ? 170 : 220;
  var l = (bgWidth - dw) / 2;
  var t = (bgHeight - dh) / 2;
  var tip = window.campus.i18n.translate('tip');
  var local = {
    confirm: window.campus.i18n.translate('local_confirm'),
    cancel: window.campus.i18n.translate('local_cancel')
  };
  // create message dialog dom
  var html = "<div id=\"_msgContainer\" style=\"left: ".concat(l, "px;top: ").concat(t, "px;width: ").concat(dw, "px;position:absoulte;z-index:9999;\"  showflag = \"true\">\n  <div class=\"title\" style=\"padding: 6px 15px;\"><span style=\"width: ").concat(tw, "px;\">").concat(tip, "</span><span class=\"bg-close\"></span>\n  </div><div class=\"content\" style=\"margin-top:1px;\"><span class=\"img-span\"></span><span class=\"tip-span\" style=\"width: ").concat(pw, "px;\"></span>\n  </div><div class=\"button\"><span class=\"btn-wrapper\">").concat(local.confirm, "</span>");
  if (needCancel) {
    html += '<span> </span>';
    html += "<span class=\"btn-wrapper btn-cancel\">".concat(local.cancel, "</span>");
  }
  html += '</div></div>';
  $(document.body).append(html);
  var $msg = $('#_msgContainer');

  // create wait dialog dom
  dw = 200;
  dh = 40;
  l = (bgWidth - dw) / 2;
  t = (bgHeight - dh) / 2;
  html = "<div id=\"_waitContainer\" style=\"left:50%;top: 50%;width: ".concat(dw, "px;height: ").concat(dh, "px;margin:-25px 0px 0px -110px\" >\n  <div><span class=\"bg-loading\"></span></div><div><span class=\"tip-span\"></span></div></div>");
  $(document.body).append(html);
  var $wait = $('#_waitContainer');
  closediv();
  return {
    $msg: $msg,
    $wait: $wait
  };
}

// 更新Url中的参数,需要删除的参数
function updateUrlParams(url, argObj) {
  if (!argObj) {
    return url;
  }
  var newUrl = url;
  var keys = Object.keys(argObj);
  for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
    var arg = _keys[_i];
    newUrl = updateUrlParam(newUrl, arg, argObj[arg]);
  }
  return newUrl;
}

// 获取url中#号后面的数字，用来确认多种认证方式时候当前应该是哪个认证方式,如果没有返回false，代表他不是多种认证方式。
function getUrlJingHaoNum() {
  var currentAuthType = window.location.href.split('#');
  if (typeof currentAuthType[1] === 'undefined') {
    return false;
  }
  return currentAuthType[1];
}

// 判断是否是预览页面
function isPreviewPage(notShowTips) {
  if (window.location.href.indexOf('pushPageId') <= 0 && window.getQueryString('businessType') != 'Boarding') {
    if (!notShowTips) {
      window.showdiv(window.campus.i18n.translate('pageDelive'));
    }
    return true;
  }
  return false;
}

// 获取URL参数
function getQueryString(name) {
  var reg = new RegExp("(^|&)".concat(name, "=([^&]*)(&|$)"), 'i');
  var r = window.location.search.substr(1).match(reg);
  if (r !== null) {
    return decodeURIComponent(r[2]);
  }
  return null;
}

// 查询portalpage跳转地址的信息
function getPortalPage(page) {
  var portalPageLocation = {
    auth: 'auth.html',
    authSuccess: 'authSuccess.html',
    register: 'register.html',
    registerSuccess: 'registerSuccess.html',
    readme: 'readme.html',
    changePassword: 'changePassword.html',
    forgetPwdFirst: 'forgetPwdFirst.html',
    forgetPwdSecond: 'forgetPwdSecond.html'
  };
  if (page != undefined) {
    return portalPageLocation[page] || '';
  }
  return '';
}

// 删除Url中的参数
function delUrlParam(urlParam, nameArray) {
  if (urlParam == '' || urlParam == undefined) {
    return '';
  }
  var query = urlParam.substr(1);
  if (query == '' || nameArray == undefined) {
    return urlParam;
  }
  if (!Array.isArray(nameArray) || nameArray.length == 0) {
    return urlParam;
  }
  var obj = {};
  var arr = query.split('&');
  for (var j = 0; j < arr.length; j++) {
    arr[j] = arr[j].replace(/=/, ',').split(',');
    obj[arr[j][0]] = arr[j][1];
  }
  var _iterator = _createForOfIteratorHelper(nameArray),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _item = _step.value;
      if (Object.prototype.hasOwnProperty.call(obj, _item)) {
        delete obj[_item];
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var paramList = [];
  if (obj) {
    var keys = Object.keys(obj);
    for (var _i2 = 0, _keys2 = keys; _i2 < _keys2.length; _i2++) {
      var item = _keys2[_i2];
      paramList.push("".concat(item, "=").concat(obj[item]));
    }
  }
  return "?".concat(paramList.join('&'));
}
$(function () {
  // 去除缩略图上的小"xx"
  $('.deltypebtn').each(function callback() {
    $(this).remove();
  });
  $('.zoom').each(function callback() {
    $(this).remove();
  });
  $('.column-focus').each(function callback() {
    $(this).remove();
  });
  // ajax 请求预置cookie
  $.ajaxSetup({
    beforeSend: function beforeSend(xhr) {
      xhr.setRequestHeader('X-XSRF-TOKEN', window.localStorage4Portal.getItem('XSRF-TOKEN'));
    }
  });
  window.isMobile = window.BrowserDetect.isMobileBrowser;
  // 检查背景设置
  initBackground();
  // 设置拉伸背景图片
  var st = $(document.body).attr('style');
  if (!st) {
    st = $(document.body).attr('STYLE');
  }
  if (st && (st.indexOf('100% 100%') >= 0 || st.indexOf('background-size') >= 0 || st.indexOf('BACKGROUND-SIZE') >= 0)) {
    // 支持CSS3场景
    var bh = $(document.body).height();
    var dh = document.documentElement.clientHeight;
    if (bh < dh) {
      $(document.body).height(dh);
    }
    // 修改小部分华为手机上背景图片显示不全问题
    setTimeout(function () {
      $(document.body).css({
        'background-size': 'cover'
      });
      if (/iphone/i.test(navigator.userAgent.toLowerCase())) {
        $(document.body).css('background-attachment', 'fixed');
      }
    }, 20);
  }
  // 窗口调整后重新设置背景图片大小
  adjustWindowSize();
  // 调整验证码输入框宽度 此处兼容老页面
  var $vCode = $('#validCode');
  if ($vCode.length > 0 && $vCode.width() > 165) {
    $vCode.width($vCode.width() - 80);
  }
  // 禁用用户须知框
  var $readme = $('textarea.readme-area');
  if ($readme.length > 0) {
    $readme.blur().focus(function focusFunc() {
      $(this).blur();
    });
  }
  if ($readme.length > 0 && window.BrowserDetect.isMobileBrowser && navigator.userAgent.indexOf('MSIE') == -1) {
    $readme.after("<div id=\"readme-wrapper\" style=\"width: ".concat($readme.width(), "px;height: ").concat($readme.height(), "px;\"><div id=\"readme-scroller\"><ul><li>").concat($readme.val(), "</li></ul></div></div>")).remove();
  }

  // 初始化输入框提示
  initInputTip();
  var isEnableTemp = isCookiesEnable();
  if (!isEnableTemp) {
    showdiv(window.campus.i18n.translate('cookieNotEnableError'));
    return;
  }
  // 字符最大长度
  var userName_len = 128;
  var userPass_len = 128;
  var mobileNum_len = 50;
  var email_len = 100;
  var validCode_len = 8;

  // 限制输入框输入
  $('input:text, input:password').keyup(function callback() {
    var id = $(this).attr('id');
    var obj = $(this);
    if (id === 'username') {
      obj.attr('maxlength', userName_len);
    } else if (id === 'password') {
      obj.attr('maxlength', userPass_len);
    } else if (id === 'confirmPassword') {
      obj.attr('maxlength', userPass_len);
    } else if (id === 'mobileNum') {
      obj.attr('maxlength', mobileNum_len);
    } else if (id === 'email') {
      obj.attr('maxlength', email_len);
    } else if (id === 'validCode') {
      obj.attr('maxlength', validCode_len);
    }
  });
  if ($('.other-login').length) {
    // 多种认证存在
    var authType = getUrlJingHaoNum();
    var authElementArray = ['', '.vipauth', '', '.msgauth', '.facebook', '.wechatauth', '.passauth'];
    if (authType) {
      $(".other-login-show ".concat(authElementArray[authType])).click();
    }
  }

  //  board过滤
  if ($('[typenum=83]').length) {
    if (IsPC()) {
      initBoardingDownloadForPC();
    }
    if (checkSystem() === 'android') {
      initBoardingDownloadForAndroid();
    }
    if (checkSystem() === 'ios') {
      initBoardingDownloadForIOS();
    }
  }
});
function initBoardingDownloadForPC() {
  $('.boardingLink').find('.langIcon').attr('href', '/portalpage/client/OnboardTool.exe');
  $('.boardingLink').find('.langIcon').text('OnboardTool.exe');
}
function initBoardingDownloadForAndroid() {
  $('.boardingLink').find('.langIcon').attr('href', '/portalpage/client/Onboarding.apk');
  $('.boardingLink').find('.langIcon').attr('download', 'Onboarding.apk');
  $('.boardingLink').find('.langIcon').text('Onboarding.apk');
}
function newWin() {
  var url = window.location.href.split('#')[0];
  var hash = window.location.hash;
  url = "".concat(url).concat(url.includes('?') ? '&' : '?', "boardingTurnFlag=1").concat(hash);
  var a = document.createElement('a');
  var id = 'jumpToExternalBroswerLink';
  a.setAttribute('href', url);
  a.setAttribute('target', '_blank');
  a.setAttribute('id', id);
  // 防止反复添加
  if (!document.getElementById(id)) {
    document.body.appendChild(a);
  }
  a.click();
}
function initBoardingDownloadForIOS() {
  $('.boardingLink').find('.langIcon').text('boarding_iosconfig_tls_v2.mobileconfig');
  // 苹果手机的webview无法进行下载操作，请使用外部浏览器打开
  if (isOpenInPhoneWebview() && window.getQueryString('boardingTurnFlag') === null) {
    window.showdiv(window.campus.i18n.translate('boardingAuthTips'), false, newWin);
    return;
  }
  $('.boardingLink').find('.langIcon').addClass('display_none_important'); // 请求下载内容，不可下载，隐藏处理
  var deviceMac = encodeURIComponent(getQueryString('dmac') || '');
  var macAddr = encodeURIComponent(getQueryString('mac') || '');
  var stateId = encodeURIComponent(getQueryString('s') || '');
  var deviceId = encodeURIComponent(getQueryString('ip') || '');
  var url = "/PortalServer/onboardAction!getConfig.action?businessType=Boarding&deviceMac=".concat(deviceMac, "&ver=1.0&os=ios&macAddr=").concat(macAddr, "&stateId=").concat(stateId, "&deviceIp=").concat(deviceId);
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open('POST', url, true);
  xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xmlHttp.onreadystatechange = function onreadystatechange() {
    if (xmlHttp.readyState == 4) {
      var arrayBuffer = xmlHttp.response;
      downloadFile('boarding_iosconfig_tls_v2.mobileconfig', arrayBuffer);
    }
  };
  xmlHttp.responseType = 'arraybuffer';
  xmlHttp.send();
}
function adjustWindowSize() {
  $(window).resize(function () {
    var $bg = $('#bg-cover-img');
    if ($bg.length > 0) {
      $bg.width(document.documentElement.clientWidth).height(document.documentElement.clientHeight);
    }
  });
}
function initBackground() {
  if ($('.bcgroundImgContainer').length) {
    var backgroundImage = $('.bcgroundImgContainer').attr('data-background');
    var backgroundColor = $('.bcgroundImgContainer').attr('data-backgroundcolor');
    var backgroundImageEnable = $('.bcgroundImgContainer').attr('data-checked') === 'true';
    if (backgroundImageEnable && backgroundImage != '') {
      $(document.body).css({
        'background-size': 'cover',
        'background-image': "url(".concat(backgroundImage, ")"),
        'background-position': 'center'
      });
    } else {
      if (backgroundColor == '') {
        backgroundColor = '#FFFFFF';
      }
      $(document.body).css({
        'background-size': 'cover',
        'background-color': backgroundColor
      });
    }
  }
}
function downloadFile(fileName, content) {
  // 苹果手机的webview无法进行下载操作，请使用外部浏览器打开
  if (isOpenInPhoneWebview()) {
    return;
  }
  var blob = new Blob([content], {
    type: 'application/x-apple-aspen-config'
  });
  if ('msSaveOrOpenBlob' in navigator) {
    $('.boardingLink').find('.langIcon').attr('href', '#');
    $('.boardingLink').find('.langIcon').removeAttr('download');
    $('.boardingLink').find('.langIcon').click(function () {
      window.navigator.msSaveOrOpenBlob(blob, fileName);
    });
  } else {
    $('.boardingLink').find('.langIcon').attr('href', URL.createObjectURL(blob));
    $('.boardingLink').find('.langIcon').attr('download', fileName);
  }
  $('.boardingLink').find('.langIcon').removeClass('display_none_important'); // 获取到下载链接后再展示
}

/**
 * 切换用户须知复选框
 */
window.toggleAgreeCheck = function toggleAgreeCheck($img) {
  var src = $img.attr('src');
  if (src.indexOf('uncheck') >= 0) {
    $img.attr('src', src.replace('uncheck', 'check'));
  } else {
    $img.attr('src', src.replace('check', 'uncheck'));
  }
};
window.getFacebookParam = function getFacebookParam(urlAttribute) {
  if (window.location.hash == '') {
    return null;
  }
  var reg = new RegExp('(^|&)state=([^&]*)(&|$)', 'i');
  var r = decodeURIComponent(window.location.hash).substr(1).match(reg);
  if (r !== null) {
    var state = decodeURI(r[2]);
    if (state === null || state == '' || state == undefined) {
      return null;
    }
    state = state.replace('{', '').replace('}', '').replace('"', '');
    var urlParamList = state.split(',');
    var _iterator2 = _createForOfIteratorHelper(urlParamList),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var item = _step2.value;
        if (item === '') {
          continue;
        }
        var param = item.split('=');
        if (param[0] == urlAttribute) {
          return param[1];
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  return null;
};

// 初始化输入框提示
function initInputTip() {
  // 密码输入框特殊处理-----兼容老的逻辑
  $('#password, #confirmPassword').each(function forFunc() {
    var value = $(this).val();
    // 原本input-password是通过Value设置默认提示，修改为PlaceHolder
    if (value != '' && value != undefined) {
      $(this).attr('placeholder', $(this).val());
      $(this).attr('value', '');
    }
    if ($(this).attr('type') === 'text') {
      $(this).attr('type', 'password');
    }
  });
  // 修改逻辑，原先text-input 通过emptyTip做placeHolder，修改为PlaceHolder
  $('input:text, input:password').each(function forFunc() {
    if ($(this).attr('emptyTip') != '' && $(this).attr('emptyTip') != undefined) {
      $(this).attr('placeholder', $(this).attr('emptyTip'));
    }
  }).css('color', 'black');
}

// 获取输入值
window.getInputValue = function getInputValue(inputId) {
  var $inp = $("#".concat(inputId));
  if ($inp.length == 0 || $inp.hasClass('input-empty') || $inp.hasClass('placeHolderClass')) return '';
  return $inp.val();
};

// 操作指定的Cookie
window.getTopWindowCookie = function getTopWindowCookie(objName) {
  var arrStr = '';
  if (window.top.document.cookie) {
    arrStr = window.top.document.cookie.split('; ');
  } else {
    arrStr = document.cookie.split('; ');
  }
  var _iterator3 = _createForOfIteratorHelper(arrStr),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var item = _step3.value;
      var temp = item.split('=');
      if (temp[0] == objName) {
        return decodeURI(temp[1]);
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return '';
};

// 判断浏览器的Cookies是否被禁用
function isCookiesEnable() {
  try {
    if (navigator.cookieEnabled) {
      return true;
    }
    var exp = new Date();
    exp.setTime(exp.getTime() + 5000); // 5秒钟后，让cookies自动失效
    document.cookie = "testcookie=yes;expires=".concat(exp.toGMTString());
    if (document.cookie.indexOf('testcookie=yes') > -1) {
      return true;
    }
    return false;
  } catch (e) {
    // 出现异常说明Cookies设置不了
    return false;
  }
}
window.HtmlEncode = function HtmlEncode(value) {
  return !value ? value : String(value).replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
};

// 获取URL中的所有参数字符串，
function getUrlParams(noparam) {
  var url = window.location.href;
  var indexUrl = url.indexOf('?');
  if (indexUrl === -1) {
    return '';
  }
  if (noparam) {
    return url.substr(indexUrl);
  }
  return "&".concat(url.substr(indexUrl + 1));
}
window.onresize = function onresize() {
  var $modal = $('#_modal');
  if (!$modal.length) {
    return;
  }
  var bgWidth = document.documentElement.clientWidth;
  var bgHeight = document.documentElement.clientHeight;
  var bodyWidth = $(document.body).width();
  var bodyHeight = $(document.body).height();
  var maskWidth = bgWidth >= bodyWidth ? bgWidth + 20 : bodyWidth + 20;
  var maskHeight = bgHeight >= bodyHeight ? bgHeight + 20 : bodyHeight + 20;
  $modal.css('height', maskHeight);
  $modal.css('width', maskWidth);
  var dw = window.BrowserDetect.isMobileBrowser ? 270 : 330;
  var dh = 175;
  var l = (maskWidth - dw) / 2;
  var t = (maskHeight - dh) / 2;
  var $msg = $('#_msgContainer');
  if ($msg.length !== 0) {
    $msg.css('left', l).css('top', t).css('width', dw).css('height', dh);
  }
};
function closediv() {
  var $modal = $('#_modal');
  var $msg = $('#_msgContainer');
  var $wait = $('#_waitContainer');
  $modal.hide();
  $msg.hide();
  $wait.hide();
  $msg.attr('showflag', 'false');
}
// 取小数点后面两位的方法带四舍五入的功能
window.returnFloat = function returnFloat(valueData) {
  if (Number.isNaN(valueData)) {
    return '0.00';
  }
  var value = Math.round(parseFloat(valueData) * 100) / 100;
  var xsd = value.toString().split('.');
  if (xsd.length == 1) {
    value = "".concat(value.toString(), ".00");
    return value;
  }
  if (xsd.length > 1) {
    if (xsd[1].length < 2) {
      value = "".concat(value.toString(), "0");
    }
    return value;
  }
  return null;
};
window.changeAuthType = function changeAuthType(target, elementId, authTypeParam) {
  // 解决默认模板中，因默认认证方式的小图标带other-login-unsupport导致的切换时该认证方式被隐藏的问题
  var authArr = {
    vipauthcontent: 'vipauth',
    smsauthcontent: 'msgauth',
    passauthcontent: 'passauth',
    wechatauthcontent: 'wechatauth',
    fbauthcontent: 'facebook',
    twitterauthcontent: 'twitter',
    qqauthcontent: 'qq',
    sinaauthcontent: 'sina'
  };
  var key = $('.eportalcur').attr('id');
  var selector = ".".concat(authArr[key]);
  if ($(selector).parent().hasClass('other-login-unsupport')) {
    $(selector).parent().removeClass('other-login-unsupport');
  }
  var authType = parseInt(authTypeParam, 10);
  $('.contentmain, .authcontentmain').removeClass('eportalcur');
  $("#".concat(elementId)).addClass('eportalcur');
  $(target).parent().siblings().removeClass('other-login-hide');
  $(target).parent().removeClass('other-login-show').addClass('other-login-hide');
  var curAuthType = getQueryString('authType');
  if (parseInt(curAuthType, 10) === authType) {
    window.location.hash = '';
  } else {
    window.location.hash = authType;
  }
  $('.other-login-unsupport').addClass('other-login-hide');
  if (authType === 4 || authType === 5) {
    loadScript('../../../../material/custom/socialAuth.js');
  }
};

// 更新Url中的参数
function updateUrlParam(url, arg, arg_val) {
  if (url == undefined) {
    return '';
  }
  if (arg == undefined || arg == '' || arg === null) {
    return url;
  }
  var pattern = "".concat(arg, "=([^&]*)");
  var replaceText = "".concat(arg, "=").concat(arg_val);
  if (url.match(pattern)) {
    var tmp = new RegExp("(".concat(arg, "=)([^&]*)"), 'gi');
    tmp = url.replace(tmp, replaceText);
    return tmp;
  }
  if (url.match('[?]')) {
    return "".concat(url, "&").concat(replaceText);
  }
  return "".concat(url, "?").concat(replaceText);
}

// 认证页面跳转到注册页面
window.authTurnRegisterPage = function authTurnRegisterPage() {
  if (isPreviewPage()) {
    return;
  }
  window.location.href = getPortalPage('register') + getUrlParams(true);
};

// 用户须知页面返回-同意
window.turnRegisterPage = function turnRegisterPage() {
  if (isPreviewPage()) {
    return;
  }
  window.sessionStorage4Portal.setItem('acceptReadMe', 'true');
  // 表示由注册页面跳转过来
  if (getQueryString('readmePush') == 1) {
    var delParam = ['readmePush'];
    var urlParam = delUrlParam(window.location.search, delParam);
    var url = getPortalPage('register') + urlParam + window.location.hash;
    window.location.href = url;
  } else {
    window.location.href = getPortalPage('auth') + getUrlParams(true);
  }
};

// 返回页面
window.turnBackPage = function turnBackPage() {
  var isFirstReadme = getQueryString('isReadme');
  if (isFirstReadme && isFirstReadme == 'Y') {
    window.location.href = getPortalPage('auth');
  } else {
    window.history.back();
  }
};

// 其它页面返回到认证页面
window.turnLoginPage = function turnLoginPage() {
  if (isPreviewPage()) {
    return;
  }
  var urlParam = getUrlParams(true);
  var delParam = ['userInfo', 'validTime'];
  urlParam = delUrlParam(urlParam, delParam);
  window.location.href = getPortalPage('auth') + urlParam;
};
window.turnSuccessPage = function turnSuccessPage() {
  if (isPreviewPage()) {
    return;
  }
  if (getQueryString('changeUserPassFirst') === 'true') {
    var urlParam = getUrlParams(true);
    var delParam = ['changeUserPassFirst'];
    urlParam = delUrlParam(urlParam, delParam);
    window.location.href = getPortalPage('auth') + urlParam;
  } else {
    window.location.href = getPortalPage('authSuccess') + getUrlParams(true);
  }
};

// 跳转到登录页面 现网版本有使用该接口，暂时保留
window.authRedirect = function authRedirect() {
  if (isPreviewPage()) {
    return;
  }
  var urlParam = getUrlParams(true);
  var delParam = ['userInfo', 'validTime'];
  urlParam = delUrlParam(urlParam, delParam);
  window.location.href = getPortalPage('auth') + urlParam;
};

// 跳转到用户须知页面
window.turnReadmePage = function turnReadmePage(isRegister) {
  if (isPreviewPage()) {
    return;
  }
  var urlParam = window.location.search;
  if (isRegister) {
    urlParam = updateUrlParam(urlParam, 'readmePush', '1');
  }
  window.location.href = getPortalPage('readme') + urlParam + window.location.hash;
};
// 验证码
window.changeValidCode = function changeValidCode(type) {
  var elId = 'validCodeImg';
  var esn = getQueryString('esn');
  var apmac = getQueryString('apmac');
  var armac = getQueryString('armac');
  var userIp = getQueryString('uaddress');
  var acIp = getQueryString('ac-ip');
  var userMac = getQueryString('umac');
  if (type != undefined) {
    elId += type;
  } else {
    var multiFlag = getUrlJingHaoNum();
    if (multiFlag) {
      elId += multiFlag;
    }
  }
  var el = document.getElementById(elId);
  var locationUrl = window.location.href;
  if (el !== null) {
    if (locationUrl.indexOf('?') <= 0) {
      el.src = '/portalauth/verificationcode';
      return;
    }
    if (esn) {
      el.src = "/portalauth/verificationcode?date=".concat(new Date().getTime(), "&uaddress=").concat(encodeURIComponent(userIp), "&umac=").concat(encodeURIComponent(userMac), "&esn=").concat(encodeURIComponent(esn));
    } else if (apmac) {
      el.src = "/portalauth/verificationcode?date=".concat(new Date().getTime(), "&uaddress=").concat(encodeURIComponent(userIp), "&umac=").concat(encodeURIComponent(userMac), "&apmac=").concat(encodeURIComponent(apmac));
    } else if (armac) {
      el.src = "/portalauth/verificationcode?date=".concat(new Date().getTime(), "&uaddress=").concat(encodeURIComponent(userIp), "&umac=").concat(encodeURIComponent(userMac), "&armac=").concat(encodeURIComponent(armac));
    } else if (acIp) {
      el.src = "/portalauth/verificationcode?date=".concat(new Date().getTime(), "&uaddress=").concat(encodeURIComponent(userIp), "&umac=").concat(encodeURIComponent(userMac), "&acip=").concat(encodeURIComponent(acIp));
    } else {
      el.src = "/portalauth/verificationcode?date=".concat(new Date().getTime(), "&uaddress=").concat(encodeURIComponent(userIp), "&umac=").concat(encodeURIComponent(userMac));
    }
  }
};

// 安全要求，csrf-token不应该写在cookie里
window.addCsrfTokenToCookie = function addCsrfTokenToCookie(token) {
  window.localStorage4Portal.setItem('XSRF-TOKEN', token);
};
window.removeCookie = function removeCookie(name) {
  var d = new Date();
  d.setTime(d.getTime() - 10000);
  document.cookie = "".concat(name, "=1; expires = ").concat(d.toGMTString(), ";path=/custompage/");
  document.cookie = "".concat(name, "=1; expires = ").concat(d.toGMTString(), ";path=/");
};
window.addCookie = function addCookie(objName, objValue, objTime) {
  var str = "".concat(objName, "=").concat(encodeURI(objValue));
  // 为0时不设定过期时间，浏览器关闭时cookie自动消失
  if (objTime > 0) {
    var date = new Date();
    date.setTime(date.getTime() + objTime);
    str += "; expires=".concat(date.toGMTString());
  }
  str += '; path=/';
  document.cookie = str;
};

// 使用localStorage存储，若不支持，则使用cookie存储，默认过期时间7天
var localStorage4Portal = {
  getItem: function getItem(attrName) {
    try {
      return window.localStorage.getItem(attrName);
    } catch (e) {
      return window.getTopWindowCookie(attrName);
    }
  },
  setItem: function setItem(attrName, value) {
    try {
      window.localStorage.setItem(attrName, value);
    } catch (e) {
      // 默认存储7天
      window.addCookie(attrName, value, 7 * 24 * 60 * 60 * 1000);
    }
  },
  removeItem: function removeItem(attrName) {
    try {
      window.localStorage.removeItem(attrName);
    } catch (e) {
      window.removeCookie(attrName);
    }
  }
};

// 使用sessionStorage存储，若不支持，则使用cookie存储
var sessionStorage4Portal = {
  getItem: function getItem(attrName) {
    try {
      return window.sessionStorage.getItem(attrName);
    } catch (e) {
      return window.getTopWindowCookie(attrName);
    }
  },
  setItem: function setItem(attrName, value) {
    try {
      window.sessionStorage.setItem(attrName, value);
    } catch (e) {
      window.addCookie(attrName, value, 0);
    }
  },
  removeItem: function removeItem(attrName) {
    try {
      window.sessionStorage.removeItem(attrName);
    } catch (e) {
      window.removeCookie(attrName);
    }
  }
};
window.turnChangepass = function turnChangepass() {
  if (isPreviewPage() || window.isEscape()) {
    return;
  }
  var urlParam = getUrlParams(true);
  var delParam = ['changeUserPassFirst'];
  urlParam = delUrlParam(urlParam, delParam);
  var url = getPortalPage('changePassword') + urlParam;
  window.location.href = url;
};

// 动态加载js
function loadScript(url) {
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  head.appendChild(script);
}

// 认证页面跳转到忘记密码的界面
window.authTurnForgetPwdPage = function authTurnForgetPwdPage() {
  if (isPreviewPage()) {
    return;
  }
  var urlParams = {
    businessType: 1
  };
  var urlPar = window.location.search;
  var url = getPortalPage('forgetPwdFirst') + updateUrlParams(urlPar, urlParams);
  window.location.href = url;
};

// 时间戳转时间格式
window.timestampToTimeString = function timestampToTimeString(str) {
  if (undefined == str || str === '0') {
    return '';
  }
  var utcDate = new Date(Number(str));
  if (utcDate.toString() == 'Invalid Date' || Number.isNaN(utcDate)) {
    return '';
  }
  var yyyy = utcDate.getFullYear().toString();
  var mm = (utcDate.getMonth() + 1).toString();
  var dd = utcDate.getDate().toString();
  var hh = utcDate.getHours().toString();
  var ff = utcDate.getMinutes().toString();
  var ss = utcDate.getSeconds().toString();
  mm = mm[1] ? mm : "0".concat(mm[0]);
  dd = dd[1] ? dd : "0".concat(dd[0]);
  hh = hh[1] ? hh : "0".concat(hh[0]);
  ff = ff[1] ? ff : "0".concat(ff[0]);
  ss = ss[1] ? ss : "0".concat(ss[0]);
  var strDate = "".concat(yyyy, "-").concat(mm, "-").concat(dd, " ").concat(hh, ":").concat(ff, ":").concat(ss);
  if (isInDST(utcDate)) {
    strDate += ' DST';
  }
  return strDate;
};

// 页面跳转
function turnToRightPage(url) {
  window.location.href = url;
}

// 页面跳转
function turnToLanPage(target) {
  var updateParams = {
    pushPageId: $(target).attr('id'),
    lang: $(target).attr('lang'),
    authType: $(target).attr('authType')
  };
  var urlParams = updateUrlParams(window.location.search, updateParams);
  var authUrl = $(target).attr('location');
  var redirectUrl;
  var hostName;
  var port;
  if (authUrl.includes('SERVICE_IP:PORT')) {
    hostName = window.location.hostname;
    port = authUrl.split('://')[0] === 'https' ? '19008' : '8445';
    redirectUrl = "".concat(authUrl.split('SERVICE_IP:PORT')[0]).concat(hostName, ":").concat(port).concat(authUrl.split('SERVICE_IP:PORT')[1]).concat(urlParams);
  } else {
    redirectUrl = authUrl + urlParams;
  }
  window.location.href = redirectUrl;
}

// 禁用alert
window.alert = null;

// 判断是否是PC
function IsPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
  var flag = true;
  for (var _i3 = 0, _Agents = Agents; _i3 < _Agents.length; _i3++) {
    var item = _Agents[_i3];
    if (userAgentInfo.indexOf(item) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

// 判断是安卓还是IOS
function checkSystem() {
  var u = window.navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; // g
  // ios终端
  var isIOS = u.indexOf('Mac OS') > -1;
  if (isAndroid) {
    return 'android';
  }
  if (isIOS || u.indexOf('iPhone') !== -1 || u.indexOf('iPad') !== -1) {
    return 'ios';
  }
  return null;
}

// 轮询
function pollingServer() {
  var data = {
    acip: getQueryString('ac-ip'),
    apmac: getQueryString('apmac'),
    uaddress: getQueryString('uaddress'),
    umac: getQueryString('umac'),
    ssid: getQueryString('ssid'),
    redirect_url: $('#loginBtn').attr('mdmregisterurl')
  };
  var url = '/portal?';
  if (data.apmac) {
    url = "".concat(url, "ap-mac=").concat(data.apmac);
  } else {
    // 第三方设备没有apmac，需要拼上 ac-ip
    url = "".concat(url, "ac-ip=").concat(data.acip);
  }
  url = "".concat(url, "&uaddress=").concat(data.uaddress, "&umac=").concat(data.umac, "&base64ssid=").concat(data.ssid, "&redirect-url=").concat(data.redirect_url);
  window.location.href = url;
}
$(document).ready(function () {
  // 检测当前页面有无轮播图组件，若有，执行轮播动画
  (function func3() {
    if ($('.carousel_component').attr('typenum') === '4') {
      var carWidth = $('.carousel_img_div').width();
      $('.carousel_div').css('width', carWidth);
      for (var i = 0; i < $('.carousel_component').length; i++) {
        var imgs = $('.carousel_div')[i].children;
        // 如果图片数量大于1
        if (imgs.length > 1) {
          var theChild = $('.carousel_component .carousel_div')[i];
          var interval = parseInt($(theChild).attr('interval'), 10);
          if (interval > 0) {
            setInterval(swiper, interval * 1000, imgs, theChild);
          }
        }
      }
    }
  })();

  // 检测页面是否有轮询组件，若有，则开始轮询
  (function func4() {
    // 轮询间隔，单位(秒)
    var continueDisable = $('#continueBtn').attr('disabled');
    var interval = parseInt($('#continueBtn').attr('pollingtime'), 10);
    if (continueDisable === 'disabled') {
      // 轮询
      if (interval > 0) {
        setInterval(pollingServer, interval * 1000);
      }
      $('#continueBtn').attr('disabled', true);
    } else {
      $('#continueBtn').attr('disabled', false);
      $('#continueBtn').css('background-color', '#0077FF');
    }
  })();

  // 绑定
  $('.video_div .jumpAd').on('click', function () {
    $('.video_div').hide();
    window.turnLoginPage();
  });
});

// 点击继续
function continued() {
  var continueDisable = $('#continueBtn').attr('disabled');
  if (continueDisable === 'disabled') {
    return;
  }
  window.turnLoginPage();
}
function registerMdm() {
  var openNewWin = $('#loginBtn').attr('isnewtab');
  var registerUrl = $('#loginBtn').attr('mdmregisterurl');
  if (openNewWin === 'true') {
    var openData = window.open(registerUrl, '_blank');
    openData.opener = null;
  } else {
    window.location.href = registerUrl;
  }
}

// 每次动画执行完之后把第一个子元素放到元素列表的最后
function swiper(imgs, theContainer) {
  var carWidth = $(imgs[0]).width();
  $(imgs[0]).animate({
    'margin-left': 0 - carWidth
  }, function () {
    $(imgs[0]).css('margin-left', 0);
    // 把第一个元素放到最后
    $(theContainer).append(imgs[0]);
  });
}
window.swiper = swiper;

// 判断是不是夏令时
function isInDST(date) {
  if (!(date instanceof Date)) {
    return false;
  }
  var jan = new Date(date.getFullYear(), 0, 1);
  var jul = new Date(date.getFullYear(), 6, 1);
  var maxOffset = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
  return date.getTimezoneOffset() < maxOffset;
}
function isOpenInPhoneWebview() {
  var ua = window.navigator.userAgent;
  if (!/mobile/.test(ua.toLowerCase())) {
    return false;
  }
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    // 微信浏览器判断
    return false;
  }
  if (ua.match(/QQ/i) === 'qq') {
    // QQ浏览器判断
    return false;
  }
  if (ua.match(/WeiBo/i) === 'weibo') {
    return false;
  }
  if (ua.match(/Android/i) !== null) {
    return ua.match(/browser/i) === null;
  }
  if (ua.match(/iPhone/i) !== null) {
    return ua.match(/Safari/i) === null;
  }
  return false;
}
function getCustomFieldList() {
  var customFieldList = [];
  var $customInput = $('.custom_attr').find('input');
  if ($customInput.length) {
    for (var i = 0; i < $customInput.length; i++) {
      var tmp = {};
      if ($customInput.eq(i).css('display') !== 'none' && $customInput.eq(i).closest('div').css('display') !== 'none') {
        tmp.customFieldId = $customInput.eq(i).attr('id');
        tmp.value = window.getInputValue(tmp.customFieldId);
        customFieldList.push(tmp);
      }
    }
  }
  var $customSelect = $('.custom_attr').find('select');
  if ($customSelect.length) {
    for (var _i4 = 0; _i4 < $customSelect.length; _i4++) {
      var _tmp = {};
      if ($customSelect.eq(_i4).css('display') !== 'none' && $customSelect.eq(_i4).closest('div').css('display') !== 'none') {
        _tmp.customFieldId = $customSelect.eq(_i4).attr('id');
        _tmp.value = $("#".concat(_tmp.customFieldId, " option:selected")).val() || '';
        customFieldList.push(_tmp);
      }
    }
  }
  return customFieldList;
}
$.extend(window, {
  getQueryString: getQueryString,
  getUrlJingHaoNum: getUrlJingHaoNum,
  isPreviewPage: isPreviewPage,
  getPortalPage: getPortalPage,
  showdiv: showdiv,
  updateUrlParams: updateUrlParams,
  delUrlParam: delUrlParam,
  registerMdm: registerMdm,
  continued: continued,
  turnToRightPage: turnToRightPage,
  turnToLanPage: turnToLanPage,
  loadScript: loadScript,
  localStorage4Portal: localStorage4Portal,
  sessionStorage4Portal: sessionStorage4Portal,
  isOpenInPhoneWebview: isOpenInPhoneWebview,
  getCustomFieldList: getCustomFieldList
});

/***/ })

/******/ });
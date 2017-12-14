(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FitVideo"] = factory();
	else
		root["FitVideo"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FitVideo = function () {
    function FitVideo(wrapper, video) {
        var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'cover';
        var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};

        _classCallCheck(this, FitVideo);

        this.wrapper = wrapper;
        this.video = video;
        this.mode = mode;
        this.callback = callback;
        this.init = this.init.bind(this);
        this.resize = this.resize.bind(this);
        video.videoWidth ? this.init() : video.addEventListener('loadedmetadata', this.init);
    }

    _createClass(FitVideo, [{
        key: 'init',
        value: function init() {
            this.videoAspect = this.video.videoWidth / this.video.videoHeight;
            window.addEventListener('resize', this.resize);
            this.resize();
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            window.removeEventListener('resize', this.resize);
        }
    }, {
        key: 'resize',
        value: function resize() {
            var wrapperRect = this.wrapper.getBoundingClientRect();
            var wrapperAspect = wrapperRect.width / wrapperRect.height;

            var width = void 0;
            var height = void 0;
            var top = void 0;
            var left = void 0;

            if (wrapperAspect > this.videoAspect) {
                width = this.mode === 'cover' ? wrapperRect.width : wrapperRect.height * this.videoAspect;
                height = this.mode === 'cover' ? width / this.videoAspect : wrapperRect.height;
                left = this.mode === 'cover' ? 0 : (wrapperRect.width - width) * 0.5;
                top = this.mode === 'cover' ? (wrapperRect.height - height) * 0.5 : 0;
            } else {
                height = this.mode === 'cover' ? wrapperRect.height : wrapperRect.width / this.videoAspect;
                width = this.mode === 'cover' ? height * this.videoAspect : wrapperRect.width;
                left = this.mode === 'cover' ? (wrapperRect.width - width) * 0.5 : 0;
                top = this.mode === 'cover' ? 0 : (wrapperRect.height - height) * 0.5;
            }
            this.video.style.width = width + 'px';
            this.video.style.height = height + 'px';
            this.video.style.transform = 'translate(' + left + 'px, ' + top + 'px)';

            if (typeof this.callback === 'function') {
                this.callback({ width: width, height: height });
            } else {
                console.warn('FitVideo - callback should be typeof "function"');
            }
        }
    }]);

    return FitVideo;
}();

exports.default = FitVideo;

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map
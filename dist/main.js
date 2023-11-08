/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! images/rizky-subagja-1k7TnX5GAww-unsplash.jpg */ "./src/images/rizky-subagja-1k7TnX5GAww-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! images/Screenshot_2023-11-07_at_4.51.02_PM-removebg-preview.png */ "./src/images/Screenshot_2023-11-07_at_4.51.02_PM-removebg-preview.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&family=Lato:wght@100&family=Roboto:wght@100&family=Rubik:wght@300&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* General styles */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-family: 'Lato', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}


/* Desktop screen */

@media (min-width: 800px) {

    .background-image {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    }

    #main {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 300px 1fr;
        position: relative;
    }

    .menu {
        background-color: rgba(0, 0, 0, 0.200);
        backdrop-filter: blur(3px);
        z-index: 2;
        box-shadow: 1px 0px 3px 0px rgba(20,20,20,0.2);
        display: flex;
        align-items: center;
        /* flex-direction: column; */
        justify-content: center;
        position: fixed;
        height: 100%;
        width: 300px;
    }

    .menu-item {
        color: white;
        /* font-size: clamp(1rem, 2.5vw, 4rem); */
        font-size: 35px;
        display: block;
        text-decoration: none;
        /* padding: clamp(0.50rem, 1vw, 2rem) 0rem; */
        padding: 10px;
        /* padding: 50px; */
        transition: opacity 400ms ease;
        cursor: pointer;
    }
    
    .menu-items {
        /* margin-left: clamp(1rem, 3vw, 8rem); */
        margin-left: 35px;
        position: relative;
        z-index: 3;
        width: 100%;
    }
    
    .menu:hover .menu-item {
        opacity: 0.5;
    }
    
    .menu:hover .menu-item:hover {
        opacity: 1;
    }
    
    .menu-background-pattern {
        height: 100%;
        width: 100%;
    
        background-image: radial-gradient(
            rgba(2255, 255, 255, 0.1) 2%,
            transparent 12%
        );
        
        background-position: 0% 0%;
        background-size: 9.5vmin 9.5vmin;
    
        position: absolute;
        left: 0px;
        top: 0px;
        z-index: 2;
        transition: opacity 800ms ease, 
                    background-size 800ms ease,
                    background-position 800ms ease;
    }
    
    .menu:hover > .menu-background-pattern {
        background-size: 12.5vmin 12.5vmin;
        opacity: 0.7;
    }
    
    .menu[data-active-index="0"] > .menu-background-pattern {
        background-position: 0% -25%;
    }
    
    .menu[data-active-index="1"] > .menu-background-pattern {
        background-position: 0% -50%;
    }
    
    .menu[data-active-index="2"] > .menu-background-pattern {
        background-position: 0% -75%;
    }
    
    .menu[data-active-index="3"] > .menu-background-pattern {
        background-position: 0% -100%;
    }
    
    .menu[data-active-index="0"] ~ .background-image {
        background-position: center 45%;
        transition: opacity 800ms ease,
        background-size 800ms ease,
        background-position 800ms ease;
    }
      
    .menu[data-active-index="1"] ~ .background-image {
        background-position: center 50%;
        transition: opacity 800ms ease,
        background-size 800ms ease,
        background-position 800ms ease;
    }
    
    .menu[data-active-index="2"] ~ .background-image {
        background-position: center 55%;
        transition: opacity 800ms ease,
        background-size 800ms ease,
        background-position 800ms ease;
    }
    
    .menu[data-active-index="3"] ~ .background-image {
        background-position: center 60%;
        transition: opacity 800ms ease,
        background-size 800ms ease,
        background-position 800ms ease;
    }
    
    .menu:hover ~ .background-image {
        background-size: 100vmax;
        opacity: 0.50;
        transition: opacity 800ms ease,
        background-size 800ms ease,
        background-position 800ms ease;
    }

    .content {
        display: grid;
        justify-content: center;
        grid-row: 1 / 2;
        grid-column: 2 / 3;
        grid-template-columns: 1fr;
        /* margin-left: minmax(300px, 1fr); */
        grid-template-rows: 1fr 9fr;
    }

    .menu-logo {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;

        z-index: 1;
        height: max(10%, 50px);
        width: 40%;
        position: fixed;
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        justify-self: center;
        border-bottom: 0.5px white solid;
    }

    .content-container {
        position: relative;
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        padding: 100px 20px 100px 20px;
        color: white;
        z-index: 2;
        width: 500px;
        justify-self: center;
    }

    .content-container > div {
        /* width: 400px; */
        transition: all 1s ease-out;
        opacity: 1;
        transform: translateX(0%);
    }

    .content-container > div.hide {
        opacity: 0;
        /* transform: translateX(200%); */
    }

    .content-container > div {
    position: absolute;
    padding: 15px;
    --b: 0.5px; /* thickness of the border */
    --c: rgb(255, 255, 255); /* color of the border */
    --w: 100px; /* width of border */
    
    border: var(--b) solid #0000;
    --_g: #0000 90deg,var(--c) 0;
    --_p: var(--w) var(--w) border-box no-repeat;
    background:
        conic-gradient(from 90deg  at top    var(--b) left  var(--b),var(--_g)) 0    0    / var(--_p),
        conic-gradient(from 180deg at top    var(--b) right var(--b),var(--_g)) 100% 0    / var(--_p),
        conic-gradient(from 0deg   at bottom var(--b) left  var(--b),var(--_g)) 0    100% / var(--_p),
        conic-gradient(from -90deg at bottom var(--b) right var(--b),var(--_g)) 100% 100% / var(--_p);
        
        background-color: rgba(20, 20, 20, 0.8);
    }

    .home p:first-child {
    margin-bottom: 10px;
    }
}


/* Mobile screen */

@media (max-width: 800px) {

    .background-image {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    }

}


/* Any screen */

body {
    width: 100vw;
    height: 100vh;
    background-color: rgba(20, 20, 20);
    overflow-x: hidden;
}

#main {
    width: 100%;
    height: 100%;
}

.background-image {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0px;
    top: 0px;
    background-position: center 50%;
    background-size: 110vmax;
    background-repeat: no-repeat;

    opacity: 0.75;
    filter: blur(0px);
}

p {
    font-size: clamp(1rem, 2vw, 4rem);
    /* font-weight: 500; */
    line-height: 50px;
    text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&family=Lato:wght@100&family=Roboto:wght@100&family=Rubik:wght@300&display=swap');\n\n/* General styles */\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    font-family: 'Lato', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n\n/* Desktop screen */\n\n@media (min-width: 800px) {\n\n    .background-image {\n        background-image: url('images/rizky-subagja-1k7TnX5GAww-unsplash.jpg');\n    }\n\n    #main {\n        display: grid;\n        grid-template-rows: 1fr;\n        grid-template-columns: 300px 1fr;\n        position: relative;\n    }\n\n    .menu {\n        background-color: rgba(0, 0, 0, 0.200);\n        backdrop-filter: blur(3px);\n        z-index: 2;\n        box-shadow: 1px 0px 3px 0px rgba(20,20,20,0.2);\n        display: flex;\n        align-items: center;\n        /* flex-direction: column; */\n        justify-content: center;\n        position: fixed;\n        height: 100%;\n        width: 300px;\n    }\n\n    .menu-item {\n        color: white;\n        /* font-size: clamp(1rem, 2.5vw, 4rem); */\n        font-size: 35px;\n        display: block;\n        text-decoration: none;\n        /* padding: clamp(0.50rem, 1vw, 2rem) 0rem; */\n        padding: 10px;\n        /* padding: 50px; */\n        transition: opacity 400ms ease;\n        cursor: pointer;\n    }\n    \n    .menu-items {\n        /* margin-left: clamp(1rem, 3vw, 8rem); */\n        margin-left: 35px;\n        position: relative;\n        z-index: 3;\n        width: 100%;\n    }\n    \n    .menu:hover .menu-item {\n        opacity: 0.5;\n    }\n    \n    .menu:hover .menu-item:hover {\n        opacity: 1;\n    }\n    \n    .menu-background-pattern {\n        height: 100%;\n        width: 100%;\n    \n        background-image: radial-gradient(\n            rgba(2255, 255, 255, 0.1) 2%,\n            transparent 12%\n        );\n        \n        background-position: 0% 0%;\n        background-size: 9.5vmin 9.5vmin;\n    \n        position: absolute;\n        left: 0px;\n        top: 0px;\n        z-index: 2;\n        transition: opacity 800ms ease, \n                    background-size 800ms ease,\n                    background-position 800ms ease;\n    }\n    \n    .menu:hover > .menu-background-pattern {\n        background-size: 12.5vmin 12.5vmin;\n        opacity: 0.7;\n    }\n    \n    .menu[data-active-index=\"0\"] > .menu-background-pattern {\n        background-position: 0% -25%;\n    }\n    \n    .menu[data-active-index=\"1\"] > .menu-background-pattern {\n        background-position: 0% -50%;\n    }\n    \n    .menu[data-active-index=\"2\"] > .menu-background-pattern {\n        background-position: 0% -75%;\n    }\n    \n    .menu[data-active-index=\"3\"] > .menu-background-pattern {\n        background-position: 0% -100%;\n    }\n    \n    .menu[data-active-index=\"0\"] ~ .background-image {\n        background-position: center 45%;\n        transition: opacity 800ms ease,\n        background-size 800ms ease,\n        background-position 800ms ease;\n    }\n      \n    .menu[data-active-index=\"1\"] ~ .background-image {\n        background-position: center 50%;\n        transition: opacity 800ms ease,\n        background-size 800ms ease,\n        background-position 800ms ease;\n    }\n    \n    .menu[data-active-index=\"2\"] ~ .background-image {\n        background-position: center 55%;\n        transition: opacity 800ms ease,\n        background-size 800ms ease,\n        background-position 800ms ease;\n    }\n    \n    .menu[data-active-index=\"3\"] ~ .background-image {\n        background-position: center 60%;\n        transition: opacity 800ms ease,\n        background-size 800ms ease,\n        background-position 800ms ease;\n    }\n    \n    .menu:hover ~ .background-image {\n        background-size: 100vmax;\n        opacity: 0.50;\n        transition: opacity 800ms ease,\n        background-size 800ms ease,\n        background-position 800ms ease;\n    }\n\n    .content {\n        display: grid;\n        justify-content: center;\n        grid-row: 1 / 2;\n        grid-column: 2 / 3;\n        grid-template-columns: 1fr;\n        /* margin-left: minmax(300px, 1fr); */\n        grid-template-rows: 1fr 9fr;\n    }\n\n    .menu-logo {\n        background-image: url('images/Screenshot_2023-11-07_at_4.51.02_PM-removebg-preview.png');\n        background-size: contain;\n        background-repeat: no-repeat;\n        background-position: center;\n\n        z-index: 1;\n        height: max(10%, 50px);\n        width: 40%;\n        position: fixed;\n        grid-column: 1 / 2;\n        grid-row: 1 / 2;\n        justify-self: center;\n        border-bottom: 0.5px white solid;\n    }\n\n    .content-container {\n        position: relative;\n        grid-column: 1 / 2;\n        grid-row: 2 / 3;\n        padding: 100px 20px 100px 20px;\n        color: white;\n        z-index: 2;\n        width: 500px;\n        justify-self: center;\n    }\n\n    .content-container > div {\n        /* width: 400px; */\n        transition: all 1s ease-out;\n        opacity: 1;\n        transform: translateX(0%);\n    }\n\n    .content-container > div.hide {\n        opacity: 0;\n        /* transform: translateX(200%); */\n    }\n\n    .content-container > div {\n    position: absolute;\n    padding: 15px;\n    --b: 0.5px; /* thickness of the border */\n    --c: rgb(255, 255, 255); /* color of the border */\n    --w: 100px; /* width of border */\n    \n    border: var(--b) solid #0000;\n    --_g: #0000 90deg,var(--c) 0;\n    --_p: var(--w) var(--w) border-box no-repeat;\n    background:\n        conic-gradient(from 90deg  at top    var(--b) left  var(--b),var(--_g)) 0    0    / var(--_p),\n        conic-gradient(from 180deg at top    var(--b) right var(--b),var(--_g)) 100% 0    / var(--_p),\n        conic-gradient(from 0deg   at bottom var(--b) left  var(--b),var(--_g)) 0    100% / var(--_p),\n        conic-gradient(from -90deg at bottom var(--b) right var(--b),var(--_g)) 100% 100% / var(--_p);\n        \n        background-color: rgba(20, 20, 20, 0.8);\n    }\n\n    .home p:first-child {\n    margin-bottom: 10px;\n    }\n}\n\n\n/* Mobile screen */\n\n@media (max-width: 800px) {\n\n    .background-image {\n        background-image: url('images/rizky-subagja-1k7TnX5GAww-unsplash.jpg');\n    }\n\n}\n\n\n/* Any screen */\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(20, 20, 20);\n    overflow-x: hidden;\n}\n\n#main {\n    width: 100%;\n    height: 100%;\n}\n\n.background-image {\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    left: 0px;\n    top: 0px;\n    background-position: center 50%;\n    background-size: 110vmax;\n    background-repeat: no-repeat;\n\n    opacity: 0.75;\n    filter: blur(0px);\n}\n\np {\n    font-size: clamp(1rem, 2vw, 4rem);\n    /* font-weight: 500; */\n    line-height: 50px;\n    text-align: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/page-loader.js":
/*!****************************!*\
  !*** ./src/page-loader.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateDOM: () => (/* binding */ generateDOM)
/* harmony export */ });
function generateDOM() {

    // Body and main div
    const body = document.querySelector('body');
    const main = document.createElement('div');
    main.id = 'main';
    body.append(main);

    // Background image
    const backgroundImage = document.createElement('div');
    backgroundImage.classList.add('background-image');
    main.append(backgroundImage);

    // Menu div
    const menu = document.createElement('div');
    menu.classList.add('menu');
    main.append(menu);
    
    const menuBackgroundPattern = document.createElement('div');
    menuBackgroundPattern.classList.add('menu-background-pattern');
    menu.append(menuBackgroundPattern);

    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');
    menu.append(menuItems);
    
    const menuItem1 = document.createElement('div');
    menuItem1.classList.add('menu-item');
    menuItem1.textContent = 'Home';
    menuItems.append(menuItem1);
    menuItem1.addEventListener('click', () => {
        showHome();
        hideShop();
        hideAbout();
        hideContactUs();
    })
    
    const menuItem2 = document.createElement('div');
    menuItem2.classList.add('menu-item');
    menuItem2.textContent = 'Shop';
    menuItems.append(menuItem2);
    menuItem2.addEventListener('click', () => {
        hideHome();
        showShop();
        hideAbout();
        hideContactUs();
    })
    
    const menuItem3 = document.createElement('div');
    menuItem3.classList.add('menu-item');
    menuItem3.textContent = 'About';
    menuItems.append(menuItem3);
    menuItem3.addEventListener('click', () => {
        hideHome();
        hideShop();
        showAbout();
        hideContactUs();
    })
    
    const menuItem4 = document.createElement('div');
    menuItem4.classList.add('menu-item');
    menuItem4.textContent = 'Contact Us';
    menuItems.append(menuItem4);
    menuItem4.addEventListener('click', () => {
        hideHome();
        hideShop();
        hideAbout();
        showContactUs();
    })
    
    Array.from(document.getElementsByClassName('menu-item')).forEach((item, index) => {
        item.onmouseover = () => {
            menu.dataset.activeIndex = index;
        }
    })

    // Content div
    const content = document.createElement('div');
    content.classList.add('content');
    main.append(content);

    const menuLogo = document.createElement('div');
    menuLogo.classList.add('menu-logo');
    content.append(menuLogo);

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');
    content.append(contentContainer);
    
    // Home div
    const contentContainerHome = document.createElement('div');
    contentContainerHome.classList.add('home');
    contentContainer.append(contentContainerHome);
    
    const p1 = document.createElement('p');
    p1.textContent = "Welcome to our coffee realm. We're all about exceptional brews and straightforward service. From dark to light roasts, we cater to diverse tastes."
    contentContainerHome.append(p1);
    
    const p2 = document.createElement('p');
    p2.textContent = "Join us for a taste of the coffee world."
    contentContainerHome.append(p2);

    // Shop div
    const contentContainerShop = document.createElement('div');
    contentContainerShop.classList.add('shop', 'hide');
    contentContainer.append(contentContainerShop);
    
    const p3 = document.createElement('p');
    p3.textContent = "Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis."
    contentContainerShop.append(p3);
    
    const p4 = document.createElement('p');
    p4.textContent = "Sed posuere arcu ac lectus condimentum condimentum."
    contentContainerShop.append(p4);

    // About div
    const contentContainerAbout = document.createElement('div');
    contentContainerAbout.classList.add('about', 'hide');
    contentContainer.append(contentContainerAbout);
    
    const p5 = document.createElement('p');
    p5.textContent = "Etiam a mi quam."
    contentContainerAbout.append(p5);
    
    const p6 = document.createElement('p');
    p6.textContent = "Nullam vehicula ultrices nunc vitae condimentum. Sed scelerisque facilisis dolor, id semper magna bibendum ornare."
    contentContainerAbout.append(p6);

    // Contact Us div
    const contentContainerContactUs = document.createElement('div');
    contentContainerContactUs.classList.add('contact-us', 'hide');
    contentContainer.append(contentContainerContactUs);
    
    const p7 = document.createElement('p');
    p7.textContent = "Duis consequat tellus eu metus finibus, a posuere magna hendrerit."
    contentContainerContactUs.append(p7);
    
    const p8 = document.createElement('p');
    p8.textContent = "Vestibulum ullamcorper, augue rhoncus tempor sollicitudin, justo massa maximus orci, eget suscipit magna nulla nec mi. Mauris efficitur felis a suscipit posuere. Pellentesque efficitur diam odio, nec finibus dui blandit nec. Nulla quis nisi sit amet velit tincidunt volutpat eu vel ligula."
    contentContainerContactUs.append(p8);
}

function hideHome() {
    const home = document.querySelector('.home');
    home.classList.add('hide');
}

function showHome() {
    const home = document.querySelector('.home');
    home.classList.remove('hide');
}

function hideShop() {
    const home = document.querySelector('.shop');
    home.classList.add('hide');
}

function showShop() {
    const home = document.querySelector('.shop');
    home.classList.remove('hide');
}

function hideAbout() {
    const home = document.querySelector('.about');
    home.classList.add('hide');
}

function showAbout() {
    const home = document.querySelector('.about');
    home.classList.remove('hide');
}

function hideContactUs() {
    const home = document.querySelector('.contact-us');
    home.classList.add('hide');
}

function showContactUs() {
    const home = document.querySelector('.contact-us');
    home.classList.remove('hide');
}





/***/ }),

/***/ "./src/images/Screenshot_2023-11-07_at_4.51.02_PM-removebg-preview.png":
/*!*****************************************************************************!*\
  !*** ./src/images/Screenshot_2023-11-07_at_4.51.02_PM-removebg-preview.png ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d287d61c64318eea90e.png";

/***/ }),

/***/ "./src/images/rizky-subagja-1k7TnX5GAww-unsplash.jpg":
/*!***********************************************************!*\
  !*** ./src/images/rizky-subagja-1k7TnX5GAww-unsplash.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cbb0ddd1ded53d412c44.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _page_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-loader */ "./src/page-loader.js");



(0,_page_loader__WEBPACK_IMPORTED_MODULE_1__.generateDOM)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlLQUFnRTtBQUM1Ryw0Q0FBNEMsNk1BQWtGO0FBQzlILDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YscU1BQXFNO0FBQ3JNLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBLGdDQUFnQyxtQ0FBbUM7QUFDbkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyxtQ0FBbUM7QUFDbkU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQiw2QkFBNkI7QUFDN0IsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQSxnQ0FBZ0MsbUNBQW1DO0FBQ25FOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxDQUFDLE9BQU8seUZBQXlGLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLE9BQU8sTUFBTSxZQUFZLGNBQWMsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLE9BQU8sT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLHNCQUFzQix5QkFBeUIsd0JBQXdCLGFBQWEsYUFBYSxhQUFhLFNBQVMsUUFBUSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sT0FBTyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLHVMQUF1TCwrQkFBK0IsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsR0FBRyxVQUFVLDJFQUEyRSxHQUFHLHlEQUF5RCwyQkFBMkIsaUZBQWlGLE9BQU8sZUFBZSx3QkFBd0Isa0NBQWtDLDJDQUEyQyw2QkFBNkIsT0FBTyxlQUFlLGlEQUFpRCxxQ0FBcUMscUJBQXFCLHlEQUF5RCx3QkFBd0IsOEJBQThCLHFDQUFxQyxvQ0FBb0MsMEJBQTBCLHVCQUF1Qix1QkFBdUIsT0FBTyxvQkFBb0IsdUJBQXVCLGtEQUFrRCw0QkFBNEIseUJBQXlCLGdDQUFnQyxzREFBc0QsMEJBQTBCLDRCQUE0QiwyQ0FBMkMsMEJBQTBCLE9BQU8seUJBQXlCLGtEQUFrRCw4QkFBOEIsNkJBQTZCLHFCQUFxQixzQkFBc0IsT0FBTyxvQ0FBb0MsdUJBQXVCLE9BQU8sMENBQTBDLHFCQUFxQixPQUFPLHNDQUFzQyx1QkFBdUIsc0JBQXNCLHNJQUFzSSwrQ0FBK0MsMkNBQTJDLG1DQUFtQyxvQkFBb0IsbUJBQW1CLHFCQUFxQixnSkFBZ0osT0FBTyxvREFBb0QsNkNBQTZDLHVCQUF1QixPQUFPLHVFQUF1RSx1Q0FBdUMsT0FBTyx1RUFBdUUsdUNBQXVDLE9BQU8sdUVBQXVFLHVDQUF1QyxPQUFPLHVFQUF1RSx3Q0FBd0MsT0FBTyxnRUFBZ0UsMENBQTBDLHVIQUF1SCxPQUFPLGtFQUFrRSwwQ0FBMEMsdUhBQXVILE9BQU8sZ0VBQWdFLDBDQUEwQyx1SEFBdUgsT0FBTyxnRUFBZ0UsMENBQTBDLHVIQUF1SCxPQUFPLDZDQUE2QyxtQ0FBbUMsd0JBQXdCLHVIQUF1SCxPQUFPLGtCQUFrQix3QkFBd0Isa0NBQWtDLDBCQUEwQiw2QkFBNkIscUNBQXFDLDhDQUE4Qyx3Q0FBd0MsT0FBTyxvQkFBb0IsbUdBQW1HLG1DQUFtQyx1Q0FBdUMsc0NBQXNDLHVCQUF1QixpQ0FBaUMscUJBQXFCLDBCQUEwQiw2QkFBNkIsMEJBQTBCLCtCQUErQiwyQ0FBMkMsT0FBTyw0QkFBNEIsNkJBQTZCLDZCQUE2QiwwQkFBMEIseUNBQXlDLHVCQUF1QixxQkFBcUIsdUJBQXVCLCtCQUErQixPQUFPLGtDQUFrQywyQkFBMkIsd0NBQXdDLHFCQUFxQixvQ0FBb0MsT0FBTyx1Q0FBdUMscUJBQXFCLDBDQUEwQyxTQUFTLGtDQUFrQyx5QkFBeUIsb0JBQW9CLGtCQUFrQiw0REFBNEQsMkNBQTJDLDhEQUE4RCxtQ0FBbUMsbURBQW1ELGliQUFpYiw0REFBNEQsT0FBTyw2QkFBNkIsMEJBQTBCLE9BQU8sR0FBRyx3REFBd0QsMkJBQTJCLGlGQUFpRixPQUFPLEtBQUssZ0NBQWdDLG1CQUFtQixvQkFBb0IseUNBQXlDLHlCQUF5QixHQUFHLFdBQVcsa0JBQWtCLG1CQUFtQixHQUFHLHVCQUF1QixrQkFBa0IsbUJBQW1CLHNCQUFzQixnQkFBZ0IsZUFBZSxzQ0FBc0MsK0JBQStCLG1DQUFtQyxzQkFBc0Isd0JBQXdCLEdBQUcsT0FBTyx3Q0FBd0MsMkJBQTJCLDBCQUEwQix5QkFBeUIsR0FBRyxtQkFBbUI7QUFDajZSO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDeFIxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSx1RkFBTyxVQUFVLHVGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcExBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDb0I7O0FBRTFDLHlEQUFXLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9wYWdlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3Jpemt5LXN1YmFnamEtMWs3VG5YNUdBd3ctdW5zcGxhc2guanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL1NjcmVlbnNob3RfMjAyMy0xMS0wN19hdF80LjUxLjAyX1BNLXJlbW92ZWJnLXByZXZpZXcucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6d2dodEAxMDAmZmFtaWx5PUxhdG86d2dodEAxMDAmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMCZmYW1pbHk9UnViaWs6d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEdlbmVyYWwgc3R5bGVzICovXG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG5cbi8qIERlc2t0b3Agc2NyZWVuICovXG5cbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xuXG4gICAgLmJhY2tncm91bmQtaW1hZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgfVxuXG4gICAgI21haW4ge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAubWVudSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yMDApO1xuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggMHB4IHJnYmEoMjAsMjAsMjAsMC4yKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgfVxuXG4gICAgLm1lbnUtaXRlbSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgLyogZm9udC1zaXplOiBjbGFtcCgxcmVtLCAyLjV2dywgNHJlbSk7ICovXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgLyogcGFkZGluZzogY2xhbXAoMC41MHJlbSwgMXZ3LCAycmVtKSAwcmVtOyAqL1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAvKiBwYWRkaW5nOiA1MHB4OyAqL1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGVhc2U7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgXG4gICAgLm1lbnUtaXRlbXMge1xuICAgICAgICAvKiBtYXJnaW4tbGVmdDogY2xhbXAoMXJlbSwgM3Z3LCA4cmVtKTsgKi9cbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIFxuICAgIC5tZW51OmhvdmVyIC5tZW51LWl0ZW0ge1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICAgIFxuICAgIC5tZW51OmhvdmVyIC5tZW51LWl0ZW06aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICBcbiAgICAubWVudS1iYWNrZ3JvdW5kLXBhdHRlcm4ge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoXG4gICAgICAgICAgICByZ2JhKDIyNTUsIDI1NSwgMjU1LCAwLjEpIDIlLFxuICAgICAgICAgICAgdHJhbnNwYXJlbnQgMTIlXG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA5LjV2bWluIDkuNXZtaW47XG4gICAgXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA4MDBtcyBlYXNlLCBcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplIDgwMG1zIGVhc2UsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24gODAwbXMgZWFzZTtcbiAgICB9XG4gICAgXG4gICAgLm1lbnU6aG92ZXIgPiAubWVudS1iYWNrZ3JvdW5kLXBhdHRlcm4ge1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEyLjV2bWluIDEyLjV2bWluO1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgfVxuICAgIFxuICAgIC5tZW51W2RhdGEtYWN0aXZlLWluZGV4PVwiMFwiXSA+IC5tZW51LWJhY2tncm91bmQtcGF0dGVybiB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIC0yNSU7XG4gICAgfVxuICAgIFxuICAgIC5tZW51W2RhdGEtYWN0aXZlLWluZGV4PVwiMVwiXSA+IC5tZW51LWJhY2tncm91bmQtcGF0dGVybiB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIC01MCU7XG4gICAgfVxuICAgIFxuICAgIC5tZW51W2RhdGEtYWN0aXZlLWluZGV4PVwiMlwiXSA+IC5tZW51LWJhY2tncm91bmQtcGF0dGVybiB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIC03NSU7XG4gICAgfVxuICAgIFxuICAgIC5tZW51W2RhdGEtYWN0aXZlLWluZGV4PVwiM1wiXSA+IC5tZW51LWJhY2tncm91bmQtcGF0dGVybiB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIC0xMDAlO1xuICAgIH1cbiAgICBcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cIjBcIl0gfiAuYmFja2dyb3VuZC1pbWFnZSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciA0NSU7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgODAwbXMgZWFzZSxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplIDgwMG1zIGVhc2UsXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24gODAwbXMgZWFzZTtcbiAgICB9XG4gICAgICBcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cIjFcIl0gfiAuYmFja2dyb3VuZC1pbWFnZSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciA1MCU7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgODAwbXMgZWFzZSxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplIDgwMG1zIGVhc2UsXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24gODAwbXMgZWFzZTtcbiAgICB9XG4gICAgXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XCIyXCJdIH4gLmJhY2tncm91bmQtaW1hZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgNTUlO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDgwMG1zIGVhc2UsXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZSA4MDBtcyBlYXNlLFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uIDgwMG1zIGVhc2U7XG4gICAgfVxuICAgIFxuICAgIC5tZW51W2RhdGEtYWN0aXZlLWluZGV4PVwiM1wiXSB+IC5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDYwJTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA4MDBtcyBlYXNlLFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemUgODAwbXMgZWFzZSxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbiA4MDBtcyBlYXNlO1xuICAgIH1cbiAgICBcbiAgICAubWVudTpob3ZlciB+IC5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDB2bWF4O1xuICAgICAgICBvcGFjaXR5OiAwLjUwO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDgwMG1zIGVhc2UsXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZSA4MDBtcyBlYXNlLFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uIDgwMG1zIGVhc2U7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICAvKiBtYXJnaW4tbGVmdDogbWlubWF4KDMwMHB4LCAxZnIpOyAqL1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA5ZnI7XG4gICAgfVxuXG4gICAgLm1lbnUtbG9nbyB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgaGVpZ2h0OiBtYXgoMTAlLCA1MHB4KTtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHdoaXRlIHNvbGlkO1xuICAgIH1cblxuICAgIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgICAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgICAgIHBhZGRpbmc6IDEwMHB4IDIwcHggMTAwcHggMjBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIH1cblxuICAgIC5jb250ZW50LWNvbnRhaW5lciA+IGRpdiB7XG4gICAgICAgIC8qIHdpZHRoOiA0MDBweDsgKi9cbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIH1cblxuICAgIC5jb250ZW50LWNvbnRhaW5lciA+IGRpdi5oaWRlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMCUpOyAqL1xuICAgIH1cblxuICAgIC5jb250ZW50LWNvbnRhaW5lciA+IGRpdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgLS1iOiAwLjVweDsgLyogdGhpY2tuZXNzIG9mIHRoZSBib3JkZXIgKi9cbiAgICAtLWM6IHJnYigyNTUsIDI1NSwgMjU1KTsgLyogY29sb3Igb2YgdGhlIGJvcmRlciAqL1xuICAgIC0tdzogMTAwcHg7IC8qIHdpZHRoIG9mIGJvcmRlciAqL1xuICAgIFxuICAgIGJvcmRlcjogdmFyKC0tYikgc29saWQgIzAwMDA7XG4gICAgLS1fZzogIzAwMDAgOTBkZWcsdmFyKC0tYykgMDtcbiAgICAtLV9wOiB2YXIoLS13KSB2YXIoLS13KSBib3JkZXItYm94IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kOlxuICAgICAgICBjb25pYy1ncmFkaWVudChmcm9tIDkwZGVnICBhdCB0b3AgICAgdmFyKC0tYikgbGVmdCAgdmFyKC0tYiksdmFyKC0tX2cpKSAwICAgIDAgICAgLyB2YXIoLS1fcCksXG4gICAgICAgIGNvbmljLWdyYWRpZW50KGZyb20gMTgwZGVnIGF0IHRvcCAgICB2YXIoLS1iKSByaWdodCB2YXIoLS1iKSx2YXIoLS1fZykpIDEwMCUgMCAgICAvIHZhcigtLV9wKSxcbiAgICAgICAgY29uaWMtZ3JhZGllbnQoZnJvbSAwZGVnICAgYXQgYm90dG9tIHZhcigtLWIpIGxlZnQgIHZhcigtLWIpLHZhcigtLV9nKSkgMCAgICAxMDAlIC8gdmFyKC0tX3ApLFxuICAgICAgICBjb25pYy1ncmFkaWVudChmcm9tIC05MGRlZyBhdCBib3R0b20gdmFyKC0tYikgcmlnaHQgdmFyKC0tYiksdmFyKC0tX2cpKSAxMDAlIDEwMCUgLyB2YXIoLS1fcCk7XG4gICAgICAgIFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMCwgMjAsIDAuOCk7XG4gICAgfVxuXG4gICAgLmhvbWUgcDpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG59XG5cblxuLyogTW9iaWxlIHNjcmVlbiAqL1xuXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcblxuICAgIC5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIH1cblxufVxuXG5cbi8qIEFueSBzY3JlZW4gKi9cblxuYm9keSB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjAsIDIwKTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbiNtYWluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IDBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgNTAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTEwdm1heDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgb3BhY2l0eTogMC43NTtcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbn1cblxucCB7XG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAydncsIDRyZW0pO1xuICAgIC8qIGZvbnQtd2VpZ2h0OiA1MDA7ICovXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUEsbUJBQW1COztBQUVuQjtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksb0VBQW9FO0FBQ3hFOzs7QUFHQSxtQkFBbUI7O0FBRW5COztJQUVJO1FBQ0kseURBQXNFO0lBQzFFOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixnQ0FBZ0M7UUFDaEMsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksc0NBQXNDO1FBQ3RDLDBCQUEwQjtRQUMxQixVQUFVO1FBQ1YsOENBQThDO1FBQzlDLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsNEJBQTRCO1FBQzVCLHVCQUF1QjtRQUN2QixlQUFlO1FBQ2YsWUFBWTtRQUNaLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1oseUNBQXlDO1FBQ3pDLGVBQWU7UUFDZixjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLDZDQUE2QztRQUM3QyxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLDhCQUE4QjtRQUM5QixlQUFlO0lBQ25COztJQUVBO1FBQ0kseUNBQXlDO1FBQ3pDLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxZQUFZO1FBQ1osV0FBVzs7UUFFWDs7O1NBR0M7O1FBRUQsMEJBQTBCO1FBQzFCLGdDQUFnQzs7UUFFaEMsa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxRQUFRO1FBQ1IsVUFBVTtRQUNWOztrREFFMEM7SUFDOUM7O0lBRUE7UUFDSSxrQ0FBa0M7UUFDbEMsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLDRCQUE0QjtJQUNoQzs7SUFFQTtRQUNJLDRCQUE0QjtJQUNoQzs7SUFFQTtRQUNJLDRCQUE0QjtJQUNoQzs7SUFFQTtRQUNJLDZCQUE2QjtJQUNqQzs7SUFFQTtRQUNJLCtCQUErQjtRQUMvQjs7c0NBRThCO0lBQ2xDOztJQUVBO1FBQ0ksK0JBQStCO1FBQy9COztzQ0FFOEI7SUFDbEM7O0lBRUE7UUFDSSwrQkFBK0I7UUFDL0I7O3NDQUU4QjtJQUNsQzs7SUFFQTtRQUNJLCtCQUErQjtRQUMvQjs7c0NBRThCO0lBQ2xDOztJQUVBO1FBQ0ksd0JBQXdCO1FBQ3hCLGFBQWE7UUFDYjs7c0NBRThCO0lBQ2xDOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLDBCQUEwQjtRQUMxQixxQ0FBcUM7UUFDckMsMkJBQTJCO0lBQy9COztJQUVBO1FBQ0kseURBQXdGO1FBQ3hGLHdCQUF3QjtRQUN4Qiw0QkFBNEI7UUFDNUIsMkJBQTJCOztRQUUzQixVQUFVO1FBQ1Ysc0JBQXNCO1FBQ3RCLFVBQVU7UUFDVixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixvQkFBb0I7UUFDcEIsZ0NBQWdDO0lBQ3BDOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsOEJBQThCO1FBQzlCLFlBQVk7UUFDWixVQUFVO1FBQ1YsWUFBWTtRQUNaLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQiwyQkFBMkI7UUFDM0IsVUFBVTtRQUNWLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLFVBQVU7UUFDVixpQ0FBaUM7SUFDckM7O0lBRUE7SUFDQSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVUsRUFBRSw0QkFBNEI7SUFDeEMsdUJBQXVCLEVBQUUsd0JBQXdCO0lBQ2pELFVBQVUsRUFBRSxvQkFBb0I7O0lBRWhDLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsNENBQTRDO0lBQzVDOzs7O3FHQUlpRzs7UUFFN0YsdUNBQXVDO0lBQzNDOztJQUVBO0lBQ0EsbUJBQW1CO0lBQ25CO0FBQ0o7OztBQUdBLGtCQUFrQjs7QUFFbEI7O0lBRUk7UUFDSSx5REFBc0U7SUFDMUU7O0FBRUo7OztBQUdBLGVBQWU7O0FBRWY7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLFNBQVM7SUFDVCxRQUFRO0lBQ1IsK0JBQStCO0lBQy9CLHdCQUF3QjtJQUN4Qiw0QkFBNEI7O0lBRTVCLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRAMTAwJmZhbWlseT1MYXRvOndnaHRAMTAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDAmZmFtaWx5PVJ1YmlrOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbi8qIEdlbmVyYWwgc3R5bGVzICovXFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5cXG4vKiBEZXNrdG9wIHNjcmVlbiAqL1xcblxcbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xcblxcbiAgICAuYmFja2dyb3VuZC1pbWFnZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9yaXpreS1zdWJhZ2phLTFrN1RuWDVHQXd3LXVuc3BsYXNoLmpwZycpO1xcbiAgICB9XFxuXFxuICAgICNtYWluIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgIC5tZW51IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yMDApO1xcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggMHB4IHJnYmEoMjAsMjAsMjAsMC4yKTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICB9XFxuXFxuICAgIC5tZW51LWl0ZW0ge1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgLyogZm9udC1zaXplOiBjbGFtcCgxcmVtLCAyLjV2dywgNHJlbSk7ICovXFxuICAgICAgICBmb250LXNpemU6IDM1cHg7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgIC8qIHBhZGRpbmc6IGNsYW1wKDAuNTByZW0sIDF2dywgMnJlbSkgMHJlbTsgKi9cXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICAvKiBwYWRkaW5nOiA1MHB4OyAqL1xcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtcyBlYXNlO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuICAgIFxcbiAgICAubWVudS1pdGVtcyB7XFxuICAgICAgICAvKiBtYXJnaW4tbGVmdDogY2xhbXAoMXJlbSwgM3Z3LCA4cmVtKTsgKi9cXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgei1pbmRleDogMztcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIFxcbiAgICAubWVudTpob3ZlciAubWVudS1pdGVtIHtcXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1lbnU6aG92ZXIgLm1lbnUtaXRlbTpob3ZlciB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICAgIFxcbiAgICAubWVudS1iYWNrZ3JvdW5kLXBhdHRlcm4ge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIFxcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KFxcbiAgICAgICAgICAgIHJnYmEoMjI1NSwgMjU1LCAyNTUsIDAuMSkgMiUsXFxuICAgICAgICAgICAgdHJhbnNwYXJlbnQgMTIlXFxuICAgICAgICApO1xcbiAgICAgICAgXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAwJTtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogOS41dm1pbiA5LjV2bWluO1xcbiAgICBcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IDBweDtcXG4gICAgICAgIHRvcDogMHB4O1xcbiAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgODAwbXMgZWFzZSwgXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemUgODAwbXMgZWFzZSxcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24gODAwbXMgZWFzZTtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1lbnU6aG92ZXIgPiAubWVudS1iYWNrZ3JvdW5kLXBhdHRlcm4ge1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMi41dm1pbiAxMi41dm1pbjtcXG4gICAgICAgIG9wYWNpdHk6IDAuNztcXG4gICAgfVxcbiAgICBcXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XFxcIjBcXFwiXSA+IC5tZW51LWJhY2tncm91bmQtcGF0dGVybiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAtMjUlO1xcbiAgICB9XFxuICAgIFxcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cXFwiMVxcXCJdID4gLm1lbnUtYmFja2dyb3VuZC1wYXR0ZXJuIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIC01MCU7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51W2RhdGEtYWN0aXZlLWluZGV4PVxcXCIyXFxcIl0gPiAubWVudS1iYWNrZ3JvdW5kLXBhdHRlcm4ge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgLTc1JTtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XFxcIjNcXFwiXSA+IC5tZW51LWJhY2tncm91bmQtcGF0dGVybiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAtMTAwJTtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XFxcIjBcXFwiXSB+IC5iYWNrZ3JvdW5kLWltYWdlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciA0NSU7XFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDgwMG1zIGVhc2UsXFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemUgODAwbXMgZWFzZSxcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24gODAwbXMgZWFzZTtcXG4gICAgfVxcbiAgICAgIFxcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cXFwiMVxcXCJdIH4gLmJhY2tncm91bmQtaW1hZ2Uge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDUwJTtcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgODAwbXMgZWFzZSxcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZSA4MDBtcyBlYXNlLFxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbiA4MDBtcyBlYXNlO1xcbiAgICB9XFxuICAgIFxcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cXFwiMlxcXCJdIH4gLmJhY2tncm91bmQtaW1hZ2Uge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDU1JTtcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgODAwbXMgZWFzZSxcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZSA4MDBtcyBlYXNlLFxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbiA4MDBtcyBlYXNlO1xcbiAgICB9XFxuICAgIFxcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cXFwiM1xcXCJdIH4gLmJhY2tncm91bmQtaW1hZ2Uge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDYwJTtcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgODAwbXMgZWFzZSxcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZSA4MDBtcyBlYXNlLFxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbiA4MDBtcyBlYXNlO1xcbiAgICB9XFxuICAgIFxcbiAgICAubWVudTpob3ZlciB+IC5iYWNrZ3JvdW5kLWltYWdlIHtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwdm1heDtcXG4gICAgICAgIG9wYWNpdHk6IDAuNTA7XFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDgwMG1zIGVhc2UsXFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemUgODAwbXMgZWFzZSxcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24gODAwbXMgZWFzZTtcXG4gICAgfVxcblxcbiAgICAuY29udGVudCB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIC8qIG1hcmdpbi1sZWZ0OiBtaW5tYXgoMzAwcHgsIDFmcik7ICovXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA5ZnI7XFxuICAgIH1cXG5cXG4gICAgLm1lbnUtbG9nbyB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9TY3JlZW5zaG90XzIwMjMtMTEtMDdfYXRfNC41MS4wMl9QTS1yZW1vdmViZy1wcmV2aWV3LnBuZycpO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG5cXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgICBoZWlnaHQ6IG1heCgxMCUsIDUwcHgpO1xcbiAgICAgICAgd2lkdGg6IDQwJTtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggd2hpdGUgc29saWQ7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgIHBhZGRpbmc6IDEwMHB4IDIwcHggMTAwcHggMjBweDtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICB3aWR0aDogNTAwcHg7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuY29udGVudC1jb250YWluZXIgPiBkaXYge1xcbiAgICAgICAgLyogd2lkdGg6IDQwMHB4OyAqL1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0O1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRlbnQtY29udGFpbmVyID4gZGl2LmhpZGUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKTsgKi9cXG4gICAgfVxcblxcbiAgICAuY29udGVudC1jb250YWluZXIgPiBkaXYge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIC0tYjogMC41cHg7IC8qIHRoaWNrbmVzcyBvZiB0aGUgYm9yZGVyICovXFxuICAgIC0tYzogcmdiKDI1NSwgMjU1LCAyNTUpOyAvKiBjb2xvciBvZiB0aGUgYm9yZGVyICovXFxuICAgIC0tdzogMTAwcHg7IC8qIHdpZHRoIG9mIGJvcmRlciAqL1xcbiAgICBcXG4gICAgYm9yZGVyOiB2YXIoLS1iKSBzb2xpZCAjMDAwMDtcXG4gICAgLS1fZzogIzAwMDAgOTBkZWcsdmFyKC0tYykgMDtcXG4gICAgLS1fcDogdmFyKC0tdykgdmFyKC0tdykgYm9yZGVyLWJveCBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQ6XFxuICAgICAgICBjb25pYy1ncmFkaWVudChmcm9tIDkwZGVnICBhdCB0b3AgICAgdmFyKC0tYikgbGVmdCAgdmFyKC0tYiksdmFyKC0tX2cpKSAwICAgIDAgICAgLyB2YXIoLS1fcCksXFxuICAgICAgICBjb25pYy1ncmFkaWVudChmcm9tIDE4MGRlZyBhdCB0b3AgICAgdmFyKC0tYikgcmlnaHQgdmFyKC0tYiksdmFyKC0tX2cpKSAxMDAlIDAgICAgLyB2YXIoLS1fcCksXFxuICAgICAgICBjb25pYy1ncmFkaWVudChmcm9tIDBkZWcgICBhdCBib3R0b20gdmFyKC0tYikgbGVmdCAgdmFyKC0tYiksdmFyKC0tX2cpKSAwICAgIDEwMCUgLyB2YXIoLS1fcCksXFxuICAgICAgICBjb25pYy1ncmFkaWVudChmcm9tIC05MGRlZyBhdCBib3R0b20gdmFyKC0tYikgcmlnaHQgdmFyKC0tYiksdmFyKC0tX2cpKSAxMDAlIDEwMCUgLyB2YXIoLS1fcCk7XFxuICAgICAgICBcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDIwLCAyMCwgMC44KTtcXG4gICAgfVxcblxcbiAgICAuaG9tZSBwOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgfVxcbn1cXG5cXG5cXG4vKiBNb2JpbGUgc2NyZWVuICovXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuXFxuICAgIC5iYWNrZ3JvdW5kLWltYWdlIHtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1hZ2VzL3Jpemt5LXN1YmFnamEtMWs3VG5YNUdBd3ctdW5zcGxhc2guanBnJyk7XFxuICAgIH1cXG5cXG59XFxuXFxuXFxuLyogQW55IHNjcmVlbiAqL1xcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDIwLCAyMCk7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuI21haW4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYmFja2dyb3VuZC1pbWFnZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMHB4O1xcbiAgICB0b3A6IDBweDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDUwJTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMTB2bWF4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcbiAgICBvcGFjaXR5OiAwLjc1O1xcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcXG59XFxuXFxucCB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMnZ3LCA0cmVtKTtcXG4gICAgLyogZm9udC13ZWlnaHQ6IDUwMDsgKi9cXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGdlbmVyYXRlRE9NKCkge1xuXG4gICAgLy8gQm9keSBhbmQgbWFpbiBkaXZcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmlkID0gJ21haW4nO1xuICAgIGJvZHkuYXBwZW5kKG1haW4pO1xuXG4gICAgLy8gQmFja2dyb3VuZCBpbWFnZVxuICAgIGNvbnN0IGJhY2tncm91bmRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJhY2tncm91bmRJbWFnZS5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kLWltYWdlJyk7XG4gICAgbWFpbi5hcHBlbmQoYmFja2dyb3VuZEltYWdlKTtcblxuICAgIC8vIE1lbnUgZGl2XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIG1haW4uYXBwZW5kKG1lbnUpO1xuICAgIFxuICAgIGNvbnN0IG1lbnVCYWNrZ3JvdW5kUGF0dGVybiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVCYWNrZ3JvdW5kUGF0dGVybi5jbGFzc0xpc3QuYWRkKCdtZW51LWJhY2tncm91bmQtcGF0dGVybicpO1xuICAgIG1lbnUuYXBwZW5kKG1lbnVCYWNrZ3JvdW5kUGF0dGVybik7XG5cbiAgICBjb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbXMuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtcycpO1xuICAgIG1lbnUuYXBwZW5kKG1lbnVJdGVtcyk7XG4gICAgXG4gICAgY29uc3QgbWVudUl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW0xLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIG1lbnVJdGVtMS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBtZW51SXRlbXMuYXBwZW5kKG1lbnVJdGVtMSk7XG4gICAgbWVudUl0ZW0xLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzaG93SG9tZSgpO1xuICAgICAgICBoaWRlU2hvcCgpO1xuICAgICAgICBoaWRlQWJvdXQoKTtcbiAgICAgICAgaGlkZUNvbnRhY3RVcygpO1xuICAgIH0pXG4gICAgXG4gICAgY29uc3QgbWVudUl0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW0yLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIG1lbnVJdGVtMi50ZXh0Q29udGVudCA9ICdTaG9wJztcbiAgICBtZW51SXRlbXMuYXBwZW5kKG1lbnVJdGVtMik7XG4gICAgbWVudUl0ZW0yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBoaWRlSG9tZSgpO1xuICAgICAgICBzaG93U2hvcCgpO1xuICAgICAgICBoaWRlQWJvdXQoKTtcbiAgICAgICAgaGlkZUNvbnRhY3RVcygpO1xuICAgIH0pXG4gICAgXG4gICAgY29uc3QgbWVudUl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW0zLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIG1lbnVJdGVtMy50ZXh0Q29udGVudCA9ICdBYm91dCc7XG4gICAgbWVudUl0ZW1zLmFwcGVuZChtZW51SXRlbTMpO1xuICAgIG1lbnVJdGVtMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaGlkZUhvbWUoKTtcbiAgICAgICAgaGlkZVNob3AoKTtcbiAgICAgICAgc2hvd0Fib3V0KCk7XG4gICAgICAgIGhpZGVDb250YWN0VXMoKTtcbiAgICB9KVxuICAgIFxuICAgIGNvbnN0IG1lbnVJdGVtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtNC5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBtZW51SXRlbTQudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyc7XG4gICAgbWVudUl0ZW1zLmFwcGVuZChtZW51SXRlbTQpO1xuICAgIG1lbnVJdGVtNC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaGlkZUhvbWUoKTtcbiAgICAgICAgaGlkZVNob3AoKTtcbiAgICAgICAgaGlkZUFib3V0KCk7XG4gICAgICAgIHNob3dDb250YWN0VXMoKTtcbiAgICB9KVxuICAgIFxuICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWVudS1pdGVtJykpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGl0ZW0ub25tb3VzZW92ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBtZW51LmRhdGFzZXQuYWN0aXZlSW5kZXggPSBpbmRleDtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBDb250ZW50IGRpdlxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcbiAgICBtYWluLmFwcGVuZChjb250ZW50KTtcblxuICAgIGNvbnN0IG1lbnVMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUxvZ28uY2xhc3NMaXN0LmFkZCgnbWVudS1sb2dvJyk7XG4gICAgY29udGVudC5hcHBlbmQobWVudUxvZ28pO1xuXG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudC1jb250YWluZXInKTtcbiAgICBjb250ZW50LmFwcGVuZChjb250ZW50Q29udGFpbmVyKTtcbiAgICBcbiAgICAvLyBIb21lIGRpdlxuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXJIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudENvbnRhaW5lckhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kKGNvbnRlbnRDb250YWluZXJIb21lKTtcbiAgICBcbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMS50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBvdXIgY29mZmVlIHJlYWxtLiBXZSdyZSBhbGwgYWJvdXQgZXhjZXB0aW9uYWwgYnJld3MgYW5kIHN0cmFpZ2h0Zm9yd2FyZCBzZXJ2aWNlLiBGcm9tIGRhcmsgdG8gbGlnaHQgcm9hc3RzLCB3ZSBjYXRlciB0byBkaXZlcnNlIHRhc3Rlcy5cIlxuICAgIGNvbnRlbnRDb250YWluZXJIb21lLmFwcGVuZChwMSk7XG4gICAgXG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDIudGV4dENvbnRlbnQgPSBcIkpvaW4gdXMgZm9yIGEgdGFzdGUgb2YgdGhlIGNvZmZlZSB3b3JsZC5cIlxuICAgIGNvbnRlbnRDb250YWluZXJIb21lLmFwcGVuZChwMik7XG5cbiAgICAvLyBTaG9wIGRpdlxuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXJTaG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudENvbnRhaW5lclNob3AuY2xhc3NMaXN0LmFkZCgnc2hvcCcsICdoaWRlJyk7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmQoY29udGVudENvbnRhaW5lclNob3ApO1xuICAgIFxuICAgIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAzLnRleHRDb250ZW50ID0gXCJEb25lYyBuZWMgYWxpcXVhbSBlbGl0LiBEb25lYyB2aXRhZSBjb25kaW1lbnR1bSBtYWduYSwgaW4gaWFjdWxpcyBxdWFtLiBEdWlzIGxhb3JlZXQgbmliaCB2aXRhZSBwdXJ1cyB0aW5jaWR1bnQgaWFjdWxpcy5cIlxuICAgIGNvbnRlbnRDb250YWluZXJTaG9wLmFwcGVuZChwMyk7XG4gICAgXG4gICAgY29uc3QgcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDQudGV4dENvbnRlbnQgPSBcIlNlZCBwb3N1ZXJlIGFyY3UgYWMgbGVjdHVzIGNvbmRpbWVudHVtIGNvbmRpbWVudHVtLlwiXG4gICAgY29udGVudENvbnRhaW5lclNob3AuYXBwZW5kKHA0KTtcblxuICAgIC8vIEFib3V0IGRpdlxuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXJBYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnRDb250YWluZXJBYm91dC5jbGFzc0xpc3QuYWRkKCdhYm91dCcsICdoaWRlJyk7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmQoY29udGVudENvbnRhaW5lckFib3V0KTtcbiAgICBcbiAgICBjb25zdCBwNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwNS50ZXh0Q29udGVudCA9IFwiRXRpYW0gYSBtaSBxdWFtLlwiXG4gICAgY29udGVudENvbnRhaW5lckFib3V0LmFwcGVuZChwNSk7XG4gICAgXG4gICAgY29uc3QgcDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDYudGV4dENvbnRlbnQgPSBcIk51bGxhbSB2ZWhpY3VsYSB1bHRyaWNlcyBudW5jIHZpdGFlIGNvbmRpbWVudHVtLiBTZWQgc2NlbGVyaXNxdWUgZmFjaWxpc2lzIGRvbG9yLCBpZCBzZW1wZXIgbWFnbmEgYmliZW5kdW0gb3JuYXJlLlwiXG4gICAgY29udGVudENvbnRhaW5lckFib3V0LmFwcGVuZChwNik7XG5cbiAgICAvLyBDb250YWN0IFVzIGRpdlxuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXJDb250YWN0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50Q29udGFpbmVyQ29udGFjdFVzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtdXMnLCAnaGlkZScpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kKGNvbnRlbnRDb250YWluZXJDb250YWN0VXMpO1xuICAgIFxuICAgIGNvbnN0IHA3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHA3LnRleHRDb250ZW50ID0gXCJEdWlzIGNvbnNlcXVhdCB0ZWxsdXMgZXUgbWV0dXMgZmluaWJ1cywgYSBwb3N1ZXJlIG1hZ25hIGhlbmRyZXJpdC5cIlxuICAgIGNvbnRlbnRDb250YWluZXJDb250YWN0VXMuYXBwZW5kKHA3KTtcbiAgICBcbiAgICBjb25zdCBwOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwOC50ZXh0Q29udGVudCA9IFwiVmVzdGlidWx1bSB1bGxhbWNvcnBlciwgYXVndWUgcmhvbmN1cyB0ZW1wb3Igc29sbGljaXR1ZGluLCBqdXN0byBtYXNzYSBtYXhpbXVzIG9yY2ksIGVnZXQgc3VzY2lwaXQgbWFnbmEgbnVsbGEgbmVjIG1pLiBNYXVyaXMgZWZmaWNpdHVyIGZlbGlzIGEgc3VzY2lwaXQgcG9zdWVyZS4gUGVsbGVudGVzcXVlIGVmZmljaXR1ciBkaWFtIG9kaW8sIG5lYyBmaW5pYnVzIGR1aSBibGFuZGl0IG5lYy4gTnVsbGEgcXVpcyBuaXNpIHNpdCBhbWV0IHZlbGl0IHRpbmNpZHVudCB2b2x1dHBhdCBldSB2ZWwgbGlndWxhLlwiXG4gICAgY29udGVudENvbnRhaW5lckNvbnRhY3RVcy5hcHBlbmQocDgpO1xufVxuXG5mdW5jdGlvbiBoaWRlSG9tZSgpIHtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbn1cblxuZnVuY3Rpb24gc2hvd0hvbWUoKSB7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJyk7XG4gICAgaG9tZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG59XG5cbmZ1bmN0aW9uIGhpZGVTaG9wKCkge1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvcCcpO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xufVxuXG5mdW5jdGlvbiBzaG93U2hvcCgpIHtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3AnKTtcbiAgICBob21lLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbn1cblxuZnVuY3Rpb24gaGlkZUFib3V0KCkge1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQnKTtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbn1cblxuZnVuY3Rpb24gc2hvd0Fib3V0KCkge1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQnKTtcbiAgICBob21lLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbn1cblxuZnVuY3Rpb24gaGlkZUNvbnRhY3RVcygpIHtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtdXMnKTtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbn1cblxuZnVuY3Rpb24gc2hvd0NvbnRhY3RVcygpIHtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtdXMnKTtcbiAgICBob21lLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbn1cblxuXG5cbmV4cG9ydCB7Z2VuZXJhdGVET019OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHtnZW5lcmF0ZURPTX0gZnJvbSAnLi9wYWdlLWxvYWRlcic7XG5cbmdlbmVyYXRlRE9NKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
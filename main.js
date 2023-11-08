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

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
    background: #333; /* Change the color to your preference */
    /* border-radius: 6px; */
}

::-webkit-scrollbar:hover {
    background: rgba(20, 20, 20); /* Change the color to your preference */
}

::-webkit-scrollbar-thumb:hover {
    background: #555; /* Change the color to your preference */
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
        flex-direction: column;
        justify-content: start;
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
        margin-bottom: 25px;
        position: relative;
        z-index: 3;
        width: 100%;
    }

    /* Placeholder to create offset on menu tab to align menu-items with content-containers */
    .placeholder {
        height: 150px;
        width: 100%;
        flex-shrink: 1;
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
        grid-template-rows: minmax(10px, 50px) 9fr;
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
        padding: clamp(10px, 15vh, 100px) 20px 10px 20px;
        color: white;
        z-index: 2;
        width: 500px;
        justify-self: center;
    }

    .content-container > div {
        /* width: 400px; */
        transition: opacity 1s ease-out;
        opacity: 1;
        transform: translateX(0%);
        box-shadow: 0px 0px 100px 50px rgba(20,20,20,1);
        /* box-shadow: inset 0px 0px 100px 100px rgba(20,20,20,0.7),
                    0px 0px 100px 100px rgba(20,20,20,0.7); */
    }

    .content-container > div.hide {
        opacity: 0;
        /* transform: translateX(200%); */
    }

    .content-container > div {
    /* position: absolute; */
    width: 100%;
    /* left: 50%;
    top: 50%; */
    /* transform: translate(-50%, -50%); */
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
    margin-bottom: 30px;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&family=Lato:wght@100&family=Roboto:wght@100&family=Rubik:wght@300&display=swap');\n\n/* General styles */\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    font-family: 'Lato', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n    background: #333; /* Change the color to your preference */\n    /* border-radius: 6px; */\n}\n\n::-webkit-scrollbar:hover {\n    background: rgba(20, 20, 20); /* Change the color to your preference */\n}\n\n::-webkit-scrollbar-thumb:hover {\n    background: #555; /* Change the color to your preference */\n}\n\n/* Desktop screen */\n\n@media (min-width: 800px) {\n\n    .background-image {\n        background-image: url('images/rizky-subagja-1k7TnX5GAww-unsplash.jpg');\n    }\n\n    #main {\n        display: grid;\n        grid-template-rows: 1fr;\n        grid-template-columns: 300px 1fr;\n        position: relative;\n    }\n\n    .menu {\n        background-color: rgba(0, 0, 0, 0.200);\n        backdrop-filter: blur(3px);\n        z-index: 2;\n        box-shadow: 1px 0px 3px 0px rgba(20,20,20,0.2);\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n        justify-content: start;\n        position: fixed;\n        height: 100%;\n        width: 300px;\n    }\n\n    .menu-item {\n        color: white;\n        /* font-size: clamp(1rem, 2.5vw, 4rem); */\n        font-size: 35px;\n        display: block;\n        text-decoration: none;\n        /* padding: clamp(0.50rem, 1vw, 2rem) 0rem; */\n        padding: 10px;\n        /* padding: 50px; */\n        transition: opacity 400ms ease;\n        cursor: pointer;\n    }\n    \n    .menu-items {\n        /* margin-left: clamp(1rem, 3vw, 8rem); */\n        margin-left: 35px;\n        margin-bottom: 25px;\n        position: relative;\n        z-index: 3;\n        width: 100%;\n    }\n\n    /* Placeholder to create offset on menu tab to align menu-items with content-containers */\n    .placeholder {\n        height: 150px;\n        width: 100%;\n        flex-shrink: 1;\n    }\n    \n    .menu:hover .menu-item {\n        opacity: 0.5;\n    }\n    \n    .menu:hover .menu-item:hover {\n        opacity: 1;\n    }\n    \n    .menu-background-pattern {\n        height: 100%;\n        width: 100%;\n    \n        background-image: radial-gradient(\n            rgba(2255, 255, 255, 0.1) 2%,\n            transparent 12%\n        );\n        \n        background-position: 0% 0%;\n        background-size: 9.5vmin 9.5vmin;\n    \n        position: absolute;\n        left: 0px;\n        top: 0px;\n        z-index: 2;\n        transition: opacity 800ms ease, \n                    background-size 800ms ease,\n                    background-position 800ms ease;\n    }\n    \n    .menu:hover > .menu-background-pattern {\n        background-size: 12.5vmin 12.5vmin;\n        opacity: 0.7;\n    }\n    \n    .menu[data-active-index=\"0\"] > .menu-background-pattern {\n        background-position: 0% -25%;\n    }\n    \n    .menu[data-active-index=\"1\"] > .menu-background-pattern {\n        background-position: 0% -50%;\n    }\n    \n    .menu[data-active-index=\"2\"] > .menu-background-pattern {\n        background-position: 0% -75%;\n    }\n    \n    .menu[data-active-index=\"3\"] > .menu-background-pattern {\n        background-position: 0% -100%;\n    }\n    \n    .menu[data-active-index=\"0\"] ~ .background-image {\n        background-position: center 45%;\n        transition: opacity 800ms ease,\n        background-size 800ms ease,\n        background-position 800ms ease;\n    }\n      \n    .menu[data-active-index=\"1\"] ~ .background-image {\n        background-position: center 50%;\n        transition: opacity 800ms ease,\n        background-size 800ms ease,\n        background-position 800ms ease;\n    }\n    \n    .menu[data-active-index=\"2\"] ~ .background-image {\n        background-position: center 55%;\n        transition: opacity 800ms ease,\n        background-size 800ms ease,\n        background-position 800ms ease;\n    }\n    \n    .menu[data-active-index=\"3\"] ~ .background-image {\n        background-position: center 60%;\n        transition: opacity 800ms ease,\n        background-size 800ms ease,\n        background-position 800ms ease;\n    }\n    \n    .menu:hover ~ .background-image {\n        background-size: 100vmax;\n        opacity: 0.50;\n        transition: opacity 800ms ease,\n        background-size 800ms ease,\n        background-position 800ms ease;\n    }\n\n    .content {\n        display: grid;\n        justify-content: center;\n        grid-row: 1 / 2;\n        grid-column: 2 / 3;\n        grid-template-columns: 1fr;\n        /* margin-left: minmax(300px, 1fr); */\n        grid-template-rows: minmax(10px, 50px) 9fr;\n    }\n\n    .menu-logo {\n        background-image: url('images/Screenshot_2023-11-07_at_4.51.02_PM-removebg-preview.png');\n        background-size: contain;\n        background-repeat: no-repeat;\n        background-position: center;\n\n        z-index: 1;\n        height: max(10%, 50px);\n        width: 40%;\n        position: fixed;\n        grid-column: 1 / 2;\n        grid-row: 1 / 2;\n        justify-self: center;\n        border-bottom: 0.5px white solid;\n    }\n\n    .content-container {\n        position: relative;\n        grid-column: 1 / 2;\n        grid-row: 2 / 3;\n        padding: clamp(10px, 15vh, 100px) 20px 10px 20px;\n        color: white;\n        z-index: 2;\n        width: 500px;\n        justify-self: center;\n    }\n\n    .content-container > div {\n        /* width: 400px; */\n        transition: opacity 1s ease-out;\n        opacity: 1;\n        transform: translateX(0%);\n        box-shadow: 0px 0px 100px 50px rgba(20,20,20,1);\n        /* box-shadow: inset 0px 0px 100px 100px rgba(20,20,20,0.7),\n                    0px 0px 100px 100px rgba(20,20,20,0.7); */\n    }\n\n    .content-container > div.hide {\n        opacity: 0;\n        /* transform: translateX(200%); */\n    }\n\n    .content-container > div {\n    /* position: absolute; */\n    width: 100%;\n    /* left: 50%;\n    top: 50%; */\n    /* transform: translate(-50%, -50%); */\n    padding: 15px;\n    --b: 0.5px; /* thickness of the border */\n    --c: rgb(255, 255, 255); /* color of the border */\n    --w: 100px; /* width of border */\n    \n    border: var(--b) solid #0000;\n    --_g: #0000 90deg,var(--c) 0;\n    --_p: var(--w) var(--w) border-box no-repeat;\n    background:\n        conic-gradient(from 90deg  at top    var(--b) left  var(--b),var(--_g)) 0    0    / var(--_p),\n        conic-gradient(from 180deg at top    var(--b) right var(--b),var(--_g)) 100% 0    / var(--_p),\n        conic-gradient(from 0deg   at bottom var(--b) left  var(--b),var(--_g)) 0    100% / var(--_p),\n        conic-gradient(from -90deg at bottom var(--b) right var(--b),var(--_g)) 100% 100% / var(--_p);\n        \n        background-color: rgba(20, 20, 20, 0.8);\n    }\n\n    .home p:first-child {\n    margin-bottom: 30px;\n    }\n\n}\n\n\n/* Mobile screen */\n\n@media (max-width: 800px) {\n\n    .background-image {\n        background-image: url('images/rizky-subagja-1k7TnX5GAww-unsplash.jpg');\n    }\n\n}\n\n\n/* Any screen */\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(20, 20, 20);\n    overflow-x: hidden;\n}\n\n#main {\n    width: 100%;\n    height: 100%;\n}\n\n.background-image {\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    left: 0px;\n    top: 0px;\n    background-position: center 50%;\n    background-size: 110vmax;\n    background-repeat: no-repeat;\n\n    opacity: 0.75;\n    filter: blur(0px);\n}\n\np {\n    font-size: clamp(1rem, 2vw, 4rem);\n    /* font-weight: 500; */\n    line-height: 50px;\n    text-align: center;\n}"],"sourceRoot":""}]);
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

    // Menu div
    const menu = document.createElement('div');
    menu.classList.add('menu');
    main.append(menu);
    
    // Background image
    const backgroundImage = document.createElement('div');
    backgroundImage.classList.add('background-image');
    main.append(backgroundImage);

    const menuBackgroundPattern = document.createElement('div');
    menuBackgroundPattern.classList.add('menu-background-pattern');
    menu.append(menuBackgroundPattern);

    const placeholder = document.createElement('div');
    placeholder.classList.add('placeholder');
    menu.append(placeholder);

    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');
    menu.append(menuItems);
    
    const menuItem1 = document.createElement('div');
    menuItem1.classList.add('menu-item');
    menuItem1.textContent = 'Home';
    menuItems.append(menuItem1);
    menuItem1.addEventListener('click', () => {
        createHomeDiv();
    })
    
    const menuItem2 = document.createElement('div');
    menuItem2.classList.add('menu-item');
    menuItem2.textContent = 'Menu';
    menuItems.append(menuItem2);
    menuItem2.addEventListener('click', () => {
        createShopDiv();
    })
    
    const menuItem3 = document.createElement('div');
    menuItem3.classList.add('menu-item');
    menuItem3.textContent = 'About';
    menuItems.append(menuItem3);
    menuItem3.addEventListener('click', () => {
        createAboutDiv();
    })
    
    const menuItem4 = document.createElement('div');
    menuItem4.classList.add('menu-item');
    menuItem4.textContent = 'Contact Us';
    menuItems.append(menuItem4);
    menuItem4.addEventListener('click', () => {
        createContactUsDiv();
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
    
    createHomeDiv();

    function createHomeDiv() {
        const contentContainerHome = document.querySelector('.home');
        if (!contentContainerHome) {
            const contentContainerHome = document.createElement('div');
            contentContainerHome.classList.add('home', 'hide');
            contentContainer.append(contentContainerHome);
            
            const p1 = document.createElement('p');
            p1.textContent = "Welcome to our coffee realm"
            contentContainerHome.append(p1);

            const p2 = document.createElement('p');
            p2.textContent = "Working hours:"
            contentContainerHome.append(p2);

            const p3 = document.createElement('p');
            p3.textContent = "Monday - Friday: 6am - 5pm"
            contentContainerHome.append(p3);

            const p4 = document.createElement('p');
            p4.textContent = "Saturday - Sunday 8am - 4pm"
            contentContainerHome.append(p4);

            deleteShopDiv();
            deleteAboutDiv();
            deleteContactUsDiv();

            setTimeout(() => {
                contentContainerHome.classList.remove('hide');
            }, 0);
        }
    }

    function createShopDiv() {
        const contentContainerShop = document.querySelector('.shop');
        if (!contentContainerShop) {
            const contentContainerShop = document.createElement('div');
            contentContainerShop.classList.add('shop', 'hide');
            contentContainer.append(contentContainerShop);
            
            const p1 = document.createElement('p');
            p1.textContent = "Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis."
            contentContainerShop.append(p1);
            
            const p2 = document.createElement('p');
            p2.textContent = "Sed posuere arcu ac lectus condimentum condimentum."
            contentContainerShop.append(p2);

            deleteHomeDiv();
            deleteAboutDiv();
            deleteContactUsDiv();

            setTimeout(() => {
                contentContainerShop.classList.remove('hide');
            }, 0);
        }
    }

    function createAboutDiv() {
        const contentContainerAbout = document.querySelector('.about');
        if (!contentContainerAbout) {
            const contentContainerAbout = document.createElement('div');
            contentContainerAbout.classList.add('about', 'hide');
            contentContainer.append(contentContainerAbout);
            
            const p1 = document.createElement('p');
            p1.textContent = "Etiam a mi quam."
            contentContainerAbout.append(p1);
            
            const p2 = document.createElement('p');
            p2.textContent = "Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis."
            contentContainerAbout.append(p2);

            deleteHomeDiv();
            deleteShopDiv();
            deleteContactUsDiv();

            setTimeout(() => {
                contentContainerAbout.classList.remove('hide');
            }, 0);
        }
    }

    function createContactUsDiv() {
        const contentContainerContactUs = document.querySelector('.contact-us');
        if (!contentContainerContactUs) {
            const contentContainerContactUs = document.createElement('div');
            contentContainerContactUs.classList.add('contact-us', 'hide');
            contentContainer.append(contentContainerContactUs);
            
            const p2 = document.createElement('p');
            p2.textContent = "Sev Leo"
            contentContainerContactUs.append(p2);

            const p3 = document.createElement('p');
            p3.textContent = "seva.leonov@hotmail.com"
            contentContainerContactUs.append(p3);

            const p4 = document.createElement('p');
            p4.textContent = "https://github.com/sevleo"
            contentContainerContactUs.append(p4);

            deleteHomeDiv();
            deleteShopDiv();
            deleteAboutDiv();

            setTimeout(() => {
                contentContainerContactUs.classList.remove('hide');
            }, 0);
        }

    }

    function deleteHomeDiv() {
        const contentContainerHome = document.querySelector('.home');
        if (contentContainerHome) {
            contentContainerHome.remove();
        }
    }

    function deleteShopDiv() {
        const contentContainerShop = document.querySelector('.shop');
        if (contentContainerShop) {
            contentContainerShop.remove();
        }
    }

    function deleteAboutDiv() {
        const contentContainerAbout = document.querySelector('.about');
        if (contentContainerAbout) {
            contentContainerAbout.remove();
        }
    }

    function deleteContactUsDiv() {
        const contentContainerContactUs = document.querySelector('.contact-us');
        if (contentContainerContactUs) {
            contentContainerContactUs.remove();
        }
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyx3QkFBd0IsYUFBYSxPQUFPLEtBQUssd0JBQXdCLE9BQU8sS0FBSyx3QkFBd0IsT0FBTyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsT0FBTyxNQUFNLFlBQVksY0FBYyxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sT0FBTyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZ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QTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL05BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDb0I7O0FBRTFDLHlEQUFXLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9wYWdlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3Jpemt5LXN1YmFnamEtMWs3VG5YNUdBd3ctdW5zcGxhc2guanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL1NjcmVlbnNob3RfMjAyMy0xMS0wN19hdF80LjUxLjAyX1BNLXJlbW92ZWJnLXByZXZpZXcucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6d2dodEAxMDAmZmFtaWx5PUxhdG86d2dodEAxMDAmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMCZmYW1pbHk9UnViaWs6d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEdlbmVyYWwgc3R5bGVzICovXG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDEwcHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICMzMzM7IC8qIENoYW5nZSB0aGUgY29sb3IgdG8geW91ciBwcmVmZXJlbmNlICovXG4gICAgLyogYm9yZGVyLXJhZGl1czogNnB4OyAqL1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwLCAyMCwgMjApOyAvKiBDaGFuZ2UgdGhlIGNvbG9yIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTU1OyAvKiBDaGFuZ2UgdGhlIGNvbG9yIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xufVxuXG4vKiBEZXNrdG9wIHNjcmVlbiAqL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcblxuICAgIC5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIH1cblxuICAgICNtYWluIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLm1lbnUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjAwKTtcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAwcHggM3B4IDBweCByZ2JhKDIwLDIwLDIwLDAuMik7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgfVxuXG4gICAgLm1lbnUtaXRlbSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgLyogZm9udC1zaXplOiBjbGFtcCgxcmVtLCAyLjV2dywgNHJlbSk7ICovXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgLyogcGFkZGluZzogY2xhbXAoMC41MHJlbSwgMXZ3LCAycmVtKSAwcmVtOyAqL1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAvKiBwYWRkaW5nOiA1MHB4OyAqL1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGVhc2U7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgXG4gICAgLm1lbnUtaXRlbXMge1xuICAgICAgICAvKiBtYXJnaW4tbGVmdDogY2xhbXAoMXJlbSwgM3Z3LCA4cmVtKTsgKi9cbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLyogUGxhY2Vob2xkZXIgdG8gY3JlYXRlIG9mZnNldCBvbiBtZW51IHRhYiB0byBhbGlnbiBtZW51LWl0ZW1zIHdpdGggY29udGVudC1jb250YWluZXJzICovXG4gICAgLnBsYWNlaG9sZGVyIHtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAxO1xuICAgIH1cbiAgICBcbiAgICAubWVudTpob3ZlciAubWVudS1pdGVtIHtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgICBcbiAgICAubWVudTpob3ZlciAubWVudS1pdGVtOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgXG4gICAgLm1lbnUtYmFja2dyb3VuZC1wYXR0ZXJuIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICBcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KFxuICAgICAgICAgICAgcmdiYSgyMjU1LCAyNTUsIDI1NSwgMC4xKSAyJSxcbiAgICAgICAgICAgIHRyYW5zcGFyZW50IDEyJVxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogOS41dm1pbiA5LjV2bWluO1xuICAgIFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgODAwbXMgZWFzZSwgXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZSA4MDBtcyBlYXNlLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uIDgwMG1zIGVhc2U7XG4gICAgfVxuICAgIFxuICAgIC5tZW51OmhvdmVyID4gLm1lbnUtYmFja2dyb3VuZC1wYXR0ZXJuIHtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMi41dm1pbiAxMi41dm1pbjtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgIH1cbiAgICBcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cIjBcIl0gPiAubWVudS1iYWNrZ3JvdW5kLXBhdHRlcm4ge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAtMjUlO1xuICAgIH1cbiAgICBcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cIjFcIl0gPiAubWVudS1iYWNrZ3JvdW5kLXBhdHRlcm4ge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAtNTAlO1xuICAgIH1cbiAgICBcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cIjJcIl0gPiAubWVudS1iYWNrZ3JvdW5kLXBhdHRlcm4ge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAtNzUlO1xuICAgIH1cbiAgICBcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cIjNcIl0gPiAubWVudS1iYWNrZ3JvdW5kLXBhdHRlcm4ge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAtMTAwJTtcbiAgICB9XG4gICAgXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XCIwXCJdIH4gLmJhY2tncm91bmQtaW1hZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgNDUlO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDgwMG1zIGVhc2UsXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZSA4MDBtcyBlYXNlLFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uIDgwMG1zIGVhc2U7XG4gICAgfVxuICAgICAgXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XCIxXCJdIH4gLmJhY2tncm91bmQtaW1hZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgNTAlO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDgwMG1zIGVhc2UsXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZSA4MDBtcyBlYXNlLFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uIDgwMG1zIGVhc2U7XG4gICAgfVxuICAgIFxuICAgIC5tZW51W2RhdGEtYWN0aXZlLWluZGV4PVwiMlwiXSB+IC5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDU1JTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA4MDBtcyBlYXNlLFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemUgODAwbXMgZWFzZSxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbiA4MDBtcyBlYXNlO1xuICAgIH1cbiAgICBcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cIjNcIl0gfiAuYmFja2dyb3VuZC1pbWFnZSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciA2MCU7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgODAwbXMgZWFzZSxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplIDgwMG1zIGVhc2UsXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24gODAwbXMgZWFzZTtcbiAgICB9XG4gICAgXG4gICAgLm1lbnU6aG92ZXIgfiAuYmFja2dyb3VuZC1pbWFnZSB7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwdm1heDtcbiAgICAgICAgb3BhY2l0eTogMC41MDtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA4MDBtcyBlYXNlLFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemUgODAwbXMgZWFzZSxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbiA4MDBtcyBlYXNlO1xuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgLyogbWFyZ2luLWxlZnQ6IG1pbm1heCgzMDBweCwgMWZyKTsgKi9cbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoMTBweCwgNTBweCkgOWZyO1xuICAgIH1cblxuICAgIC5tZW51LWxvZ28ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGhlaWdodDogbWF4KDEwJSwgNTBweCk7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgICAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICBib3JkZXItYm90dG9tOiAwLjVweCB3aGl0ZSBzb2xpZDtcbiAgICB9XG5cbiAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgICAgICBwYWRkaW5nOiBjbGFtcCgxMHB4LCAxNXZoLCAxMDBweCkgMjBweCAxMHB4IDIwcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuY29udGVudC1jb250YWluZXIgPiBkaXYge1xuICAgICAgICAvKiB3aWR0aDogNDAwcHg7ICovXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1vdXQ7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTAwcHggNTBweCByZ2JhKDIwLDIwLDIwLDEpO1xuICAgICAgICAvKiBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDEwMHB4IDEwMHB4IHJnYmEoMjAsMjAsMjAsMC43KSxcbiAgICAgICAgICAgICAgICAgICAgMHB4IDBweCAxMDBweCAxMDBweCByZ2JhKDIwLDIwLDIwLDAuNyk7ICovXG4gICAgfVxuXG4gICAgLmNvbnRlbnQtY29udGFpbmVyID4gZGl2LmhpZGUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwJSk7ICovXG4gICAgfVxuXG4gICAgLmNvbnRlbnQtY29udGFpbmVyID4gZGl2IHtcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogbGVmdDogNTAlO1xuICAgIHRvcDogNTAlOyAqL1xuICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAqL1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgLS1iOiAwLjVweDsgLyogdGhpY2tuZXNzIG9mIHRoZSBib3JkZXIgKi9cbiAgICAtLWM6IHJnYigyNTUsIDI1NSwgMjU1KTsgLyogY29sb3Igb2YgdGhlIGJvcmRlciAqL1xuICAgIC0tdzogMTAwcHg7IC8qIHdpZHRoIG9mIGJvcmRlciAqL1xuICAgIFxuICAgIGJvcmRlcjogdmFyKC0tYikgc29saWQgIzAwMDA7XG4gICAgLS1fZzogIzAwMDAgOTBkZWcsdmFyKC0tYykgMDtcbiAgICAtLV9wOiB2YXIoLS13KSB2YXIoLS13KSBib3JkZXItYm94IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kOlxuICAgICAgICBjb25pYy1ncmFkaWVudChmcm9tIDkwZGVnICBhdCB0b3AgICAgdmFyKC0tYikgbGVmdCAgdmFyKC0tYiksdmFyKC0tX2cpKSAwICAgIDAgICAgLyB2YXIoLS1fcCksXG4gICAgICAgIGNvbmljLWdyYWRpZW50KGZyb20gMTgwZGVnIGF0IHRvcCAgICB2YXIoLS1iKSByaWdodCB2YXIoLS1iKSx2YXIoLS1fZykpIDEwMCUgMCAgICAvIHZhcigtLV9wKSxcbiAgICAgICAgY29uaWMtZ3JhZGllbnQoZnJvbSAwZGVnICAgYXQgYm90dG9tIHZhcigtLWIpIGxlZnQgIHZhcigtLWIpLHZhcigtLV9nKSkgMCAgICAxMDAlIC8gdmFyKC0tX3ApLFxuICAgICAgICBjb25pYy1ncmFkaWVudChmcm9tIC05MGRlZyBhdCBib3R0b20gdmFyKC0tYikgcmlnaHQgdmFyKC0tYiksdmFyKC0tX2cpKSAxMDAlIDEwMCUgLyB2YXIoLS1fcCk7XG4gICAgICAgIFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMCwgMjAsIDAuOCk7XG4gICAgfVxuXG4gICAgLmhvbWUgcDpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG5cbn1cblxuXG4vKiBNb2JpbGUgc2NyZWVuICovXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuXG4gICAgLmJhY2tncm91bmQtaW1hZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgfVxuXG59XG5cblxuLyogQW55IHNjcmVlbiAqL1xuXG5ib2R5IHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMCwgMjApO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuI21haW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmJhY2tncm91bmQtaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMHB4O1xuICAgIHRvcDogMHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciA1MCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMTB2bWF4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICBvcGFjaXR5OiAwLjc1O1xuICAgIGZpbHRlcjogYmx1cigwcHgpO1xufVxuXG5wIHtcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDJ2dywgNHJlbSk7XG4gICAgLyogZm9udC13ZWlnaHQ6IDUwMDsgKi9cbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQSxtQkFBbUI7O0FBRW5CO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxvRUFBb0U7QUFDeEU7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0IsRUFBRSx3Q0FBd0M7SUFDMUQsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksNEJBQTRCLEVBQUUsd0NBQXdDO0FBQzFFOztBQUVBO0lBQ0ksZ0JBQWdCLEVBQUUsd0NBQXdDO0FBQzlEOztBQUVBLG1CQUFtQjs7QUFFbkI7O0lBRUk7UUFDSSx5REFBc0U7SUFDMUU7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLGdDQUFnQztRQUNoQyxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxzQ0FBc0M7UUFDdEMsMEJBQTBCO1FBQzFCLFVBQVU7UUFDViw4Q0FBOEM7UUFDOUMsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLGVBQWU7UUFDZixZQUFZO1FBQ1osWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFlBQVk7UUFDWix5Q0FBeUM7UUFDekMsZUFBZTtRQUNmLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsNkNBQTZDO1FBQzdDLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsOEJBQThCO1FBQzlCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSx5Q0FBeUM7UUFDekMsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFdBQVc7SUFDZjs7SUFFQSx5RkFBeUY7SUFDekY7UUFDSSxhQUFhO1FBQ2IsV0FBVztRQUNYLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7O1FBRVg7OztTQUdDOztRQUVELDBCQUEwQjtRQUMxQixnQ0FBZ0M7O1FBRWhDLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsUUFBUTtRQUNSLFVBQVU7UUFDVjs7a0RBRTBDO0lBQzlDOztJQUVBO1FBQ0ksa0NBQWtDO1FBQ2xDLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSw0QkFBNEI7SUFDaEM7O0lBRUE7UUFDSSw0QkFBNEI7SUFDaEM7O0lBRUE7UUFDSSw0QkFBNEI7SUFDaEM7O0lBRUE7UUFDSSw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSwrQkFBK0I7UUFDL0I7O3NDQUU4QjtJQUNsQzs7SUFFQTtRQUNJLCtCQUErQjtRQUMvQjs7c0NBRThCO0lBQ2xDOztJQUVBO1FBQ0ksK0JBQStCO1FBQy9COztzQ0FFOEI7SUFDbEM7O0lBRUE7UUFDSSwrQkFBK0I7UUFDL0I7O3NDQUU4QjtJQUNsQzs7SUFFQTtRQUNJLHdCQUF3QjtRQUN4QixhQUFhO1FBQ2I7O3NDQUU4QjtJQUNsQzs7SUFFQTtRQUNJLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQiwwQkFBMEI7UUFDMUIscUNBQXFDO1FBQ3JDLDBDQUEwQztJQUM5Qzs7SUFFQTtRQUNJLHlEQUF3RjtRQUN4Rix3QkFBd0I7UUFDeEIsNEJBQTRCO1FBQzVCLDJCQUEyQjs7UUFFM0IsVUFBVTtRQUNWLHNCQUFzQjtRQUN0QixVQUFVO1FBQ1YsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2Ysb0JBQW9CO1FBQ3BCLGdDQUFnQztJQUNwQzs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGdEQUFnRDtRQUNoRCxZQUFZO1FBQ1osVUFBVTtRQUNWLFlBQVk7UUFDWixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsK0JBQStCO1FBQy9CLFVBQVU7UUFDVix5QkFBeUI7UUFDekIsK0NBQStDO1FBQy9DOzZEQUNxRDtJQUN6RDs7SUFFQTtRQUNJLFVBQVU7UUFDVixpQ0FBaUM7SUFDckM7O0lBRUE7SUFDQSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYO2VBQ1c7SUFDWCxzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLFVBQVUsRUFBRSw0QkFBNEI7SUFDeEMsdUJBQXVCLEVBQUUsd0JBQXdCO0lBQ2pELFVBQVUsRUFBRSxvQkFBb0I7O0lBRWhDLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsNENBQTRDO0lBQzVDOzs7O3FHQUlpRzs7UUFFN0YsdUNBQXVDO0lBQzNDOztJQUVBO0lBQ0EsbUJBQW1CO0lBQ25COztBQUVKOzs7QUFHQSxrQkFBa0I7O0FBRWxCOztJQUVJO1FBQ0kseURBQXNFO0lBQzFFOztBQUVKOzs7QUFHQSxlQUFlOztBQUVmO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixTQUFTO0lBQ1QsUUFBUTtJQUNSLCtCQUErQjtJQUMvQix3QkFBd0I7SUFDeEIsNEJBQTRCOztJQUU1QixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDEwMCZmYW1pbHk9TGF0bzp3Z2h0QDEwMCZmYW1pbHk9Um9ib3RvOndnaHRAMTAwJmZhbWlseT1SdWJpazp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKiBHZW5lcmFsIHN0eWxlcyAqL1xcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTBweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6ICMzMzM7IC8qIENoYW5nZSB0aGUgY29sb3IgdG8geW91ciBwcmVmZXJlbmNlICovXFxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDZweDsgKi9cXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjAsIDIwLCAyMCk7IC8qIENoYW5nZSB0aGUgY29sb3IgdG8geW91ciBwcmVmZXJlbmNlICovXFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjNTU1OyAvKiBDaGFuZ2UgdGhlIGNvbG9yIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xcbn1cXG5cXG4vKiBEZXNrdG9wIHNjcmVlbiAqL1xcblxcbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xcblxcbiAgICAuYmFja2dyb3VuZC1pbWFnZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9yaXpreS1zdWJhZ2phLTFrN1RuWDVHQXd3LXVuc3BsYXNoLmpwZycpO1xcbiAgICB9XFxuXFxuICAgICNtYWluIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgIC5tZW51IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yMDApO1xcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggMHB4IHJnYmEoMjAsMjAsMjAsMC4yKTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxuICAgIH1cXG5cXG4gICAgLm1lbnUtaXRlbSB7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAvKiBmb250LXNpemU6IGNsYW1wKDFyZW0sIDIuNXZ3LCA0cmVtKTsgKi9cXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgLyogcGFkZGluZzogY2xhbXAoMC41MHJlbSwgMXZ3LCAycmVtKSAwcmVtOyAqL1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIC8qIHBhZGRpbmc6IDUwcHg7ICovXFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGVhc2U7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51LWl0ZW1zIHtcXG4gICAgICAgIC8qIG1hcmdpbi1sZWZ0OiBjbGFtcCgxcmVtLCAzdncsIDhyZW0pOyAqL1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM1cHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgei1pbmRleDogMztcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC8qIFBsYWNlaG9sZGVyIHRvIGNyZWF0ZSBvZmZzZXQgb24gbWVudSB0YWIgdG8gYWxpZ24gbWVudS1pdGVtcyB3aXRoIGNvbnRlbnQtY29udGFpbmVycyAqL1xcbiAgICAucGxhY2Vob2xkZXIge1xcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZmxleC1zaHJpbms6IDE7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51OmhvdmVyIC5tZW51LWl0ZW0ge1xcbiAgICAgICAgb3BhY2l0eTogMC41O1xcbiAgICB9XFxuICAgIFxcbiAgICAubWVudTpob3ZlciAubWVudS1pdGVtOmhvdmVyIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51LWJhY2tncm91bmQtcGF0dGVybiB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgXFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoXFxuICAgICAgICAgICAgcmdiYSgyMjU1LCAyNTUsIDI1NSwgMC4xKSAyJSxcXG4gICAgICAgICAgICB0cmFuc3BhcmVudCAxMiVcXG4gICAgICAgICk7XFxuICAgICAgICBcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDAlO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA5LjV2bWluIDkuNXZtaW47XFxuICAgIFxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogMHB4O1xcbiAgICAgICAgdG9wOiAwcHg7XFxuICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA4MDBtcyBlYXNlLCBcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZSA4MDBtcyBlYXNlLFxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbiA4MDBtcyBlYXNlO1xcbiAgICB9XFxuICAgIFxcbiAgICAubWVudTpob3ZlciA+IC5tZW51LWJhY2tncm91bmQtcGF0dGVybiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEyLjV2bWluIDEyLjV2bWluO1xcbiAgICAgICAgb3BhY2l0eTogMC43O1xcbiAgICB9XFxuICAgIFxcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cXFwiMFxcXCJdID4gLm1lbnUtYmFja2dyb3VuZC1wYXR0ZXJuIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIC0yNSU7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51W2RhdGEtYWN0aXZlLWluZGV4PVxcXCIxXFxcIl0gPiAubWVudS1iYWNrZ3JvdW5kLXBhdHRlcm4ge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgLTUwJTtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XFxcIjJcXFwiXSA+IC5tZW51LWJhY2tncm91bmQtcGF0dGVybiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAtNzUlO1xcbiAgICB9XFxuICAgIFxcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cXFwiM1xcXCJdID4gLm1lbnUtYmFja2dyb3VuZC1wYXR0ZXJuIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIC0xMDAlO1xcbiAgICB9XFxuICAgIFxcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cXFwiMFxcXCJdIH4gLmJhY2tncm91bmQtaW1hZ2Uge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDQ1JTtcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgODAwbXMgZWFzZSxcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZSA4MDBtcyBlYXNlLFxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbiA4MDBtcyBlYXNlO1xcbiAgICB9XFxuICAgICAgXFxuICAgIC5tZW51W2RhdGEtYWN0aXZlLWluZGV4PVxcXCIxXFxcIl0gfiAuYmFja2dyb3VuZC1pbWFnZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgNTAlO1xcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA4MDBtcyBlYXNlLFxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplIDgwMG1zIGVhc2UsXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uIDgwMG1zIGVhc2U7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51W2RhdGEtYWN0aXZlLWluZGV4PVxcXCIyXFxcIl0gfiAuYmFja2dyb3VuZC1pbWFnZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgNTUlO1xcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA4MDBtcyBlYXNlLFxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplIDgwMG1zIGVhc2UsXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uIDgwMG1zIGVhc2U7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51W2RhdGEtYWN0aXZlLWluZGV4PVxcXCIzXFxcIl0gfiAuYmFja2dyb3VuZC1pbWFnZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgNjAlO1xcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA4MDBtcyBlYXNlLFxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplIDgwMG1zIGVhc2UsXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uIDgwMG1zIGVhc2U7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51OmhvdmVyIH4gLmJhY2tncm91bmQtaW1hZ2Uge1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDB2bWF4O1xcbiAgICAgICAgb3BhY2l0eTogMC41MDtcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgODAwbXMgZWFzZSxcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZSA4MDBtcyBlYXNlLFxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbiA4MDBtcyBlYXNlO1xcbiAgICB9XFxuXFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgLyogbWFyZ2luLWxlZnQ6IG1pbm1heCgzMDBweCwgMWZyKTsgKi9cXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDEwcHgsIDUwcHgpIDlmcjtcXG4gICAgfVxcblxcbiAgICAubWVudS1sb2dvIHtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1hZ2VzL1NjcmVlbnNob3RfMjAyMy0xMS0wN19hdF80LjUxLjAyX1BNLXJlbW92ZWJnLXByZXZpZXcucG5nJyk7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIGhlaWdodDogbWF4KDEwJSwgNTBweCk7XFxuICAgICAgICB3aWR0aDogNDAlO1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAwLjVweCB3aGl0ZSBzb2xpZDtcXG4gICAgfVxcblxcbiAgICAuY29udGVudC1jb250YWluZXIge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgICAgcGFkZGluZzogY2xhbXAoMTBweCwgMTV2aCwgMTAwcHgpIDIwcHggMTBweCAyMHB4O1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgIHdpZHRoOiA1MDBweDtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5jb250ZW50LWNvbnRhaW5lciA+IGRpdiB7XFxuICAgICAgICAvKiB3aWR0aDogNDAwcHg7ICovXFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2Utb3V0O1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwMHB4IDUwcHggcmdiYSgyMCwyMCwyMCwxKTtcXG4gICAgICAgIC8qIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTAwcHggMTAwcHggcmdiYSgyMCwyMCwyMCwwLjcpLFxcbiAgICAgICAgICAgICAgICAgICAgMHB4IDBweCAxMDBweCAxMDBweCByZ2JhKDIwLDIwLDIwLDAuNyk7ICovXFxuICAgIH1cXG5cXG4gICAgLmNvbnRlbnQtY29udGFpbmVyID4gZGl2LmhpZGUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKTsgKi9cXG4gICAgfVxcblxcbiAgICAuY29udGVudC1jb250YWluZXIgPiBkaXYge1xcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBsZWZ0OiA1MCU7XFxuICAgIHRvcDogNTAlOyAqL1xcbiAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgKi9cXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgLS1iOiAwLjVweDsgLyogdGhpY2tuZXNzIG9mIHRoZSBib3JkZXIgKi9cXG4gICAgLS1jOiByZ2IoMjU1LCAyNTUsIDI1NSk7IC8qIGNvbG9yIG9mIHRoZSBib3JkZXIgKi9cXG4gICAgLS13OiAxMDBweDsgLyogd2lkdGggb2YgYm9yZGVyICovXFxuICAgIFxcbiAgICBib3JkZXI6IHZhcigtLWIpIHNvbGlkICMwMDAwO1xcbiAgICAtLV9nOiAjMDAwMCA5MGRlZyx2YXIoLS1jKSAwO1xcbiAgICAtLV9wOiB2YXIoLS13KSB2YXIoLS13KSBib3JkZXItYm94IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZDpcXG4gICAgICAgIGNvbmljLWdyYWRpZW50KGZyb20gOTBkZWcgIGF0IHRvcCAgICB2YXIoLS1iKSBsZWZ0ICB2YXIoLS1iKSx2YXIoLS1fZykpIDAgICAgMCAgICAvIHZhcigtLV9wKSxcXG4gICAgICAgIGNvbmljLWdyYWRpZW50KGZyb20gMTgwZGVnIGF0IHRvcCAgICB2YXIoLS1iKSByaWdodCB2YXIoLS1iKSx2YXIoLS1fZykpIDEwMCUgMCAgICAvIHZhcigtLV9wKSxcXG4gICAgICAgIGNvbmljLWdyYWRpZW50KGZyb20gMGRlZyAgIGF0IGJvdHRvbSB2YXIoLS1iKSBsZWZ0ICB2YXIoLS1iKSx2YXIoLS1fZykpIDAgICAgMTAwJSAvIHZhcigtLV9wKSxcXG4gICAgICAgIGNvbmljLWdyYWRpZW50KGZyb20gLTkwZGVnIGF0IGJvdHRvbSB2YXIoLS1iKSByaWdodCB2YXIoLS1iKSx2YXIoLS1fZykpIDEwMCUgMTAwJSAvIHZhcigtLV9wKTtcXG4gICAgICAgIFxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjAsIDIwLCAwLjgpO1xcbiAgICB9XFxuXFxuICAgIC5ob21lIHA6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICB9XFxuXFxufVxcblxcblxcbi8qIE1vYmlsZSBzY3JlZW4gKi9cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG5cXG4gICAgLmJhY2tncm91bmQtaW1hZ2Uge1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZXMvcml6a3ktc3ViYWdqYS0xazdUblg1R0F3dy11bnNwbGFzaC5qcGcnKTtcXG4gICAgfVxcblxcbn1cXG5cXG5cXG4vKiBBbnkgc2NyZWVuICovXFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjAsIDIwKTtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4jbWFpbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5iYWNrZ3JvdW5kLWltYWdlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIHRvcDogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgNTAlO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDExMHZtYXg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFxuICAgIG9wYWNpdHk6IDAuNzU7XFxuICAgIGZpbHRlcjogYmx1cigwcHgpO1xcbn1cXG5cXG5wIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAydncsIDRyZW0pO1xcbiAgICAvKiBmb250LXdlaWdodDogNTAwOyAqL1xcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gZ2VuZXJhdGVET00oKSB7XG5cbiAgICAvLyBCb2R5IGFuZCBtYWluIGRpdlxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uaWQgPSAnbWFpbic7XG4gICAgYm9keS5hcHBlbmQobWFpbik7XG5cbiAgICAvLyBNZW51IGRpdlxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICBtYWluLmFwcGVuZChtZW51KTtcbiAgICBcbiAgICAvLyBCYWNrZ3JvdW5kIGltYWdlXG4gICAgY29uc3QgYmFja2dyb3VuZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmFja2dyb3VuZEltYWdlLmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmQtaW1hZ2UnKTtcbiAgICBtYWluLmFwcGVuZChiYWNrZ3JvdW5kSW1hZ2UpO1xuXG4gICAgY29uc3QgbWVudUJhY2tncm91bmRQYXR0ZXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUJhY2tncm91bmRQYXR0ZXJuLmNsYXNzTGlzdC5hZGQoJ21lbnUtYmFja2dyb3VuZC1wYXR0ZXJuJyk7XG4gICAgbWVudS5hcHBlbmQobWVudUJhY2tncm91bmRQYXR0ZXJuKTtcblxuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZCgncGxhY2Vob2xkZXInKTtcbiAgICBtZW51LmFwcGVuZChwbGFjZWhvbGRlcik7XG5cbiAgICBjb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbXMuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtcycpO1xuICAgIG1lbnUuYXBwZW5kKG1lbnVJdGVtcyk7XG4gICAgXG4gICAgY29uc3QgbWVudUl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW0xLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIG1lbnVJdGVtMS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBtZW51SXRlbXMuYXBwZW5kKG1lbnVJdGVtMSk7XG4gICAgbWVudUl0ZW0xLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjcmVhdGVIb21lRGl2KCk7XG4gICAgfSlcbiAgICBcbiAgICBjb25zdCBtZW51SXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbTIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgbWVudUl0ZW0yLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIG1lbnVJdGVtcy5hcHBlbmQobWVudUl0ZW0yKTtcbiAgICBtZW51SXRlbTIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZVNob3BEaXYoKTtcbiAgICB9KVxuICAgIFxuICAgIGNvbnN0IG1lbnVJdGVtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtMy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBtZW51SXRlbTMudGV4dENvbnRlbnQgPSAnQWJvdXQnO1xuICAgIG1lbnVJdGVtcy5hcHBlbmQobWVudUl0ZW0zKTtcbiAgICBtZW51SXRlbTMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZUFib3V0RGl2KCk7XG4gICAgfSlcbiAgICBcbiAgICBjb25zdCBtZW51SXRlbTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbTQuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgbWVudUl0ZW00LnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnO1xuICAgIG1lbnVJdGVtcy5hcHBlbmQobWVudUl0ZW00KTtcbiAgICBtZW51SXRlbTQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZUNvbnRhY3RVc0RpdigpO1xuICAgIH0pXG4gICAgXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZW51LWl0ZW0nKSkuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaXRlbS5vbm1vdXNlb3ZlciA9ICgpID0+IHtcbiAgICAgICAgICAgIG1lbnUuZGF0YXNldC5hY3RpdmVJbmRleCA9IGluZGV4O1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8vIENvbnRlbnQgZGl2XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICAgIG1haW4uYXBwZW5kKGNvbnRlbnQpO1xuXG4gICAgY29uc3QgbWVudUxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51TG9nby5jbGFzc0xpc3QuYWRkKCdtZW51LWxvZ28nKTtcbiAgICBjb250ZW50LmFwcGVuZChtZW51TG9nbyk7XG5cbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWNvbnRhaW5lcicpO1xuICAgIGNvbnRlbnQuYXBwZW5kKGNvbnRlbnRDb250YWluZXIpO1xuICAgIFxuICAgIGNyZWF0ZUhvbWVEaXYoKTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUhvbWVEaXYoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXJIb21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcbiAgICAgICAgaWYgKCFjb250ZW50Q29udGFpbmVySG9tZSkge1xuICAgICAgICAgICAgY29uc3QgY29udGVudENvbnRhaW5lckhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJIb21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnLCAnaGlkZScpO1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmQoY29udGVudENvbnRhaW5lckhvbWUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHAxLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIG91ciBjb2ZmZWUgcmVhbG1cIlxuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckhvbWUuYXBwZW5kKHAxKTtcblxuICAgICAgICAgICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwMi50ZXh0Q29udGVudCA9IFwiV29ya2luZyBob3VyczpcIlxuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckhvbWUuYXBwZW5kKHAyKTtcblxuICAgICAgICAgICAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwMy50ZXh0Q29udGVudCA9IFwiTW9uZGF5IC0gRnJpZGF5OiA2YW0gLSA1cG1cIlxuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckhvbWUuYXBwZW5kKHAzKTtcblxuICAgICAgICAgICAgY29uc3QgcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwNC50ZXh0Q29udGVudCA9IFwiU2F0dXJkYXkgLSBTdW5kYXkgOGFtIC0gNHBtXCJcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJIb21lLmFwcGVuZChwNCk7XG5cbiAgICAgICAgICAgIGRlbGV0ZVNob3BEaXYoKTtcbiAgICAgICAgICAgIGRlbGV0ZUFib3V0RGl2KCk7XG4gICAgICAgICAgICBkZWxldGVDb250YWN0VXNEaXYoKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29udGVudENvbnRhaW5lckhvbWUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVTaG9wRGl2KCkge1xuICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVyU2hvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG9wJyk7XG4gICAgICAgIGlmICghY29udGVudENvbnRhaW5lclNob3ApIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXJTaG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyU2hvcC5jbGFzc0xpc3QuYWRkKCdzaG9wJywgJ2hpZGUnKTtcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kKGNvbnRlbnRDb250YWluZXJTaG9wKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwMS50ZXh0Q29udGVudCA9IFwiRG9uZWMgbmVjIGFsaXF1YW0gZWxpdC4gRG9uZWMgdml0YWUgY29uZGltZW50dW0gbWFnbmEsIGluIGlhY3VsaXMgcXVhbS4gRHVpcyBsYW9yZWV0IG5pYmggdml0YWUgcHVydXMgdGluY2lkdW50IGlhY3VsaXMuIERvbmVjIG5lYyBhbGlxdWFtIGVsaXQuIERvbmVjIHZpdGFlIGNvbmRpbWVudHVtIG1hZ25hLCBpbiBpYWN1bGlzIHF1YW0uIER1aXMgbGFvcmVldCBuaWJoIHZpdGFlIHB1cnVzIHRpbmNpZHVudCBpYWN1bGlzLiBEb25lYyBuZWMgYWxpcXVhbSBlbGl0LiBEb25lYyB2aXRhZSBjb25kaW1lbnR1bSBtYWduYSwgaW4gaWFjdWxpcyBxdWFtLiBEdWlzIGxhb3JlZXQgbmliaCB2aXRhZSBwdXJ1cyB0aW5jaWR1bnQgaWFjdWxpcy4gRG9uZWMgbmVjIGFsaXF1YW0gZWxpdC4gRG9uZWMgdml0YWUgY29uZGltZW50dW0gbWFnbmEsIGluIGlhY3VsaXMgcXVhbS4gRHVpcyBsYW9yZWV0IG5pYmggdml0YWUgcHVydXMgdGluY2lkdW50IGlhY3VsaXMuIERvbmVjIG5lYyBhbGlxdWFtIGVsaXQuIERvbmVjIHZpdGFlIGNvbmRpbWVudHVtIG1hZ25hLCBpbiBpYWN1bGlzIHF1YW0uIER1aXMgbGFvcmVldCBuaWJoIHZpdGFlIHB1cnVzIHRpbmNpZHVudCBpYWN1bGlzLiBEb25lYyBuZWMgYWxpcXVhbSBlbGl0LiBEb25lYyB2aXRhZSBjb25kaW1lbnR1bSBtYWduYSwgaW4gaWFjdWxpcyBxdWFtLiBEdWlzIGxhb3JlZXQgbmliaCB2aXRhZSBwdXJ1cyB0aW5jaWR1bnQgaWFjdWxpcy4gRG9uZWMgbmVjIGFsaXF1YW0gZWxpdC4gRG9uZWMgdml0YWUgY29uZGltZW50dW0gbWFnbmEsIGluIGlhY3VsaXMgcXVhbS4gRHVpcyBsYW9yZWV0IG5pYmggdml0YWUgcHVydXMgdGluY2lkdW50IGlhY3VsaXMuIERvbmVjIG5lYyBhbGlxdWFtIGVsaXQuIERvbmVjIHZpdGFlIGNvbmRpbWVudHVtIG1hZ25hLCBpbiBpYWN1bGlzIHF1YW0uIER1aXMgbGFvcmVldCBuaWJoIHZpdGFlIHB1cnVzIHRpbmNpZHVudCBpYWN1bGlzLiBEb25lYyBuZWMgYWxpcXVhbSBlbGl0LiBEb25lYyB2aXRhZSBjb25kaW1lbnR1bSBtYWduYSwgaW4gaWFjdWxpcyBxdWFtLiBEdWlzIGxhb3JlZXQgbmliaCB2aXRhZSBwdXJ1cyB0aW5jaWR1bnQgaWFjdWxpcy4gRG9uZWMgbmVjIGFsaXF1YW0gZWxpdC4gRG9uZWMgdml0YWUgY29uZGltZW50dW0gbWFnbmEsIGluIGlhY3VsaXMgcXVhbS4gRHVpcyBsYW9yZWV0IG5pYmggdml0YWUgcHVydXMgdGluY2lkdW50IGlhY3VsaXMuIERvbmVjIG5lYyBhbGlxdWFtIGVsaXQuIERvbmVjIHZpdGFlIGNvbmRpbWVudHVtIG1hZ25hLCBpbiBpYWN1bGlzIHF1YW0uIER1aXMgbGFvcmVldCBuaWJoIHZpdGFlIHB1cnVzIHRpbmNpZHVudCBpYWN1bGlzLiBEb25lYyBuZWMgYWxpcXVhbSBlbGl0LiBEb25lYyB2aXRhZSBjb25kaW1lbnR1bSBtYWduYSwgaW4gaWFjdWxpcyBxdWFtLiBEdWlzIGxhb3JlZXQgbmliaCB2aXRhZSBwdXJ1cyB0aW5jaWR1bnQgaWFjdWxpcy4gRG9uZWMgbmVjIGFsaXF1YW0gZWxpdC4gRG9uZWMgdml0YWUgY29uZGltZW50dW0gbWFnbmEsIGluIGlhY3VsaXMgcXVhbS4gRHVpcyBsYW9yZWV0IG5pYmggdml0YWUgcHVydXMgdGluY2lkdW50IGlhY3VsaXMuIERvbmVjIG5lYyBhbGlxdWFtIGVsaXQuIERvbmVjIHZpdGFlIGNvbmRpbWVudHVtIG1hZ25hLCBpbiBpYWN1bGlzIHF1YW0uIER1aXMgbGFvcmVldCBuaWJoIHZpdGFlIHB1cnVzIHRpbmNpZHVudCBpYWN1bGlzLiBEb25lYyBuZWMgYWxpcXVhbSBlbGl0LiBEb25lYyB2aXRhZSBjb25kaW1lbnR1bSBtYWduYSwgaW4gaWFjdWxpcyBxdWFtLiBEdWlzIGxhb3JlZXQgbmliaCB2aXRhZSBwdXJ1cyB0aW5jaWR1bnQgaWFjdWxpcy5cIlxuICAgICAgICAgICAgY29udGVudENvbnRhaW5lclNob3AuYXBwZW5kKHAxKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwMi50ZXh0Q29udGVudCA9IFwiU2VkIHBvc3VlcmUgYXJjdSBhYyBsZWN0dXMgY29uZGltZW50dW0gY29uZGltZW50dW0uXCJcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJTaG9wLmFwcGVuZChwMik7XG5cbiAgICAgICAgICAgIGRlbGV0ZUhvbWVEaXYoKTtcbiAgICAgICAgICAgIGRlbGV0ZUFib3V0RGl2KCk7XG4gICAgICAgICAgICBkZWxldGVDb250YWN0VXNEaXYoKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29udGVudENvbnRhaW5lclNob3AuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVBYm91dERpdigpIHtcbiAgICAgICAgY29uc3QgY29udGVudENvbnRhaW5lckFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0Jyk7XG4gICAgICAgIGlmICghY29udGVudENvbnRhaW5lckFib3V0KSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVyQWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJBYm91dC5jbGFzc0xpc3QuYWRkKCdhYm91dCcsICdoaWRlJyk7XG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZChjb250ZW50Q29udGFpbmVyQWJvdXQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHAxLnRleHRDb250ZW50ID0gXCJFdGlhbSBhIG1pIHF1YW0uXCJcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJBYm91dC5hcHBlbmQocDEpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHAyLnRleHRDb250ZW50ID0gXCJEb25lYyBuZWMgYWxpcXVhbSBlbGl0LiBEb25lYyB2aXRhZSBjb25kaW1lbnR1bSBtYWduYSwgaW4gaWFjdWxpcyBxdWFtLiBEdWlzIGxhb3JlZXQgbmliaCB2aXRhZSBwdXJ1cyB0aW5jaWR1bnQgaWFjdWxpcy4gRG9uZWMgbmVjIGFsaXF1YW0gZWxpdC4gRG9uZWMgdml0YWUgY29uZGltZW50dW0gbWFnbmEsIGluIGlhY3VsaXMgcXVhbS4gRHVpcyBsYW9yZWV0IG5pYmggdml0YWUgcHVydXMgdGluY2lkdW50IGlhY3VsaXMuIERvbmVjIG5lYyBhbGlxdWFtIGVsaXQuIERvbmVjIHZpdGFlIGNvbmRpbWVudHVtIG1hZ25hLCBpbiBpYWN1bGlzIHF1YW0uIER1aXMgbGFvcmVldCBuaWJoIHZpdGFlIHB1cnVzIHRpbmNpZHVudCBpYWN1bGlzLiBEb25lYyBuZWMgYWxpcXVhbSBlbGl0LiBEb25lYyB2aXRhZSBjb25kaW1lbnR1bSBtYWduYSwgaW4gaWFjdWxpcyBxdWFtLiBEdWlzIGxhb3JlZXQgbmliaCB2aXRhZSBwdXJ1cyB0aW5jaWR1bnQgaWFjdWxpcy4gRG9uZWMgbmVjIGFsaXF1YW0gZWxpdC4gRG9uZWMgdml0YWUgY29uZGltZW50dW0gbWFnbmEsIGluIGlhY3VsaXMgcXVhbS4gRHVpcyBsYW9yZWV0IG5pYmggdml0YWUgcHVydXMgdGluY2lkdW50IGlhY3VsaXMuIERvbmVjIG5lYyBhbGlxdWFtIGVsaXQuIERvbmVjIHZpdGFlIGNvbmRpbWVudHVtIG1hZ25hLCBpbiBpYWN1bGlzIHF1YW0uIER1aXMgbGFvcmVldCBuaWJoIHZpdGFlIHB1cnVzIHRpbmNpZHVudCBpYWN1bGlzLiBEb25lYyBuZWMgYWxpcXVhbSBlbGl0LiBEb25lYyB2aXRhZSBjb25kaW1lbnR1bSBtYWduYSwgaW4gaWFjdWxpcyBxdWFtLiBEdWlzIGxhb3JlZXQgbmliaCB2aXRhZSBwdXJ1cyB0aW5jaWR1bnQgaWFjdWxpcy4gRG9uZWMgbmVjIGFsaXF1YW0gZWxpdC4gRG9uZWMgdml0YWUgY29uZGltZW50dW0gbWFnbmEsIGluIGlhY3VsaXMgcXVhbS4gRHVpcyBsYW9yZWV0IG5pYmggdml0YWUgcHVydXMgdGluY2lkdW50IGlhY3VsaXMuIERvbmVjIG5lYyBhbGlxdWFtIGVsaXQuIERvbmVjIHZpdGFlIGNvbmRpbWVudHVtIG1hZ25hLCBpbiBpYWN1bGlzIHF1YW0uIER1aXMgbGFvcmVldCBuaWJoIHZpdGFlIHB1cnVzIHRpbmNpZHVudCBpYWN1bGlzLiBEb25lYyBuZWMgYWxpcXVhbSBlbGl0LiBEb25lYyB2aXRhZSBjb25kaW1lbnR1bSBtYWduYSwgaW4gaWFjdWxpcyBxdWFtLiBEdWlzIGxhb3JlZXQgbmliaCB2aXRhZSBwdXJ1cyB0aW5jaWR1bnQgaWFjdWxpcy4gRG9uZWMgbmVjIGFsaXF1YW0gZWxpdC4gRG9uZWMgdml0YWUgY29uZGltZW50dW0gbWFnbmEsIGluIGlhY3VsaXMgcXVhbS4gRHVpcyBsYW9yZWV0IG5pYmggdml0YWUgcHVydXMgdGluY2lkdW50IGlhY3VsaXMuIERvbmVjIG5lYyBhbGlxdWFtIGVsaXQuIERvbmVjIHZpdGFlIGNvbmRpbWVudHVtIG1hZ25hLCBpbiBpYWN1bGlzIHF1YW0uIER1aXMgbGFvcmVldCBuaWJoIHZpdGFlIHB1cnVzIHRpbmNpZHVudCBpYWN1bGlzLiBEb25lYyBuZWMgYWxpcXVhbSBlbGl0LiBEb25lYyB2aXRhZSBjb25kaW1lbnR1bSBtYWduYSwgaW4gaWFjdWxpcyBxdWFtLiBEdWlzIGxhb3JlZXQgbmliaCB2aXRhZSBwdXJ1cyB0aW5jaWR1bnQgaWFjdWxpcy4gRG9uZWMgbmVjIGFsaXF1YW0gZWxpdC4gRG9uZWMgdml0YWUgY29uZGltZW50dW0gbWFnbmEsIGluIGlhY3VsaXMgcXVhbS4gRHVpcyBsYW9yZWV0IG5pYmggdml0YWUgcHVydXMgdGluY2lkdW50IGlhY3VsaXMuIERvbmVjIG5lYyBhbGlxdWFtIGVsaXQuIERvbmVjIHZpdGFlIGNvbmRpbWVudHVtIG1hZ25hLCBpbiBpYWN1bGlzIHF1YW0uIER1aXMgbGFvcmVldCBuaWJoIHZpdGFlIHB1cnVzIHRpbmNpZHVudCBpYWN1bGlzLlwiXG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyQWJvdXQuYXBwZW5kKHAyKTtcblxuICAgICAgICAgICAgZGVsZXRlSG9tZURpdigpO1xuICAgICAgICAgICAgZGVsZXRlU2hvcERpdigpO1xuICAgICAgICAgICAgZGVsZXRlQ29udGFjdFVzRGl2KCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJBYm91dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RVc0RpdigpIHtcbiAgICAgICAgY29uc3QgY29udGVudENvbnRhaW5lckNvbnRhY3RVcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LXVzJyk7XG4gICAgICAgIGlmICghY29udGVudENvbnRhaW5lckNvbnRhY3RVcykge1xuICAgICAgICAgICAgY29uc3QgY29udGVudENvbnRhaW5lckNvbnRhY3RVcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckNvbnRhY3RVcy5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXVzJywgJ2hpZGUnKTtcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kKGNvbnRlbnRDb250YWluZXJDb250YWN0VXMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHAyLnRleHRDb250ZW50ID0gXCJTZXYgTGVvXCJcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJDb250YWN0VXMuYXBwZW5kKHAyKTtcblxuICAgICAgICAgICAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwMy50ZXh0Q29udGVudCA9IFwic2V2YS5sZW9ub3ZAaG90bWFpbC5jb21cIlxuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckNvbnRhY3RVcy5hcHBlbmQocDMpO1xuXG4gICAgICAgICAgICBjb25zdCBwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHA0LnRleHRDb250ZW50ID0gXCJodHRwczovL2dpdGh1Yi5jb20vc2V2bGVvXCJcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJDb250YWN0VXMuYXBwZW5kKHA0KTtcblxuICAgICAgICAgICAgZGVsZXRlSG9tZURpdigpO1xuICAgICAgICAgICAgZGVsZXRlU2hvcERpdigpO1xuICAgICAgICAgICAgZGVsZXRlQWJvdXREaXYoKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29udGVudENvbnRhaW5lckNvbnRhY3RVcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlSG9tZURpdigpIHtcbiAgICAgICAgY29uc3QgY29udGVudENvbnRhaW5lckhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xuICAgICAgICBpZiAoY29udGVudENvbnRhaW5lckhvbWUpIHtcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJIb21lLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlU2hvcERpdigpIHtcbiAgICAgICAgY29uc3QgY29udGVudENvbnRhaW5lclNob3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvcCcpO1xuICAgICAgICBpZiAoY29udGVudENvbnRhaW5lclNob3ApIHtcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJTaG9wLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlQWJvdXREaXYoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXJBYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dCcpO1xuICAgICAgICBpZiAoY29udGVudENvbnRhaW5lckFib3V0KSB7XG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyQWJvdXQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVDb250YWN0VXNEaXYoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXJDb250YWN0VXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC11cycpO1xuICAgICAgICBpZiAoY29udGVudENvbnRhaW5lckNvbnRhY3RVcykge1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckNvbnRhY3RVcy5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCB7Z2VuZXJhdGVET019OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHtnZW5lcmF0ZURPTX0gZnJvbSAnLi9wYWdlLWxvYWRlcic7XG5cbmdlbmVyYXRlRE9NKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
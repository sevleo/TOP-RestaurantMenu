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

    .product-item-picture {
        width: 350px;
        height: auto;
        overflow: hidden;
    }

    .product-item-picture img {
        max-width: 100%;
        max-height: 100%;

        width: auto;
        height: auto;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&family=Lato:wght@100&family=Roboto:wght@100&family=Rubik:wght@300&display=swap');\n\n/* General styles */\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    font-family: 'Lato', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n    background: #333; /* Change the color to your preference */\n    /* border-radius: 6px; */\n}\n\n::-webkit-scrollbar:hover {\n    background: rgba(20, 20, 20); /* Change the color to your preference */\n}\n\n::-webkit-scrollbar-thumb:hover {\n    background: #555; /* Change the color to your preference */\n}\n\n/* Desktop screen */\n\n@media (min-width: 800px) {\n\n    .background-image {\n        background-image: url('images/rizky-subagja-1k7TnX5GAww-unsplash.jpg');\n    }\n\n    #main {\n        display: grid;\n        grid-template-rows: 1fr;\n        grid-template-columns: 300px 1fr;\n        position: relative;\n    }\n\n    .menu {\n        background-color: rgba(0, 0, 0, 0.200);\n        backdrop-filter: blur(3px);\n        z-index: 2;\n        box-shadow: 1px 0px 3px 0px rgba(20,20,20,0.2);\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n        justify-content: start;\n        position: fixed;\n        height: 100%;\n        width: 300px;\n    }\n\n    .menu-item {\n        color: white;\n        /* font-size: clamp(1rem, 2.5vw, 4rem); */\n        font-size: 35px;\n        display: block;\n        text-decoration: none;\n        /* padding: clamp(0.50rem, 1vw, 2rem) 0rem; */\n        padding: 10px;\n        /* padding: 50px; */\n        transition: opacity 400ms ease;\n        cursor: pointer;\n    }\n    \n    .menu-items {\n        /* margin-left: clamp(1rem, 3vw, 8rem); */\n        margin-left: 35px;\n        margin-bottom: 25px;\n        position: relative;\n        z-index: 3;\n        width: 100%;\n    }\n\n    /* Placeholder to create offset on menu tab to align menu-items with content-containers */\n    .placeholder {\n        height: 150px;\n        width: 100%;\n        flex-shrink: 1;\n    }\n    \n    .menu:hover .menu-item {\n        opacity: 0.5;\n    }\n    \n    .menu:hover .menu-item:hover {\n        opacity: 1;\n    }\n    \n    .menu-background-pattern {\n        height: 100%;\n        width: 100%;\n    \n        background-image: radial-gradient(\n            rgba(2255, 255, 255, 0.1) 2%,\n            transparent 12%\n        );\n        \n        background-position: 0% 0%;\n        background-size: 9.5vmin 9.5vmin;\n    \n        position: absolute;\n        left: 0px;\n        top: 0px;\n        z-index: 2;\n        transition: opacity 800ms ease, \n                    background-size 800ms ease,\n                    background-position 800ms ease;\n    }\n    \n    .menu:hover > .menu-background-pattern {\n        background-size: 12.5vmin 12.5vmin;\n        opacity: 0.7;\n    }\n    \n    .menu[data-active-index=\"0\"] > .menu-background-pattern {\n        background-position: 0% -25%;\n    }\n    \n    .menu[data-active-index=\"1\"] > .menu-background-pattern {\n        background-position: 0% -50%;\n    }\n    \n    .menu[data-active-index=\"2\"] > .menu-background-pattern {\n        background-position: 0% -75%;\n    }\n    \n    .menu[data-active-index=\"3\"] > .menu-background-pattern {\n        background-position: 0% -100%;\n    }\n    \n    .menu[data-active-index=\"0\"] ~ .background-image {\n        background-position: center 45%;\n        transition: opacity 800ms ease,\n        background-size 800ms ease,\n        background-position 800ms ease;\n    }\n      \n    .menu[data-active-index=\"1\"] ~ .background-image {\n        background-position: center 50%;\n        transition: opacity 800ms ease,\n        background-size 800ms ease,\n        background-position 800ms ease;\n    }\n    \n    .menu[data-active-index=\"2\"] ~ .background-image {\n        background-position: center 55%;\n        transition: opacity 800ms ease,\n        background-size 800ms ease,\n        background-position 800ms ease;\n    }\n    \n    .menu[data-active-index=\"3\"] ~ .background-image {\n        background-position: center 60%;\n        transition: opacity 800ms ease,\n        background-size 800ms ease,\n        background-position 800ms ease;\n    }\n    \n    .menu:hover ~ .background-image {\n        background-size: 100vmax;\n        opacity: 0.50;\n        transition: opacity 800ms ease,\n        background-size 800ms ease,\n        background-position 800ms ease;\n    }\n\n    .content {\n        display: grid;\n        justify-content: center;\n        grid-row: 1 / 2;\n        grid-column: 2 / 3;\n        grid-template-columns: 1fr;\n        /* margin-left: minmax(300px, 1fr); */\n        grid-template-rows: minmax(10px, 50px) 9fr;\n    }\n\n    .menu-logo {\n        background-image: url('images/Screenshot_2023-11-07_at_4.51.02_PM-removebg-preview.png');\n        background-size: contain;\n        background-repeat: no-repeat;\n        background-position: center;\n\n        z-index: 1;\n        height: max(10%, 50px);\n        width: 40%;\n        position: fixed;\n        grid-column: 1 / 2;\n        grid-row: 1 / 2;\n        justify-self: center;\n        border-bottom: 0.5px white solid;\n    }\n\n    .content-container {\n        position: relative;\n        grid-column: 1 / 2;\n        grid-row: 2 / 3;\n        padding: clamp(10px, 15vh, 100px) 20px 10px 20px;\n        color: white;\n        z-index: 2;\n        width: 500px;\n        justify-self: center;\n    }\n\n    .content-container > div {\n        /* width: 400px; */\n        transition: opacity 1s ease-out;\n        opacity: 1;\n        transform: translateX(0%);\n        box-shadow: 0px 0px 100px 50px rgba(20,20,20,1);\n        /* box-shadow: inset 0px 0px 100px 100px rgba(20,20,20,0.7),\n                    0px 0px 100px 100px rgba(20,20,20,0.7); */\n    }\n\n    .content-container > div.hide {\n        opacity: 0;\n        /* transform: translateX(200%); */\n    }\n\n    .content-container > div {\n    /* position: absolute; */\n    width: 100%;\n    /* left: 50%;\n    top: 50%; */\n    /* transform: translate(-50%, -50%); */\n    padding: 15px;\n    --b: 0.5px; /* thickness of the border */\n    --c: rgb(255, 255, 255); /* color of the border */\n    --w: 100px; /* width of border */\n    \n    border: var(--b) solid #0000;\n    --_g: #0000 90deg,var(--c) 0;\n    --_p: var(--w) var(--w) border-box no-repeat;\n    background:\n        conic-gradient(from 90deg  at top    var(--b) left  var(--b),var(--_g)) 0    0    / var(--_p),\n        conic-gradient(from 180deg at top    var(--b) right var(--b),var(--_g)) 100% 0    / var(--_p),\n        conic-gradient(from 0deg   at bottom var(--b) left  var(--b),var(--_g)) 0    100% / var(--_p),\n        conic-gradient(from -90deg at bottom var(--b) right var(--b),var(--_g)) 100% 100% / var(--_p);\n        \n        background-color: rgba(20, 20, 20, 0.8);\n    }\n\n    .home p:first-child {\n    margin-bottom: 30px;\n    }\n\n    .product-item-picture {\n        width: 350px;\n        height: auto;\n        overflow: hidden;\n    }\n\n    .product-item-picture img {\n        max-width: 100%;\n        max-height: 100%;\n\n        width: auto;\n        height: auto;\n    }\n\n}\n\n\n/* Mobile screen */\n\n@media (max-width: 800px) {\n\n    .background-image {\n        background-image: url('images/rizky-subagja-1k7TnX5GAww-unsplash.jpg');\n    }\n\n}\n\n\n/* Any screen */\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(20, 20, 20);\n    overflow-x: hidden;\n}\n\n#main {\n    width: 100%;\n    height: 100%;\n}\n\n.background-image {\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    left: 0px;\n    top: 0px;\n    background-position: center 50%;\n    background-size: 110vmax;\n    background-repeat: no-repeat;\n\n    opacity: 0.75;\n    filter: blur(0px);\n}\n\np {\n    font-size: clamp(1rem, 2vw, 4rem);\n    /* font-weight: 500; */\n    line-height: 50px;\n    text-align: center;\n}"],"sourceRoot":""}]);
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
            
            const productItem1 = document.createElement('div');
            productItem1.classList.add('product-item');
            contentContainerShop.append(productItem1);

            const productName = document.createElement('div');
            productName.classList.add('product-item-name');
            productItem1.append(productName);

            const productPicture = document.createElement('div');
            productPicture.classList.add('product-item-picture');
            productItem1.append(productPicture);

            const imageElement = document.createElement('img');
            imageElement.src = 'images/americano.jpg'
            productPicture.append(imageElement);

            const productPrice = document.createElement('div');
            productPrice.classList.add('product-item-price');
            productItem1.append(productPrice);
        

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzVPQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ29COztBQUUxQyx5REFBVyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvcGFnZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImltYWdlcy9yaXpreS1zdWJhZ2phLTFrN1RuWDVHQXd3LXVuc3BsYXNoLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImltYWdlcy9TY3JlZW5zaG90XzIwMjMtMTEtMDdfYXRfNC41MS4wMl9QTS1yZW1vdmViZy1wcmV2aWV3LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRAMTAwJmZhbWlseT1MYXRvOndnaHRAMTAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDAmZmFtaWx5PVJ1YmlrOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBHZW5lcmFsIHN0eWxlcyAqL1xuXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxMHB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzOyAvKiBDaGFuZ2UgdGhlIGNvbG9yIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDZweDsgKi9cbn1cblxuOjotd2Via2l0LXNjcm9sbGJhcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMCwgMjAsIDIwKTsgLyogQ2hhbmdlIHRoZSBjb2xvciB0byB5b3VyIHByZWZlcmVuY2UgKi9cbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzU1NTsgLyogQ2hhbmdlIHRoZSBjb2xvciB0byB5b3VyIHByZWZlcmVuY2UgKi9cbn1cblxuLyogRGVza3RvcCBzY3JlZW4gKi9cblxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XG5cbiAgICAuYmFja2dyb3VuZC1pbWFnZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICB9XG5cbiAgICAjbWFpbiB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIC5tZW51IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIwMCk7XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICBib3gtc2hhZG93OiAxcHggMHB4IDNweCAwcHggcmdiYSgyMCwyMCwyMCwwLjIpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgIH1cblxuICAgIC5tZW51LWl0ZW0ge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIC8qIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMi41dncsIDRyZW0pOyAqL1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIC8qIHBhZGRpbmc6IGNsYW1wKDAuNTByZW0sIDF2dywgMnJlbSkgMHJlbTsgKi9cbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgLyogcGFkZGluZzogNTBweDsgKi9cbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtcyBlYXNlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5tZW51LWl0ZW1zIHtcbiAgICAgICAgLyogbWFyZ2luLWxlZnQ6IGNsYW1wKDFyZW0sIDN2dywgOHJlbSk7ICovXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC8qIFBsYWNlaG9sZGVyIHRvIGNyZWF0ZSBvZmZzZXQgb24gbWVudSB0YWIgdG8gYWxpZ24gbWVudS1pdGVtcyB3aXRoIGNvbnRlbnQtY29udGFpbmVycyAqL1xuICAgIC5wbGFjZWhvbGRlciB7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmbGV4LXNocmluazogMTtcbiAgICB9XG4gICAgXG4gICAgLm1lbnU6aG92ZXIgLm1lbnUtaXRlbSB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gICAgXG4gICAgLm1lbnU6aG92ZXIgLm1lbnUtaXRlbTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIFxuICAgIC5tZW51LWJhY2tncm91bmQtcGF0dGVybiB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChcbiAgICAgICAgICAgIHJnYmEoMjI1NSwgMjU1LCAyNTUsIDAuMSkgMiUsXG4gICAgICAgICAgICB0cmFuc3BhcmVudCAxMiVcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDkuNXZtaW4gOS41dm1pbjtcbiAgICBcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDgwMG1zIGVhc2UsIFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemUgODAwbXMgZWFzZSxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbiA4MDBtcyBlYXNlO1xuICAgIH1cbiAgICBcbiAgICAubWVudTpob3ZlciA+IC5tZW51LWJhY2tncm91bmQtcGF0dGVybiB7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTIuNXZtaW4gMTIuNXZtaW47XG4gICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICB9XG4gICAgXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XCIwXCJdID4gLm1lbnUtYmFja2dyb3VuZC1wYXR0ZXJuIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgLTI1JTtcbiAgICB9XG4gICAgXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XCIxXCJdID4gLm1lbnUtYmFja2dyb3VuZC1wYXR0ZXJuIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgLTUwJTtcbiAgICB9XG4gICAgXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XCIyXCJdID4gLm1lbnUtYmFja2dyb3VuZC1wYXR0ZXJuIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgLTc1JTtcbiAgICB9XG4gICAgXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XCIzXCJdID4gLm1lbnUtYmFja2dyb3VuZC1wYXR0ZXJuIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgLTEwMCU7XG4gICAgfVxuICAgIFxuICAgIC5tZW51W2RhdGEtYWN0aXZlLWluZGV4PVwiMFwiXSB+IC5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDQ1JTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA4MDBtcyBlYXNlLFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemUgODAwbXMgZWFzZSxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbiA4MDBtcyBlYXNlO1xuICAgIH1cbiAgICAgIFxuICAgIC5tZW51W2RhdGEtYWN0aXZlLWluZGV4PVwiMVwiXSB+IC5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDUwJTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA4MDBtcyBlYXNlLFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemUgODAwbXMgZWFzZSxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbiA4MDBtcyBlYXNlO1xuICAgIH1cbiAgICBcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cIjJcIl0gfiAuYmFja2dyb3VuZC1pbWFnZSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciA1NSU7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgODAwbXMgZWFzZSxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplIDgwMG1zIGVhc2UsXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24gODAwbXMgZWFzZTtcbiAgICB9XG4gICAgXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XCIzXCJdIH4gLmJhY2tncm91bmQtaW1hZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgNjAlO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDgwMG1zIGVhc2UsXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZSA4MDBtcyBlYXNlLFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uIDgwMG1zIGVhc2U7XG4gICAgfVxuICAgIFxuICAgIC5tZW51OmhvdmVyIH4gLmJhY2tncm91bmQtaW1hZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZtYXg7XG4gICAgICAgIG9wYWNpdHk6IDAuNTA7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgODAwbXMgZWFzZSxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplIDgwMG1zIGVhc2UsXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24gODAwbXMgZWFzZTtcbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIC8qIG1hcmdpbi1sZWZ0OiBtaW5tYXgoMzAwcHgsIDFmcik7ICovXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDEwcHgsIDUwcHgpIDlmcjtcbiAgICB9XG5cbiAgICAubWVudS1sb2dvIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblxuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBoZWlnaHQ6IG1heCgxMCUsIDUwcHgpO1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggd2hpdGUgc29saWQ7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICAgICAgcGFkZGluZzogY2xhbXAoMTBweCwgMTV2aCwgMTAwcHgpIDIwcHggMTBweCAyMHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQtY29udGFpbmVyID4gZGl2IHtcbiAgICAgICAgLyogd2lkdGg6IDQwMHB4OyAqL1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2Utb3V0O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwMHB4IDUwcHggcmdiYSgyMCwyMCwyMCwxKTtcbiAgICAgICAgLyogYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxMDBweCAxMDBweCByZ2JhKDIwLDIwLDIwLDAuNyksXG4gICAgICAgICAgICAgICAgICAgIDBweCAwcHggMTAwcHggMTAwcHggcmdiYSgyMCwyMCwyMCwwLjcpOyAqL1xuICAgIH1cblxuICAgIC5jb250ZW50LWNvbnRhaW5lciA+IGRpdi5oaWRlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMCUpOyAqL1xuICAgIH1cblxuICAgIC5jb250ZW50LWNvbnRhaW5lciA+IGRpdiB7XG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTsgKi9cbiAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgKi9cbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIC0tYjogMC41cHg7IC8qIHRoaWNrbmVzcyBvZiB0aGUgYm9yZGVyICovXG4gICAgLS1jOiByZ2IoMjU1LCAyNTUsIDI1NSk7IC8qIGNvbG9yIG9mIHRoZSBib3JkZXIgKi9cbiAgICAtLXc6IDEwMHB4OyAvKiB3aWR0aCBvZiBib3JkZXIgKi9cbiAgICBcbiAgICBib3JkZXI6IHZhcigtLWIpIHNvbGlkICMwMDAwO1xuICAgIC0tX2c6ICMwMDAwIDkwZGVnLHZhcigtLWMpIDA7XG4gICAgLS1fcDogdmFyKC0tdykgdmFyKC0tdykgYm9yZGVyLWJveCBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZDpcbiAgICAgICAgY29uaWMtZ3JhZGllbnQoZnJvbSA5MGRlZyAgYXQgdG9wICAgIHZhcigtLWIpIGxlZnQgIHZhcigtLWIpLHZhcigtLV9nKSkgMCAgICAwICAgIC8gdmFyKC0tX3ApLFxuICAgICAgICBjb25pYy1ncmFkaWVudChmcm9tIDE4MGRlZyBhdCB0b3AgICAgdmFyKC0tYikgcmlnaHQgdmFyKC0tYiksdmFyKC0tX2cpKSAxMDAlIDAgICAgLyB2YXIoLS1fcCksXG4gICAgICAgIGNvbmljLWdyYWRpZW50KGZyb20gMGRlZyAgIGF0IGJvdHRvbSB2YXIoLS1iKSBsZWZ0ICB2YXIoLS1iKSx2YXIoLS1fZykpIDAgICAgMTAwJSAvIHZhcigtLV9wKSxcbiAgICAgICAgY29uaWMtZ3JhZGllbnQoZnJvbSAtOTBkZWcgYXQgYm90dG9tIHZhcigtLWIpIHJpZ2h0IHZhcigtLWIpLHZhcigtLV9nKSkgMTAwJSAxMDAlIC8gdmFyKC0tX3ApO1xuICAgICAgICBcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjAsIDIwLCAwLjgpO1xuICAgIH1cblxuICAgIC5ob21lIHA6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtaXRlbS1waWN0dXJlIHtcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtaXRlbS1waWN0dXJlIGltZyB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcblxuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cblxufVxuXG5cbi8qIE1vYmlsZSBzY3JlZW4gKi9cblxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG5cbiAgICAuYmFja2dyb3VuZC1pbWFnZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICB9XG5cbn1cblxuXG4vKiBBbnkgc2NyZWVuICovXG5cbmJvZHkge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDIwLCAyMCk7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4jbWFpbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYmFja2dyb3VuZC1pbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdG9wOiAwcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDUwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDExMHZtYXg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgZmlsdGVyOiBibHVyKDBweCk7XG59XG5cbnAge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMnZ3LCA0cmVtKTtcbiAgICAvKiBmb250LXdlaWdodDogNTAwOyAqL1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBLG1CQUFtQjs7QUFFbkI7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG9FQUFvRTtBQUN4RTs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQixFQUFFLHdDQUF3QztJQUMxRCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSw0QkFBNEIsRUFBRSx3Q0FBd0M7QUFDMUU7O0FBRUE7SUFDSSxnQkFBZ0IsRUFBRSx3Q0FBd0M7QUFDOUQ7O0FBRUEsbUJBQW1COztBQUVuQjs7SUFFSTtRQUNJLHlEQUFzRTtJQUMxRTs7SUFFQTtRQUNJLGFBQWE7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QXNFO0lBQzFFOztBQUVKOzs7QUFHQSxlQUFlOztBQUVmO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixTQUFTO0lBQ1QsUUFBUTtJQUNSLCtCQUErQjtJQUMvQix3QkFBd0I7SUFDeEIsNEJBQTRCOztJQUU1QixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDEwMCZmYW1pbHk9TGF0bzp3Z2h0QDEwMCZmYW1pbHk9Um9ib3RvOndnaHRAMTAwJmZhbWlseT1SdWJpazp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKiBHZW5lcmFsIHN0eWxlcyAqL1xcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTBweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6ICMzMzM7IC8qIENoYW5nZSB0aGUgY29sb3IgdG8geW91ciBwcmVmZXJlbmNlICovXFxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDZweDsgKi9cXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjAsIDIwLCAyMCk7IC8qIENoYW5nZSB0aGUgY29sb3IgdG8geW91ciBwcmVmZXJlbmNlICovXFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjNTU1OyAvKiBDaGFuZ2UgdGhlIGNvbG9yIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xcbn1cXG5cXG4vKiBEZXNrdG9wIHNjcmVlbiAqL1xcblxcbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xcblxcbiAgICAuYmFja2dyb3VuZC1pbWFnZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9yaXpreS1zdWJhZ2phLTFrN1RuWDVHQXd3LXVuc3BsYXNoLmpwZycpO1xcbiAgICB9XFxuXFxuICAgICNtYWluIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgIC5tZW51IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yMDApO1xcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggMHB4IHJnYmEoMjAsMjAsMjAsMC4yKTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxuICAgIH1cXG5cXG4gICAgLm1lbnUtaXRlbSB7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAvKiBmb250LXNpemU6IGNsYW1wKDFyZW0sIDIuNXZ3LCA0cmVtKTsgKi9cXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgLyogcGFkZGluZzogY2xhbXAoMC41MHJlbSwgMXZ3LCAycmVtKSAwcmVtOyAqL1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIC8qIHBhZGRpbmc6IDUwcHg7ICovXFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGVhc2U7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51LWl0ZW1zIHtcXG4gICAgICAgIC8qIG1hcmdpbi1sZWZ0OiBjbGFtcCgxcmVtLCAzdncsIDhyZW0pOyAqL1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM1cHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgei1pbmRleDogMztcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC8qIFBsYWNlaG9sZGVyIHRvIGNyZWF0ZSBvZmZzZXQgb24gbWVudSB0YWIgdG8gYWxpZ24gbWVudS1pdGVtcyB3aXRoIGNvbnRlbnQtY29udGFpbmVycyAqL1xcbiAgICAucGxhY2Vob2xkZXIge1xcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZmxleC1zaHJpbms6IDE7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51OmhvdmVyIC5tZW51LWl0ZW0ge1xcbiAgICAgICAgb3BhY2l0eTogMC41O1xcbiAgICB9XFxuICAgIFxcbiAgICAubWVudTpob3ZlciAubWVudS1pdGVtOmhvdmVyIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51LWJhY2tncm91bmQtcGF0dGVybiB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgXFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoXFxuICAgICAgICAgICAgcmdiYSgyMjU1LCAyNTUsIDI1NSwgMC4xKSAyJSxcXG4gICAgICAgICAgICB0cmFuc3BhcmVudCAxMiVcXG4gICAgICAgICk7XFxuICAgICAgICBcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDAlO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA5LjV2bWluIDkuNXZtaW47XFxuICAgIFxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogMHB4O1xcbiAgICAgICAgdG9wOiAwcHg7XFxuICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA4MDBtcyBlYXNlLCBcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZSA4MDBtcyBlYXNlLFxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbiA4MDBtcyBlYXNlO1xcbiAgICB9XFxuICAgIFxcbiAgICAubWVudTpob3ZlciA+IC5tZW51LWJhY2tncm91bmQtcGF0dGVybiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEyLjV2bWluIDEyLjV2bWluO1xcbiAgICAgICAgb3BhY2l0eTogMC43O1xcbiAgICB9XFxuICAgIFxcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cXFwiMFxcXCJdID4gLm1lbnUtYmFja2dyb3VuZC1wYXR0ZXJuIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIC0yNSU7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51W2RhdGEtYWN0aXZlLWluZGV4PVxcXCIxXFxcIl0gPiAubWVudS1iYWNrZ3JvdW5kLXBhdHRlcm4ge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgLTUwJTtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XFxcIjJcXFwiXSA+IC5tZW51LWJhY2tncm91bmQtcGF0dGVybiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAtNzUlO1xcbiAgICB9XFxuICAgIFxcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cXFwiM1xcXCJdID4gLm1lbnUtYmFja2dyb3VuZC1wYXR0ZXJuIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIC0xMDAlO1xcbiAgICB9XFxuICAgIFxcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cXFwiMFxcXCJdIH4gLmJhY2tncm91bmQtaW1hZ2Uge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDQ1JTtcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgODAwbXMgZWFzZSxcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZSA4MDBtcyBlYXNlLFxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbiA4MDBtcyBlYXNlO1xcbiAgICB9XFxuICAgICAgXFxuICAgIC5tZW51W2RhdGEtYWN0aXZlLWluZGV4PVxcXCIxXFxcIl0gfiAuYmFja2dyb3VuZC1pbWFnZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgNTAlO1xcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA4MDBtcyBlYXNlLFxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplIDgwMG1zIGVhc2UsXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uIDgwMG1zIGVhc2U7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51W2RhdGEtYWN0aXZlLWluZGV4PVxcXCIyXFxcIl0gfiAuYmFja2dyb3VuZC1pbWFnZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgNTUlO1xcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA4MDBtcyBlYXNlLFxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplIDgwMG1zIGVhc2UsXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uIDgwMG1zIGVhc2U7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51W2RhdGEtYWN0aXZlLWluZGV4PVxcXCIzXFxcIl0gfiAuYmFja2dyb3VuZC1pbWFnZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgNjAlO1xcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA4MDBtcyBlYXNlLFxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplIDgwMG1zIGVhc2UsXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uIDgwMG1zIGVhc2U7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51OmhvdmVyIH4gLmJhY2tncm91bmQtaW1hZ2Uge1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDB2bWF4O1xcbiAgICAgICAgb3BhY2l0eTogMC41MDtcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgODAwbXMgZWFzZSxcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZSA4MDBtcyBlYXNlLFxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbiA4MDBtcyBlYXNlO1xcbiAgICB9XFxuXFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgLyogbWFyZ2luLWxlZnQ6IG1pbm1heCgzMDBweCwgMWZyKTsgKi9cXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDEwcHgsIDUwcHgpIDlmcjtcXG4gICAgfVxcblxcbiAgICAubWVudS1sb2dvIHtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1hZ2VzL1NjcmVlbnNob3RfMjAyMy0xMS0wN19hdF80LjUxLjAyX1BNLXJlbW92ZWJnLXByZXZpZXcucG5nJyk7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIGhlaWdodDogbWF4KDEwJSwgNTBweCk7XFxuICAgICAgICB3aWR0aDogNDAlO1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAwLjVweCB3aGl0ZSBzb2xpZDtcXG4gICAgfVxcblxcbiAgICAuY29udGVudC1jb250YWluZXIge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgICAgcGFkZGluZzogY2xhbXAoMTBweCwgMTV2aCwgMTAwcHgpIDIwcHggMTBweCAyMHB4O1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgIHdpZHRoOiA1MDBweDtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5jb250ZW50LWNvbnRhaW5lciA+IGRpdiB7XFxuICAgICAgICAvKiB3aWR0aDogNDAwcHg7ICovXFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2Utb3V0O1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwMHB4IDUwcHggcmdiYSgyMCwyMCwyMCwxKTtcXG4gICAgICAgIC8qIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTAwcHggMTAwcHggcmdiYSgyMCwyMCwyMCwwLjcpLFxcbiAgICAgICAgICAgICAgICAgICAgMHB4IDBweCAxMDBweCAxMDBweCByZ2JhKDIwLDIwLDIwLDAuNyk7ICovXFxuICAgIH1cXG5cXG4gICAgLmNvbnRlbnQtY29udGFpbmVyID4gZGl2LmhpZGUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKTsgKi9cXG4gICAgfVxcblxcbiAgICAuY29udGVudC1jb250YWluZXIgPiBkaXYge1xcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBsZWZ0OiA1MCU7XFxuICAgIHRvcDogNTAlOyAqL1xcbiAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgKi9cXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgLS1iOiAwLjVweDsgLyogdGhpY2tuZXNzIG9mIHRoZSBib3JkZXIgKi9cXG4gICAgLS1jOiByZ2IoMjU1LCAyNTUsIDI1NSk7IC8qIGNvbG9yIG9mIHRoZSBib3JkZXIgKi9cXG4gICAgLS13OiAxMDBweDsgLyogd2lkdGggb2YgYm9yZGVyICovXFxuICAgIFxcbiAgICBib3JkZXI6IHZhcigtLWIpIHNvbGlkICMwMDAwO1xcbiAgICAtLV9nOiAjMDAwMCA5MGRlZyx2YXIoLS1jKSAwO1xcbiAgICAtLV9wOiB2YXIoLS13KSB2YXIoLS13KSBib3JkZXItYm94IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZDpcXG4gICAgICAgIGNvbmljLWdyYWRpZW50KGZyb20gOTBkZWcgIGF0IHRvcCAgICB2YXIoLS1iKSBsZWZ0ICB2YXIoLS1iKSx2YXIoLS1fZykpIDAgICAgMCAgICAvIHZhcigtLV9wKSxcXG4gICAgICAgIGNvbmljLWdyYWRpZW50KGZyb20gMTgwZGVnIGF0IHRvcCAgICB2YXIoLS1iKSByaWdodCB2YXIoLS1iKSx2YXIoLS1fZykpIDEwMCUgMCAgICAvIHZhcigtLV9wKSxcXG4gICAgICAgIGNvbmljLWdyYWRpZW50KGZyb20gMGRlZyAgIGF0IGJvdHRvbSB2YXIoLS1iKSBsZWZ0ICB2YXIoLS1iKSx2YXIoLS1fZykpIDAgICAgMTAwJSAvIHZhcigtLV9wKSxcXG4gICAgICAgIGNvbmljLWdyYWRpZW50KGZyb20gLTkwZGVnIGF0IGJvdHRvbSB2YXIoLS1iKSByaWdodCB2YXIoLS1iKSx2YXIoLS1fZykpIDEwMCUgMTAwJSAvIHZhcigtLV9wKTtcXG4gICAgICAgIFxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjAsIDIwLCAwLjgpO1xcbiAgICB9XFxuXFxuICAgIC5ob21lIHA6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9kdWN0LWl0ZW0tcGljdHVyZSB7XFxuICAgICAgICB3aWR0aDogMzUwcHg7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB9XFxuXFxuICAgIC5wcm9kdWN0LWl0ZW0tcGljdHVyZSBpbWcge1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcXG5cXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuXFxufVxcblxcblxcbi8qIE1vYmlsZSBzY3JlZW4gKi9cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG5cXG4gICAgLmJhY2tncm91bmQtaW1hZ2Uge1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZXMvcml6a3ktc3ViYWdqYS0xazdUblg1R0F3dy11bnNwbGFzaC5qcGcnKTtcXG4gICAgfVxcblxcbn1cXG5cXG5cXG4vKiBBbnkgc2NyZWVuICovXFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjAsIDIwKTtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4jbWFpbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5iYWNrZ3JvdW5kLWltYWdlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIHRvcDogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgNTAlO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDExMHZtYXg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFxuICAgIG9wYWNpdHk6IDAuNzU7XFxuICAgIGZpbHRlcjogYmx1cigwcHgpO1xcbn1cXG5cXG5wIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAydncsIDRyZW0pO1xcbiAgICAvKiBmb250LXdlaWdodDogNTAwOyAqL1xcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gZ2VuZXJhdGVET00oKSB7XG5cbiAgICAvLyBCb2R5IGFuZCBtYWluIGRpdlxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uaWQgPSAnbWFpbic7XG4gICAgYm9keS5hcHBlbmQobWFpbik7XG5cbiAgICAvLyBNZW51IGRpdlxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICBtYWluLmFwcGVuZChtZW51KTtcbiAgICBcbiAgICAvLyBCYWNrZ3JvdW5kIGltYWdlXG4gICAgY29uc3QgYmFja2dyb3VuZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmFja2dyb3VuZEltYWdlLmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmQtaW1hZ2UnKTtcbiAgICBtYWluLmFwcGVuZChiYWNrZ3JvdW5kSW1hZ2UpO1xuXG4gICAgY29uc3QgbWVudUJhY2tncm91bmRQYXR0ZXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUJhY2tncm91bmRQYXR0ZXJuLmNsYXNzTGlzdC5hZGQoJ21lbnUtYmFja2dyb3VuZC1wYXR0ZXJuJyk7XG4gICAgbWVudS5hcHBlbmQobWVudUJhY2tncm91bmRQYXR0ZXJuKTtcblxuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZCgncGxhY2Vob2xkZXInKTtcbiAgICBtZW51LmFwcGVuZChwbGFjZWhvbGRlcik7XG5cbiAgICBjb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbXMuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtcycpO1xuICAgIG1lbnUuYXBwZW5kKG1lbnVJdGVtcyk7XG4gICAgXG4gICAgY29uc3QgbWVudUl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW0xLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIG1lbnVJdGVtMS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBtZW51SXRlbXMuYXBwZW5kKG1lbnVJdGVtMSk7XG4gICAgbWVudUl0ZW0xLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjcmVhdGVIb21lRGl2KCk7XG4gICAgfSlcbiAgICBcbiAgICBjb25zdCBtZW51SXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbTIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgbWVudUl0ZW0yLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIG1lbnVJdGVtcy5hcHBlbmQobWVudUl0ZW0yKTtcbiAgICBtZW51SXRlbTIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZVNob3BEaXYoKTtcbiAgICB9KVxuICAgIFxuICAgIGNvbnN0IG1lbnVJdGVtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtMy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBtZW51SXRlbTMudGV4dENvbnRlbnQgPSAnQWJvdXQnO1xuICAgIG1lbnVJdGVtcy5hcHBlbmQobWVudUl0ZW0zKTtcbiAgICBtZW51SXRlbTMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZUFib3V0RGl2KCk7XG4gICAgfSlcbiAgICBcbiAgICBjb25zdCBtZW51SXRlbTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbTQuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgbWVudUl0ZW00LnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnO1xuICAgIG1lbnVJdGVtcy5hcHBlbmQobWVudUl0ZW00KTtcbiAgICBtZW51SXRlbTQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZUNvbnRhY3RVc0RpdigpO1xuICAgIH0pXG4gICAgXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZW51LWl0ZW0nKSkuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaXRlbS5vbm1vdXNlb3ZlciA9ICgpID0+IHtcbiAgICAgICAgICAgIG1lbnUuZGF0YXNldC5hY3RpdmVJbmRleCA9IGluZGV4O1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8vIENvbnRlbnQgZGl2XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICAgIG1haW4uYXBwZW5kKGNvbnRlbnQpO1xuXG4gICAgY29uc3QgbWVudUxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51TG9nby5jbGFzc0xpc3QuYWRkKCdtZW51LWxvZ28nKTtcbiAgICBjb250ZW50LmFwcGVuZChtZW51TG9nbyk7XG5cbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWNvbnRhaW5lcicpO1xuICAgIGNvbnRlbnQuYXBwZW5kKGNvbnRlbnRDb250YWluZXIpO1xuICAgIFxuICAgIGNyZWF0ZUhvbWVEaXYoKTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUhvbWVEaXYoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXJIb21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcbiAgICAgICAgaWYgKCFjb250ZW50Q29udGFpbmVySG9tZSkge1xuICAgICAgICAgICAgY29uc3QgY29udGVudENvbnRhaW5lckhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJIb21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnLCAnaGlkZScpO1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmQoY29udGVudENvbnRhaW5lckhvbWUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHAxLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIG91ciBjb2ZmZWUgcmVhbG1cIlxuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckhvbWUuYXBwZW5kKHAxKTtcblxuICAgICAgICAgICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwMi50ZXh0Q29udGVudCA9IFwiV29ya2luZyBob3VyczpcIlxuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckhvbWUuYXBwZW5kKHAyKTtcblxuICAgICAgICAgICAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwMy50ZXh0Q29udGVudCA9IFwiTW9uZGF5IC0gRnJpZGF5OiA2YW0gLSA1cG1cIlxuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckhvbWUuYXBwZW5kKHAzKTtcblxuICAgICAgICAgICAgY29uc3QgcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwNC50ZXh0Q29udGVudCA9IFwiU2F0dXJkYXkgLSBTdW5kYXkgOGFtIC0gNHBtXCJcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJIb21lLmFwcGVuZChwNCk7XG5cbiAgICAgICAgICAgIGRlbGV0ZVNob3BEaXYoKTtcbiAgICAgICAgICAgIGRlbGV0ZUFib3V0RGl2KCk7XG4gICAgICAgICAgICBkZWxldGVDb250YWN0VXNEaXYoKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29udGVudENvbnRhaW5lckhvbWUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVTaG9wRGl2KCkge1xuICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVyU2hvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG9wJyk7XG4gICAgICAgIGlmICghY29udGVudENvbnRhaW5lclNob3ApIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXJTaG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyU2hvcC5jbGFzc0xpc3QuYWRkKCdzaG9wJywgJ2hpZGUnKTtcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kKGNvbnRlbnRDb250YWluZXJTaG9wKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9kdWN0SXRlbTEuY2xhc3NMaXN0LmFkZCgncHJvZHVjdC1pdGVtJyk7XG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyU2hvcC5hcHBlbmQocHJvZHVjdEl0ZW0xKTtcblxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2R1Y3ROYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtaXRlbS1uYW1lJyk7XG4gICAgICAgICAgICBwcm9kdWN0SXRlbTEuYXBwZW5kKHByb2R1Y3ROYW1lKTtcblxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdFBpY3R1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2R1Y3RQaWN0dXJlLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtaXRlbS1waWN0dXJlJyk7XG4gICAgICAgICAgICBwcm9kdWN0SXRlbTEuYXBwZW5kKHByb2R1Y3RQaWN0dXJlKTtcblxuICAgICAgICAgICAgY29uc3QgaW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpbWFnZUVsZW1lbnQuc3JjID0gJ2ltYWdlcy9hbWVyaWNhbm8uanBnJ1xuICAgICAgICAgICAgcHJvZHVjdFBpY3R1cmUuYXBwZW5kKGltYWdlRWxlbWVudCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvZHVjdFByaWNlLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtaXRlbS1wcmljZScpO1xuICAgICAgICAgICAgcHJvZHVjdEl0ZW0xLmFwcGVuZChwcm9kdWN0UHJpY2UpO1xuICAgICAgICBcblxuICAgICAgICAgICAgZGVsZXRlSG9tZURpdigpO1xuICAgICAgICAgICAgZGVsZXRlQWJvdXREaXYoKTtcbiAgICAgICAgICAgIGRlbGV0ZUNvbnRhY3RVc0RpdigpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb250ZW50Q29udGFpbmVyU2hvcC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFib3V0RGl2KCkge1xuICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVyQWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQnKTtcbiAgICAgICAgaWYgKCFjb250ZW50Q29udGFpbmVyQWJvdXQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXJBYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckFib3V0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0JywgJ2hpZGUnKTtcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kKGNvbnRlbnRDb250YWluZXJBYm91dCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcDEudGV4dENvbnRlbnQgPSBcIkV0aWFtIGEgbWkgcXVhbS5cIlxuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckFib3V0LmFwcGVuZChwMSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcDIudGV4dENvbnRlbnQgPSBcIkRvbmVjIG5lYyBhbGlxdWFtIGVsaXQuIERvbmVjIHZpdGFlIGNvbmRpbWVudHVtIG1hZ25hLCBpbiBpYWN1bGlzIHF1YW0uIER1aXMgbGFvcmVldCBuaWJoIHZpdGFlIHB1cnVzIHRpbmNpZHVudCBpYWN1bGlzLiBEb25lYyBuZWMgYWxpcXVhbSBlbGl0LiBEb25lYyB2aXRhZSBjb25kaW1lbnR1bSBtYWduYSwgaW4gaWFjdWxpcyBxdWFtLiBEdWlzIGxhb3JlZXQgbmliaCB2aXRhZSBwdXJ1cyB0aW5jaWR1bnQgaWFjdWxpcy4gRG9uZWMgbmVjIGFsaXF1YW0gZWxpdC4gRG9uZWMgdml0YWUgY29uZGltZW50dW0gbWFnbmEsIGluIGlhY3VsaXMgcXVhbS4gRHVpcyBsYW9yZWV0IG5pYmggdml0YWUgcHVydXMgdGluY2lkdW50IGlhY3VsaXMuIERvbmVjIG5lYyBhbGlxdWFtIGVsaXQuIERvbmVjIHZpdGFlIGNvbmRpbWVudHVtIG1hZ25hLCBpbiBpYWN1bGlzIHF1YW0uIER1aXMgbGFvcmVldCBuaWJoIHZpdGFlIHB1cnVzIHRpbmNpZHVudCBpYWN1bGlzLiBEb25lYyBuZWMgYWxpcXVhbSBlbGl0LiBEb25lYyB2aXRhZSBjb25kaW1lbnR1bSBtYWduYSwgaW4gaWFjdWxpcyBxdWFtLiBEdWlzIGxhb3JlZXQgbmliaCB2aXRhZSBwdXJ1cyB0aW5jaWR1bnQgaWFjdWxpcy4gRG9uZWMgbmVjIGFsaXF1YW0gZWxpdC4gRG9uZWMgdml0YWUgY29uZGltZW50dW0gbWFnbmEsIGluIGlhY3VsaXMgcXVhbS4gRHVpcyBsYW9yZWV0IG5pYmggdml0YWUgcHVydXMgdGluY2lkdW50IGlhY3VsaXMuIERvbmVjIG5lYyBhbGlxdWFtIGVsaXQuIERvbmVjIHZpdGFlIGNvbmRpbWVudHVtIG1hZ25hLCBpbiBpYWN1bGlzIHF1YW0uIER1aXMgbGFvcmVldCBuaWJoIHZpdGFlIHB1cnVzIHRpbmNpZHVudCBpYWN1bGlzLiBEb25lYyBuZWMgYWxpcXVhbSBlbGl0LiBEb25lYyB2aXRhZSBjb25kaW1lbnR1bSBtYWduYSwgaW4gaWFjdWxpcyBxdWFtLiBEdWlzIGxhb3JlZXQgbmliaCB2aXRhZSBwdXJ1cyB0aW5jaWR1bnQgaWFjdWxpcy4gRG9uZWMgbmVjIGFsaXF1YW0gZWxpdC4gRG9uZWMgdml0YWUgY29uZGltZW50dW0gbWFnbmEsIGluIGlhY3VsaXMgcXVhbS4gRHVpcyBsYW9yZWV0IG5pYmggdml0YWUgcHVydXMgdGluY2lkdW50IGlhY3VsaXMuIERvbmVjIG5lYyBhbGlxdWFtIGVsaXQuIERvbmVjIHZpdGFlIGNvbmRpbWVudHVtIG1hZ25hLCBpbiBpYWN1bGlzIHF1YW0uIER1aXMgbGFvcmVldCBuaWJoIHZpdGFlIHB1cnVzIHRpbmNpZHVudCBpYWN1bGlzLiBEb25lYyBuZWMgYWxpcXVhbSBlbGl0LiBEb25lYyB2aXRhZSBjb25kaW1lbnR1bSBtYWduYSwgaW4gaWFjdWxpcyBxdWFtLiBEdWlzIGxhb3JlZXQgbmliaCB2aXRhZSBwdXJ1cyB0aW5jaWR1bnQgaWFjdWxpcy4gRG9uZWMgbmVjIGFsaXF1YW0gZWxpdC4gRG9uZWMgdml0YWUgY29uZGltZW50dW0gbWFnbmEsIGluIGlhY3VsaXMgcXVhbS4gRHVpcyBsYW9yZWV0IG5pYmggdml0YWUgcHVydXMgdGluY2lkdW50IGlhY3VsaXMuIERvbmVjIG5lYyBhbGlxdWFtIGVsaXQuIERvbmVjIHZpdGFlIGNvbmRpbWVudHVtIG1hZ25hLCBpbiBpYWN1bGlzIHF1YW0uIER1aXMgbGFvcmVldCBuaWJoIHZpdGFlIHB1cnVzIHRpbmNpZHVudCBpYWN1bGlzLiBEb25lYyBuZWMgYWxpcXVhbSBlbGl0LiBEb25lYyB2aXRhZSBjb25kaW1lbnR1bSBtYWduYSwgaW4gaWFjdWxpcyBxdWFtLiBEdWlzIGxhb3JlZXQgbmliaCB2aXRhZSBwdXJ1cyB0aW5jaWR1bnQgaWFjdWxpcy4gRG9uZWMgbmVjIGFsaXF1YW0gZWxpdC4gRG9uZWMgdml0YWUgY29uZGltZW50dW0gbWFnbmEsIGluIGlhY3VsaXMgcXVhbS4gRHVpcyBsYW9yZWV0IG5pYmggdml0YWUgcHVydXMgdGluY2lkdW50IGlhY3VsaXMuXCJcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJBYm91dC5hcHBlbmQocDIpO1xuXG4gICAgICAgICAgICBkZWxldGVIb21lRGl2KCk7XG4gICAgICAgICAgICBkZWxldGVTaG9wRGl2KCk7XG4gICAgICAgICAgICBkZWxldGVDb250YWN0VXNEaXYoKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29udGVudENvbnRhaW5lckFib3V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQ29udGFjdFVzRGl2KCkge1xuICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVyQ29udGFjdFVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtdXMnKTtcbiAgICAgICAgaWYgKCFjb250ZW50Q29udGFpbmVyQ29udGFjdFVzKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVyQ29udGFjdFVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyQ29udGFjdFVzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtdXMnLCAnaGlkZScpO1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmQoY29udGVudENvbnRhaW5lckNvbnRhY3RVcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcDIudGV4dENvbnRlbnQgPSBcIlNldiBMZW9cIlxuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckNvbnRhY3RVcy5hcHBlbmQocDIpO1xuXG4gICAgICAgICAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHAzLnRleHRDb250ZW50ID0gXCJzZXZhLmxlb25vdkBob3RtYWlsLmNvbVwiXG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyQ29udGFjdFVzLmFwcGVuZChwMyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHA0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcDQudGV4dENvbnRlbnQgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9zZXZsZW9cIlxuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckNvbnRhY3RVcy5hcHBlbmQocDQpO1xuXG4gICAgICAgICAgICBkZWxldGVIb21lRGl2KCk7XG4gICAgICAgICAgICBkZWxldGVTaG9wRGl2KCk7XG4gICAgICAgICAgICBkZWxldGVBYm91dERpdigpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb250ZW50Q29udGFpbmVyQ29udGFjdFVzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVIb21lRGl2KCkge1xuICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVySG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJyk7XG4gICAgICAgIGlmIChjb250ZW50Q29udGFpbmVySG9tZSkge1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckhvbWUucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVTaG9wRGl2KCkge1xuICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVyU2hvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG9wJyk7XG4gICAgICAgIGlmIChjb250ZW50Q29udGFpbmVyU2hvcCkge1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lclNob3AucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVBYm91dERpdigpIHtcbiAgICAgICAgY29uc3QgY29udGVudENvbnRhaW5lckFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0Jyk7XG4gICAgICAgIGlmIChjb250ZW50Q29udGFpbmVyQWJvdXQpIHtcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJBYm91dC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUNvbnRhY3RVc0RpdigpIHtcbiAgICAgICAgY29uc3QgY29udGVudENvbnRhaW5lckNvbnRhY3RVcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LXVzJyk7XG4gICAgICAgIGlmIChjb250ZW50Q29udGFpbmVyQ29udGFjdFVzKSB7XG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyQ29udGFjdFVzLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuZXhwb3J0IHtnZW5lcmF0ZURPTX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQge2dlbmVyYXRlRE9NfSBmcm9tICcuL3BhZ2UtbG9hZGVyJztcblxuZ2VuZXJhdGVET00oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
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
        width: 80%;
        max-width: 700px;
        justify-self: center;
        display: flex;
    }


    .content-container > div {
        /* width: 400px; */
        transition: opacity 1s ease-out;
        opacity: 1;
        transform: translateX(0%);
        box-shadow: 0px 0px 100px 50px rgba(20,20,20,1);
        /* box-shadow: inset 0px 0px 100px 100px rgba(20,20,20,0.7),
                    0px 0px 100px 100px rgba(20,20,20,0.7); */
        height: fit-content;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&family=Lato:wght@100&family=Roboto:wght@100&family=Rubik:wght@300&display=swap');\n\n/* General styles */\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    font-family: 'Lato', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n    background: #333; /* Change the color to your preference */\n    /* border-radius: 6px; */\n}\n\n::-webkit-scrollbar:hover {\n    background: rgba(20, 20, 20); /* Change the color to your preference */\n}\n\n::-webkit-scrollbar-thumb:hover {\n    background: #555; /* Change the color to your preference */\n}\n\n/* Desktop screen */\n\n@media (min-width: 800px) {\n\n    .background-image {\n        background-image: url('images/rizky-subagja-1k7TnX5GAww-unsplash.jpg');\n    }\n\n    #main {\n        display: grid;\n        grid-template-rows: 1fr;\n        grid-template-columns: 300px 1fr;\n        position: relative;\n    }\n\n    .menu {\n        background-color: rgba(0, 0, 0, 0.200);\n        backdrop-filter: blur(3px);\n        z-index: 2;\n        box-shadow: 1px 0px 3px 0px rgba(20,20,20,0.2);\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n        justify-content: start;\n        position: fixed;\n        height: 100%;\n        width: 300px;\n    }\n\n    .menu-item {\n        color: white;\n        /* font-size: clamp(1rem, 2.5vw, 4rem); */\n        font-size: 35px;\n        display: block;\n        text-decoration: none;\n        /* padding: clamp(0.50rem, 1vw, 2rem) 0rem; */\n        padding: 10px;\n        /* padding: 50px; */\n        transition: opacity 400ms ease;\n        cursor: pointer;\n    }\n    \n    .menu-items {\n        /* margin-left: clamp(1rem, 3vw, 8rem); */\n        margin-left: 35px;\n        margin-bottom: 25px;\n        position: relative;\n        z-index: 3;\n        width: 100%;\n    }\n\n    /* Placeholder to create offset on menu tab to align menu-items with content-containers */\n    .placeholder {\n        height: 150px;\n        width: 100%;\n        flex-shrink: 1;\n    }\n    \n    .menu:hover .menu-item {\n        opacity: 0.5;\n    }\n    \n    .menu:hover .menu-item:hover {\n        opacity: 1;\n    }\n    \n    .menu-background-pattern {\n        height: 100%;\n        width: 100%;\n    \n        background-image: radial-gradient(\n            rgba(2255, 255, 255, 0.1) 2%,\n            transparent 12%\n        );\n        \n        background-position: 0% 0%;\n        background-size: 9.5vmin 9.5vmin;\n    \n        position: absolute;\n        left: 0px;\n        top: 0px;\n        z-index: 2;\n        transition: opacity 800ms ease, \n                    background-size 800ms ease,\n                    background-position 800ms ease;\n    }\n    \n    .menu:hover > .menu-background-pattern {\n        background-size: 12.5vmin 12.5vmin;\n        opacity: 0.7;\n    }\n    \n    .menu[data-active-index=\"0\"] > .menu-background-pattern {\n        background-position: 0% -25%;\n    }\n    \n    .menu[data-active-index=\"1\"] > .menu-background-pattern {\n        background-position: 0% -50%;\n    }\n    \n    .menu[data-active-index=\"2\"] > .menu-background-pattern {\n        background-position: 0% -75%;\n    }\n    \n    .menu[data-active-index=\"3\"] > .menu-background-pattern {\n        background-position: 0% -100%;\n    }\n    \n    .menu[data-active-index=\"0\"] ~ .background-image {\n        background-position: center 45%;\n        transition: opacity 800ms ease,\n        background-size 800ms ease,\n        background-position 800ms ease;\n    }\n      \n    .menu[data-active-index=\"1\"] ~ .background-image {\n        background-position: center 50%;\n        transition: opacity 800ms ease,\n        background-size 800ms ease,\n        background-position 800ms ease;\n    }\n    \n    .menu[data-active-index=\"2\"] ~ .background-image {\n        background-position: center 55%;\n        transition: opacity 800ms ease,\n        background-size 800ms ease,\n        background-position 800ms ease;\n    }\n    \n    .menu[data-active-index=\"3\"] ~ .background-image {\n        background-position: center 60%;\n        transition: opacity 800ms ease,\n        background-size 800ms ease,\n        background-position 800ms ease;\n    }\n    \n    .menu:hover ~ .background-image {\n        background-size: 100vmax;\n        opacity: 0.50;\n        transition: opacity 800ms ease,\n        background-size 800ms ease,\n        background-position 800ms ease;\n    }\n\n    .content {\n        display: grid;\n        justify-content: center;\n        grid-row: 1 / 2;\n        grid-column: 2 / 3;\n        grid-template-columns: 1fr;\n        /* margin-left: minmax(300px, 1fr); */\n        grid-template-rows: minmax(10px, 50px) 9fr;\n    }\n\n    .menu-logo {\n        background-image: url('images/Screenshot_2023-11-07_at_4.51.02_PM-removebg-preview.png');\n        background-size: contain;\n        background-repeat: no-repeat;\n        background-position: center;\n\n        z-index: 1;\n        height: max(10%, 50px);\n        width: 40%;\n        position: fixed;\n        grid-column: 1 / 2;\n        grid-row: 1 / 2;\n        justify-self: center;\n        border-bottom: 0.5px white solid;\n    }\n\n    .content-container {\n        position: relative;\n        grid-column: 1 / 2;\n        grid-row: 2 / 3;\n        padding: clamp(10px, 15vh, 100px) 20px 10px 20px;\n        color: white;\n        z-index: 2;\n        width: 80%;\n        max-width: 700px;\n        justify-self: center;\n        display: flex;\n    }\n\n\n    .content-container > div {\n        /* width: 400px; */\n        transition: opacity 1s ease-out;\n        opacity: 1;\n        transform: translateX(0%);\n        box-shadow: 0px 0px 100px 50px rgba(20,20,20,1);\n        /* box-shadow: inset 0px 0px 100px 100px rgba(20,20,20,0.7),\n                    0px 0px 100px 100px rgba(20,20,20,0.7); */\n        height: fit-content;\n    }\n\n    .content-container > div.hide {\n        opacity: 0;\n        /* transform: translateX(200%); */\n    }\n\n    .content-container > div {\n    /* position: absolute; */\n    width: 100%;\n    /* left: 50%;\n    top: 50%; */\n    /* transform: translate(-50%, -50%); */\n    padding: 15px;\n    --b: 0.5px; /* thickness of the border */\n    --c: rgb(255, 255, 255); /* color of the border */\n    --w: 100px; /* width of border */\n    \n    border: var(--b) solid #0000;\n    --_g: #0000 90deg,var(--c) 0;\n    --_p: var(--w) var(--w) border-box no-repeat;\n    background:\n        conic-gradient(from 90deg  at top    var(--b) left  var(--b),var(--_g)) 0    0    / var(--_p),\n        conic-gradient(from 180deg at top    var(--b) right var(--b),var(--_g)) 100% 0    / var(--_p),\n        conic-gradient(from 0deg   at bottom var(--b) left  var(--b),var(--_g)) 0    100% / var(--_p),\n        conic-gradient(from -90deg at bottom var(--b) right var(--b),var(--_g)) 100% 100% / var(--_p);\n        \n        background-color: rgba(20, 20, 20, 0.8);\n    }\n\n    .home p:first-child {\n    margin-bottom: 30px;\n    }\n\n    .product-item-picture {\n        width: 350px;\n        height: auto;\n        overflow: hidden;\n    }\n\n    .product-item-picture img {\n        max-width: 100%;\n        max-height: 100%;\n\n        width: auto;\n        height: auto;\n    }\n\n}\n\n\n/* Mobile screen */\n\n@media (max-width: 800px) {\n\n    .background-image {\n        background-image: url('images/rizky-subagja-1k7TnX5GAww-unsplash.jpg');\n    }\n\n}\n\n\n/* Any screen */\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(20, 20, 20);\n    overflow-x: hidden;\n}\n\n#main {\n    width: 100%;\n    height: 100%;\n}\n\n.background-image {\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    left: 0px;\n    top: 0px;\n    background-position: center 50%;\n    background-size: 110vmax;\n    background-repeat: no-repeat;\n\n    opacity: 0.75;\n    filter: blur(0px);\n}\n\np {\n    font-size: clamp(1rem, 2vw, 4rem);\n    /* font-weight: 500; */\n    line-height: 50px;\n    text-align: center;\n}"],"sourceRoot":""}]);
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
            p1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor imperdiet consectetur. Nam posuere, diam sed viverra sollicitudin, ipsum erat malesuada velit, eget dictum arcu arcu id eros. Etiam finibus pellentesque nisl, vel posuere enim suscipit et. Donec pellentesque porttitor neque sed molestie. Nunc ac quam non dolor faucibus congue et sed lorem. Curabitur et hendrerit diam, ut tincidunt purus. Maecenas posuere ante id urna vulputate ultricies. Praesent venenatis consectetur nisl, at sagittis lacus accumsan sit amet. Suspendisse nec bibendum ex. Suspendisse vitae tellus at dolor tristique fringilla.";
            contentContainerAbout.append(p1);
            
            const p2 = document.createElement('p');
            p2.textContent = "Fusce ac dui tincidunt, ullamcorper ex vitae, volutpat lectus. Praesent lacinia nibh id turpis pellentesque sollicitudin. Curabitur pulvinar aliquet risus sit amet imperdiet. Aenean a eros sodales, imperdiet libero et, ultrices dolor. Vivamus elit neque, posuere ac sem in, rutrum faucibus dolor. Nunc aliquam metus mauris. Nam sollicitudin dolor nisl, eget consequat velit malesuada et. Phasellus nec mattis sem. Nam odio lorem, iaculis sed diam non, vehicula hendrerit ex. Proin elit ex, consectetur vel consectetur id, pulvinar a metus. Fusce finibus vulputate eleifend. In non quam at ligula bibendum scelerisque at quis nulla. Fusce eleifend eget est eget tristique. Mauris semper sodales nibh, sed vestibulum velit luctus sed. Sed non metus tempus, finibus ipsum nec, eleifend nibh. Morbi non lorem eget lacus accumsan viverra a eget neque.";
            contentContainerAbout.append(p2);

            const p3 = document.createElement('p');
            p3.textContent = "Morbi maximus nibh sapien, consectetur luctus sapien congue nec. Vivamus in purus fringilla, consectetur neque et, tincidunt odio. Sed euismod dapibus odio nec ornare. Nullam id fermentum justo, eget facilisis purus. Sed nec mi eu lectus volutpat tristique. In at risus nunc. Quisque vestibulum fringilla dignissim. Cras nunc est, mollis eget nunc porttitor, mattis semper enim.";
            contentContainerAbout.append(p3);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaFBBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDb0I7O0FBRTFDLHlEQUFXLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9wYWdlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3Jpemt5LXN1YmFnamEtMWs3VG5YNUdBd3ctdW5zcGxhc2guanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL1NjcmVlbnNob3RfMjAyMy0xMS0wN19hdF80LjUxLjAyX1BNLXJlbW92ZWJnLXByZXZpZXcucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6d2dodEAxMDAmZmFtaWx5PUxhdG86d2dodEAxMDAmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMCZmYW1pbHk9UnViaWs6d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEdlbmVyYWwgc3R5bGVzICovXG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDEwcHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICMzMzM7IC8qIENoYW5nZSB0aGUgY29sb3IgdG8geW91ciBwcmVmZXJlbmNlICovXG4gICAgLyogYm9yZGVyLXJhZGl1czogNnB4OyAqL1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwLCAyMCwgMjApOyAvKiBDaGFuZ2UgdGhlIGNvbG9yIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTU1OyAvKiBDaGFuZ2UgdGhlIGNvbG9yIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xufVxuXG4vKiBEZXNrdG9wIHNjcmVlbiAqL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcblxuICAgIC5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIH1cblxuICAgICNtYWluIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLm1lbnUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjAwKTtcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAwcHggM3B4IDBweCByZ2JhKDIwLDIwLDIwLDAuMik7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgfVxuXG4gICAgLm1lbnUtaXRlbSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgLyogZm9udC1zaXplOiBjbGFtcCgxcmVtLCAyLjV2dywgNHJlbSk7ICovXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgLyogcGFkZGluZzogY2xhbXAoMC41MHJlbSwgMXZ3LCAycmVtKSAwcmVtOyAqL1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAvKiBwYWRkaW5nOiA1MHB4OyAqL1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGVhc2U7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgXG4gICAgLm1lbnUtaXRlbXMge1xuICAgICAgICAvKiBtYXJnaW4tbGVmdDogY2xhbXAoMXJlbSwgM3Z3LCA4cmVtKTsgKi9cbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLyogUGxhY2Vob2xkZXIgdG8gY3JlYXRlIG9mZnNldCBvbiBtZW51IHRhYiB0byBhbGlnbiBtZW51LWl0ZW1zIHdpdGggY29udGVudC1jb250YWluZXJzICovXG4gICAgLnBsYWNlaG9sZGVyIHtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAxO1xuICAgIH1cbiAgICBcbiAgICAubWVudTpob3ZlciAubWVudS1pdGVtIHtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgICBcbiAgICAubWVudTpob3ZlciAubWVudS1pdGVtOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgXG4gICAgLm1lbnUtYmFja2dyb3VuZC1wYXR0ZXJuIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICBcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KFxuICAgICAgICAgICAgcmdiYSgyMjU1LCAyNTUsIDI1NSwgMC4xKSAyJSxcbiAgICAgICAgICAgIHRyYW5zcGFyZW50IDEyJVxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogOS41dm1pbiA5LjV2bWluO1xuICAgIFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgODAwbXMgZWFzZSwgXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZSA4MDBtcyBlYXNlLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uIDgwMG1zIGVhc2U7XG4gICAgfVxuICAgIFxuICAgIC5tZW51OmhvdmVyID4gLm1lbnUtYmFja2dyb3VuZC1wYXR0ZXJuIHtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMi41dm1pbiAxMi41dm1pbjtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgIH1cbiAgICBcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cIjBcIl0gPiAubWVudS1iYWNrZ3JvdW5kLXBhdHRlcm4ge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAtMjUlO1xuICAgIH1cbiAgICBcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cIjFcIl0gPiAubWVudS1iYWNrZ3JvdW5kLXBhdHRlcm4ge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAtNTAlO1xuICAgIH1cbiAgICBcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cIjJcIl0gPiAubWVudS1iYWNrZ3JvdW5kLXBhdHRlcm4ge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAtNzUlO1xuICAgIH1cbiAgICBcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cIjNcIl0gPiAubWVudS1iYWNrZ3JvdW5kLXBhdHRlcm4ge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAtMTAwJTtcbiAgICB9XG4gICAgXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XCIwXCJdIH4gLmJhY2tncm91bmQtaW1hZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgNDUlO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDgwMG1zIGVhc2UsXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZSA4MDBtcyBlYXNlLFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uIDgwMG1zIGVhc2U7XG4gICAgfVxuICAgICAgXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XCIxXCJdIH4gLmJhY2tncm91bmQtaW1hZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgNTAlO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDgwMG1zIGVhc2UsXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZSA4MDBtcyBlYXNlLFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uIDgwMG1zIGVhc2U7XG4gICAgfVxuICAgIFxuICAgIC5tZW51W2RhdGEtYWN0aXZlLWluZGV4PVwiMlwiXSB+IC5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDU1JTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA4MDBtcyBlYXNlLFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemUgODAwbXMgZWFzZSxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbiA4MDBtcyBlYXNlO1xuICAgIH1cbiAgICBcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cIjNcIl0gfiAuYmFja2dyb3VuZC1pbWFnZSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciA2MCU7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgODAwbXMgZWFzZSxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplIDgwMG1zIGVhc2UsXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24gODAwbXMgZWFzZTtcbiAgICB9XG4gICAgXG4gICAgLm1lbnU6aG92ZXIgfiAuYmFja2dyb3VuZC1pbWFnZSB7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwdm1heDtcbiAgICAgICAgb3BhY2l0eTogMC41MDtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA4MDBtcyBlYXNlLFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemUgODAwbXMgZWFzZSxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbiA4MDBtcyBlYXNlO1xuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgLyogbWFyZ2luLWxlZnQ6IG1pbm1heCgzMDBweCwgMWZyKTsgKi9cbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoMTBweCwgNTBweCkgOWZyO1xuICAgIH1cblxuICAgIC5tZW51LWxvZ28ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGhlaWdodDogbWF4KDEwJSwgNTBweCk7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgICAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICBib3JkZXItYm90dG9tOiAwLjVweCB3aGl0ZSBzb2xpZDtcbiAgICB9XG5cbiAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgICAgICBwYWRkaW5nOiBjbGFtcCgxMHB4LCAxNXZoLCAxMDBweCkgMjBweCAxMHB4IDIwcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG5cbiAgICAuY29udGVudC1jb250YWluZXIgPiBkaXYge1xuICAgICAgICAvKiB3aWR0aDogNDAwcHg7ICovXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1vdXQ7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTAwcHggNTBweCByZ2JhKDIwLDIwLDIwLDEpO1xuICAgICAgICAvKiBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDEwMHB4IDEwMHB4IHJnYmEoMjAsMjAsMjAsMC43KSxcbiAgICAgICAgICAgICAgICAgICAgMHB4IDBweCAxMDBweCAxMDBweCByZ2JhKDIwLDIwLDIwLDAuNyk7ICovXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQtY29udGFpbmVyID4gZGl2LmhpZGUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwJSk7ICovXG4gICAgfVxuXG4gICAgLmNvbnRlbnQtY29udGFpbmVyID4gZGl2IHtcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogbGVmdDogNTAlO1xuICAgIHRvcDogNTAlOyAqL1xuICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAqL1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgLS1iOiAwLjVweDsgLyogdGhpY2tuZXNzIG9mIHRoZSBib3JkZXIgKi9cbiAgICAtLWM6IHJnYigyNTUsIDI1NSwgMjU1KTsgLyogY29sb3Igb2YgdGhlIGJvcmRlciAqL1xuICAgIC0tdzogMTAwcHg7IC8qIHdpZHRoIG9mIGJvcmRlciAqL1xuICAgIFxuICAgIGJvcmRlcjogdmFyKC0tYikgc29saWQgIzAwMDA7XG4gICAgLS1fZzogIzAwMDAgOTBkZWcsdmFyKC0tYykgMDtcbiAgICAtLV9wOiB2YXIoLS13KSB2YXIoLS13KSBib3JkZXItYm94IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kOlxuICAgICAgICBjb25pYy1ncmFkaWVudChmcm9tIDkwZGVnICBhdCB0b3AgICAgdmFyKC0tYikgbGVmdCAgdmFyKC0tYiksdmFyKC0tX2cpKSAwICAgIDAgICAgLyB2YXIoLS1fcCksXG4gICAgICAgIGNvbmljLWdyYWRpZW50KGZyb20gMTgwZGVnIGF0IHRvcCAgICB2YXIoLS1iKSByaWdodCB2YXIoLS1iKSx2YXIoLS1fZykpIDEwMCUgMCAgICAvIHZhcigtLV9wKSxcbiAgICAgICAgY29uaWMtZ3JhZGllbnQoZnJvbSAwZGVnICAgYXQgYm90dG9tIHZhcigtLWIpIGxlZnQgIHZhcigtLWIpLHZhcigtLV9nKSkgMCAgICAxMDAlIC8gdmFyKC0tX3ApLFxuICAgICAgICBjb25pYy1ncmFkaWVudChmcm9tIC05MGRlZyBhdCBib3R0b20gdmFyKC0tYikgcmlnaHQgdmFyKC0tYiksdmFyKC0tX2cpKSAxMDAlIDEwMCUgLyB2YXIoLS1fcCk7XG4gICAgICAgIFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMCwgMjAsIDAuOCk7XG4gICAgfVxuXG4gICAgLmhvbWUgcDpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1pdGVtLXBpY3R1cmUge1xuICAgICAgICB3aWR0aDogMzUwcHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1pdGVtLXBpY3R1cmUgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuXG59XG5cblxuLyogTW9iaWxlIHNjcmVlbiAqL1xuXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcblxuICAgIC5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIH1cblxufVxuXG5cbi8qIEFueSBzY3JlZW4gKi9cblxuYm9keSB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjAsIDIwKTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbiNtYWluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IDBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgNTAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTEwdm1heDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgb3BhY2l0eTogMC43NTtcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbn1cblxucCB7XG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAydncsIDRyZW0pO1xuICAgIC8qIGZvbnQtd2VpZ2h0OiA1MDA7ICovXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUEsbUJBQW1COztBQUVuQjtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksb0VBQW9FO0FBQ3hFOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCLEVBQUUsd0NBQXdDO0lB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Rzs7UUFFN0YsdUNBQXVDO0lBQzNDOztJQUVBO0lBQ0EsbUJBQW1CO0lBQ25COztJQUVBO1FBQ0ksWUFBWTtRQUNaLFlBQVk7UUFDWixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCOztRQUVoQixXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7QUFFSjs7O0FBR0Esa0JBQWtCOztBQUVsQjs7SUFFSTtRQUNJLHlEQUFzRTtJQUMxRTs7QUFFSjs7O0FBR0EsZUFBZTs7QUFFZjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsU0FBUztJQUNULFFBQVE7SUFDUiwrQkFBK0I7SUFDL0Isd0JBQXdCO0lBQ3hCLDRCQUE0Qjs7SUFFNUIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6d2dodEAxMDAmZmFtaWx5PUxhdG86d2dodEAxMDAmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMCZmYW1pbHk9UnViaWs6d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuLyogR2VuZXJhbCBzdHlsZXMgKi9cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDEwcHg7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMzMzOyAvKiBDaGFuZ2UgdGhlIGNvbG9yIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiA2cHg7ICovXFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwLCAyMCwgMjApOyAvKiBDaGFuZ2UgdGhlIGNvbG9yIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzU1NTsgLyogQ2hhbmdlIHRoZSBjb2xvciB0byB5b3VyIHByZWZlcmVuY2UgKi9cXG59XFxuXFxuLyogRGVza3RvcCBzY3JlZW4gKi9cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcXG5cXG4gICAgLmJhY2tncm91bmQtaW1hZ2Uge1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZXMvcml6a3ktc3ViYWdqYS0xazdUblg1R0F3dy11bnNwbGFzaC5qcGcnKTtcXG4gICAgfVxcblxcbiAgICAjbWFpbiB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcblxcbiAgICAubWVudSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjAwKTtcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbiAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAwcHggM3B4IDBweCByZ2JhKDIwLDIwLDIwLDAuMik7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICB9XFxuXFxuICAgIC5tZW51LWl0ZW0ge1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgLyogZm9udC1zaXplOiBjbGFtcCgxcmVtLCAyLjV2dywgNHJlbSk7ICovXFxuICAgICAgICBmb250LXNpemU6IDM1cHg7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgIC8qIHBhZGRpbmc6IGNsYW1wKDAuNTByZW0sIDF2dywgMnJlbSkgMHJlbTsgKi9cXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICAvKiBwYWRkaW5nOiA1MHB4OyAqL1xcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtcyBlYXNlO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuICAgIFxcbiAgICAubWVudS1pdGVtcyB7XFxuICAgICAgICAvKiBtYXJnaW4tbGVmdDogY2xhbXAoMXJlbSwgM3Z3LCA4cmVtKTsgKi9cXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHotaW5kZXg6IDM7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAvKiBQbGFjZWhvbGRlciB0byBjcmVhdGUgb2Zmc2V0IG9uIG1lbnUgdGFiIHRvIGFsaWduIG1lbnUtaXRlbXMgd2l0aCBjb250ZW50LWNvbnRhaW5lcnMgKi9cXG4gICAgLnBsYWNlaG9sZGVyIHtcXG4gICAgICAgIGhlaWdodDogMTUwcHg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGZsZXgtc2hyaW5rOiAxO1xcbiAgICB9XFxuICAgIFxcbiAgICAubWVudTpob3ZlciAubWVudS1pdGVtIHtcXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1lbnU6aG92ZXIgLm1lbnUtaXRlbTpob3ZlciB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICAgIFxcbiAgICAubWVudS1iYWNrZ3JvdW5kLXBhdHRlcm4ge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIFxcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KFxcbiAgICAgICAgICAgIHJnYmEoMjI1NSwgMjU1LCAyNTUsIDAuMSkgMiUsXFxuICAgICAgICAgICAgdHJhbnNwYXJlbnQgMTIlXFxuICAgICAgICApO1xcbiAgICAgICAgXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAwJTtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogOS41dm1pbiA5LjV2bWluO1xcbiAgICBcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IDBweDtcXG4gICAgICAgIHRvcDogMHB4O1xcbiAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgODAwbXMgZWFzZSwgXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemUgODAwbXMgZWFzZSxcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24gODAwbXMgZWFzZTtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1lbnU6aG92ZXIgPiAubWVudS1iYWNrZ3JvdW5kLXBhdHRlcm4ge1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMi41dm1pbiAxMi41dm1pbjtcXG4gICAgICAgIG9wYWNpdHk6IDAuNztcXG4gICAgfVxcbiAgICBcXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XFxcIjBcXFwiXSA+IC5tZW51LWJhY2tncm91bmQtcGF0dGVybiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAtMjUlO1xcbiAgICB9XFxuICAgIFxcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cXFwiMVxcXCJdID4gLm1lbnUtYmFja2dyb3VuZC1wYXR0ZXJuIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIC01MCU7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51W2RhdGEtYWN0aXZlLWluZGV4PVxcXCIyXFxcIl0gPiAubWVudS1iYWNrZ3JvdW5kLXBhdHRlcm4ge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgLTc1JTtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XFxcIjNcXFwiXSA+IC5tZW51LWJhY2tncm91bmQtcGF0dGVybiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAtMTAwJTtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XFxcIjBcXFwiXSB+IC5iYWNrZ3JvdW5kLWltYWdlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciA0NSU7XFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDgwMG1zIGVhc2UsXFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemUgODAwbXMgZWFzZSxcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24gODAwbXMgZWFzZTtcXG4gICAgfVxcbiAgICAgIFxcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cXFwiMVxcXCJdIH4gLmJhY2tncm91bmQtaW1hZ2Uge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDUwJTtcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgODAwbXMgZWFzZSxcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZSA4MDBtcyBlYXNlLFxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbiA4MDBtcyBlYXNlO1xcbiAgICB9XFxuICAgIFxcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cXFwiMlxcXCJdIH4gLmJhY2tncm91bmQtaW1hZ2Uge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDU1JTtcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgODAwbXMgZWFzZSxcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZSA4MDBtcyBlYXNlLFxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbiA4MDBtcyBlYXNlO1xcbiAgICB9XFxuICAgIFxcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cXFwiM1xcXCJdIH4gLmJhY2tncm91bmQtaW1hZ2Uge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDYwJTtcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgODAwbXMgZWFzZSxcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZSA4MDBtcyBlYXNlLFxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbiA4MDBtcyBlYXNlO1xcbiAgICB9XFxuICAgIFxcbiAgICAubWVudTpob3ZlciB+IC5iYWNrZ3JvdW5kLWltYWdlIHtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwdm1heDtcXG4gICAgICAgIG9wYWNpdHk6IDAuNTA7XFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDgwMG1zIGVhc2UsXFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemUgODAwbXMgZWFzZSxcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24gODAwbXMgZWFzZTtcXG4gICAgfVxcblxcbiAgICAuY29udGVudCB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIC8qIG1hcmdpbi1sZWZ0OiBtaW5tYXgoMzAwcHgsIDFmcik7ICovXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heCgxMHB4LCA1MHB4KSA5ZnI7XFxuICAgIH1cXG5cXG4gICAgLm1lbnUtbG9nbyB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9TY3JlZW5zaG90XzIwMjMtMTEtMDdfYXRfNC41MS4wMl9QTS1yZW1vdmViZy1wcmV2aWV3LnBuZycpO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG5cXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgICBoZWlnaHQ6IG1heCgxMCUsIDUwcHgpO1xcbiAgICAgICAgd2lkdGg6IDQwJTtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggd2hpdGUgc29saWQ7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgIHBhZGRpbmc6IGNsYW1wKDEwcHgsIDE1dmgsIDEwMHB4KSAyMHB4IDEwcHggMjBweDtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcblxcbiAgICAuY29udGVudC1jb250YWluZXIgPiBkaXYge1xcbiAgICAgICAgLyogd2lkdGg6IDQwMHB4OyAqL1xcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLW91dDtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMDBweCA1MHB4IHJnYmEoMjAsMjAsMjAsMSk7XFxuICAgICAgICAvKiBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDEwMHB4IDEwMHB4IHJnYmEoMjAsMjAsMjAsMC43KSxcXG4gICAgICAgICAgICAgICAgICAgIDBweCAwcHggMTAwcHggMTAwcHggcmdiYSgyMCwyMCwyMCwwLjcpOyAqL1xcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgfVxcblxcbiAgICAuY29udGVudC1jb250YWluZXIgPiBkaXYuaGlkZSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMCUpOyAqL1xcbiAgICB9XFxuXFxuICAgIC5jb250ZW50LWNvbnRhaW5lciA+IGRpdiB7XFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIGxlZnQ6IDUwJTtcXG4gICAgdG9wOiA1MCU7ICovXFxuICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAqL1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICAtLWI6IDAuNXB4OyAvKiB0aGlja25lc3Mgb2YgdGhlIGJvcmRlciAqL1xcbiAgICAtLWM6IHJnYigyNTUsIDI1NSwgMjU1KTsgLyogY29sb3Igb2YgdGhlIGJvcmRlciAqL1xcbiAgICAtLXc6IDEwMHB4OyAvKiB3aWR0aCBvZiBib3JkZXIgKi9cXG4gICAgXFxuICAgIGJvcmRlcjogdmFyKC0tYikgc29saWQgIzAwMDA7XFxuICAgIC0tX2c6ICMwMDAwIDkwZGVnLHZhcigtLWMpIDA7XFxuICAgIC0tX3A6IHZhcigtLXcpIHZhcigtLXcpIGJvcmRlci1ib3ggbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kOlxcbiAgICAgICAgY29uaWMtZ3JhZGllbnQoZnJvbSA5MGRlZyAgYXQgdG9wICAgIHZhcigtLWIpIGxlZnQgIHZhcigtLWIpLHZhcigtLV9nKSkgMCAgICAwICAgIC8gdmFyKC0tX3ApLFxcbiAgICAgICAgY29uaWMtZ3JhZGllbnQoZnJvbSAxODBkZWcgYXQgdG9wICAgIHZhcigtLWIpIHJpZ2h0IHZhcigtLWIpLHZhcigtLV9nKSkgMTAwJSAwICAgIC8gdmFyKC0tX3ApLFxcbiAgICAgICAgY29uaWMtZ3JhZGllbnQoZnJvbSAwZGVnICAgYXQgYm90dG9tIHZhcigtLWIpIGxlZnQgIHZhcigtLWIpLHZhcigtLV9nKSkgMCAgICAxMDAlIC8gdmFyKC0tX3ApLFxcbiAgICAgICAgY29uaWMtZ3JhZGllbnQoZnJvbSAtOTBkZWcgYXQgYm90dG9tIHZhcigtLWIpIHJpZ2h0IHZhcigtLWIpLHZhcigtLV9nKSkgMTAwJSAxMDAlIC8gdmFyKC0tX3ApO1xcbiAgICAgICAgXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMCwgMjAsIDAuOCk7XFxuICAgIH1cXG5cXG4gICAgLmhvbWUgcDpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2R1Y3QtaXRlbS1waWN0dXJlIHtcXG4gICAgICAgIHdpZHRoOiAzNTBweDtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIH1cXG5cXG4gICAgLnByb2R1Y3QtaXRlbS1waWN0dXJlIGltZyB7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcblxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgIH1cXG5cXG59XFxuXFxuXFxuLyogTW9iaWxlIHNjcmVlbiAqL1xcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcblxcbiAgICAuYmFja2dyb3VuZC1pbWFnZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9yaXpreS1zdWJhZ2phLTFrN1RuWDVHQXd3LXVuc3BsYXNoLmpwZycpO1xcbiAgICB9XFxuXFxufVxcblxcblxcbi8qIEFueSBzY3JlZW4gKi9cXG5cXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMCwgMjApO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbiNtYWluIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmJhY2tncm91bmQtaW1hZ2Uge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciA1MCU7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTEwdm1heDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXG4gICAgb3BhY2l0eTogMC43NTtcXG4gICAgZmlsdGVyOiBibHVyKDBweCk7XFxufVxcblxcbnAge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDJ2dywgNHJlbSk7XFxuICAgIC8qIGZvbnQtd2VpZ2h0OiA1MDA7ICovXFxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBnZW5lcmF0ZURPTSgpIHtcblxuICAgIC8vIEJvZHkgYW5kIG1haW4gZGl2XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5pZCA9ICdtYWluJztcbiAgICBib2R5LmFwcGVuZChtYWluKTtcblxuICAgIC8vIE1lbnUgZGl2XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIG1haW4uYXBwZW5kKG1lbnUpO1xuICAgIFxuICAgIC8vIEJhY2tncm91bmQgaW1hZ2VcbiAgICBjb25zdCBiYWNrZ3JvdW5kSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiYWNrZ3JvdW5kSW1hZ2UuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZC1pbWFnZScpO1xuICAgIG1haW4uYXBwZW5kKGJhY2tncm91bmRJbWFnZSk7XG5cbiAgICBjb25zdCBtZW51QmFja2dyb3VuZFBhdHRlcm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51QmFja2dyb3VuZFBhdHRlcm4uY2xhc3NMaXN0LmFkZCgnbWVudS1iYWNrZ3JvdW5kLXBhdHRlcm4nKTtcbiAgICBtZW51LmFwcGVuZChtZW51QmFja2dyb3VuZFBhdHRlcm4pO1xuXG4gICAgY29uc3QgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGFjZWhvbGRlci5jbGFzc0xpc3QuYWRkKCdwbGFjZWhvbGRlcicpO1xuICAgIG1lbnUuYXBwZW5kKHBsYWNlaG9sZGVyKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtcy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW1zJyk7XG4gICAgbWVudS5hcHBlbmQobWVudUl0ZW1zKTtcbiAgICBcbiAgICBjb25zdCBtZW51SXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbTEuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgbWVudUl0ZW0xLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIG1lbnVJdGVtcy5hcHBlbmQobWVudUl0ZW0xKTtcbiAgICBtZW51SXRlbTEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZUhvbWVEaXYoKTtcbiAgICB9KVxuICAgIFxuICAgIGNvbnN0IG1lbnVJdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtMi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBtZW51SXRlbTIudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgbWVudUl0ZW1zLmFwcGVuZChtZW51SXRlbTIpO1xuICAgIG1lbnVJdGVtMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY3JlYXRlU2hvcERpdigpO1xuICAgIH0pXG4gICAgXG4gICAgY29uc3QgbWVudUl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW0zLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIG1lbnVJdGVtMy50ZXh0Q29udGVudCA9ICdBYm91dCc7XG4gICAgbWVudUl0ZW1zLmFwcGVuZChtZW51SXRlbTMpO1xuICAgIG1lbnVJdGVtMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY3JlYXRlQWJvdXREaXYoKTtcbiAgICB9KVxuICAgIFxuICAgIGNvbnN0IG1lbnVJdGVtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtNC5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBtZW51SXRlbTQudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyc7XG4gICAgbWVudUl0ZW1zLmFwcGVuZChtZW51SXRlbTQpO1xuICAgIG1lbnVJdGVtNC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY3JlYXRlQ29udGFjdFVzRGl2KCk7XG4gICAgfSlcbiAgICBcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lbnUtaXRlbScpKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBpdGVtLm9ubW91c2VvdmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgbWVudS5kYXRhc2V0LmFjdGl2ZUluZGV4ID0gaW5kZXg7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gQ29udGVudCBkaXZcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG4gICAgbWFpbi5hcHBlbmQoY29udGVudCk7XG5cbiAgICBjb25zdCBtZW51TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVMb2dvLmNsYXNzTGlzdC5hZGQoJ21lbnUtbG9nbycpO1xuICAgIGNvbnRlbnQuYXBwZW5kKG1lbnVMb2dvKTtcblxuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtY29udGFpbmVyJyk7XG4gICAgY29udGVudC5hcHBlbmQoY29udGVudENvbnRhaW5lcik7XG4gICAgXG4gICAgY3JlYXRlSG9tZURpdigpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlSG9tZURpdigpIHtcbiAgICAgICAgY29uc3QgY29udGVudENvbnRhaW5lckhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xuICAgICAgICBpZiAoIWNvbnRlbnRDb250YWluZXJIb21lKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVySG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScsICdoaWRlJyk7XG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZChjb250ZW50Q29udGFpbmVySG9tZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcDEudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gb3VyIGNvZmZlZSByZWFsbVwiXG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVySG9tZS5hcHBlbmQocDEpO1xuXG4gICAgICAgICAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHAyLnRleHRDb250ZW50ID0gXCJXb3JraW5nIGhvdXJzOlwiXG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVySG9tZS5hcHBlbmQocDIpO1xuXG4gICAgICAgICAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHAzLnRleHRDb250ZW50ID0gXCJNb25kYXkgLSBGcmlkYXk6IDZhbSAtIDVwbVwiXG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVySG9tZS5hcHBlbmQocDMpO1xuXG4gICAgICAgICAgICBjb25zdCBwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHA0LnRleHRDb250ZW50ID0gXCJTYXR1cmRheSAtIFN1bmRheSA4YW0gLSA0cG1cIlxuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckhvbWUuYXBwZW5kKHA0KTtcblxuICAgICAgICAgICAgZGVsZXRlU2hvcERpdigpO1xuICAgICAgICAgICAgZGVsZXRlQWJvdXREaXYoKTtcbiAgICAgICAgICAgIGRlbGV0ZUNvbnRhY3RVc0RpdigpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb250ZW50Q29udGFpbmVySG9tZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNob3BEaXYoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXJTaG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3AnKTtcbiAgICAgICAgaWYgKCFjb250ZW50Q29udGFpbmVyU2hvcCkge1xuICAgICAgICAgICAgY29uc3QgY29udGVudENvbnRhaW5lclNob3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJTaG9wLmNsYXNzTGlzdC5hZGQoJ3Nob3AnLCAnaGlkZScpO1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmQoY29udGVudENvbnRhaW5lclNob3ApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0SXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2R1Y3RJdGVtMS5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LWl0ZW0nKTtcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJTaG9wLmFwcGVuZChwcm9kdWN0SXRlbTEpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvZHVjdE5hbWUuY2xhc3NMaXN0LmFkZCgncHJvZHVjdC1pdGVtLW5hbWUnKTtcbiAgICAgICAgICAgIHByb2R1Y3RJdGVtMS5hcHBlbmQocHJvZHVjdE5hbWUpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0UGljdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvZHVjdFBpY3R1cmUuY2xhc3NMaXN0LmFkZCgncHJvZHVjdC1pdGVtLXBpY3R1cmUnKTtcbiAgICAgICAgICAgIHByb2R1Y3RJdGVtMS5hcHBlbmQocHJvZHVjdFBpY3R1cmUpO1xuXG4gICAgICAgICAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGltYWdlRWxlbWVudC5zcmMgPSAnaW1hZ2VzL2FtZXJpY2Fuby5qcGcnXG4gICAgICAgICAgICBwcm9kdWN0UGljdHVyZS5hcHBlbmQoaW1hZ2VFbGVtZW50KTtcblxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9kdWN0UHJpY2UuY2xhc3NMaXN0LmFkZCgncHJvZHVjdC1pdGVtLXByaWNlJyk7XG4gICAgICAgICAgICBwcm9kdWN0SXRlbTEuYXBwZW5kKHByb2R1Y3RQcmljZSk7XG4gICAgICAgIFxuXG4gICAgICAgICAgICBkZWxldGVIb21lRGl2KCk7XG4gICAgICAgICAgICBkZWxldGVBYm91dERpdigpO1xuICAgICAgICAgICAgZGVsZXRlQ29udGFjdFVzRGl2KCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJTaG9wLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQWJvdXREaXYoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXJBYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dCcpO1xuICAgICAgICBpZiAoIWNvbnRlbnRDb250YWluZXJBYm91dCkge1xuICAgICAgICAgICAgY29uc3QgY29udGVudENvbnRhaW5lckFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyQWJvdXQuY2xhc3NMaXN0LmFkZCgnYWJvdXQnLCAnaGlkZScpO1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmQoY29udGVudENvbnRhaW5lckFib3V0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwMS50ZXh0Q29udGVudCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gU2VkIGF1Y3RvciBpbXBlcmRpZXQgY29uc2VjdGV0dXIuIE5hbSBwb3N1ZXJlLCBkaWFtIHNlZCB2aXZlcnJhIHNvbGxpY2l0dWRpbiwgaXBzdW0gZXJhdCBtYWxlc3VhZGEgdmVsaXQsIGVnZXQgZGljdHVtIGFyY3UgYXJjdSBpZCBlcm9zLiBFdGlhbSBmaW5pYnVzIHBlbGxlbnRlc3F1ZSBuaXNsLCB2ZWwgcG9zdWVyZSBlbmltIHN1c2NpcGl0IGV0LiBEb25lYyBwZWxsZW50ZXNxdWUgcG9ydHRpdG9yIG5lcXVlIHNlZCBtb2xlc3RpZS4gTnVuYyBhYyBxdWFtIG5vbiBkb2xvciBmYXVjaWJ1cyBjb25ndWUgZXQgc2VkIGxvcmVtLiBDdXJhYml0dXIgZXQgaGVuZHJlcml0IGRpYW0sIHV0IHRpbmNpZHVudCBwdXJ1cy4gTWFlY2VuYXMgcG9zdWVyZSBhbnRlIGlkIHVybmEgdnVscHV0YXRlIHVsdHJpY2llcy4gUHJhZXNlbnQgdmVuZW5hdGlzIGNvbnNlY3RldHVyIG5pc2wsIGF0IHNhZ2l0dGlzIGxhY3VzIGFjY3Vtc2FuIHNpdCBhbWV0LiBTdXNwZW5kaXNzZSBuZWMgYmliZW5kdW0gZXguIFN1c3BlbmRpc3NlIHZpdGFlIHRlbGx1cyBhdCBkb2xvciB0cmlzdGlxdWUgZnJpbmdpbGxhLlwiO1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckFib3V0LmFwcGVuZChwMSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcDIudGV4dENvbnRlbnQgPSBcIkZ1c2NlIGFjIGR1aSB0aW5jaWR1bnQsIHVsbGFtY29ycGVyIGV4IHZpdGFlLCB2b2x1dHBhdCBsZWN0dXMuIFByYWVzZW50IGxhY2luaWEgbmliaCBpZCB0dXJwaXMgcGVsbGVudGVzcXVlIHNvbGxpY2l0dWRpbi4gQ3VyYWJpdHVyIHB1bHZpbmFyIGFsaXF1ZXQgcmlzdXMgc2l0IGFtZXQgaW1wZXJkaWV0LiBBZW5lYW4gYSBlcm9zIHNvZGFsZXMsIGltcGVyZGlldCBsaWJlcm8gZXQsIHVsdHJpY2VzIGRvbG9yLiBWaXZhbXVzIGVsaXQgbmVxdWUsIHBvc3VlcmUgYWMgc2VtIGluLCBydXRydW0gZmF1Y2lidXMgZG9sb3IuIE51bmMgYWxpcXVhbSBtZXR1cyBtYXVyaXMuIE5hbSBzb2xsaWNpdHVkaW4gZG9sb3IgbmlzbCwgZWdldCBjb25zZXF1YXQgdmVsaXQgbWFsZXN1YWRhIGV0LiBQaGFzZWxsdXMgbmVjIG1hdHRpcyBzZW0uIE5hbSBvZGlvIGxvcmVtLCBpYWN1bGlzIHNlZCBkaWFtIG5vbiwgdmVoaWN1bGEgaGVuZHJlcml0IGV4LiBQcm9pbiBlbGl0IGV4LCBjb25zZWN0ZXR1ciB2ZWwgY29uc2VjdGV0dXIgaWQsIHB1bHZpbmFyIGEgbWV0dXMuIEZ1c2NlIGZpbmlidXMgdnVscHV0YXRlIGVsZWlmZW5kLiBJbiBub24gcXVhbSBhdCBsaWd1bGEgYmliZW5kdW0gc2NlbGVyaXNxdWUgYXQgcXVpcyBudWxsYS4gRnVzY2UgZWxlaWZlbmQgZWdldCBlc3QgZWdldCB0cmlzdGlxdWUuIE1hdXJpcyBzZW1wZXIgc29kYWxlcyBuaWJoLCBzZWQgdmVzdGlidWx1bSB2ZWxpdCBsdWN0dXMgc2VkLiBTZWQgbm9uIG1ldHVzIHRlbXB1cywgZmluaWJ1cyBpcHN1bSBuZWMsIGVsZWlmZW5kIG5pYmguIE1vcmJpIG5vbiBsb3JlbSBlZ2V0IGxhY3VzIGFjY3Vtc2FuIHZpdmVycmEgYSBlZ2V0IG5lcXVlLlwiO1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckFib3V0LmFwcGVuZChwMik7XG5cbiAgICAgICAgICAgIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcDMudGV4dENvbnRlbnQgPSBcIk1vcmJpIG1heGltdXMgbmliaCBzYXBpZW4sIGNvbnNlY3RldHVyIGx1Y3R1cyBzYXBpZW4gY29uZ3VlIG5lYy4gVml2YW11cyBpbiBwdXJ1cyBmcmluZ2lsbGEsIGNvbnNlY3RldHVyIG5lcXVlIGV0LCB0aW5jaWR1bnQgb2Rpby4gU2VkIGV1aXNtb2QgZGFwaWJ1cyBvZGlvIG5lYyBvcm5hcmUuIE51bGxhbSBpZCBmZXJtZW50dW0ganVzdG8sIGVnZXQgZmFjaWxpc2lzIHB1cnVzLiBTZWQgbmVjIG1pIGV1IGxlY3R1cyB2b2x1dHBhdCB0cmlzdGlxdWUuIEluIGF0IHJpc3VzIG51bmMuIFF1aXNxdWUgdmVzdGlidWx1bSBmcmluZ2lsbGEgZGlnbmlzc2ltLiBDcmFzIG51bmMgZXN0LCBtb2xsaXMgZWdldCBudW5jIHBvcnR0aXRvciwgbWF0dGlzIHNlbXBlciBlbmltLlwiO1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckFib3V0LmFwcGVuZChwMyk7XG5cbiAgICAgICAgICAgIGRlbGV0ZUhvbWVEaXYoKTtcbiAgICAgICAgICAgIGRlbGV0ZVNob3BEaXYoKTtcbiAgICAgICAgICAgIGRlbGV0ZUNvbnRhY3RVc0RpdigpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb250ZW50Q29udGFpbmVyQWJvdXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDb250YWN0VXNEaXYoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXJDb250YWN0VXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC11cycpO1xuICAgICAgICBpZiAoIWNvbnRlbnRDb250YWluZXJDb250YWN0VXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXJDb250YWN0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJDb250YWN0VXMuY2xhc3NMaXN0LmFkZCgnY29udGFjdC11cycsICdoaWRlJyk7XG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZChjb250ZW50Q29udGFpbmVyQ29udGFjdFVzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwMi50ZXh0Q29udGVudCA9IFwiU2V2IExlb1wiXG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyQ29udGFjdFVzLmFwcGVuZChwMik7XG5cbiAgICAgICAgICAgIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcDMudGV4dENvbnRlbnQgPSBcInNldmEubGVvbm92QGhvdG1haWwuY29tXCJcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJDb250YWN0VXMuYXBwZW5kKHAzKTtcblxuICAgICAgICAgICAgY29uc3QgcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwNC50ZXh0Q29udGVudCA9IFwiaHR0cHM6Ly9naXRodWIuY29tL3Nldmxlb1wiXG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyQ29udGFjdFVzLmFwcGVuZChwNCk7XG5cbiAgICAgICAgICAgIGRlbGV0ZUhvbWVEaXYoKTtcbiAgICAgICAgICAgIGRlbGV0ZVNob3BEaXYoKTtcbiAgICAgICAgICAgIGRlbGV0ZUFib3V0RGl2KCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJDb250YWN0VXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUhvbWVEaXYoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXJIb21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcbiAgICAgICAgaWYgKGNvbnRlbnRDb250YWluZXJIb21lKSB7XG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVySG9tZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZVNob3BEaXYoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXJTaG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3AnKTtcbiAgICAgICAgaWYgKGNvbnRlbnRDb250YWluZXJTaG9wKSB7XG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyU2hvcC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUFib3V0RGl2KCkge1xuICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVyQWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQnKTtcbiAgICAgICAgaWYgKGNvbnRlbnRDb250YWluZXJBYm91dCkge1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckFib3V0LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlQ29udGFjdFVzRGl2KCkge1xuICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVyQ29udGFjdFVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtdXMnKTtcbiAgICAgICAgaWYgKGNvbnRlbnRDb250YWluZXJDb250YWN0VXMpIHtcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJDb250YWN0VXMucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5leHBvcnQge2dlbmVyYXRlRE9NfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7Z2VuZXJhdGVET019IGZyb20gJy4vcGFnZS1sb2FkZXInO1xuXG5nZW5lcmF0ZURPTSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
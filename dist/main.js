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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&family=Lato:wght@300&family=Roboto:wght@100&family=Rubik:wght@300&display=swap);"]);
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

    * {
        font-weight: 100;
    }

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
        transition: opacity 1s ease-out;
        opacity: 1;
        transform: translateX(0%);
        box-shadow: 0px 0px 100px 50px rgba(20,20,20,1);
        height: fit-content;
        width: 100%;
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


    .content-container > div.hide {
        opacity: 0;
    }

    .home p:first-child {
        margin-bottom: 30px;
    }

    .product-item {
        display: flex;
        justify-content: space-between;
        align-content: center;
        width: 100%;
        height: 200px;
        margin-bottom: 20px;
    }

    .product-item-info {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        width: 50%;
        gap: 15px;
    }

    .product-item-name,
    .product-item-price {
        text-align: center;
        font-size: clamp(1rem, 2.5vw, 4rem);
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
    }

    .product-item-name {
        border-bottom: 0.5px white solid;
    }

    .product-item-picture {
        width: 50%;
        height: auto;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .product-item-picture img {
        max-width: 50%;
        /* max-height: 100%; */
        border-radius: 15px;
        height: auto;
        box-shadow: 0px 0px 1px 1px rgb(255, 255, 255);
        /* height: auto; */
    }

}


/* Mobile screen */

@media (max-width: 800px) {

    * {
        font-weight: 300;
    }

    body {
        height: calc(100vh - 80px);
    }

    .background-image {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    }


    #main {
        height: 100%;
    }

    .menu {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(20, 20, 20);
        z-index: 5;
        width: 100%;
        height: 80px;
        top: 0;
        box-shadow: 0px 3px 3px 0px rgba(20,20,20,1);
    }

    .menu-items {
        display: flex;
        color: white;
        width: 100%;
        padding-left: 3%;
        padding-right: 3%;
    }

    .menu-item {
        z-index: 1;
        flex: 1 1 0;
        text-align: center;

    }

    .menu-items > div:not(:last-child) {
        border-right: 0.5px solid white;
    }

    .content {
        height: fit-content;
        margin-top: 80px;
    }

    .content-container {
        height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
    }

    .content-container > div {
        transition: opacity 1s ease-out;
        opacity: 1;
        transform: translateX(0%);
        box-shadow: 0px 0px 100px 50px rgba(20,20,20,1);
        height: fit-content;
        width: 80%;
        max-width: 550px;
        padding: 15px;


        --b: 0.5px; /* thickness of the border */
        --c: rgb(255, 255, 255); /* color of the border */
        --w: 50px; /* width of border */
        
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

    .content-container > div.hide {
        opacity: 0;
    }

    .content-container {
        padding: clamp(10px, 15vh, 50px) 20px 10px 20px;
        color: white;
        z-index: 2;
    }

    .product-item {
        display: flex;
        justify-content: space-between;
        align-content: center;
        width: 100%;
        height: 150px;
        margin-bottom: 20px;
    }

    .product-item-info {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        width: 50%;
        gap: 15px;
    }

    .product-item-name,
    .product-item-price {
        text-align: center;
        font-size: clamp(1rem, 3vw, 4rem);
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
    }

    .product-item-name {
        border-bottom: 0.5px white solid;
    }

    .product-item-picture {
        width: 50%;
        height: auto;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .product-item-picture img {
        max-width: 65%;
        max-height: 140px;
        border-radius: 15px;
        height: auto;
        box-shadow: 0px 0px 1px 1px rgb(255, 255, 255);
        /* height: auto; */
    }

    .shop {
        margin: 30px
    }

}


/* Any screen */

body {
    width: 100vw;
    background-color: rgba(20, 20, 20);
    overflow-x: hidden;
}

.background-image {
    width: 100%;
    height: 100vh;
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
    line-height: 50px;
    text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&family=Lato:wght@100&family=Roboto:wght@100&family=Rubik:wght@300&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&family=Lato:wght@300&family=Roboto:wght@100&family=Rubik:wght@300&display=swap');\n\n/* General styles */\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    \n}\n\nhtml {\n    font-family: 'Lato', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n    background: #333; /* Change the color to your preference */\n    /* border-radius: 6px; */\n}\n\n::-webkit-scrollbar:hover {\n    background: rgba(20, 20, 20); /* Change the color to your preference */\n}\n\n::-webkit-scrollbar-thumb:hover {\n    background: #555; /* Change the color to your preference */\n}\n\n\n/* Desktop screen */\n\n@media (min-width: 800px) {\n\n    * {\n        font-weight: 100;\n    }\n\n    body {\n        width: 100vw;\n        height: 100vh;\n        background-color: rgba(20, 20, 20);\n        overflow-x: hidden;\n    }\n\n    #main {\n        width: 100%;\n        height: 100%;\n    }\n\n    .background-image {\n        background-image: url('images/rizky-subagja-1k7TnX5GAww-unsplash.jpg');\n    }\n\n    #main {\n        display: grid;\n        grid-template-rows: 1fr;\n        grid-template-columns: 300px 1fr;\n        position: relative;\n    }\n\n    .menu {\n        background-color: rgba(0, 0, 0, 0.200);\n        backdrop-filter: blur(3px);\n        z-index: 2;\n        box-shadow: 1px 0px 3px 0px rgba(20,20,20,0.2);\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n        justify-content: start;\n        position: fixed;\n        height: 100%;\n        width: 300px;\n    }\n\n    .menu-item {\n        color: white;\n        /* font-size: clamp(1rem, 2.5vw, 4rem); */\n        font-size: 35px;\n        display: block;\n        text-decoration: none;\n        /* padding: clamp(0.50rem, 1vw, 2rem) 0rem; */\n        padding: 10px;\n        /* padding: 50px; */\n        transition: opacity 400ms ease;\n        cursor: pointer;\n    }\n    \n    .menu-items {\n        /* margin-left: clamp(1rem, 3vw, 8rem); */\n        margin-left: 35px;\n        margin-bottom: 25px;\n        position: relative;\n        z-index: 3;\n        width: 100%;\n    }\n\n    /* Placeholder to create offset on menu tab to align menu-items with content-containers */\n    .placeholder {\n        height: 150px;\n        width: 100%;\n        flex-shrink: 1;\n    }\n    \n    .menu:hover .menu-item {\n        opacity: 0.5;\n    }\n    \n    .menu:hover .menu-item:hover {\n        opacity: 1;\n    }\n    \n    .menu-background-pattern {\n        height: 100%;\n        width: 100%;\n    \n        background-image: radial-gradient(\n            rgba(2255, 255, 255, 0.1) 2%,\n            transparent 12%\n        );\n        \n        background-position: 0% 0%;\n        background-size: 9.5vmin 9.5vmin;\n    \n        position: absolute;\n        left: 0px;\n        top: 0px;\n        z-index: 2;\n        transition: opacity 800ms ease, \n                    background-size 800ms ease,\n                    background-position 800ms ease;\n    }\n    \n    .menu:hover > .menu-background-pattern {\n        background-size: 12.5vmin 12.5vmin;\n        opacity: 0.7;\n    }\n    \n    .menu[data-active-index=\"0\"] > .menu-background-pattern {\n        background-position: 0% -25%;\n    }\n    \n    .menu[data-active-index=\"1\"] > .menu-background-pattern {\n        background-position: 0% -50%;\n    }\n    \n    .menu[data-active-index=\"2\"] > .menu-background-pattern {\n        background-position: 0% -75%;\n    }\n    \n    .menu[data-active-index=\"3\"] > .menu-background-pattern {\n        background-position: 0% -100%;\n    }\n    \n    .menu[data-active-index=\"0\"] ~ .background-image {\n        background-position: center 45%;\n        transition: opacity 800ms ease,\n        background-size 800ms ease,\n        background-position 800ms ease;\n    }\n      \n    .menu[data-active-index=\"1\"] ~ .background-image {\n        background-position: center 50%;\n        transition: opacity 800ms ease,\n        background-size 800ms ease,\n        background-position 800ms ease;\n    }\n    \n    .menu[data-active-index=\"2\"] ~ .background-image {\n        background-position: center 55%;\n        transition: opacity 800ms ease,\n        background-size 800ms ease,\n        background-position 800ms ease;\n    }\n    \n    .menu[data-active-index=\"3\"] ~ .background-image {\n        background-position: center 60%;\n        transition: opacity 800ms ease,\n        background-size 800ms ease,\n        background-position 800ms ease;\n    }\n    \n    .menu:hover ~ .background-image {\n        background-size: 100vmax;\n        opacity: 0.50;\n        transition: opacity 800ms ease,\n        background-size 800ms ease,\n        background-position 800ms ease;\n    }\n\n    .content {\n        display: grid;\n        justify-content: center;\n        grid-row: 1 / 2;\n        grid-column: 2 / 3;\n        grid-template-columns: 1fr;\n        /* margin-left: minmax(300px, 1fr); */\n        grid-template-rows: minmax(10px, 50px) 9fr;\n    }\n\n    .menu-logo {\n        background-image: url('images/Screenshot_2023-11-07_at_4.51.02_PM-removebg-preview.png');\n        background-size: contain;\n        background-repeat: no-repeat;\n        background-position: center;\n\n        z-index: 1;\n        height: max(10%, 50px);\n        width: 40%;\n        position: fixed;\n        grid-column: 1 / 2;\n        grid-row: 1 / 2;\n        justify-self: center;\n        border-bottom: 0.5px white solid;\n    }\n\n    .content-container {\n        position: relative;\n        grid-column: 1 / 2;\n        grid-row: 2 / 3;\n        padding: clamp(10px, 15vh, 100px) 20px 10px 20px;\n        color: white;\n        z-index: 2;\n        width: 80%;\n        max-width: 700px;\n        justify-self: center;\n        display: flex;\n    }\n\n    .content-container > div {\n        transition: opacity 1s ease-out;\n        opacity: 1;\n        transform: translateX(0%);\n        box-shadow: 0px 0px 100px 50px rgba(20,20,20,1);\n        height: fit-content;\n        width: 100%;\n        padding: 15px;\n\n\n        --b: 0.5px; /* thickness of the border */\n        --c: rgb(255, 255, 255); /* color of the border */\n        --w: 100px; /* width of border */\n        \n        border: var(--b) solid #0000;\n        --_g: #0000 90deg,var(--c) 0;\n        --_p: var(--w) var(--w) border-box no-repeat;\n        background:\n            conic-gradient(from 90deg  at top    var(--b) left  var(--b),var(--_g)) 0    0    / var(--_p),\n            conic-gradient(from 180deg at top    var(--b) right var(--b),var(--_g)) 100% 0    / var(--_p),\n            conic-gradient(from 0deg   at bottom var(--b) left  var(--b),var(--_g)) 0    100% / var(--_p),\n            conic-gradient(from -90deg at bottom var(--b) right var(--b),var(--_g)) 100% 100% / var(--_p);\n            \n            background-color: rgba(20, 20, 20, 0.8);\n    }\n\n\n    .content-container > div.hide {\n        opacity: 0;\n    }\n\n    .home p:first-child {\n        margin-bottom: 30px;\n    }\n\n    .product-item {\n        display: flex;\n        justify-content: space-between;\n        align-content: center;\n        width: 100%;\n        height: 200px;\n        margin-bottom: 20px;\n    }\n\n    .product-item-info {\n        display: flex;\n        flex-direction: column;\n        align-content: center;\n        justify-content: center;\n        width: 50%;\n        gap: 15px;\n    }\n\n    .product-item-name,\n    .product-item-price {\n        text-align: center;\n        font-size: clamp(1rem, 2.5vw, 4rem);\n        width: fit-content;\n        margin-left: auto;\n        margin-right: auto;\n    }\n\n    .product-item-name {\n        border-bottom: 0.5px white solid;\n    }\n\n    .product-item-picture {\n        width: 50%;\n        height: auto;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .product-item-picture img {\n        max-width: 50%;\n        /* max-height: 100%; */\n        border-radius: 15px;\n        height: auto;\n        box-shadow: 0px 0px 1px 1px rgb(255, 255, 255);\n        /* height: auto; */\n    }\n\n}\n\n\n/* Mobile screen */\n\n@media (max-width: 800px) {\n\n    * {\n        font-weight: 300;\n    }\n\n    body {\n        height: calc(100vh - 80px);\n    }\n\n    .background-image {\n        background-image: url('images/rizky-subagja-1k7TnX5GAww-unsplash.jpg');\n    }\n\n\n    #main {\n        height: 100%;\n    }\n\n    .menu {\n        position: fixed;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background-color: rgb(20, 20, 20);\n        z-index: 5;\n        width: 100%;\n        height: 80px;\n        top: 0;\n        box-shadow: 0px 3px 3px 0px rgba(20,20,20,1);\n    }\n\n    .menu-items {\n        display: flex;\n        color: white;\n        width: 100%;\n        padding-left: 3%;\n        padding-right: 3%;\n    }\n\n    .menu-item {\n        z-index: 1;\n        flex: 1 1 0;\n        text-align: center;\n\n    }\n\n    .menu-items > div:not(:last-child) {\n        border-right: 0.5px solid white;\n    }\n\n    .content {\n        height: fit-content;\n        margin-top: 80px;\n    }\n\n    .content-container {\n        height: fit-content;\n        display: flex;\n        flex-direction: column;\n        justify-content: start;\n        align-items: center;\n    }\n\n    .content-container > div {\n        transition: opacity 1s ease-out;\n        opacity: 1;\n        transform: translateX(0%);\n        box-shadow: 0px 0px 100px 50px rgba(20,20,20,1);\n        height: fit-content;\n        width: 80%;\n        max-width: 550px;\n        padding: 15px;\n\n\n        --b: 0.5px; /* thickness of the border */\n        --c: rgb(255, 255, 255); /* color of the border */\n        --w: 50px; /* width of border */\n        \n        border: var(--b) solid #0000;\n        --_g: #0000 90deg,var(--c) 0;\n        --_p: var(--w) var(--w) border-box no-repeat;\n        background:\n            conic-gradient(from 90deg  at top    var(--b) left  var(--b),var(--_g)) 0    0    / var(--_p),\n            conic-gradient(from 180deg at top    var(--b) right var(--b),var(--_g)) 100% 0    / var(--_p),\n            conic-gradient(from 0deg   at bottom var(--b) left  var(--b),var(--_g)) 0    100% / var(--_p),\n            conic-gradient(from -90deg at bottom var(--b) right var(--b),var(--_g)) 100% 100% / var(--_p);\n            \n            background-color: rgba(20, 20, 20, 0.8);\n    }\n\n    .content-container > div.hide {\n        opacity: 0;\n    }\n\n    .content-container {\n        padding: clamp(10px, 15vh, 50px) 20px 10px 20px;\n        color: white;\n        z-index: 2;\n    }\n\n    .product-item {\n        display: flex;\n        justify-content: space-between;\n        align-content: center;\n        width: 100%;\n        height: 150px;\n        margin-bottom: 20px;\n    }\n\n    .product-item-info {\n        display: flex;\n        flex-direction: column;\n        align-content: center;\n        justify-content: center;\n        width: 50%;\n        gap: 15px;\n    }\n\n    .product-item-name,\n    .product-item-price {\n        text-align: center;\n        font-size: clamp(1rem, 3vw, 4rem);\n        width: fit-content;\n        margin-left: auto;\n        margin-right: auto;\n    }\n\n    .product-item-name {\n        border-bottom: 0.5px white solid;\n    }\n\n    .product-item-picture {\n        width: 50%;\n        height: auto;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .product-item-picture img {\n        max-width: 65%;\n        max-height: 140px;\n        border-radius: 15px;\n        height: auto;\n        box-shadow: 0px 0px 1px 1px rgb(255, 255, 255);\n        /* height: auto; */\n    }\n\n    .shop {\n        margin: 30px\n    }\n\n}\n\n\n/* Any screen */\n\nbody {\n    width: 100vw;\n    background-color: rgba(20, 20, 20);\n    overflow-x: hidden;\n}\n\n.background-image {\n    width: 100%;\n    height: 100vh;\n    position: fixed;\n    left: 0px;\n    top: 0px;\n    background-position: center 50%;\n    background-size: 110vmax;\n    background-repeat: no-repeat;\n\n    opacity: 0.75;\n    filter: blur(0px);\n}\n\np {\n    font-size: clamp(1rem, 2vw, 4rem);\n    line-height: 50px;\n    text-align: center;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _images_americano_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/americano.jpg */ "./src/images/americano.jpg");
/* harmony import */ var _images_chocolate_coffee_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/chocolate_coffee.jpg */ "./src/images/chocolate_coffee.jpg");
/* harmony import */ var _images_croissant_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/croissant.jpg */ "./src/images/croissant.jpg");
/* harmony import */ var _images_ice_espresso_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/ice_espresso.jpg */ "./src/images/ice_espresso.jpg");
/* harmony import */ var _images_latte_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/latte.jpg */ "./src/images/latte.jpg");
/* harmony import */ var _images_sandwich_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/sandwich.jpg */ "./src/images/sandwich.jpg");







const products = [
    {
        image: _images_americano_jpg__WEBPACK_IMPORTED_MODULE_0__,
        name: 'Americano',
        price: '$2',
    },
    {
        image: _images_chocolate_coffee_jpg__WEBPACK_IMPORTED_MODULE_1__,
        name: 'Chocolate Coffee',
        price: '$2.5',
    },
    {
        image: _images_ice_espresso_jpg__WEBPACK_IMPORTED_MODULE_3__,
        name: 'Ice Espresso',
        price: '$2.5',
    },
    {
        image: _images_latte_jpg__WEBPACK_IMPORTED_MODULE_4__,
        name: 'Hot Latte',
        price: '$2.5',
    },
    {
        image: _images_sandwich_jpg__WEBPACK_IMPORTED_MODULE_5__,
        name: 'Ham Sandwich',
        price: '$3.25',
    },
    {
        image: _images_croissant_jpg__WEBPACK_IMPORTED_MODULE_2__,
        name: 'Croissant',
        price: '$2.25',
    }
]

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
    menuItem4.textContent = 'Contact';
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
            
            for (const p of products) {
                createProducts(p);
            };

            // Product div start

            // Product div end
        

            deleteHomeDiv();
            deleteAboutDiv();
            deleteContactUsDiv();

            setTimeout(() => {
                contentContainerShop.classList.remove('hide');
            }, 0);
            

            function createProducts(productDetails) {
                const productItem = document.createElement('div');
                productItem.classList.add('product-item');
                contentContainerShop.append(productItem);
    
                const productPicture = document.createElement('div');
                productPicture.classList.add('product-item-picture');
                productItem.append(productPicture);
    
                const imageElement = document.createElement('img');
                imageElement.src = productDetails.image;
                productPicture.append(imageElement);
    
                const productInfo = document.createElement('div');
                productInfo.classList.add('product-item-info');
                productItem.append(productInfo);
    
                const productName = document.createElement('div');
                productName.classList.add('product-item-name');
                productName.textContent = productDetails.name;
                productInfo.append(productName);
    
                const productPrice = document.createElement('div');
                productPrice.classList.add('product-item-price');
                productPrice.textContent = productDetails.price;
                productInfo.append(productPrice);
            }
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

/***/ "./src/images/americano.jpg":
/*!**********************************!*\
  !*** ./src/images/americano.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "95936a4e99758bba43fb.jpg";

/***/ }),

/***/ "./src/images/chocolate_coffee.jpg":
/*!*****************************************!*\
  !*** ./src/images/chocolate_coffee.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f9d50d174a6936797f7.jpg";

/***/ }),

/***/ "./src/images/croissant.jpg":
/*!**********************************!*\
  !*** ./src/images/croissant.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8e4c409e3dd606f433b.jpg";

/***/ }),

/***/ "./src/images/ice_espresso.jpg":
/*!*************************************!*\
  !*** ./src/images/ice_espresso.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "446b9eeadd1777133883.jpg";

/***/ }),

/***/ "./src/images/latte.jpg":
/*!******************************!*\
  !*** ./src/images/latte.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "847b2f2419226277d156.jpg";

/***/ }),

/***/ "./src/images/rizky-subagja-1k7TnX5GAww-unsplash.jpg":
/*!***********************************************************!*\
  !*** ./src/images/rizky-subagja-1k7TnX5GAww-unsplash.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cbb0ddd1ded53d412c44.jpg";

/***/ }),

/***/ "./src/images/sandwich.jpg":
/*!*********************************!*\
  !*** ./src/images/sandwich.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e79687c17e2f6a6bc7fb.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlLQUFnRTtBQUM1Ryw0Q0FBNEMsNk1BQWtGO0FBQzlILDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YscU1BQXFNO0FBQ3JNLHFNQUFxTTtBQUNyTSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QiwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQSxrQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQSxzQkFBc0I7QUFDdEI7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MsbUNBQW1DO0FBQ25FOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLG1DQUFtQztBQUNuRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxvQkFBb0I7QUFDcEIsaUNBQWlDO0FBQ2pDLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MsbUNBQW1DO0FBQ25FOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLG9CQUFvQjtBQUNwQixpQ0FBaUM7QUFDakMsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8seUZBQXlGLE1BQU0sVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLHdCQUF3QixhQUFhLE9BQU8sS0FBSyx3QkFBd0IsT0FBTyxLQUFLLHdCQUF3QixRQUFRLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLE9BQU8sTUFBTSxZQUFZLGNBQWMsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLE9BQU8sT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLHNCQUFzQix5QkFBeUIsd0JBQXdCLGFBQWEsYUFBYSxhQUFhLFNBQVMsUUFBUSxhQUFhLFFBQVEsS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLHNCQUFzQix5QkFBeUIsd0JBQXdCLGFBQWEsYUFBYSxhQUFhLFNBQVMsUUFBUSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8s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O0FBQ0EsZUFBZSxrREFBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6U0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNvQjs7QUFFMUMseURBQVcsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3BhZ2UtbG9hZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvcml6a3ktc3ViYWdqYS0xazdUblg1R0F3dy11bnNwbGFzaC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvU2NyZWVuc2hvdF8yMDIzLTExLTA3X2F0XzQuNTEuMDJfUE0tcmVtb3ZlYmctcHJldmlldy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDEwMCZmYW1pbHk9TGF0bzp3Z2h0QDEwMCZmYW1pbHk9Um9ib3RvOndnaHRAMTAwJmZhbWlseT1SdWJpazp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6d2dodEAxMDAmZmFtaWx5PUxhdG86d2dodEAzMDAmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMCZmYW1pbHk9UnViaWs6d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEdlbmVyYWwgc3R5bGVzICovXG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgXG59XG5cbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDEwcHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICMzMzM7IC8qIENoYW5nZSB0aGUgY29sb3IgdG8geW91ciBwcmVmZXJlbmNlICovXG4gICAgLyogYm9yZGVyLXJhZGl1czogNnB4OyAqL1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwLCAyMCwgMjApOyAvKiBDaGFuZ2UgdGhlIGNvbG9yIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTU1OyAvKiBDaGFuZ2UgdGhlIGNvbG9yIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xufVxuXG5cbi8qIERlc2t0b3Agc2NyZWVuICovXG5cbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xuXG4gICAgKiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgfVxuXG4gICAgYm9keSB7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjAsIDIwKTtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIH1cblxuICAgICNtYWluIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAuYmFja2dyb3VuZC1pbWFnZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICB9XG5cbiAgICAjbWFpbiB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIC5tZW51IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIwMCk7XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICBib3gtc2hhZG93OiAxcHggMHB4IDNweCAwcHggcmdiYSgyMCwyMCwyMCwwLjIpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgIH1cblxuICAgIC5tZW51LWl0ZW0ge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIC8qIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMi41dncsIDRyZW0pOyAqL1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIC8qIHBhZGRpbmc6IGNsYW1wKDAuNTByZW0sIDF2dywgMnJlbSkgMHJlbTsgKi9cbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgLyogcGFkZGluZzogNTBweDsgKi9cbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtcyBlYXNlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5tZW51LWl0ZW1zIHtcbiAgICAgICAgLyogbWFyZ2luLWxlZnQ6IGNsYW1wKDFyZW0sIDN2dywgOHJlbSk7ICovXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC8qIFBsYWNlaG9sZGVyIHRvIGNyZWF0ZSBvZmZzZXQgb24gbWVudSB0YWIgdG8gYWxpZ24gbWVudS1pdGVtcyB3aXRoIGNvbnRlbnQtY29udGFpbmVycyAqL1xuICAgIC5wbGFjZWhvbGRlciB7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmbGV4LXNocmluazogMTtcbiAgICB9XG4gICAgXG4gICAgLm1lbnU6aG92ZXIgLm1lbnUtaXRlbSB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gICAgXG4gICAgLm1lbnU6aG92ZXIgLm1lbnUtaXRlbTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIFxuICAgIC5tZW51LWJhY2tncm91bmQtcGF0dGVybiB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChcbiAgICAgICAgICAgIHJnYmEoMjI1NSwgMjU1LCAyNTUsIDAuMSkgMiUsXG4gICAgICAgICAgICB0cmFuc3BhcmVudCAxMiVcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDkuNXZtaW4gOS41dm1pbjtcbiAgICBcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDgwMG1zIGVhc2UsIFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemUgODAwbXMgZWFzZSxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbiA4MDBtcyBlYXNlO1xuICAgIH1cbiAgICBcbiAgICAubWVudTpob3ZlciA+IC5tZW51LWJhY2tncm91bmQtcGF0dGVybiB7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTIuNXZtaW4gMTIuNXZtaW47XG4gICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICB9XG4gICAgXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XCIwXCJdID4gLm1lbnUtYmFja2dyb3VuZC1wYXR0ZXJuIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgLTI1JTtcbiAgICB9XG4gICAgXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XCIxXCJdID4gLm1lbnUtYmFja2dyb3VuZC1wYXR0ZXJuIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgLTUwJTtcbiAgICB9XG4gICAgXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XCIyXCJdID4gLm1lbnUtYmFja2dyb3VuZC1wYXR0ZXJuIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgLTc1JTtcbiAgICB9XG4gICAgXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XCIzXCJdID4gLm1lbnUtYmFja2dyb3VuZC1wYXR0ZXJuIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgLTEwMCU7XG4gICAgfVxuICAgIFxuICAgIC5tZW51W2RhdGEtYWN0aXZlLWluZGV4PVwiMFwiXSB+IC5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDQ1JTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA4MDBtcyBlYXNlLFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemUgODAwbXMgZWFzZSxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbiA4MDBtcyBlYXNlO1xuICAgIH1cbiAgICAgIFxuICAgIC5tZW51W2RhdGEtYWN0aXZlLWluZGV4PVwiMVwiXSB+IC5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDUwJTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA4MDBtcyBlYXNlLFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemUgODAwbXMgZWFzZSxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbiA4MDBtcyBlYXNlO1xuICAgIH1cbiAgICBcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cIjJcIl0gfiAuYmFja2dyb3VuZC1pbWFnZSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciA1NSU7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgODAwbXMgZWFzZSxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplIDgwMG1zIGVhc2UsXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24gODAwbXMgZWFzZTtcbiAgICB9XG4gICAgXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XCIzXCJdIH4gLmJhY2tncm91bmQtaW1hZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgNjAlO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDgwMG1zIGVhc2UsXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZSA4MDBtcyBlYXNlLFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uIDgwMG1zIGVhc2U7XG4gICAgfVxuICAgIFxuICAgIC5tZW51OmhvdmVyIH4gLmJhY2tncm91bmQtaW1hZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZtYXg7XG4gICAgICAgIG9wYWNpdHk6IDAuNTA7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgODAwbXMgZWFzZSxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplIDgwMG1zIGVhc2UsXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24gODAwbXMgZWFzZTtcbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIC8qIG1hcmdpbi1sZWZ0OiBtaW5tYXgoMzAwcHgsIDFmcik7ICovXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDEwcHgsIDUwcHgpIDlmcjtcbiAgICB9XG5cbiAgICAubWVudS1sb2dvIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblxuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBoZWlnaHQ6IG1heCgxMCUsIDUwcHgpO1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggd2hpdGUgc29saWQ7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICAgICAgcGFkZGluZzogY2xhbXAoMTBweCwgMTV2aCwgMTAwcHgpIDIwcHggMTBweCAyMHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIC5jb250ZW50LWNvbnRhaW5lciA+IGRpdiB7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1vdXQ7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTAwcHggNTBweCByZ2JhKDIwLDIwLDIwLDEpO1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMTVweDtcblxuXG4gICAgICAgIC0tYjogMC41cHg7IC8qIHRoaWNrbmVzcyBvZiB0aGUgYm9yZGVyICovXG4gICAgICAgIC0tYzogcmdiKDI1NSwgMjU1LCAyNTUpOyAvKiBjb2xvciBvZiB0aGUgYm9yZGVyICovXG4gICAgICAgIC0tdzogMTAwcHg7IC8qIHdpZHRoIG9mIGJvcmRlciAqL1xuICAgICAgICBcbiAgICAgICAgYm9yZGVyOiB2YXIoLS1iKSBzb2xpZCAjMDAwMDtcbiAgICAgICAgLS1fZzogIzAwMDAgOTBkZWcsdmFyKC0tYykgMDtcbiAgICAgICAgLS1fcDogdmFyKC0tdykgdmFyKC0tdykgYm9yZGVyLWJveCBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICBjb25pYy1ncmFkaWVudChmcm9tIDkwZGVnICBhdCB0b3AgICAgdmFyKC0tYikgbGVmdCAgdmFyKC0tYiksdmFyKC0tX2cpKSAwICAgIDAgICAgLyB2YXIoLS1fcCksXG4gICAgICAgICAgICBjb25pYy1ncmFkaWVudChmcm9tIDE4MGRlZyBhdCB0b3AgICAgdmFyKC0tYikgcmlnaHQgdmFyKC0tYiksdmFyKC0tX2cpKSAxMDAlIDAgICAgLyB2YXIoLS1fcCksXG4gICAgICAgICAgICBjb25pYy1ncmFkaWVudChmcm9tIDBkZWcgICBhdCBib3R0b20gdmFyKC0tYikgbGVmdCAgdmFyKC0tYiksdmFyKC0tX2cpKSAwICAgIDEwMCUgLyB2YXIoLS1fcCksXG4gICAgICAgICAgICBjb25pYy1ncmFkaWVudChmcm9tIC05MGRlZyBhdCBib3R0b20gdmFyKC0tYikgcmlnaHQgdmFyKC0tYiksdmFyKC0tX2cpKSAxMDAlIDEwMCUgLyB2YXIoLS1fcCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDIwLCAyMCwgMC44KTtcbiAgICB9XG5cblxuICAgIC5jb250ZW50LWNvbnRhaW5lciA+IGRpdi5oaWRlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAuaG9tZSBwOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWl0ZW0taW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGdhcDogMTVweDtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1pdGVtLW5hbWUsXG4gICAgLnByb2R1Y3QtaXRlbS1wcmljZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAyLjV2dywgNHJlbSk7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB9XG5cbiAgICAucHJvZHVjdC1pdGVtLW5hbWUge1xuICAgICAgICBib3JkZXItYm90dG9tOiAwLjVweCB3aGl0ZSBzb2xpZDtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1pdGVtLXBpY3R1cmUge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWl0ZW0tcGljdHVyZSBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICAgICAgLyogbWF4LWhlaWdodDogMTAwJTsgKi9cbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxcHggcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICAvKiBoZWlnaHQ6IGF1dG87ICovXG4gICAgfVxuXG59XG5cblxuLyogTW9iaWxlIHNjcmVlbiAqL1xuXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcblxuICAgICoge1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgIH1cblxuICAgIGJvZHkge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcbiAgICB9XG5cbiAgICAuYmFja2dyb3VuZC1pbWFnZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICB9XG5cblxuICAgICNtYWluIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIC5tZW51IHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLCAyMCwgMjApO1xuICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IDBweCByZ2JhKDIwLDIwLDIwLDEpO1xuICAgIH1cblxuICAgIC5tZW51LWl0ZW1zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzJTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMyU7XG4gICAgfVxuXG4gICAgLm1lbnUtaXRlbSB7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGZsZXg6IDEgMSAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICB9XG5cbiAgICAubWVudS1pdGVtcyA+IGRpdjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwLjVweCBzb2xpZCB3aGl0ZTtcbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuY29udGVudC1jb250YWluZXIgPiBkaXYge1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2Utb3V0O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwMHB4IDUwcHggcmdiYSgyMCwyMCwyMCwxKTtcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA1NTBweDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcblxuXG4gICAgICAgIC0tYjogMC41cHg7IC8qIHRoaWNrbmVzcyBvZiB0aGUgYm9yZGVyICovXG4gICAgICAgIC0tYzogcmdiKDI1NSwgMjU1LCAyNTUpOyAvKiBjb2xvciBvZiB0aGUgYm9yZGVyICovXG4gICAgICAgIC0tdzogNTBweDsgLyogd2lkdGggb2YgYm9yZGVyICovXG4gICAgICAgIFxuICAgICAgICBib3JkZXI6IHZhcigtLWIpIHNvbGlkICMwMDAwO1xuICAgICAgICAtLV9nOiAjMDAwMCA5MGRlZyx2YXIoLS1jKSAwO1xuICAgICAgICAtLV9wOiB2YXIoLS13KSB2YXIoLS13KSBib3JkZXItYm94IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgIGNvbmljLWdyYWRpZW50KGZyb20gOTBkZWcgIGF0IHRvcCAgICB2YXIoLS1iKSBsZWZ0ICB2YXIoLS1iKSx2YXIoLS1fZykpIDAgICAgMCAgICAvIHZhcigtLV9wKSxcbiAgICAgICAgICAgIGNvbmljLWdyYWRpZW50KGZyb20gMTgwZGVnIGF0IHRvcCAgICB2YXIoLS1iKSByaWdodCB2YXIoLS1iKSx2YXIoLS1fZykpIDEwMCUgMCAgICAvIHZhcigtLV9wKSxcbiAgICAgICAgICAgIGNvbmljLWdyYWRpZW50KGZyb20gMGRlZyAgIGF0IGJvdHRvbSB2YXIoLS1iKSBsZWZ0ICB2YXIoLS1iKSx2YXIoLS1fZykpIDAgICAgMTAwJSAvIHZhcigtLV9wKSxcbiAgICAgICAgICAgIGNvbmljLWdyYWRpZW50KGZyb20gLTkwZGVnIGF0IGJvdHRvbSB2YXIoLS1iKSByaWdodCB2YXIoLS1iKSx2YXIoLS1fZykpIDEwMCUgMTAwJSAvIHZhcigtLV9wKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjAsIDIwLCAwLjgpO1xuICAgIH1cblxuICAgIC5jb250ZW50LWNvbnRhaW5lciA+IGRpdi5oaWRlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiBjbGFtcCgxMHB4LCAxNXZoLCA1MHB4KSAyMHB4IDEwcHggMjBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtaXRlbS1pbmZvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgZ2FwOiAxNXB4O1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWl0ZW0tbmFtZSxcbiAgICAucHJvZHVjdC1pdGVtLXByaWNlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDN2dywgNHJlbSk7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB9XG5cbiAgICAucHJvZHVjdC1pdGVtLW5hbWUge1xuICAgICAgICBib3JkZXItYm90dG9tOiAwLjVweCB3aGl0ZSBzb2xpZDtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1pdGVtLXBpY3R1cmUge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWl0ZW0tcGljdHVyZSBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDY1JTtcbiAgICAgICAgbWF4LWhlaWdodDogMTQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgLyogaGVpZ2h0OiBhdXRvOyAqL1xuICAgIH1cblxuICAgIC5zaG9wIHtcbiAgICAgICAgbWFyZ2luOiAzMHB4XG4gICAgfVxuXG59XG5cblxuLyogQW55IHNjcmVlbiAqL1xuXG5ib2R5IHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjAsIDIwKTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdG9wOiAwcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDUwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDExMHZtYXg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgZmlsdGVyOiBibHVyKDBweCk7XG59XG5cbnAge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMnZ3LCA0cmVtKTtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQSxtQkFBbUI7O0FBRW5CO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksb0VBQW9FO0FBQ3hFOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCLEVBQUUsd0NBQXdDO0lBQzFELHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDRCQUE0QixFQUFFLHdDQUF3QztBQUMxRTs7QUFFQTtJQUNJLGdCQUFnQixFQUFFLHdDQUF3QztBQUM5RDs7O0FBR0EsbUJBQW1COztBQUVuQjs7SUFFSTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2Isa0NBQWtDO1FBQ2xDLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0kseURBQXNFO0lBQzFFOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixnQ0FBZ0M7UUFDaEMsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksc0NBQXNDO1FBQ3RDLDBCQUEwQjtRQUMxQixVQUFVO1FBQ1YsOENBQThDO1FBQzlDLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2YsWUFBWTtRQUNaLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1oseUNBQXlDO1FBQ3pDLGVBQWU7UUFDZixjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLDZDQUE2QztRQUM3QyxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLDhCQUE4QjtRQUM5QixlQUFlO0lBQ25COztJQUVBO1FB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QjtRQUNsQixpQ0FBaUM7UUFDakMsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxnQ0FBZ0M7SUFDcEM7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWiw4Q0FBOEM7UUFDOUMsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0k7SUFDSjs7QUFFSjs7O0FBR0EsZUFBZTs7QUFFZjtJQUNJLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2YsU0FBUztJQUNULFFBQVE7SUFDUiwrQkFBK0I7SUFDL0Isd0JBQXdCO0lBQ3hCLDRCQUE0Qjs7SUFFNUIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDEwMCZmYW1pbHk9TGF0bzp3Z2h0QDEwMCZmYW1pbHk9Um9ib3RvOndnaHRAMTAwJmZhbWlseT1SdWJpazp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6d2dodEAxMDAmZmFtaWx5PUxhdG86d2dodEAzMDAmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMCZmYW1pbHk9UnViaWs6d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuLyogR2VuZXJhbCBzdHlsZXMgKi9cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZDogIzMzMzsgLyogQ2hhbmdlIHRoZSBjb2xvciB0byB5b3VyIHByZWZlcmVuY2UgKi9cXG4gICAgLyogYm9yZGVyLXJhZGl1czogNnB4OyAqL1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMCwgMjAsIDIwKTsgLyogQ2hhbmdlIHRoZSBjb2xvciB0byB5b3VyIHByZWZlcmVuY2UgKi9cXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICM1NTU7IC8qIENoYW5nZSB0aGUgY29sb3IgdG8geW91ciBwcmVmZXJlbmNlICovXFxufVxcblxcblxcbi8qIERlc2t0b3Agc2NyZWVuICovXFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XFxuXFxuICAgICoge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgfVxcblxcbiAgICBib2R5IHtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMCwgMjApO1xcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICB9XFxuXFxuICAgICNtYWluIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5iYWNrZ3JvdW5kLWltYWdlIHtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1hZ2VzL3Jpemt5LXN1YmFnamEtMWs3VG5YNUdBd3ctdW5zcGxhc2guanBnJyk7XFxuICAgIH1cXG5cXG4gICAgI21haW4ge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgLm1lbnUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIwMCk7XFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICBib3gtc2hhZG93OiAxcHggMHB4IDNweCAwcHggcmdiYSgyMCwyMCwyMCwwLjIpO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgfVxcblxcbiAgICAubWVudS1pdGVtIHtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIC8qIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMi41dncsIDRyZW0pOyAqL1xcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICAvKiBwYWRkaW5nOiBjbGFtcCgwLjUwcmVtLCAxdncsIDJyZW0pIDByZW07ICovXFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgLyogcGFkZGluZzogNTBweDsgKi9cXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgZWFzZTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1lbnUtaXRlbXMge1xcbiAgICAgICAgLyogbWFyZ2luLWxlZnQ6IGNsYW1wKDFyZW0sIDN2dywgOHJlbSk7ICovXFxuICAgICAgICBtYXJnaW4tbGVmdDogMzVweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB6LWluZGV4OiAzO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLyogUGxhY2Vob2xkZXIgdG8gY3JlYXRlIG9mZnNldCBvbiBtZW51IHRhYiB0byBhbGlnbiBtZW51LWl0ZW1zIHdpdGggY29udGVudC1jb250YWluZXJzICovXFxuICAgIC5wbGFjZWhvbGRlciB7XFxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBmbGV4LXNocmluazogMTtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1lbnU6aG92ZXIgLm1lbnUtaXRlbSB7XFxuICAgICAgICBvcGFjaXR5OiAwLjU7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51OmhvdmVyIC5tZW51LWl0ZW06aG92ZXIge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1lbnUtYmFja2dyb3VuZC1wYXR0ZXJuIHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICBcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgICAgICAgICByZ2JhKDIyNTUsIDI1NSwgMjU1LCAwLjEpIDIlLFxcbiAgICAgICAgICAgIHRyYW5zcGFyZW50IDEyJVxcbiAgICAgICAgKTtcXG4gICAgICAgIFxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDkuNXZtaW4gOS41dm1pbjtcXG4gICAgXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiAwcHg7XFxuICAgICAgICB0b3A6IDBweDtcXG4gICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDgwMG1zIGVhc2UsIFxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplIDgwMG1zIGVhc2UsXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uIDgwMG1zIGVhc2U7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51OmhvdmVyID4gLm1lbnUtYmFja2dyb3VuZC1wYXR0ZXJuIHtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTIuNXZtaW4gMTIuNXZtaW47XFxuICAgICAgICBvcGFjaXR5OiAwLjc7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51W2RhdGEtYWN0aXZlLWluZGV4PVxcXCIwXFxcIl0gPiAubWVudS1iYWNrZ3JvdW5kLXBhdHRlcm4ge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgLTI1JTtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XFxcIjFcXFwiXSA+IC5tZW51LWJhY2tncm91bmQtcGF0dGVybiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAtNTAlO1xcbiAgICB9XFxuICAgIFxcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cXFwiMlxcXCJdID4gLm1lbnUtYmFja2dyb3VuZC1wYXR0ZXJuIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIC03NSU7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51W2RhdGEtYWN0aXZlLWluZGV4PVxcXCIzXFxcIl0gPiAubWVudS1iYWNrZ3JvdW5kLXBhdHRlcm4ge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgLTEwMCU7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51W2RhdGEtYWN0aXZlLWluZGV4PVxcXCIwXFxcIl0gfiAuYmFja2dyb3VuZC1pbWFnZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgNDUlO1xcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA4MDBtcyBlYXNlLFxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplIDgwMG1zIGVhc2UsXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uIDgwMG1zIGVhc2U7XFxuICAgIH1cXG4gICAgICBcXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XFxcIjFcXFwiXSB+IC5iYWNrZ3JvdW5kLWltYWdlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciA1MCU7XFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDgwMG1zIGVhc2UsXFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemUgODAwbXMgZWFzZSxcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24gODAwbXMgZWFzZTtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XFxcIjJcXFwiXSB+IC5iYWNrZ3JvdW5kLWltYWdlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciA1NSU7XFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDgwMG1zIGVhc2UsXFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemUgODAwbXMgZWFzZSxcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24gODAwbXMgZWFzZTtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XFxcIjNcXFwiXSB+IC5iYWNrZ3JvdW5kLWltYWdlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciA2MCU7XFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDgwMG1zIGVhc2UsXFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemUgODAwbXMgZWFzZSxcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24gODAwbXMgZWFzZTtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1lbnU6aG92ZXIgfiAuYmFja2dyb3VuZC1pbWFnZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZtYXg7XFxuICAgICAgICBvcGFjaXR5OiAwLjUwO1xcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA4MDBtcyBlYXNlLFxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplIDgwMG1zIGVhc2UsXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uIDgwMG1zIGVhc2U7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICAvKiBtYXJnaW4tbGVmdDogbWlubWF4KDMwMHB4LCAxZnIpOyAqL1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoMTBweCwgNTBweCkgOWZyO1xcbiAgICB9XFxuXFxuICAgIC5tZW51LWxvZ28ge1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZXMvU2NyZWVuc2hvdF8yMDIzLTExLTA3X2F0XzQuNTEuMDJfUE0tcmVtb3ZlYmctcHJldmlldy5wbmcnKTtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgaGVpZ2h0OiBtYXgoMTAlLCA1MHB4KTtcXG4gICAgICAgIHdpZHRoOiA0MCU7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHdoaXRlIHNvbGlkO1xcbiAgICB9XFxuXFxuICAgIC5jb250ZW50LWNvbnRhaW5lciB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgICAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgICAgICBwYWRkaW5nOiBjbGFtcCgxMHB4LCAxNXZoLCAxMDBweCkgMjBweCAxMHB4IDIwcHg7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIG1heC13aWR0aDogNzAwcHg7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRlbnQtY29udGFpbmVyID4gZGl2IHtcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1vdXQ7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTAwcHggNTBweCByZ2JhKDIwLDIwLDIwLDEpO1xcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogMTVweDtcXG5cXG5cXG4gICAgICAgIC0tYjogMC41cHg7IC8qIHRoaWNrbmVzcyBvZiB0aGUgYm9yZGVyICovXFxuICAgICAgICAtLWM6IHJnYigyNTUsIDI1NSwgMjU1KTsgLyogY29sb3Igb2YgdGhlIGJvcmRlciAqL1xcbiAgICAgICAgLS13OiAxMDBweDsgLyogd2lkdGggb2YgYm9yZGVyICovXFxuICAgICAgICBcXG4gICAgICAgIGJvcmRlcjogdmFyKC0tYikgc29saWQgIzAwMDA7XFxuICAgICAgICAtLV9nOiAjMDAwMCA5MGRlZyx2YXIoLS1jKSAwO1xcbiAgICAgICAgLS1fcDogdmFyKC0tdykgdmFyKC0tdykgYm9yZGVyLWJveCBuby1yZXBlYXQ7XFxuICAgICAgICBiYWNrZ3JvdW5kOlxcbiAgICAgICAgICAgIGNvbmljLWdyYWRpZW50KGZyb20gOTBkZWcgIGF0IHRvcCAgICB2YXIoLS1iKSBsZWZ0ICB2YXIoLS1iKSx2YXIoLS1fZykpIDAgICAgMCAgICAvIHZhcigtLV9wKSxcXG4gICAgICAgICAgICBjb25pYy1ncmFkaWVudChmcm9tIDE4MGRlZyBhdCB0b3AgICAgdmFyKC0tYikgcmlnaHQgdmFyKC0tYiksdmFyKC0tX2cpKSAxMDAlIDAgICAgLyB2YXIoLS1fcCksXFxuICAgICAgICAgICAgY29uaWMtZ3JhZGllbnQoZnJvbSAwZGVnICAgYXQgYm90dG9tIHZhcigtLWIpIGxlZnQgIHZhcigtLWIpLHZhcigtLV9nKSkgMCAgICAxMDAlIC8gdmFyKC0tX3ApLFxcbiAgICAgICAgICAgIGNvbmljLWdyYWRpZW50KGZyb20gLTkwZGVnIGF0IGJvdHRvbSB2YXIoLS1iKSByaWdodCB2YXIoLS1iKSx2YXIoLS1fZykpIDEwMCUgMTAwJSAvIHZhcigtLV9wKTtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMCwgMjAsIDAuOCk7XFxuICAgIH1cXG5cXG5cXG4gICAgLmNvbnRlbnQtY29udGFpbmVyID4gZGl2LmhpZGUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcblxcbiAgICAuaG9tZSBwOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2R1Y3QtaXRlbSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgfVxcblxcbiAgICAucHJvZHVjdC1pdGVtLWluZm8ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICBnYXA6IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2R1Y3QtaXRlbS1uYW1lLFxcbiAgICAucHJvZHVjdC1pdGVtLXByaWNlIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMi41dncsIDRyZW0pO1xcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLnByb2R1Y3QtaXRlbS1uYW1lIHtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHdoaXRlIHNvbGlkO1xcbiAgICB9XFxuXFxuICAgIC5wcm9kdWN0LWl0ZW0tcGljdHVyZSB7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnByb2R1Y3QtaXRlbS1waWN0dXJlIGltZyB7XFxuICAgICAgICBtYXgtd2lkdGg6IDUwJTtcXG4gICAgICAgIC8qIG1heC1oZWlnaHQ6IDEwMCU7ICovXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgICAgIC8qIGhlaWdodDogYXV0bzsgKi9cXG4gICAgfVxcblxcbn1cXG5cXG5cXG4vKiBNb2JpbGUgc2NyZWVuICovXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuXFxuICAgICoge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgfVxcblxcbiAgICBib2R5IHtcXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xcbiAgICB9XFxuXFxuICAgIC5iYWNrZ3JvdW5kLWltYWdlIHtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1hZ2VzL3Jpemt5LXN1YmFnamEtMWs3VG5YNUdBd3ctdW5zcGxhc2guanBnJyk7XFxuICAgIH1cXG5cXG5cXG4gICAgI21haW4ge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5tZW51IHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDIwLCAyMCk7XFxuICAgICAgICB6LWluZGV4OiA1O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDgwcHg7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDNweCAwcHggcmdiYSgyMCwyMCwyMCwxKTtcXG4gICAgfVxcblxcbiAgICAubWVudS1pdGVtcyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMlO1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMyU7XFxuICAgIH1cXG5cXG4gICAgLm1lbnUtaXRlbSB7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgZmxleDogMSAxIDA7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIH1cXG5cXG4gICAgLm1lbnUtaXRlbXMgPiBkaXY6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IDAuNXB4IHNvbGlkIHdoaXRlO1xcbiAgICB9XFxuXFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBtYXJnaW4tdG9wOiA4MHB4O1xcbiAgICB9XFxuXFxuICAgIC5jb250ZW50LWNvbnRhaW5lciB7XFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuY29udGVudC1jb250YWluZXIgPiBkaXYge1xcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLW91dDtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMDBweCA1MHB4IHJnYmEoMjAsMjAsMjAsMSk7XFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIG1heC13aWR0aDogNTUwcHg7XFxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xcblxcblxcbiAgICAgICAgLS1iOiAwLjVweDsgLyogdGhpY2tuZXNzIG9mIHRoZSBib3JkZXIgKi9cXG4gICAgICAgIC0tYzogcmdiKDI1NSwgMjU1LCAyNTUpOyAvKiBjb2xvciBvZiB0aGUgYm9yZGVyICovXFxuICAgICAgICAtLXc6IDUwcHg7IC8qIHdpZHRoIG9mIGJvcmRlciAqL1xcbiAgICAgICAgXFxuICAgICAgICBib3JkZXI6IHZhcigtLWIpIHNvbGlkICMwMDAwO1xcbiAgICAgICAgLS1fZzogIzAwMDAgOTBkZWcsdmFyKC0tYykgMDtcXG4gICAgICAgIC0tX3A6IHZhcigtLXcpIHZhcigtLXcpIGJvcmRlci1ib3ggbm8tcmVwZWF0O1xcbiAgICAgICAgYmFja2dyb3VuZDpcXG4gICAgICAgICAgICBjb25pYy1ncmFkaWVudChmcm9tIDkwZGVnICBhdCB0b3AgICAgdmFyKC0tYikgbGVmdCAgdmFyKC0tYiksdmFyKC0tX2cpKSAwICAgIDAgICAgLyB2YXIoLS1fcCksXFxuICAgICAgICAgICAgY29uaWMtZ3JhZGllbnQoZnJvbSAxODBkZWcgYXQgdG9wICAgIHZhcigtLWIpIHJpZ2h0IHZhcigtLWIpLHZhcigtLV9nKSkgMTAwJSAwICAgIC8gdmFyKC0tX3ApLFxcbiAgICAgICAgICAgIGNvbmljLWdyYWRpZW50KGZyb20gMGRlZyAgIGF0IGJvdHRvbSB2YXIoLS1iKSBsZWZ0ICB2YXIoLS1iKSx2YXIoLS1fZykpIDAgICAgMTAwJSAvIHZhcigtLV9wKSxcXG4gICAgICAgICAgICBjb25pYy1ncmFkaWVudChmcm9tIC05MGRlZyBhdCBib3R0b20gdmFyKC0tYikgcmlnaHQgdmFyKC0tYiksdmFyKC0tX2cpKSAxMDAlIDEwMCUgLyB2YXIoLS1fcCk7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjAsIDIwLCAwLjgpO1xcbiAgICB9XFxuXFxuICAgIC5jb250ZW50LWNvbnRhaW5lciA+IGRpdi5oaWRlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgICAgIHBhZGRpbmc6IGNsYW1wKDEwcHgsIDE1dmgsIDUwcHgpIDIwcHggMTBweCAyMHB4O1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgei1pbmRleDogMjtcXG4gICAgfVxcblxcbiAgICAucHJvZHVjdC1pdGVtIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTUwcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9kdWN0LWl0ZW0taW5mbyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgIGdhcDogMTVweDtcXG4gICAgfVxcblxcbiAgICAucHJvZHVjdC1pdGVtLW5hbWUsXFxuICAgIC5wcm9kdWN0LWl0ZW0tcHJpY2Uge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAzdncsIDRyZW0pO1xcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLnByb2R1Y3QtaXRlbS1uYW1lIHtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHdoaXRlIHNvbGlkO1xcbiAgICB9XFxuXFxuICAgIC5wcm9kdWN0LWl0ZW0tcGljdHVyZSB7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnByb2R1Y3QtaXRlbS1waWN0dXJlIGltZyB7XFxuICAgICAgICBtYXgtd2lkdGg6IDY1JTtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDE0MHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDFweCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgICAgICAvKiBoZWlnaHQ6IGF1dG87ICovXFxuICAgIH1cXG5cXG4gICAgLnNob3Age1xcbiAgICAgICAgbWFyZ2luOiAzMHB4XFxuICAgIH1cXG5cXG59XFxuXFxuXFxuLyogQW55IHNjcmVlbiAqL1xcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDIwLCAyMCk7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLmJhY2tncm91bmQtaW1hZ2Uge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIHRvcDogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgNTAlO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDExMHZtYXg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFxuICAgIG9wYWNpdHk6IDAuNzU7XFxuICAgIGZpbHRlcjogYmx1cigwcHgpO1xcbn1cXG5cXG5wIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAydncsIDRyZW0pO1xcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEFtZXJpY2FubyBmcm9tICcuL2ltYWdlcy9hbWVyaWNhbm8uanBnJztcbmltcG9ydCBDaG9jb2xhdGVDb2ZmZWUgZnJvbSAnLi9pbWFnZXMvY2hvY29sYXRlX2NvZmZlZS5qcGcnO1xuaW1wb3J0IENyb2lzc2FudCBmcm9tICcuL2ltYWdlcy9jcm9pc3NhbnQuanBnJztcbmltcG9ydCBJY2VFc3ByZXNzbyBmcm9tICcuL2ltYWdlcy9pY2VfZXNwcmVzc28uanBnJztcbmltcG9ydCBMYXR0ZSBmcm9tICcuL2ltYWdlcy9sYXR0ZS5qcGcnO1xuaW1wb3J0IFNhbmR3aWNoIGZyb20gJy4vaW1hZ2VzL3NhbmR3aWNoLmpwZyc7XG5cbmNvbnN0IHByb2R1Y3RzID0gW1xuICAgIHtcbiAgICAgICAgaW1hZ2U6IEFtZXJpY2FubyxcbiAgICAgICAgbmFtZTogJ0FtZXJpY2FubycsXG4gICAgICAgIHByaWNlOiAnJDInLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbWFnZTogQ2hvY29sYXRlQ29mZmVlLFxuICAgICAgICBuYW1lOiAnQ2hvY29sYXRlIENvZmZlZScsXG4gICAgICAgIHByaWNlOiAnJDIuNScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGltYWdlOiBJY2VFc3ByZXNzbyxcbiAgICAgICAgbmFtZTogJ0ljZSBFc3ByZXNzbycsXG4gICAgICAgIHByaWNlOiAnJDIuNScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGltYWdlOiBMYXR0ZSxcbiAgICAgICAgbmFtZTogJ0hvdCBMYXR0ZScsXG4gICAgICAgIHByaWNlOiAnJDIuNScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGltYWdlOiBTYW5kd2ljaCxcbiAgICAgICAgbmFtZTogJ0hhbSBTYW5kd2ljaCcsXG4gICAgICAgIHByaWNlOiAnJDMuMjUnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbWFnZTogQ3JvaXNzYW50LFxuICAgICAgICBuYW1lOiAnQ3JvaXNzYW50JyxcbiAgICAgICAgcHJpY2U6ICckMi4yNScsXG4gICAgfVxuXVxuXG5mdW5jdGlvbiBnZW5lcmF0ZURPTSgpIHtcblxuICAgIC8vIEJvZHkgYW5kIG1haW4gZGl2XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5pZCA9ICdtYWluJztcbiAgICBib2R5LmFwcGVuZChtYWluKTtcblxuICAgIC8vIE1lbnUgZGl2XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIG1haW4uYXBwZW5kKG1lbnUpO1xuICAgIFxuICAgIC8vIEJhY2tncm91bmQgaW1hZ2VcbiAgICBjb25zdCBiYWNrZ3JvdW5kSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiYWNrZ3JvdW5kSW1hZ2UuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZC1pbWFnZScpO1xuICAgIG1haW4uYXBwZW5kKGJhY2tncm91bmRJbWFnZSk7XG5cbiAgICBjb25zdCBtZW51QmFja2dyb3VuZFBhdHRlcm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51QmFja2dyb3VuZFBhdHRlcm4uY2xhc3NMaXN0LmFkZCgnbWVudS1iYWNrZ3JvdW5kLXBhdHRlcm4nKTtcbiAgICBtZW51LmFwcGVuZChtZW51QmFja2dyb3VuZFBhdHRlcm4pO1xuXG4gICAgY29uc3QgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGFjZWhvbGRlci5jbGFzc0xpc3QuYWRkKCdwbGFjZWhvbGRlcicpO1xuICAgIG1lbnUuYXBwZW5kKHBsYWNlaG9sZGVyKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtcy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW1zJyk7XG4gICAgbWVudS5hcHBlbmQobWVudUl0ZW1zKTtcbiAgICBcbiAgICBjb25zdCBtZW51SXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbTEuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgbWVudUl0ZW0xLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIG1lbnVJdGVtcy5hcHBlbmQobWVudUl0ZW0xKTtcbiAgICBtZW51SXRlbTEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZUhvbWVEaXYoKTtcbiAgICB9KVxuICAgIFxuICAgIGNvbnN0IG1lbnVJdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtMi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBtZW51SXRlbTIudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgbWVudUl0ZW1zLmFwcGVuZChtZW51SXRlbTIpO1xuICAgIG1lbnVJdGVtMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY3JlYXRlU2hvcERpdigpO1xuICAgIH0pXG4gICAgXG4gICAgY29uc3QgbWVudUl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW0zLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIG1lbnVJdGVtMy50ZXh0Q29udGVudCA9ICdBYm91dCc7XG4gICAgbWVudUl0ZW1zLmFwcGVuZChtZW51SXRlbTMpO1xuICAgIG1lbnVJdGVtMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY3JlYXRlQWJvdXREaXYoKTtcbiAgICB9KVxuICAgIFxuICAgIGNvbnN0IG1lbnVJdGVtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtNC5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBtZW51SXRlbTQudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gICAgbWVudUl0ZW1zLmFwcGVuZChtZW51SXRlbTQpO1xuICAgIG1lbnVJdGVtNC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY3JlYXRlQ29udGFjdFVzRGl2KCk7XG4gICAgfSlcbiAgICBcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lbnUtaXRlbScpKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBpdGVtLm9ubW91c2VvdmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgbWVudS5kYXRhc2V0LmFjdGl2ZUluZGV4ID0gaW5kZXg7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gQ29udGVudCBkaXZcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG4gICAgbWFpbi5hcHBlbmQoY29udGVudCk7XG5cbiAgICBjb25zdCBtZW51TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVMb2dvLmNsYXNzTGlzdC5hZGQoJ21lbnUtbG9nbycpO1xuICAgIGNvbnRlbnQuYXBwZW5kKG1lbnVMb2dvKTtcblxuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtY29udGFpbmVyJyk7XG4gICAgY29udGVudC5hcHBlbmQoY29udGVudENvbnRhaW5lcik7XG4gICAgXG4gICAgY3JlYXRlSG9tZURpdigpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlSG9tZURpdigpIHtcbiAgICAgICAgY29uc3QgY29udGVudENvbnRhaW5lckhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xuICAgICAgICBpZiAoIWNvbnRlbnRDb250YWluZXJIb21lKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVySG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScsICdoaWRlJyk7XG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZChjb250ZW50Q29udGFpbmVySG9tZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcDEudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gb3VyIGNvZmZlZSByZWFsbVwiXG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVySG9tZS5hcHBlbmQocDEpO1xuXG4gICAgICAgICAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHAyLnRleHRDb250ZW50ID0gXCJXb3JraW5nIGhvdXJzOlwiXG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVySG9tZS5hcHBlbmQocDIpO1xuXG4gICAgICAgICAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHAzLnRleHRDb250ZW50ID0gXCJNb25kYXkgLSBGcmlkYXk6IDZhbSAtIDVwbVwiXG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVySG9tZS5hcHBlbmQocDMpO1xuXG4gICAgICAgICAgICBjb25zdCBwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHA0LnRleHRDb250ZW50ID0gXCJTYXR1cmRheSAtIFN1bmRheSA4YW0gLSA0cG1cIlxuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckhvbWUuYXBwZW5kKHA0KTtcblxuICAgICAgICAgICAgZGVsZXRlU2hvcERpdigpO1xuICAgICAgICAgICAgZGVsZXRlQWJvdXREaXYoKTtcbiAgICAgICAgICAgIGRlbGV0ZUNvbnRhY3RVc0RpdigpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb250ZW50Q29udGFpbmVySG9tZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNob3BEaXYoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXJTaG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3AnKTtcbiAgICAgICAgaWYgKCFjb250ZW50Q29udGFpbmVyU2hvcCkge1xuICAgICAgICAgICAgY29uc3QgY29udGVudENvbnRhaW5lclNob3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJTaG9wLmNsYXNzTGlzdC5hZGQoJ3Nob3AnLCAnaGlkZScpO1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmQoY29udGVudENvbnRhaW5lclNob3ApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHAgb2YgcHJvZHVjdHMpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVQcm9kdWN0cyhwKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIFByb2R1Y3QgZGl2IHN0YXJ0XG5cbiAgICAgICAgICAgIC8vIFByb2R1Y3QgZGl2IGVuZFxuICAgICAgICBcblxuICAgICAgICAgICAgZGVsZXRlSG9tZURpdigpO1xuICAgICAgICAgICAgZGVsZXRlQWJvdXREaXYoKTtcbiAgICAgICAgICAgIGRlbGV0ZUNvbnRhY3RVc0RpdigpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb250ZW50Q29udGFpbmVyU2hvcC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9kdWN0cyhwcm9kdWN0RGV0YWlscykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcHJvZHVjdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvZHVjdC1pdGVtJyk7XG4gICAgICAgICAgICAgICAgY29udGVudENvbnRhaW5lclNob3AuYXBwZW5kKHByb2R1Y3RJdGVtKTtcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0UGljdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHByb2R1Y3RQaWN0dXJlLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtaXRlbS1waWN0dXJlJyk7XG4gICAgICAgICAgICAgICAgcHJvZHVjdEl0ZW0uYXBwZW5kKHByb2R1Y3RQaWN0dXJlKTtcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICBpbWFnZUVsZW1lbnQuc3JjID0gcHJvZHVjdERldGFpbHMuaW1hZ2U7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFBpY3R1cmUuYXBwZW5kKGltYWdlRWxlbWVudCk7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBwcm9kdWN0SW5mby5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LWl0ZW0taW5mbycpO1xuICAgICAgICAgICAgICAgIHByb2R1Y3RJdGVtLmFwcGVuZChwcm9kdWN0SW5mbyk7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBwcm9kdWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LWl0ZW0tbmFtZScpO1xuICAgICAgICAgICAgICAgIHByb2R1Y3ROYW1lLnRleHRDb250ZW50ID0gcHJvZHVjdERldGFpbHMubmFtZTtcbiAgICAgICAgICAgICAgICBwcm9kdWN0SW5mby5hcHBlbmQocHJvZHVjdE5hbWUpO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHByb2R1Y3RQcmljZS5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LWl0ZW0tcHJpY2UnKTtcbiAgICAgICAgICAgICAgICBwcm9kdWN0UHJpY2UudGV4dENvbnRlbnQgPSBwcm9kdWN0RGV0YWlscy5wcmljZTtcbiAgICAgICAgICAgICAgICBwcm9kdWN0SW5mby5hcHBlbmQocHJvZHVjdFByaWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFib3V0RGl2KCkge1xuICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVyQWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQnKTtcbiAgICAgICAgaWYgKCFjb250ZW50Q29udGFpbmVyQWJvdXQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXJBYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckFib3V0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0JywgJ2hpZGUnKTtcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kKGNvbnRlbnRDb250YWluZXJBYm91dCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcDEudGV4dENvbnRlbnQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFNlZCBhdWN0b3IgaW1wZXJkaWV0IGNvbnNlY3RldHVyLiBOYW0gcG9zdWVyZSwgZGlhbSBzZWQgdml2ZXJyYSBzb2xsaWNpdHVkaW4sIGlwc3VtIGVyYXQgbWFsZXN1YWRhIHZlbGl0LCBlZ2V0IGRpY3R1bSBhcmN1IGFyY3UgaWQgZXJvcy4gRXRpYW0gZmluaWJ1cyBwZWxsZW50ZXNxdWUgbmlzbCwgdmVsIHBvc3VlcmUgZW5pbSBzdXNjaXBpdCBldC4gRG9uZWMgcGVsbGVudGVzcXVlIHBvcnR0aXRvciBuZXF1ZSBzZWQgbW9sZXN0aWUuIE51bmMgYWMgcXVhbSBub24gZG9sb3IgZmF1Y2lidXMgY29uZ3VlIGV0IHNlZCBsb3JlbS4gQ3VyYWJpdHVyIGV0IGhlbmRyZXJpdCBkaWFtLCB1dCB0aW5jaWR1bnQgcHVydXMuIE1hZWNlbmFzIHBvc3VlcmUgYW50ZSBpZCB1cm5hIHZ1bHB1dGF0ZSB1bHRyaWNpZXMuIFByYWVzZW50IHZlbmVuYXRpcyBjb25zZWN0ZXR1ciBuaXNsLCBhdCBzYWdpdHRpcyBsYWN1cyBhY2N1bXNhbiBzaXQgYW1ldC4gU3VzcGVuZGlzc2UgbmVjIGJpYmVuZHVtIGV4LiBTdXNwZW5kaXNzZSB2aXRhZSB0ZWxsdXMgYXQgZG9sb3IgdHJpc3RpcXVlIGZyaW5naWxsYS5cIjtcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJBYm91dC5hcHBlbmQocDEpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHAyLnRleHRDb250ZW50ID0gXCJGdXNjZSBhYyBkdWkgdGluY2lkdW50LCB1bGxhbWNvcnBlciBleCB2aXRhZSwgdm9sdXRwYXQgbGVjdHVzLiBQcmFlc2VudCBsYWNpbmlhIG5pYmggaWQgdHVycGlzIHBlbGxlbnRlc3F1ZSBzb2xsaWNpdHVkaW4uIEN1cmFiaXR1ciBwdWx2aW5hciBhbGlxdWV0IHJpc3VzIHNpdCBhbWV0IGltcGVyZGlldC4gQWVuZWFuIGEgZXJvcyBzb2RhbGVzLCBpbXBlcmRpZXQgbGliZXJvIGV0LCB1bHRyaWNlcyBkb2xvci4gVml2YW11cyBlbGl0IG5lcXVlLCBwb3N1ZXJlIGFjIHNlbSBpbiwgcnV0cnVtIGZhdWNpYnVzIGRvbG9yLiBOdW5jIGFsaXF1YW0gbWV0dXMgbWF1cmlzLiBOYW0gc29sbGljaXR1ZGluIGRvbG9yIG5pc2wsIGVnZXQgY29uc2VxdWF0IHZlbGl0IG1hbGVzdWFkYSBldC4gUGhhc2VsbHVzIG5lYyBtYXR0aXMgc2VtLiBOYW0gb2RpbyBsb3JlbSwgaWFjdWxpcyBzZWQgZGlhbSBub24sIHZlaGljdWxhIGhlbmRyZXJpdCBleC4gUHJvaW4gZWxpdCBleCwgY29uc2VjdGV0dXIgdmVsIGNvbnNlY3RldHVyIGlkLCBwdWx2aW5hciBhIG1ldHVzLiBGdXNjZSBmaW5pYnVzIHZ1bHB1dGF0ZSBlbGVpZmVuZC4gSW4gbm9uIHF1YW0gYXQgbGlndWxhIGJpYmVuZHVtIHNjZWxlcmlzcXVlIGF0IHF1aXMgbnVsbGEuIEZ1c2NlIGVsZWlmZW5kIGVnZXQgZXN0IGVnZXQgdHJpc3RpcXVlLiBNYXVyaXMgc2VtcGVyIHNvZGFsZXMgbmliaCwgc2VkIHZlc3RpYnVsdW0gdmVsaXQgbHVjdHVzIHNlZC4gU2VkIG5vbiBtZXR1cyB0ZW1wdXMsIGZpbmlidXMgaXBzdW0gbmVjLCBlbGVpZmVuZCBuaWJoLiBNb3JiaSBub24gbG9yZW0gZWdldCBsYWN1cyBhY2N1bXNhbiB2aXZlcnJhIGEgZWdldCBuZXF1ZS5cIjtcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJBYm91dC5hcHBlbmQocDIpO1xuXG4gICAgICAgICAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHAzLnRleHRDb250ZW50ID0gXCJNb3JiaSBtYXhpbXVzIG5pYmggc2FwaWVuLCBjb25zZWN0ZXR1ciBsdWN0dXMgc2FwaWVuIGNvbmd1ZSBuZWMuIFZpdmFtdXMgaW4gcHVydXMgZnJpbmdpbGxhLCBjb25zZWN0ZXR1ciBuZXF1ZSBldCwgdGluY2lkdW50IG9kaW8uIFNlZCBldWlzbW9kIGRhcGlidXMgb2RpbyBuZWMgb3JuYXJlLiBOdWxsYW0gaWQgZmVybWVudHVtIGp1c3RvLCBlZ2V0IGZhY2lsaXNpcyBwdXJ1cy4gU2VkIG5lYyBtaSBldSBsZWN0dXMgdm9sdXRwYXQgdHJpc3RpcXVlLiBJbiBhdCByaXN1cyBudW5jLiBRdWlzcXVlIHZlc3RpYnVsdW0gZnJpbmdpbGxhIGRpZ25pc3NpbS4gQ3JhcyBudW5jIGVzdCwgbW9sbGlzIGVnZXQgbnVuYyBwb3J0dGl0b3IsIG1hdHRpcyBzZW1wZXIgZW5pbS5cIjtcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJBYm91dC5hcHBlbmQocDMpO1xuXG4gICAgICAgICAgICBkZWxldGVIb21lRGl2KCk7XG4gICAgICAgICAgICBkZWxldGVTaG9wRGl2KCk7XG4gICAgICAgICAgICBkZWxldGVDb250YWN0VXNEaXYoKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29udGVudENvbnRhaW5lckFib3V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQ29udGFjdFVzRGl2KCkge1xuICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVyQ29udGFjdFVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtdXMnKTtcbiAgICAgICAgaWYgKCFjb250ZW50Q29udGFpbmVyQ29udGFjdFVzKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVyQ29udGFjdFVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyQ29udGFjdFVzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtdXMnLCAnaGlkZScpO1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmQoY29udGVudENvbnRhaW5lckNvbnRhY3RVcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcDIudGV4dENvbnRlbnQgPSBcIlNldiBMZW9cIlxuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckNvbnRhY3RVcy5hcHBlbmQocDIpO1xuXG4gICAgICAgICAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHAzLnRleHRDb250ZW50ID0gXCJzZXZhLmxlb25vdkBob3RtYWlsLmNvbVwiXG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyQ29udGFjdFVzLmFwcGVuZChwMyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHA0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcDQudGV4dENvbnRlbnQgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9zZXZsZW9cIlxuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckNvbnRhY3RVcy5hcHBlbmQocDQpO1xuXG4gICAgICAgICAgICBkZWxldGVIb21lRGl2KCk7XG4gICAgICAgICAgICBkZWxldGVTaG9wRGl2KCk7XG4gICAgICAgICAgICBkZWxldGVBYm91dERpdigpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb250ZW50Q29udGFpbmVyQ29udGFjdFVzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVIb21lRGl2KCkge1xuICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVySG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJyk7XG4gICAgICAgIGlmIChjb250ZW50Q29udGFpbmVySG9tZSkge1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckhvbWUucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVTaG9wRGl2KCkge1xuICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVyU2hvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG9wJyk7XG4gICAgICAgIGlmIChjb250ZW50Q29udGFpbmVyU2hvcCkge1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lclNob3AucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVBYm91dERpdigpIHtcbiAgICAgICAgY29uc3QgY29udGVudENvbnRhaW5lckFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0Jyk7XG4gICAgICAgIGlmIChjb250ZW50Q29udGFpbmVyQWJvdXQpIHtcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJBYm91dC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUNvbnRhY3RVc0RpdigpIHtcbiAgICAgICAgY29uc3QgY29udGVudENvbnRhaW5lckNvbnRhY3RVcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LXVzJyk7XG4gICAgICAgIGlmIChjb250ZW50Q29udGFpbmVyQ29udGFjdFVzKSB7XG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyQ29udGFjdFVzLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmV4cG9ydCB7Z2VuZXJhdGVET019OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHtnZW5lcmF0ZURPTX0gZnJvbSAnLi9wYWdlLWxvYWRlcic7XG5cbmdlbmVyYXRlRE9NKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
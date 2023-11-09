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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&family=Lato:wght@100&family=Roboto:wght@100&family=Rubik:wght@300&display=swap');\n\n/* General styles */\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    \n}\n\nhtml {\n    font-family: 'Lato', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n    background: #333; /* Change the color to your preference */\n    /* border-radius: 6px; */\n}\n\n::-webkit-scrollbar:hover {\n    background: rgba(20, 20, 20); /* Change the color to your preference */\n}\n\n::-webkit-scrollbar-thumb:hover {\n    background: #555; /* Change the color to your preference */\n}\n\n\n/* Desktop screen */\n\n@media (min-width: 800px) {\n\n    body {\n        width: 100vw;\n        height: 100vh;\n        background-color: rgba(20, 20, 20);\n        overflow-x: hidden;\n    }\n\n    #main {\n        width: 100%;\n        height: 100%;\n    }\n\n    .background-image {\n        background-image: url('images/rizky-subagja-1k7TnX5GAww-unsplash.jpg');\n    }\n\n    #main {\n        display: grid;\n        grid-template-rows: 1fr;\n        grid-template-columns: 300px 1fr;\n        position: relative;\n    }\n\n    .menu {\n        background-color: rgba(0, 0, 0, 0.200);\n        backdrop-filter: blur(3px);\n        z-index: 2;\n        box-shadow: 1px 0px 3px 0px rgba(20,20,20,0.2);\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n        justify-content: start;\n        position: fixed;\n        height: 100%;\n        width: 300px;\n    }\n\n    .menu-item {\n        color: white;\n        /* font-size: clamp(1rem, 2.5vw, 4rem); */\n        font-size: 35px;\n        display: block;\n        text-decoration: none;\n        /* padding: clamp(0.50rem, 1vw, 2rem) 0rem; */\n        padding: 10px;\n        /* padding: 50px; */\n        transition: opacity 400ms ease;\n        cursor: pointer;\n    }\n    \n    .menu-items {\n        /* margin-left: clamp(1rem, 3vw, 8rem); */\n        margin-left: 35px;\n        margin-bottom: 25px;\n        position: relative;\n        z-index: 3;\n        width: 100%;\n    }\n\n    /* Placeholder to create offset on menu tab to align menu-items with content-containers */\n    .placeholder {\n        height: 150px;\n        width: 100%;\n        flex-shrink: 1;\n    }\n    \n    .menu:hover .menu-item {\n        opacity: 0.5;\n    }\n    \n    .menu:hover .menu-item:hover {\n        opacity: 1;\n    }\n    \n    .menu-background-pattern {\n        height: 100%;\n        width: 100%;\n    \n        background-image: radial-gradient(\n            rgba(2255, 255, 255, 0.1) 2%,\n            transparent 12%\n        );\n        \n        background-position: 0% 0%;\n        background-size: 9.5vmin 9.5vmin;\n    \n        position: absolute;\n        left: 0px;\n        top: 0px;\n        z-index: 2;\n        transition: opacity 800ms ease, \n                    background-size 800ms ease,\n                    background-position 800ms ease;\n    }\n    \n    .menu:hover > .menu-background-pattern {\n        background-size: 12.5vmin 12.5vmin;\n        opacity: 0.7;\n    }\n    \n    .menu[data-active-index=\"0\"] > .menu-background-pattern {\n        background-position: 0% -25%;\n    }\n    \n    .menu[data-active-index=\"1\"] > .menu-background-pattern {\n        background-position: 0% -50%;\n    }\n    \n    .menu[data-active-index=\"2\"] > .menu-background-pattern {\n        background-position: 0% -75%;\n    }\n    \n    .menu[data-active-index=\"3\"] > .menu-background-pattern {\n        background-position: 0% -100%;\n    }\n    \n    .menu[data-active-index=\"0\"] ~ .background-image {\n        background-position: center 45%;\n        transition: opacity 800ms ease,\n        background-size 800ms ease,\n        background-position 800ms ease;\n    }\n      \n    .menu[data-active-index=\"1\"] ~ .background-image {\n        background-position: center 50%;\n        transition: opacity 800ms ease,\n        background-size 800ms ease,\n        background-position 800ms ease;\n    }\n    \n    .menu[data-active-index=\"2\"] ~ .background-image {\n        background-position: center 55%;\n        transition: opacity 800ms ease,\n        background-size 800ms ease,\n        background-position 800ms ease;\n    }\n    \n    .menu[data-active-index=\"3\"] ~ .background-image {\n        background-position: center 60%;\n        transition: opacity 800ms ease,\n        background-size 800ms ease,\n        background-position 800ms ease;\n    }\n    \n    .menu:hover ~ .background-image {\n        background-size: 100vmax;\n        opacity: 0.50;\n        transition: opacity 800ms ease,\n        background-size 800ms ease,\n        background-position 800ms ease;\n    }\n\n    .content {\n        display: grid;\n        justify-content: center;\n        grid-row: 1 / 2;\n        grid-column: 2 / 3;\n        grid-template-columns: 1fr;\n        /* margin-left: minmax(300px, 1fr); */\n        grid-template-rows: minmax(10px, 50px) 9fr;\n    }\n\n    .menu-logo {\n        background-image: url('images/Screenshot_2023-11-07_at_4.51.02_PM-removebg-preview.png');\n        background-size: contain;\n        background-repeat: no-repeat;\n        background-position: center;\n\n        z-index: 1;\n        height: max(10%, 50px);\n        width: 40%;\n        position: fixed;\n        grid-column: 1 / 2;\n        grid-row: 1 / 2;\n        justify-self: center;\n        border-bottom: 0.5px white solid;\n    }\n\n    .content-container {\n        position: relative;\n        grid-column: 1 / 2;\n        grid-row: 2 / 3;\n        padding: clamp(10px, 15vh, 100px) 20px 10px 20px;\n        color: white;\n        z-index: 2;\n        width: 80%;\n        max-width: 700px;\n        justify-self: center;\n        display: flex;\n    }\n\n    .content-container > div {\n        transition: opacity 1s ease-out;\n        opacity: 1;\n        transform: translateX(0%);\n        box-shadow: 0px 0px 100px 50px rgba(20,20,20,1);\n        height: fit-content;\n        width: 100%;\n        padding: 15px;\n\n\n        --b: 0.5px; /* thickness of the border */\n        --c: rgb(255, 255, 255); /* color of the border */\n        --w: 100px; /* width of border */\n        \n        border: var(--b) solid #0000;\n        --_g: #0000 90deg,var(--c) 0;\n        --_p: var(--w) var(--w) border-box no-repeat;\n        background:\n            conic-gradient(from 90deg  at top    var(--b) left  var(--b),var(--_g)) 0    0    / var(--_p),\n            conic-gradient(from 180deg at top    var(--b) right var(--b),var(--_g)) 100% 0    / var(--_p),\n            conic-gradient(from 0deg   at bottom var(--b) left  var(--b),var(--_g)) 0    100% / var(--_p),\n            conic-gradient(from -90deg at bottom var(--b) right var(--b),var(--_g)) 100% 100% / var(--_p);\n            \n            background-color: rgba(20, 20, 20, 0.8);\n    }\n\n\n    .content-container > div.hide {\n        opacity: 0;\n    }\n\n    .home p:first-child {\n    margin-bottom: 30px;\n    }\n\n    .product-item {\n        display: flex;\n        justify-content: space-between;\n        align-content: center;\n        width: 100%;\n        height: 200px;\n        margin-bottom: 20px;\n    }\n\n    .product-item-info {\n        display: flex;\n        flex-direction: column;\n        align-content: center;\n        justify-content: center;\n        width: 50%;\n        gap: 15px;\n    }\n\n    .product-item-name,\n    .product-item-price {\n        text-align: center;\n        font-size: clamp(1rem, 2.5vw, 4rem);\n        width: fit-content;\n        margin-left: auto;\n        margin-right: auto;\n    }\n\n    .product-item-name {\n        border-bottom: 0.5px white solid;\n    }\n\n    .product-item-picture {\n        width: 50%;\n        height: auto;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .product-item-picture img {\n        max-width: 50%;\n        /* max-height: 100%; */\n        border-radius: 15px;\n        height: auto;\n        box-shadow: 0px 0px 1px 1px rgb(255, 255, 255);\n        /* height: auto; */\n    }\n\n}\n\n\n/* Mobile screen */\n\n@media (max-width: 800px) {\n\n    body {\n        height: calc(100vh - 80px);\n    }\n\n    .background-image {\n        background-image: url('images/rizky-subagja-1k7TnX5GAww-unsplash.jpg');\n    }\n\n\n    #main {\n        height: 100%;\n    }\n\n    .menu {\n        position: fixed;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background-color: rgb(20, 20, 20);\n        z-index: 5;\n        width: 100%;\n        height: 80px;\n        top: 0;\n        box-shadow: 0px 3px 3px 0px rgba(20,20,20,1);\n    }\n\n    .menu-items {\n        display: flex;\n        color: white;\n        width: 100%;\n        padding-left: 3%;\n        padding-right: 3%;\n    }\n\n    .menu-item {\n        z-index: 1;\n        flex: 1 1 0;\n        text-align: center;\n\n    }\n\n    .menu-items > div:not(:last-child) {\n        border-right: 0.5px solid white;\n    }\n\n    .content {\n        height: fit-content;\n        margin-top: 80px;\n    }\n\n    .content-container {\n        height: fit-content;\n        display: flex;\n        flex-direction: column;\n        justify-content: start;\n        align-items: center;\n    }\n\n    .content-container > div {\n        transition: opacity 1s ease-out;\n        opacity: 1;\n        transform: translateX(0%);\n        box-shadow: 0px 0px 100px 50px rgba(20,20,20,1);\n        height: fit-content;\n        width: 80%;\n        max-width: 550px;\n        padding: 15px;\n\n\n        --b: 0.5px; /* thickness of the border */\n        --c: rgb(255, 255, 255); /* color of the border */\n        --w: 50px; /* width of border */\n        \n        border: var(--b) solid #0000;\n        --_g: #0000 90deg,var(--c) 0;\n        --_p: var(--w) var(--w) border-box no-repeat;\n        background:\n            conic-gradient(from 90deg  at top    var(--b) left  var(--b),var(--_g)) 0    0    / var(--_p),\n            conic-gradient(from 180deg at top    var(--b) right var(--b),var(--_g)) 100% 0    / var(--_p),\n            conic-gradient(from 0deg   at bottom var(--b) left  var(--b),var(--_g)) 0    100% / var(--_p),\n            conic-gradient(from -90deg at bottom var(--b) right var(--b),var(--_g)) 100% 100% / var(--_p);\n            \n            background-color: rgba(20, 20, 20, 0.8);\n    }\n\n    .content-container {\n        padding: clamp(10px, 15vh, 50px) 20px 10px 20px;\n        color: white;\n        z-index: 2;\n    }\n\n    .product-item {\n        display: flex;\n        justify-content: space-between;\n        align-content: center;\n        width: 100%;\n        height: 150px;\n        margin-bottom: 20px;\n    }\n\n    .product-item-info {\n        display: flex;\n        flex-direction: column;\n        align-content: center;\n        justify-content: center;\n        width: 50%;\n        gap: 15px;\n    }\n\n    .product-item-name,\n    .product-item-price {\n        text-align: center;\n        font-size: clamp(1rem, 3vw, 4rem);\n        width: fit-content;\n        margin-left: auto;\n        margin-right: auto;\n    }\n\n    .product-item-name {\n        border-bottom: 0.5px white solid;\n    }\n\n    .product-item-picture {\n        width: 50%;\n        height: auto;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .product-item-picture img {\n        max-width: 65%;\n        max-height: 140px;\n        border-radius: 15px;\n        height: auto;\n        box-shadow: 0px 0px 1px 1px rgb(255, 255, 255);\n        /* height: auto; */\n    }\n\n    .shop {\n        margin: 30px\n\n    }\n\n}\n\n\n/* Any screen */\n\nbody {\n    width: 100vw;\n    background-color: rgba(20, 20, 20);\n    overflow-x: hidden;\n}\n\n.background-image {\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    left: 0px;\n    top: 0px;\n    background-position: center 50%;\n    background-size: 110vmax;\n    background-repeat: no-repeat;\n\n    opacity: 0.75;\n    filter: blur(0px);\n}\n\np {\n    font-size: clamp(1rem, 2vw, 4rem);\n    /* font-weight: 500; */\n    line-height: 50px;\n    text-align: center;\n}"],"sourceRoot":""}]);
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
const productDetails = {
    image: 'images/americano.jpg',
    name: 'Americano',
    price: '$2',
}


const products = [
    {
        image: 'images/americano.jpg',
        name: 'Americano',
        price: '$2',
    },
    {
        image: 'images/chocolate_coffee.jpg',
        name: 'Chocolate Coffee',
        price: '$2.5',
    },
    {
        image: 'images/ice_espresso.jpg',
        name: 'Ice Espresso',
        price: '$2.5',
    },
    {
        image: 'images/latte.jpg',
        name: 'Hot Latte',
        price: '$2.5',
    },
    {
        image: 'images/sandwich.jpg',
        name: 'Ham Sandwich',
        price: '$3.25',
    },
    {
        image: 'images/croissant.jpg',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxPQUFPLEtBQUssd0JBQXdCLE9BQU8sS0FBSyx3QkFBd0IsUUFBUSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxPQUFPLE1BQU0sWUFBWSxjQUFjLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxPQUFPLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxzQkFBc0IseUJBQXlCLHdCQUF3QixhQUFhLGFBQWEsYUFBYSxTQUFTLFFBQVEsYUFBYSxRQUFRLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxzQkFBc0IseUJBQXlCLHdCQUF3QixhQUFhLGFBQWEsYUFBYSxTQUFTLFFBQVEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLE1BQU0sTUFBTSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtB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RyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDelNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDb0I7O0FBRTFDLHlEQUFXLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9wYWdlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3Jpemt5LXN1YmFnamEtMWs3VG5YNUdBd3ctdW5zcGxhc2guanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL1NjcmVlbnNob3RfMjAyMy0xMS0wN19hdF80LjUxLjAyX1BNLXJlbW92ZWJnLXByZXZpZXcucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6d2dodEAxMDAmZmFtaWx5PUxhdG86d2dodEAxMDAmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMCZmYW1pbHk9UnViaWs6d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEdlbmVyYWwgc3R5bGVzICovXG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgXG59XG5cbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDEwcHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICMzMzM7IC8qIENoYW5nZSB0aGUgY29sb3IgdG8geW91ciBwcmVmZXJlbmNlICovXG4gICAgLyogYm9yZGVyLXJhZGl1czogNnB4OyAqL1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwLCAyMCwgMjApOyAvKiBDaGFuZ2UgdGhlIGNvbG9yIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTU1OyAvKiBDaGFuZ2UgdGhlIGNvbG9yIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xufVxuXG5cbi8qIERlc2t0b3Agc2NyZWVuICovXG5cbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xuXG4gICAgYm9keSB7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjAsIDIwKTtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIH1cblxuICAgICNtYWluIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAuYmFja2dyb3VuZC1pbWFnZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICB9XG5cbiAgICAjbWFpbiB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIC5tZW51IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIwMCk7XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICBib3gtc2hhZG93OiAxcHggMHB4IDNweCAwcHggcmdiYSgyMCwyMCwyMCwwLjIpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgIH1cblxuICAgIC5tZW51LWl0ZW0ge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIC8qIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMi41dncsIDRyZW0pOyAqL1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIC8qIHBhZGRpbmc6IGNsYW1wKDAuNTByZW0sIDF2dywgMnJlbSkgMHJlbTsgKi9cbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgLyogcGFkZGluZzogNTBweDsgKi9cbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtcyBlYXNlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5tZW51LWl0ZW1zIHtcbiAgICAgICAgLyogbWFyZ2luLWxlZnQ6IGNsYW1wKDFyZW0sIDN2dywgOHJlbSk7ICovXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC8qIFBsYWNlaG9sZGVyIHRvIGNyZWF0ZSBvZmZzZXQgb24gbWVudSB0YWIgdG8gYWxpZ24gbWVudS1pdGVtcyB3aXRoIGNvbnRlbnQtY29udGFpbmVycyAqL1xuICAgIC5wbGFjZWhvbGRlciB7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmbGV4LXNocmluazogMTtcbiAgICB9XG4gICAgXG4gICAgLm1lbnU6aG92ZXIgLm1lbnUtaXRlbSB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gICAgXG4gICAgLm1lbnU6aG92ZXIgLm1lbnUtaXRlbTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIFxuICAgIC5tZW51LWJhY2tncm91bmQtcGF0dGVybiB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChcbiAgICAgICAgICAgIHJnYmEoMjI1NSwgMjU1LCAyNTUsIDAuMSkgMiUsXG4gICAgICAgICAgICB0cmFuc3BhcmVudCAxMiVcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDkuNXZtaW4gOS41dm1pbjtcbiAgICBcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDgwMG1zIGVhc2UsIFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemUgODAwbXMgZWFzZSxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbiA4MDBtcyBlYXNlO1xuICAgIH1cbiAgICBcbiAgICAubWVudTpob3ZlciA+IC5tZW51LWJhY2tncm91bmQtcGF0dGVybiB7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTIuNXZtaW4gMTIuNXZtaW47XG4gICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICB9XG4gICAgXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XCIwXCJdID4gLm1lbnUtYmFja2dyb3VuZC1wYXR0ZXJuIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgLTI1JTtcbiAgICB9XG4gICAgXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XCIxXCJdID4gLm1lbnUtYmFja2dyb3VuZC1wYXR0ZXJuIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgLTUwJTtcbiAgICB9XG4gICAgXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XCIyXCJdID4gLm1lbnUtYmFja2dyb3VuZC1wYXR0ZXJuIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgLTc1JTtcbiAgICB9XG4gICAgXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XCIzXCJdID4gLm1lbnUtYmFja2dyb3VuZC1wYXR0ZXJuIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgLTEwMCU7XG4gICAgfVxuICAgIFxuICAgIC5tZW51W2RhdGEtYWN0aXZlLWluZGV4PVwiMFwiXSB+IC5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDQ1JTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA4MDBtcyBlYXNlLFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemUgODAwbXMgZWFzZSxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbiA4MDBtcyBlYXNlO1xuICAgIH1cbiAgICAgIFxuICAgIC5tZW51W2RhdGEtYWN0aXZlLWluZGV4PVwiMVwiXSB+IC5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDUwJTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA4MDBtcyBlYXNlLFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemUgODAwbXMgZWFzZSxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbiA4MDBtcyBlYXNlO1xuICAgIH1cbiAgICBcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cIjJcIl0gfiAuYmFja2dyb3VuZC1pbWFnZSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciA1NSU7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgODAwbXMgZWFzZSxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplIDgwMG1zIGVhc2UsXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24gODAwbXMgZWFzZTtcbiAgICB9XG4gICAgXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XCIzXCJdIH4gLmJhY2tncm91bmQtaW1hZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgNjAlO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDgwMG1zIGVhc2UsXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZSA4MDBtcyBlYXNlLFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uIDgwMG1zIGVhc2U7XG4gICAgfVxuICAgIFxuICAgIC5tZW51OmhvdmVyIH4gLmJhY2tncm91bmQtaW1hZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZtYXg7XG4gICAgICAgIG9wYWNpdHk6IDAuNTA7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgODAwbXMgZWFzZSxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplIDgwMG1zIGVhc2UsXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24gODAwbXMgZWFzZTtcbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIC8qIG1hcmdpbi1sZWZ0OiBtaW5tYXgoMzAwcHgsIDFmcik7ICovXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDEwcHgsIDUwcHgpIDlmcjtcbiAgICB9XG5cbiAgICAubWVudS1sb2dvIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblxuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBoZWlnaHQ6IG1heCgxMCUsIDUwcHgpO1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggd2hpdGUgc29saWQ7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICAgICAgcGFkZGluZzogY2xhbXAoMTBweCwgMTV2aCwgMTAwcHgpIDIwcHggMTBweCAyMHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIC5jb250ZW50LWNvbnRhaW5lciA+IGRpdiB7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1vdXQ7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTAwcHggNTBweCByZ2JhKDIwLDIwLDIwLDEpO1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMTVweDtcblxuXG4gICAgICAgIC0tYjogMC41cHg7IC8qIHRoaWNrbmVzcyBvZiB0aGUgYm9yZGVyICovXG4gICAgICAgIC0tYzogcmdiKDI1NSwgMjU1LCAyNTUpOyAvKiBjb2xvciBvZiB0aGUgYm9yZGVyICovXG4gICAgICAgIC0tdzogMTAwcHg7IC8qIHdpZHRoIG9mIGJvcmRlciAqL1xuICAgICAgICBcbiAgICAgICAgYm9yZGVyOiB2YXIoLS1iKSBzb2xpZCAjMDAwMDtcbiAgICAgICAgLS1fZzogIzAwMDAgOTBkZWcsdmFyKC0tYykgMDtcbiAgICAgICAgLS1fcDogdmFyKC0tdykgdmFyKC0tdykgYm9yZGVyLWJveCBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICBjb25pYy1ncmFkaWVudChmcm9tIDkwZGVnICBhdCB0b3AgICAgdmFyKC0tYikgbGVmdCAgdmFyKC0tYiksdmFyKC0tX2cpKSAwICAgIDAgICAgLyB2YXIoLS1fcCksXG4gICAgICAgICAgICBjb25pYy1ncmFkaWVudChmcm9tIDE4MGRlZyBhdCB0b3AgICAgdmFyKC0tYikgcmlnaHQgdmFyKC0tYiksdmFyKC0tX2cpKSAxMDAlIDAgICAgLyB2YXIoLS1fcCksXG4gICAgICAgICAgICBjb25pYy1ncmFkaWVudChmcm9tIDBkZWcgICBhdCBib3R0b20gdmFyKC0tYikgbGVmdCAgdmFyKC0tYiksdmFyKC0tX2cpKSAwICAgIDEwMCUgLyB2YXIoLS1fcCksXG4gICAgICAgICAgICBjb25pYy1ncmFkaWVudChmcm9tIC05MGRlZyBhdCBib3R0b20gdmFyKC0tYikgcmlnaHQgdmFyKC0tYiksdmFyKC0tX2cpKSAxMDAlIDEwMCUgLyB2YXIoLS1fcCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDIwLCAyMCwgMC44KTtcbiAgICB9XG5cblxuICAgIC5jb250ZW50LWNvbnRhaW5lciA+IGRpdi5oaWRlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAuaG9tZSBwOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtaXRlbS1pbmZvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgZ2FwOiAxNXB4O1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWl0ZW0tbmFtZSxcbiAgICAucHJvZHVjdC1pdGVtLXByaWNlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDIuNXZ3LCA0cmVtKTtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWl0ZW0tbmFtZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHdoaXRlIHNvbGlkO1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWl0ZW0tcGljdHVyZSB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtaXRlbS1waWN0dXJlIGltZyB7XG4gICAgICAgIG1heC13aWR0aDogNTAlO1xuICAgICAgICAvKiBtYXgtaGVpZ2h0OiAxMDAlOyAqL1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDFweCByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgICAgIC8qIGhlaWdodDogYXV0bzsgKi9cbiAgICB9XG5cbn1cblxuXG4vKiBNb2JpbGUgc2NyZWVuICovXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuXG4gICAgYm9keSB7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xuICAgIH1cblxuICAgIC5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIH1cblxuXG4gICAgI21haW4ge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgLm1lbnUge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDIwLCAyMCk7XG4gICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggMHB4IHJnYmEoMjAsMjAsMjAsMSk7XG4gICAgfVxuXG4gICAgLm1lbnUtaXRlbXMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMlO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzJTtcbiAgICB9XG5cbiAgICAubWVudS1pdGVtIHtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgZmxleDogMSAxIDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIH1cblxuICAgIC5tZW51LWl0ZW1zID4gZGl2Om5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDAuNXB4IHNvbGlkIHdoaXRlO1xuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgbWFyZ2luLXRvcDogODBweDtcbiAgICB9XG5cbiAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC5jb250ZW50LWNvbnRhaW5lciA+IGRpdiB7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1vdXQ7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTAwcHggNTBweCByZ2JhKDIwLDIwLDIwLDEpO1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBtYXgtd2lkdGg6IDU1MHB4O1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuXG5cbiAgICAgICAgLS1iOiAwLjVweDsgLyogdGhpY2tuZXNzIG9mIHRoZSBib3JkZXIgKi9cbiAgICAgICAgLS1jOiByZ2IoMjU1LCAyNTUsIDI1NSk7IC8qIGNvbG9yIG9mIHRoZSBib3JkZXIgKi9cbiAgICAgICAgLS13OiA1MHB4OyAvKiB3aWR0aCBvZiBib3JkZXIgKi9cbiAgICAgICAgXG4gICAgICAgIGJvcmRlcjogdmFyKC0tYikgc29saWQgIzAwMDA7XG4gICAgICAgIC0tX2c6ICMwMDAwIDkwZGVnLHZhcigtLWMpIDA7XG4gICAgICAgIC0tX3A6IHZhcigtLXcpIHZhcigtLXcpIGJvcmRlci1ib3ggbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgY29uaWMtZ3JhZGllbnQoZnJvbSA5MGRlZyAgYXQgdG9wICAgIHZhcigtLWIpIGxlZnQgIHZhcigtLWIpLHZhcigtLV9nKSkgMCAgICAwICAgIC8gdmFyKC0tX3ApLFxuICAgICAgICAgICAgY29uaWMtZ3JhZGllbnQoZnJvbSAxODBkZWcgYXQgdG9wICAgIHZhcigtLWIpIHJpZ2h0IHZhcigtLWIpLHZhcigtLV9nKSkgMTAwJSAwICAgIC8gdmFyKC0tX3ApLFxuICAgICAgICAgICAgY29uaWMtZ3JhZGllbnQoZnJvbSAwZGVnICAgYXQgYm90dG9tIHZhcigtLWIpIGxlZnQgIHZhcigtLWIpLHZhcigtLV9nKSkgMCAgICAxMDAlIC8gdmFyKC0tX3ApLFxuICAgICAgICAgICAgY29uaWMtZ3JhZGllbnQoZnJvbSAtOTBkZWcgYXQgYm90dG9tIHZhcigtLWIpIHJpZ2h0IHZhcigtLWIpLHZhcigtLV9nKSkgMTAwJSAxMDAlIC8gdmFyKC0tX3ApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMCwgMjAsIDAuOCk7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZzogY2xhbXAoMTBweCwgMTV2aCwgNTBweCkgMjBweCAxMHB4IDIwcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWl0ZW0taW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGdhcDogMTVweDtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1pdGVtLW5hbWUsXG4gICAgLnByb2R1Y3QtaXRlbS1wcmljZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAzdncsIDRyZW0pO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtaXRlbS1uYW1lIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggd2hpdGUgc29saWQ7XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtaXRlbS1waWN0dXJlIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1pdGVtLXBpY3R1cmUgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2NSU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDE0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDFweCByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgICAgIC8qIGhlaWdodDogYXV0bzsgKi9cbiAgICB9XG5cbiAgICAuc2hvcCB7XG4gICAgICAgIG1hcmdpbjogMzBweFxuXG4gICAgfVxuXG59XG5cblxuLyogQW55IHNjcmVlbiAqL1xuXG5ib2R5IHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjAsIDIwKTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IDBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgNTAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTEwdm1heDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgb3BhY2l0eTogMC43NTtcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbn1cblxucCB7XG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAydncsIDRyZW0pO1xuICAgIC8qIGZvbnQtd2VpZ2h0OiA1MDA7ICovXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUEsbUJBQW1COztBQUVuQjtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLG9FQUFvRTtBQUN4RTs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQixFQUFFLHdDQUF3QztJQUMxRCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSw0QkFBNEIsRUFBRSx3Q0FBd0M7QUFDMUU7O0FBRUE7SUFDSSxnQkFBZ0IsRUFBRSx3Q0FBd0M7QUFDOUQ7OztBQUdBLG1CQUFtQjs7QUFFbkI7O0lBRUk7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLGtDQUFrQztRQUNsQyxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLHlEQUFzRTtJQUMxRTs7SUFFQTtRQUNJLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsZ0NBQWdDO1FBQ2hDLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLHNDQUFzQztR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LCtDQUErQztRQUMvQyxZQUFZO1FBQ1osVUFBVTtJQUNkOztJQUVBO1FBQ0ksYUFBYTtRQUNiLDhCQUE4QjtRQUM5QixxQkFBcUI7UUFDckIsV0FBVztRQUNYLGFBQWE7UUFDYixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDdkIsVUFBVTtRQUNWLFNBQVM7SUFDYjs7SUFFQTs7UUFFSSxrQkFBa0I7UUFDbEIsaUNBQWlDO1FBQ2pDLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZ0NBQWdDO0lBQ3BDOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osOENBQThDO1FBQzlDLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJOztJQUVKOztBQUVKOzs7QUFHQSxlQUFlOztBQUVmO0lBQ0ksWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixTQUFTO0lBQ1QsUUFBUTtJQUNSLCtCQUErQjtJQUMvQix3QkFBd0I7SUFDeEIsNEJBQTRCOztJQUU1QixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDEwMCZmYW1pbHk9TGF0bzp3Z2h0QDEwMCZmYW1pbHk9Um9ib3RvOndnaHRAMTAwJmZhbWlseT1SdWJpazp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKiBHZW5lcmFsIHN0eWxlcyAqL1xcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIFxcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDEwcHg7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMzMzOyAvKiBDaGFuZ2UgdGhlIGNvbG9yIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiA2cHg7ICovXFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwLCAyMCwgMjApOyAvKiBDaGFuZ2UgdGhlIGNvbG9yIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzU1NTsgLyogQ2hhbmdlIHRoZSBjb2xvciB0byB5b3VyIHByZWZlcmVuY2UgKi9cXG59XFxuXFxuXFxuLyogRGVza3RvcCBzY3JlZW4gKi9cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcXG5cXG4gICAgYm9keSB7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjAsIDIwKTtcXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgfVxcblxcbiAgICAjbWFpbiB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAuYmFja2dyb3VuZC1pbWFnZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9yaXpreS1zdWJhZ2phLTFrN1RuWDVHQXd3LXVuc3BsYXNoLmpwZycpO1xcbiAgICB9XFxuXFxuICAgICNtYWluIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgIC5tZW51IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yMDApO1xcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggMHB4IHJnYmEoMjAsMjAsMjAsMC4yKTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxuICAgIH1cXG5cXG4gICAgLm1lbnUtaXRlbSB7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAvKiBmb250LXNpemU6IGNsYW1wKDFyZW0sIDIuNXZ3LCA0cmVtKTsgKi9cXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgLyogcGFkZGluZzogY2xhbXAoMC41MHJlbSwgMXZ3LCAycmVtKSAwcmVtOyAqL1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIC8qIHBhZGRpbmc6IDUwcHg7ICovXFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGVhc2U7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51LWl0ZW1zIHtcXG4gICAgICAgIC8qIG1hcmdpbi1sZWZ0OiBjbGFtcCgxcmVtLCAzdncsIDhyZW0pOyAqL1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM1cHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgei1pbmRleDogMztcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC8qIFBsYWNlaG9sZGVyIHRvIGNyZWF0ZSBvZmZzZXQgb24gbWVudSB0YWIgdG8gYWxpZ24gbWVudS1pdGVtcyB3aXRoIGNvbnRlbnQtY29udGFpbmVycyAqL1xcbiAgICAucGxhY2Vob2xkZXIge1xcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZmxleC1zaHJpbms6IDE7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51OmhvdmVyIC5tZW51LWl0ZW0ge1xcbiAgICAgICAgb3BhY2l0eTogMC41O1xcbiAgICB9XFxuICAgIFxcbiAgICAubWVudTpob3ZlciAubWVudS1pdGVtOmhvdmVyIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51LWJhY2tncm91bmQtcGF0dGVybiB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgXFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoXFxuICAgICAgICAgICAgcmdiYSgyMjU1LCAyNTUsIDI1NSwgMC4xKSAyJSxcXG4gICAgICAgICAgICB0cmFuc3BhcmVudCAxMiVcXG4gICAgICAgICk7XFxuICAgICAgICBcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDAlO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA5LjV2bWluIDkuNXZtaW47XFxuICAgIFxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogMHB4O1xcbiAgICAgICAgdG9wOiAwcHg7XFxuICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA4MDBtcyBlYXNlLCBcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZSA4MDBtcyBlYXNlLFxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbiA4MDBtcyBlYXNlO1xcbiAgICB9XFxuICAgIFxcbiAgICAubWVudTpob3ZlciA+IC5tZW51LWJhY2tncm91bmQtcGF0dGVybiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEyLjV2bWluIDEyLjV2bWluO1xcbiAgICAgICAgb3BhY2l0eTogMC43O1xcbiAgICB9XFxuICAgIFxcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cXFwiMFxcXCJdID4gLm1lbnUtYmFja2dyb3VuZC1wYXR0ZXJuIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIC0yNSU7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51W2RhdGEtYWN0aXZlLWluZGV4PVxcXCIxXFxcIl0gPiAubWVudS1iYWNrZ3JvdW5kLXBhdHRlcm4ge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgLTUwJTtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1lbnVbZGF0YS1hY3RpdmUtaW5kZXg9XFxcIjJcXFwiXSA+IC5tZW51LWJhY2tncm91bmQtcGF0dGVybiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAtNzUlO1xcbiAgICB9XFxuICAgIFxcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cXFwiM1xcXCJdID4gLm1lbnUtYmFja2dyb3VuZC1wYXR0ZXJuIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIC0xMDAlO1xcbiAgICB9XFxuICAgIFxcbiAgICAubWVudVtkYXRhLWFjdGl2ZS1pbmRleD1cXFwiMFxcXCJdIH4gLmJhY2tncm91bmQtaW1hZ2Uge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDQ1JTtcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgODAwbXMgZWFzZSxcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZSA4MDBtcyBlYXNlLFxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbiA4MDBtcyBlYXNlO1xcbiAgICB9XFxuICAgICAgXFxuICAgIC5tZW51W2RhdGEtYWN0aXZlLWluZGV4PVxcXCIxXFxcIl0gfiAuYmFja2dyb3VuZC1pbWFnZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgNTAlO1xcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA4MDBtcyBlYXNlLFxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplIDgwMG1zIGVhc2UsXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uIDgwMG1zIGVhc2U7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51W2RhdGEtYWN0aXZlLWluZGV4PVxcXCIyXFxcIl0gfiAuYmFja2dyb3VuZC1pbWFnZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgNTUlO1xcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA4MDBtcyBlYXNlLFxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplIDgwMG1zIGVhc2UsXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uIDgwMG1zIGVhc2U7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51W2RhdGEtYWN0aXZlLWluZGV4PVxcXCIzXFxcIl0gfiAuYmFja2dyb3VuZC1pbWFnZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgNjAlO1xcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA4MDBtcyBlYXNlLFxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplIDgwMG1zIGVhc2UsXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uIDgwMG1zIGVhc2U7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51OmhvdmVyIH4gLmJhY2tncm91bmQtaW1hZ2Uge1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDB2bWF4O1xcbiAgICAgICAgb3BhY2l0eTogMC41MDtcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgODAwbXMgZWFzZSxcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZSA4MDBtcyBlYXNlLFxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbiA4MDBtcyBlYXNlO1xcbiAgICB9XFxuXFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgLyogbWFyZ2luLWxlZnQ6IG1pbm1heCgzMDBweCwgMWZyKTsgKi9cXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDEwcHgsIDUwcHgpIDlmcjtcXG4gICAgfVxcblxcbiAgICAubWVudS1sb2dvIHtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1hZ2VzL1NjcmVlbnNob3RfMjAyMy0xMS0wN19hdF80LjUxLjAyX1BNLXJlbW92ZWJnLXByZXZpZXcucG5nJyk7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIGhlaWdodDogbWF4KDEwJSwgNTBweCk7XFxuICAgICAgICB3aWR0aDogNDAlO1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAwLjVweCB3aGl0ZSBzb2xpZDtcXG4gICAgfVxcblxcbiAgICAuY29udGVudC1jb250YWluZXIge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgICAgcGFkZGluZzogY2xhbXAoMTBweCwgMTV2aCwgMTAwcHgpIDIwcHggMTBweCAyMHB4O1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuXFxuICAgIC5jb250ZW50LWNvbnRhaW5lciA+IGRpdiB7XFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2Utb3V0O1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwMHB4IDUwcHggcmdiYSgyMCwyMCwyMCwxKTtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XFxuXFxuXFxuICAgICAgICAtLWI6IDAuNXB4OyAvKiB0aGlja25lc3Mgb2YgdGhlIGJvcmRlciAqL1xcbiAgICAgICAgLS1jOiByZ2IoMjU1LCAyNTUsIDI1NSk7IC8qIGNvbG9yIG9mIHRoZSBib3JkZXIgKi9cXG4gICAgICAgIC0tdzogMTAwcHg7IC8qIHdpZHRoIG9mIGJvcmRlciAqL1xcbiAgICAgICAgXFxuICAgICAgICBib3JkZXI6IHZhcigtLWIpIHNvbGlkICMwMDAwO1xcbiAgICAgICAgLS1fZzogIzAwMDAgOTBkZWcsdmFyKC0tYykgMDtcXG4gICAgICAgIC0tX3A6IHZhcigtLXcpIHZhcigtLXcpIGJvcmRlci1ib3ggbm8tcmVwZWF0O1xcbiAgICAgICAgYmFja2dyb3VuZDpcXG4gICAgICAgICAgICBjb25pYy1ncmFkaWVudChmcm9tIDkwZGVnICBhdCB0b3AgICAgdmFyKC0tYikgbGVmdCAgdmFyKC0tYiksdmFyKC0tX2cpKSAwICAgIDAgICAgLyB2YXIoLS1fcCksXFxuICAgICAgICAgICAgY29uaWMtZ3JhZGllbnQoZnJvbSAxODBkZWcgYXQgdG9wICAgIHZhcigtLWIpIHJpZ2h0IHZhcigtLWIpLHZhcigtLV9nKSkgMTAwJSAwICAgIC8gdmFyKC0tX3ApLFxcbiAgICAgICAgICAgIGNvbmljLWdyYWRpZW50KGZyb20gMGRlZyAgIGF0IGJvdHRvbSB2YXIoLS1iKSBsZWZ0ICB2YXIoLS1iKSx2YXIoLS1fZykpIDAgICAgMTAwJSAvIHZhcigtLV9wKSxcXG4gICAgICAgICAgICBjb25pYy1ncmFkaWVudChmcm9tIC05MGRlZyBhdCBib3R0b20gdmFyKC0tYikgcmlnaHQgdmFyKC0tYiksdmFyKC0tX2cpKSAxMDAlIDEwMCUgLyB2YXIoLS1fcCk7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjAsIDIwLCAwLjgpO1xcbiAgICB9XFxuXFxuXFxuICAgIC5jb250ZW50LWNvbnRhaW5lciA+IGRpdi5oaWRlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG5cXG4gICAgLmhvbWUgcDpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2R1Y3QtaXRlbSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgfVxcblxcbiAgICAucHJvZHVjdC1pdGVtLWluZm8ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICBnYXA6IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2R1Y3QtaXRlbS1uYW1lLFxcbiAgICAucHJvZHVjdC1pdGVtLXByaWNlIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMi41dncsIDRyZW0pO1xcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLnByb2R1Y3QtaXRlbS1uYW1lIHtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHdoaXRlIHNvbGlkO1xcbiAgICB9XFxuXFxuICAgIC5wcm9kdWN0LWl0ZW0tcGljdHVyZSB7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnByb2R1Y3QtaXRlbS1waWN0dXJlIGltZyB7XFxuICAgICAgICBtYXgtd2lkdGg6IDUwJTtcXG4gICAgICAgIC8qIG1heC1oZWlnaHQ6IDEwMCU7ICovXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgICAgIC8qIGhlaWdodDogYXV0bzsgKi9cXG4gICAgfVxcblxcbn1cXG5cXG5cXG4vKiBNb2JpbGUgc2NyZWVuICovXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuXFxuICAgIGJvZHkge1xcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XFxuICAgIH1cXG5cXG4gICAgLmJhY2tncm91bmQtaW1hZ2Uge1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZXMvcml6a3ktc3ViYWdqYS0xazdUblg1R0F3dy11bnNwbGFzaC5qcGcnKTtcXG4gICAgfVxcblxcblxcbiAgICAjbWFpbiB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLm1lbnUge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgMjAsIDIwKTtcXG4gICAgICAgIHotaW5kZXg6IDU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogODBweDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IDBweCByZ2JhKDIwLDIwLDIwLDEpO1xcbiAgICB9XFxuXFxuICAgIC5tZW51LWl0ZW1zIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMyU7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzJTtcXG4gICAgfVxcblxcbiAgICAubWVudS1pdGVtIHtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgICBmbGV4OiAxIDEgMDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgfVxcblxcbiAgICAubWVudS1pdGVtcyA+IGRpdjpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgICAgIGJvcmRlci1yaWdodDogMC41cHggc29saWQgd2hpdGU7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRlbnQge1xcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5jb250ZW50LWNvbnRhaW5lciA+IGRpdiB7XFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2Utb3V0O1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwMHB4IDUwcHggcmdiYSgyMCwyMCwyMCwxKTtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiA1NTBweDtcXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XFxuXFxuXFxuICAgICAgICAtLWI6IDAuNXB4OyAvKiB0aGlja25lc3Mgb2YgdGhlIGJvcmRlciAqL1xcbiAgICAgICAgLS1jOiByZ2IoMjU1LCAyNTUsIDI1NSk7IC8qIGNvbG9yIG9mIHRoZSBib3JkZXIgKi9cXG4gICAgICAgIC0tdzogNTBweDsgLyogd2lkdGggb2YgYm9yZGVyICovXFxuICAgICAgICBcXG4gICAgICAgIGJvcmRlcjogdmFyKC0tYikgc29saWQgIzAwMDA7XFxuICAgICAgICAtLV9nOiAjMDAwMCA5MGRlZyx2YXIoLS1jKSAwO1xcbiAgICAgICAgLS1fcDogdmFyKC0tdykgdmFyKC0tdykgYm9yZGVyLWJveCBuby1yZXBlYXQ7XFxuICAgICAgICBiYWNrZ3JvdW5kOlxcbiAgICAgICAgICAgIGNvbmljLWdyYWRpZW50KGZyb20gOTBkZWcgIGF0IHRvcCAgICB2YXIoLS1iKSBsZWZ0ICB2YXIoLS1iKSx2YXIoLS1fZykpIDAgICAgMCAgICAvIHZhcigtLV9wKSxcXG4gICAgICAgICAgICBjb25pYy1ncmFkaWVudChmcm9tIDE4MGRlZyBhdCB0b3AgICAgdmFyKC0tYikgcmlnaHQgdmFyKC0tYiksdmFyKC0tX2cpKSAxMDAlIDAgICAgLyB2YXIoLS1fcCksXFxuICAgICAgICAgICAgY29uaWMtZ3JhZGllbnQoZnJvbSAwZGVnICAgYXQgYm90dG9tIHZhcigtLWIpIGxlZnQgIHZhcigtLWIpLHZhcigtLV9nKSkgMCAgICAxMDAlIC8gdmFyKC0tX3ApLFxcbiAgICAgICAgICAgIGNvbmljLWdyYWRpZW50KGZyb20gLTkwZGVnIGF0IGJvdHRvbSB2YXIoLS1iKSByaWdodCB2YXIoLS1iKSx2YXIoLS1fZykpIDEwMCUgMTAwJSAvIHZhcigtLV9wKTtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMCwgMjAsIDAuOCk7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgICAgIHBhZGRpbmc6IGNsYW1wKDEwcHgsIDE1dmgsIDUwcHgpIDIwcHggMTBweCAyMHB4O1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgei1pbmRleDogMjtcXG4gICAgfVxcblxcbiAgICAucHJvZHVjdC1pdGVtIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTUwcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9kdWN0LWl0ZW0taW5mbyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgIGdhcDogMTVweDtcXG4gICAgfVxcblxcbiAgICAucHJvZHVjdC1pdGVtLW5hbWUsXFxuICAgIC5wcm9kdWN0LWl0ZW0tcHJpY2Uge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAzdncsIDRyZW0pO1xcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLnByb2R1Y3QtaXRlbS1uYW1lIHtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHdoaXRlIHNvbGlkO1xcbiAgICB9XFxuXFxuICAgIC5wcm9kdWN0LWl0ZW0tcGljdHVyZSB7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnByb2R1Y3QtaXRlbS1waWN0dXJlIGltZyB7XFxuICAgICAgICBtYXgtd2lkdGg6IDY1JTtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDE0MHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDFweCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgICAgICAvKiBoZWlnaHQ6IGF1dG87ICovXFxuICAgIH1cXG5cXG4gICAgLnNob3Age1xcbiAgICAgICAgbWFyZ2luOiAzMHB4XFxuXFxuICAgIH1cXG5cXG59XFxuXFxuXFxuLyogQW55IHNjcmVlbiAqL1xcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDIwLCAyMCk7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLmJhY2tncm91bmQtaW1hZ2Uge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciA1MCU7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTEwdm1heDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXG4gICAgb3BhY2l0eTogMC43NTtcXG4gICAgZmlsdGVyOiBibHVyKDBweCk7XFxufVxcblxcbnAge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDJ2dywgNHJlbSk7XFxuICAgIC8qIGZvbnQtd2VpZ2h0OiA1MDA7ICovXFxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBwcm9kdWN0RGV0YWlscyA9IHtcbiAgICBpbWFnZTogJ2ltYWdlcy9hbWVyaWNhbm8uanBnJyxcbiAgICBuYW1lOiAnQW1lcmljYW5vJyxcbiAgICBwcmljZTogJyQyJyxcbn1cblxuXG5jb25zdCBwcm9kdWN0cyA9IFtcbiAgICB7XG4gICAgICAgIGltYWdlOiAnaW1hZ2VzL2FtZXJpY2Fuby5qcGcnLFxuICAgICAgICBuYW1lOiAnQW1lcmljYW5vJyxcbiAgICAgICAgcHJpY2U6ICckMicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGltYWdlOiAnaW1hZ2VzL2Nob2NvbGF0ZV9jb2ZmZWUuanBnJyxcbiAgICAgICAgbmFtZTogJ0Nob2NvbGF0ZSBDb2ZmZWUnLFxuICAgICAgICBwcmljZTogJyQyLjUnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbWFnZTogJ2ltYWdlcy9pY2VfZXNwcmVzc28uanBnJyxcbiAgICAgICAgbmFtZTogJ0ljZSBFc3ByZXNzbycsXG4gICAgICAgIHByaWNlOiAnJDIuNScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGltYWdlOiAnaW1hZ2VzL2xhdHRlLmpwZycsXG4gICAgICAgIG5hbWU6ICdIb3QgTGF0dGUnLFxuICAgICAgICBwcmljZTogJyQyLjUnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbWFnZTogJ2ltYWdlcy9zYW5kd2ljaC5qcGcnLFxuICAgICAgICBuYW1lOiAnSGFtIFNhbmR3aWNoJyxcbiAgICAgICAgcHJpY2U6ICckMy4yNScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGltYWdlOiAnaW1hZ2VzL2Nyb2lzc2FudC5qcGcnLFxuICAgICAgICBuYW1lOiAnQ3JvaXNzYW50JyxcbiAgICAgICAgcHJpY2U6ICckMi4yNScsXG4gICAgfVxuXVxuXG5mdW5jdGlvbiBnZW5lcmF0ZURPTSgpIHtcblxuICAgIC8vIEJvZHkgYW5kIG1haW4gZGl2XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5pZCA9ICdtYWluJztcbiAgICBib2R5LmFwcGVuZChtYWluKTtcblxuICAgIC8vIE1lbnUgZGl2XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIG1haW4uYXBwZW5kKG1lbnUpO1xuICAgIFxuICAgIC8vIEJhY2tncm91bmQgaW1hZ2VcbiAgICBjb25zdCBiYWNrZ3JvdW5kSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiYWNrZ3JvdW5kSW1hZ2UuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZC1pbWFnZScpO1xuICAgIG1haW4uYXBwZW5kKGJhY2tncm91bmRJbWFnZSk7XG5cbiAgICBjb25zdCBtZW51QmFja2dyb3VuZFBhdHRlcm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51QmFja2dyb3VuZFBhdHRlcm4uY2xhc3NMaXN0LmFkZCgnbWVudS1iYWNrZ3JvdW5kLXBhdHRlcm4nKTtcbiAgICBtZW51LmFwcGVuZChtZW51QmFja2dyb3VuZFBhdHRlcm4pO1xuXG4gICAgY29uc3QgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGFjZWhvbGRlci5jbGFzc0xpc3QuYWRkKCdwbGFjZWhvbGRlcicpO1xuICAgIG1lbnUuYXBwZW5kKHBsYWNlaG9sZGVyKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtcy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW1zJyk7XG4gICAgbWVudS5hcHBlbmQobWVudUl0ZW1zKTtcbiAgICBcbiAgICBjb25zdCBtZW51SXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbTEuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgbWVudUl0ZW0xLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIG1lbnVJdGVtcy5hcHBlbmQobWVudUl0ZW0xKTtcbiAgICBtZW51SXRlbTEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZUhvbWVEaXYoKTtcbiAgICB9KVxuICAgIFxuICAgIGNvbnN0IG1lbnVJdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtMi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBtZW51SXRlbTIudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgbWVudUl0ZW1zLmFwcGVuZChtZW51SXRlbTIpO1xuICAgIG1lbnVJdGVtMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY3JlYXRlU2hvcERpdigpO1xuICAgIH0pXG4gICAgXG4gICAgY29uc3QgbWVudUl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW0zLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIG1lbnVJdGVtMy50ZXh0Q29udGVudCA9ICdBYm91dCc7XG4gICAgbWVudUl0ZW1zLmFwcGVuZChtZW51SXRlbTMpO1xuICAgIG1lbnVJdGVtMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY3JlYXRlQWJvdXREaXYoKTtcbiAgICB9KVxuICAgIFxuICAgIGNvbnN0IG1lbnVJdGVtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtNC5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBtZW51SXRlbTQudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gICAgbWVudUl0ZW1zLmFwcGVuZChtZW51SXRlbTQpO1xuICAgIG1lbnVJdGVtNC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY3JlYXRlQ29udGFjdFVzRGl2KCk7XG4gICAgfSlcbiAgICBcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lbnUtaXRlbScpKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBpdGVtLm9ubW91c2VvdmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgbWVudS5kYXRhc2V0LmFjdGl2ZUluZGV4ID0gaW5kZXg7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gQ29udGVudCBkaXZcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG4gICAgbWFpbi5hcHBlbmQoY29udGVudCk7XG5cbiAgICBjb25zdCBtZW51TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVMb2dvLmNsYXNzTGlzdC5hZGQoJ21lbnUtbG9nbycpO1xuICAgIGNvbnRlbnQuYXBwZW5kKG1lbnVMb2dvKTtcblxuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtY29udGFpbmVyJyk7XG4gICAgY29udGVudC5hcHBlbmQoY29udGVudENvbnRhaW5lcik7XG4gICAgXG4gICAgY3JlYXRlSG9tZURpdigpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlSG9tZURpdigpIHtcbiAgICAgICAgY29uc3QgY29udGVudENvbnRhaW5lckhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xuICAgICAgICBpZiAoIWNvbnRlbnRDb250YWluZXJIb21lKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVySG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScsICdoaWRlJyk7XG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZChjb250ZW50Q29udGFpbmVySG9tZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcDEudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gb3VyIGNvZmZlZSByZWFsbVwiXG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVySG9tZS5hcHBlbmQocDEpO1xuXG4gICAgICAgICAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHAyLnRleHRDb250ZW50ID0gXCJXb3JraW5nIGhvdXJzOlwiXG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVySG9tZS5hcHBlbmQocDIpO1xuXG4gICAgICAgICAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHAzLnRleHRDb250ZW50ID0gXCJNb25kYXkgLSBGcmlkYXk6IDZhbSAtIDVwbVwiXG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVySG9tZS5hcHBlbmQocDMpO1xuXG4gICAgICAgICAgICBjb25zdCBwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHA0LnRleHRDb250ZW50ID0gXCJTYXR1cmRheSAtIFN1bmRheSA4YW0gLSA0cG1cIlxuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckhvbWUuYXBwZW5kKHA0KTtcblxuICAgICAgICAgICAgZGVsZXRlU2hvcERpdigpO1xuICAgICAgICAgICAgZGVsZXRlQWJvdXREaXYoKTtcbiAgICAgICAgICAgIGRlbGV0ZUNvbnRhY3RVc0RpdigpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb250ZW50Q29udGFpbmVySG9tZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNob3BEaXYoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXJTaG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3AnKTtcbiAgICAgICAgaWYgKCFjb250ZW50Q29udGFpbmVyU2hvcCkge1xuICAgICAgICAgICAgY29uc3QgY29udGVudENvbnRhaW5lclNob3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJTaG9wLmNsYXNzTGlzdC5hZGQoJ3Nob3AnLCAnaGlkZScpO1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmQoY29udGVudENvbnRhaW5lclNob3ApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHAgb2YgcHJvZHVjdHMpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVQcm9kdWN0cyhwKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIFByb2R1Y3QgZGl2IHN0YXJ0XG5cbiAgICAgICAgICAgIC8vIFByb2R1Y3QgZGl2IGVuZFxuICAgICAgICBcblxuICAgICAgICAgICAgZGVsZXRlSG9tZURpdigpO1xuICAgICAgICAgICAgZGVsZXRlQWJvdXREaXYoKTtcbiAgICAgICAgICAgIGRlbGV0ZUNvbnRhY3RVc0RpdigpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb250ZW50Q29udGFpbmVyU2hvcC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9kdWN0cyhwcm9kdWN0RGV0YWlscykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcHJvZHVjdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvZHVjdC1pdGVtJyk7XG4gICAgICAgICAgICAgICAgY29udGVudENvbnRhaW5lclNob3AuYXBwZW5kKHByb2R1Y3RJdGVtKTtcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0UGljdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHByb2R1Y3RQaWN0dXJlLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtaXRlbS1waWN0dXJlJyk7XG4gICAgICAgICAgICAgICAgcHJvZHVjdEl0ZW0uYXBwZW5kKHByb2R1Y3RQaWN0dXJlKTtcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICBpbWFnZUVsZW1lbnQuc3JjID0gcHJvZHVjdERldGFpbHMuaW1hZ2U7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFBpY3R1cmUuYXBwZW5kKGltYWdlRWxlbWVudCk7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBwcm9kdWN0SW5mby5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LWl0ZW0taW5mbycpO1xuICAgICAgICAgICAgICAgIHByb2R1Y3RJdGVtLmFwcGVuZChwcm9kdWN0SW5mbyk7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBwcm9kdWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LWl0ZW0tbmFtZScpO1xuICAgICAgICAgICAgICAgIHByb2R1Y3ROYW1lLnRleHRDb250ZW50ID0gcHJvZHVjdERldGFpbHMubmFtZTtcbiAgICAgICAgICAgICAgICBwcm9kdWN0SW5mby5hcHBlbmQocHJvZHVjdE5hbWUpO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHByb2R1Y3RQcmljZS5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LWl0ZW0tcHJpY2UnKTtcbiAgICAgICAgICAgICAgICBwcm9kdWN0UHJpY2UudGV4dENvbnRlbnQgPSBwcm9kdWN0RGV0YWlscy5wcmljZTtcbiAgICAgICAgICAgICAgICBwcm9kdWN0SW5mby5hcHBlbmQocHJvZHVjdFByaWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFib3V0RGl2KCkge1xuICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVyQWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQnKTtcbiAgICAgICAgaWYgKCFjb250ZW50Q29udGFpbmVyQWJvdXQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXJBYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckFib3V0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0JywgJ2hpZGUnKTtcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kKGNvbnRlbnRDb250YWluZXJBYm91dCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcDEudGV4dENvbnRlbnQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFNlZCBhdWN0b3IgaW1wZXJkaWV0IGNvbnNlY3RldHVyLiBOYW0gcG9zdWVyZSwgZGlhbSBzZWQgdml2ZXJyYSBzb2xsaWNpdHVkaW4sIGlwc3VtIGVyYXQgbWFsZXN1YWRhIHZlbGl0LCBlZ2V0IGRpY3R1bSBhcmN1IGFyY3UgaWQgZXJvcy4gRXRpYW0gZmluaWJ1cyBwZWxsZW50ZXNxdWUgbmlzbCwgdmVsIHBvc3VlcmUgZW5pbSBzdXNjaXBpdCBldC4gRG9uZWMgcGVsbGVudGVzcXVlIHBvcnR0aXRvciBuZXF1ZSBzZWQgbW9sZXN0aWUuIE51bmMgYWMgcXVhbSBub24gZG9sb3IgZmF1Y2lidXMgY29uZ3VlIGV0IHNlZCBsb3JlbS4gQ3VyYWJpdHVyIGV0IGhlbmRyZXJpdCBkaWFtLCB1dCB0aW5jaWR1bnQgcHVydXMuIE1hZWNlbmFzIHBvc3VlcmUgYW50ZSBpZCB1cm5hIHZ1bHB1dGF0ZSB1bHRyaWNpZXMuIFByYWVzZW50IHZlbmVuYXRpcyBjb25zZWN0ZXR1ciBuaXNsLCBhdCBzYWdpdHRpcyBsYWN1cyBhY2N1bXNhbiBzaXQgYW1ldC4gU3VzcGVuZGlzc2UgbmVjIGJpYmVuZHVtIGV4LiBTdXNwZW5kaXNzZSB2aXRhZSB0ZWxsdXMgYXQgZG9sb3IgdHJpc3RpcXVlIGZyaW5naWxsYS5cIjtcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJBYm91dC5hcHBlbmQocDEpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHAyLnRleHRDb250ZW50ID0gXCJGdXNjZSBhYyBkdWkgdGluY2lkdW50LCB1bGxhbWNvcnBlciBleCB2aXRhZSwgdm9sdXRwYXQgbGVjdHVzLiBQcmFlc2VudCBsYWNpbmlhIG5pYmggaWQgdHVycGlzIHBlbGxlbnRlc3F1ZSBzb2xsaWNpdHVkaW4uIEN1cmFiaXR1ciBwdWx2aW5hciBhbGlxdWV0IHJpc3VzIHNpdCBhbWV0IGltcGVyZGlldC4gQWVuZWFuIGEgZXJvcyBzb2RhbGVzLCBpbXBlcmRpZXQgbGliZXJvIGV0LCB1bHRyaWNlcyBkb2xvci4gVml2YW11cyBlbGl0IG5lcXVlLCBwb3N1ZXJlIGFjIHNlbSBpbiwgcnV0cnVtIGZhdWNpYnVzIGRvbG9yLiBOdW5jIGFsaXF1YW0gbWV0dXMgbWF1cmlzLiBOYW0gc29sbGljaXR1ZGluIGRvbG9yIG5pc2wsIGVnZXQgY29uc2VxdWF0IHZlbGl0IG1hbGVzdWFkYSBldC4gUGhhc2VsbHVzIG5lYyBtYXR0aXMgc2VtLiBOYW0gb2RpbyBsb3JlbSwgaWFjdWxpcyBzZWQgZGlhbSBub24sIHZlaGljdWxhIGhlbmRyZXJpdCBleC4gUHJvaW4gZWxpdCBleCwgY29uc2VjdGV0dXIgdmVsIGNvbnNlY3RldHVyIGlkLCBwdWx2aW5hciBhIG1ldHVzLiBGdXNjZSBmaW5pYnVzIHZ1bHB1dGF0ZSBlbGVpZmVuZC4gSW4gbm9uIHF1YW0gYXQgbGlndWxhIGJpYmVuZHVtIHNjZWxlcmlzcXVlIGF0IHF1aXMgbnVsbGEuIEZ1c2NlIGVsZWlmZW5kIGVnZXQgZXN0IGVnZXQgdHJpc3RpcXVlLiBNYXVyaXMgc2VtcGVyIHNvZGFsZXMgbmliaCwgc2VkIHZlc3RpYnVsdW0gdmVsaXQgbHVjdHVzIHNlZC4gU2VkIG5vbiBtZXR1cyB0ZW1wdXMsIGZpbmlidXMgaXBzdW0gbmVjLCBlbGVpZmVuZCBuaWJoLiBNb3JiaSBub24gbG9yZW0gZWdldCBsYWN1cyBhY2N1bXNhbiB2aXZlcnJhIGEgZWdldCBuZXF1ZS5cIjtcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJBYm91dC5hcHBlbmQocDIpO1xuXG4gICAgICAgICAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHAzLnRleHRDb250ZW50ID0gXCJNb3JiaSBtYXhpbXVzIG5pYmggc2FwaWVuLCBjb25zZWN0ZXR1ciBsdWN0dXMgc2FwaWVuIGNvbmd1ZSBuZWMuIFZpdmFtdXMgaW4gcHVydXMgZnJpbmdpbGxhLCBjb25zZWN0ZXR1ciBuZXF1ZSBldCwgdGluY2lkdW50IG9kaW8uIFNlZCBldWlzbW9kIGRhcGlidXMgb2RpbyBuZWMgb3JuYXJlLiBOdWxsYW0gaWQgZmVybWVudHVtIGp1c3RvLCBlZ2V0IGZhY2lsaXNpcyBwdXJ1cy4gU2VkIG5lYyBtaSBldSBsZWN0dXMgdm9sdXRwYXQgdHJpc3RpcXVlLiBJbiBhdCByaXN1cyBudW5jLiBRdWlzcXVlIHZlc3RpYnVsdW0gZnJpbmdpbGxhIGRpZ25pc3NpbS4gQ3JhcyBudW5jIGVzdCwgbW9sbGlzIGVnZXQgbnVuYyBwb3J0dGl0b3IsIG1hdHRpcyBzZW1wZXIgZW5pbS5cIjtcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJBYm91dC5hcHBlbmQocDMpO1xuXG4gICAgICAgICAgICBkZWxldGVIb21lRGl2KCk7XG4gICAgICAgICAgICBkZWxldGVTaG9wRGl2KCk7XG4gICAgICAgICAgICBkZWxldGVDb250YWN0VXNEaXYoKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29udGVudENvbnRhaW5lckFib3V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQ29udGFjdFVzRGl2KCkge1xuICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVyQ29udGFjdFVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtdXMnKTtcbiAgICAgICAgaWYgKCFjb250ZW50Q29udGFpbmVyQ29udGFjdFVzKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVyQ29udGFjdFVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyQ29udGFjdFVzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtdXMnLCAnaGlkZScpO1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmQoY29udGVudENvbnRhaW5lckNvbnRhY3RVcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcDIudGV4dENvbnRlbnQgPSBcIlNldiBMZW9cIlxuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckNvbnRhY3RVcy5hcHBlbmQocDIpO1xuXG4gICAgICAgICAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHAzLnRleHRDb250ZW50ID0gXCJzZXZhLmxlb25vdkBob3RtYWlsLmNvbVwiXG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyQ29udGFjdFVzLmFwcGVuZChwMyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHA0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcDQudGV4dENvbnRlbnQgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9zZXZsZW9cIlxuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckNvbnRhY3RVcy5hcHBlbmQocDQpO1xuXG4gICAgICAgICAgICBkZWxldGVIb21lRGl2KCk7XG4gICAgICAgICAgICBkZWxldGVTaG9wRGl2KCk7XG4gICAgICAgICAgICBkZWxldGVBYm91dERpdigpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb250ZW50Q29udGFpbmVyQ29udGFjdFVzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVIb21lRGl2KCkge1xuICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVySG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJyk7XG4gICAgICAgIGlmIChjb250ZW50Q29udGFpbmVySG9tZSkge1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lckhvbWUucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVTaG9wRGl2KCkge1xuICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVyU2hvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG9wJyk7XG4gICAgICAgIGlmIChjb250ZW50Q29udGFpbmVyU2hvcCkge1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lclNob3AucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVBYm91dERpdigpIHtcbiAgICAgICAgY29uc3QgY29udGVudENvbnRhaW5lckFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0Jyk7XG4gICAgICAgIGlmIChjb250ZW50Q29udGFpbmVyQWJvdXQpIHtcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJBYm91dC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUNvbnRhY3RVc0RpdigpIHtcbiAgICAgICAgY29uc3QgY29udGVudENvbnRhaW5lckNvbnRhY3RVcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LXVzJyk7XG4gICAgICAgIGlmIChjb250ZW50Q29udGFpbmVyQ29udGFjdFVzKSB7XG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyQ29udGFjdFVzLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuZXhwb3J0IHtnZW5lcmF0ZURPTX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQge2dlbmVyYXRlRE9NfSBmcm9tICcuL3BhZ2UtbG9hZGVyJztcblxuZ2VuZXJhdGVET00oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
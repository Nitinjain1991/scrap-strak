module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/btn-big","2":"components/btn-small","3":"components/inter-links","4":"pages/Stark-ai-homepage1","5":"pages/Stark-ai-homepage2","6":"pages/Stark-ai-v1","7":"pages/Stark-ai-v2","8":"pages/Stark-ai-v3","9":"pages/Stark-ai-v4","10":"pages/Stark-ai-v5","11":"pages/index","12":"pages/videoprofile"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(17);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("ad839196", content, true, context)
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("252f4f7d", content, true, context)
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("node-fetch-native");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgOS45OTc4NFYxMy45OTc4QzIgMTUuOTk3OCAzIDE2Ljk5NzggNSAxNi45OTc4SDYuNDNDNi44IDE2Ljk5NzggNy4xNyAxNy4xMDc4IDcuNDkgMTcuMjk3OEwxMC40MSAxOS4xMjc4QzEyLjkzIDIwLjcwNzggMTUgMTkuNTU3OCAxNSAxNi41ODc4VjcuNDA3ODRDMTUgNC40Mjc4NCAxMi45MyAzLjI4Nzg0IDEwLjQxIDQuODY3ODRMNy40OSA2LjY5Nzg0QzcuMTcgNi44ODc4NCA2LjggNi45OTc4NCA2LjQzIDYuOTk3ODRINUMzIDYuOTk3ODQgMiA3Ljk5Nzg0IDIgOS45OTc4NFoiIHN0cm9rZT0iIzM3NDc0RiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPHBhdGggZD0iTTE4IDhDMTkuNzggMTAuMzcgMTkuNzggMTMuNjMgMTggMTYiIHN0cm9rZT0iIzM3NDc0RiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTkuODMgNS41QzIyLjcyIDkuMzUgMjIuNzIgMTQuNjUgMTkuODMgMTguNSIgc3Ryb2tlPSIjMzc0NzRGIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(15);
module.exports = __webpack_require__(39);


/***/ }),
/* 15 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.__nuxt-error-page {\n  padding: 1rem;\n  background: #F7F8FB;\n  color: #47494E;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-family: sans-serif;\n  font-weight: 100 !important;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -webkit-font-smoothing: antialiased;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.__nuxt-error-page .error {\n  max-width: 450px;\n}\n.__nuxt-error-page .title {\n  font-size: 1.5rem;\n  margin-top: 15px;\n  color: #47494E;\n  margin-bottom: 8px;\n}\n.__nuxt-error-page .description {\n  color: #7F828B;\n  line-height: 21px;\n  margin-bottom: 10px;\n}\n.__nuxt-error-page a {\n  color: #7F828B !important;\n  text-decoration: none;\n}\n.__nuxt-error-page .logo {\n  position: fixed;\n  left: 12px;\n  bottom: 12px;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.nuxt-progress {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 2px;\n  width: 0%;\n  opacity: 1;\n  transition: width 0.1s, opacity 0.4s;\n  background-color: black;\n  z-index: 999999;\n}\n.nuxt-progress.nuxt-progress-notransition {\n  transition: none;\n}\n.nuxt-progress-failed {\n  background-color: red;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(21);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("65b97e00", content, true)

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*\n! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.inset-y-0 {\n  top: 0px;\n  bottom: 0px;\n}\n.bottom-\\[-10\\%\\] {\n  bottom: -10%;\n}\n.left-0 {\n  left: 0px;\n}\n.left-\\[50\\%\\] {\n  left: 50%;\n}\n.right-\\[0\\%\\] {\n  right: 0%;\n}\n.right-\\[4\\%\\] {\n  right: 4%;\n}\n.top-\\[-25\\%\\] {\n  top: -25%;\n}\n.top-\\[12px\\] {\n  top: 12px;\n}\n.top-\\[14px\\] {\n  top: 14px;\n}\n.z-10 {\n  z-index: 10;\n}\n.order-1 {\n  order: 1;\n}\n.order-2 {\n  order: 2;\n}\n.order-3 {\n  order: 3;\n}\n.col-span-3 {\n  grid-column: span 3 / span 3;\n}\n.mx-2 {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.mb-5 {\n  margin-bottom: 1.25rem;\n}\n.mb-8 {\n  margin-bottom: 2rem;\n}\n.me-2 {\n  -webkit-margin-end: 0.5rem;\n          margin-inline-end: 0.5rem;\n}\n.me-3 {\n  -webkit-margin-end: 0.75rem;\n          margin-inline-end: 0.75rem;\n}\n.ms-2 {\n  -webkit-margin-start: 0.5rem;\n          margin-inline-start: 0.5rem;\n}\n.ms-3 {\n  -webkit-margin-start: 0.75rem;\n          margin-inline-start: 0.75rem;\n}\n.ms-4 {\n  -webkit-margin-start: 1rem;\n          margin-inline-start: 1rem;\n}\n.ms-5 {\n  -webkit-margin-start: 1.25rem;\n          margin-inline-start: 1.25rem;\n}\n.ms-6 {\n  -webkit-margin-start: 1.5rem;\n          margin-inline-start: 1.5rem;\n}\n.ms-auto {\n  -webkit-margin-start: auto;\n          margin-inline-start: auto;\n}\n.mt-1 {\n  margin-top: 0.25rem;\n}\n.mt-10 {\n  margin-top: 2.5rem;\n}\n.mt-12 {\n  margin-top: 3rem;\n}\n.mt-16 {\n  margin-top: 4rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.mt-28 {\n  margin-top: 7rem;\n}\n.mt-3 {\n  margin-top: 0.75rem;\n}\n.mt-4 {\n  margin-top: 1rem;\n}\n.mt-6 {\n  margin-top: 1.5rem;\n}\n.mt-7 {\n  margin-top: 1.75rem;\n}\n.mt-8 {\n  margin-top: 2rem;\n}\n.mt-9 {\n  margin-top: 2.25rem;\n}\n.block {\n  display: block;\n}\n.inline-block {\n  display: inline-block;\n}\n.flex {\n  display: flex;\n}\n.grid {\n  display: grid;\n}\n.hidden {\n  display: none;\n}\n.h-11 {\n  height: 2.75rem;\n}\n.h-full {\n  height: 100%;\n}\n.h-screen {\n  height: 100vh;\n}\n.w-1\\/2 {\n  width: 50%;\n}\n.w-1\\/3 {\n  width: 33.333333%;\n}\n.w-11 {\n  width: 2.75rem;\n}\n.w-3\\/5 {\n  width: 60%;\n}\n.w-4\\/5 {\n  width: 80%;\n}\n.w-7\\/12 {\n  width: 58.333333%;\n}\n.w-8\\/12 {\n  width: 66.666667%;\n}\n.w-\\[20\\%\\] {\n  width: 20%;\n}\n.w-\\[25\\%\\] {\n  width: 25%;\n}\n.w-\\[30\\%\\] {\n  width: 30%;\n}\n.w-full {\n  width: 100%;\n}\n.translate-x-0 {\n  --tw-translate-x: 0px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-x-\\[-50\\%\\] {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-end {\n  align-items: flex-end;\n}\n.items-center {\n  align-items: center;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-0 {\n  gap: 0px;\n}\n.gap-6 {\n  gap: 1.5rem;\n}\n.gap-7 {\n  gap: 1.75rem;\n}\n.gap-8 {\n  gap: 2rem;\n}\n.gap-9 {\n  gap: 2.25rem;\n}\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n.rounded-3xl {\n  border-radius: 0.875rem;\n}\n.rounded-base {\n  border-radius: 0.25rem;\n}\n.rounded-full {\n  border-radius: 9999px;;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.rounded-xl {\n  border-radius: 0.625rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-0 {\n  border-width: 0px;\n}\n.border-2 {\n  border-width: 2px;\n}\n.border-light-white {\n  --tw-border-opacity: 1;\n  border-color: rgb(198 198 198 / var(--tw-border-opacity));\n}\n.border-orange {\n  --tw-border-opacity: 1;\n  border-color: rgb(234 131 110 / var(--tw-border-opacity));\n}\n.border-transparent {\n  border-color: transparent;\n}\n.bg-\\[\\#3F4238\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(63 66 56 / var(--tw-bg-opacity));\n}\n.bg-\\[\\#EA836E\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(234 131 110 / var(--tw-bg-opacity));\n}\n.bg-\\[\\#F8F7FC\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(248 247 252 / var(--tw-bg-opacity));\n}\n.bg-\\[\\#ea836e\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(234 131 110 / var(--tw-bg-opacity));\n}\n.bg-\\[white\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.bg-light-orange {\n  --tw-bg-opacity: 1;\n  background-color: rgb(237 121 96 / var(--tw-bg-opacity));\n}\n.bg-light-success {\n  --tw-bg-opacity: 1;\n  background-color: rgb(13 94 60 / var(--tw-bg-opacity));\n}\n.bg-light-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(198 198 198 / var(--tw-bg-opacity));\n}\n.bg-orange {\n  --tw-bg-opacity: 1;\n  background-color: rgb(234 131 110 / var(--tw-bg-opacity));\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.px-0 {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.py-1\\.5 {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n}\n.py-10 {\n  padding-top: 2.5rem;\n  padding-bottom: 2.5rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.py-2\\.5 {\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n}\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.py-5 {\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n}\n.py-6 {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n.py-8 {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n.pb-10 {\n  padding-bottom: 2.5rem;\n}\n.pb-12 {\n  padding-bottom: 3rem;\n}\n.pb-16 {\n  padding-bottom: 4rem;\n}\n.pb-2 {\n  padding-bottom: 0.5rem;\n}\n.pb-24 {\n  padding-bottom: 6rem;\n}\n.pb-4 {\n  padding-bottom: 1rem;\n}\n.pb-8 {\n  padding-bottom: 2rem;\n}\n.pe-14 {\n  -webkit-padding-end: 3.5rem;\n          padding-inline-end: 3.5rem;\n}\n.ps-2 {\n  -webkit-padding-start: 0.5rem;\n          padding-inline-start: 0.5rem;\n}\n.ps-5 {\n  -webkit-padding-start: 1.25rem;\n          padding-inline-start: 1.25rem;\n}\n.pt-3 {\n  padding-top: 0.75rem;\n}\n.pt-4 {\n  padding-top: 1rem;\n}\n.pt-8 {\n  padding-top: 2rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-end {\n  text-align: end;\n}\n.font-Futura {\n  font-family: Futura;\n}\n.font-Poppins {\n  font-family: Poppins;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-4xl {\n  font-size: 2rem;\n}\n.text-7xl {\n  font-size: 4rem;\n  line-height: 4.6rem;\n}\n.text-base {\n  font-size: 1rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n}\n.text-xs {\n  font-size: 0.75rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-normal {\n  font-weight: 400;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.text-black {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\n.text-darken {\n  --tw-text-opacity: 1;\n  color: rgb(51 51 51 / var(--tw-text-opacity));\n}\n.text-light-black {\n  --tw-text-opacity: 1;\n  color: rgb(109 109 109 / var(--tw-text-opacity));\n}\n.text-light-grey {\n  --tw-text-opacity: 1;\n  color: rgb(80 80 80 / var(--tw-text-opacity));\n}\n.text-light-one {\n  --tw-text-opacity: 1;\n  color: rgb(154 154 154 / var(--tw-text-opacity));\n}\n.text-light-white {\n  --tw-text-opacity: 1;\n  color: rgb(198 198 198 / var(--tw-text-opacity));\n}\n.text-orange {\n  --tw-text-opacity: 1;\n  color: rgb(234 131 110 / var(--tw-text-opacity));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.ring-1 {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.ring-inset {\n  --tw-ring-inset: inset;\n}\n.ring-orange {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(234 131 110 / var(--tw-ring-opacity));\n}\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-200 {\n  transition-duration: 200ms;\n}\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n@media (min-width: 768px) {\n\n  .md\\:container {\n    width: 100%;\n  }\n\n  @media (min-width: 640px) {\n\n    .md\\:container {\n      max-width: 640px;\n    }\n  }\n\n  @media (min-width: 768px) {\n\n    .md\\:container {\n      max-width: 768px;\n    }\n  }\n\n  @media (min-width: 1024px) {\n\n    .md\\:container {\n      max-width: 1024px;\n    }\n  }\n\n  @media (min-width: 1280px) {\n\n    .md\\:container {\n      max-width: 1280px;\n    }\n  }\n\n  @media (min-width: 1536px) {\n\n    .md\\:container {\n      max-width: 1536px;\n    }\n  }\n}\n.placeholder\\:text-lg::-moz-placeholder {\n  font-size: 1.125rem;\n}\n.placeholder\\:text-lg::placeholder {\n  font-size: 1.125rem;\n}\n.placeholder\\:font-bold::-moz-placeholder {\n  font-weight: 700;\n}\n.placeholder\\:font-bold::placeholder {\n  font-weight: 700;\n}\n.placeholder\\:font-medium::-moz-placeholder {\n  font-weight: 500;\n}\n.placeholder\\:font-medium::placeholder {\n  font-weight: 500;\n}\n.placeholder\\:text-black::-moz-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\n.placeholder\\:text-black::placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\n.placeholder\\:text-darken::-moz-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(51 51 51 / var(--tw-text-opacity));\n}\n.placeholder\\:text-darken::placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(51 51 51 / var(--tw-text-opacity));\n}\n.hover\\:border-b-2:hover {\n  border-bottom-width: 2px;\n}\n.hover\\:border-\\[\\#3F4238\\]:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(63 66 56 / var(--tw-border-opacity));\n}\n.hover\\:border-light-white:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(198 198 198 / var(--tw-border-opacity));\n}\n.hover\\:border-orange:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(234 131 110 / var(--tw-border-opacity));\n}\n.hover\\:border-transparent:hover {\n  border-color: transparent;\n}\n.hover\\:bg-orange:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(234 131 110 / var(--tw-bg-opacity));\n}\n.hover\\:bg-transparent:hover {\n  background-color: transparent;\n}\n.hover\\:pb-\\[2px\\]:hover {\n  padding-bottom: 2px;\n}\n.hover\\:text-\\[\\#3F4238\\]:hover {\n  --tw-text-opacity: 1;\n  color: rgb(63 66 56 / var(--tw-text-opacity));\n}\n.hover\\:text-black:hover {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\n.hover\\:text-light-white:hover {\n  --tw-text-opacity: 1;\n  color: rgb(198 198 198 / var(--tw-text-opacity));\n}\n.hover\\:text-orange:hover {\n  --tw-text-opacity: 1;\n  color: rgb(234 131 110 / var(--tw-text-opacity));\n}\n.hover\\:text-white:hover {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.focus\\:border-light-white:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(198 198 198 / var(--tw-border-opacity));\n}\n.focus\\:border-orange:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(234 131 110 / var(--tw-border-opacity));\n}\n.focus\\:ring-orange:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(234 131 110 / var(--tw-ring-opacity));\n}\n@media (min-width: 768px) {\n\n  .md\\:right-\\[2\\%\\] {\n    right: 2%;\n  }\n\n  .md\\:right-\\[3\\%\\] {\n    right: 3%;\n  }\n\n  .md\\:top-\\[24px\\] {\n    top: 24px;\n  }\n\n  .md\\:col-span-2 {\n    grid-column: span 2 / span 2;\n  }\n\n  .md\\:float-right {\n    float: right;\n  }\n\n  .md\\:mx-0 {\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n\n  .md\\:mx-auto {\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .md\\:mb-20 {\n    margin-bottom: 5rem;\n  }\n\n  .md\\:me-20 {\n    -webkit-margin-end: 5rem;\n            margin-inline-end: 5rem;\n  }\n\n  .md\\:ms-20 {\n    -webkit-margin-start: 5rem;\n            margin-inline-start: 5rem;\n  }\n\n  .md\\:ms-5 {\n    -webkit-margin-start: 1.25rem;\n            margin-inline-start: 1.25rem;\n  }\n\n  .md\\:ms-8 {\n    -webkit-margin-start: 2rem;\n            margin-inline-start: 2rem;\n  }\n\n  .md\\:ms-auto {\n    -webkit-margin-start: auto;\n            margin-inline-start: auto;\n  }\n\n  .md\\:mt-0 {\n    margin-top: 0px;\n  }\n\n  .md\\:mt-12 {\n    margin-top: 3rem;\n  }\n\n  .md\\:mt-14 {\n    margin-top: 3.5rem;\n  }\n\n  .md\\:mt-16 {\n    margin-top: 4rem;\n  }\n\n  .md\\:mt-20 {\n    margin-top: 5rem;\n  }\n\n  .md\\:mt-4 {\n    margin-top: 1rem;\n  }\n\n  .md\\:mt-6 {\n    margin-top: 1.5rem;\n  }\n\n  .md\\:mt-7 {\n    margin-top: 1.75rem;\n  }\n\n  .md\\:flex {\n    display: flex;\n  }\n\n  .md\\:w-2\\/3 {\n    width: 66.666667%;\n  }\n\n  .md\\:w-2\\/6 {\n    width: 33.333333%;\n  }\n\n  .md\\:w-3\\/5 {\n    width: 60%;\n  }\n\n  .md\\:w-7\\/12 {\n    width: 58.333333%;\n  }\n\n  .md\\:w-\\[10\\%\\] {\n    width: 10%;\n  }\n\n  .md\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .md\\:gap-6 {\n    gap: 1.5rem;\n  }\n\n  .md\\:px-14 {\n    padding-left: 3.5rem;\n    padding-right: 3.5rem;\n  }\n\n  .md\\:px-4 {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n\n  .md\\:py-4 {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .md\\:py-5 {\n    padding-top: 1.25rem;\n    padding-bottom: 1.25rem;\n  }\n\n  .md\\:py-\\[3\\.8rem\\] {\n    padding-top: 3.8rem;\n    padding-bottom: 3.8rem;\n  }\n\n  .md\\:pb-24 {\n    padding-bottom: 6rem;\n  }\n\n  .md\\:pb-8 {\n    padding-bottom: 2rem;\n  }\n\n  .md\\:pt-4 {\n    padding-top: 1rem;\n  }\n\n  .md\\:text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n\n  .md\\:text-4xl {\n    font-size: 2rem;\n  }\n\n  .md\\:text-5xl {\n    font-size: 3rem;\n    line-height: 3.5rem;\n  }\n\n  .md\\:text-6xl {\n    font-size: 3.25rem;\n    line-height: 4rem;\n  }\n\n  .md\\:text-base {\n    font-size: 1rem;\n  }\n\n  .md\\:text-lg {\n    font-size: 1.125rem;\n  }\n\n  .md\\:text-xl {\n    font-size: 1.25rem;\n  }\n}\n@media (min-width: 1024px) {\n\n  .lg\\:relative {\n    position: relative;\n  }\n\n  .lg\\:col-span-2 {\n    grid-column: span 2 / span 2;\n  }\n\n  .lg\\:col-span-4 {\n    grid-column: span 4 / span 4;\n  }\n\n  .lg\\:mx-0 {\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n\n  .lg\\:mb-0 {\n    margin-bottom: 0px;\n  }\n\n  .lg\\:ms-4 {\n    -webkit-margin-start: 1rem;\n            margin-inline-start: 1rem;\n  }\n\n  .lg\\:ms-5 {\n    -webkit-margin-start: 1.25rem;\n            margin-inline-start: 1.25rem;\n  }\n\n  .lg\\:mt-0 {\n    margin-top: 0px;\n  }\n\n  .lg\\:mt-16 {\n    margin-top: 4rem;\n  }\n\n  .lg\\:mt-20 {\n    margin-top: 5rem;\n  }\n\n  .lg\\:mt-7 {\n    margin-top: 1.75rem;\n  }\n\n  .lg\\:mt-8 {\n    margin-top: 2rem;\n  }\n\n  .lg\\:block {\n    display: block;\n  }\n\n  .lg\\:flex {\n    display: flex;\n  }\n\n  .lg\\:hidden {\n    display: none;\n  }\n\n  .lg\\:w-1\\/12 {\n    width: 8.333333%;\n  }\n\n  .lg\\:w-1\\/2 {\n    width: 50%;\n  }\n\n  .lg\\:w-3\\/5 {\n    width: 60%;\n  }\n\n  .lg\\:w-4\\/12 {\n    width: 33.333333%;\n  }\n\n  .lg\\:translate-x-0 {\n    --tw-translate-x: 0px;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  .lg\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .lg\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n\n  .lg\\:items-center {\n    align-items: center;\n  }\n\n  .lg\\:justify-start {\n    justify-content: flex-start;\n  }\n\n  .lg\\:justify-end {\n    justify-content: flex-end;\n  }\n\n  .lg\\:gap-14 {\n    gap: 3.5rem;\n  }\n\n  .lg\\:gap-16 {\n    gap: 4rem;\n  }\n\n  .lg\\:gap-8 {\n    gap: 2rem;\n  }\n\n  .lg\\:px-10 {\n    padding-left: 2.5rem;\n    padding-right: 2.5rem;\n  }\n\n  .lg\\:px-5 {\n    padding-left: 1.25rem;\n    padding-right: 1.25rem;\n  }\n\n  .lg\\:py-4 {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .lg\\:pb-12 {\n    padding-bottom: 3rem;\n  }\n\n  .lg\\:pb-24 {\n    padding-bottom: 6rem;\n  }\n\n  .lg\\:pb-7 {\n    padding-bottom: 1.75rem;\n  }\n\n  .lg\\:text-center {\n    text-align: center;\n  }\n\n  .lg\\:text-start {\n    text-align: start;\n  }\n\n  .lg\\:text-5xl {\n    font-size: 3rem;\n    line-height: 3.5rem;\n  }\n\n  .lg\\:text-lg {\n    font-size: 1.125rem;\n  }\n\n  .lg\\:text-xl {\n    font-size: 1.25rem;\n  }\n\n  .lg\\:text-black {\n    --tw-text-opacity: 1;\n    color: rgb(0 0 0 / var(--tw-text-opacity));\n  }\n}\n@media (min-width: 1280px) {\n\n  .xl\\:order-1 {\n    order: 1;\n  }\n\n  .xl\\:order-2 {\n    order: 2;\n  }\n\n  .xl\\:col-span-1 {\n    grid-column: span 1 / span 1;\n  }\n\n  .xl\\:col-span-2 {\n    grid-column: span 2 / span 2;\n  }\n\n  .xl\\:col-span-3 {\n    grid-column: span 3 / span 3;\n  }\n\n  .xl\\:col-span-4 {\n    grid-column: span 4 / span 4;\n  }\n\n  .xl\\:col-span-5 {\n    grid-column: span 5 / span 5;\n  }\n\n  .xl\\:ms-8 {\n    -webkit-margin-start: 2rem;\n            margin-inline-start: 2rem;\n  }\n\n  .xl\\:mt-0 {\n    margin-top: 0px;\n  }\n\n  .xl\\:mt-14 {\n    margin-top: 3.5rem;\n  }\n\n  .xl\\:mt-20 {\n    margin-top: 5rem;\n  }\n\n  .xl\\:mt-28 {\n    margin-top: 7rem;\n  }\n\n  .xl\\:mt-6 {\n    margin-top: 1.5rem;\n  }\n\n  .xl\\:mt-auto {\n    margin-top: auto;\n  }\n\n  .xl\\:block {\n    display: block;\n  }\n\n  .xl\\:flex {\n    display: flex;\n  }\n\n  .xl\\:hidden {\n    display: none;\n  }\n\n  .xl\\:w-4\\/5 {\n    width: 80%;\n  }\n\n  .xl\\:grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n\n  .xl\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .xl\\:grid-cols-5 {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n\n  .xl\\:grid-cols-8 {\n    grid-template-columns: repeat(8, minmax(0, 1fr));\n  }\n\n  .xl\\:grid-cols-9 {\n    grid-template-columns: repeat(9, minmax(0, 1fr));\n  }\n\n  .xl\\:flex-row {\n    flex-direction: row;\n  }\n\n  .xl\\:items-end {\n    align-items: flex-end;\n  }\n\n  .xl\\:justify-start {\n    justify-content: flex-start;\n  }\n\n  .xl\\:text-start {\n    text-align: start;\n  }\n}\n@media (min-width: 1536px) {\n\n  .\\32xl\\:mt-20 {\n    margin-top: 5rem;\n  }\n\n  .\\32xl\\:w-11\\/12 {\n    width: 91.666667%;\n  }\n\n  .\\32xl\\:grid-cols-5 {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n\n  .\\32xl\\:gap-8 {\n    gap: 2rem;\n  }\n\n  .\\32xl\\:px-9 {\n    padding-left: 2.25rem;\n    padding-right: 2.25rem;\n  }\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(23);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("627062a2", content, true)

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(24);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(25);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(26);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*\n! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\r\n.container {\n  width: 100%;\n}\r\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\r\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\r\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\r\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\r\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\r\n.absolute {\n  position: absolute;\n}\r\n.relative {\n  position: relative;\n}\r\n.inset-y-0 {\n  top: 0px;\n  bottom: 0px;\n}\r\n.bottom-\\[-10\\%\\] {\n  bottom: -10%;\n}\r\n.left-0 {\n  left: 0px;\n}\r\n.left-\\[50\\%\\] {\n  left: 50%;\n}\r\n.right-\\[0\\%\\] {\n  right: 0%;\n}\r\n.right-\\[4\\%\\] {\n  right: 4%;\n}\r\n.top-\\[-25\\%\\] {\n  top: -25%;\n}\r\n.top-\\[12px\\] {\n  top: 12px;\n}\r\n.top-\\[14px\\] {\n  top: 14px;\n}\r\n.z-10 {\n  z-index: 10;\n}\r\n.order-1 {\n  order: 1;\n}\r\n.order-2 {\n  order: 2;\n}\r\n.order-3 {\n  order: 3;\n}\r\n.col-span-3 {\n  grid-column: span 3 / span 3;\n}\r\n.mx-2 {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\r\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\r\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\r\n.mb-4 {\n  margin-bottom: 1rem;\n}\r\n.mb-5 {\n  margin-bottom: 1.25rem;\n}\r\n.mb-8 {\n  margin-bottom: 2rem;\n}\r\n.me-2 {\n  -webkit-margin-end: 0.5rem;\n          margin-inline-end: 0.5rem;\n}\r\n.me-3 {\n  -webkit-margin-end: 0.75rem;\n          margin-inline-end: 0.75rem;\n}\r\n.ms-2 {\n  -webkit-margin-start: 0.5rem;\n          margin-inline-start: 0.5rem;\n}\r\n.ms-3 {\n  -webkit-margin-start: 0.75rem;\n          margin-inline-start: 0.75rem;\n}\r\n.ms-4 {\n  -webkit-margin-start: 1rem;\n          margin-inline-start: 1rem;\n}\r\n.ms-5 {\n  -webkit-margin-start: 1.25rem;\n          margin-inline-start: 1.25rem;\n}\r\n.ms-6 {\n  -webkit-margin-start: 1.5rem;\n          margin-inline-start: 1.5rem;\n}\r\n.ms-auto {\n  -webkit-margin-start: auto;\n          margin-inline-start: auto;\n}\r\n.mt-1 {\n  margin-top: 0.25rem;\n}\r\n.mt-10 {\n  margin-top: 2.5rem;\n}\r\n.mt-12 {\n  margin-top: 3rem;\n}\r\n.mt-16 {\n  margin-top: 4rem;\n}\r\n.mt-2 {\n  margin-top: 0.5rem;\n}\r\n.mt-28 {\n  margin-top: 7rem;\n}\r\n.mt-3 {\n  margin-top: 0.75rem;\n}\r\n.mt-4 {\n  margin-top: 1rem;\n}\r\n.mt-6 {\n  margin-top: 1.5rem;\n}\r\n.mt-7 {\n  margin-top: 1.75rem;\n}\r\n.mt-8 {\n  margin-top: 2rem;\n}\r\n.mt-9 {\n  margin-top: 2.25rem;\n}\r\n.block {\n  display: block;\n}\r\n.inline-block {\n  display: inline-block;\n}\r\n.flex {\n  display: flex;\n}\r\n.grid {\n  display: grid;\n}\r\n.hidden {\n  display: none;\n}\r\n.h-11 {\n  height: 2.75rem;\n}\r\n.h-full {\n  height: 100%;\n}\r\n.h-screen {\n  height: 100vh;\n}\r\n.w-1\\/2 {\n  width: 50%;\n}\r\n.w-1\\/3 {\n  width: 33.333333%;\n}\r\n.w-11 {\n  width: 2.75rem;\n}\r\n.w-3\\/5 {\n  width: 60%;\n}\r\n.w-4\\/5 {\n  width: 80%;\n}\r\n.w-7\\/12 {\n  width: 58.333333%;\n}\r\n.w-8\\/12 {\n  width: 66.666667%;\n}\r\n.w-\\[20\\%\\] {\n  width: 20%;\n}\r\n.w-\\[25\\%\\] {\n  width: 25%;\n}\r\n.w-\\[30\\%\\] {\n  width: 30%;\n}\r\n.w-full {\n  width: 100%;\n}\r\n.translate-x-0 {\n  --tw-translate-x: 0px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.translate-x-\\[-50\\%\\] {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.cursor-pointer {\n  cursor: pointer;\n}\r\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\r\n.flex-col {\n  flex-direction: column;\n}\r\n.flex-wrap {\n  flex-wrap: wrap;\n}\r\n.items-start {\n  align-items: flex-start;\n}\r\n.items-end {\n  align-items: flex-end;\n}\r\n.items-center {\n  align-items: center;\n}\r\n.justify-end {\n  justify-content: flex-end;\n}\r\n.justify-center {\n  justify-content: center;\n}\r\n.justify-between {\n  justify-content: space-between;\n}\r\n.gap-0 {\n  gap: 0px;\n}\r\n.gap-6 {\n  gap: 1.5rem;\n}\r\n.gap-7 {\n  gap: 1.75rem;\n}\r\n.gap-8 {\n  gap: 2rem;\n}\r\n.gap-9 {\n  gap: 2.25rem;\n}\r\n.whitespace-nowrap {\n  white-space: nowrap;\n}\r\n.rounded-3xl {\n  border-radius: 0.875rem;\n}\r\n.rounded-base {\n  border-radius: 0.25rem;\n}\r\n.rounded-full {\n  border-radius: 9999px;;\n}\r\n.rounded-md {\n  border-radius: 0.375rem;\n}\r\n.rounded-xl {\n  border-radius: 0.625rem;\n}\r\n.border {\n  border-width: 1px;\n}\r\n.border-0 {\n  border-width: 0px;\n}\r\n.border-2 {\n  border-width: 2px;\n}\r\n.border-light-white {\n  --tw-border-opacity: 1;\n  border-color: rgb(198 198 198 / var(--tw-border-opacity));\n}\r\n.border-orange {\n  --tw-border-opacity: 1;\n  border-color: rgb(234 131 110 / var(--tw-border-opacity));\n}\r\n.border-transparent {\n  border-color: transparent;\n}\r\n.bg-\\[\\#3F4238\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(63 66 56 / var(--tw-bg-opacity));\n}\r\n.bg-\\[\\#EA836E\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(234 131 110 / var(--tw-bg-opacity));\n}\r\n.bg-\\[\\#F8F7FC\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(248 247 252 / var(--tw-bg-opacity));\n}\r\n.bg-\\[\\#ea836e\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(234 131 110 / var(--tw-bg-opacity));\n}\r\n.bg-\\[white\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\r\n.bg-light-orange {\n  --tw-bg-opacity: 1;\n  background-color: rgb(237 121 96 / var(--tw-bg-opacity));\n}\r\n.bg-light-success {\n  --tw-bg-opacity: 1;\n  background-color: rgb(13 94 60 / var(--tw-bg-opacity));\n}\r\n.bg-light-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(198 198 198 / var(--tw-bg-opacity));\n}\r\n.bg-orange {\n  --tw-bg-opacity: 1;\n  background-color: rgb(234 131 110 / var(--tw-bg-opacity));\n}\r\n.bg-transparent {\n  background-color: transparent;\n}\r\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\r\n.px-0 {\n  padding-left: 0px;\n  padding-right: 0px;\n}\r\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\r\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\r\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\r\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\r\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\r\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\r\n.py-1\\.5 {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n}\r\n.py-10 {\n  padding-top: 2.5rem;\n  padding-bottom: 2.5rem;\n}\r\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\r\n.py-2\\.5 {\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n}\r\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\r\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\r\n.py-5 {\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n}\r\n.py-6 {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\r\n.py-8 {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\r\n.pb-10 {\n  padding-bottom: 2.5rem;\n}\r\n.pb-12 {\n  padding-bottom: 3rem;\n}\r\n.pb-16 {\n  padding-bottom: 4rem;\n}\r\n.pb-2 {\n  padding-bottom: 0.5rem;\n}\r\n.pb-24 {\n  padding-bottom: 6rem;\n}\r\n.pb-4 {\n  padding-bottom: 1rem;\n}\r\n.pb-8 {\n  padding-bottom: 2rem;\n}\r\n.pe-14 {\n  -webkit-padding-end: 3.5rem;\n          padding-inline-end: 3.5rem;\n}\r\n.ps-2 {\n  -webkit-padding-start: 0.5rem;\n          padding-inline-start: 0.5rem;\n}\r\n.ps-5 {\n  -webkit-padding-start: 1.25rem;\n          padding-inline-start: 1.25rem;\n}\r\n.pt-3 {\n  padding-top: 0.75rem;\n}\r\n.pt-4 {\n  padding-top: 1rem;\n}\r\n.pt-8 {\n  padding-top: 2rem;\n}\r\n.text-center {\n  text-align: center;\n}\r\n.text-end {\n  text-align: end;\n}\r\n.font-Futura {\n  font-family: Futura;\n}\r\n.font-Poppins {\n  font-family: Poppins;\n}\r\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\r\n.text-4xl {\n  font-size: 2rem;\n}\r\n.text-7xl {\n  font-size: 4rem;\n  line-height: 4.6rem;\n}\r\n.text-base {\n  font-size: 1rem;\n}\r\n.text-lg {\n  font-size: 1.125rem;\n}\r\n.text-sm {\n  font-size: 0.875rem;\n}\r\n.text-xl {\n  font-size: 1.25rem;\n}\r\n.text-xs {\n  font-size: 0.75rem;\n}\r\n.font-bold {\n  font-weight: 700;\n}\r\n.font-medium {\n  font-weight: 500;\n}\r\n.font-normal {\n  font-weight: 400;\n}\r\n.font-semibold {\n  font-weight: 600;\n}\r\n.text-black {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\r\n.text-darken {\n  --tw-text-opacity: 1;\n  color: rgb(51 51 51 / var(--tw-text-opacity));\n}\r\n.text-light-black {\n  --tw-text-opacity: 1;\n  color: rgb(109 109 109 / var(--tw-text-opacity));\n}\r\n.text-light-grey {\n  --tw-text-opacity: 1;\n  color: rgb(80 80 80 / var(--tw-text-opacity));\n}\r\n.text-light-one {\n  --tw-text-opacity: 1;\n  color: rgb(154 154 154 / var(--tw-text-opacity));\n}\r\n.text-light-white {\n  --tw-text-opacity: 1;\n  color: rgb(198 198 198 / var(--tw-text-opacity));\n}\r\n.text-orange {\n  --tw-text-opacity: 1;\n  color: rgb(234 131 110 / var(--tw-text-opacity));\n}\r\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\r\n.ring-1 {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\r\n.ring-inset {\n  --tw-ring-inset: inset;\n}\r\n.ring-orange {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(234 131 110 / var(--tw-ring-opacity));\n}\r\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.duration-200 {\n  transition-duration: 200ms;\n}\r\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\r\n\r\n@font-face {\r\n  font-family: \"Futura\";\r\n  font-weight: 400;\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Futura\";\r\n  font-weight: 500;\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Futura\";\r\n  font-weight: 600;\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n\r\n/* stark-ai-homepage1 page css.... */\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n.main-selection input {\r\n  display: none;\r\n}\r\n\r\n.main-selection #jobsearch:checked ~ .jobsearch1,\r\n.main-selection #Practice:checked ~ .Practice1,\r\n.main-selection #BuildProfile:checked ~ .BuildProfile1,\r\n.main-selection #Insight:checked ~ .Insight1 {\r\n  background-color: #ea836e;\r\n}\r\n\r\n.main-selection #jobsearch:checked ~ .jobsearch1 svg path,\r\n.main-selection #Practice:checked ~ .Practice1 svg path,\r\n.main-selection #BuildProfile:checked ~ .BuildProfile1 svg path,\r\n.main-selection #Insight:checked ~ .Insight1 svg path {\r\n  fill: white !important;\r\n}\r\n\r\n.main-selection input:checked ~ .jobsearch1 h2,\r\n.main-selection input:checked ~ .Practice1 h2,\r\n.main-selection input:checked ~ .BuildProfile1 h2,\r\n.main-selection input:checked ~ .Insight1 h2 {\r\n  color: white !important;\r\n}\r\n\r\n.main-selection input:checked ~ .jobsearch1 p,\r\n.main-selection input:checked ~ .Practice1 p,\r\n.main-selection input:checked ~ .BuildProfile1 p,\r\n.main-selection input:checked ~ .Insight1 p {\r\n  color: white !important;\r\n}\r\n\r\n/* stark-ai-homepage2 page css.... */\r\n.DarkJobsearch1,\r\n.Darkpractice1,\r\n.DarkBuildProfile1,\r\n.DarkInsight1 {\r\n  background-color: white;\r\n  color: rgb(0, 0, 0) !important;\r\n}\r\n\r\n.DarkJobsearch1 > h2,\r\n.Darkpractice1 > h2,\r\n.DarkBuildProfile1 > h2,\r\n.DarkInsight1 > h2 {\r\n  color: rgb(0, 0, 0) !important;\r\n}\r\n\r\n.main-selection #DarkJobsearch:checked ~ .DarkJobsearch1,\r\n.main-selection #Darkpractice:checked ~ .Darkpractice1,\r\n.main-selection #DarkBuildProfile:checked ~ .DarkBuildProfile1,\r\n.main-selection #DarkInsight:checked ~ .DarkInsight1 {\r\n  background-color: #ea836e;\r\n  color: rgb(255, 255, 255) !important;\r\n}\r\n\r\n.main-selection #DarkJobsearch:checked ~ .DarkJobsearch1 svg path,\r\n.main-selection #Darkpractice:checked ~ .Darkpractice1 svg path,\r\n.main-selection #DarkBuildProfile:checked ~ .DarkBuildProfile1 svg path,\r\n.main-selection #DarkInsight:checked ~ .DarkInsight1 svg path {\r\n  fill: url(#paint0_linear_hover) !important;\r\n}\r\n\r\n.main-selection input:checked ~ .DarkJobsearch1 h2,\r\n.main-selection input:checked ~ .Darkpractice1 h2,\r\n.main-selection input:checked ~ .DarkBuildProfile1 h2,\r\n.main-selection input:checked ~ .DarkInsight1 h2 {\r\n  color: var(--bg-indigo-950) !important;\r\n}\r\n\r\n@media (min-width: 768px) {\n\n  .md\\:container {\n    width: 100%;\n  }\n\n  @media (min-width: 640px) {\n\n    .md\\:container {\n      max-width: 640px;\n    }\n  }\n\n  @media (min-width: 768px) {\n\n    .md\\:container {\n      max-width: 768px;\n    }\n  }\n\n  @media (min-width: 1024px) {\n\n    .md\\:container {\n      max-width: 1024px;\n    }\n  }\n\n  @media (min-width: 1280px) {\n\n    .md\\:container {\n      max-width: 1280px;\n    }\n  }\n\n  @media (min-width: 1536px) {\n\n    .md\\:container {\n      max-width: 1536px;\n    }\n  }\n}\r\n\r\n.placeholder\\:text-lg::-moz-placeholder {\n  font-size: 1.125rem;\n}\r\n\r\n.placeholder\\:text-lg::placeholder {\n  font-size: 1.125rem;\n}\r\n\r\n.placeholder\\:font-bold::-moz-placeholder {\n  font-weight: 700;\n}\r\n\r\n.placeholder\\:font-bold::placeholder {\n  font-weight: 700;\n}\r\n\r\n.placeholder\\:font-medium::-moz-placeholder {\n  font-weight: 500;\n}\r\n\r\n.placeholder\\:font-medium::placeholder {\n  font-weight: 500;\n}\r\n\r\n.placeholder\\:text-black::-moz-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\r\n\r\n.placeholder\\:text-black::placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\r\n\r\n.placeholder\\:text-darken::-moz-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(51 51 51 / var(--tw-text-opacity));\n}\r\n\r\n.placeholder\\:text-darken::placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(51 51 51 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:border-b-2:hover {\n  border-bottom-width: 2px;\n}\r\n\r\n.hover\\:border-\\[\\#3F4238\\]:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(63 66 56 / var(--tw-border-opacity));\n}\r\n\r\n.hover\\:border-light-white:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(198 198 198 / var(--tw-border-opacity));\n}\r\n\r\n.hover\\:border-orange:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(234 131 110 / var(--tw-border-opacity));\n}\r\n\r\n.hover\\:border-transparent:hover {\n  border-color: transparent;\n}\r\n\r\n.hover\\:bg-orange:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(234 131 110 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-transparent:hover {\n  background-color: transparent;\n}\r\n\r\n.hover\\:pb-\\[2px\\]:hover {\n  padding-bottom: 2px;\n}\r\n\r\n.hover\\:text-\\[\\#3F4238\\]:hover {\n  --tw-text-opacity: 1;\n  color: rgb(63 66 56 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:text-black:hover {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:text-light-white:hover {\n  --tw-text-opacity: 1;\n  color: rgb(198 198 198 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:text-orange:hover {\n  --tw-text-opacity: 1;\n  color: rgb(234 131 110 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:text-white:hover {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\r\n\r\n.focus\\:border-light-white:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(198 198 198 / var(--tw-border-opacity));\n}\r\n\r\n.focus\\:border-orange:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(234 131 110 / var(--tw-border-opacity));\n}\r\n\r\n.focus\\:ring-orange:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(234 131 110 / var(--tw-ring-opacity));\n}\r\n\r\n@media (min-width: 768px) {\n\n  .md\\:right-\\[2\\%\\] {\n    right: 2%;\n  }\n\n  .md\\:right-\\[3\\%\\] {\n    right: 3%;\n  }\n\n  .md\\:top-\\[24px\\] {\n    top: 24px;\n  }\n\n  .md\\:col-span-2 {\n    grid-column: span 2 / span 2;\n  }\n\n  .md\\:float-right {\n    float: right;\n  }\n\n  .md\\:mx-0 {\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n\n  .md\\:mx-auto {\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .md\\:mb-20 {\n    margin-bottom: 5rem;\n  }\n\n  .md\\:me-20 {\n    -webkit-margin-end: 5rem;\n            margin-inline-end: 5rem;\n  }\n\n  .md\\:ms-20 {\n    -webkit-margin-start: 5rem;\n            margin-inline-start: 5rem;\n  }\n\n  .md\\:ms-5 {\n    -webkit-margin-start: 1.25rem;\n            margin-inline-start: 1.25rem;\n  }\n\n  .md\\:ms-8 {\n    -webkit-margin-start: 2rem;\n            margin-inline-start: 2rem;\n  }\n\n  .md\\:ms-auto {\n    -webkit-margin-start: auto;\n            margin-inline-start: auto;\n  }\n\n  .md\\:mt-0 {\n    margin-top: 0px;\n  }\n\n  .md\\:mt-12 {\n    margin-top: 3rem;\n  }\n\n  .md\\:mt-14 {\n    margin-top: 3.5rem;\n  }\n\n  .md\\:mt-16 {\n    margin-top: 4rem;\n  }\n\n  .md\\:mt-20 {\n    margin-top: 5rem;\n  }\n\n  .md\\:mt-4 {\n    margin-top: 1rem;\n  }\n\n  .md\\:mt-6 {\n    margin-top: 1.5rem;\n  }\n\n  .md\\:mt-7 {\n    margin-top: 1.75rem;\n  }\n\n  .md\\:flex {\n    display: flex;\n  }\n\n  .md\\:w-2\\/3 {\n    width: 66.666667%;\n  }\n\n  .md\\:w-2\\/6 {\n    width: 33.333333%;\n  }\n\n  .md\\:w-3\\/5 {\n    width: 60%;\n  }\n\n  .md\\:w-7\\/12 {\n    width: 58.333333%;\n  }\n\n  .md\\:w-\\[10\\%\\] {\n    width: 10%;\n  }\n\n  .md\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .md\\:gap-6 {\n    gap: 1.5rem;\n  }\n\n  .md\\:px-14 {\n    padding-left: 3.5rem;\n    padding-right: 3.5rem;\n  }\n\n  .md\\:px-4 {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n\n  .md\\:py-4 {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .md\\:py-5 {\n    padding-top: 1.25rem;\n    padding-bottom: 1.25rem;\n  }\n\n  .md\\:py-\\[3\\.8rem\\] {\n    padding-top: 3.8rem;\n    padding-bottom: 3.8rem;\n  }\n\n  .md\\:pb-24 {\n    padding-bottom: 6rem;\n  }\n\n  .md\\:pb-8 {\n    padding-bottom: 2rem;\n  }\n\n  .md\\:pt-4 {\n    padding-top: 1rem;\n  }\n\n  .md\\:text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n\n  .md\\:text-4xl {\n    font-size: 2rem;\n  }\n\n  .md\\:text-5xl {\n    font-size: 3rem;\n    line-height: 3.5rem;\n  }\n\n  .md\\:text-6xl {\n    font-size: 3.25rem;\n    line-height: 4rem;\n  }\n\n  .md\\:text-base {\n    font-size: 1rem;\n  }\n\n  .md\\:text-lg {\n    font-size: 1.125rem;\n  }\n\n  .md\\:text-xl {\n    font-size: 1.25rem;\n  }\n}\r\n\r\n@media (min-width: 1024px) {\n\n  .lg\\:relative {\n    position: relative;\n  }\n\n  .lg\\:col-span-2 {\n    grid-column: span 2 / span 2;\n  }\n\n  .lg\\:col-span-4 {\n    grid-column: span 4 / span 4;\n  }\n\n  .lg\\:mx-0 {\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n\n  .lg\\:mb-0 {\n    margin-bottom: 0px;\n  }\n\n  .lg\\:ms-4 {\n    -webkit-margin-start: 1rem;\n            margin-inline-start: 1rem;\n  }\n\n  .lg\\:ms-5 {\n    -webkit-margin-start: 1.25rem;\n            margin-inline-start: 1.25rem;\n  }\n\n  .lg\\:mt-0 {\n    margin-top: 0px;\n  }\n\n  .lg\\:mt-16 {\n    margin-top: 4rem;\n  }\n\n  .lg\\:mt-20 {\n    margin-top: 5rem;\n  }\n\n  .lg\\:mt-7 {\n    margin-top: 1.75rem;\n  }\n\n  .lg\\:mt-8 {\n    margin-top: 2rem;\n  }\n\n  .lg\\:block {\n    display: block;\n  }\n\n  .lg\\:flex {\n    display: flex;\n  }\n\n  .lg\\:hidden {\n    display: none;\n  }\n\n  .lg\\:w-1\\/12 {\n    width: 8.333333%;\n  }\n\n  .lg\\:w-1\\/2 {\n    width: 50%;\n  }\n\n  .lg\\:w-3\\/5 {\n    width: 60%;\n  }\n\n  .lg\\:w-4\\/12 {\n    width: 33.333333%;\n  }\n\n  .lg\\:translate-x-0 {\n    --tw-translate-x: 0px;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  .lg\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .lg\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n\n  .lg\\:items-center {\n    align-items: center;\n  }\n\n  .lg\\:justify-start {\n    justify-content: flex-start;\n  }\n\n  .lg\\:justify-end {\n    justify-content: flex-end;\n  }\n\n  .lg\\:gap-14 {\n    gap: 3.5rem;\n  }\n\n  .lg\\:gap-16 {\n    gap: 4rem;\n  }\n\n  .lg\\:gap-8 {\n    gap: 2rem;\n  }\n\n  .lg\\:px-10 {\n    padding-left: 2.5rem;\n    padding-right: 2.5rem;\n  }\n\n  .lg\\:px-5 {\n    padding-left: 1.25rem;\n    padding-right: 1.25rem;\n  }\n\n  .lg\\:py-4 {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .lg\\:pb-12 {\n    padding-bottom: 3rem;\n  }\n\n  .lg\\:pb-24 {\n    padding-bottom: 6rem;\n  }\n\n  .lg\\:pb-7 {\n    padding-bottom: 1.75rem;\n  }\n\n  .lg\\:text-center {\n    text-align: center;\n  }\n\n  .lg\\:text-start {\n    text-align: start;\n  }\n\n  .lg\\:text-5xl {\n    font-size: 3rem;\n    line-height: 3.5rem;\n  }\n\n  .lg\\:text-lg {\n    font-size: 1.125rem;\n  }\n\n  .lg\\:text-xl {\n    font-size: 1.25rem;\n  }\n\n  .lg\\:text-black {\n    --tw-text-opacity: 1;\n    color: rgb(0 0 0 / var(--tw-text-opacity));\n  }\n}\r\n\r\n@media (min-width: 1280px) {\n\n  .xl\\:order-1 {\n    order: 1;\n  }\n\n  .xl\\:order-2 {\n    order: 2;\n  }\n\n  .xl\\:col-span-1 {\n    grid-column: span 1 / span 1;\n  }\n\n  .xl\\:col-span-2 {\n    grid-column: span 2 / span 2;\n  }\n\n  .xl\\:col-span-3 {\n    grid-column: span 3 / span 3;\n  }\n\n  .xl\\:col-span-4 {\n    grid-column: span 4 / span 4;\n  }\n\n  .xl\\:col-span-5 {\n    grid-column: span 5 / span 5;\n  }\n\n  .xl\\:ms-8 {\n    -webkit-margin-start: 2rem;\n            margin-inline-start: 2rem;\n  }\n\n  .xl\\:mt-0 {\n    margin-top: 0px;\n  }\n\n  .xl\\:mt-14 {\n    margin-top: 3.5rem;\n  }\n\n  .xl\\:mt-20 {\n    margin-top: 5rem;\n  }\n\n  .xl\\:mt-28 {\n    margin-top: 7rem;\n  }\n\n  .xl\\:mt-6 {\n    margin-top: 1.5rem;\n  }\n\n  .xl\\:mt-auto {\n    margin-top: auto;\n  }\n\n  .xl\\:block {\n    display: block;\n  }\n\n  .xl\\:flex {\n    display: flex;\n  }\n\n  .xl\\:hidden {\n    display: none;\n  }\n\n  .xl\\:w-4\\/5 {\n    width: 80%;\n  }\n\n  .xl\\:grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n\n  .xl\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .xl\\:grid-cols-5 {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n\n  .xl\\:grid-cols-8 {\n    grid-template-columns: repeat(8, minmax(0, 1fr));\n  }\n\n  .xl\\:grid-cols-9 {\n    grid-template-columns: repeat(9, minmax(0, 1fr));\n  }\n\n  .xl\\:flex-row {\n    flex-direction: row;\n  }\n\n  .xl\\:items-end {\n    align-items: flex-end;\n  }\n\n  .xl\\:justify-start {\n    justify-content: flex-start;\n  }\n\n  .xl\\:text-start {\n    text-align: start;\n  }\n}\r\n\r\n@media (min-width: 1536px) {\n\n  .\\32xl\\:mt-20 {\n    margin-top: 5rem;\n  }\n\n  .\\32xl\\:w-11\\/12 {\n    width: 91.666667%;\n  }\n\n  .\\32xl\\:grid-cols-5 {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n\n  .\\32xl\\:gap-8 {\n    gap: 2rem;\n  }\n\n  .\\32xl\\:px-9 {\n    padding-left: 2.25rem;\n    padding-right: 2.25rem;\n  }\n}\r\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/FuturaCyrillicregular.2de8b91.ttf";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/FuturaCyrillicMedium.8c2b829.ttf";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/FuturaCyrillicBold.0cf19e4.ttf";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("53745afa", content, true)

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* stark-ai-v2 css */\r\n.light-success-box {\r\n  background: #ffffff;\r\n  border: 1px solid #ea836e;\r\n  border-radius: 10px;\r\n  padding: 18px;\r\n}\r\n\r\n.light-puprle-box {\r\n  background: #ffffff;\r\n  border: 1px solid #788efb;\r\n  border-radius: 10px;\r\n  padding: 18px;\r\n}\r\n\r\n/* stark-ai-v3 css */\r\n#chat-bot-v3 input {\r\n  background: #ffffff;\r\n  border: 1px solid #788efb;\r\n  border-radius: 10px;\r\n  padding: 22px 50px 22px 22px;\r\n}\r\n\r\n.light-purple-v3-btn {\r\n  background: transparent;\r\n  border-radius: 10px;\r\n  padding: 6px 26px;\r\n  border: 2px solid rgba(120, 142, 251, 1);\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.light-purple-v3-btn:hover {\r\n  background: rgba(120, 142, 251, 1);\r\n  color: white !important;\r\n}\r\n\r\n.purple-v3-btn {\r\n  background: #788efb;\r\n  border-radius: 10px;\r\n  padding: 6px 20px;\r\n  border: 2px solid transparent;\r\n  transition: all 0.3s ease-in-out;\r\n  color: white;\r\n}\r\n\r\n.purple-v3-btn:hover {\r\n  transform: scale(1.01);\r\n  background: transparent;\r\n  border: 2px solid #788efb;\r\n  color: black;\r\n}\r\n\r\n/* stark-ai-v4 css */\r\n.light-v4-btn {\r\n  border: 1px solid #4485fd;\r\n  border-radius: 40px;\r\n  padding: 6px 32px;\r\n  border: 2px solid transparent;\r\n  color: #4485fd;\r\n  border: 2px solid #788efb;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.light-v4-btn:hover {\r\n  background: #4485fd;\r\n  color: white !important;\r\n}\r\n\r\n.blue-v4-btn {\r\n  background: #518af9;\r\n  border-radius: 114px;\r\n  padding: 6px 40px;\r\n  border: 2px solid transparent;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.blue-v4-btn:hover {\r\n  background: transparent;\r\n  border: 2px solid #518af9;\r\n  color: #518af9 !important;\r\n}\r\n\r\n.light-blue-jobsearch {\r\n  background: #c6edff;\r\n  border-radius: 20px;\r\n  padding: 20px 40px;\r\n}\r\n\r\n.light-blue-practice {\r\n  background: #ffe8d7;\r\n  border-radius: 20px;\r\n  padding: 20px 40px;\r\n}\r\n\r\n.light-blue-buildprofile {\r\n  background: #e0f5f0;\r\n  border-radius: 20px;\r\n  padding: 20px 40px;\r\n}\r\n\r\n.light-blue-insight {\r\n  background: #fef9e6;\r\n  border-radius: 20px;\r\n  padding: 20px 40px;\r\n}\r\n\r\n.light-border-blue-box {\r\n  background: #ffffff;\r\n  border: 1px solid #4485fd;\r\n  border-radius: 10px;\r\n  padding: 18px 12px;\r\n}\r\n\r\n#chat-bot-v4 input {\r\n  background: #ffffff;\r\n  border: 1px solid #4485fd;\r\n  border-radius: 10px;\r\n  padding: 22px 50px 22px 22px;\r\n}\r\n\r\n#chat-bot-v4 input::-moz-placeholder {\r\n  color: rgba(80, 80, 80, 1) !important;\r\n}\r\n\r\n#chat-bot-v4 input::placeholder {\r\n  color: rgba(80, 80, 80, 1) !important;\r\n}\r\n\r\n/* starkai-v5 css */\r\n.job-highlights {\r\n  background: #e0f5f0;\r\n  border-radius: 23px;\r\n  padding: 30px 36px;\r\n}\r\n\r\n.Build-highlights {\r\n  background: #fef9e6;\r\n  border-radius: 23px;\r\n  padding: 30px 36px;\r\n}\r\n\r\n.Insight-highlights {\r\n  background: #fbe7e8;\r\n  border-radius: 23px;\r\n  padding: 30px 36px;\r\n}\r\n\r\n.Practice-highlights {\r\n  background: #e8f7fe;\r\n  border-radius: 23px;\r\n  padding: 30px 36px;\r\n}\r\n\r\n.curved-arrow {\r\n  position: absolute;\r\n  top: 40px;\r\n  right: 0px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .light-blue-btn {\r\n    padding: 10px 40px;\r\n  }\r\n\r\n  .blue-btn {\r\n    padding: 10px 40px;\r\n  }\r\n\r\n  .light-blue-box {\r\n    margin-bottom: 66px;\r\n    width: 80%;\r\n  }\r\n\r\n  .light-purple-v3-btn {\r\n    padding: 9px 36px;\r\n  }\r\n\r\n  .purple-v3-btn {\r\n    padding: 14px 24px;\r\n  }\r\n\r\n  .light-v4-btn {\r\n    padding: 10px 40px;\r\n  }\r\n\r\n  .blue-v4-btn {\r\n    padding: 10px 40px;\r\n  }\r\n\r\n  .curved-arrow {\r\n    top: 60px;\r\n    right: 90px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1280px) {\r\n  /* Stark-ai-v5 css */\r\n  .curved-arrow {\r\n    top: -100px;\r\n    right: 20px;\r\n  }\r\n\r\n  .rotate_8deg {\r\n    transform: rotate(-8.24deg);\r\n  }\r\n\r\n  .job-highlights {\r\n    transform: rotate(-1.8deg);\r\n  }\r\n\r\n  .Build-highlights {\r\n    transform: rotate(-8.26deg);\r\n    position: relative;\r\n    top: -16px;\r\n    left: -16px;\r\n    z-index: 11;\r\n  }\r\n\r\n  .Insight-highlights {\r\n    transform: rotate(9.33deg);\r\n    position: relative;\r\n    top: -16px;\r\n    left: -16px;\r\n  }\r\n\r\n  .Practice-highlights {\r\n    transform: rotate(-6.22deg);\r\n    position: relative;\r\n    top: -16px;\r\n    left: -30px;\r\n    z-index: 11;\r\n  }\r\n}\r\n\r\n@media (min-width: 1400px) {\r\n  .w-86 {\r\n    width: 86%;\r\n  }\r\n}\r\n\r\n@media (min-width: 1600px) {\r\n  .light-blue-box {\r\n    margin-bottom: 66px;\r\n    width: 60%;\r\n    padding: 32px 38px;\r\n  }\r\n\r\n  .light-purple-v3-btn {\r\n    padding: 14px 40px;\r\n  }\r\n\r\n  .purple-v3-btn {\r\n    padding: 14px 24px;\r\n  }\r\n}\r\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("f5469ae8", content, true)

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(31);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(32);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(33);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(13);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* body {\r\n  background-color: rgba(23, 33, 45, 1);\r\n} */\r\n\r\n/* toggle button */\r\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 36px;\r\n  height: 20px;\r\n  margin-top: 22px;\r\n}\r\n\r\n.py-20 {\r\n  padding: 20px 0px;\r\n}\r\n\r\n.switch input {\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n.slider {\r\n  width: 36px;\r\n  height: 20px;\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 2px;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #ccc;\r\n  transition: 0.4s;\r\n}\r\n\r\n.slider:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 16px;\r\n  width: 16px;\r\n  left: 2px;\r\n  bottom: 2px;\r\n  background-color: white;\r\n  transition: 0.4s;\r\n}\r\n\r\ninput:checked + .slider {\r\n  background-color: rgba(18, 19, 31, 1);\r\n}\r\n\r\ninput:focus + .slider {\r\n  box-shadow: 0 0 1px #2196f3;\r\n}\r\n\r\ninput:checked + .slider:before {\r\n  transform: translateX(16px);\r\n}\r\n\r\nlabel {\r\n  cursor: pointer;\r\n}\r\n\r\n/* Rounded sliders */\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\n/* sdiebar-left css */\r\n.sidebar-left {\r\n  padding: 10px;\r\n  background: #ffffff;\r\n  border-radius: 12px;\r\n}\r\n\r\n.sidebar-right {\r\n  padding: 20px;\r\n  background: #ffffff;\r\n  border-radius: 12px;\r\n  width: 20%;\r\n}\r\n\r\n.toggle-box {\r\n  padding: 0px 8px;\r\n}\r\n\r\n.toggle-box:hover {\r\n  background-color: rgba(236, 239, 241, 1);\r\n}\r\n\r\n/* .radio:checked~.tabs #toggle-box1 {\r\n  background-color: rgba(236, 239, 241, 1);\r\n} */\r\n\r\n.btn-light {\r\n  border: 1px solid #12131f;\r\n  border-radius: 40px;\r\n  padding: 4px 24px;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.btn-light:hover {\r\n  background-color: rgb(32, 32, 32);\r\n  color: white;\r\n}\r\n\r\n.btn-dark {\r\n  border: 1px solid #12131f;\r\n  padding: 4px 24px;\r\n  background: rgba(18, 19, 31, 1);\r\n  color: #eceff1;\r\n  border-radius: 40px;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.btn-dark:hover {\r\n  background: #eceff1;\r\n  color: rgba(18, 19, 31, 1);\r\n}\r\n\r\n.image-upload > input {\r\n  display: none;\r\n}\r\n\r\nform input,\r\ntextarea {\r\n  padding: 10px 14px;\r\n}\r\n\r\n.image-upload {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 200px;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n::-moz-placeholder {\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n}\r\n\r\n::placeholder {\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n}\r\n\r\n.preview-box {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 12px;\r\n  border-radius: 8px;\r\n  margin: 12px 0px;\r\n}\r\n\r\n.pointing {\r\n  cursor: pointer;\r\n}\r\n\r\n.warpper {\r\n  min-height: 80vh;\r\n  border: 1px solid #cfd8dc;\r\n  border-radius: 12px;\r\n}\r\n\r\n.tabs {\r\n  border-right: 1px solid #cfd8dc;\r\n  width: 102%;\r\n  z-index: 1111;\r\n  border-radius: 12px;\r\n}\r\n\r\n.panels {\r\n  background: #fffffff6;\r\n  overflow: hidden;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.panel {\r\n  display: none;\r\n  animation: fadein 0.8s;\r\n}\r\n\r\n@keyframes fadein {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.panel-title {\r\n  font-size: 1.5em;\r\n  font-weight: bold;\r\n}\r\n\r\n.radio {\r\n  display: none;\r\n}\r\n\r\n#one:checked ~ .panels #one-panel,\r\n#two:checked ~ .panels #two-panel,\r\n#three:checked ~ .panels #three-panel,\r\n#four:checked ~ .panels #four-panel,\r\n#five:checked ~ .panels #five-panel {\r\n  display: flex;\r\n}\r\n\r\n.bb-light {\r\n  padding-bottom: 12px;\r\n  border-bottom: 1px solid #cfd8dc;\r\n}\r\n\r\n.modal-box {\r\n  width: 100%;\r\n  background-color: inherit;\r\n  border-radius: 16px;\r\n}\r\n\r\n.script-box {\r\n  margin-top: 24px;\r\n  background: #f4f7f8;\r\n  border-radius: 20px;\r\n  padding: 0px;\r\n}\r\n\r\n.btn-upload {\r\n  border: 1px solid #12131f;\r\n  border-radius: 40px;\r\n  padding: 4px 24px;\r\n}\r\n\r\n.btn-upload:hover {\r\n  background-color: black;\r\n  color: white !important;\r\n}\r\n\r\n.btn-record {\r\n  background: #eceff1;\r\n  border-radius: 40px;\r\n  padding: 4px 24px;\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.btn-record:hover {\r\n  background: transparent;\r\n  border: 1px solid #eceff1;\r\n}\r\n\r\n/* play script css */\r\n/* .container {\r\n  width: 80%;\r\n  background: #ddd;\r\n  margin: calc(50vh - 30px) auto;\r\n  text-align: center;\r\n  padding-bottom: 10px;\r\n} */\r\n\r\n.progress {\r\n  width: 1px;\r\n  height: 3px;\r\n  background: #006b5a;\r\n  transition: width 0.1s linear;\r\n}\r\n\r\n.togglePlay {\r\n  font: 0/0 a;\r\n  background: #006b5a;\r\n  color: transparent;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 10px auto 0;\r\n  width: 64px;\r\n  height: 64px;\r\n  border: 1px solid #006051;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n  transition: transform 150ms ease-out;\r\n}\r\n\r\n.togglePlay:after {\r\n  box-sizing: border-box;\r\n  display: block;\r\n  content: \"\";\r\n  width: 0;\r\n  height: 0;\r\n  margin-left: 8px;\r\n  border-color: transparent;\r\n  border-style: solid;\r\n  border-top-width: 16px;\r\n  border-bottom-width: 16px;\r\n  border-left-width: 19px;\r\n  border-left-color: rgba(255, 255, 255, 0.9);\r\n}\r\n\r\n.togglePlay:hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\n.togglePlay.active:after {\r\n  width: 21px;\r\n  height: 26px;\r\n  margin-left: 0;\r\n  border-width: 0 7px;\r\n  border-color: rgba(255, 255, 255, 0.9);\r\n}\r\n\r\n/* audio-player css */\r\n.audio-player {\r\n  background-color: white;\r\n  -webkit-backdrop-filter: blur(40.7742px);\r\n          backdrop-filter: blur(40.7742px);\r\n  border-radius: 70px;\r\n  margin-top: 16px;\r\n}\r\n\r\n#play-pause,\r\n#play-pause1,\r\n#play-pause2,\r\n#play-pause3,\r\n#play-pause4 {\r\n  display: none;\r\n}\r\n\r\n#play-pause-label,\r\n#play-pause1-label,\r\n#play-pause2-label,\r\n#play-pause3-label,\r\n#play-pause4-label {\r\n  height: 22px;\r\n}\r\n\r\n#play-pause:checked + #play-pause-label::after,\r\n#play-pause1:checked + #play-pause1-label::after,\r\n#play-pause2:checked + #play-pause2-label::after,\r\n#play-pause3:checked + #play-pause3-label::after,\r\n#play-pause4:checked + #play-pause4-label::after {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n#play-pause-label::after,\r\n#play-pause1-label::after,\r\n#play-pause2-label::after,\r\n#play-pause3-label::after,\r\n#play-pause4-label::after {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\n#volume,\r\n#volume1,\r\n#volume2,\r\n#volume3,\r\n#volume4 {\r\n  display: none;\r\n}\r\n\r\n#volume-label,\r\n#volume1-label,\r\n#volume2-label,\r\n#volume3-label,\r\n#volume4-label {\r\n  height: 22px;\r\n  width: 20px;\r\n}\r\n\r\n#volume:checked + #volume-label::after,\r\n#volume1:checked + #volume1-label::after,\r\n#volume2:checked + #volume2-label::after,\r\n#volume3:checked + #volume3-label::after,\r\n#volume4:checked + #volume4-label::after {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n\r\n#volume-label::after,\r\n#volume1-label::after,\r\n#volume2-label::after,\r\n#volume3-label::after,\r\n#volume4-label::after {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n  z-index: 111;\r\n  position: relative;\r\n}\r\n\r\n/* pregress bar css */\r\nprogress {\r\n  opacity: 0;\r\n}\r\n\r\n.progress-element {\r\n  width: 30%;\r\n}\r\n\r\n.progress-container {\r\n  position: relative;\r\n  background: #eceff1;\r\n  border-radius: 16px;\r\n  height: 8px;\r\n  width: 100%;\r\n}\r\n\r\n.progress-container::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: -6px;\r\n  left: 0px;\r\n  height: 18px;\r\n  width: 18px;\r\n  z-index: 111;\r\n  background: #b0bec5;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n}\r\n\r\n.progress-element--html .progress-container::before {\r\n  animation: progress-html 1s ease-in forwards;\r\n}\r\n\r\n.progress-label {\r\n  position: relative;\r\n}\r\n\r\n@property --num {\r\n  syntax: \"<integer>\";\r\n  initial-value: 0;\r\n  inherits: false;\r\n}\r\n\r\n.progress-element--html .progress-label::after {\r\n  animation: progress-text-html 1s ease-in forwards;\r\n}\r\n\r\n@keyframes progress-html {\r\n  to {\r\n    left: 20px;\r\n  }\r\n}\r\n\r\n@keyframes progress-text-html {\r\n  to {\r\n    --num: 04;\r\n  }\r\n}\r\n\r\n/* custom edit odf input on edit script */\r\n#auth-value {\r\n  width: 100%;\r\n  border: 1px solid #c3cacd;\r\n  border-radius: 6px;\r\n  padding: 6px 6px;\r\n}\r\n\r\n.custom-editscript-show {\r\n  top: 10%;\r\n  width: 100%;\r\n  left: 0;\r\n  padding: 20px;\r\n}\r\n\r\n.custom-editscript-hide {\r\n  left: 120%;\r\n}\r\n\r\n.translate-x-n-120 {\r\n  transform: translateX(-120%);\r\n}\r\n\r\n.translate-x-0 {\r\n  transform: translateX(-1%);\r\n}\r\n\r\n/* .h-full {\r\n  height: 90% !important;\r\n} */\r\n\r\n.h-100 {\r\n  height: 100% !important;\r\n}\r\n\r\n/* responsive css */\r\n@media (min-width: 1024px) {\r\n  .bb-light {\r\n    padding-bottom: 24px;\r\n    border-bottom: 1px solid #cfd8dc;\r\n  }\r\n\r\n  .btn-light {\r\n    padding: 10px 28px;\r\n  }\r\n\r\n  .btn-dark {\r\n    padding: 10px 28px;\r\n  }\r\n\r\n  .btn-upload {\r\n    padding: 10px 28px;\r\n  }\r\n\r\n  .btn-record {\r\n    padding: 10px 28px;\r\n  }\r\n\r\n  .progress-element {\r\n    width: 100%;\r\n  }\r\n\r\n  .audio-player {\r\n    padding: 22px;\r\n  }\r\n\r\n  .script-box {\r\n    padding: 20px;\r\n  }\r\n\r\n  .translate-x-n-120 {\r\n    transform: translateX(-0%);\r\n  }\r\n\r\n  .h-screen {\r\n    min-height: 100vh !important;\r\n  }\r\n\r\n  /* body {\r\n    background-color: rgb(141, 141, 141);\r\n  } */\r\n\r\n  .modal-box {\r\n    background-color: white;\r\n    padding: 20px;\r\n  }\r\n\r\n  .sidebar-left {\r\n    border-radius: 12px 0px 0px 12px;\r\n    padding: 20px;\r\n  }\r\n\r\n  .panels {\r\n    border-radius: 0px 12px 12px 0px;\r\n  }\r\n\r\n  .tabs {\r\n    border-radius: 12px 0px 0px 12px;\r\n  }\r\n\r\n  #auth-value {\r\n    padding: 12px 14px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1441px) {\r\n  .tabs {\r\n    width: 26%;\r\n  }\r\n}\r\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEgMUwwLjk5OTk5OSAxNy4wNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik03IDFMNyAxNy4wNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik03IDFMMSAxIiBzdHJva2U9ImJsYWNrIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTcgMTcuMDQ2OUgzLjVIMSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMS41IDFMMTEuNSAxNy4wNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNy41IDFMMTcuNSAxNy4wNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNy41IDFMMTEuNSAxIiBzdHJva2U9ImJsYWNrIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTE3LjUgMTcuMDQ2OUgxNEgxMS41IiBzdHJva2U9ImJsYWNrIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg=="

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxOCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEgOS45OTk0MVY2LjQzOTQxQzEgMi4wMTk0MSA0LjEzIDAuMjA5NDA3IDcuOTYgMi40MTk0MUwxMS4wNSA0LjE5OTQxTDE0LjE0IDUuOTc5NDFDMTcuOTcgOC4xODk0MSAxNy45NyAxMS44MDk0IDE0LjE0IDE0LjAxOTRMMTEuMDUgMTUuNzk5NEw3Ljk2IDE3LjU3OTRDNC4xMyAxOS43ODk0IDEgMTcuOTc5NCAxIDEzLjU1OTRWOS45OTk0MVoiIHN0cm9rZT0iIzM3NDc0RiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/silent-volume.7a19945.svg";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("09a44d53", content, true)

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(36);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(37);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(38);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* https://fonts.googleapis.com/css2?family=Poppins&display=swap */\n/* devanagari */\n@font-face {\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2');\n  unicode-range: U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FF;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff2');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Poppins-400-1.64d5f06.woff2";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Poppins-400-2.4f38b43.woff2";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Poppins-400-3.405055d.woff2";

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "BtnBig", function() { return BtnBig; });
__webpack_require__.d(components_namespaceObject, "BtnSmall", function() { return BtnSmall; });
__webpack_require__.d(components_namespaceObject, "InterLinks", function() { return InterLinks; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch-native"
var external_node_fetch_native_ = __webpack_require__(11);
var external_node_fetch_native_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_native_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js



// window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if (false) {}
function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }
    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }
  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);
    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }
    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];
  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
    }
    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }
  return instances;
}
function applyAsyncData(Component, asyncData) {
  if (
  // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }
  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };
  Component.options._originDataFn = ComponentData;
  Component.options.data = function () {
    const data = ComponentData.call(this, this);
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }
    return {
      ...data,
      ...asyncData
    };
  };
  Component.options.__hasNuxtData = true;
  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }
  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6
    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  }
  // If no component name defined, set file path as name, (also fixes #5703)
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }
  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }
      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload'));

          // check for previous reload time not to reload infinitely
          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true /* skip cache */);
          }
        }

        throw error;
      }
    }
    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  }
  // Make sure the components are resolved (code-splitting)
  await resolveRouteComponents(route);
  // Send back a copy of route with meta based on Component definition
  return {
    ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return {
        ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    };
    // Only set once

    if (context.req) {
      app.context.req = context.req;
    }
    if (context.res) {
      app.context.res = context.res;
    }
    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }
    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }
      app.context._redirected = true;
      // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
      let pathType = typeof path;
      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }
      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      }
      // "/absolute/route", "./relative/route" or "../relative/route"
      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);
        if (true) {
          app.context.next({
            path,
            status
          });
        }
        if (false) {}
      }
    };
    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
      app.context.beforeSerialize = fn => context.beforeSerializeFns.push(fn);
    }
    if (false) {}
  }

  // Dynamic keys
  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);
  if (context.route) {
    app.context.route = currentRouteData;
  }
  if (context.from) {
    app.context.from = fromRouteData;
  }
  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }
  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }
  return Promise.resolve(promise);
}

// Imported from vue-router
function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }
  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash
  let path = decodeURI(window.location.pathname);
  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = {
    ...toQuery,
    ...fromQuery
  };
  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }
  return diff;
}
function normalizeError(err) {
  let message;
  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }
  return {
    ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
const PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }
    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }
    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }
  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }
  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (typeof token === 'string') {
        path += token;
        continue;
      }
      const value = data[token.name || 'pathMatch'];
      let segment;
      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);
          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }
  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js


async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  }

  // Call and await on $fetch
  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}
    this.$fetchState.error = normalizeError(err);
  }
  this.$fetchState.pending = false;

  // Define an ssrKey for hydration
  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++;

  // Add data-fetch-key on parent element of Component
  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey;

  // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}
/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }
    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }
    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);
    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    }

    // Added for remove vue undefined warning while ssr
    this.$fetch = () => {}; // issue #8043
    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }
});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(12);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(7);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(5);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(8);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js

if (false) {}
function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);
  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }
  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}
/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from;

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }
  const nuxt = window.$nuxt;
  if (
  // Initial load (vuejs/vue-router#3199)
  !isRouteChanged ||
  // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }
  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash;
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }
        try {
          const el = document.querySelector(hash);
          if (el) {
            var _getComputedStyle$scr;
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
            // Respect any scroll-margin-top set in CSS when scrolling to anchor
            const y = Number((_getComputedStyle$scr = getComputedStyle(el)['scroll-margin-top']) === null || _getComputedStyle$scr === void 0 ? void 0 : _getComputedStyle$scr.replace('px', ''));
            if (y) {
              position.offset = {
                y
              };
            }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }
      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _39c642a9 = () => interopDefault(__webpack_require__.e(/* import() | pages/Stark-ai-homepage1 */ 4).then(__webpack_require__.bind(null, 54)));
const _39d45a2a = () => interopDefault(__webpack_require__.e(/* import() | pages/Stark-ai-homepage2 */ 5).then(__webpack_require__.bind(null, 64)));
const _35629876 = () => interopDefault(__webpack_require__.e(/* import() | pages/Stark-ai-v1 */ 6).then(__webpack_require__.bind(null, 65)));
const _35466974 = () => interopDefault(__webpack_require__.e(/* import() | pages/Stark-ai-v2 */ 7).then(__webpack_require__.bind(null, 66)));
const _352a3a72 = () => interopDefault(__webpack_require__.e(/* import() | pages/Stark-ai-v3 */ 8).then(__webpack_require__.bind(null, 67)));
const _350e0b70 = () => interopDefault(__webpack_require__.e(/* import() | pages/Stark-ai-v4 */ 9).then(__webpack_require__.bind(null, 68)));
const _34f1dc6e = () => interopDefault(__webpack_require__.e(/* import() | pages/Stark-ai-v5 */ 10).then(__webpack_require__.bind(null, 69)));
const _2bbf65f6 = () => interopDefault(__webpack_require__.e(/* import() | pages/videoprofile */ 12).then(__webpack_require__.bind(null, 70)));
const _4ab34aaa = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 11).then(__webpack_require__.bind(null, 71)));

const emptyFn = () => {};
external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/Stark-ai-homepage1",
    component: _39c642a9,
    name: "Stark-ai-homepage1"
  }, {
    path: "/Stark-ai-homepage2",
    component: _39d45a2a,
    name: "Stark-ai-homepage2"
  }, {
    path: "/Stark-ai-v1",
    component: _35629876,
    name: "Stark-ai-v1"
  }, {
    path: "/Stark-ai-v2",
    component: _35466974,
    name: "Stark-ai-v2"
  }, {
    path: "/Stark-ai-v3",
    component: _352a3a72,
    name: "Stark-ai-v3"
  }, {
    path: "/Stark-ai-v4",
    component: _350e0b70,
    name: "Stark-ai-v4"
  }, {
    path: "/Stark-ai-v5",
    component: _34f1dc6e,
    name: "Stark-ai-v5"
  }, {
    path: "/videoprofile",
    component: _2bbf65f6,
    name: "videoprofile"
  }, {
    path: "/",
    component: _4ab34aaa,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({
    ...routerOptions,
    base
  });

  // TODO: remove in Nuxt 3
  const originalPush = router.push;
  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };
  const resolve = router.resolve.bind(router);
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }
    return resolve(to, current, append);
  };
  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },
  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });
    if (false) {}

    // make sure that leave is called asynchronous (fix #5703)
    if (transition.css === false) {
      const leave = listeners.leave;

      // only add leave listener when user didnt provide one
      // or when it misses the done argument
      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }
          _parent.$nextTick(done);
        };
      }
    }
    let routerView = h('routerView', data);
    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }
});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "__nuxt-error-page"
  }, [_vm._ssrNode("<div class=\"error\">", "</div>", [_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">" + _vm._ssrEscape(_vm._s(_vm.message)) + "</div> "), _vm.statusCode === 404 ? _vm._ssrNode("<p class=\"description\">", "</p>", [typeof _vm.$route === 'undefined' ? _vm._ssrNode("<a href=\"/\" class=\"error-link\">", "</a>") : _c('NuxtLink', {
    staticClass: "error-link",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Back to the home page")])], 1) : _vm._e(), _vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },
    message() {
      return this.error.message || 'Error';
    }
  },
  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(16)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "b9fe93ac"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },
  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },
  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }
      const [matchedRoute] = this.$route.matched;
      if (!matchedRoute) {
        return this.$route.path;
      }
      const Component = matchedRoute.components.default;
      if (Component && Component.options) {
        const {
          options
        } = Component;
        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }
      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }
  },
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },
  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    }

    // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping
    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    }

    // track if we are showing the NuxtError component
    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',
  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },
  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }
      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }
  },
  beforeDestroy() {
    this.clear();
  },
  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      clearTimeout(this._hide);
      this._timer = null;
    },
    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;
      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }
      return this;
    },
    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },
    get() {
      return this.percent;
    },
    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },
    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },
    pause() {
      clearInterval(this._timer);
      return this;
    },
    resume() {
      this.startTimer();
      return this;
    },
    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },
    hide() {
      this.clear();
      this._hide = setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },
    fail(error) {
      this.canSucceed = false;
      return this;
    },
    startTimer() {
      if (!this.show) {
        this.show = true;
      }
      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }
      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }
        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }
        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }
  },
  render(h) {
    let el = h(false);
    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }
    return el;
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(18)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "5c02d0de"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/@nuxtjs/tailwindcss/dist/runtime/tailwind.css
var tailwind = __webpack_require__(20);

// EXTERNAL MODULE: ./Assets/css/main.css
var main = __webpack_require__(22);

// EXTERNAL MODULE: ./Assets/css/basicdesign.css
var basicdesign = __webpack_require__(27);

// EXTERNAL MODULE: ./Assets/css/videoprofile.css
var videoprofile = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/.cache/nuxt-google-fonts/css/nuxt-google-fonts.css
var nuxt_google_fonts = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/layouts/default.vue?vue&type=template&id=0040005c&
var defaultvue_type_template_id_0040005c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('Nuxt');
};
var defaultvue_type_template_id_0040005c_staticRenderFns = [];

// CONCATENATED MODULE: ./.nuxt/layouts/default.vue?vue&type=template&id=0040005c&

// CONCATENATED MODULE: ./.nuxt/layouts/default.vue

var script = {}


/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  script,
  defaultvue_type_template_id_0040005c_render,
  defaultvue_type_template_id_0040005c_staticRenderFns,
  false,
  null,
  null,
  "43d03c54"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js











const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }
      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },
  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;
    if (false) {}
    // Add $nuxt.error()
    this.error = this.nuxt.error;
    // Add $nuxt.context
    this.context = this.$options.context;
  },
  async mounted() {
    this.$loading = this.$refs.loading;
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },
    isFetching() {
      return this.nbFetching > 0;
    },
    isPreview() {
      return Boolean(this.$options.previewData);
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },
    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);
      if (!pages.length) {
        return;
      }
      this.$loading.start();
      const promises = pages.map(async page => {
        let p = [];

        // Old fetch
        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }
        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        // Wait for asyncData & old fetch to finish
        await Promise.all(p);
        // Cleanup refs
        p = [];
        if (page.$fetch) {
          p.push(page.$fetch());
        }
        // Get all component instance to call $fetch
        for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
          p.push(component.$fetch());
        }
        return Promise.all(p);
      });
      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }
      this.$loading.finish();
    },
    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }
          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }
        let errorLayout = (nuxt_error.options || nuxt_error).layout;
        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }
        this.setLayout(errorLayout);
      }
    },
    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      return Promise.resolve(layouts['_' + layout]);
    }
  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/components/index.js
const BtnBig = () => __webpack_require__.e(/* import() | components/btn-big */ 1).then(__webpack_require__.bind(null, 46)).then(c => wrapFunctional(c.default || c));
const BtnSmall = () => __webpack_require__.e(/* import() | components/btn-small */ 2).then(__webpack_require__.bind(null, 41)).then(c => wrapFunctional(c.default || c));
const InterLinks = () => __webpack_require__.e(/* import() | components/inter-links */ 3).then(__webpack_require__.bind(null, 40)).then(c => wrapFunctional(c.default || c));

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }
  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};
      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }
      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }
  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js


for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// CONCATENATED MODULE: ./.nuxt/index.js











/* Plugins */

 // Source: .\\components\\plugin.js (mode: 'all')

// Component: <ClientOnly>
external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a);

// TODO: Remove in Nuxt 3: <NoSsr>
external_vue_default.a.component(external_vue_no_ssr_default.a.name, {
  ...external_vue_no_ssr_default.a,
  render(h, ctx) {
    if (false) {}
    return external_vue_no_ssr_default.a.render(h, ctx);
  }
});

// Component: <NuxtChild>
external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child);

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null;
    if (false) {}
    return globalNuxt;
  },
  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
async function createApp(ssrContext, config = {}) {
  const store = null;
  const router = await createRouter(ssrContext, config, {
    store
  });

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {
      "title": "Lorem,ipsum.",
      "htmlAttrs": {
        "lang": "en"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }, {
        "name": "format-detection",
        "content": "telephone=no"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }],
      "style": [],
      "script": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }
        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }
          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },
      err: null,
      dateErr: null,
      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }
        nuxt.dateErr = Date.now();
        nuxt.err = err;
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }
        return err;
      }
    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location);
  // Resolve route
  let route;
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  });
  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }
    key = '$' + key;
    // Add into app
    app[key] = value;
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value;
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__';
    if (external_vue_default.a[installKey]) {
      return;
    }
    external_vue_default.a[installKey] = true;
    // Call Vue.use() to install the plugin into vm
    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }
        });
      }
    });
  }

  // Inject runtime config as $config
  inject('config', config);

  // Add enablePreview(previewData = {}) in context for plugins
  if (false) {}
  // Plugin execution

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  // Lock enablePreview in context
  if (false) {}

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}
    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve();

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }
        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    app,
    router
  };
}

// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js

// Update serverPrefetch strategy
external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created;

// Fetch mixin
if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
}

// Component: <NuxtLink>
external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);
if (!global.fetch) {
  global.fetch = external_node_fetch_native_default.a;
}
const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});
const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;
  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }
  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.nuxt.config || {};
  const routerBase = $config._app && $config._app.basePath || '/';
  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  }
  // Avoid loop redirect
  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }
  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
};

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext);
  // Used for beforeNuxtRender({ Components, nuxtState })
  ssrContext.beforeRenderFns = [];
  // for beforeSerialize(nuxtState)
  ssrContext.beforeSerializeFns = [];
  // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)
  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {};

  // Remove query from url is static target

  // Public runtime config
  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;
  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  }
  // Create the app definition and the instance (created for each request)
  const {
    app,
    router
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);
  const _app = new external_vue_default.a(app);
  // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr
  ssrContext.nuxt.routePath = app.context.route.path;

  // Add meta infos (used in renderer.js)
  ssrContext.meta = _app.$meta();

  // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)
  ssrContext.asyncData = {};
  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
    ssrContext.rendered = () => {
      // Call beforeSerialize() hooks
      ssrContext.beforeSerializeFns.forEach(fn => fn(ssrContext.nuxt));
    };
  };
  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    }

    // Load layout for error page
    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);
    _app.setLayout(errLayout);
    await beforeRender();
    return _app;
  };
  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  };

  // Components are already resolved by setContext -> getRouteData (app/utils.js)
  const Components = getMatchedComponents(app.context.route);

  /*
  ** Call global middleware (nuxt.config.js)
  */
  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Set layout
  */
  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;
  if (typeof layout === 'function') {
    layout = layout(app.context);
  }
  await _app.loadLayout(layout);
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;

  /*
  ** Call middleware (layout + pages)
  */
  midd = [];
  layout = sanitizeComponent(layout);
  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }
  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call .validate()
  */
  let isValid = true;
  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }
      isValid = await Component.options.validate(app.context);
      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  }

  // ...If .validate() returned false
  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  }

  // If no Components found, returns 404
  if (!Components.length) {
    return render404Page();
  }

  // Call asyncData & fetch hooks on components matched by the route.
  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = [];

    // Call asyncData(context)
    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context).then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    }

    // Call fetch(context)
    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }
    return Promise.all(promises);
  }));

  // datas are the first row of each
  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {});

  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  // Call beforeNuxtRender methods & add store state
  await beforeRender();
  return _app;
});

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map
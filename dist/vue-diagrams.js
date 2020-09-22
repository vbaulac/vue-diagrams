/**
 * Copyright 2017 Gwenael Pluchon
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue-svg-pan-zoom')) :
	typeof define === 'function' && define.amd ? define(['exports', 'vue-svg-pan-zoom'], factory) :
	(factory((global['vue-diagrams'] = {}),global.vueSvgPanZoom));
}(this, (function (exports,SvgPanZoom) { 'use strict';

SvgPanZoom = SvgPanZoom && SvgPanZoom.hasOwnProperty('default') ? SvgPanZoom['default'] : SvgPanZoom;

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.5.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});

var _core_1 = _core.version;

var _aFunction = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function (fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function (it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var document$1 = _global.document;
// typeof document.createElement is 'object' in old IE
var is = _isObject(document$1) && _isObject(document$1.createElement);
var _domCreate = function (it) {
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function (it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
	f: f
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && _has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? _ctx(out, _global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
var _export = $export;

// 20.2.2.34 Math.trunc(x)


_export(_export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

var trunc = _core.Math.trunc;

var trunc$2 = createCommonjsModule(function (module) {
module.exports = { "default": trunc, __esModule: true };
});

var _Math$trunc = unwrapExports(trunc$2);

var $JSON = _core.JSON || (_core.JSON = { stringify: JSON.stringify });
var stringify = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

var stringify$2 = createCommonjsModule(function (module) {
module.exports = { "default": stringify, __esModule: true };
});

var _JSON$stringify = unwrapExports(stringify$2);

var classCallCheck = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
});

var _classCallCheck = unwrapExports(classCallCheck);

// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
_export(_export.S + _export.F * !_descriptors, 'Object', { defineProperty: _objectDp.f });

var $Object = _core.Object;
var defineProperty = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

var defineProperty$2 = createCommonjsModule(function (module) {
module.exports = { "default": defineProperty, __esModule: true };
});

unwrapExports(defineProperty$2);

var createClass = createCommonjsModule(function (module, exports) {
exports.__esModule = true;



var _defineProperty2 = _interopRequireDefault(defineProperty$2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
});

var _createClass = unwrapExports(createClass);

var generateId = function generateId() {
  return _Math$trunc(Math.random() * 1000);
};

/**
 * @class DiagramNode
 */

var DiagramNode = function () {
  /**
   *  This should not be called directly. Use the "addNode" method from the DiagramModel class
   * @param  {String} title  [description]
   * @param  {Integer} x      [description]
   * @param  {Integer} y      [description]
   * @param  {Integer} width  [description]
   * @param  {Integer} height [description]
   * @param  {Integer} id [description]
   */
  function DiagramNode(id, title, x, y, width, height) {
    _classCallCheck(this, DiagramNode);

    this.title = title;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.ports = [];
  }

  /**
   * Adds a new "in" port into the node.
   * @param {String} name
   * @return {Integer} The port id
   */


  _createClass(DiagramNode, [{
    key: "addInPort",
    value: function addInPort(name) {
      var newPort = {
        id: generateId(),
        type: "in",
        name: name
      };

      this.ports.push(newPort);

      return newPort.id;
    }

    /**
     * Adds a new "out" port into the node.
     * @param {String} name
     * @return {Integer} The port id
     */

  }, {
    key: "addOutPort",
    value: function addOutPort(name) {
      var newPort = {
        id: generateId(),
        type: "out",
        name: name
      };

      this.ports.push(newPort);

      return newPort.id;
    }
  }]);

  return DiagramNode;
}();

var generateId$1 = function generateId() {
  return _Math$trunc(Math.random() * 1000);
};

/**
 * @class DiagramModel
 */

var DiagramModel = function () {
  /**
   */
  function DiagramModel() {
    _classCallCheck(this, DiagramModel);

    this._model = {
      nodes: [],
      links: []
    };
  }

  /**
   * Adds a node to the diagram
   * @param {String} title  The title of the node
   * @param {Integer} x      X coordinate
   * @param {Integer} y      Y Coordinate
   * @param {Integer} width  Width
   * @param {Integer} height Height
   * @return {Node} The node created
   */


  _createClass(DiagramModel, [{
    key: "addNode",
    value: function addNode(title, x, y, width, height) {
      var newNode = new DiagramNode(generateId$1(), title, x, y, width, height);
      this._model.nodes.push(newNode);
      return newNode;
    }
  }, {
    key: "deleteNode",
    value: function deleteNode(node) {
      var index = this._model.nodes.indexOf(node);
      for (var j = 0; j < this._model.links.length; j++) {
        var currentLink = this._model.links[j];

        for (var i = 0; i < node.ports.length; i++) {
          var currentPort = node.ports[i];

          if (currentLink.from === currentPort.id || currentLink.to === currentPort.id) {
            this.deleteLink(currentLink);
            j--;
          }
        }
      }
      this._model.nodes.splice(index, 1);
    }
  }, {
    key: "deleteLink",
    value: function deleteLink(link) {
      var index = this._model.links.indexOf(link);
      this._model.links.splice(index, 1);
    }

    /**
     * Adds a link between two ports
     * @param {Integer} from   Port id. Must be an out port
     * @param {Integer} to     Port id. Must be an in port
     * @param {Array}  points  Optional. Array of points to make the link represented as a segmented line
     */

  }, {
    key: "addLink",
    value: function addLink(from, to) {
      var points = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      this._model.links.push({
        id: generateId$1(),
        from: from,
        to: to,
        positionFrom: {},
        positionTo: {},
        points: points
      });
    }

    /**
     * Serializes the diagram model into a JSON object
     * @return {Object} The diagram model
     */

  }, {
    key: "serialize",
    value: function serialize() {
      return _JSON$stringify(this._model);
    }

    /**
     * Load into the diagram model a serialized diagram
     * @param  {Object} serializedModel
     */

  }, {
    key: "deserialize",
    value: function deserialize(serializedModel) {
      this._model = JSON.parse(serializedModel);
    }
  }]);

  return DiagramModel;
}();

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = "";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var DiagramNode$2 = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('svg', { attrs: { "x": _vm.x, "y": _vm.y } }, [_c('rect', { staticClass: "node-dark-background", attrs: { "fill": _vm.color, "stroke": "#000000", "stroke-width": _vm.selected ? 2 : 0, "x": "5", "y": "15", "rx": "3", "ry": "3", "width": _vm.width, "height": _vm.height } }), _vm._v(" "), _c('svg', { attrs: { "x": "0", "y": "0" }, on: { "mousedown": _vm.mouseDown, "mouseenter": _vm.mouseenter, "mouseleave": _vm.mouseleave } }, [_c('rect', { staticClass: "node-dark-background", attrs: { "fill": "#000000", "fill-opacity": _vm.titleFillOpacity, "x": "7", "y": "17", "rx": "3", "ry": "3", "width": _vm.width - 4, "height": "16" } }), _vm._v(" "), _c('text', { attrs: { "x": 10, "y": 30, "font-size": "14", "font-weight": "bold", "fill": "#000000" }, on: { "click": _vm.clickedOn } }, [_vm._v(_vm._s(_vm.title) + " - ZZ")]), _vm._v(" "), _vm.deletable ? _c('g', { on: { "click": _vm.deleteNode } }, [_c('rect', { attrs: { "x": _vm.width - 12, "y": "18", "width": "14", "height": "14", "rx": "2", "ry": "2", "fill": "#ffffff", "fill-opacity": 0.25 } }), _vm._v(" "), _c('line', { staticStyle: { "stroke": "rgb(0,0,0)" }, attrs: { "x1": _vm.width, "y1": 20, "x2": _vm.width - 10, "y2": 30, "stroke-width": "2" } }), _vm._v(" "), _c('line', { staticStyle: { "stroke": "rgb(0,0,0)" }, attrs: { "x1": _vm.width - 10, "y1": 20, "x2": _vm.width, "y2": 30, "stroke-width": "2" } })]) : _vm._e()]), _vm._v(" "), _c('rect', { staticClass: "node-light-background", attrs: { "fill": "#ffffff", "x": "7", "y": "35", "rx": "3", "ry": "3", "width": _vm.width - 4, "height": _vm.height - 22 } }), _vm._v(" "), _vm._t("default")], 2);
  }, staticRenderFns: [],
  name: "DiagramNode",

  props: {
    title: {
      type: String,
      required: true
    },
    index: Number,
    ports: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    x: Number,
    y: Number,
    width: {
      type: Number,
      default: 72
    },
    height: {
      type: Number,
      default: 100
    },
    color: {
      type: String,
      default: "#66cc00"
    },
    deletable: {
      type: Boolean,
      default: true
    },
    selected: Boolean
  },

  data: function data() {
    return {
      nodeStrokeWidth: 0,
      titleFillOpacity: 0.25
    };
  },


  methods: {
    deleteNode: function deleteNode() {
      this.$emit("delete");
    },

    mouseDown: function mouseDown(event) {
      this.$emit("onStartDrag", { type: "nodes", index: this.index }, event.x - this.x, event.y - this.y);
    },

    mouseenter: function mouseenter() {
      this.titleFillOpacity = 0.5;
    },
    mouseleave: function mouseleave() {
      this.titleFillOpacity = 0.25;
    },
    clickedOn: function clickedOn() {
      console.log("CLICKED");
      this.title = "555";
    }
  }
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = "";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var DiagramPoint = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('circle', { style: _vm.hover ? 'stroke:rgba(255,0,0,0.5);' : 'stroke:rgba(255,0,0,0.0);', attrs: { "stroke-width": "6", "cx": _vm.x, "cy": _vm.y, "r": "5", "fill": "black" }, on: { "mouseenter": _vm.mouseEnter, "mouseleave": _vm.mouseLeave, "mousedown": function mousedown($event) {
          _vm.$emit('mousedown', $event);
        } } });
  }, staticRenderFns: [],
  name: "DiagramPoint",
  props: ["x", "y"],
  data: function data() {
    return {
      hover: false
    };
  },

  methods: {
    mouseEnter: function mouseEnter() {
      this.hover = true;
    },
    mouseLeave: function mouseLeave() {
      this.hover = false;
    }
  }
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = "";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var DiagramLink = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('g', [_vm.points && _vm.points.length ? _c('g', { on: { "mouseenter": _vm.mouseEnter, "mouseleave": _vm.mouseLeave, "mousedown": _vm.mouseDown } }, [_vm._l(_vm.points, function (point, index) {
      return _c('g', { on: { "mousedown": function mousedown($event) {
            _vm.mouseDownSegment($event, index);
          } } }, [_c('line', { style: _vm.largeStrokeStyle, attrs: { "x1": index === 0 ? _vm.x1 : _vm.points[index - 1].x, "y1": index === 0 ? _vm.y1 : _vm.points[index - 1].y, "x2": point.x, "y2": point.y, "stroke-width": "8" } }), _vm._v(" "), _c('line', { staticStyle: { "stroke": "rgb(0,0,0)" }, attrs: { "x1": index === 0 ? _vm.x1 : _vm.points[index - 1].x, "y1": index === 0 ? _vm.y1 : _vm.points[index - 1].y, "x2": point.x, "y2": point.y, "stroke-width": "2" } })]);
    }), _vm._v(" "), _c('g', { on: { "mousedown": function mousedown($event) {
          _vm.mouseDownSegment($event, _vm.points.length);
        } } }, [_c('line', { style: _vm.largeStrokeStyle, attrs: { "x1": _vm.points[_vm.points.length - 1].x, "y1": _vm.points[_vm.points.length - 1].y, "x2": _vm.x2, "y2": _vm.y2, "stroke-width": "8" } }), _vm._v(" "), _c('line', { staticStyle: { "stroke": "rgb(0,0,0)" }, attrs: { "x1": _vm.points[_vm.points.length - 1].x, "y1": _vm.points[_vm.points.length - 1].y, "x2": _vm.x2, "y2": _vm.y2, "stroke-width": "2" } })])], 2) : _c('g', { on: { "mouseenter": _vm.mouseEnter, "mouseleave": _vm.mouseLeave, "mousedown": _vm.mouseDown } }, [_c('g', { on: { "mousedown": function mousedown($event) {
          _vm.mouseDownSegment($event, 0);
        } } }, [_c('path', { style: _vm.largeStrokeStyle, attrs: { "d": _vm.curve, "stroke-width": "8", "fill": "none" } }), _vm._v(" "), _c('path', { staticStyle: { "stroke": "rgb(0,0,0)" }, attrs: { "d": _vm.curve, "stroke-width": "2", "fill": "none" } })])]), _vm._v(" "), _vm._l(_vm.points, function (point, pointIndex) {
      return _c('DiagramPoint', { attrs: { "x": point.x, "y": point.y }, on: { "mouseenter": function mouseenter($event) {
            _vm.mouseEnterPoint(point);
          }, "mouseleave": function mouseleave($event) {
            _vm.mouseLeavePoint(point);
          }, "mousedown": function mousedown($event) {
            _vm.mouseDownPoint($event, pointIndex);
          } } });
    })], 2);
  }, staticRenderFns: [],
  name: "DiagramLink",
  props: ["positionFrom", "positionTo", "id", "index", "points"],

  components: {
    DiagramPoint: DiagramPoint
  },

  data: function data() {
    return {
      largeStrokeStyle: "stroke:rgba(255,0,0,0.0);",
      pointStyleNormal: "stroke:rgba(255,0,0,0.0); stroke-width: 6",
      pointStyleHover: "stroke:rgba(255,0,0,0.5); stroke-width: 6"
    };
  },

  methods: {
    mouseEnter: function mouseEnter() {
      this.largeStrokeStyle = "stroke:rgba(255,0,0,0.5);";
    },
    mouseLeave: function mouseLeave() {
      this.largeStrokeStyle = "stroke:rgba(255,0,0,0.0);";
    },
    mouseDownPoint: function mouseDownPoint(pos, pointIndex) {
      console.log("mouseDownPoint", arguments);
      this.$emit("onStartDrag", {
        type: "points",
        linkIndex: this.index,
        pointIndex: pointIndex
      });
    },
    mouseDown: function mouseDown(pos) {},
    mouseDownSegment: function mouseDownSegment(pos, segmentIndex) {
      this.createPoint(pos.x, pos.y, segmentIndex);
      this.mouseDownPoint(pos, segmentIndex);
    },
    createPoint: function createPoint(x, y, pointIndex) {
      this.$emit("onCreatePoint", x, y, this.index, pointIndex);
    }
  },
  computed: {
    x1: function x1() {
      return this.positionFrom.x;
    },
    y1: function y1() {
      return this.positionFrom.y - 4;
    },
    x2: function x2() {
      return this.positionTo.x - 4;
    },
    y2: function y2() {
      return this.positionTo.y - 4;
    },
    curve: function curve() {
      var x1 = _Math$trunc(this.positionFrom.x),
          y1 = _Math$trunc(this.positionFrom.y - 4),
          x2 = _Math$trunc(this.positionTo.x - 4),
          y2 = _Math$trunc(this.positionTo.y - 4);

      var distance = _Math$trunc(4 * Math.sqrt(Math.abs(x1 - x2)));
      var path = 'M' + x1 + ',' + y1 + ' C' + (x1 + distance) + ',' + y1 + ' ' + (x2 - distance) + ',' + y2 + ' ' + x2 + ',' + y2;
      return path;
    }
  }
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = "";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var DiagramPort = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('g', [_vm.type === 'in' ? _c('svg', { attrs: { "y": _vm.y + 55 } }, [_c('rect', { ref: "handle", attrs: { "fill": _vm.fill, "x": "0", "y": "0", "rx": "3", "ry": "3", "width": "10", "height": "10" }, on: { "mouseenter": _vm.enter, "mouseleave": _vm.leave, "mousedown": _vm.startDragNewLink, "mouseup": _vm.mouseup } }), _vm._v(" "), _c('text', { attrs: { "x": "12", "y": "9", "font-size": "8pt", "fill": "#000000" } }, [_vm._v(_vm._s(_vm.name))])]) : _c('svg', { attrs: { "y": _vm.y + 55 } }, [_c('rect', { ref: "handle", attrs: { "fill": _vm.fill, "x": _vm.nodeWidth, "y": "0", "rx": "3", "ry": "3", "width": "10", "height": "10" }, on: { "mouseenter": _vm.enter, "mouseleave": _vm.leave, "mousedown": _vm.startDragNewLink, "mouseup": _vm.mouseup } }), _vm._v(" "), _c('text', { attrs: { "x": _vm.nodeWidth - 6, "y": "9", "text-anchor": "end", "font-size": "8pt", "fill": "#000000" } }, [_vm._v(_vm._s(_vm.name))])])]);
  }, staticRenderFns: [],
  name: "DiagramPort",
  props: ["id", "y", "type", "name", "nodeWidth", "nodeIndex"],
  data: function data() {
    return {
      fill: "#444444"
    };
  },

  methods: {
    mouseup: function mouseup() {
      this.$emit("mouseUpPort", this.id);
    },
    enter: function enter() {
      this.fill = "#888888";
    },
    leave: function leave() {
      this.fill = "#444444";
    },
    startDragNewLink: function startDragNewLink() {
      this.$emit("onStartDragNewLink", this.id);
    }
  }
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = " svg[data-v-ebfff91a]{ user-select: none; font-family: Helvetica; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var generateId$2 = function generateId() {
  return _Math$trunc(Math.random() * 1000);
};

function getAbsoluteXY(element) {
  var viewportElement = document.documentElement;
  var box = element.getBoundingClientRect();
  var scrollLeft = viewportElement.scrollLeft;
  var scrollTop = viewportElement.scrollTop;
  var x = box.left + scrollLeft;
  var y = box.top + scrollTop;
  return { x: x, y: y };
}

function snapToGrip(val, gridSize) {
  return gridSize * Math.round(val / gridSize);
}

var Diagram = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('SvgPanZoom', { style: { width: _vm.width + 'px', height: _vm.height + 'px', border: '1px solid black' }, attrs: { "xmlns": "http://www.w3.org/2000/svg", "zoomEnabled": _vm.zoomEnabled, "id": "svgroot", "panEnabled": _vm.panEnabled, "controlIconsEnabled": true, "fit": false, "center": true, "viewportSelector": "#svgroot2", "preventMouseEventsDefault": false, "beforePan": _vm.beforePan } }, [_c('svg', { ref: "dragramRoot", staticClass: "svg-content", attrs: { "id": "svgroot2", "version": "1.1", "xmlns": "http://www.w3.org/2000/svg", "viewBox": '0 0 ' + _vm.width + ' ' + _vm.height, "width": _vm.width, "height": _vm.height, "preserveAspectRatio": "xMinYMin meet" }, on: { "mousemove": _vm.mouseMove, "mouseup": _vm.mouseUp } }, [_c('defs', [_c('pattern', { attrs: { "id": "smallGrid", "width": "16", "height": "16", "patternUnits": "userSpaceOnUse" } }, [_c('path', { attrs: { "d": "M 16 0 L 0 0 0 16", "fill": "none", "stroke": "gray", "stroke-width": "0.5" } })]), _vm._v(" "), _c('pattern', { attrs: { "id": "grid", "width": "80", "height": "80", "patternUnits": "userSpaceOnUse" } }, [_c('rect', { attrs: { "width": "80", "height": "80", "fill": "url(#smallGrid)" } }), _vm._v(" "), _c('path', { attrs: { "d": "M 80 0 L 0 0 0 80", "fill": "none", "stroke": "gray", "stroke-width": "1" } })])]), _vm._v(" "), _c('rect', { ref: "grid", staticClass: "svg-pan-zoom_viewport", attrs: { "x": "-5000px", "y": "-5000px", "width": "10000px", "height": "10000px", "fill": "url(#grid)" }, on: { "mousedown": _vm.clearSelection } }), _vm._v(" "), _c('g', { ref: "viewPort", attrs: { "id": "viewport", "x": "50", "y": "50" } }, [_vm._l(_vm.model._model.links, function (link, index) {
      return _c('DiagramLink', { ref: 'link-' + index, refInFor: true, attrs: { "positionFrom": link.positionFrom, "positionTo": link.positionTo, "points": link.points, "id": link.id, "index": index }, on: { "onStartDrag": _vm.startDragPoint, "onCreatePoint": _vm.createPoint } });
    }), _vm._v(" "), _vm.newLink ? _c('line', { staticStyle: { "stroke": "rgb(255,0,0)", "stroke-width": "2" }, attrs: { "x1": _vm.getPortHandlePosition(_vm.newLink.startPortId).x, "y1": _vm.getPortHandlePosition(_vm.newLink.startPortId).y, "x2": _vm.convertXYtoViewPort(_vm.mouseX, 0).x, "y2": _vm.convertXYtoViewPort(0, _vm.mouseY).y } }) : _vm._e(), _vm._v(" "), _vm._l(_vm.model._model.nodes, function (node, nodeIndex) {
      return _c('DiagramNode', { ref: 'node-' + nodeIndex, refInFor: true, attrs: { "title": node.title, "x": node.x, "y": node.y, "width": node.width, "height": node.height, "color": node.color, "deletable": node.deletable, "ports": node.ports, "selected": _vm.selectedItem.type === 'nodes' && _vm.selectedItem.index === nodeIndex, "index": nodeIndex }, on: { "onStartDrag": _vm.startDragItem, "delete": function _delete($event) {
            _vm.model.deleteNode(node);
          } } }, _vm._l(node.ports, function (port, portIndex) {
        return _c('DiagramPort', { ref: 'port-' + port.id, refInFor: true, attrs: { "id": port.id, "nodeIndex": nodeIndex, "y": portIndex * 20, "nodeWidth": node.width, "type": port.type, "name": port.name }, on: { "onStartDragNewLink": _vm.startDragNewLink, "mouseUpPort": _vm.mouseUpPort } });
      }));
    })], 2)])])], 1);
  }, staticRenderFns: [], _scopeId: 'data-v-ebfff91a',
  name: "Diagram",
  Model: DiagramModel,

  props: {
    model: {
      required: true
    },
    width: {
      default: 500
    },
    height: {
      default: 500
    },
    gridSnap: {
      default: 1
    }
  },

  data: function data() {
    this.updateLinksPositions();

    return {
      document: document,
      zoomEnabled: true,
      panEnabled: true,
      draggedItem: undefined,
      selectedItem: {},
      initialDragX: 0,
      initialDragY: 0,
      newLink: undefined,
      mouseX: 0,
      mouseY: 0
    };
  },

  components: {
    DiagramNode: DiagramNode$2,
    DiagramLink: DiagramLink,
    DiagramPort: DiagramPort,
    SvgPanZoom: SvgPanZoom
  },

  methods: {
    convertXYtoViewPort: function convertXYtoViewPort(x, y) {
      var rootelt = document.getElementById("svgroot2");
      var rec = document.getElementById("viewport");
      var point = rootelt.createSVGPoint();
      var rooteltPosition = getAbsoluteXY(rootelt);
      point.x = x - rooteltPosition.x;
      point.y = y - rooteltPosition.y;
      var ctm = rec.getCTM().inverse();
      return point.matrixTransform(ctm);
    },
    beforePan: function beforePan() {
      if (this.selectedItem.type || this.draggedItem || this.newLink) return false;else return true;
    },
    createPoint: function createPoint(x, y, linkIndex, pointIndex) {
      var coords = this.convertXYtoViewPort(x, y);
      var links = this.model._model.links;

      //FIXME works well only on links created at startup
      if (links[linkIndex].points === undefined) links[linkIndex].points = [];

      var points = links[linkIndex].points;
      points.splice(pointIndex, 0, coords);
      links[linkIndex].points = points;
    },
    clearSelection: function clearSelection() {
      this.selectedItem = {};
    },
    updateLinksPositions: function updateLinksPositions() {
      var _this = this;

      var links = [];

      if (this.model && this.model._model) links = this.model._model.links;

      this.$nextTick(function () {
        setTimeout(function () {
          for (var i = 0; i < links.length; i++) {
            var coords;
            coords = _this.getPortHandlePosition(links[i].from);
            links[i].positionFrom = { x: coords.x, y: coords.y };
            coords = _this.getPortHandlePosition(links[i].to);
            links[i].positionTo = { x: coords.x, y: coords.y };
          }
        }, 100);
      });
    },
    startDragNewLink: function startDragNewLink(startPortId) {
      this.panEnabled = false;
      this.newLink = {
        startPortId: startPortId
      };
    },
    getPortHandlePosition: function getPortHandlePosition(portId) {
      if (this.$refs["port-" + portId]) {
        var port = this.$refs["port-" + portId][0];
        var node = this.$refs["node-" + port.nodeIndex][0];
        var x;
        var y;
        if (port.type === "in") {
          x = node.x + 10;
          y = node.y + port.y + 64;
        } else {
          x = node.x + node.width + 10;
          y = node.y + port.y + 64;
        }

        return { x: x, y: y };
      } else {
        console.warn('port "' + portId + '" not found. you must call this method after the first render');
        return 0;
      }
    },
    mouseMove: function mouseMove(pos) {
      var links = this.model._model.links;
      this.mouseX = pos.x;
      this.mouseY = pos.y;
      if (this.draggedItem) {
        var index = this.draggedItem.index;
        var type = this.draggedItem.type;
        if (type === "points") {
          var coords = this.convertXYtoViewPort(this.mouseX, this.mouseY);

          coords.x = snapToGrip(coords.x, this.gridSnap) - this.gridSnap / 2;
          coords.y = snapToGrip(coords.y, this.gridSnap);

          links[this.draggedItem.linkIndex].points[this.draggedItem.pointIndex].x = coords.x;
          links[this.draggedItem.linkIndex].points[this.draggedItem.pointIndex].y = coords.y;
          this.updateLinksPositions();
        } else {
          var _coords = this.convertXYtoViewPort(this.mouseX, this.mouseY);

          _coords.x = snapToGrip(_coords.x, this.gridSnap) - this.gridSnap / 2;
          _coords.y = snapToGrip(_coords.y, this.gridSnap);

          this.model._model[type][index].x = _coords.x - 30;
          this.model._model[type][index].y = _coords.y - 30;
          this.updateLinksPositions();
        }
      }
    },
    mouseUp: function mouseUp() {
      this.draggedItem = undefined;
      this.newLink = undefined;
    },
    mouseUpPort: function mouseUpPort(portId) {
      var links = this.model._model.links;

      if (this.draggedItem && this.draggedItem.type === "points") {
        console.log(this.draggedItem);
        var pointIndex = this.draggedItem.pointIndex;
        var linkIndex = this.draggedItem.linkIndex;

        if (this.$refs["port-" + portId][0].type === "in") {
          var l = links[linkIndex].points.length;
          links[linkIndex].points.splice(pointIndex, l - this.draggedItem.pointIndex);
        } else {
          links[linkIndex].points.splice(0, pointIndex + 1);
        }
        this.updateLinksPositions();
      }

      if (this.newLink !== undefined) {
        var port1Id = this.newLink.startPortId;
        var port2Id = portId;

        var port1 = this.$refs["port-" + port1Id][0];
        var port2 = this.$refs["port-" + port2Id][0];

        if (port1.type === "in" && port2.type === "out") {
          links.push({
            id: generateId$2(),
            from: port2.id,
            to: port1.id,
            positionFrom: {},
            positionTo: {},
            points: []
          });
        } else if (port2.type === "in" && port1.type === "out") {
          links.push({
            id: generateId$2(),
            from: port1.id,
            to: port2.id,
            positionFrom: {},
            positionTo: {},
            points: []
          });
        } else {
          console.warn("You must link one out port and one in port");
        }

        this.model._model.links = links;

        this.updateLinksPositions();
      }
    },
    startDragPoint: function startDragPoint(pointInfo) {
      console.log("startDragPoint", pointInfo);
      this.draggedItem = pointInfo;
    },
    startDragItem: function startDragItem(item, x, y) {
      this.panEnabled = false;
      this.draggedItem = item;
      this.selectedItem = item;
      this.initialDragX = x;
      this.initialDragY = y;
    }
  },
  computed: {
    querySelector: function querySelector() {
      return document.querySelector("#viewport");
    }
  },

  watch: {
    "model._model.links": function model_modelLinks() {
      this.updateLinksPositions();
    }
  }
};

var LibraryModule = {
  Diagram: Diagram,

  install: function install(Vue) {
    // Register components with vue
    Vue.component("diagram", Diagram);
  }
};



var LibraryComponents = Object.freeze({
	default: LibraryModule,
	Diagram: Diagram,
	DiagramModel: DiagramModel
});

// Automatically register components if Vue is available globally
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(LibraryModule);
}

exports['default'] = LibraryComponents;

Object.defineProperty(exports, '__esModule', { value: true });

})));

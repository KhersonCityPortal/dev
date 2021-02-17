function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
  /***/
  "./node_modules/chartist/dist/chartist.js":
  /*!************************************************!*\
    !*** ./node_modules/chartist/dist/chartist.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesChartistDistChartistJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    (function (root, factory) {
      if (true) {
        // AMD. Register as an anonymous module unless amdModuleId is set
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
          return root['Chartist'] = factory();
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      } else {}
    })(this, function () {
      /* Chartist.js 0.11.4
       * Copyright © 2019 Gion Kunz
       * Free to use under either the WTFPL license or the MIT license.
       * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-WTFPL
       * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-MIT
       */

      /**
       * The core module of Chartist that is mainly providing static functions and higher level functions for chart modules.
       *
       * @module Chartist.Core
       */
      var Chartist = {
        version: '0.11.4'
      };

      (function (globalRoot, Chartist) {
        'use strict';

        var window = globalRoot.window;
        var document = globalRoot.document;
        /**
         * This object contains all namespaces used within Chartist.
         *
         * @memberof Chartist.Core
         * @type {{svg: string, xmlns: string, xhtml: string, xlink: string, ct: string}}
         */

        Chartist.namespaces = {
          svg: 'http://www.w3.org/2000/svg',
          xmlns: 'http://www.w3.org/2000/xmlns/',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          ct: 'http://gionkunz.github.com/chartist-js/ct'
        };
        /**
         * Helps to simplify functional style code
         *
         * @memberof Chartist.Core
         * @param {*} n This exact value will be returned by the noop function
         * @return {*} The same value that was provided to the n parameter
         */

        Chartist.noop = function (n) {
          return n;
        };
        /**
         * Generates a-z from a number 0 to 26
         *
         * @memberof Chartist.Core
         * @param {Number} n A number from 0 to 26 that will result in a letter a-z
         * @return {String} A character from a-z based on the input number n
         */


        Chartist.alphaNumerate = function (n) {
          // Limit to a-z
          return String.fromCharCode(97 + n % 26);
        };
        /**
         * Simple recursive object extend
         *
         * @memberof Chartist.Core
         * @param {Object} target Target object where the source will be merged into
         * @param {Object...} sources This object (objects) will be merged into target and then target is returned
         * @return {Object} An object that has the same reference as target but is extended and merged with the properties of source
         */


        Chartist.extend = function (target) {
          var i, source, sourceProp;
          target = target || {};

          for (i = 1; i < arguments.length; i++) {
            source = arguments[i];

            for (var prop in source) {
              sourceProp = source[prop];

              if (typeof sourceProp === 'object' && sourceProp !== null && !(sourceProp instanceof Array)) {
                target[prop] = Chartist.extend(target[prop], sourceProp);
              } else {
                target[prop] = sourceProp;
              }
            }
          }

          return target;
        };
        /**
         * Replaces all occurrences of subStr in str with newSubStr and returns a new string.
         *
         * @memberof Chartist.Core
         * @param {String} str
         * @param {String} subStr
         * @param {String} newSubStr
         * @return {String}
         */


        Chartist.replaceAll = function (str, subStr, newSubStr) {
          return str.replace(new RegExp(subStr, 'g'), newSubStr);
        };
        /**
         * Converts a number to a string with a unit. If a string is passed then this will be returned unmodified.
         *
         * @memberof Chartist.Core
         * @param {Number} value
         * @param {String} unit
         * @return {String} Returns the passed number value with unit.
         */


        Chartist.ensureUnit = function (value, unit) {
          if (typeof value === 'number') {
            value = value + unit;
          }

          return value;
        };
        /**
         * Converts a number or string to a quantity object.
         *
         * @memberof Chartist.Core
         * @param {String|Number} input
         * @return {Object} Returns an object containing the value as number and the unit as string.
         */


        Chartist.quantity = function (input) {
          if (typeof input === 'string') {
            var match = /^(\d+)\s*(.*)$/g.exec(input);
            return {
              value: +match[1],
              unit: match[2] || undefined
            };
          }

          return {
            value: input
          };
        };
        /**
         * This is a wrapper around document.querySelector that will return the query if it's already of type Node
         *
         * @memberof Chartist.Core
         * @param {String|Node} query The query to use for selecting a Node or a DOM node that will be returned directly
         * @return {Node}
         */


        Chartist.querySelector = function (query) {
          return query instanceof Node ? query : document.querySelector(query);
        };
        /**
         * Functional style helper to produce array with given length initialized with undefined values
         *
         * @memberof Chartist.Core
         * @param length
         * @return {Array}
         */


        Chartist.times = function (length) {
          return Array.apply(null, new Array(length));
        };
        /**
         * Sum helper to be used in reduce functions
         *
         * @memberof Chartist.Core
         * @param previous
         * @param current
         * @return {*}
         */


        Chartist.sum = function (previous, current) {
          return previous + (current ? current : 0);
        };
        /**
         * Multiply helper to be used in `Array.map` for multiplying each value of an array with a factor.
         *
         * @memberof Chartist.Core
         * @param {Number} factor
         * @returns {Function} Function that can be used in `Array.map` to multiply each value in an array
         */


        Chartist.mapMultiply = function (factor) {
          return function (num) {
            return num * factor;
          };
        };
        /**
         * Add helper to be used in `Array.map` for adding a addend to each value of an array.
         *
         * @memberof Chartist.Core
         * @param {Number} addend
         * @returns {Function} Function that can be used in `Array.map` to add a addend to each value in an array
         */


        Chartist.mapAdd = function (addend) {
          return function (num) {
            return num + addend;
          };
        };
        /**
         * Map for multi dimensional arrays where their nested arrays will be mapped in serial. The output array will have the length of the largest nested array. The callback function is called with variable arguments where each argument is the nested array value (or undefined if there are no more values).
         *
         * @memberof Chartist.Core
         * @param arr
         * @param cb
         * @return {Array}
         */


        Chartist.serialMap = function (arr, cb) {
          var result = [],
              length = Math.max.apply(null, arr.map(function (e) {
            return e.length;
          }));
          Chartist.times(length).forEach(function (e, index) {
            var args = arr.map(function (e) {
              return e[index];
            });
            result[index] = cb.apply(null, args);
          });
          return result;
        };
        /**
         * This helper function can be used to round values with certain precision level after decimal. This is used to prevent rounding errors near float point precision limit.
         *
         * @memberof Chartist.Core
         * @param {Number} value The value that should be rounded with precision
         * @param {Number} [digits] The number of digits after decimal used to do the rounding
         * @returns {number} Rounded value
         */


        Chartist.roundWithPrecision = function (value, digits) {
          var precision = Math.pow(10, digits || Chartist.precision);
          return Math.round(value * precision) / precision;
        };
        /**
         * Precision level used internally in Chartist for rounding. If you require more decimal places you can increase this number.
         *
         * @memberof Chartist.Core
         * @type {number}
         */


        Chartist.precision = 8;
        /**
         * A map with characters to escape for strings to be safely used as attribute values.
         *
         * @memberof Chartist.Core
         * @type {Object}
         */

        Chartist.escapingMap = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          '\'': '&#039;'
        };
        /**
         * This function serializes arbitrary data to a string. In case of data that can't be easily converted to a string, this function will create a wrapper object and serialize the data using JSON.stringify. The outcoming string will always be escaped using Chartist.escapingMap.
         * If called with null or undefined the function will return immediately with null or undefined.
         *
         * @memberof Chartist.Core
         * @param {Number|String|Object} data
         * @return {String}
         */

        Chartist.serialize = function (data) {
          if (data === null || data === undefined) {
            return data;
          } else if (typeof data === 'number') {
            data = '' + data;
          } else if (typeof data === 'object') {
            data = JSON.stringify({
              data: data
            });
          }

          return Object.keys(Chartist.escapingMap).reduce(function (result, key) {
            return Chartist.replaceAll(result, key, Chartist.escapingMap[key]);
          }, data);
        };
        /**
         * This function de-serializes a string previously serialized with Chartist.serialize. The string will always be unescaped using Chartist.escapingMap before it's returned. Based on the input value the return type can be Number, String or Object. JSON.parse is used with try / catch to see if the unescaped string can be parsed into an Object and this Object will be returned on success.
         *
         * @memberof Chartist.Core
         * @param {String} data
         * @return {String|Number|Object}
         */


        Chartist.deserialize = function (data) {
          if (typeof data !== 'string') {
            return data;
          }

          data = Object.keys(Chartist.escapingMap).reduce(function (result, key) {
            return Chartist.replaceAll(result, Chartist.escapingMap[key], key);
          }, data);

          try {
            data = JSON.parse(data);
            data = data.data !== undefined ? data.data : data;
          } catch (e) {}

          return data;
        };
        /**
         * Create or reinitialize the SVG element for the chart
         *
         * @memberof Chartist.Core
         * @param {Node} container The containing DOM Node object that will be used to plant the SVG element
         * @param {String} width Set the width of the SVG element. Default is 100%
         * @param {String} height Set the height of the SVG element. Default is 100%
         * @param {String} className Specify a class to be added to the SVG element
         * @return {Object} The created/reinitialized SVG element
         */


        Chartist.createSvg = function (container, width, height, className) {
          var svg;
          width = width || '100%';
          height = height || '100%'; // Check if there is a previous SVG element in the container that contains the Chartist XML namespace and remove it
          // Since the DOM API does not support namespaces we need to manually search the returned list http://www.w3.org/TR/selectors-api/

          Array.prototype.slice.call(container.querySelectorAll('svg')).filter(function filterChartistSvgObjects(svg) {
            return svg.getAttributeNS(Chartist.namespaces.xmlns, 'ct');
          }).forEach(function removePreviousElement(svg) {
            container.removeChild(svg);
          }); // Create svg object with width and height or use 100% as default

          svg = new Chartist.Svg('svg').attr({
            width: width,
            height: height
          }).addClass(className);
          svg._node.style.width = width;
          svg._node.style.height = height; // Add the DOM node to our container

          container.appendChild(svg._node);
          return svg;
        };
        /**
         * Ensures that the data object passed as second argument to the charts is present and correctly initialized.
         *
         * @param  {Object} data The data object that is passed as second argument to the charts
         * @return {Object} The normalized data object
         */


        Chartist.normalizeData = function (data, reverse, multi) {
          var labelCount;
          var output = {
            raw: data,
            normalized: {}
          }; // Check if we should generate some labels based on existing series data

          output.normalized.series = Chartist.getDataArray({
            series: data.series || []
          }, reverse, multi); // If all elements of the normalized data array are arrays we're dealing with
          // multi series data and we need to find the largest series if they are un-even

          if (output.normalized.series.every(function (value) {
            return value instanceof Array;
          })) {
            // Getting the series with the the most elements
            labelCount = Math.max.apply(null, output.normalized.series.map(function (series) {
              return series.length;
            }));
          } else {
            // We're dealing with Pie data so we just take the normalized array length
            labelCount = output.normalized.series.length;
          }

          output.normalized.labels = (data.labels || []).slice(); // Padding the labels to labelCount with empty strings

          Array.prototype.push.apply(output.normalized.labels, Chartist.times(Math.max(0, labelCount - output.normalized.labels.length)).map(function () {
            return '';
          }));

          if (reverse) {
            Chartist.reverseData(output.normalized);
          }

          return output;
        };
        /**
         * This function safely checks if an objects has an owned property.
         *
         * @param {Object} object The object where to check for a property
         * @param {string} property The property name
         * @returns {boolean} Returns true if the object owns the specified property
         */


        Chartist.safeHasProperty = function (object, property) {
          return object !== null && typeof object === 'object' && object.hasOwnProperty(property);
        };
        /**
         * Checks if a value is considered a hole in the data series.
         *
         * @param {*} value
         * @returns {boolean} True if the value is considered a data hole
         */


        Chartist.isDataHoleValue = function (value) {
          return value === null || value === undefined || typeof value === 'number' && isNaN(value);
        };
        /**
         * Reverses the series, labels and series data arrays.
         *
         * @memberof Chartist.Core
         * @param data
         */


        Chartist.reverseData = function (data) {
          data.labels.reverse();
          data.series.reverse();

          for (var i = 0; i < data.series.length; i++) {
            if (typeof data.series[i] === 'object' && data.series[i].data !== undefined) {
              data.series[i].data.reverse();
            } else if (data.series[i] instanceof Array) {
              data.series[i].reverse();
            }
          }
        };
        /**
         * Convert data series into plain array
         *
         * @memberof Chartist.Core
         * @param {Object} data The series object that contains the data to be visualized in the chart
         * @param {Boolean} [reverse] If true the whole data is reversed by the getDataArray call. This will modify the data object passed as first parameter. The labels as well as the series order is reversed. The whole series data arrays are reversed too.
         * @param {Boolean} [multi] Create a multi dimensional array from a series data array where a value object with `x` and `y` values will be created.
         * @return {Array} A plain array that contains the data to be visualized in the chart
         */


        Chartist.getDataArray = function (data, reverse, multi) {
          // Recursively walks through nested arrays and convert string values to numbers and objects with value properties
          // to values. Check the tests in data core -> data normalization for a detailed specification of expected values
          function recursiveConvert(value) {
            if (Chartist.safeHasProperty(value, 'value')) {
              // We are dealing with value object notation so we need to recurse on value property
              return recursiveConvert(value.value);
            } else if (Chartist.safeHasProperty(value, 'data')) {
              // We are dealing with series object notation so we need to recurse on data property
              return recursiveConvert(value.data);
            } else if (value instanceof Array) {
              // Data is of type array so we need to recurse on the series
              return value.map(recursiveConvert);
            } else if (Chartist.isDataHoleValue(value)) {
              // We're dealing with a hole in the data and therefore need to return undefined
              // We're also returning undefined for multi value output
              return undefined;
            } else {
              // We need to prepare multi value output (x and y data)
              if (multi) {
                var multiValue = {}; // Single series value arrays are assumed to specify the Y-Axis value
                // For example: [1, 2] => [{x: undefined, y: 1}, {x: undefined, y: 2}]
                // If multi is a string then it's assumed that it specified which dimension should be filled as default

                if (typeof multi === 'string') {
                  multiValue[multi] = Chartist.getNumberOrUndefined(value);
                } else {
                  multiValue.y = Chartist.getNumberOrUndefined(value);
                }

                multiValue.x = value.hasOwnProperty('x') ? Chartist.getNumberOrUndefined(value.x) : multiValue.x;
                multiValue.y = value.hasOwnProperty('y') ? Chartist.getNumberOrUndefined(value.y) : multiValue.y;
                return multiValue;
              } else {
                // We can return simple data
                return Chartist.getNumberOrUndefined(value);
              }
            }
          }

          return data.series.map(recursiveConvert);
        };
        /**
         * Converts a number into a padding object.
         *
         * @memberof Chartist.Core
         * @param {Object|Number} padding
         * @param {Number} [fallback] This value is used to fill missing values if a incomplete padding object was passed
         * @returns {Object} Returns a padding object containing top, right, bottom, left properties filled with the padding number passed in as argument. If the argument is something else than a number (presumably already a correct padding object) then this argument is directly returned.
         */


        Chartist.normalizePadding = function (padding, fallback) {
          fallback = fallback || 0;
          return typeof padding === 'number' ? {
            top: padding,
            right: padding,
            bottom: padding,
            left: padding
          } : {
            top: typeof padding.top === 'number' ? padding.top : fallback,
            right: typeof padding.right === 'number' ? padding.right : fallback,
            bottom: typeof padding.bottom === 'number' ? padding.bottom : fallback,
            left: typeof padding.left === 'number' ? padding.left : fallback
          };
        };

        Chartist.getMetaData = function (series, index) {
          var value = series.data ? series.data[index] : series[index];
          return value ? value.meta : undefined;
        };
        /**
         * Calculate the order of magnitude for the chart scale
         *
         * @memberof Chartist.Core
         * @param {Number} value The value Range of the chart
         * @return {Number} The order of magnitude
         */


        Chartist.orderOfMagnitude = function (value) {
          return Math.floor(Math.log(Math.abs(value)) / Math.LN10);
        };
        /**
         * Project a data length into screen coordinates (pixels)
         *
         * @memberof Chartist.Core
         * @param {Object} axisLength The svg element for the chart
         * @param {Number} length Single data value from a series array
         * @param {Object} bounds All the values to set the bounds of the chart
         * @return {Number} The projected data length in pixels
         */


        Chartist.projectLength = function (axisLength, length, bounds) {
          return length / bounds.range * axisLength;
        };
        /**
         * Get the height of the area in the chart for the data series
         *
         * @memberof Chartist.Core
         * @param {Object} svg The svg element for the chart
         * @param {Object} options The Object that contains all the optional values for the chart
         * @return {Number} The height of the area in the chart for the data series
         */


        Chartist.getAvailableHeight = function (svg, options) {
          return Math.max((Chartist.quantity(options.height).value || svg.height()) - (options.chartPadding.top + options.chartPadding.bottom) - options.axisX.offset, 0);
        };
        /**
         * Get highest and lowest value of data array. This Array contains the data that will be visualized in the chart.
         *
         * @memberof Chartist.Core
         * @param {Array} data The array that contains the data to be visualized in the chart
         * @param {Object} options The Object that contains the chart options
         * @param {String} dimension Axis dimension 'x' or 'y' used to access the correct value and high / low configuration
         * @return {Object} An object that contains the highest and lowest value that will be visualized on the chart.
         */


        Chartist.getHighLow = function (data, options, dimension) {
          // TODO: Remove workaround for deprecated global high / low config. Axis high / low configuration is preferred
          options = Chartist.extend({}, options, dimension ? options['axis' + dimension.toUpperCase()] : {});
          var highLow = {
            high: options.high === undefined ? -Number.MAX_VALUE : +options.high,
            low: options.low === undefined ? Number.MAX_VALUE : +options.low
          };
          var findHigh = options.high === undefined;
          var findLow = options.low === undefined; // Function to recursively walk through arrays and find highest and lowest number

          function recursiveHighLow(data) {
            if (data === undefined) {
              return undefined;
            } else if (data instanceof Array) {
              for (var i = 0; i < data.length; i++) {
                recursiveHighLow(data[i]);
              }
            } else {
              var value = dimension ? +data[dimension] : +data;

              if (findHigh && value > highLow.high) {
                highLow.high = value;
              }

              if (findLow && value < highLow.low) {
                highLow.low = value;
              }
            }
          } // Start to find highest and lowest number recursively


          if (findHigh || findLow) {
            recursiveHighLow(data);
          } // Overrides of high / low based on reference value, it will make sure that the invisible reference value is
          // used to generate the chart. This is useful when the chart always needs to contain the position of the
          // invisible reference value in the view i.e. for bipolar scales.


          if (options.referenceValue || options.referenceValue === 0) {
            highLow.high = Math.max(options.referenceValue, highLow.high);
            highLow.low = Math.min(options.referenceValue, highLow.low);
          } // If high and low are the same because of misconfiguration or flat data (only the same value) we need
          // to set the high or low to 0 depending on the polarity


          if (highLow.high <= highLow.low) {
            // If both values are 0 we set high to 1
            if (highLow.low === 0) {
              highLow.high = 1;
            } else if (highLow.low < 0) {
              // If we have the same negative value for the bounds we set bounds.high to 0
              highLow.high = 0;
            } else if (highLow.high > 0) {
              // If we have the same positive value for the bounds we set bounds.low to 0
              highLow.low = 0;
            } else {
              // If data array was empty, values are Number.MAX_VALUE and -Number.MAX_VALUE. Set bounds to prevent errors
              highLow.high = 1;
              highLow.low = 0;
            }
          }

          return highLow;
        };
        /**
         * Checks if a value can be safely coerced to a number. This includes all values except null which result in finite numbers when coerced. This excludes NaN, since it's not finite.
         *
         * @memberof Chartist.Core
         * @param value
         * @returns {Boolean}
         */


        Chartist.isNumeric = function (value) {
          return value === null ? false : isFinite(value);
        };
        /**
         * Returns true on all falsey values except the numeric value 0.
         *
         * @memberof Chartist.Core
         * @param value
         * @returns {boolean}
         */


        Chartist.isFalseyButZero = function (value) {
          return !value && value !== 0;
        };
        /**
         * Returns a number if the passed parameter is a valid number or the function will return undefined. On all other values than a valid number, this function will return undefined.
         *
         * @memberof Chartist.Core
         * @param value
         * @returns {*}
         */


        Chartist.getNumberOrUndefined = function (value) {
          return Chartist.isNumeric(value) ? +value : undefined;
        };
        /**
         * Checks if provided value object is multi value (contains x or y properties)
         *
         * @memberof Chartist.Core
         * @param value
         */


        Chartist.isMultiValue = function (value) {
          return typeof value === 'object' && ('x' in value || 'y' in value);
        };
        /**
         * Gets a value from a dimension `value.x` or `value.y` while returning value directly if it's a valid numeric value. If the value is not numeric and it's falsey this function will return `defaultValue`.
         *
         * @memberof Chartist.Core
         * @param value
         * @param dimension
         * @param defaultValue
         * @returns {*}
         */


        Chartist.getMultiValue = function (value, dimension) {
          if (Chartist.isMultiValue(value)) {
            return Chartist.getNumberOrUndefined(value[dimension || 'y']);
          } else {
            return Chartist.getNumberOrUndefined(value);
          }
        };
        /**
         * Pollard Rho Algorithm to find smallest factor of an integer value. There are more efficient algorithms for factorization, but this one is quite efficient and not so complex.
         *
         * @memberof Chartist.Core
         * @param {Number} num An integer number where the smallest factor should be searched for
         * @returns {Number} The smallest integer factor of the parameter num.
         */


        Chartist.rho = function (num) {
          if (num === 1) {
            return num;
          }

          function gcd(p, q) {
            if (p % q === 0) {
              return q;
            } else {
              return gcd(q, p % q);
            }
          }

          function f(x) {
            return x * x + 1;
          }

          var x1 = 2,
              x2 = 2,
              divisor;

          if (num % 2 === 0) {
            return 2;
          }

          do {
            x1 = f(x1) % num;
            x2 = f(f(x2)) % num;
            divisor = gcd(Math.abs(x1 - x2), num);
          } while (divisor === 1);

          return divisor;
        };
        /**
         * Calculate and retrieve all the bounds for the chart and return them in one array
         *
         * @memberof Chartist.Core
         * @param {Number} axisLength The length of the Axis used for
         * @param {Object} highLow An object containing a high and low property indicating the value range of the chart.
         * @param {Number} scaleMinSpace The minimum projected length a step should result in
         * @param {Boolean} onlyInteger
         * @return {Object} All the values to set the bounds of the chart
         */


        Chartist.getBounds = function (axisLength, highLow, scaleMinSpace, onlyInteger) {
          var i,
              optimizationCounter = 0,
              newMin,
              newMax,
              bounds = {
            high: highLow.high,
            low: highLow.low
          };
          bounds.valueRange = bounds.high - bounds.low;
          bounds.oom = Chartist.orderOfMagnitude(bounds.valueRange);
          bounds.step = Math.pow(10, bounds.oom);
          bounds.min = Math.floor(bounds.low / bounds.step) * bounds.step;
          bounds.max = Math.ceil(bounds.high / bounds.step) * bounds.step;
          bounds.range = bounds.max - bounds.min;
          bounds.numberOfSteps = Math.round(bounds.range / bounds.step); // Optimize scale step by checking if subdivision is possible based on horizontalGridMinSpace
          // If we are already below the scaleMinSpace value we will scale up

          var length = Chartist.projectLength(axisLength, bounds.step, bounds);
          var scaleUp = length < scaleMinSpace;
          var smallestFactor = onlyInteger ? Chartist.rho(bounds.range) : 0; // First check if we should only use integer steps and if step 1 is still larger than scaleMinSpace so we can use 1

          if (onlyInteger && Chartist.projectLength(axisLength, 1, bounds) >= scaleMinSpace) {
            bounds.step = 1;
          } else if (onlyInteger && smallestFactor < bounds.step && Chartist.projectLength(axisLength, smallestFactor, bounds) >= scaleMinSpace) {
            // If step 1 was too small, we can try the smallest factor of range
            // If the smallest factor is smaller than the current bounds.step and the projected length of smallest factor
            // is larger than the scaleMinSpace we should go for it.
            bounds.step = smallestFactor;
          } else {
            // Trying to divide or multiply by 2 and find the best step value
            while (true) {
              if (scaleUp && Chartist.projectLength(axisLength, bounds.step, bounds) <= scaleMinSpace) {
                bounds.step *= 2;
              } else if (!scaleUp && Chartist.projectLength(axisLength, bounds.step / 2, bounds) >= scaleMinSpace) {
                bounds.step /= 2;

                if (onlyInteger && bounds.step % 1 !== 0) {
                  bounds.step *= 2;
                  break;
                }
              } else {
                break;
              }

              if (optimizationCounter++ > 1000) {
                throw new Error('Exceeded maximum number of iterations while optimizing scale step!');
              }
            }
          }

          var EPSILON = 2.221E-16;
          bounds.step = Math.max(bounds.step, EPSILON);

          function safeIncrement(value, increment) {
            // If increment is too small use *= (1+EPSILON) as a simple nextafter
            if (value === (value += increment)) {
              value *= 1 + (increment > 0 ? EPSILON : -EPSILON);
            }

            return value;
          } // Narrow min and max based on new step


          newMin = bounds.min;
          newMax = bounds.max;

          while (newMin + bounds.step <= bounds.low) {
            newMin = safeIncrement(newMin, bounds.step);
          }

          while (newMax - bounds.step >= bounds.high) {
            newMax = safeIncrement(newMax, -bounds.step);
          }

          bounds.min = newMin;
          bounds.max = newMax;
          bounds.range = bounds.max - bounds.min;
          var values = [];

          for (i = bounds.min; i <= bounds.max; i = safeIncrement(i, bounds.step)) {
            var value = Chartist.roundWithPrecision(i);

            if (value !== values[values.length - 1]) {
              values.push(value);
            }
          }

          bounds.values = values;
          return bounds;
        };
        /**
         * Calculate cartesian coordinates of polar coordinates
         *
         * @memberof Chartist.Core
         * @param {Number} centerX X-axis coordinates of center point of circle segment
         * @param {Number} centerY X-axis coordinates of center point of circle segment
         * @param {Number} radius Radius of circle segment
         * @param {Number} angleInDegrees Angle of circle segment in degrees
         * @return {{x:Number, y:Number}} Coordinates of point on circumference
         */


        Chartist.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
          var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
          return {
            x: centerX + radius * Math.cos(angleInRadians),
            y: centerY + radius * Math.sin(angleInRadians)
          };
        };
        /**
         * Initialize chart drawing rectangle (area where chart is drawn) x1,y1 = bottom left / x2,y2 = top right
         *
         * @memberof Chartist.Core
         * @param {Object} svg The svg element for the chart
         * @param {Object} options The Object that contains all the optional values for the chart
         * @param {Number} [fallbackPadding] The fallback padding if partial padding objects are used
         * @return {Object} The chart rectangles coordinates inside the svg element plus the rectangles measurements
         */


        Chartist.createChartRect = function (svg, options, fallbackPadding) {
          var hasAxis = !!(options.axisX || options.axisY);
          var yAxisOffset = hasAxis ? options.axisY.offset : 0;
          var xAxisOffset = hasAxis ? options.axisX.offset : 0; // If width or height results in invalid value (including 0) we fallback to the unitless settings or even 0

          var width = svg.width() || Chartist.quantity(options.width).value || 0;
          var height = svg.height() || Chartist.quantity(options.height).value || 0;
          var normalizedPadding = Chartist.normalizePadding(options.chartPadding, fallbackPadding); // If settings were to small to cope with offset (legacy) and padding, we'll adjust

          width = Math.max(width, yAxisOffset + normalizedPadding.left + normalizedPadding.right);
          height = Math.max(height, xAxisOffset + normalizedPadding.top + normalizedPadding.bottom);
          var chartRect = {
            padding: normalizedPadding,
            width: function width() {
              return this.x2 - this.x1;
            },
            height: function height() {
              return this.y1 - this.y2;
            }
          };

          if (hasAxis) {
            if (options.axisX.position === 'start') {
              chartRect.y2 = normalizedPadding.top + xAxisOffset;
              chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
            } else {
              chartRect.y2 = normalizedPadding.top;
              chartRect.y1 = Math.max(height - normalizedPadding.bottom - xAxisOffset, chartRect.y2 + 1);
            }

            if (options.axisY.position === 'start') {
              chartRect.x1 = normalizedPadding.left + yAxisOffset;
              chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
            } else {
              chartRect.x1 = normalizedPadding.left;
              chartRect.x2 = Math.max(width - normalizedPadding.right - yAxisOffset, chartRect.x1 + 1);
            }
          } else {
            chartRect.x1 = normalizedPadding.left;
            chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
            chartRect.y2 = normalizedPadding.top;
            chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
          }

          return chartRect;
        };
        /**
         * Creates a grid line based on a projected value.
         *
         * @memberof Chartist.Core
         * @param position
         * @param index
         * @param axis
         * @param offset
         * @param length
         * @param group
         * @param classes
         * @param eventEmitter
         */


        Chartist.createGrid = function (position, index, axis, offset, length, group, classes, eventEmitter) {
          var positionalData = {};
          positionalData[axis.units.pos + '1'] = position;
          positionalData[axis.units.pos + '2'] = position;
          positionalData[axis.counterUnits.pos + '1'] = offset;
          positionalData[axis.counterUnits.pos + '2'] = offset + length;
          var gridElement = group.elem('line', positionalData, classes.join(' ')); // Event for grid draw

          eventEmitter.emit('draw', Chartist.extend({
            type: 'grid',
            axis: axis,
            index: index,
            group: group,
            element: gridElement
          }, positionalData));
        };
        /**
         * Creates a grid background rect and emits the draw event.
         *
         * @memberof Chartist.Core
         * @param gridGroup
         * @param chartRect
         * @param className
         * @param eventEmitter
         */


        Chartist.createGridBackground = function (gridGroup, chartRect, className, eventEmitter) {
          var gridBackground = gridGroup.elem('rect', {
            x: chartRect.x1,
            y: chartRect.y2,
            width: chartRect.width(),
            height: chartRect.height()
          }, className, true); // Event for grid background draw

          eventEmitter.emit('draw', {
            type: 'gridBackground',
            group: gridGroup,
            element: gridBackground
          });
        };
        /**
         * Creates a label based on a projected value and an axis.
         *
         * @memberof Chartist.Core
         * @param position
         * @param length
         * @param index
         * @param labels
         * @param axis
         * @param axisOffset
         * @param labelOffset
         * @param group
         * @param classes
         * @param useForeignObject
         * @param eventEmitter
         */


        Chartist.createLabel = function (position, length, index, labels, axis, axisOffset, labelOffset, group, classes, useForeignObject, eventEmitter) {
          var labelElement;
          var positionalData = {};
          positionalData[axis.units.pos] = position + labelOffset[axis.units.pos];
          positionalData[axis.counterUnits.pos] = labelOffset[axis.counterUnits.pos];
          positionalData[axis.units.len] = length;
          positionalData[axis.counterUnits.len] = Math.max(0, axisOffset - 10);

          if (useForeignObject) {
            // We need to set width and height explicitly to px as span will not expand with width and height being
            // 100% in all browsers
            var content = document.createElement('span');
            content.className = classes.join(' ');
            content.setAttribute('xmlns', Chartist.namespaces.xhtml);
            content.innerText = labels[index];
            content.style[axis.units.len] = Math.round(positionalData[axis.units.len]) + 'px';
            content.style[axis.counterUnits.len] = Math.round(positionalData[axis.counterUnits.len]) + 'px';
            labelElement = group.foreignObject(content, Chartist.extend({
              style: 'overflow: visible;'
            }, positionalData));
          } else {
            labelElement = group.elem('text', positionalData, classes.join(' ')).text(labels[index]);
          }

          eventEmitter.emit('draw', Chartist.extend({
            type: 'label',
            axis: axis,
            index: index,
            group: group,
            element: labelElement,
            text: labels[index]
          }, positionalData));
        };
        /**
         * Helper to read series specific options from options object. It automatically falls back to the global option if
         * there is no option in the series options.
         *
         * @param {Object} series Series object
         * @param {Object} options Chartist options object
         * @param {string} key The options key that should be used to obtain the options
         * @returns {*}
         */


        Chartist.getSeriesOption = function (series, options, key) {
          if (series.name && options.series && options.series[series.name]) {
            var seriesOptions = options.series[series.name];
            return seriesOptions.hasOwnProperty(key) ? seriesOptions[key] : options[key];
          } else {
            return options[key];
          }
        };
        /**
         * Provides options handling functionality with callback for options changes triggered by responsive options and media query matches
         *
         * @memberof Chartist.Core
         * @param {Object} options Options set by user
         * @param {Array} responsiveOptions Optional functions to add responsive behavior to chart
         * @param {Object} eventEmitter The event emitter that will be used to emit the options changed events
         * @return {Object} The consolidated options object from the defaults, base and matching responsive options
         */


        Chartist.optionsProvider = function (options, responsiveOptions, eventEmitter) {
          var baseOptions = Chartist.extend({}, options),
              currentOptions,
              mediaQueryListeners = [],
              i;

          function updateCurrentOptions(mediaEvent) {
            var previousOptions = currentOptions;
            currentOptions = Chartist.extend({}, baseOptions);

            if (responsiveOptions) {
              for (i = 0; i < responsiveOptions.length; i++) {
                var mql = window.matchMedia(responsiveOptions[i][0]);

                if (mql.matches) {
                  currentOptions = Chartist.extend(currentOptions, responsiveOptions[i][1]);
                }
              }
            }

            if (eventEmitter && mediaEvent) {
              eventEmitter.emit('optionsChanged', {
                previousOptions: previousOptions,
                currentOptions: currentOptions
              });
            }
          }

          function removeMediaQueryListeners() {
            mediaQueryListeners.forEach(function (mql) {
              mql.removeListener(updateCurrentOptions);
            });
          }

          if (!window.matchMedia) {
            throw 'window.matchMedia not found! Make sure you\'re using a polyfill.';
          } else if (responsiveOptions) {
            for (i = 0; i < responsiveOptions.length; i++) {
              var mql = window.matchMedia(responsiveOptions[i][0]);
              mql.addListener(updateCurrentOptions);
              mediaQueryListeners.push(mql);
            }
          } // Execute initially without an event argument so we get the correct options


          updateCurrentOptions();
          return {
            removeMediaQueryListeners: removeMediaQueryListeners,
            getCurrentOptions: function getCurrentOptions() {
              return Chartist.extend({}, currentOptions);
            }
          };
        };
        /**
         * Splits a list of coordinates and associated values into segments. Each returned segment contains a pathCoordinates
         * valueData property describing the segment.
         *
         * With the default options, segments consist of contiguous sets of points that do not have an undefined value. Any
         * points with undefined values are discarded.
         *
         * **Options**
         * The following options are used to determine how segments are formed
         * ```javascript
         * var options = {
         *   // If fillHoles is true, undefined values are simply discarded without creating a new segment. Assuming other options are default, this returns single segment.
         *   fillHoles: false,
         *   // If increasingX is true, the coordinates in all segments have strictly increasing x-values.
         *   increasingX: false
         * };
         * ```
         *
         * @memberof Chartist.Core
         * @param {Array} pathCoordinates List of point coordinates to be split in the form [x1, y1, x2, y2 ... xn, yn]
         * @param {Array} values List of associated point values in the form [v1, v2 .. vn]
         * @param {Object} options Options set by user
         * @return {Array} List of segments, each containing a pathCoordinates and valueData property.
         */


        Chartist.splitIntoSegments = function (pathCoordinates, valueData, options) {
          var defaultOptions = {
            increasingX: false,
            fillHoles: false
          };
          options = Chartist.extend({}, defaultOptions, options);
          var segments = [];
          var hole = true;

          for (var i = 0; i < pathCoordinates.length; i += 2) {
            // If this value is a "hole" we set the hole flag
            if (Chartist.getMultiValue(valueData[i / 2].value) === undefined) {
              // if(valueData[i / 2].value === undefined) {
              if (!options.fillHoles) {
                hole = true;
              }
            } else {
              if (options.increasingX && i >= 2 && pathCoordinates[i] <= pathCoordinates[i - 2]) {
                // X is not increasing, so we need to make sure we start a new segment
                hole = true;
              } // If it's a valid value we need to check if we're coming out of a hole and create a new empty segment


              if (hole) {
                segments.push({
                  pathCoordinates: [],
                  valueData: []
                }); // As we have a valid value now, we are not in a "hole" anymore

                hole = false;
              } // Add to the segment pathCoordinates and valueData


              segments[segments.length - 1].pathCoordinates.push(pathCoordinates[i], pathCoordinates[i + 1]);
              segments[segments.length - 1].valueData.push(valueData[i / 2]);
            }
          }

          return segments;
        };
      })(this || global, Chartist);

      ;
      /**
      * Chartist path interpolation functions.
      *
      * @module Chartist.Interpolation
      */

      /* global Chartist */

      (function (globalRoot, Chartist) {
        'use strict';

        Chartist.Interpolation = {};
        /**
         * This interpolation function does not smooth the path and the result is only containing lines and no curves.
         *
         * @example
         * var chart = new Chartist.Line('.ct-chart', {
         *   labels: [1, 2, 3, 4, 5],
         *   series: [[1, 2, 8, 1, 7]]
         * }, {
         *   lineSmooth: Chartist.Interpolation.none({
         *     fillHoles: false
         *   })
         * });
         *
         *
         * @memberof Chartist.Interpolation
         * @return {Function}
         */

        Chartist.Interpolation.none = function (options) {
          var defaultOptions = {
            fillHoles: false
          };
          options = Chartist.extend({}, defaultOptions, options);
          return function none(pathCoordinates, valueData) {
            var path = new Chartist.Svg.Path();
            var hole = true;

            for (var i = 0; i < pathCoordinates.length; i += 2) {
              var currX = pathCoordinates[i];
              var currY = pathCoordinates[i + 1];
              var currData = valueData[i / 2];

              if (Chartist.getMultiValue(currData.value) !== undefined) {
                if (hole) {
                  path.move(currX, currY, false, currData);
                } else {
                  path.line(currX, currY, false, currData);
                }

                hole = false;
              } else if (!options.fillHoles) {
                hole = true;
              }
            }

            return path;
          };
        };
        /**
         * Simple smoothing creates horizontal handles that are positioned with a fraction of the length between two data points. You can use the divisor option to specify the amount of smoothing.
         *
         * Simple smoothing can be used instead of `Chartist.Smoothing.cardinal` if you'd like to get rid of the artifacts it produces sometimes. Simple smoothing produces less flowing lines but is accurate by hitting the points and it also doesn't swing below or above the given data point.
         *
         * All smoothing functions within Chartist are factory functions that accept an options parameter. The simple interpolation function accepts one configuration parameter `divisor`, between 1 and ∞, which controls the smoothing characteristics.
         *
         * @example
         * var chart = new Chartist.Line('.ct-chart', {
         *   labels: [1, 2, 3, 4, 5],
         *   series: [[1, 2, 8, 1, 7]]
         * }, {
         *   lineSmooth: Chartist.Interpolation.simple({
         *     divisor: 2,
         *     fillHoles: false
         *   })
         * });
         *
         *
         * @memberof Chartist.Interpolation
         * @param {Object} options The options of the simple interpolation factory function.
         * @return {Function}
         */


        Chartist.Interpolation.simple = function (options) {
          var defaultOptions = {
            divisor: 2,
            fillHoles: false
          };
          options = Chartist.extend({}, defaultOptions, options);
          var d = 1 / Math.max(1, options.divisor);
          return function simple(pathCoordinates, valueData) {
            var path = new Chartist.Svg.Path();
            var prevX, prevY, prevData;

            for (var i = 0; i < pathCoordinates.length; i += 2) {
              var currX = pathCoordinates[i];
              var currY = pathCoordinates[i + 1];
              var length = (currX - prevX) * d;
              var currData = valueData[i / 2];

              if (currData.value !== undefined) {
                if (prevData === undefined) {
                  path.move(currX, currY, false, currData);
                } else {
                  path.curve(prevX + length, prevY, currX - length, currY, currX, currY, false, currData);
                }

                prevX = currX;
                prevY = currY;
                prevData = currData;
              } else if (!options.fillHoles) {
                prevX = currX = prevData = undefined;
              }
            }

            return path;
          };
        };
        /**
         * Cardinal / Catmull-Rome spline interpolation is the default smoothing function in Chartist. It produces nice results where the splines will always meet the points. It produces some artifacts though when data values are increased or decreased rapidly. The line may not follow a very accurate path and if the line should be accurate this smoothing function does not produce the best results.
         *
         * Cardinal splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
         *
         * All smoothing functions within Chartist are factory functions that accept an options parameter. The cardinal interpolation function accepts one configuration parameter `tension`, between 0 and 1, which controls the smoothing intensity.
         *
         * @example
         * var chart = new Chartist.Line('.ct-chart', {
         *   labels: [1, 2, 3, 4, 5],
         *   series: [[1, 2, 8, 1, 7]]
         * }, {
         *   lineSmooth: Chartist.Interpolation.cardinal({
         *     tension: 1,
         *     fillHoles: false
         *   })
         * });
         *
         * @memberof Chartist.Interpolation
         * @param {Object} options The options of the cardinal factory function.
         * @return {Function}
         */


        Chartist.Interpolation.cardinal = function (options) {
          var defaultOptions = {
            tension: 1,
            fillHoles: false
          };
          options = Chartist.extend({}, defaultOptions, options);
          var t = Math.min(1, Math.max(0, options.tension)),
              c = 1 - t;
          return function cardinal(pathCoordinates, valueData) {
            // First we try to split the coordinates into segments
            // This is necessary to treat "holes" in line charts
            var segments = Chartist.splitIntoSegments(pathCoordinates, valueData, {
              fillHoles: options.fillHoles
            });

            if (!segments.length) {
              // If there were no segments return 'Chartist.Interpolation.none'
              return Chartist.Interpolation.none()([]);
            } else if (segments.length > 1) {
              // If the split resulted in more that one segment we need to interpolate each segment individually and join them
              // afterwards together into a single path.
              var paths = []; // For each segment we will recurse the cardinal function

              segments.forEach(function (segment) {
                paths.push(cardinal(segment.pathCoordinates, segment.valueData));
              }); // Join the segment path data into a single path and return

              return Chartist.Svg.Path.join(paths);
            } else {
              // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
              // segment
              pathCoordinates = segments[0].pathCoordinates;
              valueData = segments[0].valueData; // If less than two points we need to fallback to no smoothing

              if (pathCoordinates.length <= 4) {
                return Chartist.Interpolation.none()(pathCoordinates, valueData);
              }

              var path = new Chartist.Svg.Path().move(pathCoordinates[0], pathCoordinates[1], false, valueData[0]),
                  z;

              for (var i = 0, iLen = pathCoordinates.length; iLen - 2 * !z > i; i += 2) {
                var p = [{
                  x: +pathCoordinates[i - 2],
                  y: +pathCoordinates[i - 1]
                }, {
                  x: +pathCoordinates[i],
                  y: +pathCoordinates[i + 1]
                }, {
                  x: +pathCoordinates[i + 2],
                  y: +pathCoordinates[i + 3]
                }, {
                  x: +pathCoordinates[i + 4],
                  y: +pathCoordinates[i + 5]
                }];

                if (z) {
                  if (!i) {
                    p[0] = {
                      x: +pathCoordinates[iLen - 2],
                      y: +pathCoordinates[iLen - 1]
                    };
                  } else if (iLen - 4 === i) {
                    p[3] = {
                      x: +pathCoordinates[0],
                      y: +pathCoordinates[1]
                    };
                  } else if (iLen - 2 === i) {
                    p[2] = {
                      x: +pathCoordinates[0],
                      y: +pathCoordinates[1]
                    };
                    p[3] = {
                      x: +pathCoordinates[2],
                      y: +pathCoordinates[3]
                    };
                  }
                } else {
                  if (iLen - 4 === i) {
                    p[3] = p[2];
                  } else if (!i) {
                    p[0] = {
                      x: +pathCoordinates[i],
                      y: +pathCoordinates[i + 1]
                    };
                  }
                }

                path.curve(t * (-p[0].x + 6 * p[1].x + p[2].x) / 6 + c * p[2].x, t * (-p[0].y + 6 * p[1].y + p[2].y) / 6 + c * p[2].y, t * (p[1].x + 6 * p[2].x - p[3].x) / 6 + c * p[2].x, t * (p[1].y + 6 * p[2].y - p[3].y) / 6 + c * p[2].y, p[2].x, p[2].y, false, valueData[(i + 2) / 2]);
              }

              return path;
            }
          };
        };
        /**
         * Monotone Cubic spline interpolation produces a smooth curve which preserves monotonicity. Unlike cardinal splines, the curve will not extend beyond the range of y-values of the original data points.
         *
         * Monotone Cubic splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
         *
         * The x-values of subsequent points must be increasing to fit a Monotone Cubic spline. If this condition is not met for a pair of adjacent points, then there will be a break in the curve between those data points.
         *
         * All smoothing functions within Chartist are factory functions that accept an options parameter.
         *
         * @example
         * var chart = new Chartist.Line('.ct-chart', {
         *   labels: [1, 2, 3, 4, 5],
         *   series: [[1, 2, 8, 1, 7]]
         * }, {
         *   lineSmooth: Chartist.Interpolation.monotoneCubic({
         *     fillHoles: false
         *   })
         * });
         *
         * @memberof Chartist.Interpolation
         * @param {Object} options The options of the monotoneCubic factory function.
         * @return {Function}
         */


        Chartist.Interpolation.monotoneCubic = function (options) {
          var defaultOptions = {
            fillHoles: false
          };
          options = Chartist.extend({}, defaultOptions, options);
          return function monotoneCubic(pathCoordinates, valueData) {
            // First we try to split the coordinates into segments
            // This is necessary to treat "holes" in line charts
            var segments = Chartist.splitIntoSegments(pathCoordinates, valueData, {
              fillHoles: options.fillHoles,
              increasingX: true
            });

            if (!segments.length) {
              // If there were no segments return 'Chartist.Interpolation.none'
              return Chartist.Interpolation.none()([]);
            } else if (segments.length > 1) {
              // If the split resulted in more that one segment we need to interpolate each segment individually and join them
              // afterwards together into a single path.
              var paths = []; // For each segment we will recurse the monotoneCubic fn function

              segments.forEach(function (segment) {
                paths.push(monotoneCubic(segment.pathCoordinates, segment.valueData));
              }); // Join the segment path data into a single path and return

              return Chartist.Svg.Path.join(paths);
            } else {
              // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
              // segment
              pathCoordinates = segments[0].pathCoordinates;
              valueData = segments[0].valueData; // If less than three points we need to fallback to no smoothing

              if (pathCoordinates.length <= 4) {
                return Chartist.Interpolation.none()(pathCoordinates, valueData);
              }

              var xs = [],
                  ys = [],
                  i,
                  n = pathCoordinates.length / 2,
                  ms = [],
                  ds = [],
                  dys = [],
                  dxs = [],
                  path; // Populate x and y coordinates into separate arrays, for readability

              for (i = 0; i < n; i++) {
                xs[i] = pathCoordinates[i * 2];
                ys[i] = pathCoordinates[i * 2 + 1];
              } // Calculate deltas and derivative


              for (i = 0; i < n - 1; i++) {
                dys[i] = ys[i + 1] - ys[i];
                dxs[i] = xs[i + 1] - xs[i];
                ds[i] = dys[i] / dxs[i];
              } // Determine desired slope (m) at each point using Fritsch-Carlson method
              // See: http://math.stackexchange.com/questions/45218/implementation-of-monotone-cubic-interpolation


              ms[0] = ds[0];
              ms[n - 1] = ds[n - 2];

              for (i = 1; i < n - 1; i++) {
                if (ds[i] === 0 || ds[i - 1] === 0 || ds[i - 1] > 0 !== ds[i] > 0) {
                  ms[i] = 0;
                } else {
                  ms[i] = 3 * (dxs[i - 1] + dxs[i]) / ((2 * dxs[i] + dxs[i - 1]) / ds[i - 1] + (dxs[i] + 2 * dxs[i - 1]) / ds[i]);

                  if (!isFinite(ms[i])) {
                    ms[i] = 0;
                  }
                }
              } // Now build a path from the slopes


              path = new Chartist.Svg.Path().move(xs[0], ys[0], false, valueData[0]);

              for (i = 0; i < n - 1; i++) {
                path.curve( // First control point
                xs[i] + dxs[i] / 3, ys[i] + ms[i] * dxs[i] / 3, // Second control point
                xs[i + 1] - dxs[i] / 3, ys[i + 1] - ms[i + 1] * dxs[i] / 3, // End point
                xs[i + 1], ys[i + 1], false, valueData[i + 1]);
              }

              return path;
            }
          };
        };
        /**
         * Step interpolation will cause the line chart to move in steps rather than diagonal or smoothed lines. This interpolation will create additional points that will also be drawn when the `showPoint` option is enabled.
         *
         * All smoothing functions within Chartist are factory functions that accept an options parameter. The step interpolation function accepts one configuration parameter `postpone`, that can be `true` or `false`. The default value is `true` and will cause the step to occur where the value actually changes. If a different behaviour is needed where the step is shifted to the left and happens before the actual value, this option can be set to `false`.
         *
         * @example
         * var chart = new Chartist.Line('.ct-chart', {
         *   labels: [1, 2, 3, 4, 5],
         *   series: [[1, 2, 8, 1, 7]]
         * }, {
         *   lineSmooth: Chartist.Interpolation.step({
         *     postpone: true,
         *     fillHoles: false
         *   })
         * });
         *
         * @memberof Chartist.Interpolation
         * @param options
         * @returns {Function}
         */


        Chartist.Interpolation.step = function (options) {
          var defaultOptions = {
            postpone: true,
            fillHoles: false
          };
          options = Chartist.extend({}, defaultOptions, options);
          return function step(pathCoordinates, valueData) {
            var path = new Chartist.Svg.Path();
            var prevX, prevY, prevData;

            for (var i = 0; i < pathCoordinates.length; i += 2) {
              var currX = pathCoordinates[i];
              var currY = pathCoordinates[i + 1];
              var currData = valueData[i / 2]; // If the current point is also not a hole we can draw the step lines

              if (currData.value !== undefined) {
                if (prevData === undefined) {
                  path.move(currX, currY, false, currData);
                } else {
                  if (options.postpone) {
                    // If postponed we should draw the step line with the value of the previous value
                    path.line(currX, prevY, false, prevData);
                  } else {
                    // If not postponed we should draw the step line with the value of the current value
                    path.line(prevX, currY, false, currData);
                  } // Line to the actual point (this should only be a Y-Axis movement


                  path.line(currX, currY, false, currData);
                }

                prevX = currX;
                prevY = currY;
                prevData = currData;
              } else if (!options.fillHoles) {
                prevX = prevY = prevData = undefined;
              }
            }

            return path;
          };
        };
      })(this || global, Chartist);

      ;
      /**
      * A very basic event module that helps to generate and catch events.
      *
      * @module Chartist.Event
      */

      /* global Chartist */

      (function (globalRoot, Chartist) {
        'use strict';

        Chartist.EventEmitter = function () {
          var handlers = [];
          /**
           * Add an event handler for a specific event
           *
           * @memberof Chartist.Event
           * @param {String} event The event name
           * @param {Function} handler A event handler function
           */

          function addEventHandler(event, handler) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
          }
          /**
           * Remove an event handler of a specific event name or remove all event handlers for a specific event.
           *
           * @memberof Chartist.Event
           * @param {String} event The event name where a specific or all handlers should be removed
           * @param {Function} [handler] An optional event handler function. If specified only this specific handler will be removed and otherwise all handlers are removed.
           */


          function removeEventHandler(event, handler) {
            // Only do something if there are event handlers with this name existing
            if (handlers[event]) {
              // If handler is set we will look for a specific handler and only remove this
              if (handler) {
                handlers[event].splice(handlers[event].indexOf(handler), 1);

                if (handlers[event].length === 0) {
                  delete handlers[event];
                }
              } else {
                // If no handler is specified we remove all handlers for this event
                delete handlers[event];
              }
            }
          }
          /**
           * Use this function to emit an event. All handlers that are listening for this event will be triggered with the data parameter.
           *
           * @memberof Chartist.Event
           * @param {String} event The event name that should be triggered
           * @param {*} data Arbitrary data that will be passed to the event handler callback functions
           */


          function emit(event, data) {
            // Only do something if there are event handlers with this name existing
            if (handlers[event]) {
              handlers[event].forEach(function (handler) {
                handler(data);
              });
            } // Emit event to star event handlers


            if (handlers['*']) {
              handlers['*'].forEach(function (starHandler) {
                starHandler(event, data);
              });
            }
          }

          return {
            addEventHandler: addEventHandler,
            removeEventHandler: removeEventHandler,
            emit: emit
          };
        };
      })(this || global, Chartist);

      ;
      /**
      * This module provides some basic prototype inheritance utilities.
      *
      * @module Chartist.Class
      */

      /* global Chartist */

      (function (globalRoot, Chartist) {
        'use strict';

        function listToArray(list) {
          var arr = [];

          if (list.length) {
            for (var i = 0; i < list.length; i++) {
              arr.push(list[i]);
            }
          }

          return arr;
        }
        /**
         * Method to extend from current prototype.
         *
         * @memberof Chartist.Class
         * @param {Object} properties The object that serves as definition for the prototype that gets created for the new class. This object should always contain a constructor property that is the desired constructor for the newly created class.
         * @param {Object} [superProtoOverride] By default extens will use the current class prototype or Chartist.class. With this parameter you can specify any super prototype that will be used.
         * @return {Function} Constructor function of the new class
         *
         * @example
         * var Fruit = Class.extend({
           * color: undefined,
           *   sugar: undefined,
           *
           *   constructor: function(color, sugar) {
           *     this.color = color;
           *     this.sugar = sugar;
           *   },
           *
           *   eat: function() {
           *     this.sugar = 0;
           *     return this;
           *   }
           * });
         *
         * var Banana = Fruit.extend({
           *   length: undefined,
           *
           *   constructor: function(length, sugar) {
           *     Banana.super.constructor.call(this, 'Yellow', sugar);
           *     this.length = length;
           *   }
           * });
         *
         * var banana = new Banana(20, 40);
         * console.log('banana instanceof Fruit', banana instanceof Fruit);
         * console.log('Fruit is prototype of banana', Fruit.prototype.isPrototypeOf(banana));
         * console.log('bananas prototype is Fruit', Object.getPrototypeOf(banana) === Fruit.prototype);
         * console.log(banana.sugar);
         * console.log(banana.eat().sugar);
         * console.log(banana.color);
         */


        function extend(properties, superProtoOverride) {
          var superProto = superProtoOverride || this.prototype || Chartist.Class;
          var proto = Object.create(superProto);
          Chartist.Class.cloneDefinitions(proto, properties);

          var constr = function constr() {
            var fn = proto.constructor || function () {},
                instance; // If this is linked to the Chartist namespace the constructor was not called with new
            // To provide a fallback we will instantiate here and return the instance


            instance = this === Chartist ? Object.create(proto) : this;
            fn.apply(instance, Array.prototype.slice.call(arguments, 0)); // If this constructor was not called with new we need to return the instance
            // This will not harm when the constructor has been called with new as the returned value is ignored

            return instance;
          };

          constr.prototype = proto;
          constr["super"] = superProto;
          constr.extend = this.extend;
          return constr;
        } // Variable argument list clones args > 0 into args[0] and retruns modified args[0]


        function cloneDefinitions() {
          var args = listToArray(arguments);
          var target = args[0];
          args.splice(1, args.length - 1).forEach(function (source) {
            Object.getOwnPropertyNames(source).forEach(function (propName) {
              // If this property already exist in target we delete it first
              delete target[propName]; // Define the property with the descriptor from source

              Object.defineProperty(target, propName, Object.getOwnPropertyDescriptor(source, propName));
            });
          });
          return target;
        }

        Chartist.Class = {
          extend: extend,
          cloneDefinitions: cloneDefinitions
        };
      })(this || global, Chartist);

      ;
      /**
      * Base for all chart types. The methods in Chartist.Base are inherited to all chart types.
      *
      * @module Chartist.Base
      */

      /* global Chartist */

      (function (globalRoot, Chartist) {
        'use strict';

        var window = globalRoot.window; // TODO: Currently we need to re-draw the chart on window resize. This is usually very bad and will affect performance.
        // This is done because we can't work with relative coordinates when drawing the chart because SVG Path does not
        // work with relative positions yet. We need to check if we can do a viewBox hack to switch to percentage.
        // See http://mozilla.6506.n7.nabble.com/Specyfing-paths-with-percentages-unit-td247474.html
        // Update: can be done using the above method tested here: http://codepen.io/gionkunz/pen/KDvLj
        // The problem is with the label offsets that can't be converted into percentage and affecting the chart container

        /**
         * Updates the chart which currently does a full reconstruction of the SVG DOM
         *
         * @param {Object} [data] Optional data you'd like to set for the chart before it will update. If not specified the update method will use the data that is already configured with the chart.
         * @param {Object} [options] Optional options you'd like to add to the previous options for the chart before it will update. If not specified the update method will use the options that have been already configured with the chart.
         * @param {Boolean} [override] If set to true, the passed options will be used to extend the options that have been configured already. Otherwise the chart default options will be used as the base
         * @memberof Chartist.Base
         */

        function update(data, options, override) {
          if (data) {
            this.data = data || {};
            this.data.labels = this.data.labels || [];
            this.data.series = this.data.series || []; // Event for data transformation that allows to manipulate the data before it gets rendered in the charts

            this.eventEmitter.emit('data', {
              type: 'update',
              data: this.data
            });
          }

          if (options) {
            this.options = Chartist.extend({}, override ? this.options : this.defaultOptions, options); // If chartist was not initialized yet, we just set the options and leave the rest to the initialization
            // Otherwise we re-create the optionsProvider at this point

            if (!this.initializeTimeoutId) {
              this.optionsProvider.removeMediaQueryListeners();
              this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
            }
          } // Only re-created the chart if it has been initialized yet


          if (!this.initializeTimeoutId) {
            this.createChart(this.optionsProvider.getCurrentOptions());
          } // Return a reference to the chart object to chain up calls


          return this;
        }
        /**
         * This method can be called on the API object of each chart and will un-register all event listeners that were added to other components. This currently includes a window.resize listener as well as media query listeners if any responsive options have been provided. Use this function if you need to destroy and recreate Chartist charts dynamically.
         *
         * @memberof Chartist.Base
         */


        function detach() {
          // Only detach if initialization already occurred on this chart. If this chart still hasn't initialized (therefore
          // the initializationTimeoutId is still a valid timeout reference, we will clear the timeout
          if (!this.initializeTimeoutId) {
            window.removeEventListener('resize', this.resizeListener);
            this.optionsProvider.removeMediaQueryListeners();
          } else {
            window.clearTimeout(this.initializeTimeoutId);
          }

          return this;
        }
        /**
         * Use this function to register event handlers. The handler callbacks are synchronous and will run in the main thread rather than the event loop.
         *
         * @memberof Chartist.Base
         * @param {String} event Name of the event. Check the examples for supported events.
         * @param {Function} handler The handler function that will be called when an event with the given name was emitted. This function will receive a data argument which contains event data. See the example for more details.
         */


        function on(event, handler) {
          this.eventEmitter.addEventHandler(event, handler);
          return this;
        }
        /**
         * Use this function to un-register event handlers. If the handler function parameter is omitted all handlers for the given event will be un-registered.
         *
         * @memberof Chartist.Base
         * @param {String} event Name of the event for which a handler should be removed
         * @param {Function} [handler] The handler function that that was previously used to register a new event handler. This handler will be removed from the event handler list. If this parameter is omitted then all event handlers for the given event are removed from the list.
         */


        function off(event, handler) {
          this.eventEmitter.removeEventHandler(event, handler);
          return this;
        }

        function initialize() {
          // Add window resize listener that re-creates the chart
          window.addEventListener('resize', this.resizeListener); // Obtain current options based on matching media queries (if responsive options are given)
          // This will also register a listener that is re-creating the chart based on media changes

          this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter); // Register options change listener that will trigger a chart update

          this.eventEmitter.addEventHandler('optionsChanged', function () {
            this.update();
          }.bind(this)); // Before the first chart creation we need to register us with all plugins that are configured
          // Initialize all relevant plugins with our chart object and the plugin options specified in the config

          if (this.options.plugins) {
            this.options.plugins.forEach(function (plugin) {
              if (plugin instanceof Array) {
                plugin[0](this, plugin[1]);
              } else {
                plugin(this);
              }
            }.bind(this));
          } // Event for data transformation that allows to manipulate the data before it gets rendered in the charts


          this.eventEmitter.emit('data', {
            type: 'initial',
            data: this.data
          }); // Create the first chart

          this.createChart(this.optionsProvider.getCurrentOptions()); // As chart is initialized from the event loop now we can reset our timeout reference
          // This is important if the chart gets initialized on the same element twice

          this.initializeTimeoutId = undefined;
        }
        /**
         * Constructor of chart base class.
         *
         * @param query
         * @param data
         * @param defaultOptions
         * @param options
         * @param responsiveOptions
         * @constructor
         */


        function Base(query, data, defaultOptions, options, responsiveOptions) {
          this.container = Chartist.querySelector(query);
          this.data = data || {};
          this.data.labels = this.data.labels || [];
          this.data.series = this.data.series || [];
          this.defaultOptions = defaultOptions;
          this.options = options;
          this.responsiveOptions = responsiveOptions;
          this.eventEmitter = Chartist.EventEmitter();
          this.supportsForeignObject = Chartist.Svg.isSupported('Extensibility');
          this.supportsAnimations = Chartist.Svg.isSupported('AnimationEventsAttribute');

          this.resizeListener = function resizeListener() {
            this.update();
          }.bind(this);

          if (this.container) {
            // If chartist was already initialized in this container we are detaching all event listeners first
            if (this.container.__chartist__) {
              this.container.__chartist__.detach();
            }

            this.container.__chartist__ = this;
          } // Using event loop for first draw to make it possible to register event listeners in the same call stack where
          // the chart was created.


          this.initializeTimeoutId = setTimeout(initialize.bind(this), 0);
        } // Creating the chart base class


        Chartist.Base = Chartist.Class.extend({
          constructor: Base,
          optionsProvider: undefined,
          container: undefined,
          svg: undefined,
          eventEmitter: undefined,
          createChart: function createChart() {
            throw new Error('Base chart type can\'t be instantiated!');
          },
          update: update,
          detach: detach,
          on: on,
          off: off,
          version: Chartist.version,
          supportsForeignObject: false
        });
      })(this || global, Chartist);

      ;
      /**
      * Chartist SVG module for simple SVG DOM abstraction
      *
      * @module Chartist.Svg
      */

      /* global Chartist */

      (function (globalRoot, Chartist) {
        'use strict';

        var document = globalRoot.document;
        /**
         * Chartist.Svg creates a new SVG object wrapper with a starting element. You can use the wrapper to fluently create sub-elements and modify them.
         *
         * @memberof Chartist.Svg
         * @constructor
         * @param {String|Element} name The name of the SVG element to create or an SVG dom element which should be wrapped into Chartist.Svg
         * @param {Object} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
         * @param {String} className This class or class list will be added to the SVG element
         * @param {Object} parent The parent SVG wrapper object where this newly created wrapper and it's element will be attached to as child
         * @param {Boolean} insertFirst If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
         */

        function Svg(name, attributes, className, parent, insertFirst) {
          // If Svg is getting called with an SVG element we just return the wrapper
          if (name instanceof Element) {
            this._node = name;
          } else {
            this._node = document.createElementNS(Chartist.namespaces.svg, name); // If this is an SVG element created then custom namespace

            if (name === 'svg') {
              this.attr({
                'xmlns:ct': Chartist.namespaces.ct
              });
            }
          }

          if (attributes) {
            this.attr(attributes);
          }

          if (className) {
            this.addClass(className);
          }

          if (parent) {
            if (insertFirst && parent._node.firstChild) {
              parent._node.insertBefore(this._node, parent._node.firstChild);
            } else {
              parent._node.appendChild(this._node);
            }
          }
        }
        /**
         * Set attributes on the current SVG element of the wrapper you're currently working on.
         *
         * @memberof Chartist.Svg
         * @param {Object|String} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added. If this parameter is a String then the function is used as a getter and will return the attribute value.
         * @param {String} [ns] If specified, the attribute will be obtained using getAttributeNs. In order to write namepsaced attributes you can use the namespace:attribute notation within the attributes object.
         * @return {Object|String} The current wrapper object will be returned so it can be used for chaining or the attribute value if used as getter function.
         */


        function attr(attributes, ns) {
          if (typeof attributes === 'string') {
            if (ns) {
              return this._node.getAttributeNS(ns, attributes);
            } else {
              return this._node.getAttribute(attributes);
            }
          }

          Object.keys(attributes).forEach(function (key) {
            // If the attribute value is undefined we can skip this one
            if (attributes[key] === undefined) {
              return;
            }

            if (key.indexOf(':') !== -1) {
              var namespacedAttribute = key.split(':');

              this._node.setAttributeNS(Chartist.namespaces[namespacedAttribute[0]], key, attributes[key]);
            } else {
              this._node.setAttribute(key, attributes[key]);
            }
          }.bind(this));
          return this;
        }
        /**
         * Create a new SVG element whose wrapper object will be selected for further operations. This way you can also create nested groups easily.
         *
         * @memberof Chartist.Svg
         * @param {String} name The name of the SVG element that should be created as child element of the currently selected element wrapper
         * @param {Object} [attributes] An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
         * @param {String} [className] This class or class list will be added to the SVG element
         * @param {Boolean} [insertFirst] If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
         * @return {Chartist.Svg} Returns a Chartist.Svg wrapper object that can be used to modify the containing SVG data
         */


        function elem(name, attributes, className, insertFirst) {
          return new Chartist.Svg(name, attributes, className, this, insertFirst);
        }
        /**
         * Returns the parent Chartist.SVG wrapper object
         *
         * @memberof Chartist.Svg
         * @return {Chartist.Svg} Returns a Chartist.Svg wrapper around the parent node of the current node. If the parent node is not existing or it's not an SVG node then this function will return null.
         */


        function parent() {
          return this._node.parentNode instanceof SVGElement ? new Chartist.Svg(this._node.parentNode) : null;
        }
        /**
         * This method returns a Chartist.Svg wrapper around the root SVG element of the current tree.
         *
         * @memberof Chartist.Svg
         * @return {Chartist.Svg} The root SVG element wrapped in a Chartist.Svg element
         */


        function root() {
          var node = this._node;

          while (node.nodeName !== 'svg') {
            node = node.parentNode;
          }

          return new Chartist.Svg(node);
        }
        /**
         * Find the first child SVG element of the current element that matches a CSS selector. The returned object is a Chartist.Svg wrapper.
         *
         * @memberof Chartist.Svg
         * @param {String} selector A CSS selector that is used to query for child SVG elements
         * @return {Chartist.Svg} The SVG wrapper for the element found or null if no element was found
         */


        function querySelector(selector) {
          var foundNode = this._node.querySelector(selector);

          return foundNode ? new Chartist.Svg(foundNode) : null;
        }
        /**
         * Find the all child SVG elements of the current element that match a CSS selector. The returned object is a Chartist.Svg.List wrapper.
         *
         * @memberof Chartist.Svg
         * @param {String} selector A CSS selector that is used to query for child SVG elements
         * @return {Chartist.Svg.List} The SVG wrapper list for the element found or null if no element was found
         */


        function querySelectorAll(selector) {
          var foundNodes = this._node.querySelectorAll(selector);

          return foundNodes.length ? new Chartist.Svg.List(foundNodes) : null;
        }
        /**
         * Returns the underlying SVG node for the current element.
         *
         * @memberof Chartist.Svg
         * @returns {Node}
         */


        function getNode() {
          return this._node;
        }
        /**
         * This method creates a foreignObject (see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) that allows to embed HTML content into a SVG graphic. With the help of foreignObjects you can enable the usage of regular HTML elements inside of SVG where they are subject for SVG positioning and transformation but the Browser will use the HTML rendering capabilities for the containing DOM.
         *
         * @memberof Chartist.Svg
         * @param {Node|String} content The DOM Node, or HTML string that will be converted to a DOM Node, that is then placed into and wrapped by the foreignObject
         * @param {String} [attributes] An object with properties that will be added as attributes to the foreignObject element that is created. Attributes with undefined values will not be added.
         * @param {String} [className] This class or class list will be added to the SVG element
         * @param {Boolean} [insertFirst] Specifies if the foreignObject should be inserted as first child
         * @return {Chartist.Svg} New wrapper object that wraps the foreignObject element
         */


        function foreignObject(content, attributes, className, insertFirst) {
          // If content is string then we convert it to DOM
          // TODO: Handle case where content is not a string nor a DOM Node
          if (typeof content === 'string') {
            var container = document.createElement('div');
            container.innerHTML = content;
            content = container.firstChild;
          } // Adding namespace to content element


          content.setAttribute('xmlns', Chartist.namespaces.xmlns); // Creating the foreignObject without required extension attribute (as described here
          // http://www.w3.org/TR/SVG/extend.html#ForeignObjectElement)

          var fnObj = this.elem('foreignObject', attributes, className, insertFirst); // Add content to foreignObjectElement

          fnObj._node.appendChild(content);

          return fnObj;
        }
        /**
         * This method adds a new text element to the current Chartist.Svg wrapper.
         *
         * @memberof Chartist.Svg
         * @param {String} t The text that should be added to the text element that is created
         * @return {Chartist.Svg} The same wrapper object that was used to add the newly created element
         */


        function text(t) {
          this._node.appendChild(document.createTextNode(t));

          return this;
        }
        /**
         * This method will clear all child nodes of the current wrapper object.
         *
         * @memberof Chartist.Svg
         * @return {Chartist.Svg} The same wrapper object that got emptied
         */


        function empty() {
          while (this._node.firstChild) {
            this._node.removeChild(this._node.firstChild);
          }

          return this;
        }
        /**
         * This method will cause the current wrapper to remove itself from its parent wrapper. Use this method if you'd like to get rid of an element in a given DOM structure.
         *
         * @memberof Chartist.Svg
         * @return {Chartist.Svg} The parent wrapper object of the element that got removed
         */


        function remove() {
          this._node.parentNode.removeChild(this._node);

          return this.parent();
        }
        /**
         * This method will replace the element with a new element that can be created outside of the current DOM.
         *
         * @memberof Chartist.Svg
         * @param {Chartist.Svg} newElement The new Chartist.Svg object that will be used to replace the current wrapper object
         * @return {Chartist.Svg} The wrapper of the new element
         */


        function replace(newElement) {
          this._node.parentNode.replaceChild(newElement._node, this._node);

          return newElement;
        }
        /**
         * This method will append an element to the current element as a child.
         *
         * @memberof Chartist.Svg
         * @param {Chartist.Svg} element The Chartist.Svg element that should be added as a child
         * @param {Boolean} [insertFirst] Specifies if the element should be inserted as first child
         * @return {Chartist.Svg} The wrapper of the appended object
         */


        function append(element, insertFirst) {
          if (insertFirst && this._node.firstChild) {
            this._node.insertBefore(element._node, this._node.firstChild);
          } else {
            this._node.appendChild(element._node);
          }

          return this;
        }
        /**
         * Returns an array of class names that are attached to the current wrapper element. This method can not be chained further.
         *
         * @memberof Chartist.Svg
         * @return {Array} A list of classes or an empty array if there are no classes on the current element
         */


        function classes() {
          return this._node.getAttribute('class') ? this._node.getAttribute('class').trim().split(/\s+/) : [];
        }
        /**
         * Adds one or a space separated list of classes to the current element and ensures the classes are only existing once.
         *
         * @memberof Chartist.Svg
         * @param {String} names A white space separated list of class names
         * @return {Chartist.Svg} The wrapper of the current element
         */


        function addClass(names) {
          this._node.setAttribute('class', this.classes(this._node).concat(names.trim().split(/\s+/)).filter(function (elem, pos, self) {
            return self.indexOf(elem) === pos;
          }).join(' '));

          return this;
        }
        /**
         * Removes one or a space separated list of classes from the current element.
         *
         * @memberof Chartist.Svg
         * @param {String} names A white space separated list of class names
         * @return {Chartist.Svg} The wrapper of the current element
         */


        function removeClass(names) {
          var removedClasses = names.trim().split(/\s+/);

          this._node.setAttribute('class', this.classes(this._node).filter(function (name) {
            return removedClasses.indexOf(name) === -1;
          }).join(' '));

          return this;
        }
        /**
         * Removes all classes from the current element.
         *
         * @memberof Chartist.Svg
         * @return {Chartist.Svg} The wrapper of the current element
         */


        function removeAllClasses() {
          this._node.setAttribute('class', '');

          return this;
        }
        /**
         * Get element height using `getBoundingClientRect`
         *
         * @memberof Chartist.Svg
         * @return {Number} The elements height in pixels
         */


        function height() {
          return this._node.getBoundingClientRect().height;
        }
        /**
         * Get element width using `getBoundingClientRect`
         *
         * @memberof Chartist.Core
         * @return {Number} The elements width in pixels
         */


        function width() {
          return this._node.getBoundingClientRect().width;
        }
        /**
         * The animate function lets you animate the current element with SMIL animations. You can add animations for multiple attributes at the same time by using an animation definition object. This object should contain SMIL animation attributes. Please refer to http://www.w3.org/TR/SVG/animate.html for a detailed specification about the available animation attributes. Additionally an easing property can be passed in the animation definition object. This can be a string with a name of an easing function in `Chartist.Svg.Easing` or an array with four numbers specifying a cubic Bézier curve.
         * **An animations object could look like this:**
         * ```javascript
         * element.animate({
         *   opacity: {
         *     dur: 1000,
         *     from: 0,
         *     to: 1
         *   },
         *   x1: {
         *     dur: '1000ms',
         *     from: 100,
         *     to: 200,
         *     easing: 'easeOutQuart'
         *   },
         *   y1: {
         *     dur: '2s',
         *     from: 0,
         *     to: 100
         *   }
         * });
         * ```
         * **Automatic unit conversion**
         * For the `dur` and the `begin` animate attribute you can also omit a unit by passing a number. The number will automatically be converted to milli seconds.
         * **Guided mode**
         * The default behavior of SMIL animations with offset using the `begin` attribute is that the attribute will keep it's original value until the animation starts. Mostly this behavior is not desired as you'd like to have your element attributes already initialized with the animation `from` value even before the animation starts. Also if you don't specify `fill="freeze"` on an animate element or if you delete the animation after it's done (which is done in guided mode) the attribute will switch back to the initial value. This behavior is also not desired when performing simple one-time animations. For one-time animations you'd want to trigger animations immediately instead of relative to the document begin time. That's why in guided mode Chartist.Svg will also use the `begin` property to schedule a timeout and manually start the animation after the timeout. If you're using multiple SMIL definition objects for an attribute (in an array), guided mode will be disabled for this attribute, even if you explicitly enabled it.
         * If guided mode is enabled the following behavior is added:
         * - Before the animation starts (even when delayed with `begin`) the animated attribute will be set already to the `from` value of the animation
         * - `begin` is explicitly set to `indefinite` so it can be started manually without relying on document begin time (creation)
         * - The animate element will be forced to use `fill="freeze"`
         * - The animation will be triggered with `beginElement()` in a timeout where `begin` of the definition object is interpreted in milli seconds. If no `begin` was specified the timeout is triggered immediately.
         * - After the animation the element attribute value will be set to the `to` value of the animation
         * - The animate element is deleted from the DOM
         *
         * @memberof Chartist.Svg
         * @param {Object} animations An animations object where the property keys are the attributes you'd like to animate. The properties should be objects again that contain the SMIL animation attributes (usually begin, dur, from, and to). The property begin and dur is auto converted (see Automatic unit conversion). You can also schedule multiple animations for the same attribute by passing an Array of SMIL definition objects. Attributes that contain an array of SMIL definition objects will not be executed in guided mode.
         * @param {Boolean} guided Specify if guided mode should be activated for this animation (see Guided mode). If not otherwise specified, guided mode will be activated.
         * @param {Object} eventEmitter If specified, this event emitter will be notified when an animation starts or ends.
         * @return {Chartist.Svg} The current element where the animation was added
         */


        function animate(animations, guided, eventEmitter) {
          if (guided === undefined) {
            guided = true;
          }

          Object.keys(animations).forEach(function createAnimateForAttributes(attribute) {
            function createAnimate(animationDefinition, guided) {
              var attributeProperties = {},
                  animate,
                  timeout,
                  easing; // Check if an easing is specified in the definition object and delete it from the object as it will not
              // be part of the animate element attributes.

              if (animationDefinition.easing) {
                // If already an easing Bézier curve array we take it or we lookup a easing array in the Easing object
                easing = animationDefinition.easing instanceof Array ? animationDefinition.easing : Chartist.Svg.Easing[animationDefinition.easing];
                delete animationDefinition.easing;
              } // If numeric dur or begin was provided we assume milli seconds


              animationDefinition.begin = Chartist.ensureUnit(animationDefinition.begin, 'ms');
              animationDefinition.dur = Chartist.ensureUnit(animationDefinition.dur, 'ms');

              if (easing) {
                animationDefinition.calcMode = 'spline';
                animationDefinition.keySplines = easing.join(' ');
                animationDefinition.keyTimes = '0;1';
              } // Adding "fill: freeze" if we are in guided mode and set initial attribute values


              if (guided) {
                animationDefinition.fill = 'freeze'; // Animated property on our element should already be set to the animation from value in guided mode

                attributeProperties[attribute] = animationDefinition.from;
                this.attr(attributeProperties); // In guided mode we also set begin to indefinite so we can trigger the start manually and put the begin
                // which needs to be in ms aside

                timeout = Chartist.quantity(animationDefinition.begin || 0).value;
                animationDefinition.begin = 'indefinite';
              }

              animate = this.elem('animate', Chartist.extend({
                attributeName: attribute
              }, animationDefinition));

              if (guided) {
                // If guided we take the value that was put aside in timeout and trigger the animation manually with a timeout
                setTimeout(function () {
                  // If beginElement fails we set the animated attribute to the end position and remove the animate element
                  // This happens if the SMIL ElementTimeControl interface is not supported or any other problems occured in
                  // the browser. (Currently FF 34 does not support animate elements in foreignObjects)
                  try {
                    animate._node.beginElement();
                  } catch (err) {
                    // Set animated attribute to current animated value
                    attributeProperties[attribute] = animationDefinition.to;
                    this.attr(attributeProperties); // Remove the animate element as it's no longer required

                    animate.remove();
                  }
                }.bind(this), timeout);
              }

              if (eventEmitter) {
                animate._node.addEventListener('beginEvent', function handleBeginEvent() {
                  eventEmitter.emit('animationBegin', {
                    element: this,
                    animate: animate._node,
                    params: animationDefinition
                  });
                }.bind(this));
              }

              animate._node.addEventListener('endEvent', function handleEndEvent() {
                if (eventEmitter) {
                  eventEmitter.emit('animationEnd', {
                    element: this,
                    animate: animate._node,
                    params: animationDefinition
                  });
                }

                if (guided) {
                  // Set animated attribute to current animated value
                  attributeProperties[attribute] = animationDefinition.to;
                  this.attr(attributeProperties); // Remove the animate element as it's no longer required

                  animate.remove();
                }
              }.bind(this));
            } // If current attribute is an array of definition objects we create an animate for each and disable guided mode


            if (animations[attribute] instanceof Array) {
              animations[attribute].forEach(function (animationDefinition) {
                createAnimate.bind(this)(animationDefinition, false);
              }.bind(this));
            } else {
              createAnimate.bind(this)(animations[attribute], guided);
            }
          }.bind(this));
          return this;
        }

        Chartist.Svg = Chartist.Class.extend({
          constructor: Svg,
          attr: attr,
          elem: elem,
          parent: parent,
          root: root,
          querySelector: querySelector,
          querySelectorAll: querySelectorAll,
          getNode: getNode,
          foreignObject: foreignObject,
          text: text,
          empty: empty,
          remove: remove,
          replace: replace,
          append: append,
          classes: classes,
          addClass: addClass,
          removeClass: removeClass,
          removeAllClasses: removeAllClasses,
          height: height,
          width: width,
          animate: animate
        });
        /**
         * This method checks for support of a given SVG feature like Extensibility, SVG-animation or the like. Check http://www.w3.org/TR/SVG11/feature for a detailed list.
         *
         * @memberof Chartist.Svg
         * @param {String} feature The SVG 1.1 feature that should be checked for support.
         * @return {Boolean} True of false if the feature is supported or not
         */

        Chartist.Svg.isSupported = function (feature) {
          return document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#' + feature, '1.1');
        };
        /**
         * This Object contains some standard easing cubic bezier curves. Then can be used with their name in the `Chartist.Svg.animate`. You can also extend the list and use your own name in the `animate` function. Click the show code button to see the available bezier functions.
         *
         * @memberof Chartist.Svg
         */


        var easingCubicBeziers = {
          easeInSine: [0.47, 0, 0.745, 0.715],
          easeOutSine: [0.39, 0.575, 0.565, 1],
          easeInOutSine: [0.445, 0.05, 0.55, 0.95],
          easeInQuad: [0.55, 0.085, 0.68, 0.53],
          easeOutQuad: [0.25, 0.46, 0.45, 0.94],
          easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
          easeInCubic: [0.55, 0.055, 0.675, 0.19],
          easeOutCubic: [0.215, 0.61, 0.355, 1],
          easeInOutCubic: [0.645, 0.045, 0.355, 1],
          easeInQuart: [0.895, 0.03, 0.685, 0.22],
          easeOutQuart: [0.165, 0.84, 0.44, 1],
          easeInOutQuart: [0.77, 0, 0.175, 1],
          easeInQuint: [0.755, 0.05, 0.855, 0.06],
          easeOutQuint: [0.23, 1, 0.32, 1],
          easeInOutQuint: [0.86, 0, 0.07, 1],
          easeInExpo: [0.95, 0.05, 0.795, 0.035],
          easeOutExpo: [0.19, 1, 0.22, 1],
          easeInOutExpo: [1, 0, 0, 1],
          easeInCirc: [0.6, 0.04, 0.98, 0.335],
          easeOutCirc: [0.075, 0.82, 0.165, 1],
          easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
          easeInBack: [0.6, -0.28, 0.735, 0.045],
          easeOutBack: [0.175, 0.885, 0.32, 1.275],
          easeInOutBack: [0.68, -0.55, 0.265, 1.55]
        };
        Chartist.Svg.Easing = easingCubicBeziers;
        /**
         * This helper class is to wrap multiple `Chartist.Svg` elements into a list where you can call the `Chartist.Svg` functions on all elements in the list with one call. This is helpful when you'd like to perform calls with `Chartist.Svg` on multiple elements.
         * An instance of this class is also returned by `Chartist.Svg.querySelectorAll`.
         *
         * @memberof Chartist.Svg
         * @param {Array<Node>|NodeList} nodeList An Array of SVG DOM nodes or a SVG DOM NodeList (as returned by document.querySelectorAll)
         * @constructor
         */

        function SvgList(nodeList) {
          var list = this;
          this.svgElements = [];

          for (var i = 0; i < nodeList.length; i++) {
            this.svgElements.push(new Chartist.Svg(nodeList[i]));
          } // Add delegation methods for Chartist.Svg


          Object.keys(Chartist.Svg.prototype).filter(function (prototypeProperty) {
            return ['constructor', 'parent', 'querySelector', 'querySelectorAll', 'replace', 'append', 'classes', 'height', 'width'].indexOf(prototypeProperty) === -1;
          }).forEach(function (prototypeProperty) {
            list[prototypeProperty] = function () {
              var args = Array.prototype.slice.call(arguments, 0);
              list.svgElements.forEach(function (element) {
                Chartist.Svg.prototype[prototypeProperty].apply(element, args);
              });
              return list;
            };
          });
        }

        Chartist.Svg.List = Chartist.Class.extend({
          constructor: SvgList
        });
      })(this || global, Chartist);

      ;
      /**
      * Chartist SVG path module for SVG path description creation and modification.
      *
      * @module Chartist.Svg.Path
      */

      /* global Chartist */

      (function (globalRoot, Chartist) {
        'use strict';
        /**
         * Contains the descriptors of supported element types in a SVG path. Currently only move, line and curve are supported.
         *
         * @memberof Chartist.Svg.Path
         * @type {Object}
         */

        var elementDescriptions = {
          m: ['x', 'y'],
          l: ['x', 'y'],
          c: ['x1', 'y1', 'x2', 'y2', 'x', 'y'],
          a: ['rx', 'ry', 'xAr', 'lAf', 'sf', 'x', 'y']
        };
        /**
         * Default options for newly created SVG path objects.
         *
         * @memberof Chartist.Svg.Path
         * @type {Object}
         */

        var defaultOptions = {
          // The accuracy in digit count after the decimal point. This will be used to round numbers in the SVG path. If this option is set to false then no rounding will be performed.
          accuracy: 3
        };

        function element(command, params, pathElements, pos, relative, data) {
          var pathElement = Chartist.extend({
            command: relative ? command.toLowerCase() : command.toUpperCase()
          }, params, data ? {
            data: data
          } : {});
          pathElements.splice(pos, 0, pathElement);
        }

        function forEachParam(pathElements, cb) {
          pathElements.forEach(function (pathElement, pathElementIndex) {
            elementDescriptions[pathElement.command.toLowerCase()].forEach(function (paramName, paramIndex) {
              cb(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
            });
          });
        }
        /**
         * Used to construct a new path object.
         *
         * @memberof Chartist.Svg.Path
         * @param {Boolean} close If set to true then this path will be closed when stringified (with a Z at the end)
         * @param {Object} options Options object that overrides the default objects. See default options for more details.
         * @constructor
         */


        function SvgPath(close, options) {
          this.pathElements = [];
          this.pos = 0;
          this.close = close;
          this.options = Chartist.extend({}, defaultOptions, options);
        }
        /**
         * Gets or sets the current position (cursor) inside of the path. You can move around the cursor freely but limited to 0 or the count of existing elements. All modifications with element functions will insert new elements at the position of this cursor.
         *
         * @memberof Chartist.Svg.Path
         * @param {Number} [pos] If a number is passed then the cursor is set to this position in the path element array.
         * @return {Chartist.Svg.Path|Number} If the position parameter was passed then the return value will be the path object for easy call chaining. If no position parameter was passed then the current position is returned.
         */


        function position(pos) {
          if (pos !== undefined) {
            this.pos = Math.max(0, Math.min(this.pathElements.length, pos));
            return this;
          } else {
            return this.pos;
          }
        }
        /**
         * Removes elements from the path starting at the current position.
         *
         * @memberof Chartist.Svg.Path
         * @param {Number} count Number of path elements that should be removed from the current position.
         * @return {Chartist.Svg.Path} The current path object for easy call chaining.
         */


        function remove(count) {
          this.pathElements.splice(this.pos, count);
          return this;
        }
        /**
         * Use this function to add a new move SVG path element.
         *
         * @memberof Chartist.Svg.Path
         * @param {Number} x The x coordinate for the move element.
         * @param {Number} y The y coordinate for the move element.
         * @param {Boolean} [relative] If set to true the move element will be created with relative coordinates (lowercase letter)
         * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
         * @return {Chartist.Svg.Path} The current path object for easy call chaining.
         */


        function move(x, y, relative, data) {
          element('M', {
            x: +x,
            y: +y
          }, this.pathElements, this.pos++, relative, data);
          return this;
        }
        /**
         * Use this function to add a new line SVG path element.
         *
         * @memberof Chartist.Svg.Path
         * @param {Number} x The x coordinate for the line element.
         * @param {Number} y The y coordinate for the line element.
         * @param {Boolean} [relative] If set to true the line element will be created with relative coordinates (lowercase letter)
         * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
         * @return {Chartist.Svg.Path} The current path object for easy call chaining.
         */


        function line(x, y, relative, data) {
          element('L', {
            x: +x,
            y: +y
          }, this.pathElements, this.pos++, relative, data);
          return this;
        }
        /**
         * Use this function to add a new curve SVG path element.
         *
         * @memberof Chartist.Svg.Path
         * @param {Number} x1 The x coordinate for the first control point of the bezier curve.
         * @param {Number} y1 The y coordinate for the first control point of the bezier curve.
         * @param {Number} x2 The x coordinate for the second control point of the bezier curve.
         * @param {Number} y2 The y coordinate for the second control point of the bezier curve.
         * @param {Number} x The x coordinate for the target point of the curve element.
         * @param {Number} y The y coordinate for the target point of the curve element.
         * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
         * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
         * @return {Chartist.Svg.Path} The current path object for easy call chaining.
         */


        function curve(x1, y1, x2, y2, x, y, relative, data) {
          element('C', {
            x1: +x1,
            y1: +y1,
            x2: +x2,
            y2: +y2,
            x: +x,
            y: +y
          }, this.pathElements, this.pos++, relative, data);
          return this;
        }
        /**
         * Use this function to add a new non-bezier curve SVG path element.
         *
         * @memberof Chartist.Svg.Path
         * @param {Number} rx The radius to be used for the x-axis of the arc.
         * @param {Number} ry The radius to be used for the y-axis of the arc.
         * @param {Number} xAr Defines the orientation of the arc
         * @param {Number} lAf Large arc flag
         * @param {Number} sf Sweep flag
         * @param {Number} x The x coordinate for the target point of the curve element.
         * @param {Number} y The y coordinate for the target point of the curve element.
         * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
         * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
         * @return {Chartist.Svg.Path} The current path object for easy call chaining.
         */


        function arc(rx, ry, xAr, lAf, sf, x, y, relative, data) {
          element('A', {
            rx: +rx,
            ry: +ry,
            xAr: +xAr,
            lAf: +lAf,
            sf: +sf,
            x: +x,
            y: +y
          }, this.pathElements, this.pos++, relative, data);
          return this;
        }
        /**
         * Parses an SVG path seen in the d attribute of path elements, and inserts the parsed elements into the existing path object at the current cursor position. Any closing path indicators (Z at the end of the path) will be ignored by the parser as this is provided by the close option in the options of the path object.
         *
         * @memberof Chartist.Svg.Path
         * @param {String} path Any SVG path that contains move (m), line (l) or curve (c) components.
         * @return {Chartist.Svg.Path} The current path object for easy call chaining.
         */


        function parse(path) {
          // Parsing the SVG path string into an array of arrays [['M', '10', '10'], ['L', '100', '100']]
          var chunks = path.replace(/([A-Za-z])([0-9])/g, '$1 $2').replace(/([0-9])([A-Za-z])/g, '$1 $2').split(/[\s,]+/).reduce(function (result, element) {
            if (element.match(/[A-Za-z]/)) {
              result.push([]);
            }

            result[result.length - 1].push(element);
            return result;
          }, []); // If this is a closed path we remove the Z at the end because this is determined by the close option

          if (chunks[chunks.length - 1][0].toUpperCase() === 'Z') {
            chunks.pop();
          } // Using svgPathElementDescriptions to map raw path arrays into objects that contain the command and the parameters
          // For example {command: 'M', x: '10', y: '10'}


          var elements = chunks.map(function (chunk) {
            var command = chunk.shift(),
                description = elementDescriptions[command.toLowerCase()];
            return Chartist.extend({
              command: command
            }, description.reduce(function (result, paramName, index) {
              result[paramName] = +chunk[index];
              return result;
            }, {}));
          }); // Preparing a splice call with the elements array as var arg params and insert the parsed elements at the current position

          var spliceArgs = [this.pos, 0];
          Array.prototype.push.apply(spliceArgs, elements);
          Array.prototype.splice.apply(this.pathElements, spliceArgs); // Increase the internal position by the element count

          this.pos += elements.length;
          return this;
        }
        /**
         * This function renders to current SVG path object into a final SVG string that can be used in the d attribute of SVG path elements. It uses the accuracy option to round big decimals. If the close parameter was set in the constructor of this path object then a path closing Z will be appended to the output string.
         *
         * @memberof Chartist.Svg.Path
         * @return {String}
         */


        function stringify() {
          var accuracyMultiplier = Math.pow(10, this.options.accuracy);
          return this.pathElements.reduce(function (path, pathElement) {
            var params = elementDescriptions[pathElement.command.toLowerCase()].map(function (paramName) {
              return this.options.accuracy ? Math.round(pathElement[paramName] * accuracyMultiplier) / accuracyMultiplier : pathElement[paramName];
            }.bind(this));
            return path + pathElement.command + params.join(',');
          }.bind(this), '') + (this.close ? 'Z' : '');
        }
        /**
         * Scales all elements in the current SVG path object. There is an individual parameter for each coordinate. Scaling will also be done for control points of curves, affecting the given coordinate.
         *
         * @memberof Chartist.Svg.Path
         * @param {Number} x The number which will be used to scale the x, x1 and x2 of all path elements.
         * @param {Number} y The number which will be used to scale the y, y1 and y2 of all path elements.
         * @return {Chartist.Svg.Path} The current path object for easy call chaining.
         */


        function scale(x, y) {
          forEachParam(this.pathElements, function (pathElement, paramName) {
            pathElement[paramName] *= paramName[0] === 'x' ? x : y;
          });
          return this;
        }
        /**
         * Translates all elements in the current SVG path object. The translation is relative and there is an individual parameter for each coordinate. Translation will also be done for control points of curves, affecting the given coordinate.
         *
         * @memberof Chartist.Svg.Path
         * @param {Number} x The number which will be used to translate the x, x1 and x2 of all path elements.
         * @param {Number} y The number which will be used to translate the y, y1 and y2 of all path elements.
         * @return {Chartist.Svg.Path} The current path object for easy call chaining.
         */


        function translate(x, y) {
          forEachParam(this.pathElements, function (pathElement, paramName) {
            pathElement[paramName] += paramName[0] === 'x' ? x : y;
          });
          return this;
        }
        /**
         * This function will run over all existing path elements and then loop over their attributes. The callback function will be called for every path element attribute that exists in the current path.
         * The method signature of the callback function looks like this:
         * ```javascript
         * function(pathElement, paramName, pathElementIndex, paramIndex, pathElements)
         * ```
         * If something else than undefined is returned by the callback function, this value will be used to replace the old value. This allows you to build custom transformations of path objects that can't be achieved using the basic transformation functions scale and translate.
         *
         * @memberof Chartist.Svg.Path
         * @param {Function} transformFnc The callback function for the transformation. Check the signature in the function description.
         * @return {Chartist.Svg.Path} The current path object for easy call chaining.
         */


        function transform(transformFnc) {
          forEachParam(this.pathElements, function (pathElement, paramName, pathElementIndex, paramIndex, pathElements) {
            var transformed = transformFnc(pathElement, paramName, pathElementIndex, paramIndex, pathElements);

            if (transformed || transformed === 0) {
              pathElement[paramName] = transformed;
            }
          });
          return this;
        }
        /**
         * This function clones a whole path object with all its properties. This is a deep clone and path element objects will also be cloned.
         *
         * @memberof Chartist.Svg.Path
         * @param {Boolean} [close] Optional option to set the new cloned path to closed. If not specified or false, the original path close option will be used.
         * @return {Chartist.Svg.Path}
         */


        function clone(close) {
          var c = new Chartist.Svg.Path(close || this.close);
          c.pos = this.pos;
          c.pathElements = this.pathElements.slice().map(function cloneElements(pathElement) {
            return Chartist.extend({}, pathElement);
          });
          c.options = Chartist.extend({}, this.options);
          return c;
        }
        /**
         * Split a Svg.Path object by a specific command in the path chain. The path chain will be split and an array of newly created paths objects will be returned. This is useful if you'd like to split an SVG path by it's move commands, for example, in order to isolate chunks of drawings.
         *
         * @memberof Chartist.Svg.Path
         * @param {String} command The command you'd like to use to split the path
         * @return {Array<Chartist.Svg.Path>}
         */


        function splitByCommand(command) {
          var split = [new Chartist.Svg.Path()];
          this.pathElements.forEach(function (pathElement) {
            if (pathElement.command === command.toUpperCase() && split[split.length - 1].pathElements.length !== 0) {
              split.push(new Chartist.Svg.Path());
            }

            split[split.length - 1].pathElements.push(pathElement);
          });
          return split;
        }
        /**
         * This static function on `Chartist.Svg.Path` is joining multiple paths together into one paths.
         *
         * @memberof Chartist.Svg.Path
         * @param {Array<Chartist.Svg.Path>} paths A list of paths to be joined together. The order is important.
         * @param {boolean} close If the newly created path should be a closed path
         * @param {Object} options Path options for the newly created path.
         * @return {Chartist.Svg.Path}
         */


        function join(paths, close, options) {
          var joinedPath = new Chartist.Svg.Path(close, options);

          for (var i = 0; i < paths.length; i++) {
            var path = paths[i];

            for (var j = 0; j < path.pathElements.length; j++) {
              joinedPath.pathElements.push(path.pathElements[j]);
            }
          }

          return joinedPath;
        }

        Chartist.Svg.Path = Chartist.Class.extend({
          constructor: SvgPath,
          position: position,
          remove: remove,
          move: move,
          line: line,
          curve: curve,
          arc: arc,
          scale: scale,
          translate: translate,
          transform: transform,
          parse: parse,
          stringify: stringify,
          clone: clone,
          splitByCommand: splitByCommand
        });
        Chartist.Svg.Path.elementDescriptions = elementDescriptions;
        Chartist.Svg.Path.join = join;
      })(this || global, Chartist);

      ;
      /* global Chartist */

      (function (globalRoot, Chartist) {
        'use strict';

        var window = globalRoot.window;
        var document = globalRoot.document;
        var axisUnits = {
          x: {
            pos: 'x',
            len: 'width',
            dir: 'horizontal',
            rectStart: 'x1',
            rectEnd: 'x2',
            rectOffset: 'y2'
          },
          y: {
            pos: 'y',
            len: 'height',
            dir: 'vertical',
            rectStart: 'y2',
            rectEnd: 'y1',
            rectOffset: 'x1'
          }
        };

        function Axis(units, chartRect, ticks, options) {
          this.units = units;
          this.counterUnits = units === axisUnits.x ? axisUnits.y : axisUnits.x;
          this.chartRect = chartRect;
          this.axisLength = chartRect[units.rectEnd] - chartRect[units.rectStart];
          this.gridOffset = chartRect[units.rectOffset];
          this.ticks = ticks;
          this.options = options;
        }

        function createGridAndLabels(gridGroup, labelGroup, useForeignObject, chartOptions, eventEmitter) {
          var axisOptions = chartOptions['axis' + this.units.pos.toUpperCase()];
          var projectedValues = this.ticks.map(this.projectValue.bind(this));
          var labelValues = this.ticks.map(axisOptions.labelInterpolationFnc);
          projectedValues.forEach(function (projectedValue, index) {
            var labelOffset = {
              x: 0,
              y: 0
            }; // TODO: Find better solution for solving this problem
            // Calculate how much space we have available for the label

            var labelLength;

            if (projectedValues[index + 1]) {
              // If we still have one label ahead, we can calculate the distance to the next tick / label
              labelLength = projectedValues[index + 1] - projectedValue;
            } else {
              // If we don't have a label ahead and we have only two labels in total, we just take the remaining distance to
              // on the whole axis length. We limit that to a minimum of 30 pixel, so that labels close to the border will
              // still be visible inside of the chart padding.
              labelLength = Math.max(this.axisLength - projectedValue, 30);
            } // Skip grid lines and labels where interpolated label values are falsey (execpt for 0)


            if (Chartist.isFalseyButZero(labelValues[index]) && labelValues[index] !== '') {
              return;
            } // Transform to global coordinates using the chartRect
            // We also need to set the label offset for the createLabel function


            if (this.units.pos === 'x') {
              projectedValue = this.chartRect.x1 + projectedValue;
              labelOffset.x = chartOptions.axisX.labelOffset.x; // If the labels should be positioned in start position (top side for vertical axis) we need to set a
              // different offset as for positioned with end (bottom)

              if (chartOptions.axisX.position === 'start') {
                labelOffset.y = this.chartRect.padding.top + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
              } else {
                labelOffset.y = this.chartRect.y1 + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
              }
            } else {
              projectedValue = this.chartRect.y1 - projectedValue;
              labelOffset.y = chartOptions.axisY.labelOffset.y - (useForeignObject ? labelLength : 0); // If the labels should be positioned in start position (left side for horizontal axis) we need to set a
              // different offset as for positioned with end (right side)

              if (chartOptions.axisY.position === 'start') {
                labelOffset.x = useForeignObject ? this.chartRect.padding.left + chartOptions.axisY.labelOffset.x : this.chartRect.x1 - 10;
              } else {
                labelOffset.x = this.chartRect.x2 + chartOptions.axisY.labelOffset.x + 10;
              }
            }

            if (axisOptions.showGrid) {
              Chartist.createGrid(projectedValue, index, this, this.gridOffset, this.chartRect[this.counterUnits.len](), gridGroup, [chartOptions.classNames.grid, chartOptions.classNames[this.units.dir]], eventEmitter);
            }

            if (axisOptions.showLabel) {
              Chartist.createLabel(projectedValue, labelLength, index, labelValues, this, axisOptions.offset, labelOffset, labelGroup, [chartOptions.classNames.label, chartOptions.classNames[this.units.dir], axisOptions.position === 'start' ? chartOptions.classNames[axisOptions.position] : chartOptions.classNames['end']], useForeignObject, eventEmitter);
            }
          }.bind(this));
        }

        Chartist.Axis = Chartist.Class.extend({
          constructor: Axis,
          createGridAndLabels: createGridAndLabels,
          projectValue: function projectValue(value, index, data) {
            throw new Error('Base axis can\'t be instantiated!');
          }
        });
        Chartist.Axis.units = axisUnits;
      })(this || global, Chartist);

      ;
      /**
      * The auto scale axis uses standard linear scale projection of values along an axis. It uses order of magnitude to find a scale automatically and evaluates the available space in order to find the perfect amount of ticks for your chart.
      * **Options**
      * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
      * ```javascript
      * var options = {
      *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
      *   high: 100,
      *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
      *   low: 0,
      *   // This option will be used when finding the right scale division settings. The amount of ticks on the scale will be determined so that as many ticks as possible will be displayed, while not violating this minimum required space (in pixel).
      *   scaleMinSpace: 20,
      *   // Can be set to true or false. If set to true, the scale will be generated with whole numbers only.
      *   onlyInteger: true,
      *   // The reference value can be used to make sure that this value will always be on the chart. This is especially useful on bipolar charts where the bipolar center always needs to be part of the chart.
      *   referenceValue: 5
      * };
      * ```
      *
      * @module Chartist.AutoScaleAxis
      */

      /* global Chartist */

      (function (globalRoot, Chartist) {
        'use strict';

        var window = globalRoot.window;
        var document = globalRoot.document;

        function AutoScaleAxis(axisUnit, data, chartRect, options) {
          // Usually we calculate highLow based on the data but this can be overriden by a highLow object in the options
          var highLow = options.highLow || Chartist.getHighLow(data, options, axisUnit.pos);
          this.bounds = Chartist.getBounds(chartRect[axisUnit.rectEnd] - chartRect[axisUnit.rectStart], highLow, options.scaleMinSpace || 20, options.onlyInteger);
          this.range = {
            min: this.bounds.min,
            max: this.bounds.max
          };
          Chartist.AutoScaleAxis["super"].constructor.call(this, axisUnit, chartRect, this.bounds.values, options);
        }

        function projectValue(value) {
          return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.bounds.min) / this.bounds.range;
        }

        Chartist.AutoScaleAxis = Chartist.Axis.extend({
          constructor: AutoScaleAxis,
          projectValue: projectValue
        });
      })(this || global, Chartist);

      ;
      /**
      * The fixed scale axis uses standard linear projection of values along an axis. It makes use of a divisor option to divide the range provided from the minimum and maximum value or the options high and low that will override the computed minimum and maximum.
      * **Options**
      * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
      * ```javascript
      * var options = {
      *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
      *   high: 100,
      *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
      *   low: 0,
      *   // If specified then the value range determined from minimum to maximum (or low and high) will be divided by this number and ticks will be generated at those division points. The default divisor is 1.
      *   divisor: 4,
      *   // If ticks is explicitly set, then the axis will not compute the ticks with the divisor, but directly use the data in ticks to determine at what points on the axis a tick need to be generated.
      *   ticks: [1, 10, 20, 30]
      * };
      * ```
      *
      * @module Chartist.FixedScaleAxis
      */

      /* global Chartist */

      (function (globalRoot, Chartist) {
        'use strict';

        var window = globalRoot.window;
        var document = globalRoot.document;

        function FixedScaleAxis(axisUnit, data, chartRect, options) {
          var highLow = options.highLow || Chartist.getHighLow(data, options, axisUnit.pos);
          this.divisor = options.divisor || 1;
          this.ticks = options.ticks || Chartist.times(this.divisor).map(function (value, index) {
            return highLow.low + (highLow.high - highLow.low) / this.divisor * index;
          }.bind(this));
          this.ticks.sort(function (a, b) {
            return a - b;
          });
          this.range = {
            min: highLow.low,
            max: highLow.high
          };
          Chartist.FixedScaleAxis["super"].constructor.call(this, axisUnit, chartRect, this.ticks, options);
          this.stepLength = this.axisLength / this.divisor;
        }

        function projectValue(value) {
          return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.range.min) / (this.range.max - this.range.min);
        }

        Chartist.FixedScaleAxis = Chartist.Axis.extend({
          constructor: FixedScaleAxis,
          projectValue: projectValue
        });
      })(this || global, Chartist);

      ;
      /**
      * The step axis for step based charts like bar chart or step based line charts. It uses a fixed amount of ticks that will be equally distributed across the whole axis length. The projection is done using the index of the data value rather than the value itself and therefore it's only useful for distribution purpose.
      * **Options**
      * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
      * ```javascript
      * var options = {
      *   // Ticks to be used to distribute across the axis length. As this axis type relies on the index of the value rather than the value, arbitrary data that can be converted to a string can be used as ticks.
      *   ticks: ['One', 'Two', 'Three'],
      *   // If set to true the full width will be used to distribute the values where the last value will be at the maximum of the axis length. If false the spaces between the ticks will be evenly distributed instead.
      *   stretch: true
      * };
      * ```
      *
      * @module Chartist.StepAxis
      */

      /* global Chartist */

      (function (globalRoot, Chartist) {
        'use strict';

        var window = globalRoot.window;
        var document = globalRoot.document;

        function StepAxis(axisUnit, data, chartRect, options) {
          Chartist.StepAxis["super"].constructor.call(this, axisUnit, chartRect, options.ticks, options);
          var calc = Math.max(1, options.ticks.length - (options.stretch ? 1 : 0));
          this.stepLength = this.axisLength / calc;
        }

        function projectValue(value, index) {
          return this.stepLength * index;
        }

        Chartist.StepAxis = Chartist.Axis.extend({
          constructor: StepAxis,
          projectValue: projectValue
        });
      })(this || global, Chartist);

      ;
      /**
      * The Chartist line chart can be used to draw Line or Scatter charts. If used in the browser you can access the global `Chartist` namespace where you find the `Line` function as a main entry point.
      *
      * For examples on how to use the line chart please check the examples of the `Chartist.Line` method.
      *
      * @module Chartist.Line
      */

      /* global Chartist */

      (function (globalRoot, Chartist) {
        'use strict';

        var window = globalRoot.window;
        var document = globalRoot.document;
        /**
         * Default options in line charts. Expand the code view to see a detailed list of options with comments.
         *
         * @memberof Chartist.Line
         */

        var defaultOptions = {
          // Options for X-Axis
          axisX: {
            // The offset of the labels to the chart area
            offset: 30,
            // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
            position: 'end',
            // Allows you to correct label positioning on this axis by positive or negative x and y offset.
            labelOffset: {
              x: 0,
              y: 0
            },
            // If labels should be shown or not
            showLabel: true,
            // If the axis grid should be drawn or not
            showGrid: true,
            // Interpolation function that allows you to intercept the value from the axis label
            labelInterpolationFnc: Chartist.noop,
            // Set the axis type to be used to project values on this axis. If not defined, Chartist.StepAxis will be used for the X-Axis, where the ticks option will be set to the labels in the data and the stretch option will be set to the global fullWidth option. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
            type: undefined
          },
          // Options for Y-Axis
          axisY: {
            // The offset of the labels to the chart area
            offset: 40,
            // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
            position: 'start',
            // Allows you to correct label positioning on this axis by positive or negative x and y offset.
            labelOffset: {
              x: 0,
              y: 0
            },
            // If labels should be shown or not
            showLabel: true,
            // If the axis grid should be drawn or not
            showGrid: true,
            // Interpolation function that allows you to intercept the value from the axis label
            labelInterpolationFnc: Chartist.noop,
            // Set the axis type to be used to project values on this axis. If not defined, Chartist.AutoScaleAxis will be used for the Y-Axis, where the high and low options will be set to the global high and low options. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
            type: undefined,
            // This value specifies the minimum height in pixel of the scale steps
            scaleMinSpace: 20,
            // Use only integer values (whole numbers) for the scale steps
            onlyInteger: false
          },
          // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
          width: undefined,
          // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
          height: undefined,
          // If the line should be drawn or not
          showLine: true,
          // If dots should be drawn or not
          showPoint: true,
          // If the line chart should draw an area
          showArea: false,
          // The base for the area chart that will be used to close the area shape (is normally 0)
          areaBase: 0,
          // Specify if the lines should be smoothed. This value can be true or false where true will result in smoothing using the default smoothing interpolation function Chartist.Interpolation.cardinal and false results in Chartist.Interpolation.none. You can also choose other smoothing / interpolation functions available in the Chartist.Interpolation module, or write your own interpolation function. Check the examples for a brief description.
          lineSmooth: true,
          // If the line chart should add a background fill to the .ct-grids group.
          showGridBackground: false,
          // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
          low: undefined,
          // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
          high: undefined,
          // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
          chartPadding: {
            top: 15,
            right: 15,
            bottom: 5,
            left: 10
          },
          // When set to true, the last grid line on the x-axis is not drawn and the chart elements will expand to the full available width of the chart. For the last label to be drawn correctly you might need to add chart padding or offset the last label with a draw event handler.
          fullWidth: false,
          // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
          reverseData: false,
          // Override the class names that get used to generate the SVG structure of the chart
          classNames: {
            chart: 'ct-chart-line',
            label: 'ct-label',
            labelGroup: 'ct-labels',
            series: 'ct-series',
            line: 'ct-line',
            point: 'ct-point',
            area: 'ct-area',
            grid: 'ct-grid',
            gridGroup: 'ct-grids',
            gridBackground: 'ct-grid-background',
            vertical: 'ct-vertical',
            horizontal: 'ct-horizontal',
            start: 'ct-start',
            end: 'ct-end'
          }
        };
        /**
         * Creates a new chart
         *
         */

        function createChart(options) {
          var data = Chartist.normalizeData(this.data, options.reverseData, true); // Create new svg object

          this.svg = Chartist.createSvg(this.container, options.width, options.height, options.classNames.chart); // Create groups for labels, grid and series

          var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
          var seriesGroup = this.svg.elem('g');
          var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);
          var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
          var axisX, axisY;

          if (options.axisX.type === undefined) {
            axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
              ticks: data.normalized.labels,
              stretch: options.fullWidth
            }));
          } else {
            axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, options.axisX);
          }

          if (options.axisY.type === undefined) {
            axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
              high: Chartist.isNumeric(options.high) ? options.high : options.axisY.high,
              low: Chartist.isNumeric(options.low) ? options.low : options.axisY.low
            }));
          } else {
            axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, options.axisY);
          }

          axisX.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
          axisY.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

          if (options.showGridBackground) {
            Chartist.createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
          } // Draw the series


          data.raw.series.forEach(function (series, seriesIndex) {
            var seriesElement = seriesGroup.elem('g'); // Write attributes to series group element. If series name or meta is undefined the attributes will not be written

            seriesElement.attr({
              'ct:series-name': series.name,
              'ct:meta': Chartist.serialize(series.meta)
            }); // Use series class from series data or if not set generate one

            seriesElement.addClass([options.classNames.series, series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex)].join(' '));
            var pathCoordinates = [],
                pathData = [];
            data.normalized.series[seriesIndex].forEach(function (value, valueIndex) {
              var p = {
                x: chartRect.x1 + axisX.projectValue(value, valueIndex, data.normalized.series[seriesIndex]),
                y: chartRect.y1 - axisY.projectValue(value, valueIndex, data.normalized.series[seriesIndex])
              };
              pathCoordinates.push(p.x, p.y);
              pathData.push({
                value: value,
                valueIndex: valueIndex,
                meta: Chartist.getMetaData(series, valueIndex)
              });
            }.bind(this));
            var seriesOptions = {
              lineSmooth: Chartist.getSeriesOption(series, options, 'lineSmooth'),
              showPoint: Chartist.getSeriesOption(series, options, 'showPoint'),
              showLine: Chartist.getSeriesOption(series, options, 'showLine'),
              showArea: Chartist.getSeriesOption(series, options, 'showArea'),
              areaBase: Chartist.getSeriesOption(series, options, 'areaBase')
            };
            var smoothing = typeof seriesOptions.lineSmooth === 'function' ? seriesOptions.lineSmooth : seriesOptions.lineSmooth ? Chartist.Interpolation.monotoneCubic() : Chartist.Interpolation.none(); // Interpolating path where pathData will be used to annotate each path element so we can trace back the original
            // index, value and meta data

            var path = smoothing(pathCoordinates, pathData); // If we should show points we need to create them now to avoid secondary loop
            // Points are drawn from the pathElements returned by the interpolation function
            // Small offset for Firefox to render squares correctly

            if (seriesOptions.showPoint) {
              path.pathElements.forEach(function (pathElement) {
                var point = seriesElement.elem('line', {
                  x1: pathElement.x,
                  y1: pathElement.y,
                  x2: pathElement.x + 0.01,
                  y2: pathElement.y
                }, options.classNames.point).attr({
                  'ct:value': [pathElement.data.value.x, pathElement.data.value.y].filter(Chartist.isNumeric).join(','),
                  'ct:meta': Chartist.serialize(pathElement.data.meta)
                });
                this.eventEmitter.emit('draw', {
                  type: 'point',
                  value: pathElement.data.value,
                  index: pathElement.data.valueIndex,
                  meta: pathElement.data.meta,
                  series: series,
                  seriesIndex: seriesIndex,
                  axisX: axisX,
                  axisY: axisY,
                  group: seriesElement,
                  element: point,
                  x: pathElement.x,
                  y: pathElement.y
                });
              }.bind(this));
            }

            if (seriesOptions.showLine) {
              var line = seriesElement.elem('path', {
                d: path.stringify()
              }, options.classNames.line, true);
              this.eventEmitter.emit('draw', {
                type: 'line',
                values: data.normalized.series[seriesIndex],
                path: path.clone(),
                chartRect: chartRect,
                index: seriesIndex,
                series: series,
                seriesIndex: seriesIndex,
                seriesMeta: series.meta,
                axisX: axisX,
                axisY: axisY,
                group: seriesElement,
                element: line
              });
            } // Area currently only works with axes that support a range!


            if (seriesOptions.showArea && axisY.range) {
              // If areaBase is outside the chart area (< min or > max) we need to set it respectively so that
              // the area is not drawn outside the chart area.
              var areaBase = Math.max(Math.min(seriesOptions.areaBase, axisY.range.max), axisY.range.min); // We project the areaBase value into screen coordinates

              var areaBaseProjected = chartRect.y1 - axisY.projectValue(areaBase); // In order to form the area we'll first split the path by move commands so we can chunk it up into segments

              path.splitByCommand('M').filter(function onlySolidSegments(pathSegment) {
                // We filter only "solid" segments that contain more than one point. Otherwise there's no need for an area
                return pathSegment.pathElements.length > 1;
              }).map(function convertToArea(solidPathSegments) {
                // Receiving the filtered solid path segments we can now convert those segments into fill areas
                var firstElement = solidPathSegments.pathElements[0];
                var lastElement = solidPathSegments.pathElements[solidPathSegments.pathElements.length - 1]; // Cloning the solid path segment with closing option and removing the first move command from the clone
                // We then insert a new move that should start at the area base and draw a straight line up or down
                // at the end of the path we add an additional straight line to the projected area base value
                // As the closing option is set our path will be automatically closed

                return solidPathSegments.clone(true).position(0).remove(1).move(firstElement.x, areaBaseProjected).line(firstElement.x, firstElement.y).position(solidPathSegments.pathElements.length + 1).line(lastElement.x, areaBaseProjected);
              }).forEach(function createArea(areaPath) {
                // For each of our newly created area paths, we'll now create path elements by stringifying our path objects
                // and adding the created DOM elements to the correct series group
                var area = seriesElement.elem('path', {
                  d: areaPath.stringify()
                }, options.classNames.area, true); // Emit an event for each area that was drawn

                this.eventEmitter.emit('draw', {
                  type: 'area',
                  values: data.normalized.series[seriesIndex],
                  path: areaPath.clone(),
                  series: series,
                  seriesIndex: seriesIndex,
                  axisX: axisX,
                  axisY: axisY,
                  chartRect: chartRect,
                  index: seriesIndex,
                  group: seriesElement,
                  element: area
                });
              }.bind(this));
            }
          }.bind(this));
          this.eventEmitter.emit('created', {
            bounds: axisY.bounds,
            chartRect: chartRect,
            axisX: axisX,
            axisY: axisY,
            svg: this.svg,
            options: options
          });
        }
        /**
         * This method creates a new line chart.
         *
         * @memberof Chartist.Line
         * @param {String|Node} query A selector query string or directly a DOM element
         * @param {Object} data The data object that needs to consist of a labels and a series array
         * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
         * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
         * @return {Object} An object which exposes the API for the created chart
         *
         * @example
         * // Create a simple line chart
         * var data = {
         *   // A labels array that can contain any sort of values
         *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
         *   // Our series array that contains series objects or in this case series data arrays
         *   series: [
         *     [5, 2, 4, 2, 0]
         *   ]
         * };
         *
         * // As options we currently only set a static size of 300x200 px
         * var options = {
         *   width: '300px',
         *   height: '200px'
         * };
         *
         * // In the global name space Chartist we call the Line function to initialize a line chart. As a first parameter we pass in a selector where we would like to get our chart created. Second parameter is the actual data object and as a third parameter we pass in our options
         * new Chartist.Line('.ct-chart', data, options);
         *
         * @example
         * // Use specific interpolation function with configuration from the Chartist.Interpolation module
         *
         * var chart = new Chartist.Line('.ct-chart', {
         *   labels: [1, 2, 3, 4, 5],
         *   series: [
         *     [1, 1, 8, 1, 7]
         *   ]
         * }, {
         *   lineSmooth: Chartist.Interpolation.cardinal({
         *     tension: 0.2
         *   })
         * });
         *
         * @example
         * // Create a line chart with responsive options
         *
         * var data = {
         *   // A labels array that can contain any sort of values
         *   labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
         *   // Our series array that contains series objects or in this case series data arrays
         *   series: [
         *     [5, 2, 4, 2, 0]
         *   ]
         * };
         *
         * // In addition to the regular options we specify responsive option overrides that will override the default configutation based on the matching media queries.
         * var responsiveOptions = [
         *   ['screen and (min-width: 641px) and (max-width: 1024px)', {
         *     showPoint: false,
         *     axisX: {
         *       labelInterpolationFnc: function(value) {
         *         // Will return Mon, Tue, Wed etc. on medium screens
         *         return value.slice(0, 3);
         *       }
         *     }
         *   }],
         *   ['screen and (max-width: 640px)', {
         *     showLine: false,
         *     axisX: {
         *       labelInterpolationFnc: function(value) {
         *         // Will return M, T, W etc. on small screens
         *         return value[0];
         *       }
         *     }
         *   }]
         * ];
         *
         * new Chartist.Line('.ct-chart', data, null, responsiveOptions);
         *
         */


        function Line(query, data, options, responsiveOptions) {
          Chartist.Line["super"].constructor.call(this, query, data, defaultOptions, Chartist.extend({}, defaultOptions, options), responsiveOptions);
        } // Creating line chart type in Chartist namespace


        Chartist.Line = Chartist.Base.extend({
          constructor: Line,
          createChart: createChart
        });
      })(this || global, Chartist);

      ;
      /**
      * The bar chart module of Chartist that can be used to draw unipolar or bipolar bar and grouped bar charts.
      *
      * @module Chartist.Bar
      */

      /* global Chartist */

      (function (globalRoot, Chartist) {
        'use strict';

        var window = globalRoot.window;
        var document = globalRoot.document;
        /**
         * Default options in bar charts. Expand the code view to see a detailed list of options with comments.
         *
         * @memberof Chartist.Bar
         */

        var defaultOptions = {
          // Options for X-Axis
          axisX: {
            // The offset of the chart drawing area to the border of the container
            offset: 30,
            // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
            position: 'end',
            // Allows you to correct label positioning on this axis by positive or negative x and y offset.
            labelOffset: {
              x: 0,
              y: 0
            },
            // If labels should be shown or not
            showLabel: true,
            // If the axis grid should be drawn or not
            showGrid: true,
            // Interpolation function that allows you to intercept the value from the axis label
            labelInterpolationFnc: Chartist.noop,
            // This value specifies the minimum width in pixel of the scale steps
            scaleMinSpace: 30,
            // Use only integer values (whole numbers) for the scale steps
            onlyInteger: false
          },
          // Options for Y-Axis
          axisY: {
            // The offset of the chart drawing area to the border of the container
            offset: 40,
            // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
            position: 'start',
            // Allows you to correct label positioning on this axis by positive or negative x and y offset.
            labelOffset: {
              x: 0,
              y: 0
            },
            // If labels should be shown or not
            showLabel: true,
            // If the axis grid should be drawn or not
            showGrid: true,
            // Interpolation function that allows you to intercept the value from the axis label
            labelInterpolationFnc: Chartist.noop,
            // This value specifies the minimum height in pixel of the scale steps
            scaleMinSpace: 20,
            // Use only integer values (whole numbers) for the scale steps
            onlyInteger: false
          },
          // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
          width: undefined,
          // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
          height: undefined,
          // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
          high: undefined,
          // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
          low: undefined,
          // Unless low/high are explicitly set, bar chart will be centered at zero by default. Set referenceValue to null to auto scale.
          referenceValue: 0,
          // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
          chartPadding: {
            top: 15,
            right: 15,
            bottom: 5,
            left: 10
          },
          // Specify the distance in pixel of bars in a group
          seriesBarDistance: 15,
          // If set to true this property will cause the series bars to be stacked. Check the `stackMode` option for further stacking options.
          stackBars: false,
          // If set to 'overlap' this property will force the stacked bars to draw from the zero line.
          // If set to 'accumulate' this property will form a total for each series point. This will also influence the y-axis and the overall bounds of the chart. In stacked mode the seriesBarDistance property will have no effect.
          stackMode: 'accumulate',
          // Inverts the axes of the bar chart in order to draw a horizontal bar chart. Be aware that you also need to invert your axis settings as the Y Axis will now display the labels and the X Axis the values.
          horizontalBars: false,
          // If set to true then each bar will represent a series and the data array is expected to be a one dimensional array of data values rather than a series array of series. This is useful if the bar chart should represent a profile rather than some data over time.
          distributeSeries: false,
          // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
          reverseData: false,
          // If the bar chart should add a background fill to the .ct-grids group.
          showGridBackground: false,
          // Override the class names that get used to generate the SVG structure of the chart
          classNames: {
            chart: 'ct-chart-bar',
            horizontalBars: 'ct-horizontal-bars',
            label: 'ct-label',
            labelGroup: 'ct-labels',
            series: 'ct-series',
            bar: 'ct-bar',
            grid: 'ct-grid',
            gridGroup: 'ct-grids',
            gridBackground: 'ct-grid-background',
            vertical: 'ct-vertical',
            horizontal: 'ct-horizontal',
            start: 'ct-start',
            end: 'ct-end'
          }
        };
        /**
         * Creates a new chart
         *
         */

        function createChart(options) {
          var data;
          var highLow;

          if (options.distributeSeries) {
            data = Chartist.normalizeData(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y');
            data.normalized.series = data.normalized.series.map(function (value) {
              return [value];
            });
          } else {
            data = Chartist.normalizeData(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y');
          } // Create new svg element


          this.svg = Chartist.createSvg(this.container, options.width, options.height, options.classNames.chart + (options.horizontalBars ? ' ' + options.classNames.horizontalBars : '')); // Drawing groups in correct order

          var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
          var seriesGroup = this.svg.elem('g');
          var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);

          if (options.stackBars && data.normalized.series.length !== 0) {
            // If stacked bars we need to calculate the high low from stacked values from each series
            var serialSums = Chartist.serialMap(data.normalized.series, function serialSums() {
              return Array.prototype.slice.call(arguments).map(function (value) {
                return value;
              }).reduce(function (prev, curr) {
                return {
                  x: prev.x + (curr && curr.x) || 0,
                  y: prev.y + (curr && curr.y) || 0
                };
              }, {
                x: 0,
                y: 0
              });
            });
            highLow = Chartist.getHighLow([serialSums], options, options.horizontalBars ? 'x' : 'y');
          } else {
            highLow = Chartist.getHighLow(data.normalized.series, options, options.horizontalBars ? 'x' : 'y');
          } // Overrides of high / low from settings


          highLow.high = +options.high || (options.high === 0 ? 0 : highLow.high);
          highLow.low = +options.low || (options.low === 0 ? 0 : highLow.low);
          var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
          var valueAxis, labelAxisTicks, labelAxis, axisX, axisY; // We need to set step count based on some options combinations

          if (options.distributeSeries && options.stackBars) {
            // If distributed series are enabled and bars need to be stacked, we'll only have one bar and therefore should
            // use only the first label for the step axis
            labelAxisTicks = data.normalized.labels.slice(0, 1);
          } else {
            // If distributed series are enabled but stacked bars aren't, we should use the series labels
            // If we are drawing a regular bar chart with two dimensional series data, we just use the labels array
            // as the bars are normalized
            labelAxisTicks = data.normalized.labels;
          } // Set labelAxis and valueAxis based on the horizontalBars setting. This setting will flip the axes if necessary.


          if (options.horizontalBars) {
            if (options.axisX.type === undefined) {
              valueAxis = axisX = new Chartist.AutoScaleAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
                highLow: highLow,
                referenceValue: 0
              }));
            } else {
              valueAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
                highLow: highLow,
                referenceValue: 0
              }));
            }

            if (options.axisY.type === undefined) {
              labelAxis = axisY = new Chartist.StepAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, {
                ticks: labelAxisTicks
              });
            } else {
              labelAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, options.axisY);
            }
          } else {
            if (options.axisX.type === undefined) {
              labelAxis = axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, {
                ticks: labelAxisTicks
              });
            } else {
              labelAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, options.axisX);
            }

            if (options.axisY.type === undefined) {
              valueAxis = axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
                highLow: highLow,
                referenceValue: 0
              }));
            } else {
              valueAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
                highLow: highLow,
                referenceValue: 0
              }));
            }
          } // Projected 0 point


          var zeroPoint = options.horizontalBars ? chartRect.x1 + valueAxis.projectValue(0) : chartRect.y1 - valueAxis.projectValue(0); // Used to track the screen coordinates of stacked bars

          var stackedBarValues = [];
          labelAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
          valueAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

          if (options.showGridBackground) {
            Chartist.createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
          } // Draw the series


          data.raw.series.forEach(function (series, seriesIndex) {
            // Calculating bi-polar value of index for seriesOffset. For i = 0..4 biPol will be -1.5, -0.5, 0.5, 1.5 etc.
            var biPol = seriesIndex - (data.raw.series.length - 1) / 2; // Half of the period width between vertical grid lines used to position bars

            var periodHalfLength; // Current series SVG element

            var seriesElement; // We need to set periodHalfLength based on some options combinations

            if (options.distributeSeries && !options.stackBars) {
              // If distributed series are enabled but stacked bars aren't, we need to use the length of the normaizedData array
              // which is the series count and divide by 2
              periodHalfLength = labelAxis.axisLength / data.normalized.series.length / 2;
            } else if (options.distributeSeries && options.stackBars) {
              // If distributed series and stacked bars are enabled we'll only get one bar so we should just divide the axis
              // length by 2
              periodHalfLength = labelAxis.axisLength / 2;
            } else {
              // On regular bar charts we should just use the series length
              periodHalfLength = labelAxis.axisLength / data.normalized.series[seriesIndex].length / 2;
            } // Adding the series group to the series element


            seriesElement = seriesGroup.elem('g'); // Write attributes to series group element. If series name or meta is undefined the attributes will not be written

            seriesElement.attr({
              'ct:series-name': series.name,
              'ct:meta': Chartist.serialize(series.meta)
            }); // Use series class from series data or if not set generate one

            seriesElement.addClass([options.classNames.series, series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex)].join(' '));
            data.normalized.series[seriesIndex].forEach(function (value, valueIndex) {
              var projected, bar, previousStack, labelAxisValueIndex; // We need to set labelAxisValueIndex based on some options combinations

              if (options.distributeSeries && !options.stackBars) {
                // If distributed series are enabled but stacked bars aren't, we can use the seriesIndex for later projection
                // on the step axis for label positioning
                labelAxisValueIndex = seriesIndex;
              } else if (options.distributeSeries && options.stackBars) {
                // If distributed series and stacked bars are enabled, we will only get one bar and therefore always use
                // 0 for projection on the label step axis
                labelAxisValueIndex = 0;
              } else {
                // On regular bar charts we just use the value index to project on the label step axis
                labelAxisValueIndex = valueIndex;
              } // We need to transform coordinates differently based on the chart layout


              if (options.horizontalBars) {
                projected = {
                  x: chartRect.x1 + valueAxis.projectValue(value && value.x ? value.x : 0, valueIndex, data.normalized.series[seriesIndex]),
                  y: chartRect.y1 - labelAxis.projectValue(value && value.y ? value.y : 0, labelAxisValueIndex, data.normalized.series[seriesIndex])
                };
              } else {
                projected = {
                  x: chartRect.x1 + labelAxis.projectValue(value && value.x ? value.x : 0, labelAxisValueIndex, data.normalized.series[seriesIndex]),
                  y: chartRect.y1 - valueAxis.projectValue(value && value.y ? value.y : 0, valueIndex, data.normalized.series[seriesIndex])
                };
              } // If the label axis is a step based axis we will offset the bar into the middle of between two steps using
              // the periodHalfLength value. Also we do arrange the different series so that they align up to each other using
              // the seriesBarDistance. If we don't have a step axis, the bar positions can be chosen freely so we should not
              // add any automated positioning.


              if (labelAxis instanceof Chartist.StepAxis) {
                // Offset to center bar between grid lines, but only if the step axis is not stretched
                if (!labelAxis.options.stretch) {
                  projected[labelAxis.units.pos] += periodHalfLength * (options.horizontalBars ? -1 : 1);
                } // Using bi-polar offset for multiple series if no stacked bars or series distribution is used


                projected[labelAxis.units.pos] += options.stackBars || options.distributeSeries ? 0 : biPol * options.seriesBarDistance * (options.horizontalBars ? -1 : 1);
              } // Enter value in stacked bar values used to remember previous screen value for stacking up bars


              previousStack = stackedBarValues[valueIndex] || zeroPoint;
              stackedBarValues[valueIndex] = previousStack - (zeroPoint - projected[labelAxis.counterUnits.pos]); // Skip if value is undefined

              if (value === undefined) {
                return;
              }

              var positions = {};
              positions[labelAxis.units.pos + '1'] = projected[labelAxis.units.pos];
              positions[labelAxis.units.pos + '2'] = projected[labelAxis.units.pos];

              if (options.stackBars && (options.stackMode === 'accumulate' || !options.stackMode)) {
                // Stack mode: accumulate (default)
                // If bars are stacked we use the stackedBarValues reference and otherwise base all bars off the zero line
                // We want backwards compatibility, so the expected fallback without the 'stackMode' option
                // to be the original behaviour (accumulate)
                positions[labelAxis.counterUnits.pos + '1'] = previousStack;
                positions[labelAxis.counterUnits.pos + '2'] = stackedBarValues[valueIndex];
              } else {
                // Draw from the zero line normally
                // This is also the same code for Stack mode: overlap
                positions[labelAxis.counterUnits.pos + '1'] = zeroPoint;
                positions[labelAxis.counterUnits.pos + '2'] = projected[labelAxis.counterUnits.pos];
              } // Limit x and y so that they are within the chart rect


              positions.x1 = Math.min(Math.max(positions.x1, chartRect.x1), chartRect.x2);
              positions.x2 = Math.min(Math.max(positions.x2, chartRect.x1), chartRect.x2);
              positions.y1 = Math.min(Math.max(positions.y1, chartRect.y2), chartRect.y1);
              positions.y2 = Math.min(Math.max(positions.y2, chartRect.y2), chartRect.y1);
              var metaData = Chartist.getMetaData(series, valueIndex); // Create bar element

              bar = seriesElement.elem('line', positions, options.classNames.bar).attr({
                'ct:value': [value.x, value.y].filter(Chartist.isNumeric).join(','),
                'ct:meta': Chartist.serialize(metaData)
              });
              this.eventEmitter.emit('draw', Chartist.extend({
                type: 'bar',
                value: value,
                index: valueIndex,
                meta: metaData,
                series: series,
                seriesIndex: seriesIndex,
                axisX: axisX,
                axisY: axisY,
                chartRect: chartRect,
                group: seriesElement,
                element: bar
              }, positions));
            }.bind(this));
          }.bind(this));
          this.eventEmitter.emit('created', {
            bounds: valueAxis.bounds,
            chartRect: chartRect,
            axisX: axisX,
            axisY: axisY,
            svg: this.svg,
            options: options
          });
        }
        /**
         * This method creates a new bar chart and returns API object that you can use for later changes.
         *
         * @memberof Chartist.Bar
         * @param {String|Node} query A selector query string or directly a DOM element
         * @param {Object} data The data object that needs to consist of a labels and a series array
         * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
         * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
         * @return {Object} An object which exposes the API for the created chart
         *
         * @example
         * // Create a simple bar chart
         * var data = {
         *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
         *   series: [
         *     [5, 2, 4, 2, 0]
         *   ]
         * };
         *
         * // In the global name space Chartist we call the Bar function to initialize a bar chart. As a first parameter we pass in a selector where we would like to get our chart created and as a second parameter we pass our data object.
         * new Chartist.Bar('.ct-chart', data);
         *
         * @example
         * // This example creates a bipolar grouped bar chart where the boundaries are limitted to -10 and 10
         * new Chartist.Bar('.ct-chart', {
         *   labels: [1, 2, 3, 4, 5, 6, 7],
         *   series: [
         *     [1, 3, 2, -5, -3, 1, -6],
         *     [-5, -2, -4, -1, 2, -3, 1]
         *   ]
         * }, {
         *   seriesBarDistance: 12,
         *   low: -10,
         *   high: 10
         * });
         *
         */


        function Bar(query, data, options, responsiveOptions) {
          Chartist.Bar["super"].constructor.call(this, query, data, defaultOptions, Chartist.extend({}, defaultOptions, options), responsiveOptions);
        } // Creating bar chart type in Chartist namespace


        Chartist.Bar = Chartist.Base.extend({
          constructor: Bar,
          createChart: createChart
        });
      })(this || global, Chartist);

      ;
      /**
      * The pie chart module of Chartist that can be used to draw pie, donut or gauge charts
      *
      * @module Chartist.Pie
      */

      /* global Chartist */

      (function (globalRoot, Chartist) {
        'use strict';

        var window = globalRoot.window;
        var document = globalRoot.document;
        /**
         * Default options in line charts. Expand the code view to see a detailed list of options with comments.
         *
         * @memberof Chartist.Pie
         */

        var defaultOptions = {
          // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
          width: undefined,
          // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
          height: undefined,
          // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
          chartPadding: 5,
          // Override the class names that are used to generate the SVG structure of the chart
          classNames: {
            chartPie: 'ct-chart-pie',
            chartDonut: 'ct-chart-donut',
            series: 'ct-series',
            slicePie: 'ct-slice-pie',
            sliceDonut: 'ct-slice-donut',
            sliceDonutSolid: 'ct-slice-donut-solid',
            label: 'ct-label'
          },
          // The start angle of the pie chart in degrees where 0 points north. A higher value offsets the start angle clockwise.
          startAngle: 0,
          // An optional total you can specify. By specifying a total value, the sum of the values in the series must be this total in order to draw a full pie. You can use this parameter to draw only parts of a pie or gauge charts.
          total: undefined,
          // If specified the donut CSS classes will be used and strokes will be drawn instead of pie slices.
          donut: false,
          // If specified the donut segments will be drawn as shapes instead of strokes.
          donutSolid: false,
          // Specify the donut stroke width, currently done in javascript for convenience. May move to CSS styles in the future.
          // This option can be set as number or string to specify a relative width (i.e. 100 or '30%').
          donutWidth: 60,
          // If a label should be shown or not
          showLabel: true,
          // Label position offset from the standard position which is half distance of the radius. This value can be either positive or negative. Positive values will position the label away from the center.
          labelOffset: 0,
          // This option can be set to 'inside', 'outside' or 'center'. Positioned with 'inside' the labels will be placed on half the distance of the radius to the border of the Pie by respecting the 'labelOffset'. The 'outside' option will place the labels at the border of the pie and 'center' will place the labels in the absolute center point of the chart. The 'center' option only makes sense in conjunction with the 'labelOffset' option.
          labelPosition: 'inside',
          // An interpolation function for the label value
          labelInterpolationFnc: Chartist.noop,
          // Label direction can be 'neutral', 'explode' or 'implode'. The labels anchor will be positioned based on those settings as well as the fact if the labels are on the right or left side of the center of the chart. Usually explode is useful when labels are positioned far away from the center.
          labelDirection: 'neutral',
          // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
          reverseData: false,
          // If true empty values will be ignored to avoid drawing unncessary slices and labels
          ignoreEmptyValues: false
        };
        /**
         * Determines SVG anchor position based on direction and center parameter
         *
         * @param center
         * @param label
         * @param direction
         * @return {string}
         */

        function determineAnchorPosition(center, label, direction) {
          var toTheRight = label.x > center.x;

          if (toTheRight && direction === 'explode' || !toTheRight && direction === 'implode') {
            return 'start';
          } else if (toTheRight && direction === 'implode' || !toTheRight && direction === 'explode') {
            return 'end';
          } else {
            return 'middle';
          }
        }
        /**
         * Creates the pie chart
         *
         * @param options
         */


        function createChart(options) {
          var data = Chartist.normalizeData(this.data);
          var seriesGroups = [],
              labelsGroup,
              chartRect,
              radius,
              labelRadius,
              totalDataSum,
              startAngle = options.startAngle; // Create SVG.js draw

          this.svg = Chartist.createSvg(this.container, options.width, options.height, options.donut ? options.classNames.chartDonut : options.classNames.chartPie); // Calculate charting rect

          chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding); // Get biggest circle radius possible within chartRect

          radius = Math.min(chartRect.width() / 2, chartRect.height() / 2); // Calculate total of all series to get reference value or use total reference from optional options

          totalDataSum = options.total || data.normalized.series.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue;
          }, 0);
          var donutWidth = Chartist.quantity(options.donutWidth);

          if (donutWidth.unit === '%') {
            donutWidth.value *= radius / 100;
          } // If this is a donut chart we need to adjust our radius to enable strokes to be drawn inside
          // Unfortunately this is not possible with the current SVG Spec
          // See this proposal for more details: http://lists.w3.org/Archives/Public/www-svg/2003Oct/0000.html


          radius -= options.donut && !options.donutSolid ? donutWidth.value / 2 : 0; // If labelPosition is set to `outside` or a donut chart is drawn then the label position is at the radius,
          // if regular pie chart it's half of the radius

          if (options.labelPosition === 'outside' || options.donut && !options.donutSolid) {
            labelRadius = radius;
          } else if (options.labelPosition === 'center') {
            // If labelPosition is center we start with 0 and will later wait for the labelOffset
            labelRadius = 0;
          } else if (options.donutSolid) {
            labelRadius = radius - donutWidth.value / 2;
          } else {
            // Default option is 'inside' where we use half the radius so the label will be placed in the center of the pie
            // slice
            labelRadius = radius / 2;
          } // Add the offset to the labelRadius where a negative offset means closed to the center of the chart


          labelRadius += options.labelOffset; // Calculate end angle based on total sum and current data value and offset with padding

          var center = {
            x: chartRect.x1 + chartRect.width() / 2,
            y: chartRect.y2 + chartRect.height() / 2
          }; // Check if there is only one non-zero value in the series array.

          var hasSingleValInSeries = data.raw.series.filter(function (val) {
            return val.hasOwnProperty('value') ? val.value !== 0 : val !== 0;
          }).length === 1; // Creating the series groups

          data.raw.series.forEach(function (series, index) {
            seriesGroups[index] = this.svg.elem('g', null, null);
          }.bind(this)); //if we need to show labels we create the label group now

          if (options.showLabel) {
            labelsGroup = this.svg.elem('g', null, null);
          } // Draw the series
          // initialize series groups


          data.raw.series.forEach(function (series, index) {
            // If current value is zero and we are ignoring empty values then skip to next value
            if (data.normalized.series[index] === 0 && options.ignoreEmptyValues) return; // If the series is an object and contains a name or meta data we add a custom attribute

            seriesGroups[index].attr({
              'ct:series-name': series.name
            }); // Use series class from series data or if not set generate one

            seriesGroups[index].addClass([options.classNames.series, series.className || options.classNames.series + '-' + Chartist.alphaNumerate(index)].join(' ')); // If the whole dataset is 0 endAngle should be zero. Can't divide by 0.

            var endAngle = totalDataSum > 0 ? startAngle + data.normalized.series[index] / totalDataSum * 360 : 0; // Use slight offset so there are no transparent hairline issues

            var overlappigStartAngle = Math.max(0, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2)); // If we need to draw the arc for all 360 degrees we need to add a hack where we close the circle
            // with Z and use 359.99 degrees

            if (endAngle - overlappigStartAngle >= 359.99) {
              endAngle = overlappigStartAngle + 359.99;
            }

            var start = Chartist.polarToCartesian(center.x, center.y, radius, overlappigStartAngle),
                end = Chartist.polarToCartesian(center.x, center.y, radius, endAngle);
            var innerStart, innerEnd, donutSolidRadius; // Create a new path element for the pie chart. If this isn't a donut chart we should close the path for a correct stroke

            var path = new Chartist.Svg.Path(!options.donut || options.donutSolid).move(end.x, end.y).arc(radius, radius, 0, endAngle - startAngle > 180, 0, start.x, start.y); // If regular pie chart (no donut) we add a line to the center of the circle for completing the pie

            if (!options.donut) {
              path.line(center.x, center.y);
            } else if (options.donutSolid) {
              donutSolidRadius = radius - donutWidth.value;
              innerStart = Chartist.polarToCartesian(center.x, center.y, donutSolidRadius, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2));
              innerEnd = Chartist.polarToCartesian(center.x, center.y, donutSolidRadius, endAngle);
              path.line(innerStart.x, innerStart.y);
              path.arc(donutSolidRadius, donutSolidRadius, 0, endAngle - startAngle > 180, 1, innerEnd.x, innerEnd.y);
            } // Create the SVG path
            // If this is a donut chart we add the donut class, otherwise just a regular slice


            var pathClassName = options.classNames.slicePie;

            if (options.donut) {
              pathClassName = options.classNames.sliceDonut;

              if (options.donutSolid) {
                pathClassName = options.classNames.sliceDonutSolid;
              }
            }

            var pathElement = seriesGroups[index].elem('path', {
              d: path.stringify()
            }, pathClassName); // Adding the pie series value to the path

            pathElement.attr({
              'ct:value': data.normalized.series[index],
              'ct:meta': Chartist.serialize(series.meta)
            }); // If this is a donut, we add the stroke-width as style attribute

            if (options.donut && !options.donutSolid) {
              pathElement._node.style.strokeWidth = donutWidth.value + 'px';
            } // Fire off draw event


            this.eventEmitter.emit('draw', {
              type: 'slice',
              value: data.normalized.series[index],
              totalDataSum: totalDataSum,
              index: index,
              meta: series.meta,
              series: series,
              group: seriesGroups[index],
              element: pathElement,
              path: path.clone(),
              center: center,
              radius: radius,
              startAngle: startAngle,
              endAngle: endAngle
            }); // If we need to show labels we need to add the label for this slice now

            if (options.showLabel) {
              var labelPosition;

              if (data.raw.series.length === 1) {
                // If we have only 1 series, we can position the label in the center of the pie
                labelPosition = {
                  x: center.x,
                  y: center.y
                };
              } else {
                // Position at the labelRadius distance from center and between start and end angle
                labelPosition = Chartist.polarToCartesian(center.x, center.y, labelRadius, startAngle + (endAngle - startAngle) / 2);
              }

              var rawValue;

              if (data.normalized.labels && !Chartist.isFalseyButZero(data.normalized.labels[index])) {
                rawValue = data.normalized.labels[index];
              } else {
                rawValue = data.normalized.series[index];
              }

              var interpolatedValue = options.labelInterpolationFnc(rawValue, index);

              if (interpolatedValue || interpolatedValue === 0) {
                var labelElement = labelsGroup.elem('text', {
                  dx: labelPosition.x,
                  dy: labelPosition.y,
                  'text-anchor': determineAnchorPosition(center, labelPosition, options.labelDirection)
                }, options.classNames.label).text('' + interpolatedValue); // Fire off draw event

                this.eventEmitter.emit('draw', {
                  type: 'label',
                  index: index,
                  group: labelsGroup,
                  element: labelElement,
                  text: '' + interpolatedValue,
                  x: labelPosition.x,
                  y: labelPosition.y
                });
              }
            } // Set next startAngle to current endAngle.
            // (except for last slice)


            startAngle = endAngle;
          }.bind(this));
          this.eventEmitter.emit('created', {
            chartRect: chartRect,
            svg: this.svg,
            options: options
          });
        }
        /**
         * This method creates a new pie chart and returns an object that can be used to redraw the chart.
         *
         * @memberof Chartist.Pie
         * @param {String|Node} query A selector query string or directly a DOM element
         * @param {Object} data The data object in the pie chart needs to have a series property with a one dimensional data array. The values will be normalized against each other and don't necessarily need to be in percentage. The series property can also be an array of value objects that contain a value property and a className property to override the CSS class name for the series group.
         * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
         * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
         * @return {Object} An object with a version and an update method to manually redraw the chart
         *
         * @example
         * // Simple pie chart example with four series
         * new Chartist.Pie('.ct-chart', {
         *   series: [10, 2, 4, 3]
         * });
         *
         * @example
         * // Drawing a donut chart
         * new Chartist.Pie('.ct-chart', {
         *   series: [10, 2, 4, 3]
         * }, {
         *   donut: true
         * });
         *
         * @example
         * // Using donut, startAngle and total to draw a gauge chart
         * new Chartist.Pie('.ct-chart', {
         *   series: [20, 10, 30, 40]
         * }, {
         *   donut: true,
         *   donutWidth: 20,
         *   startAngle: 270,
         *   total: 200
         * });
         *
         * @example
         * // Drawing a pie chart with padding and labels that are outside the pie
         * new Chartist.Pie('.ct-chart', {
         *   series: [20, 10, 30, 40]
         * }, {
         *   chartPadding: 30,
         *   labelOffset: 50,
         *   labelDirection: 'explode'
         * });
         *
         * @example
         * // Overriding the class names for individual series as well as a name and meta data.
         * // The name will be written as ct:series-name attribute and the meta data will be serialized and written
         * // to a ct:meta attribute.
         * new Chartist.Pie('.ct-chart', {
         *   series: [{
         *     value: 20,
         *     name: 'Series 1',
         *     className: 'my-custom-class-one',
         *     meta: 'Meta One'
         *   }, {
         *     value: 10,
         *     name: 'Series 2',
         *     className: 'my-custom-class-two',
         *     meta: 'Meta Two'
         *   }, {
         *     value: 70,
         *     name: 'Series 3',
         *     className: 'my-custom-class-three',
         *     meta: 'Meta Three'
         *   }]
         * });
         */


        function Pie(query, data, options, responsiveOptions) {
          Chartist.Pie["super"].constructor.call(this, query, data, defaultOptions, Chartist.extend({}, defaultOptions, options), responsiveOptions);
        } // Creating pie chart type in Chartist namespace


        Chartist.Pie = Chartist.Base.extend({
          constructor: Pie,
          createChart: createChart,
          determineAnchorPosition: determineAnchorPosition
        });
      })(this || global, Chartist);

      return Chartist;
    });
    /***/

  },

  /***/
  "./node_modules/ng-chartist/__ivy_ngcc__/fesm2015/ng-chartist.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/ng-chartist/__ivy_ngcc__/fesm2015/ng-chartist.js ***!
    \***********************************************************************/

  /*! exports provided: ChartistComponent, ChartistModule */

  /***/
  function node_modulesNgChartist__ivy_ngcc__Fesm2015NgChartistJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartistComponent", function () {
      return ChartistComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartistModule", function () {
      return ChartistModule;
    });
    /* harmony import */


    var chartist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! chartist */
    "./node_modules/chartist/dist/chartist.js");
    /* harmony import */


    var chartist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Angular component which renders Chartist chart.
     *
     * See Chartist {\@link https://gionkunz.github.io/chartist-js/api-documentation.html API documentation} and
     * {\@link https://gionkunz.github.io/chartist-js/examples.html examples} for more information.
     * ### Example
     * ```html
     * <x-chartist
     * [type]="type"
     * [data]="data"
     * [options]="options"
     * [responsiveOptions]="responsiveOptions"
     * [events]="events"
     * ></x-chartist>
     * ```
     */


    var ChartistComponent = /*#__PURE__*/function () {
      /**
       * @ignore
       * @param {?} elementRef
       */
      function ChartistComponent(elementRef) {
        _classCallCheck(this, ChartistComponent);

        this.elementRef = elementRef;
        /**
         * Event emitted after Chartist chart has been initialized.
         *
         * Event handler function will receive chart instance argument.
         */

        this.initialized = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      /**
       * @ignore
       * @return {?}
       */


      _createClass(ChartistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.type && this.data) {
            this.renderChart();
          }
        }
        /**
         * @ignore
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.update(changes);
        }
        /**
         * @ignore
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.chart) {
            this.chart.detach();
            this.chart = null;
          }
        }
        /**
         * @ignore
         * @private
         * @return {?}
         */

      }, {
        key: "renderChart",
        value: function renderChart() {
          /** @type {?} */
          var nativeElement = this.elementRef.nativeElement;

          if (!(this.type in chartist__WEBPACK_IMPORTED_MODULE_0__)) {
            throw new Error("".concat(this.type, " is not a valid chart type"));
          }

          this.chart =
          /** @type {?} */
          chartist__WEBPACK_IMPORTED_MODULE_0__[this.type](nativeElement, this.data, this.options, this.responsiveOptions);

          if (this.events) {
            this.bindEvents();
          }

          this.initialized.emit(this.chart);
        }
        /**
         * @ignore
         * @private
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "update",
        value: function update(changes) {
          if (!this.type || !this.data) {
            return;
          }

          if (!this.chart || 'type' in changes) {
            this.renderChart();
          } else if (changes.data || changes.options) {
            /** @type {?} */
            this.chart.update(this.data, this.options);
          }
        }
        /**
         * @ignore
         * @private
         * @return {?}
         */

      }, {
        key: "bindEvents",
        value: function bindEvents() {
          for (var _i = 0, _Object$keys = Object.keys(this.events); _i < _Object$keys.length; _i++) {
            var event = _Object$keys[_i];
            this.chart.on(event, this.events[event]);
          }
        }
      }]);

      return ChartistComponent;
    }();

    ChartistComponent.ɵfac = function ChartistComponent_Factory(t) {
      return new (t || ChartistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    ChartistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ChartistComponent,
      selectors: [["x-chartist"]],
      inputs: {
        data: "data",
        type: "type",
        options: "options",
        responsiveOptions: "responsiveOptions",
        events: "events"
      },
      outputs: {
        initialized: "initialized"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 0,
      vars: 0,
      template: function ChartistComponent_Template(rf, ctx) {},
      styles: ["[_nghost-%COMP%] {\n        display: block;\n      }"]
    });
    /** @nocollapse */

    ChartistComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    ChartistComponent.propDecorators = {
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      responsiveOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      events: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      initialized: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChartistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'x-chartist',
          template: '',
          styles: ["\n      :host {\n        display: block;\n      }\n    "]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      }, {
        initialized: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        responsiveOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        events: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ChartistModule = function ChartistModule() {
      _classCallCheck(this, ChartistModule);
    };

    ChartistModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ChartistModule
    });
    ChartistModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ChartistModule_Factory(t) {
        return new (t || ChartistModule)();
      },
      imports: [[]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChartistModule, {
        declarations: [ChartistComponent],
        exports: [ChartistComponent]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChartistModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [ChartistComponent],
          imports: [],
          exports: [ChartistComponent]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng-chartist.js.map

    /***/

  },

  /***/
  "./src/app/dashboard/article-list/article-list.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/dashboard/article-list/article-list.component.ts ***!
    \******************************************************************/

  /*! exports provided: ArticleListComponent */

  /***/
  function srcAppDashboardArticleListArticleListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function () {
      return ArticleListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    var ArticleListComponent = /*#__PURE__*/function () {
      function ArticleListComponent() {
        _classCallCheck(this, ArticleListComponent);

        this.articleChoosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ArticleListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "onArticleClick",
        value: function onArticleClick() {
          console.log("ArticleListComponent choosed item");
          this.articleChoosed.emit("item choosed");
        }
      }, {
        key: "printVaue",
        value: function printVaue() {
          console.log(this.item);
        }
      }]);

      return ArticleListComponent;
    }();

    ArticleListComponent.ɵfac = function ArticleListComponent_Factory(t) {
      return new (t || ArticleListComponent)();
    };

    ArticleListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ArticleListComponent,
      selectors: [["app-article-list"]],
      inputs: {
        item: "item"
      },
      outputs: {
        articleChoosed: "articleChoosed"
      },
      decls: 8,
      vars: 0,
      consts: [[1, "join-wrap"], ["mat-raised-button", "", 3, "click"]],
      template: function ArticleListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Article list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleListComponent_Template_button_click_4_listener() {
            return ctx.onArticleClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "onArticleClick!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleListComponent_Template_button_click_6_listener() {
            return ctx.printVaue();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "printVaue!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButton"]],
      styles: [".position-relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.add-contact[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 17px;\n  top: 57px;\n}\n\n.welcome-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n}\n\n.welcome-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -50px;\n  height: 500px;\n  z-index: 1;\n  width: 100%;\n}\n\n.welcome-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  height: 500px;\n}\n\n.welcome-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  color: #0d70b4;\n  font-size: 4rem;\n  z-index: 100;\n}\n\n.welcome-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1.size-8[_ngcontent-%COMP%] {\n  font-size: 8rem;\n}\n\n@media (max-width: 500px) {\n  .welcome-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n  .welcome-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1.size-8[_ngcontent-%COMP%] {\n    font-size: 4rem;\n  }\n}\n\n.news-loading--wrap[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.news-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  background-color: #ffff;\n  padding: 1px;\n}\n\n.news-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #0d70b4;\n}\n\n.news-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: auto;\n}\n\n.news-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n  text-align: center;\n  width: 100%;\n  margin: 2rem;\n}\n\n.join-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-bottom: 2rem;\n}\n\n.join-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #63a0c1;\n  color: white;\n}\n\n.img-card[_ngcontent-%COMP%] {\n  height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.card[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #245475;\n  height: 70px;\n  overflow: hidden;\n  text-align: center;\n  font-weight: 600;\n}\n\n.card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #67757c;\n}\n\n.flex-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.mat-card-actions[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%], .mat-card-subtitle[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.padding-10[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.rm[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.mat-card[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2FydGljbGUtbGlzdC9hcnRpY2xlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBSEE7RUFJSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixVQUFVO0VBQ1YsV0FBVztBQUdmOztBQVhBO0VBV0ksYUFBYTtBQUlqQjs7QUFmQTtFQWFNLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixZQUFZO0FBTWxCOztBQXZCQTtFQW1CUSxlQUFlO0FBUXZCOztBQUZBO0VBQ0U7SUFHTSxlQUFlO0VBR3JCO0VBTkE7SUFLUSxlQUFlO0VBSXZCO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFFSSx1QkFBdUI7RUFDdkIsWUFBWTtBQUFoQjs7QUFIQTtFQU1NLGtCQUFrQjtFQUNsQixjQUFjO0FBQ3BCOztBQVJBO0VBV0ksVUFBVTtFQUNWLFlBQVk7QUFDaEI7O0FBYkE7RUFjTSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBR2xCOztBQUVBO0VBQ0UsV0FBVztFQUNULGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDdkI7O0FBSkE7RUFNTSx5QkFBeUI7RUFDekIsWUFBWTtBQUVsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBaUI7S0FBakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFGQTtFQUlJLGVBQWU7RUFDZixjQUFjO0VBQ2QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBRXBCOztBQVhBO0VBY00sZUFBZTtFQUNmLGNBQWM7QUFDcEI7O0FBSUE7RUFDRSx1QkFBdUI7QUFEekI7O0FBSUE7OztFQUdFLGtCQUFrQjtBQURwQjs7QUFHQTtFQUNFLFdBQVc7QUFBYjs7QUFHQTtFQUNFLGFBQWE7QUFBZjs7QUFHQTtFQUNFLGtCQUFrQjtBQUFwQjs7QUFHQTtFQUNFLFlBQVk7QUFBZCIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9hcnRpY2xlLWxpc3QvYXJ0aWNsZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc2l0aW9uLXJlbGF0aXZlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5hZGQtY29udGFjdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxN3B4O1xyXG4gIHRvcDogNTdweDtcclxufVxyXG5cclxuLndlbGNvbWUtd3JhcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnRpdGxlIHtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBoMSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogIzBkNzBiNDtcclxuICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICYuc2l6ZS04IHtcclxuICAgICAgICBmb250LXNpemU6IDhyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC53ZWxjb21lLXdyYXAge1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICAmLnNpemUtOCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubmV3cy1sb2FkaW5nLS13cmFwe1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm5ld3Mtd3JhcCB7XHJcbiAgLnRpdGxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmO1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogIzBkNzBiNDtcclxuICAgIH1cclxuICB9XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uam9pbi13cmFwe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuXHJcbiAgICBidXR0b257XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2M2EwYzE7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG5cclxuLmltZy1jYXJkIHtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIFxyXG4gIG1hdC1jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMjQ1NDc1O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICBtYXQtY2FyZC1jb250ZW50IHtcclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGNvbG9yOiAjNjc3NTdjO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZsZXgtY2VudGVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1jYXJkLWFjdGlvbnMsXHJcbi5tYXQtY2FyZC1jb250ZW50LFxyXG4ubWF0LWNhcmQtc3VidGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5ociB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nLTEwIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ucm0ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLm1hdC1jYXJkIC5tYXQtY2FyZC1jb250ZW50e1xyXG4gIHBhZGRpbmc6IDVweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-article-list',
          templateUrl: './article-list.component.html',
          styleUrls: ['./article-list.component.scss']
        }]
      }], function () {
        return [];
      }, {
        articleChoosed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/article/article.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/dashboard/article/article.component.ts ***!
    \********************************************************/

  /*! exports provided: ArticleComponent */

  /***/
  function srcAppDashboardArticleArticleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleComponent", function () {
      return ArticleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _data_provider_data_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../data-provider/data-provider.service */
    "./src/app/data-provider/data-provider.service.ts");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_loading_component_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/loading-component/loading.component */
    "./src/app/shared/loading-component/loading.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    function ArticleComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-bubble-loading", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx_r0.loading);
      }
    }

    function ArticleComponent_div_2_div_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleComponent_div_2_div_25_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5.onImageClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "defs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clipPath", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rect", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ArticleComponent_div_2_div_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleComponent_div_2_div_26_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.onImageClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "defs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clipPath", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rect", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ArticleComponent_div_2_div_88_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleComponent_div_2_div_88_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var new_r9 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.onAvaliableNewClick(new_r9.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var new_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", new_r9.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", new_r9.dateViewModel, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](new_r9.title);
      }
    }

    function ArticleComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "defs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "clipPath", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "rect", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "g", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "g", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ArticleComponent_div_2_div_25_Template, 7, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ArticleComponent_div_2_div_26_Template, 7, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "img", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleComponent_div_2_Template_img_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.onImageClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "svg", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "defs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "clipPath", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "rect", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "g", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Gastropub cardigan jean shorts, kogi Godard PBR&B lo-fi locavore. Organic chillwave vinyl Neutra. Bushwick Helvetica cred freegan, crucifix Godard craft beer deep v mixtape cornhole Truffaut master cleanse pour-over Odd Future beard. Portland polaroid iPhone.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " 13:94");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " 04/02/2021");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "John Smith");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "John Smith:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Gastropub cardigan jean shorts, kogi Godard PBR&B lo-fi locavore. Organic chillwave vinyl Neutra. Bushwick Helvetica cred freegan, crucifix Godard craft beer deep v mixtape cornhole Truffaut master cleanse pour-over Odd Future beard. Portland polaroid iPhone.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "That's exactly what I was thinking!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " 14:52");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " 04/02/2021");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Andrew Johnson");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "I\u043D\u0448i \u043D\u043E\u0432\u0438\u043D\u0438");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, ArticleComponent_div_2_div_88_Template, 8, 3, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.article.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.article.dateViewModel, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.article.views, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.article.images.length > 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.article.images.length > 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.currentImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.article.fullText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.avaliableNews);
      }
    }

    var ArticleComponent = /*#__PURE__*/function () {
      function ArticleComponent(router, activateRoute, dataProvider, _router) {
        _classCallCheck(this, ArticleComponent);

        this.router = router;
        this.activateRoute = activateRoute;
        this.dataProvider = dataProvider;
        this._router = _router;
        this.loading = true;
        this.avaliableNews = [];
        this.currentImageIndex = 0;
      }

      _createClass(ArticleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.loading = true;
                    console.log('ArticleComponent init');
                    this.activateRoute.params.subscribe(function (params) {
                      _this.id = params['id']; // let getArticleResult = 

                      _this.dataProvider.getById(_this.id).then(function (getArticleResult) {
                        if (getArticleResult.success) {
                          console.log(getArticleResult.item);
                          _this.article = getArticleResult.item;

                          if (!_this.article.images || _this.article.images.length === 0) {
                            _this.currentImageUrl = _this.article.imageUrl;
                          } else {
                            _this.currentImageUrl = getArticleResult.item.images[0];
                          }

                          _this.avaliableNews = _this.dataProvider.getPagedArticles(0, 3);
                          _this.loading = false;
                        } else {
                          alert("not found");
                        }
                      });
                    });

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "onImageClick",
        value: function onImageClick() {
          console.log("OnImageClick");
          if (this.article.images.length === 0 || this.article.images.length === 1) return;
          this.currentImageIndex++;
          if (this.currentImageIndex === this.article.images.length) this.currentImageIndex = 0;
          this.currentImageUrl = this.article.images[this.currentImageIndex];

          if (!this.currentImageUrl) {
            this.currentImageIndex = 0;
            this.currentImageUrl = this.article.images[this.currentImageIndex];
          }

          jquery__WEBPACK_IMPORTED_MODULE_3__("#article-image").addClass("img-animation");
          setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__("#article-image").removeClass("img-animation");
          }, 400);
        }
      }, {
        key: "onAvaliableNewClick",
        value: function onAvaliableNewClick(articleId) {
          this._router.navigate(['/dashboard/article', articleId]);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return ArticleComponent;
    }();

    ArticleComponent.ɵfac = function ArticleComponent_Factory(t) {
      return new (t || ArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_provider_data_provider_service__WEBPACK_IMPORTED_MODULE_2__["DataProviderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    ArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ArticleComponent,
      selectors: [["app-article"]],
      decls: 3,
      vars: 2,
      consts: [["class", "news-loading--wrap", "id", "newsLoadingWrap", 4, "ngIf"], ["class", "new-wrap", "fxLayout", "row wrap", 4, "ngIf"], ["id", "newsLoadingWrap", 1, "news-loading--wrap"], [3, "loading"], ["fxLayout", "row wrap", 1, "new-wrap"], ["fxFlex.gt-lg", "70", "fxFlex.gt-sm", "70", "fxFlex.gt-xs", "70", "fxFlex", "100"], [1, "content"], [1, "title"], [1, "sub-title"], [1, "info-wrap"], [1, "item-image"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 50 50", "width", "50", "height", "50", 2, "isolation", "isolate"], ["id", "_clipPath_h6siApcW5haSYj471cOiLoTkQ5GuPVMC"], ["width", "50", "height", "50"], ["clip-path", "url(#_clipPath_h6siApcW5haSYj471cOiLoTkQ5GuPVMC)"], ["d", " M 13.462 0 C 12.304 0 11.538 0.765 11.538 1.923 L 11.538 7.692 C 11.538 8.85 12.304 9.615 13.462 9.615 C 14.619 9.615 15.385 8.85 15.385 7.692 L 15.385 1.923 C 15.385 0.765 14.619 0 13.462 0 Z  M 36.538 0 C 35.381 0 34.615 0.765 34.615 1.923 L 34.615 7.692 C 34.615 8.85 35.381 9.615 36.538 9.615 C 37.696 9.615 38.462 8.85 38.462 7.692 L 38.462 1.923 C 38.462 0.765 37.696 0 36.538 0 Z  M 5.769 3.846 C 2.5 3.846 0 6.346 0 9.615 L 0 44.231 C 0 47.5 2.5 50 5.769 50 L 44.231 50 C 47.5 50 50 47.5 50 44.231 L 50 9.615 C 50 6.346 47.5 3.846 44.231 3.846 L 40.385 3.846 L 40.385 7.692 C 40.385 9.812 38.658 11.538 36.538 11.538 C 34.419 11.538 32.692 9.812 32.692 7.692 L 32.692 3.846 L 17.308 3.846 L 17.308 7.692 C 17.308 9.812 15.581 11.538 13.462 11.538 C 11.342 11.538 9.615 9.812 9.615 7.692 L 9.615 3.846 L 5.769 3.846 Z  M 3.846 17.308 L 46.154 17.308 L 46.154 44.231 C 46.154 45.388 45.388 46.154 44.231 46.154 L 5.769 46.154 C 4.612 46.154 3.846 45.388 3.846 44.231 L 3.846 17.308 Z ", "fill", "rgb(102,205,225)"], [1, "item-text"], [1, "item-image", "m-l-40"], ["clip-path", "url(#_clipPath_caW4r33hPyf9t0ZMLjuWjgFXn70SV031)"], ["d", " M 25.007 10.105 C 7.149 10.105 0.338 24.305 0.338 24.305 L 0 25 L 0.338 25.695 C 0.338 25.695 7.149 39.895 25.007 39.895 C 42.864 39.895 49.676 25.695 49.676 25.695 L 50 25 L 49.676 24.305 C 49.676 24.305 42.864 10.105 25.007 10.105 Z  M 25.007 13.415 C 31.421 13.415 36.591 18.589 36.591 25 C 36.591 31.415 31.418 36.585 25.007 36.585 C 21.933 36.59 18.983 35.371 16.809 33.198 C 14.635 31.024 13.417 28.074 13.422 25 C 13.422 18.585 18.595 13.415 25.007 13.415 Z  M 13.227 15.987 C 11.218 18.563 10.123 21.734 10.112 25 C 10.112 28.399 11.303 31.504 13.227 34.013 C 6.878 30.859 4.293 25.837 3.879 25 C 4.293 24.159 6.878 19.141 13.227 15.987 Z  M 36.787 15.987 C 43.135 19.141 45.72 24.163 46.134 25 C 45.72 25.841 43.135 30.859 36.787 34.013 C 38.795 31.437 39.891 28.266 39.901 25 C 39.901 21.601 38.71 18.496 36.787 15.987 Z  M 25.007 20.035 C 22.265 20.035 20.042 22.258 20.042 25 C 20.042 27.742 22.265 29.965 25.007 29.965 C 27.749 29.965 29.972 27.742 29.972 25 C 29.972 22.258 27.749 20.035 25.007 20.035 Z ", "fill", "rgb(102,205,225)"], [1, "content-media"], ["class", "gallery-arrow left", 3, "click", 4, "ngIf"], ["class", "gallery-arrow right", 3, "click", 4, "ngIf"], ["id", "article-image", "alt", "Photo", 1, "img-card", 3, "src", "click"], ["fxLayout", "row wrap"], [1, "full-text"], [1, "comment_block"], [1, "new_comment"], [1, "user_comment"], [1, "user_avatar"], ["id", "_clipPath_ktfHpwWWsq4PFwxnVxqn8bV2rWMC5imV"], ["clip-path", "url(#_clipPath_ktfHpwWWsq4PFwxnVxqn8bV2rWMC5imV)"], ["d", " M 25 0 C 11.215 0 0 11.215 0 25 C 0 38.785 11.215 50 25 50 C 38.785 50 50 38.785 50 25 C 50 11.215 38.785 0 25 0 Z  M 25 3.846 C 36.704 3.846 46.154 13.296 46.154 25 C 46.159 30.272 44.186 35.354 40.625 39.242 C 39.183 36.59 34.938 34.413 30.408 33.473 C 30.408 33.473 28.246 32.888 29.208 30.769 C 30.552 29.042 31.369 27.14 31.369 26.562 C 31.369 26.562 33.279 25.023 33.473 22.715 C 33.669 20.598 33.054 20.373 33.054 20.373 C 33.819 17.871 34.029 8.458 28.065 9.615 C 27.104 7.692 20.794 6.167 17.91 11.358 C 16.563 13.86 15.962 17.504 17.308 20.192 C 17.308 20.388 16.904 19.99 16.706 21.335 C 16.706 22.679 17.331 24.594 17.91 25.362 C 18.104 25.744 18.487 25.946 18.871 26.142 C 18.871 26.142 19.246 28.469 20.973 30.588 C 21.358 32.317 19.59 33.292 19.59 33.292 C 14.904 34.233 10.644 36.412 9.194 39.062 C 5.74 35.193 3.836 30.186 3.846 25 C 3.846 13.296 13.296 3.846 25 3.846 Z ", "fill", "rgb(102,205,225)"], [1, "comment_body"], [1, "comment_toolbar"], [1, "comment_details"], [1, "fa", "fa-clock-o"], [1, "fa", "fa-calendar"], [1, "fa", "fa-pencil"], [1, "user"], ["src", "../../../assets/images/icons/user.svg"], [1, "replied_to"], ["fxFlex.gt-lg", "30", "fxFlex.gt-sm", "30", "fxFlex.gt-xs", "30", "fxFlex", "100", 1, "content-news--wrap"], [1, "title", "m-l-40"], ["class", "content-news--item content-media-news--list m-l-0 m-t-5", 3, "click", 4, "ngFor", "ngForOf"], [1, "gallery-arrow", "left", 3, "click"], ["id", "_clipPath_02iJG4Q0WqADHYhCKuzfWJTivKCAKaZE"], ["clip-path", "url(#_clipPath_02iJG4Q0WqADHYhCKuzfWJTivKCAKaZE)"], ["d", " M 21.587 25 L 39.474 6.737 C 40.272 5.921 40.265 4.615 39.458 3.808 L 36.26 0.61 C 35.868 0.218 35.335 -0.002 34.781 0 C 34.226 0.002 33.695 0.224 33.306 0.618 L 10.543 23.527 C 10.151 23.917 9.931 24.447 9.932 25 C 9.931 25.553 10.151 26.083 10.543 26.473 L 33.306 49.382 C 33.695 49.776 34.226 49.998 34.781 50 C 35.335 50.002 35.868 49.782 36.26 49.39 L 39.458 46.192 C 40.265 45.385 40.272 44.079 39.474 43.263 L 21.587 25 Z ", "fill", "rgb(151,195,204)", "fill-opacity", "0.6"], [1, "gallery-arrow", "right", 3, "click"], ["id", "_clipPath_1kWOPk1YnF5bN8kqXHTXsDqNElY9RXG2"], ["clip-path", "url(#_clipPath_1kWOPk1YnF5bN8kqXHTXsDqNElY9RXG2)"], ["d", " M 28.413 25 L 10.526 43.263 C 9.728 44.079 9.735 45.385 10.542 46.192 L 13.74 49.39 C 14.132 49.782 14.665 50.002 15.219 50 C 15.774 49.998 16.305 49.776 16.694 49.382 L 39.457 26.473 C 39.849 26.083 40.069 25.553 40.068 25 C 40.069 24.447 39.849 23.917 39.457 23.527 L 16.694 0.618 C 16.305 0.224 15.774 0.002 15.219 0 C 14.665 -0.002 14.132 0.218 13.74 0.61 L 10.542 3.808 C 9.735 4.615 9.728 5.921 10.526 6.737 L 28.413 25 Z ", "fill", "rgb(150,195,204)", "fill-opacity", "0.6"], [1, "content-news--item", "content-media-news--list", "m-l-0", "m-t-5", 3, "click"], ["alt", "Photo", 1, "img-card", 3, "src"], [1, "info-wrap", "right", "m-0", 2, "margin", "0px"]],
      template: function ArticleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArticleComponent_div_1_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ArticleComponent_div_2_Template, 89, 8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_loading_component_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: [".position-relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.add-contact[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 17px;\n  top: 57px;\n}\n\n.welcome-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n}\n\n.welcome-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -50px;\n  height: 500px;\n  z-index: 1;\n  width: 100%;\n}\n\n.welcome-wrap[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -50px;\n  height: 500px;\n  z-index: 1;\n  width: 100%;\n}\n\n.welcome-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  height: 500px;\n}\n\n.welcome-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  color: #0d70b4;\n  font-size: 4rem;\n  z-index: 100;\n}\n\n.welcome-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1.size-8[_ngcontent-%COMP%] {\n  font-size: 8rem;\n}\n\n@media (max-width: 500px) {\n  .welcome-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n  .welcome-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1.size-8[_ngcontent-%COMP%] {\n    font-size: 4rem;\n  }\n}\n\n.news-loading--wrap[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.new-wrap[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  width: 80%;\n  margin: auto;\n}\n\n.new-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding: 1px;\n}\n\n.new-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #0d70b4;\n}\n\n.new-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.new-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .full-text[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n  text-align: justify;\n  width: 100%;\n}\n\n.content-media-news--list[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n.content-media-news--list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  cursor: pointer;\n}\n\n.content-media-news--list[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  cursor: pointer;\n}\n\n.content-media[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  width: 100%;\n  background-color: #eaf3f5;\n  display: flex;\n  position: relative;\n}\n\n.content-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 400px;\n}\n\n.content-media[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 400px;\n}\n\n.content-media[_ngcontent-%COMP%]   .img-card[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  cursor: pointer;\n}\n\n.content-media[_ngcontent-%COMP%]   .gallery-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #ffffff00;\n  top: calc(50% - 25px);\n}\n\n.content-media[_ngcontent-%COMP%]   .gallery-arrow[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background-color: #f3f8f900;\n  cursor: pointer;\n}\n\n.content-media[_ngcontent-%COMP%]   .gallery-arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  background-color: #f3f8f900;\n  cursor: pointer;\n}\n\n.content-media[_ngcontent-%COMP%]   .gallery-arrow.left[_ngcontent-%COMP%] {\n  left: 0px;\n}\n\n.content-media[_ngcontent-%COMP%]   .gallery-arrow.right[_ngcontent-%COMP%] {\n  right: 0px;\n}\n\n.img-animation[_ngcontent-%COMP%] {\n  -webkit-animation: fade-in 0.3s ease-in-out;\n          animation: fade-in 0.3s ease-in-out;\n}\n\n@-webkit-keyframes fade-in {\n  from {\n    opacity: 70%;\n  }\n  to {\n    opacity: 100%;\n  }\n}\n\n@keyframes fade-in {\n  from {\n    opacity: 70%;\n  }\n  to {\n    opacity: 100%;\n  }\n}\n\n.info-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-self: center;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.info-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 1.5em;\n  width: 1.5em;\n}\n\n.info-wrap[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 1.5em;\n  width: 1.5em;\n}\n\n.info-wrap[_ngcontent-%COMP%]   .item-text[_ngcontent-%COMP%] {\n  color: #a5a5a5;\n  margin-left: 10px;\n  position: relative;\n}\n\n.info-wrap.right[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.content-news--item[_ngcontent-%COMP%] {\n  margin-left: 50px;\n}\n\n.content-news--wrap[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n\n.content-news--wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  background-color: #f3f8f9;\n  text-align: center;\n}\n\n.content-news--wrap[_ngcontent-%COMP%]   .info-wrap[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n}\n\n.user_avatar[_ngcontent-%COMP%] {\n  width: 65px;\n  height: 65px;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.user_avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n\n.user_avatar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n\n.comment_block[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0 auto;\n}\n\n.comment_block[_ngcontent-%COMP%]   .create_new_comment[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px 0;\n}\n\n.comment_block[_ngcontent-%COMP%]   .create_new_comment[_ngcontent-%COMP%]   .input_comment[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 10px;\n  width: calc(100% - 75px);\n}\n\n.comment_block[_ngcontent-%COMP%]   .create_new_comment[_ngcontent-%COMP%]   .input_comment[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\n  width: 100%;\n  font-family: \"Lato\", sans-serif;\n  font-weight: 300;\n  font-size: 1.3rem;\n  padding: 10px;\n  border: none;\n  border-bottom: 2px solid #f2f2f2;\n}\n\n.comment_block[_ngcontent-%COMP%]   .create_new_comment[_ngcontent-%COMP%]   .input_comment[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-bottom: 2px solid #e6e5e5;\n}\n\n.comment_block[_ngcontent-%COMP%]   .new_comment[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  border-top: 1px solid #e6e5e5;\n}\n\n.comment_block[_ngcontent-%COMP%]   .new_comment[_ngcontent-%COMP%]   .user_comment[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding-left: 0px;\n}\n\n.comment_block[_ngcontent-%COMP%]   .new_comment[_ngcontent-%COMP%]   .comment_body[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  width: calc(100% - 75px);\n  min-height: 65px;\n  margin-left: 10px;\n  padding: 5px 10px;\n  font-size: 0.9rem;\n  color: #555;\n  background-color: #fff;\n  border-bottom: 2px solid #f2f2f2;\n}\n\n.comment_block[_ngcontent-%COMP%]   .new_comment[_ngcontent-%COMP%]   .comment_body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.comment_block[_ngcontent-%COMP%]   .new_comment[_ngcontent-%COMP%]   .comment_body[_ngcontent-%COMP%]   .replied_to[_ngcontent-%COMP%] {\n  margin: 5px 0px;\n  background-color: #fafafa;\n  border-bottom: 2px solid #f2f2f2;\n  border-radius: 5px;\n}\n\n.comment_block[_ngcontent-%COMP%]   .new_comment[_ngcontent-%COMP%]   .comment_body[_ngcontent-%COMP%]   .replied_to[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.comment_block[_ngcontent-%COMP%]   .new_comment[_ngcontent-%COMP%]   .comment_body[_ngcontent-%COMP%]   .replied_to[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #6495ed;\n  margin-right: 2px;\n}\n\n.comment_block[_ngcontent-%COMP%]   .new_comment[_ngcontent-%COMP%]   .comment_toolbar[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.comment_block[_ngcontent-%COMP%]   .new_comment[_ngcontent-%COMP%]   .comment_toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  font-size: 0;\n}\n\n.comment_block[_ngcontent-%COMP%]   .new_comment[_ngcontent-%COMP%]   .comment_toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 5px;\n  font-size: 0.7rem;\n  color: #a5a5a5;\n}\n\n.comment_block[_ngcontent-%COMP%]   .new_comment[_ngcontent-%COMP%]   .comment_toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.comment_block[_ngcontent-%COMP%]   .new_comment[_ngcontent-%COMP%]   .comment_toolbar[_ngcontent-%COMP%]   .comment_details[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  width: 100%;\n  text-align: right;\n}\n\n.comment_block[_ngcontent-%COMP%]   .new_comment[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]:hover {\n  color: #6495ed;\n  text-decoration: underline;\n}\n\n.comment_block[_ngcontent-%COMP%]   .new_comment[_ngcontent-%COMP%]   .love[_ngcontent-%COMP%]:hover {\n  color: #ff6347;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFIQTtFQUlJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLFVBQVU7RUFDVixXQUFXO0FBR2Y7O0FBWEE7RUFXSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixVQUFVO0VBQ1YsV0FBVztBQUlmOztBQW5CQTtFQWtCSSxhQUFhO0FBS2pCOztBQXZCQTtFQW9CTSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtBQU9sQjs7QUEvQkE7RUEwQlEsZUFBZTtBQVN2Qjs7QUFIQTtFQUNFO0lBR00sZUFBZTtFQUlyQjtFQVBBO0lBS1EsZUFBZTtFQUt2QjtBQUNGOztBQUNBO0VBQ0Usa0JBQWtCO0FBRXBCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixZQUFZO0FBRWQ7O0FBTEE7RUFNSSxZQUFZO0FBR2hCOztBQVRBO0VBU00sa0JBQWtCO0VBQ2xCLGNBQWM7QUFJcEI7O0FBZEE7RUFlSSxZQUFZO0FBR2hCOztBQWxCQTtFQWlCTSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFdBQVc7QUFLakI7O0FBQUE7RUFDRSxtQkFBbUI7QUFHckI7O0FBSkE7RUFHSSxXQUFXO0VBQ1gsZUFBZTtBQUtuQjs7QUFUQTtFQU9JLFdBQVc7RUFDWCxlQUFlO0FBTW5COztBQUZBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGtCQUFrQjtBQUtwQjs7QUFWQTtFQU9JLGVBQWU7RUFDZixpQkFBaUI7QUFPckI7O0FBZkE7RUFXSSxlQUFlO0VBQ2YsaUJBQWlCO0FBUXJCOztBQXBCQTtFQWdCSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlO0FBUW5COztBQTNCQTtFQXNCSSxrQkFBa0I7RUFFbEIsMkJBQTJCO0VBQzNCLHFCQUFxQjtBQVF6Qjs7QUFqQ0E7RUEyQk0sMkJBQTJCO0VBQzNCLGVBQWU7QUFVckI7O0FBdENBO0VBK0JNLDJCQUEyQjtFQUMzQixlQUFlO0FBV3JCOztBQTNDQTtFQW1DTSxTQUFTO0FBWWY7O0FBL0NBO0VBc0NNLFVBQVU7QUFhaEI7O0FBUkE7RUFDRSwyQ0FBbUM7VUFBbkMsbUNBQW1DO0FBV3JDOztBQVJBO0VBQ0U7SUFDRSxZQUFZO0VBV2Q7RUFUQTtJQUNFLGFBQWE7RUFXZjtBQUNGOztBQWpCQTtFQUNFO0lBQ0UsWUFBWTtFQVdkO0VBVEE7SUFDRSxhQUFhO0VBV2Y7QUFDRjs7QUFSQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQVdyQjs7QUFmQTtFQU1JLGFBQWE7RUFDYixZQUFZO0FBYWhCOztBQXBCQTtFQVVJLGFBQWE7RUFDYixZQUFZO0FBY2hCOztBQXpCQTtFQWNJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBZXRCOztBQS9CQTtFQW1CSSx5QkFBeUI7QUFnQjdCOztBQVpBO0VBQ0UsaUJBQWlCO0FBZW5COztBQWJBO0VBQ0UsZ0JBQWdCO0FBZ0JsQjs7QUFqQkE7RUFNSSx5QkFBeUI7RUFDekIsa0JBQWtCO0FBZXRCOztBQXRCQTtFQVVJLGdCQUFnQjtBQWdCcEI7O0FBS0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUVaLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFIeEI7O0FBRkE7RUFRSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUZ0Qjs7QUFSQTtFQWFJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBRHRCOztBQUtBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFGaEI7O0FBQUE7RUFLSSxXQUFXO0VBQ1gsZUFBZTtBQURuQjs7QUFMQTtFQVNNLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFFdEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtBQUQ5Qjs7QUFaQTtFQWdCUSxXQUFXO0VBRVgsK0JBbkRpQjtFQW9EakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUVqQixhQUFhO0VBRWIsWUFBWTtFQUNaLGdDQUE0QztBQUhwRDs7QUF0QkE7RUE0QlUsYUFBYTtFQUNiLGdDQUE0QztBQUZ0RDs7QUEzQkE7RUFvQ0ksV0FBVztFQUNYLFlBQVk7RUFFWiw2QkFBeUM7QUFON0M7O0FBakNBO0VBMENNLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFMdkI7O0FBdENBO0VBK0NNLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFFdEIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsc0JBakZNO0VBa0ZOLGdDQUE0QztBQU5sRDs7QUFuREE7RUEyRFEsc0JBcEZJO0FBZ0ZaOztBQXZEQTtFQThEUSxlQUFlO0VBQ2YseUJBQXFDO0VBQ3JDLGdDQUE0QztFQUM1QyxrQkFBa0I7QUFIMUI7O0FBOURBO0VBbUVVLFlBQVk7QUFEdEI7O0FBbEVBO0VBc0VVLGNBNUZJO0VBNkZKLGlCQUFpQjtBQUEzQjs7QUF2RUE7RUE2RU0sV0FBVztBQUZqQjs7QUEzRUE7RUFnRlEscUJBQXFCO0VBRXJCLFlBQVk7QUFGcEI7O0FBaEZBO0VBcUZVLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7QUFEeEI7O0FBdkZBO0VBMEZZLGVBQWU7QUFDM0I7O0FBM0ZBO0VBZ0dRLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGlCQUFpQjtBQUR6Qjs7QUFsR0E7RUF5R1EsY0EvSE07RUFnSU4sMEJBQTBCO0FBSGxDOztBQXZHQTtFQWdIUSxjQXJJSztBQWdJYiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zaXRpb24tcmVsYXRpdmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmFkZC1jb250YWN0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE3cHg7XHJcbiAgdG9wOiA1N3B4O1xyXG59XHJcblxyXG4ud2VsY29tZS13cmFwIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBzdmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtNTBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC50aXRsZSB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgaDEge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICMwZDcwYjQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAmLnNpemUtOCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA4cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAud2VsY29tZS13cmFwIHtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgJi5zaXplLTgge1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm5ld3MtbG9hZGluZy0td3JhcCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubmV3LXdyYXAge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgLnRpdGxlIHtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmZmO1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogIzBkNzBiNDtcclxuICAgICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjtcclxuICAgIH1cclxuICB9XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgLmZ1bGwtdGV4dCB7XHJcbiAgICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW50LW1lZGlhLW5ld3MtLWxpc3Qge1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBzdmcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGVudC1tZWRpYSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFmM2Y1O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICB9XHJcbiAgc3ZnIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gIH1cclxuICAuaW1nLWNhcmQge1xyXG4gICAgLy8gICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLmdhbGxlcnktYXJyb3cge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjAwO1xyXG4gICAgdG9wOiBjYWxjKDUwJSAtIDI1cHgpO1xyXG4gICAgaW1nIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjhmOTAwO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBzdmcge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmOGY5MDA7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgICYubGVmdCB7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgIH1cclxuICAgICYucmlnaHQge1xyXG4gICAgICByaWdodDogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmltZy1hbmltYXRpb24ge1xyXG4gIGFuaW1hdGlvbjogZmFkZS1pbiAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogNzAlO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLmluZm8td3JhcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDEuNWVtO1xyXG4gICAgd2lkdGg6IDEuNWVtO1xyXG4gIH1cclxuICBzdmcge1xyXG4gICAgaGVpZ2h0OiAxLjVlbTtcclxuICAgIHdpZHRoOiAxLjVlbTtcclxuICB9XHJcbiAgLml0ZW0tdGV4dCB7XHJcbiAgICBjb2xvcjogI2E1YTVhNTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAmLnJpZ2h0IHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGVudC1uZXdzLS1pdGVtIHtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG4uY29udGVudC1uZXdzLS13cmFwIHtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIC8vICAgbWF4LWhlaWdodDogNzAwcHg7XHJcbiAgLy8gICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIC50aXRsZSB7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y4Zjk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5pbmZvLXdyYXAge1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGNvbW1lbnQgc2VjdGlvblxyXG4vLyBodHRwczovL2NvZGVwZW4uaW8vZGFubXYvcGVuL1ZCVktPVlxyXG5cclxuJExBVE86IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG5cclxuJEdSRVk6ICNjY2M7XHJcbiRCQUNLR1JPVU5EX0dSRVk6IGxpZ2h0ZW4oI2VlZWRlZCwgMi41JSk7XHJcbiRTVUJUTEVfR1JFWTogI2YyZjJmMjtcclxuJE1VUktZX0dSRVk6ICMzODQxNDg7XHJcbiREQVJLX0dSRVk6ICMzMzM7XHJcblxyXG4kV0hJVEU6ICNmZmY7XHJcbiRTVUJUTEVfV0hJVEU6ICNmOWY5Zjk7XHJcblxyXG4kQkxVRTogIzY0OTVlZDtcclxuJFJFRDogI2ZmNjM0NztcclxuXHJcbi51c2VyX2F2YXRhciB7XHJcbiAgd2lkdGg6IDY1cHg7XHJcbiAgaGVpZ2h0OiA2NXB4O1xyXG5cclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICBzdmcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG59XHJcblxyXG4uY29tbWVudF9ibG9jayB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAuY3JlYXRlX25ld19jb21tZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG5cclxuICAgIC5pbnB1dF9jb21tZW50IHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA3NXB4KTtcclxuXHJcbiAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRMQVRPO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcblxyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRlbigkR1JFWSwgMTUlKTtcclxuXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0ZW4oJEdSRVksIDEwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubmV3X2NvbW1lbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAvLyBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRlbigkR1JFWSwgMTAlKTtcclxuXHJcbiAgICAudXNlcl9jb21tZW50IHtcclxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29tbWVudF9ib2R5IHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDc1cHgpO1xyXG4gICAgICBtaW4taGVpZ2h0OiA2NXB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICBjb2xvcjogIzU1NTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJFdISVRFO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRlbigkR1JFWSwgMTUlKTtcclxuICAgICAgcCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJFdISVRFO1xyXG4gICAgICB9XHJcbiAgICAgIC5yZXBsaWVkX3RvIHtcclxuICAgICAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkR1JFWSwgMTglKTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRlbigkR1JFWSwgMTUlKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgY29sb3I6ICRCTFVFO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbW1lbnRfdG9vbGJhciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgdWwge1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDc1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwO1xyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICAgIGNvbG9yOiAjYTVhNWE1O1xyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb21tZW50X2RldGFpbHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXIge1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJEJMVUU7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubG92ZSB7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkUkVEO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-article',
          templateUrl: './article.component.html',
          styleUrls: ['./article.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _data_provider_data_provider_service__WEBPACK_IMPORTED_MODULE_2__["DataProviderService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent, NewItem */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewItem", function () {
      return NewItem;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var app_data_provider_data_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! app/data-provider/data-provider.service */
    "./src/app/data-provider/data-provider.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _shared_loading_component_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/loading-component/loading.component */
    "./src/app/shared/loading-component/loading.component.ts");

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    var _c0 = ["newsLoadingWrap"];

    function DashboardComponent_div_18_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var new_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", new_r2.dateViewModel, " ");
      }
    }

    function DashboardComponent_div_18_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var new_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", new_r2.street, " ");
      }
    }

    function DashboardComponent_div_18_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var new_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", new_r2.time, " ");
      }
    }

    function DashboardComponent_div_18_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var new_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", new_r2.price, " ");
      }
    }

    function DashboardComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_18_Template_mat_card_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var new_r2 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.openNew(new_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DashboardComponent_div_18_div_12_Template, 7, 1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DashboardComponent_div_18_div_13_Template, 7, 1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DashboardComponent_div_18_div_15_Template, 7, 1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DashboardComponent_div_18_div_16_Template, 7, 1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var new_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", new_r2.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](new_r2.categoryName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](new_r2.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](new_r2.shortText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", new_r2.dateViewModel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", new_r2.street);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", new_r2.time);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", new_r2.price);
      }
    }

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(firestore, afAuth, _router, dateProvider) {
        _classCallCheck(this, DashboardComponent);

        this.firestore = firestore;
        this.afAuth = afAuth;
        this._router = _router;
        this.dateProvider = dateProvider;
        this.news = [];
        this.loading = true;
        this.lastPageReached = false;
        this.currentPage = 0;
        this.fireNews = [];
        this.dashboardItem = "dashboardItem"; // this.afAuth.signInAnonymously().then(r => {
        // 	console.log(r);
        // 	this.fireNewsObservable = this.firestore.collection('global_news').snapshotChanges();
        // 	this.fireNewsObservable?.subscribe(data => {
        // 		console.log(data)
        // 		this.fireNews = data.map(e => {
        // 		  console.log(e.payload.doc.id);
        // 		  console.log(e.payload.doc.data());
        // 		  return e;
        // 		});
        // 	});
        // })
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.loading = true;
                    this.dateProvider.init().then(function () {
                      _this2.dateProvider.getAll().then(function (res) {
                        _this2.fireNews = res;
                        _this2.loading = false;
                      });
                    }); // await this.afAuth.signInAnonymously();
                    // // let news = this.firestore.collection('global_news', ref => ref.limit(10)).get();
                    // const firstThreeRes = await this.firestore.collection('global_news').get();
                    // console.log(firstThreeRes);
                    // firstThreeRes.subscribe(e => {
                    // 	(e as any).docs.forEach((item: any) => {
                    // 		var el = this.ParseFirebaseItem(item.data());
                    // 		this.fireNews.push(el);
                    // 		console.log(JSON.stringify(el));
                    // 	});
                    // 	this.loading = false;
                    // });

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "InitScrollHandlers",
        value: function InitScrollHandlers() {
          var _this3 = this;

          var target = document.querySelector(".rm");
          var options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
          };
          this.scrollObserve = new IntersectionObserver(function (entry, observer) {
            if (!_this3.loading || !entry || entry.length === 0 || !entry[0] || entry[0].intersectionRatio !== 1) return;
            if (_this3.lastPageReached) return;
            console.log("Load content"); //this.loading = true;
            //setTimeout(() => { this.LoadContent() }, 2000);
          }, options);
          this.scrollObserve.observe(target);
        }
      }, {
        key: "LoadContent",
        value: function LoadContent() {
          var _a;

          var min = 1;
          var max = 13;

          for (var index = 0; index < 23; index++) {
            var randomImageId = (Math.random() * (max - min) + min).toString().split('.')[0];
            var item = new NewItem();
            item.fullText = "\u0417 1 \u043F\u043E 30 \u0432\u0435\u0440\u0435\u0441\u043D\u044F \u0436\u0438\u0442\u0435\u043B\u0456 \u043C\u0430\u043B\u0438 \u043C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044C \u043F\u043E\u0434\u0430\u0442\u0438 \u0441\u0432\u043E\u0457 \u043F\u0440\u043E\u0454\u043A\u0442\u0438 \u0434\u043E \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u0443, \u043F\u043E\u0442\u0456\u043C \u0432\u043E\u043D\u0438 \u043F\u0440\u043E\u0439\u0448\u043B\u0438 \u0432\u0456\u0434\u0431\u0456\u0440 \u0442\u0430 \u0435\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0443. \u0417 1 \u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434\u0430 \u0440\u043E\u0437\u043F\u043E\u0447\u0430\u0442\u043E \u0433\u043E\u043B\u043E\u0441\u0443\u0432\u0430\u043D\u043D\u044F, \u0434\u0435 \u043A\u043E\u0436\u0435\u043D \u0445\u0430\u0440\u043A\u0456\u0432\u2019\u044F\u043D\u0438\u043D \u043C\u043E\u0436\u0435 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043F\u2019\u044F\u0442\u044C \u043F\u0440\u043E\u0454\u043A\u0442\u0456\u0432, \u044F\u043A\u0456 \u043D\u0430 \u0439\u043E\u0433\u043E \u0434\u0443\u043C\u043A\u0443, \u043C\u0430\u0454 \u0440\u0435\u0430\u043B\u0456\u0437\u0443\u0432\u0430\u0442\u0438 \u043C\u0456\u0441\u044C\u043A\u0430 \u0432\u043B\u0430\u0434\u0430. \u0412\u0438 \u043C\u0430\u0454\u0442\u0435 \u043C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044C \u0432\u0456\u0434\u0434\u0430\u0442\u0438 \u0441\u0432\u0456\u0439 \u0433\u043E\u043B\u043E\u0441 \u0443 \u0437\u0440\u0443\u0447\u043D\u043E\u043C\u0443 \u0434\u043B\u044F \u0432\u0430\u0441 \u0444\u043E\u0440\u043C\u0430\u0442\u0456 \u044F\u043A \u043E\u043D\u043B\u0430\u0439\u043D, \u0442\u0430\u043A \u0456 \u043E\u0444\u0444\u043B\u0430\u0439\u043D:";
            item.shortText = "".concat(item.fullText.substring(0, 30), " ...");
            item.imageUrl = "assets/images/background/test/test-".concat(randomImageId, ".jpg");
            item.subtitle = "Презентация";
            item.title = "Херсон в смартфоні - для жителів створили новий додаток";

            if (index !== 0 && this.news.length !== 0) {
              var prevElt = this.news[index - 1];
              var prevImageID = (_a = prevElt.imageUrl) === null || _a === void 0 ? void 0 : _a.split('-')[1].split('.')[0];
              var newImageId = prevImageID;

              while (prevImageID === newImageId) {
                newImageId = (Math.random() * (max - min) + min).toString().split('.')[0];
              }

              item.imageUrl = "assets/images/background/test/test-".concat(newImageId, ".jpg");
            }

            this.news.push(item);
          }

          this.loading = true;
        }
      }, {
        key: "ParseFirebaseItem",
        value: function ParseFirebaseItem(itemData) {
          var item = {
            fullText: itemData.info,
            shortText: "".concat(itemData.info.substring(0, 20), " ..."),
            imageUrl: itemData.image_f_url[0] == undefined ? "assets/images/background/post-icon.svg" : itemData.image_f_url[0],
            subtitle: "",
            title: itemData.name,
            id: 0,
            category: itemData.category,
            categoryName: itemData.category_name,
            date: new Date(itemData.date.seconds),
            dateViewModel: Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(new Date(itemData.date.seconds), 'yyyy-MM-dd', 'en-US'),
            image_F_Url: itemData.image_f_url[0] == undefined ? "assets/images/background/post-icon.svg" : itemData.image_f_url[0],
            info: itemData.info,
            likes: itemData.likes,
            name: itemData.name,
            views: itemData.views
          };
          return item;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _a;

          (_a = this.scrollObserve) === null || _a === void 0 ? void 0 : _a.disconnect();
        }
      }, {
        key: "openNew",
        value: function openNew(item) {
          console.log("Open, ", item);

          this._router.navigate(['/dashboard/article', item.id], {
            state: item
          });
        }
      }, {
        key: "onArticleChoosed",
        value: function onArticleChoosed(event) {
          console.log("onArticleChoosed - dashboard comp");
          console.log(event);
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_data_provider_data_provider_service__WEBPACK_IMPORTED_MODULE_5__["DataProviderService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      viewQuery: function DashboardComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.newsLoadingWrap = _t.first);
        }
      },
      inputs: {
        testValue: "testValue"
      },
      decls: 24,
      vars: 2,
      consts: [["fxLayout", "row wrap"], ["fxFlex.gt-lg", "100", "fxFlex.gt-md", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "welcome-wrap"], [1, "title"], [1, "size-8"], ["mat-card-image", "", "src", "assets/images/background/city-big.svg", "alt", "Photo of a Shiba Inu"], [1, "news-wrap"], [1, "content"], [1, "description"], ["fxLayout", "row wrap", 1, "flex-center"], ["class", "card", "fxFlex.gt-lg", "20", "fxFlex.gt-sm", "25", "fxFlex.gt-xs", "50", "fxFlex", "100", "style", "max-width: 300px; min-width: 300px;", 4, "ngFor", "ngForOf"], ["id", "newsLoadingWrap", 1, "news-loading--wrap"], ["newsLoadingWrap", ""], [3, "loading"], [1, "rm"], ["fxFlex.gt-lg", "20", "fxFlex.gt-sm", "25", "fxFlex.gt-xs", "50", "fxFlex", "100", 1, "card", 2, "max-width", "300px", "min-width", "300px"], [3, "click"], ["mat-card-image", "", "alt", "Photo", 1, "img-card", 3, "src"], [1, "category-wrap"], [1, "card-addons"], [4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 26 26", "width", "1em", "height", "1em", 2, "isolation", "isolate"], ["clip-path", "url(#_clipPath_EVd9lJB4HovMdhnxVVxqTTuicQjRHtf9)"], ["d", " M 5.2 0 L 5.2 2.6 L 3.9 2.6 C 2.467 2.6 1.3 3.767 1.3 5.2 L 1.3 23.4 C 1.3 24.833 2.467 26 3.9 26 L 22.1 26 C 23.533 26 24.7 24.833 24.7 23.4 L 24.7 5.2 C 24.7 3.767 23.533 2.6 22.1 2.6 L 20.8 2.6 L 20.8 0 L 18.2 0 L 18.2 2.6 L 7.8 2.6 L 7.8 0 L 5.2 0 Z  M 3.9 9.1 L 22.1 9.1 L 22.1 23.4 L 3.9 23.4 L 3.9 9.1 Z ", "fill-rule", "evenodd", "fill", "rgb(102,205,255)"], [2, "color", "#a5a5a5", "margin-left", "3px", "position", "relative", "bottom", "2px"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041C\u043E\u0454 \u043C\u0456\u0441\u0442\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0425\u0435\u0440\u0441\u043E\u043D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041D\u043E\u0432\u0438\u043D\u0438 \u0442\u0430 \u0430\u0444\u0456\u0448\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0411\u0443\u0434\u044C\u0442\u0435 \u0432 \u043A\u0443\u0440\u0441\u0456 \u043D\u0430\u0439\u0446\u0456\u043A\u0430\u0432\u0456\u0448\u0438\u0445 \u043F\u043E\u0434i\u0439 \u0456 \u043E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u043E \u043F\u0440\u0438\u0454\u0434\u043D\u0443\u0439\u0442\u0435\u0441\u044C \u0434\u043E \u043D\u0430\u0448\u043E\u0457 \u0441\u0443\u0447\u0430\u0441\u043D\u043E\u0457 \u0441\u043F\u0456\u043B\u044C\u043D\u043E\u0442\u0438!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DashboardComponent_div_18_Template, 18, 8, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-bubble-loading", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fireNews);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.loading);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardImage"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _shared_loading_component_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".position-relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.add-contact[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 17px;\n  top: 57px;\n}\n\n.welcome-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n}\n\n.welcome-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -50px;\n  height: 500px;\n  z-index: 1;\n  width: 100%;\n}\n\n.welcome-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  height: 500px;\n}\n\n.welcome-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  color: #0d70b4;\n  font-size: 4rem;\n  z-index: 100;\n  margin-top: 50px;\n}\n\n.welcome-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1.size-8[_ngcontent-%COMP%] {\n  font-size: 8rem;\n}\n\n@media (max-width: 500px) {\n  .welcome-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n  .welcome-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1.size-8[_ngcontent-%COMP%] {\n    font-size: 4rem;\n  }\n}\n\n.news-loading--wrap[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.news-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  background-color: #ffff;\n  padding: 1px;\n}\n\n.news-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #0d70b4;\n}\n\n.news-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: auto;\n}\n\n.news-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n  text-align: center;\n  width: 100%;\n  margin: 2rem;\n}\n\n.news-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.join-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-bottom: 2rem;\n}\n\n.join-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #63a0c1;\n  color: white;\n}\n\n.img-card[_ngcontent-%COMP%] {\n  height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.card[_ngcontent-%COMP%] {\n  max-width: 300px !important;\n  min-width: 300px;\n  cursor: pointer;\n}\n\n.card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #5d5d5d;\n  background-color: #fff;\n  font-weight: 600;\n  line-height: 1.5em;\n  height: 3em;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n.card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #67757c;\n  line-height: 1.5em;\n  height: 3em;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n.category-wrap[_ngcontent-%COMP%] {\n  float: right;\n  font-size: 0.7em;\n  line-height: 1em;\n  background-color: #e4e4e4 !important;\n  padding: 5px 12px;\n  border-radius: 1em;\n}\n\n.card-addons[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  background-color: #fff;\n  display: flex;\n  justify-content: space-between;\n  height: 2rem;\n  line-height: 1.5em;\n}\n\n.flex-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.mat-card-actions[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%], .mat-card-subtitle[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.padding-10[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.rm[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.mat-card[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #fff;\n}\n\nmat-card[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.card[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFIQTtFQUlJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLFVBQVU7RUFDVixXQUFXO0FBR2Y7O0FBWEE7RUFXSSxhQUFhO0FBSWpCOztBQWZBO0VBYU0sa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7QUFNdEI7O0FBeEJBO0VBb0JRLGVBQWU7QUFRdkI7O0FBRkE7RUFDRTtJQUdNLGVBQWU7RUFHckI7RUFOQTtJQUtRLGVBQWU7RUFJdkI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUVJLHVCQUF1QjtFQUN2QixZQUFZO0FBQWhCOztBQUhBO0VBTU0sa0JBQWtCO0VBQ2xCLGNBQWM7QUFDcEI7O0FBUkE7RUFXSSxVQUFVO0VBQ1YsWUFBWTtBQUNoQjs7QUFiQTtFQWNNLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFHbEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFKQTtFQU1JLHlCQUF5QjtFQUN6QixZQUFZO0FBRWhCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBSkE7RUFTSSxlQUFlO0VBQ2YsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQiw0QkFBNEI7QUFEaEM7O0FBakJBO0VBdUJNLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQiw0QkFBNEI7QUFGbEM7O0FBT0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUpwQjs7QUFPQTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osa0JBQWtCO0FBSnBCOztBQU9BO0VBQ0UsdUJBQXVCO0FBSnpCOztBQU9BOzs7RUFHRSxrQkFBa0I7QUFKcEI7O0FBTUE7RUFDRSxXQUFXO0FBSGI7O0FBTUE7RUFDRSxhQUFhO0FBSGY7O0FBTUE7RUFDRSxrQkFBa0I7QUFIcEI7O0FBTUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBSHhCOztBQU1BO0VBQ0Usc0JBQXNCO0FBSHhCOztBQU1BO0VBQ0Usc0JBQXNCO0FBSHhCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3NpdGlvbi1yZWxhdGl2ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYWRkLWNvbnRhY3Qge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTdweDtcclxuICB0b3A6IDU3cHg7XHJcbn1cclxuXHJcbi53ZWxjb21lLXdyYXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBpbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtNTBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC50aXRsZSB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgaDEge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICMwZDcwYjQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAmLnNpemUtOCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA4cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAud2VsY29tZS13cmFwIHtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgJi5zaXplLTgge1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm5ld3MtbG9hZGluZy0td3JhcCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubmV3cy13cmFwIHtcclxuICAudGl0bGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcblxyXG4gICAgaDEge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjMGQ3MGI0O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY29udGVudCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogMnJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5uZXdzLXdyYXAgLnRpdGxlICoge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5qb2luLXdyYXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYzYTBjMTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi5pbWctY2FyZCB7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIG1heC13aWR0aDogMzAwcHggIWltcG9ydGFudDtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXQtY2FyZCB7XHJcbiAgICAvLyB3aWR0aDogMjUwcHg7XHJcbiAgfVxyXG5cclxuICBtYXQtY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzVkNWQ1ZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIH1cclxuXHJcbiAgbWF0LWNhcmQtY29udGVudCB7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogIzY3NzU3YztcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgICBoZWlnaHQ6IDNlbTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jYXRlZ29yeS13cmFwIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAwLjdlbTtcclxuICBsaW5lLWhlaWdodDogMWVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiA1cHggMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAxZW07XHJcbn1cclxuXHJcbi5jYXJkLWFkZG9ucyB7XHJcbiAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG59XHJcblxyXG4uZmxleC1jZW50ZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtYWN0aW9ucyxcclxuLm1hdC1jYXJkLWNvbnRlbnQsXHJcbi5tYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbmhyIHtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLnBhZGRpbmctMTAge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5ybSB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4ubWF0LWNhcmQgLm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxubWF0LWNhcmQgKiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmNhcmQgKiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: app_data_provider_data_provider_service__WEBPACK_IMPORTED_MODULE_5__["DataProviderService"]
        }];
      }, {
        newsLoadingWrap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['newsLoadingWrap']
        }],
        testValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var NewItem = function NewItem() {
      _classCallCheck(this, NewItem);

      this.likes = 0;
      this.views = 0;
    };
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/dashboard/dashboard.module.ts ***!
    \***********************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _demo_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../demo-material-module */
    "./src/app/demo-material-module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _dashboard_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard.routing */
    "./src/app/dashboard/dashboard.routing.ts");
    /* harmony import */


    var ng_chartist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-chartist */
    "./node_modules/ng-chartist/__ivy_ngcc__/fesm2015/ng-chartist.js");
    /* harmony import */


    var _shared_loading_component_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/loading-component/loading.component */
    "./src/app/shared/loading-component/loading.component.ts");
    /* harmony import */


    var _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./article-list/article-list.component */
    "./src/app/dashboard/article-list/article-list.component.ts");
    /* harmony import */


    var _article_article_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./article/article.component */
    "./src/app/dashboard/article/article.component.ts");

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DashboardModule
    });
    DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DashboardModule_Factory(t) {
        return new (t || DashboardModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _demo_material_module__WEBPACK_IMPORTED_MODULE_3__["DemoMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_7__["ChartistModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_6__["DashboardRoutes"])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, {
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], _shared_loading_component_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_9__["ArticleListComponent"], _article_article_component__WEBPACK_IMPORTED_MODULE_10__["ArticleComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _demo_material_module__WEBPACK_IMPORTED_MODULE_3__["DemoMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_7__["ChartistModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_9__["ArticleListComponent"], _article_article_component__WEBPACK_IMPORTED_MODULE_10__["ArticleComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _demo_material_module__WEBPACK_IMPORTED_MODULE_3__["DemoMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_7__["ChartistModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_6__["DashboardRoutes"])],
          declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], _shared_loading_component_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_9__["ArticleListComponent"], _article_article_component__WEBPACK_IMPORTED_MODULE_10__["ArticleComponent"]],
          exports: [_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_9__["ArticleListComponent"], _article_article_component__WEBPACK_IMPORTED_MODULE_10__["ArticleComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.routing.ts":
  /*!************************************************!*\
    !*** ./src/app/dashboard/dashboard.routing.ts ***!
    \************************************************/

  /*! exports provided: DashboardRoutes */

  /***/
  function srcAppDashboardDashboardRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRoutes", function () {
      return DashboardRoutes;
    });
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _article_article_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./article/article.component */
    "./src/app/dashboard/article/article.component.ts");
    /* harmony import */


    var app_material_component_destination_tab_destination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/material-component/destination-tab/destination.component */
    "./src/app/material-component/destination-tab/destination.component.ts");

    var DashboardRoutes = [{
      path: 'article/:id',
      component: _article_article_component__WEBPACK_IMPORTED_MODULE_1__["ArticleComponent"]
    }, {
      path: 'destination',
      component: app_material_component_destination_tab_destination_component__WEBPACK_IMPORTED_MODULE_2__["DestinationComponent"]
    }, {
      path: '',
      component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"],
      children: []
    }];
    /***/
  },

  /***/
  "./src/app/shared/loading-component/loading.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/loading-component/loading.component.ts ***!
    \***************************************************************/

  /*! exports provided: LoadingComponent */

  /***/
  function srcAppSharedLoadingComponentLoadingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingComponent", function () {
      return LoadingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoadingComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "circle", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "animate", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "animate", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "circle", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "animate", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "animate", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "circle", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "animate", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "animate", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "circle", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "animate", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "animate", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "circle", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "animate", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "animate", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoadingComponent = /*#__PURE__*/function () {
      function LoadingComponent() {
        _classCallCheck(this, LoadingComponent);

        this.loading = true;
      }

      _createClass(LoadingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return LoadingComponent;
    }();

    LoadingComponent.ɵfac = function LoadingComponent_Factory(t) {
      return new (t || LoadingComponent)();
    };

    LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoadingComponent,
      selectors: [["app-bubble-loading"]],
      inputs: {
        loading: "loading"
      },
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "100px", "height", "100px", "viewBox", "0 0 100 100", "preserveAspectRatio", "xMidYMid"], ["cx", "84", "cy", "50", "r", "10", "fill", "#e15b64"], ["attributeName", "r", "repeatCount", "indefinite", "dur", "0.25s", "calcMode", "spline", "keyTimes", "0;1", "values", "10;0", "keySplines", "0 0.5 0.5 1", "begin", "0s"], ["attributeName", "fill", "repeatCount", "indefinite", "dur", "1s", "calcMode", "discrete", "keyTimes", "0;0.25;0.5;0.75;1", "values", "#e15b64;#abbd81;#f8b26a;#f47e60;#e15b64", "begin", "0s"], ["cx", "16", "cy", "50", "r", "10", "fill", "#e15b64"], ["attributeName", "r", "repeatCount", "indefinite", "dur", "1s", "calcMode", "spline", "keyTimes", "0;0.25;0.5;0.75;1", "values", "0;0;10;10;10", "keySplines", "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1", "begin", "0s"], ["attributeName", "cx", "repeatCount", "indefinite", "dur", "1s", "calcMode", "spline", "keyTimes", "0;0.25;0.5;0.75;1", "values", "16;16;16;50;84", "keySplines", "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1", "begin", "0s"], ["cx", "50", "cy", "50", "r", "10", "fill", "#f47e60"], ["attributeName", "r", "repeatCount", "indefinite", "dur", "1s", "calcMode", "spline", "keyTimes", "0;0.25;0.5;0.75;1", "values", "0;0;10;10;10", "keySplines", "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1", "begin", "-0.25s"], ["attributeName", "cx", "repeatCount", "indefinite", "dur", "1s", "calcMode", "spline", "keyTimes", "0;0.25;0.5;0.75;1", "values", "16;16;16;50;84", "keySplines", "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1", "begin", "-0.25s"], ["cx", "84", "cy", "50", "r", "10", "fill", "#f8b26a"], ["attributeName", "r", "repeatCount", "indefinite", "dur", "1s", "calcMode", "spline", "keyTimes", "0;0.25;0.5;0.75;1", "values", "0;0;10;10;10", "keySplines", "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1", "begin", "-0.5s"], ["attributeName", "cx", "repeatCount", "indefinite", "dur", "1s", "calcMode", "spline", "keyTimes", "0;0.25;0.5;0.75;1", "values", "16;16;16;50;84", "keySplines", "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1", "begin", "-0.5s"], ["cx", "16", "cy", "50", "r", "10", "fill", "#abbd81"], ["attributeName", "r", "repeatCount", "indefinite", "dur", "1s", "calcMode", "spline", "keyTimes", "0;0.25;0.5;0.75;1", "values", "0;0;10;10;10", "keySplines", "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1", "begin", "-0.75s"], ["attributeName", "cx", "repeatCount", "indefinite", "dur", "1s", "calcMode", "spline", "keyTimes", "0;0.25;0.5;0.75;1", "values", "16;16;16;50;84", "keySplines", "0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1", "begin", "-0.75s"]],
      template: function LoadingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoadingComponent_div_0_Template, 17, 0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sb2FkaW5nLWNvbXBvbmVudC9sb2FkaW5nLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bubble-loading',
          templateUrl: './loading.component.html',
          styleUrls: ['./loading.component.scss']
        }]
      }], function () {
        return [];
      }, {
        loading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map
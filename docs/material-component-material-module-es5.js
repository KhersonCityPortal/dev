function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["material-component-material-module"], {
  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/drag-drop.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/drag-drop.js ***!
    \*********************************************************************/

  /*! exports provided: DragDrop, DragRef, DropListRef, CdkDropList, CDK_DROP_LIST, CDK_DROP_LIST_CONTAINER, moveItemInArray, transferArrayItem, copyArrayItem, DragDropModule, DragDropRegistry, CdkDropListGroup, CDK_DRAG_CONFIG_FACTORY, CDK_DRAG_CONFIG, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder, ɵb */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Esm2015DragDropJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragDrop", function () {
      return DragDrop;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragRef", function () {
      return DragRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropListRef", function () {
      return DropListRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkDropList", function () {
      return CdkDropList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST", function () {
      return CDK_DROP_LIST;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST_CONTAINER", function () {
      return CDK_DROP_LIST_CONTAINER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "moveItemInArray", function () {
      return moveItemInArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "transferArrayItem", function () {
      return transferArrayItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "copyArrayItem", function () {
      return copyArrayItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragDropModule", function () {
      return DragDropModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragDropRegistry", function () {
      return DragDropRegistry;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkDropListGroup", function () {
      return CdkDropListGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG_FACTORY", function () {
      return CDK_DRAG_CONFIG_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG", function () {
      return CDK_DRAG_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkDrag", function () {
      return CdkDrag;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkDragHandle", function () {
      return CdkDragHandle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkDragPreview", function () {
      return CdkDragPreview;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkDragPlaceholder", function () {
      return CdkDragPlaceholder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return CDK_DRAG_PARENT;
    });
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/platform.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/coercion.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/bidi.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Shallow-extends a stylesheet object with another stylesheet object.
     * \@docs-private
     * @param {?} dest
     * @param {?} source
     * @return {?}
     */


    function extendStyles(dest, source) {
      for (var key in source) {
        if (source.hasOwnProperty(key)) {
          dest[key] =
          /** @type {?} */
          source[key];
        }
      }

      return dest;
    }
    /**
     * Toggles whether the native drag interactions should be enabled for an element.
     * \@docs-private
     * @param {?} element Element on which to toggle the drag interactions.
     * @param {?} enable Whether the drag interactions should be enabled.
     * @return {?}
     */


    function toggleNativeDragInteractions(element, enable) {
      /** @type {?} */
      var userSelect = enable ? '' : 'none';
      extendStyles(element.style, {
        touchAction: enable ? '' : 'none',
        webkitUserDrag: enable ? '' : 'none',
        webkitTapHighlightColor: enable ? '' : 'transparent',
        userSelect: userSelect,
        msUserSelect: userSelect,
        webkitUserSelect: userSelect,
        MozUserSelect: userSelect
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Parses a CSS time value to milliseconds.
     * @param {?} value
     * @return {?}
     */


    function parseCssTimeUnitsToMs(value) {
      // Some browsers will return it in seconds, whereas others will return milliseconds.

      /** @type {?} */
      var multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
      return parseFloat(value) * multiplier;
    }
    /**
     * Gets the transform transition duration, including the delay, of an element in milliseconds.
     * @param {?} element
     * @return {?}
     */


    function getTransformTransitionDurationInMs(element) {
      /** @type {?} */
      var computedStyle = getComputedStyle(element);
      /** @type {?} */

      var transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
      /** @type {?} */

      var property = transitionedProperties.find(
      /**
      * @param {?} prop
      * @return {?}
      */
      function (prop) {
        return prop === 'transform' || prop === 'all';
      }); // If there's no transition for `all` or `transform`, we shouldn't do anything.

      if (!property) {
        return 0;
      } // Get the index of the property that we're interested in and match
      // it up to the same index in `transition-delay` and `transition-duration`.

      /** @type {?} */


      var propertyIndex = transitionedProperties.indexOf(property);
      /** @type {?} */

      var rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
      /** @type {?} */

      var rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
      return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) + parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
    }
    /**
     * Parses out multiple values from a computed style into an array.
     * @param {?} computedStyle
     * @param {?} name
     * @return {?}
     */


    function parseCssPropertyValue(computedStyle, name) {
      /** @type {?} */
      var value = computedStyle.getPropertyValue(name);
      return value.split(',').map(
      /**
      * @param {?} part
      * @return {?}
      */
      function (part) {
        return part.trim();
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Options that can be used to bind a passive event listener.
     * @type {?}
     */


    var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({
      passive: true
    });
    /**
     * Options that can be used to bind an active event listener.
     * @type {?}
     */

    var activeEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({
      passive: false
    });
    /**
     * Time in milliseconds for which to ignore mouse events, after
     * receiving a touch event. Used to avoid doing double work for
     * touch devices where the browser fires fake mouse events, in
     * addition to touch events.
     * @type {?}
     */

    var MOUSE_EVENT_IGNORE_TIME = 800;
    /**
     * Reference to a draggable item. Used to manipulate or dispose of the item.
     * \@docs-private
     * @template T
     */

    var DragRef = /*#__PURE__*/function () {
      /**
       * @param {?} element
       * @param {?} _config
       * @param {?} _document
       * @param {?} _ngZone
       * @param {?} _viewportRuler
       * @param {?} _dragDropRegistry
       */
      function DragRef(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
        var _this = this;

        _classCallCheck(this, DragRef);

        this._config = _config;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
        /**
         * CSS `transform` applied to the element when it isn't being dragged. We need a
         * passive transform in order for the dragged element to retain its new position
         * after the user has stopped dragging and because we need to know the relative
         * position in case they start dragging again. This corresponds to `element.style.transform`.
         */

        this._passiveTransform = {
          x: 0,
          y: 0
        };
        /**
         * CSS `transform` that is applied to the element while it's being dragged.
         */

        this._activeTransform = {
          x: 0,
          y: 0
        };
        /**
         * Emits when the item is being moved.
         */

        this._moveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Subscription to pointer movement events.
         */

        this._pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Subscription to the event that is dispatched when the user lifts their pointer.
         */

        this._pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Subscription to the viewport being scrolled.
         */

        this._scrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Subscription to the viewport being resized.
         */

        this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Cached reference to the boundary element.
         */

        this._boundaryElement = null;
        /**
         * Whether the native dragging interactions have been enabled on the root element.
         */

        this._nativeInteractionsEnabled = true;
        /**
         * Elements that can be used to drag the draggable item.
         */

        this._handles = [];
        /**
         * Registered handles that are currently disabled.
         */

        this._disabledHandles = new Set();
        /**
         * Layout direction of the item.
         */

        this._direction = 'ltr';
        /**
         * Amount of milliseconds to wait after the user has put their
         * pointer down before starting to drag the element.
         */

        this.dragStartDelay = 0;
        this._disabled = false;
        /**
         * Emits as the drag sequence is being prepared.
         */

        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user starts dragging the item.
         */

        this.started = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */

        this.released = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */

        this.ended = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has moved the item into a new container.
         */

        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */

        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user drops the item inside a container.
         */

        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */

        this.moved = this._moveEvents.asObservable();
        /**
         * Handler for the `mousedown`/`touchstart` events.
         */

        this._pointerDown =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          _this.beforeStarted.next(); // Delegate the event based on whether it started from a handle or the element itself.


          if (_this._handles.length) {
            /** @type {?} */
            var targetHandle = _this._handles.find(
            /**
            * @param {?} handle
            * @return {?}
            */
            function (handle) {
              /** @type {?} */
              var target = event.target;
              return !!target && (target === handle || handle.contains(
              /** @type {?} */
              target));
            });

            if (targetHandle && !_this._disabledHandles.has(targetHandle) && !_this.disabled) {
              _this._initializeDragSequence(targetHandle, event);
            }
          } else if (!_this.disabled) {
            _this._initializeDragSequence(_this._rootElement, event);
          }
        };
        /**
         * Handler that is invoked when the user moves their pointer after they've initiated a drag.
         */


        this._pointerMove =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (!_this._hasStartedDragging) {
            /** @type {?} */
            var pointerPosition = _this._getPointerPositionOnPage(event);
            /** @type {?} */


            var distanceX = Math.abs(pointerPosition.x - _this._pickupPositionOnPage.x);
            /** @type {?} */

            var distanceY = Math.abs(pointerPosition.y - _this._pickupPositionOnPage.y);
            /** @type {?} */

            var isOverThreshold = distanceX + distanceY >= _this._config.dragStartThreshold; // Only start dragging after the user has moved more than the minimum distance in either
            // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
            // in the `pointerMove` subscription, because we're not guaranteed to have one move event
            // per pixel of movement (e.g. if the user moves their pointer quickly).

            if (isOverThreshold) {
              /** @type {?} */
              var isDelayElapsed = Date.now() >= _this._dragStartTime + (_this.dragStartDelay || 0);

              if (!isDelayElapsed) {
                _this._endDragSequence(event);

                return;
              } // Prevent other drag sequences from starting while something in the container is still
              // being dragged. This can happen while we're waiting for the drop animation to finish
              // and can cause errors, because some elements might still be moving around.


              if (!_this._dropContainer || !_this._dropContainer.isDragging()) {
                _this._hasStartedDragging = true;

                _this._ngZone.run(
                /**
                * @return {?}
                */
                function () {
                  return _this._startDragSequence(event);
                });
              }
            }

            return;
          } // We only need the preview dimensions if we have a boundary element.


          if (_this._boundaryElement) {
            // Cache the preview element rect if we haven't cached it already or if
            // we cached it too early before the element dimensions were computed.
            if (!_this._previewRect || !_this._previewRect.width && !_this._previewRect.height) {
              _this._previewRect = (_this._preview || _this._rootElement).getBoundingClientRect();
            }
          }
          /** @type {?} */


          var constrainedPointerPosition = _this._getConstrainedPointerPosition(event);

          _this._hasMoved = true;
          event.preventDefault();

          _this._updatePointerDirectionDelta(constrainedPointerPosition);

          if (_this._dropContainer) {
            _this._updateActiveDropContainer(constrainedPointerPosition);
          } else {
            /** @type {?} */
            var activeTransform = _this._activeTransform;
            activeTransform.x = constrainedPointerPosition.x - _this._pickupPositionOnPage.x + _this._passiveTransform.x;
            activeTransform.y = constrainedPointerPosition.y - _this._pickupPositionOnPage.y + _this._passiveTransform.y;

            _this._applyRootElementTransform(activeTransform.x, activeTransform.y); // Apply transform as attribute if dragging and svg element to work for IE


            if (typeof SVGElement !== 'undefined' && _this._rootElement instanceof SVGElement) {
              /** @type {?} */
              var appliedTransform = "translate(".concat(activeTransform.x, " ").concat(activeTransform.y, ")");

              _this._rootElement.setAttribute('transform', appliedTransform);
            }
          } // Since this event gets fired for every pixel while dragging, we only
          // want to fire it if the consumer opted into it. Also we have to
          // re-enter the zone because we run all of the events on the outside.


          if (_this._moveEvents.observers.length) {
            _this._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              _this._moveEvents.next({
                source: _this,
                pointerPosition: constrainedPointerPosition,
                event: event,
                distance: _this._getDragDistance(constrainedPointerPosition),
                delta: _this._pointerDirectionDelta
              });
            });
          }
        };
        /**
         * Handler that is invoked when the user lifts their pointer up, after initiating a drag.
         */


        this._pointerUp =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          _this._endDragSequence(event);
        };

        this.withRootElement(element);

        _dragDropRegistry.registerDragItem(this);
      }
      /**
       * Whether starting to drag this element is disabled.
       * @return {?}
       */


      _createClass(DragRef, [{
        key: "getPlaceholderElement",

        /**
         * Returns the element that is being used as a placeholder
         * while the current element is being dragged.
         * @return {?}
         */
        value: function getPlaceholderElement() {
          return this._placeholder;
        }
        /**
         * Returns the root draggable element.
         * @return {?}
         */

      }, {
        key: "getRootElement",
        value: function getRootElement() {
          return this._rootElement;
        }
        /**
         * Registers the handles that can be used to drag the element.
         * @template THIS
         * @this {THIS}
         * @param {?} handles
         * @return {THIS}
         */

      }, {
        key: "withHandles",
        value: function withHandles(handles) {
          /** @type {?} */
          this._handles = handles.map(
          /**
          * @param {?} handle
          * @return {?}
          */
          function (handle) {
            return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(handle);
          });

          /** @type {?} */
          this._handles.forEach(
          /**
          * @param {?} handle
          * @return {?}
          */
          function (handle) {
            return toggleNativeDragInteractions(handle, false);
          });

          /** @type {?} */
          this._toggleNativeDragInteractions();

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Registers the template that should be used for the drag preview.
         * @template THIS
         * @this {THIS}
         * @param {?} template Template that from which to stamp out the preview.
         * @return {THIS}
         */

      }, {
        key: "withPreviewTemplate",
        value: function withPreviewTemplate(template) {
          /** @type {?} */
          this._previewTemplate = template;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Registers the template that should be used for the drag placeholder.
         * @template THIS
         * @this {THIS}
         * @param {?} template Template that from which to stamp out the placeholder.
         * @return {THIS}
         */

      }, {
        key: "withPlaceholderTemplate",
        value: function withPlaceholderTemplate(template) {
          /** @type {?} */
          this._placeholderTemplate = template;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets an alternate drag root element. The root element is the element that will be moved as
         * the user is dragging. Passing an alternate root element is useful when trying to enable
         * dragging on an element that you might not have access to.
         * @template THIS
         * @this {THIS}
         * @param {?} rootElement
         * @return {THIS}
         */

      }, {
        key: "withRootElement",
        value: function withRootElement(rootElement) {
          /** @type {?} */
          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(rootElement);

          if (element !==
          /** @type {?} */
          this._rootElement) {
            if (
            /** @type {?} */
            this._rootElement) {
              /** @type {?} */
              this._removeRootElementListeners(
              /** @type {?} */
              this._rootElement);
            }

            element.addEventListener('mousedown',
            /** @type {?} */
            this._pointerDown, activeEventListenerOptions);
            element.addEventListener('touchstart',
            /** @type {?} */
            this._pointerDown, passiveEventListenerOptions);

            /** @type {?} */
            this._initialTransform = undefined;

            /** @type {?} */
            this._rootElement = element;
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Element to which the draggable's position will be constrained.
         * @template THIS
         * @this {THIS}
         * @param {?} boundaryElement
         * @return {THIS}
         */

      }, {
        key: "withBoundaryElement",
        value: function withBoundaryElement(boundaryElement) {
          var _this2 = this;

          /** @type {?} */
          this._boundaryElement = boundaryElement ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(boundaryElement) : null;

          /** @type {?} */
          this._resizeSubscription.unsubscribe();

          if (boundaryElement) {
            /** @type {?} */
            this._resizeSubscription =
            /** @type {?} */
            this._viewportRuler.change(10).subscribe(
            /**
            * @return {?}
            */
            function () {
              return (
                /** @type {?} */
                _this2._containInsideBoundaryOnResize()
              );
            });
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Removes the dragging functionality from the DOM element.
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          this._removeRootElementListeners(this._rootElement); // Do this check before removing from the registry since it'll
          // stop being considered as dragged once it is removed.


          if (this.isDragging()) {
            // Since we move out the element to the end of the body while it's being
            // dragged, we have to make sure that it's removed if it gets destroyed.
            removeElement(this._rootElement);
          }

          this._destroyPreview();

          this._destroyPlaceholder();

          this._dragDropRegistry.removeDragItem(this);

          this._removeSubscriptions();

          this.beforeStarted.complete();
          this.started.complete();
          this.released.complete();
          this.ended.complete();
          this.entered.complete();
          this.exited.complete();
          this.dropped.complete();

          this._moveEvents.complete();

          this._handles = [];

          this._disabledHandles.clear();

          this._dropContainer = undefined;
          this._boundaryElement = this._rootElement = this._placeholderTemplate = this._previewTemplate = this._nextSibling =
          /** @type {?} */
          null;
        }
        /**
         * Checks whether the element is currently being dragged.
         * @return {?}
         */

      }, {
        key: "isDragging",
        value: function isDragging() {
          return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
        }
        /**
         * Resets a standalone drag item to its initial position.
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          this._rootElement.style.transform = this._initialTransform || '';
          this._activeTransform = {
            x: 0,
            y: 0
          };
          this._passiveTransform = {
            x: 0,
            y: 0
          };
        }
        /**
         * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
         * @param {?} handle Handle element that should be disabled.
         * @return {?}
         */

      }, {
        key: "disableHandle",
        value: function disableHandle(handle) {
          if (this._handles.indexOf(handle) > -1) {
            this._disabledHandles.add(handle);
          }
        }
        /**
         * Enables a handle, if it has been disabled.
         * @param {?} handle Handle element to be enabled.
         * @return {?}
         */

      }, {
        key: "enableHandle",
        value: function enableHandle(handle) {
          this._disabledHandles["delete"](handle);
        }
        /**
         * Sets the layout direction of the draggable item.
         * @template THIS
         * @this {THIS}
         * @param {?} direction
         * @return {THIS}
         */

      }, {
        key: "withDirection",
        value: function withDirection(direction) {
          /** @type {?} */
          this._direction = direction;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the container that the item is part of.
         * @param {?} container
         * @return {?}
         */

      }, {
        key: "_withDropContainer",
        value: function _withDropContainer(container) {
          this._dropContainer = container;
        }
        /**
         * Gets the current position in pixels the draggable outside of a drop container.
         * @return {?}
         */

      }, {
        key: "getFreeDragPosition",
        value: function getFreeDragPosition() {
          /** @type {?} */
          var position = this.isDragging() ? this._activeTransform : this._passiveTransform;
          return {
            x: position.x,
            y: position.y
          };
        }
        /**
         * Sets the current position in pixels the draggable outside of a drop container.
         * @template THIS
         * @this {THIS}
         * @param {?} value New position to be set.
         * @return {THIS}
         */

      }, {
        key: "setFreeDragPosition",
        value: function setFreeDragPosition(value) {
          /** @type {?} */
          this._activeTransform = {
            x: 0,
            y: 0
          };

          /** @type {?} */
          this._passiveTransform.x = value.x;

          /** @type {?} */
          this._passiveTransform.y = value.y;

          if (!
          /** @type {?} */
          this._dropContainer) {
            /** @type {?} */
            this._applyRootElementTransform(value.x, value.y);
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Updates the item's sort order based on the last-known pointer position.
         * @return {?}
         */

      }, {
        key: "_sortFromLastPointerPosition",
        value: function _sortFromLastPointerPosition() {
          /** @type {?} */
          var position = this._pointerPositionAtLastDirectionChange;

          if (position && this._dropContainer) {
            this._updateActiveDropContainer(position);
          }
        }
        /**
         * Unsubscribes from the global subscriptions.
         * @private
         * @return {?}
         */

      }, {
        key: "_removeSubscriptions",
        value: function _removeSubscriptions() {
          this._pointerMoveSubscription.unsubscribe();

          this._pointerUpSubscription.unsubscribe();

          this._scrollSubscription.unsubscribe();
        }
        /**
         * Destroys the preview element and its ViewRef.
         * @private
         * @return {?}
         */

      }, {
        key: "_destroyPreview",
        value: function _destroyPreview() {
          if (this._preview) {
            removeElement(this._preview);
          }

          if (this._previewRef) {
            this._previewRef.destroy();
          }

          this._preview = this._previewRef =
          /** @type {?} */
          null;
        }
        /**
         * Destroys the placeholder element and its ViewRef.
         * @private
         * @return {?}
         */

      }, {
        key: "_destroyPlaceholder",
        value: function _destroyPlaceholder() {
          if (this._placeholder) {
            removeElement(this._placeholder);
          }

          if (this._placeholderRef) {
            this._placeholderRef.destroy();
          }

          this._placeholder = this._placeholderRef =
          /** @type {?} */
          null;
        }
        /**
         * Clears subscriptions and stops the dragging sequence.
         * @private
         * @param {?} event Browser event object that ended the sequence.
         * @return {?}
         */

      }, {
        key: "_endDragSequence",
        value: function _endDragSequence(event) {
          var _this3 = this;

          // Note that here we use `isDragging` from the service, rather than from `this`.
          // The difference is that the one from the service reflects whether a dragging sequence
          // has been initiated, whereas the one on `this` includes whether the user has passed
          // the minimum dragging threshold.
          if (!this._dragDropRegistry.isDragging(this)) {
            return;
          }

          this._removeSubscriptions();

          this._dragDropRegistry.stopDragging(this);

          this._toggleNativeDragInteractions();

          if (this._handles) {
            this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
          }

          if (!this._hasStartedDragging) {
            return;
          }

          this.released.next({
            source: this
          });

          if (this._dropContainer) {
            // Stop scrolling immediately, instead of waiting for the animation to finish.
            this._dropContainer._stopScrolling();

            this._animatePreviewToPlaceholder().then(
            /**
            * @return {?}
            */
            function () {
              _this3._cleanupDragArtifacts(event);

              _this3._cleanupCachedDimensions();

              _this3._dragDropRegistry.stopDragging(_this3);
            });
          } else {
            // Convert the active transform into a passive one. This means that next time
            // the user starts dragging the item, its position will be calculated relatively
            // to the new passive transform.
            this._passiveTransform.x = this._activeTransform.x;
            this._passiveTransform.y = this._activeTransform.y;

            this._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              _this3.ended.next({
                source: _this3,
                distance: _this3._getDragDistance(_this3._getPointerPositionOnPage(event))
              });
            });

            this._cleanupCachedDimensions();

            this._dragDropRegistry.stopDragging(this);
          }
        }
        /**
         * Starts the dragging sequence.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_startDragSequence",
        value: function _startDragSequence(event) {
          // Emit the event on the item before the one on the container.
          this.started.next({
            source: this
          });

          if (isTouchEvent(event)) {
            this._lastTouchEventTime = Date.now();
          }

          this._toggleNativeDragInteractions();

          if (this._dropContainer) {
            /** @type {?} */
            var element = this._rootElement; // Grab the `nextSibling` before the preview and placeholder
            // have been created so we don't get the preview by accident.

            this._nextSibling = element.nextSibling;
            /** @type {?} */

            var preview = this._preview = this._createPreviewElement();
            /** @type {?} */


            var placeholder = this._placeholder = this._createPlaceholderElement(); // We move the element out at the end of the body and we make it hidden, because keeping it in
            // place will throw off the consumer's `:last-child` selectors. We can't remove the element
            // from the DOM completely, because iOS will stop firing all subsequent events in the chain.


            element.style.display = 'none';

            this._document.body.appendChild(
            /** @type {?} */
            element.parentNode.replaceChild(placeholder, element));

            getPreviewInsertionPoint(this._document).appendChild(preview);

            this._dropContainer.start();
          }
        }
        /**
         * Sets up the different variables and subscriptions
         * that will be necessary for the dragging sequence.
         * @private
         * @param {?} referenceElement Element that started the drag sequence.
         * @param {?} event Browser event object that started the sequence.
         * @return {?}
         */

      }, {
        key: "_initializeDragSequence",
        value: function _initializeDragSequence(referenceElement, event) {
          var _this4 = this;

          // Always stop propagation for the event that initializes
          // the dragging sequence, in order to prevent it from potentially
          // starting another sequence for a draggable parent somewhere up the DOM tree.
          event.stopPropagation();
          /** @type {?} */

          var isDragging = this.isDragging();
          /** @type {?} */

          var isTouchSequence = isTouchEvent(event);
          /** @type {?} */

          var isAuxiliaryMouseButton = !isTouchSequence &&
          /** @type {?} */
          event.button !== 0;
          /** @type {?} */

          var rootElement = this._rootElement;
          /** @type {?} */

          var isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now(); // If the event started from an element with the native HTML drag&drop, it'll interfere
          // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
          // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
          // it's flaky and it fails if the user drags it away quickly. Also note that we only want
          // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
          // events from firing on touch devices.

          if (event.target &&
          /** @type {?} */
          event.target.draggable && event.type === 'mousedown') {
            event.preventDefault();
          } // Abort if the user is already dragging or is using a mouse button other than the primary one.


          if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent) {
            return;
          } // If we've got handles, we need to disable the tap highlight on the entire root element,
          // otherwise iOS will still add it, even though all the drag interactions on the handle
          // are disabled.


          if (this._handles.length) {
            this._rootElementTapHighlight = rootElement.style.webkitTapHighlightColor;
            rootElement.style.webkitTapHighlightColor = 'transparent';
          }

          this._hasStartedDragging = this._hasMoved = false;
          this._initialContainer =
          /** @type {?} */
          this._dropContainer; // Avoid multiple subscriptions and memory leaks when multi touch
          // (isDragging check above isn't enough because of possible temporal and/or dimensional delays)

          this._removeSubscriptions();

          this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
          this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
          this._scrollSubscription = this._dragDropRegistry.scroll.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this4._scrollPosition = _this4._viewportRuler.getViewportScrollPosition();
          });

          if (this._boundaryElement) {
            this._boundaryRect = this._boundaryElement.getBoundingClientRect();
          } // If we have a custom preview template, the element won't be visible anyway so we avoid the
          // extra `getBoundingClientRect` calls and just move the preview next to the cursor.


          this._pickupPositionInElement = this._previewTemplate && this._previewTemplate.template ? {
            x: 0,
            y: 0
          } : this._getPointerPositionInElement(referenceElement, event);
          /** @type {?} */

          var pointerPosition = this._pickupPositionOnPage = this._getPointerPositionOnPage(event);

          this._pointerDirectionDelta = {
            x: 0,
            y: 0
          };
          this._pointerPositionAtLastDirectionChange = {
            x: pointerPosition.x,
            y: pointerPosition.y
          };
          this._dragStartTime = Date.now();

          this._dragDropRegistry.startDragging(this, event);
        }
        /**
         * Cleans up the DOM artifacts that were added to facilitate the element being dragged.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_cleanupDragArtifacts",
        value: function _cleanupDragArtifacts(event) {
          var _this5 = this;

          // Restore the element's visibility and insert it at its old position in the DOM.
          // It's important that we maintain the position, because moving the element around in the DOM
          // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
          // while moving the existing elements in all other cases.
          this._rootElement.style.display = '';

          if (this._nextSibling) {
            /** @type {?} */
            this._nextSibling.parentNode.insertBefore(this._rootElement, this._nextSibling);
          } else {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this._initialContainer.element).appendChild(this._rootElement);
          }

          this._destroyPreview();

          this._destroyPlaceholder();

          this._boundaryRect = this._previewRect = undefined; // Re-enter the NgZone since we bound `document` events on the outside.

          this._ngZone.run(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var container =
            /** @type {?} */
            _this5._dropContainer;
            /** @type {?} */

            var currentIndex = container.getItemIndex(_this5);
            /** @type {?} */

            var pointerPosition = _this5._getPointerPositionOnPage(event);
            /** @type {?} */


            var distance = _this5._getDragDistance(_this5._getPointerPositionOnPage(event));
            /** @type {?} */


            var isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);

            _this5.ended.next({
              source: _this5,
              distance: distance
            });

            _this5.dropped.next({
              item: _this5,
              currentIndex: currentIndex,
              previousIndex: _this5._initialContainer.getItemIndex(_this5),
              container: container,
              previousContainer: _this5._initialContainer,
              isPointerOverContainer: isPointerOverContainer,
              distance: distance
            });

            container.drop(_this5, currentIndex, _this5._initialContainer, isPointerOverContainer, distance);
            _this5._dropContainer = _this5._initialContainer;
          });
        }
        /**
         * Updates the item's position in its drop container, or moves it
         * into a new one, depending on its current drag position.
         * @private
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "_updateActiveDropContainer",
        value: function _updateActiveDropContainer(_ref) {
          var _this6 = this;

          var x = _ref.x,
              y = _ref.y;

          // Drop container that draggable has been moved into.

          /** @type {?} */
          var newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y); // If we couldn't find a new container to move the item into, and the item has left its
          // initial container, check whether the it's over the initial container. This handles the
          // case where two containers are connected one way and the user tries to undo dragging an
          // item into a new container.


          if (!newContainer && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(x, y)) {
            newContainer = this._initialContainer;
          }

          if (newContainer && newContainer !== this._dropContainer) {
            this._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              // Notify the old container that the item has left.
              _this6.exited.next({
                item: _this6,
                container:
                /** @type {?} */
                _this6._dropContainer
              });

              /** @type {?} */
              _this6._dropContainer.exit(_this6); // Notify the new container that the item has entered.


              _this6._dropContainer =
              /** @type {?} */
              newContainer;

              _this6._dropContainer.enter(_this6, x, y);

              _this6.entered.next({
                item: _this6,
                container:
                /** @type {?} */
                newContainer,
                currentIndex:
                /** @type {?} */
                newContainer.getItemIndex(_this6)
              });
            });
          }

          /** @type {?} */
          this._dropContainer._startScrollingIfNecessary(x, y);

          /** @type {?} */
          this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);

          this._preview.style.transform = getTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
        }
        /**
         * Creates the element that will be rendered next to the user's pointer
         * and will be used as a preview of the element that is being dragged.
         * @private
         * @return {?}
         */

      }, {
        key: "_createPreviewElement",
        value: function _createPreviewElement() {
          /** @type {?} */
          var previewConfig = this._previewTemplate;
          /** @type {?} */

          var previewTemplate = previewConfig ? previewConfig.template : null;
          /** @type {?} */

          var preview;

          if (previewTemplate) {
            /** @type {?} */
            var viewRef =
            /** @type {?} */
            previewConfig.viewContainer.createEmbeddedView(previewTemplate,
            /** @type {?} */
            previewConfig.context);
            preview = getRootNode(viewRef, this._document);
            this._previewRef = viewRef;
            preview.style.transform = getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
          } else {
            /** @type {?} */
            var element = this._rootElement;
            /** @type {?} */

            var elementRect = element.getBoundingClientRect();
            preview = deepCloneNode(element);
            preview.style.width = "".concat(elementRect.width, "px");
            preview.style.height = "".concat(elementRect.height, "px");
            preview.style.transform = getTransform(elementRect.left, elementRect.top);
          }

          extendStyles(preview.style, {
            // It's important that we disable the pointer events on the preview, because
            // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
            pointerEvents: 'none',
            // We have to reset the margin, because can throw off positioning relative to the viewport.
            margin: '0',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '1000'
          });
          toggleNativeDragInteractions(preview, false);
          preview.classList.add('cdk-drag-preview');
          preview.setAttribute('dir', this._direction);
          return preview;
        }
        /**
         * Animates the preview element from its current position to the location of the drop placeholder.
         * @private
         * @return {?} Promise that resolves when the animation completes.
         */

      }, {
        key: "_animatePreviewToPlaceholder",
        value: function _animatePreviewToPlaceholder() {
          var _this7 = this;

          // If the user hasn't moved yet, the transitionend event won't fire.
          if (!this._hasMoved) {
            return Promise.resolve();
          }
          /** @type {?} */


          var placeholderRect = this._placeholder.getBoundingClientRect(); // Apply the class that adds a transition to the preview.


          this._preview.classList.add('cdk-drag-animating'); // Move the preview to the placeholder position.


          this._preview.style.transform = getTransform(placeholderRect.left, placeholderRect.top); // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
          // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
          // apply its style, we take advantage of the available info to figure out whether we need to
          // bind the event in the first place.

          /** @type {?} */

          var duration = getTransformTransitionDurationInMs(this._preview);

          if (duration === 0) {
            return Promise.resolve();
          }

          return this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return new Promise(
            /**
            * @param {?} resolve
            * @return {?}
            */
            function (resolve) {
              /** @type {?} */
              var handler =
              /** @type {?} */

              /**
              * @param {?} event
              * @return {?}
              */
              function handler(event) {
                if (!event || event.target === _this7._preview && event.propertyName === 'transform') {
                  _this7._preview.removeEventListener('transitionend', handler);

                  resolve();
                  clearTimeout(timeout);
                }
              }; // If a transition is short enough, the browser might not fire the `transitionend` event.
              // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
              // fire if the transition hasn't completed when it was supposed to.

              /** @type {?} */


              var timeout = setTimeout(
              /** @type {?} */
              handler, duration * 1.5);

              _this7._preview.addEventListener('transitionend', handler);
            });
          });
        }
        /**
         * Creates an element that will be shown instead of the current element while dragging.
         * @private
         * @return {?}
         */

      }, {
        key: "_createPlaceholderElement",
        value: function _createPlaceholderElement() {
          /** @type {?} */
          var placeholderConfig = this._placeholderTemplate;
          /** @type {?} */

          var placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
          /** @type {?} */

          var placeholder;

          if (placeholderTemplate) {
            this._placeholderRef =
            /** @type {?} */
            placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate,
            /** @type {?} */
            placeholderConfig.context);
            placeholder = getRootNode(this._placeholderRef, this._document);
          } else {
            placeholder = deepCloneNode(this._rootElement);
          }

          placeholder.classList.add('cdk-drag-placeholder');
          return placeholder;
        }
        /**
         * Figures out the coordinates at which an element was picked up.
         * @private
         * @param {?} referenceElement Element that initiated the dragging.
         * @param {?} event Event that initiated the dragging.
         * @return {?}
         */

      }, {
        key: "_getPointerPositionInElement",
        value: function _getPointerPositionInElement(referenceElement, event) {
          /** @type {?} */
          var elementRect = this._rootElement.getBoundingClientRect();
          /** @type {?} */


          var handleElement = referenceElement === this._rootElement ? null : referenceElement;
          /** @type {?} */

          var referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
          /** @type {?} */

          var point = isTouchEvent(event) ? event.targetTouches[0] : event;
          /** @type {?} */

          var x = point.pageX - referenceRect.left - this._scrollPosition.left;
          /** @type {?} */

          var y = point.pageY - referenceRect.top - this._scrollPosition.top;
          return {
            x: referenceRect.left - elementRect.left + x,
            y: referenceRect.top - elementRect.top + y
          };
        }
        /**
         * Determines the point of the page that was touched by the user.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_getPointerPositionOnPage",
        value: function _getPointerPositionOnPage(event) {
          // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.

          /** @type {?} */
          var point = isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
          return {
            x: point.pageX - this._scrollPosition.left,
            y: point.pageY - this._scrollPosition.top
          };
        }
        /**
         * Gets the pointer position on the page, accounting for any position constraints.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_getConstrainedPointerPosition",
        value: function _getConstrainedPointerPosition(event) {
          /** @type {?} */
          var point = this._getPointerPositionOnPage(event);
          /** @type {?} */


          var constrainedPoint = this.constrainPosition ? this.constrainPosition(point, this) : point;
          /** @type {?} */

          var dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;

          if (this.lockAxis === 'x' || dropContainerLock === 'x') {
            constrainedPoint.y = this._pickupPositionOnPage.y;
          } else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
            constrainedPoint.x = this._pickupPositionOnPage.x;
          }

          if (this._boundaryRect) {
            var _this$_pickupPosition = this._pickupPositionInElement,
                pickupX = _this$_pickupPosition.x,
                pickupY = _this$_pickupPosition.y;
            /** @type {?} */

            var boundaryRect = this._boundaryRect;
            /** @type {?} */

            var previewRect =
            /** @type {?} */
            this._previewRect;
            /** @type {?} */

            var minY = boundaryRect.top + pickupY;
            /** @type {?} */

            var maxY = boundaryRect.bottom - (previewRect.height - pickupY);
            /** @type {?} */

            var minX = boundaryRect.left + pickupX;
            /** @type {?} */

            var maxX = boundaryRect.right - (previewRect.width - pickupX);
            constrainedPoint.x = clamp(constrainedPoint.x, minX, maxX);
            constrainedPoint.y = clamp(constrainedPoint.y, minY, maxY);
          }

          return constrainedPoint;
        }
        /**
         * Updates the current drag delta, based on the user's current pointer position on the page.
         * @private
         * @param {?} pointerPositionOnPage
         * @return {?}
         */

      }, {
        key: "_updatePointerDirectionDelta",
        value: function _updatePointerDirectionDelta(pointerPositionOnPage) {
          var x = pointerPositionOnPage.x,
              y = pointerPositionOnPage.y;
          /** @type {?} */

          var delta = this._pointerDirectionDelta;
          /** @type {?} */

          var positionSinceLastChange = this._pointerPositionAtLastDirectionChange; // Amount of pixels the user has dragged since the last time the direction changed.

          /** @type {?} */

          var changeX = Math.abs(x - positionSinceLastChange.x);
          /** @type {?} */

          var changeY = Math.abs(y - positionSinceLastChange.y); // Because we handle pointer events on a per-pixel basis, we don't want the delta
          // to change for every pixel, otherwise anything that depends on it can look erratic.
          // To make the delta more consistent, we track how much the user has moved since the last
          // delta change and we only update it after it has reached a certain threshold.

          if (changeX > this._config.pointerDirectionChangeThreshold) {
            delta.x = x > positionSinceLastChange.x ? 1 : -1;
            positionSinceLastChange.x = x;
          }

          if (changeY > this._config.pointerDirectionChangeThreshold) {
            delta.y = y > positionSinceLastChange.y ? 1 : -1;
            positionSinceLastChange.y = y;
          }

          return delta;
        }
        /**
         * Toggles the native drag interactions, based on how many handles are registered.
         * @private
         * @return {?}
         */

      }, {
        key: "_toggleNativeDragInteractions",
        value: function _toggleNativeDragInteractions() {
          if (!this._rootElement || !this._handles) {
            return;
          }
          /** @type {?} */


          var shouldEnable = this._handles.length > 0 || !this.isDragging();

          if (shouldEnable !== this._nativeInteractionsEnabled) {
            this._nativeInteractionsEnabled = shouldEnable;
            toggleNativeDragInteractions(this._rootElement, shouldEnable);
          }
        }
        /**
         * Removes the manually-added event listeners from the root element.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_removeRootElementListeners",
        value: function _removeRootElementListeners(element) {
          element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
          element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
        }
        /**
         * Applies a `transform` to the root element, taking into account any existing transforms on it.
         * @private
         * @param {?} x New transform value along the X axis.
         * @param {?} y New transform value along the Y axis.
         * @return {?}
         */

      }, {
        key: "_applyRootElementTransform",
        value: function _applyRootElementTransform(x, y) {
          /** @type {?} */
          var transform = getTransform(x, y); // Cache the previous transform amount only after the first drag sequence, because
          // we don't want our own transforms to stack on top of each other.

          if (this._initialTransform == null) {
            this._initialTransform = this._rootElement.style.transform || '';
          } // Preserve the previous `transform` value, if there was one. Note that we apply our own
          // transform before the user's, because things like rotation can affect which direction
          // the element will be translated towards.


          this._rootElement.style.transform = this._initialTransform ? transform + ' ' + this._initialTransform : transform;
        }
        /**
         * Gets the distance that the user has dragged during the current drag sequence.
         * @private
         * @param {?} currentPosition Current position of the user's pointer.
         * @return {?}
         */

      }, {
        key: "_getDragDistance",
        value: function _getDragDistance(currentPosition) {
          /** @type {?} */
          var pickupPosition = this._pickupPositionOnPage;

          if (pickupPosition) {
            return {
              x: currentPosition.x - pickupPosition.x,
              y: currentPosition.y - pickupPosition.y
            };
          }

          return {
            x: 0,
            y: 0
          };
        }
        /**
         * Cleans up any cached element dimensions that we don't need after dragging has stopped.
         * @private
         * @return {?}
         */

      }, {
        key: "_cleanupCachedDimensions",
        value: function _cleanupCachedDimensions() {
          this._boundaryRect = this._previewRect = undefined;
        }
        /**
         * Checks whether the element is still inside its boundary after the viewport has been resized.
         * If not, the position is adjusted so that the element fits again.
         * @private
         * @return {?}
         */

      }, {
        key: "_containInsideBoundaryOnResize",
        value: function _containInsideBoundaryOnResize() {
          var _this$_passiveTransfo = this._passiveTransform,
              x = _this$_passiveTransfo.x,
              y = _this$_passiveTransfo.y;

          if (x === 0 && y === 0 || this.isDragging() || !this._boundaryElement) {
            return;
          }
          /** @type {?} */


          var boundaryRect = this._boundaryElement.getBoundingClientRect();
          /** @type {?} */


          var elementRect = this._rootElement.getBoundingClientRect();
          /** @type {?} */


          var leftOverflow = boundaryRect.left - elementRect.left;
          /** @type {?} */

          var rightOverflow = elementRect.right - boundaryRect.right;
          /** @type {?} */

          var topOverflow = boundaryRect.top - elementRect.top;
          /** @type {?} */

          var bottomOverflow = elementRect.bottom - boundaryRect.bottom; // If the element has become wider than the boundary, we can't
          // do much to make it fit so we just anchor it to the left.

          if (boundaryRect.width > elementRect.width) {
            if (leftOverflow > 0) {
              x += leftOverflow;
            }

            if (rightOverflow > 0) {
              x -= rightOverflow;
            }
          } else {
            x = 0;
          } // If the element has become taller than the boundary, we can't
          // do much to make it fit so we just anchor it to the top.


          if (boundaryRect.height > elementRect.height) {
            if (topOverflow > 0) {
              y += topOverflow;
            }

            if (bottomOverflow > 0) {
              y -= bottomOverflow;
            }
          } else {
            y = 0;
          }

          if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
            this.setFreeDragPosition({
              y: y,
              x: x
            });
          }
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);

          if (newValue !== this._disabled) {
            this._disabled = newValue;

            this._toggleNativeDragInteractions();
          }
        }
      }]);

      return DragRef;
    }();
    /**
     * Gets a 3d `transform` that can be applied to an element.
     * @param {?} x Desired position of the element along the X axis.
     * @param {?} y Desired position of the element along the Y axis.
     * @return {?}
     */


    function getTransform(x, y) {
      // Round the transforms since some browsers will
      // blur the elements for sub-pixel transforms.
      return "translate3d(".concat(Math.round(x), "px, ").concat(Math.round(y), "px, 0)");
    }
    /**
     * Creates a deep clone of an element.
     * @param {?} node
     * @return {?}
     */


    function deepCloneNode(node) {
      /** @type {?} */
      var clone =
      /** @type {?} */
      node.cloneNode(true);
      /** @type {?} */

      var descendantsWithId = clone.querySelectorAll('[id]');
      /** @type {?} */

      var descendantCanvases = node.querySelectorAll('canvas'); // Remove the `id` to avoid having multiple elements with the same id on the page.

      clone.removeAttribute('id');

      for (var i = 0; i < descendantsWithId.length; i++) {
        descendantsWithId[i].removeAttribute('id');
      } // `cloneNode` won't transfer the content of `canvas` elements so we have to do it ourselves.
      // We match up the cloned canvas to their sources using their index in the DOM.


      if (descendantCanvases.length) {
        /** @type {?} */
        var cloneCanvases = clone.querySelectorAll('canvas');

        for (var _i = 0; _i < descendantCanvases.length; _i++) {
          /** @type {?} */
          var correspondingCloneContext = cloneCanvases[_i].getContext('2d');

          if (correspondingCloneContext) {
            correspondingCloneContext.drawImage(descendantCanvases[_i], 0, 0);
          }
        }
      }

      return clone;
    }
    /**
     * Clamps a value between a minimum and a maximum.
     * @param {?} value
     * @param {?} min
     * @param {?} max
     * @return {?}
     */


    function clamp(value, min, max) {
      return Math.max(min, Math.min(max, value));
    }
    /**
     * Helper to remove an element from the DOM and to do all the necessary null checks.
     * @param {?} element Element to be removed.
     * @return {?}
     */


    function removeElement(element) {
      if (element && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    }
    /**
     * Determines whether an event is a touch event.
     * @param {?} event
     * @return {?}
     */


    function isTouchEvent(event) {
      // This function is called for every pixel that the user has dragged so we need it to be
      // as fast as possible. Since we only bind mouse events and touch events, we can assume
      // that if the event's name starts with `t`, it's a touch event.
      return event.type[0] === 't';
    }
    /**
     * Gets the element into which the drag preview should be inserted.
     * @param {?} documentRef
     * @return {?}
     */


    function getPreviewInsertionPoint(documentRef) {
      // We can't use the body if the user is in fullscreen mode,
      // because the preview will render under the fullscreen element.
      // TODO(crisbeto): dedupe this with the `FullscreenOverlayContainer` eventually.
      return documentRef.fullscreenElement || documentRef.webkitFullscreenElement || documentRef.mozFullScreenElement || documentRef.msFullscreenElement || documentRef.body;
    }
    /**
     * Gets the root HTML element of an embedded view.
     * If the root is not an HTML element it gets wrapped in one.
     * @param {?} viewRef
     * @param {?} _document
     * @return {?}
     */


    function getRootNode(viewRef, _document) {
      /** @type {?} */
      var rootNode = viewRef.rootNodes[0];

      if (rootNode.nodeType !== _document.ELEMENT_NODE) {
        /** @type {?} */
        var wrapper = _document.createElement('div');

        wrapper.appendChild(rootNode);
        return wrapper;
      }

      return (
        /** @type {?} */
        rootNode
      );
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Moves an item one index in an array to another.
     * @template T
     * @param {?} array Array in which to move the item.
     * @param {?} fromIndex Starting index of the item.
     * @param {?} toIndex Index to which the item should be moved.
     * @return {?}
     */


    function moveItemInArray(array, fromIndex, toIndex) {
      /** @type {?} */
      var from = clamp$1(fromIndex, array.length - 1);
      /** @type {?} */

      var to = clamp$1(toIndex, array.length - 1);

      if (from === to) {
        return;
      }
      /** @type {?} */


      var target = array[from];
      /** @type {?} */

      var delta = to < from ? -1 : 1;

      for (var i = from; i !== to; i += delta) {
        array[i] = array[i + delta];
      }

      array[to] = target;
    }
    /**
     * Moves an item from one array to another.
     * @template T
     * @param {?} currentArray Array from which to transfer the item.
     * @param {?} targetArray Array into which to put the item.
     * @param {?} currentIndex Index of the item in its current array.
     * @param {?} targetIndex Index at which to insert the item.
     * @return {?}
     */


    function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
      /** @type {?} */
      var from = clamp$1(currentIndex, currentArray.length - 1);
      /** @type {?} */

      var to = clamp$1(targetIndex, targetArray.length);

      if (currentArray.length) {
        targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
      }
    }
    /**
     * Copies an item from one array to another, leaving it in its
     * original position in current array.
     * @template T
     * @param {?} currentArray Array from which to copy the item.
     * @param {?} targetArray Array into which is copy the item.
     * @param {?} currentIndex Index of the item in its current array.
     * @param {?} targetIndex Index at which to insert the item.
     *
     * @return {?}
     */


    function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
      /** @type {?} */
      var to = clamp$1(targetIndex, targetArray.length);

      if (currentArray.length) {
        targetArray.splice(to, 0, currentArray[currentIndex]);
      }
    }
    /**
     * Clamps a number between zero and a maximum.
     * @param {?} value
     * @param {?} max
     * @return {?}
     */


    function clamp$1(value, max) {
      return Math.max(0, Math.min(max, value));
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Counter used to generate unique ids for drop refs.
     * @type {?}
     */


    var _uniqueIdCounter = 0;
    /**
     * Proximity, as a ratio to width/height, at which a
     * dragged item will affect the drop container.
     * @type {?}
     */

    var DROP_PROXIMITY_THRESHOLD = 0.05;
    /**
     * Proximity, as a ratio to width/height at which to start auto-scrolling the drop list or the
     * viewport. The value comes from trying it out manually until it feels right.
     * @type {?}
     */

    var SCROLL_PROXIMITY_THRESHOLD = 0.05;
    /**
     * Number of pixels to scroll for each frame when auto-scrolling an element.
     * The value comes from trying it out manually until it feels right.
     * @type {?}
     */

    var AUTO_SCROLL_STEP = 2;
    /**
     * Reference to a drop list. Used to manipulate or dispose of the container.
     * \@docs-private
     * @template T
     */

    var DropListRef = /*#__PURE__*/function () {
      /**
       * @param {?} element
       * @param {?} _dragDropRegistry
       * @param {?} _document
       * @param {?=} _ngZone
       * @param {?=} _viewportRuler
       */
      function DropListRef(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
        var _this8 = this;

        _classCallCheck(this, DropListRef);

        this._dragDropRegistry = _dragDropRegistry;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        /**
         * Unique ID for the drop list.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 8.0.0
         */

        this.id = "cdk-drop-list-ref-".concat(_uniqueIdCounter++);
        /**
         * Whether starting a dragging sequence from this container is disabled.
         */

        this.disabled = false;
        /**
         * Whether sorting items within the list is disabled.
         */

        this.sortingDisabled = false;
        /**
         * Whether auto-scrolling the view when the user
         * moves their pointer close to the edges is disabled.
         */

        this.autoScrollDisabled = false;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */

        this.enterPredicate =
        /**
        * @return {?}
        */
        function () {
          return true;
        };
        /**
         * Emits right before dragging has started.
         */


        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */

        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */

        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user drops an item inside the container.
         */

        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */

        this.sorted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Whether an item in the list is being dragged.
         */

        this._isDragging = false;
        /**
         * Cache of the dimensions of all the items inside the container.
         */

        this._itemPositions = [];
        /**
         * Keeps track of the container's scroll position.
         */

        this._scrollPosition = {
          top: 0,
          left: 0
        };
        /**
         * Keeps track of the scroll position of the viewport.
         */

        this._viewportScrollPosition = {
          top: 0,
          left: 0
        };
        /**
         * Keeps track of the item that was last swapped with the dragged item, as
         * well as what direction the pointer was moving in when the swap occured.
         */

        this._previousSwap = {
          drag:
          /** @type {?} */
          null,
          delta: 0
        };
        /**
         * Drop lists that are connected to the current one.
         */

        this._siblings = [];
        /**
         * Direction in which the list is oriented.
         */

        this._orientation = 'vertical';
        /**
         * Connected siblings that currently have a dragged item.
         */

        this._activeSiblings = new Set();
        /**
         * Layout direction of the drop list.
         */

        this._direction = 'ltr';
        /**
         * Subscription to the window being scrolled.
         */

        this._viewportScrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Vertical direction in which the list is currently scrolling.
         */

        this._verticalScrollDirection = 0
        /* NONE */
        ;
        /**
         * Horizontal direction in which the list is currently scrolling.
         */

        this._horizontalScrollDirection = 0
        /* NONE */
        ;
        /**
         * Used to signal to the current auto-scroll sequence when to stop.
         */

        this._stopScrollTimers = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Handles the container being scrolled. Has to be an arrow function to preserve the context.
         */

        this._handleScroll =
        /**
        * @return {?}
        */
        function () {
          if (!_this8.isDragging()) {
            return;
          }
          /** @type {?} */


          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(_this8.element);

          _this8._updateAfterScroll(_this8._scrollPosition, element.scrollTop, element.scrollLeft);
        };
        /**
         * Starts the interval that'll auto-scroll the element.
         */


        this._startScrollInterval =
        /**
        * @return {?}
        */
        function () {
          _this8._stopScrolling();

          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(0, rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this8._stopScrollTimers)).subscribe(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var node = _this8._scrollNode;

            if (_this8._verticalScrollDirection === 1
            /* UP */
            ) {
                incrementVerticalScroll(node, -AUTO_SCROLL_STEP);
              } else if (_this8._verticalScrollDirection === 2
            /* DOWN */
            ) {
                incrementVerticalScroll(node, AUTO_SCROLL_STEP);
              }

            if (_this8._horizontalScrollDirection === 1
            /* LEFT */
            ) {
                incrementHorizontalScroll(node, -AUTO_SCROLL_STEP);
              } else if (_this8._horizontalScrollDirection === 2
            /* RIGHT */
            ) {
                incrementHorizontalScroll(node, AUTO_SCROLL_STEP);
              }
          });
        };
        /** @type {?} */


        var nativeNode = this.element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(element);
        this._shadowRoot = getShadowRoot(nativeNode) || _document;

        _dragDropRegistry.registerDropContainer(this);
      }
      /**
       * Removes the drop list functionality from the DOM element.
       * @return {?}
       */


      _createClass(DropListRef, [{
        key: "dispose",
        value: function dispose() {
          this._stopScrolling();

          this._stopScrollTimers.complete();

          this._removeListeners();

          this.beforeStarted.complete();
          this.entered.complete();
          this.exited.complete();
          this.dropped.complete();
          this.sorted.complete();

          this._activeSiblings.clear();

          this._scrollNode =
          /** @type {?} */
          null;

          this._dragDropRegistry.removeDropContainer(this);
        }
        /**
         * Whether an item from this list is currently being dragged.
         * @return {?}
         */

      }, {
        key: "isDragging",
        value: function isDragging() {
          return this._isDragging;
        }
        /**
         * Starts dragging an item.
         * @return {?}
         */

      }, {
        key: "start",
        value: function start() {
          var _this9 = this;

          /** @type {?} */
          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);
          this.beforeStarted.next();
          this._isDragging = true;

          this._cacheItems();

          this._siblings.forEach(
          /**
          * @param {?} sibling
          * @return {?}
          */
          function (sibling) {
            return sibling._startReceiving(_this9);
          });

          this._removeListeners(); // @breaking-change 9.0.0 Remove check for _ngZone once it's marked as a required param.


          if (this._ngZone) {
            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              return element.addEventListener('scroll', _this9._handleScroll);
            });
          } else {
            element.addEventListener('scroll', this._handleScroll);
          } // @breaking-change 9.0.0 Remove check for _viewportRuler once it's marked as a required param.


          if (this._viewportRuler) {
            this._listenToScrollEvents();
          }
        }
        /**
         * Emits an event to indicate that the user moved an item into the container.
         * @param {?} item Item that was moved into the container.
         * @param {?} pointerX Position of the item along the X axis.
         * @param {?} pointerY Position of the item along the Y axis.
         * @return {?}
         */

      }, {
        key: "enter",
        value: function enter(item, pointerX, pointerY) {
          this.start(); // If sorting is disabled, we want the item to return to its starting
          // position if the user is returning it to its initial container.

          /** @type {?} */

          var newIndex = this.sortingDisabled ? this._draggables.indexOf(item) : -1;

          if (newIndex === -1) {
            // We use the coordinates of where the item entered the drop
            // zone to figure out at which index it should be inserted.
            newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
          }
          /** @type {?} */


          var activeDraggables = this._activeDraggables;
          /** @type {?} */

          var currentIndex = activeDraggables.indexOf(item);
          /** @type {?} */

          var placeholder = item.getPlaceholderElement();
          /** @type {?} */

          var newPositionReference = activeDraggables[newIndex]; // If the item at the new position is the same as the item that is being dragged,
          // it means that we're trying to restore the item to its initial position. In this
          // case we should use the next item from the list as the reference.

          if (newPositionReference === item) {
            newPositionReference = activeDraggables[newIndex + 1];
          } // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
          // into another container and back again), we have to ensure that it isn't duplicated.


          if (currentIndex > -1) {
            activeDraggables.splice(currentIndex, 1);
          } // Don't use items that are being dragged as a reference, because
          // their element has been moved down to the bottom of the body.


          if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
            /** @type {?} */
            var element = newPositionReference.getRootElement();

            /** @type {?} */
            element.parentElement.insertBefore(placeholder, element);
            activeDraggables.splice(newIndex, 0, item);
          } else {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element).appendChild(placeholder);
            activeDraggables.push(item);
          } // The transform needs to be cleared so it doesn't throw off the measurements.


          placeholder.style.transform = ''; // Note that the positions were already cached when we called `start` above,
          // but we need to refresh them since the amount of items has changed.

          this._cacheItemPositions();

          this.entered.next({
            item: item,
            container: this,
            currentIndex: this.getItemIndex(item)
          });
        }
        /**
         * Removes an item from the container after it was dragged into another container by the user.
         * @param {?} item Item that was dragged out.
         * @return {?}
         */

      }, {
        key: "exit",
        value: function exit(item) {
          this._reset();

          this.exited.next({
            item: item,
            container: this
          });
        }
        /**
         * Drops an item into this container.
         * \@breaking-change 9.0.0 `distance` parameter to become required.
         * @param {?} item Item being dropped into the container.
         * @param {?} currentIndex Index at which the item should be inserted.
         * @param {?} previousContainer Container from which the item got dragged in.
         * @param {?} isPointerOverContainer Whether the user's pointer was over the
         *    container when the item was dropped.
         * @param {?=} distance Distance the user has dragged since the start of the dragging sequence.
         * @return {?}
         */

      }, {
        key: "drop",
        value: function drop(item, currentIndex, previousContainer, isPointerOverContainer) {
          var distance = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
            x: 0,
            y: 0
          };

          this._reset();

          this.dropped.next({
            item: item,
            currentIndex: currentIndex,
            previousIndex: previousContainer.getItemIndex(item),
            container: this,
            previousContainer: previousContainer,
            isPointerOverContainer: isPointerOverContainer,
            distance: distance
          });
        }
        /**
         * Sets the draggable items that are a part of this list.
         * @template THIS
         * @this {THIS}
         * @param {?} items Items that are a part of this list.
         * @return {THIS}
         */

      }, {
        key: "withItems",
        value: function withItems(items) {
          var _this10 = this;

          /** @type {?} */
          this._draggables = items;
          items.forEach(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item._withDropContainer(
            /** @type {?} */
            _this10);
          });

          if (
          /** @type {?} */
          this.isDragging()) {
            /** @type {?} */
            this._cacheItems();
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the layout direction of the drop list.
         * @template THIS
         * @this {THIS}
         * @param {?} direction
         * @return {THIS}
         */

      }, {
        key: "withDirection",
        value: function withDirection(direction) {
          /** @type {?} */
          this._direction = direction;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the containers that are connected to this one. When two or more containers are
         * connected, the user will be allowed to transfer items between them.
         * @template THIS
         * @this {THIS}
         * @param {?} connectedTo Other containers that the current containers should be connected to.
         * @return {THIS}
         */

      }, {
        key: "connectedTo",
        value: function connectedTo(_connectedTo) {
          /** @type {?} */
          this._siblings = _connectedTo.slice();
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the orientation of the container.
         * @template THIS
         * @this {THIS}
         * @param {?} orientation New orientation for the container.
         * @return {THIS}
         */

      }, {
        key: "withOrientation",
        value: function withOrientation(orientation) {
          /** @type {?} */
          this._orientation = orientation;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Figures out the index of an item in the container.
         * @param {?} item Item whose index should be determined.
         * @return {?}
         */

      }, {
        key: "getItemIndex",
        value: function getItemIndex(item) {
          if (!this._isDragging) {
            return this._draggables.indexOf(item);
          } // Items are sorted always by top/left in the cache, however they flow differently in RTL.
          // The rest of the logic still stands no matter what orientation we're in, however
          // we need to invert the array when determining the index.

          /** @type {?} */


          var items = this._orientation === 'horizontal' && this._direction === 'rtl' ? this._itemPositions.slice().reverse() : this._itemPositions;
          return findIndex(items,
          /**
          * @param {?} currentItem
          * @return {?}
          */
          function (currentItem) {
            return currentItem.drag === item;
          });
        }
        /**
         * Whether the list is able to receive the item that
         * is currently being dragged inside a connected drop list.
         * @return {?}
         */

      }, {
        key: "isReceiving",
        value: function isReceiving() {
          return this._activeSiblings.size > 0;
        }
        /**
         * Sorts an item inside the container based on its position.
         * @param {?} item Item to be sorted.
         * @param {?} pointerX Position of the item along the X axis.
         * @param {?} pointerY Position of the item along the Y axis.
         * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
         * @return {?}
         */

      }, {
        key: "_sortItem",
        value: function _sortItem(item, pointerX, pointerY, pointerDelta) {
          // Don't sort the item if sorting is disabled or it's out of range.
          if (this.sortingDisabled || !this._isPointerNearDropContainer(pointerX, pointerY)) {
            return;
          }
          /** @type {?} */


          var siblings = this._itemPositions;
          /** @type {?} */

          var newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);

          if (newIndex === -1 && siblings.length > 0) {
            return;
          }
          /** @type {?} */


          var isHorizontal = this._orientation === 'horizontal';
          /** @type {?} */

          var currentIndex = findIndex(siblings,
          /**
          * @param {?} currentItem
          * @return {?}
          */
          function (currentItem) {
            return currentItem.drag === item;
          });
          /** @type {?} */

          var siblingAtNewPosition = siblings[newIndex];
          /** @type {?} */

          var currentPosition = siblings[currentIndex].clientRect;
          /** @type {?} */

          var newPosition = siblingAtNewPosition.clientRect;
          /** @type {?} */

          var delta = currentIndex > newIndex ? 1 : -1;
          this._previousSwap.drag = siblingAtNewPosition.drag;
          this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y; // How many pixels the item's placeholder should be offset.

          /** @type {?} */

          var itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta); // How many pixels all the other items should be offset.

          /** @type {?} */


          var siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta); // Save the previous order of the items before moving the item to its new index.
          // We use this to check whether an item has been moved as a result of the sorting.

          /** @type {?} */


          var oldOrder = siblings.slice(); // Shuffle the array in place.

          moveItemInArray(siblings, currentIndex, newIndex);
          this.sorted.next({
            previousIndex: currentIndex,
            currentIndex: newIndex,
            container: this,
            item: item
          });
          siblings.forEach(
          /**
          * @param {?} sibling
          * @param {?} index
          * @return {?}
          */
          function (sibling, index) {
            // Don't do anything if the position hasn't changed.
            if (oldOrder[index] === sibling) {
              return;
            }
            /** @type {?} */


            var isDraggedItem = sibling.drag === item;
            /** @type {?} */

            var offset = isDraggedItem ? itemOffset : siblingOffset;
            /** @type {?} */

            var elementToOffset = isDraggedItem ? item.getPlaceholderElement() : sibling.drag.getRootElement(); // Update the offset to reflect the new position.

            sibling.offset += offset; // Since we're moving the items with a `transform`, we need to adjust their cached
            // client rects to reflect their new position, as well as swap their positions in the cache.
            // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
            // elements may be mid-animation which will give us a wrong result.

            if (isHorizontal) {
              // Round the transforms since some browsers will
              // blur the elements, for sub-pixel transforms.
              elementToOffset.style.transform = "translate3d(".concat(Math.round(sibling.offset), "px, 0, 0)");
              adjustClientRect(sibling.clientRect, 0, offset);
            } else {
              elementToOffset.style.transform = "translate3d(0, ".concat(Math.round(sibling.offset), "px, 0)");
              adjustClientRect(sibling.clientRect, offset, 0);
            }
          });
        }
        /**
         * Checks whether the user's pointer is close to the edges of either the
         * viewport or the drop list and starts the auto-scroll sequence.
         * @param {?} pointerX User's pointer position along the x axis.
         * @param {?} pointerY User's pointer position along the y axis.
         * @return {?}
         */

      }, {
        key: "_startScrollingIfNecessary",
        value: function _startScrollingIfNecessary(pointerX, pointerY) {
          if (this.autoScrollDisabled) {
            return;
          }
          /** @type {?} */


          var scrollNode;
          /** @type {?} */

          var verticalScrollDirection = 0
          /* NONE */
          ;
          /** @type {?} */

          var horizontalScrollDirection = 0
          /* NONE */
          ; // Check whether we should start scrolling the container.

          if (this._isPointerNearDropContainer(pointerX, pointerY)) {
            /** @type {?} */
            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);

            var _getElementScrollDire = getElementScrollDirections(element, this._clientRect, pointerX, pointerY);

            var _getElementScrollDire2 = _slicedToArray(_getElementScrollDire, 2);

            verticalScrollDirection = _getElementScrollDire2[0];
            horizontalScrollDirection = _getElementScrollDire2[1];

            if (verticalScrollDirection || horizontalScrollDirection) {
              scrollNode = element;
            }
          } // @breaking-change 9.0.0 Remove null check for _viewportRuler once it's a required parameter.
          // Otherwise check if we can start scrolling the viewport.


          if (this._viewportRuler && !verticalScrollDirection && !horizontalScrollDirection) {
            var _this$_viewportRuler$ = this._viewportRuler.getViewportSize(),
                width = _this$_viewportRuler$.width,
                height = _this$_viewportRuler$.height;
            /** @type {?} */


            var clientRect = {
              width: width,
              height: height,
              top: 0,
              right: width,
              bottom: height,
              left: 0
            };
            verticalScrollDirection = getVerticalScrollDirection(clientRect, pointerY);
            horizontalScrollDirection = getHorizontalScrollDirection(clientRect, pointerX);
            scrollNode = window;
          }

          if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection || horizontalScrollDirection !== this._horizontalScrollDirection || scrollNode !== this._scrollNode)) {
            this._verticalScrollDirection = verticalScrollDirection;
            this._horizontalScrollDirection = horizontalScrollDirection;
            this._scrollNode = scrollNode;

            if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
              // @breaking-change 9.0.0 Remove null check for `_ngZone` once it is made required.
              if (this._ngZone) {
                this._ngZone.runOutsideAngular(this._startScrollInterval);
              } else {
                this._startScrollInterval();
              }
            } else {
              this._stopScrolling();
            }
          }
        }
        /**
         * Stops any currently-running auto-scroll sequences.
         * @return {?}
         */

      }, {
        key: "_stopScrolling",
        value: function _stopScrolling() {
          this._stopScrollTimers.next();
        }
        /**
         * Caches the position of the drop list.
         * @private
         * @return {?}
         */

      }, {
        key: "_cacheOwnPosition",
        value: function _cacheOwnPosition() {
          /** @type {?} */
          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);
          this._clientRect = getMutableClientRect(element);
          this._scrollPosition = {
            top: element.scrollTop,
            left: element.scrollLeft
          };
        }
        /**
         * Refreshes the position cache of the items and sibling containers.
         * @private
         * @return {?}
         */

      }, {
        key: "_cacheItemPositions",
        value: function _cacheItemPositions() {
          var _this11 = this;

          /** @type {?} */
          var isHorizontal = this._orientation === 'horizontal';
          this._itemPositions = this._activeDraggables.map(
          /**
          * @param {?} drag
          * @return {?}
          */
          function (drag) {
            /** @type {?} */
            var elementToMeasure = _this11._dragDropRegistry.isDragging(drag) ? // If the element is being dragged, we have to measure the
            // placeholder, because the element is hidden.
            drag.getPlaceholderElement() : drag.getRootElement();
            return {
              drag: drag,
              offset: 0,
              clientRect: getMutableClientRect(elementToMeasure)
            };
          }).sort(
          /**
          * @param {?} a
          * @param {?} b
          * @return {?}
          */
          function (a, b) {
            return isHorizontal ? a.clientRect.left - b.clientRect.left : a.clientRect.top - b.clientRect.top;
          });
        }
        /**
         * Resets the container to its initial state.
         * @private
         * @return {?}
         */

      }, {
        key: "_reset",
        value: function _reset() {
          var _this12 = this;

          this._isDragging = false; // TODO(crisbeto): may have to wait for the animations to finish.

          this._activeDraggables.forEach(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item.getRootElement().style.transform = '';
          });

          this._siblings.forEach(
          /**
          * @param {?} sibling
          * @return {?}
          */
          function (sibling) {
            return sibling._stopReceiving(_this12);
          });

          this._activeDraggables = [];
          this._itemPositions = [];
          this._previousSwap.drag = null;
          this._previousSwap.delta = 0;

          this._stopScrolling();

          this._removeListeners();
        }
        /**
         * Gets the offset in pixels by which the items that aren't being dragged should be moved.
         * @private
         * @param {?} currentIndex Index of the item currently being dragged.
         * @param {?} siblings All of the items in the list.
         * @param {?} delta Direction in which the user is moving.
         * @return {?}
         */

      }, {
        key: "_getSiblingOffsetPx",
        value: function _getSiblingOffsetPx(currentIndex, siblings, delta) {
          /** @type {?} */
          var isHorizontal = this._orientation === 'horizontal';
          /** @type {?} */

          var currentPosition = siblings[currentIndex].clientRect;
          /** @type {?} */

          var immediateSibling = siblings[currentIndex + delta * -1];
          /** @type {?} */

          var siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;

          if (immediateSibling) {
            /** @type {?} */
            var start = isHorizontal ? 'left' : 'top';
            /** @type {?} */

            var end = isHorizontal ? 'right' : 'bottom'; // Get the spacing between the start of the current item and the end of the one immediately
            // after it in the direction in which the user is dragging, or vice versa. We add it to the
            // offset in order to push the element to where it will be when it's inline and is influenced
            // by the `margin` of its siblings.

            if (delta === -1) {
              siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
            } else {
              siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
            }
          }

          return siblingOffset;
        }
        /**
         * Checks whether the pointer coordinates are close to the drop container.
         * @private
         * @param {?} pointerX Coordinates along the X axis.
         * @param {?} pointerY Coordinates along the Y axis.
         * @return {?}
         */

      }, {
        key: "_isPointerNearDropContainer",
        value: function _isPointerNearDropContainer(pointerX, pointerY) {
          var _this$_clientRect = this._clientRect,
              top = _this$_clientRect.top,
              right = _this$_clientRect.right,
              bottom = _this$_clientRect.bottom,
              left = _this$_clientRect.left,
              width = _this$_clientRect.width,
              height = _this$_clientRect.height;
          /** @type {?} */

          var xThreshold = width * DROP_PROXIMITY_THRESHOLD;
          /** @type {?} */

          var yThreshold = height * DROP_PROXIMITY_THRESHOLD;
          return pointerY > top - yThreshold && pointerY < bottom + yThreshold && pointerX > left - xThreshold && pointerX < right + xThreshold;
        }
        /**
         * Gets the offset in pixels by which the item that is being dragged should be moved.
         * @private
         * @param {?} currentPosition Current position of the item.
         * @param {?} newPosition Position of the item where the current item should be moved.
         * @param {?} delta Direction in which the user is moving.
         * @return {?}
         */

      }, {
        key: "_getItemOffsetPx",
        value: function _getItemOffsetPx(currentPosition, newPosition, delta) {
          /** @type {?} */
          var isHorizontal = this._orientation === 'horizontal';
          /** @type {?} */

          var itemOffset = isHorizontal ? newPosition.left - currentPosition.left : newPosition.top - currentPosition.top; // Account for differences in the item width/height.

          if (delta === -1) {
            itemOffset += isHorizontal ? newPosition.width - currentPosition.width : newPosition.height - currentPosition.height;
          }

          return itemOffset;
        }
        /**
         * Gets the index of an item in the drop container, based on the position of the user's pointer.
         * @private
         * @param {?} item Item that is being sorted.
         * @param {?} pointerX Position of the user's pointer along the X axis.
         * @param {?} pointerY Position of the user's pointer along the Y axis.
         * @param {?=} delta Direction in which the user is moving their pointer.
         * @return {?}
         */

      }, {
        key: "_getItemIndexFromPointerPosition",
        value: function _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
          var _this13 = this;

          /** @type {?} */
          var isHorizontal = this._orientation === 'horizontal';
          return findIndex(this._itemPositions,
          /**
          * @param {?} __0
          * @param {?} _
          * @param {?} array
          * @return {?}
          */
          function (_ref2, _, array) {
            var drag = _ref2.drag,
                clientRect = _ref2.clientRect;

            if (drag === item) {
              // If there's only one item left in the container, it must be
              // the dragged item itself so we use it as a reference.
              return array.length < 2;
            }

            if (delta) {
              /** @type {?} */
              var direction = isHorizontal ? delta.x : delta.y; // If the user is still hovering over the same item as last time, and they didn't change
              // the direction in which they're dragging, we don't consider it a direction swap.

              if (drag === _this13._previousSwap.drag && direction === _this13._previousSwap.delta) {
                return false;
              }
            }

            return isHorizontal ? // Round these down since most browsers report client rects with
            // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
            pointerX >= Math.floor(clientRect.left) && pointerX <= Math.floor(clientRect.right) : pointerY >= Math.floor(clientRect.top) && pointerY <= Math.floor(clientRect.bottom);
          });
        }
        /**
         * Caches the current items in the list and their positions.
         * @private
         * @return {?}
         */

      }, {
        key: "_cacheItems",
        value: function _cacheItems() {
          this._activeDraggables = this._draggables.slice();

          this._cacheItemPositions();

          this._cacheOwnPosition();
        }
        /**
         * Updates the internal state of the container after a scroll event has happened.
         * @private
         * @param {?} scrollPosition Object that is keeping track of the scroll position.
         * @param {?} newTop New top scroll position.
         * @param {?} newLeft New left scroll position.
         * @param {?=} extraClientRect Extra `ClientRect` object that should be updated, in addition to the
         *  ones of the drag items. Useful when the viewport has been scrolled and we also need to update
         *  the `ClientRect` of the list.
         * @return {?}
         */

      }, {
        key: "_updateAfterScroll",
        value: function _updateAfterScroll(scrollPosition, newTop, newLeft, extraClientRect) {
          var _this14 = this;

          /** @type {?} */
          var topDifference = scrollPosition.top - newTop;
          /** @type {?} */

          var leftDifference = scrollPosition.left - newLeft;

          if (extraClientRect) {
            adjustClientRect(extraClientRect, topDifference, leftDifference);
          } // Since we know the amount that the user has scrolled we can shift all of the client rectangles
          // ourselves. This is cheaper than re-measuring everything and we can avoid inconsistent
          // behavior where we might be measuring the element before its position has changed.


          this._itemPositions.forEach(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref3) {
            var clientRect = _ref3.clientRect;
            adjustClientRect(clientRect, topDifference, leftDifference);
          }); // We need two loops for this, because we want all of the cached
          // positions to be up-to-date before we re-sort the item.


          this._itemPositions.forEach(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref4) {
            var drag = _ref4.drag;

            if (_this14._dragDropRegistry.isDragging(drag)) {
              // We need to re-sort the item manually, because the pointer move
              // events won't be dispatched while the user is scrolling.
              drag._sortFromLastPointerPosition();
            }
          });

          scrollPosition.top = newTop;
          scrollPosition.left = newLeft;
        }
        /**
         * Removes the event listeners associated with this drop list.
         * @private
         * @return {?}
         */

      }, {
        key: "_removeListeners",
        value: function _removeListeners() {
          Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element).removeEventListener('scroll', this._handleScroll);

          this._viewportScrollSubscription.unsubscribe();
        }
        /**
         * Checks whether the user's pointer is positioned over the container.
         * @param {?} x Pointer position along the X axis.
         * @param {?} y Pointer position along the Y axis.
         * @return {?}
         */

      }, {
        key: "_isOverContainer",
        value: function _isOverContainer(x, y) {
          return isInsideClientRect(this._clientRect, x, y);
        }
        /**
         * Figures out whether an item should be moved into a sibling
         * drop container, based on its current position.
         * @param {?} item Drag item that is being moved.
         * @param {?} x Position of the item along the X axis.
         * @param {?} y Position of the item along the Y axis.
         * @return {?}
         */

      }, {
        key: "_getSiblingContainerFromPosition",
        value: function _getSiblingContainerFromPosition(item, x, y) {
          return this._siblings.find(
          /**
          * @param {?} sibling
          * @return {?}
          */
          function (sibling) {
            return sibling._canReceive(item, x, y);
          });
        }
        /**
         * Checks whether the drop list can receive the passed-in item.
         * @param {?} item Item that is being dragged into the list.
         * @param {?} x Position of the item along the X axis.
         * @param {?} y Position of the item along the Y axis.
         * @return {?}
         */

      }, {
        key: "_canReceive",
        value: function _canReceive(item, x, y) {
          if (!this.enterPredicate(item, this) || !isInsideClientRect(this._clientRect, x, y)) {
            return false;
          }
          /** @type {?} */


          var elementFromPoint =
          /** @type {?} */
          this._shadowRoot.elementFromPoint(x, y); // If there's no element at the pointer position, then
          // the client rect is probably scrolled out of the view.


          if (!elementFromPoint) {
            return false;
          }
          /** @type {?} */


          var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element); // The `ClientRect`, that we're using to find the container over which the user is
          // hovering, doesn't give us any information on whether the element has been scrolled
          // out of the view or whether it's overlapping with other containers. This means that
          // we could end up transferring the item into a container that's invisible or is positioned
          // below another one. We use the result from `elementFromPoint` to get the top-most element
          // at the pointer position and to find whether it's one of the intersecting drop containers.

          return elementFromPoint === nativeElement || nativeElement.contains(elementFromPoint);
        }
        /**
         * Called by one of the connected drop lists when a dragging sequence has started.
         * @param {?} sibling Sibling in which dragging has started.
         * @return {?}
         */

      }, {
        key: "_startReceiving",
        value: function _startReceiving(sibling) {
          /** @type {?} */
          var activeSiblings = this._activeSiblings;

          if (!activeSiblings.has(sibling)) {
            activeSiblings.add(sibling);

            this._cacheOwnPosition();

            this._listenToScrollEvents();
          }
        }
        /**
         * Called by a connected drop list when dragging has stopped.
         * @param {?} sibling Sibling whose dragging has stopped.
         * @return {?}
         */

      }, {
        key: "_stopReceiving",
        value: function _stopReceiving(sibling) {
          this._activeSiblings["delete"](sibling);

          this._viewportScrollSubscription.unsubscribe();
        }
        /**
         * Starts listening to scroll events on the viewport.
         * Used for updating the internal state of the list.
         * @private
         * @return {?}
         */

      }, {
        key: "_listenToScrollEvents",
        value: function _listenToScrollEvents() {
          var _this15 = this;

          this._viewportScrollPosition =
          /** @type {?} */
          this._viewportRuler.getViewportScrollPosition();
          this._viewportScrollSubscription = this._dragDropRegistry.scroll.subscribe(
          /**
          * @return {?}
          */
          function () {
            if (_this15.isDragging()) {
              /** @type {?} */
              var newPosition =
              /** @type {?} */
              _this15._viewportRuler.getViewportScrollPosition();

              _this15._updateAfterScroll(_this15._viewportScrollPosition, newPosition.top, newPosition.left, _this15._clientRect);
            } else if (_this15.isReceiving()) {
              _this15._cacheOwnPosition();
            }
          });
        }
      }]);

      return DropListRef;
    }();
    /**
     * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
     * @param {?} clientRect `ClientRect` that should be updated.
     * @param {?} top Amount to add to the `top` position.
     * @param {?} left Amount to add to the `left` position.
     * @return {?}
     */


    function adjustClientRect(clientRect, top, left) {
      clientRect.top += top;
      clientRect.bottom = clientRect.top + clientRect.height;
      clientRect.left += left;
      clientRect.right = clientRect.left + clientRect.width;
    }
    /**
     * Finds the index of an item that matches a predicate function. Used as an equivalent
     * of `Array.prototype.findIndex` which isn't part of the standard Google typings.
     * @template T
     * @param {?} array Array in which to look for matches.
     * @param {?} predicate Function used to determine whether an item is a match.
     * @return {?}
     */


    function findIndex(array, predicate) {
      for (var i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
          return i;
        }
      }

      return -1;
    }
    /**
     * Checks whether some coordinates are within a `ClientRect`.
     * @param {?} clientRect ClientRect that is being checked.
     * @param {?} x Coordinates along the X axis.
     * @param {?} y Coordinates along the Y axis.
     * @return {?}
     */


    function isInsideClientRect(clientRect, x, y) {
      var top = clientRect.top,
          bottom = clientRect.bottom,
          left = clientRect.left,
          right = clientRect.right;
      return y >= top && y <= bottom && x >= left && x <= right;
    }
    /**
     * Gets a mutable version of an element's bounding `ClientRect`.
     * @param {?} element
     * @return {?}
     */


    function getMutableClientRect(element) {
      /** @type {?} */
      var clientRect = element.getBoundingClientRect(); // We need to clone the `clientRect` here, because all the values on it are readonly
      // and we need to be able to update them. Also we can't use a spread here, because
      // the values on a `ClientRect` aren't own properties. See:
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes

      return {
        top: clientRect.top,
        right: clientRect.right,
        bottom: clientRect.bottom,
        left: clientRect.left,
        width: clientRect.width,
        height: clientRect.height
      };
    }
    /**
     * Increments the vertical scroll position of a node.
     * @param {?} node Node whose scroll position should change.
     * @param {?} amount Amount of pixels that the `node` should be scrolled.
     * @return {?}
     */


    function incrementVerticalScroll(node, amount) {
      if (node === window) {
        /** @type {?} */
        node.scrollBy(0, amount);
      } else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.

        /** @type {?} */
        node.scrollTop += amount;
      }
    }
    /**
     * Increments the horizontal scroll position of a node.
     * @param {?} node Node whose scroll position should change.
     * @param {?} amount Amount of pixels that the `node` should be scrolled.
     * @return {?}
     */


    function incrementHorizontalScroll(node, amount) {
      if (node === window) {
        /** @type {?} */
        node.scrollBy(amount, 0);
      } else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.

        /** @type {?} */
        node.scrollLeft += amount;
      }
    }
    /**
     * Gets whether the vertical auto-scroll direction of a node.
     * @param {?} clientRect Dimensions of the node.
     * @param {?} pointerY Position of the user's pointer along the y axis.
     * @return {?}
     */


    function getVerticalScrollDirection(clientRect, pointerY) {
      var top = clientRect.top,
          bottom = clientRect.bottom,
          height = clientRect.height;
      /** @type {?} */

      var yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;

      if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
        return 1
        /* UP */
        ;
      } else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
        return 2
        /* DOWN */
        ;
      }

      return 0
      /* NONE */
      ;
    }
    /**
     * Gets whether the horizontal auto-scroll direction of a node.
     * @param {?} clientRect Dimensions of the node.
     * @param {?} pointerX Position of the user's pointer along the x axis.
     * @return {?}
     */


    function getHorizontalScrollDirection(clientRect, pointerX) {
      var left = clientRect.left,
          right = clientRect.right,
          width = clientRect.width;
      /** @type {?} */

      var xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;

      if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
        return 1
        /* LEFT */
        ;
      } else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
        return 2
        /* RIGHT */
        ;
      }

      return 0
      /* NONE */
      ;
    }
    /**
     * Gets the directions in which an element node should be scrolled,
     * assuming that the user's pointer is already within it scrollable region.
     * @param {?} element Element for which we should calculate the scroll direction.
     * @param {?} clientRect Bounding client rectangle of the element.
     * @param {?} pointerX Position of the user's pointer along the x axis.
     * @param {?} pointerY Position of the user's pointer along the y axis.
     * @return {?}
     */


    function getElementScrollDirections(element, clientRect, pointerX, pointerY) {
      /** @type {?} */
      var computedVertical = getVerticalScrollDirection(clientRect, pointerY);
      /** @type {?} */

      var computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
      /** @type {?} */

      var verticalScrollDirection = 0
      /* NONE */
      ;
      /** @type {?} */

      var horizontalScrollDirection = 0
      /* NONE */
      ; // Note that we here we do some extra checks for whether the element is actually scrollable in
      // a certain direction and we only assign the scroll direction if it is. We do this so that we
      // can allow other elements to be scrolled, if the current element can't be scrolled anymore.
      // This allows us to handle cases where the scroll regions of two scrollable elements overlap.

      if (computedVertical) {
        /** @type {?} */
        var scrollTop = element.scrollTop;

        if (computedVertical === 1
        /* UP */
        ) {
            if (scrollTop > 0) {
              verticalScrollDirection = 1
              /* UP */
              ;
            }
          } else if (element.scrollHeight - scrollTop > element.clientHeight) {
          verticalScrollDirection = 2
          /* DOWN */
          ;
        }
      }

      if (computedHorizontal) {
        /** @type {?} */
        var scrollLeft = element.scrollLeft;

        if (computedHorizontal === 1
        /* LEFT */
        ) {
            if (scrollLeft > 0) {
              horizontalScrollDirection = 1
              /* LEFT */
              ;
            }
          } else if (element.scrollWidth - scrollLeft > element.clientWidth) {
          horizontalScrollDirection = 2
          /* RIGHT */
          ;
        }
      }

      return [verticalScrollDirection, horizontalScrollDirection];
    }
    /**
     * Gets the shadow root of an element, if any.
     * @param {?} element
     * @return {?}
     */


    function getShadowRoot(element) {
      if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["_supportsShadowDom"])()) {
        /** @type {?} */
        var rootNode = element.getRootNode ? element.getRootNode() : null;

        if (rootNode instanceof ShadowRoot) {
          return rootNode;
        }
      }

      return null;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Event options that can be used to bind an active, capturing event.
     * @type {?}
     */


    var activeCapturingEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({
      passive: false,
      capture: true
    });
    /**
     * Service that keeps track of all the drag item and drop container
     * instances, and manages global event listeners on the `document`.
     * \@docs-private
     * @template I, C
     */
    // Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
    // to avoid circular imports. If we were to reference them here, importing the registry into the
    // classes that are registering themselves will introduce a circular import.

    var DragDropRegistry = /*#__PURE__*/function () {
      /**
       * @param {?} _ngZone
       * @param {?} _document
       */
      function DragDropRegistry(_ngZone, _document) {
        var _this16 = this;

        _classCallCheck(this, DragDropRegistry);

        this._ngZone = _ngZone;
        /**
         * Registered drop container instances.
         */

        this._dropInstances = new Set();
        /**
         * Registered drag item instances.
         */

        this._dragInstances = new Set();
        /**
         * Drag item instances that are currently being dragged.
         */

        this._activeDragInstances = new Set();
        /**
         * Keeps track of the event listeners that we've bound to the `document`.
         */

        this._globalListeners = new Map();
        /**
         * Emits the `touchmove` or `mousemove` events that are dispatched
         * while the user is dragging a drag item instance.
         */

        this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits the `touchend` or `mouseup` events that are dispatched
         * while the user is dragging a drag item instance.
         */

        this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the viewport has been scrolled while the user is dragging an item.
         */

        this.scroll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Event listener that will prevent the default browser action while the user is dragging.
         * @param event Event whose default action should be prevented.
         */

        this._preventDefaultWhileDragging =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (_this16._activeDragInstances.size) {
            event.preventDefault();
          }
        };

        this._document = _document;
      }
      /**
       * Adds a drop container to the registry.
       * @param {?} drop
       * @return {?}
       */


      _createClass(DragDropRegistry, [{
        key: "registerDropContainer",
        value: function registerDropContainer(drop) {
          if (!this._dropInstances.has(drop)) {
            if (this.getDropContainer(drop.id)) {
              throw Error("Drop instance with id \"".concat(drop.id, "\" has already been registered."));
            }

            this._dropInstances.add(drop);
          }
        }
        /**
         * Adds a drag item instance to the registry.
         * @param {?} drag
         * @return {?}
         */

      }, {
        key: "registerDragItem",
        value: function registerDragItem(drag) {
          var _this17 = this;

          this._dragInstances.add(drag); // The `touchmove` event gets bound once, ahead of time, because WebKit
          // won't preventDefault on a dynamically-added `touchmove` listener.
          // See https://bugs.webkit.org/show_bug.cgi?id=184250.


          if (this._dragInstances.size === 1) {
            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              // The event handler has to be explicitly active,
              // because newer browsers make it passive by default.
              _this17._document.addEventListener('touchmove', _this17._preventDefaultWhileDragging, activeCapturingEventOptions);
            });
          }
        }
        /**
         * Removes a drop container from the registry.
         * @param {?} drop
         * @return {?}
         */

      }, {
        key: "removeDropContainer",
        value: function removeDropContainer(drop) {
          this._dropInstances["delete"](drop);
        }
        /**
         * Removes a drag item instance from the registry.
         * @param {?} drag
         * @return {?}
         */

      }, {
        key: "removeDragItem",
        value: function removeDragItem(drag) {
          this._dragInstances["delete"](drag);

          this.stopDragging(drag);

          if (this._dragInstances.size === 0) {
            this._document.removeEventListener('touchmove', this._preventDefaultWhileDragging, activeCapturingEventOptions);
          }
        }
        /**
         * Starts the dragging sequence for a drag instance.
         * @param {?} drag Drag instance which is being dragged.
         * @param {?} event Event that initiated the dragging.
         * @return {?}
         */

      }, {
        key: "startDragging",
        value: function startDragging(drag, event) {
          var _this18 = this;

          // Do not process the same drag twice to avoid memory leaks and redundant listeners
          if (this._activeDragInstances.has(drag)) {
            return;
          }

          this._activeDragInstances.add(drag);

          if (this._activeDragInstances.size === 1) {
            /** @type {?} */
            var _isTouchEvent = event.type.startsWith('touch');
            /** @type {?} */


            var moveEvent = _isTouchEvent ? 'touchmove' : 'mousemove';
            /** @type {?} */

            var upEvent = _isTouchEvent ? 'touchend' : 'mouseup'; // We explicitly bind __active__ listeners here, because newer browsers will default to
            // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
            // use `preventDefault` to prevent the page from scrolling while the user is dragging.

            this._globalListeners.set(moveEvent, {
              handler:
              /**
              * @param {?} e
              * @return {?}
              */
              function handler(e) {
                return _this18.pointerMove.next(
                /** @type {?} */
                e);
              },
              options: activeCapturingEventOptions
            }).set(upEvent, {
              handler:
              /**
              * @param {?} e
              * @return {?}
              */
              function handler(e) {
                return _this18.pointerUp.next(
                /** @type {?} */
                e);
              },
              options: true
            }).set('scroll', {
              handler:
              /**
              * @param {?} e
              * @return {?}
              */
              function handler(e) {
                return _this18.scroll.next(e);
              },
              // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
              // the document. See https://github.com/angular/components/issues/17144.
              options: true
            }) // Preventing the default action on `mousemove` isn't enough to disable text selection
            // on Safari so we need to prevent the selection event as well. Alternatively this can
            // be done by setting `user-select: none` on the `body`, however it has causes a style
            // recalculation which can be expensive on pages with a lot of elements.
            .set('selectstart', {
              handler: this._preventDefaultWhileDragging,
              options: activeCapturingEventOptions
            });

            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              _this18._globalListeners.forEach(
              /**
              * @param {?} config
              * @param {?} name
              * @return {?}
              */
              function (config, name) {
                _this18._document.addEventListener(name, config.handler, config.options);
              });
            });
          }
        }
        /**
         * Stops dragging a drag item instance.
         * @param {?} drag
         * @return {?}
         */

      }, {
        key: "stopDragging",
        value: function stopDragging(drag) {
          this._activeDragInstances["delete"](drag);

          if (this._activeDragInstances.size === 0) {
            this._clearGlobalListeners();
          }
        }
        /**
         * Gets whether a drag item instance is currently being dragged.
         * @param {?} drag
         * @return {?}
         */

      }, {
        key: "isDragging",
        value: function isDragging(drag) {
          return this._activeDragInstances.has(drag);
        }
        /**
         * Gets a drop container by its id.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 8.0.0
         * @param {?} id
         * @return {?}
         */

      }, {
        key: "getDropContainer",
        value: function getDropContainer(id) {
          return Array.from(this._dropInstances).find(
          /**
          * @param {?} instance
          * @return {?}
          */
          function (instance) {
            return instance.id === id;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this19 = this;

          this._dragInstances.forEach(
          /**
          * @param {?} instance
          * @return {?}
          */
          function (instance) {
            return _this19.removeDragItem(instance);
          });

          this._dropInstances.forEach(
          /**
          * @param {?} instance
          * @return {?}
          */
          function (instance) {
            return _this19.removeDropContainer(instance);
          });

          this._clearGlobalListeners();

          this.pointerMove.complete();
          this.pointerUp.complete();
        }
        /**
         * Clears out the global event listeners from the `document`.
         * @private
         * @return {?}
         */

      }, {
        key: "_clearGlobalListeners",
        value: function _clearGlobalListeners() {
          var _this20 = this;

          this._globalListeners.forEach(
          /**
          * @param {?} config
          * @param {?} name
          * @return {?}
          */
          function (config, name) {
            _this20._document.removeEventListener(name, config.handler, config.options);
          });

          this._globalListeners.clear();
        }
      }]);

      return DragDropRegistry;
    }();

    DragDropRegistry.ɵfac = function DragDropRegistry_Factory(t) {
      return new (t || DragDropRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]));
    };

    DragDropRegistry.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: DragDropRegistry,
      factory: DragDropRegistry.ɵfac,
      providedIn: 'root'
    });
    /** @nocollapse */

    DragDropRegistry.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    DragDropRegistry.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"])({
      factory: function DragDropRegistry_Factory() {
        return new DragDropRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]));
      },
      token: DragDropRegistry,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DragDropRegistry, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Default configuration to be used when creating a `DragRef`.
     * @type {?}
     */


    var DEFAULT_CONFIG = {
      dragStartThreshold: 5,
      pointerDirectionChangeThreshold: 5
    };
    /**
     * Service that allows for drag-and-drop functionality to be attached to DOM elements.
     */

    var DragDrop = /*#__PURE__*/function () {
      /**
       * @param {?} _document
       * @param {?} _ngZone
       * @param {?} _viewportRuler
       * @param {?} _dragDropRegistry
       */
      function DragDrop(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
        _classCallCheck(this, DragDrop);

        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
      }
      /**
       * Turns an element into a draggable item.
       * @template T
       * @param {?} element Element to which to attach the dragging functionality.
       * @param {?=} config Object used to configure the dragging behavior.
       * @return {?}
       */


      _createClass(DragDrop, [{
        key: "createDrag",
        value: function createDrag(element) {
          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_CONFIG;
          return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
        }
        /**
         * Turns an element into a drop list.
         * @template T
         * @param {?} element Element to which to attach the drop list functionality.
         * @return {?}
         */

      }, {
        key: "createDropList",
        value: function createDropList(element) {
          return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
        }
      }]);

      return DragDrop;
    }();

    DragDrop.ɵfac = function DragDrop_Factory(t) {
      return new (t || DragDrop)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](DragDropRegistry));
    };

    DragDrop.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: DragDrop,
      factory: DragDrop.ɵfac,
      providedIn: 'root'
    });
    /** @nocollapse */

    DragDrop.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ViewportRuler"]
      }, {
        type: DragDropRegistry
      }];
    };
    /** @nocollapse */


    DragDrop.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"])({
      factory: function DragDrop_Factory() {
        return new DragDrop(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(DragDropRegistry));
      },
      token: DragDrop,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DragDrop, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ViewportRuler"]
        }, {
          type: DragDropRegistry
        }];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that is used to provide a CdkDropList instance to CdkDrag.
     * Used for avoiding circular imports.
     * @type {?}
     */


    var CDK_DROP_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CDK_DROP_LIST');
    /**
     * Injection token that is used to provide a CdkDropList instance to CdkDrag.
     * Used for avoiding circular imports.
     * @deprecated Use `CDK_DROP_LIST` instead.
     * \@breaking-change 8.0.0
     * @type {?}
     */

    var CDK_DROP_LIST_CONTAINER = CDK_DROP_LIST;
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
     * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
     * to avoid circular imports.
     * \@docs-private
     * @type {?}
     */

    var CDK_DRAG_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CDK_DRAG_PARENT');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Handle that can be used to drag and CdkDrag instance.
     */

    var CdkDragHandle = /*#__PURE__*/function () {
      /**
       * @param {?} element
       * @param {?=} parentDrag
       */
      function CdkDragHandle(element, parentDrag) {
        _classCallCheck(this, CdkDragHandle);

        this.element = element;
        /**
         * Emits when the state of the handle has changed.
         */

        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._disabled = false;
        this._parentDrag = parentDrag;
        toggleNativeDragInteractions(element.nativeElement, false);
      }
      /**
       * Whether starting to drag through this handle is disabled.
       * @return {?}
       */


      _createClass(CdkDragHandle, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          this._stateChanges.complete();
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);

          this._stateChanges.next(this);
        }
      }]);

      return CdkDragHandle;
    }();

    CdkDragHandle.ɵfac = function CdkDragHandle_Factory(t) {
      return new (t || CdkDragHandle)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](CDK_DRAG_PARENT, 8));
    };

    CdkDragHandle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: CdkDragHandle,
      selectors: [["", "cdkDragHandle", ""]],
      hostAttrs: [1, "cdk-drag-handle"],
      inputs: {
        disabled: ["cdkDragHandleDisabled", "disabled"]
      }
    });
    /** @nocollapse */

    CdkDragHandle.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [CDK_DRAG_PARENT]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }];
    };

    CdkDragHandle.propDecorators = {
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDragHandleDisabled']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CdkDragHandle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
          selector: '[cdkDragHandle]',
          host: {
            'class': 'cdk-drag-handle'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [CDK_DRAG_PARENT]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }];
      }, {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['cdkDragHandleDisabled']
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Element that will be used as a template for the placeholder of a CdkDrag when
     * it is being dragged. The placeholder is displayed in place of the element being dragged.
     * @template T
     */


    var CdkDragPlaceholder =
    /**
     * @param {?} templateRef
     */
    function CdkDragPlaceholder(templateRef) {
      _classCallCheck(this, CdkDragPlaceholder);

      this.templateRef = templateRef;
    };

    CdkDragPlaceholder.ɵfac = function CdkDragPlaceholder_Factory(t) {
      return new (t || CdkDragPlaceholder)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]));
    };

    CdkDragPlaceholder.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: CdkDragPlaceholder,
      selectors: [["ng-template", "cdkDragPlaceholder", ""]],
      inputs: {
        data: "data"
      }
    });
    /** @nocollapse */

    CdkDragPlaceholder.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
      }];
    };

    CdkDragPlaceholder.propDecorators = {
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CdkDragPlaceholder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
          selector: 'ng-template[cdkDragPlaceholder]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
        }];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Element that will be used as a template for the preview
     * of a CdkDrag when it is being dragged.
     * @template T
     */


    var CdkDragPreview =
    /**
     * @param {?} templateRef
     */
    function CdkDragPreview(templateRef) {
      _classCallCheck(this, CdkDragPreview);

      this.templateRef = templateRef;
    };

    CdkDragPreview.ɵfac = function CdkDragPreview_Factory(t) {
      return new (t || CdkDragPreview)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]));
    };

    CdkDragPreview.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: CdkDragPreview,
      selectors: [["ng-template", "cdkDragPreview", ""]],
      inputs: {
        data: "data"
      }
    });
    /** @nocollapse */

    CdkDragPreview.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
      }];
    };

    CdkDragPreview.propDecorators = {
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CdkDragPreview, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
          selector: 'ng-template[cdkDragPreview]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
        }];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that can be used to configure the behavior of `CdkDrag`.
     * @type {?}
     */


    var CDK_DRAG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CDK_DRAG_CONFIG', {
      providedIn: 'root',
      factory: CDK_DRAG_CONFIG_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function CDK_DRAG_CONFIG_FACTORY() {
      return {
        dragStartThreshold: 5,
        pointerDirectionChangeThreshold: 5
      };
    }
    /**
     * Element that can be moved inside a CdkDropList container.
     * @template T
     */


    var CdkDrag = /*#__PURE__*/function () {
      /**
       * @param {?} element
       * @param {?} dropContainer
       * @param {?} _document
       * @param {?} _ngZone
       * @param {?} _viewContainerRef
       * @param {?} config
       * @param {?} _dir
       * @param {?} dragDrop
       * @param {?} _changeDetectorRef
       */
      function CdkDrag(element, dropContainer, _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef) {
        var _this21 = this;

        _classCallCheck(this, CdkDrag);

        this.element = element;
        this.dropContainer = dropContainer;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Amount of milliseconds to wait after the user has put their
         * pointer down before starting to drag the element.
         */

        this.dragStartDelay = 0;
        this._disabled = false;
        /**
         * Emits when the user starts dragging the item.
         */

        this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */

        this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */

        this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user has moved the item into a new container.
         */

        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */

        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user drops the item inside a container.
         */

        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */

        this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
        /**
        * @param {?} observer
        * @return {?}
        */
        function (observer) {
          /** @type {?} */
          var subscription = _this21._dragRef.moved.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
          /**
          * @param {?} movedEvent
          * @return {?}
          */
          function (movedEvent) {
            return {
              source: _this21,
              pointerPosition: movedEvent.pointerPosition,
              event: movedEvent.event,
              delta: movedEvent.delta,
              distance: movedEvent.distance
            };
          })).subscribe(observer);

          return (
            /**
            * @return {?}
            */
            function () {
              subscription.unsubscribe();
            }
          );
        });
        this._dragRef = dragDrop.createDrag(element, config);
        this._dragRef.data = this;

        this._syncInputs(this._dragRef);

        this._handleEvents(this._dragRef);
      }
      /**
       * Selector that will be used to determine the element to which the draggable's position will
       * be constrained. Matching starts from the element's parent and goes up the DOM until a matching
       * element has been found
       * @deprecated Use `boundaryElement` instead.
       * \@breaking-change 9.0.0
       * @return {?}
       */


      _createClass(CdkDrag, [{
        key: "getPlaceholderElement",

        /**
         * Returns the element that is being used as a placeholder
         * while the current element is being dragged.
         * @return {?}
         */
        value: function getPlaceholderElement() {
          return this._dragRef.getPlaceholderElement();
        }
        /**
         * Returns the root draggable element.
         * @return {?}
         */

      }, {
        key: "getRootElement",
        value: function getRootElement() {
          return this._dragRef.getRootElement();
        }
        /**
         * Resets a standalone drag item to its initial position.
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          this._dragRef.reset();
        }
        /**
         * Gets the pixel coordinates of the draggable outside of a drop container.
         * @return {?}
         */

      }, {
        key: "getFreeDragPosition",
        value: function getFreeDragPosition() {
          return this._dragRef.getFreeDragPosition();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this22 = this;

          // We need to wait for the zone to stabilize, in order for the reference
          // element to be in the proper place in the DOM. This is mostly relevant
          // for draggable elements inside portals since they get stamped out in
          // their original DOM position and then they get transferred to the portal.
          this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this22._updateRootElement(); // Listen for any newly-added handles.


            _this22._handles.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(_this22._handles), // Sync the new handles with the DragRef.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(
            /**
            * @param {?} handles
            * @return {?}
            */
            function (handles) {
              /** @type {?} */
              var childHandleElements = handles.filter(
              /**
              * @param {?} handle
              * @return {?}
              */
              function (handle) {
                return handle._parentDrag === _this22;
              }).map(
              /**
              * @param {?} handle
              * @return {?}
              */
              function (handle) {
                return handle.element;
              });

              _this22._dragRef.withHandles(childHandleElements);
            }), // Listen if the state of any of the handles changes.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(
            /**
            * @param {?} handles
            * @return {?}
            */
            function (handles) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"]).apply(void 0, _toConsumableArray(handles.map(
              /**
              * @param {?} item
              * @return {?}
              */
              function (item) {
                return item._stateChanges;
              })));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this22._destroyed)).subscribe(
            /**
            * @param {?} handleInstance
            * @return {?}
            */
            function (handleInstance) {
              // Enabled/disable the handle that changed in the DragRef.

              /** @type {?} */
              var dragRef = _this22._dragRef;
              /** @type {?} */

              var handle = handleInstance.element.nativeElement;
              handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
            });

            if (_this22.freeDragPosition) {
              _this22._dragRef.setFreeDragPosition(_this22.freeDragPosition);
            }
          });
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /** @type {?} */
          var rootSelectorChange = changes['rootElementSelector'];
          /** @type {?} */

          var positionChange = changes['freeDragPosition']; // We don't have to react to the first change since it's being
          // handled in `ngAfterViewInit` where it needs to be deferred.

          if (rootSelectorChange && !rootSelectorChange.firstChange) {
            this._updateRootElement();
          } // Skip the first change since it's being handled in `ngAfterViewInit`.


          if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
            this._dragRef.setFreeDragPosition(this.freeDragPosition);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed.next();

          this._destroyed.complete();

          this._dragRef.dispose();
        }
        /**
         * Syncs the root element with the `DragRef`.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateRootElement",
        value: function _updateRootElement() {
          /** @type {?} */
          var element = this.element.nativeElement;
          /** @type {?} */

          var rootElement = this.rootElementSelector ? getClosestMatchingAncestor(element, this.rootElementSelector) : element;

          if (rootElement && rootElement.nodeType !== this._document.ELEMENT_NODE) {
            throw Error("cdkDrag must be attached to an element node. " + "Currently attached to \"".concat(rootElement.nodeName, "\"."));
          }

          this._dragRef.withRootElement(rootElement || element);
        }
        /**
         * Gets the boundary element, based on the `boundaryElement` value.
         * @private
         * @return {?}
         */

      }, {
        key: "_getBoundaryElement",
        value: function _getBoundaryElement() {
          /** @type {?} */
          var boundary = this.boundaryElement;

          if (!boundary) {
            return null;
          }

          if (typeof boundary === 'string') {
            return getClosestMatchingAncestor(this.element.nativeElement, boundary);
          }
          /** @type {?} */


          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(boundary);

          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["isDevMode"])() && !element.contains(this.element.nativeElement)) {
            throw Error('Draggable element is not inside of the node passed into cdkDragBoundary.');
          }

          return element;
        }
        /**
         * Syncs the inputs of the CdkDrag with the options of the underlying DragRef.
         * @private
         * @param {?} ref
         * @return {?}
         */

      }, {
        key: "_syncInputs",
        value: function _syncInputs(ref) {
          var _this23 = this;

          ref.beforeStarted.subscribe(
          /**
          * @return {?}
          */
          function () {
            if (!ref.isDragging()) {
              /** @type {?} */
              var dir = _this23._dir;
              /** @type {?} */

              var placeholder = _this23._placeholderTemplate ? {
                template: _this23._placeholderTemplate.templateRef,
                context: _this23._placeholderTemplate.data,
                viewContainer: _this23._viewContainerRef
              } : null;
              /** @type {?} */

              var preview = _this23._previewTemplate ? {
                template: _this23._previewTemplate.templateRef,
                context: _this23._previewTemplate.data,
                viewContainer: _this23._viewContainerRef
              } : null;
              ref.disabled = _this23.disabled;
              ref.lockAxis = _this23.lockAxis;
              ref.dragStartDelay = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(_this23.dragStartDelay);
              ref.constrainPosition = _this23.constrainPosition;
              ref.withBoundaryElement(_this23._getBoundaryElement()).withPlaceholderTemplate(placeholder).withPreviewTemplate(preview);

              if (dir) {
                ref.withDirection(dir.value);
              }
            }
          });
        }
        /**
         * Handles the events from the underlying `DragRef`.
         * @private
         * @param {?} ref
         * @return {?}
         */

      }, {
        key: "_handleEvents",
        value: function _handleEvents(ref) {
          var _this24 = this;

          ref.started.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this24.started.emit({
              source: _this24
            }); // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.


            _this24._changeDetectorRef.markForCheck();
          });
          ref.released.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this24.released.emit({
              source: _this24
            });
          });
          ref.ended.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this24.ended.emit({
              source: _this24,
              distance: event.distance
            }); // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.


            _this24._changeDetectorRef.markForCheck();
          });
          ref.entered.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this24.entered.emit({
              container: event.container.data,
              item: _this24,
              currentIndex: event.currentIndex
            });
          });
          ref.exited.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this24.exited.emit({
              container: event.container.data,
              item: _this24
            });
          });
          ref.dropped.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this24.dropped.emit({
              previousIndex: event.previousIndex,
              currentIndex: event.currentIndex,
              previousContainer: event.previousContainer.data,
              container: event.container.data,
              isPointerOverContainer: event.isPointerOverContainer,
              item: _this24,
              distance: event.distance
            });
          });
        }
      }, {
        key: "boundaryElementSelector",
        get: function get() {
          return typeof this.boundaryElement === 'string' ? this.boundaryElement :
          /** @type {?} */
          undefined;
        }
        /**
         * @param {?} selector
         * @return {?}
         */
        ,
        set: function set(selector) {
          this.boundaryElement = selector;
        }
        /**
         * Whether starting to drag this element is disabled.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this._disabled || this.dropContainer && this.dropContainer.disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          this._dragRef.disabled = this._disabled;
        }
      }]);

      return CdkDrag;
    }();

    CdkDrag.ɵfac = function CdkDrag_Factory(t) {
      return new (t || CdkDrag)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](CDK_DROP_LIST, 12), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
    };

    CdkDrag.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: CdkDrag,
      selectors: [["", "cdkDrag", ""]],
      contentQueries: function CdkDrag_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, CdkDragPreview, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, CdkDragPlaceholder, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, CdkDragHandle, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._previewTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._placeholderTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._handles = _t);
        }
      },
      hostAttrs: [1, "cdk-drag"],
      hostVars: 4,
      hostBindings: function CdkDrag_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
        }
      },
      inputs: {
        dragStartDelay: ["cdkDragStartDelay", "dragStartDelay"],
        boundaryElement: ["cdkDragBoundary", "boundaryElement"],
        disabled: ["cdkDragDisabled", "disabled"],
        data: ["cdkDragData", "data"],
        lockAxis: ["cdkDragLockAxis", "lockAxis"],
        rootElementSelector: ["cdkDragRootElement", "rootElementSelector"],
        freeDragPosition: ["cdkDragFreeDragPosition", "freeDragPosition"],
        constrainPosition: ["cdkDragConstrainPosition", "constrainPosition"]
      },
      outputs: {
        started: "cdkDragStarted",
        released: "cdkDragReleased",
        ended: "cdkDragEnded",
        entered: "cdkDragEntered",
        exited: "cdkDragExited",
        dropped: "cdkDragDropped",
        moved: "cdkDragMoved"
      },
      exportAs: ["cdkDrag"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
        provide: CDK_DRAG_PARENT,
        useExisting: CdkDrag
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
    });
    /** @nocollapse */

    CdkDrag.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [CDK_DROP_LIST]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [CDK_DRAG_CONFIG]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: DragDrop
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }];
    };

    CdkDrag.propDecorators = {
      _handles: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
        args: [CdkDragHandle, {
          descendants: true
        }]
      }],
      _previewTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
        args: [CdkDragPreview, {
          "static": false
        }]
      }],
      _placeholderTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
        args: [CdkDragPlaceholder, {
          "static": false
        }]
      }],
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDragData']
      }],
      lockAxis: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDragLockAxis']
      }],
      rootElementSelector: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDragRootElement']
      }],
      boundaryElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDragBoundary']
      }],
      dragStartDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDragStartDelay']
      }],
      freeDragPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDragFreeDragPosition']
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDragDisabled']
      }],
      constrainPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDragConstrainPosition']
      }],
      started: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
        args: ['cdkDragStarted']
      }],
      released: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
        args: ['cdkDragReleased']
      }],
      ended: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
        args: ['cdkDragEnded']
      }],
      entered: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
        args: ['cdkDragEntered']
      }],
      exited: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
        args: ['cdkDragExited']
      }],
      dropped: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
        args: ['cdkDragDropped']
      }],
      moved: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
        args: ['cdkDragMoved']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CdkDrag, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
          selector: '[cdkDrag]',
          exportAs: 'cdkDrag',
          host: {
            'class': 'cdk-drag',
            '[class.cdk-drag-disabled]': 'disabled',
            '[class.cdk-drag-dragging]': '_dragRef.isDragging()'
          },
          providers: [{
            provide: CDK_DRAG_PARENT,
            useExisting: CdkDrag
          }]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [CDK_DROP_LIST]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [CDK_DRAG_CONFIG]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: DragDrop
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }];
      }, {
        dragStartDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['cdkDragStartDelay']
        }],
        started: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
          args: ['cdkDragStarted']
        }],
        released: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
          args: ['cdkDragReleased']
        }],
        ended: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
          args: ['cdkDragEnded']
        }],
        entered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
          args: ['cdkDragEntered']
        }],
        exited: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
          args: ['cdkDragExited']
        }],
        dropped: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
          args: ['cdkDragDropped']
        }],
        moved: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
          args: ['cdkDragMoved']
        }],
        boundaryElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['cdkDragBoundary']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['cdkDragDisabled']
        }],
        _handles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
          args: [CdkDragHandle, {
            descendants: true
          }]
        }],
        _previewTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
          args: [CdkDragPreview, {
            "static": false
          }]
        }],
        _placeholderTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
          args: [CdkDragPlaceholder, {
            "static": false
          }]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['cdkDragData']
        }],
        lockAxis: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['cdkDragLockAxis']
        }],
        rootElementSelector: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['cdkDragRootElement']
        }],
        freeDragPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['cdkDragFreeDragPosition']
        }],
        constrainPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['cdkDragConstrainPosition']
        }]
      });
    })();
    /**
     * Gets the closest ancestor of an element that matches a selector.
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */


    function getClosestMatchingAncestor(element, selector) {
      /** @type {?} */
      var currentElement =
      /** @type {?} */
      element.parentElement;

      while (currentElement) {
        // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
        if (currentElement.matches ? currentElement.matches(selector) :
        /** @type {?} */
        currentElement.msMatchesSelector(selector)) {
          return currentElement;
        }

        currentElement = currentElement.parentElement;
      }

      return null;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
     * elements that are placed inside a `cdkDropListGroup` will be connected to each other
     * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
     * from `cdkDropList`.
     * @template T
     */


    var CdkDropListGroup = /*#__PURE__*/function () {
      function CdkDropListGroup() {
        _classCallCheck(this, CdkDropListGroup);

        /**
         * Drop lists registered inside the group.
         */
        this._items = new Set();
        this._disabled = false;
      }
      /**
       * Whether starting a dragging sequence from inside this group is disabled.
       * @return {?}
       */


      _createClass(CdkDropListGroup, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          this._items.clear();
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
      }]);

      return CdkDropListGroup;
    }();

    CdkDropListGroup.ɵfac = function CdkDropListGroup_Factory(t) {
      return new (t || CdkDropListGroup)();
    };

    CdkDropListGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: CdkDropListGroup,
      selectors: [["", "cdkDropListGroup", ""]],
      inputs: {
        disabled: ["cdkDropListGroupDisabled", "disabled"]
      },
      exportAs: ["cdkDropListGroup"]
    });
    CdkDropListGroup.propDecorators = {
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDropListGroupDisabled']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CdkDropListGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
          selector: '[cdkDropListGroup]',
          exportAs: 'cdkDropListGroup'
        }]
      }], function () {
        return [];
      }, {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['cdkDropListGroupDisabled']
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Counter used to generate unique ids for drop zones.
     * @type {?}
     */


    var _uniqueIdCounter$1 = 0;
    var ɵ0 = undefined; // @breaking-change 8.0.0 `CdkDropList` implements `CdkDropListContainer` for backwards
    // compatiblity. The implements clause, as well as all the methods that it enforces can
    // be removed when `CdkDropListContainer` is deleted.

    /**
     * Container that wraps a set of draggable items.
     * @template T
     */

    var CdkDropList = /*#__PURE__*/function () {
      /**
       * @param {?} element
       * @param {?} dragDrop
       * @param {?} _changeDetectorRef
       * @param {?=} _dir
       * @param {?=} _group
       */
      function CdkDropList(element, dragDrop, _changeDetectorRef, _dir, _group) {
        var _this25 = this;

        _classCallCheck(this, CdkDropList);

        this.element = element;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._group = _group;
        /**
         * Emits when the list has been destroyed.
         */

        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Other draggable containers that this container is connected to and into which the
         * container's items can be transferred. Can either be references to other drop containers,
         * or their unique IDs.
         */

        this.connectedTo = [];
        /**
         * Direction in which the list is oriented.
         */

        this.orientation = 'vertical';
        /**
         * Unique ID for the drop zone. Can be used as a reference
         * in the `connectedTo` of another `CdkDropList`.
         */

        this.id = "cdk-drop-list-".concat(_uniqueIdCounter$1++);
        this._disabled = false;
        this._sortingDisabled = false;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */

        this.enterPredicate =
        /**
        * @return {?}
        */
        function () {
          return true;
        };
        /**
         * Whether to auto-scroll the view when the user moves their pointer close to the edges.
         */


        this.autoScrollDisabled = false;
        /**
         * Emits when the user drops an item inside the container.
         */

        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */

        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */

        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */

        this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this._dropListRef = dragDrop.createDropList(element);
        this._dropListRef.data = this;

        this._dropListRef.enterPredicate =
        /**
        * @param {?} drag
        * @param {?} drop
        * @return {?}
        */
        function (drag, drop) {
          return _this25.enterPredicate(drag.data, drop.data);
        };

        this._syncInputs(this._dropListRef);

        this._handleEvents(this._dropListRef);

        CdkDropList._dropLists.push(this);

        if (_group) {
          _group._items.add(this);
        }
      }
      /**
       * Whether starting a dragging sequence from this container is disabled.
       * @return {?}
       */


      _createClass(CdkDropList, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          var _this26 = this;

          this._draggables.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this._draggables), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @param {?} items
          * @return {?}
          */
          function (items) {
            _this26._dropListRef.withItems(items.map(
            /**
            * @param {?} drag
            * @return {?}
            */
            function (drag) {
              return drag._dragRef;
            }));
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          /** @type {?} */
          var index = CdkDropList._dropLists.indexOf(this);

          if (index > -1) {
            CdkDropList._dropLists.splice(index, 1);
          }

          if (this._group) {
            this._group._items["delete"](this);
          }

          this._dropListRef.dispose();

          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Starts dragging an item.
         * @return {?}
         */

      }, {
        key: "start",
        value: function start() {
          this._dropListRef.start();
        }
        /**
         * Drops an item into this container.
         * @param {?} item Item being dropped into the container.
         * @param {?} currentIndex Index at which the item should be inserted.
         * @param {?} previousContainer Container from which the item got dragged in.
         * @param {?} isPointerOverContainer Whether the user's pointer was over the
         *    container when the item was dropped.
         * @return {?}
         */

      }, {
        key: "drop",
        value: function drop(item, currentIndex, previousContainer, isPointerOverContainer) {
          this._dropListRef.drop(item._dragRef, currentIndex,
          /** @type {?} */
          previousContainer._dropListRef, isPointerOverContainer);
        }
        /**
         * Emits an event to indicate that the user moved an item into the container.
         * @param {?} item Item that was moved into the container.
         * @param {?} pointerX Position of the item along the X axis.
         * @param {?} pointerY Position of the item along the Y axis.
         * @return {?}
         */

      }, {
        key: "enter",
        value: function enter(item, pointerX, pointerY) {
          this._dropListRef.enter(item._dragRef, pointerX, pointerY);
        }
        /**
         * Removes an item from the container after it was dragged into another container by the user.
         * @param {?} item Item that was dragged out.
         * @return {?}
         */

      }, {
        key: "exit",
        value: function exit(item) {
          this._dropListRef.exit(item._dragRef);
        }
        /**
         * Figures out the index of an item in the container.
         * @param {?} item Item whose index should be determined.
         * @return {?}
         */

      }, {
        key: "getItemIndex",
        value: function getItemIndex(item) {
          return this._dropListRef.getItemIndex(item._dragRef);
        }
        /**
         * Sorts an item inside the container based on its position.
         * @param {?} item Item to be sorted.
         * @param {?} pointerX Position of the item along the X axis.
         * @param {?} pointerY Position of the item along the Y axis.
         * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
         * @return {?}
         */

      }, {
        key: "_sortItem",
        value: function _sortItem(item, pointerX, pointerY, pointerDelta) {
          return this._dropListRef._sortItem(item._dragRef, pointerX, pointerY, pointerDelta);
        }
        /**
         * Figures out whether an item should be moved into a sibling
         * drop container, based on its current position.
         * @param {?} item Drag item that is being moved.
         * @param {?} x Position of the item along the X axis.
         * @param {?} y Position of the item along the Y axis.
         * @return {?}
         */

      }, {
        key: "_getSiblingContainerFromPosition",
        value: function _getSiblingContainerFromPosition(item, x, y) {
          /** @type {?} */
          var result = this._dropListRef._getSiblingContainerFromPosition(item._dragRef, x, y);

          return result ? result.data : null;
        }
        /**
         * Checks whether the user's pointer is positioned over the container.
         * @param {?} x Pointer position along the X axis.
         * @param {?} y Pointer position along the Y axis.
         * @return {?}
         */

      }, {
        key: "_isOverContainer",
        value: function _isOverContainer(x, y) {
          return this._dropListRef._isOverContainer(x, y);
        }
        /**
         * Syncs the inputs of the CdkDropList with the options of the underlying DropListRef.
         * @private
         * @param {?} ref
         * @return {?}
         */

      }, {
        key: "_syncInputs",
        value: function _syncInputs(ref) {
          var _this27 = this;

          if (this._dir) {
            this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this._dir.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return ref.withDirection(value);
            });
          }

          ref.beforeStarted.subscribe(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var siblings = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(_this27.connectedTo).map(
            /**
            * @param {?} drop
            * @return {?}
            */
            function (drop) {
              return typeof drop === 'string' ?
              /** @type {?} */
              CdkDropList._dropLists.find(
              /**
              * @param {?} list
              * @return {?}
              */
              function (list) {
                return list.id === drop;
              }) : drop;
            });

            if (_this27._group) {
              _this27._group._items.forEach(
              /**
              * @param {?} drop
              * @return {?}
              */
              function (drop) {
                if (siblings.indexOf(drop) === -1) {
                  siblings.push(drop);
                }
              });
            }

            ref.disabled = _this27.disabled;
            ref.lockAxis = _this27.lockAxis;
            ref.sortingDisabled = _this27.sortingDisabled;
            ref.autoScrollDisabled = _this27.autoScrollDisabled;
            ref.connectedTo(siblings.filter(
            /**
            * @param {?} drop
            * @return {?}
            */
            function (drop) {
              return drop && drop !== _this27;
            }).map(
            /**
            * @param {?} list
            * @return {?}
            */
            function (list) {
              return list._dropListRef;
            })).withOrientation(_this27.orientation);
          });
        }
        /**
         * Handles events from the underlying DropListRef.
         * @private
         * @param {?} ref
         * @return {?}
         */

      }, {
        key: "_handleEvents",
        value: function _handleEvents(ref) {
          var _this28 = this;

          ref.beforeStarted.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this28._changeDetectorRef.markForCheck();
          });
          ref.entered.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this28.entered.emit({
              container: _this28,
              item: event.item.data,
              currentIndex: event.currentIndex
            });
          });
          ref.exited.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this28.exited.emit({
              container: _this28,
              item: event.item.data
            });

            _this28._changeDetectorRef.markForCheck();
          });
          ref.sorted.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this28.sorted.emit({
              previousIndex: event.previousIndex,
              currentIndex: event.currentIndex,
              container: _this28,
              item: event.item.data
            });
          });
          ref.dropped.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this28.dropped.emit({
              previousIndex: event.previousIndex,
              currentIndex: event.currentIndex,
              previousContainer: event.previousContainer.data,
              container: event.container.data,
              item: event.item.data,
              isPointerOverContainer: event.isPointerOverContainer,
              distance: event.distance
            }); // Mark for check since all of these events run outside of change
            // detection and we're not guaranteed for something else to have triggered it.


            _this28._changeDetectorRef.markForCheck();
          });
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled || !!this._group && this._group.disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether sorting within this drop list is disabled.
         * @return {?}
         */

      }, {
        key: "sortingDisabled",
        get: function get() {
          return this._sortingDisabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._sortingDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
      }]);

      return CdkDropList;
    }();

    CdkDropList.ɵfac = function CdkDropList_Factory(t) {
      return new (t || CdkDropList)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](CdkDropListGroup, 12));
    };

    CdkDropList.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: CdkDropList,
      selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
      contentQueries: function CdkDropList_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, CdkDrag, false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._draggables = _t);
        }
      },
      hostAttrs: [1, "cdk-drop-list"],
      hostVars: 7,
      hostBindings: function CdkDropList_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵhostProperty"]("id", ctx.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
        }
      },
      inputs: {
        connectedTo: ["cdkDropListConnectedTo", "connectedTo"],
        orientation: ["cdkDropListOrientation", "orientation"],
        id: "id",
        enterPredicate: ["cdkDropListEnterPredicate", "enterPredicate"],
        autoScrollDisabled: ["cdkDropListAutoScrollDisabled", "autoScrollDisabled"],
        disabled: ["cdkDropListDisabled", "disabled"],
        sortingDisabled: ["cdkDropListSortingDisabled", "sortingDisabled"],
        data: ["cdkDropListData", "data"],
        lockAxis: ["cdkDropListLockAxis", "lockAxis"]
      },
      outputs: {
        dropped: "cdkDropListDropped",
        entered: "cdkDropListEntered",
        exited: "cdkDropListExited",
        sorted: "cdkDropListSorted"
      },
      exportAs: ["cdkDropList"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([// Prevent child drop lists from picking up the same group as their parent.
      {
        provide: CdkDropListGroup,
        useValue: ɵ0
      }, {
        provide: CDK_DROP_LIST_CONTAINER,
        useExisting: CdkDropList
      }])]
    });
    /**
     * Keeps track of the drop lists that are currently on the page.
     */

    CdkDropList._dropLists = [];
    /** @nocollapse */

    CdkDropList.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: DragDrop
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: CdkDropListGroup,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"]
        }]
      }];
    };

    CdkDropList.propDecorators = {
      _draggables: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
        args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return CdkDrag;
        }), {
          // Explicitly set to false since some of the logic below makes assumptions about it.
          // The `.withItems` call below should be updated if we ever need to switch this to `true`.
          descendants: false
        }]
      }],
      connectedTo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDropListConnectedTo']
      }],
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDropListData']
      }],
      orientation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDropListOrientation']
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      lockAxis: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDropListLockAxis']
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDropListDisabled']
      }],
      sortingDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDropListSortingDisabled']
      }],
      enterPredicate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDropListEnterPredicate']
      }],
      autoScrollDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDropListAutoScrollDisabled']
      }],
      dropped: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
        args: ['cdkDropListDropped']
      }],
      entered: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
        args: ['cdkDropListEntered']
      }],
      exited: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
        args: ['cdkDropListExited']
      }],
      sorted: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
        args: ['cdkDropListSorted']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CdkDropList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
          selector: '[cdkDropList], cdk-drop-list',
          exportAs: 'cdkDropList',
          providers: [// Prevent child drop lists from picking up the same group as their parent.
          {
            provide: CdkDropListGroup,
            useValue: ɵ0
          }, {
            provide: CDK_DROP_LIST_CONTAINER,
            useExisting: CdkDropList
          }],
          host: {
            'class': 'cdk-drop-list',
            '[id]': 'id',
            '[class.cdk-drop-list-disabled]': 'disabled',
            '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
            '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: DragDrop
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: CdkDropListGroup,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"]
          }]
        }];
      }, {
        connectedTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['cdkDropListConnectedTo']
        }],
        orientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['cdkDropListOrientation']
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        enterPredicate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['cdkDropListEnterPredicate']
        }],
        autoScrollDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['cdkDropListAutoScrollDisabled']
        }],
        dropped: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
          args: ['cdkDropListDropped']
        }],
        entered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
          args: ['cdkDropListEntered']
        }],
        exited: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
          args: ['cdkDropListExited']
        }],
        sorted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
          args: ['cdkDropListSorted']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['cdkDropListDisabled']
        }],
        sortingDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['cdkDropListSortingDisabled']
        }],
        _draggables: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return CdkDrag;
          }), {
            // Explicitly set to false since some of the logic below makes assumptions about it.
            // The `.withItems` call below should be updated if we ever need to switch this to `true`.
            descendants: false
          }]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['cdkDropListData']
        }],
        lockAxis: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['cdkDropListLockAxis']
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var DragDropModule = function DragDropModule() {
      _classCallCheck(this, DragDropModule);
    };

    DragDropModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: DragDropModule
    });
    DragDropModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      factory: function DragDropModule_Factory(t) {
        return new (t || DragDropModule)();
      },
      providers: [DragDrop]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DragDropModule, {
        declarations: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
        exports: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DragDropModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
          declarations: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
          exports: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
          providers: [DragDrop]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=drag-drop.js.map

    /***/

  },

  /***/
  "./src/app/material-component/buttons/buttons.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/material-component/buttons/buttons.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ButtonsComponent */

  /***/
  function srcAppMaterialComponentButtonsButtonsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function () {
      return ButtonsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ButtonsComponent = function ButtonsComponent() {
      _classCallCheck(this, ButtonsComponent);
    };

    ButtonsComponent.ɵfac = function ButtonsComponent_Factory(t) {
      return new (t || ButtonsComponent)();
    };

    ButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ButtonsComponent,
      selectors: [["app-buttons"]],
      decls: 169,
      vars: 1,
      consts: [["href", "https://material.angular.io/components/button/overview", "target", "_blank"], ["id", "wave"], [1, "bg-light"], [1, "button-row"], ["mat-button", ""], ["mat-button", "", "color", "primary"], ["mat-button", "", "color", "accent"], ["mat-button", "", "color", "warn"], ["mat-button", "", "disabled", ""], ["mat-button", "", "routerLink", "."], ["mat-raised-button", ""], ["mat-raised-button", "", "color", "primary"], ["mat-raised-button", "", "color", "accent"], ["mat-raised-button", "", "color", "warn"], ["mat-raised-button", "", "disabled", ""], ["mat-raised-button", "", "routerLink", "."], ["mat-icon-button", ""], ["aria-label", "Example icon-button with a heart icon"], ["mat-icon-button", "", "color", "primary"], ["mat-icon-button", "", "color", "accent"], ["mat-icon-button", "", "color", "warn"], ["mat-icon-button", "", "disabled", ""], ["mat-fab", ""], ["mat-fab", "", "color", "primary"], ["mat-fab", "", "color", "accent"], ["mat-fab", "", "color", "warn"], ["mat-fab", "", "disabled", ""], ["mat-fab", "", "routerLink", "."], ["mat-mini-fab", ""], ["mat-mini-fab", "", "color", "primary"], ["mat-mini-fab", "", "color", "accent"], ["mat-mini-fab", "", "color", "warn"], ["mat-mini-fab", "", "disabled", ""], ["mat-mini-fab", "", "routerLink", "."], [1, "bg-success", "text-white", "rounded", "font-12", "pl-5", "pr-5"], ["name", "fontStyle", "aria-label", "Font Style"], ["value", "bold"], ["value", "italic"], ["value", "underline"], ["group", "matButtonToggleGroup"], ["value", "left"], ["value", "center"], ["value", "right"], ["value", "justify", "disabled", ""], [1, "m-t-20"], ["name", "fontStyle", "aria-label", "Font Style", 1, "m-l-20"], ["appearance", "legacy", "name", "fontStyle", "aria-label", "Font Style", 1, "m-l-20"]],
      template: function ButtonsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Buttons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Angular Material buttons are native ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " button or a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " elements enhanced with Material Design styling and ink ripples. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Official Doc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Basic Buttons ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "<button mat-button color=\"primary\">Primary</button>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Accent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Warn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Disabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Raised Buttons ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "code", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "<button mat-raised-button color=\"primary\">Primary</button>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Accent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Warn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Disabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Icon Buttons ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "code", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "<button mat-icon-button color=\"primary\"> ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\xA0\xA0\xA0\xA0<mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "</button>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "favorite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "favorite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "favorite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "favorite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "favorite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Fab Buttons ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "code", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "<button mat-fab color=\"primary\">Primary</button>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Accent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Warn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Disabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "favorite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Mini Fab Buttons ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "code", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "<button mat-mini-fab color=\"primary\">Primary</button>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Base");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Pri");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Acc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Warn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Dis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "mat-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "favorite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Basic button-toggles ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "mat-button-toggle-group", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "mat-button-toggle", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Bold");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "mat-button-toggle", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Italic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "mat-button-toggle", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Underline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Button toggle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "mat-button-toggle-group", null, 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "mat-button-toggle", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "format_align_left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "mat-button-toggle", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "format_align_center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "mat-button-toggle", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "format_align_right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "mat-button-toggle", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "format_align_justify");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Button toggle appearance ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Default appearance:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "mat-button-toggle-group", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "mat-button-toggle", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Bold");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "mat-button-toggle", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Italic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "mat-button-toggle", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Underline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Legacy appearance:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "mat-button-toggle-group", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "mat-button-toggle", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Bold");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "mat-button-toggle", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Italic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "mat-button-toggle", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Underline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](144);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Selected value: ", _r0.value, "");
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleGroup"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggle"]],
      styles: [".example-button-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\n#wave[_ngcontent-%COMP%] {\n  position: relative;\n  height: 70px;\n  width: 600px;\n  background: #e0efe3;\n}\n\n#wave[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 100% 50%;\n  width: 340px;\n  height: 80px;\n  background-color: white;\n  right: -5px;\n  top: 40px;\n}\n\n#wave[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 100% 50%;\n  width: 300px;\n  height: 70px;\n  background-color: #e0efe3;\n  left: 0;\n  top: 27px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L2J1dHRvbnMvYnV0dG9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxTQUFTO0FBRVg7O0FBQUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsT0FBTztFQUNQLFNBQVM7QUFHWCIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9idXR0b25zL2J1dHRvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1idXR0b24tcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbiN3YXZlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIHdpZHRoOiA2MDBweDtcclxuICBiYWNrZ3JvdW5kOiAjZTBlZmUzO1xyXG59XHJcbiN3YXZlOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJSA1MCU7XHJcbiAgd2lkdGg6IDM0MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICByaWdodDogLTVweDtcclxuICB0b3A6IDQwcHg7XHJcbn1cclxuI3dhdmU6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCUgNTAlO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZWZlMztcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMjdweDtcclxufVxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-buttons',
          templateUrl: './buttons.component.html',
          styleUrls: ['./buttons.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/material-component/chips/chips.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/material-component/chips/chips.component.ts ***!
    \*************************************************************/

  /*! exports provided: ChipsComponent */

  /***/
  function srcAppMaterialComponentChipsChipsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChipsComponent", function () {
      return ChipsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/keycodes.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ChipsComponent_mat_chip_29_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChipsComponent_mat_chip_29_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function ChipsComponent_mat_chip_29_Template_mat_chip_removed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var fruit_r3 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.remove(fruit_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChipsComponent_mat_chip_29_mat_icon_2_Template, 2, 0, "mat-icon", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var fruit_r3 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", ctx_r1.selectable)("removable", ctx_r1.removable);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fruit_r3.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.removable);
      }
    }

    function ChipsComponent_mat_chip_41_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function ChipsComponent_mat_chip_41_Template_mat_chip_focus_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var aColor_r7 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.color = aColor_r7.color;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var aColor_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("color", aColor_r7.color);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", aColor_r7.name, " ");
      }
    }

    var ChipsComponent = /*#__PURE__*/function () {
      function ChipsComponent() {
        _classCallCheck(this, ChipsComponent);

        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.availableColors = [{
          name: 'none',
          color: 'gray'
        }, {
          name: 'Primary',
          color: 'primary'
        }, {
          name: 'Accent',
          color: 'accent'
        }, {
          name: 'Warn',
          color: 'warn'
        }]; // Enter, comma

        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["COMMA"]];
        this.fruits = [{
          name: 'Lemon'
        }, {
          name: 'Lime'
        }, {
          name: 'Apple'
        }];
      }

      _createClass(ChipsComponent, [{
        key: "add",
        value: function add(event) {
          var input = event.input;
          var value = event.value; // Add our fruit

          if ((value || '').trim()) {
            this.fruits.push({
              name: value.trim()
            });
          } // Reset the input value


          if (input) {
            input.value = '';
          }
        }
      }, {
        key: "remove",
        value: function remove(fruit) {
          var index = this.fruits.indexOf(fruit);

          if (index >= 0) {
            this.fruits.splice(index, 1);
          }
        }
      }]);

      return ChipsComponent;
    }();

    ChipsComponent.ɵfac = function ChipsComponent_Factory(t) {
      return new (t || ChipsComponent)();
    };

    ChipsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChipsComponent,
      selectors: [["app-chips"]],
      decls: 42,
      vars: 5,
      consts: [[1, ""], ["href", "https://material.angular.io/components/chips/overview"], ["color", "primary", "selected", "true"], ["color", "accent", "selected", "true"], [1, "demo-chip-list"], ["chipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New fruit...", 3, "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matChipInputTokenEnd"], [1, "mat-chip-list-stacked"], ["selected", "true", 3, "color", "focus", 4, "ngFor", "ngForOf"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], ["selected", "true", 3, "color", "focus"]],
      template: function ChipsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Basic Chips");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "<mat-chip>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "displays a list of values as individual, keyboard accessible, chips. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Official Component");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-chip-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "One fish");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Two fish");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-chip", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Primary fish");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-chip", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Accent fish");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Chip input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "The MatChipInput directive can be used together with a chip-list to streamline the interaction between the two components. This directive adds chip-specific behaviors to the input element within for adding and removing chips. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-chip-list", null, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ChipsComponent_mat_chip_29_Template, 3, 4, "mat-chip", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matChipInputTokenEnd", function ChipsComponent_Template_input_matChipInputTokenEnd_30_listener($event) {
            return ctx.add($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Stacked Chips");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "You can also stack the chips if you want them on top of each other and/or use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "(focus)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " event to run custom code.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-chip-list", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ChipsComponent_mat_chip_41_Template, 2, 2, "mat-chip", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fruits);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matChipInputFor", _r0)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes)("matChipInputAddOnBlur", ctx.addOnBlur);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.availableColors);
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipList"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChip"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipInput"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipRemove"]],
      styles: [".demo-chip-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L2NoaXBzL2NoaXBzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L2NoaXBzL2NoaXBzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbW8tY2hpcC1saXN0IHtcclxuICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChipsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chips',
          templateUrl: './chips.component.html',
          styleUrls: ['./chips.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/material-component/custom-questions/custom-questions.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/material-component/custom-questions/custom-questions.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: DialogEditPolicyComponent, CustomQuestionsComponent */

  /***/
  function srcAppMaterialComponentCustomQuestionsCustomQuestionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogEditPolicyComponent", function () {
      return DialogEditPolicyComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomQuestionsComponent", function () {
      return CustomQuestionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/drag-drop.js");
    /* harmony import */


    var _questionModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./questionModels */
    "./src/app/material-component/custom-questions/questionModels.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
    /* harmony import */


    var _dialogs_dialog_add_question__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dialogs/dialog-add-question */
    "./src/app/material-component/custom-questions/dialogs/dialog-add-question.ts");
    /* harmony import */


    var _dialogs_edit_test_result_model_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dialogs/edit-test-result-model-dialog */
    "./src/app/material-component/custom-questions/dialogs/edit-test-result-model-dialog.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _questionWizard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./questionWizard */
    "./src/app/material-component/custom-questions/questionWizard.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CustomQuestionsComponent_div_20_h6_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " True/False question ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomQuestionsComponent_div_20_h6_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Input question ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomQuestionsComponent_div_20_h6_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var question_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Positive points: ", question_r6.pointsPositive, " ");
      }
    }

    function CustomQuestionsComponent_div_20_h6_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var question_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Negative points: ", question_r6.pointsNegative, " ");
      }
    }

    function CustomQuestionsComponent_div_20_h6_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var question_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Points: ", question_r6.pointsPositive, " ");
      }
    }

    function CustomQuestionsComponent_div_20_div_12_h6_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "True/False ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomQuestionsComponent_div_20_div_12_h6_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Input ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomQuestionsComponent_div_20_div_12_div_4_h6_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Strateqy not specified ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomQuestionsComponent_div_20_div_12_div_4_h6_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Skip");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " if previous answer is true ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomQuestionsComponent_div_20_div_12_div_4_h6_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Show");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " if previous answer is true ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomQuestionsComponent_div_20_div_12_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomQuestionsComponent_div_20_div_12_div_4_h6_1_Template, 3, 0, "h6", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomQuestionsComponent_div_20_div_12_div_4_h6_2_Template, 5, 0, "h6", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomQuestionsComponent_div_20_div_12_div_4_h6_3_Template, 5, 0, "h6", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var question_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", question_r6.childQuestion.questionTrueFalseStrategy);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2);
      }
    }

    function CustomQuestionsComponent_div_20_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomQuestionsComponent_div_20_div_12_h6_2_Template, 3, 0, "h6", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomQuestionsComponent_div_20_div_12_h6_3_Template, 3, 0, "h6", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CustomQuestionsComponent_div_20_div_12_div_4_Template, 4, 4, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var question_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", question_r6.childQuestion.questionType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", question_r6.childQuestion.questionTrueFalseStrategy !== undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Positive points: ", question_r6.childQuestion.pointsPositive, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Negative points: ", question_r6.childQuestion.pointsNegative, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](question_r6.childQuestion.text);
      }
    }

    function CustomQuestionsComponent_div_20_button_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomQuestionsComponent_div_20_button_24_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var question_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.addChildQuestion(question_r6.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add child question");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomQuestionsComponent_div_20_button_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomQuestionsComponent_div_20_button_25_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var question_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.editChildQuestion(question_r6.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit child question");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomQuestionsComponent_div_20_button_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomQuestionsComponent_div_20_button_26_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var question_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r34.openDialog(question_r6.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "policy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Strategy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomQuestionsComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CustomQuestionsComponent_div_20_h6_4_Template, 3, 0, "h6", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CustomQuestionsComponent_div_20_h6_5_Template, 3, 0, "h6", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CustomQuestionsComponent_div_20_h6_7_Template, 3, 1, "h6", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CustomQuestionsComponent_div_20_h6_8_Template, 3, 1, "h6", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CustomQuestionsComponent_div_20_h6_9_Template, 3, 1, "h6", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CustomQuestionsComponent_div_20_div_12_Template, 14, 7, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-menu", null, 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomQuestionsComponent_div_20_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var question_r6 = ctx.$implicit;

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r37.editCard(question_r6.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Edit question");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CustomQuestionsComponent_div_20_button_24_Template, 5, 0, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CustomQuestionsComponent_div_20_button_25_Template, 5, 0, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CustomQuestionsComponent_div_20_button_26_Template, 5, 0, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomQuestionsComponent_div_20_Template_button_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var question_r6 = ctx.$implicit;

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r39.deleteQuestion(question_r6.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "delete_sweep");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var question_r6 = ctx.$implicit;

        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", question_r6.questionType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", question_r6.questionType != 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", question_r6.questionType != 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", question_r6.questionType == 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](question_r6.text);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", question_r6.childQuestion);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !question_r6.childQuestion);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", question_r6.childQuestion);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", question_r6.childQuestion);
      }
    }

    function CustomQuestionsComponent_div_34_Template(rf, ctx) {
      if (rf & 1) {
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-menu", null, 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomQuestionsComponent_div_34_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var testResultModel_r40 = ctx.$implicit;

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r42.editTestResultModel(testResultModel_r40.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomQuestionsComponent_div_34_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var testResultModel_r40 = ctx.$implicit;

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r44.deleteTestResultModel(testResultModel_r40.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "delete_sweep");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var testResultModel_r40 = ctx.$implicit;

        var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Result points: ", testResultModel_r40.points, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](testResultModel_r40.message);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r41);
      }
    }

    function CustomQuestionsComponent_h6_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Quiz started");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomQuestionsComponent_h6_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Quiz finished");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomQuestionsComponent_div_65_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomQuestionsComponent_div_65_div_3_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r47.trueFalseAnswer(true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Yes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomQuestionsComponent_div_65_div_3_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r49.trueFalseAnswer(false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomQuestionsComponent_div_65_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomQuestionsComponent_div_65_div_4_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r50.inputAnswer(1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomQuestionsComponent_div_65_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomQuestionsComponent_div_65_div_3_Template, 5, 0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CustomQuestionsComponent_div_65_div_4_Template, 3, 0, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.questionWizardEngine.currentQuestion.text, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.questionWizardEngine.currentQuestion.questionType == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.questionWizardEngine.currentQuestion.questionType == 2);
      }
    }

    function CustomQuestionsComponent_div_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.questionWizardEngine.currentTestResult.message, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Points: ", ctx_r5.questionWizardEngine.currentTestResult.points, " ");
      }
    }

    var DialogEditPolicyComponent = /*#__PURE__*/function () {
      function DialogEditPolicyComponent(dialogRef, data) {
        _classCallCheck(this, DialogEditPolicyComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(DialogEditPolicyComponent, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }]);

      return DialogEditPolicyComponent;
    }();

    DialogEditPolicyComponent.ɵfac = function DialogEditPolicyComponent_Factory(t) {
      return new (t || DialogEditPolicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]));
    };

    DialogEditPolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DialogEditPolicyComponent,
      selectors: [["app-dialog-overview-example-dialog"]],
      decls: 16,
      vars: 2,
      consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "text-info"], [1, "example-margin", "text-info", "m-10"], [1, "d-flex", "flex-direction--column", "m-b-30", 3, "ngModel", "ngModelChange"], ["color", "primary", "value", "1", 1, "example-margin"], ["color", "accent", "value", "2", 1, "example-margin"], ["mat-dialog-actions", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]],
      template: function DialogEditPolicyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Question strategy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "The previous answer is TRUE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Next question should be:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-radio-group", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogEditPolicyComponent_Template_mat_radio_group_ngModelChange_8_listener($event) {
            return ctx.data.trueFalseStrategy = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-radio-button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Skipped ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-radio-button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Shown ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Ok");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.trueFalseStrategy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data);
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogContent"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioButton"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogActions"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogClose"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogEditPolicyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dialog-overview-example-dialog',
          templateUrl: './edit-policy-dialog.html'
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();

    var CustomQuestionsComponent = /*#__PURE__*/function () {
      function CustomQuestionsComponent(dialog, snackBar) {
        _classCallCheck(this, CustomQuestionsComponent);

        this.dialog = dialog;
        this.snackBar = snackBar;
        this.editQuestionViewModel = new _questionModels__WEBPACK_IMPORTED_MODULE_2__["EditQuestionViewModel"]();
        this.questions = new Array();
        this.isOpen = false;
        this.testResultModels = new Array();
        this.questionWizardEngine = new _questionWizard__WEBPACK_IMPORTED_MODULE_7__["QuestionWizardEngine"]();
      }

      _createClass(CustomQuestionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var question_1 = new _questionModels__WEBPACK_IMPORTED_MODULE_2__["Question"]();
          question_1.id = this.newGuid();
          question_1.text = 'Episode I - The Phantom Menace';
          question_1.questionType = _questionModels__WEBPACK_IMPORTED_MODULE_2__["QuestionType"].TRUE_FALSE_QUESTION;
          this.questions.push(question_1);
          var question_2 = new _questionModels__WEBPACK_IMPORTED_MODULE_2__["Question"]();
          question_2.id = this.newGuid();
          question_2.text = 'Episode II - Attack of the Clones';
          question_2.questionType = _questionModels__WEBPACK_IMPORTED_MODULE_2__["QuestionType"].INPUT_QUESTION;
          this.questions.push(question_2);
          var question_3 = new _questionModels__WEBPACK_IMPORTED_MODULE_2__["Question"]();
          question_3.id = this.newGuid();
          question_3.text = 'Episode III - Revenge of the Sith';
          question_3.questionType = _questionModels__WEBPACK_IMPORTED_MODULE_2__["QuestionType"].TRUE_FALSE_QUESTION;
          this.questions.push(question_3);
          var question_4 = new _questionModels__WEBPACK_IMPORTED_MODULE_2__["Question"]();
          question_4.id = this.newGuid();
          question_4.text = 'Within the last 14 days, have you come in contact with a person with a confirmed or suspected case of a newly identified viral illness?';
          question_4.questionType = _questionModels__WEBPACK_IMPORTED_MODULE_2__["QuestionType"].TRUE_FALSE_QUESTION;
          this.questions.push(question_4);
          var child_question = new _questionModels__WEBPACK_IMPORTED_MODULE_2__["Question"]();
          child_question.id = this.newGuid();
          child_question.text = 'Did you wear protective equipment?';
          child_question.questionType = _questionModels__WEBPACK_IMPORTED_MODULE_2__["QuestionType"].TRUE_FALSE_QUESTION;
          question_4.childQuestion = child_question;
          var defaultResult = new _questionModels__WEBPACK_IMPORTED_MODULE_2__["TestResultModel"]();
          defaultResult.id = this.newGuid();
          defaultResult.message = 'Test passed!';
          defaultResult.points = 10;
          this.testResultModels.push(defaultResult);
          this.questionWizardEngine.init(this.questions, this.testResultModels);
        }
      }, {
        key: "drop",
        value: function drop(event) {
          var currentQuestion = this.questions[event.previousIndex];
          Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.questions, event.previousIndex, event.currentIndex);
        }
      }, {
        key: "dropTestResult",
        value: function dropTestResult(event) {
          Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.testResultModels, event.previousIndex, event.currentIndex);
        }
      }, {
        key: "editCard",
        value: function editCard(id) {
          var _this29 = this;

          var currentQuestion = this.questions.find(function (x) {
            return x.id === id;
          });

          if (!currentQuestion) {
            console.error("question not found");
            this.editQuestionViewModel.editQuestionMode = false;
            this.editQuestionViewModel.currentQuestion = undefined;
            return;
          }

          var parentQuestion = new _questionModels__WEBPACK_IMPORTED_MODULE_2__["Question"]();
          parentQuestion.id = currentQuestion.id;
          parentQuestion.text = currentQuestion.text;
          parentQuestion.childQuestion = currentQuestion.childQuestion;
          parentQuestion.questionType = (currentQuestion ? currentQuestion === null || currentQuestion === void 0 ? void 0 : currentQuestion.questionType : _questionModels__WEBPACK_IMPORTED_MODULE_2__["QuestionType"].UNDEFINED) + '';
          parentQuestion.pointsPositive = currentQuestion === null || currentQuestion === void 0 ? void 0 : currentQuestion.pointsPositive;
          parentQuestion.pointsNegative = currentQuestion === null || currentQuestion === void 0 ? void 0 : currentQuestion.pointsNegative;
          console.log(parentQuestion);
          var dialogNewQuestion = this.dialog.open(_dialogs_dialog_add_question__WEBPACK_IMPORTED_MODULE_4__["DialogAddQuestionComponent"], {
            width: '500px',
            data: parentQuestion
          });
          dialogNewQuestion.afterClosed().subscribe(function (editedQuestion) {
            console.log(editedQuestion);
            if (!editedQuestion) return;

            _this29.saveQuestion(editedQuestion);

            _this29.openSnackBar('Saved', 'Ok');
          });
        }
      }, {
        key: "addChildQuestion",
        value: function addChildQuestion(id) {
          var _this30 = this;

          var currentQuestion = this.questions.find(function (x) {
            return x.id === id;
          });

          if (!currentQuestion) {
            console.error("question not found");
            this.editQuestionViewModel.editQuestionMode = false;
            this.editQuestionViewModel.currentQuestion = undefined;
            return;
          }

          var newQuestion = new _questionModels__WEBPACK_IMPORTED_MODULE_2__["Question"]();
          newQuestion.questionType = '1';
          var dialogNewQuestion = this.dialog.open(_dialogs_dialog_add_question__WEBPACK_IMPORTED_MODULE_4__["DialogAddQuestionComponent"], {
            width: '500px',
            data: newQuestion
          });
          dialogNewQuestion.afterClosed().subscribe(function (newQuestion) {
            if (!newQuestion) return;
            if (currentQuestion) currentQuestion.childQuestion = newQuestion;

            _this30.openSnackBar('Child question added', 'Ok');
          });
        }
      }, {
        key: "editChildQuestion",
        value: function editChildQuestion(id) {
          var _this31 = this;

          var _a, _b, _c, _d;

          var currentQuestion = this.questions.find(function (x) {
            return x.id === id;
          });

          if (!currentQuestion) {
            console.error("question not found");
            this.editQuestionViewModel.editQuestionMode = false;
            this.editQuestionViewModel.currentQuestion = undefined;
            return;
          }

          var newQuestion = new _questionModels__WEBPACK_IMPORTED_MODULE_2__["Question"]();
          newQuestion.questionType = ((_a = currentQuestion.childQuestion) === null || _a === void 0 ? void 0 : _a.questionType) + '';
          newQuestion.pointsNegative = (_b = currentQuestion.childQuestion) === null || _b === void 0 ? void 0 : _b.pointsNegative;
          newQuestion.pointsPositive = (_c = currentQuestion.childQuestion) === null || _c === void 0 ? void 0 : _c.pointsPositive;
          newQuestion.text = (_d = currentQuestion.childQuestion) === null || _d === void 0 ? void 0 : _d.text;
          var dialogNewQuestion = this.dialog.open(_dialogs_dialog_add_question__WEBPACK_IMPORTED_MODULE_4__["DialogAddQuestionComponent"], {
            width: '500px',
            data: newQuestion
          });
          dialogNewQuestion.afterClosed().subscribe(function (newQuestion) {
            if (!newQuestion) return;
            if (currentQuestion) currentQuestion.childQuestion = newQuestion;

            _this31.openSnackBar('Child updated', 'Ok');
          });
        }
      }, {
        key: "saveQuestion",
        value: function saveQuestion(question) {
          if (!question) return;

          for (var index = 0; index < this.questions.length; index++) {
            if (this.questions[index].id === question.id) {
              this.editQuestionByIndex(index, question);
              break;
            }
          }

          this.onCloseEdit();
        }
      }, {
        key: "editQuestionByIndex",
        value: function editQuestionByIndex(index, question) {
          var _a, _b;

          this.questions[index].text = question.text;
          this.questions[index].questionType = question.questionType;
          this.questions[index].pointsPositive = question.pointsPositive;
          this.questions[index].pointsNegative = question.pointsNegative;

          if (question.childQuestion) {
            this.questions[index].childQuestion = question.childQuestion;
          }

          if (!((_a = question.childQuestion) === null || _a === void 0 ? void 0 : _a.text) || ((_b = question.childQuestion) === null || _b === void 0 ? void 0 : _b.text) === '') this.questions[index].childQuestion = undefined;
        }
      }, {
        key: "onCloseEdit",
        value: function onCloseEdit() {
          this.editQuestionViewModel.editQuestionMode = false;
          this.editQuestionViewModel.addQuestionMode = false;
          this.editQuestionViewModel.currentQuestion = undefined;
          this.isOpen = !this.isOpen;
        }
      }, {
        key: "deleteQuestion",
        value: function deleteQuestion(id) {
          this.questions = this.questions.filter(function (value, index, arr) {
            return value.id !== id;
          });
        }
      }, {
        key: "AddNewQuestionDialog",
        value: function AddNewQuestionDialog() {
          var _this32 = this;

          var newQuestion = new _questionModels__WEBPACK_IMPORTED_MODULE_2__["Question"]();
          newQuestion.questionType = '1';
          var dialogNewQuestion = this.dialog.open(_dialogs_dialog_add_question__WEBPACK_IMPORTED_MODULE_4__["DialogAddQuestionComponent"], {
            width: '500px',
            data: newQuestion
          });
          dialogNewQuestion.afterClosed().subscribe(function (newQuestion) {
            console.log('The dialog was closed');
            console.log(newQuestion);
            if (!newQuestion) return;

            _this32.saveNewQuestion(newQuestion);

            _this32.openSnackBar('New message added', 'Ok');
          });
        }
      }, {
        key: "openSnackBar",
        value: function openSnackBar(message, action) {
          var config = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarConfig"]();
          config.panelClass = ['snack-bar'];
          this.snackBar.open(message, action, {
            duration: 5000,
            panelClass: ['snack-bar']
          });
        }
      }, {
        key: "saveNewQuestion",
        value: function saveNewQuestion(newQuestion) {
          newQuestion.id = this.newGuid();
          this.questions.push(newQuestion);
        }
      }, {
        key: "openDialog",
        value: function openDialog(id) {
          var _this33 = this;

          var _a, _b;

          var questionStrategy = (_b = (_a = this.questions.find(function (q) {
            return q.id === id;
          })) === null || _a === void 0 ? void 0 : _a.childQuestion) === null || _b === void 0 ? void 0 : _b.questionTrueFalseStrategy;
          var dialogRef = this.dialog.open(DialogEditPolicyComponent, {
            width: '350px',
            data: {
              trueFalseStrategy: questionStrategy,
              questionId: id
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
            if (!result) return;

            var question = _this33.questions.find(function (q) {
              return q.id === result.questionId;
            });

            if (!question) {
              console.error("question not found");
              return;
            }

            if (question.childQuestion) {
              question.childQuestion.questionTrueFalseStrategy = result.trueFalseStrategy;
              console.log(question.childQuestion.questionTrueFalseStrategy);
            }
          });
        } // Results

      }, {
        key: "addResult",
        value: function addResult() {
          var _this34 = this;

          var newTestResult = new _questionModels__WEBPACK_IMPORTED_MODULE_2__["TestResultModel"]();
          newTestResult.id = this.newGuid();
          var dialogRef = this.dialog.open(_dialogs_edit_test_result_model_dialog__WEBPACK_IMPORTED_MODULE_5__["DialogEditTestResultModelComponent"], {
            width: '350px',
            data: newTestResult
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (!result) return;

            _this34.testResultModels.push(result);
          });
        }
      }, {
        key: "editTestResultModel",
        value: function editTestResultModel(id) {
          var newTestResult = new _questionModels__WEBPACK_IMPORTED_MODULE_2__["TestResultModel"]();
          var currentResult = this.testResultModels.find(function (x) {
            return x.id === id;
          });
          if (!currentResult) return;
          newTestResult.id = currentResult.id;
          newTestResult.message = currentResult.message;
          newTestResult.points = currentResult.points;
          var dialogRef = this.dialog.open(_dialogs_edit_test_result_model_dialog__WEBPACK_IMPORTED_MODULE_5__["DialogEditTestResultModelComponent"], {
            width: '450px',
            data: newTestResult
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (!result) return;

            if (currentResult) {
              currentResult.message = result.message;
              currentResult.points = result.points;
            }
          });
        }
      }, {
        key: "deleteTestResultModel",
        value: function deleteTestResultModel(id) {
          this.testResultModels = this.testResultModels.filter(function (value, index, arr) {
            return value.id !== id;
          });
        } //quiz

      }, {
        key: "startQuiz",
        value: function startQuiz() {
          this.questionWizardEngine.init(this.questions, this.testResultModels);
          this.questionWizardEngine.setStateStart();
          console.log(this.questions);
        }
      }, {
        key: "trueFalseAnswer",
        value: function trueFalseAnswer(res) {
          this.questionWizardEngine.currentQuestion.handleAnswer(res);
          this.questionWizardEngine.next();
        }
      }, {
        key: "inputAnswer",
        value: function inputAnswer(res) {
          this.questionWizardEngine.currentQuestion.handleAnswer(true, res);
          this.questionWizardEngine.next();
        }
      }, {
        key: "newGuid",
        value: function newGuid() {
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : r & 0x3 | 0x8;
            return v.toString(16);
          });
        }
      }]);

      return CustomQuestionsComponent;
    }();

    CustomQuestionsComponent.ɵfac = function CustomQuestionsComponent_Factory(t) {
      return new (t || CustomQuestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]));
    };

    CustomQuestionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomQuestionsComponent,
      selectors: [["app-custom-questions"]],
      decls: 67,
      vars: 9,
      consts: [["fxLayout", "row wrap"], ["fxFlex.gt-lg", "50", "fxFlex.gt-md", "50", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "p-20", "bg-info", "position-relative"], [1, "card-title", "text-white", "m-0"], [1, "card-subtitle", "text-white", "m-0", "op-5"], ["mat-mini-fab", "", "color", "accent", 1, "add-contact", 3, "click"], [1, "d-flex", "flex-wrap"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "c-question-droplist-flex", "cdkDrag", "", 4, "ngFor", "ngForOf"], [2, "display", "flex", "place-content", "center"], ["fxFlex.gt-lg", "50", "fxFlex.gt-md", "50", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "oh", "text-center", "little-profile"], [1, "m-b-0"], ["class", "m-t-0 ", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 1, "m-t-30"], ["fxFlex.gt-sm", "33.33%", "fxFlex.gt-xs", "33.33%", "fxFlex", "100"], [1, "m-0", "font-light"], ["class", "question-wrap", 4, "ngIf"], ["cdkDrag", "", 1, "c-question-droplist-flex"], [1, "d-flex", "flex-direction--column"], [1, "c-question-droplist--column", "question-text--wrab", "parent"], [1, "question-attributes--wrap", 3, "ngSwitch"], ["class", "text-success m-0", 4, "ngSwitchCase"], ["class", "text-info m-0", 4, "ngSwitchCase"], [1, "question-attributes--wrap"], ["class", "text-info m-0", 4, "ngIf"], ["class", "c-question-droplist--column question-text--wrab child", 4, "ngIf"], [1, "c-question-droplist--column", "c-question-droplist--column-menu-wrap"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menu4", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], [1, "text-success", "m-0"], [1, "mdi", "mdi-checkbox-blank-circle", "font-10", "m-r-10"], [1, "text-info", "m-0"], [1, "c-question-droplist--column", "question-text--wrab", "child"], ["class", "question-attributes--wrap", 3, "ngSwitch", 4, "ngIf"], ["class", "text-danger m-0", 4, "ngSwitchCase"], ["class", "text-inverse m-0", 4, "ngSwitchCase"], [1, "text-danger", "m-0"], [1, "text-inverse", "m-0"], [1, "m-t-0"], [1, "question-wrap"], ["class", "question-answer-button--wrap", 4, "ngIf"], [4, "ngIf"], [1, "question-answer-button--wrap"]],
      template: function CustomQuestionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Custom question builder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Build your custom question ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Questions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Drag n drop question list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomQuestionsComponent_Template_button_click_14_listener() {
            return ctx.AddNewQuestionDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function CustomQuestionsComponent_Template_div_cdkDropListDropped_19_listener($event) {
            return ctx.drop($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CustomQuestionsComponent_div_20_Template, 32, 12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Results");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h6", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Add results");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomQuestionsComponent_Template_button_click_28_listener() {
            return ctx.addResult();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function CustomQuestionsComponent_Template_div_cdkDropListDropped_33_listener($event) {
            return ctx.dropTestResult($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, CustomQuestionsComponent_div_34_Template, 25, 3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-card", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, CustomQuestionsComponent_h6_40_Template, 2, 0, "h6", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, CustomQuestionsComponent_h6_41_Template, 2, 0, "h6", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomQuestionsComponent_Template_button_click_43_listener() {
            return ctx.startQuiz();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Start quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Questions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Current position");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Current points");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, CustomQuestionsComponent_div_65_Template, 5, 3, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, CustomQuestionsComponent_div_66_Template, 5, 2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.testResultModels);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.questionWizardEngine.state == "STARTED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.questionWizardEngine.state == "FINISHED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.questionWizardEngine.questions.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.questionWizardEngine.currentIndex + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.questionWizardEngine.currentPoints);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.questionWizardEngine.state == "STARTED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.questionWizardEngine.state == "FINISHED");
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchCase"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["_MatMenu"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"]],
      styles: [".example-button-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.example-list[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.c-question-droplist-flex[_ngcontent-%COMP%] {\n  padding: 10px 5px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.c-question-droplist--column[_ngcontent-%COMP%] {\n  justify-content: start;\n}\n\n.c-question-droplist--column-menu-wrap[_ngcontent-%COMP%] {\n  justify-content: end;\n}\n\n.question-text--wrab[_ngcontent-%COMP%] {\n  margin: 0.5rem;\n  padding: 1rem;\n  border-radius: 0.2rem;\n  background-color: #ddd;\n}\n\n.question-text--wrab.parent[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n\n.question-text--wrab.child[_ngcontent-%COMP%] {\n  background-color: #e8f9ff;\n  margin-left: 2rem;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.question-attributes--wrap[_ngcontent-%COMP%] {\n  margin: 0.5rem;\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.position-relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.add-contact[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 17px;\n  top: 57px;\n}\n\n\n\n.cdk-drop-list-dragging[_ngcontent-%COMP%]   .cdk-drag[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n  .snack-bar {\n  background: #1e88e5 !important;\n  color: white !important;\n}\n\n  .snack-bar button {\n  color: white !important;\n}\n\n.question-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.question-answer-button--wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L2N1c3RvbS1xdWVzdGlvbnMvY3VzdG9tLXF1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOztBQUxBO0VBT0kseUJBQXlCO0FBRTdCOztBQVRBO0VBV0kseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUVyQjs7QUFHQTtFQUNFLFlBQVk7QUFBZDs7QUFLQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIscUhBRThDO0FBSmhEOztBQU9BO0VBQ0UsY0FBYztBQUpoQjs7QUFPQTtFQUNFLFVBQVU7QUFKWjs7QUFPQTtFQUNFLHNEQUFzRDtBQUp4RDs7QUFPQTtFQUNFLFlBQVk7QUFKZDs7QUFPQTtFQUNFLHNEQUFzRDtBQUp4RDs7QUFPQTtFQUNDLGtCQUFrQjtBQUpuQjs7QUFPQTtFQUNDLGtCQUFrQjtFQUNmLFdBQVc7RUFDWCxTQUFTO0FBSmI7O0FBT0EsMkNBQUE7O0FBQ0E7RUFDRSxzREFBc0Q7QUFKeEQ7O0FBT0EsMkNBQUE7O0FBQ0E7RUFDRSxzREFBc0Q7QUFKeEQ7O0FBT0E7RUFDRSw4QkFBOEI7RUFDOUIsdUJBQXVCO0FBSnpCOztBQUVBO0VBSUksdUJBQXVCO0FBRjNCOztBQU1BO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFIeEI7O0FBTUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUhyQiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9jdXN0b20tcXVlc3Rpb25zL2N1c3RvbS1xdWVzdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1idXR0b24tcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5leGFtcGxlLWxpc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xyXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jLXF1ZXN0aW9uLWRyb3BsaXN0LWZsZXgge1xyXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjdXJzb3I6IG1vdmU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uYy1xdWVzdGlvbi1kcm9wbGlzdC0tY29sdW1ue1xyXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbn1cclxuXHJcbi5jLXF1ZXN0aW9uLWRyb3BsaXN0LS1jb2x1bW4tbWVudS13cmFwe1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG59XHJcblxyXG4ucXVlc3Rpb24tdGV4dC0td3JhYiB7XHJcbiAgbWFyZ2luOiAwLjVyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuXHJcbiAgJi5wYXJlbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgJi5jaGlsZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGY5ZmY7XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICB9XHJcblxyXG59XHJcblxyXG4uZXhhbXBsZS1tYXJnaW4ge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuXHJcblxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLnF1ZXN0aW9uLWF0dHJpYnV0ZXMtLXdyYXB7XHJcbiAgbWFyZ2luOiAwLjVyZW07XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4uZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5wb3NpdGlvbi1yZWxhdGl2ZSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYWRkLWNvbnRhY3Qge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxN3B4O1xyXG4gICAgdG9wOiA1N3B4O1xyXG59XHJcblxyXG4vKiBBbmltYXRlIGl0ZW1zIGFzIHRoZXkncmUgYmVpbmcgc29ydGVkLiAqL1xyXG4uY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuY2RrLWRyYWcge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLyogQW5pbWF0ZSBhbiBpdGVtIHRoYXQgaGFzIGJlZW4gZHJvcHBlZC4gKi9cclxuLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnNuYWNrLWJhciB7XHJcbiAgYmFja2dyb3VuZDogIzFlODhlNSAhaW1wb3J0YW50OztcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDs7XHJcbiAgYnV0dG9ue1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ucXVlc3Rpb24td3JhcHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5xdWVzdGlvbi1hbnN3ZXItYnV0dG9uLS13cmFwe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomQuestionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-custom-questions',
          templateUrl: './custom-questions.component.html',
          styleUrls: ['./custom-questions.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }, {
          type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/material-component/custom-questions/dialogs/dialog-add-question.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/material-component/custom-questions/dialogs/dialog-add-question.ts ***!
    \************************************************************************************/

  /*! exports provided: DialogAddQuestionComponent */

  /***/
  function srcAppMaterialComponentCustomQuestionsDialogsDialogAddQuestionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogAddQuestionComponent", function () {
      return DialogAddQuestionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
    /* harmony import */


    var _questionModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../questionModels */
    "./src/app/material-component/custom-questions/questionModels.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var DialogAddQuestionComponent = /*#__PURE__*/function () {
      function DialogAddQuestionComponent(dialogRef, data) {
        _classCallCheck(this, DialogAddQuestionComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(DialogAddQuestionComponent, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }]);

      return DialogAddQuestionComponent;
    }();

    DialogAddQuestionComponent.ɵfac = function DialogAddQuestionComponent_Factory(t) {
      return new (t || DialogAddQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    DialogAddQuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DialogAddQuestionComponent,
      selectors: [["app-dialog-overview-example-dialog"]],
      decls: 21,
      vars: 5,
      consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "text-info"], [1, "example-section"], [1, "d-flex", "flex-direction--column", "m-b-30", 3, "ngModel", "ngModelChange"], ["color", "primary", "value", "1", 1, "example-margin"], ["color", "accent", "value", "2", 1, "example-margin"], ["matInput", "", "type", "number", "autocomplete", "off", "placeholder", "Points for 'TRUE' answer", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "autocomplete", "off", "placeholder", "Points for 'FALSE' answer", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Question text", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", "", 2, "justify-content", "flex-end"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]],
      template: function DialogAddQuestionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add new question");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Question type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-radio-group", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogAddQuestionComponent_Template_mat_radio_group_ngModelChange_7_listener($event) {
            return ctx.data.questionType = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-radio-button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " True/False ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-radio-button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Input ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogAddQuestionComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.data.pointsPositive = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogAddQuestionComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.data.pointsNegative = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "textarea", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogAddQuestionComponent_Template_textarea_ngModelChange_17_listener($event) {
            return ctx.data.text = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.questionType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.pointsPositive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.pointsNegative);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.text);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data);
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogContent"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioButton"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogActions"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogClose"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogAddQuestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dialog-overview-example-dialog',
          templateUrl: './add-question-dialog.html'
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: _questionModels__WEBPACK_IMPORTED_MODULE_2__["Question"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/material-component/custom-questions/dialogs/edit-test-result-model-dialog.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/material-component/custom-questions/dialogs/edit-test-result-model-dialog.ts ***!
    \**********************************************************************************************/

  /*! exports provided: DialogEditTestResultModelComponent */

  /***/
  function srcAppMaterialComponentCustomQuestionsDialogsEditTestResultModelDialogTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogEditTestResultModelComponent", function () {
      return DialogEditTestResultModelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
    /* harmony import */


    var _questionModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../questionModels */
    "./src/app/material-component/custom-questions/questionModels.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var DialogEditTestResultModelComponent = /*#__PURE__*/function () {
      function DialogEditTestResultModelComponent(dialogRef, data) {
        _classCallCheck(this, DialogEditTestResultModelComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(DialogEditTestResultModelComponent, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }]);

      return DialogEditTestResultModelComponent;
    }();

    DialogEditTestResultModelComponent.ɵfac = function DialogEditTestResultModelComponent_Factory(t) {
      return new (t || DialogEditTestResultModelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    DialogEditTestResultModelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DialogEditTestResultModelComponent,
      selectors: [["app-dialog-overview-example-dialog"]],
      decls: 11,
      vars: 3,
      consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["matInput", "", "type", "number", "autocomplete", "off", "placeholder", "Points", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Message", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", "", 2, "justify-content", "flex-end"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]],
      template: function DialogEditTestResultModelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add new result");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogEditTestResultModelComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.data.points = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "textarea", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogEditTestResultModelComponent_Template_textarea_ngModelChange_7_listener($event) {
            return ctx.data.message = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.points);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data);
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogContent"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogActions"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogClose"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogEditTestResultModelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dialog-overview-example-dialog',
          templateUrl: './edit-test-result-model-dialog.html'
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: _questionModels__WEBPACK_IMPORTED_MODULE_2__["TestResultModel"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/material-component/custom-questions/questionModels.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/material-component/custom-questions/questionModels.ts ***!
    \***********************************************************************/

  /*! exports provided: Question, AnswerTrueFalse, EditQuestionViewModel, QuestionType, TrueFalseQuestionStrategy, TestResultModel, ResultHandler */

  /***/
  function srcAppMaterialComponentCustomQuestionsQuestionModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Question", function () {
      return Question;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnswerTrueFalse", function () {
      return AnswerTrueFalse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditQuestionViewModel", function () {
      return EditQuestionViewModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionType", function () {
      return QuestionType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrueFalseQuestionStrategy", function () {
      return TrueFalseQuestionStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestResultModel", function () {
      return TestResultModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultHandler", function () {
      return ResultHandler;
    });

    var Question = /*#__PURE__*/function () {
      function Question() {
        _classCallCheck(this, Question);

        this.questionType = QuestionType.UNDEFINED;
        this.questionTrueFalseStrategy = TrueFalseQuestionStrategy.UNDEFINED;
        this.pointsPositive = 1;
        this.pointsNegative = 0;
        this.answerTrueFalse = AnswerTrueFalse.UNDEFINED;
      }

      _createClass(Question, [{
        key: "getAnswerPoint",
        value: function getAnswerPoint() {
          if (this.questionType == QuestionType.TRUE_FALSE_QUESTION) {
            if (this.answerTrueFalse == AnswerTrueFalse.TRUE) return this.pointsPositive;
            if (this.answerTrueFalse == AnswerTrueFalse.FALSE) return this.pointsNegative;
          }

          if (this.questionType == QuestionType.INPUT_QUESTION) {
            return this.pointsPositive;
          }

          return 0;
        }
      }, {
        key: "handleAnswer",
        value: function handleAnswer() {
          var answerTrueFalse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var inputAnswer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          if (answerTrueFalse) this.answerTrueFalse = AnswerTrueFalse.TRUE;else this.answerTrueFalse = AnswerTrueFalse.FALSE;
          this.inputAnswer = inputAnswer;
        }
      }]);

      return Question;
    }();

    var AnswerTrueFalse;

    (function (AnswerTrueFalse) {
      AnswerTrueFalse[AnswerTrueFalse["UNDEFINED"] = 0] = "UNDEFINED";
      AnswerTrueFalse[AnswerTrueFalse["TRUE"] = 1] = "TRUE";
      AnswerTrueFalse[AnswerTrueFalse["FALSE"] = 2] = "FALSE";
    })(AnswerTrueFalse || (AnswerTrueFalse = {}));

    var EditQuestionViewModel = function EditQuestionViewModel() {
      _classCallCheck(this, EditQuestionViewModel);

      this.editQuestionMode = false;
      this.addQuestionMode = false;
    };

    var QuestionType;

    (function (QuestionType) {
      QuestionType[QuestionType["UNDEFINED"] = 0] = "UNDEFINED";
      QuestionType[QuestionType["TRUE_FALSE_QUESTION"] = 1] = "TRUE_FALSE_QUESTION";
      QuestionType[QuestionType["INPUT_QUESTION"] = 2] = "INPUT_QUESTION";
    })(QuestionType || (QuestionType = {}));

    var TrueFalseQuestionStrategy;

    (function (TrueFalseQuestionStrategy) {
      TrueFalseQuestionStrategy[TrueFalseQuestionStrategy["UNDEFINED"] = 0] = "UNDEFINED";
      TrueFalseQuestionStrategy[TrueFalseQuestionStrategy["SKIP_CHILD_IF_PARENT_IS_TRUE"] = 1] = "SKIP_CHILD_IF_PARENT_IS_TRUE";
      TrueFalseQuestionStrategy[TrueFalseQuestionStrategy["SHOW_CHILD_IF_PARENT_IS_TRUE"] = 2] = "SHOW_CHILD_IF_PARENT_IS_TRUE";
    })(TrueFalseQuestionStrategy || (TrueFalseQuestionStrategy = {}));

    var TestResultModel = function TestResultModel() {
      _classCallCheck(this, TestResultModel);

      this.id = '';
      this.points = 0;
      this.message = '';
    };

    var ResultHandler = /*#__PURE__*/function () {
      function ResultHandler() {
        _classCallCheck(this, ResultHandler);

        this.questions = new Array();
        this.resultsList = new Array();
      }

      _createClass(ResultHandler, [{
        key: "calculateResult",
        value: function calculateResult() {
          return new TestResultModel();
        }
      }]);

      return ResultHandler;
    }();
    /***/

  },

  /***/
  "./src/app/material-component/custom-questions/questionWizard.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/material-component/custom-questions/questionWizard.ts ***!
    \***********************************************************************/

  /*! exports provided: QuestionWizardEngineState, QuestionWizardEngine, SequenceEngine, SequenceState */

  /***/
  function srcAppMaterialComponentCustomQuestionsQuestionWizardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionWizardEngineState", function () {
      return QuestionWizardEngineState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionWizardEngine", function () {
      return QuestionWizardEngine;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SequenceEngine", function () {
      return SequenceEngine;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SequenceState", function () {
      return SequenceState;
    });
    /* harmony import */


    var _questionModels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./questionModels */
    "./src/app/material-component/custom-questions/questionModels.ts");

    var QuestionWizardEngineState;

    (function (QuestionWizardEngineState) {
      QuestionWizardEngineState["STARTED"] = "STARTED";
      QuestionWizardEngineState["FINISHED"] = "FINISHED";
      QuestionWizardEngineState["IS_READY"] = "IS_READY";
    })(QuestionWizardEngineState || (QuestionWizardEngineState = {}));

    var QuestionWizardEngine = /*#__PURE__*/function () {
      function QuestionWizardEngine() {
        _classCallCheck(this, QuestionWizardEngine);

        this.questions = new Array();
        this.testResultModels = new Array();
        this.sequenceEngine = new SequenceEngine();
        this.state = QuestionWizardEngineState.IS_READY;
        this.currentQuestion = new _questionModels__WEBPACK_IMPORTED_MODULE_0__["Question"]();
        this.currentIndex = 0;
        this.currentPoints = 0;
      }

      _createClass(QuestionWizardEngine, [{
        key: "init",
        value: function init(questions, testResultModels) {
          this.questions = questions;
          this.testResultModels = testResultModels;
          this.sequenceEngine = new SequenceEngine();
          this.sequenceEngine._items = questions;
          this.currentIndex = 0;
          this.currentPoints = 0;
        }
      }, {
        key: "setStateStart",
        value: function setStateStart() {
          console.log("setStateStart");
          this.sequenceEngine.setStateStart();
          this.currentIndex = 0;
          this.currentPoints = 0;
          this.state = QuestionWizardEngineState.STARTED;
          this.currentQuestion = this.questions[this.sequenceEngine.index];
          this.currentTestResult = undefined;
        }
      }, {
        key: "next",
        value: function next() {
          console.log(this.sequenceEngine.isFinished());

          if (this.sequenceEngine.isFinished()) {
            return;
          }

          this.calcPoints();
          var childQuestionPolicy = this.checkChildQuestion(this.currentQuestion);

          if (childQuestionPolicy.showChild) {
            this.currentQuestion = this.questions[this.sequenceEngine.index].childQuestion;
            return;
          }

          this.sequenceEngine.next();
          this.currentQuestion = this.questions[this.sequenceEngine.index];
          this.currentIndex = this.sequenceEngine.index;

          if (this.sequenceEngine.isFinished()) {
            this.state = QuestionWizardEngineState.FINISHED;
            this.handleTestResult();
            return;
          }
        }
      }, {
        key: "calcPoints",
        value: function calcPoints() {
          if (this.currentQuestion) this.currentPoints += this.currentQuestion.getAnswerPoint();else {
            throw "CurrentQuestion is undefined";
          }
        }
      }, {
        key: "checkChildQuestion",
        value: function checkChildQuestion(question) {
          var result = {
            showChild: false
          };
          if (!question.childQuestion) return result;

          if (question.childQuestion.questionTrueFalseStrategy == _questionModels__WEBPACK_IMPORTED_MODULE_0__["TrueFalseQuestionStrategy"].SHOW_CHILD_IF_PARENT_IS_TRUE) {
            var parentAnswer = question.answerTrueFalse;

            if (parentAnswer == _questionModels__WEBPACK_IMPORTED_MODULE_0__["AnswerTrueFalse"].TRUE) {
              result.showChild = true;
            } else {
              result.showChild = false;
            }
          }

          if (question.childQuestion.questionTrueFalseStrategy == _questionModels__WEBPACK_IMPORTED_MODULE_0__["TrueFalseQuestionStrategy"].SKIP_CHILD_IF_PARENT_IS_TRUE) {
            var _parentAnswer = question.answerTrueFalse;
            if (_parentAnswer == _questionModels__WEBPACK_IMPORTED_MODULE_0__["AnswerTrueFalse"].TRUE) result.showChild = false;else result.showChild = true;
          }

          return result;
        }
      }, {
        key: "handleTestResult",
        value: function handleTestResult() {
          var _this35 = this;

          this.currentTestResult = this.testResultModels.find(function (x) {
            return x.points == _this35.currentPoints;
          });

          if (!this.currentTestResult) {
            this.currentTestResult = new _questionModels__WEBPACK_IMPORTED_MODULE_0__["TestResultModel"]();
            this.currentTestResult.message = "You haven`t specified this result!";
            this.currentTestResult.points = this.currentPoints;
          }
        }
      }]);

      return QuestionWizardEngine;
    }();

    var SequenceEngine = /*#__PURE__*/function () {
      function SequenceEngine() {
        _classCallCheck(this, SequenceEngine);

        this._items = new Array();
        this._currentIndex = 0;
        this._state = SequenceState.IS_READY_TO_START;
      }

      _createClass(SequenceEngine, [{
        key: "isFinished",
        value: function isFinished() {
          return this._state == SequenceState.IS_FINISHED;
        }
      }, {
        key: "setStateStart",
        value: function setStateStart() {
          this._currentIndex = 0;
          this._state = SequenceState.IS_IN_PROGRESS;
        }
      }, {
        key: "getCurrentItem",
        value: function getCurrentItem() {
          return this.items[this._currentIndex];
        }
      }, {
        key: "next",
        value: function next() {
          this._currentIndex++;
          if (this._state === SequenceState.IS_FINISHED) return;
          if (this.checkReachSequenceEnd()) return;
        } //Private 

      }, {
        key: "checkReachSequenceEnd",
        value: function checkReachSequenceEnd() {
          if (this._currentIndex === this._items.length) {
            this._state = SequenceState.IS_FINISHED;
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "items",
        set: function set(items) {
          this._items = items;
        }
      }, {
        key: "index",
        get: function get() {
          return this._currentIndex;
        }
      }]);

      return SequenceEngine;
    }();

    var SequenceState;

    (function (SequenceState) {
      SequenceState[SequenceState["IS_READY_TO_START"] = 0] = "IS_READY_TO_START";
      SequenceState[SequenceState["IS_IN_PROGRESS"] = 1] = "IS_IN_PROGRESS";
      SequenceState[SequenceState["IS_FINISHED"] = 2] = "IS_FINISHED";
    })(SequenceState || (SequenceState = {}));
    /***/

  },

  /***/
  "./src/app/material-component/dialog/dialog.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/material-component/dialog/dialog.component.ts ***!
    \***************************************************************/

  /*! exports provided: DialogOverviewExampleDialogComponent, DialogComponent */

  /***/
  function srcAppMaterialComponentDialogDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialogComponent", function () {
      return DialogOverviewExampleDialogComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogComponent", function () {
      return DialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DialogComponent_li_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You chose: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.animal);
      }
    }

    var DialogOverviewExampleDialogComponent = /*#__PURE__*/function () {
      function DialogOverviewExampleDialogComponent(dialogRef, data) {
        _classCallCheck(this, DialogOverviewExampleDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(DialogOverviewExampleDialogComponent, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }]);

      return DialogOverviewExampleDialogComponent;
    }();

    DialogOverviewExampleDialogComponent.ɵfac = function DialogOverviewExampleDialogComponent_Factory(t) {
      return new (t || DialogOverviewExampleDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    DialogOverviewExampleDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DialogOverviewExampleDialogComponent,
      selectors: [["app-dialog-overview-example-dialog"]],
      decls: 12,
      vars: 3,
      consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["matInput", "", "tabindex", "1", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", "tabindex", "2", 3, "mat-dialog-close"], ["mat-button", "", "tabindex", "-1", 3, "click"]],
      template: function DialogOverviewExampleDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "What's your favorite animal?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogOverviewExampleDialogComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.data.animal = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ok");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogOverviewExampleDialogComponent_Template_button_click_10_listener() {
            return ctx.onNoClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "No Thanks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hi ", ctx.data.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.animal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data.animal);
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogOverviewExampleDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dialog-overview-example-dialog',
          template: "<h1 mat-dialog-title>Hi {{data.name}}</h1>\n<div mat-dialog-content>\n  <p>What's your favorite animal?</p>\n  <mat-form-field>\n    <input matInput tabindex=\"1\" [(ngModel)]=\"data.animal\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"data.animal\" tabindex=\"2\">Ok</button>\n  <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">No Thanks</button>\n</div>"
        }]
      }], function () {
        return [{
          type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();

    var DialogComponent = /*#__PURE__*/function () {
      function DialogComponent(dialog) {
        _classCallCheck(this, DialogComponent);

        this.dialog = dialog;
        this.animal = '';
        this.name = '';
      }

      _createClass(DialogComponent, [{
        key: "openDialog",
        value: function openDialog() {
          var _this36 = this;

          var dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
            width: '250px',
            data: {
              name: this.name,
              animal: this.animal
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this36.animal = result;
          });
        }
      }]);

      return DialogComponent;
    }();

    DialogComponent.ɵfac = function DialogComponent_Factory(t) {
      return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
    };

    DialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DialogComponent,
      selectors: [["app-dialog"]],
      decls: 19,
      vars: 2,
      consts: [["fxLayout", "row wrap"], ["fxFlex.gt-sm", "100%"], ["matInput", "", "placeholder", "What's your name?", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", 3, "click"], [4, "ngIf"]],
      template: function DialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dialog Overview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "<MatDialog>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " service can be used to open modal dialogs with Material Design styling and animations.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogComponent_Template_button_click_16_listener() {
            return ctx.openDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Pick one");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DialogComponent_li_18_Template, 4, 1, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.animal);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dialog',
          templateUrl: './dialog.component.html',
          styleUrls: ['./dialog.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/material-component/expansion/expansion.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/material-component/expansion/expansion.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ExpansionComponent */

  /***/
  function srcAppMaterialComponentExpansionExpansionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpansionComponent", function () {
      return ExpansionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");

    var ExpansionComponent = /*#__PURE__*/function () {
      function ExpansionComponent() {
        _classCallCheck(this, ExpansionComponent);

        this.panelOpenState = false;
        this.step = 0;
      }

      _createClass(ExpansionComponent, [{
        key: "setStep",
        value: function setStep(index) {
          this.step = index;
        }
      }, {
        key: "nextStep",
        value: function nextStep() {
          this.step++;
        }
      }, {
        key: "prevStep",
        value: function prevStep() {
          this.step--;
        }
      }]);

      return ExpansionComponent;
    }();

    ExpansionComponent.ɵfac = function ExpansionComponent_Factory(t) {
      return new (t || ExpansionComponent)();
    };

    ExpansionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExpansionComponent,
      selectors: [["app-expansion"]],
      decls: 82,
      vars: 5,
      consts: [[1, ""], ["href", "https://material.angular.io/components/expansion/overview"], ["matInput", "", "placeholder", "First name"], ["matInput", "", "placeholder", "Age"], [3, "opened", "closed"], [1, "example-headers-align"], ["hideToggle", "true", 3, "expanded", "opened"], ["matInput", "", "type", "number", "min", "1", "placeholder", "Age"], ["mat-button", "", "color", "primary", 3, "click"], ["matInput", "", "placeholder", "Country"], ["mat-button", "", "color", "warn", 3, "click"], ["matInput", "", "placeholder", "Date", "readonly", "", 3, "matDatepicker", "focus"], ["picker", ""]],
      template: function ExpansionComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Basic Expansion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Expansion panel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "code", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Official Component");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-expansion-panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Personal data ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-panel-description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Type your name and age ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-expansion-panel", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function ExpansionComponent_Template_mat_expansion_panel_opened_20_listener() {
            return ctx.panelOpenState = true;
          })("closed", function ExpansionComponent_Template_mat_expansion_panel_closed_20_listener() {
            return ctx.panelOpenState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Self aware panel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-panel-description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "I'm visible because I am open");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Expansion panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-accordion", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-expansion-panel", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function ExpansionComponent_Template_mat_expansion_panel_opened_35_listener() {
            return ctx.setStep(0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Personal data ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-panel-description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Type your name and age ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "account_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-action-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpansionComponent_Template_button_click_48_listener() {
            return ctx.nextStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-expansion-panel", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function ExpansionComponent_Template_mat_expansion_panel_opened_50_listener() {
            return ctx.setStep(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Destination ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-panel-description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Type the country name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-action-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpansionComponent_Template_button_click_61_listener() {
            return ctx.prevStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpansionComponent_Template_button_click_63_listener() {
            return ctx.nextStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-expansion-panel", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function ExpansionComponent_Template_mat_expansion_panel_opened_65_listener() {
            return ctx.setStep(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Day of the trip ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-panel-description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Inform the date you wish to travel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "date_range");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function ExpansionComponent_Template_input_focus_74_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](76);

            return _r0.open();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "mat-datepicker", null, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-action-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpansionComponent_Template_button_click_78_listener() {
            return ctx.prevStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpansionComponent_Template_button_click_80_listener() {
            return ctx.nextStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "End");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Currently I am ", ctx.panelOpenState ? "open" : "closed", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx.step === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx.step === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx.step === 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0);
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelDescription"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInput"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelActionRow"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerInput"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepicker"]],
      styles: [".example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L2V4cGFuc2lvbi9leHBhbnNpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9leHBhbnNpb24vZXhwYW5zaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsIFxyXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbiAgZmxleC1iYXNpczogMDtcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpansionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-expansion',
          templateUrl: './expansion.component.html',
          styleUrls: ['./expansion.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/material-component/grid/grid.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/material-component/grid/grid.component.ts ***!
    \***********************************************************/

  /*! exports provided: GridComponent */

  /***/
  function srcAppMaterialComponentGridGridComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridComponent", function () {
      return GridComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GridComponent_mat_grid_tile_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tile_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", tile_r1.color);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", tile_r1.cols)("rowspan", tile_r1.rows);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tile_r1.text, " ");
      }
    }

    var GridComponent = function GridComponent() {
      _classCallCheck(this, GridComponent);

      this.tiles = [{
        text: 'One',
        cols: 3,
        rows: 1,
        color: 'lightblue'
      }, {
        text: 'Two',
        cols: 1,
        rows: 2,
        color: 'lightgreen'
      }, {
        text: 'Three',
        cols: 1,
        rows: 1,
        color: 'lightpink'
      }, {
        text: 'Four',
        cols: 2,
        rows: 1,
        color: '#DDBDF1'
      }];
    };

    GridComponent.ɵfac = function GridComponent_Factory(t) {
      return new (t || GridComponent)();
    };

    GridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GridComponent,
      selectors: [["app-grid"]],
      decls: 34,
      vars: 1,
      consts: [["fxLayout", "row"], ["fxFlex.gt-sm", "100%"], ["href", "https://material.io/guidelines/components/grid-lists.html"], ["cols", "4", "rowHeight", "100px"], [3, "colspan", "rowspan", "background", 4, "ngFor", "ngForOf"], ["cols", "2", "rowHeight", "2:1"], [3, "colspan", "rowspan"]],
      template: function GridComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Fixed height grid-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "<mat-grid-list>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " is a two-dimensional list view that arranges cells into grid-based layout. See Material Design spec. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Official Doc here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-grid-list", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GridComponent_mat_grid_tile_14_Template, 2, 5, "mat-grid-tile", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Basic grid-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "<mat-grid-list>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " is a two-dimensional list view that arranges cells into grid-based layout. See Material Design spec. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-grid-list", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tiles);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridTile"]],
      styles: ["mat-grid-tile[_ngcontent-%COMP%] {\n  background: lightblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L2dyaWQvZ3JpZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9ncmlkL2dyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZ3JpZC10aWxlIHtcclxuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-grid',
          templateUrl: './grid.component.html',
          styleUrls: ['./grid.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/material-component/lists/lists.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/material-component/lists/lists.component.ts ***!
    \*************************************************************/

  /*! exports provided: ListsComponent */

  /***/
  function srcAppMaterialComponentListsListsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListsComponent", function () {
      return ListsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/divider.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/core.js");

    function ListsComponent_mat_list_option_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var shoe_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", shoe_r6, " ");
      }
    }

    function ListsComponent_mat_list_item_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var message_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r7.from);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r7.subject);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r7.content);
      }
    }

    function ListsComponent_mat_list_item_51_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var message_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Image of ", message_r8.from, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", message_r8.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r8.from);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r8.content);
      }
    }

    function ListsComponent_mat_list_item_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "folder");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var folder_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](folder_r9.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, folder_r9.updated), " ");
      }
    }

    function ListsComponent_mat_list_item_69_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "note");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var note_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](note_r10.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, note_r10.updated), " ");
      }
    }

    var ListsComponent = function ListsComponent() {
      _classCallCheck(this, ListsComponent);

      this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
      this.messages = [{
        from: 'Nirav joshi (nbj@gmail.com)',
        image: 'assets/images/users/my-photo.png',
        subject: 'Material angular',
        content: 'This is the material angular template'
      }, {
        from: 'Sunil joshi (sbj@gmail.com)',
        image: 'assets/images/users/2.jpg',
        subject: 'Wrappixel',
        content: 'We have wrappixel launched'
      }, {
        from: 'Vishal Bhatt (bht@gmail.com)',
        image: 'assets/images/users/3.jpg',
        subject: 'Task list',
        content: 'This is the latest task hasbeen done'
      }];
      this.folders = [{
        name: 'Photos',
        updated: new Date('1/1/16')
      }, {
        name: 'Recipes',
        updated: new Date('1/17/16')
      }, {
        name: 'Work',
        updated: new Date('1/28/16')
      }];
      this.notes = [{
        name: 'Vacation Itinerary',
        updated: new Date('2/20/16')
      }, {
        name: 'Kitchen Remodel',
        updated: new Date('1/18/16')
      }];
    };

    ListsComponent.ɵfac = function ListsComponent_Factory(t) {
      return new (t || ListsComponent)();
    };

    ListsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListsComponent,
      selectors: [["app-lists"]],
      decls: 70,
      vars: 6,
      consts: [["fxLayout", "row"], ["fxFlex.gt-sm", "100%"], ["href", "https://material.angular.io/components/list/overview"], ["role", "list"], ["role", "listitem"], ["fxFlex.gt-sm", "50%"], ["shoes", ""], [4, "ngFor", "ngForOf"], [1, "p-b-0", "m-b-0"], [1, "p-t-0"], ["mat-subheader", ""], ["matLine", ""], ["matLine", "", 1, "text-muted"], ["mat-list-avatar", "", 3, "src", "alt"], ["mat-list-icon", ""], ["mat-line", ""]],
      template: function ListsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Basic list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "<mat-list>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " is a container component that wraps and formats a series of line items. As the base list component, it provides Material Design styling, but no behavior of its own.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Official Doc here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-list", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-list-item", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Item 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-list-item", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Item 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-list-item", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Item 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "List with selection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "A selection list provides an interface for selecting values, where each list item is an option.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-selection-list", null, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ListsComponent_mat_list_option_30_Template, 2, 1, "mat-list-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Multiline lists");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "A selection list provides an interface for selecting values, where each list item is an option.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ListsComponent_mat_list_item_41_Template, 7, 3, "mat-list-item", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Multiline lists");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "A selection list provides an interface for selecting values, where each list item is an option.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ListsComponent_mat_list_item_51_Template, 6, 4, "mat-list-item", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-card-content", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "List with sections");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "A selection list provides an interface for selecting values, where each list item is an option.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-card-content", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Folders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ListsComponent_mat_list_item_64_Template, 8, 4, "mat-list-item", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h3", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Notes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, ListsComponent_mat_list_item_69_Template, 8, 4, "mat-list-item", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.typesOfShoes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Options selected: ", _r0.selectedOptions.selected.length, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.folders);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notes);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatList"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectionList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListSubheaderCssMatStyler"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatLine"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListAvatarCssMatStyler"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListIconCssMatStyler"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9saXN0cy9saXN0cy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-lists',
          templateUrl: './lists.component.html',
          styleUrls: ['./lists.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/material-component/material.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/material-component/material.module.ts ***!
    \*******************************************************/

  /*! exports provided: MaterialComponentsModule */

  /***/
  function srcAppMaterialComponentMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialComponentsModule", function () {
      return MaterialComponentsModule;
    });
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _demo_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../demo-material-module */
    "./src/app/demo-material-module.ts");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/table.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/drag-drop.js");
    /* harmony import */


    var _material_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./material.routing */
    "./src/app/material-component/material.routing.ts");
    /* harmony import */


    var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./buttons/buttons.component */
    "./src/app/material-component/buttons/buttons.component.ts");
    /* harmony import */


    var _custom_questions_custom_questions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./custom-questions/custom-questions.component */
    "./src/app/material-component/custom-questions/custom-questions.component.ts");
    /* harmony import */


    var _custom_questions_dialogs_dialog_add_question__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./custom-questions/dialogs/dialog-add-question */
    "./src/app/material-component/custom-questions/dialogs/dialog-add-question.ts");
    /* harmony import */


    var _custom_questions_dialogs_edit_test_result_model_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./custom-questions/dialogs/edit-test-result-model-dialog */
    "./src/app/material-component/custom-questions/dialogs/edit-test-result-model-dialog.ts");
    /* harmony import */


    var _grid_grid_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./grid/grid.component */
    "./src/app/material-component/grid/grid.component.ts");
    /* harmony import */


    var _lists_lists_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./lists/lists.component */
    "./src/app/material-component/lists/lists.component.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/material-component/menu/menu.component.ts");
    /* harmony import */


    var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./tabs/tabs.component */
    "./src/app/material-component/tabs/tabs.component.ts");
    /* harmony import */


    var _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./stepper/stepper.component */
    "./src/app/material-component/stepper/stepper.component.ts");
    /* harmony import */


    var _expansion_expansion_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./expansion/expansion.component */
    "./src/app/material-component/expansion/expansion.component.ts");
    /* harmony import */


    var _chips_chips_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./chips/chips.component */
    "./src/app/material-component/chips/chips.component.ts");
    /* harmony import */


    var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./toolbar/toolbar.component */
    "./src/app/material-component/toolbar/toolbar.component.ts");
    /* harmony import */


    var _progress_snipper_progress_snipper_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./progress-snipper/progress-snipper.component */
    "./src/app/material-component/progress-snipper/progress-snipper.component.ts");
    /* harmony import */


    var _progress_progress_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./progress/progress.component */
    "./src/app/material-component/progress/progress.component.ts");
    /* harmony import */


    var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./dialog/dialog.component */
    "./src/app/material-component/dialog/dialog.component.ts");
    /* harmony import */


    var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./tooltip/tooltip.component */
    "./src/app/material-component/tooltip/tooltip.component.ts");
    /* harmony import */


    var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./snackbar/snackbar.component */
    "./src/app/material-component/snackbar/snackbar.component.ts");
    /* harmony import */


    var _slider_slider_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./slider/slider.component */
    "./src/app/material-component/slider/slider.component.ts");
    /* harmony import */


    var _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./slide-toggle/slide-toggle.component */
    "./src/app/material-component/slide-toggle/slide-toggle.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _destination_tab_destination_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./destination-tab/destination.component */
    "./src/app/material-component/destination-tab/destination.component.ts");
    /* harmony import */


    var _destination_tab_present_simple_present_simple_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./destination-tab/present-simple/present-simple.component */
    "./src/app/material-component/destination-tab/present-simple/present-simple.component.ts");

    var MaterialComponentsModule = function MaterialComponentsModule() {
      _classCallCheck(this, MaterialComponentsModule);
    };

    MaterialComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MaterialComponentsModule
    });
    MaterialComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function MaterialComponentsModule_Factory(t) {
        return new (t || MaterialComponentsModule)();
      },
      providers: [],
      imports: [[_angular_material__WEBPACK_IMPORTED_MODULE_30__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_30__["MatInputModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_material_routing__WEBPACK_IMPORTED_MODULE_10__["MaterialRoutes"]), _demo_material_module__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["DragDropModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MaterialComponentsModule, {
        declarations: [_custom_questions_custom_questions_component__WEBPACK_IMPORTED_MODULE_12__["CustomQuestionsComponent"], _destination_tab_destination_component__WEBPACK_IMPORTED_MODULE_31__["DestinationComponent"], _destination_tab_present_simple_present_simple_component__WEBPACK_IMPORTED_MODULE_32__["PresentSimpleComponent"], _custom_questions_custom_questions_component__WEBPACK_IMPORTED_MODULE_12__["DialogEditPolicyComponent"], _custom_questions_dialogs_dialog_add_question__WEBPACK_IMPORTED_MODULE_13__["DialogAddQuestionComponent"], _custom_questions_dialogs_edit_test_result_model_dialog__WEBPACK_IMPORTED_MODULE_14__["DialogEditTestResultModelComponent"], _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_11__["ButtonsComponent"], _grid_grid_component__WEBPACK_IMPORTED_MODULE_15__["GridComponent"], _lists_lists_component__WEBPACK_IMPORTED_MODULE_16__["ListsComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_17__["MenuComponent"], _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_18__["TabsComponent"], _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_19__["StepperComponent"], _expansion_expansion_component__WEBPACK_IMPORTED_MODULE_20__["ExpansionComponent"], _chips_chips_component__WEBPACK_IMPORTED_MODULE_21__["ChipsComponent"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_22__["ToolbarComponent"], _progress_snipper_progress_snipper_component__WEBPACK_IMPORTED_MODULE_23__["ProgressSnipperComponent"], _progress_progress_component__WEBPACK_IMPORTED_MODULE_24__["ProgressComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_25__["DialogComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_25__["DialogOverviewExampleDialogComponent"], _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_26__["TooltipComponent"], _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_27__["SnackbarComponent"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_28__["SliderComponent"], _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_29__["SlideToggleComponent"]],
        imports: [_angular_material__WEBPACK_IMPORTED_MODULE_30__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_30__["MatInputModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _demo_material_module__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["DragDropModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaterialComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_material__WEBPACK_IMPORTED_MODULE_30__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_30__["MatInputModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_material_routing__WEBPACK_IMPORTED_MODULE_10__["MaterialRoutes"]), _demo_material_module__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["DragDropModule"]],
          providers: [],
          entryComponents: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_25__["DialogOverviewExampleDialogComponent"], _custom_questions_custom_questions_component__WEBPACK_IMPORTED_MODULE_12__["DialogEditPolicyComponent"], _custom_questions_dialogs_dialog_add_question__WEBPACK_IMPORTED_MODULE_13__["DialogAddQuestionComponent"], _custom_questions_dialogs_edit_test_result_model_dialog__WEBPACK_IMPORTED_MODULE_14__["DialogEditTestResultModelComponent"]],
          declarations: [_custom_questions_custom_questions_component__WEBPACK_IMPORTED_MODULE_12__["CustomQuestionsComponent"], _destination_tab_destination_component__WEBPACK_IMPORTED_MODULE_31__["DestinationComponent"], _destination_tab_present_simple_present_simple_component__WEBPACK_IMPORTED_MODULE_32__["PresentSimpleComponent"], _custom_questions_custom_questions_component__WEBPACK_IMPORTED_MODULE_12__["DialogEditPolicyComponent"], _custom_questions_dialogs_dialog_add_question__WEBPACK_IMPORTED_MODULE_13__["DialogAddQuestionComponent"], _custom_questions_dialogs_edit_test_result_model_dialog__WEBPACK_IMPORTED_MODULE_14__["DialogEditTestResultModelComponent"], _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_11__["ButtonsComponent"], _grid_grid_component__WEBPACK_IMPORTED_MODULE_15__["GridComponent"], _lists_lists_component__WEBPACK_IMPORTED_MODULE_16__["ListsComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_17__["MenuComponent"], _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_18__["TabsComponent"], _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_19__["StepperComponent"], _expansion_expansion_component__WEBPACK_IMPORTED_MODULE_20__["ExpansionComponent"], _chips_chips_component__WEBPACK_IMPORTED_MODULE_21__["ChipsComponent"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_22__["ToolbarComponent"], _progress_snipper_progress_snipper_component__WEBPACK_IMPORTED_MODULE_23__["ProgressSnipperComponent"], _progress_progress_component__WEBPACK_IMPORTED_MODULE_24__["ProgressComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_25__["DialogComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_25__["DialogOverviewExampleDialogComponent"], _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_26__["TooltipComponent"], _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_27__["SnackbarComponent"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_28__["SliderComponent"], _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_29__["SlideToggleComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/material-component/material.routing.ts":
  /*!********************************************************!*\
    !*** ./src/app/material-component/material.routing.ts ***!
    \********************************************************/

  /*! exports provided: MaterialRoutes */

  /***/
  function srcAppMaterialComponentMaterialRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialRoutes", function () {
      return MaterialRoutes;
    });
    /* harmony import */


    var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./buttons/buttons.component */
    "./src/app/material-component/buttons/buttons.component.ts");
    /* harmony import */


    var _grid_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./grid/grid.component */
    "./src/app/material-component/grid/grid.component.ts");
    /* harmony import */


    var _lists_lists_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lists/lists.component */
    "./src/app/material-component/lists/lists.component.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/material-component/menu/menu.component.ts");
    /* harmony import */


    var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tabs/tabs.component */
    "./src/app/material-component/tabs/tabs.component.ts");
    /* harmony import */


    var _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./stepper/stepper.component */
    "./src/app/material-component/stepper/stepper.component.ts");
    /* harmony import */


    var _expansion_expansion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./expansion/expansion.component */
    "./src/app/material-component/expansion/expansion.component.ts");
    /* harmony import */


    var _chips_chips_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./chips/chips.component */
    "./src/app/material-component/chips/chips.component.ts");
    /* harmony import */


    var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./toolbar/toolbar.component */
    "./src/app/material-component/toolbar/toolbar.component.ts");
    /* harmony import */


    var _progress_snipper_progress_snipper_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./progress-snipper/progress-snipper.component */
    "./src/app/material-component/progress-snipper/progress-snipper.component.ts");
    /* harmony import */


    var _progress_progress_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./progress/progress.component */
    "./src/app/material-component/progress/progress.component.ts");
    /* harmony import */


    var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./dialog/dialog.component */
    "./src/app/material-component/dialog/dialog.component.ts");
    /* harmony import */


    var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./tooltip/tooltip.component */
    "./src/app/material-component/tooltip/tooltip.component.ts");
    /* harmony import */


    var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./snackbar/snackbar.component */
    "./src/app/material-component/snackbar/snackbar.component.ts");
    /* harmony import */


    var _slider_slider_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./slider/slider.component */
    "./src/app/material-component/slider/slider.component.ts");
    /* harmony import */


    var _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./slide-toggle/slide-toggle.component */
    "./src/app/material-component/slide-toggle/slide-toggle.component.ts");
    /* harmony import */


    var _custom_questions_custom_questions_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./custom-questions/custom-questions.component */
    "./src/app/material-component/custom-questions/custom-questions.component.ts");
    /* harmony import */


    var _destination_tab_destination_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./destination-tab/destination.component */
    "./src/app/material-component/destination-tab/destination.component.ts");

    var MaterialRoutes = [{
      path: 'destination',
      component: _destination_tab_destination_component__WEBPACK_IMPORTED_MODULE_17__["DestinationComponent"]
    }, {
      path: 'custom-questions',
      component: _custom_questions_custom_questions_component__WEBPACK_IMPORTED_MODULE_16__["CustomQuestionsComponent"]
    }, {
      path: 'button',
      component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_0__["ButtonsComponent"]
    }, {
      path: 'grid',
      component: _grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"]
    }, {
      path: 'lists',
      component: _lists_lists_component__WEBPACK_IMPORTED_MODULE_2__["ListsComponent"]
    }, {
      path: 'menu',
      component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"]
    }, {
      path: 'tabs',
      component: _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__["TabsComponent"]
    }, {
      path: 'stepper',
      component: _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_5__["StepperComponent"]
    }, {
      path: 'expansion',
      component: _expansion_expansion_component__WEBPACK_IMPORTED_MODULE_6__["ExpansionComponent"]
    }, {
      path: 'chips',
      component: _chips_chips_component__WEBPACK_IMPORTED_MODULE_7__["ChipsComponent"]
    }, {
      path: 'toolbar',
      component: _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["ToolbarComponent"]
    }, {
      path: 'progress-snipper',
      component: _progress_snipper_progress_snipper_component__WEBPACK_IMPORTED_MODULE_9__["ProgressSnipperComponent"]
    }, {
      path: 'progress',
      component: _progress_progress_component__WEBPACK_IMPORTED_MODULE_10__["ProgressComponent"]
    }, {
      path: 'dialog',
      component: _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"]
    }, {
      path: 'tooltip',
      component: _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_12__["TooltipComponent"]
    }, {
      path: 'snackbar',
      component: _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_13__["SnackbarComponent"]
    }, {
      path: 'slider',
      component: _slider_slider_component__WEBPACK_IMPORTED_MODULE_14__["SliderComponent"]
    }, {
      path: 'slide-toggle',
      component: _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_15__["SlideToggleComponent"]
    }];
    /***/
  },

  /***/
  "./src/app/material-component/menu/menu.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/material-component/menu/menu.component.ts ***!
    \***********************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppMaterialComponentMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");

    var MenuComponent = function MenuComponent() {
      _classCallCheck(this, MenuComponent);
    };

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)();
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      decls: 205,
      vars: 14,
      consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100%", "fxFlex", "100"], ["mat-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menu2", "matMenu"], ["mat-raised-button", "", "color", "accent", 3, "matMenuTriggerFor"], ["animals", "matMenu"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["vertebrates", "matMenu"], ["invertebrates", "matMenu"], ["fish", "matMenu"], ["amphibians", "matMenu"], ["reptiles", "matMenu"], ["mat-menu-item", "", "disabled", ""], ["menu4", "matMenu"], [1, "bg-success", "text-white", "rounded", "font-12", "pl-5", "pr-5"], ["yPosition", "above"], ["appMenu", "matMenu"], ["aboveMenu", "matMenu"], ["yPosition", "below"], ["belowMenu", "matMenu"], ["xPosition", "before"], ["beforeMenu", "matMenu"], ["xPosition", "after"], ["afterMenu", "matMenu"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Basic menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "<mat-menu>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " is a floating panel containing list of options.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-menu", null, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Item 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Item 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "On icon menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "<mat-menu>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " is a floating panel containing list of options.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-menu", null, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Item 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Item 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Nested menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "<mat-menu>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " is a floating panel containing list of options.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Animal index");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-menu", null, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Vertebrates");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Invertebrates");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-menu", null, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Fishes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Amphibians");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Reptiles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Birds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Mammals");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-menu", null, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Insects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Molluscs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Crustaceans");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Corals");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Arachnids");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Velvet worms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Horseshoe crabs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-menu", null, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Baikal oilfish");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Bala shark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Ballan wrasse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Bamboo shark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Banded killifish");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-menu", null, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Sonoran desert toad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Western toad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Arroyo toad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Yosemite toad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-menu", null, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Banded Day Gecko");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Banded Gila Monster");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Black Tree Monitor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Blue Spiny Lizard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Velociraptor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "With icon menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "<mat-menu>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " is a floating panel containing list of options.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "mat-menu", null, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "dialpad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Redial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "voicemail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Check voicemail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "notifications_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Disable alerts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Customizing menu position ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "By default, the menu will display below (y-axis), after (x-axis), without overlapping its trigger. The position can be changed using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "xPosition (before | after)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "yPosition (above | below)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " attributes. The menu can be forced to overlap the trigger using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "overlapTrigger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " attribute.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "mat-menu", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Menu positioning ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Above");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "mat-menu", 18, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Item 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Item 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Below");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "mat-menu", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Item 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Item 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Before");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "mat-menu", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Item 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Item 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "After");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "mat-menu", 25, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Item 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Item 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](102);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](64);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](80);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](92);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](125);

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](159);

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](176);

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](184);

          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](192);

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](200);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r13);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["_MatMenu"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuItem"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu',
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/material-component/progress-snipper/progress-snipper.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/material-component/progress-snipper/progress-snipper.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: ProgressSnipperComponent */

  /***/
  function srcAppMaterialComponentProgressSnipperProgressSnipperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressSnipperComponent", function () {
      return ProgressSnipperComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProgressSnipperComponent_section_35_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Progress:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-slider", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProgressSnipperComponent_section_35_Template_mat_slider_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.value = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.value);
      }
    }

    var ProgressSnipperComponent = function ProgressSnipperComponent() {
      _classCallCheck(this, ProgressSnipperComponent);

      this.color = 'warn';
      this.mode = 'determinate';
      this.value = 50;
    };

    ProgressSnipperComponent.ɵfac = function ProgressSnipperComponent_Factory(t) {
      return new (t || ProgressSnipperComponent)();
    };

    ProgressSnipperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProgressSnipperComponent,
      selectors: [["app-snipper"]],
      decls: 39,
      vars: 6,
      consts: [["fxLayout", "row"], ["fxFlex.gt-sm", "100%"], [1, "example-section", "m-t-20"], [1, "example-margin"], [1, "m-l-20", 3, "ngModel", "ngModelChange"], ["value", "primary", 1, "m-r-10"], ["value", "accent", 1, "m-r-10"], ["value", "warn", 1, "example-margin"], [1, "example-section"], ["value", "determinate", 1, "m-r-10"], ["value", "indeterminate", 1, "example-margin"], ["class", "example-section", 4, "ngIf"], [1, "example-h2"], [1, "example-margin", 3, "color", "mode", "value"], [1, "example-margin", 3, "ngModel", "ngModelChange"]],
      template: function ProgressSnipperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Basic Progress spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "<mat-progress-spinner>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " are a circular indicators of progress and activity.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Configurable progress spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Color:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-radio-group", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProgressSnipperComponent_Template_mat_radio_group_ngModelChange_18_listener($event) {
            return ctx.color = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-radio-button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Primary ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-radio-button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Accent ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-radio-button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Warn ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "section", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Mode:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-radio-group", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProgressSnipperComponent_Template_mat_radio_group_ngModelChange_29_listener($event) {
            return ctx.mode = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-radio-button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Determinate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-radio-button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Indeterminate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ProgressSnipperComponent_section_35_Template, 4, 1, "section", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Result");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "mat-progress-spinner", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode == "determinate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color)("mode", ctx.mode)("value", ctx.value);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSpinner"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinner"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlider"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9wcm9ncmVzcy1zbmlwcGVyL3Byb2dyZXNzLXNuaXBwZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressSnipperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-snipper',
          templateUrl: './progress-snipper.component.html',
          styleUrls: ['./progress-snipper.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/material-component/progress/progress.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/material-component/progress/progress.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ProgressComponent */

  /***/
  function srcAppMaterialComponentProgressProgressComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressComponent", function () {
      return ProgressComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProgressComponent_section_92_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Progress:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-slider", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProgressComponent_section_92_Template_mat_slider_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.value = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.value);
      }
    }

    function ProgressComponent_section_93_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Buffer:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-slider", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProgressComponent_section_93_Template_mat_slider_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.bufferValue = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.bufferValue);
      }
    }

    var ProgressComponent = function ProgressComponent() {
      _classCallCheck(this, ProgressComponent);

      this.color = 'primary';
      this.mode = 'determinate';
      this.value = 50;
      this.bufferValue = 75;
    };

    ProgressComponent.ɵfac = function ProgressComponent_Factory(t) {
      return new (t || ProgressComponent)();
    };

    ProgressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProgressComponent,
      selectors: [["app-progress"]],
      decls: 98,
      vars: 8,
      consts: [["fxLayout", "row"], ["fxFlex.gt-sm", "100%"], ["mode", "determinate", "value", "40"], ["mode", "indeterminate", "value", "40"], ["mode", "buffer"], ["mode", "query"], ["mode", "determinate", "value", "40", "color", "primary"], ["mode", "determinate", "value", "80", "color", "accent"], ["mode", "determinate", "value", "20", "color", "warn"], [1, "example-section"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["value", "primary", 1, "example-margin"], ["value", "accent", 1, "example-margin"], ["value", "warn", 1, "example-margin"], ["value", "determinate", 1, "example-margin"], ["value", "indeterminate", 1, "example-margin"], ["value", "buffer", 1, "example-margin"], ["value", "query", 1, "example-margin"], ["class", "example-section", 4, "ngIf"], [1, "example-h2"], [1, "example-margin", 3, "color", "mode", "value", "bufferValue"], [1, "example-margin", 3, "ngModel", "ngModelChange"]],
      template: function ProgressComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Determinate progress-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "<mat-progress-bar mode=\"determinate\">");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " is a horizontal progress-bar for indicating progress and activity.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-progress-bar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Indeterminate progress-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "<mat-progress-bar mode=\"indeterminate\">");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " is a horizontal progress-bar for indicating progress and activity.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-progress-bar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Buffer progress-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "<mat-progress-bar mode=\"buffer\">");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " is a horizontal progress-bar for indicating progress and activity.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "mat-progress-bar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Query progress-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "<mat-progress-bar mode=\"query\">");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " is a horizontal progress-bar for indicating progress and activity.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "mat-progress-bar", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Colored progress-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "<mat-progress-bar mode=\"determinate\">");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " is a horizontal progress-bar for indicating progress and activity.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "mat-progress-bar", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "mat-progress-bar", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "mat-progress-bar", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Configurable progress-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "<mat-progress-bar mode=\"query\">");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " is a horizontal progress-bar for indicating progress and activity.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "section", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Color:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-radio-group", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProgressComponent_Template_mat_radio_group_ngModelChange_72_listener($event) {
            return ctx.color = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-radio-button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Primary ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-radio-button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Accent ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-radio-button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Warn ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "section", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Mode:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-radio-group", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProgressComponent_Template_mat_radio_group_ngModelChange_83_listener($event) {
            return ctx.mode = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-radio-button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Determinate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-radio-button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Indeterminate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-radio-button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Buffer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-radio-button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Query ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, ProgressComponent_section_92_Template, 4, 1, "section", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, ProgressComponent_section_93_Template, 4, 1, "section", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h2", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Result");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "section", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "mat-progress-bar", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode == "determinate" || ctx.mode == "buffer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode == "buffer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color)("mode", ctx.mode)("value", ctx.value)("bufferValue", ctx.bufferValue);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBar"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlider"]],
      styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L3Byb2dyZXNzL3Byb2dyZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9wcm9ncmVzcy9wcm9ncmVzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWgyIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1tYXJnaW4ge1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-progress',
          templateUrl: './progress.component.html',
          styleUrls: ['./progress.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/material-component/slide-toggle/slide-toggle.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/material-component/slide-toggle/slide-toggle.component.ts ***!
    \***************************************************************************/

  /*! exports provided: SlideToggleComponent */

  /***/
  function srcAppMaterialComponentSlideToggleSlideToggleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlideToggleComponent", function () {
      return SlideToggleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SlideToggleComponent = function SlideToggleComponent() {
      _classCallCheck(this, SlideToggleComponent);

      this.color = 'accent';
      this.checked = false;
      this.disabled = false;
    };

    SlideToggleComponent.ɵfac = function SlideToggleComponent_Factory(t) {
      return new (t || SlideToggleComponent)();
    };

    SlideToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SlideToggleComponent,
      selectors: [["app-slide-toggle"]],
      decls: 41,
      vars: 6,
      consts: [["fxLayout", "row"], ["fxFlex.gt-sm", "100%"], [1, "example-section"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["color", "primary", "value", "primary", 1, "example-margin"], ["color", "accent", "value", "accent", 1, "example-margin"], ["color", "warn", "value", "warn", 1, "example-margin"], [1, "example-margin", 3, "ngModel", "ngModelChange"], [1, "example-h2"], [1, "example-margin", 3, "color", "checked", "disabled"]],
      template: function SlideToggleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Basic slide-toggles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "<mat-slide-toggle>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " is an on/off control that can be toggled via clicking or dragging.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-slide-toggle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Slide me!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Basic grid-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "<mat-slide-toggle>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " is an on/off control that can be toggled via clicking or dragging.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Color:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-radio-group", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SlideToggleComponent_Template_mat_radio_group_ngModelChange_23_listener($event) {
            return ctx.color = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-radio-button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Primary ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-radio-button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Accent ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-radio-button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Warn ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-checkbox", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SlideToggleComponent_Template_mat_checkbox_ngModelChange_31_listener($event) {
            return ctx.checked = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Checked");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-checkbox", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SlideToggleComponent_Template_mat_checkbox_ngModelChange_34_listener($event) {
            return ctx.disabled = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Disabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Result");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-slide-toggle", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Slide me! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checked);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color)("checked", ctx.checked)("disabled", ctx.disabled);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggle"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioButton"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckbox"]],
      styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L3NsaWRlLXRvZ2dsZS9zbGlkZS10b2dnbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9tYXRlcmlhbC1jb21wb25lbnQvc2xpZGUtdG9nZ2xlL3NsaWRlLXRvZ2dsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWgyIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1tYXJnaW4ge1xyXG4gIG1hcmdpbjogMTBweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideToggleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-slide-toggle',
          templateUrl: './slide-toggle.component.html',
          styleUrls: ['./slide-toggle.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/material-component/slider/slider.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/material-component/slider/slider.component.ts ***!
    \***************************************************************/

  /*! exports provided: SliderComponent */

  /***/
  function srcAppMaterialComponentSliderSliderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliderComponent", function () {
      return SliderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SliderComponent = function SliderComponent() {
      _classCallCheck(this, SliderComponent);

      this.demo = 0;
      this.val = 50;
      this.min = 0;
      this.max = 100;
    };

    SliderComponent.ɵfac = function SliderComponent_Factory(t) {
      return new (t || SliderComponent)();
    };

    SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SliderComponent,
      selectors: [["app-slider"]],
      decls: 64,
      vars: 12,
      consts: [[1, ""], ["href", "https://material.angular.io/components/slider/overview"], [1, "m-b-0"], ["color", "warn", "value", "40"], ["color", "primary", "value", "40"], ["slidey", ""], ["matInput", "", 3, "ngModel", "ngModelChange"], ["tickInterval", "5", "color", "warn", 3, "min", "max"], ["slider2", ""], ["disabled", ""], ["slider3", ""], ["vertical", "", "value", "50"], ["min", "1", "max", "100", "step", "20"], ["slider5", ""], ["tickInterval", "auto"], ["tickInterval", "9"], ["thumbLabel", ""], ["step", "40", 3, "value"], ["step", "40", 3, "ngModel", "ngModelChange"], ["invert", "", "value", "50", "tickInterval", "5"], ["vertical", "", "invert", "", "thumbLabel", "", "tickInterval", "auto", "value", "50"]],
      template: function SliderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Slider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "mat-slider allows for the selection of a value from a range via mouse, touch, or keyboard, similar to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "code", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Official Component");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Basic Slider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-slider", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "value Slider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Label ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-slider", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "With Min and Max");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SliderComponent_Template_input_ngModelChange_21_listener($event) {
            return ctx.min = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SliderComponent_Template_input_ngModelChange_23_listener($event) {
            return ctx.max = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-slider", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Disabled Slider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-slider", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Vertical slider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mat-slider", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Selecting a value");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "mat-slider", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Slider with set tick interval");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "mat-slider", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "mat-slider", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Slider with Thumb Label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "mat-slider", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Slider with one-way binding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "mat-slider", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SliderComponent_Template_input_ngModelChange_52_listener($event) {
            return ctx.val = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Slider with two-way binding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-slider", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SliderComponent_Template_mat_slider_ngModelChange_55_listener($event) {
            return ctx.demo = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SliderComponent_Template_input_ngModelChange_57_listener($event) {
            return ctx.demo = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Inverted slider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "mat-slider", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Inverted vertical slider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "mat-slider", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _r0.value, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.min);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.max);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.min)("max", ctx.max);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _r1.value, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _r2.value, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _r3.value, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.val);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.val);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.demo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.demo);
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlider"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-slider',
          templateUrl: './slider.component.html',
          styleUrls: ['./slider.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/material-component/snackbar/snackbar.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/material-component/snackbar/snackbar.component.ts ***!
    \*******************************************************************/

  /*! exports provided: SnackbarComponent */

  /***/
  function srcAppMaterialComponentSnackbarSnackbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SnackbarComponent", function () {
      return SnackbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");

    var SnackbarComponent = /*#__PURE__*/function () {
      function SnackbarComponent(snackBar) {
        _classCallCheck(this, SnackbarComponent);

        this.snackBar = snackBar;
      }

      _createClass(SnackbarComponent, [{
        key: "openSnackBar",
        value: function openSnackBar(message, action) {
          this.snackBar.open(message, action, {
            duration: 2000
          });
        }
      }]);

      return SnackbarComponent;
    }();

    SnackbarComponent.ɵfac = function SnackbarComponent_Factory(t) {
      return new (t || SnackbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]));
    };

    SnackbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SnackbarComponent,
      selectors: [["app-snackbar"]],
      decls: 17,
      vars: 0,
      consts: [[1, ""], ["href", "https://material.angular.io/components/snack-bar/overview"], ["matInput", "", "value", "Disco party!", "placeholder", "Message"], ["message", ""], ["matInput", "", "value", "Dance", "placeholder", "Action"], ["action", ""], ["mat-raised-button", "", "color", "warn", 3, "click"]],
      template: function SnackbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Basic snack-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "matSnackBar is a service for displaying snack-bar notifications. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "code", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Official Component");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SnackbarComponent_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

            return ctx.openSnackBar(_r0.value, _r1.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Show snack-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInput"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9zbmFja2Jhci9zbmFja2Jhci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-snackbar',
          templateUrl: './snackbar.component.html',
          styleUrls: ['./snackbar.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/material-component/stepper/stepper.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/material-component/stepper/stepper.component.ts ***!
    \*****************************************************************/

  /*! exports provided: StepperComponent */

  /***/
  function srcAppMaterialComponentStepperStepperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StepperComponent", function () {
      return StepperComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/stepper.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");

    function StepperComponent_ng_template_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out your name");
      }
    }

    function StepperComponent_ng_template_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out your address");
      }
    }

    function StepperComponent_ng_template_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Done");
      }
    }

    function StepperComponent_ng_template_60_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out your name");
      }
    }

    function StepperComponent_ng_template_68_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out your address");
      }
    }

    function StepperComponent_ng_template_77_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Done");
      }
    }

    function StepperComponent_ng_template_101_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out your name");
      }
    }

    function StepperComponent_ng_template_109_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out your address");
      }
    }

    function StepperComponent_ng_template_118_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Done");
      }
    }

    function StepperComponent_ng_template_147_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out your name");
      }
    }

    function StepperComponent_ng_template_155_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out your address");
      }
    }

    function StepperComponent_ng_template_164_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Done");
      }
    }

    function StepperComponent_ng_template_193_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out your name");
      }
    }

    function StepperComponent_ng_template_201_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out your address");
      }
    }

    function StepperComponent_ng_template_210_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Done");
      }
    }

    function StepperComponent_ng_template_229_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out your name");
      }
    }

    function StepperComponent_ng_template_237_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out your address");
      }
    }

    function StepperComponent_ng_template_246_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Done");
      }
    }

    function StepperComponent_ng_template_271_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "call_end");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StepperComponent_ng_template_272_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "forum");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StepperComponent_ng_template_293_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out your name");
      }
    }

    function StepperComponent_ng_template_301_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out your address");
      }
    }

    function StepperComponent_ng_template_310_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Done");
      }
    }

    var StepperComponent = /*#__PURE__*/function () {
      function StepperComponent(_formBuilder) {
        _classCallCheck(this, StepperComponent);

        this._formBuilder = _formBuilder;
        this.isLinear = false;
        this.firstFormGroup = Object.create(null);
        this.secondFormGroup = Object.create(null);
        this.isLinearvarient = false;
        this.varientfirstFormGroup = Object.create(null);
        this.varientsecondFormGroup = Object.create(null);
        this.isLinearposition = false;
        this.positionfirstFormGroup = Object.create(null);
        this.positionsecondFormGroup = Object.create(null);
        this.optionalfirstFormGroup = Object.create(null);
        this.optionalsecondFormGroup = Object.create(null);
        this.isOptional = false;
        this.editablefirstFormGroup = Object.create(null);
        this.editablesecondFormGroup = Object.create(null);
        this.isEditable = false;
        this.customizefirstFormGroup = Object.create(null);
        this.customizesecondFormGroup = Object.create(null);
        this.errorfirstFormGroup = Object.create(null);
        this.errorsecondFormGroup = Object.create(null);
      }

      _createClass(StepperComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }); // varient

          this.varientfirstFormGroup = this._formBuilder.group({
            varientfirstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.varientsecondFormGroup = this._formBuilder.group({
            varientsecondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }); // position

          this.positionfirstFormGroup = this._formBuilder.group({
            positionfirstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.positionsecondFormGroup = this._formBuilder.group({
            positionsecondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }); // optional

          this.optionalfirstFormGroup = this._formBuilder.group({
            optionalfirstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.optionalsecondFormGroup = this._formBuilder.group({
            optionalsecondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }); // editable

          this.editablefirstFormGroup = this._formBuilder.group({
            editablefirstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.editablesecondFormGroup = this._formBuilder.group({
            editablesecondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }); // customize

          this.customizefirstFormGroup = this._formBuilder.group({
            customizefirstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.customizesecondFormGroup = this._formBuilder.group({
            customizesecondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }); // error

          this.errorfirstFormGroup = this._formBuilder.group({
            errorfirstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.errorsecondFormGroup = this._formBuilder.group({
            errorsecondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }]);

      return StepperComponent;
    }();

    StepperComponent.ɵfac = function StepperComponent_Factory(t) {
      return new (t || StepperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    StepperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StepperComponent,
      selectors: [["app-stepper"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["STEPPER_GLOBAL_OPTIONS"],
        useValue: {
          displayDefaultIndicatorType: false
        }
      }])],
      decls: 317,
      vars: 35,
      consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100%", "fxFlex", "100"], [1, ""], ["href", "https://material.angular.io/components/stepper/overview"], ["mat-raised-button", "", "id", "toggle-linear", 3, "click"], [3, "linear"], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-raised-button", "", "color", "warn", "matStepperNext", ""], ["matInput", "", "placeholder", "Address", "formControlName", "secondCtrl", "required", ""], ["mat-raised-button", "", "color", "accent", "matStepperPrevious", ""], [1, "bg-success", "text-white", "rounded", "font-12", "pl-5", "pr-5"], [1, "m-t-20", 3, "linear"], ["steppervarient", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "varientfirstCtrl", "required", ""], ["mat-raised-button", "", "matStepperNext", "", "color", "accent"], ["matInput", "", "placeholder", "Address", "formControlName", "varientsecondCtrl", "required", ""], [1, "button-row"], ["mat-raised-button", "", "color", "primary", "matStepperPrevious", ""], ["mat-raised-button", "", "color", "accent", "matStepperNext", ""], ["mat-raised-button", "", "color", "warn", 3, "click"], ["labelPosition", "bottom"], ["stepperposition", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "positionfirstCtrl", "required", ""], ["optional", "", 3, "stepControl"], ["matInput", "", "placeholder", "Address", "formControlName", "positionsecondCtrl", "required", ""], [1, "button-row", "m-t-10"], ["mat-raised-button", "", 3, "click"], ["linear", ""], ["stepperoptional", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "optionalfirstCtrl", "required", ""], [3, "stepControl", "optional"], ["matInput", "", "placeholder", "Address", "formControlName", "optionalsecondCtrl", "required", ""], [1, "button-row", "m-t-20"], ["steppereditable", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "editablefirstCtrl", "required", ""], [3, "stepControl", "editable"], ["matInput", "", "placeholder", "Address", "formControlName", "editablesecondCtrl", "required", ""], ["steppercustomize", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "customizefirstCtrl", "required", ""], ["matInput", "", "placeholder", "Address", "formControlName", "customizesecondCtrl", "required", ""], [1, "m-t-20"], ["label", "Step 1", "state", "phone"], ["label", "Step 2", "state", "chat"], ["label", "Step 3"], ["matStepperIcon", "phone"], ["matStepperIcon", "chat"], ["steppererror", ""], ["errorMessage", "Name is required.", 3, "stepControl"], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "errorfirstCtrl", "required", ""], ["errorMessage", "Address is required.", 3, "stepControl"], ["matInput", "", "placeholder", "Address", "formControlName", "errorsecondCtrl", "required", ""]],
      template: function StepperComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Stepper");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Check the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Official Component");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepperComponent_Template_button_click_11_listener() {
            return ctx.isLinear = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Enable linear mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-horizontal-stepper", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-step", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, StepperComponent_ng_template_16_Template, 1, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-step", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, StepperComponent_ng_template_24_Template, 1, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, StepperComponent_ng_template_33_Template, 1, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " You are now done. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Stepper variants ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "There are two stepper components: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "mat-horizontal-stepper");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "mat-vertical-stepper");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, ". They can be used the same way. The only difference is the orientation of stepper.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepperComponent_Template_button_click_54_listener() {
            return ctx.isLinearvarient = !ctx.isLinearvarient;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-vertical-stepper", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-step", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, StepperComponent_ng_template_60_Template, 1, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-step", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, StepperComponent_ng_template_68_Template, 1, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, StepperComponent_ng_template_77_Template, 1, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " You are now done. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepperComponent_Template_button_click_82_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57);

            return _r3.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Stepper Label ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "If a step's label is only text, then the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " attribute can be used.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-horizontal-stepper", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-step", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, StepperComponent_ng_template_101_Template, 1, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-step", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, StepperComponent_ng_template_109_Template, 1, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, StepperComponent_ng_template_118_Template, 1, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " You are now done. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepperComponent_Template_button_click_123_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](98);

            return _r7.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Stepper with optional steps ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "If completion of a step in linear stepper is not required, then the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "optional");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " attribute can be set on ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepperComponent_Template_button_click_141_listener() {
            return ctx.isOptional = !ctx.isOptional;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "mat-horizontal-stepper", 30, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "mat-step", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](147, StepperComponent_ng_template_147_Template, 1, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "mat-step", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](155, StepperComponent_ng_template_155_Template, 1, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](164, StepperComponent_ng_template_164_Template, 1, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " You are now done. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepperComponent_Template_button_click_169_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](144);

            return _r11.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Stepper with editable steps ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "By default, steps are editable, which means users can return to previously completed steps and edit their responses. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "editable=\"false\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " can be set on ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " to change the default.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepperComponent_Template_button_click_187_listener() {
            return ctx.isEditable = !ctx.isEditable;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "mat-horizontal-stepper", 30, 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "mat-step", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](193, StepperComponent_ng_template_193_Template, 1, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "mat-step", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](201, StepperComponent_ng_template_201_Template, 1, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](210, StepperComponent_ng_template_210_Template, 1, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, " You are now done. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepperComponent_Template_button_click_215_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](190);

            return _r15.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Stepper with customized states ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "mat-horizontal-stepper", null, 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "mat-step", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](229, StepperComponent_ng_template_229_Template, 1, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "mat-step", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](237, StepperComponent_ng_template_237_Template, 1, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](246, StepperComponent_ng_template_246_Template, 1, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, " You are now done. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepperComponent_Template_button_click_251_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](226);

            return _r19.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "mat-horizontal-stepper", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "mat-step", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Put down your phones.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "mat-step", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Socialize with each other.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "mat-step", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "You're welcome.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](271, StepperComponent_ng_template_271_Template, 2, 0, "ng-template", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](272, StepperComponent_ng_template_272_Template, 2, 0, "ng-template", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Error State ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "The stepper can now show error states by simply providing the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "showError");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, " option to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "STEPPER_GLOBAL_OPTIONS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, " in your application's root module as mentioned above.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "mat-horizontal-stepper", 30, 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "mat-step", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](293, StepperComponent_ng_template_293_Template, 1, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "mat-step", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](301, StepperComponent_ng_template_301_Template, 1, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](303, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](310, StepperComponent_ng_template_310_Template, 1, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, " You are now done. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepperComponent_Template_button_click_315_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](290);

            return _r25.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("linear", ctx.isLinear);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.firstFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.firstFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.secondFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.secondFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", !ctx.isLinearvarient ? "Enable linear mode" : "Disable linear mode", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("linear", ctx.isLinearvarient);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.varientfirstFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.varientfirstFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.varientsecondFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.varientsecondFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.positionfirstFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.positionfirstFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.positionsecondFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.positionsecondFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", !ctx.isOptional ? "Enable optional steps" : "Disable optional steps", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.optionalfirstFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.optionalfirstFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.optionalsecondFormGroup)("optional", ctx.isOptional);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.optionalsecondFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", !ctx.isEditable ? "Enable edit mode" : "Disable edit mode", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.editablefirstFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.editablefirstFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.editablesecondFormGroup)("editable", ctx.isEditable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.editablesecondFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.customizefirstFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.customizefirstFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.customizesecondFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.customizesecondFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.errorfirstFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.errorfirstFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.errorsecondFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.errorsecondFormGroup);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatHorizontalStepper"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepLabel"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperNext"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperPrevious"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatVerticalStepper"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperIcon"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9zdGVwcGVyL3N0ZXBwZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StepperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-stepper',
          templateUrl: './stepper.component.html',
          styleUrls: ['./stepper.component.scss'],
          providers: [{
            provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["STEPPER_GLOBAL_OPTIONS"],
            useValue: {
              displayDefaultIndicatorType: false
            }
          }]
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/material-component/tabs/tabs.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/material-component/tabs/tabs.component.ts ***!
    \***********************************************************/

  /*! exports provided: TabsComponent */

  /***/
  function srcAppMaterialComponentTabsTabsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsComponent", function () {
      return TabsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");

    function TabsComponent_ng_template_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " \u2B50 ");
      }
    }

    var TabsComponent = function TabsComponent() {
      _classCallCheck(this, TabsComponent);
    };

    TabsComponent.ɵfac = function TabsComponent_Factory(t) {
      return new (t || TabsComponent)();
    };

    TabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TabsComponent,
      selectors: [["app-tabs"]],
      decls: 119,
      vars: 0,
      consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100%", "fxFlex", "100"], [1, ""], ["href", "https://material.angular.io/components/tabs/overview"], ["label", "Tab 1"], ["label", "Tab 2"], [1, "demo-tab-group"], [1, "demo-tab-content"], ["mat-tab-label", ""], ["label", "Tab 3", "disabled", ""], ["label", "Tab 4"], ["label", "Tab 5"], ["label", "Tab 6"], [1, "bg-success", "text-white", "rounded", "font-12", "pl-5", "pr-5"], ["mat-align-tabs", "start"], ["label", "First"], [1, "p-20"], ["label", "Second"], ["label", "Third"], ["mat-align-tabs", "center"], ["mat-align-tabs", "end"], [1, "m-b-0"], [1, "p-l-20", "p-r-20", "p-b-20"], [1, "m-0"], ["animationDuration", "0ms"], ["animationDuration", "2000ms"]],
      template: function TabsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Basic Tab ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Check the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Official Component");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-tab-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-tab", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Content 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-tab", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Content 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Complex Tab Example (Responsive tab)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-tab-group", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-tab", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-tab", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TabsComponent_ng_template_29_Template, 1, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-tab", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " No content ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-tab", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-tab", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " No content ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-tab", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " No content ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Label alignment ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "If you want to align the tab labels in the center or towards the end of the container, you can do so using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "[mat-align-tabs]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " attribute.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-tab-group", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-tab", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Content 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-tab", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Content 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-tab", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Content 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-tab-group", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-tab", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Content 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-tab", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Content 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-tab", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Content 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-tab-group", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-tab", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Content 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-tab", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Content 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-tab", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Content 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-card-content", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Tab group animations ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "If you want to align the tab labels in the center or towards the end of the container, you can do so using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "[mat-align-tabs]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " attribute.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h5", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "No animation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-tab-group", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-tab", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Content 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "mat-tab", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Content 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-tab", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Content 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h5", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Very slow animation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "mat-tab-group", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-tab", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Content 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "mat-tab", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Content 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "mat-tab", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Content 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabGroup"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTab"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabLabel"]],
      styles: [".demo-tab-group[_ngcontent-%COMP%] {\n  border: 1px solid #e8e8e8;\n}\n\n.demo-tab-content[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L3RhYnMvdGFicy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC90YWJzL3RhYnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVtby10YWItZ3JvdXAge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbn1cclxuXHJcbi5kZW1vLXRhYi1jb250ZW50IHtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tabs',
          templateUrl: './tabs.component.html',
          styleUrls: ['./tabs.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/material-component/toolbar/toolbar.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/material-component/toolbar/toolbar.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ToolbarComponent */

  /***/
  function srcAppMaterialComponentToolbarToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function () {
      return ToolbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");

    var ToolbarComponent = /*#__PURE__*/function () {
      function ToolbarComponent() {
        _classCallCheck(this, ToolbarComponent);
      }

      _createClass(ToolbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToolbarComponent;
    }();

    ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) {
      return new (t || ToolbarComponent)();
    };

    ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToolbarComponent,
      selectors: [["app-toolbar"]],
      decls: 68,
      vars: 0,
      consts: [[1, "no-shadow"], [1, ""], ["href", "https://material.angular.io/components/toolbar/overview"], ["color", "primary"], ["fxFlex", ""], ["mat-button", "", "href", "#", "mat-icon-button", ""], [1, "example-fill-remaining-space"], ["color", "accent"], ["color", "warn", 1, "bg-success"], [1, "example-spacer"], [1, "example-icon"]],
      template: function ToolbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "matToolbar is a container for headers, titles, or actions.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "code", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Official Component");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Basic toolbar:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "My App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "The primary color toolbar:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-toolbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Primary Toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Multiple row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "First Row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Second Row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Positining toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-toolbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Application Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Right Aligned Text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "An accent toolbar using the second toolbar row:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-toolbar", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Second Line Toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "A primary toolbar using the third toolbar row:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-toolbar", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Custom Toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Second Line");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "verified_user");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Third Line");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "favorite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"]],
      styles: [".no-shadow[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n\n.example-fill-remaining-space[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.example-icon[_ngcontent-%COMP%] {\n  padding: 0 14px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtFQUdFLGNBQWM7QUFBaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tc2hhZG93IG1hdC10b29sYmFye1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZSB7XHJcbiAgLy8gVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcclxuICAvLyBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LlxyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbi5leGFtcGxlLWljb24ge1xyXG4gIHBhZGRpbmc6IDAgMTRweDtcclxufVxyXG5cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-toolbar',
          templateUrl: './toolbar.component.html',
          styleUrls: ['./toolbar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/material-component/tooltip/tooltip.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/material-component/tooltip/tooltip.component.ts ***!
    \*****************************************************************/

  /*! exports provided: TooltipComponent */

  /***/
  function srcAppMaterialComponentTooltipTooltipComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TooltipComponent", function () {
      return TooltipComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/core.js");

    var TooltipComponent = function TooltipComponent() {
      _classCallCheck(this, TooltipComponent);

      this.position = 'before';
    };

    TooltipComponent.ɵfac = function TooltipComponent_Factory(t) {
      return new (t || TooltipComponent)();
    };

    TooltipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TooltipComponent,
      selectors: [["app-tooltip"]],
      decls: 58,
      vars: 2,
      consts: [["fxLayout", "row"], ["fxFlex.gt-sm", "100%"], ["matTooltip", "Tooltip!"], [1, "button-row"], ["mat-raised-button", "", "color", "accent", "matTooltip", "Tooltip!", "matTooltipPosition", "above"], ["mat-raised-button", "", "color", "warn", "matTooltip", "Tooltip!", "matTooltipPosition", "below"], ["mat-raised-button", "", "color", "primary", "matTooltip", "Tooltip!", "matTooltipPosition", "left"], ["mat-raised-button", "", "color", "warn", "matTooltip", "Tooltip!", "matTooltipPosition", "right"], ["mat-raised-button", "", "color", "accent", "matTooltip", "Tooltip!", "matTooltipPosition", "before"], ["matTooltip", "Tooltip!", 1, "example-tooltip-host", 3, "matTooltipPosition"], [1, "example-select", 3, "ngModel", "ngModelChange"], ["value", "before"], ["value", "after"], ["value", "above"], ["value", "below"], ["value", "left"], ["value", "right"]],
      template: function TooltipComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Basic Tooltip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "The Angular Material tooltip provides a text label that is displayed when the user hovers over or longpresses an element. add ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "matTooltip=\"yourtext\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " to any element ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "I have a tooltip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Positioning Tooltip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Add ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "matTooltipPosition=\"below, above, left, right, before, after\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " to any element");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Above tooltip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "below tooltip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "left tooltip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "right tooltip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Before tooltip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Tooltip with custom position");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "The Angular Material tooltip provides a text label that is displayed when the user hovers over or longpresses an element.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Show tooltip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TooltipComponent_Template_mat_select_ngModelChange_45_listener($event) {
            return ctx.position = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Before");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "After");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Above");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Below");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", ctx.position);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.position);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltip"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOption"]],
      styles: [".example-tooltip-host[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  margin: 50px;\n}\n\n.example-select[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L3Rvb2x0aXAvdG9vbHRpcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS10b29sdGlwLWhvc3Qge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA1MHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1zZWxlY3Qge1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tooltip',
          templateUrl: './tooltip.component.html',
          styleUrls: ['./tooltip.component.scss']
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=material-component-material-module-es5.js.map
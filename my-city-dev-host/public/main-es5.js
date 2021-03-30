function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-wrapper\" [ngClass]=\"{'page-sign-up body--bg': appComponentViewModel.backgroundPrimaryIsActive}\">\r\n  <div [ngSwitch]=\"appComponentViewModel.headerType\">\r\n    <header-base *ngSwitchCase=\"'BASIC'\"></header-base>\r\n    <header-standart *ngSwitchCase=\"'STARNDART'\"></header-standart>\r\n  </div>\r\n  <main>\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n  <!-- <div [ngSwitch]=\"appComponentViewModel.footerTheme\">\r\n    <app-footer-white *ngSwitchCase=\"'WHITE_BACKGROUND'\"></app-footer-white>\r\n    <app-footer-primary *ngSwitchCase=\"'PRIMARY_BACKGROUND'\"></app-footer-primary>\r\n  </div> -->\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/article/article.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/article/article.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppArticleArticleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"intro\">\r\n  <div class=\"container\">\r\n    <div class=\"intro__inner intro__inner-indent\">\r\n      <h3 class=\"main-title с-text-primary mt-5 mb-5\">Article</h3>\r\n\r\n\r\n      <div style=\"width: 65%; \">\r\n        <div class=\"content-media\">\r\n          <div *ngIf=\"article.images.length > 1\" (click)=\"onImageClick()\" class=\"gallery-arrow left\">\r\n            <!-- <img src=\"../../../assets/images/icons/arrow-left.svg\" (click)=\"onImageClick()\"> -->\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"isolation:isolate\"\r\n              viewBox=\"0 0 50 50\" width=\"50\" height=\"50\">\r\n              <defs>\r\n                <clipPath id=\"_clipPath_02iJG4Q0WqADHYhCKuzfWJTivKCAKaZE\">\r\n                  <rect width=\"50\" height=\"50\" />\r\n                </clipPath>\r\n              </defs>\r\n              <g clip-path=\"url(#_clipPath_02iJG4Q0WqADHYhCKuzfWJTivKCAKaZE)\">\r\n                <path\r\n                  d=\" M 21.587 25 L 39.474 6.737 C 40.272 5.921 40.265 4.615 39.458 3.808 L 36.26 0.61 C 35.868 0.218 35.335 -0.002 34.781 0 C 34.226 0.002 33.695 0.224 33.306 0.618 L 10.543 23.527 C 10.151 23.917 9.931 24.447 9.932 25 C 9.931 25.553 10.151 26.083 10.543 26.473 L 33.306 49.382 C 33.695 49.776 34.226 49.998 34.781 50 C 35.335 50.002 35.868 49.782 36.26 49.39 L 39.458 46.192 C 40.265 45.385 40.272 44.079 39.474 43.263 L 21.587 25 Z \"\r\n                  fill=\"rgb(151,195,204)\" fill-opacity=\"0.6\" />\r\n              </g>\r\n            </svg>\r\n          </div>\r\n          <div *ngIf=\"article.images.length > 1\" (click)=\"onImageClick()\" class=\"gallery-arrow right\">\r\n            <!-- <img src=\"../../../assets/images/icons/arrow-right.svg\" (click)=\"onImageClick()\"> -->\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"isolation:isolate\"\r\n              viewBox=\"0 0 50 50\" width=\"50\" height=\"50\">\r\n              <defs>\r\n                <clipPath id=\"_clipPath_1kWOPk1YnF5bN8kqXHTXsDqNElY9RXG2\">\r\n                  <rect width=\"50\" height=\"50\" />\r\n                </clipPath>\r\n              </defs>\r\n              <g clip-path=\"url(#_clipPath_1kWOPk1YnF5bN8kqXHTXsDqNElY9RXG2)\">\r\n                <path\r\n                  d=\" M 28.413 25 L 10.526 43.263 C 9.728 44.079 9.735 45.385 10.542 46.192 L 13.74 49.39 C 14.132 49.782 14.665 50.002 15.219 50 C 15.774 49.998 16.305 49.776 16.694 49.382 L 39.457 26.473 C 39.849 26.083 40.069 25.553 40.068 25 C 40.069 24.447 39.849 23.917 39.457 23.527 L 16.694 0.618 C 16.305 0.224 15.774 0.002 15.219 0 C 14.665 -0.002 14.132 0.218 13.74 0.61 L 10.542 3.808 C 9.735 4.615 9.728 5.921 10.526 6.737 L 28.413 25 Z \"\r\n                  fill=\"rgb(150,195,204)\" fill-opacity=\"0.6\" />\r\n              </g>\r\n            </svg>\r\n          </div>\r\n          <img id=\"article-image\" class=\"img-card\" src={{currentImageUrl}} alt=\"Photo\" (click)=\"onImageClick()\">\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <div style=\"display: flex;\">\r\n        <div class=\"info-wrap w-30\">\r\n          <div class=\"info-item info--max-content\">\r\n            <span class=\"item-image\">\r\n              <svg style=\"width:2em;\" viewBox=\"0 0 24 24\">\r\n                <path fill=\"rgb(102,205,225)\"\r\n                  d=\"M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1\" />\r\n              </svg>\r\n            </span>\r\n            <span class=\"item-text text-in-one-line\">\r\n              {{article.dateViewModel}}\r\n            </span>\r\n          </div>\r\n\r\n\r\n          <div class=\"info-item\">\r\n            <span *ngIf=\"article.street\" class=\"item-image \">\r\n              <svg style=\"width:2em;\" viewBox=\"0 0 24 24\">\r\n                <path fill=\"currentColor\"\r\n                  d=\"M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z\"\r\n                  fill=\"rgb(102,205,225)\" />\r\n              </svg>\r\n              <!-- <img src=\"../../../assets/images/icons/eye.svg\" alt=\"\"> -->\r\n            </span>\r\n            <span class=\"item-text\">\r\n              {{article.street}}\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"info-wrap w-70\">\r\n\r\n          <div class=\"info-item info--max-content\">\r\n            <span *ngIf=\"article.time\" class=\"item-image\">\r\n              <svg style=\"width:2em;\" viewBox=\"0 0 24 24\">\r\n                <path fill=\"currentColor\"\r\n                  d=\"M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M17 13.9L16.3 15.2L11 12.3V7H12.5V11.4L17 13.9Z\"\r\n                  fill=\"rgb(102,205,225)\" />\r\n              </svg>\r\n              <!-- <img src=\"../../../assets/images/icons/eye.svg\" alt=\"\"> -->\r\n            </span>\r\n            <span class=\"text-in-one-line item-text \">\r\n              {{article.time}}\r\n            </span>\r\n          </div>\r\n\r\n          <div class=\"info-item info--max-content\" style=\"\">\r\n            <span *ngIf=\"article.price\" class=\"item-image\">\r\n              <svg style=\"width:2em;\" viewBox=\"0 0 24 24\">\r\n                <path fill=\"currentColor\"\r\n                  d=\"M22 10V6C22 4.89 21.1 4 20 4H4C2.9 4 2 4.89 2 6V10C3.11 10 4 10.9 4 12S3.11 14 2 14V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V14C20.9 14 20 13.1 20 12S20.9 10 22 10M20 8.54C18.81 9.23 18 10.53 18 12S18.81 14.77 20 15.46V18H4V15.46C5.19 14.77 6 13.47 6 12C6 10.5 5.2 9.23 4 8.54L4 6H20V8.54M11 15H13V17H11M11 11H13V13H11M11 7H13V9H11Z\"\r\n                  fill=\"rgb(102,205,225)\" />\r\n              </svg>\r\n              <!-- <img src=\"../../../assets/images/icons/eye.svg\" alt=\"\"> -->\r\n            </span>\r\n            <span class=\"item-text\">\r\n              {{article.price}}\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"content-actions\">\r\n        <button class=\"c-btn c-btn-primary mb-2\" type=\"submit\">\r\n          <span class=\"mat-btn--img\">\r\n            <svg style=\"width: 1.2em;\r\n            position: relative;\r\n            top: -5px;\" viewBox=\"0 0 24 24\">\r\n              <path fill=\"currentColor\"\r\n                d=\"M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z\" />\r\n            </svg>\r\n          </span>\r\n          <span style=\"position: relative;\r\n          top: 0px;\">На мапi</span>\r\n        </button>\r\n\r\n        <button class=\"c-btn c-btn-primary mb-2\" type=\"submit\">\r\n          <span class=\"mat-btn--img\">\r\n            <svg style=\"width: 1.2em;\r\n            position: relative;\r\n            top: -5px;\" viewBox=\"0 0 24 24\">\r\n              <path fill=\"currentColor\"\r\n                d=\"M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z\" />\r\n            </svg>\r\n          </span>\r\n          <span style=\"position: relative;\r\n          top: 0px;\">Перейти на сайт</span>\r\n        </button>\r\n      </div>\r\n\r\n      <div fxLayout=\"row wrap\">\r\n        <div>\r\n          <div class=\"article-main-text text-color mt-5\" [innerHTML]=\"currentArticleFullText\"></div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"article.views\" class=\"info-wrap\" style=\"justify-content: flex-end;\">\r\n\r\n        <div class=\"info-item info--max-content\">\r\n          <span class=\"item-image\" style=\"\">\r\n            <svg style=\"width:1.5em;height:100%\" viewBox=\"0 0 24 24\">\r\n              <path fill=\"rgb(102,205,225)\"\r\n                d=\"M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z\" />\r\n            </svg>\r\n          </span>\r\n          <span class=\"item-text\">\r\n            {{article.views}}\r\n          </span>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"btn-floating\" (click)=\"openShareDialog(shareModal)\">\r\n        <span style=\"position: relative;\r\n        top: 20%;\r\n        left: 20%;\"><svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\r\n            <path fill=\"white\"\r\n              d=\"M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12S8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5S19.66 2 18 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12S4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.34C15.11 18.55 15.08 18.77 15.08 19C15.08 20.61 16.39 21.91 18 21.91S20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08M18 4C18.55 4 19 4.45 19 5S18.55 6 18 6 17 5.55 17 5 17.45 4 18 4M6 13C5.45 13 5 12.55 5 12S5.45 11 6 11 7 11.45 7 12 6.55 13 6 13M18 20C17.45 20 17 19.55 17 19S17.45 18 18 18 19 18.45 19 19 18.55 20 18 20Z\" />\r\n          </svg></span>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #shareModal let-modal class=\"my-modal\">\r\n  <div class=\"modal-body\" style=\"padding: 1rem;\">\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n    <div class=\"modal__body scroll-bar\">\r\n      <div class=\"c-modal-body\">\r\n        <div>\r\n          <!-- <h2 mat-dialog-title>Подiлитися новиною</h2> -->\r\n          <div id=\"share--my-city\">\r\n            <div class=\"c-modal-header\">\r\n              <img src=\"assets/background/city-small.png\" alt=\"My city\">\r\n            </div>\r\n\r\n            <div class=\"article-title--wrap\">\r\n              <h3 style=\"color: #0d70b4;\">Моє місто</h3>\r\n              <h4 style=\"\r\n              font-size: 1.1rem;\r\n              font-weight: 400;\r\n              \">{{article.title}}</h4>\r\n            </div>\r\n            <!-- <div *ngIf=\"loading\" style=\"text-align: center;\">\r\n              <app-bubble-loading [loading]=\"loading\"></app-bubble-loading>\r\n            </div> -->\r\n            <div class=\"article-url\">\r\n              <div class=\"qrcodeImage\">\r\n                <div id=\"qrcode\" style=\"display: flex; justify-content: center;\" class=\"\"\r\n                  [ngClass]=\"{'qr-code--border': !loading}\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"modal-footer\" style=\"border-top: none;\">\r\n        <div *ngIf=\"!loading\" style=\"display: flex; justify-content: space-between; width: 100%;\">\r\n          <button id=\"download-btn\" class=\"c-btn-additional btn-reset p-0 mt-3\" (click)=\"download()\"\r\n            style=\"font-weight: 400;\">\r\n            <span *ngIf=\"!downloadBtnLoading\"><svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\r\n                <path fill=\"currentColor\" d=\"M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z\" />\r\n              </svg></span>\r\n            <span style=\"margin-left: 5px;\" *ngIf=\"!downloadBtnLoading\">Завантажити</span>\r\n            <span *ngIf=\"downloadBtnLoading\" class=\"loading loading-image\" style=\"\r\n            height: 2rem;\r\n            width: 2rem;\">\r\n            </span>\r\n          </button>\r\n          <button id=\"copy-btn\" (click)=\"copy()\" class=\"c-btn-additional btn-reset p-0 mt-3\" style=\"font-weight: 400;\">\r\n            <svg *ngIf=\"!linkCopied\" style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\r\n              <path fill=\"currentColor\"\r\n                d=\"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z\" />\r\n            </svg>\r\n            <svg *ngIf=\"linkCopied\" style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\r\n              <path fill=\"currentColor\" d=\"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z\" />\r\n            </svg>\r\n            <span style=\"margin-left: 5px;\" class=\".copy-text\">Копiювати посилання</span>\r\n          </button>\r\n        </div>\r\n        &nbsp;\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/child-mode/add-child-by-code/add-child-by-code.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/child-mode/add-child-by-code/add-child-by-code.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChildModeAddChildByCodeAddChildByCodeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"intro\">\r\n  <div class=\"container\">\r\n    <div class=\"intro__inner--vertical-align intro__inner-restore\">\r\n      <h2 class=\"secondary-title\">Add child profile</h2>\r\n\r\n      <form #f=\"ngForm\" name=\"signUpForm\" class=\"sign-up__form\">\r\n        <div class=\"form-group-wrap form-group-wrap-1\">\r\n          <div class=\"c-form-group c-form-group--width\"\r\n            [ngClass]=\"{'form-group--error': errorViewModel.codeError}\">\r\n            <label class=\"c-form-group__label\" for=\"email\">Child Id</label>\r\n            <input type=\"text\" class=\"c-form-control\" id=\"code\" name=\"code\" required #email=\"ngModel\"\r\n               [(ngModel)]=\"childId\" (input)=\"onChangeValue()\">\r\n            <small *ngIf=\"errorViewModel.codeErrorPopover.popowerIsVisible\" class=\"c-form-text\">\r\n              {{errorViewModel.codeErrorPopover.popowerMessage}}</small>\r\n          </div>\r\n          <div class=\"btn-holder-restore\">\r\n            <button class=\"c-btn c-btn-primary\"\r\n              [ngClass]=\"{'c-btn--disabled-gray': f.invalid || errorViewModel.errorOccurred}\"\r\n              type=\"submit\" (click)=\"onClickAddChildByCode()\">\r\n              <span *ngIf=\"loading\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                  style=\"margin: auto; shape-rendering: auto;\" width=\"1rem\" height=\"1rem\" viewBox=\"0 0 100 100\"\r\n                  preserveAspectRatio=\"xMidYMid\">\r\n                  <g transform=\"rotate(0 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.9s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(36 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.8s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(72 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.7s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(108 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(144 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(180 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.4s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(216 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.3s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(252 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.2s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(288 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.1s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(324 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"0s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                </svg>\r\n              </span>\r\n              <span *ngIf=\"!loading\">Add</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<ng-template #addChildByCodeResult let-modal>\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div style=\"padding: 2rem;\" class=\"modal__body\">\r\n      <div class=\"c-modal-body\">\r\n        <h2 class=\"modal__title secondary-title\">Success!</h2>\r\n        <div class=\"text-holder modal__text-holder\">\r\n          <button (click)=\"modal.close(); childrenRoute()\" class=\"c-btn c-btn-additional btn-reset mt-2 c-btn-add-child modal-btn\" type=\"button\">\r\n            <svg width=\"52\" height=\"52\" viewBox=\"0 0 52 52\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n              <mask id=\"mask0\" mask-type=\"alpha\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"52\" height=\"52\">\r\n                <circle cx=\"26\" cy=\"26\" r=\"25.5\" fill=\"#C4C4C4\" stroke=\"#191B1C\" />\r\n              </mask>\r\n              <g mask=\"url(#mask0)\">\r\n                <circle cx=\"26\" cy=\"26\" r=\"26\" fill=\"#00ACCD\" />\r\n              </g>\r\n              <path\r\n                d=\"M19.3337 24.6665C18.5457 24.6665 17.7655 24.5113 17.0376 24.2098C16.3096 23.9083 15.6482 23.4663 15.091 22.9091C14.5339 22.352 14.0919 21.6906 13.7904 20.9626C13.4889 20.2347 13.3337 19.4544 13.3337 18.6665C13.3337 17.8786 13.4889 17.0984 13.7904 16.3704C14.0919 15.6424 14.5339 14.981 15.091 14.4239C15.6482 13.8667 16.3096 13.4248 17.0376 13.1232C17.7655 12.8217 18.5457 12.6665 19.3337 12.6665C20.925 12.6665 22.4511 13.2986 23.5763 14.4239C24.7015 15.5491 25.3337 17.0752 25.3337 18.6665C25.3337 20.2578 24.7015 21.7839 23.5763 22.9091C22.4511 24.0344 20.925 24.6665 19.3337 24.6665ZM33.3337 29.9998C31.9192 29.9998 30.5626 29.4379 29.5624 28.4377C28.5622 27.4375 28.0003 26.081 28.0003 24.6665C28.0003 23.252 28.5622 21.8955 29.5624 20.8953C30.5626 19.8951 31.9192 19.3332 33.3337 19.3332C34.7481 19.3332 36.1047 19.8951 37.1049 20.8953C38.1051 21.8955 38.667 23.252 38.667 24.6665C38.667 26.081 38.1051 27.4375 37.1049 28.4377C36.1047 29.4379 34.7481 29.9998 33.3337 29.9998ZM33.3337 31.3332C34.925 31.3332 36.4511 31.9653 37.5763 33.0905C38.7015 34.2157 39.3337 35.7419 39.3337 37.3332V37.9998H27.3337V37.3332C27.3337 35.7419 27.9658 34.2157 29.091 33.0905C30.2162 31.9653 31.7424 31.3332 33.3337 31.3332ZM19.3337 25.9998C20.2091 25.9998 21.076 26.1723 21.8849 26.5073C22.6937 26.8423 23.4286 27.3334 24.0477 27.9525C24.6668 28.5715 25.1578 29.3064 25.4929 30.1153C25.8279 30.9241 26.0003 31.791 26.0003 32.6665V37.9998H12.667V32.6665C12.667 30.8984 13.3694 29.2027 14.6196 27.9525C15.8699 26.7022 17.5655 25.9998 19.3337 25.9998Z\"\r\n                fill=\"white\" />\r\n            </svg>\r\n            <span class=\"ml-1\" style=\"color: #191b1c;\">{{childFirstName}} {{childLastName}}</span>\r\n          </button>\r\n          <div style=\"margin-top: 4rem;\">\r\n\r\n            <button class=\"c-btn c-btn-primary\" type=\"button\" (click)=\"modal.close(); childrenRoute()\">\r\n              <span>Ok</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/child-mode/add-child/add-child-profile.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/child-mode/add-child/add-child-profile.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChildModeAddChildAddChildProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"intro\">\r\n  <div class=\"container\">\r\n    <div class=\"intro__inner-indent\">\r\n      <h2 class=\"secondary-title\">Add child profile</h2>\r\n\r\n      <form #f=\"ngForm\" name=\"signUpForm\" class=\"sign-up__form\">\r\n\r\n        <div class=\"form-group-wrap form-group-wrap-1\">\r\n          <div class=\"c-form-group\" [ngClass]=\"{'form-group--error': createChildErrorViewModel.firstNameError}\">\r\n            <label class=\"c-form-group__label\" for=\"firstName\">First Name</label>\r\n            <input type=\"text\" class=\"c-form-control\" id=\"firstName\" name=\"firstName\" required #firstName=\"ngModel\"\r\n              [(ngModel)]=\"child.firstName\" pattern='^[a-zA-Z0-9]+' (input)=\"formChangedBaseHandler()\">\r\n          </div>\r\n\r\n          <div class=\"c-form-group\" [ngClass]=\"{'form-group--error': createChildErrorViewModel.lastNameError}\">\r\n            <label class=\"c-form-group__label\" for=\"lastName\">Last Name</label>\r\n            <input type=\"text\" class=\"c-form-control\" id=\"lastName\" name=\"lastName\" required #lastName=\"ngModel\"\r\n              [(ngModel)]=\"child.lastName\" pattern='^[a-zA-Z0-9]+' (input)=\" formChangedBaseHandler()\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group-wrap form-group-wrap-2\">\r\n          <div class=\"c-form-group\" [ngClass]=\"{'form-group--error': createChildErrorViewModel.sexError}\">\r\n            <label class=\"c-form-group__label\">Sex</label>\r\n            <ng-select appearance=\"outline\" #sex [searchable]=\"false\" name=\"sex\" [(ngModel)]=\"child.gender\"\r\n              placeholder=\"Select sex\" (change)=\" formChangedBaseHandler()\">\r\n              <ng-option [value]=\"0\">Prefer to not share</ng-option>\r\n              <ng-option [value]=\"1\">Male</ng-option>\r\n              <ng-option [value]=\"2\">Female</ng-option>\r\n              <ng-option [value]=\"3\">Non-binary</ng-option>\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"c-form-group\" [ngClass]=\"{'form-group--error': createChildErrorViewModel.dateOfBirthError}\">\r\n            <label class=\"c-form-group__label\">Date of birth</label>\r\n\r\n            <div class=\"datepicker-wrap position-relative\">\r\n              <input class=\"datepicker\" name=\"db\" id=\"dateOfBirth\" name=\"date\" placeholder=\"MM/DD/YYYY\" type=\"text\"\r\n                required autocomplete=\"false\" />\r\n                <small *ngIf=\"createChildErrorViewModel.dateOfBirthErrorPopower.popowerIsVisible\" class=\"c-form-text\">\r\n                  {{createChildErrorViewModel.dateOfBirthErrorPopower.popowerMessage}}</small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group-wrap form-group-wrap-4\">\r\n          <div class=\"c-form-group\"\r\n            [ngClass]=\"{'form-group--error': createChildErrorViewModel.countryError, 'form-group--bottom-indent': !USACountrySelected}\">\r\n            <label class=\"c-form-group__label\">Country</label>\r\n            <ng-select #country [searchable]=\"true\" required [(ngModel)]=\"child.countryId\" name=\"country\"\r\n              placeholder=\"Select country\" (change)='onCountrySelected($event)' id=\"country\"\r\n              (change)=\"formChangedBaseHandler()\" (close)=\"country.blur()\">\r\n              <ng-option *ngFor=\"let country of countries\" value=\"{{country.id}}\">{{country.name}}</ng-option>\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div *ngIf='USACountrySelected' class=\"c-form-group \"\r\n            [ngClass]=\"{'form-group--error': createChildErrorViewModel.stateError, 'form-group--bottom-indent': USACountrySelected}\">\r\n            <label class=\"c-form-group__label\">State</label>\r\n            <ng-select appearance=\"outline\" #stateSelect [searchable]=\"true\" required [(ngModel)]=\"child.stateId\"\r\n              name=\"state\" placeholder=\"Select state\" (change)=\"formChangedBaseHandler($event)\"\r\n              (close)=\"stateSelect.blur()\">\r\n              <ng-option *ngFor=\"let state of states\" value=\"{{state.id}}\">{{state.name}}</ng-option>\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"btn-holder mt-0 mb-0\">\r\n            <button class=\"c-btn c-btn-primary mb-2\" [ngClass]=\"{'c-btn--disabled-gray': f.invalid}\" type=\"submit\"\r\n              (click)=\"saveChanges()\" [disabled]=\"f.invalid || loading\">\r\n              <span *ngIf=\"loading\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                  style=\"margin: auto; shape-rendering: auto;\" width=\"1rem\" height=\"1rem\" viewBox=\"0 0 100 100\"\r\n                  preserveAspectRatio=\"xMidYMid\">\r\n                  <g transform=\"rotate(0 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.9s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(36 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.8s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(72 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.7s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(108 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(144 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(180 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.4s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(216 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.3s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(252 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.2s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(288 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.1s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(324 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"0s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                </svg>\r\n              </span>\r\n              <span *ngIf=\"!loading\">Save changes</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/child-mode/edit-child/edit-child-profile.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/child-mode/edit-child/edit-child-profile.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChildModeEditChildEditChildProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"intro\">\r\n  <div class=\"container\">\r\n    <div class=\"intro__inner-indent\">\r\n      <h2 class=\"secondary-title\">Edit child profile</h2>\r\n\r\n      <form #f=\"ngForm\" name=\"signUpForm\" class=\"sign-up__form\">\r\n\r\n        <div class=\"form-group-wrap form-group-wrap-1\">\r\n          <div class=\"c-form-group\" [ngClass]=\"{'form-group--error': editProfileErrorViewModel.firstNameError}\">\r\n            <label class=\"c-form-group__label\" for=\"firstName\">First Name</label>\r\n            <input type=\"text\" class=\"c-form-control\" id=\"firstName\" name=\"firstName\" required #firstName=\"ngModel\"\r\n              [(ngModel)]=\"editChildModel.firstName\" pattern='^[a-zA-Z]+' (input)=\"formChangedBaseHandler()\">\r\n          </div>\r\n\r\n          <div class=\"c-form-group\" [ngClass]=\"{'form-group--error': editProfileErrorViewModel.lastNameError}\">\r\n            <label class=\"c-form-group__label\" for=\"lastName\">Last Name</label>\r\n            <input type=\"text\" class=\"c-form-control\" id=\"lastName\" name=\"lastName\" required #lastName=\"ngModel\"\r\n              [(ngModel)]=\"editChildModel.lastName\" pattern='^[a-zA-Z]+' (input)=\" formChangedBaseHandler()\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group-wrap form-group-wrap-2\">\r\n          <div class=\"c-form-group\" [ngClass]=\"{'form-group--error': editProfileErrorViewModel.sexError}\">\r\n            <label class=\"c-form-group__label\">Sex</label>\r\n            <ng-select appearance=\"outline\" #sex [searchable]=\"false\" name=\"sex\" [(ngModel)]=\"editChildModel.gender\"\r\n              placeholder=\"Select sex\" (change)=\" formChangedBaseHandler()\">\r\n              <ng-option [value]=\"0\">Prefer to not share</ng-option>\r\n              <ng-option [value]=\"1\">Male</ng-option>\r\n              <ng-option [value]=\"2\">Female</ng-option>\r\n              <ng-option [value]=\"3\">Non-binary</ng-option>\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"c-form-group\" [ngClass]=\"{'form-group--error': editProfileErrorViewModel.dateOfBirthError}\">\r\n            <label class=\"c-form-group__label\">Date of birth</label>\r\n\r\n            <div class=\"datepicker-wrap position-relative\">\r\n              <input class=\"datepicker\" name=\"db\" id=\"dateOfBirth\" name=\"date\" placeholder=\"MM/DD/YYYY\" type=\"text\"\r\n                required autocomplete=\"false\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group-wrap form-group-wrap-4\">\r\n          <div class=\"c-form-group\"\r\n            [ngClass]=\"{'form-group--error': editProfileErrorViewModel.countryError, 'form-group--bottom-indent': !USACountrySelected}\">\r\n            <label class=\"c-form-group__label\">Country</label>\r\n            <ng-select #country [searchable]=\"true\" required [(ngModel)]=\"editChildModel.countryId\" name=\"country\"\r\n              placeholder=\"Select country\" (change)='onCountrySelected($event)' id=\"country\"\r\n              (change)=\"formChangedBaseHandler()\" (close)=\"country.blur()\">\r\n              <ng-option *ngFor=\"let country of countries\" value=\"{{country.id}}\">{{country.name}}</ng-option>\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div *ngIf='USACountrySelected' class=\"c-form-group \"\r\n            [ngClass]=\"{'form-group--error': editProfileErrorViewModel.stateError, 'form-group--bottom-indent': USACountrySelected}\">\r\n            <label class=\"c-form-group__label\">State</label>\r\n            <ng-select appearance=\"outline\" #stateSelect [searchable]=\"true\" required\r\n              [(ngModel)]=\"editChildModel.stateId\" name=\"state\" placeholder=\"Select state\"\r\n              (change)=\"formChangedBaseHandler($event)\" (close)=\"stateSelect.blur()\">\r\n              <ng-option *ngFor=\"let state of states\" value=\"{{state.id}}\">{{state.name}}</ng-option>\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"btn-holder mt-0 mb-0\">\r\n            <button class=\"c-btn c-btn-primary mb-2\" [ngClass]=\"{'c-btn--disabled-gray': f.invalid}\" type=\"submit\"\r\n              (click)=\"saveChanges()\" [disabled]=\"f.invalid || loading\">\r\n              <span *ngIf=\"loading\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                  style=\"margin: auto; shape-rendering: auto;\" width=\"1rem\" height=\"1rem\" viewBox=\"0 0 100 100\"\r\n                  preserveAspectRatio=\"xMidYMid\">\r\n                  <g transform=\"rotate(0 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.9s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(36 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.8s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(72 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.7s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(108 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(144 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(180 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.4s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(216 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.3s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(252 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.2s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(288 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.1s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(324 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"0s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                </svg>\r\n              </span>\r\n              <span *ngIf=\"!loading\">Save changes</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-profile/edit-profile.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-profile/edit-profile.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditProfileEditProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"intro\">\r\n  <div class=\"container\">\r\n    <div class=\"intro__inner-indent\">\r\n      <h2 class=\"secondary-title\">Edit profile</h2>\r\n\r\n      <form #f=\"ngForm\" name=\"signUpForm\" class=\"sign-up__form\">\r\n\r\n        <div class=\"form-group-wrap form-group-wrap-1\">\r\n          <div class=\"c-form-group\" [ngClass]=\"{'form-group--error': editProfileErrorViewModel.emailError}\">\r\n            <label class=\"c-form-group__label\" for=\"email\">Email (cannot edit)</label>\r\n            <input type=\"email\" class=\"c-form-control c-form-control--disabled\" id=\"email\" name=\"email\" required\r\n              #email=\"ngModel\" [(ngModel)]=\"editUserModel.email\" autocomplete=\"on\" pattern=\"{{emailPattern}}\"\r\n              (input)=\"emailChangeValue($event)\" disabled>\r\n            <small *ngIf=\"editProfileErrorViewModel.emailErrorPopover.popowerIsVisible\" class=\"c-form-text\">\r\n              {{editProfileErrorViewModel.emailErrorPopover.popowerMessage}}</small>\r\n          </div>\r\n\r\n          <div class=\"c-form-group\" [ngClass]=\"{'form-group--error': editProfileErrorViewModel.phoneError}\">\r\n            <label class=\"c-form-group__label\" for=\"phone\">Phone</label>\r\n            <input type=\"tel\" class=\"c-form-control\" id=\"phone\" name=\"phone\" required #phone=\"ngModel\"\r\n              [(ngModel)]=\"editUserModel.phone\" (input)=\" formChangedBaseHandler()\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group-wrap form-group-wrap-2\">\r\n          <div class=\"c-form-group\" [ngClass]=\"{'form-group--error': editProfileErrorViewModel.firstNameError}\">\r\n            <label class=\"c-form-group__label\" for=\"firstName\">First Name</label>\r\n            <input type=\"text\" class=\"c-form-control\" id=\"firstName\" name=\"firstName\" required #firstName=\"ngModel\"\r\n              [(ngModel)]=\"editUserModel.firstName\" pattern='^[a-zA-Z]+' (input)=\"formChangedBaseHandler()\">\r\n          </div>\r\n\r\n          <div class=\"c-form-group\" [ngClass]=\"{'form-group--error': editProfileErrorViewModel.lastNameError}\">\r\n            <label class=\"c-form-group__label\" for=\"lastName\">Last Name</label>\r\n            <input type=\"text\" class=\"c-form-control\" id=\"lastName\" name=\"lastName\" required #lastName=\"ngModel\"\r\n              [(ngModel)]=\"editUserModel.lastName\" pattern='^[a-zA-Z]+' (input)=\" formChangedBaseHandler()\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group-wrap form-group-wrap-4\">\r\n          <div class=\"c-form-group\" [ngClass]=\"{'form-group--error': editProfileErrorViewModel.sexError}\">\r\n            <label class=\"c-form-group__label\">Sex</label>\r\n            <ng-select appearance=\"outline\" #sex [searchable]=\"false\" name=\"sex\" [(ngModel)]=\"editUserModel.gender\"\r\n              placeholder=\"Select sex\" (change)=\" formChangedBaseHandler()\">\r\n              <ng-option [value]=\"0\">Prefer to not share</ng-option>\r\n              <ng-option [value]=\"1\">Male</ng-option>\r\n              <ng-option [value]=\"2\">Female</ng-option>\r\n              <ng-option [value]=\"3\">Non-binary</ng-option>\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"c-form-group\" [ngClass]=\"{'form-group--error': editProfileErrorViewModel.dateOfBirthError}\">\r\n            <label class=\"c-form-group__label\">Date of birth</label>\r\n\r\n            <div class=\"datepicker-wrap position-relative\">\r\n              <!-- <input class=\"datepicker\" id=\"dateOfBirth\" [displayMonths]=\"1\" placeholder=\"Select date\" name=\"db\" (click)=\"d.toggle()\"\r\n                ngbDatepicker #d=\"ngbDatepicker\" required [(ngModel)]=\"editUserModel.dateOfBirthForView\"\r\n                (dateSelect)=\"formChangedBaseHandler()\" (change)=\" formChangedBaseHandler()\"> -->\r\n\r\n                <input class=\"datepicker\" name=\"db\" id=\"dateOfBirth-new\" name=\"date\" placeholder=\"MM/DD/YYYY\" type=\"text\" required autocomplete=\"false\"/>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"c-form-group\"\r\n            [ngClass]=\"{'form-group--error': editProfileErrorViewModel.countryError, 'form-group--bottom-indent': !USACountrySelected}\">\r\n            <label class=\"c-form-group__label\">Country</label>\r\n            <ng-select #country [searchable]=\"true\" required [(ngModel)]=\"editUserModel.countryId\" name=\"country\"\r\n              placeholder=\"Select country\" (change)='onCountrySelected($event)' id=\"country\"\r\n              (change)=\"formChangedBaseHandler()\"  (close)=\"country.blur()\">\r\n              <ng-option *ngFor=\"let country of countries\" value=\"{{country.id}}\">{{country.name}}</ng-option>\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div *ngIf='USACountrySelected' class=\"c-form-group \"\r\n            [ngClass]=\"{'form-group--error': editProfileErrorViewModel.stateError, 'form-group--bottom-indent': USACountrySelected}\">\r\n            <label class=\"c-form-group__label\">State</label>\r\n            <ng-select appearance=\"outline\" #stateSelect [searchable]=\"true\" required\r\n              [(ngModel)]=\"editUserModel.stateId\" name=\"state\" placeholder=\"Select state\"\r\n              (change)=\"formChangedBaseHandler($event)\" (close)=\"stateSelect.blur()\">\r\n              <ng-option *ngFor=\"let state of states\" value=\"{{state.id}}\">{{state.name}}</ng-option>\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"btn-holder mt-0 mb-0\">\r\n            <button class=\"c-btn c-btn-primary mb-2\" [ngClass]=\"{'c-btn--disabled-gray': f.invalid}\" type=\"submit\"\r\n              (click)=\"saveChanges()\" [disabled]=\"f.invalid || loading\">\r\n              <span *ngIf=\"loading\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                  style=\"margin: auto; shape-rendering: auto;\" width=\"1rem\" height=\"1rem\" viewBox=\"0 0 100 100\"\r\n                  preserveAspectRatio=\"xMidYMid\">\r\n                  <g transform=\"rotate(0 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.9s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(36 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.8s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(72 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.7s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(108 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(144 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(180 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.4s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(216 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.3s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(252 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.2s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(288 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.1s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(324 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"0s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                </svg>\r\n              </span>\r\n              <span *ngIf=\"!loading\">Save changes</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer-primary/footer-primary.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer-primary/footer-primary.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterPrimaryFooterPrimaryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer footer--theme-white\">\r\n    <div class=\"container\">\r\n        <div class=\"footer__inner border--top\">\r\n            <svg class=\"svg-icon-footer order-negative-presmall\" width=\"210\" height=\"35\" viewBox=\"0 0 210 35\"\r\n                fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <path class=\"svg-icon__img\"\r\n                    d=\"M18.8 6.8c3.1-7.8 11.5-8.4 15.8-4C39 7 39.1 14 35.1 18.5L18.8 35 3.7 20.1l-1.5-1.6h3.1c.5 0 1-.3 1.2-.8l2.2-5.5L12.2 25a1.3 1.3 0 002.4.2l4.1-9.2 2.4 5.1c.4.8 1.4 1 2 .4l2.9-2.9h2.5a1 1 0 000-2h-2.8c-.3 0-.6.2-.9.4l-2.3 2.4-2.6-5.5c-.5-1-1.9-1-2.3 0l-4 8.7L10 9.7c-.3-1.1-2-1.2-2.4-.1l-2.9 7H1.1v-.1C-.8 12-.5 6 3 2.7c4.3-4.3 12.7-3.8 15.8 4z\" />\r\n                <path class=\"svg-icon__text\"\r\n                    d=\"M58.7 8.8h4.7v16.8h-4.7v-6.4h-5v6.4H49V8.8h4.7V15h5v-6zM79.6 19l-.1 1.2h-9.7c.2.8.5 1.3 1 1.7.4.4 1 .6 1.7.6.5 0 1-.1 1.4-.3l1-1h4.4a6.5 6.5 0 01-2.5 3.6 7.2 7.2 0 01-4.3 1.3c-1.3 0-2.5-.3-3.6-1-1-.5-2-1.4-2.5-2.4a7 7 0 01-1-3.6c0-2 .7-3.6 2-4.9a7 7 0 015.1-2c1 0 2 .2 2.9.6a6.5 6.5 0 014.2 6.2zm-7.1-3.3c-.7 0-1.2.2-1.6.6-.5.3-.8.8-1 1.4h5.3c-.4-1.3-1.3-2-2.7-2zM92 12.7h3.4v13h-3.5l-.3-1a6 6 0 01-4 1.4 7 7 0 01-3.5-1c-1-.5-1.8-1.3-2.4-2.4-.6-1-.9-2.2-.9-3.6 0-2 .7-3.6 2-4.9 1.2-1.3 2.9-2 4.8-2a6 6 0 014 1.5l.5-1zm-5.8 8.6c.5.5 1.2.8 2 .8.9 0 1.6-.3 2.1-.8.6-.6.8-1.3.8-2.1a2.9 2.9 0 00-2.9-3c-.8 0-1.5.3-2 .8-.6.6-.9 1.3-.9 2.2 0 .8.3 1.5.9 2zM98.2 25.6V8h4.5v17.6h-4.5zM112.5 21.7h1.7v4h-3c-1.5 0-2.6-.5-3.4-1.3-.9-.8-1.3-2-1.3-3.4v-4.9h-2.3v-1l5.8-6.2h.9v3.8h3.2V16H111v4.1c0 .5.1.9.4 1.1.3.3.6.4 1 .4zM124.2 12.3c1.5 0 2.7.5 3.6 1.5.9 1 1.3 2.4 1.3 4v7.8h-4.5v-7.3c0-1.5-.5-2.2-1.6-2.2a2 2 0 00-1.6.7c-.4.4-.6 1-.6 2v6.8h-4.5V8h4.5v5.5c1-.8 2.1-1.2 3.4-1.2zM140 26c-1.8 0-3.3-.3-4.6-1a8.4 8.4 0 01-3.2-3.3 8.9 8.9 0 01-1.2-4.5c0-1.6.4-3.1 1.2-4.5a8.3 8.3 0 013.2-3.1 9.2 9.2 0 014.5-1.2 8.4 8.4 0 018.5 7.2h-4.7c-.3-.9-.7-1.6-1.4-2-.7-.6-1.5-.9-2.4-.9-1.2 0-2.1.5-3 1.3-.7.9-1 2-1 3.2 0 1.3.3 2.4 1 3.3.9.8 1.8 1.2 3 1.2 1 0 1.8-.3 2.5-.8.6-.6 1.1-1.3 1.3-2.3h4.8c-.4 2.3-1.3 4-2.9 5.4a8.4 8.4 0 01-5.7 2zM158.4 12.3c1.5 0 2.7.5 3.5 1.5 1 1 1.4 2.4 1.4 4v7.8h-4.5v-7.3c0-1.5-.5-2.2-1.7-2.2a2 2 0 00-1.6.7c-.4.4-.6 1-.6 2v6.8h-4.4V8h4.4v5.5c1-.8 2.2-1.2 3.5-1.2zM179.3 19v1.2h-9.7c.1.8.4 1.3.9 1.7.4.4 1 .6 1.7.6.5 0 1-.1 1.4-.3l1-1h4.4a6.5 6.5 0 01-2.5 3.6 7.2 7.2 0 01-4.3 1.3c-1.3 0-2.5-.3-3.6-1-1-.5-1.9-1.4-2.5-2.4a7 7 0 01-1-3.6c0-2 .7-3.6 2-4.9a7 7 0 015.1-2c1 0 2 .2 2.9.6a6.5 6.5 0 014.2 6.2zm-7-3.3c-.7 0-1.3.2-1.7.6-.5.3-.8.8-1 1.4h5.3c-.4-1.3-1.3-2-2.7-2zM187.7 26c-1 0-2-.1-2.8-.5-1-.3-1.7-.8-2.3-1.4a7.1 7.1 0 01-2-5c0-2 .6-3.6 2-4.9 1.3-1.3 3-2 5.1-2 1.9 0 3.4.6 4.6 1.7 1.3 1 2 2.4 2.3 4.1h-4.3c-.2-.5-.6-1-1-1.2-.5-.4-1-.5-1.6-.5-.8 0-1.4.2-2 .8a3 3 0 00-.7 2c0 .9.3 1.6.8 2.1.5.6 1.1.9 2 .9.5 0 1-.2 1.5-.5.5-.4.8-.8 1-1.4h4.4c-.3 1.7-1 3.2-2.3 4.2a7 7 0 01-4.7 1.7zM209.7 25.6h-5.2l-3.3-5.4v5.4h-4.4V8h4.4v9.8l3.1-5.1h5l-4 6.2 4.4 6.7z\" />\r\n            </svg>\r\n\r\n            <ul class=\"footer__list order-negative-medium flex-grow-1-medium\">\r\n                <!-- <li class=\"footer__item\">\r\n                    <button class=\"btn-privacy btn-reset font-weight-semi btn-privacy-js\" type=\"button\">Terms and\r\n                        Conditions</button>\r\n                </li> -->\r\n                <li class=\"footer__item\">\r\n                    <app-footer-privacy-policy></app-footer-privacy-policy>\r\n                </li>\r\n            </ul>\r\n\r\n            <div class=\"footer__copyright-holder order-negative-xlarge\">\r\n                <span class=\"footer__copyright\">\r\n                    Copyright 2020 Stratum Health Solutions, LLC. All rights reserved.\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer-white/footer-white.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer-white/footer-white.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterWhiteFooterWhiteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer\">\r\n\r\n  <div class=\"container\">\r\n    <div class=\"footer__inner border--top\">\r\n      <svg class=\"svg-icon-footer order-negative-presmall\" width=\"210\" height=\"35\" viewBox=\"0 0 210 35\" fill=\"none\"\r\n        xmlns=\"http://www.w3.org/2000/svg\">\r\n        <path class=\"svg-icon__img\"\r\n          d=\"M18.8 6.8c3.1-7.8 11.5-8.4 15.8-4C39 7 39.1 14 35.1 18.5L18.8 35 3.7 20.1l-1.5-1.6h3.1c.5 0 1-.3 1.2-.8l2.2-5.5L12.2 25a1.3 1.3 0 002.4.2l4.1-9.2 2.4 5.1c.4.8 1.4 1 2 .4l2.9-2.9h2.5a1 1 0 000-2h-2.8c-.3 0-.6.2-.9.4l-2.3 2.4-2.6-5.5c-.5-1-1.9-1-2.3 0l-4 8.7L10 9.7c-.3-1.1-2-1.2-2.4-.1l-2.9 7H1.1v-.1C-.8 12-.5 6 3 2.7c4.3-4.3 12.7-3.8 15.8 4z\" />\r\n        <path class=\"svg-icon__text\"\r\n          d=\"M58.7 8.8h4.7v16.8h-4.7v-6.4h-5v6.4H49V8.8h4.7V15h5v-6zM79.6 19l-.1 1.2h-9.7c.2.8.5 1.3 1 1.7.4.4 1 .6 1.7.6.5 0 1-.1 1.4-.3l1-1h4.4a6.5 6.5 0 01-2.5 3.6 7.2 7.2 0 01-4.3 1.3c-1.3 0-2.5-.3-3.6-1-1-.5-2-1.4-2.5-2.4a7 7 0 01-1-3.6c0-2 .7-3.6 2-4.9a7 7 0 015.1-2c1 0 2 .2 2.9.6a6.5 6.5 0 014.2 6.2zm-7.1-3.3c-.7 0-1.2.2-1.6.6-.5.3-.8.8-1 1.4h5.3c-.4-1.3-1.3-2-2.7-2zM92 12.7h3.4v13h-3.5l-.3-1a6 6 0 01-4 1.4 7 7 0 01-3.5-1c-1-.5-1.8-1.3-2.4-2.4-.6-1-.9-2.2-.9-3.6 0-2 .7-3.6 2-4.9 1.2-1.3 2.9-2 4.8-2a6 6 0 014 1.5l.5-1zm-5.8 8.6c.5.5 1.2.8 2 .8.9 0 1.6-.3 2.1-.8.6-.6.8-1.3.8-2.1a2.9 2.9 0 00-2.9-3c-.8 0-1.5.3-2 .8-.6.6-.9 1.3-.9 2.2 0 .8.3 1.5.9 2zM98.2 25.6V8h4.5v17.6h-4.5zM112.5 21.7h1.7v4h-3c-1.5 0-2.6-.5-3.4-1.3-.9-.8-1.3-2-1.3-3.4v-4.9h-2.3v-1l5.8-6.2h.9v3.8h3.2V16H111v4.1c0 .5.1.9.4 1.1.3.3.6.4 1 .4zM124.2 12.3c1.5 0 2.7.5 3.6 1.5.9 1 1.3 2.4 1.3 4v7.8h-4.5v-7.3c0-1.5-.5-2.2-1.6-2.2a2 2 0 00-1.6.7c-.4.4-.6 1-.6 2v6.8h-4.5V8h4.5v5.5c1-.8 2.1-1.2 3.4-1.2zM140 26c-1.8 0-3.3-.3-4.6-1a8.4 8.4 0 01-3.2-3.3 8.9 8.9 0 01-1.2-4.5c0-1.6.4-3.1 1.2-4.5a8.3 8.3 0 013.2-3.1 9.2 9.2 0 014.5-1.2 8.4 8.4 0 018.5 7.2h-4.7c-.3-.9-.7-1.6-1.4-2-.7-.6-1.5-.9-2.4-.9-1.2 0-2.1.5-3 1.3-.7.9-1 2-1 3.2 0 1.3.3 2.4 1 3.3.9.8 1.8 1.2 3 1.2 1 0 1.8-.3 2.5-.8.6-.6 1.1-1.3 1.3-2.3h4.8c-.4 2.3-1.3 4-2.9 5.4a8.4 8.4 0 01-5.7 2zM158.4 12.3c1.5 0 2.7.5 3.5 1.5 1 1 1.4 2.4 1.4 4v7.8h-4.5v-7.3c0-1.5-.5-2.2-1.7-2.2a2 2 0 00-1.6.7c-.4.4-.6 1-.6 2v6.8h-4.4V8h4.4v5.5c1-.8 2.2-1.2 3.5-1.2zM179.3 19v1.2h-9.7c.1.8.4 1.3.9 1.7.4.4 1 .6 1.7.6.5 0 1-.1 1.4-.3l1-1h4.4a6.5 6.5 0 01-2.5 3.6 7.2 7.2 0 01-4.3 1.3c-1.3 0-2.5-.3-3.6-1-1-.5-1.9-1.4-2.5-2.4a7 7 0 01-1-3.6c0-2 .7-3.6 2-4.9a7 7 0 015.1-2c1 0 2 .2 2.9.6a6.5 6.5 0 014.2 6.2zm-7-3.3c-.7 0-1.3.2-1.7.6-.5.3-.8.8-1 1.4h5.3c-.4-1.3-1.3-2-2.7-2zM187.7 26c-1 0-2-.1-2.8-.5-1-.3-1.7-.8-2.3-1.4a7.1 7.1 0 01-2-5c0-2 .6-3.6 2-4.9 1.3-1.3 3-2 5.1-2 1.9 0 3.4.6 4.6 1.7 1.3 1 2 2.4 2.3 4.1h-4.3c-.2-.5-.6-1-1-1.2-.5-.4-1-.5-1.6-.5-.8 0-1.4.2-2 .8a3 3 0 00-.7 2c0 .9.3 1.6.8 2.1.5.6 1.1.9 2 .9.5 0 1-.2 1.5-.5.5-.4.8-.8 1-1.4h4.4c-.3 1.7-1 3.2-2.3 4.2a7 7 0 01-4.7 1.7zM209.7 25.6h-5.2l-3.3-5.4v5.4h-4.4V8h4.4v9.8l3.1-5.1h5l-4 6.2 4.4 6.7z\" />\r\n      </svg>\r\n\r\n      <ul class=\"footer__list order-negative-medium flex-grow-1-medium\">\r\n        <!-- <li class=\"footer__item\">\r\n            <button class=\"btn-privacy btn-reset font-weight-semi btn-privacy-js\" type=\"button\">Terms and\r\n              Conditions</button>\r\n          </li> -->\r\n        <li class=\"footer__item\">\r\n            <app-footer-privacy-policy></app-footer-privacy-policy>\r\n        </li>\r\n      </ul>\r\n\r\n      <!-- <div class=\"dropdown dropdown-language order-negative-presmall order-normal-xlarge\">\r\n          <button class=\"btn-language font-weight-semi btn-language-js\" type=\"button\">\r\n            EN\r\n            <svg class=\"btn-language__icon\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"\r\n                 xmlns=\"http://www.w3.org/2000/svg\">\r\n              <path d=\"M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM7.71 17.667C6.72341 15.5743 6.15187 13.3102 6.027 11H2.062C2.25659 12.5389 2.89392 13.9882 3.89657 15.1717C4.89922 16.3552 6.22401 17.2221 7.71 17.667ZM8.03 11C8.181 13.439 8.878 15.73 10 17.752C11.1523 15.6766 11.8254 13.3695 11.97 11H8.03ZM17.938 11H13.973C13.8481 13.3102 13.2766 15.5743 12.29 17.667C13.776 17.2221 15.1008 16.3552 16.1034 15.1717C17.1061 13.9882 17.7434 12.5389 17.938 11ZM2.062 9H6.027C6.15187 6.68979 6.72341 4.42569 7.71 2.333C6.22401 2.77788 4.89922 3.64475 3.89657 4.8283C2.89392 6.01184 2.25659 7.4611 2.062 9ZM8.031 9H11.969C11.8248 6.6306 11.152 4.32353 10 2.248C8.84768 4.32345 8.17456 6.63052 8.03 9H8.031ZM12.29 2.333C13.2766 4.42569 13.8481 6.68979 13.973 9H17.938C17.7434 7.4611 17.1061 6.01184 16.1034 4.8283C15.1008 3.64475 13.776 2.77788 12.29 2.333Z\"/>\r\n            </svg>\r\n          </button>\r\n          <ul class=\"dropdown__menu dropdown-language__menu dropdown-language__menu-js\">\r\n            <li class=\"dropdown__item\">\r\n              <button class=\"dropdown__btn dropdown-language__btn\" type=\"button\">\r\n                <span class=\"custom-after\"></span>\r\n                Español\r\n              </button>\r\n            </li>\r\n            <li class=\"dropdown__item\">\r\n              <button class=\"dropdown__btn dropdown-language__btn\" type=\"button\">\r\n                <span class=\"custom-after\"></span>\r\n                Russian\r\n              </button>\r\n            </li>\r\n            <li class=\"dropdown__item\">\r\n              <button class=\"dropdown__btn dropdown-language__btn dropdown-language__btn--active\" type=\"button\">\r\n                <span class=\"custom-after\"></span>\r\n                English\r\n              </button>\r\n            </li>\r\n          </ul>\r\n        </div> -->\r\n      <div class=\"footer__copyright-holder order-negative-xlarge\">\r\n        <span class=\"footer__copyright\">Copyright 2020 Stratum Health Solutions, LLC.\r\n          All rights reserved.</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/privacy/privacy.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/privacy/privacy.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterPrivacyPrivacyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button class=\"btn-privacy btn-reset font-weight-semi btn-privacy-js\" type=\"button\" (click)=\"openVerticallyCentered(content)\">\r\n  Privacy Policy\r\n</button>\r\n\r\n<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"modal__body scroll-bar\">\r\n      <div class=\"c-modal-body\">\r\n        <h2 class=\"modal__title secondary-title\">Privacy Policy</h2>\r\n        <div class=\"text-holder modal__text-holder\">\r\n          <span class=\"modal__text\">Learn more about how HealthCheck collects and uses data and\r\n            your\r\n            rights\r\n            as a HealthCheck user.</span>\r\n          <span class=\"modal__subtext text-secondary\">Updated October 4, 2019</span>\r\n        </div>\r\n        <h5 class=\"modal__subtitle font-weight-semi\">Overview</h5>\r\n        <p class=\"sub-text\">Stratum Health Solutions, LLC (“HealthCheck”, “we”, “us” or “our”) is\r\n          committed to protecting the privacy of personal information (i.e. any information relating to an identified or identifiable\r\n          natural person) who visit the https://www.stratumhealth.io website and HealthCheck mobile software\r\n          application (collectively, the “Site”) and use the services available thereon (the “Services”). Amendments to this\r\n          Privacy Policy will be posted to the Site and/or Services and will be effective when posted. Your continued use\r\n          of the Site and/or Services following the posting of any amendment to this Privacy Policy shall constitute\r\n          your acceptance of such amendment.</p>\r\n        <p class=\"sub-text\">Stratum Health Solutions, LLC (“HealthCheck”, “we”, “us” or “our”) is\r\n          committed to protecting the privacy\r\n          of personal information (i.e. any information relating to an identified or identifiable\r\n          natural person) who visit the https://www.stratumhealth.io website and HealthCheck mobile software\r\n          application (collectively, the “Site”) and use the services available thereon (the “Services”). Amendments to this\r\n          Privacy Policy will be posted to the Site and/or Services and will be effective when posted. Your continued use\r\n          of the Site and/or Services following the posting of any amendment to this Privacy Policy shall constitute\r\n          your acceptance of such amendment.</p>\r\n        <p class=\"sub-text\">Stratum Health Solutions, LLC (“HealthCheck”, “we”, “us” or “our”) is\r\n          committed to protecting the privacy\r\n          of personal information (i.e. any information relating to an identified or identifiable\r\n          natural person) who visit the https://www.stratumhealth.io website and HealthCheck mobile software\r\n          application (collectively, the “Site”) and use the services available thereon (the “Services”). Amendments to this\r\n          Privacy Policy will be posted to the Site and/or Services and will be effective when posted. Your continued use\r\n          of the Site and/or Services following the posting of any amendment to this Privacy Policy shall constitute\r\n          your acceptance of such amendment.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    &nbsp;\r\n  </div>\r\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header-base/header-base.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header-base/header-base.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderBaseHeaderBaseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header class=\"header\">\r\n  <div class=\"container\">\r\n    <div class=\"header__inner\">\r\n      <a class=\"logo\" routerLink=\"/\">\r\n        Херсон\r\n      </a>\r\n      <div class=\"main-nav\">\r\n        <a class=\"\" routerLink=\"/\">\r\n          Новини\r\n        </a>\r\n        <a class=\"\" routerLink=\"/\">\r\n          Про проект\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header-standart/header-standart.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header-standart/header-standart.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderStandartHeaderStandartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header class=\"header\">\r\n  <div class=\"container\">\r\n    <div class=\"header__inner\">\r\n\r\n      <a class=\"logo\" routerLink=\"/\">\r\n        <img src=\"../../assets/images/svg-icons/logo_healthcheck.svg\"\r\n          alt=\"blue heart near the black text - HealthCheck\">\r\n      </a>\r\n      <kt-dropdown></kt-dropdown>\r\n    </div>\r\n  </div>\r\n</header>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/health-check-result/health-check-result.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/health-check-result/health-check-result.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHealthCheckResultHealthCheckResultComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"my-check\" class=\"intro my-check-js\">\r\n    <div class=\"container\">\r\n        <div *ngIf=\"check\"  class=\"intro__inner-indent--small\">\r\n            <h2 *ngIf=\"check.result == 0\" class=\"secondary-title mb-1\">Done! You are free to visit public places</h2>\r\n            <h2 *ngIf=\"check.result == 1\" class=\"secondary-title mb-1\">Done!</h2>\r\n            <h2 *ngIf=\"check.result == 2\" class=\"secondary-title mb-1\">Done!</h2>\r\n\r\n            <div class=\"text-holder holder--bottom-indent\">\r\n                <span>You can show this card at your facility.</span>\r\n            </div>\r\n\r\n            <div class=\"\" style=\"min-height: fit-content;\">\r\n                <div class=\"card card-result card-test-js \"\r\n                    [ngClass]=\"{'card-result--success': check.result == 0, 'card-result--warning': check.result == 1, 'card-result--danger': check.result == 2}\">\r\n                    <div class=\"\">\r\n\r\n                        <div class=\"card-result__heading d-flex align-items-center justify-content-between\">\r\n                            <svg class=\"card-result__logo\" width=\"210\" height=\"35\" viewBox=\"0 0 210 35\" fill=\"none\"\r\n                                xmlns=\"http://www.w3.org/2000/svg\">\r\n                                <path class=\"svg-icon__img\" style=\"fill:#00ACCD\"\r\n                                    d=\"M18.8 6.8c3.1-7.8 11.5-8.4 15.8-4C39 7 39.1 14 35.1 18.5L18.8 35 3.7 20.1l-1.5-1.6h3.1c.5 0 1-.3 1.2-.8l2.2-5.5L12.2 25a1.3 1.3 0 002.4.2l4.1-9.2 2.4 5.1c.4.8 1.4 1 2 .4l2.9-2.9h2.5a1 1 0 000-2h-2.8c-.3 0-.6.2-.9.4l-2.3 2.4-2.6-5.5c-.5-1-1.9-1-2.3 0l-4 8.7L10 9.7c-.3-1.1-2-1.2-2.4-.1l-2.9 7H1.1v-.1C-.8 12-.5 6 3 2.7c4.3-4.3 12.7-3.8 15.8 4z\" />\r\n                                <path class=\"svg-icon__text\" style=\"fill:#191B1C\"\r\n                                    d=\"M58.7 8.8h4.7v16.8h-4.7v-6.4h-5v6.4H49V8.8h4.7V15h5v-6zM79.6 19l-.1 1.2h-9.7c.2.8.5 1.3 1 1.7.4.4 1 .6 1.7.6.5 0 1-.1 1.4-.3l1-1h4.4a6.5 6.5 0 01-2.5 3.6 7.2 7.2 0 01-4.3 1.3c-1.3 0-2.5-.3-3.6-1-1-.5-2-1.4-2.5-2.4a7 7 0 01-1-3.6c0-2 .7-3.6 2-4.9a7 7 0 015.1-2c1 0 2 .2 2.9.6a6.5 6.5 0 014.2 6.2zm-7.1-3.3c-.7 0-1.2.2-1.6.6-.5.3-.8.8-1 1.4h5.3c-.4-1.3-1.3-2-2.7-2zM92 12.7h3.4v13h-3.5l-.3-1a6 6 0 01-4 1.4 7 7 0 01-3.5-1c-1-.5-1.8-1.3-2.4-2.4-.6-1-.9-2.2-.9-3.6 0-2 .7-3.6 2-4.9 1.2-1.3 2.9-2 4.8-2a6 6 0 014 1.5l.5-1zm-5.8 8.6c.5.5 1.2.8 2 .8.9 0 1.6-.3 2.1-.8.6-.6.8-1.3.8-2.1a2.9 2.9 0 00-2.9-3c-.8 0-1.5.3-2 .8-.6.6-.9 1.3-.9 2.2 0 .8.3 1.5.9 2zM98.2 25.6V8h4.5v17.6h-4.5zM112.5 21.7h1.7v4h-3c-1.5 0-2.6-.5-3.4-1.3-.9-.8-1.3-2-1.3-3.4v-4.9h-2.3v-1l5.8-6.2h.9v3.8h3.2V16H111v4.1c0 .5.1.9.4 1.1.3.3.6.4 1 .4zM124.2 12.3c1.5 0 2.7.5 3.6 1.5.9 1 1.3 2.4 1.3 4v7.8h-4.5v-7.3c0-1.5-.5-2.2-1.6-2.2a2 2 0 00-1.6.7c-.4.4-.6 1-.6 2v6.8h-4.5V8h4.5v5.5c1-.8 2.1-1.2 3.4-1.2zM140 26c-1.8 0-3.3-.3-4.6-1a8.4 8.4 0 01-3.2-3.3 8.9 8.9 0 01-1.2-4.5c0-1.6.4-3.1 1.2-4.5a8.3 8.3 0 013.2-3.1 9.2 9.2 0 014.5-1.2 8.4 8.4 0 018.5 7.2h-4.7c-.3-.9-.7-1.6-1.4-2-.7-.6-1.5-.9-2.4-.9-1.2 0-2.1.5-3 1.3-.7.9-1 2-1 3.2 0 1.3.3 2.4 1 3.3.9.8 1.8 1.2 3 1.2 1 0 1.8-.3 2.5-.8.6-.6 1.1-1.3 1.3-2.3h4.8c-.4 2.3-1.3 4-2.9 5.4a8.4 8.4 0 01-5.7 2zM158.4 12.3c1.5 0 2.7.5 3.5 1.5 1 1 1.4 2.4 1.4 4v7.8h-4.5v-7.3c0-1.5-.5-2.2-1.7-2.2a2 2 0 00-1.6.7c-.4.4-.6 1-.6 2v6.8h-4.4V8h4.4v5.5c1-.8 2.2-1.2 3.5-1.2zM179.3 19v1.2h-9.7c.1.8.4 1.3.9 1.7.4.4 1 .6 1.7.6.5 0 1-.1 1.4-.3l1-1h4.4a6.5 6.5 0 01-2.5 3.6 7.2 7.2 0 01-4.3 1.3c-1.3 0-2.5-.3-3.6-1-1-.5-1.9-1.4-2.5-2.4a7 7 0 01-1-3.6c0-2 .7-3.6 2-4.9a7 7 0 015.1-2c1 0 2 .2 2.9.6a6.5 6.5 0 014.2 6.2zm-7-3.3c-.7 0-1.3.2-1.7.6-.5.3-.8.8-1 1.4h5.3c-.4-1.3-1.3-2-2.7-2zM187.7 26c-1 0-2-.1-2.8-.5-1-.3-1.7-.8-2.3-1.4a7.1 7.1 0 01-2-5c0-2 .6-3.6 2-4.9 1.3-1.3 3-2 5.1-2 1.9 0 3.4.6 4.6 1.7 1.3 1 2 2.4 2.3 4.1h-4.3c-.2-.5-.6-1-1-1.2-.5-.4-1-.5-1.6-.5-.8 0-1.4.2-2 .8a3 3 0 00-.7 2c0 .9.3 1.6.8 2.1.5.6 1.1.9 2 .9.5 0 1-.2 1.5-.5.5-.4.8-.8 1-1.4h4.4c-.3 1.7-1 3.2-2.3 4.2a7 7 0 01-4.7 1.7zM209.7 25.6h-5.2l-3.3-5.4v5.4h-4.4V8h4.4v9.8l3.1-5.1h5l-4 6.2 4.4 6.7z\" />\r\n                            </svg>\r\n\r\n                            <div class=\"card-result__link-holder\">\r\n                                <a class=\"card-result__link text-primary\" (click)=\"downloadQRCode()\">\r\n                                    <i class=\"icon icon-download\"></i>\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-result__inner\">\r\n                            <div class=\"card-result__body\">\r\n                                <div class=\"card-result__text-holder mb-1 mb-medium-2 text-secondary\">\r\n                                    <time class=\"card-result__time\"\r\n                                        datetime=\"2020-06-01 15:15\">{{check.dateTime}}</time>\r\n                                    <span>{{check.facilityName}}</span>\r\n                                </div>\r\n                                <h2 class=\"secondary-title card-result__title\">{{check.userFirstName}} {{check.userLastName}}</h2>\r\n                                <div class=\"text-holder mb-presmall-5 mb-medium-0\">\r\n                                    <span *ngIf=\"check.result === 0\">HealthCheck passed</span>\r\n                                    <span *ngIf=\"check.result === 1\">HealthCheck warning</span>\r\n                                    <span *ngIf=\"check.result === 2\">HealthCheck alert</span>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"check.qrCode\">\r\n                                <div class=\"qrcodeImage-js\">\r\n                                    <qrcode [elementType]=\"check.qrCode.elementType\" [level]=\"check.qrCode.level\"\r\n                                        [qrdata]=\"check.qrCode.qrdata\" [scale]=\"check.qrCode.scale\"\r\n                                        [width]=\"check.qrCode.width\"></qrcode>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/health-test/health-test.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/health-test/health-test.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHealthTestHealthTestComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"intro\">\r\n  <div class=\"container\">\r\n    <div class=\"intro__inner intro__inner-indent--small\">\r\n      <h2 class=\"secondary-title mb-1\">HealthCheck</h2>\r\n\r\n      <div class=\"text-holder holder--bottom-indent\">\r\n        <span>Please answer questions truthfully and to the best of your ability</span>\r\n      </div>\r\n\r\n      <div *ngIf=\"healthTestViewModel.viewState === 'CHOOSE_IDENTITY'\" class=\"card card-test\">\r\n        <h2 class=\"secondary-title \">Select profile</h2>\r\n\r\n        <div class=\"c-form-group c-form-group--width\">\r\n          <button (click)=\"chooseIdentity(user)\" class=\"c-btn c-btn-additional btn-reset mt-2 c-btn-add-child modal-btn c-btn-bordder-light\" type=\"button\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n              style=\"isolation:isolate\" viewBox=\"0 0 200 200\" width=\"52px\" height=\"52px\">\r\n              <defs>\r\n                <clipPath id=\"_clipPath_WZ1Pq7LfHkCUU5WXYxeuJKu5E9hPQlWM\">\r\n                  <rect width=\"200\" height=\"200\" />\r\n                </clipPath>\r\n              </defs>\r\n              <g clip-path=\"url(#_clipPath_WZ1Pq7LfHkCUU5WXYxeuJKu5E9hPQlWM)\">\r\n                <circle vector-effect=\"non-scaling-stroke\" cx=\"100\" cy=\"100\" r=\"100\" fill=\"rgb(0,172,205)\" />\r\n                <g>\r\n                  <path d=\" M 9.25 9.25 L 190.75 9.25 L 190.75 190.75 L 9.25 190.75 L 9.25 9.25 Z \" fill=\"none\" />\r\n                  <path\r\n                    d=\" M 100 100 C 116.713 100 130.25 86.463 130.25 69.75 C 130.25 53.037 116.713 39.5 100 39.5 C 83.287 39.5 69.75 53.037 69.75 69.75 C 69.75 86.463 83.287 100 100 100 Z  M 100 115.125 C 79.808 115.125 39.5 125.259 39.5 145.375 L 39.5 160.5 L 160.5 160.5 L 160.5 145.375 C 160.5 125.259 120.192 115.125 100 115.125 Z \"\r\n                    fill=\"rgb(255,255,255)\" />\r\n                </g>\r\n              </g>\r\n            </svg>\r\n            <span class=\"ml-1\" style=\"color: #191b1c;\">{{user.firstName}} {{user.lastName}}</span>\r\n          </button>\r\n\r\n          <button *ngFor=\"let child of children\" (click)=\"chooseIdentity(child)\" class=\"c-btn c-btn-additional btn-reset mt-2 ml-1 c-btn-add-child modal-btn c-btn-bordder-light\" type=\"button\">\r\n            <svg width=\"52\" height=\"52\" viewBox=\"0 0 52 52\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n              <mask id=\"mask0\" mask-type=\"alpha\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"52\" height=\"52\">\r\n                <circle cx=\"26\" cy=\"26\" r=\"25.5\" fill=\"#C4C4C4\" stroke=\"#191B1C\" />\r\n              </mask>\r\n              <g mask=\"url(#mask0)\">\r\n                <circle cx=\"26\" cy=\"26\" r=\"26\" fill=\"#9EB3B9\" />\r\n              </g>\r\n              <path\r\n                d=\"M19.3337 24.6665C18.5457 24.6665 17.7655 24.5113 17.0376 24.2098C16.3096 23.9083 15.6482 23.4663 15.091 22.9091C14.5339 22.352 14.0919 21.6906 13.7904 20.9626C13.4889 20.2347 13.3337 19.4544 13.3337 18.6665C13.3337 17.8786 13.4889 17.0984 13.7904 16.3704C14.0919 15.6424 14.5339 14.981 15.091 14.4239C15.6482 13.8667 16.3096 13.4248 17.0376 13.1232C17.7655 12.8217 18.5457 12.6665 19.3337 12.6665C20.925 12.6665 22.4511 13.2986 23.5763 14.4239C24.7015 15.5491 25.3337 17.0752 25.3337 18.6665C25.3337 20.2578 24.7015 21.7839 23.5763 22.9091C22.4511 24.0344 20.925 24.6665 19.3337 24.6665ZM33.3337 29.9998C31.9192 29.9998 30.5626 29.4379 29.5624 28.4377C28.5622 27.4375 28.0003 26.081 28.0003 24.6665C28.0003 23.252 28.5622 21.8955 29.5624 20.8953C30.5626 19.8951 31.9192 19.3332 33.3337 19.3332C34.7481 19.3332 36.1047 19.8951 37.1049 20.8953C38.1051 21.8955 38.667 23.252 38.667 24.6665C38.667 26.081 38.1051 27.4375 37.1049 28.4377C36.1047 29.4379 34.7481 29.9998 33.3337 29.9998ZM33.3337 31.3332C34.925 31.3332 36.4511 31.9653 37.5763 33.0905C38.7015 34.2157 39.3337 35.7419 39.3337 37.3332V37.9998H27.3337V37.3332C27.3337 35.7419 27.9658 34.2157 29.091 33.0905C30.2162 31.9653 31.7424 31.3332 33.3337 31.3332ZM19.3337 25.9998C20.2091 25.9998 21.076 26.1723 21.8849 26.5073C22.6937 26.8423 23.4286 27.3334 24.0477 27.9525C24.6668 28.5715 25.1578 29.3064 25.4929 30.1153C25.8279 30.9241 26.0003 31.791 26.0003 32.6665V37.9998H12.667V32.6665C12.667 30.8984 13.3694 29.2027 14.6196 27.9525C15.8699 26.7022 17.5655 25.9998 19.3337 25.9998Z\"\r\n                fill=\"white\" />\r\n            </svg>\r\n            <span class=\"ml-1\" style=\"color: #191b1c;\">{{child.firstName}} {{child.lastName}}</span>\r\n          </button>\r\n          \r\n          <div style=\"height: 20px;\"></div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n      <div *ngIf=\"healthTestViewModel.viewState === 'CHOOSE_FACILITY'\" class=\"card card-test\">\r\n        <h2 class=\"secondary-title card-test__title\">Select your facility</h2>\r\n\r\n        <div class=\"c-form-group c-form-group--width\">\r\n          <ng-select appearance=\"outline\" #agreeSelect [searchable]=\"false\" placeholder=\"Select your facility\"\r\n            [(ngModel)]='selectFacility' (change)=\"onChangeSelectFalilityDropdown()\">\r\n            <ng-option *ngFor=\"let facility of facilityList\" value=\"{{facility.facilityId}}\">{{facility.facilityName}}\r\n            </ng-option>\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"btn-holder mb-0\">\r\n          <button class=\"c-btn c-btn-primary\" type=\"button\"\r\n            (click)='chooseFacility()' [disabled]='!selectFacility || healthTestViewModel.questionsListIsEmpty'>Next</button>\r\n        </div>\r\n\r\n        <div *ngIf=\"facilityListIsEmpty\" class=\"card-message-container\">\r\n          <span style=\"margin: 2rem;\">Your facility list is empty. Please, <b>add the facility</b></span>\r\n        </div>\r\n\r\n        <div *ngIf=\"healthTestViewModel.questionsListIsEmpty\" class=\"card-message-container\">\r\n          <span style=\"margin: 2rem;\">Facility does not have any questions</span>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"healthTestViewModel.viewState === 'QUESTION_WIZARD'\">\r\n        <div *ngIf=\"currentQuestion\" class=\"card card-test d-flex flex-column\">\r\n\r\n           <!-- Question  -->\r\n           <div class=\"card-test__body flex-grow-1 card-content--flex\" >\r\n            <h2 class=\"secondary-title card-test__title flex-grow-1 card-text--size\" [innerHTML]=\"currentQuestion.text\" ></h2>\r\n            <div class=\"btn-holder d-flex flex-wrap mt-0\">\r\n              <button class=\"c-btn c-btn-outline-primary card-test__btn btn--right-indent\" type=\"button\"\r\n                (click)=\"handleAnswer(true)\">Yes</button>\r\n              <button class=\"c-btn c-btn-outline-primary card-test__btn\" type=\"button\"\r\n                (click)=\"handleAnswer(false)\">No</button>\r\n            </div>\r\n            <p class=\"\" [innerHTML]=\"currentQuestion.questionCurrentNote\"></p>\r\n          </div>\r\n\r\n          <div class=\"card-test__footer d-flex-medium align-items-center\">\r\n            <button class=\"c-btn c-btn-additional\" type=\"button\" (click)=\"moveBack()\">\r\n              <i class=\"icon icon-arrow-left mr-1\"></i>\r\n              Go Back\r\n            </button>\r\n            <div class=\"range-holder\">\r\n              <span class=\"d-block mb-1\">Question\r\n                {{progressBarViewModel.currentQuestion}}/{{progressBarViewModel.questionsCount}}</span>\r\n              <div class=\"range\">\r\n                <div class=\"range__inner\" [ngStyle]=\"{'width': progressBarViewModel.progress + '%'}\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"healthTestViewModel.viewState === 'LOADING'\" class=\"card card-test\">\r\n        <div class=\"card-test__loading \">\r\n          <h2 class=\"secondary-title card-test__title item-center primary-color\">Please, wait</h2>\r\n          <!-- <img class=\"vertical-align-middle spinner item-center\"\r\n            src=\"../../assets/images/svg-icons/icon_spinner-primary.svg\" alt=\"icon spinner\"> -->\r\n\r\n          <div class=\"vertical-align-middle spinner item-center\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n              style=\"margin: auto; shape-rendering: auto;\" width=\"3rem\" height=\"3rem\" viewBox=\"0 0 100 100\"\r\n              preserveAspectRatio=\"xMidYMid\">\r\n              <g transform=\"rotate(0 50 50)\">\r\n                <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n                  <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.9s\"\r\n                    repeatCount=\"indefinite\"></animate>\r\n                </rect>\r\n              </g>\r\n              <g transform=\"rotate(36 50 50)\">\r\n                <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n                  <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.8s\"\r\n                    repeatCount=\"indefinite\"></animate>\r\n                </rect>\r\n              </g>\r\n              <g transform=\"rotate(72 50 50)\">\r\n                <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n                  <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.7s\"\r\n                    repeatCount=\"indefinite\"></animate>\r\n                </rect>\r\n              </g>\r\n              <g transform=\"rotate(108 50 50)\">\r\n                <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n                  <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6s\"\r\n                    repeatCount=\"indefinite\"></animate>\r\n                </rect>\r\n              </g>\r\n              <g transform=\"rotate(144 50 50)\">\r\n                <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n                  <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5s\"\r\n                    repeatCount=\"indefinite\"></animate>\r\n                </rect>\r\n              </g>\r\n              <g transform=\"rotate(180 50 50)\">\r\n                <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n                  <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.4s\"\r\n                    repeatCount=\"indefinite\"></animate>\r\n                </rect>\r\n              </g>\r\n              <g transform=\"rotate(216 50 50)\">\r\n                <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n                  <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.3s\"\r\n                    repeatCount=\"indefinite\"></animate>\r\n                </rect>\r\n              </g>\r\n              <g transform=\"rotate(252 50 50)\">\r\n                <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n                  <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.2s\"\r\n                    repeatCount=\"indefinite\"></animate>\r\n                </rect>\r\n              </g>\r\n              <g transform=\"rotate(288 50 50)\">\r\n                <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n                  <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.1s\"\r\n                    repeatCount=\"indefinite\"></animate>\r\n                </rect>\r\n              </g>\r\n              <g transform=\"rotate(324 50 50)\">\r\n                <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n                  <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"0s\"\r\n                    repeatCount=\"indefinite\"></animate>\r\n                </rect>\r\n              </g>\r\n            </svg>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <span class=\"d-none d-block-xlarge font-size-additional\">Your answers are confidential and will keep our workplace\r\n        safe</span>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n  <div class=\"intro\">\r\n    <div class=\"container\">\r\n      <div class=\"intro__inner intro__inner-indent--large\">\r\n        <h1 class=\"main-title\"><span class=\"с-text-primary\">Getting you back to community</span></h1>\r\n\r\n        <div class=\"intro__text-holder text-holder\">\r\n          <p>Complete a daily HealthCheck to keep you and your community safe</p>\r\n        </div>\r\n        <div class=\"intro__img-holder\">\r\n          <img src=\"../../assets/images/illustration.png\"\r\n               alt=\"two boys and two girls are wearing in different clothes and talking to each other\">\r\n        </div>\r\n        <!-- <a href=\"test.html\" class=\"btn btn-primary\">Check Health</a> -->\r\n        <a routerLink=\"/health-test\" class=\"c-btn c-btn-primary\">Check Health</a>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n<!-- <app-footer></app-footer> -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/dropdown/dropdown.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/dropdown/dropdown.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutDropdownDropdownComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div ngbDropdown id=\"dropdownBasic1\" placement=\"bottom\" class=\"dropdown header__dropdown\">\r\n\t<div ngbDropdownToggle class=\"btn-user btn-reset\">\r\n\t\t<span class=\"btn-user__text\">\r\n\t\t\t{{user.firstName}}\r\n\t\t\t{{user.lastName}}\r\n\t\t</span>\r\n\t\t<!-- <img class=\"btn-user__img\" src=\"../../assets/images/img_girl.png\" alt=\"icon person\"> -->\r\n\t\t<svg class=\"btn-user__svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"isolation:isolate\"\r\n\t\t\tviewBox=\"0 0 200 200\" width=\"52px\" height=\"52px\">\r\n\t\t\t<defs>\r\n\t\t\t\t<clipPath id=\"_clipPath_WZ1Pq7LfHkCUU5WXYxeuJKu5E9hPQlWM\">\r\n\t\t\t\t\t<rect width=\"200\" height=\"200\" />\r\n\t\t\t\t</clipPath>\r\n\t\t\t</defs>\r\n\t\t\t<g clip-path=\"url(#_clipPath_WZ1Pq7LfHkCUU5WXYxeuJKu5E9hPQlWM)\">\r\n\t\t\t\t<circle vector-effect=\"non-scaling-stroke\" cx=\"100\" cy=\"100\" r=\"100\" fill=\"rgb(0,172,205)\" />\r\n\t\t\t\t<g>\r\n\t\t\t\t\t<path d=\" M 9.25 9.25 L 190.75 9.25 L 190.75 190.75 L 9.25 190.75 L 9.25 9.25 Z \" fill=\"none\" />\r\n\t\t\t\t\t<path\r\n\t\t\t\t\t\td=\" M 100 100 C 116.713 100 130.25 86.463 130.25 69.75 C 130.25 53.037 116.713 39.5 100 39.5 C 83.287 39.5 69.75 53.037 69.75 69.75 C 69.75 86.463 83.287 100 100 100 Z  M 100 115.125 C 79.808 115.125 39.5 125.259 39.5 145.375 L 39.5 160.5 L 160.5 160.5 L 160.5 145.375 C 160.5 125.259 120.192 115.125 100 115.125 Z \"\r\n\t\t\t\t\t\tfill=\"rgb(255,255,255)\" />\r\n\t\t\t\t</g>\r\n\t\t\t</g>\r\n\t\t</svg>\r\n\t</div>\r\n\t<div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\"\r\n\t\tclass=\"dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround\">\r\n\t\t<ul class=\"\" style=\"min-width: 250px;\">\r\n\t\t\t<li class=\"dropdown__item\">\r\n\t\t\t\t<a ngbDropdownItem routerLink=\"/home\" class=\"dropdown__btn dropdown-user__btn\">\r\n\t\t\t\t\t<!-- <span class=\"icon icon-folder text-primary\"></span> -->\r\n\t\t\t\t\t<span>\r\n\t\t\t\t\t\t<svg class=\"heartbeat-anim\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n\t\t\t\t\t\t\tstyle=\"isolation:isolate\" viewBox=\"0 0 200 200\" width=\"30px\" height=\"30px\">\r\n\t\t\t\t\t\t\t<defs>\r\n\t\t\t\t\t\t\t\t<clipPath id=\"_clipPath_ogaFH82vJXtxBKp1quTqko3Yo57ZgjuI\">\r\n\t\t\t\t\t\t\t\t\t<rect width=\"200\" height=\"200\" />\r\n\t\t\t\t\t\t\t\t</clipPath>\r\n\t\t\t\t\t\t\t</defs>\r\n\t\t\t\t\t\t\t<g clip-path=\"url(#_clipPath_ogaFH82vJXtxBKp1quTqko3Yo57ZgjuI)\">\r\n\t\t\t\t\t\t\t\t<g>\r\n\t\t\t\t\t\t\t\t\t<path\r\n\t\t\t\t\t\t\t\t\t\td=\" M 100.131 188.601 C 87.029 177.995 0 106.058 0 64.944 C 0 35.829 23.571 12.149 52.52 12.149 C 71.091 12.149 87.949 21.772 97.549 37.841 L 100 41.978 L 102.457 37.846 C 112.057 21.772 128.886 12.149 147.48 12.149 C 176.451 12.149 200 35.835 200 64.938 C 200 117.058 113.503 179.292 100.131 188.595 L 100.131 188.601 Z \"\r\n\t\t\t\t\t\t\t\t\t\tfill=\"rgb(0,172,205)\" />\r\n\t\t\t\t\t\t\t\t</g>\r\n\t\t\t\t\t\t\t\t<path\r\n\t\t\t\t\t\t\t\t\td=\" M 65.446 47.028 C 62.567 47.461 60.246 49.188 59.472 51.475 L 48.021 91.673 L 47.066 88.773 C 46.417 86.578 44.349 84.841 41.665 84.233 C 38.986 83.644 36.124 84.271 34.178 85.872 L 21.03 96.503 L 16.744 96.503 C 13.989 96.477 11.426 97.647 10.029 99.571 C 8.657 101.5 8.657 103.875 10.029 105.804 C 11.435 107.734 14.002 108.897 16.744 108.872 L 24.384 108.872 C 26.43 108.918 28.412 108.291 29.877 107.134 L 35.606 102.496 L 39.9 116.602 C 40.707 119.354 43.717 121.312 47.21 121.357 C 50.704 121.402 53.79 119.523 54.705 116.794 L 65.446 88 L 70.221 146.368 C 70.536 149.256 73.292 151.577 76.844 151.946 C 80.402 152.329 83.808 150.649 85.019 147.914 L 102.208 106.355 L 109.137 117.765 C 110.39 119.936 113.109 121.339 116.058 121.339 C 119.015 121.339 121.727 119.936 122.979 117.765 L 128.472 108.872 L 154.256 108.872 C 157.006 108.897 159.565 107.734 160.971 105.804 C 162.343 103.875 162.343 101.5 160.971 99.571 C 159.565 97.641 156.998 96.478 154.256 96.503 L 123.698 96.503 C 120.751 96.479 118.054 97.836 116.776 99.985 L 116.058 101.141 L 107.7 87.61 C 106.332 85.362 103.422 84.006 100.334 84.177 C 97.246 84.348 94.591 86.012 93.613 88.389 L 82.872 114.283 L 74.514 52.823 C 74.393 51.146 73.434 49.58 71.857 48.487 C 70.281 47.394 68.223 46.868 66.157 47.028 L 65.446 47.035 L 65.446 47.028 Z \"\r\n\t\t\t\t\t\t\t\t\tfill=\"rgb(255,255,255)\" />\r\n\t\t\t\t\t\t\t</g>\r\n\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span style=\"margin-left: 1rem; color: #00ACCD; font-weight: 700;\">Start Check Health </span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"dropdown__item\">\r\n\t\t\t\t<a ngbDropdownItem routerLink=\"/profile/my-profile\" class=\"dropdown__btn dropdown-user__btn\">\r\n\t\t\t\t\t<span class=\"icon icon-person c-text-primary\"></span>\r\n\t\t\t\t\tMy profile\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"dropdown__item\">\r\n\t\t\t\t<a ngbDropdownItem routerLink=\"/profile/my-result\" class=\"dropdown__btn dropdown-user__btn\">\r\n\t\t\t\t\t<span class=\"icon icon-folder c-text-primary\"></span>\r\n\t\t\t\t\tPassport\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"dropdown__item\">\r\n\t\t\t\t<button ngbDropdownItem class=\"dropdown__btn dropdown-user__btn\" type=\"button\" (click)=\"logout()\">\r\n\t\t\t\t\t<span class=\"icon icon-log-out\"></span>\r\n\t\t\t\t\tLog out\r\n\t\t\t\t</button>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/language-selector/language-selector.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/language-selector/language-selector.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutLanguageSelectorLanguageSelectorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div ngbDropdown placement=\"bottom\" class=\"dropdown header__dropdown\">\r\n\t<div ngbDropdownToggle class=\"btn-user btn-reset\">\r\n\t\t<span class=\"btn-user__text\">Sally Johnson</span>\r\n\t\t<img class=\"btn-user__img\" src=\"../../assets/images/img_girl.png\" alt=\"icon person\">\r\n\t</div>\r\n\t<div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" style=\"will-change: inherit !important;\"\r\n\t\tclass=\"dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround\">\r\n\t\t<ul class=\"\" style=\"min-width: 250px;\">\r\n\r\n\t\t\t<li class=\"dropdown__item\">\r\n\t\t\t\t<a routerLink=\"/profile\" class=\"dropdown__btn dropdown-user__btn\">\r\n\t\t\t\t\t<span class=\"icon icon-person с-text-primary\"></span>\r\n\t\t\t\t\tMy profile\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"dropdown__item\">\r\n\t\t\t\t<a routerLink=\"/profile\" class=\"dropdown__btn dropdown-user__btn\">\r\n\t\t\t\t\t<span class=\"icon icon-folder с-text-primary\"></span>\r\n\t\t\t\t\tMy results\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"dropdown__item\">\r\n\t\t\t\t<button class=\"dropdown__btn dropdown-user__btn\" type=\"button\">\r\n\t\t\t\t\t<span class=\"icon icon-log-out\"></span>\r\n\t\t\t\t\tLog out\r\n\t\t\t\t</button>\r\n\t\t\t</li>\r\n\r\n\t\t</ul>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<!-- <ngbd-popover-basic></ngbd-popover-basic> -->\r\n\r\n\r\n<!-- <div class=\"row\">\r\n\t<div class=\"col\">\r\n\t\t<div ngbDropdown class=\"d-inline-block\">\r\n\t\t\t<button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>Toggle dropdown</button>\r\n\t\t\t<div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" style=\"top: 20px  !important;\" class=\"dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-user__menu\">\r\n\t\t\t\t<ul class=\"\" style=\"min-width: 250px;\">\r\n\t\t\t\t\t<li ngbDropdownItem class=\"dropdown__item\">\r\n\t\t\t\t\t\t<a routerLink=\"/profile\" class=\"dropdown__btn dropdown-user__btn\">\r\n\t\t\t\t\t\t\t<span class=\"icon icon-person text-primary\"></span>\r\n\t\t\t\t\t\t\tMy profile\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li ngbDropdownItem class=\"dropdown__item\">\r\n\t\t\t\t\t\t<a routerLink=\"/profile\" class=\"dropdown__btn dropdown-user__btn\">\r\n\t\t\t\t\t\t\t<span class=\"icon icon-folder text-primary\"></span>\r\n\t\t\t\t\t\t\tMy results\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li ngbDropdownItem class=\"dropdown__item\">\r\n\t\t\t\t\t\t<button class=\"dropdown__btn dropdown-user__btn\" type=\"button\" (click)=\"logout()\">\r\n\t\t\t\t\t\t\t<span class=\"icon icon-log-out\"></span>\r\n\t\t\t\t\t\t\tLog out\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div> -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/popover/popover-basic.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/popover/popover-basic.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutPopoverPopoverBasicHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button type=\"button\" class=\"btn-user btn-reset\" placement=\"bottom\" popoverClass=\"\"\r\n    ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on bottom\">\r\n    <span class=\"btn-user__text\">Sally Johnson</span>\r\n    <img class=\"btn-user__img\" src=\"../../assets/images/img_girl.png\" alt=\"icon person\">\r\n</button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"intro\">\r\n  <div class=\"container\">\r\n    <div class=\"intro__inner intro__inner-indent\">\r\n      <h1 class=\"main-title\"><span class=\"с-text-primary\">Try to login!</span></h1>\r\n\r\n      <button class=\"c-btn c-btn-primary mb-2\"\r\n                type=\"submit\">\r\n                <span>Point</span>\r\n              </button>\r\n\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewsNewsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"intro\">\r\n  <div class=\"container\">\r\n    <div class=\"intro__inner intro__inner-indent\">\r\n      <h3 class=\"main-title с-text-primary mt-5 mb-5\">Новини та афіша</h3>\r\n\r\n      <div class=\"container\">\r\n        <div class=\"row itemsBlock\">\r\n          <div *ngFor=\"let item of fireNews\" class=\"col-12 col-sm-12 col-md-6 col-lg-4 \">\r\n            <div class=\"article-card mt-2\" (click)=\"onClickOpenItem(item)\">\r\n              <div class=\"article-card-image-wrap\">\r\n                <img src=\"{{item.imageUrl}}\" alt=\"\">\r\n                <span class=\"article-card-image-wrap-badge\">Новини мiста</span>\r\n              </div>\r\n              <div class=\"float-none\"></div>\r\n              <div class=\"article-card-content\">\r\n                <div class=\"article-card-title\">{{item.title}}</div>\r\n                <div class=\"article-card-short-text\">Унікальне явище — квітуче тюльпанове поле, яке навіть отримало назву pd qwpqwpd pqwmpdpqwdmqwd wq dwq d wq</div>\r\n              </div>\r\n              <div class=\"article-card-additional\">\r\n                <div class=\"article-card-additional-date\">17 березня 2021</div>\r\n                <div class=\"line-vertical\"></div>\r\n                <div class=\"article-card-additional-likes\">10</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/children/child-card-component/child-card.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/children/child-card-component/child-card.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileChildrenChildCardComponentChildCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"tabs__body mt-3\">\r\n\r\n  <div *ngIf=\"!loading\" class=\"tabs__panel tabs__panel--indent tabs__profile card card-height profile d-block\">\r\n\r\n    <div class=\"c-btn-menu-wrap\" ngbDropdown placement='bottom-right'>\r\n      <span ngbDropdownToggle class=\"c-btn-menu-trigger c-btn-menu--position\">\r\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <path\r\n            d=\"M12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3ZM12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z\"\r\n            fill=\"#00ACCD\" />\r\n        </svg>\r\n      </span>\r\n\r\n      <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\"\r\n        class=\"dropdown-menu dropdown-menu-card-fit dropdown-menu-anim dropdown-menu-top-unround\">\r\n        <ul class=\"\" style=\"min-width: 250px;\">\r\n          <li class=\"dropdown__item\">\r\n            <a ngbDropdownItem (click)=\"routeEditChild()\" class=\"dropdown__btn dropdown-user__btn\">\r\n              <span class=\"icon icon-pencil c-text-primary\"></span>\r\n              Edit profile\r\n            </a>\r\n          </li>\r\n          <li class=\"dropdown__item\">\r\n            <a ngbDropdownItem (click)=\"openModalShareProfile(shareprofilemodal)\"\r\n              class=\"dropdown__btn dropdown-user__btn\">\r\n              <span class=\"icon icon-share c-text-primary\"></span>\r\n              Share profile\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n    </div>\r\n    <dl class=\"tabs-list\">\r\n      <div class=\"tabs-list__item d-flex-medium align-items-center-medium\">\r\n        <dt class=\"tabs-list__term\">Child profile:</dt>\r\n        <dd class=\"tabs-list__description\">\r\n          <span>{{child.firstName}} {{child.lastName}}</span>\r\n        </dd>\r\n      </div>\r\n\r\n      <div class=\"tabs-list__item d-flex-medium\">\r\n        <dt class=\"tabs-list__term\">Facilities:</dt>\r\n        <dd class=\"tabs-list__description tabs-list__description--active tabs-list--primary\">\r\n          <span *ngFor=\"let facility of child.facilities\"\r\n            class=\"d-block tabs-list__description-text\">{{facility.name}}</span>\r\n          <button *ngIf=\"!addFacilityDialogViewModel.showAddFacilityDialog\" class=\"c-btn c-btn-additional btn-reset p-0\"\r\n            (click)=\"addFacilityDialogViewModel.onClickAddFacilityOpenDialog($event)\">\r\n            <i class=\"icon icon-add tabs-list__description-icon\"></i>\r\n            Add Facility\r\n          </button>\r\n\r\n          <div>\r\n            <form #f=\"ngForm\" name=\"addFacilityForm\" class=\"add-facility__form\">\r\n\r\n              <div *ngIf=\"addFacilityDialogViewModel.showAddFacilityDialog\" class=\"tabs-list__additional-block\">\r\n                <div class=\"c-form-group form-group--width holder--bottom-indent\"\r\n                  [ngClass]=\"{'form-group--error': addFacilityDialogViewModel.facilityErrorPopover.popowerIsVisible}\">\r\n\r\n                  <label class=\"mb-1\" style=\"color: #191B1C\">Add new facility<span class=\"ml-1\">\r\n                      <svg version=\"1.1\" viewBox=\"0 0 20.699 21.479\" xmlns=\"http://www.w3.org/2000/svg\" height=\"0.9rem\"\r\n                        width=\"0.9rem\" style=\"margin: 0.3rem; cursor: pointer;\"\r\n                        (click)=\"addFacilityDialogViewModel.closeDialogAddFacility()\">\r\n                        <g transform=\"translate(1.632 1.6339)\">\r\n                          <path d=\"m-2.5783e-4 -0.0014681 17.436 18.214\" fill=\"#5f6368\" stroke=\"#5f6368\"\r\n                            stroke-linecap=\"round\" stroke-width=\"3.2316\" />\r\n                          <path d=\"m-2.5783e-4 18.212 17.436-18.214\" fill=\"#5f6368\" stroke=\"#5f6368\"\r\n                            stroke-linecap=\"round\" stroke-width=\"3.2316\" />\r\n                        </g>\r\n                      </svg></span></label>\r\n                  <div class=\"input-holder\">\r\n\r\n                    <input class=\"c-form-control\" id=\"inputFacilityCode\" type=\"text\" name=\"facilityCode\"\r\n                      placeholder=\"Ask your organization\" (input)=\"addFacilityDialogViewModel.facilityValueChanged($event)\"\r\n                      autocomplete=\"false\" (keyup.enter)=\"onClickAddFacilityInput()\"\r\n                      (keyup.escape)=\"addFacilityDialogViewModel.closeDialogAddFacility()\"\r\n                      [(ngModel)]=\"addFacilityDialogViewModel.newFacilityCode\">\r\n                    <small *ngIf=\"addFacilityDialogViewModel.facilityErrorPopover.popowerIsVisible\" class=\"c-form-text\">\r\n                      {{addFacilityDialogViewModel.facilityErrorPopover.popowerMessage}}\r\n                    </small>\r\n                  </div>\r\n                </div>\r\n                <button class=\"c-btn c-btn-primary\" (click)=\"onClickAddFacilityInput()\" type=\"button\"\r\n                  [disabled]=\"!addFacilityDialogViewModel.newFacilityCode\"\r\n                  [ngClass]=\"{'c-btn--disabled' : !addFacilityDialogViewModel.newFacilityCode}\">\r\n                  <span *ngIf=\"addFacilityDialogViewModel.loading\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"1rem\"\r\n                      height=\"1rem\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\">\r\n                      <g transform=\"rotate(0 50 50)\">\r\n                        <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.9s\"\r\n                            repeatCount=\"indefinite\"></animate>\r\n                        </rect>\r\n                      </g>\r\n                      <g transform=\"rotate(36 50 50)\">\r\n                        <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.8s\"\r\n                            repeatCount=\"indefinite\"></animate>\r\n                        </rect>\r\n                      </g>\r\n                      <g transform=\"rotate(72 50 50)\">\r\n                        <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.7s\"\r\n                            repeatCount=\"indefinite\"></animate>\r\n                        </rect>\r\n                      </g>\r\n                      <g transform=\"rotate(108 50 50)\">\r\n                        <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6s\"\r\n                            repeatCount=\"indefinite\"></animate>\r\n                        </rect>\r\n                      </g>\r\n                      <g transform=\"rotate(144 50 50)\">\r\n                        <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5s\"\r\n                            repeatCount=\"indefinite\"></animate>\r\n                        </rect>\r\n                      </g>\r\n                      <g transform=\"rotate(180 50 50)\">\r\n                        <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.4s\"\r\n                            repeatCount=\"indefinite\"></animate>\r\n                        </rect>\r\n                      </g>\r\n                      <g transform=\"rotate(216 50 50)\">\r\n                        <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.3s\"\r\n                            repeatCount=\"indefinite\"></animate>\r\n                        </rect>\r\n                      </g>\r\n                      <g transform=\"rotate(252 50 50)\">\r\n                        <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.2s\"\r\n                            repeatCount=\"indefinite\"></animate>\r\n                        </rect>\r\n                      </g>\r\n                      <g transform=\"rotate(288 50 50)\">\r\n                        <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.1s\"\r\n                            repeatCount=\"indefinite\"></animate>\r\n                        </rect>\r\n                      </g>\r\n                      <g transform=\"rotate(324 50 50)\">\r\n                        <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"0s\"\r\n                            repeatCount=\"indefinite\">\r\n                          </animate>\r\n                        </rect>\r\n                      </g>\r\n                    </svg>\r\n                  </span>\r\n                  <span *ngIf=\"!addFacilityDialogViewModel.loading\">Add facility</span>\r\n                </button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </dd>\r\n      </div>\r\n    </dl>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #shareprofilemodal let-modal>\r\n  <div class=\"modal-header\" style=\"border-bottom: none;\">\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"modal__body scroll-bar\">\r\n      <div class=\"card-result c-card-result--large mb-1 position-relative overflow-hidden\">\r\n        <div class=\" d-flex align-items-center justify-content-between \">\r\n          <svg class=\"card-result__logo\" width=\"210\" height=\"35\" viewBox=\"0 0 210 35\" fill=\"none\"\r\n            xmlns=\"http://www.w3.org/2000/svg\">\r\n            <path class=\"svg-icon__img\"\r\n              d=\"M18.8 6.8c3.1-7.8 11.5-8.4 15.8-4C39 7 39.1 14 35.1 18.5L18.8 35 3.7 20.1l-1.5-1.6h3.1c.5 0 1-.3 1.2-.8l2.2-5.5L12.2 25a1.3 1.3 0 002.4.2l4.1-9.2 2.4 5.1c.4.8 1.4 1 2 .4l2.9-2.9h2.5a1 1 0 000-2h-2.8c-.3 0-.6.2-.9.4l-2.3 2.4-2.6-5.5c-.5-1-1.9-1-2.3 0l-4 8.7L10 9.7c-.3-1.1-2-1.2-2.4-.1l-2.9 7H1.1v-.1C-.8 12-.5 6 3 2.7c4.3-4.3 12.7-3.8 15.8 4z\" />\r\n            <path class=\"svg-icon__text\"\r\n              d=\"M58.7 8.8h4.7v16.8h-4.7v-6.4h-5v6.4H49V8.8h4.7V15h5v-6zM79.6 19l-.1 1.2h-9.7c.2.8.5 1.3 1 1.7.4.4 1 .6 1.7.6.5 0 1-.1 1.4-.3l1-1h4.4a6.5 6.5 0 01-2.5 3.6 7.2 7.2 0 01-4.3 1.3c-1.3 0-2.5-.3-3.6-1-1-.5-2-1.4-2.5-2.4a7 7 0 01-1-3.6c0-2 .7-3.6 2-4.9a7 7 0 015.1-2c1 0 2 .2 2.9.6a6.5 6.5 0 014.2 6.2zm-7.1-3.3c-.7 0-1.2.2-1.6.6-.5.3-.8.8-1 1.4h5.3c-.4-1.3-1.3-2-2.7-2zM92 12.7h3.4v13h-3.5l-.3-1a6 6 0 01-4 1.4 7 7 0 01-3.5-1c-1-.5-1.8-1.3-2.4-2.4-.6-1-.9-2.2-.9-3.6 0-2 .7-3.6 2-4.9 1.2-1.3 2.9-2 4.8-2a6 6 0 014 1.5l.5-1zm-5.8 8.6c.5.5 1.2.8 2 .8.9 0 1.6-.3 2.1-.8.6-.6.8-1.3.8-2.1a2.9 2.9 0 00-2.9-3c-.8 0-1.5.3-2 .8-.6.6-.9 1.3-.9 2.2 0 .8.3 1.5.9 2zM98.2 25.6V8h4.5v17.6h-4.5zM112.5 21.7h1.7v4h-3c-1.5 0-2.6-.5-3.4-1.3-.9-.8-1.3-2-1.3-3.4v-4.9h-2.3v-1l5.8-6.2h.9v3.8h3.2V16H111v4.1c0 .5.1.9.4 1.1.3.3.6.4 1 .4zM124.2 12.3c1.5 0 2.7.5 3.6 1.5.9 1 1.3 2.4 1.3 4v7.8h-4.5v-7.3c0-1.5-.5-2.2-1.6-2.2a2 2 0 00-1.6.7c-.4.4-.6 1-.6 2v6.8h-4.5V8h4.5v5.5c1-.8 2.1-1.2 3.4-1.2zM140 26c-1.8 0-3.3-.3-4.6-1a8.4 8.4 0 01-3.2-3.3 8.9 8.9 0 01-1.2-4.5c0-1.6.4-3.1 1.2-4.5a8.3 8.3 0 013.2-3.1 9.2 9.2 0 014.5-1.2 8.4 8.4 0 018.5 7.2h-4.7c-.3-.9-.7-1.6-1.4-2-.7-.6-1.5-.9-2.4-.9-1.2 0-2.1.5-3 1.3-.7.9-1 2-1 3.2 0 1.3.3 2.4 1 3.3.9.8 1.8 1.2 3 1.2 1 0 1.8-.3 2.5-.8.6-.6 1.1-1.3 1.3-2.3h4.8c-.4 2.3-1.3 4-2.9 5.4a8.4 8.4 0 01-5.7 2zM158.4 12.3c1.5 0 2.7.5 3.5 1.5 1 1 1.4 2.4 1.4 4v7.8h-4.5v-7.3c0-1.5-.5-2.2-1.7-2.2a2 2 0 00-1.6.7c-.4.4-.6 1-.6 2v6.8h-4.4V8h4.4v5.5c1-.8 2.2-1.2 3.5-1.2zM179.3 19v1.2h-9.7c.1.8.4 1.3.9 1.7.4.4 1 .6 1.7.6.5 0 1-.1 1.4-.3l1-1h4.4a6.5 6.5 0 01-2.5 3.6 7.2 7.2 0 01-4.3 1.3c-1.3 0-2.5-.3-3.6-1-1-.5-1.9-1.4-2.5-2.4a7 7 0 01-1-3.6c0-2 .7-3.6 2-4.9a7 7 0 015.1-2c1 0 2 .2 2.9.6a6.5 6.5 0 014.2 6.2zm-7-3.3c-.7 0-1.3.2-1.7.6-.5.3-.8.8-1 1.4h5.3c-.4-1.3-1.3-2-2.7-2zM187.7 26c-1 0-2-.1-2.8-.5-1-.3-1.7-.8-2.3-1.4a7.1 7.1 0 01-2-5c0-2 .6-3.6 2-4.9 1.3-1.3 3-2 5.1-2 1.9 0 3.4.6 4.6 1.7 1.3 1 2 2.4 2.3 4.1h-4.3c-.2-.5-.6-1-1-1.2-.5-.4-1-.5-1.6-.5-.8 0-1.4.2-2 .8a3 3 0 00-.7 2c0 .9.3 1.6.8 2.1.5.6 1.1.9 2 .9.5 0 1-.2 1.5-.5.5-.4.8-.8 1-1.4h4.4c-.3 1.7-1 3.2-2.3 4.2a7 7 0 01-4.7 1.7zM209.7 25.6h-5.2l-3.3-5.4v5.4h-4.4V8h4.4v9.8l3.1-5.1h5l-4 6.2 4.4 6.7z\" />\r\n          </svg>\r\n        </div>\r\n        <div style=\"height: 2rem;\"></div>\r\n\r\n        <div class=\"c-card-result__inner\">\r\n\r\n          <div class=\"card-result__body\">\r\n            <h2 class=\"\">{{child.firstName}} {{child.lastName}}</h2>\r\n          </div>\r\n          <div style=\"height: 1rem;\"></div>\r\n\r\n          <div *ngIf=\"qrCodeModel\">\r\n            <div class=\"qrcodeImage\">\r\n              <qrcode id=\"{{child.id}}\" [elementType]=\"qrCodeModel.elementType\" [level]=\"qrCodeModel.level\"\r\n                [qrdata]=\"qrCodeModel.qrdata\" [scale]=\"qrCodeModel.scale\" [width]=\"qrCodeModel.width\"></qrcode>\r\n            </div>\r\n          </div>\r\n          <button class=\"c-btn c-btn-additional btn-reset p-0 mt-3\" (click)=\"copyChildId()\" id=\"copyChildIdBtn\">\r\n            <i style=\"margin-right: 5px; font-size: 20px;\"\r\n              class=\"icon icon-content_copy tabs-list__description-icon\"></i>\r\n            <span>Copy child Id</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/children/children.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/children/children.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileChildrenChildrenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n  <div *ngIf=\"loading\" class=\"card-loading primary-color\">\r\n    <p class=\"\">Please, wait</p>\r\n    <p>\r\n      <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"2rem\" height=\"2rem\"\r\n        viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\">\r\n        <g transform=\"rotate(0 50 50)\">\r\n          <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.9s\"\r\n              repeatCount=\"indefinite\"></animate>\r\n          </rect>\r\n        </g>\r\n        <g transform=\"rotate(36 50 50)\">\r\n          <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.8s\"\r\n              repeatCount=\"indefinite\"></animate>\r\n          </rect>\r\n        </g>\r\n        <g transform=\"rotate(72 50 50)\">\r\n          <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.7s\"\r\n              repeatCount=\"indefinite\"></animate>\r\n          </rect>\r\n        </g>\r\n        <g transform=\"rotate(108 50 50)\">\r\n          <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6s\"\r\n              repeatCount=\"indefinite\"></animate>\r\n          </rect>\r\n        </g>\r\n        <g transform=\"rotate(144 50 50)\">\r\n          <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5s\"\r\n              repeatCount=\"indefinite\"></animate>\r\n          </rect>\r\n        </g>\r\n        <g transform=\"rotate(180 50 50)\">\r\n          <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.4s\"\r\n              repeatCount=\"indefinite\"></animate>\r\n          </rect>\r\n        </g>\r\n        <g transform=\"rotate(216 50 50)\">\r\n          <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.3s\"\r\n              repeatCount=\"indefinite\"></animate>\r\n          </rect>\r\n        </g>\r\n        <g transform=\"rotate(252 50 50)\">\r\n          <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.2s\"\r\n              repeatCount=\"indefinite\"></animate>\r\n          </rect>\r\n        </g>\r\n        <g transform=\"rotate(288 50 50)\">\r\n          <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.1s\"\r\n              repeatCount=\"indefinite\"></animate>\r\n          </rect>\r\n        </g>\r\n        <g transform=\"rotate(324 50 50)\">\r\n          <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"0s\" repeatCount=\"indefinite\">\r\n            </animate>\r\n          </rect>\r\n        </g>\r\n      </svg>\r\n    </p>\r\n  </div>\r\n\r\n  <div  *ngIf=\"!loading\">\r\n    <child-card  *ngFor=\"let child of children\" [childId]=\"child.id\"></child-card>\r\n  </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/my-profile/my-profile.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/my-profile/my-profile.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileMyProfileMyProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"tabs__body\">\r\n  <div *ngIf=\"loading\" class=\"card-loading primary-color\">\r\n    <p class=\"\">Please, wait</p>\r\n    <p>\r\n      <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"2rem\" height=\"2rem\"\r\n        viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\">\r\n        <g transform=\"rotate(0 50 50)\">\r\n          <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.9s\"\r\n              repeatCount=\"indefinite\"></animate>\r\n          </rect>\r\n        </g>\r\n        <g transform=\"rotate(36 50 50)\">\r\n          <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.8s\"\r\n              repeatCount=\"indefinite\"></animate>\r\n          </rect>\r\n        </g>\r\n        <g transform=\"rotate(72 50 50)\">\r\n          <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.7s\"\r\n              repeatCount=\"indefinite\"></animate>\r\n          </rect>\r\n        </g>\r\n        <g transform=\"rotate(108 50 50)\">\r\n          <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6s\"\r\n              repeatCount=\"indefinite\"></animate>\r\n          </rect>\r\n        </g>\r\n        <g transform=\"rotate(144 50 50)\">\r\n          <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5s\"\r\n              repeatCount=\"indefinite\"></animate>\r\n          </rect>\r\n        </g>\r\n        <g transform=\"rotate(180 50 50)\">\r\n          <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.4s\"\r\n              repeatCount=\"indefinite\"></animate>\r\n          </rect>\r\n        </g>\r\n        <g transform=\"rotate(216 50 50)\">\r\n          <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.3s\"\r\n              repeatCount=\"indefinite\"></animate>\r\n          </rect>\r\n        </g>\r\n        <g transform=\"rotate(252 50 50)\">\r\n          <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.2s\"\r\n              repeatCount=\"indefinite\"></animate>\r\n          </rect>\r\n        </g>\r\n        <g transform=\"rotate(288 50 50)\">\r\n          <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.1s\"\r\n              repeatCount=\"indefinite\"></animate>\r\n          </rect>\r\n        </g>\r\n        <g transform=\"rotate(324 50 50)\">\r\n          <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n            <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"0s\" repeatCount=\"indefinite\">\r\n            </animate>\r\n          </rect>\r\n        </g>\r\n      </svg>\r\n    </p>\r\n  </div>\r\n  <div *ngIf=\"!loading\" class=\"tabs__panel tabs__panel--indent tabs__profile card profile d-block\">\r\n\r\n    <dl class=\"tabs-list\" *ngIf=\"user\">\r\n      <div class=\"tabs-list__item d-flex-medium align-items-center-medium\">\r\n        <dt class=\"tabs-list__term\">Email:</dt>\r\n        <dd class=\"tabs-list__description\">\r\n          <a class=\"text-black\">{{user.email}}</a>\r\n        </dd>\r\n      </div>\r\n\r\n      <div class=\"tabs-list__item d-flex-medium align-items-center-medium\">\r\n        <dt class=\"tabs-list__term\">Phone:</dt>\r\n        <dd class=\"tabs-list__description\">\r\n          <a class=\"text-black\">{{user.phone}}</a>\r\n        </dd>\r\n      </div>\r\n\r\n      <div class=\"tabs-list__item d-flex-medium align-items-center-medium\">\r\n        <dt class=\"tabs-list__term\">Country:</dt>\r\n        <dd class=\"tabs-list__description\"><span *ngIf=\"user && user.country\">{{user.country.name}}</span></dd>\r\n      </div>\r\n\r\n      <div *ngIf=\"user.state\" class=\"tabs-list__item d-flex-medium align-items-center-medium\">\r\n        <dt class=\"tabs-list__term\">State:</dt>\r\n        <dd class=\"tabs-list__description\"><span *ngIf=\"user.state\">{{user.state.name}}</span></dd>\r\n      </div>\r\n\r\n      <div class=\"tabs-list__item d-flex-medium\">\r\n        <dt class=\"tabs-list__term\">Facilities:</dt>\r\n        <dd class=\"tabs-list__description tabs-list__description--active tabs-list--primary flex-grow-1\" style=\"flex-grow: 1;\">\r\n          <div *ngFor=\"let facility of user.userFacility\" class=\"facility-list--wrap\">\r\n            <span class=\"d-block tabs-list__description-text\">{{facility.name}}</span>\r\n            <svg *ngIf=\"!deleteFacilityInProgress\" (click)=\"openModalDeleteFacility(deletefacilitymodal, facility)\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"isolation:isolate\"\r\n              viewBox=\"0 0 20 20\" width=\"20\" height=\"20\" >\r\n              <defs>\r\n                <clipPath id=\"_clipPath_ddpELzTS1SfwabRWmnqGYEY0T8Sw8jQm\">\r\n                  <rect width=\"20\" height=\"20\" />\r\n                </clipPath>\r\n              </defs>\r\n              <g clip-path=\"url(#_clipPath_ddpELzTS1SfwabRWmnqGYEY0T8Sw8jQm)\">\r\n                <path\r\n                  d=\" M 10 20 C 4.477 20 0 15.523 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 Z  M 10 18 C 12.122 18 14.157 17.157 15.657 15.657 C 17.157 14.157 18 12.122 18 10 C 18 7.878 17.157 5.843 15.657 4.343 C 14.157 2.843 12.122 2 10 2 C 7.878 2 5.843 2.843 4.343 4.343 C 2.843 5.843 2 7.878 2 10 C 2 12.122 2.843 14.157 4.343 15.657 C 5.843 17.157 7.878 18 10 18 Z  M 10 8.586 L 12.828 5.757 L 14.243 7.172 L 11.414 10 L 14.243 12.828 L 12.828 14.243 L 10 11.414 L 7.172 14.243 L 5.757 12.828 L 8.586 10 L 5.757 7.172 L 7.172 5.757 L 10 8.586 L 10 8.586 Z \"\r\n                  fill=\"rgb(214,67,60)\" />\r\n              </g>\r\n            </svg>\r\n          </div>\r\n          <button *ngIf=\"!addFacilityDialogViewModel.showAddFacilityDialog\" class=\"c-btn c-btn-additional btn-reset p-0\"\r\n            (click)=\"onClickAddFacilityOpenDialog($event)\">\r\n            <i class=\"icon icon-add tabs-list__description-icon \"></i>\r\n            Add Facility\r\n          </button>\r\n\r\n          <div>\r\n            <form #f=\"ngForm\" name=\"addFacilityForm\" class=\"add-facility__form\">\r\n\r\n              <div *ngIf=\"addFacilityDialogViewModel.showAddFacilityDialog\" class=\"tabs-list__additional-block\">\r\n                <div class=\"c-form-group form-group--width holder--bottom-indent\"\r\n                  [ngClass]=\"{'form-group--error': addFacilityDialogViewModel.facilityErrorPopover.popowerIsVisible}\">\r\n\r\n                  <label class=\"mb-1\" style=\"color: #191B1C\">Add new facility<span>\r\n                      <svg version=\"1.1\" viewBox=\"0 0 20.699 21.479\" xmlns=\"http://www.w3.org/2000/svg\" height=\"0.9rem\"\r\n                        width=\"0.9rem\" style=\"margin: 0.3rem; cursor: pointer;\" (click)=\"closeDialogAddFacility()\">\r\n                        <g transform=\"translate(1.632 1.6339)\">\r\n                          <path d=\"m-2.5783e-4 -0.0014681 17.436 18.214\" fill=\"#5f6368\" stroke=\"#5f6368\"\r\n                            stroke-linecap=\"round\" stroke-width=\"3.2316\" />\r\n                          <path d=\"m-2.5783e-4 18.212 17.436-18.214\" fill=\"#5f6368\" stroke=\"#5f6368\"\r\n                            stroke-linecap=\"round\" stroke-width=\"3.2316\" />\r\n                        </g>\r\n                      </svg></span></label>\r\n                  <div class=\"input-holder\">\r\n\r\n                    <input class=\"c-form-control\" id=\"inputFacilityCode\" type=\"text\" name=\"facilityCode\"\r\n                      placeholder=\"Ask your organization\" (input)=\"facilityValueChanged($event)\" autocomplete=\"false\"\r\n                      (keyup.enter)=\"onClickAddFacilityInput()\" (keyup.escape)=\"closeDialogAddFacility()\"\r\n                      [(ngModel)]=\"addFacilityDialogViewModel.newFacilityCode\">\r\n                    <small *ngIf=\"addFacilityDialogViewModel.facilityErrorPopover.popowerIsVisible\" class=\"c-form-text\">\r\n                      {{addFacilityDialogViewModel.facilityErrorPopover.popowerMessage}}\r\n                    </small>\r\n                  </div>\r\n                </div>\r\n                <button class=\"c-btn c-btn-primary\" (click)=\"onClickAddFacilityInput()\" type=\"button\"\r\n                  [disabled]=\"!addFacilityDialogViewModel.newFacilityCode\"\r\n                  [ngClass]=\"{'c-btn--disabled' : !addFacilityDialogViewModel.newFacilityCode}\">\r\n                  <span *ngIf=\"addFacilityDialogViewModel.loading\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"1rem\"\r\n                      height=\"1rem\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\">\r\n                      <g transform=\"rotate(0 50 50)\">\r\n                        <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.9s\"\r\n                            repeatCount=\"indefinite\"></animate>\r\n                        </rect>\r\n                      </g>\r\n                      <g transform=\"rotate(36 50 50)\">\r\n                        <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.8s\"\r\n                            repeatCount=\"indefinite\"></animate>\r\n                        </rect>\r\n                      </g>\r\n                      <g transform=\"rotate(72 50 50)\">\r\n                        <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.7s\"\r\n                            repeatCount=\"indefinite\"></animate>\r\n                        </rect>\r\n                      </g>\r\n                      <g transform=\"rotate(108 50 50)\">\r\n                        <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6s\"\r\n                            repeatCount=\"indefinite\"></animate>\r\n                        </rect>\r\n                      </g>\r\n                      <g transform=\"rotate(144 50 50)\">\r\n                        <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5s\"\r\n                            repeatCount=\"indefinite\"></animate>\r\n                        </rect>\r\n                      </g>\r\n                      <g transform=\"rotate(180 50 50)\">\r\n                        <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.4s\"\r\n                            repeatCount=\"indefinite\"></animate>\r\n                        </rect>\r\n                      </g>\r\n                      <g transform=\"rotate(216 50 50)\">\r\n                        <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.3s\"\r\n                            repeatCount=\"indefinite\"></animate>\r\n                        </rect>\r\n                      </g>\r\n                      <g transform=\"rotate(252 50 50)\">\r\n                        <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.2s\"\r\n                            repeatCount=\"indefinite\"></animate>\r\n                        </rect>\r\n                      </g>\r\n                      <g transform=\"rotate(288 50 50)\">\r\n                        <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.1s\"\r\n                            repeatCount=\"indefinite\"></animate>\r\n                        </rect>\r\n                      </g>\r\n                      <g transform=\"rotate(324 50 50)\">\r\n                        <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"0s\"\r\n                            repeatCount=\"indefinite\">\r\n                          </animate>\r\n                        </rect>\r\n                      </g>\r\n                    </svg>\r\n                  </span>\r\n                  <span *ngIf=\"!addFacilityDialogViewModel.loading\">Add facility</span>\r\n                </button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </dd>\r\n      </div>\r\n\r\n      <div class=\"tabs-list__item d-flex-medium\">\r\n        <dt class=\"tabs-list__term\">Password:</dt>\r\n        <dd class=\"tabs-list__description tabs-list__description-js tabs-list__description--active\">\r\n          <button *ngIf=\"!changePasswordViewModel.showChangePasswordDialog\" (click)=\"onClickOpenChangePasswordDialog()\"\r\n            class=\"c-btn c-btn-additional btn-reset p-0 font-weight-bold\" type=\"button\">\r\n            <i class=\"icon icon-password mr-1\"></i>\r\n            Change password\r\n          </button>\r\n          <form #f=\"ngForm\" name=\"changePasswordForm\" class=\"add-facility__form\">\r\n\r\n            <div *ngIf=\"changePasswordViewModel.showChangePasswordDialog\" class=\"tabs-list__additional-block\">\r\n              <div class=\"c-form-group form-group--width holder--bottom-indent\"\r\n                [ngClass]=\"{'form-group--error': changePasswordViewModel.passwordErrorPopover.popowerIsVisible}\">\r\n                <label class=\"mb-1\" for=\"password\">Enter new password <span>\r\n                    <svg version=\"1.1\" viewBox=\"0 0 20.699 21.479\" xmlns=\"http://www.w3.org/2000/svg\" height=\"0.9rem\"\r\n                      width=\"0.9rem\" style=\"margin: 0.3rem; cursor: pointer;\" (click)=\"closeDialogChangePassword()\">\r\n                      <g transform=\"translate(1.632 1.6339)\" label=\"Layer 1\">\r\n                        <path d=\"m-2.5783e-4 -0.0014681 17.436 18.214\" fill=\"#5f6368\" stroke=\"#5f6368\"\r\n                          stroke-linecap=\"round\" stroke-width=\"3.2316\" />\r\n                        <path d=\"m-2.5783e-4 18.212 17.436-18.214\" fill=\"#5f6368\" stroke=\"#5f6368\"\r\n                          stroke-linecap=\"round\" stroke-width=\"3.2316\" />\r\n                      </g>\r\n                    </svg></span></label>\r\n                <div class=\"input-holder\">\r\n                  <input class=\"c-form-control\" id=\"password\" type=\"{{changePasswordViewModel.passwordInputType}}\"\r\n                    autocomplete=\"false\"\r\n                    (keyup.enter)=\"changePassword((changePasswordViewModel.newPassword && !changePasswordViewModel.passwordErrorPopover.popowerIsVisible))\"\r\n                    (keyup.escape)=\"closeDialogChangePassword()\" name=\"password\" (input)=\"onChangeNewPassword()\"\r\n                    [(ngModel)]=\"changePasswordViewModel.newPassword\">\r\n\r\n                  <small *ngIf=\"changePasswordViewModel.passwordErrorPopover.popowerIsVisible\" class=\"c-form-text\">\r\n                    {{changePasswordViewModel.passwordErrorPopover.popowerMessage}}\r\n                  </small>\r\n\r\n                  <span class=\"btn-show-password btn-reset\" (click)=\"changePasswordViewModel.setPasswordVisible()\">\r\n\r\n                    <svg *ngIf=\"changePasswordViewModel.changePasswordIconType === 'BASE'\" width=\"2rem\" height=\"2rem\"\r\n                      xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                      style=\"isolation:isolate\" viewBox=\"0 0 200 200\">\r\n                      <defs>\r\n                        <clipPath id=\"_clipPath_tkBMiCC4wdGXNRBK0fM8pNjuIp94y06d\">\r\n                          <rect width=\"200\" height=\"200\" />\r\n                        </clipPath>\r\n                      </defs>\r\n                      <g clip-path=\"url(#_clipPath_tkBMiCC4wdGXNRBK0fM8pNjuIp94y06d)\">\r\n                        <g>\r\n                          <g>\r\n                            <path\r\n                              d=\" M 196.564 95.656 C 196.16 95.144 186.47 82.988 169.856 70.782 C 147.656 54.472 123.5 45.85 99.999 45.85 C 76.5 45.85 52.344 54.472 30.143 70.782 C 13.529 82.987 3.839 95.144 3.435 95.656 L 0 100 L 3.435 104.344 C 3.839 104.856 13.53 117.013 30.143 129.218 C 52.344 145.528 76.5 154.15 100 154.15 C 123.5 154.15 147.656 145.528 169.856 129.218 C 186.47 117.013 196.16 104.856 196.564 104.344 L 200 100 L 196.564 95.656 Z  M 99.999 137.935 C 79.082 137.935 62.065 120.917 62.065 100 C 62.065 96.723 62.482 93.541 63.267 90.506 L 54.607 89.048 C 53.758 92.562 53.308 96.229 53.308 100 C 53.308 113.511 59.079 125.699 68.284 134.233 C 56.435 129.856 46.36 123.715 38.757 118.16 C 29.336 111.28 22.276 104.321 18.251 100 C 22.278 95.677 29.337 88.719 38.757 81.839 C 46.36 76.285 56.436 70.143 68.284 65.766 L 74.094 72.316 C 80.879 65.962 89.992 62.065 99.999 62.065 C 120.916 62.065 137.934 79.082 137.934 100 C 137.934 120.917 120.916 137.935 99.999 137.935 Z  M 161.242 118.16 C 153.637 123.715 143.563 129.856 131.715 134.233 C 140.919 125.699 146.69 113.512 146.69 99.999 C 146.69 86.487 140.919 74.3 131.715 65.766 C 143.563 70.143 153.637 76.285 161.242 81.839 C 170.663 88.719 177.723 95.678 181.748 99.999 C 177.721 104.322 170.662 111.281 161.242 118.16 Z \"\r\n                              fill=\"rgb(136,136,136)\" />\r\n                            <path\r\n                              d=\" M 75.859 92.626 C 75.147 94.959 74.762 97.434 74.762 100 C 74.762 113.938 86.061 125.238 99.999 125.238 C 113.937 125.238 125.236 113.939 125.236 100 C 125.236 86.062 113.937 74.763 99.999 74.763 C 93.21 74.763 87.052 77.448 82.516 81.809 L 94.964 95.841 L 75.859 92.626 Z \"\r\n                              fill=\"rgb(81,80,80)\" />\r\n                          </g>\r\n                        </g>\r\n                      </g>\r\n                    </svg>\r\n\r\n                    <svg *ngIf=\"changePasswordViewModel.changePasswordIconType === 'CROSSED'\" width=\"2rem\" height=\"2rem\"\r\n                      xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                      style=\"isolation:isolate\" viewBox=\"0 0 200 200\">\r\n                      <defs>\r\n                        <clipPath id=\"_clipPath_LxUBkemxei7dxr3oWeXjMqak5zXkmqFi\">\r\n                          <rect width=\"200\" height=\"200\" />\r\n                        </clipPath>\r\n                      </defs>\r\n                      <g clip-path=\"url(#_clipPath_LxUBkemxei7dxr3oWeXjMqak5zXkmqFi)\">\r\n                        <path\r\n                          d=\" M 13.636 3.52 L 3.516 13.639 L 55.38 65.503 C 55.352 65.559 55.408 65.665 55.38 65.721 L 65.492 75.608 C 65.464 75.665 65.52 75.777 65.492 75.826 L 80.872 90.995 C 80.844 91.051 80.9 91.157 80.872 91.213 L 186.357 196.48 L 196.47 186.368 L 152.518 142.416 C 180.893 126.951 197.124 104.181 197.124 104.181 L 200 99.996 L 197.138 95.819 C 197.138 95.819 162.904 48.027 107.032 44.174 C 102.508 43.598 97.928 43.598 93.404 44.174 C 82.414 44.868 71.595 47.239 61.322 51.206 L 13.636 3.52 Z  M 100 57.802 C 123.27 57.802 142.194 76.726 142.194 99.996 C 142.194 109.068 139.395 117.493 134.501 124.392 L 119.128 108.787 C 120.434 106.041 121.109 103.037 121.104 99.996 C 121.104 88.345 111.659 78.899 100.007 78.899 C 96.821 78.899 93.91 79.617 91.217 80.876 L 75.612 65.496 C 81.035 61.674 87.286 59.19 93.854 58.245 C 95.914 58.105 97.89 57.802 100.007 57.802 L 100 57.802 Z  M 35.169 65.278 C 15.007 79.258 3.495 94.968 2.869 95.819 L 0 99.996 L 2.862 104.174 C 4.339 106.234 38.101 152.05 92.961 155.812 C 95.267 156.115 97.602 156.255 99.993 156.255 C 101.913 156.255 103.79 156.143 105.71 156.037 C 106.09 156.009 106.421 155.868 106.807 155.812 C 112.355 155.443 117.864 154.637 123.284 153.4 L 111.203 141.312 L 110.977 141.312 L 110.541 140.868 C 107.101 141.77 103.557 142.214 100 142.191 C 98.46 142.191 96.899 142.05 95.387 141.973 C 74.233 139.722 57.806 121.719 57.806 99.996 C 57.806 96.319 58.221 92.852 59.128 89.448 L 48.136 78.238 C 45.225 85.122 43.73 92.522 43.741 99.996 C 43.741 110.355 46.737 119.996 51.653 128.344 C 38.842 120.795 27.339 111.222 17.588 99.996 C 25.674 90.587 34.988 82.309 45.281 75.383 L 35.169 65.278 Z  M 148.129 71.206 C 166.976 82.113 178.699 96.312 181.751 100.214 C 177.82 105.137 167.053 118.126 148.347 128.787 C 153.541 120.083 156.275 110.132 156.259 99.996 C 156.259 89.448 153.179 79.638 148.129 71.206 Z \"\r\n                          fill=\"rgb(191,191,191)\" />\r\n                      </g>\r\n                    </svg>\r\n\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <button class=\"c-btn c-btn-primary c-btn--disabled\" type=\"button\"\r\n                (click)=\"changePassword((changePasswordViewModel.newPassword && !changePasswordViewModel.passwordErrorPopover.popowerIsVisible))\"\r\n                [disabled]=\"!changePasswordViewModel.newPassword || changePasswordViewModel.loading || changePasswordViewModel.passwordErrorPopover.popowerIsVisible\"\r\n                [ngClass]=\"{'c-btn--disabled' : !changePasswordViewModel.newPassword || changePasswordViewModel.passwordErrorPopover.popowerIsVisible}\">\r\n                <span *ngIf=\"changePasswordViewModel.loading\">\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"1rem\"\r\n                    height=\"1rem\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\">\r\n                    <g transform=\"rotate(0 50 50)\">\r\n                      <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                        <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.9s\"\r\n                          repeatCount=\"indefinite\"></animate>\r\n                      </rect>\r\n                    </g>\r\n                    <g transform=\"rotate(36 50 50)\">\r\n                      <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                        <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.8s\"\r\n                          repeatCount=\"indefinite\"></animate>\r\n                      </rect>\r\n                    </g>\r\n                    <g transform=\"rotate(72 50 50)\">\r\n                      <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                        <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.7s\"\r\n                          repeatCount=\"indefinite\"></animate>\r\n                      </rect>\r\n                    </g>\r\n                    <g transform=\"rotate(108 50 50)\">\r\n                      <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                        <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6s\"\r\n                          repeatCount=\"indefinite\"></animate>\r\n                      </rect>\r\n                    </g>\r\n                    <g transform=\"rotate(144 50 50)\">\r\n                      <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                        <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5s\"\r\n                          repeatCount=\"indefinite\"></animate>\r\n                      </rect>\r\n                    </g>\r\n                    <g transform=\"rotate(180 50 50)\">\r\n                      <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                        <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.4s\"\r\n                          repeatCount=\"indefinite\"></animate>\r\n                      </rect>\r\n                    </g>\r\n                    <g transform=\"rotate(216 50 50)\">\r\n                      <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                        <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.3s\"\r\n                          repeatCount=\"indefinite\"></animate>\r\n                      </rect>\r\n                    </g>\r\n                    <g transform=\"rotate(252 50 50)\">\r\n                      <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                        <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.2s\"\r\n                          repeatCount=\"indefinite\"></animate>\r\n                      </rect>\r\n                    </g>\r\n                    <g transform=\"rotate(288 50 50)\">\r\n                      <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                        <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.1s\"\r\n                          repeatCount=\"indefinite\"></animate>\r\n                      </rect>\r\n                    </g>\r\n                    <g transform=\"rotate(324 50 50)\">\r\n                      <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                        <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"0s\"\r\n                          repeatCount=\"indefinite\">\r\n                        </animate>\r\n                      </rect>\r\n                    </g>\r\n                  </svg>\r\n                </span>\r\n                <span *ngIf=\"!changePasswordViewModel.loading\">Change password</span>\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </dd>\r\n      </div>\r\n\r\n      <div class=\"tabs-list__item d-flex-medium\">\r\n        <dt class=\"tabs-list__term\">Children:</dt>\r\n        <dd class=\"tabs-list__description tabs-list__description-js tabs-list__description--active\">\r\n          <button (click)=\"openModalAddChild(addchildmodal)\"\r\n            class=\"c-btn c-btn-additional btn-reset p-0 font-weight-bold\" type=\"button\">\r\n            <i class=\"icon icon-add-child mr-1\"></i>\r\n            Add child\r\n          </button>\r\n        </dd>\r\n      </div>\r\n    </dl>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #addchildmodal let-modal>\r\n  <div class=\"modal-header\" style=\"border-bottom: none\">\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"modal__body scroll-bar\">\r\n      <div class=\"c-modal-body\">\r\n        <h2 class=\"modal__title secondary-title\">Add child profile</h2>\r\n\r\n        <button (click)=\"onClickAddChildByCodeRoute(); modal.dismiss('Cross click')\"\r\n          class=\"c-btn c-btn-additional btn-reset mt-4 modal-btn c-btn-add-child\" type=\"button\">\r\n\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"isolation:isolate\"\r\n            viewBox=\"0 0 200 200\" width=\"52\" height=\"52\">\r\n            <g clip-path=\"url(#_clipPath_oye32lwu0VP6NXQjBPtaDOFsVPezFSiU)\">\r\n              <g />\r\n              <path\r\n                d=\" M 0 100 C 0 44.808 44.808 0 100 0 C 155.192 0 200 44.808 200 100 C 200 155.192 155.192 200 100 200 C 44.808 200 0 155.192 0 100 Z \"\r\n                fill=\"rgb(0,172,205)\" />\r\n              <path\r\n                d=\" M 79 51 L 51 51 L 51 79 L 79 79 L 79 51 Z  M 86 44 L 86 44 L 86 86 L 44 86 L 44 44 L 86 44 Z  M 58 58 L 72 58 L 72 72 L 58 72 L 58 58 Z  M 149 51 L 121 51 L 121 79 L 149 79 L 149 51 Z  M 156 44 L 156 44 L 156 86 L 114 86 L 114 44 L 156 44 Z  M 128 58 L 142 58 L 142 72 L 128 72 L 128 58 Z  M 79 121 L 51 121 L 51 149 L 79 149 L 79 121 Z  M 86 114 L 86 114 L 86 156 L 44 156 L 44 114 L 86 114 Z  M 58 128 L 72 128 L 72 142 L 58 142 L 58 128 Z  M 93 44 L 100 44 L 100 51 L 93 51 L 93 44 Z  M 100 51 L 107 51 L 107 58 L 100 58 L 100 51 Z  M 93 58 L 100 58 L 100 65 L 93 65 L 93 58 Z  M 100 65 L 107 65 L 107 72 L 100 72 L 100 65 Z  M 93 72 L 100 72 L 100 79 L 93 79 L 93 72 Z  M 100 79 L 107 79 L 107 86 L 100 86 L 100 79 Z  M 93 86 L 100 86 L 100 93 L 93 93 L 93 86 Z  M 93 100 L 100 100 L 100 107 L 93 107 L 93 100 Z  M 100 107 L 107 107 L 107 114 L 100 114 L 100 107 Z  M 93 114 L 100 114 L 100 121 L 93 121 L 93 114 Z  M 100 121 L 107 121 L 107 128 L 100 128 L 100 121 Z  M 93 128 L 100 128 L 100 135 L 93 135 L 93 128 Z  M 100 135 L 107 135 L 107 142 L 100 142 L 100 135 Z  M 93 142 L 100 142 L 100 149 L 93 149 L 93 142 Z  M 100 149 L 107 149 L 107 156 L 100 156 L 100 149 Z  M 149 100 L 156 100 L 156 107 L 149 107 L 149 100 Z  M 51 100 L 58 100 L 58 107 L 51 107 L 51 100 Z  M 58 93 L 65 93 L 65 100 L 58 100 L 58 93 Z  M 44 93 L 51 93 L 51 100 L 44 100 L 44 93 Z  M 72 93 L 79 93 L 79 100 L 72 100 L 72 93 Z  M 79 100 L 86 100 L 86 107 L 79 107 L 79 100 Z  M 86 93 L 93 93 L 93 100 L 86 100 L 86 93 Z  M 107 100 L 114 100 L 114 107 L 107 107 L 107 100 Z  M 114 93 L 121 93 L 121 100 L 114 100 L 114 93 Z  M 121 100 L 128 100 L 128 107 L 121 107 L 121 100 Z  M 128 93 L 135 93 L 135 100 L 128 100 L 128 93 Z  M 135 100 L 142 100 L 142 107 L 135 107 L 135 100 Z  M 142 93 L 149 93 L 149 100 L 142 100 L 142 93 Z  M 149 114 L 156 114 L 156 121 L 149 121 L 149 114 Z  M 107 114 L 114 114 L 114 121 L 107 121 L 107 114 Z  M 114 107 L 121 107 L 121 114 L 114 114 L 114 107 Z  M 121 114 L 128 114 L 128 121 L 121 121 L 121 114 Z  M 135 114 L 142 114 L 142 121 L 135 121 L 135 114 Z  M 142 107 L 149 107 L 149 114 L 142 114 L 142 107 Z  M 149 128 L 156 128 L 156 135 L 149 135 L 149 128 Z  M 107 128 L 114 128 L 114 135 L 107 135 L 107 128 Z  M 114 121 L 121 121 L 121 128 L 114 128 L 114 121 Z  M 128 121 L 135 121 L 135 128 L 128 128 L 128 121 Z  M 135 128 L 142 128 L 142 135 L 135 135 L 135 128 Z  M 142 121 L 149 121 L 149 128 L 142 128 L 142 121 Z  M 149 142 L 156 142 L 156 149 L 149 149 L 149 142 Z  M 114 135 L 121 135 L 121 142 L 114 142 L 114 135 Z  M 121 142 L 128 142 L 128 149 L 121 149 L 121 142 Z  M 128 135 L 135 135 L 135 142 L 128 142 L 128 135 Z  M 135 142 L 142 142 L 142 149 L 135 149 L 135 142 Z  M 114 149 L 121 149 L 121 156 L 114 156 L 114 149 Z  M 128 149 L 135 149 L 135 156 L 128 156 L 128 149 Z  M 142 149 L 149 149 L 149 156 L 142 156 L 142 149 Z \"\r\n                fill=\"rgb(255,255,255)\" />\r\n            </g>\r\n          </svg>\r\n\r\n          <span class=\"ml-1\" style=\"color: #191b1c;\">Add profile by Id</span>\r\n        </button>\r\n        <br>\r\n\r\n        <button (click)=\"onClickCreateChildRoute(); modal.dismiss('Cross click')\"\r\n          class=\"c-btn c-btn-additional btn-reset mt-2 c-btn-add-child modal-btn\" type=\"button\">\r\n          <svg width=\"52\" height=\"52\" viewBox=\"0 0 52 52\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <mask id=\"mask0\" mask-type=\"alpha\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"52\" height=\"52\">\r\n              <circle cx=\"26\" cy=\"26\" r=\"25.5\" fill=\"#C4C4C4\" stroke=\"#191B1C\" />\r\n            </mask>\r\n            <g mask=\"url(#mask0)\">\r\n              <circle cx=\"26\" cy=\"26\" r=\"26\" fill=\"#00ACCD\" />\r\n            </g>\r\n            <path\r\n              d=\"M19.3337 24.6665C18.5457 24.6665 17.7655 24.5113 17.0376 24.2098C16.3096 23.9083 15.6482 23.4663 15.091 22.9091C14.5339 22.352 14.0919 21.6906 13.7904 20.9626C13.4889 20.2347 13.3337 19.4544 13.3337 18.6665C13.3337 17.8786 13.4889 17.0984 13.7904 16.3704C14.0919 15.6424 14.5339 14.981 15.091 14.4239C15.6482 13.8667 16.3096 13.4248 17.0376 13.1232C17.7655 12.8217 18.5457 12.6665 19.3337 12.6665C20.925 12.6665 22.4511 13.2986 23.5763 14.4239C24.7015 15.5491 25.3337 17.0752 25.3337 18.6665C25.3337 20.2578 24.7015 21.7839 23.5763 22.9091C22.4511 24.0344 20.925 24.6665 19.3337 24.6665ZM33.3337 29.9998C31.9192 29.9998 30.5626 29.4379 29.5624 28.4377C28.5622 27.4375 28.0003 26.081 28.0003 24.6665C28.0003 23.252 28.5622 21.8955 29.5624 20.8953C30.5626 19.8951 31.9192 19.3332 33.3337 19.3332C34.7481 19.3332 36.1047 19.8951 37.1049 20.8953C38.1051 21.8955 38.667 23.252 38.667 24.6665C38.667 26.081 38.1051 27.4375 37.1049 28.4377C36.1047 29.4379 34.7481 29.9998 33.3337 29.9998ZM33.3337 31.3332C34.925 31.3332 36.4511 31.9653 37.5763 33.0905C38.7015 34.2157 39.3337 35.7419 39.3337 37.3332V37.9998H27.3337V37.3332C27.3337 35.7419 27.9658 34.2157 29.091 33.0905C30.2162 31.9653 31.7424 31.3332 33.3337 31.3332ZM19.3337 25.9998C20.2091 25.9998 21.076 26.1723 21.8849 26.5073C22.6937 26.8423 23.4286 27.3334 24.0477 27.9525C24.6668 28.5715 25.1578 29.3064 25.4929 30.1153C25.8279 30.9241 26.0003 31.791 26.0003 32.6665V37.9998H12.667V32.6665C12.667 30.8984 13.3694 29.2027 14.6196 27.9525C15.8699 26.7022 17.5655 25.9998 19.3337 25.9998Z\"\r\n              fill=\"white\" />\r\n          </svg>\r\n          <span class=\"ml-1\" style=\"color: #191b1c;\">Create new profile</span>\r\n        </button>\r\n        <div style=\"height: 30px;\"></div>\r\n\r\n      </div>\r\n      <div class=\"modal-footer\" style=\"border-top: none;\">\r\n        &nbsp;\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<ng-template #deletefacilitymodal let-modal class=\"delete-facility--modal\">\r\n  <div class=\"modal-header\" style=\"border-bottom: none\">\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"modal__body scroll-bar\">\r\n      <div class=\"c-modal-body\">\r\n        <h2 class=\"modal__title secondary-title font-size--title\">Do you really want to delete this facility?</h2>\r\n        \r\n        <button class=\"c-btn c-btn-additional btn-reset mt-4 modal-btn c-btn-add-child\" type=\"button\">\r\n        <span class=\"ml-1\" style=\"color: #191b1c;\">{{facilityToDelete.name}}</span>\r\n      </button>\r\n      <br>\r\n\r\n      \r\n        <button (click)=\"deleteFacility(); modal.dismiss('Cross click')\"\r\n          class=\"c-btn c-btn-additional btn-reset mt-5 c-btn-delete-facility modal-btn\" type=\"button\">\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"isolation:isolate\"\r\n          viewBox=\"0 0 20 20\" width=\"20\" height=\"20\" (click)=\"openModalDeleteFacility(deletefacilitymodal, facility)\">\r\n          <defs>\r\n            <clipPath id=\"_clipPath_ddpELzTS1SfwabRWmnqGYEY0T8Sw8jQm\">\r\n              <rect width=\"20\" height=\"20\" />\r\n            </clipPath>\r\n          </defs>\r\n          <g clip-path=\"url(#_clipPath_ddpELzTS1SfwabRWmnqGYEY0T8Sw8jQm)\">\r\n            <path\r\n              d=\" M 10 20 C 4.477 20 0 15.523 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 Z  M 10 18 C 12.122 18 14.157 17.157 15.657 15.657 C 17.157 14.157 18 12.122 18 10 C 18 7.878 17.157 5.843 15.657 4.343 C 14.157 2.843 12.122 2 10 2 C 7.878 2 5.843 2.843 4.343 4.343 C 2.843 5.843 2 7.878 2 10 C 2 12.122 2.843 14.157 4.343 15.657 C 5.843 17.157 7.878 18 10 18 Z  M 10 8.586 L 12.828 5.757 L 14.243 7.172 L 11.414 10 L 14.243 12.828 L 12.828 14.243 L 10 11.414 L 7.172 14.243 L 5.757 12.828 L 8.586 10 L 5.757 7.172 L 7.172 5.757 L 10 8.586 L 10 8.586 Z \"\r\n              fill=\"rgb(214,67,60)\" />\r\n          </g>\r\n        </svg>\r\n          <span class=\"ml-1\">Delete facility</span>\r\n        </button>\r\n\r\n      </div>\r\n      <div class=\"modal-footer\" style=\"border-top: none;\">\r\n        &nbsp;\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/my-results/my-result.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/my-results/my-result.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileMyResultsMyResultComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"tabs__body\">\r\n  <div class=\"tabs__panel tabs__results results d-block\">\r\n    <div *ngIf=\"loading\" class=\"card-loading primary-color\">\r\n      <p class=\"\">Please, wait</p>\r\n      <p>\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"2rem\" height=\"2rem\"\r\n          viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\">\r\n          <g transform=\"rotate(0 50 50)\">\r\n            <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n              <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.9s\"\r\n                repeatCount=\"indefinite\"></animate>\r\n            </rect>\r\n          </g>\r\n          <g transform=\"rotate(36 50 50)\">\r\n            <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n              <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.8s\"\r\n                repeatCount=\"indefinite\"></animate>\r\n            </rect>\r\n          </g>\r\n          <g transform=\"rotate(72 50 50)\">\r\n            <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n              <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.7s\"\r\n                repeatCount=\"indefinite\"></animate>\r\n            </rect>\r\n          </g>\r\n          <g transform=\"rotate(108 50 50)\">\r\n            <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n              <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6s\"\r\n                repeatCount=\"indefinite\"></animate>\r\n            </rect>\r\n          </g>\r\n          <g transform=\"rotate(144 50 50)\">\r\n            <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n              <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5s\"\r\n                repeatCount=\"indefinite\"></animate>\r\n            </rect>\r\n          </g>\r\n          <g transform=\"rotate(180 50 50)\">\r\n            <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n              <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.4s\"\r\n                repeatCount=\"indefinite\"></animate>\r\n            </rect>\r\n          </g>\r\n          <g transform=\"rotate(216 50 50)\">\r\n            <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n              <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.3s\"\r\n                repeatCount=\"indefinite\"></animate>\r\n            </rect>\r\n          </g>\r\n          <g transform=\"rotate(252 50 50)\">\r\n            <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n              <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.2s\"\r\n                repeatCount=\"indefinite\"></animate>\r\n            </rect>\r\n          </g>\r\n          <g transform=\"rotate(288 50 50)\">\r\n            <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n              <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.1s\"\r\n                repeatCount=\"indefinite\"></animate>\r\n            </rect>\r\n          </g>\r\n          <g transform=\"rotate(324 50 50)\">\r\n            <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n              <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"0s\" repeatCount=\"indefinite\">\r\n              </animate>\r\n            </rect>\r\n          </g>\r\n        </svg>\r\n      </p>\r\n    </div>\r\n\r\n    <div class=\"\" *ngIf=\"!loading\">\r\n      <div class=\"dropdown-wrap\">\r\n        <div class=\"dropdown-profile d-inline-block-presmall\">\r\n          <ng-select style=\"min-width: 200px;\" appearance=\"outline\" [searchable]=\"true\" name=\"month\"\r\n            placeholder=\"Select month\" (change)=\"monthOnChange($event)\" [(ngModel)]=\"selectedMonthId\">\r\n            <ng-option *ngFor=\"let month of monthes\" value=\"{{month.id}}\">{{month.name}}</ng-option>\r\n          </ng-select>\r\n        </div>\r\n\r\n        <div *ngIf=\"hasChildren\" class=\"dropdown-profile d-inline-block-presmall ml-5\">\r\n          <ng-select class=\"custom\" style=\"min-width: 200px;\" appearance=\"outline\" [searchable]=\"true\" name=\"identitiy\"\r\n            placeholder=\"Select identity\" (change)=\"onChangeDropdownIdentity($event)\"\r\n            [(ngModel)]=\"identityDropdownModel\">\r\n            <ng-option *ngFor=\"let identity of identities\" value=\"{{identity.id}}\">{{identity.firstName}}\r\n              {{identity.lastName}}</ng-option>\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"haveNoResults\" class=\"card-loading primary-color \">\r\n        <p class=\"\">You have no results in your passport</p>\r\n        <p>\r\n          <svg class=\"no-result--label\" width=\"220px\" height=\"220px\" viewBox=\"0 0 1524 1252\" fill=\"none\"\r\n            xmlns=\"http://www.w3.org/2000/svg\">\r\n            <g clip-path=\"url(#clip0)\">\r\n              <path\r\n                d=\"M1524 761.726C1524 1182.41 1182.84 1246.46 762 1246.46C341.159 1246.46 0 1182.41 0 761.726C0 341.036 341.159 0 762 0C1182.84 0 1524 341.036 1524 761.726Z\"\r\n                fill=\"url(#paint0_linear)\" />\r\n              <path\r\n                d=\"M398.677 882.825L353.788 910.873C293.446 851.752 271.885 815.87 248.629 730.075L260.035 725.128L287.683 783.933L267.878 697.196L280.628 695.567L311.548 771.912L297.591 685.418L312.739 684.981L340.498 767.712L323.673 693.063L338.821 692.626C361.275 734.13 374.806 757.275 387.45 802.63C385.784 796.342 384.081 785.983 390.154 757.885L407.7 758.633C407.63 801.035 415.511 837.952 398.677 882.825Z\"\r\n                fill=\"#F8D89B\" />\r\n              <path\r\n                d=\"M994.232 585.225L997.845 585.536C1005.59 563.099 988.757 434.087 927.032 344.34C854.672 250.914 725.155 280.668 669.509 349.51C617.832 413.434 602.703 570.783 608.283 585.536C760.173 564.977 844.946 572.312 994.232 585.225Z\"\r\n                fill=\"#191B1C\" />\r\n              <path\r\n                d=\"M954.808 579.901L955.09 579.929C961.07 562.318 946.717 455.446 899.052 385.005C843.179 311.676 743.171 335.03 700.206 389.062C660.299 439.236 647.769 568.345 652.08 579.929C770.21 563.675 837.964 569.63 954.808 579.901Z\"\r\n                fill=\"black\" />\r\n              <path\r\n                d=\"M882.145 712.026C863.236 662.19 863.402 638.718 859.7 585.535H753.087C753.087 585.535 753.087 669.674 730.643 712.026H882.145Z\"\r\n                fill=\"#E9D09F\" />\r\n              <path\r\n                d=\"M725.65 671.319C799.639 733.105 833.178 726.817 884.263 671.319L1012.21 711.638C1029.19 716.989 1042.56 730.169 1048.16 747.065L1153.27 1064.51C1158.02 1078.86 1150.39 1094.37 1136.12 1099.36L1049.6 1129.63L1014.46 1031.61C1021.07 1114.31 1022.99 1159.83 1014.46 1235.46H621.486C607.817 1112.73 606.186 1042.8 611.927 916.478L541.589 1105.6C541.205 1106.63 540.481 1107.52 539.549 1108.1C506.706 1128.71 487.782 1140.74 444.307 1107.8C443.787 1107.41 443.335 1106.9 443.007 1106.34L325.668 905.26L421.059 871.606L477.193 950.133L532.777 758.865C537.916 741.176 551.513 727.199 569.055 721.571L725.65 671.319Z\"\r\n                fill=\"#FFB000\" />\r\n              <path d=\"M1100.1 785.018L856.147 742.594L696.094 1043.79L916.747 1079.14L1100.1 785.018Z\"\r\n                fill=\"#00ACCD\" />\r\n              <path opacity=\"0.2\"\r\n                d=\"M857.849 1019.19C859.173 1021.58 861.063 1023.61 863.357 1025.1L1015.94 1124.02L1021.55 995.011L926.152 926.761L926.113 926.816L909.321 916.479L899.036 930.5C897.129 909.343 885.719 892.862 873.604 875.368C866.727 865.44 859.628 855.186 853.903 843.558L837.86 850.693C845.54 881.245 852.146 888.564 856.441 893.322L856.486 893.372C852.961 889.588 810.993 854.294 810.993 854.294L780.258 860.388L752.205 888.436L740.994 905.261V909.825C741 923.775 745.982 937.558 756.666 946.532C779.671 965.872 800.619 971.949 820.242 977.638C832.246 981.123 843.756 984.463 854.934 990.607L853.875 992.053C850.04 997.277 849.592 1004.25 852.728 1009.92L857.849 1019.19Z\"\r\n                fill=\"#191B1C\" />\r\n              <path\r\n                d=\"M898.101 927.697L875.657 983.793C840.306 948.449 802.577 959.6 756.635 920.345C746.023 911.277 741.007 897.51 741.002 883.561V882.824L752.213 865.994L797.102 821.122L810.906 828.257L808.324 837.952C808.324 837.952 853.911 867.944 856.599 871.046C852.309 866.293 845.643 859.164 837.867 828.257L853.911 821.122C872.642 859.164 906.115 882.525 898.101 927.697Z\"\r\n                fill=\"#F8D89B\" />\r\n              <path\r\n                d=\"M864.436 989.4L926.16 904.324C926.16 904.324 1149.17 1006.05 1155.67 1035.7C1162.17 1065.36 1156.97 1076.81 1145 1097.84C1126.47 1130.37 1086.37 1128.14 1049.6 1129.63C1012.82 1131.12 864.436 989.4 864.436 989.4Z\"\r\n                fill=\"#FFBD2C\" />\r\n              <path d=\"M338.936 935.524L325.668 907.714L424.5 863.002L437.768 890.812L338.936 935.524Z\"\r\n                fill=\"#E38E00\" />\r\n              <path d=\"M864.43 989.399L853.213 972.57L909.329 894.042L926.697 904.734L864.43 989.399Z\" fill=\"#E38E00\" />\r\n              <path\r\n                d=\"M711.453 676.056L737.5 664.206C789.576 702.132 820.355 704.503 877.17 666.577L910.31 676.056C815.617 742.429 777.744 725.837 711.453 676.056Z\"\r\n                fill=\"#E38E00\" />\r\n              <path\r\n                d=\"M713.291 531.078C720.601 529.153 723.326 515.45 719.379 500.472C715.431 485.493 706.306 474.911 698.996 476.836C691.687 478.761 688.962 492.464 692.909 507.442C696.857 522.421 705.982 533.003 713.291 531.078Z\"\r\n                fill=\"#E9D09F\" />\r\n              <path\r\n                d=\"M905.125 531.078C897.815 529.153 895.09 515.45 899.037 500.472C902.985 485.493 912.11 474.911 919.419 476.836C926.729 478.761 929.454 492.464 925.507 507.442C921.559 522.421 912.434 533.003 905.125 531.078Z\"\r\n                fill=\"#E9D09F\" />\r\n              <path\r\n                d=\"M910.202 467.743C910.202 551.388 868.361 619.19 809.197 619.19C747.472 619.19 719.419 554.285 708.197 467.743C708.197 384.1 754.577 316.293 811.785 316.293C868.999 316.293 910.202 384.1 910.202 467.743Z\"\r\n                fill=\"#F8D89B\" />\r\n              <path\r\n                d=\"M736.254 439.696H674.529L703.241 345.675L803.587 305.075L886.975 333.922L921.428 439.696H758.698L752.957 386.809L736.254 439.696Z\"\r\n                fill=\"#191B1C\" />\r\n              <path d=\"M773.708 469.687C765.295 460.725 742.302 460.203 730.598 468.707\" stroke=\"#191B1C\"\r\n                stroke-width=\"6\" stroke-linecap=\"round\" />\r\n              <path d=\"M843.105 468.983C851.668 460.16 874.666 460.014 886.226 468.709\" stroke=\"#191B1C\"\r\n                stroke-width=\"6\" stroke-linecap=\"round\" />\r\n              <path\r\n                d=\"M754.042 475.448C760.763 475.448 766.21 478.601 766.209 482.49C766.207 486.38 760.756 489.533 754.035 489.533C747.314 489.533 741.867 486.38 741.869 482.49C741.871 478.601 747.321 475.448 754.042 475.448Z\"\r\n                fill=\"#191B1C\" />\r\n              <path\r\n                d=\"M862.825 475.448C856.104 475.448 850.657 478.601 850.658 482.49C850.66 486.38 856.111 489.533 862.832 489.533C869.553 489.533 875 486.38 874.999 482.49C874.997 478.601 869.546 475.448 862.825 475.448Z\"\r\n                fill=\"#191B1C\" />\r\n              <path\r\n                d=\"M785.875 557.487C785.875 568.711 802.711 579.929 813.933 579.929C826.208 579.929 841.986 563.099 847.6 551.881C826.552 558.606 813.933 568.711 785.875 557.487Z\"\r\n                fill=\"#CC7655\" />\r\n              <path\r\n                d=\"M794.784 524.161L802.703 484.57H813.925L821.845 524.161C823.557 532.698 817.023 540.663 808.311 540.663C799.605 540.663 793.071 532.698 794.784 524.161Z\"\r\n                fill=\"#EFD39C\" />\r\n              <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                d=\"M471.808 474.491C482.133 456.801 488.049 436.223 488.049 414.265C488.049 348.169 434.453 294.588 368.339 294.588C302.225 294.588 248.629 348.169 248.629 414.265C248.629 480.36 302.225 533.941 368.339 533.941C395.562 533.941 420.662 524.857 440.772 509.556L499.558 533.941L471.808 474.491Z\"\r\n                fill=\"#00ACCD\" />\r\n              <path\r\n                d=\"M367.659 385.831C378.323 360.414 406.613 358.275 421.352 372.648C436.084 387.028 436.592 409.928 422.889 424.865L367.659 478.706L316.384 429.753C314.648 428.095 312.964 426.365 311.471 424.508H321.863C323.615 424.508 325.194 423.478 325.86 421.901L333.53 403.768L345.205 445.439C346.268 449.234 351.622 449.661 353.306 446.085L367.456 416.033L375.453 432.714C376.722 435.361 380.306 435.976 382.428 433.91L392.087 424.508H400.686C402.523 424.508 404.012 423.058 404.012 421.27C404.012 419.482 402.523 418.032 400.686 418.032H391.122C389.975 418.032 388.876 418.476 388.065 419.265L380.074 427.044L371.355 408.854C369.796 405.603 365.042 405.619 363.507 408.88L349.933 437.709L338.15 395.649C337.065 391.774 331.552 391.44 329.981 395.154L320.304 418.032H307.503C307.475 417.967 307.448 417.901 307.421 417.835C301.444 403.226 302.649 383.682 313.979 372.648C328.731 358.294 357.008 359.952 367.659 385.831Z\"\r\n                fill=\"white\" />\r\n            </g>\r\n            <defs>\r\n              <linearGradient id=\"paint0_linear\" x1=\"762\" y1=\"0\" x2=\"762\" y2=\"1246.46\" gradientUnits=\"userSpaceOnUse\">\r\n                <stop stop-color=\"#F2F9FB\" stop-opacity=\"0\" />\r\n                <stop offset=\"1\" stop-color=\"#F2F9FB\" />\r\n              </linearGradient>\r\n              <clipPath id=\"clip0\">\r\n                <rect width=\"1524\" height=\"1252\" fill=\"white\" />\r\n              </clipPath>\r\n            </defs>\r\n          </svg>\r\n        </p>\r\n      </div>\r\n\r\n      <div>\r\n        <div class=\"my-check-js\" *ngFor=\"let check of checks\">\r\n          <div id=\"{{check.id}}\" (click)=\"onChooseResult(check)\"\r\n            class=\"card-result card-result--small mb-1 position-relative overflow-hidden  card-test-js\"\r\n            [ngClass]=\"{'card-result--success': check.result === 0, 'card-result--warning': check.result === 1, 'card-result--danger': check.result === 2}\">\r\n\r\n            <button class=\"card-result__btn btn-reset card-result__btn-js \" type=\"button\"></button>\r\n\r\n            <div class=\"card-result__heading d-flex align-items-center justify-content-between \">\r\n              <svg class=\"card-result__logo\" width=\"210\" height=\"35\" viewBox=\"0 0 210 35\" fill=\"none\"\r\n                xmlns=\"http://www.w3.org/2000/svg\">\r\n                <path class=\"svg-icon__img\"\r\n                  d=\"M18.8 6.8c3.1-7.8 11.5-8.4 15.8-4C39 7 39.1 14 35.1 18.5L18.8 35 3.7 20.1l-1.5-1.6h3.1c.5 0 1-.3 1.2-.8l2.2-5.5L12.2 25a1.3 1.3 0 002.4.2l4.1-9.2 2.4 5.1c.4.8 1.4 1 2 .4l2.9-2.9h2.5a1 1 0 000-2h-2.8c-.3 0-.6.2-.9.4l-2.3 2.4-2.6-5.5c-.5-1-1.9-1-2.3 0l-4 8.7L10 9.7c-.3-1.1-2-1.2-2.4-.1l-2.9 7H1.1v-.1C-.8 12-.5 6 3 2.7c4.3-4.3 12.7-3.8 15.8 4z\" />\r\n                <path class=\"svg-icon__text\"\r\n                  d=\"M58.7 8.8h4.7v16.8h-4.7v-6.4h-5v6.4H49V8.8h4.7V15h5v-6zM79.6 19l-.1 1.2h-9.7c.2.8.5 1.3 1 1.7.4.4 1 .6 1.7.6.5 0 1-.1 1.4-.3l1-1h4.4a6.5 6.5 0 01-2.5 3.6 7.2 7.2 0 01-4.3 1.3c-1.3 0-2.5-.3-3.6-1-1-.5-2-1.4-2.5-2.4a7 7 0 01-1-3.6c0-2 .7-3.6 2-4.9a7 7 0 015.1-2c1 0 2 .2 2.9.6a6.5 6.5 0 014.2 6.2zm-7.1-3.3c-.7 0-1.2.2-1.6.6-.5.3-.8.8-1 1.4h5.3c-.4-1.3-1.3-2-2.7-2zM92 12.7h3.4v13h-3.5l-.3-1a6 6 0 01-4 1.4 7 7 0 01-3.5-1c-1-.5-1.8-1.3-2.4-2.4-.6-1-.9-2.2-.9-3.6 0-2 .7-3.6 2-4.9 1.2-1.3 2.9-2 4.8-2a6 6 0 014 1.5l.5-1zm-5.8 8.6c.5.5 1.2.8 2 .8.9 0 1.6-.3 2.1-.8.6-.6.8-1.3.8-2.1a2.9 2.9 0 00-2.9-3c-.8 0-1.5.3-2 .8-.6.6-.9 1.3-.9 2.2 0 .8.3 1.5.9 2zM98.2 25.6V8h4.5v17.6h-4.5zM112.5 21.7h1.7v4h-3c-1.5 0-2.6-.5-3.4-1.3-.9-.8-1.3-2-1.3-3.4v-4.9h-2.3v-1l5.8-6.2h.9v3.8h3.2V16H111v4.1c0 .5.1.9.4 1.1.3.3.6.4 1 .4zM124.2 12.3c1.5 0 2.7.5 3.6 1.5.9 1 1.3 2.4 1.3 4v7.8h-4.5v-7.3c0-1.5-.5-2.2-1.6-2.2a2 2 0 00-1.6.7c-.4.4-.6 1-.6 2v6.8h-4.5V8h4.5v5.5c1-.8 2.1-1.2 3.4-1.2zM140 26c-1.8 0-3.3-.3-4.6-1a8.4 8.4 0 01-3.2-3.3 8.9 8.9 0 01-1.2-4.5c0-1.6.4-3.1 1.2-4.5a8.3 8.3 0 013.2-3.1 9.2 9.2 0 014.5-1.2 8.4 8.4 0 018.5 7.2h-4.7c-.3-.9-.7-1.6-1.4-2-.7-.6-1.5-.9-2.4-.9-1.2 0-2.1.5-3 1.3-.7.9-1 2-1 3.2 0 1.3.3 2.4 1 3.3.9.8 1.8 1.2 3 1.2 1 0 1.8-.3 2.5-.8.6-.6 1.1-1.3 1.3-2.3h4.8c-.4 2.3-1.3 4-2.9 5.4a8.4 8.4 0 01-5.7 2zM158.4 12.3c1.5 0 2.7.5 3.5 1.5 1 1 1.4 2.4 1.4 4v7.8h-4.5v-7.3c0-1.5-.5-2.2-1.7-2.2a2 2 0 00-1.6.7c-.4.4-.6 1-.6 2v6.8h-4.4V8h4.4v5.5c1-.8 2.2-1.2 3.5-1.2zM179.3 19v1.2h-9.7c.1.8.4 1.3.9 1.7.4.4 1 .6 1.7.6.5 0 1-.1 1.4-.3l1-1h4.4a6.5 6.5 0 01-2.5 3.6 7.2 7.2 0 01-4.3 1.3c-1.3 0-2.5-.3-3.6-1-1-.5-1.9-1.4-2.5-2.4a7 7 0 01-1-3.6c0-2 .7-3.6 2-4.9a7 7 0 015.1-2c1 0 2 .2 2.9.6a6.5 6.5 0 014.2 6.2zm-7-3.3c-.7 0-1.3.2-1.7.6-.5.3-.8.8-1 1.4h5.3c-.4-1.3-1.3-2-2.7-2zM187.7 26c-1 0-2-.1-2.8-.5-1-.3-1.7-.8-2.3-1.4a7.1 7.1 0 01-2-5c0-2 .6-3.6 2-4.9 1.3-1.3 3-2 5.1-2 1.9 0 3.4.6 4.6 1.7 1.3 1 2 2.4 2.3 4.1h-4.3c-.2-.5-.6-1-1-1.2-.5-.4-1-.5-1.6-.5-.8 0-1.4.2-2 .8a3 3 0 00-.7 2c0 .9.3 1.6.8 2.1.5.6 1.1.9 2 .9.5 0 1-.2 1.5-.5.5-.4.8-.8 1-1.4h4.4c-.3 1.7-1 3.2-2.3 4.2a7 7 0 01-4.7 1.7zM209.7 25.6h-5.2l-3.3-5.4v5.4h-4.4V8h4.4v9.8l3.1-5.1h5l-4 6.2 4.4 6.7z\" />\r\n              </svg>\r\n\r\n              <div class=\"card-result__body\">\r\n                <div class=\"card-result__text-holder text-secondary\">\r\n                  <time class=\"card-result__time\" datetime=\"2020-01-06 15:15\">{{check.dateTimeLocaleString}}</time>\r\n                  <span>{{check.facilityName}}</span>\r\n                </div>\r\n                <div class=\"text-holder mb-medium-0\">\r\n\r\n                  <span *ngIf=\"check.result === 0\">HealthCheck passed</span>\r\n                  <span *ngIf=\"check.result === 1\">HealthCheck warning</span>\r\n                  <span *ngIf=\"check.result === 2\">HealthCheck alert</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-result__link-holder\">\r\n                <a id=\"icon-download\" class=\"card-result__link position-relative с-text-primary\"\r\n                  (click)=\"downloadQRCode(check);$event.stopPropagation()\">\r\n                  <i class=\"icon icon-download\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-result__inner\">\r\n\r\n              <div class=\"card-result__body\">\r\n                <div class=\"card-result__text-holder mb-1 mb-medium-2 text-secondary\">\r\n                  <time class=\"card-result__time\" datetime=\"2020-01-06 15:15\">{{check.dateTimeLocaleString}}</time>\r\n                  <span>{{check.facilityName}}</span>\r\n                </div>\r\n                <h2 class=\"secondary-title card-result__title\">{{currentIdentitiy.firstName}} {{currentIdentitiy.lastName}}</h2>\r\n                <div class=\"text-holder mb-presmall-5 mb-medium-0\">\r\n                  <span *ngIf=\"check.result === 0\">HealthCheck passed</span>\r\n                  <span *ngIf=\"check.result === 1\">HealthCheck warning</span>\r\n                  <span *ngIf=\"check.result === 2\">HealthCheck alert</span>\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"qr-holder background--properties\" style=\"background-image: url('../../assets/images/QR.png')\">\r\n          </div> -->\r\n              <svg *ngIf=\"cardLoading\" style=\"margin-top: auto; margin-left: auto; margin-right: auto;\"\r\n                xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"2rem\" height=\"2rem\"\r\n                viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\">\r\n                <g transform=\"rotate(0 50 50)\">\r\n                  <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n                    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.9s\"\r\n                      repeatCount=\"indefinite\"></animate>\r\n                  </rect>\r\n                </g>\r\n                <g transform=\"rotate(36 50 50)\">\r\n                  <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n                    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.8s\"\r\n                      repeatCount=\"indefinite\"></animate>\r\n                  </rect>\r\n                </g>\r\n                <g transform=\"rotate(72 50 50)\">\r\n                  <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n                    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.7s\"\r\n                      repeatCount=\"indefinite\"></animate>\r\n                  </rect>\r\n                </g>\r\n                <g transform=\"rotate(108 50 50)\">\r\n                  <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n                    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6s\"\r\n                      repeatCount=\"indefinite\"></animate>\r\n                  </rect>\r\n                </g>\r\n                <g transform=\"rotate(144 50 50)\">\r\n                  <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n                    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5s\"\r\n                      repeatCount=\"indefinite\"></animate>\r\n                  </rect>\r\n                </g>\r\n                <g transform=\"rotate(180 50 50)\">\r\n                  <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n                    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.4s\"\r\n                      repeatCount=\"indefinite\"></animate>\r\n                  </rect>\r\n                </g>\r\n                <g transform=\"rotate(216 50 50)\">\r\n                  <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n                    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.3s\"\r\n                      repeatCount=\"indefinite\"></animate>\r\n                  </rect>\r\n                </g>\r\n                <g transform=\"rotate(252 50 50)\">\r\n                  <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n                    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.2s\"\r\n                      repeatCount=\"indefinite\"></animate>\r\n                  </rect>\r\n                </g>\r\n                <g transform=\"rotate(288 50 50)\">\r\n                  <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n                    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.1s\"\r\n                      repeatCount=\"indefinite\"></animate>\r\n                  </rect>\r\n                </g>\r\n                <g transform=\"rotate(324 50 50)\">\r\n                  <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#00ACCD\">\r\n                    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"0s\"\r\n                      repeatCount=\"indefinite\">\r\n                    </animate>\r\n                  </rect>\r\n                </g>\r\n              </svg>\r\n              <div *ngIf=\"check.qrCode && !cardLoading\">\r\n                <div class=\"qrcodeImage\">\r\n                  <qrcode id=\"qrcode-{{check.id}}\" [elementType]=\"check.qrCode.elementType\" [level]=\"check.qrCode.level\"\r\n                    [qrdata]=\"check.qrCode.qrdata\" [scale]=\"check.qrCode.scale\" [width]=\"check.qrCode.width\"></qrcode>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"intro\">\r\n  <div class=\"container\">\r\n    <div class=\"intro__inner-profile intro__inner-indent--small\">\r\n      <div class=\"holder--bottom-indent d-flex align-items-center justify-content-between\">\r\n        <h2 class=\"secondary-title mb-0\" *ngIf=\"user\">{{user.firstName}} {{user.lastName}}</h2>\r\n        <a href=\"edit-profile.html\" class=\"btn-additional d-flex align-items-center с-text-primary font-weight-semi\"\r\n          routerLink=\"/edit-profile\">\r\n          <i class=\"icon icon-pencil\"></i>\r\n          <span class=\"link-edit__text\">Edit Profile</span>\r\n        </a>\r\n      </div>\r\n\r\n      <div class=\"tabs\">\r\n        <ul class=\"tabs__items d-flex align-items-center holder--bottom-indent\">\r\n          <li class=\"tabs__item\">\r\n            <a class=\"tabs__link tabs__link--active my-profile-tab-js\" data-tab-name=\"profile\"\r\n              routerLink=\"/profile/my-profile\">\r\n              <i class=\"icon icon-person\"></i>\r\n              My profile\r\n            </a>\r\n          </li>\r\n          <li *ngIf=\"hasChildren\" class=\"tabs__item\">\r\n            <a class=\"tabs__link children-tab-js\" data-tab-name=\"profile\"\r\n              routerLink=\"/profile/children\">\r\n              <i class=\"icon icon-parent-child\"></i>\r\n              Children\r\n            </a>\r\n          </li>\r\n          <li class=\"tabs__item\">\r\n            <a class=\"tabs__link my-result-tab-js\" data-tab-name=\"results\" routerLink=\"/profile/my-result\" [state]=\"{ data: {value: '/profile/my-result'}}\">\r\n              <i class=\"icon icon-folder\"></i>\r\n              Passport\r\n            </a>\r\n          </li>\r\n        </ul>\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<!-- <div class=\"c-btn--float-background\">\r\n  <div class=\"c-btn--float\">\r\n    <svg class=\"btn-float--content float-anim\" viewBox=\"0 0 38 35\" fill=\"none\"\r\n      xmlns=\"http://www.w3.org/2000/svg\">\r\n      <path\r\n        d=\"M18.7998 6.75193C21.9431 -0.97907 30.2819 -1.62948 34.6263 2.74215C38.9688 7.1157 39.1185 14.081 35.0793 18.6242L18.7998 35L3.68618 20.1107C3.17441 19.6066 2.67792 19.0802 2.23794 18.5154H5.30089C5.8173 18.5154 6.28267 18.2023 6.47929 17.7227L8.74005 12.2076L12.1812 24.8818C12.4946 26.0361 14.0729 26.166 14.5692 25.0783L18.7399 15.9377L21.0971 21.0114C21.4711 21.8164 22.5277 22.0034 23.153 21.3752L26.0001 18.5154H28.5349C29.0763 18.5154 29.5152 18.0745 29.5152 17.5307C29.5152 16.9869 29.0763 16.546 28.5349 16.546H25.7158C25.3778 16.546 25.0537 16.6809 24.8147 16.9209L22.4594 19.2868L19.8891 13.7543C19.4298 12.7655 18.0284 12.7703 17.5758 13.7623L13.575 22.5305L10.1017 9.73797C9.78175 8.55944 8.15687 8.45784 7.69384 9.58739L4.84134 16.546H1.06816C1.06002 16.526 1.05196 16.506 1.044 16.4859C-0.71787 12.0425 -0.362509 6.09832 2.97719 2.74215C7.32544 -1.62369 15.6603 -1.11931 18.7998 6.75193Z\"\r\n        fill=\"#ffffff\" />\r\n    </svg>\r\n  </div>\r\n</div> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/restore-password/restore-password.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restore-password/restore-password.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRestorePasswordRestorePasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"intro\">\r\n  <div class=\"container\">\r\n    <div class=\"intro__inner--vertical-align intro__inner-restore\">\r\n      <h2 class=\"secondary-title\">Reset password</h2>\r\n\r\n      <div class=\"text-holder text-holder-restore\">\r\n        <span class=\"d-block-medium\">Enter your username or email to reset your password.</span>\r\n        <span class=\"d-block-medium\">You will receive an email with instructions on how to reset your password.</span>\r\n      </div>\r\n\r\n      <form #f=\"ngForm\" name=\"signUpForm\" class=\"sign-up__form\">\r\n        <div class=\"form-group-wrap form-group-wrap-1\">\r\n          <div class=\"c-form-group c-form-group--width\"\r\n            [ngClass]=\"{'form-group--error': restorePasswordErrorViewModel.emailError}\">\r\n            <label class=\"c-form-group__label\" for=\"email\">Email</label>\r\n            <input type=\"email\" class=\"c-form-control\" id=\"email\" name=\"email\" required #email=\"ngModel\"\r\n              pattern=\"{{emailPattern}}\" [(ngModel)]=\"restorePasswordModel.email\" (input)=\"onChangeValue()\">\r\n            <small *ngIf=\"restorePasswordErrorViewModel.emailErrorPopover.popowerIsVisible\" class=\"c-form-text\">\r\n              {{restorePasswordErrorViewModel.emailErrorPopover.popowerMessage}}</small>\r\n          </div>\r\n          <div class=\"btn-holder-restore\">\r\n            <button class=\"c-btn c-btn-primary\"\r\n              [ngClass]=\"{'c-btn--disabled-gray': f.invalid || restorePasswordErrorViewModel.errorOccurred}\"\r\n              type=\"submit\" (click)=\"restorePassword()\">\r\n              <span *ngIf=\"loading\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                  style=\"margin: auto; shape-rendering: auto;\" width=\"1rem\" height=\"1rem\" viewBox=\"0 0 100 100\"\r\n                  preserveAspectRatio=\"xMidYMid\">\r\n                  <g transform=\"rotate(0 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.9s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(36 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.8s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(72 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.7s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(108 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(144 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(180 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.4s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(216 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.3s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(252 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.2s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(288 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.1s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                  <g transform=\"rotate(324 50 50)\">\r\n                    <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                      <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"0s\"\r\n                        repeatCount=\"indefinite\"></animate>\r\n                    </rect>\r\n                  </g>\r\n                </svg>\r\n              </span>\r\n              <span *ngIf=\"!loading\">Restore</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #restoreResult let-modal>\r\n  <div class=\"modal-body\">\r\n    <div style=\"padding: 2rem;\" class=\"modal__body\">\r\n      <div class=\"c-modal-body\">\r\n        <h2 class=\"modal__title secondary-title\">Success!</h2>\r\n        <div class=\"text-holder modal__text-holder\">\r\n          <span class=\"modal__text\">New Password have been sent to your email!</span>\r\n          <div style=\"margin-top: 2rem;\">\r\n\r\n            <button class=\"c-btn c-btn-primary\" type=\"button\" (click)=\"modal.close('gotToLogin'); gotToLogin()\">\r\n              <span>Sign in</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up-verified/sign-up-verified.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up-verified/sign-up-verified.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignUpVerifiedSignUpVerifiedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"intro\">\r\n    <div class=\"container\">\r\n      <div class=\"intro__inner--vertical-align flex-start\">\r\n        <h2 class=\"secondary-title\">Almost there!</h2>\r\n  \r\n        <div class=\"text-holder holder--bottom-indent\">\r\n          <span class=\"d-block\">Let’s verify your e-mail address to finish signing up for HealthCheck.</span>\r\n          <span class=\"d-block\">Please check your email inbox for activation instructions.</span>\r\n        </div>\r\n        <a routerLink=\"/login\" class=\"c-btn c-btn-primary\">Sign in</a>\r\n        \r\n      </div>\r\n    </div>\r\n  \r\n  </div>\r\n  \r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignUpSignUpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"intro\">\r\n  <div class=\"container\">\r\n    <div class=\"intro__inner-indent\">\r\n      <h2 class=\"secondary-title\">Sign up</h2>\r\n      <span class=\"sub-text\">Use your email address to complete signup</span>\r\n      <!-- <span class=\"sub-text\">Autofill forms using social networks:</span>\r\n      <ul class=\"social-list\">\r\n        <li class=\"social-list__item\">\r\n          <a class=\"social-list__link bg-white\" href=\"#\"><span class=\"icon icon-facebook facebook-bg\"></span></a>\r\n        </li>\r\n        <li class=\"social-list__item\">\r\n          <a class=\"social-list__link bg-white\" href=\"#\">\r\n            <img src=\"../../assets/images/svg-icons/icon_google.svg\" alt=\"icon google logo\">\r\n          </a>\r\n        </li>\r\n        <li class=\"social-list__item\">\r\n          <a class=\"social-list__link bg-white\" href=\"#\"><span class=\"icon icon-twitter twitter-bg\"></span></a>\r\n        </li>\r\n        <li class=\"social-list__item\">\r\n          <a class=\"social-list__link bg-white\" href=\"#\"><span class=\"icon icon-apple apple-bg\"></span></a>\r\n        </li>\r\n      </ul> -->\r\n\r\n      <form #f=\"ngForm\" name=\"signUpForm\" class=\"sign-up__form\">\r\n\r\n        <div class=\"form-group-wrap form-group-wrap-1\">\r\n          <div class=\"c-form-group\" [ngClass]=\"{'form-group--error': signUpErrorViewModel.emailError}\">\r\n            <label class=\"c-form-group__label\" for=\"email\">Email</label>\r\n            <input type=\"email\" class=\"c-form-control\" id=\"email\" name=\"email\" required #email=\"ngModel\"\r\n              [(ngModel)]=\"userSignUpModel.email\" autocomplete=\"on\" pattern=\"{{emailPattern}}\"\r\n              (input)=\"emailChangeValue($event)\">\r\n            <small *ngIf=\"signUpErrorViewModel.emailErrorPopover.popowerIsVisible\" class=\"c-form-text\">\r\n              {{signUpErrorViewModel.emailErrorPopover.popowerMessage}}</small>\r\n          </div>\r\n\r\n          <div class=\"c-form-group\" [ngClass]=\"{'form-group--error': signUpErrorViewModel.passwordError}\">\r\n            <label class=\"c-form-group__label form-group__label--password\" for=\"password\">Password</label>\r\n            <label class=\"c-form-group__label form-group__label--password form-group__label--error\"\r\n              for=\"password\">Password</label>\r\n\r\n            <div class=\"input-holder\">\r\n              <input type=\"password\" class=\"c-form-control\" id=\"password\" name=\"password\" required #password=\"ngModel\"\r\n                [(ngModel)]=\"userSignUpModel.password\" autocomplete=\"on\" (input)=\"passwordChangeValue()\">\r\n              <button class=\"btn-show-password btn-reset btn-show-password-js\" type=\"button\"></button>\r\n            </div>\r\n            <small class=\"c-form-text\" *ngIf=\"signUpErrorViewModel.passwordErrorPopover.popowerIsVisible\">\r\n              {{signUpErrorViewModel.passwordErrorPopover.popowerMessage}}\r\n            </small>\r\n          </div>\r\n\r\n          <div class=\"c-form-group\" [ngClass]=\"{'form-group--error': signUpErrorViewModel.phoneError}\">\r\n            <label class=\"c-form-group__label\" for=\"phone\">Phone</label>\r\n            <input type=\"number\" class=\"c-form-control\" id=\"phone\" name=\"phone\" required #phone=\"ngModel\"\r\n              [(ngModel)]=\"userSignUpModel.phone\" (input)=\" formChangedBaseHandler()\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group-wrap form-group-wrap-2\">\r\n          <div class=\"c-form-group\" [ngClass]=\"{'form-group--error': signUpErrorViewModel.firstNameError}\">\r\n            <label class=\"c-form-group__label\" for=\"firstName\">First Name</label>\r\n            <input type=\"text\" class=\"c-form-control\" id=\"firstName\" name=\"firstName\" required #firstName=\"ngModel\"\r\n              [(ngModel)]=\"userSignUpModel.firstName\" pattern='^[a-zA-Z]+' (input)=\"formChangedBaseHandler()\">\r\n          </div>\r\n\r\n          <div class=\"c-form-group\" [ngClass]=\"{'form-group--error': signUpErrorViewModel.lastNameError}\">\r\n            <label class=\"c-form-group__label\" for=\"lastName\">Last Name</label>\r\n            <input type=\"text\" class=\"c-form-control\" id=\"lastName\" name=\"lastName\" required #lastName=\"ngModel\"\r\n              [(ngModel)]=\"userSignUpModel.lastName\" pattern='^[a-zA-Z]+' (input)=\" formChangedBaseHandler()\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group-wrap form-group-wrap-3\">\r\n          <div class=\"c-form-group\" [ngClass]=\"{'form-group--error': signUpErrorViewModel.sexError}\">\r\n            <label class=\"c-form-group__label\">Sex</label>\r\n            <ng-select appearance=\"outline\" #sex [searchable]=\"false\" name=\"sex\" [(ngModel)]=\"userSignUpModel.gender\"\r\n              placeholder=\"Select sex\" (change)=\" formChangedBaseHandler()\">\r\n              <ng-option [value]=\"0\">Prefer to not share</ng-option>\r\n              <ng-option [value]=\"1\">Male</ng-option>\r\n              <ng-option [value]=\"2\">Female</ng-option>\r\n              <ng-option [value]=\"3\">Non-binary</ng-option>\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"c-form-group\" [ngClass]=\"{'form-group--error': signUpErrorViewModel.dateOfBirthError}\">\r\n            <label class=\"c-form-group__label\">Date of birth</label>\r\n\r\n            <div class=\"datepicker-wrap position-relative\">\r\n              <!-- <input class=\"datepicker\" id=\"dateOfBirth\" [displayMonths]=\"1\" placeholder=\"Select date\" name=\"db\" (click)=\"d.toggle()\"\r\n                ngbDatepicker #d=\"ngbDatepicker\" required [(ngModel)]=\"userSignUpModel.dateOfBirthForView\"\r\n                (dateSelect)=\"formChangedBaseHandler()\" (change)=\" formChangedBaseHandler()\"> -->\r\n\r\n              <input class=\"datepicker\" name=\"db\" id=\"dateOfBirth\" name=\"date\" placeholder=\"MM/DD/YYYY\" type=\"text\"\r\n                required [(ngModel)]=\"userSignUpModel.dateOfBirthForView\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group-wrap form-group-wrap-4\">\r\n          <div class=\"c-form-group\" [ngClass]=\"{'form-group--error': signUpErrorViewModel.countryError}\">\r\n            <label class=\"c-form-group__label\">Country</label>\r\n            <ng-select #country [searchable]=\"true\" required [(ngModel)]=\"userSignUpModel.countryId\" name=\"country\"\r\n              id=\"countryInput\" placeholder=\"Select country\" (change)='onCountrySelected($event)'\r\n              (close)=\"country.blur()\" (change)=\"formChangedBaseHandler()\">\r\n              <ng-option *ngFor=\"let country of countries\" value=\"{{country.id}}\">{{country.name}}</ng-option>\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div *ngIf='USACountrySelected' class=\"c-form-group\"\r\n            [ngClass]=\"{'form-group--error': signUpErrorViewModel.stateError}\">\r\n            <label class=\"c-form-group__label\">State</label>\r\n            <ng-select appearance=\"outline\" #stateSelect [searchable]=\"true\" required\r\n              [(ngModel)]=\"userSignUpModel.stateId\" name=\"state\" placeholder=\"Select state\"\r\n              (change)=\"formChangedBaseHandler($event)\" (close)=\"stateSelect.blur()\">\r\n              <ng-option *ngFor=\"let state of states\" value=\"{{state.id}}\">{{state.name}}</ng-option>\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"c-form-group\" [ngClass]=\"{'form-group--error': signUpErrorViewModel.facilityCodeError}\">\r\n            <div class=\"form-group-accept\">\r\n              <div class=\"position-relative\">\r\n                <label class=\"c-form-group__label\" for=\"facilityCode\">Facility code</label>\r\n                <input type=\"text\" class=\"c-form-control\" id=\"facilityCode\" name=\"facilityCode\" required\r\n                  [(ngModel)]=\"userSignUpModel.facilityCode\" (input)=\" formChangedBaseHandler()\">\r\n                <small class=\"c-form-text\" *ngIf=\"signUpErrorViewModel.facilityCodeErrorPopover.popowerIsVisible\">\r\n                  {{signUpErrorViewModel.facilityCodeErrorPopover.popowerMessage}}</small>\r\n              </div>\r\n\r\n              <div class=\"d-flex align-items-center\">\r\n                <label class=\"custom-checkbox-label\"\r\n                  [ngClass]=\"{'custom-checkbox-label--error': signUpErrorViewModel.termsAndConditionError}\">\r\n                  <input class=\"common-checkbox\" type=\"checkbox\" required name=\"check\" #check=\"ngModel\"\r\n                    [(ngModel)]=\"userSignUpModel.checkTerms\" (click)=\" formChangedBaseHandler()\">\r\n                  <span class=\"custom-checkbox\"></span>\r\n                </label>\r\n                <div class=\"sign-up__form-text\"\r\n                  ([ngStyle])=\"{'color' : signUpErrorViewModel.termsAndConditionError ? 'red': 'inherit'}\">\r\n                  I accept HealthCheck’s <button\r\n                    class=\"btn-privacy btn-reset с-text-primary font-weight-semi btn-privacy-js\" type=\"button\"\r\n                    (click)=\"openModalPrivacy()\">Terms and Conditions</button> and\r\n                  <button class=\"btn-privacy btn-reset с-text-primary font-weight-semi btn-privacy-js\" type=\"button\"\r\n                    (click)=\"openModalPrivacy()\">Privacy Policy</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"btn-holder mt-0 mb-0\">\r\n              <button class=\"c-btn c-btn-primary mb-2\" [ngClass]=\"{'c-btn--disabled-gray': f.invalid || loading}\"\r\n                type=\"submit\" (click)=\"signUp(f)\" [disabled]=\"f.invalid || loading\">\r\n                <span *ngIf=\"loading\">\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                    style=\"margin: auto; shape-rendering: auto;\" width=\"1rem\" height=\"1rem\" viewBox=\"0 0 100 100\"\r\n                    preserveAspectRatio=\"xMidYMid\">\r\n                    <g transform=\"rotate(0 50 50)\">\r\n                      <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                        <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.9s\"\r\n                          repeatCount=\"indefinite\"></animate>\r\n                      </rect>\r\n                    </g>\r\n                    <g transform=\"rotate(36 50 50)\">\r\n                      <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                        <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.8s\"\r\n                          repeatCount=\"indefinite\"></animate>\r\n                      </rect>\r\n                    </g>\r\n                    <g transform=\"rotate(72 50 50)\">\r\n                      <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                        <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.7s\"\r\n                          repeatCount=\"indefinite\"></animate>\r\n                      </rect>\r\n                    </g>\r\n                    <g transform=\"rotate(108 50 50)\">\r\n                      <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                        <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6s\"\r\n                          repeatCount=\"indefinite\"></animate>\r\n                      </rect>\r\n                    </g>\r\n                    <g transform=\"rotate(144 50 50)\">\r\n                      <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                        <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5s\"\r\n                          repeatCount=\"indefinite\"></animate>\r\n                      </rect>\r\n                    </g>\r\n                    <g transform=\"rotate(180 50 50)\">\r\n                      <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                        <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.4s\"\r\n                          repeatCount=\"indefinite\"></animate>\r\n                      </rect>\r\n                    </g>\r\n                    <g transform=\"rotate(216 50 50)\">\r\n                      <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                        <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.3s\"\r\n                          repeatCount=\"indefinite\"></animate>\r\n                      </rect>\r\n                    </g>\r\n                    <g transform=\"rotate(252 50 50)\">\r\n                      <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                        <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.2s\"\r\n                          repeatCount=\"indefinite\"></animate>\r\n                      </rect>\r\n                    </g>\r\n                    <g transform=\"rotate(288 50 50)\">\r\n                      <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                        <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.1s\"\r\n                          repeatCount=\"indefinite\"></animate>\r\n                      </rect>\r\n                    </g>\r\n                    <g transform=\"rotate(324 50 50)\">\r\n                      <rect x=\"45\" y=\"0.5\" rx=\"0\" ry=\"0\" width=\"10\" height=\"25\" fill=\"#ffffff\">\r\n                        <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"0s\"\r\n                          repeatCount=\"indefinite\"></animate>\r\n                      </rect>\r\n                    </g>\r\n                  </svg>\r\n                </span>\r\n                <span *ngIf=\"!loading\">Sign up</span>\r\n              </button>\r\n              <div class=\"form-subtext\">\r\n                <span>Already have an account?&nbsp;</span><a class=\"с-text-primary\" routerLink=\"/login\">Sign in</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/_models/AppConstants.ts":
  /*!*****************************************!*\
    !*** ./src/app/_models/AppConstants.ts ***!
    \*****************************************/

  /*! exports provided: AppConstants, PopowerErrorMessages, InputPatterns, HealthCheckResult */

  /***/
  function srcApp_modelsAppConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppConstants", function () {
      return AppConstants;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopowerErrorMessages", function () {
      return PopowerErrorMessages;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputPatterns", function () {
      return InputPatterns;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HealthCheckResult", function () {
      return HealthCheckResult;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppConstants = function AppConstants() {
      _classCallCheck(this, AppConstants);
    };

    AppConstants.LOCAL_STORAGE_USER_KEY = "currentUser";
    AppConstants.LOCAL_STORAGE_COUNTRIES_KEY = "countries";
    AppConstants.LOCAL_STORAGE_STATES_KEY = "states";
    AppConstants.LOCAL_STORAGE_SETTINGS = "settings";
    AppConstants.LOCAL_STORAGE_LANG = "lang";
    AppConstants.USA_COUNTRY_ALPHA2CODE = 'US';
    AppConstants.TEMPERATURE_SCALE_ALIAS_CELIUS = "Celsius";
    AppConstants.TEMPERATURE_SCALE_ALIAS_FAHRENHEIT = "Fahrenheit";
    AppConstants.COUNTRIES_THAT_USE_FAHRENHEIT = ['US', 'BS', 'KY', 'LR', 'PW', 'FM', 'MH'];
    AppConstants.EN_LANGUAGE_CODE = "en";
    AppConstants.monthModels = [{
      name: "January",
      id: 0
    }, {
      name: "February",
      id: 1
    }, {
      name: "March",
      id: 2
    }, {
      name: "April",
      id: 3
    }, {
      name: "May",
      id: 4
    }, {
      name: "June",
      id: 5
    }, {
      name: "July",
      id: 6
    }, {
      name: "August",
      id: 7
    }, {
      name: "September",
      id: 8
    }, {
      name: "October",
      id: 9
    }, {
      name: "November",
      id: 10
    }, {
      name: "December",
      id: 11
    }];
    AppConstants.FahrenheitMinValue = 95.0;
    AppConstants.FahrenheitMaxValue = 105.0;
    var PopowerErrorMessages;

    (function (PopowerErrorMessages) {
      PopowerErrorMessages["USER_NOT_FOUND"] = "User not found";
      PopowerErrorMessages["USER_NOT_ACTIVE"] = "This account is inactive. Check your email for Activation Link.";
      PopowerErrorMessages["EMAIL_ALREADY_TAKEN"] = "This email already taken!";
      PopowerErrorMessages["EMAIL_PATTERN_NOT_MATCHES"] = "Please, use yourname@example.com format";
      PopowerErrorMessages["PASSWORD_PATTERN_NOT_MATCHES"] = "Must be 6-20 characters long and must not contain spaces.";
      PopowerErrorMessages["ENTER_THE_VALID_FACILITy_CODE"] = "Please enter the valid Facility code!";
      PopowerErrorMessages["INCORRECT_CODE"] = "Incorrect code";
      PopowerErrorMessages["NOT_FOUNT"] = "Not found!";
      PopowerErrorMessages["INCORRECT_DATEOFBIRTH"] = "Incorrect Date";
    })(PopowerErrorMessages || (PopowerErrorMessages = {}));

    var InputPatterns;

    (function (InputPatterns) {
      InputPatterns["EMAIL_PATTERN"] = "^[a-zA-Z0-9._!=+-]+@[a-z0-9-]{1,}[.]{1}[a-z]+$";
      InputPatterns["PASSWORD_PATTERN"] = "^[a-zA-Z0-9!@#$%^&*.+]{6,20}$";
      InputPatterns["USER_NAME_PATTERN"] = "^[a-zA-Z0-9]+$";
    })(InputPatterns || (InputPatterns = {}));

    var HealthCheckResult;

    (function (HealthCheckResult) {
      HealthCheckResult[HealthCheckResult["PASSED"] = 0] = "PASSED";
      HealthCheckResult[HealthCheckResult["WARNING"] = 1] = "WARNING";
      HealthCheckResult[HealthCheckResult["FAILED"] = 2] = "FAILED";
    })(HealthCheckResult || (HealthCheckResult = {}));
    /***/

  },

  /***/
  "./src/app/_models/BackendResponseCodes.ts":
  /*!*************************************************!*\
    !*** ./src/app/_models/BackendResponseCodes.ts ***!
    \*************************************************/

  /*! exports provided: BackendResponseCode */

  /***/
  function srcApp_modelsBackendResponseCodesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackendResponseCode", function () {
      return BackendResponseCode;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }; //Login response code


    var BackendResponseCode;

    (function (BackendResponseCode) {
      BackendResponseCode[BackendResponseCode["CONFLICT"] = 409] = "CONFLICT";
      BackendResponseCode[BackendResponseCode["NOT_FOUNT"] = 404] = "NOT_FOUNT";
      BackendResponseCode[BackendResponseCode["SUCCESS"] = 1000] = "SUCCESS";
      BackendResponseCode[BackendResponseCode["USER_NOT_FOUND"] = 1001] = "USER_NOT_FOUND";
      BackendResponseCode[BackendResponseCode["PASSWORD_NOT_VALID"] = 1002] = "PASSWORD_NOT_VALID";
      BackendResponseCode[BackendResponseCode["USER_NOT_ACTIVE"] = 1003] = "USER_NOT_ACTIVE";
      BackendResponseCode[BackendResponseCode["CREATE_USER_ERROR"] = 1004] = "CREATE_USER_ERROR";
      BackendResponseCode[BackendResponseCode["WRONG_FACILITY_CODE"] = 1005] = "WRONG_FACILITY_CODE";
      BackendResponseCode[BackendResponseCode["COUNTRY_NOT_FOUND"] = 1006] = "COUNTRY_NOT_FOUND";
      BackendResponseCode[BackendResponseCode["STATE_IS_REQUIRED"] = 1007] = "STATE_IS_REQUIRED";
      BackendResponseCode[BackendResponseCode["COUNTRY_MUST_BE_SPECIFIED_FIRST"] = 1008] = "COUNTRY_MUST_BE_SPECIFIED_FIRST";
      BackendResponseCode[BackendResponseCode["STATE_NOT_FOUND"] = 1009] = "STATE_NOT_FOUND";
      BackendResponseCode[BackendResponseCode["STATE_MUST_BE_NULL"] = 1010] = "STATE_MUST_BE_NULL";
      BackendResponseCode[BackendResponseCode["USER_NOT_IN_FACILITY"] = 1011] = "USER_NOT_IN_FACILITY";
    })(BackendResponseCode || (BackendResponseCode = {}));
    /***/

  },

  /***/
  "./src/app/_models/api/requestModels/checkRequestModel.ts":
  /*!****************************************************************!*\
    !*** ./src/app/_models/api/requestModels/checkRequestModel.ts ***!
    \****************************************************************/

  /*! exports provided: CheckRequestModel, AnswerRequestModel */

  /***/
  function srcApp_modelsApiRequestModelsCheckRequestModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckRequestModel", function () {
      return CheckRequestModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnswerRequestModel", function () {
      return AnswerRequestModel;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CheckRequestModel = function CheckRequestModel() {
      _classCallCheck(this, CheckRequestModel);

      this.answers = [];
    };

    var AnswerRequestModel = function AnswerRequestModel() {
      _classCallCheck(this, AnswerRequestModel);
    };
    /***/

  },

  /***/
  "./src/app/_models/api/requestModels/createChildRequestModel.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/_models/api/requestModels/createChildRequestModel.ts ***!
    \**********************************************************************/

  /*! exports provided: CreateChildRequestModel */

  /***/
  function srcApp_modelsApiRequestModelsCreateChildRequestModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateChildRequestModel", function () {
      return CreateChildRequestModel;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CreateChildRequestModel = function CreateChildRequestModel() {
      _classCallCheck(this, CreateChildRequestModel);
    };
    /***/

  },

  /***/
  "./src/app/_models/api/requestModels/editProfileRequestModel.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/_models/api/requestModels/editProfileRequestModel.ts ***!
    \**********************************************************************/

  /*! exports provided: EditProfileRequestModel */

  /***/
  function srcApp_modelsApiRequestModelsEditProfileRequestModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfileRequestModel", function () {
      return EditProfileRequestModel;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var EditProfileRequestModel = function EditProfileRequestModel() {
      _classCallCheck(this, EditProfileRequestModel);
    };
    /***/

  },

  /***/
  "./src/app/_models/api/requestModels/getCountriesStatesModel.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/_models/api/requestModels/getCountriesStatesModel.ts ***!
    \**********************************************************************/

  /*! exports provided: GetCountriesStatesModel */

  /***/
  function srcApp_modelsApiRequestModelsGetCountriesStatesModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetCountriesStatesModel", function () {
      return GetCountriesStatesModel;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var GetCountriesStatesModel = function GetCountriesStatesModel() {
      _classCallCheck(this, GetCountriesStatesModel);
    };
    /***/

  },

  /***/
  "./src/app/_models/app-component/viewModels.ts":
  /*!*****************************************************!*\
    !*** ./src/app/_models/app-component/viewModels.ts ***!
    \*****************************************************/

  /*! exports provided: HeaderType, FooterTheme, AppComponentViewModel */

  /***/
  function srcApp_modelsAppComponentViewModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderType", function () {
      return HeaderType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterTheme", function () {
      return FooterTheme;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponentViewModel", function () {
      return AppComponentViewModel;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HeaderType;

    (function (HeaderType) {
      HeaderType["HEADER_NOT_AUTHORIZED"] = "BASIC";
      HeaderType["HEADER_AUTHORIZED"] = "STARNDART";
    })(HeaderType || (HeaderType = {}));

    var FooterTheme;

    (function (FooterTheme) {
      FooterTheme["FOOTER_THEME_WHITE_BACKGROUND"] = "WHITE_BACKGROUND";
      FooterTheme["FOOTER_THEME_PRIMARY_BACKGROUND"] = "PRIMARY_BACKGROUND";
    })(FooterTheme || (FooterTheme = {}));

    var AppComponentViewModel = function AppComponentViewModel() {
      _classCallCheck(this, AppComponentViewModel);
    };
    /***/

  },

  /***/
  "./src/app/_models/children/addChildByCodeErrorViewModel.ts":
  /*!******************************************************************!*\
    !*** ./src/app/_models/children/addChildByCodeErrorViewModel.ts ***!
    \******************************************************************/

  /*! exports provided: AddChildByCodeErrorViewModel */

  /***/
  function srcApp_modelsChildrenAddChildByCodeErrorViewModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddChildByCodeErrorViewModel", function () {
      return AddChildByCodeErrorViewModel;
    });
    /* harmony import */


    var _AppConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../AppConstants */
    "./src/app/_models/AppConstants.ts");
    /* harmony import */


    var _BackendResponseCodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../BackendResponseCodes */
    "./src/app/_models/BackendResponseCodes.ts");
    /* harmony import */


    var _popowerErrorViewModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../popowerErrorViewModel */
    "./src/app/_models/popowerErrorViewModel.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AddChildByCodeErrorViewModel = /*#__PURE__*/function () {
      function AddChildByCodeErrorViewModel() {
        _classCallCheck(this, AddChildByCodeErrorViewModel);

        this.codeErrorPopover = new _popowerErrorViewModel__WEBPACK_IMPORTED_MODULE_2__["PopowerErrorViewModel"]();
      }

      _createClass(AddChildByCodeErrorViewModel, [{
        key: "setStateNoErrors",
        value: function setStateNoErrors() {
          this.errorOccurred = false;
          this.codeErrorPopover.hidePopower();
          this.codeError = false;
        }
      }, {
        key: "setStateErrorByResponseCode",
        value: function setStateErrorByResponseCode(code) {
          if (!code) return;

          switch (code) {
            case _BackendResponseCodes__WEBPACK_IMPORTED_MODULE_1__["BackendResponseCode"].CONFLICT:
              {
                this.errorOccurred = true;
                this.codeError = true;
                this.codeErrorPopover.showPopower(_AppConstants__WEBPACK_IMPORTED_MODULE_0__["PopowerErrorMessages"].INCORRECT_CODE);
                break;
              }

            case _BackendResponseCodes__WEBPACK_IMPORTED_MODULE_1__["BackendResponseCode"].NOT_FOUNT:
              {
                this.errorOccurred = true;
                this.codeError = true;
                this.codeErrorPopover.showPopower(_AppConstants__WEBPACK_IMPORTED_MODULE_0__["PopowerErrorMessages"].NOT_FOUNT);
                break;
              }
          }
        }
      }]);

      return AddChildByCodeErrorViewModel;
    }();
    /***/

  },

  /***/
  "./src/app/_models/children/child.ts":
  /*!*******************************************!*\
    !*** ./src/app/_models/children/child.ts ***!
    \*******************************************/

  /*! exports provided: ChildBaseModel, Child */

  /***/
  function srcApp_modelsChildrenChildTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChildBaseModel", function () {
      return ChildBaseModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Child", function () {
      return Child;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ChildBaseModel = function ChildBaseModel() {
      _classCallCheck(this, ChildBaseModel);
    };

    var Child = /*#__PURE__*/function (_ChildBaseModel) {
      _inherits(Child, _ChildBaseModel);

      var _super = _createSuper(Child);

      function Child() {
        _classCallCheck(this, Child);

        return _super.apply(this, arguments);
      }

      return Child;
    }(ChildBaseModel);
    /***/

  },

  /***/
  "./src/app/_models/children/createChildErrorViewModel.ts":
  /*!***************************************************************!*\
    !*** ./src/app/_models/children/createChildErrorViewModel.ts ***!
    \***************************************************************/

  /*! exports provided: CreateChildErrorViewModel */

  /***/
  function srcApp_modelsChildrenCreateChildErrorViewModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateChildErrorViewModel", function () {
      return CreateChildErrorViewModel;
    });
    /* harmony import */


    var _AppConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../AppConstants */
    "./src/app/_models/AppConstants.ts");
    /* harmony import */


    var _BackendResponseCodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../BackendResponseCodes */
    "./src/app/_models/BackendResponseCodes.ts");
    /* harmony import */


    var _popowerErrorViewModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../popowerErrorViewModel */
    "./src/app/_models/popowerErrorViewModel.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CreateChildErrorViewModel = /*#__PURE__*/function () {
      function CreateChildErrorViewModel() {
        _classCallCheck(this, CreateChildErrorViewModel);

        this.dateOfBirthErrorPopower = new _popowerErrorViewModel__WEBPACK_IMPORTED_MODULE_2__["PopowerErrorViewModel"]();
      }

      _createClass(CreateChildErrorViewModel, [{
        key: "setStateNoErrors",
        value: function setStateNoErrors() {
          this.errorOccurred = false;
          this.firstNameError = false;
          this.lastNameError = false;
          this.sexError = false;
          this.dateOfBirthError = false;
          this.countryError = false;
          this.stateError = false;
          this.dateOfBirthErrorPopower.hidePopower();
        }
      }, {
        key: "setStateErrorDateOfBirth",
        value: function setStateErrorDateOfBirth() {
          this.errorOccurred = true;
          this.dateOfBirthError = true;
          this.dateOfBirthErrorPopower.showPopower(_AppConstants__WEBPACK_IMPORTED_MODULE_0__["PopowerErrorMessages"].INCORRECT_DATEOFBIRTH);
        }
      }, {
        key: "setStateErrorByResponseCode",
        value: function setStateErrorByResponseCode(code) {
          if (!code) return;

          switch (code) {
            case _BackendResponseCodes__WEBPACK_IMPORTED_MODULE_1__["BackendResponseCode"].CREATE_USER_ERROR:
              {
                this.errorOccurred = true;
                break;
              }
          }
        }
      }]);

      return CreateChildErrorViewModel;
    }();
    /***/

  },

  /***/
  "./src/app/_models/children/createChildModel.ts":
  /*!******************************************************!*\
    !*** ./src/app/_models/children/createChildModel.ts ***!
    \******************************************************/

  /*! exports provided: CreateChildModel */

  /***/
  function srcApp_modelsChildrenCreateChildModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateChildModel", function () {
      return CreateChildModel;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CreateChildModel = function CreateChildModel() {
      _classCallCheck(this, CreateChildModel);
    };
    /***/

  },

  /***/
  "./src/app/_models/children/editChildModel.ts":
  /*!****************************************************!*\
    !*** ./src/app/_models/children/editChildModel.ts ***!
    \****************************************************/

  /*! exports provided: EditChildModel */

  /***/
  function srcApp_modelsChildrenEditChildModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditChildModel", function () {
      return EditChildModel;
    });
    /* harmony import */


    var _createChildModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./createChildModel */
    "./src/app/_models/children/createChildModel.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var EditChildModel = /*#__PURE__*/function (_createChildModel__WE) {
      _inherits(EditChildModel, _createChildModel__WE);

      var _super2 = _createSuper(EditChildModel);

      function EditChildModel() {
        _classCallCheck(this, EditChildModel);

        return _super2.apply(this, arguments);
      }

      return EditChildModel;
    }(_createChildModel__WEBPACK_IMPORTED_MODULE_0__["CreateChildModel"]);
    /***/

  },

  /***/
  "./src/app/_models/health-test/HealthCheckModel.ts":
  /*!*********************************************************!*\
    !*** ./src/app/_models/health-test/HealthCheckModel.ts ***!
    \*********************************************************/

  /*! exports provided: CheckModelDTO, Check, QRCodeData, QRCodeDataModel */

  /***/
  function srcApp_modelsHealthTestHealthCheckModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckModelDTO", function () {
      return CheckModelDTO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Check", function () {
      return Check;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QRCodeData", function () {
      return QRCodeData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QRCodeDataModel", function () {
      return QRCodeDataModel;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CheckModelDTO = function CheckModelDTO() {
      _classCallCheck(this, CheckModelDTO);
    };

    var Check = /*#__PURE__*/function (_CheckModelDTO) {
      _inherits(Check, _CheckModelDTO);

      var _super3 = _createSuper(Check);

      function Check() {
        _classCallCheck(this, Check);

        return _super3.apply(this, arguments);
      }

      return Check;
    }(CheckModelDTO);

    var QRCodeData = function QRCodeData() {
      _classCallCheck(this, QRCodeData);

      this.qrdata = null;
      this.elementType = null;
    };

    var QRCodeDataModel = function QRCodeDataModel() {
      _classCallCheck(this, QRCodeDataModel);
    };
    /***/

  },

  /***/
  "./src/app/_models/health-test/viewModels.ts":
  /*!***************************************************!*\
    !*** ./src/app/_models/health-test/viewModels.ts ***!
    \***************************************************/

  /*! exports provided: HealthTestViewModel, ViewState */

  /***/
  function srcApp_modelsHealthTestViewModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HealthTestViewModel", function () {
      return HealthTestViewModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewState", function () {
      return ViewState;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HealthTestViewModel = /*#__PURE__*/function () {
      function HealthTestViewModel() {
        _classCallCheck(this, HealthTestViewModel);

        this.questionsListIsEmpty = false;
      }

      _createClass(HealthTestViewModel, [{
        key: "setStateChooseIdentity",
        value: function setStateChooseIdentity() {
          this.viewState = ViewState.CHOOSE_IDENTITY;
        }
      }, {
        key: "setStateChooseFacility",
        value: function setStateChooseFacility() {
          this.viewState = ViewState.CHOOSE_FACILITY;
        }
      }, {
        key: "setStateStartWizard",
        value: function setStateStartWizard() {
          this.viewState = ViewState.QUESTION_WIZARD;
        }
      }, {
        key: "setStateCheckRersult",
        value: function setStateCheckRersult() {
          this.viewState = ViewState.CHECK_RESULT;
        }
      }, {
        key: "setStateLoading",
        value: function setStateLoading() {
          this.viewState = ViewState.LOADING;
        }
      }]);

      return HealthTestViewModel;
    }();

    var ViewState;

    (function (ViewState) {
      ViewState["LOADING"] = "LOADING";
      ViewState["CHOOSE_IDENTITY"] = "CHOOSE_IDENTITY";
      ViewState["CHOOSE_FACILITY"] = "CHOOSE_FACILITY";
      ViewState["QUESTION_WIZARD"] = "QUESTION_WIZARD";
      ViewState["CHECK_RESULT"] = "CHECK_RESULT";
    })(ViewState || (ViewState = {}));
    /***/

  },

  /***/
  "./src/app/_models/popowerErrorViewModel.ts":
  /*!**************************************************!*\
    !*** ./src/app/_models/popowerErrorViewModel.ts ***!
    \**************************************************/

  /*! exports provided: PopowerErrorViewModel */

  /***/
  function srcApp_modelsPopowerErrorViewModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopowerErrorViewModel", function () {
      return PopowerErrorViewModel;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var PopowerErrorViewModel = /*#__PURE__*/function () {
      function PopowerErrorViewModel() {
        _classCallCheck(this, PopowerErrorViewModel);
      }

      _createClass(PopowerErrorViewModel, [{
        key: "hidePopower",
        value: function hidePopower() {
          this.popowerIsVisible = false;
          this.popowerMessage = "";
        }
      }, {
        key: "showPopower",
        value: function showPopower(message) {
          this.popowerIsVisible = true;
          this.popowerMessage = message;
        }
      }]);

      return PopowerErrorViewModel;
    }();
    /***/

  },

  /***/
  "./src/app/_models/profile/addFacilityViewModel.ts":
  /*!*********************************************************!*\
    !*** ./src/app/_models/profile/addFacilityViewModel.ts ***!
    \*********************************************************/

  /*! exports provided: AddFacilityViewModel, FacilityResponseModel */

  /***/
  function srcApp_modelsProfileAddFacilityViewModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddFacilityViewModel", function () {
      return AddFacilityViewModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilityResponseModel", function () {
      return FacilityResponseModel;
    });
    /* harmony import */


    var _popowerErrorViewModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../popowerErrorViewModel */
    "./src/app/_models/popowerErrorViewModel.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AddFacilityViewModel = /*#__PURE__*/function () {
      function AddFacilityViewModel() {
        _classCallCheck(this, AddFacilityViewModel);

        this.facilityErrorPopover = new _popowerErrorViewModel__WEBPACK_IMPORTED_MODULE_0__["PopowerErrorViewModel"]();
      }

      _createClass(AddFacilityViewModel, [{
        key: "setStateNoErrors",
        value: function setStateNoErrors() {
          this.facilityErrorPopover.hidePopower();
        }
      }, {
        key: "setAddFacilityDialogIsActive",
        value: function setAddFacilityDialogIsActive(state) {
          this.loading = false;
          this.newFacilityCode = null;
          this.facilityErrorPopover.hidePopower();
          this.showAddFacilityDialog = state;
        }
      }, {
        key: "handleResponse",
        value: function handleResponse(response) {
          if (!response.success) {
            this.facilityErrorPopover.showPopower("Facility not found");
          }
        }
      }, {
        key: "facilityValueChanged",
        value: function facilityValueChanged() {
          this.setStateNoErrors();
        }
      }, {
        key: "onClickAddFacilityOpenDialog",
        value: function onClickAddFacilityOpenDialog(event) {
          this.setAddFacilityDialogIsActive(true);
          setTimeout(function () {
            return $('#inputFacilityCode').focus();
          }, 200);
        }
      }, {
        key: "closeDialogAddFacility",
        value: function closeDialogAddFacility() {
          if (!this.loading) this.setAddFacilityDialogIsActive(false);
        }
      }]);

      return AddFacilityViewModel;
    }();

    var FacilityResponseModel = function FacilityResponseModel() {
      _classCallCheck(this, FacilityResponseModel);
    };
    /***/

  },

  /***/
  "./src/app/_models/profile/changePasswordViewModel.ts":
  /*!************************************************************!*\
    !*** ./src/app/_models/profile/changePasswordViewModel.ts ***!
    \************************************************************/

  /*! exports provided: ChangePasswordViewModel, ChangaPasswordInputIcon */

  /***/
  function srcApp_modelsProfileChangePasswordViewModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordViewModel", function () {
      return ChangePasswordViewModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangaPasswordInputIcon", function () {
      return ChangaPasswordInputIcon;
    });
    /* harmony import */


    var _popowerErrorViewModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../popowerErrorViewModel */
    "./src/app/_models/popowerErrorViewModel.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ChangePasswordViewModel = /*#__PURE__*/function () {
      function ChangePasswordViewModel() {
        _classCallCheck(this, ChangePasswordViewModel);

        this.passwordErrorPopover = new _popowerErrorViewModel__WEBPACK_IMPORTED_MODULE_0__["PopowerErrorViewModel"]();
        this.passwordInputType = "password";
        this.changePasswordIconType = ChangaPasswordInputIcon.BASE.toString();
      }

      _createClass(ChangePasswordViewModel, [{
        key: "setStateNoErrors",
        value: function setStateNoErrors() {
          this.passwordErrorPopover.hidePopower();
        }
      }, {
        key: "setPasswordVisible",
        value: function setPasswordVisible() {
          if (this.passwordInputType == "password") {
            this.passwordInputType = "text";
            this.changePasswordIconType = ChangaPasswordInputIcon.CROSSED.toString();
          } else {
            this.passwordInputType = "password";
            this.changePasswordIconType = ChangaPasswordInputIcon.BASE.toString();
          }
        }
      }, {
        key: "setChangePasswordDialogisActive",
        value: function setChangePasswordDialogisActive(state) {
          this.loading = false;
          this.newPassword = null;
          this.passwordErrorPopover.hidePopower();
          this.showChangePasswordDialog = state;
        }
      }, {
        key: "handleResponse",
        value: function handleResponse(response) {
          if (!response.success) {
            this.passwordErrorPopover.showPopower("Bad password");
          }
        }
      }]);

      return ChangePasswordViewModel;
    }();

    var ChangaPasswordInputIcon;

    (function (ChangaPasswordInputIcon) {
      ChangaPasswordInputIcon["BASE"] = "BASE";
      ChangaPasswordInputIcon["CROSSED"] = "CROSSED";
    })(ChangaPasswordInputIcon || (ChangaPasswordInputIcon = {}));
    /***/

  },

  /***/
  "./src/app/_models/profile/profileModels.ts":
  /*!**************************************************!*\
    !*** ./src/app/_models/profile/profileModels.ts ***!
    \**************************************************/

  /*! exports provided: EditProfileErrorViewModel, EditUserViewModel */

  /***/
  function srcApp_modelsProfileProfileModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfileErrorViewModel", function () {
      return EditProfileErrorViewModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditUserViewModel", function () {
      return EditUserViewModel;
    });
    /* harmony import */


    var _popowerErrorViewModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../popowerErrorViewModel */
    "./src/app/_models/popowerErrorViewModel.ts");
    /* harmony import */


    var _BackendResponseCodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../BackendResponseCodes */
    "./src/app/_models/BackendResponseCodes.ts");
    /* harmony import */


    var _AppConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../AppConstants */
    "./src/app/_models/AppConstants.ts");
    /* harmony import */


    var _user_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user/user */
    "./src/app/_models/user/user.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var EditProfileErrorViewModel = /*#__PURE__*/function () {
      function EditProfileErrorViewModel() {
        _classCallCheck(this, EditProfileErrorViewModel);

        this.emailErrorPopover = new _popowerErrorViewModel__WEBPACK_IMPORTED_MODULE_0__["PopowerErrorViewModel"]();
        this.emailError = false;
      }

      _createClass(EditProfileErrorViewModel, [{
        key: "setStateNoErrors",
        value: function setStateNoErrors() {
          this.errorOccurred = false;
          this.emailErrorPopover.hidePopower();
          this.emailError = false;
          this.phoneError = false;
          this.firstNameError = false;
          this.lastNameError = false;
          this.sexError = false;
          this.dateOfBirthError = false;
          this.countryError = false;
          this.stateError = false;
        }
      }, {
        key: "setStateErrorByResponseCode",
        value: function setStateErrorByResponseCode(code) {
          if (!code) return;

          switch (code) {
            case _BackendResponseCodes__WEBPACK_IMPORTED_MODULE_1__["BackendResponseCode"].CREATE_USER_ERROR:
              {
                this.errorOccurred = true;
                this.emailError = true;
                this.emailErrorPopover.showPopower(_AppConstants__WEBPACK_IMPORTED_MODULE_2__["PopowerErrorMessages"].EMAIL_ALREADY_TAKEN);
                break;
              }
          }
        }
      }]);

      return EditProfileErrorViewModel;
    }();

    var EditUserViewModel = /*#__PURE__*/function () {
      function EditUserViewModel() {
        _classCallCheck(this, EditUserViewModel);
      }

      _createClass(EditUserViewModel, [{
        key: "dateOfBirthToUTC",
        value: function dateOfBirthToUTC() {
          try {
            if (this.dateOfBirthViewModel) {
              var dt = new Date(this.dateOfBirthViewModel);
              this.dateOfBirth = new Date(Date.UTC(dt.getFullYear(), dt.getMonth(), dt.getDate())).toUTCString();
            } else {
              this.dateOfBirth = null;
            }
          } catch (error) {}
        }
      }, {
        key: "mapFrom",
        value: function mapFrom(user) {
          if (!user) {
            user = new _user_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
          }

          this.email = user.email;
          this.firstName = user.firstName;
          this.lastName = user.lastName;
          this.gender = user.gender;
          this.phone = user.phone;
          this.countryId = user.country ? user.country.id : undefined;
          this.stateId = user.state ? user.state.id : undefined;
          this.temperatureScale = user.temperatureScale;
          this.temperatureScaleId = user.temperatureScale ? user.temperatureScale.id : null;

          try {
            var userDateOfBirth = new Date(user.dateOfBirth);
            this.dateOfBirthViewModel = userDateOfBirth;
          } catch (exeption) {
            console.error(exeption);
            this.dateOfBirth = null;
          }
        }
      }]);

      return EditUserViewModel;
    }();
    /***/

  },

  /***/
  "./src/app/_models/restorePassword/restorePasswordModels.ts":
  /*!******************************************************************!*\
    !*** ./src/app/_models/restorePassword/restorePasswordModels.ts ***!
    \******************************************************************/

  /*! exports provided: UserRestorePasswordModel, RestorePasswordErrorViewModel */

  /***/
  function srcApp_modelsRestorePasswordRestorePasswordModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRestorePasswordModel", function () {
      return UserRestorePasswordModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RestorePasswordErrorViewModel", function () {
      return RestorePasswordErrorViewModel;
    });
    /* harmony import */


    var _BackendResponseCodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../BackendResponseCodes */
    "./src/app/_models/BackendResponseCodes.ts");
    /* harmony import */


    var _services_helpers_validationService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../_services/helpers/validationService */
    "./src/app/_services/helpers/validationService.ts");
    /* harmony import */


    var _models_AppConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../_models/AppConstants */
    "./src/app/_models/AppConstants.ts");
    /* harmony import */


    var _popowerErrorViewModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../popowerErrorViewModel */
    "./src/app/_models/popowerErrorViewModel.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var UserRestorePasswordModel = function UserRestorePasswordModel() {
      _classCallCheck(this, UserRestorePasswordModel);
    };

    var RestorePasswordErrorViewModel = /*#__PURE__*/function () {
      function RestorePasswordErrorViewModel() {
        _classCallCheck(this, RestorePasswordErrorViewModel);

        this.emailErrorPopover = new _popowerErrorViewModel__WEBPACK_IMPORTED_MODULE_3__["PopowerErrorViewModel"]();
      }

      _createClass(RestorePasswordErrorViewModel, [{
        key: "setStateNoErrors",
        value: function setStateNoErrors() {
          this.errorOccurred = false;
          this.emailErrorPopover.hidePopower();
          this.emailError = false;
        }
      }, {
        key: "setStateErrorByResponseCode",
        value: function setStateErrorByResponseCode(code) {
          if (!code) return;

          switch (code) {
            case _BackendResponseCodes__WEBPACK_IMPORTED_MODULE_0__["BackendResponseCode"].USER_NOT_FOUND:
              {
                this.errorOccurred = true;
                this.emailError = true;
                this.emailErrorPopover.showPopower(_models_AppConstants__WEBPACK_IMPORTED_MODULE_2__["PopowerErrorMessages"].USER_NOT_FOUND);
                break;
              }

            case _BackendResponseCodes__WEBPACK_IMPORTED_MODULE_0__["BackendResponseCode"].USER_NOT_ACTIVE:
              {
                this.errorOccurred = true;
                this.emailError = true;
                this.emailErrorPopover.showPopower(_models_AppConstants__WEBPACK_IMPORTED_MODULE_2__["PopowerErrorMessages"].USER_NOT_ACTIVE);
                break;
              }
          }
        }
      }, {
        key: "checkEmailInput",
        value: function checkEmailInput(email) {
          this.setStateNoErrors();

          if (!email) {
            this.errorOccurred = true;
            this.emailError = true;
            return;
          }

          if (!_services_helpers_validationService__WEBPACK_IMPORTED_MODULE_1__["ValidationService"].ifEmailMatchPattern(email)) {
            this.errorOccurred = true;
            this.emailError = true;
            this.emailErrorPopover.showPopower(_models_AppConstants__WEBPACK_IMPORTED_MODULE_2__["PopowerErrorMessages"].EMAIL_PATTERN_NOT_MATCHES);
            return;
          }
        }
      }]);

      return RestorePasswordErrorViewModel;
    }();
    /***/

  },

  /***/
  "./src/app/_models/sign-in/signInModels.ts":
  /*!*************************************************!*\
    !*** ./src/app/_models/sign-in/signInModels.ts ***!
    \*************************************************/

  /*! exports provided: ActivationRequestModel, ActivationViewModel */

  /***/
  function srcApp_modelsSignInSignInModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivationRequestModel", function () {
      return ActivationRequestModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivationViewModel", function () {
      return ActivationViewModel;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ActivationRequestModel = /*#__PURE__*/function () {
      function ActivationRequestModel() {
        _classCallCheck(this, ActivationRequestModel);
      }

      _createClass(ActivationRequestModel, [{
        key: "isValid",
        //isValid: boolean;
        value: function isValid() {
          if (!this.userId || !this.token) return false;
          return true;
        }
      }]);

      return ActivationRequestModel;
    }();

    var ActivationViewModel = /*#__PURE__*/function () {
      function ActivationViewModel() {
        _classCallCheck(this, ActivationViewModel);
      }

      _createClass(ActivationViewModel, [{
        key: "setStateActivationInProgress",
        value: function setStateActivationInProgress() {
          this.activationInProgress = true;
          this.requestPending = true;
          this.requestReceived = false;
          this.activationSuccess = false;
        }
      }, {
        key: "setStateRequestReceived",
        value: function setStateRequestReceived(activationSuccess) {
          this.activationInProgress = false;
          this.requestPending = false;
          this.requestReceived = true;
          this.activationSuccess = activationSuccess;
        }
      }]);

      return ActivationViewModel;
    }();
    /***/

  },

  /***/
  "./src/app/_models/sign-up/signUpModel.ts":
  /*!************************************************!*\
    !*** ./src/app/_models/sign-up/signUpModel.ts ***!
    \************************************************/

  /*! exports provided: UserSignUpModel, SignUpErrorViewModel */

  /***/
  function srcApp_modelsSignUpSignUpModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSignUpModel", function () {
      return UserSignUpModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpErrorViewModel", function () {
      return SignUpErrorViewModel;
    });
    /* harmony import */


    var _popowerErrorViewModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../popowerErrorViewModel */
    "./src/app/_models/popowerErrorViewModel.ts");
    /* harmony import */


    var _BackendResponseCodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../BackendResponseCodes */
    "./src/app/_models/BackendResponseCodes.ts");
    /* harmony import */


    var _models_AppConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../_models/AppConstants */
    "./src/app/_models/AppConstants.ts");
    /* harmony import */


    var _user_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user/user */
    "./src/app/_models/user/user.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var UserSignUpModel = /*#__PURE__*/function () {
      function UserSignUpModel() {
        _classCallCheck(this, UserSignUpModel);

        this.gender = _user_user__WEBPACK_IMPORTED_MODULE_3__["Gender"].PREFERE_NOT_TO_SHARE;
      }

      _createClass(UserSignUpModel, [{
        key: "parseDateOfBirth",
        value: function parseDateOfBirth() {
          var parsedDate = new Date(this.dateOfBirthForView);
          this.dateOfBirth = new Date(Date.UTC(parsedDate.getFullYear(), parsedDate.getMonth(), parsedDate.getDate())).toUTCString();
        }
      }]);

      return UserSignUpModel;
    }();

    var SignUpErrorViewModel = /*#__PURE__*/function () {
      function SignUpErrorViewModel() {
        _classCallCheck(this, SignUpErrorViewModel);

        this.emailErrorPopover = new _popowerErrorViewModel__WEBPACK_IMPORTED_MODULE_0__["PopowerErrorViewModel"]();
        this.passwordErrorPopover = new _popowerErrorViewModel__WEBPACK_IMPORTED_MODULE_0__["PopowerErrorViewModel"]();
        this.facilityCodeErrorPopover = new _popowerErrorViewModel__WEBPACK_IMPORTED_MODULE_0__["PopowerErrorViewModel"]();
        this.emailError = false;
        this.passwordError = false;
      }

      _createClass(SignUpErrorViewModel, [{
        key: "setStateNoErrors",
        value: function setStateNoErrors() {
          this.errorOccurred = false;
          this.emailErrorPopover.hidePopower();
          this.passwordErrorPopover.hidePopower();
          this.facilityCodeErrorPopover.hidePopower();
          this.emailError = false;
          this.passwordError = false;
          this.phoneError = false;
          this.firstNameError = false;
          this.lastNameError = false;
          this.sexError = false;
          this.dateOfBirthError = false;
          this.countryError = false;
          this.stateError = false;
          this.facilityCodeError = false;
          this.termsAndConditionError = false;
        }
      }, {
        key: "setStateErrorByResponseCode",
        value: function setStateErrorByResponseCode(code) {
          if (!code) return;

          switch (code) {
            case _BackendResponseCodes__WEBPACK_IMPORTED_MODULE_1__["BackendResponseCode"].WRONG_FACILITY_CODE:
              {
                this.errorOccurred = true;
                this.facilityCodeError = true;
                this.facilityCodeErrorPopover.showPopower(_models_AppConstants__WEBPACK_IMPORTED_MODULE_2__["PopowerErrorMessages"].ENTER_THE_VALID_FACILITy_CODE);
                break;
              }

            case _BackendResponseCodes__WEBPACK_IMPORTED_MODULE_1__["BackendResponseCode"].CREATE_USER_ERROR:
              {
                this.errorOccurred = true;
                this.emailError = true;
                this.emailErrorPopover.showPopower(_models_AppConstants__WEBPACK_IMPORTED_MODULE_2__["PopowerErrorMessages"].EMAIL_ALREADY_TAKEN);
                break;
              }
          }
        }
      }]);

      return SignUpErrorViewModel;
    }();
    /***/

  },

  /***/
  "./src/app/_models/user/user.ts":
  /*!**************************************!*\
    !*** ./src/app/_models/user/user.ts ***!
    \**************************************/

  /*! exports provided: User, Gender, Facility, FacilityModelDTO, Country, State, LocalSettings, TemperatureScale, UserLoginModel, BaseErrorViewModel, SignInErrorViewModel, UpdateUserModel */

  /***/
  function srcApp_modelsUserUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Gender", function () {
      return Gender;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Facility", function () {
      return Facility;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilityModelDTO", function () {
      return FacilityModelDTO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Country", function () {
      return Country;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "State", function () {
      return State;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalSettings", function () {
      return LocalSettings;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemperatureScale", function () {
      return TemperatureScale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserLoginModel", function () {
      return UserLoginModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseErrorViewModel", function () {
      return BaseErrorViewModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInErrorViewModel", function () {
      return SignInErrorViewModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateUserModel", function () {
      return UpdateUserModel;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var User = function User() {
      _classCallCheck(this, User);

      this.userFacility = [];
      this.availableTemperatureScales = [];
    };

    var Gender;

    (function (Gender) {
      Gender[Gender["PREFERE_NOT_TO_SHARE"] = 0] = "PREFERE_NOT_TO_SHARE";
      Gender[Gender["MALE"] = 1] = "MALE";
      Gender[Gender["FEMALE"] = 2] = "FEMALE";
      Gender[Gender["NON_BINARY"] = 3] = "NON_BINARY";
    })(Gender || (Gender = {}));

    var Facility = function Facility() {
      _classCallCheck(this, Facility);
    };

    var FacilityModelDTO = function FacilityModelDTO() {
      _classCallCheck(this, FacilityModelDTO);
    };

    var Country = function Country() {
      _classCallCheck(this, Country);
    };

    var State = function State() {
      _classCallCheck(this, State);
    };

    var LocalSettings = function LocalSettings() {
      _classCallCheck(this, LocalSettings);
    };

    var TemperatureScale = function TemperatureScale() {
      _classCallCheck(this, TemperatureScale);
    };

    var UserLoginModel = function UserLoginModel() {
      _classCallCheck(this, UserLoginModel);
    };

    var BaseErrorViewModel = function BaseErrorViewModel() {
      _classCallCheck(this, BaseErrorViewModel);
    };

    var SignInErrorViewModel = /*#__PURE__*/function (_BaseErrorViewModel) {
      _inherits(SignInErrorViewModel, _BaseErrorViewModel);

      var _super4 = _createSuper(SignInErrorViewModel);

      function SignInErrorViewModel() {
        _classCallCheck(this, SignInErrorViewModel);

        return _super4.apply(this, arguments);
      }

      _createClass(SignInErrorViewModel, [{
        key: "setStateNoError",
        value: function setStateNoError() {
          this.emailError = false;
          this.passwordError = false;
          this.userNotActiveError = false;
          this.userNotFountError = false;
        }
      }]);

      return SignInErrorViewModel;
    }(BaseErrorViewModel);

    var UpdateUserModel = function UpdateUserModel() {
      _classCallCheck(this, UpdateUserModel);
    };
    /***/

  },

  /***/
  "./src/app/_services/api/api.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/_services/api/api.service.ts ***!
    \**********************************************/

  /*! exports provided: ApiService */

  /***/
  function srcApp_servicesApiApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ApiService = /*#__PURE__*/function () {
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;
      }

      _createClass(ApiService, [{
        key: "getCountries",
        value: function getCountries() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Countries');
        }
      }, {
        key: "getStates",
        value: function getStates() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/States');
        }
      }, {
        key: "getUser",
        value: function getUser(id) {
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/api/user/").concat(id));
        }
      }, {
        key: "login",
        value: function login(loginModel) {
          var body = JSON.stringify({
            userName: loginModel.email,
            password: loginModel.password
          });
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/auth/login', {
            userName: loginModel.email,
            password: loginModel.password
          });
        }
      }, {
        key: "signUp",
        value: function signUp(usignUpModel) {
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Auth/signin', usignUpModel);
        }
      }, {
        key: "restorePassword",
        value: function restorePassword(forgotpasswordModel) {
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/auth/forgot-password", forgotpasswordModel);
        }
      }, {
        key: "checkTest",
        value: function checkTest(body) {
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/checks', body);
        }
      }, {
        key: "updateProfile",
        value: function updateProfile(userId, updateModel) {
          return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/User/' + userId, updateModel);
        }
      }, {
        key: "updateChildProfile",
        value: function updateChildProfile(childId, updateModel) {
          return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/User/' + childId, updateModel);
        }
      }, {
        key: "getChecks",
        value: function getChecks(userId) {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/User/".concat(userId, "/checks"));
        }
      }, {
        key: "addFacility",
        value: function addFacility(body) {
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/User/add-facility-user', body);
        }
      }, {
        key: "getFacilityCode",
        value: function getFacilityCode(body) {
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Check/GetFacilityByCode', body);
        }
      }, {
        key: "updatePassword",
        value: function updatePassword(body) {
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/User/update-user-password', body);
        }
      }, {
        key: "getChildren",
        value: function getChildren() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/Children");
        }
      }, {
        key: "postChild",
        value: function postChild(body) {
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/Children", body);
        }
      }, {
        key: "postAddChildByCode",
        value: function postAddChildByCode(id) {
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/api/Children/").concat(id), {});
        }
      }, {
        key: "leaveFacility",
        value: function leaveFacility(userId, facilityId) {
          var params = {};
          params.userId = userId;
          params.facilityId = facilityId;
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/api/User/leave-facility"), params);
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    ApiService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], ApiService);
    /***/
  },

  /***/
  "./src/app/_services/auth.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/_services/auth.service.ts ***!
    \*******************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcApp_servicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(http) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
      }

      _createClass(AuthenticationService, [{
        key: "login",
        value: function login(loginModel) {
          var body = JSON.stringify({
            userName: loginModel.email,
            password: loginModel.password
          });
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/auth/login', {
            userName: loginModel.email,
            password: loginModel.password
          });
        }
      }, {
        key: "confirmEmailToken",
        value: function confirmEmailToken(body) {
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/auth/confirm-email-token', body);
        }
      }, {
        key: "refreshToken",
        value: function refreshToken(params) {
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/Auth/refresh', params);
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    AuthenticationService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/_services/customQuestionWizard/CustomSurveyModels.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/_services/customQuestionWizard/CustomSurveyModels.ts ***!
    \**********************************************************************/

  /*! exports provided: Question, ProgressBarViewModel */

  /***/
  function srcApp_servicesCustomQuestionWizardCustomSurveyModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Question", function () {
      return Question;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressBarViewModel", function () {
      return ProgressBarViewModel;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var Question = function Question() {
      _classCallCheck(this, Question);
    };

    var ProgressBarViewModel = function ProgressBarViewModel() {
      _classCallCheck(this, ProgressBarViewModel);
    };
    /***/

  },

  /***/
  "./src/app/_services/customQuestionWizard/customSurveyWizard.service.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/_services/customQuestionWizard/customSurveyWizard.service.ts ***!
    \******************************************************************************/

  /*! exports provided: CustomSurveyWizard, SequenceStepper, ProgressBarModel, SurveyAnswersService, SurveyResultFactory, AnswerModel */

  /***/
  function srcApp_servicesCustomQuestionWizardCustomSurveyWizardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomSurveyWizard", function () {
      return CustomSurveyWizard;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SequenceStepper", function () {
      return SequenceStepper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressBarModel", function () {
      return ProgressBarModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SurveyAnswersService", function () {
      return SurveyAnswersService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SurveyResultFactory", function () {
      return SurveyResultFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnswerModel", function () {
      return AnswerModel;
    });
    /* harmony import */


    var src_app_models_api_requestModels_checkRequestModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/_models/api/requestModels/checkRequestModel */
    "./src/app/_models/api/requestModels/checkRequestModel.ts");
    /* harmony import */


    var src_app_models_AppConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/_models/AppConstants */
    "./src/app/_models/AppConstants.ts");
    /* harmony import */


    var _CustomSurveyModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./CustomSurveyModels */
    "./src/app/_services/customQuestionWizard/CustomSurveyModels.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CustomSurveyWizard = /*#__PURE__*/function () {
      function CustomSurveyWizard(questions, locale) {
        _classCallCheck(this, CustomSurveyWizard);

        this.EN_LANGUAGE_CODE = src_app_models_AppConstants__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].EN_LANGUAGE_CODE;
        this.baseSurveyModel = [];
        this.currentSurvey = [];
        this.baseSurveyModel = questions;
        this.currentSurvey = this.parseSurvey(this.baseSurveyModel, locale);
        this.sequenceStepper = new SequenceStepper(this.currentSurvey);
        this.progressBarModel = new ProgressBarModel(this.currentSurvey.length);
        this.surveyAnswersService = new SurveyAnswersService();
      }

      _createClass(CustomSurveyWizard, [{
        key: "parseSurvey",
        value: function parseSurvey(baseSurvey, locale) {
          var _this = this;

          var localizedQuestions = baseSurvey.filter(function (x) {
            return x.languageCode === locale;
          });
          if (!localizedQuestions || localizedQuestions.length === 0) localizedQuestions = baseSurvey.filter(function (x) {
            return x.languageCode === _this.EN_LANGUAGE_CODE;
          });

          if (!localizedQuestions || localizedQuestions.length === 0) {
            var _locale = baseSurvey[0].languageCode;
            localizedQuestions = baseSurvey.filter(function (x) {
              return x.languageCode === _locale;
            });
          }

          if (!localizedQuestions || localizedQuestions.length === 0) throw "Survey not valid";
          var groupedQuestions = localizedQuestions.sort(function (x, y) {
            return x.order > y.order ? 1 : -1;
          });
          return groupedQuestions;
        }
      }, {
        key: "nowIsFirstQuestion",
        value: function nowIsFirstQuestion() {
          return this.sequenceStepper.isRichedFirstItem;
        }
      }, {
        key: "getProgressBarViewModel",
        value: function getProgressBarViewModel() {
          return this.progressBarModel.getProgressViewModel();
        }
      }, {
        key: "startWizard",
        value: function startWizard() {
          this.progressBarModel.start();
          this.sequenceStepper.start();
          this.surveyAnswersService.start();
          this.sequenceStepper.moveForward();
        }
      }, {
        key: "handleAnswer",
        value: function handleAnswer(answer) {
          this.surveyAnswersService.handleAnswer(this.sequenceStepper.currentItem, answer, this.sequenceStepper.index);
        }
      }, {
        key: "nextQuestion",
        value: function nextQuestion() {
          this.sequenceStepper.moveForward();
          this.progressBarModel.moveForward();
          return this.sequenceStepper.currentItem;
        }
      }, {
        key: "getCurrentQuestion",
        value: function getCurrentQuestion() {
          return this.sequenceStepper.currentItem;
        }
      }, {
        key: "previousQuestion",
        value: function previousQuestion() {
          this.sequenceStepper.moveBack();
          this.progressBarModel.moveBack();
          return this.sequenceStepper.currentItem;
        }
      }, {
        key: "ifFinished",
        value: function ifFinished() {
          return this.sequenceStepper.isRichedLastItem;
        }
      }, {
        key: "getSurveyAnswers",
        value: function getSurveyAnswers(userId, facilityId, surveyId) {
          return SurveyResultFactory.GetResult(userId, facilityId, surveyId, this.surveyAnswersService.answers);
        }
      }]);

      return CustomSurveyWizard;
    }();

    var SequenceStepper = /*#__PURE__*/function () {
      function SequenceStepper(sequence) {
        _classCallCheck(this, SequenceStepper);

        this.currentSequence = [];
        this.currentIndex = -1;
        this._isRichedLastItem = false;
        this.currentSequence = sequence;
      }

      _createClass(SequenceStepper, [{
        key: "start",
        value: function start() {
          this.currentIndex = -1;
          this._isRichedLastItem = false;
        }
      }, {
        key: "moveForward",
        value: function moveForward() {
          this.currentIndex++;

          if (this.currentIndex === this.currentSequence.length) {
            this.currentIndex = this.currentSequence.length - 1;
            this._isRichedLastItem = true;
          }

          return this.currentItem;
        }
      }, {
        key: "moveBack",
        value: function moveBack() {
          this.currentIndex--;
          if (this.currentIndex < 0) this.currentIndex = 0;
          return this.currentItem;
        }
      }, {
        key: "isRichedFirstItem",
        get: function get() {
          return this.currentIndex === 0;
        }
      }, {
        key: "isRichedLastItem",
        get: function get() {
          return this._isRichedLastItem;
        }
      }, {
        key: "index",
        get: function get() {
          return this.currentIndex;
        }
      }, {
        key: "currentItem",
        get: function get() {
          return this.currentSequence[this.currentIndex];
        }
      }]);

      return SequenceStepper;
    }();

    var ProgressBarModel = /*#__PURE__*/function () {
      function ProgressBarModel(questionsCount) {
        _classCallCheck(this, ProgressBarModel);

        this.questionsCount = questionsCount;
        this.currentQuestionNumber = 1;
      }

      _createClass(ProgressBarModel, [{
        key: "start",
        value: function start() {
          this.currentQuestionNumber = 1;
        }
      }, {
        key: "moveForward",
        value: function moveForward() {
          this.currentQuestionNumber++;
          if (this.currentQuestionNumber === this.questionsCount) this.currentQuestionNumber = this.questionsCount;
        }
      }, {
        key: "moveBack",
        value: function moveBack() {
          if (this.currentQuestionNumber === 1) return;
          this.currentQuestionNumber--;
        }
      }, {
        key: "getProgress",
        value: function getProgress() {
          var p = this.currentQuestionNumber / this.questionsCount * 100;
          return p;
        }
      }, {
        key: "getProgressViewModel",
        value: function getProgressViewModel() {
          var progressBarViewModel = new _CustomSurveyModels__WEBPACK_IMPORTED_MODULE_2__["ProgressBarViewModel"]();
          progressBarViewModel.currentQuestion = this.currentQuestionNumber;
          progressBarViewModel.questionsCount = this.questionsCount;
          progressBarViewModel.progress = this.getProgress();
          return progressBarViewModel;
        }
      }]);

      return ProgressBarModel;
    }();

    var SurveyAnswersService = /*#__PURE__*/function () {
      function SurveyAnswersService() {
        _classCallCheck(this, SurveyAnswersService);

        this._answers = [];
      }

      _createClass(SurveyAnswersService, [{
        key: "start",
        value: function start() {
          this._answers = new Array();
        }
      }, {
        key: "handleAnswer",
        value: function handleAnswer(question, answer, currentIndex) {
          var model = new AnswerModel(question, answer);
          this._answers[currentIndex] = model;
        }
      }, {
        key: "answers",
        get: function get() {
          return this._answers;
        }
      }]);

      return SurveyAnswersService;
    }();

    var SurveyResultFactory = /*#__PURE__*/function () {
      function SurveyResultFactory() {
        _classCallCheck(this, SurveyResultFactory);
      }

      _createClass(SurveyResultFactory, null, [{
        key: "GetResult",
        value: function GetResult(userId, facilityId, surveyId, answers) {
          var requestModel = new src_app_models_api_requestModels_checkRequestModel__WEBPACK_IMPORTED_MODULE_0__["CheckRequestModel"]();
          requestModel.userId = userId;
          requestModel.facilityId = facilityId;
          requestModel.surveyId = surveyId;
          answers.forEach(function (item) {
            var answerRequestModel = new src_app_models_api_requestModels_checkRequestModel__WEBPACK_IMPORTED_MODULE_0__["AnswerRequestModel"]();
            answerRequestModel.questionGroupId = item.question.questionGroupId;
            answerRequestModel.value = item.answer;
            requestModel.answers.push(answerRequestModel);
          });
          return requestModel;
        }
      }]);

      return SurveyResultFactory;
    }();

    var AnswerModel = function AnswerModel(question, answer) {
      _classCallCheck(this, AnswerModel);

      this.question = question;
      this.answer = answer;
    };
    /***/

  },

  /***/
  "./src/app/_services/data-provider/data-provider.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/_services/data-provider/data-provider.service.ts ***!
    \******************************************************************/

  /*! exports provided: DataProviderService, DataProviderHelper */

  /***/
  function srcApp_servicesDataProviderDataProviderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataProviderService", function () {
      return DataProviderService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataProviderHelper", function () {
      return DataProviderHelper;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _dataProviderExtension_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dataProviderExtension.service */
    "./src/app/_services/data-provider/dataProviderExtension.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var DataProviderService = /*#__PURE__*/function () {
      function DataProviderService(firestore, afAuth) {
        _classCallCheck(this, DataProviderService);

        this.firestore = firestore;
        this.afAuth = afAuth; // private fireNews: any = [];

        this.initialized = false;
        this.dataProviderHelper = new DataProviderHelper();
      }

      _createClass(DataProviderService, [{
        key: "init",
        value: function init() {
          var _this2 = this;

          var promise = new Promise(function (resolve, reject) {
            if (_this2.initialized) {
              console.log("DataProviderService ready");
              resolve("Success!");
              return;
            }

            console.log("💥 DataProviderService init start");

            _this2.initFirebaseAnonimus().then(function (res) {
              resolve("Success!");
              _this2.initialized = true;
            });
          });
          return promise;
        }
      }, {
        key: "initFirebaseAnonimus",
        value: function initFirebaseAnonimus() {
          var _this3 = this;

          var promise = new Promise(function (resolve, reject) {
            _this3.afAuth.auth.signInAnonymously().then(function () {
              console.log("✅ firebase initialized");
              var fireNews = [];

              _this3.firestore.collection('global_news').get().subscribe(function (fireItem) {
                var labelId = 0;
                fireItem.docs.forEach(function (item) {
                  var el = _this3.parseFirebaseItem(item.data(), item.id, labelId);

                  fireNews.push(el);
                  labelId++;
                });

                _this3.dataProviderHelper.init(fireNews);

                console.log("🌐 firebase: got global_news");
                console.log(fireNews);
                resolve("Success!");
              });
            });
          });
          return promise;
        }
      }, {
        key: "initTestData",
        value: function initTestData() {
          var fireNews = [];

          for (var index = 0; index < 10; index++) {
            var d1 = {
              fullText: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
              shortText: "\u0442\u0435\u0441\u0442hh\nN\nM\nM\nUu\nU\nJ\n ..",
              imageUrl: "assets/images/background/post-icon.svg",
              images: ["assets/images/background/post-icon.svg"],
              subtitle: "",
              title: "\u0422\u0435\u0441\u0442 \u043D\u043E\u0432\u043E\u0441\u0442\u044C ".concat(index),
              id: index.toString(),
              category: "Tw9CypPH0HU9MGVOp8S1",
              categoryName: "Освітні події",
              date: new Date("1970-01-19"),
              dateViewModel: "1970-01-19",
              image_F_Url: "assets/images/background/post-icon.svg",
              info: "тестhh\nN\nM\nM\nUu\nU\nJ\nJj\nJ\nJ\nJ\nJhu\nUyy\nYjh\nHh\nHhh\nH\n\nHh\nHhh\n\nH\nH\nH\nH\nHh\n\nH\nH\nH\nH",
              likes: 1,
              name: "тест новость",
              views: 3
            };

            if (index === 1) {
              d1.imageUrl = "assets/images/background/test/test-1.jpg";
              d1.images = ["assets/images/background/test/test-1.jpg", "assets/images/background/test/test-2.jpg"];
              d1.fullText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum \n\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
            }

            if (index === 2) {
              d1.imageUrl = "assets/images/background/test/test-8.jpg";
              d1.images = ["assets/images/background/test/test-1.jpg", "assets/images/background/test/test-2.jpg", "assets/images/background/test/test-3.jpg", "assets/images/background/test/test-8.jpg"];
              d1.fullText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum \n\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
            }

            fireNews.push(d1);
          }

          this.dataProviderHelper.init(fireNews);
        }
      }, {
        key: "parseFirebaseItem",
        value: function parseFirebaseItem(item, id, labelId) {
          console.log("⚪ fire db item: ", item);
          console.log("_________\n\n");
          var location;

          if (item.lon && item.lon[0] && item.lat && item.lat[0]) {
            location = {
              lon: item.lon[0],
              lat: item.lat[0]
            };
          }

          var itemImageUrl = "assets/background/default.jpg";

          if (item.image_f_url && item.image_f_url[0]) {
            itemImageUrl = item.image_f_url[0];
          }

          var itemImages = [];

          if (item.image_f_url) {
            itemImages = item.image_f_url;
          }

          var model = {
            labelId: labelId,
            fullText: item.info,
            shortText: "".concat(item.info.substring(0, 120), " ..."),
            imageUrl: itemImageUrl,
            images: itemImages,
            subtitle: "",
            title: item.name,
            id: id,
            category: item.category,
            categoryName: item.category_name,
            date: new Date(item.date.seconds),
            dateViewModel: _dataProviderExtension_service__WEBPACK_IMPORTED_MODULE_3__["DataProviderExtension"].dateTimeToUkrainianString(item.date.seconds),
            image_F_Url: itemImageUrl,
            info: item.info,
            likes: item.likes,
            name: item.name,
            views: item.views,
            price: item.price,
            site: item.site,
            street: item.street,
            time: item.time,
            location: location
          };
          return model;
        }
      }, {
        key: "getById",
        value: function getById(id) {
          var _this4 = this;

          var promise = new Promise(function (resolve, reject) {
            if (!_this4.initialized) {
              _this4.init().then(function () {
                resolve(_this4.dataProviderHelper.getById(id));
              });

              return;
            }

            var result = _this4.dataProviderHelper.getById(id);

            resolve(result);
          });
          return promise;
        }
      }, {
        key: "getAll",
        value: function getAll() {
          var _this5 = this;

          var promise = new Promise(function (resolve, reject) {
            if (!_this5.initialized) {
              _this5.init().then(function () {
                resolve(_this5.dataProviderHelper.getAll());
              });

              return;
            }

            resolve(_this5.dataProviderHelper.getAll());
          });
          return promise;
        }
      }, {
        key: "getPagedArticles",
        value: function getPagedArticles(skip, take) {
          return this.dataProviderHelper.getPagedArticles(skip, take);
        }
      }, {
        key: "uuidv4",
        value: function uuidv4() {
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : r & 0x3 | 0x8;
            return v.toString(16);
          });
        }
      }]);

      return DataProviderService;
    }();

    DataProviderService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]
      }];
    };

    DataProviderService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])], DataProviderService);

    var DataProviderHelper = /*#__PURE__*/function () {
      function DataProviderHelper() {
        _classCallCheck(this, DataProviderHelper);

        this.data = [];
      }

      _createClass(DataProviderHelper, [{
        key: "init",
        value: function init(data) {
          if (!data) return;
          this.data = data;
        }
      }, {
        key: "getById",
        value: function getById(id) {
          var result;
          var article = this.data.find(function (x) {
            return x.id === id;
          });
          if (article) result = {
            success: true,
            item: article
          };else result = {
            success: false,
            item: article
          };
          return result;
        }
      }, {
        key: "getPagedArticles",
        value: function getPagedArticles(skip, take) {
          return this.data.slice(skip, take);
        }
      }, {
        key: "getAll",
        value: function getAll() {
          return this.data;
        }
      }]);

      return DataProviderHelper;
    }();
    /***/

  },

  /***/
  "./src/app/_services/data-provider/dataProviderExtension.service.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/_services/data-provider/dataProviderExtension.service.ts ***!
    \**************************************************************************/

  /*! exports provided: DataProviderExtension */

  /***/
  function srcApp_servicesDataProviderDataProviderExtensionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataProviderExtension", function () {
      return DataProviderExtension;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var DataProviderExtension = /*#__PURE__*/function () {
      function DataProviderExtension() {
        _classCallCheck(this, DataProviderExtension);
      }

      _createClass(DataProviderExtension, null, [{
        key: "dateTimeToUkrainianString",
        value: function dateTimeToUkrainianString(miliseconds) {
          var d = new Date(miliseconds * 1000);
          var cDay = d.getDate();
          var cYear = d.getFullYear();
          var cMonth = this.monthNamesUK[d.getMonth()];
          return "".concat(cDay, " ").concat(cMonth, " ").concat(cYear);
        }
      }, {
        key: "splitSequenceToRows",
        value: function splitSequenceToRows(source, eltInOneRow) {
          debugger;
          var x = source.length / eltInOneRow;
          var rowsCount = Math.trunc(x); // returns 3

          var float_part = Number((x - rowsCount).toFixed(2)); // return 0.2

          if (float_part > 0) rowsCount++;
          var result = [];

          for (var index = 0; index < rowsCount; index++) {
            var part = source.slice(index * eltInOneRow, eltInOneRow);
            result.push(part);
          }

          return result;
        }
      }]);

      return DataProviderExtension;
    }();

    DataProviderExtension.monthNamesEN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    DataProviderExtension.monthNamesUK = ["cічня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];
    /***/
  },

  /***/
  "./src/app/_services/data-sharing.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/_services/data-sharing.service.ts ***!
    \***************************************************/

  /*! exports provided: DataSharingService */

  /***/
  function srcApp_servicesDataSharingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataSharingService", function () {
      return DataSharingService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var DataSharingService = function DataSharingService() {
      _classCallCheck(this, DataSharingService);

      this.selectedFacility = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
      this.test = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
      this.childAdded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    };

    DataSharingService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], DataSharingService);
    /***/
  },

  /***/
  "./src/app/_services/guard.service.ts":
  /*!********************************************!*\
    !*** ./src/app/_services/guard.service.ts ***!
    \********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcApp_servicesGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _localStorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./localStorage.service */
    "./src/app/_services/localStorage.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(_router, _userService) {
        _classCallCheck(this, AuthGuard);

        this._router = _router;
        this._userService = _userService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var result = this._userService.verify();

          if (result) return true;

          this._router.navigate(['/login'], {
            queryParams: {
              returnUrl: state.url
            }
          });
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _localStorage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]
      }];
    };

    AuthGuard = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _localStorage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/_services/helpers/apiBaseRequests.ts":
  /*!******************************************************!*\
    !*** ./src/app/_services/helpers/apiBaseRequests.ts ***!
    \******************************************************/

  /*! exports provided: ApiBaseRequests */

  /***/
  function srcApp_servicesHelpersApiBaseRequestsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiBaseRequests", function () {
      return ApiBaseRequests;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_api_requestModels_getCountriesStatesModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/_models/api/requestModels/getCountriesStatesModel */
    "./src/app/_models/api/requestModels/getCountriesStatesModel.ts");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api/api.service */
    "./src/app/_services/api/api.service.ts");
    /* harmony import */


    var _localStorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../localStorage.service */
    "./src/app/_services/localStorage.service.ts");
    /* harmony import */


    var _childMapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./childMapper */
    "./src/app/_services/helpers/childMapper.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
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
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ApiBaseRequests = /*#__PURE__*/function () {
      function ApiBaseRequests(apiService, localStorageService) {
        _classCallCheck(this, ApiBaseRequests);

        this.apiService = apiService;
        this.localStorageService = localStorageService;
      }

      _createClass(ApiBaseRequests, [{
        key: "getChildren",
        value: function getChildren() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var childrenResponseModel, children, index, item, getUserByIdResponse, child;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.apiService.getChildren().toPromise();

                  case 2:
                    childrenResponseModel = _context.sent;
                    children = [];
                    index = 0;

                  case 5:
                    if (!(index < childrenResponseModel.items.length)) {
                      _context.next = 15;
                      break;
                    }

                    item = childrenResponseModel.items[index];
                    _context.next = 9;
                    return this.apiService.getUser(item.id).toPromise();

                  case 9:
                    getUserByIdResponse = _context.sent;
                    child = _childMapper__WEBPACK_IMPORTED_MODULE_4__["ChildMapper"].mapGetUserByIdResponseToChildModel(item.id, getUserByIdResponse);
                    children.push(child);

                  case 12:
                    index++;
                    _context.next = 5;
                    break;

                  case 15:
                    this.localStorageService.setChildren(children);

                  case 16:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getCountriesStates",
        value: function getCountriesStates() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var response, getCountriesResponse, getStatesResponse;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    response = new src_app_models_api_requestModels_getCountriesStatesModel__WEBPACK_IMPORTED_MODULE_1__["GetCountriesStatesModel"]();
                    _context2.next = 3;
                    return this.apiService.getCountries().toPromise();

                  case 3:
                    getCountriesResponse = _context2.sent;
                    response.countries = getCountriesResponse.items;
                    this.localStorageService.setCountries(response.countries);
                    _context2.next = 8;
                    return this.apiService.getStates().toPromise();

                  case 8:
                    getStatesResponse = _context2.sent;
                    response.states = getStatesResponse.items;
                    this.localStorageService.setStates(response.states);
                    return _context2.abrupt("return", new Promise(function (resolve) {
                      resolve(response);
                    }));

                  case 12:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return ApiBaseRequests;
    }();

    ApiBaseRequests.ctorParameters = function () {
      return [{
        type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _localStorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]
      }];
    };

    ApiBaseRequests = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _localStorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])], ApiBaseRequests);
    /***/
  },

  /***/
  "./src/app/_services/helpers/childMapper.ts":
  /*!**************************************************!*\
    !*** ./src/app/_services/helpers/childMapper.ts ***!
    \**************************************************/

  /*! exports provided: ChildMapper */

  /***/
  function srcApp_servicesHelpersChildMapperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChildMapper", function () {
      return ChildMapper;
    });
    /* harmony import */


    var src_app_models_api_requestModels_createChildRequestModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/_models/api/requestModels/createChildRequestModel */
    "./src/app/_models/api/requestModels/createChildRequestModel.ts");
    /* harmony import */


    var src_app_models_api_requestModels_editProfileRequestModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/_models/api/requestModels/editProfileRequestModel */
    "./src/app/_models/api/requestModels/editProfileRequestModel.ts");
    /* harmony import */


    var src_app_models_children_child__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_models/children/child */
    "./src/app/_models/children/child.ts");
    /* harmony import */


    var src_app_models_children_editChildModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_models/children/editChildModel */
    "./src/app/_models/children/editChildModel.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ChildMapper = /*#__PURE__*/function () {
      function ChildMapper() {
        _classCallCheck(this, ChildMapper);
      }

      _createClass(ChildMapper, null, [{
        key: "mapCreateChildRequest",
        value: function mapCreateChildRequest(child) {
          var model = new src_app_models_api_requestModels_createChildRequestModel__WEBPACK_IMPORTED_MODULE_0__["CreateChildRequestModel"]();
          model.firstName = child.firstName;
          model.lastName = child.lastName;
          model.gender = child.gender;
          model.countryId = child.countryId;
          model.stateId = child.stateId;
          model.dateOfBirth = '';

          try {
            var numbers = child.dateOfBirth.split('/');
            var month = numbers[0];
            var date = numbers[1];
            var year = numbers[2];
            model.dateOfBirth = "".concat(year, "-").concat(month, "-").concat(date);
          } catch (ex) {}

          return model;
        }
      }, {
        key: "mapEditChildRequest",
        value: function mapEditChildRequest(child) {
          var model = new src_app_models_api_requestModels_editProfileRequestModel__WEBPACK_IMPORTED_MODULE_1__["EditProfileRequestModel"]();
          model.firstName = child.firstName;
          model.lastName = child.lastName;
          model.gender = child.gender;
          model.countryId = child.countryId;
          model.stateId = child.stateId;
          model.dateOfBirth = ChildMapper.parseUIStringToDateOfBirthRequestString(child.dateOfBirth);
          return model;
        }
      }, {
        key: "mapGetUserByIdResponseToChildModel",
        value: function mapGetUserByIdResponseToChildModel(id, response) {
          var child = new src_app_models_children_child__WEBPACK_IMPORTED_MODULE_2__["Child"]();
          child.id = id;
          child.firstName = response.firstName;
          child.lastName = response.lastName;
          child.gender = response.gender;
          child.country = response.country;
          child.state = response.state;
          child.facilities = response.facilities;
          child.dateOfBirth = response.dateOfBirth;
          return child;
        }
      }, {
        key: "mapChildToEditChildMoldel",
        value: function mapChildToEditChildMoldel(child) {
          var editModel = new src_app_models_children_editChildModel__WEBPACK_IMPORTED_MODULE_3__["EditChildModel"]();
          editModel.firstName = child.firstName;
          editModel.lastName = child.lastName;
          editModel.gender = child.gender;
          if (child.country && child.country.id) editModel.countryId = child.country.id;
          if (child.state && child.state.id) editModel.stateId = child.state.id;
          editModel.dateOfBirth = ChildMapper.parseDateOfBirthToUIString(child.dateOfBirth);
          return editModel;
        }
      }, {
        key: "parseUIStringToDateOfBirthRequestString",
        value: function parseUIStringToDateOfBirthRequestString(dateString) {
          var result = '';

          try {
            var numbers = dateString.split('/');
            var month = numbers[0];
            var date = numbers[1];
            var year = numbers[2];
            if (month && date && year) result = "".concat(year, "-").concat(month, "-").concat(date);else console.error("DateOfBirth string wrong format: ".concat(dateString));
          } catch (ex) {}

          return result;
        } //dateString format 2020-01-01T00:00:00+00:00 to 01/01/2020

      }, {
        key: "parseDateOfBirthToUIString",
        value: function parseDateOfBirthToUIString(dateString) {
          var result = '';

          try {
            var yearMonthDate = dateString.split('T')[0];
            if (!yearMonthDate) return "";
            var splitted = yearMonthDate.split('-');
            var year = splitted[0];
            var month = splitted[1];
            var date = splitted[2];
            if (!year || !month || !date) return "";
            result = "".concat(month, "/").concat(date, "/").concat(year);
          } catch (ex) {}

          return result;
        }
      }]);

      return ChildMapper;
    }();
    /***/

  },

  /***/
  "./src/app/_services/helpers/contentHelper.ts":
  /*!****************************************************!*\
    !*** ./src/app/_services/helpers/contentHelper.ts ***!
    \****************************************************/

  /*! exports provided: ContentHelper */

  /***/
  function srcApp_servicesHelpersContentHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentHelper", function () {
      return ContentHelper;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ContentHelper = /*#__PURE__*/function () {
      function ContentHelper() {
        _classCallCheck(this, ContentHelper);
      }

      _createClass(ContentHelper, null, [{
        key: "showEmailVerifyModal",
        value: function showEmailVerifyModal() {
          var body = document.querySelector('body');
          body.classList.add('modal-email-verify');
        }
      }, {
        key: "closeEmailVerifyModal",
        value: function closeEmailVerifyModal() {
          var body = document.querySelector('body');
          body.classList.remove('modal-email-verify');
        }
      }, {
        key: "setLoading",
        value: function setLoading(enable) {
          var loadingBackground = $('#loading-background');
          var loadingIndicator = $('#loading-indicator');

          if (enable) {
            loadingBackground.removeClass('hide-block');
            loadingIndicator.removeClass('hide-block');
            loadingBackground.addClass('show-block');
            loadingIndicator.addClass('show-block');
          } else {
            loadingBackground.removeClass('show-block');
            loadingIndicator.removeClass('show-block');
            loadingBackground.addClass('hide-block');
            loadingIndicator.addClass('hide-block');
          }
        }
      }, {
        key: "chooseTabMyProfileChildren",
        value: function chooseTabMyProfileChildren() {
          var profileTabNav = document.querySelectorAll('.tabs__link');
          profileTabNav.forEach(function (item) {
            item.classList.remove('tabs__link--active');
          });
          var tab = document.querySelector('.children-tab-js');

          if (tab) {
            tab.classList.add('tabs__link--active');
          }
        }
      }]);

      return ContentHelper;
    }();
    /***/

  },

  /***/
  "./src/app/_services/helpers/interceptor.ts":
  /*!**************************************************!*\
    !*** ./src/app/_services/helpers/interceptor.ts ***!
    \**************************************************/

  /*! exports provided: AppInterceptor */

  /***/
  function srcApp_servicesHelpersInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppInterceptor", function () {
      return AppInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _localStorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../localStorage.service */
    "./src/app/_services/localStorage.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppInterceptor = /*#__PURE__*/function () {
      function AppInterceptor(toastr, _router, http, authService, localStorageService) {
        _classCallCheck(this, AppInterceptor);

        this.toastr = toastr;
        this._router = _router;
        this.http = http;
        this.authService = authService;
        this.localStorageService = localStorageService;
        this.isRefreshing = false;
        this.TOKEN_EXPIRED = 'Token-Expired';
        this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
      }

      _createClass(AppInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this6 = this;

          var currentUser = JSON.parse(localStorage.getItem("currentUser"));

          if (currentUser && currentUser.token) {
            request = this.addToken(request, currentUser.token);
          }

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            //const isTokenExpired = error.headers.get(this.TOKEN_EXPIRED);
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] && error.status === 401) {
              return _this6.handle401Error(request, next, currentUser);
            }

            _this6.showToastrError(request, error);

            return next.handle(request);
          }));
        }
      }, {
        key: "handle401Error",
        value: function handle401Error(request, next, currentUser) {
          var _this7 = this;

          if (!this.isRefreshing) {
            console.log("token refreshing");
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);
            return this.refreshToken(currentUser).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (token) {
              _this7.isRefreshing = false;

              _this7.refreshTokenSubject.next(token.accessToken);

              return next.handle(_this7.addToken(request, token.accessToken));
            }));
          } else {
            return this.refreshTokenSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (token) {
              return token != null;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (jwt) {
              return next.handle(_this7.addToken(request, jwt));
            }));
          }
        }
      }, {
        key: "refreshToken",
        value: function refreshToken(currentUser) {
          var _this8 = this;

          var params = {
            accessToken: currentUser.token,
            refreshToken: currentUser.refreshToken
          };
          return this.authService.refreshToken(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
            _this8.updateUserToken(currentUser, response.accessToken, response.refreshToken);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this8.isRefreshing = false;
            localStorage.removeItem("currentUser");

            _this8._router.navigate(['/login']);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
          }));
        }
      }, {
        key: "updateUserToken",
        value: function updateUserToken(currentUser, accessToken, refreshToken) {
          currentUser.token = accessToken;
          currentUser.refreshToken = refreshToken;
          this.localStorageService.updateUserTokens(accessToken, refreshToken);
        }
      }, {
        key: "addToken",
        value: function addToken(request, token) {
          var authHeader = "Bearer ".concat(token);
          return request = request.clone({
            headers: request.headers.set('Authorization', authHeader)
          });
        }
      }, {
        key: "showToastrError",
        value: function showToastrError(request, error) {
          if (error.status === 0) {
            this.showErrorToastr(request, error);
            return;
          }

          if (!error.status || !error.message) return;

          if (error.status === 500) {
            this.handle500(request, error);
            return;
          }

          if (error.status === 404) {
            //this.showErrorToastr(request, error);
            return;
          }

          if (error.status === 401) {
            localStorage.removeItem("currentUser");

            this._router.navigate(['/login']);

            return;
          }
        }
      }, {
        key: "handle500",
        value: function handle500(request, error) {
          var errorMessage = "Error occurred for request ".concat(request.url, " <br>StatusCode: ").concat(error.status, "<br><br>").concat(error.message);

          if (error.error) {
            if (error.error.Message) errorMessage += "<hr style=\"border-top: 1px solid rgba(225,225,225);\"><b>Details:</b><br>".concat(error.error.Message);
            if (error.error.StackTrace) console.error(error.error.StackTrace);
          }

          this.toastr.errorToastr(errorMessage, 'Oops!', {
            enableHTML: true,
            dismiss: "click",
            showCloseButton: true
          });
        }
      }, {
        key: "showErrorToastr",
        value: function showErrorToastr(request, error) {
          var errorMessage = "Error occurred for request ".concat(request.url, " <br>StatusCode: ").concat(error.status, "<br><br>").concat(error.message);
          this.toastr.errorToastr(errorMessage, 'Oops!', {
            enableHTML: true,
            dismiss: "click",
            showCloseButton: true
          });
        }
      }]);

      return AppInterceptor;
    }();

    AppInterceptor.ctorParameters = function () {
      return [{
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
      }, {
        type: _localStorage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]
      }];
    };

    AppInterceptor = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], _localStorage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]])], AppInterceptor);
    /***/
  },

  /***/
  "./src/app/_services/helpers/validationService.ts":
  /*!********************************************************!*\
    !*** ./src/app/_services/helpers/validationService.ts ***!
    \********************************************************/

  /*! exports provided: ValidationService */

  /***/
  function srcApp_servicesHelpersValidationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidationService", function () {
      return ValidationService;
    });
    /* harmony import */


    var _models_AppConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../_models/AppConstants */
    "./src/app/_models/AppConstants.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ValidationService = /*#__PURE__*/function () {
      function ValidationService() {
        _classCallCheck(this, ValidationService);
      }

      _createClass(ValidationService, null, [{
        key: "ifEmailMatchPattern",
        value: function ifEmailMatchPattern(email) {
          var regexp = new RegExp(_models_AppConstants__WEBPACK_IMPORTED_MODULE_0__["InputPatterns"].EMAIL_PATTERN);
          var res = regexp.test(email);
          return res;
        }
      }, {
        key: "ifPasswordMatchPattern",
        value: function ifPasswordMatchPattern(password) {
          var regexp = new RegExp(_models_AppConstants__WEBPACK_IMPORTED_MODULE_0__["InputPatterns"].PASSWORD_PATTERN);
          var res = regexp.test(password);
          return res;
        }
      }, {
        key: "ifNameMatchPattern",
        value: function ifNameMatchPattern(nameOrUserName) {
          var regexp = new RegExp(_models_AppConstants__WEBPACK_IMPORTED_MODULE_0__["InputPatterns"].USER_NAME_PATTERN);
          return regexp.test(nameOrUserName);
        }
      }]);

      return ValidationService;
    }();
    /***/

  },

  /***/
  "./src/app/_services/language.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/_services/language.service.ts ***!
    \***********************************************/

  /*! exports provided: LanguageService */

  /***/
  function srcApp_servicesLanguageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageService", function () {
      return LanguageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_AppConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_models/AppConstants */
    "./src/app/_models/AppConstants.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var LanguageService = /*#__PURE__*/function () {
      function LanguageService() {
        _classCallCheck(this, LanguageService);
      }

      _createClass(LanguageService, [{
        key: "getCurrentLanguage",
        value: function getCurrentLanguage() {
          if (navigator) return this.parseLanguageCode(navigator.language);else _models_AppConstants__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].EN_LANGUAGE_CODE;
        }
      }, {
        key: "parseLanguageCode",
        value: function parseLanguageCode(code) {
          var result;

          try {
            result = code.split('-')[0];
          } catch (ex) {
            result = _models_AppConstants__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].EN_LANGUAGE_CODE;
          }

          if (!result) {
            return _models_AppConstants__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].EN_LANGUAGE_CODE;
          }

          return result;
        }
      }]);

      return LanguageService;
    }();

    LanguageService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], LanguageService);
    /***/
  },

  /***/
  "./src/app/_services/localStorage.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/_services/localStorage.service.ts ***!
    \***************************************************/

  /*! exports provided: LocalStorageService */

  /***/
  function srcApp_servicesLocalStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalStorageService", function () {
      return LocalStorageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var LocalStorageService = /*#__PURE__*/function () {
      function LocalStorageService() {
        _classCallCheck(this, LocalStorageService);

        this.LOCAL_STORAGE_USER_KEY = 'currentUser';
        this.LOCAL_STORAGE_CHILDREN_KEY = 'children';
        this.LOCAL_STORAGE_COUNTRIES_KEY = "countries";
        this.LOCAL_STORAGE_STATES_KEY = "states";
      }

      _createClass(LocalStorageService, [{
        key: "verify",
        value: function verify() {
          return localStorage.getItem(this.LOCAL_STORAGE_USER_KEY);
        }
      }, {
        key: "setUser",
        value: function setUser(user) {
          localStorage.setItem(this.LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
        }
      }, {
        key: "updateUserTokens",
        value: function updateUserTokens(accessToken, refreshToken) {
          var currentUser = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_USER_KEY));
          currentUser.token = accessToken;
          currentUser.refreshToken = refreshToken;
          localStorage.removeItem(this.LOCAL_STORAGE_USER_KEY);
          localStorage.setItem(this.LOCAL_STORAGE_USER_KEY, JSON.stringify(currentUser));
          console.log("Token updated");
        }
      }, {
        key: "getCountries",
        value: function getCountries() {
          var countries = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_COUNTRIES_KEY));
          return countries;
        }
      }, {
        key: "getStates",
        value: function getStates() {
          var states = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_STATES_KEY));
          return states;
        }
      }, {
        key: "setCountries",
        value: function setCountries(countries) {
          localStorage.setItem(this.LOCAL_STORAGE_COUNTRIES_KEY, JSON.stringify(countries));
        }
      }, {
        key: "setStates",
        value: function setStates(states) {
          localStorage.setItem(this.LOCAL_STORAGE_STATES_KEY, JSON.stringify(states));
        }
      }, {
        key: "getUser",
        value: function getUser() {
          var user = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_USER_KEY));

          if (!this.userModelIsValid(user)) {
            localStorage.removeItem(this.LOCAL_STORAGE_USER_KEY);
            return undefined;
          }

          return user;
        }
      }, {
        key: "getChildren",
        value: function getChildren() {
          return JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_CHILDREN_KEY));
        }
      }, {
        key: "getChildById",
        value: function getChildById(id) {
          if (!id) throw "[getChildById]: Id not valid!";
          var children = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_CHILDREN_KEY));
          var child = children.find(function (item) {
            return item.id === id;
          });
          if (!child) throw "[getChildById]: Child not found!";
          return child;
        }
      }, {
        key: "setChildren",
        value: function setChildren(children) {
          localStorage.setItem(this.LOCAL_STORAGE_CHILDREN_KEY, JSON.stringify(children));
        }
      }, {
        key: "userModelIsValid",
        value: function userModelIsValid(user) {
          if (!user) return false;

          if (user.id === undefined && user.userId !== undefined) {
            user.id = user.userId;
            this.setUser(user);
          }

          if (!user.id) return false;
          if (!user.token) return false;
          if (!user.refreshToken) return false;
          if (!user.email) return false;
          return true;
        }
      }]);

      return LocalStorageService;
    }();

    LocalStorageService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], LocalStorageService);
    /***/
  },

  /***/
  "./src/app/_services/qrCode.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/_services/qrCode.service.ts ***!
    \*********************************************/

  /*! exports provided: QRCodeService, QRCodeData */

  /***/
  function srcApp_servicesQrCodeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QRCodeService", function () {
      return QRCodeService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QRCodeData", function () {
      return QRCodeData;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var QRCodeService = /*#__PURE__*/function () {
      function QRCodeService() {
        _classCallCheck(this, QRCodeService);
      }

      _createClass(QRCodeService, null, [{
        key: "generateQRCode",
        value: function generateQRCode(dynamicLink) {
          var qrCodeData = new QRCodeData();
          qrCodeData.elementType = "img";
          qrCodeData.level = "M";
          qrCodeData.qrdata = dynamicLink;
          qrCodeData.scale = 1;
          qrCodeData.width = 256;
          return qrCodeData;
        }
      }]);

      return QRCodeService;
    }();

    var QRCodeData = function QRCodeData() {
      _classCallCheck(this, QRCodeData);

      this.qrdata = "";
      this.elementType = "img";
      this.level = "M";
      this.scale = 1;
      this.width = 256;
    };
    /***/

  },

  /***/
  "./src/app/_services/route-handler.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/_services/route-handler.service.ts ***!
    \****************************************************/

  /*! exports provided: RouteHandlerService */

  /***/
  function srcApp_servicesRouteHandlerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RouteHandlerService", function () {
      return RouteHandlerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_app_component_viewModels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_models/app-component/viewModels */
    "./src/app/_models/app-component/viewModels.ts");
    /* harmony import */


    var _helpers_contentHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./helpers/contentHelper */
    "./src/app/_services/helpers/contentHelper.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var RouteEnum;

    (function (RouteEnum) {
      RouteEnum[RouteEnum["SIGN_UP"] = 0] = "SIGN_UP";
      RouteEnum[RouteEnum["LOGIN"] = 1] = "LOGIN";
      RouteEnum[RouteEnum["RESTORE_PASSWORD"] = 2] = "RESTORE_PASSWORD";
      RouteEnum[RouteEnum["HOME"] = 3] = "HOME";
      RouteEnum[RouteEnum["CHOOSE_FACILITY"] = 4] = "CHOOSE_FACILITY";
      RouteEnum[RouteEnum["QUESTION_WIZARD"] = 5] = "QUESTION_WIZARD";
      RouteEnum[RouteEnum["MY_PROFILE"] = 6] = "MY_PROFILE";
      RouteEnum[RouteEnum["MY_RESULT"] = 7] = "MY_RESULT";
      RouteEnum[RouteEnum["UNDEFINED"] = 8] = "UNDEFINED";
    })(RouteEnum || (RouteEnum = {}));

    var RouteHandlerService = /*#__PURE__*/function () {
      function RouteHandlerService() {
        _classCallCheck(this, RouteHandlerService);

        this.appComponentModel = new _models_app_component_viewModels__WEBPACK_IMPORTED_MODULE_1__["AppComponentViewModel"]();
      }

      _createClass(RouteHandlerService, [{
        key: "getViewModel",
        value: function getViewModel() {
          return this.appComponentModel;
        }
      }, {
        key: "handleContentByRoute",
        value: function handleContentByRoute(routeUrl) {
          if (routeUrl === '/') {
            this.defaultState();
            return;
          }

          this.defaultState();
        }
      }, {
        key: "signUpRoute",
        value: function signUpRoute() {
          this.appComponentModel.backgroundPrimaryIsActive = true;
          this.appComponentModel.footerTheme = _models_app_component_viewModels__WEBPACK_IMPORTED_MODULE_1__["FooterTheme"].FOOTER_THEME_WHITE_BACKGROUND;
          this.appComponentModel.headerType = _models_app_component_viewModels__WEBPACK_IMPORTED_MODULE_1__["HeaderType"].HEADER_NOT_AUTHORIZED;
        }
      }, {
        key: "loginRoute",
        value: function loginRoute() {
          this.appComponentModel.backgroundPrimaryIsActive = false;
          this.appComponentModel.footerTheme = _models_app_component_viewModels__WEBPACK_IMPORTED_MODULE_1__["FooterTheme"].FOOTER_THEME_WHITE_BACKGROUND;
          this.appComponentModel.headerType = _models_app_component_viewModels__WEBPACK_IMPORTED_MODULE_1__["HeaderType"].HEADER_NOT_AUTHORIZED;
        }
      }, {
        key: "restorePasswordRoute",
        value: function restorePasswordRoute() {
          this.appComponentModel.backgroundPrimaryIsActive = true;
          this.appComponentModel.footerTheme = _models_app_component_viewModels__WEBPACK_IMPORTED_MODULE_1__["FooterTheme"].FOOTER_THEME_WHITE_BACKGROUND;
          this.appComponentModel.headerType = _models_app_component_viewModels__WEBPACK_IMPORTED_MODULE_1__["HeaderType"].HEADER_NOT_AUTHORIZED;
        }
      }, {
        key: "defaultState",
        value: function defaultState() {
          this.appComponentModel.backgroundPrimaryIsActive = false;
          this.appComponentModel.footerTheme = _models_app_component_viewModels__WEBPACK_IMPORTED_MODULE_1__["FooterTheme"].FOOTER_THEME_WHITE_BACKGROUND;
          this.appComponentModel.headerType = _models_app_component_viewModels__WEBPACK_IMPORTED_MODULE_1__["HeaderType"].HEADER_NOT_AUTHORIZED;
        }
      }, {
        key: "homeRoute",
        value: function homeRoute() {
          this.appComponentModel.backgroundPrimaryIsActive = false;
          this.appComponentModel.footerTheme = _models_app_component_viewModels__WEBPACK_IMPORTED_MODULE_1__["FooterTheme"].FOOTER_THEME_PRIMARY_BACKGROUND;
          this.appComponentModel.headerType = _models_app_component_viewModels__WEBPACK_IMPORTED_MODULE_1__["HeaderType"].HEADER_AUTHORIZED;
        }
      }, {
        key: "chooseFacillityForTestRoute",
        value: function chooseFacillityForTestRoute() {
          this.appComponentModel.backgroundPrimaryIsActive = true;
          this.appComponentModel.footerTheme = _models_app_component_viewModels__WEBPACK_IMPORTED_MODULE_1__["FooterTheme"].FOOTER_THEME_PRIMARY_BACKGROUND;
          this.appComponentModel.headerType = _models_app_component_viewModels__WEBPACK_IMPORTED_MODULE_1__["HeaderType"].HEADER_AUTHORIZED;
        }
      }, {
        key: "questionWizardRoute",
        value: function questionWizardRoute() {
          this.appComponentModel.backgroundPrimaryIsActive = true;
          this.appComponentModel.footerTheme = _models_app_component_viewModels__WEBPACK_IMPORTED_MODULE_1__["FooterTheme"].FOOTER_THEME_WHITE_BACKGROUND;
          this.appComponentModel.headerType = _models_app_component_viewModels__WEBPACK_IMPORTED_MODULE_1__["HeaderType"].HEADER_AUTHORIZED;
        }
      }, {
        key: "profileRoute",
        value: function profileRoute() {
          this.appComponentModel.backgroundPrimaryIsActive = false;
          this.appComponentModel.footerTheme = _models_app_component_viewModels__WEBPACK_IMPORTED_MODULE_1__["FooterTheme"].FOOTER_THEME_WHITE_BACKGROUND;
          this.appComponentModel.headerType = _models_app_component_viewModels__WEBPACK_IMPORTED_MODULE_1__["HeaderType"].HEADER_AUTHORIZED;
        }
      }, {
        key: "checkResultRoute",
        value: function checkResultRoute() {
          this.appComponentModel.backgroundPrimaryIsActive = true;
          this.appComponentModel.footerTheme = _models_app_component_viewModels__WEBPACK_IMPORTED_MODULE_1__["FooterTheme"].FOOTER_THEME_WHITE_BACKGROUND;
          this.appComponentModel.headerType = _models_app_component_viewModels__WEBPACK_IMPORTED_MODULE_1__["HeaderType"].HEADER_AUTHORIZED;
        }
      }, {
        key: "myProfileRoute",
        value: function myProfileRoute() {
          this.appComponentModel.backgroundPrimaryIsActive = false;
          this.appComponentModel.footerTheme = _models_app_component_viewModels__WEBPACK_IMPORTED_MODULE_1__["FooterTheme"].FOOTER_THEME_WHITE_BACKGROUND;
          this.appComponentModel.headerType = _models_app_component_viewModels__WEBPACK_IMPORTED_MODULE_1__["HeaderType"].HEADER_AUTHORIZED;
          var profileTabNav = document.querySelectorAll('.tabs__link');
          profileTabNav.forEach(function (item) {
            item.classList.remove('tabs__link--active');
          });
          var tab = document.querySelector('.my-profile-tab-js');
          tab.classList.add('tabs__link--active');
        }
      }, {
        key: "childrenRoute",
        value: function childrenRoute() {
          this.appComponentModel.backgroundPrimaryIsActive = false;
          this.appComponentModel.footerTheme = _models_app_component_viewModels__WEBPACK_IMPORTED_MODULE_1__["FooterTheme"].FOOTER_THEME_WHITE_BACKGROUND;
          this.appComponentModel.headerType = _models_app_component_viewModels__WEBPACK_IMPORTED_MODULE_1__["HeaderType"].HEADER_AUTHORIZED;

          _helpers_contentHelper__WEBPACK_IMPORTED_MODULE_2__["ContentHelper"].chooseTabMyProfileChildren();
        }
      }, {
        key: "myResultRoute",
        value: function myResultRoute() {
          this.appComponentModel.backgroundPrimaryIsActive = false;
          this.appComponentModel.footerTheme = _models_app_component_viewModels__WEBPACK_IMPORTED_MODULE_1__["FooterTheme"].FOOTER_THEME_WHITE_BACKGROUND;
          this.appComponentModel.headerType = _models_app_component_viewModels__WEBPACK_IMPORTED_MODULE_1__["HeaderType"].HEADER_AUTHORIZED;
          var profileTabNav = document.querySelectorAll('.tabs__link');
          profileTabNav.forEach(function (item) {
            item.classList.remove('tabs__link--active');
          });
          var tab = document.querySelector('.my-result-tab-js');
          tab.classList.add('tabs__link--active');
        }
      }, {
        key: "editProfileRoute",
        value: function editProfileRoute() {
          this.appComponentModel.backgroundPrimaryIsActive = true;
          this.appComponentModel.footerTheme = _models_app_component_viewModels__WEBPACK_IMPORTED_MODULE_1__["FooterTheme"].FOOTER_THEME_WHITE_BACKGROUND;
          this.appComponentModel.headerType = _models_app_component_viewModels__WEBPACK_IMPORTED_MODULE_1__["HeaderType"].HEADER_AUTHORIZED;
        }
      }]);

      return RouteHandlerService;
    }();

    RouteHandlerService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], RouteHandlerService);
    /***/
  },

  /***/
  "./src/app/_services/script-loader.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/_services/script-loader.service.ts ***!
    \****************************************************/

  /*! exports provided: ScriptLoaderService */

  /***/
  function srcApp_servicesScriptLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScriptLoaderService", function () {
      return ScriptLoaderService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ScriptLoaderService = /*#__PURE__*/function () {
      function ScriptLoaderService() {
        _classCallCheck(this, ScriptLoaderService);

        this._scripts = [];
      }
      /**
       * @deprecated
       * @param tag
       * @param {string} scripts
       * @returns {Promise<any[]>}
       */


      _createClass(ScriptLoaderService, [{
        key: "load",
        value: function load(tag) {
          var _this9 = this;

          for (var _len = arguments.length, scripts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            scripts[_key - 1] = arguments[_key];
          }

          scripts.forEach(function (src) {
            if (!_this9._scripts[src]) {
              _this9._scripts[src] = {
                src: src,
                loaded: false
              };
            }
          });
          var promises = [];
          scripts.forEach(function (src) {
            return promises.push(_this9.loadScript(tag, src));
          });
          return Promise.all(promises);
        }
        /**
         * Lazy load list of scripts
         * @param tag
         * @param scripts
         * @param loadOnce
         * @returns {Promise<any[]>}
         */

      }, {
        key: "loadScripts",
        value: function loadScripts(tag, scripts, loadOnce) {
          var _this10 = this;

          loadOnce = loadOnce || false;
          scripts.forEach(function (script) {
            if (!_this10._scripts[script]) {
              _this10._scripts[script] = {
                src: script,
                loaded: false
              };
            }
          });
          var promises = [];
          scripts.forEach(function (script) {
            return promises.push(_this10.loadScript(tag, script, loadOnce));
          });
          return Promise.all(promises);
        }
        /**
         * Lazy load a single script
         * @param tag
         * @param {string} src
         * @param loadOnce
         * @returns {Promise<any>}
         */

      }, {
        key: "loadScript",
        value: function loadScript(tag, src, loadOnce) {
          var _this11 = this;

          loadOnce = loadOnce || false;

          if (!this._scripts[src]) {
            this._scripts[src] = {
              src: src,
              loaded: false
            };
          }

          return new Promise(function (resolve, reject) {
            // resolve if already loaded
            if (_this11._scripts[src].loaded && loadOnce) {
              resolve({
                src: src,
                loaded: true
              });
            } else {
              // load script tag
              var scriptTag = jquery__WEBPACK_IMPORTED_MODULE_1__('<script/>').attr('type', 'text/javascript').attr('src', _this11._scripts[src].src);
              jquery__WEBPACK_IMPORTED_MODULE_1__(tag).append(scriptTag);
              _this11._scripts[src] = {
                src: src,
                loaded: true
              };
              resolve({
                src: src,
                loaded: true
              });
            }
          });
        }
      }, {
        key: "isScriptLoaded",
        value: function isScriptLoaded(scriptName) {
          return jquery__WEBPACK_IMPORTED_MODULE_1__('script[src="' + scriptName + '"]').length != 0;
        }
      }]);

      return ScriptLoaderService;
    }();

    ScriptLoaderService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], ScriptLoaderService);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_route_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./_services/route-handler.service */
    "./src/app/_services/route-handler.service.ts");
    /* harmony import */


    var _services_helpers_contentHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./_services/helpers/contentHelper */
    "./src/app/_services/helpers/contentHelper.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var NavMenuType;

    (function (NavMenuType) {
      NavMenuType["BASIC"] = "BASIC";
      NavMenuType["STARNDART"] = "STARNDART";
    })(NavMenuType || (NavMenuType = {}));

    var FooterType;

    (function (FooterType) {
      FooterType["FOOTER_THEME_WHITE_BACKGROUND"] = "WHITE_BACKGROUND";
      FooterType["FOOTER_THEME_PRIMARY_BACKGROUND"] = "PRIMARY_BACKGROUND";
    })(FooterType || (FooterType = {}));

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(_router) {
        _classCallCheck(this, AppComponent);

        this._router = _router;
        this.contentHandlerService = new _services_route_handler_service__WEBPACK_IMPORTED_MODULE_2__["RouteHandlerService"]();
        this.appComponentViewModel = this.contentHandlerService.getViewModel();
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this._router.events.subscribe(function (route) {
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
              window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
              });
            }

            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
              _this12.contentHandlerService.handleContentByRoute(route.url);

              _services_helpers_contentHelper__WEBPACK_IMPORTED_MODULE_3__["ContentHelper"].setLoading(false);
            }
          });
        }
      }, {
        key: "closeModalPrivacy",
        value: function closeModalPrivacy() {
          var body = document.querySelector('body');
          body.classList.remove('modal-open-privacy');
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-root',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_standart_header_standart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./header/header-standart/header-standart.component */
    "./src/app/header/header-standart/header-standart.component.ts");
    /* harmony import */


    var _header_header_base_header_base_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./header/header-base/header-base.component */
    "./src/app/header/header-base/header-base.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _footer_footer_primary_footer_primary_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./footer/footer-primary/footer-primary.component */
    "./src/app/footer/footer-primary/footer-primary.component.ts");
    /* harmony import */


    var _footer_footer_white_footer_white_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./footer/footer-white/footer-white.component */
    "./src/app/footer/footer-white/footer-white.component.ts");
    /* harmony import */


    var _health_test_health_test_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./health-test/health-test.component */
    "./src/app/health-test/health-test.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./sign-up/sign-up.component */
    "./src/app/sign-up/sign-up.component.ts");
    /* harmony import */


    var _restore_password_restore_password_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./restore-password/restore-password.component */
    "./src/app/restore-password/restore-password.component.ts");
    /* harmony import */


    var _layout_language_selector_language_selector_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./layout/language-selector/language-selector.component */
    "./src/app/layout/language-selector/language-selector.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./_services/script-loader.service */
    "./src/app/_services/script-loader.service.ts");
    /* harmony import */


    var _layout_popover_popover_basic_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./layout/popover/popover-basic.module */
    "./src/app/layout/popover/popover-basic.module.ts");
    /* harmony import */


    var _layout_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./layout/dropdown/dropdown.component */
    "./src/app/layout/dropdown/dropdown.component.ts");
    /* harmony import */


    var _services_guard_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./_services/guard.service */
    "./src/app/_services/guard.service.ts");
    /* harmony import */


    var _services_localStorage_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./_services/localStorage.service */
    "./src/app/_services/localStorage.service.ts");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _ng_select_ng_option_highlight__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @ng-select/ng-option-highlight */
    "./node_modules/@ng-select/ng-option-highlight/fesm2015/ng-select-ng-option-highlight.js");
    /* harmony import */


    var _services_data_sharing_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./_services/data-sharing.service */
    "./src/app/_services/data-sharing.service.ts");
    /* harmony import */


    var _health_check_result_health_check_result_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./health-check-result/health-check-result.component */
    "./src/app/health-check-result/health-check-result.component.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _services_route_handler_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./_services/route-handler.service */
    "./src/app/_services/route-handler.service.ts");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _services_api_api_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./_services/api/api.service */
    "./src/app/_services/api/api.service.ts");
    /* harmony import */


    var _services_helpers_interceptor__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./_services/helpers/interceptor */
    "./src/app/_services/helpers/interceptor.ts");
    /* harmony import */


    var _sign_up_verified_sign_up_verified_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./sign-up-verified/sign-up-verified.component */
    "./src/app/sign-up-verified/sign-up-verified.component.ts");
    /* harmony import */


    var _profile_profile_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./profile/profile.module */
    "./src/app/profile/profile.module.ts");
    /* harmony import */


    var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./edit-profile/edit-profile.component */
    "./src/app/edit-profile/edit-profile.component.ts");
    /* harmony import */


    var angularx_qrcode__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! angularx-qrcode */
    "./node_modules/angularx-qrcode/fesm2015/angularx-qrcode.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _footer_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./footer/privacy/privacy.component */
    "./src/app/footer/privacy/privacy.component.ts");
    /* harmony import */


    var _child_mode_edit_child_edit_child_profile_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./child-mode/edit-child/edit-child-profile.component */
    "./src/app/child-mode/edit-child/edit-child-profile.component.ts");
    /* harmony import */


    var _child_mode_add_child_add_child_profile_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./child-mode/add-child/add-child-profile.component */
    "./src/app/child-mode/add-child/add-child-profile.component.ts");
    /* harmony import */


    var _child_mode_add_child_by_code_add_child_by_code_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./child-mode/add-child-by-code/add-child-by-code.component */
    "./src/app/child-mode/add-child-by-code/add-child-by-code.component.ts");
    /* harmony import */


    var _services_helpers_apiBaseRequests__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./_services/helpers/apiBaseRequests */
    "./src/app/_services/helpers/apiBaseRequests.ts");
    /* harmony import */


    var _services_language_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./_services/language.service */
    "./src/app/_services/language.service.ts");
    /* harmony import */


    var _news_news_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./news/news.component */
    "./src/app/news/news.component.ts");
    /* harmony import */


    var _article_article_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./article/article.component */
    "./src/app/article/article.component.ts");
    /* harmony import */


    var _services_data_provider_data_provider_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./_services/data-provider/data-provider.service */
    "./src/app/_services/data-provider/data-provider.service.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _header_header_standart_header_standart_component__WEBPACK_IMPORTED_MODULE_7__["HeaderStandartComponent"], _header_header_base_header_base_component__WEBPACK_IMPORTED_MODULE_8__["HeaderBaseComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _footer_footer_primary_footer_primary_component__WEBPACK_IMPORTED_MODULE_10__["FooterPrimaryComponent"], _footer_footer_white_footer_white_component__WEBPACK_IMPORTED_MODULE_11__["FooterWhiteComponent"], _health_test_health_test_component__WEBPACK_IMPORTED_MODULE_12__["HealthTestComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_14__["SignUpComponent"], _sign_up_verified_sign_up_verified_component__WEBPACK_IMPORTED_MODULE_32__["SignUpVerifiedComponent"], _restore_password_restore_password_component__WEBPACK_IMPORTED_MODULE_15__["RestorePasswordComponent"], _layout_language_selector_language_selector_component__WEBPACK_IMPORTED_MODULE_16__["LanguageSelectorComponent"], _layout_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_20__["DropdownComponent"], _health_check_result_health_check_result_component__WEBPACK_IMPORTED_MODULE_26__["HealthCheckResultComponent"], _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_34__["EditProfileComponent"], _footer_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_37__["PrivacyComponent"], _child_mode_edit_child_edit_child_profile_component__WEBPACK_IMPORTED_MODULE_38__["EditChildProfileComponent"], _child_mode_add_child_add_child_profile_component__WEBPACK_IMPORTED_MODULE_39__["AddChildComponent"], _child_mode_add_child_by_code_add_child_by_code_component__WEBPACK_IMPORTED_MODULE_40__["AddChildByCodeComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_43__["NewsComponent"], _article_article_component__WEBPACK_IMPORTED_MODULE_44__["ArticleComponent"]],
      imports: [_profile_profile_module__WEBPACK_IMPORTED_MODULE_33__["ProfileModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
        appId: 'ng-cli-universal'
      }), _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ng_select_ng_option_highlight__WEBPACK_IMPORTED_MODULE_24__["NgOptionHighlightModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([{
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        pathMatch: 'full',
        canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]]
      }, {
        path: 'health-test',
        component: _health_test_health_test_component__WEBPACK_IMPORTED_MODULE_12__["HealthTestComponent"],
        canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]]
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"]
      }, {
        path: 'sign-up',
        component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_14__["SignUpComponent"]
      }, {
        path: 'sign-up-verified',
        component: _sign_up_verified_sign_up_verified_component__WEBPACK_IMPORTED_MODULE_32__["SignUpVerifiedComponent"]
      }, {
        path: 'restore-password',
        component: _restore_password_restore_password_component__WEBPACK_IMPORTED_MODULE_15__["RestorePasswordComponent"]
      }, {
        path: 'health-check-result',
        component: _health_check_result_health_check_result_component__WEBPACK_IMPORTED_MODULE_26__["HealthCheckResultComponent"],
        canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]]
      }, {
        path: 'edit-profile',
        component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_34__["EditProfileComponent"],
        canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]]
      }, {
        path: 'edit-child-profile/:id',
        component: _child_mode_edit_child_edit_child_profile_component__WEBPACK_IMPORTED_MODULE_38__["EditChildProfileComponent"],
        canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]]
      }, {
        path: 'add-child',
        component: _child_mode_add_child_add_child_profile_component__WEBPACK_IMPORTED_MODULE_39__["AddChildComponent"],
        canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]]
      }, {
        path: 'add-child-by-code',
        component: _child_mode_add_child_by_code_add_child_by_code_component__WEBPACK_IMPORTED_MODULE_40__["AddChildByCodeComponent"],
        canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]]
      }, {
        path: 'article/:id',
        component: _article_article_component__WEBPACK_IMPORTED_MODULE_44__["ArticleComponent"]
      }, {
        path: '**',
        component: _news_news_component__WEBPACK_IMPORTED_MODULE_43__["NewsComponent"]
      }]), // ng-bootstrap modules
      _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbTooltipModule"], _layout_popover_popover_basic_module__WEBPACK_IMPORTED_MODULE_19__["NgbdPopoverBasicModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__["NgSelectModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_29__["ToastrModule"].forRoot(), angularx_qrcode__WEBPACK_IMPORTED_MODULE_35__["QRCodeModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_46__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_47__["environment"].firebase)],
      exports: [_layout_language_selector_language_selector_component__WEBPACK_IMPORTED_MODULE_16__["LanguageSelectorComponent"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _services_helpers_interceptor__WEBPACK_IMPORTED_MODULE_31__["AppInterceptor"],
        multi: true
      }, {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_36__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_36__["HashLocationStrategy"]
      }, _services_script_loader_service__WEBPACK_IMPORTED_MODULE_18__["ScriptLoaderService"], _services_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"], _services_localStorage_service__WEBPACK_IMPORTED_MODULE_22__["LocalStorageService"], _services_language_service__WEBPACK_IMPORTED_MODULE_42__["LanguageService"], _services_data_sharing_service__WEBPACK_IMPORTED_MODULE_25__["DataSharingService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_27__["AuthenticationService"], _services_route_handler_service__WEBPACK_IMPORTED_MODULE_28__["RouteHandlerService"], _services_api_api_service__WEBPACK_IMPORTED_MODULE_30__["ApiService"], _services_helpers_apiBaseRequests__WEBPACK_IMPORTED_MODULE_41__["ApiBaseRequests"], _services_data_provider_data_provider_service__WEBPACK_IMPORTED_MODULE_45__["DataProviderService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_48__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_49__["AngularFireAuth"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/article/article.component.scss":
  /*!************************************************!*\
    !*** ./src/app/article/article.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppArticleArticleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* ===================================================================== */\n/*----- Form var -----*/\n/*----- Font -----*/\n/*----- Body -----*/\n/* buttons  */\nngb-carousel .picsum-img-wrapper > img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n.position-relative {\n  position: relative; }\n.add-contact {\n  position: absolute;\n  right: 17px;\n  top: 57px; }\n.welcome-wrap {\n  width: 100%;\n  position: relative; }\n.welcome-wrap img {\n    position: absolute;\n    top: -50px;\n    height: 500px;\n    z-index: 1;\n    width: 100%; }\n.welcome-wrap svg {\n    position: absolute;\n    top: -50px;\n    height: 500px;\n    z-index: 1;\n    width: 100%; }\n.welcome-wrap .title {\n    height: 500px; }\n.welcome-wrap .title h1 {\n      position: relative;\n      text-align: start;\n      color: #0d70b4;\n      font-size: 4rem;\n      z-index: 100; }\n.welcome-wrap .title h1.size-8 {\n        font-size: 8rem; }\n.btn-floating {\n  background-color: #32b1cd;\n  position: fixed;\n  bottom: 50px;\n  right: 50px;\n  border-radius: 50%;\n  height: 3rem;\n  width: 3rem;\n  cursor: pointer; }\n@media (max-width: 500px) {\n  .welcome-wrap .title h1 {\n    font-size: 3rem; }\n    .welcome-wrap .title h1.size-8 {\n      font-size: 4rem; } }\n.news-loading--wrap {\n  text-align: center; }\n.new-wrap {\n  margin-top: 50px;\n  width: 80%;\n  margin: auto; }\n.new-wrap .title {\n    padding: 1px; }\n.new-wrap .title h1 {\n      text-align: start;\n      color: #0d70b4; }\n.new-wrap .content {\n    margin: auto; }\n.new-wrap .content .article-main-text {\n      color: #67757c;\n      padding: 2rem 0;\n      text-align: justify;\n      width: 100%; }\n.text-color {\n  color: #67757c; }\n.content-media-news--list {\n  margin-bottom: 40px; }\n.content-media-news--list img {\n    width: 100%;\n    cursor: pointer; }\n.content-media-news--list svg {\n    width: 100%;\n    cursor: pointer; }\n.content-media {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 20px auto;\n  margin-bottom: 40px;\n  display: flex;\n  position: relative; }\n.content-media img {\n    max-width: 100%; }\n.content-media svg {\n    max-width: 100%;\n    max-height: 400px; }\n.content-media .img-card {\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    cursor: pointer; }\n.content-media .gallery-arrow {\n    position: absolute;\n    background-color: #ffffff00;\n    top: calc(50% - 25px); }\n.content-media .gallery-arrow img {\n      background-color: #f3f8f900;\n      cursor: pointer; }\n.content-media .gallery-arrow svg {\n      background-color: #f3f8f900;\n      cursor: pointer; }\n.content-media .gallery-arrow.left {\n      left: 0px; }\n.content-media .gallery-arrow.right {\n      right: 0px; }\n.img-animation {\n  -webkit-animation: fade-in 0.3s ease-in-out;\n          animation: fade-in 0.3s ease-in-out; }\n@-webkit-keyframes fade-in {\n  from {\n    opacity: 70%; }\n  to {\n    opacity: 100%; } }\n@keyframes fade-in {\n  from {\n    opacity: 70%; }\n  to {\n    opacity: 100%; } }\n.info-wrap {\n  display: flex;\n  flex-direction: column;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  justify-content: end;\n  text-align: justify; }\n.info-wrap img {\n    height: 1.5em;\n    width: 1.5em; }\n.info-wrap svg {\n    width: 1.5em; }\n.info-wrap .item-text {\n    color: #a5a5a5;\n    margin-left: 10px;\n    position: relative;\n    display: flex;\n    align-items: center; }\n.info-wrap.right {\n    justify-content: flex-end; }\n.content-news--item {\n  margin-left: 50px; }\n.content-news--wrap {\n  margin-top: 60px; }\n.content-news--wrap .title {\n    background-color: #f3f8f9;\n    text-align: center; }\n.content-news--wrap .info-wrap {\n    font-size: 0.8em; }\n.user_avatar {\n  width: 65px;\n  height: 65px;\n  display: inline-block;\n  vertical-align: middle; }\n.user_avatar img {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%; }\n.user_avatar svg {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%; }\n.comment_block {\n  height: 100%;\n  margin: 0 auto; }\n.comment_block .create_new_comment {\n    width: 100%;\n    padding: 20px 0; }\n.comment_block .create_new_comment .input_comment {\n      display: inline-block;\n      vertical-align: middle;\n      margin-left: 10px;\n      width: calc(100% - 75px); }\n.comment_block .create_new_comment .input_comment input[type=\"text\"] {\n        width: 100%;\n        font-family: \"Lato\", sans-serif;\n        font-weight: 300;\n        font-size: 1.3rem;\n        padding: 10px;\n        border: none;\n        border-bottom: 2px solid #f2f2f2; }\n.comment_block .create_new_comment .input_comment input[type=\"text\"]:focus {\n          outline: none;\n          border-bottom: 2px solid #e6e5e5; }\n.comment_block .new_comment {\n    width: 100%;\n    height: auto;\n    border-top: 1px solid #e6e5e5; }\n.comment_block .new_comment .user_comment {\n      list-style-type: none;\n      padding-left: 0px; }\n.comment_block .new_comment .comment_body {\n      display: inline-block;\n      vertical-align: middle;\n      width: calc(100% - 75px);\n      min-height: 65px;\n      margin-left: 10px;\n      padding: 5px 10px;\n      font-size: 0.9rem;\n      color: #555;\n      background-color: #fff;\n      border-bottom: 2px solid #f2f2f2; }\n.comment_block .new_comment .comment_body p {\n        background-color: #fff; }\n.comment_block .new_comment .comment_body .replied_to {\n        margin: 5px 0px;\n        background-color: #fafafa;\n        border-bottom: 2px solid #f2f2f2;\n        border-radius: 5px; }\n.comment_block .new_comment .comment_body .replied_to p {\n          padding: 5px; }\n.comment_block .new_comment .comment_body .replied_to span {\n          color: #6495ed;\n          margin-right: 2px; }\n.comment_block .new_comment .comment_toolbar {\n      width: 100%; }\n.comment_block .new_comment .comment_toolbar ul {\n        list-style-type: none;\n        font-size: 0; }\n.comment_block .new_comment .comment_toolbar ul li {\n          display: inline-block;\n          padding: 5px;\n          font-size: 0.7rem;\n          color: #a5a5a5; }\n.comment_block .new_comment .comment_toolbar ul li:hover {\n            cursor: pointer; }\n.comment_block .new_comment .comment_toolbar .comment_details {\n        display: inline-block;\n        vertical-align: middle;\n        width: 100%;\n        text-align: right; }\n.comment_block .new_comment .user:hover {\n      color: #6495ed;\n      text-decoration: underline; }\n.comment_block .new_comment .love:hover {\n      color: #ff6347; }\n.content-actions button {\n  margin: 10px 20px 10px 0px;\n  width: 15em;\n  background-color: #32b1cd; }\n.content-actions button .mat-btn--img {\n    float: left;\n    position: relative;\n    top: 2px; }\n::ng-deep .link-decoration a {\n  text-decoration: underline;\n  color: #0d70b4; }\n.info-item {\n  display: flex;\n  padding: 0px 20px 0px 0px; }\n.info--max-content span {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content; }\n.w-30 {\n  max-width: 30%; }\n.w-70 {\n  max-width: 70%; }\n.text-in-one-line {\n  display: -webkit-inline-box !important;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  line-height: 2rem; }\n.c-btn-primary {\n  font-weight: 400;\n  color: #fff;\n  background-color: #32b1cdab !important;\n  padding: 5px 10px;\n  min-height: 2.5rem; }\n.c-btn:focus {\n  background-color: #0098b6 !important;\n  border-color: #0098b6; }\nmat-dialog-content {\n  color: #0d70b4;\n  font-weight: 500;\n  padding-bottom: 2rem; }\nmat-dialog-actions {\n  margin-top: 25px;\n  margin-bottom: -10px; }\nmat-dialog-actions button {\n    color: #0d70b4; }\nh2 {\n  text-align: center; }\nbutton .mat-button-focus-overlay {\n  background-color: #719ebffc;\n  background: #719ebffc; }\n.article-title--wrap {\n  color: #707070 !important;\n  text-align: justify;\n  text-align: center;\n  margin-top: -50px !important; }\n.article-url {\n  margin-top: 10px; }\n.close-modal {\n  float: right;\n  position: relative;\n  top: 0px;\n  cursor: pointer; }\n.c-modal-header img {\n  width: 80px; }\n.qrcodeImage {\n  display: flex;\n  justify-content: center; }\n.qr-code--border {\n  border: 1px solid #c8ceda;\n  padding: 20px;\n  border-radius: 5px; }\n.c-btn-additional:focus {\n  background-color: inherit;\n  border-color: none; }\n#download-btn {\n  background-color: inherit;\n  border-color: none; }\n.modal-dialog {\n  max-width: 40rem !important; }\n::ng-deep .myCustomModalClass .modal-dialog {\n  max-width: 100%;\n  width: 100%; }\n@media (min-width: 1200px) {\n  ::ng-deep .myCustomModalClass .modal-dialog {\n    max-width: 40rem !important; } }\n#share--my-city {\n  width: 100%;\n  height: 100%;\n  margin: 1rem;\n  padding: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZS9DOlxcVXNlcnNcXHNoYWxhXFxEb2N1bWVudHNcXEdpdEh1YlxcTXlDaXR5XFxjaXR5LXYyL3NyY1xcYXNzZXRzXFxzY3NzXFxiYXNlXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2FydGljbGUvQzpcXFVzZXJzXFxzaGFsYVxcRG9jdW1lbnRzXFxHaXRIdWJcXE15Q2l0eVxcY2l0eS12Mi9zcmNcXGFwcFxcYXJ0aWNsZVxcYXJ0aWNsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQkEsMEVBQUE7QUE4REEsdUJBQUE7QUFZQSxtQkFBQTtBQUdBLG1CQUFBO0FBb0JBLGFBQUE7QUNuSEE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsUUFBUSxFQUFBO0FBS1Y7RUFDRSxrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUyxFQUFBO0FBR1g7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7QUFGcEI7SUFJSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWE7SUFDYixVQUFVO0lBQ1YsV0FBVyxFQUFBO0FBUmY7SUFXSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWE7SUFDYixVQUFVO0lBQ1YsV0FBVyxFQUFBO0FBZmY7SUFrQkksYUFBYSxFQUFBO0FBbEJqQjtNQW9CTSxrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLGNBQWM7TUFDZCxlQUFlO01BQ2YsWUFBWSxFQUFBO0FBeEJsQjtRQTBCUSxlQUFlLEVBQUE7QUFNdkI7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZSxFQUFBO0FBR2pCO0VBQ0U7SUFHTSxlQUFlLEVBQUE7SUFIckI7TUFLUSxlQUFlLEVBQUEsRUFDaEI7QUFNVDtFQUNFLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixZQUFZLEVBQUE7QUFIZDtJQU1JLFlBQVksRUFBQTtBQU5oQjtNQVNNLGlCQUFpQjtNQUNqQixjQUFjLEVBQUE7QUFWcEI7SUFlSSxZQUFZLEVBQUE7QUFmaEI7TUFpQk0sY0FBYztNQUNkLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsV0FBVyxFQUFBO0FBS2pCO0VBQ0UsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsbUJBQW1CLEVBQUE7QUFEckI7SUFHSSxXQUFXO0lBQ1gsZUFBZSxFQUFBO0FBSm5CO0lBT0ksV0FBVztJQUNYLGVBQWUsRUFBQTtBQUluQjtFQUNFLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQixFQUFBO0FBTHBCO0lBT0ksZUFBZSxFQUFBO0FBUG5CO0lBVUksZUFBZTtJQUNmLGlCQUFpQixFQUFBO0FBWHJCO0lBZUksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZSxFQUFBO0FBbEJuQjtJQXFCSSxrQkFBa0I7SUFFbEIsMkJBQTJCO0lBQzNCLHFCQUFxQixFQUFBO0FBeEJ6QjtNQTBCTSwyQkFBMkI7TUFDM0IsZUFBZSxFQUFBO0FBM0JyQjtNQThCTSwyQkFBMkI7TUFDM0IsZUFBZSxFQUFBO0FBL0JyQjtNQWtDTSxTQUFTLEVBQUE7QUFsQ2Y7TUFxQ00sVUFBVSxFQUFBO0FBS2hCO0VBQ0UsMkNBQW1DO1VBQW5DLG1DQUFtQyxFQUFBO0FBR3JDO0VBQ0U7SUFDRSxZQUFZLEVBQUE7RUFFZDtJQUNFLGFBQWEsRUFBQSxFQUFBO0FBTGpCO0VBQ0U7SUFDRSxZQUFZLEVBQUE7RUFFZDtJQUNFLGFBQWEsRUFBQSxFQUFBO0FBSWpCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixtQkFBbUIsRUFBQTtBQU5yQjtJQVFJLGFBQWE7SUFDYixZQUFZLEVBQUE7QUFUaEI7SUFZSSxZQUFZLEVBQUE7QUFaaEI7SUFnQkksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQixFQUFBO0FBcEJ2QjtJQXVCSSx5QkFBeUIsRUFBQTtBQUk3QjtFQUNFLGlCQUFpQixFQUFBO0FBRW5CO0VBQ0UsZ0JBQWdCLEVBQUE7QUFEbEI7SUFNSSx5QkFBeUI7SUFDekIsa0JBQWtCLEVBQUE7QUFQdEI7SUFVSSxnQkFBZ0IsRUFBQTtBQXFCcEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUVaLHFCQUFxQjtFQUNyQixzQkFBc0IsRUFBQTtBQUx4QjtJQVFJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCLEVBQUE7QUFWdEI7SUFhSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQixFQUFBO0FBSXRCO0VBQ0UsWUFBWTtFQUNaLGNBQWMsRUFBQTtBQUZoQjtJQUtJLFdBQVc7SUFDWCxlQUFlLEVBQUE7QUFObkI7TUFTTSxxQkFBcUI7TUFDckIsc0JBQXNCO01BRXRCLGlCQUFpQjtNQUNqQix3QkFBd0IsRUFBQTtBQWI5QjtRQWdCUSxXQUFXO1FBRVgsK0JBbkRpQjtRQW9EakIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUVqQixhQUFhO1FBRWIsWUFBWTtRQUNaLGdDQUE0QyxFQUFBO0FBekJwRDtVQTRCVSxhQUFhO1VBQ2IsZ0NBQTRDLEVBQUE7QUE3QnREO0lBb0NJLFdBQVc7SUFDWCxZQUFZO0lBRVosNkJBQXlDLEVBQUE7QUF2QzdDO01BMENNLHFCQUFxQjtNQUNyQixpQkFBaUIsRUFBQTtBQTNDdkI7TUErQ00scUJBQXFCO01BQ3JCLHNCQUFzQjtNQUV0Qix3QkFBd0I7TUFDeEIsZ0JBQWdCO01BQ2hCLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsaUJBQWlCO01BQ2pCLFdBQVc7TUFDWCxzQkFqRk07TUFrRk4sZ0NBQTRDLEVBQUE7QUF6RGxEO1FBMkRRLHNCQXBGSSxFQUFBO0FBeUJaO1FBOERRLGVBQWU7UUFDZix5QkFBcUM7UUFDckMsZ0NBQTRDO1FBQzVDLGtCQUFrQixFQUFBO0FBakUxQjtVQW1FVSxZQUFZLEVBQUE7QUFuRXRCO1VBc0VVLGNBNUZJO1VBNkZKLGlCQUFpQixFQUFBO0FBdkUzQjtNQTZFTSxXQUFXLEVBQUE7QUE3RWpCO1FBZ0ZRLHFCQUFxQjtRQUVyQixZQUFZLEVBQUE7QUFsRnBCO1VBcUZVLHFCQUFxQjtVQUNyQixZQUFZO1VBQ1osaUJBQWlCO1VBQ2pCLGNBQWMsRUFBQTtBQXhGeEI7WUEwRlksZUFBZSxFQUFBO0FBMUYzQjtRQWdHUSxxQkFBcUI7UUFDckIsc0JBQXNCO1FBQ3RCLFdBQVc7UUFDWCxpQkFBaUIsRUFBQTtBQW5HekI7TUF5R1EsY0EvSE07TUFnSU4sMEJBQTBCLEVBQUE7QUExR2xDO01BZ0hRLGNBcklLLEVBQUE7QUEySWI7RUFLSSwwQkFBMEI7RUFFMUIsV0FBVztFQUNYLHlCQUF5QixFQUFBO0FBUjdCO0lBVU0sV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRLEVBQUE7QUFLZDtFQUVJLDBCQUEwQjtFQUMxQixjQUFjLEVBQUE7QUFJbEI7RUFDRSxhQUFhO0VBQ2IseUJBQXlCLEVBQUE7QUFHM0I7RUFFSSwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQixFQUFBO0FBSXRCO0VBQ0UsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsY0FBYyxFQUFBO0FBR2hCO0VBQ0Usc0NBQXNDO0VBQ3RDLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxzQ0FBc0M7RUFDdEMsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0Usb0NBQW9DO0VBQ3BDLHFCQUFxQixFQUFBO0FBSXZCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixvQkFBb0IsRUFBQTtBQUd0QjtFQUVFLGdCQUFnQjtFQUNoQixvQkFBb0IsRUFBQTtBQUh0QjtJQUtJLGNBQWMsRUFBQTtBQUdsQjtFQUNFLGtCQUFrQixFQUFBO0FBR3BCO0VBR0ksMkJBQTJCO0VBQzNCLHFCQUFxQixFQUFBO0FBSXpCO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsNEJBQTRCLEVBQUE7QUFHOUI7RUFDRSxnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGVBQWUsRUFBQTtBQUdqQjtFQUVJLFdBQVcsRUFBQTtBQUdmO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QixFQUFBO0FBU3pCO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLDJCQUEyQixFQUFBO0FBTzdCO0VBQ0UsZUFBZTtFQUNmLFdBQVcsRUFBQTtBQUdiO0VBQ0U7SUFDRSwyQkFBMkIsRUFBQSxFQUM1QjtBQUdIO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJyZWFrcG9pbnQ6IChcclxuICAncHJlc21hbGwnOiAzMjBweCxcclxuICAnc21hbGwnOiA0ODBweCxcclxuICAncHJlbWVkaXVtJzogNjQwcHgsXHJcbiAgJ21lZGl1bSc6IDc2OHB4LFxyXG4gICdsYXJnZSc6IDEwMjRweCxcclxuICAneGxhcmdlJzogMTIwMHB4LFxyXG4gICd4eGxhcmdlJzogMTQ0MHB4LFxyXG4pO1xyXG5cclxuJGdyaWQteHM6IChcclxuICBndXR0ZXItd2lkdGg6IDE2cHgsXHJcbiAgZ3JpZC1tYXJnaW5zOiAyMnB4XHJcbik7XHJcblxyXG4kZ3JpZC1tZDogKFxyXG4gIGdyaWQtbWFyZ2luczogMzBweFxyXG4pO1xyXG5cclxuJGdyaWQtY29sdW1uczogMTI7XHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLy8gQmFzZSBDb2xvcnNcclxuJGJsYWNrOiAjMTkxQjFDO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRncmF5LTEwMDogI0YyRjlGQjtcclxuJGdyYXktMjAwOiAjRTdFQ0ZBO1xyXG4kZ3JheS0zMDA6ICNEREUxRUY7XHJcbiRncmF5LTQwMDogI0M0QzhEMztcclxuJGdyYXktNjAwOiAjN0E4ODlGO1xyXG4kZ3JheTogIzY2NkI2QztcclxuJGxpZ2h0LWdyYXk6ICNCREMxRDI7XHJcbiRncmF5LXByaW1hcnk6ICM2Nzc1N0M7XHJcbiRyZWQ6ICNENjQzM0M7XHJcbiRibHVlOiAjMDBBQ0NEO1xyXG4kbGlnaHQtYmx1ZTogI0YyRjlGQjtcclxuJHllbGxvdzogICNFRkNFNTg7XHJcbiRncmVlbjogICAjMjBBMjM0O1xyXG5cclxuLy9BcHAgY29sb3JzXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcblxyXG4kZ3JheXM6KFxyXG4gIFwiMTAwXCI6ICRncmF5LTEwMCxcclxuICBcIjIwMFwiOiAkZ3JheS0yMDAsXHJcbiAgXCIzMDBcIjogJGdyYXktMzAwLFxyXG4gIFwiNjAwXCI6ICRncmF5LTYwMCxcclxuKTtcclxuXHJcbiRwcmltYXJ5OiAjMEQ3MEI0O1xyXG4kcHJpbWFyeS10cmFuc3BhcmVuY3k6ICMwZDcwYjQ4MjtcclxuJHByaW1hcnktaG92ZXI6ICMxODYzOTY7XHJcbiRzZWNvbmRhcnk6ICRncmF5O1xyXG4kc2Vjb25kYXJ5LWxpZ2h0OiAkZ3JheS1wcmltYXJ5O1xyXG4kZGFuZ2VyOiAgJHJlZDtcclxuJGxpZ2h0OiAgICRncmF5LTEwMDtcclxuJHN1Y2Nlc3M6ICRncmVlbjtcclxuJHdhcm5pbmc6ICR5ZWxsb3c7XHJcblxyXG4kY29sb3JzOiAoXHJcbiAgJ2JsYWNrJzogJGJsYWNrLFxyXG4gICd3aGl0ZSc6ICR3aGl0ZSxcclxuICBcInByaW1hcnlcIjogJHByaW1hcnksXHJcbiAgXCJkYW5nZXJcIjogICRkYW5nZXIsXHJcbiAgXCJsaWdodFwiOiAgICRsaWdodCxcclxuICBcInNlY29uZGFyeVwiOiAkc2Vjb25kYXJ5LFxyXG4gIFwic2Vjb25kYXJ5LWxpZ2h0XCI6ICRzZWNvbmRhcnktbGlnaHQsXHJcbiAgXCJzdWNjZXNzXCI6ICRzdWNjZXNzLFxyXG4gIFwid2FybmluZ1wiOiAkd2FybmluZyxcclxuICBcImdyYXktMTAwXCI6ICRncmF5LTEwMCxcclxuKTtcclxuXHJcbiRkaXNhYmxlLXR4dDogJHNlY29uZGFyeS1saWdodDtcclxuXHJcbiRiZy1mb290ZXI6ICMzNjM2M2E7XHJcbiRiZy1ib2R5OiAjRjJGOUZCOyAvLyBib2R5LCBwcml2YWN5LW1vZGFsX19oZWFkZXIsIHNjcm9sbC1iYXIsIGRyb3Bkb3duLWxhbmd1YWdlXHJcblxyXG4kc2hhZG93LWNvbG9yLTE6ICMyNzM0NDMxYTtcclxuXHJcbi8vQm9yZGVyc1xyXG4kYm9yZGVyLTE6IDJweCBzb2xpZCAkc2hhZG93LWNvbG9yLTE7XHJcblxyXG4vKi0tLS0tIEZvcm0gdmFyIC0tLS0tKi9cclxuJGNvbC1ib3JkZXI6ICRsaWdodC1ncmF5O1xyXG4kY29sLWZvY3VzOiAjN2Y3ZjdmO1xyXG4kY29sLWVycm9yOiAkZGFuZ2VyO1xyXG4kY29sLXN1Y2Nlc3M6ICRzdWNjZXNzO1xyXG4kY29sLXBsYWNlaG9sZGVyOiAkZ3JheTtcclxuJGJnLWVycm9yOiAjRjdEOUQ4O1xyXG4kZGVmYXVsdC1ib3JkZXI6IDFweCBzb2xpZCAkY29sLWJvcmRlcjtcclxuJGlucHV0LWhlaWdodDogNjBweDtcclxuJGlucHV0LWhvbGRlci1tYXJnaW46IDIwcHg7XHJcbiRpbnB1dC1pbmRlbnQteDogMTZweDtcclxuXHJcbi8qLS0tLS0gRm9udCAtLS0tLSovXHJcbiRmb250LWZhbWlseS1tdWxpOiAnTXVsaScsICdIZWx2ZXRpY2EnLCAgJ0FyaWFsJywgc2Fucy1zZXJpZjtcclxuXHJcbi8qLS0tLS0gQm9keSAtLS0tLSovXHJcbiRiYXNlLWZvbnQtc2l6ZTogMXJlbTtcclxuJGZvbnQtc2l6ZS1hZGRpdGlvbmFsOiAxNHB4O1xyXG4kZm9udC1zaXplLWxhcmdlOiAyNHB4O1xyXG4kZm9udC1zaXplLW1lZGl1bTogMTZweDtcclxuJGZvbnQtc2l6ZS1zbWFsbDogMTJweDtcclxuJGJhc2UtbGluZS1oZWlnaHQ6IDEuNTtcclxuJGJvZHktY29sb3I6ICRibGFjaztcclxuJGJhc2UtbWluLXdpZHRoOiAzMjBweDtcclxuJGJhc2UtZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1tdWxpO1xyXG5cclxuJHZlcnRpY2FsLXJoeXRobTogKCRiYXNlLWxpbmUtaGVpZ2h0ICogMWVtKTtcclxuXHJcblxyXG4kYW5pbWF0aW9uLXNwZWVkOiAuM3M7IC8vIGZvciBtaXhpblxyXG5cclxuJGJvcmRlci1yYWRpdXM6IDVweDtcclxuJGJvcmRlci1yYWRpdXMtbW9kYWw6IDIwcHg7XHJcblxyXG5cclxuLyogYnV0dG9ucyAgKi9cclxuXHJcbiRmb250LXNpemUtbWFpbi10aXRsZTogNTRweDtcclxuJGNvbG9yLW1haW4tdGl0bGU6ICRibGFjaztcclxuXHJcbiRjYXJkLXNoYWRvdzogNHB4IDRweCA0MHB4IHJnYmEoMzIsIDYzLCAxMDcsIDAuMik7XHJcblxyXG4kYnRuLWZvbnQtd2VpZ2h0OiA4MDA7XHJcbiRidG4tb3V0bGluZS1mb250LXdlaWdodDogYm9sZDtcclxuJGJ0bi1ib3JkZXItd2lkdGg6IDJweDtcclxuJGJ0bi1wYWRkaW5nLXg6IDIwcHg7XHJcbiRidG4tc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgwLCAxNzIsIDIwNSwgMC4xNSk7XHJcbiRidG4taG92ZXItY29sb3I6ICMwMDk4QjY7XHJcbiRidG4tZGlzYWJsZWQtYmc6ICNGMkY5RkI7XHJcblxyXG4kYnRuLXBhZGRpbmcteTogKFxyXG4gIHhzOiAxNnB4LFxyXG4gIG1kOiAxNHB4XHJcbik7XHJcblxyXG4kc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4kYnRuLXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMCwgMTcyLCAyMDUsIC4xNSk7XHJcblxyXG4vLyBIZWFkZXJzXHJcbiRoMS1mb250LXNpemU6IDNyZW0gIWRlZmF1bHQ7XHJcbiRoMi1mb250LXNpemU6IDIuNXJlbSAhZGVmYXVsdDtcclxuJGgzLWZvbnQtc2l6ZTogMi4ycmVtICFkZWZhdWx0O1xyXG4kaDQtZm9udC1zaXplOiAkYmFzZS1mb250LXNpemUgIWRlZmF1bHQ7XHJcblxyXG4vLyBjaGVja2JveFxyXG4kY2hlY2tib3gtYm9yZGVyLWNvbG9yOiAkbGlnaHQtZ3JheTtcclxuJGNoZWNrYm94LWJvcmRlci1yYWRpdXM6IDJweDtcclxuXHJcblxyXG4vLyBmb290ZXJcclxuJGZvb3Rlci1oZWlnaHQ6IChcclxuICB4czogMTQ2cHgsXHJcbiAgbWQ6IDExMnB4LFxyXG4gIHhsOiAxMTFweFxyXG4pO1xyXG5cclxuJG1hcmdpbi0xOiAwLjZyZW07XHJcblxyXG4kcGFkZGluZy0xOiAwLjZyZW07XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc2Nzcy9iYXNlL3ZhcmlhYmxlc1wiO1xyXG5cclxubmdiLWNhcm91c2VsIC5waWNzdW0taW1nLXdyYXBwZXIgPiBpbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi8vbGVnYWN5XHJcblxyXG4ucG9zaXRpb24tcmVsYXRpdmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmFkZC1jb250YWN0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE3cHg7XHJcbiAgdG9wOiA1N3B4O1xyXG59XHJcblxyXG4ud2VsY29tZS13cmFwIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBzdmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtNTBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC50aXRsZSB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgaDEge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICBjb2xvcjogIzBkNzBiNDtcclxuICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICYuc2l6ZS04IHtcclxuICAgICAgICBmb250LXNpemU6IDhyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5idG4tZmxvYXRpbmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMmIxY2Q7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogNTBweDtcclxuICByaWdodDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIHdpZHRoOiAzcmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLndlbGNvbWUtd3JhcCB7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgICYuc2l6ZS04IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5uZXdzLWxvYWRpbmctLXdyYXAge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm5ldy13cmFwIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIC50aXRsZSB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICBjb2xvcjogIzBkNzBiNDtcclxuICAgICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjtcclxuICAgIH1cclxuICB9XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgLmFydGljbGUtbWFpbi10ZXh0IHtcclxuICAgICAgY29sb3I6ICM2Nzc1N2M7XHJcbiAgICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udGV4dC1jb2xvciB7XHJcbiAgY29sb3I6ICM2Nzc1N2M7XHJcbn1cclxuXHJcbi5jb250ZW50LW1lZGlhLW5ld3MtLWxpc3Qge1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBzdmcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGVudC1tZWRpYSB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbiAgc3ZnIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gIH1cclxuICAuaW1nLWNhcmQge1xyXG4gICAgLy8gICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLmdhbGxlcnktYXJyb3cge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjAwO1xyXG4gICAgdG9wOiBjYWxjKDUwJSAtIDI1cHgpO1xyXG4gICAgaW1nIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjhmOTAwO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBzdmcge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmOGY5MDA7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgICYubGVmdCB7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgIH1cclxuICAgICYucmlnaHQge1xyXG4gICAgICByaWdodDogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmltZy1hbmltYXRpb24ge1xyXG4gIGFuaW1hdGlvbjogZmFkZS1pbiAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogNzAlO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLmluZm8td3JhcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDEuNWVtO1xyXG4gICAgd2lkdGg6IDEuNWVtO1xyXG4gIH1cclxuICBzdmcge1xyXG4gICAgd2lkdGg6IDEuNWVtO1xyXG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAuaXRlbS10ZXh0IHtcclxuICAgIGNvbG9yOiAjYTVhNWE1O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgJi5yaWdodCB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRlbnQtbmV3cy0taXRlbSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuLmNvbnRlbnQtbmV3cy0td3JhcCB7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDcwMHB4O1xyXG4gIC8vICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAudGl0bGUge1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmOGY5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuaW5mby13cmFwIHtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgfVxyXG59XHJcblxyXG4vLyBjb21tZW50IHNlY3Rpb25cclxuLy8gaHR0cHM6Ly9jb2RlcGVuLmlvL2Rhbm12L3Blbi9WQlZLT1ZcclxuXHJcbiRMQVRPOiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuXHJcbiRHUkVZOiAjY2NjO1xyXG4kQkFDS0dST1VORF9HUkVZOiBsaWdodGVuKCNlZWVkZWQsIDIuNSUpO1xyXG4kU1VCVExFX0dSRVk6ICNmMmYyZjI7XHJcbiRNVVJLWV9HUkVZOiAjMzg0MTQ4O1xyXG4kREFSS19HUkVZOiAjMzMzO1xyXG5cclxuJFdISVRFOiAjZmZmO1xyXG4kU1VCVExFX1dISVRFOiAjZjlmOWY5O1xyXG5cclxuJEJMVUU6ICM2NDk1ZWQ7XHJcbiRSRUQ6ICNmZjYzNDc7XHJcblxyXG4udXNlcl9hdmF0YXIge1xyXG4gIHdpZHRoOiA2NXB4O1xyXG4gIGhlaWdodDogNjVweDtcclxuXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgc3ZnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbW1lbnRfYmxvY2sge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgLmNyZWF0ZV9uZXdfY29tbWVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuXHJcbiAgICAuaW5wdXRfY29tbWVudCB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNzVweCk7XHJcblxyXG4gICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkTEFUTztcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG5cclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0ZW4oJEdSRVksIDE1JSk7XHJcblxyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGVuKCRHUkVZLCAxMCUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm5ld19jb21tZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLy8gcGFkZGluZzogMjBweCAwO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0ZW4oJEdSRVksIDEwJSk7XHJcblxyXG4gICAgLnVzZXJfY29tbWVudCB7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbW1lbnRfYm9keSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA3NXB4KTtcclxuICAgICAgbWluLWhlaWdodDogNjVweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgY29sb3I6ICM1NTU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRXSElURTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0ZW4oJEdSRVksIDE1JSk7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRXSElURTtcclxuICAgICAgfVxyXG4gICAgICAucmVwbGllZF90byB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJEdSRVksIDE4JSk7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0ZW4oJEdSRVksIDE1JSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGNvbG9yOiAkQkxVRTtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb21tZW50X3Rvb2xiYXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIHVsIHtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiA3NXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMDtcclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgICBjb2xvcjogI2E1YTVhNTtcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29tbWVudF9kZXRhaWxzIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51c2VyIHtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRCTFVFO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxvdmUge1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJFJFRDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNvbnRlbnQtYWN0aW9ucyB7XHJcbiAgYnV0dG9uOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDEwcHggMjBweCAxMHB4IDBweDtcclxuXHJcbiAgICB3aWR0aDogMTVlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMmIxY2Q7XHJcbiAgICAubWF0LWJ0bi0taW1nIHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmxpbmstZGVjb3JhdGlvbiB7XHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiAjMGQ3MGI0O1xyXG4gIH1cclxufVxyXG5cclxuLmluZm8taXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAwcHggMjBweCAwcHggMHB4O1xyXG59XHJcblxyXG4uaW5mby0tbWF4LWNvbnRlbnQge1xyXG4gIHNwYW4ge1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLnctMzAge1xyXG4gIG1heC13aWR0aDogMzAlO1xyXG59XHJcblxyXG4udy03MCB7XHJcbiAgbWF4LXdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi50ZXh0LWluLW9uZS1saW5lIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3ggIWltcG9ydGFudDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG59XHJcblxyXG4uYy1idG4tcHJpbWFyeSB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzJiMWNkYWIgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBtaW4taGVpZ2h0OiAyLjVyZW07XHJcbn1cclxuXHJcbi5jLWJ0bjpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOThiNiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogIzAwOThiNjtcclxufVxyXG5cclxuLy8gTU9EQUxcclxubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICBjb2xvcjogIzBkNzBiNDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG5tYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gIC8vIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcclxuICBidXR0b24ge1xyXG4gICAgY29sb3I6ICMwZDcwYjQ7XHJcbiAgfVxyXG59XHJcbmgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MTllYmZmYztcclxuICAgIGJhY2tncm91bmQ6ICM3MTllYmZmYztcclxuICB9XHJcbn1cclxuXHJcbi5hcnRpY2xlLXRpdGxlLS13cmFwIHtcclxuICBjb2xvcjogIzcwNzA3MCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IC01MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hcnRpY2xlLXVybCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNsb3NlLW1vZGFsIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmMtbW9kYWwtaGVhZGVyIHtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgfVxyXG59XHJcbi5xcmNvZGVJbWFnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgLy8gI3FyY29kZSB7XHJcbiAgLy8gICBib3JkZXI6IDFweCBzb2xpZCAjYzhjZWRhO1xyXG4gIC8vICAgcGFkZGluZzogMjBweDtcclxuICAvLyAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAvLyB9XHJcbn1cclxuXHJcbi5xci1jb2RlLS1ib3JkZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOGNlZGE7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5jLWJ0bi1hZGRpdGlvbmFsOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gIGJvcmRlci1jb2xvcjogbm9uZTtcclxufVxyXG5cclxuI2Rvd25sb2FkLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICBib3JkZXItY29sb3I6IG5vbmU7XHJcbn1cclxuXHJcbi5tb2RhbC1kaWFsb2cge1xyXG4gIG1heC13aWR0aDogNDByZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gLm15Q3VzdG9tTW9kYWxDbGFzcyAubW9kYWwtZGlhbG9nIHtcclxuLy8gICBtYXgtd2lkdGg6IDU2NXB4O1xyXG4vLyB9XHJcblxyXG46Om5nLWRlZXAgLm15Q3VzdG9tTW9kYWxDbGFzcyAubW9kYWwtZGlhbG9nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICA6Om5nLWRlZXAgLm15Q3VzdG9tTW9kYWxDbGFzcyAubW9kYWwtZGlhbG9nIHtcclxuICAgIG1heC13aWR0aDogNDByZW0gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbiNzaGFyZS0tbXktY2l0eSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/article/article.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/article/article.component.ts ***!
    \**********************************************/

  /*! exports provided: ArticleComponent */

  /***/
  function srcAppArticleArticleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleComponent", function () {
      return ArticleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/script-loader.service */
    "./src/app/_services/script-loader.service.ts");
    /* harmony import */


    var _services_qrCode_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_services/qrCode.service */
    "./src/app/_services/qrCode.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_data_provider_data_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_services/data-provider/data-provider.service */
    "./src/app/_services/data-provider/data-provider.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ArticleComponent = /*#__PURE__*/function () {
      function ArticleComponent(modalService, _script, activateRoute, dataProvider) {
        _classCallCheck(this, ArticleComponent);

        this.modalService = modalService;
        this._script = _script;
        this.activateRoute = activateRoute;
        this.dataProvider = dataProvider;
        this.articleText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n  Why do we use it?\n  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n  \n  \n  Where does it come from?\n  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32";
        this.article = {
          images: []
        };
        this.loading = true;
        this.avaliableNews = [];
        this.currentImageIndex = 0;
        this.comments = false;
        this.currentArticleFullText = "What is Lorem Ipsum?\n  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
        this.firebaseLink = "";
        this.downloadBtnLoading = false;
        this.linkCopied = false;
      }

      _createClass(ArticleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.loading = true;
          console.log('ArticleComponent init');
          this.activateRoute.params.subscribe(function (params) {
            _this13.id = params['id']; // let getArticleResult = 

            _this13.dataProvider.getById(_this13.id).then(function (getArticleResult) {
              if (getArticleResult.success) {
                console.log(getArticleResult.item);
                _this13.article = getArticleResult.item;

                if (!_this13.article.images || _this13.article.images.length === 0) {
                  _this13.currentImageUrl = _this13.article.imageUrl;
                } else {
                  _this13.currentImageUrl = getArticleResult.item.images[0];
                } //this.avaliableNews = this.dataProvider.getPagedArticles(0, 3);


                _this13.currentArticleFullText = _this13.parseLinks(_this13.article.fullText);
                _this13.loading = false;
              } else {
                alert("not found");
              }
            });
          });
        }
      }, {
        key: "parseLinks",
        value: function parseLinks(text) {
          var urlRegex = /(\b(https?|http):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
          return text.replace(urlRegex, function (url) {
            return '<span class="link-decoration"><a  href="' + url + '" target="_blank" >' + url + '</a></span>';
          });
        }
      }, {
        key: "onImageClick",
        value: function onImageClick() {
          console.log("OnImageClick");
        }
      }, {
        key: "openShareDialog",
        value: function openShareDialog(modal) {
          var _this14 = this;

          this.modalService.open(modal, {
            centered: true,
            windowClass: "myCustomModalClass"
          }).result.then(function (r) {
            _this14.linkCopied = false;
          }, function (reason) {
            _this14.linkCopied = false;
          });

          this._script.loadScripts('body', ['assets/js/qrcode.min.js', 'assets/js/html2canvas.min.js'], true).then(function () {
            // 	this.firebaseDynamicLinkService.getDynamicLink(this.data.articleId as string, this.data.articleType)
            // 		.subscribe(response => {
            // 			this.firebaseLink = response.shortLink;
            // 			this.qrCode = QRCodeService.generateQRCode(this.firebaseLink);
            // 			console.log(this.qrCode)
            // 			var qrcode = new QRCode(document.getElementById("qrcode"), {
            // 				width: 150,
            // 				height: 150
            // 			});
            // 			qrcode.makeCode(this.firebaseLink.toString());
            // 			this.loading = false;
            // 		});
            // });
            _this14.firebaseLink = "https://mycitykherson.page.link/9Jb8jDDGidxR7T7a7";
            _this14.qrCode = _services_qrCode_service__WEBPACK_IMPORTED_MODULE_3__["QRCodeService"].generateQRCode(_this14.firebaseLink);
            console.log(_this14.qrCode);
            var qrcode = new QRCode(document.getElementById("qrcode"), {
              width: 150,
              height: 150
            });
            qrcode.makeCode(_this14.firebaseLink.toString());
            _this14.loading = false;
          });
        }
      }, {
        key: "download",
        value: function download() {
          var _this15 = this;

          this.downloadBtnLoading = true;
          setTimeout(function () {
            html2canvas(document.querySelector("#share--my-city")).then(function (canvas) {
              var contentDataURL = canvas.toDataURL('image/png');
              var link = document.createElement('a');
              link.download = 'MyCity.png';
              link.href = contentDataURL;
              link.click();
              setTimeout(function () {
                _this15.downloadBtnLoading = false;
              }, 1000);
            });
          }, 500);
        }
      }, {
        key: "copy",
        value: function copy() {
          var _this16 = this;

          // const textToCopy =
          // 	this.firebaseDynamicLinkService.getDynamicLinkMessage(
          // 		this.data.title,
          // 		this.firebaseLink,
          //     window.location.href);
          var textToCopy = "\u041C\u043E\u0454 \u043C\u0456\u0441\u0442\u043E\n        \u041D\u043E\u0432\u0438\u043D\u0430 \"\u0422\u0435\u0441\u0442 \u043D\u0430\u0437\u0432\u0430\"\n        \u0414\u043B\u044F \u043C\u043E\u0431\u0456\u043B\u044C\u043D\u043E\u0433\u043E: https://mycitykherson.page.link/osmdPBBwRfaWfiwRA\n        \u0414\u043B\u044F \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430: http://localhost:4200/#/dashboard/article/qWUxyxUUPRQXbMROqPb3";

          try {
            var selBox = document.createElement('textarea');
            selBox.style.position = 'fixed';
            selBox.style.left = '0';
            selBox.style.top = '0';
            selBox.style.opacity = '0';
            selBox.value = textToCopy;
            document.body.appendChild(selBox);
            selBox.focus();
            selBox.select();
            document.execCommand('copy');
            document.body.removeChild(selBox);
            $("#copy-btn").animate({
              opacity: 0
            }, 150, function () {
              $("#copy-btn span").text("Посилання скопійовано!");
              $("#copy-btn").animate({
                opacity: 100
              }, 150);
              _this16.linkCopied = true;
            });
          } catch (ex) {
            $("#copy-btn").animate({
              opacity: 0
            }, 150, function () {
              $("#copy-btn").text("У-упс! Не вийшло.");
              $("#copy-btn").css({
                color: '#c43737'
              });
              $("#copy-btn").animate({
                opacity: 100
              }, 150);
            });
          }
        }
      }]);

      return ArticleComponent;
    }();

    ArticleComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
      }, {
        type: _services_script_loader_service__WEBPACK_IMPORTED_MODULE_2__["ScriptLoaderService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _services_data_provider_data_provider_service__WEBPACK_IMPORTED_MODULE_5__["DataProviderService"]
      }];
    };

    ArticleComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-article',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./article.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/article/article.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./article.component.scss */
      "./src/app/article/article.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _services_script_loader_service__WEBPACK_IMPORTED_MODULE_2__["ScriptLoaderService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_data_provider_data_provider_service__WEBPACK_IMPORTED_MODULE_5__["DataProviderService"]])], ArticleComponent);
    /***/
  },

  /***/
  "./src/app/child-mode/add-child-by-code/add-child-by-code.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/child-mode/add-child-by-code/add-child-by-code.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: AddChildByCodeComponent */

  /***/
  function srcAppChildModeAddChildByCodeAddChildByCodeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddChildByCodeComponent", function () {
      return AddChildByCodeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../_services/api/api.service */
    "./src/app/_services/api/api.service.ts");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_models_children_addChildByCodeErrorViewModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_models/children/addChildByCodeErrorViewModel */
    "./src/app/_models/children/addChildByCodeErrorViewModel.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var src_app_models_BackendResponseCodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/_models/BackendResponseCodes */
    "./src/app/_models/BackendResponseCodes.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AddChildByCodeComponent = /*#__PURE__*/function () {
      function AddChildByCodeComponent(apiService, toastr, router, activateRoute, modalService) {
        _classCallCheck(this, AddChildByCodeComponent);

        this.apiService = apiService;
        this.toastr = toastr;
        this.router = router;
        this.activateRoute = activateRoute;
        this.modalService = modalService;
        this.errorViewModel = new src_app_models_children_addChildByCodeErrorViewModel__WEBPACK_IMPORTED_MODULE_4__["AddChildByCodeErrorViewModel"]();
        this.loading = false;
        this.base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
      }

      _createClass(AddChildByCodeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onChangeValue",
        value: function onChangeValue() {
          this.errorViewModel.setStateNoErrors();
        }
      }, {
        key: "onClickAddChildByCode",
        value: function onClickAddChildByCode() {
          var _this17 = this;

          this.loading = true;
          var decodedGuid;

          try {
            var decodeTest = this.base64regex.test(this.childId);
            if (!decodeTest) throw src_app_models_BackendResponseCodes__WEBPACK_IMPORTED_MODULE_6__["BackendResponseCode"].CONFLICT;
            decodedGuid = atob(this.childId);
          } catch (ex) {
            this.errorViewModel.setStateErrorByResponseCode(src_app_models_BackendResponseCodes__WEBPACK_IMPORTED_MODULE_6__["BackendResponseCode"].CONFLICT);
            this.loading = false;
            return;
          }

          ;
          this.apiService.postAddChildByCode(decodedGuid).subscribe(function (response) {
            _this17.loading = false;

            _this17.apiService.getUser(decodedGuid).subscribe(function (response) {
              _this17.childFirstName = response.firstName;
              _this17.childLastName = response.lastName;

              _this17.openModal();
            });
          }, function (error) {
            _this17.errorViewModel.setStateErrorByResponseCode(error.status);

            _this17.loading = false;
          });
        }
      }, {
        key: "childrenRoute",
        value: function childrenRoute() {
          this.router.navigate(['/profile/children']);
        }
      }, {
        key: "openModal",
        value: function openModal() {
          var _this18 = this;

          this.modalService.open(this.modalChildComponent, {
            ariaLabelledBy: 'modal-basic-title',
            centered: true,
            size: 'lg'
          }).result.then(function (result) {
            _this18.childrenRoute();
          }, function (reason) {
            _this18.childrenRoute();
          });
        }
      }]);

      return AddChildByCodeComponent;
    }();

    AddChildByCodeComponent.ctorParameters = function () {
      return [{
        type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addChildByCodeResult', {
      "static": false
    }), __metadata("design:type", Object)], AddChildByCodeComponent.prototype, "modalChildComponent", void 0);

    AddChildByCodeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'add-child-by-code',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./add-child-by-code.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/child-mode/add-child-by-code/add-child-by-code.component.html"))["default"]
    }), __metadata("design:paramtypes", [_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])], AddChildByCodeComponent);
    /***/
  },

  /***/
  "./src/app/child-mode/add-child/add-child-profile.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/child-mode/add-child/add-child-profile.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AddChildComponent */

  /***/
  function srcAppChildModeAddChildAddChildProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddChildComponent", function () {
      return AddChildComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../_services/api/api.service */
    "./src/app/_services/api/api.service.ts");
    /* harmony import */


    var _models_AppConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../_models/AppConstants */
    "./src/app/_models/AppConstants.ts");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _services_helpers_validationService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../_services/helpers/validationService */
    "./src/app/_services/helpers/validationService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _models_children_createChildModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../_models/children/createChildModel */
    "./src/app/_models/children/createChildModel.ts");
    /* harmony import */


    var src_app_models_children_createChildErrorViewModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/_models/children/createChildErrorViewModel */
    "./src/app/_models/children/createChildErrorViewModel.ts");
    /* harmony import */


    var src_app_services_helpers_contentHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/_services/helpers/contentHelper */
    "./src/app/_services/helpers/contentHelper.ts");
    /* harmony import */


    var src_app_services_helpers_childMapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/_services/helpers/childMapper */
    "./src/app/_services/helpers/childMapper.ts");
    /* harmony import */


    var src_app_services_localStorage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/_services/localStorage.service */
    "./src/app/_services/localStorage.service.ts");
    /* harmony import */


    var src_app_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/_services/data-sharing.service */
    "./src/app/_services/data-sharing.service.ts");
    /* harmony import */


    var src_app_services_helpers_apiBaseRequests__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/_services/helpers/apiBaseRequests */
    "./src/app/_services/helpers/apiBaseRequests.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AddChildComponent = /*#__PURE__*/function () {
      function AddChildComponent(apiService, toastr, router, localStorageService, dataSharingService, apiBaseRepository) {
        _classCallCheck(this, AddChildComponent);

        this.apiService = apiService;
        this.toastr = toastr;
        this.router = router;
        this.localStorageService = localStorageService;
        this.dataSharingService = dataSharingService;
        this.apiBaseRepository = apiBaseRepository;
        this.loading = false;
        this.child = new _models_children_createChildModel__WEBPACK_IMPORTED_MODULE_6__["CreateChildModel"]();
        this.createChildErrorViewModel = new src_app_models_children_createChildErrorViewModel__WEBPACK_IMPORTED_MODULE_7__["CreateChildErrorViewModel"]();
        this.USACountrySelected = false;
      }

      _createClass(AddChildComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          src_app_services_helpers_contentHelper__WEBPACK_IMPORTED_MODULE_8__["ContentHelper"].setLoading(true);
          this.user = this.localStorageService.getUser();

          if (!this.user) {
            this.router.navigate(['/login']);
            return;
          }

          this.countries = this.localStorageService.getCountries();
          this.states = this.localStorageService.getStates();

          if (!this.countries || !this.states) {
            this.apiBaseRepository.getCountriesStates().then(function (countriesStates) {
              _this19.countries = countriesStates.countries;
              _this19.states = countriesStates.states;

              _this19.finalizeNgOnInit();
            });
          } else {
            this.finalizeNgOnInit();
          }
        }
      }, {
        key: "finalizeNgOnInit",
        value: function finalizeNgOnInit() {
          var _this20 = this;

          this.country_USA = this.countries.find(function (x) {
            return x.alpha2Code == _models_AppConstants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].USA_COUNTRY_ALPHA2CODE;
          });
          var date_input = $('#dateOfBirth');
          date_input.datepicker({
            orientation: "bottom auto",
            startDate: "01/01/1990",
            endDate: "new Date()",
            startView: 2
          });

          if (this.user.country) {
            this.child.countryId = this.user.country.id;
          }

          if (this.user.state) {
            this.child.stateId = this.user.state.id;
          }

          this.child.gender = 0;
          date_input.change(function (event) {
            _this20.child.dateOfBirth = date_input.val();

            _this20.formChangedBaseHandler();
          });
          this.onCountrySelected(this.child.countryId);
          src_app_services_helpers_contentHelper__WEBPACK_IMPORTED_MODULE_8__["ContentHelper"].setLoading(false);
        }
      }, {
        key: "formChangedBaseHandler",
        value: function formChangedBaseHandler() {
          this.checkFormFields();
        }
      }, {
        key: "checkFormFields",
        value: function checkFormFields() {
          this.createChildErrorViewModel.setStateNoErrors();
          if (!this.child.firstName || !_services_helpers_validationService__WEBPACK_IMPORTED_MODULE_4__["ValidationService"].ifNameMatchPattern(this.child.firstName)) this.createChildErrorViewModel.firstNameError = true;
          if (!this.child.lastName || !_services_helpers_validationService__WEBPACK_IMPORTED_MODULE_4__["ValidationService"].ifNameMatchPattern(this.child.lastName)) this.createChildErrorViewModel.lastNameError = true;
          if (this.child.gender == undefined) this.createChildErrorViewModel.sexError = true;
          if (!this.child.dateOfBirth) this.createChildErrorViewModel.dateOfBirthError = true;
          if (!this.child.countryId) this.createChildErrorViewModel.countryError = true;
          if (!this.child.stateId) this.createChildErrorViewModel.stateError = true;
        }
      }, {
        key: "onCountrySelected",
        value: function onCountrySelected(value) {
          this.USACountrySelected = value === this.country_USA.id;
          if (!this.USACountrySelected) this.child.stateId = undefined;
        }
      }, {
        key: "saveChanges",
        value: function saveChanges() {
          var _this21 = this;

          this.loading = true;
          var body = src_app_services_helpers_childMapper__WEBPACK_IMPORTED_MODULE_9__["ChildMapper"].mapCreateChildRequest(this.child);

          if (!this.dateOfBirthIsValid(body.dateOfBirth)) {
            this.loading = false;
            this.createChildErrorViewModel.setStateErrorDateOfBirth();
            return;
          }

          ;
          this.apiService.postChild(body).subscribe(function (postChildResponse) {
            _this21.loading = false;

            _this21.router.navigate(['/profile/children']);
          }, function (error) {
            _this21.loading = false;

            _this21.toastr.errorToastr('Error occurred!', 'Oops!');
          });
        }
      }, {
        key: "dateOfBirthIsValid",
        value: function dateOfBirthIsValid(dateOfBirth) {
          return new Date() >= new Date(dateOfBirth);
        }
      }]);

      return AddChildComponent;
    }();

    AddChildComponent.ctorParameters = function () {
      return [{
        type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_services_localStorage_service__WEBPACK_IMPORTED_MODULE_10__["LocalStorageService"]
      }, {
        type: src_app_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_11__["DataSharingService"]
      }, {
        type: src_app_services_helpers_apiBaseRequests__WEBPACK_IMPORTED_MODULE_12__["ApiBaseRequests"]
      }];
    };

    AddChildComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'edit-children-profile',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./add-child-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/child-mode/add-child/add-child-profile.component.html"))["default"]
    }), __metadata("design:paramtypes", [_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_services_localStorage_service__WEBPACK_IMPORTED_MODULE_10__["LocalStorageService"], src_app_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_11__["DataSharingService"], src_app_services_helpers_apiBaseRequests__WEBPACK_IMPORTED_MODULE_12__["ApiBaseRequests"]])], AddChildComponent);
    /***/
  },

  /***/
  "./src/app/child-mode/edit-child/edit-child-profile.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/child-mode/edit-child/edit-child-profile.component.ts ***!
    \***********************************************************************/

  /*! exports provided: EditChildProfileComponent */

  /***/
  function srcAppChildModeEditChildEditChildProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditChildProfileComponent", function () {
      return EditChildProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../_services/api/api.service */
    "./src/app/_services/api/api.service.ts");
    /* harmony import */


    var _models_AppConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../_models/AppConstants */
    "./src/app/_models/AppConstants.ts");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _services_helpers_validationService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../_services/helpers/validationService */
    "./src/app/_services/helpers/validationService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_models_children_createChildErrorViewModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/_models/children/createChildErrorViewModel */
    "./src/app/_models/children/createChildErrorViewModel.ts");
    /* harmony import */


    var src_app_services_helpers_contentHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/_services/helpers/contentHelper */
    "./src/app/_services/helpers/contentHelper.ts");
    /* harmony import */


    var src_app_services_helpers_childMapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/_services/helpers/childMapper */
    "./src/app/_services/helpers/childMapper.ts");
    /* harmony import */


    var src_app_models_children_editChildModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/_models/children/editChildModel */
    "./src/app/_models/children/editChildModel.ts");
    /* harmony import */


    var src_app_services_localStorage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/_services/localStorage.service */
    "./src/app/_services/localStorage.service.ts");
    /* harmony import */


    var src_app_models_children_child__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/_models/children/child */
    "./src/app/_models/children/child.ts");
    /* harmony import */


    var src_app_services_helpers_apiBaseRequests__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/_services/helpers/apiBaseRequests */
    "./src/app/_services/helpers/apiBaseRequests.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var EditChildProfileComponent = /*#__PURE__*/function () {
      function EditChildProfileComponent(apiService, toastr, router, activateRoute, localStorageService, apiBaseRepository) {
        var _this22 = this;

        _classCallCheck(this, EditChildProfileComponent);

        this.apiService = apiService;
        this.toastr = toastr;
        this.router = router;
        this.activateRoute = activateRoute;
        this.localStorageService = localStorageService;
        this.apiBaseRepository = apiBaseRepository;
        this.child = new src_app_models_children_child__WEBPACK_IMPORTED_MODULE_11__["Child"]();
        this.editChildModel = new src_app_models_children_editChildModel__WEBPACK_IMPORTED_MODULE_9__["EditChildModel"]();
        this.editProfileErrorViewModel = new src_app_models_children_createChildErrorViewModel__WEBPACK_IMPORTED_MODULE_6__["CreateChildErrorViewModel"]();
        this.loading = false;
        this.USACountrySelected = false;
        this.subscription = activateRoute.params.subscribe(function (params) {
          _this22.childId = atob(params['id']);
        });
      }

      _createClass(EditChildProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          var user = this.localStorageService.getUser();

          if (!user) {
            this.router.navigate(['/login']);
            return;
          }

          src_app_services_helpers_contentHelper__WEBPACK_IMPORTED_MODULE_7__["ContentHelper"].setLoading(true);
          this.countries = this.localStorageService.getCountries();
          this.states = this.localStorageService.getStates();

          if (!this.countries || !this.states) {
            this.apiBaseRepository.getCountriesStates().then(function (countriesStates) {
              _this23.countries = countriesStates.countries;
              _this23.states = countriesStates.states;

              _this23.finalizeNgOnInit();
            });
          } else {
            this.finalizeNgOnInit();
          }
        }
      }, {
        key: "finalizeNgOnInit",
        value: function finalizeNgOnInit() {
          var _this24 = this;

          this.country_USA = this.countries.find(function (x) {
            return x.alpha2Code == _models_AppConstants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].USA_COUNTRY_ALPHA2CODE;
          });
          this.apiService.getUser(this.childId).subscribe(function (getUserResponse) {
            _this24.child = src_app_services_helpers_childMapper__WEBPACK_IMPORTED_MODULE_8__["ChildMapper"].mapGetUserByIdResponseToChildModel(_this24.childId, getUserResponse);
            _this24.editChildModel = src_app_services_helpers_childMapper__WEBPACK_IMPORTED_MODULE_8__["ChildMapper"].mapChildToEditChildMoldel(_this24.child);

            _this24.initEditProfileModels();

            src_app_services_helpers_contentHelper__WEBPACK_IMPORTED_MODULE_7__["ContentHelper"].setLoading(false);
          });
        }
      }, {
        key: "initEditProfileModels",
        value: function initEditProfileModels() {
          var _this25 = this;

          var date_input = $('#dateOfBirth');
          date_input.datepicker({
            orientation: "bottom auto",
            startDate: "01/01/1990",
            endDate: "new Date()"
          });
          date_input.datepicker("setDate", this.editChildModel.dateOfBirth);
          this.editChildModel.dateOfBirth = date_input.val();
          date_input.change(function (event) {
            _this25.editChildModel.dateOfBirth = date_input.val();

            _this25.formChangedBaseHandler();
          });
          this.onCountrySelected(this.editChildModel.countryId);
          this.checkFormFields();
          this.loading = false;
        }
      }, {
        key: "formChangedBaseHandler",
        value: function formChangedBaseHandler() {
          this.checkFormFields();
        }
      }, {
        key: "checkFormFields",
        value: function checkFormFields() {
          this.editProfileErrorViewModel.setStateNoErrors();
          if (!this.editChildModel.firstName || !_services_helpers_validationService__WEBPACK_IMPORTED_MODULE_4__["ValidationService"].ifNameMatchPattern(this.editChildModel.firstName)) this.editProfileErrorViewModel.firstNameError = true;
          if (!this.editChildModel.lastName || !_services_helpers_validationService__WEBPACK_IMPORTED_MODULE_4__["ValidationService"].ifNameMatchPattern(this.editChildModel.lastName)) this.editProfileErrorViewModel.lastNameError = true;
          if (this.editChildModel.gender == undefined) this.editProfileErrorViewModel.sexError = true;
          if (!this.editChildModel.dateOfBirth) this.editProfileErrorViewModel.dateOfBirthError = true;
          if (!this.editChildModel.countryId) this.editProfileErrorViewModel.countryError = true;
          if (!this.editChildModel.stateId) this.editProfileErrorViewModel.stateError = true;
        }
      }, {
        key: "onCountrySelected",
        value: function onCountrySelected(value) {
          this.USACountrySelected = value === this.country_USA.id;
          if (!this.USACountrySelected) this.editChildModel.stateId = undefined;
        }
      }, {
        key: "saveChanges",
        value: function saveChanges() {
          var _this26 = this;

          this.loading = true;
          var body = src_app_services_helpers_childMapper__WEBPACK_IMPORTED_MODULE_8__["ChildMapper"].mapEditChildRequest(this.editChildModel);
          this.apiService.updateChildProfile(this.child.id, body).subscribe(function (response) {
            _this26.loading = false;

            if (response.success) {
              _this26.toastr.successToastr("Profile updated successfully", 'Success!');

              _this26.router.navigate(['/profile/children']);
            } else {
              _this26.toastr.errorToastr(response.errors.join(','), 'Error');
            }
          }, function (error) {
            _this26.toastr.errorToastr('Error occurred', 'Oops!');

            _this26.loading = false;
          });
        }
      }]);

      return EditChildProfileComponent;
    }();

    EditChildProfileComponent.ctorParameters = function () {
      return [{
        type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: src_app_services_localStorage_service__WEBPACK_IMPORTED_MODULE_10__["LocalStorageService"]
      }, {
        type: src_app_services_helpers_apiBaseRequests__WEBPACK_IMPORTED_MODULE_12__["ApiBaseRequests"]
      }];
    };

    EditChildProfileComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'edit-children-profile',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./edit-child-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/child-mode/edit-child/edit-child-profile.component.html"))["default"]
    }), __metadata("design:paramtypes", [_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], src_app_services_localStorage_service__WEBPACK_IMPORTED_MODULE_10__["LocalStorageService"], src_app_services_helpers_apiBaseRequests__WEBPACK_IMPORTED_MODULE_12__["ApiBaseRequests"]])], EditChildProfileComponent);
    /***/
  },

  /***/
  "./src/app/edit-profile/edit-profile.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/edit-profile/edit-profile.component.ts ***!
    \********************************************************/

  /*! exports provided: EditProfileComponent */

  /***/
  function srcAppEditProfileEditProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function () {
      return EditProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_services/api/api.service */
    "./src/app/_services/api/api.service.ts");
    /* harmony import */


    var _models_AppConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_models/AppConstants */
    "./src/app/_models/AppConstants.ts");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _models_profile_profileModels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_models/profile/profileModels */
    "./src/app/_models/profile/profileModels.ts");
    /* harmony import */


    var _services_helpers_validationService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_services/helpers/validationService */
    "./src/app/_services/helpers/validationService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_localStorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../_services/localStorage.service */
    "./src/app/_services/localStorage.service.ts");
    /* harmony import */


    var _services_helpers_contentHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../_services/helpers/contentHelper */
    "./src/app/_services/helpers/contentHelper.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var EditProfileComponent = /*#__PURE__*/function () {
      function EditProfileComponent(apiService, toastr, router, localStorageService) {
        _classCallCheck(this, EditProfileComponent);

        this.apiService = apiService;
        this.toastr = toastr;
        this.router = router;
        this.localStorageService = localStorageService;
        this.loading = false;
        this.emailPattern = _models_AppConstants__WEBPACK_IMPORTED_MODULE_2__["InputPatterns"].EMAIL_PATTERN;
        this.editUserModel = new _models_profile_profileModels__WEBPACK_IMPORTED_MODULE_4__["EditUserViewModel"]();
        this.editProfileErrorViewModel = new _models_profile_profileModels__WEBPACK_IMPORTED_MODULE_4__["EditProfileErrorViewModel"]();
        this.USACountrySelected = false;
      }

      _createClass(EditProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this27 = this;

          _services_helpers_contentHelper__WEBPACK_IMPORTED_MODULE_8__["ContentHelper"].setLoading(true);

          this.loading = true;
          this.user = this.localStorageService.getUser();

          if (!this.user) {
            this.router.navigate(['/login']);
            return;
          }

          this.countries = JSON.parse(localStorage.getItem('countries'));
          this.states = JSON.parse(localStorage.getItem('states'));

          if (!this.countries || !this.states) {
            this.apiService.getCountries().subscribe(function (response) {
              response.items.forEach(function (c) {
                if (c.alpha2Code === _models_AppConstants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].USA_COUNTRY_ALPHA2CODE) {
                  c.name = "United States";
                }
              });
              _this27.countries = response.items;
              localStorage.setItem(_models_AppConstants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].LOCAL_STORAGE_COUNTRIES_KEY, JSON.stringify(response.items));
              _this27.country_USA = _this27.countries.find(function (x) {
                return x.alpha2Code == _models_AppConstants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].USA_COUNTRY_ALPHA2CODE;
              });

              _this27.apiService.getStates().subscribe(function (response) {
                _this27.states = response.items;
                localStorage.setItem(_models_AppConstants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].LOCAL_STORAGE_STATES_KEY, JSON.stringify(response.items));

                _this27.initEditProfileModels();
              });
            });
          } else {
            this.country_USA = this.countries.find(function (x) {
              return x.alpha2Code == _models_AppConstants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].USA_COUNTRY_ALPHA2CODE;
            });
            this.initEditProfileModels();
          }

          var date_input = $('#dateOfBirth-new'); //our date input has the name "date"

          date_input.datepicker({
            orientation: "bottom auto"
          });

          if (this.editUserModel.dateOfBirthViewModel) {
            var userDateOfBirth = new Date(this.editUserModel.dateOfBirthViewModel);
            $("#dateOfBirth-new").datepicker("setDate", userDateOfBirth);
          }

          date_input.change(function (event) {
            _this27.editUserModel.dateOfBirthViewModel = date_input.val();

            _this27.formChangedBaseHandler();
          });
        }
      }, {
        key: "initEditProfileModels",
        value: function initEditProfileModels() {
          this.editUserModel.mapFrom(this.user);
          this.onCountrySelected(this.editUserModel.countryId);
          this.editUserModel.stateId = this.user.state ? this.user.state.id : undefined;
          this.checkFormFields();

          _services_helpers_contentHelper__WEBPACK_IMPORTED_MODULE_8__["ContentHelper"].setLoading(false);

          this.loading = false;
        }
      }, {
        key: "formChangedBaseHandler",
        value: function formChangedBaseHandler() {
          this.checkFormFields();
        }
      }, {
        key: "emailChangeValue",
        value: function emailChangeValue(event) {
          this.checkFormFields();

          if (this.editUserModel.email && !_services_helpers_validationService__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].ifEmailMatchPattern(this.editUserModel.email)) {
            this.editProfileErrorViewModel.emailErrorPopover.showPopower(_models_AppConstants__WEBPACK_IMPORTED_MODULE_2__["PopowerErrorMessages"].EMAIL_PATTERN_NOT_MATCHES);
            this.editProfileErrorViewModel.emailError = true;
          }
        } // Show fields with red color to show that field should be filled

      }, {
        key: "checkFormFields",
        value: function checkFormFields() {
          this.editProfileErrorViewModel.setStateNoErrors();
          if (!this.editUserModel.email || !_services_helpers_validationService__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].ifEmailMatchPattern(this.editUserModel.email)) this.editProfileErrorViewModel.emailError = true;
          if (!this.editUserModel.phone) this.editProfileErrorViewModel.phoneError = true;
          if (!this.editUserModel.firstName || !_services_helpers_validationService__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].ifNameMatchPattern(this.editUserModel.firstName)) this.editProfileErrorViewModel.firstNameError = true;
          if (!this.editUserModel.lastName || !_services_helpers_validationService__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].ifNameMatchPattern(this.editUserModel.lastName)) this.editProfileErrorViewModel.lastNameError = true;
          if (this.editUserModel.gender == undefined) this.editProfileErrorViewModel.sexError = true;
          if (!this.editUserModel.dateOfBirthViewModel) this.editProfileErrorViewModel.dateOfBirthError = true;
          if (!this.editUserModel.countryId) this.editProfileErrorViewModel.countryError = true;
          if (!this.editUserModel.stateId) this.editProfileErrorViewModel.stateError = true;
        }
      }, {
        key: "onCountrySelected",
        value: function onCountrySelected(value) {
          this.USACountrySelected = value === this.country_USA.id;
          this.editUserModel.stateId = undefined;
        }
      }, {
        key: "saveChanges",
        value: function saveChanges() {
          var _this28 = this;

          this.editUserModel.dateOfBirthToUTC();
          this.loading = true;
          this.apiService.updateProfile(this.user.id, this.editUserModel).subscribe(function (response) {
            _this28.loading = false;

            if (response.success) {
              _this28.toastr.successToastr("Profile updated successfully", 'Success!');

              _this28.mapUserFromUpdateResponse(response);

              _this28.router.navigate(['/profile/my-profile']);
            } else {
              _this28.toastr.errorToastr(response.errors.join(','), 'Error');
            }
          }, function (error) {
            _this28.toastr.errorToastr('Error occurred', 'Oops!');

            _this28.loading = false;
          });
        }
      }, {
        key: "mapUserFromUpdateResponse",
        value: function mapUserFromUpdateResponse(response) {
          var actualUserModel = JSON.parse(localStorage.getItem('currentUser'));
          actualUserModel.firstName = response.firstName;
          actualUserModel.lastName = response.lastName;
          actualUserModel.age = response.age;
          actualUserModel.phone = response.phone;
          actualUserModel.country = response.country;
          actualUserModel.state = response.state;
          actualUserModel.temperatureScale = response.temperatureScale;
          actualUserModel.dateOfBirth = response.dateOfBirth;
          actualUserModel.gender = response.gender;
          localStorage.setItem(_models_AppConstants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].LOCAL_STORAGE_USER_KEY, JSON.stringify(actualUserModel));
          this.user = actualUserModel;
        }
      }]);

      return EditProfileComponent;
    }();

    EditProfileComponent.ctorParameters = function () {
      return [{
        type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _services_localStorage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]
      }];
    };

    EditProfileComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'edit-profile',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./edit-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-profile/edit-profile.component.html"))["default"]
    }), __metadata("design:paramtypes", [_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_localStorage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]])], EditProfileComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer-primary/footer-primary.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/footer/footer-primary/footer-primary.component.ts ***!
    \*******************************************************************/

  /*! exports provided: FooterPrimaryComponent */

  /***/
  function srcAppFooterFooterPrimaryFooterPrimaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterPrimaryComponent", function () {
      return FooterPrimaryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var FooterPrimaryComponent = /*#__PURE__*/function () {
      function FooterPrimaryComponent(modalService) {
        _classCallCheck(this, FooterPrimaryComponent);

        this.modalService = modalService;
      }

      _createClass(FooterPrimaryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeModalPrivacy",
        value: function closeModalPrivacy() {
          var body = document.querySelector('body');
          body.classList.remove('modal-open-privacy');
        }
      }, {
        key: "openModalPrivacy",
        value: function openModalPrivacy() {
          var body = document.querySelector('body');
          body.classList.add('modal-open-privacy');
        }
      }]);

      return FooterPrimaryComponent;
    }();

    FooterPrimaryComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
      }];
    };

    FooterPrimaryComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: "app-footer-primary",
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./footer-primary.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer-primary/footer-primary.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
    }), __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])], FooterPrimaryComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer-white/footer-white.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/footer/footer-white/footer-white.component.ts ***!
    \***************************************************************/

  /*! exports provided: FooterWhiteComponent */

  /***/
  function srcAppFooterFooterWhiteFooterWhiteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterWhiteComponent", function () {
      return FooterWhiteComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var FooterWhiteComponent = /*#__PURE__*/function () {
      function FooterWhiteComponent() {
        _classCallCheck(this, FooterWhiteComponent);

        this.year = new Date().getFullYear();
      }

      _createClass(FooterWhiteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeModalPrivacy",
        value: function closeModalPrivacy() {
          var body = document.querySelector('body');
          body.classList.remove('modal-open-privacy');
        }
      }, {
        key: "openModalPrivacy",
        value: function openModalPrivacy() {
          var body = document.querySelector('body');
          body.classList.add('modal-open-privacy');
        }
      }]);

      return FooterWhiteComponent;
    }();

    FooterWhiteComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: "app-footer-white",
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./footer-white.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer-white/footer-white.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
    }), __metadata("design:paramtypes", [])], FooterWhiteComponent);
    /***/
  },

  /***/
  "./src/app/footer/privacy/privacy.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/footer/privacy/privacy.component.ts ***!
    \*****************************************************/

  /*! exports provided: PrivacyComponent */

  /***/
  function srcAppFooterPrivacyPrivacyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function () {
      return PrivacyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var PrivacyComponent = /*#__PURE__*/function () {
      function PrivacyComponent(modalService) {
        _classCallCheck(this, PrivacyComponent);

        this.modalService = modalService;
      }

      _createClass(PrivacyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openVerticallyCentered",
        value: function openVerticallyCentered(content) {
          this.modalService.open(content, {
            centered: true,
            size: 'lg'
          });
        }
      }]);

      return PrivacyComponent;
    }();

    PrivacyComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
      }];
    };

    PrivacyComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: "app-footer-privacy-policy",
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./privacy.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/privacy/privacy.component.html"))["default"]
    }), __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])], PrivacyComponent);
    /***/
  },

  /***/
  "./src/app/header/header-base/header-base.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/header/header-base/header-base.component.ts ***!
    \*************************************************************/

  /*! exports provided: HeaderBaseComponent */

  /***/
  function srcAppHeaderHeaderBaseHeaderBaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderBaseComponent", function () {
      return HeaderBaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../_services/script-loader.service */
    "./src/app/_services/script-loader.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HeaderBaseComponent = /*#__PURE__*/function () {
      function HeaderBaseComponent(_router, _script) {
        _classCallCheck(this, HeaderBaseComponent);

        this._router = _router;
        this._script = _script;
        this.showUserMenu = false;
      }

      _createClass(HeaderBaseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderBaseComponent;
    }();

    HeaderBaseComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _services_script_loader_service__WEBPACK_IMPORTED_MODULE_2__["ScriptLoaderService"]
      }];
    };

    HeaderBaseComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'header-base',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./header-base.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header-base/header-base.component.html"))["default"]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_script_loader_service__WEBPACK_IMPORTED_MODULE_2__["ScriptLoaderService"]])], HeaderBaseComponent);
    /***/
  },

  /***/
  "./src/app/header/header-standart/header-standart.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/header/header-standart/header-standart.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderStandartHeaderStandartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXItc3RhbmRhcnQvaGVhZGVyLXN0YW5kYXJ0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/header/header-standart/header-standart.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/header/header-standart/header-standart.component.ts ***!
    \*********************************************************************/

  /*! exports provided: HeaderStandartComponent */

  /***/
  function srcAppHeaderHeaderStandartHeaderStandartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderStandartComponent", function () {
      return HeaderStandartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_localStorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_services/localStorage.service */
    "./src/app/_services/localStorage.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HeaderStandartComponent = /*#__PURE__*/function () {
      function HeaderStandartComponent(_router, localStorageService) {
        _classCallCheck(this, HeaderStandartComponent);

        this._router = _router;
        this.localStorageService = localStorageService;
      }

      _createClass(HeaderStandartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = JSON.parse(localStorage.getItem('currentUser'));
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem("currentUser");

          this._router.navigate(['/login']);
        }
      }]);

      return HeaderStandartComponent;
    }();

    HeaderStandartComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: src_app_services_localStorage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]
      }];
    };

    HeaderStandartComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'header-standart',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./header-standart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header-standart/header-standart.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./header-standart.component.scss */
      "./src/app/header/header-standart/header-standart.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_localStorage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]])], HeaderStandartComponent);
    /***/
  },

  /***/
  "./src/app/health-check-result/health-check-result.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/health-check-result/health-check-result.component.ts ***!
    \**********************************************************************/

  /*! exports provided: HealthCheckResultComponent */

  /***/
  function srcAppHealthCheckResultHealthCheckResultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HealthCheckResultComponent", function () {
      return HealthCheckResultComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HealthCheckResultComponent = /*#__PURE__*/function () {
      function HealthCheckResultComponent(_router, toastr) {
        _classCallCheck(this, HealthCheckResultComponent);

        this._router = _router;
        this.toastr = toastr;
      }

      _createClass(HealthCheckResultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var responseModel = JSON.parse(localStorage.getItem('checkModel'));
          localStorage.removeItem('checkModel');

          if (!responseModel) {
            this._router.navigate(['/health-test']);

            return;
          }

          this.parseResponseModel(responseModel);
        }
      }, {
        key: "parseResponseModel",
        value: function parseResponseModel(checkResponseModel) {
          this.check = checkResponseModel;
          this.check.dateTime = new Date(this.check.timestamp).toLocaleString("en-US");
        }
      }, {
        key: "downloadQRCode",
        value: function downloadQRCode() {
          var qrCodeSrc = '';

          try {
            var qrCodeHtmlElement = document.querySelector('.qrcode');
            var child = qrCodeHtmlElement.childNodes[0];
            qrCodeSrc = child.src;
          } catch (exception) {
            this.toastr.errorToastr('Error occurred when trying to generate HealthTest result!', 'Oops!', {
              showCloseButton: true
            });
            return;
          }
        }
      }]);

      return HealthCheckResultComponent;
    }();

    HealthCheckResultComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"]
      }];
    };

    HealthCheckResultComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-health-check-result',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./health-check-result.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/health-check-result/health-check-result.component.html"))["default"]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"]])], HealthCheckResultComponent);
    /***/
  },

  /***/
  "./src/app/health-test/health-test.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/health-test/health-test.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHealthTestHealthTestComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".item-center {\n  width: 100%;\n  max-width: 100%;\n  text-align: center; }\n\n.primary-color {\n  color: #00ACCD; }\n\n.spinner {\n  height: 3rem;\n  margin: auto;\n  shape-rendering: auto;\n  margin: inherit; }\n\n.card-test__loading {\n  margin: auto; }\n\n.card-message-container {\n  padding: 17px 16px;\n  margin-top: 0;\n  color: #D6433C;\n  background-color: #F7D9D8;\n  box-shadow: 0 5px 13px rgba(25, 27, 28, 0.15);\n  border-radius: 5px;\n  margin-top: 2rem;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto; }\n\n.c-btn-primary:disabled {\n  background-color: #babbbb;\n  box-shadow: 0px 4px 10px rgba(184, 187, 188, 0.15); }\n\n.card-content--flex {\n  display: flex;\n  flex-direction: column; }\n\n.card-text--size {\n  font-size: 32px;\n  line-height: 42px;\n  max-width: 90%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhbHRoLXRlc3QvQzpcXFVzZXJzXFxzaGFsYVxcRG9jdW1lbnRzXFxHaXRIdWJcXE15Q2l0eVxcY2l0eS12Mi9zcmNcXGFwcFxcaGVhbHRoLXRlc3RcXGhlYWx0aC10ZXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksWUFBWTtFQUNaLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZSxFQUFBOztBQUluQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsNkNBQTZDO0VBQzdDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFFUSx5QkFBeUI7RUFDekIsa0RBQWtELEVBQUE7O0FBSTFEO0VBQ0ksYUFBYTtFQUNaLHNCQUNMLEVBQUE7O0FBRUE7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hlYWx0aC10ZXN0L2hlYWx0aC10ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5pdGVtLWNlbnRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnByaW1hcnktY29sb3Ige1xyXG4gICAgY29sb3I6ICMwMEFDQ0Q7XHJcbn1cclxuXHJcbi5zcGlubmVyIHtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIG1hcmdpbjogYXV0bzsgXHJcbiAgICBzaGFwZS1yZW5kZXJpbmc6IGF1dG87XHJcbiAgICBtYXJnaW46IGluaGVyaXQ7XHJcblxyXG59XHJcblxyXG4uY2FyZC10ZXN0X19sb2FkaW5ne1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uY2FyZC1tZXNzYWdlLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxN3B4IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgY29sb3I6ICNENjQzM0M7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdEOUQ4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTNweCByZ2JhKDI1LCAyNywgMjgsIDAuMTUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYy1idG4tcHJpbWFyeSB7XHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmFiYmJiO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDE4NCwgMTg3LCAxODgsIDAuMTUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZC1jb250ZW50LS1mbGV4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXHJcbn1cclxuXHJcbi5jYXJkLXRleHQtLXNpemV7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDJweDsgIFxyXG4gICAgbWF4LXdpZHRoOiA5MCU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/health-test/health-test.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/health-test/health-test.component.ts ***!
    \******************************************************/

  /*! exports provided: HealthTestComponent */

  /***/
  function srcAppHealthTestHealthTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HealthTestComponent", function () {
      return HealthTestComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _models_health_test_viewModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_models/health-test/viewModels */
    "./src/app/_models/health-test/viewModels.ts");
    /* harmony import */


    var _services_localStorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_services/localStorage.service */
    "./src/app/_services/localStorage.service.ts");
    /* harmony import */


    var _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_services/api/api.service */
    "./src/app/_services/api/api.service.ts");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _services_customQuestionWizard_customSurveyWizard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../_services/customQuestionWizard/customSurveyWizard.service */
    "./src/app/_services/customQuestionWizard/customSurveyWizard.service.ts");
    /* harmony import */


    var _services_language_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../_services/language.service */
    "./src/app/_services/language.service.ts");
    /* harmony import */


    var _models_health_test_HealthCheckModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../_models/health-test/HealthCheckModel */
    "./src/app/_models/health-test/HealthCheckModel.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HealthTestComponent = /*#__PURE__*/function () {
      function HealthTestComponent(_router, localStorageService, apiService, toastr, languageService) {
        _classCallCheck(this, HealthTestComponent);

        this._router = _router;
        this.localStorageService = localStorageService;
        this.apiService = apiService;
        this.toastr = toastr;
        this.languageService = languageService;
        this.healthTestViewModel = new _models_health_test_viewModels__WEBPACK_IMPORTED_MODULE_2__["HealthTestViewModel"]();
        this.facilityList = [];
        this.facilityListIsEmpty = false;
      }

      _createClass(HealthTestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;

          this.healthTestViewModel.setStateLoading();
          this.user = this.localStorageService.getUser();

          if (!this.user) {
            this._router.navigate(['/login']);

            return;
          }

          this.apiService.getChildren().subscribe(function (response) {
            _this29.children = response.items;

            if (!_this29.children || _this29.children.length == 0) {
              _this29.chooseIdentity(_this29.user);
            } else {
              _this29.healthTestViewModel.setStateChooseIdentity();
            }
          });
        }
      }, {
        key: "chooseIdentity",
        value: function chooseIdentity(identity) {
          var _this30 = this;

          this.healthTestViewModel.setStateLoading();
          this.apiService.getUser(identity.id).subscribe(function (getUserByIdResponse) {
            _this30.currentIdentity = getUserByIdResponse;
            _this30.currentIdentity.id = identity.id;
            _this30.facilityList = _this30.currentIdentity.facilities;

            _this30.healthTestViewModel.setStateChooseFacility();

            _this30.fillOutFacilitySelectInput();
          });
        }
      }, {
        key: "fillOutFacilitySelectInput",
        value: function fillOutFacilitySelectInput() {
          if (this.facilityList && this.facilityList.length === 1) {
            this.selectFacility = this.facilityList[0].facilityId;
            this.onChangeSelectFalilityDropdown();
            return;
          }

          if (!this.facilityList || this.facilityList.length === 0) {
            this.facilityListIsEmpty = true;
            return;
          }

          this.selectFacility = null;
        }
      }, {
        key: "updateViewModels",
        value: function updateViewModels() {
          this.currentQuestion = this.customSurveyWizard.getCurrentQuestion();
          this.progressBarViewModel = this.customSurveyWizard.getProgressBarViewModel();
        }
      }, {
        key: "chooseFacility",
        value: function chooseFacility() {
          if (this.healthTestViewModel.questionsListIsEmpty) return;
          this.initCustomSurveyWizard(this.currentFacility.questions);
          this.healthTestViewModel.setStateStartWizard();
        }
      }, {
        key: "initCustomSurveyWizard",
        value: function initCustomSurveyWizard(questions) {
          this.customSurveyWizard = new _services_customQuestionWizard_customSurveyWizard_service__WEBPACK_IMPORTED_MODULE_6__["CustomSurveyWizard"](questions, this.languageService.getCurrentLanguage());
          this.customSurveyWizard.startWizard();
          this.currentQuestion = this.customSurveyWizard.getCurrentQuestion();
          this.progressBarViewModel = this.customSurveyWizard.getProgressBarViewModel();
        }
      }, {
        key: "onChangeSelectFalilityDropdown",
        value: function onChangeSelectFalilityDropdown() {
          var _this31 = this;

          if (!this.currentIdentity || !this.currentIdentity.facilities) return;
          this.healthTestViewModel.questionsListIsEmpty = false;
          this.currentFacility = this.currentIdentity.facilities.find(function (x) {
            return x.facilityId === _this31.selectFacility;
          });
          this.healthTestViewModel.questionsListIsEmpty = !(this.currentFacility && this.currentFacility.questions && this.currentFacility.questions.length > 0);
        }
      }, {
        key: "handleAnswer",
        value: function handleAnswer(answer) {
          this.customSurveyWizard.handleAnswer(answer);
          this.moveForward();
          if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
        }
      }, {
        key: "moveForward",
        value: function moveForward() {
          this.customSurveyWizard.nextQuestion();
          this.updateViewModels();

          if (this.customSurveyWizard.ifFinished()) {
            this.healthTestViewModel.setStateCheckRersult();
            this.finishTheTest();
          }
        }
      }, {
        key: "moveBack",
        value: function moveBack() {
          if (this.customSurveyWizard.nowIsFirstQuestion()) {
            this.healthTestViewModel.setStateChooseFacility();
            this.customSurveyWizard.startWizard();
            this.fillOutFacilitySelectInput();
            this.updateViewModels();
            return;
          }

          this.customSurveyWizard.previousQuestion();
          this.updateViewModels();
        }
      }, {
        key: "finishTheTest",
        value: function finishTheTest() {
          var _this32 = this;

          this.healthTestViewModel.setStateLoading();
          var requestModel = this.customSurveyWizard.getSurveyAnswers(this.currentIdentity.id, this.currentFacility.id, this.currentFacility.surveyId);
          this.apiService.checkTest(requestModel).subscribe(function (response) {
            _this32.navigateToTheTestResult(response);
          }, function (error) {
            console.error(error);

            _this32.toastr.errorToastr('Error occurred!<br><br><p>Please, try again in 10 minutes!</p>', 'Oops!', {
              enableHTML: true,
              dismiss: "click",
              showCloseButton: true
            });

            _this32.chooseIdentity(_this32.currentIdentity);
          });
        }
      }, {
        key: "navigateToTheTestResult",
        value: function navigateToTheTestResult(response) {
          var checkModelDTO = new _models_health_test_HealthCheckModel__WEBPACK_IMPORTED_MODULE_8__["CheckModelDTO"]();
          checkModelDTO.id = response.id;
          checkModelDTO.result = response.result;
          checkModelDTO.timestamp = response.timestamp;
          checkModelDTO.facilityId = this.currentFacility.id;
          checkModelDTO.facilityName = this.currentFacility.facilityName;
          checkModelDTO.facilityId = this.currentFacility.facilityId;
          checkModelDTO.userFirstName = this.currentIdentity.firstName;
          checkModelDTO.userLastName = this.currentIdentity.lastName;
          checkModelDTO.userId = this.currentIdentity.id;
          localStorage.setItem('checkModel', JSON.stringify(checkModelDTO));

          this._router.navigate(['/health-check-result']);
        }
      }]);

      return HealthTestComponent;
    }();

    HealthTestComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _services_localStorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]
      }, {
        type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"]
      }, {
        type: _services_language_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"]
      }];
    };

    HealthTestComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-health-test',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./health-test.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/health-test/health-test.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./health-test.component.scss */
      "./src/app/health-test/health-test.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_localStorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"], _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"], _services_language_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"]])], HealthTestComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HomeComponent = function HomeComponent() {
      _classCallCheck(this, HomeComponent);
    };

    HomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-home',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/layout/dropdown/dropdown.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/layout/dropdown/dropdown.component.ts ***!
    \*******************************************************/

  /*! exports provided: DropdownComponent */

  /***/
  function srcAppLayoutDropdownDropdownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownComponent", function () {
      return DropdownComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_localStorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_services/localStorage.service */
    "./src/app/_services/localStorage.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }; // Angular


    var DropdownComponent = /*#__PURE__*/function () {
      function DropdownComponent(_router, localStorageService) {
        _classCallCheck(this, DropdownComponent);

        this._router = _router;
        this.localStorageService = localStorageService;
      }

      _createClass(DropdownComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this.localStorageService.getUser();

          if (!this.user) {
            this._router.navigate(['/login']);

            return;
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem("currentUser");

          this._router.navigate(['/login']);
        }
      }]);

      return DropdownComponent;
    }();

    DropdownComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: src_app_services_localStorage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]
      }];
    };

    DropdownComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'kt-dropdown',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./dropdown.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/dropdown/dropdown.component.html"))["default"]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_localStorage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]])], DropdownComponent);
    /***/
  },

  /***/
  "./src/app/layout/language-selector/language-selector.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/layout/language-selector/language-selector.component.ts ***!
    \*************************************************************************/

  /*! exports provided: LanguageSelectorComponent */

  /***/
  function srcAppLayoutLanguageSelectorLanguageSelectorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageSelectorComponent", function () {
      return LanguageSelectorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }; // Angular


    var LanguageSelectorComponent = /*#__PURE__*/function () {
      /**
       * Component constructor
       *
       * @param translationService: TranslationService
       * @param router: Router
       */
      function LanguageSelectorComponent() {
        _classCallCheck(this, LanguageSelectorComponent);

        // Public properties
        this.classes = '';
        this.languages = [{
          lang: 'en',
          name: 'English',
          flag: './assets/media/flags/260-united-kingdom.svg'
        }, {
          lang: 'ch',
          name: 'Mandarin',
          flag: './assets/media/flags/034-china.svg'
        }, {
          lang: 'es',
          name: 'Spanish',
          flag: './assets/media/flags/128-spain.svg'
        }, {
          lang: 'jp',
          name: 'Japanese',
          flag: './assets/media/flags/063-japan.svg'
        }, {
          lang: 'de',
          name: 'German',
          flag: './assets/media/flags/162-germany.svg'
        }, {
          lang: 'fr',
          name: 'French',
          flag: './assets/media/flags/195-france.svg'
        }];
        this.language = this.languages[0];
      }
      /**
       * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
       */

      /**
       * On init
       */


      _createClass(LanguageSelectorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.language = {
          // 	lang: 'en',
          // 	name: 'English',
          // 	flag: './assets/media/flags/260-united-kingdom.svg'
          // };
        }
        /**
         * Set language
         *
         * @param lang: any
         */

      }, {
        key: "setLanguage",
        value: function setLanguage(lang) {}
        /**
         * Set selected language
         */

      }, {
        key: "setSelectedLanguage",
        value: function setSelectedLanguage() {}
      }]);

      return LanguageSelectorComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'), __metadata("design:type", Object)], LanguageSelectorComponent.prototype, "classes", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], LanguageSelectorComponent.prototype, "iconType", void 0);

    LanguageSelectorComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'kt-language-selector',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./language-selector.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/language-selector/language-selector.component.html"))["default"]
    }), __metadata("design:paramtypes", [])], LanguageSelectorComponent);
    /***/
  },

  /***/
  "./src/app/layout/popover/popover-basic.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/layout/popover/popover-basic.module.ts ***!
    \********************************************************/

  /*! exports provided: NgbdPopoverBasicModule */

  /***/
  function srcAppLayoutPopoverPopoverBasicModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbdPopoverBasicModule", function () {
      return NgbdPopoverBasicModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _popover_basic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./popover-basic */
    "./src/app/layout/popover/popover-basic.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var NgbdPopoverBasicModule = function NgbdPopoverBasicModule() {
      _classCallCheck(this, NgbdPopoverBasicModule);
    };

    NgbdPopoverBasicModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]],
      declarations: [_popover_basic__WEBPACK_IMPORTED_MODULE_3__["NgbdPopoverBasic"]],
      exports: [_popover_basic__WEBPACK_IMPORTED_MODULE_3__["NgbdPopoverBasic"]],
      bootstrap: [_popover_basic__WEBPACK_IMPORTED_MODULE_3__["NgbdPopoverBasic"]]
    })], NgbdPopoverBasicModule);
    /***/
  },

  /***/
  "./src/app/layout/popover/popover-basic.ts":
  /*!*************************************************!*\
    !*** ./src/app/layout/popover/popover-basic.ts ***!
    \*************************************************/

  /*! exports provided: NgbdPopoverBasic */

  /***/
  function srcAppLayoutPopoverPopoverBasicTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbdPopoverBasic", function () {
      return NgbdPopoverBasic;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var NgbdPopoverBasic = function NgbdPopoverBasic() {
      _classCallCheck(this, NgbdPopoverBasic);
    };

    NgbdPopoverBasic = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'ngbd-popover-basic',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./popover-basic.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/popover/popover-basic.html"))["default"]
    })], NgbdPopoverBasic);
    /***/
  },

  /***/
  "./src/app/login/login.component.scss":
  /*!********************************************!*\
    !*** ./src/app/login/login.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".activation-modal-title {\n  color: #00ACCD;\n  text-align: center; }\n\n.error-title {\n  color: #b06850; }\n\n.activation-modal-body {\n  text-align: center; }\n\n.spinner-modal {\n  height: 2rem;\n  margin: auto;\n  shape-rendering: auto; }\n\n.spinner-modal svg {\n    width: 2rem;\n    height: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxzaGFsYVxcRG9jdW1lbnRzXFxHaXRIdWJcXE15Q2l0eVxcY2l0eS12Mi9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLHFCQUFxQixFQUFBOztBQUh6QjtJQU1RLFdBQVc7SUFDWCxZQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmFjdGl2YXRpb24tbW9kYWwtdGl0bGUge1xyXG4gICAgY29sb3I6ICMwMEFDQ0Q7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lcnJvci10aXRsZSB7XHJcbiAgICBjb2xvcjogI2IwNjg1MDtcclxufVxyXG4uYWN0aXZhdGlvbi1tb2RhbC1ib2R5IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNwaW5uZXItbW9kYWx7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICBtYXJnaW46IGF1dG87IFxyXG4gICAgc2hhcGUtcmVuZGVyaW5nOiBhdXRvO1xyXG5cclxuICAgIHN2Z3tcclxuICAgICAgICB3aWR0aDogMnJlbTtcclxuICAgICAgICBoZWlnaHQ6MnJlbTsgXHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _models_user_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_models/user/user */
    "./src/app/_models/user/user.ts");
    /* harmony import */


    var _models_BackendResponseCodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_models/BackendResponseCodes */
    "./src/app/_models/BackendResponseCodes.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _models_sign_in_signInModels__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../_models/sign-in/signInModels */
    "./src/app/_models/sign-in/signInModels.ts");
    /* harmony import */


    var _services_helpers_contentHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../_services/helpers/contentHelper */
    "./src/app/_services/helpers/contentHelper.ts");
    /* harmony import */


    var _services_api_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../_services/api/api.service */
    "./src/app/_services/api/api.service.ts");
    /* harmony import */


    var _services_localStorage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../_services/localStorage.service */
    "./src/app/_services/localStorage.service.ts");
    /* harmony import */


    var _services_helpers_apiBaseRequests__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../_services/helpers/apiBaseRequests */
    "./src/app/_services/helpers/apiBaseRequests.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
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
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(_router, authService, modalService, toastr, route, apiService, localStorageService, apiHelper) {
        _classCallCheck(this, LoginComponent);

        this._router = _router;
        this.authService = authService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.route = route;
        this.apiService = apiService;
        this.localStorageService = localStorageService;
        this.apiHelper = apiHelper;
        this.userLoginModel = new _models_user_user__WEBPACK_IMPORTED_MODULE_2__["UserLoginModel"]();
        this.signInErrorViewModel = new _models_user_user__WEBPACK_IMPORTED_MODULE_2__["SignInErrorViewModel"]();
        this.activationViewModel = new _models_sign_in_signInModels__WEBPACK_IMPORTED_MODULE_7__["ActivationViewModel"]();
        this.loading = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this33 = this;

          this.route.queryParams.subscribe(function (params) {
            var activationModel = new _models_sign_in_signInModels__WEBPACK_IMPORTED_MODULE_7__["ActivationRequestModel"]();
            activationModel.userId = params['id'];
            activationModel.token = params['code'];

            if (!activationModel.isValid()) {
              _this33._router.navigate(['/home']);

              return;
            }

            _this33.loading = true;

            _this33.activationViewModel.setStateActivationInProgress();

            _services_helpers_contentHelper__WEBPACK_IMPORTED_MODULE_8__["ContentHelper"].showEmailVerifyModal();

            _this33.authService.confirmEmailToken(activationModel).subscribe(function (response) {
              _this33.loading = false;

              _this33.activationViewModel.setStateRequestReceived(response.success);
            }, function (error) {
              _this33.loading = false;

              _this33.activationViewModel.setStateRequestReceived(false);
            });
          });
        }
      }, {
        key: "formChangeValue",
        value: function formChangeValue(event) {
          this.signInErrorViewModel.setStateNoError();
        }
      }, {
        key: "signIn",
        value: function signIn(form) {
          var _this34 = this;

          this.loading = true;
          this.authService.login(this.userLoginModel).subscribe(function (response) {
            return __awaiter(_this34, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (response.success) {
                        _context3.next = 4;
                        break;
                      }

                      this.loading = false;
                      this.handleErrorResponseCode(response);
                      return _context3.abrupt("return");

                    case 4:
                      this.mapUser(response);
                      _context3.next = 7;
                      return this.apiHelper.getChildren();

                    case 7:
                      this._router.navigate(['/home']);

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }, function (error) {
            _this34.toastr.errorToastr("Error occurred! <br>".concat(error.message), 'Oops!', {
              enableHTML: true,
              dismiss: "click",
              showCloseButton: true
            });

            _this34.loading = false;
          });
        }
      }, {
        key: "handleErrorResponseCode",
        value: function handleErrorResponseCode(response) {
          var code = response.code;

          switch (code) {
            case _models_BackendResponseCodes__WEBPACK_IMPORTED_MODULE_3__["BackendResponseCode"].USER_NOT_ACTIVE:
              {
                this.signInErrorViewModel.emailError = true;
                this.signInErrorViewModel.userNotActiveError = true;
                break;
              }

            case _models_BackendResponseCodes__WEBPACK_IMPORTED_MODULE_3__["BackendResponseCode"].PASSWORD_NOT_VALID:
              {
                this.signInErrorViewModel.passwordError = true;
                this.signInErrorViewModel.passwordError = true;
                break;
              }

            case _models_BackendResponseCodes__WEBPACK_IMPORTED_MODULE_3__["BackendResponseCode"].USER_NOT_FOUND:
              {
                this.signInErrorViewModel.emailError = true;
                this.signInErrorViewModel.userNotFountError = true;
                break;
              }
          }
        }
      }, {
        key: "mapUser",
        value: function mapUser(loginResponse) {
          var user = {
            token: loginResponse.token,
            refreshToken: loginResponse.refreshToken,
            id: loginResponse.userId,
            email: loginResponse.email,
            age: loginResponse.age,
            firstName: loginResponse.firstName,
            lastName: loginResponse.lastName,
            phone: loginResponse.phone,
            userFacility: loginResponse.userFacility,
            country: loginResponse.country,
            state: loginResponse.state,
            availableTemperatureScales: loginResponse.availableTemperatureScales,
            gender: loginResponse.gender,
            temperatureScale: loginResponse.temperatureScale,
            dateOfBirth: loginResponse.dateOfBirth
          };
          this.setDefaultTemperatureScaleIfNecessary(user);
          this.localStorageService.setUser(user);
        }
      }, {
        key: "setDefaultTemperatureScaleIfNecessary",
        value: function setDefaultTemperatureScaleIfNecessary(user) {
          if (user.temperatureScale) return;

          if (!user.availableTemperatureScales && user.availableTemperatureScales.length == 0) {
            console.error("TemperatureScalesList is empty. It is impossible to set default temperature scale to user");
            return;
          }

          var defaultTemperatureFahrenheit = user.availableTemperatureScales.find(function (x) {
            return x.name == 'Fahrenheit';
          });
          if (defaultTemperatureFahrenheit) user.temperatureScale = defaultTemperatureFahrenheit;else {
            console.error("Default TemperatureScale by alias not found");
            user.temperatureScale = new _models_user_user__WEBPACK_IMPORTED_MODULE_2__["TemperatureScale"]();
            user.temperatureScale.name = 'Fahrenheit';
            user.temperatureScale.id = '';
          }
        }
      }, {
        key: "closeModalVerify",
        value: function closeModalVerify() {
          if (this.activationViewModel.activationInProgress) return;

          _services_helpers_contentHelper__WEBPACK_IMPORTED_MODULE_8__["ContentHelper"].closeEmailVerifyModal();

          this._router.navigate(['/home']);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"]
      }, {
        type: _services_localStorage_service__WEBPACK_IMPORTED_MODULE_10__["LocalStorageService"]
      }, {
        type: _services_helpers_apiBaseRequests__WEBPACK_IMPORTED_MODULE_11__["ApiBaseRequests"]
      }];
    };

    LoginComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-login',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/login/login.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_api_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"], _services_localStorage_service__WEBPACK_IMPORTED_MODULE_10__["LocalStorageService"], _services_helpers_apiBaseRequests__WEBPACK_IMPORTED_MODULE_11__["ApiBaseRequests"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/news/news.component.scss":
  /*!******************************************!*\
    !*** ./src/app/news/news.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewsNewsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* ===================================================================== */\n/*----- Form var -----*/\n/*----- Font -----*/\n/*----- Body -----*/\n/* buttons  */\nh3 {\n  text-align: center; }\n.article-card-category {\n  position: relative;\n  float: left;\n  top: -30px;\n  left: 15px;\n  height: 0px; }\n.float-none {\n  clear: both; }\n.article-card-image-wrap {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  position: relative;\n  color: white;\n  font-size: 16px; }\n.article-card-image-wrap-badge {\n    position: absolute;\n    bottom: 5%;\n    /* right: 0; */\n    left: 0%;\n    transform: translateX(8px);\n    background-color: #0d70b482;\n    font-size: 0.7rem;\n    line-height: 0;\n    font-weight: 500;\n    color: #fff;\n    padding: 1em 0.7em;\n    border-radius: 100vh;\n    min-width: 25%;\n    text-align: center; }\n/* Not so relevant CSS */\n.Container {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n.itemsBlock {\n  font-size: 1rem; }\n.article-card {\n  box-shadow: 0 5px 20px #2734431a;\n  border-radius: 0.5rem;\n  font-size: 0.85rem;\n  cursor: pointer; }\n.article-card-title {\n  width: 100%;\n  color: #5d5d5d;\n  background-color: #fff;\n  font-weight: 600;\n  line-height: 1.5em;\n  height: 3em;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  margin-bottom: 0.6rem; }\n.article-card-short-text {\n  font-size: 1em;\n  color: #67757C;\n  line-height: 1.5em;\n  height: 3em;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  margin-top: 0px;\n  margin-bottom: 0.6rem; }\n.article-card-content {\n  padding: 0.6rem; }\n.article-card-additional {\n  border-top: 2px solid #2734431a;\n  display: flex;\n  padding: 0.6rem;\n  color: #67757C; }\n.article-card-additional-date {\n    flex-grow: 3; }\n.article-card-additional-likes {\n    flex-grow: 1;\n    text-align: center; }\n.article-card-additional .line-vertical {\n    border-right: 2px solid #2734431a; }\nimg {\n  border-radius: .5rem .5rem 0px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9DOlxcVXNlcnNcXHNoYWxhXFxEb2N1bWVudHNcXEdpdEh1YlxcTXlDaXR5XFxjaXR5LXYyL3NyY1xcYXNzZXRzXFxzY3NzXFxiYXNlXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL25ld3MvQzpcXFVzZXJzXFxzaGFsYVxcRG9jdW1lbnRzXFxHaXRIdWJcXE15Q2l0eVxcY2l0eS12Mi9zcmNcXGFwcFxcbmV3c1xcbmV3cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQkEsMEVBQUE7QUE4REEsdUJBQUE7QUFZQSxtQkFBQTtBQUdBLG1CQUFBO0FBb0JBLGFBQUE7QUNuSEE7RUFDRSxrQkFBa0IsRUFBQTtBQUVwQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLFVBQVU7RUFDVixXQUFXLEVBQUE7QUFFYjtFQUNFLFdBQVcsRUFBQTtBQUdiO0VBQ0Usd0JBQWdCO0tBQWhCLHFCQUFnQjtVQUFoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlLEVBQUE7QUFFZjtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsY0FBQTtJQUNBLFFBQVE7SUFDUiwwQkFBMEI7SUFDMUIsMkJEc0I0QjtJQ3JCNUIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGtCQUFrQixFQUFBO0FBSXRCLHdCQUFBO0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTtBQUVyQjtFQUNFLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGdDRHdCd0I7RUN2QnhCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLHFCRHdGZSxFQUFBO0FDckZqQjtFQUNFLGNBQWM7RUFDZCxjRDNDb0I7RUM0Q3BCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixxQkQyRWUsRUFBQTtBQ3hFakI7RUFDRSxlRHlFZ0IsRUFBQTtBQ3RFbEI7RUFDRSwrQkRkd0I7RUNleEIsYUFBYTtFQUNiLGVEbUVnQjtFQ2xFaEIsY0Q5RG9CLEVBQUE7QUNnRXBCO0lBQ0UsWUFBWSxFQUFBO0FBR2Q7SUFDRSxZQUFZO0lBQ1osa0JBQWtCLEVBQUE7QUFadEI7SUFnQkksaUNEN0JzQixFQUFBO0FDaUMxQjtFQUNFLGtDQUFrQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJyZWFrcG9pbnQ6IChcclxuICAncHJlc21hbGwnOiAzMjBweCxcclxuICAnc21hbGwnOiA0ODBweCxcclxuICAncHJlbWVkaXVtJzogNjQwcHgsXHJcbiAgJ21lZGl1bSc6IDc2OHB4LFxyXG4gICdsYXJnZSc6IDEwMjRweCxcclxuICAneGxhcmdlJzogMTIwMHB4LFxyXG4gICd4eGxhcmdlJzogMTQ0MHB4LFxyXG4pO1xyXG5cclxuJGdyaWQteHM6IChcclxuICBndXR0ZXItd2lkdGg6IDE2cHgsXHJcbiAgZ3JpZC1tYXJnaW5zOiAyMnB4XHJcbik7XHJcblxyXG4kZ3JpZC1tZDogKFxyXG4gIGdyaWQtbWFyZ2luczogMzBweFxyXG4pO1xyXG5cclxuJGdyaWQtY29sdW1uczogMTI7XHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLy8gQmFzZSBDb2xvcnNcclxuJGJsYWNrOiAjMTkxQjFDO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRncmF5LTEwMDogI0YyRjlGQjtcclxuJGdyYXktMjAwOiAjRTdFQ0ZBO1xyXG4kZ3JheS0zMDA6ICNEREUxRUY7XHJcbiRncmF5LTQwMDogI0M0QzhEMztcclxuJGdyYXktNjAwOiAjN0E4ODlGO1xyXG4kZ3JheTogIzY2NkI2QztcclxuJGxpZ2h0LWdyYXk6ICNCREMxRDI7XHJcbiRncmF5LXByaW1hcnk6ICM2Nzc1N0M7XHJcbiRyZWQ6ICNENjQzM0M7XHJcbiRibHVlOiAjMDBBQ0NEO1xyXG4kbGlnaHQtYmx1ZTogI0YyRjlGQjtcclxuJHllbGxvdzogICNFRkNFNTg7XHJcbiRncmVlbjogICAjMjBBMjM0O1xyXG5cclxuLy9BcHAgY29sb3JzXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcblxyXG4kZ3JheXM6KFxyXG4gIFwiMTAwXCI6ICRncmF5LTEwMCxcclxuICBcIjIwMFwiOiAkZ3JheS0yMDAsXHJcbiAgXCIzMDBcIjogJGdyYXktMzAwLFxyXG4gIFwiNjAwXCI6ICRncmF5LTYwMCxcclxuKTtcclxuXHJcbiRwcmltYXJ5OiAjMEQ3MEI0O1xyXG4kcHJpbWFyeS10cmFuc3BhcmVuY3k6ICMwZDcwYjQ4MjtcclxuJHByaW1hcnktaG92ZXI6ICMxODYzOTY7XHJcbiRzZWNvbmRhcnk6ICRncmF5O1xyXG4kc2Vjb25kYXJ5LWxpZ2h0OiAkZ3JheS1wcmltYXJ5O1xyXG4kZGFuZ2VyOiAgJHJlZDtcclxuJGxpZ2h0OiAgICRncmF5LTEwMDtcclxuJHN1Y2Nlc3M6ICRncmVlbjtcclxuJHdhcm5pbmc6ICR5ZWxsb3c7XHJcblxyXG4kY29sb3JzOiAoXHJcbiAgJ2JsYWNrJzogJGJsYWNrLFxyXG4gICd3aGl0ZSc6ICR3aGl0ZSxcclxuICBcInByaW1hcnlcIjogJHByaW1hcnksXHJcbiAgXCJkYW5nZXJcIjogICRkYW5nZXIsXHJcbiAgXCJsaWdodFwiOiAgICRsaWdodCxcclxuICBcInNlY29uZGFyeVwiOiAkc2Vjb25kYXJ5LFxyXG4gIFwic2Vjb25kYXJ5LWxpZ2h0XCI6ICRzZWNvbmRhcnktbGlnaHQsXHJcbiAgXCJzdWNjZXNzXCI6ICRzdWNjZXNzLFxyXG4gIFwid2FybmluZ1wiOiAkd2FybmluZyxcclxuICBcImdyYXktMTAwXCI6ICRncmF5LTEwMCxcclxuKTtcclxuXHJcbiRkaXNhYmxlLXR4dDogJHNlY29uZGFyeS1saWdodDtcclxuXHJcbiRiZy1mb290ZXI6ICMzNjM2M2E7XHJcbiRiZy1ib2R5OiAjRjJGOUZCOyAvLyBib2R5LCBwcml2YWN5LW1vZGFsX19oZWFkZXIsIHNjcm9sbC1iYXIsIGRyb3Bkb3duLWxhbmd1YWdlXHJcblxyXG4kc2hhZG93LWNvbG9yLTE6ICMyNzM0NDMxYTtcclxuXHJcbi8vQm9yZGVyc1xyXG4kYm9yZGVyLTE6IDJweCBzb2xpZCAkc2hhZG93LWNvbG9yLTE7XHJcblxyXG4vKi0tLS0tIEZvcm0gdmFyIC0tLS0tKi9cclxuJGNvbC1ib3JkZXI6ICRsaWdodC1ncmF5O1xyXG4kY29sLWZvY3VzOiAjN2Y3ZjdmO1xyXG4kY29sLWVycm9yOiAkZGFuZ2VyO1xyXG4kY29sLXN1Y2Nlc3M6ICRzdWNjZXNzO1xyXG4kY29sLXBsYWNlaG9sZGVyOiAkZ3JheTtcclxuJGJnLWVycm9yOiAjRjdEOUQ4O1xyXG4kZGVmYXVsdC1ib3JkZXI6IDFweCBzb2xpZCAkY29sLWJvcmRlcjtcclxuJGlucHV0LWhlaWdodDogNjBweDtcclxuJGlucHV0LWhvbGRlci1tYXJnaW46IDIwcHg7XHJcbiRpbnB1dC1pbmRlbnQteDogMTZweDtcclxuXHJcbi8qLS0tLS0gRm9udCAtLS0tLSovXHJcbiRmb250LWZhbWlseS1tdWxpOiAnTXVsaScsICdIZWx2ZXRpY2EnLCAgJ0FyaWFsJywgc2Fucy1zZXJpZjtcclxuXHJcbi8qLS0tLS0gQm9keSAtLS0tLSovXHJcbiRiYXNlLWZvbnQtc2l6ZTogMXJlbTtcclxuJGZvbnQtc2l6ZS1hZGRpdGlvbmFsOiAxNHB4O1xyXG4kZm9udC1zaXplLWxhcmdlOiAyNHB4O1xyXG4kZm9udC1zaXplLW1lZGl1bTogMTZweDtcclxuJGZvbnQtc2l6ZS1zbWFsbDogMTJweDtcclxuJGJhc2UtbGluZS1oZWlnaHQ6IDEuNTtcclxuJGJvZHktY29sb3I6ICRibGFjaztcclxuJGJhc2UtbWluLXdpZHRoOiAzMjBweDtcclxuJGJhc2UtZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1tdWxpO1xyXG5cclxuJHZlcnRpY2FsLXJoeXRobTogKCRiYXNlLWxpbmUtaGVpZ2h0ICogMWVtKTtcclxuXHJcblxyXG4kYW5pbWF0aW9uLXNwZWVkOiAuM3M7IC8vIGZvciBtaXhpblxyXG5cclxuJGJvcmRlci1yYWRpdXM6IDVweDtcclxuJGJvcmRlci1yYWRpdXMtbW9kYWw6IDIwcHg7XHJcblxyXG5cclxuLyogYnV0dG9ucyAgKi9cclxuXHJcbiRmb250LXNpemUtbWFpbi10aXRsZTogNTRweDtcclxuJGNvbG9yLW1haW4tdGl0bGU6ICRibGFjaztcclxuXHJcbiRjYXJkLXNoYWRvdzogNHB4IDRweCA0MHB4IHJnYmEoMzIsIDYzLCAxMDcsIDAuMik7XHJcblxyXG4kYnRuLWZvbnQtd2VpZ2h0OiA4MDA7XHJcbiRidG4tb3V0bGluZS1mb250LXdlaWdodDogYm9sZDtcclxuJGJ0bi1ib3JkZXItd2lkdGg6IDJweDtcclxuJGJ0bi1wYWRkaW5nLXg6IDIwcHg7XHJcbiRidG4tc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgwLCAxNzIsIDIwNSwgMC4xNSk7XHJcbiRidG4taG92ZXItY29sb3I6ICMwMDk4QjY7XHJcbiRidG4tZGlzYWJsZWQtYmc6ICNGMkY5RkI7XHJcblxyXG4kYnRuLXBhZGRpbmcteTogKFxyXG4gIHhzOiAxNnB4LFxyXG4gIG1kOiAxNHB4XHJcbik7XHJcblxyXG4kc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4kYnRuLXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMCwgMTcyLCAyMDUsIC4xNSk7XHJcblxyXG4vLyBIZWFkZXJzXHJcbiRoMS1mb250LXNpemU6IDNyZW0gIWRlZmF1bHQ7XHJcbiRoMi1mb250LXNpemU6IDIuNXJlbSAhZGVmYXVsdDtcclxuJGgzLWZvbnQtc2l6ZTogMi4ycmVtICFkZWZhdWx0O1xyXG4kaDQtZm9udC1zaXplOiAkYmFzZS1mb250LXNpemUgIWRlZmF1bHQ7XHJcblxyXG4vLyBjaGVja2JveFxyXG4kY2hlY2tib3gtYm9yZGVyLWNvbG9yOiAkbGlnaHQtZ3JheTtcclxuJGNoZWNrYm94LWJvcmRlci1yYWRpdXM6IDJweDtcclxuXHJcblxyXG4vLyBmb290ZXJcclxuJGZvb3Rlci1oZWlnaHQ6IChcclxuICB4czogMTQ2cHgsXHJcbiAgbWQ6IDExMnB4LFxyXG4gIHhsOiAxMTFweFxyXG4pO1xyXG5cclxuJG1hcmdpbi0xOiAwLjZyZW07XHJcblxyXG4kcGFkZGluZy0xOiAwLjZyZW07XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc2Nzcy9iYXNlL3ZhcmlhYmxlc1wiO1xyXG5cclxuaDN7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5hcnRpY2xlLWNhcmQtY2F0ZWdvcnkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogbGVmdDtcclxuICB0b3A6IC0zMHB4O1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgaGVpZ2h0OiAwcHg7XHJcbn1cclxuLmZsb2F0LW5vbmUge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uYXJ0aWNsZS1jYXJkLWltYWdlLXdyYXAge1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gICYtYmFkZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA1JTtcclxuICAgIC8qIHJpZ2h0OiAwOyAqL1xyXG4gICAgbGVmdDogMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOHB4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LXRyYW5zcGFyZW5jeTtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxZW0gMC43ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDB2aDtcclxuICAgIG1pbi13aWR0aDogMjUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLyogTm90IHNvIHJlbGV2YW50IENTUyAqL1xyXG5cclxuLkNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uaXRlbXNCbG9jayB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uYXJ0aWNsZS1jYXJkIHtcclxuICBib3gtc2hhZG93OiAwIDVweCAyMHB4ICRzaGFkb3ctY29sb3ItMTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFydGljbGUtY2FyZC10aXRsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6ICM1ZDVkNWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICBoZWlnaHQ6IDNlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIG1hcmdpbi1ib3R0b206ICRtYXJnaW4tMTtcclxufVxyXG5cclxuLmFydGljbGUtY2FyZC1zaG9ydC10ZXh0IHtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBjb2xvcjogJGdyYXktcHJpbWFyeTtcclxuICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgaGVpZ2h0OiAzZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogJG1hcmdpbi0xO1xyXG59XHJcblxyXG4uYXJ0aWNsZS1jYXJkLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6ICRwYWRkaW5nLTE7XHJcbn1cclxuXHJcbi5hcnRpY2xlLWNhcmQtYWRkaXRpb25hbCB7XHJcbiAgYm9yZGVyLXRvcDogJGJvcmRlci0xO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogJHBhZGRpbmctMTtcclxuICBjb2xvcjogJGdyYXktcHJpbWFyeTtcclxuXHJcbiAgJi1kYXRlIHtcclxuICAgIGZsZXgtZ3JvdzogMztcclxuICB9XHJcblxyXG4gICYtbGlrZXMge1xyXG4gICAgZmxleC1ncm93OiAxOyAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5saW5lLXZlcnRpY2Fse1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAkYm9yZGVyLTE7XHJcbiAgfVxyXG59XHJcblxyXG5pbWd7XHJcbiAgYm9yZGVyLXJhZGl1czogLjVyZW0gLjVyZW0gMHB4IDBweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/news/news.component.ts":
  /*!****************************************!*\
    !*** ./src/app/news/news.component.ts ***!
    \****************************************/

  /*! exports provided: NewsComponent */

  /***/
  function srcAppNewsNewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsComponent", function () {
      return NewsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_data_provider_data_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/data-provider/data-provider.service */
    "./src/app/_services/data-provider/data-provider.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var NewsComponent = /*#__PURE__*/function () {
      function NewsComponent(_router, dateProvider) {
        _classCallCheck(this, NewsComponent);

        this._router = _router;
        this.dateProvider = dateProvider;
        this.news = [];
        this.lastPageReached = false;
        this.fireNews = [];
        this.fireNewsRows = [];
        this.dashboardItem = "dashboardItem";
        this.breakpoint = 3;
        this.loading = false;
      }

      _createClass(NewsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this35 = this;

          this.loading = true;
          this.dateProvider.init().then(function () {
            _this35.dateProvider.getAll().then(function (res) {
              _this35.fireNews = res; //this.fireNewsRows = DataProviderExtension.splitSequenceToRows(res, 3);

              _this35.loading = false;
            });
          });
        }
      }, {
        key: "onClickOpenItem",
        value: function onClickOpenItem(item) {
          console.log("Open item");
          console.log(item);

          this._router.navigate(['/article', item.id], {
            state: item
          });
        }
      }]);

      return NewsComponent;
    }();

    NewsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _services_data_provider_data_provider_service__WEBPACK_IMPORTED_MODULE_2__["DataProviderService"]
      }];
    };

    NewsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-news',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./news.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./news.component.scss */
      "./src/app/news/news.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_data_provider_data_provider_service__WEBPACK_IMPORTED_MODULE_2__["DataProviderService"]])], NewsComponent);
    /***/
  },

  /***/
  "./src/app/profile/children/child-card-component/child-card.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/profile/children/child-card-component/child-card.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileChildrenChildCardComponentChildCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".c-card-result__inner {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center; }\n\n.c-card-result--large {\n  border-radius: 20px; }\n\n.qrcodeImage {\n  border: 1px solid #c3c3c3; }\n\n.child-id--input {\n  border: none;\n  background-color: white;\n  text-align: center;\n  word-break: break-all; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9jaGlsZHJlbi9jaGlsZC1jYXJkLWNvbXBvbmVudC9DOlxcVXNlcnNcXHNoYWxhXFxEb2N1bWVudHNcXEdpdEh1YlxcTXlDaXR5XFxjaXR5LXYyL3NyY1xcYXBwXFxwcm9maWxlXFxjaGlsZHJlblxcY2hpbGQtY2FyZC1jb21wb25lbnRcXGNoaWxkLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBS3BCO0VBRU0sbUJBQW1CLEVBQUE7O0FBR3pCO0VBQ0UseUJBQXlCLEVBQUE7O0FBSTNCO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL2NoaWxkcmVuL2NoaWxkLWNhcmQtY29tcG9uZW50L2NoaWxkLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4uYy1jYXJkLXJlc3VsdF9faW5uZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcblxyXG4gIH1cclxuXHJcbiAgLmMtY2FyZC1yZXN1bHQtLWxhcmdle1xyXG4gICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNjM2MzYzM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcblxyXG4gIC5xcmNvZGVJbWFnZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjM2MzYzM7XHJcblxyXG4gIH1cclxuXHJcbiAgLmNoaWxkLWlkLS1pbnB1dCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/profile/children/child-card-component/child-card.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/profile/children/child-card-component/child-card.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ChildCardComponent */

  /***/
  function srcAppProfileChildrenChildCardComponentChildCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChildCardComponent", function () {
      return ChildCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_profile_addFacilityViewModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/_models/profile/addFacilityViewModel */
    "./src/app/_models/profile/addFacilityViewModel.ts");
    /* harmony import */


    var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_services/api/api.service */
    "./src/app/_services/api/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_localStorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_services/localStorage.service */
    "./src/app/_services/localStorage.service.ts");
    /* harmony import */


    var src_app_models_children_child__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_models/children/child */
    "./src/app/_models/children/child.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ChildCardComponent = /*#__PURE__*/function () {
      function ChildCardComponent(apiService, router, localStorageService, modalService) {
        _classCallCheck(this, ChildCardComponent);

        this.apiService = apiService;
        this.router = router;
        this.localStorageService = localStorageService;
        this.modalService = modalService;
        this.child = new src_app_models_children_child__WEBPACK_IMPORTED_MODULE_5__["Child"]();
        this.addFacilityDialogViewModel = new src_app_models_profile_addFacilityViewModel__WEBPACK_IMPORTED_MODULE_1__["AddFacilityViewModel"]();
        this.loading = false;
      }

      _createClass(ChildCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this36 = this;

          this.loading = true;
          var children = this.localStorageService.getChildren();
          this.child = children.find(function (item) {
            return item.id === _this36.childId;
          });
          this.loading = false;

          if (!this.child) {
            this.child = new src_app_models_children_child__WEBPACK_IMPORTED_MODULE_5__["Child"]();
            console.error("ChildById not found");
            console.error("Id: ".concat(this.childId));
            this.router.navigate(['/profile/my-profile']);
            return;
          }

          this.childIdBase64 = btoa(this.child.id);
        }
      }, {
        key: "routeEditChild",
        value: function routeEditChild() {
          var childId = btoa(this.child.id);
          this.router.navigate(["edit-child-profile/".concat(childId)]);
        }
      }, {
        key: "onClickAddFacilityInput",
        value: function onClickAddFacilityInput() {
          var _this37 = this;

          if (!this.addFacilityDialogViewModel.newFacilityCode || this.addFacilityDialogViewModel.facilityErrorPopover.popowerIsVisible) return;
          this.addFacilityDialogViewModel.loading = true;
          var getFacilityResponseBody = {
            facilityCode: this.addFacilityDialogViewModel.newFacilityCode
          };
          this.apiService.getFacilityCode(getFacilityResponseBody).subscribe(function (response) {
            if (!response.success) {
              _this37.addFacilityDialogViewModel.handleResponse(response);

              _this37.addFacilityDialogViewModel.loading = false;
              return;
            }

            var body = {
              userId: _this37.child.id,
              facilityCode: _this37.addFacilityDialogViewModel.newFacilityCode
            };

            _this37.apiService.addFacility(body).subscribe(function (response) {
              _this37.child.facilities = response;
              _this37.addFacilityDialogViewModel.loading = false;

              _this37.addFacilityDialogViewModel.setAddFacilityDialogIsActive(false);
            });
          });
        }
      }, {
        key: "openModalShareProfile",
        value: function openModalShareProfile(shareprofilemodal) {}
      }, {
        key: "copyChildId",
        value: function copyChildId() {
          try {
            var selBox = document.createElement('textarea');
            selBox.style.position = 'fixed';
            selBox.style.left = '0';
            selBox.style.top = '0';
            selBox.style.opacity = '0';
            selBox.value = this.childIdBase64;
            document.body.appendChild(selBox);
            selBox.focus();
            selBox.select();
            document.execCommand('copy');
            document.body.removeChild(selBox);
            $("#copyChildIdBtn").animate({
              opacity: 0
            }, 150, function () {
              $("#copyChildIdBtn span").text("Child Id copied to clipboard");
              $("#copyChildIdBtn").animate({
                opacity: 100
              }, 150);
            });
          } catch (ex) {
            $("#copyChildIdBtn").animate({
              opacity: 0
            }, 150, function () {
              $("#copyChildIdBtn").text("Oops! Error occurred.");
              $("#copyChildIdBtn").css({
                color: '#c43737'
              });
              $("#copyChildIdBtn").animate({
                opacity: 100
              }, 150);
            });
          }
        }
      }]);

      return ChildCardComponent;
    }();

    ChildCardComponent.ctorParameters = function () {
      return [{
        type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_localStorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], ChildCardComponent.prototype, "childId", void 0);

    ChildCardComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'child-card',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./child-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/children/child-card-component/child-card.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./child-card.component.scss */
      "./src/app/profile/children/child-card-component/child-card.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_localStorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])], ChildCardComponent);
    /***/
  },

  /***/
  "./src/app/profile/children/children.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/profile/children/children.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileChildrenChildrenComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-loading {\n  color: #00accd; }\n  .card-loading p {\n    margin: 1rem;\n    text-align: center;\n    font-size: 1.5rem;\n    font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9jaGlsZHJlbi9DOlxcVXNlcnNcXHNoYWxhXFxEb2N1bWVudHNcXEdpdEh1YlxcTXlDaXR5XFxjaXR5LXYyL3NyY1xcYXBwXFxwcm9maWxlXFxjaGlsZHJlblxcY2hpbGRyZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxjQUFjLEVBQUE7RUFEbEI7SUFHUSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY2hpbGRyZW4vY2hpbGRyZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNhcmQtbG9hZGluZyB7XHJcbiAgICBjb2xvcjogIzAwYWNjZDtcclxuICAgIHB7XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/profile/children/children.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/profile/children/children.component.ts ***!
    \********************************************************/

  /*! exports provided: ChildrenComponent */

  /***/
  function srcAppProfileChildrenChildrenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChildrenComponent", function () {
      return ChildrenComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_profile_addFacilityViewModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/_models/profile/addFacilityViewModel */
    "./src/app/_models/profile/addFacilityViewModel.ts");
    /* harmony import */


    var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../_services/api/api.service */
    "./src/app/_services/api/api.service.ts");
    /* harmony import */


    var src_app_models_AppConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_models/AppConstants */
    "./src/app/_models/AppConstants.ts");
    /* harmony import */


    var src_app_models_profile_changePasswordViewModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_models/profile/changePasswordViewModel */
    "./src/app/_models/profile/changePasswordViewModel.ts");
    /* harmony import */


    var src_app_services_helpers_validationService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_services/helpers/validationService */
    "./src/app/_services/helpers/validationService.ts");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var src_app_services_localStorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/_services/localStorage.service */
    "./src/app/_services/localStorage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var src_app_services_helpers_apiBaseRequests__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/_services/helpers/apiBaseRequests */
    "./src/app/_services/helpers/apiBaseRequests.ts");
    /* harmony import */


    var src_app_services_helpers_contentHelper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/_services/helpers/contentHelper */
    "./src/app/_services/helpers/contentHelper.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ChildrenComponent = /*#__PURE__*/function () {
      function ChildrenComponent(apiService, toastr, localStorageService, _router, modalService, apiHelper) {
        _classCallCheck(this, ChildrenComponent);

        this.apiService = apiService;
        this.toastr = toastr;
        this.localStorageService = localStorageService;
        this._router = _router;
        this.modalService = modalService;
        this.apiHelper = apiHelper;
        this.addFacilityDialogViewModel = new src_app_models_profile_addFacilityViewModel__WEBPACK_IMPORTED_MODULE_1__["AddFacilityViewModel"]();
        this.changePasswordViewModel = new src_app_models_profile_changePasswordViewModel__WEBPACK_IMPORTED_MODULE_4__["ChangePasswordViewModel"]();
        this.loading = false;
        this.children = [];
      }

      _createClass(ChildrenComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this38 = this;

          this.loading = true;
          this.user = this.localStorageService.getUser();

          if (!this.user) {
            this._router.navigate(['/login']);

            return;
          }

          this.apiHelper.getChildren().then(function () {
            _this38.children = _this38.localStorageService.getChildren();
            _this38.loading = false;
            if (_this38._router.url === "/profile/children") src_app_services_helpers_contentHelper__WEBPACK_IMPORTED_MODULE_11__["ContentHelper"].chooseTabMyProfileChildren();

            if (!_this38.children || _this38.children.length == 0) {
              _this38._router.navigate(['/profile/my-profile']);

              return;
            }
          });
        }
      }, {
        key: "onClickAddFacilityOpenDialog",
        value: function onClickAddFacilityOpenDialog(event) {
          this.addFacilityDialogViewModel.setAddFacilityDialogIsActive(true);
          setTimeout(function () {
            return $('#inputFacilityCode').focus();
          }, 200);
        }
      }, {
        key: "onClickAddFacilityInput",
        value: function onClickAddFacilityInput() {
          var _this39 = this;

          if (!this.addFacilityDialogViewModel.newFacilityCode || this.addFacilityDialogViewModel.facilityErrorPopover.popowerIsVisible) return;
          this.addFacilityDialogViewModel.loading = true;
          var getFacilityResponseBody = {
            facilityCode: this.addFacilityDialogViewModel.newFacilityCode
          };
          this.apiService.getFacilityCode(getFacilityResponseBody).subscribe(function (response) {
            if (!response.success) {
              _this39.addFacilityDialogViewModel.handleResponse(response);

              _this39.addFacilityDialogViewModel.loading = false;
              return;
            }

            var body = {
              userId: _this39.user.id,
              facilityCode: _this39.addFacilityDialogViewModel.newFacilityCode
            };

            _this39.apiService.addFacility(body).subscribe(function (response) {
              _this39.user.userFacility = response;
              localStorage.setItem(src_app_models_AppConstants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].LOCAL_STORAGE_USER_KEY, JSON.stringify(_this39.user));
              _this39.addFacilityDialogViewModel.loading = false;

              _this39.addFacilityDialogViewModel.setAddFacilityDialogIsActive(false);
            });
          });
        }
      }, {
        key: "facilityValueChanged",
        value: function facilityValueChanged() {
          this.addFacilityDialogViewModel.setStateNoErrors();
        }
      }, {
        key: "onClickOpenChangePasswordDialog",
        value: function onClickOpenChangePasswordDialog() {
          this.changePasswordViewModel.setChangePasswordDialogisActive(true);
          setTimeout(function () {
            return $('#password').focus();
          }, 200);
        }
      }, {
        key: "changePassword",
        value: function changePassword(isValid) {
          var _this40 = this;

          if (!isValid) return;
          this.changePasswordViewModel.loading = true;
          var body = {
            newPassword: this.changePasswordViewModel.newPassword
          };
          this.apiService.updatePassword(body).subscribe(function (response) {
            _this40.changePasswordViewModel.setChangePasswordDialogisActive(false);

            if (response.success) {
              _this40.toastr.successToastr("Password updated successfully", 'Success!', {
                enableHTML: true,
                showCloseButton: true
              });
            } else _this40.changePasswordViewModel.passwordErrorPopover.showPopower(response.errors.join(','));
          }, function (error) {
            _this40.toastr.errorToastr('Error occurred', 'Oops!');
          });
        }
      }, {
        key: "onChangeNewPassword",
        value: function onChangeNewPassword() {
          this.changePasswordViewModel.setStateNoErrors();
          if (!this.changePasswordViewModel.newPassword || !src_app_services_helpers_validationService__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].ifPasswordMatchPattern(this.changePasswordViewModel.newPassword)) this.changePasswordViewModel.passwordErrorPopover.showPopower(src_app_models_AppConstants__WEBPACK_IMPORTED_MODULE_3__["PopowerErrorMessages"].PASSWORD_PATTERN_NOT_MATCHES);
        }
      }, {
        key: "closeDialogAddFacility",
        value: function closeDialogAddFacility() {
          if (!this.addFacilityDialogViewModel.loading) this.addFacilityDialogViewModel.setAddFacilityDialogIsActive(false);
        }
      }, {
        key: "closeDialogChangePassword",
        value: function closeDialogChangePassword() {
          if (!this.changePasswordViewModel.loading) this.changePasswordViewModel.setChangePasswordDialogisActive(false);
        }
      }, {
        key: "onClickCreateChildRoute",
        value: function onClickCreateChildRoute() {
          this._router.navigate(['/add-child']);
        }
      }, {
        key: "onClickAddChildByCodeRoute",
        value: function onClickAddChildByCodeRoute() {
          this._router.navigate(['/add-child-by-code']);
        }
      }, {
        key: "onClickEditChild",
        value: function onClickEditChild(id) {
          this._router.navigate(['/edit-children-profile']);
        }
      }, {
        key: "openModalAddChild",
        value: function openModalAddChild(addchildmodal) {
          this.modalService.open(addchildmodal, {
            centered: true,
            size: 'lg'
          });
        }
      }]);

      return ChildrenComponent;
    }();

    ChildrenComponent.ctorParameters = function () {
      return [{
        type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]
      }, {
        type: src_app_services_localStorage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"]
      }, {
        type: src_app_services_helpers_apiBaseRequests__WEBPACK_IMPORTED_MODULE_10__["ApiBaseRequests"]
      }];
    };

    ChildrenComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-children',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./children.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/children/children.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./children.component.scss */
      "./src/app/profile/children/children.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"], src_app_services_localStorage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"], src_app_services_helpers_apiBaseRequests__WEBPACK_IMPORTED_MODULE_10__["ApiBaseRequests"]])], ChildrenComponent);
    /***/
  },

  /***/
  "./src/app/profile/my-profile/my-profile.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/profile/my-profile/my-profile.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileMyProfileMyProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-loading {\n  color: #00accd; }\n  .card-loading p {\n    margin: 1rem;\n    text-align: center;\n    font-size: 1.5rem;\n    font-weight: 600; }\n  .facility-list--wrap {\n  display: flex; }\n  .facility-list--wrap svg {\n    display: none; }\n  .facility-list--wrap:hover svg {\n    display: inline-block;\n    cursor: pointer;\n    margin-top: 3px;\n    margin-left: 15px; }\n  .flex-grow-1 {\n  flex-grow: 1; }\n  .font-size--title {\n  font-size: 2rem; }\n  .c-btn-delete-facility {\n  color: #d6433c; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9teS1wcm9maWxlL0M6XFxVc2Vyc1xcc2hhbGFcXERvY3VtZW50c1xcR2l0SHViXFxNeUNpdHlcXGNpdHktdjIvc3JjXFxhcHBcXHByb2ZpbGVcXG15LXByb2ZpbGVcXG15LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjLEVBQUE7RUFEaEI7SUFHSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQTtFQUlwQjtFQUNFLGFBQWEsRUFBQTtFQURmO0lBSUksYUFBYSxFQUFBO0VBSmpCO0lBU00scUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7RUFJdkI7RUFDSSxZQUFZLEVBQUE7RUFHaEI7RUFDRSxlQUFlLEVBQUE7RUFHakI7RUFDSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL215LXByb2ZpbGUvbXktcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWxvYWRpbmcge1xyXG4gIGNvbG9yOiAjMDBhY2NkO1xyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxufVxyXG5cclxuLmZhY2lsaXR5LWxpc3QtLXdyYXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIHN2ZyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBzdmcge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmZsZXgtZ3Jvdy0xe1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uZm9udC1zaXplLS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4uYy1idG4tZGVsZXRlLWZhY2lsaXR5e1xyXG4gICAgY29sb3I6ICNkNjQzM2M7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/profile/my-profile/my-profile.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/profile/my-profile/my-profile.component.ts ***!
    \************************************************************/

  /*! exports provided: MyProfileComponent */

  /***/
  function srcAppProfileMyProfileMyProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function () {
      return MyProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_profile_addFacilityViewModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/_models/profile/addFacilityViewModel */
    "./src/app/_models/profile/addFacilityViewModel.ts");
    /* harmony import */


    var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../_services/api/api.service */
    "./src/app/_services/api/api.service.ts");
    /* harmony import */


    var src_app_models_AppConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_models/AppConstants */
    "./src/app/_models/AppConstants.ts");
    /* harmony import */


    var src_app_models_profile_changePasswordViewModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_models/profile/changePasswordViewModel */
    "./src/app/_models/profile/changePasswordViewModel.ts");
    /* harmony import */


    var src_app_services_helpers_validationService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_services/helpers/validationService */
    "./src/app/_services/helpers/validationService.ts");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var src_app_services_localStorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/_services/localStorage.service */
    "./src/app/_services/localStorage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var src_app_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/_services/data-sharing.service */
    "./src/app/_services/data-sharing.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var MyProfileComponent = /*#__PURE__*/function () {
      function MyProfileComponent(apiService, toastr, localStorageService, _router, modalService, dataSharingService) {
        _classCallCheck(this, MyProfileComponent);

        this.apiService = apiService;
        this.toastr = toastr;
        this.localStorageService = localStorageService;
        this._router = _router;
        this.modalService = modalService;
        this.dataSharingService = dataSharingService;
        this.addFacilityDialogViewModel = new src_app_models_profile_addFacilityViewModel__WEBPACK_IMPORTED_MODULE_1__["AddFacilityViewModel"]();
        this.changePasswordViewModel = new src_app_models_profile_changePasswordViewModel__WEBPACK_IMPORTED_MODULE_4__["ChangePasswordViewModel"]();
        this.loading = false;
        this.deleteFacilityInProgress = false;
      }

      _createClass(MyProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this.localStorageService.getUser();

          if (!this.user) {
            this._router.navigate(['/login']);

            return;
          }
        }
      }, {
        key: "onClickAddFacilityOpenDialog",
        value: function onClickAddFacilityOpenDialog(event) {
          this.addFacilityDialogViewModel.setAddFacilityDialogIsActive(true);
          setTimeout(function () {
            return $('#inputFacilityCode').focus();
          }, 200);
        }
      }, {
        key: "onClickAddFacilityInput",
        value: function onClickAddFacilityInput() {
          var _this41 = this;

          if (!this.addFacilityDialogViewModel.newFacilityCode || this.addFacilityDialogViewModel.facilityErrorPopover.popowerIsVisible) return;
          this.addFacilityDialogViewModel.loading = true;
          var getFacilityResponseBody = {
            facilityCode: this.addFacilityDialogViewModel.newFacilityCode
          };
          this.apiService.getFacilityCode(getFacilityResponseBody).subscribe(function (response) {
            if (!response.success) {
              _this41.addFacilityDialogViewModel.handleResponse(response);

              _this41.addFacilityDialogViewModel.loading = false;
              return;
            }

            var body = {
              userId: _this41.user.id,
              facilityCode: _this41.addFacilityDialogViewModel.newFacilityCode
            };

            _this41.apiService.addFacility(body).subscribe(function (response) {
              _this41.user.userFacility = response;
              localStorage.setItem(src_app_models_AppConstants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].LOCAL_STORAGE_USER_KEY, JSON.stringify(_this41.user));
              _this41.addFacilityDialogViewModel.loading = false;

              _this41.addFacilityDialogViewModel.setAddFacilityDialogIsActive(false);
            });
          });
        }
      }, {
        key: "facilityValueChanged",
        value: function facilityValueChanged() {
          this.addFacilityDialogViewModel.setStateNoErrors();
        }
      }, {
        key: "onClickOpenChangePasswordDialog",
        value: function onClickOpenChangePasswordDialog() {
          this.changePasswordViewModel.setChangePasswordDialogisActive(true);
          setTimeout(function () {
            return $('#password').focus();
          }, 200);
        }
      }, {
        key: "changePassword",
        value: function changePassword(isValid) {
          var _this42 = this;

          if (!isValid) return;
          this.changePasswordViewModel.loading = true;
          var body = {
            newPassword: this.changePasswordViewModel.newPassword
          };
          this.apiService.updatePassword(body).subscribe(function (response) {
            _this42.changePasswordViewModel.setChangePasswordDialogisActive(false);

            if (response.success) {
              _this42.toastr.successToastr("Password updated successfully", 'Success!', {
                enableHTML: true,
                showCloseButton: true
              });
            } else _this42.changePasswordViewModel.passwordErrorPopover.showPopower(response.errors.join(','));
          }, function (error) {
            _this42.toastr.errorToastr('Error occurred', 'Oops!');
          });
        }
      }, {
        key: "onChangeNewPassword",
        value: function onChangeNewPassword() {
          this.changePasswordViewModel.setStateNoErrors();
          if (!this.changePasswordViewModel.newPassword || !src_app_services_helpers_validationService__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].ifPasswordMatchPattern(this.changePasswordViewModel.newPassword)) this.changePasswordViewModel.passwordErrorPopover.showPopower(src_app_models_AppConstants__WEBPACK_IMPORTED_MODULE_3__["PopowerErrorMessages"].PASSWORD_PATTERN_NOT_MATCHES);
        }
      }, {
        key: "closeDialogAddFacility",
        value: function closeDialogAddFacility() {
          if (!this.addFacilityDialogViewModel.loading) this.addFacilityDialogViewModel.setAddFacilityDialogIsActive(false);
        }
      }, {
        key: "closeDialogChangePassword",
        value: function closeDialogChangePassword() {
          if (!this.changePasswordViewModel.loading) this.changePasswordViewModel.setChangePasswordDialogisActive(false);
        }
      }, {
        key: "onClickCreateChildRoute",
        value: function onClickCreateChildRoute() {
          this._router.navigate(['/add-child']);
        }
      }, {
        key: "onClickAddChildByCodeRoute",
        value: function onClickAddChildByCodeRoute() {
          this._router.navigate(['/add-child-by-code']);
        }
      }, {
        key: "onClickEditChild",
        value: function onClickEditChild(id) {
          this._router.navigate(['/edit-children-profile']);
        }
      }, {
        key: "openModalAddChild",
        value: function openModalAddChild(addchildmodal) {
          this.modalService.open(addchildmodal, {
            centered: true,
            size: 'lg'
          });
        }
      }, {
        key: "openModalDeleteFacility",
        value: function openModalDeleteFacility(deletefacilitymodal, facility) {
          this.facilityToDelete = facility;
          this.modalService.open(deletefacilitymodal, {
            centered: true,
            size: 'lg'
          });
        }
      }, {
        key: "deleteFacility",
        value: function deleteFacility() {
          var _this43 = this;

          if (!this.facilityToDelete) return;
          this.deleteFacilityInProgress = true;
          this.user.userFacility = this.user.userFacility.filter(function (x) {
            return x.id !== _this43.facilityToDelete.id;
          });
          this.apiService.leaveFacility(this.user.id, this.facilityToDelete.id).subscribe(function (response) {
            _this43.deleteFacilityInProgress = false;
            _this43.facilityToDelete = null;

            _this43.localStorageService.setUser(_this43.user);
          }, function (error) {
            _this43.toastr.errorToastr("Error occurred during deleting facility ".concat(_this43.facilityToDelete.name, "!"), 'Oops!');

            _this43.user.userFacility.push(_this43.facilityToDelete);

            _this43.facilityToDelete = null;
            _this43.deleteFacilityInProgress = false;
          });
        }
      }]);

      return MyProfileComponent;
    }();

    MyProfileComponent.ctorParameters = function () {
      return [{
        type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]
      }, {
        type: src_app_services_localStorage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"]
      }, {
        type: src_app_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_10__["DataSharingService"]
      }];
    };

    MyProfileComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'my-profile',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./my-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/my-profile/my-profile.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./my-profile.component.scss */
      "./src/app/profile/my-profile/my-profile.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"], src_app_services_localStorage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"], src_app_services_data_sharing_service__WEBPACK_IMPORTED_MODULE_10__["DataSharingService"]])], MyProfileComponent);
    /***/
  },

  /***/
  "./src/app/profile/my-results/my-result.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/profile/my-results/my-result.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileMyResultsMyResultComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-loading {\n  color: #00accd; }\n  .card-loading p {\n    margin: 1rem;\n    text-align: center;\n    font-size: 1.5rem;\n    font-weight: 600; }\n  .dropdown-wrap {\n  display: flex; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9teS1yZXN1bHRzL0M6XFxVc2Vyc1xcc2hhbGFcXERvY3VtZW50c1xcR2l0SHViXFxNeUNpdHlcXGNpdHktdjIvc3JjXFxhcHBcXHByb2ZpbGVcXG15LXJlc3VsdHNcXG15LXJlc3VsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQWMsRUFBQTtFQURsQjtJQUdRLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBO0VBS3hCO0VBQ0ksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9teS1yZXN1bHRzL215LXJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2FyZC1sb2FkaW5nIHtcclxuICAgIGNvbG9yOiAjMDBhY2NkO1xyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uZHJvcGRvd24td3JhcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/profile/my-results/my-result.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/profile/my-results/my-result.component.ts ***!
    \***********************************************************/

  /*! exports provided: MyResultComponent */

  /***/
  function srcAppProfileMyResultsMyResultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyResultComponent", function () {
      return MyResultComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../_services/api/api.service */
    "./src/app/_services/api/api.service.ts");
    /* harmony import */


    var src_app_models_AppConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_models/AppConstants */
    "./src/app/_models/AppConstants.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var src_app_services_localStorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_services/localStorage.service */
    "./src/app/_services/localStorage.service.ts");
    /* harmony import */


    var src_app_services_helpers_apiBaseRequests__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/_services/helpers/apiBaseRequests */
    "./src/app/_services/helpers/apiBaseRequests.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var MyResultComponent = /*#__PURE__*/function () {
      function MyResultComponent(apiService, _router, toastr, localStorageService, apiBaseRequests) {
        _classCallCheck(this, MyResultComponent);

        this.apiService = apiService;
        this._router = _router;
        this.toastr = toastr;
        this.localStorageService = localStorageService;
        this.apiBaseRequests = apiBaseRequests;
        this.checks = [];
        this.allUserChecks = [];
        this.monthes = src_app_models_AppConstants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].monthModels;
        this.loading = false;
        this.cardLoading = false;
        this.haveNoResults = false;
        this.identities = [];
        this.currentIdentitiy = {};
        this.hasChildren = false;
      }

      _createClass(MyResultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loading = true;
          this.user = this.localStorageService.getUser();

          if (!this.user) {
            this._router.navigate(['/login']);

            return;
          }

          this.initIdentities();
          this.identityDropdownModel = this.user.id;
          this.getChecksByIdentity(this.user.id);
        }
      }, {
        key: "initIdentities",
        value: function initIdentities() {
          var _this44 = this;

          this.identities = new Array();
          this.identities.push(this.mapDropdownIdentityModel(this.user.id, this.user.firstName, this.user.lastName));
          var children = this.localStorageService.getChildren();

          if (!children || children.length == 0) {
            this.hasChildren = false;
            return;
          }

          this.hasChildren = true;
          children.forEach(function (item) {
            _this44.identities.push(_this44.mapDropdownIdentityModel(item.id, item.firstName, item.lastName));
          });
        }
      }, {
        key: "mapDropdownIdentityModel",
        value: function mapDropdownIdentityModel(id, firstName, lastName) {
          var identity = {};
          identity.id = id;
          identity.firstName = firstName;
          identity.lastName = lastName;
          return identity;
        }
      }, {
        key: "showDefaultResult",
        value: function showDefaultResult() {
          this.haveNoResults = false;
          this.checks = this.allUserChecks.slice(0, 20);
          if (this.checks.length == 0) this.haveNoResults = true;
        }
      }, {
        key: "sortResults",
        value: function sortResults(month) {
          this.haveNoResults = false;
          this.loading = true;

          if (!month) {
            this.showDefaultResult();
            return;
          }

          this.checks = this.allUserChecks.filter(function (x) {
            var mn = x.dateTime.getMonth();
            return mn == month;
          });
          this.loading = false;
          if (this.checks.length == 0) this.haveNoResults = true;
        }
      }, {
        key: "monthOnChange",
        value: function monthOnChange() {
          if (!this.selectedMonthId) {
            this.showDefaultResult();
            return;
          }

          this.sortResults(this.selectedMonthId);
        }
      }, {
        key: "onChangeDropdownIdentity",
        value: function onChangeDropdownIdentity(event) {
          var _this45 = this;

          if (!this.identityDropdownModel) {
            setTimeout(function () {
              _this45.identityDropdownModel = _this45.user.id;

              _this45.getChecksByIdentity(_this45.user.id);
            }, 100);
            return;
          }

          this.getChecksByIdentity(this.identityDropdownModel);
        }
      }, {
        key: "getChecksByIdentity",
        value: function getChecksByIdentity(identityId) {
          var _this46 = this;

          this.loading = true;
          this.apiService.getChecks(identityId).subscribe(function (response) {
            _this46.mapGetCheckResponseToCheck(response);

            _this46.monthOnChange();

            _this46.currentIdentitiy = _this46.identities.find(function (x) {
              return x.id == identityId;
            });
            _this46.loading = false;
          });
        }
      }, {
        key: "onChooseResult",
        value: function onChooseResult(event) {
          this.cardLoading = true;
          var cardResult = $("#".concat(event.id));

          if (this.cardIsOpened(event.id)) {
            this.closeCardById(event.id);
            return;
          }

          this.openCardById(event.id);
        }
      }, {
        key: "downloadQRCode",
        value: function downloadQRCode(event) {
          if (!this.cardIsOpened(event.id)) {
            this.openCardById(event.id);
            return;
          }

          var currentCheck = this.checks.find(function (x) {
            return x.id == event.id;
          });
          var qrCodeSrc = '';

          try {
            var qrCodeHtmlElement = document.getElementById("qrcode-".concat(event.id)).childNodes[0];
            var child = qrCodeHtmlElement.childNodes[0];
            qrCodeSrc = child.src;
          } catch (exception) {
            this.toastr.errorToastr('Error occurred when trying to generate HealthTest result!', 'Oops!', {
              showCloseButton: true
            });
            return;
          }
        }
      }, {
        key: "collapseAllCards",
        value: function collapseAllCards() {
          var btnsCardResult = document.querySelectorAll('.card-result__btn-js');
          btnsCardResult.forEach(function (btn) {
            btn.parentElement.classList.remove('card-result--large');
            btn.parentElement.style.removeProperty('left');
            btn.parentElement.classList.add('card-result--small');
          });
        }
      }, {
        key: "openCardById",
        value: function openCardById(id) {
          this.cardLoading = true;
          this.collapseAllCards();
          var cardResult = $("#".concat(id));
          if (!cardResult) return;
          cardResult.removeClass('card-result--small');
          cardResult.addClass("card-result--large");
          var currentCheck = this.checks.find(function (x) {
            return x.id == id;
          });
          this.cardLoading = false;
        }
      }, {
        key: "closeCardById",
        value: function closeCardById(id) {
          var cardResult = $("#".concat(id));
          cardResult.removeClass('card-result--large');
          cardResult.addClass('card-result--small');
          var btnsCardResult = document.querySelectorAll('.card-result__btn-js');
          btnsCardResult.forEach(function (btn) {
            btn.parentElement.style.removeProperty('left');
          });
        }
      }, {
        key: "cardIsOpened",
        value: function cardIsOpened(id) {
          var cardResult = $("#".concat(id));
          if (!cardResult) return false;
          return cardResult.hasClass('card-result--large');
        }
      }, {
        key: "mapGetCheckResponseToCheck",
        value: function mapGetCheckResponseToCheck(getChecksResponse) {
          this.allUserChecks = getChecksResponse.items;
          this.allUserChecks.sort(function (x1, x2) {
            return x2.timestamp - x1.timestamp;
          });
          this.allUserChecks.forEach(function (x) {
            x.dateTime = new Date(x.timestamp);
            x.dateTimeLocaleString = new Date(x.timestamp).toLocaleString("en-US").toString();
          });
          this.sortResults(null);
        }
      }]);

      return MyResultComponent;
    }();

    MyResultComponent.ctorParameters = function () {
      return [{
        type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"]
      }, {
        type: src_app_services_localStorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]
      }, {
        type: src_app_services_helpers_apiBaseRequests__WEBPACK_IMPORTED_MODULE_6__["ApiBaseRequests"]
      }];
    };

    MyResultComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'my-result',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./my-result.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/my-results/my-result.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./my-result.component.scss */
      "./src/app/profile/my-results/my-result.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"], src_app_services_localStorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"], src_app_services_helpers_apiBaseRequests__WEBPACK_IMPORTED_MODULE_6__["ApiBaseRequests"]])], MyResultComponent);
    /***/
  },

  /***/
  "./src/app/profile/profile.component.scss":
  /*!************************************************!*\
    !*** ./src/app/profile/profile.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-loading {\n  color: #00accd; }\n  .card-loading p {\n    margin: 1rem;\n    text-align: center;\n    font-size: 1.5rem;\n    font-weight: 600; }\n  .tabs-list--primary {\n  color: #00accd; }\n  .c-btn--float {\n  padding: 0.2rem;\n  background-color: #00accd;\n  border-radius: 50%;\n  padding: 1rem; }\n  .c-btn--float-background {\n  position: fixed;\n  bottom: 5rem;\n  right: 5rem;\n  background-color: #ffffff9e;\n  border-radius: 50%;\n  padding: 1rem;\n  cursor: pointer; }\n  .c-btn--float-background:hover .float-anim {\n    -webkit-animation: heartbeat 2s infinite;\n            animation: heartbeat 2s infinite; }\n  .btn-float--content {\n  height: 2rem;\n  width: 2rem; }\n  .heartbeat-anim {\n  -webkit-animation: heartbeat 2s infinite;\n          animation: heartbeat 2s infinite; }\n  @-webkit-keyframes heartbeat {\n  0% {\n    transform: scale(0.85); }\n  10% {\n    transform: scale(1); }\n  20% {\n    transform: scale(0.85); }\n  30% {\n    transform: scale(1); }\n  40% {\n    transform: scale(0.85); }\n  100% {\n    transform: scale(0.85); } }\n  @keyframes heartbeat {\n  0% {\n    transform: scale(0.85); }\n  10% {\n    transform: scale(1); }\n  20% {\n    transform: scale(0.85); }\n  30% {\n    transform: scale(1); }\n  40% {\n    transform: scale(0.85); }\n  100% {\n    transform: scale(0.85); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9DOlxcVXNlcnNcXHNoYWxhXFxEb2N1bWVudHNcXEdpdEh1YlxcTXlDaXR5XFxjaXR5LXYyL3NyY1xcYXBwXFxwcm9maWxlXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksY0FBYyxFQUFBO0VBRGxCO0lBR1EsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUE7RUFLeEI7RUFDSSxjQUFjLEVBQUE7RUFHbEI7RUFDSSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7RUFHakI7RUFDSSxlQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFjLEVBQUE7RUFQbEI7SUFZWSx3Q0FBZ0M7WUFBaEMsZ0NBQWdDLEVBQUE7RUFLNUM7RUFDSSxZQUFZO0VBQ1osV0FBVyxFQUFBO0VBSWY7RUFDSSx3Q0FBZ0M7VUFBaEMsZ0NBQWdDLEVBQUE7RUFHbEM7RUFFQTtJQUVFLHNCQUF1QixFQUFBO0VBRXpCO0lBRUUsbUJBQXFCLEVBQUE7RUFFdkI7SUFFRSxzQkFBdUIsRUFBQTtFQUV6QjtJQUVFLG1CQUFxQixFQUFBO0VBRXZCO0lBRUUsc0JBQXVCLEVBQUE7RUFFekI7SUFFRSxzQkFBdUIsRUFBQSxFQUFBO0VBeEJ6QjtFQUVBO0lBRUUsc0JBQXVCLEVBQUE7RUFFekI7SUFFRSxtQkFBcUIsRUFBQTtFQUV2QjtJQUVFLHNCQUF1QixFQUFBO0VBRXpCO0lBRUUsbUJBQXFCLEVBQUE7RUFFdkI7SUFFRSxzQkFBdUIsRUFBQTtFQUV6QjtJQUVFLHNCQUF1QixFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNhcmQtbG9hZGluZyB7XHJcbiAgICBjb2xvcjogIzAwYWNjZDtcclxuICAgIHB7XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLnRhYnMtbGlzdC0tcHJpbWFyeXtcclxuICAgIGNvbG9yOiAjMDBhY2NkO1xyXG59XHJcblxyXG4uYy1idG4tLWZsb2F0e1xyXG4gICAgcGFkZGluZzogMC4ycmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWNjZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi5jLWJ0bi0tZmxvYXQtYmFja2dyb3VuZHtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgYm90dG9tOiA1cmVtO1xyXG4gICAgcmlnaHQ6IDVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlclxyXG4gICAge1xyXG4gICAgICAgIC5mbG9hdC1hbmlte1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGhlYXJ0YmVhdCAycyBpbmZpbml0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4tZmxvYXQtLWNvbnRlbnR7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICB3aWR0aDogMnJlbTtcclxufVxyXG5cclxuXHJcbi5oZWFydGJlYXQtYW5pbXtcclxuICAgIGFuaW1hdGlvbjogaGVhcnRiZWF0IDJzIGluZmluaXRlO1xyXG59XHJcblxyXG4gIEBrZXlmcmFtZXMgaGVhcnRiZWF0XHJcbntcclxuICAwJVxyXG4gIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoIC44NSApO1xyXG4gIH1cclxuICAxMCVcclxuICB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKCAxICk7XHJcbiAgfVxyXG4gIDIwJVxyXG4gIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoIC44NSApO1xyXG4gIH1cclxuICAzMCVcclxuICB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKCAxICk7XHJcbiAgfVxyXG4gIDQwJVxyXG4gIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoIC44NSApO1xyXG4gIH1cclxuICAxMDAlXHJcbiAge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSggLjg1ICk7XHJcbiAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/api/api.service */
    "./src/app/_services/api/api.service.ts");
    /* harmony import */


    var _services_data_sharing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_services/data-sharing.service */
    "./src/app/_services/data-sharing.service.ts");
    /* harmony import */


    var _services_helpers_apiBaseRequests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_services/helpers/apiBaseRequests */
    "./src/app/_services/helpers/apiBaseRequests.ts");
    /* harmony import */


    var _services_localStorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_services/localStorage.service */
    "./src/app/_services/localStorage.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(_router, localStorageService, dataSharingService, apiService, apiHelper) {
        _classCallCheck(this, ProfileComponent);

        this._router = _router;
        this.localStorageService = localStorageService;
        this.dataSharingService = dataSharingService;
        this.apiService = apiService;
        this.apiHelper = apiHelper;
        this.hasChildren = false;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this.localStorageService.getUser();

          if (!this.user) {
            this._router.navigate(['/login']);

            return;
          }

          this.getChildrenfromBackend();
        }
      }, {
        key: "getChildrenfromBackend",
        value: function getChildrenfromBackend() {
          var _this47 = this;

          this.apiService.getChildren().subscribe(function (response) {
            if (!response.items) {
              _this47.hasChildren = false;
              return;
            }

            _this47.hasChildren = response.items.length > 0;
          });
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _services_localStorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]
      }, {
        type: _services_data_sharing_service__WEBPACK_IMPORTED_MODULE_3__["DataSharingService"]
      }, {
        type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _services_helpers_apiBaseRequests__WEBPACK_IMPORTED_MODULE_4__["ApiBaseRequests"]
      }];
    };

    ProfileComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-profile',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./profile.component.scss */
      "./src/app/profile/profile.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_localStorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"], _services_data_sharing_service__WEBPACK_IMPORTED_MODULE_3__["DataSharingService"], _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _services_helpers_apiBaseRequests__WEBPACK_IMPORTED_MODULE_4__["ApiBaseRequests"]])], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/profile/profile.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/profile/profile.module.ts ***!
    \*******************************************/

  /*! exports provided: ProfileModule */

  /***/
  function srcAppProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
      return ProfileModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./my-profile/my-profile.component */
    "./src/app/profile/my-profile/my-profile.component.ts");
    /* harmony import */


    var _my_results_my_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-results/my-result.component */
    "./src/app/profile/my-results/my-result.component.ts");
    /* harmony import */


    var _profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var angularx_qrcode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angularx-qrcode */
    "./node_modules/angularx-qrcode/fesm2015/angularx-qrcode.js");
    /* harmony import */


    var _services_data_sharing_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../_services/data-sharing.service */
    "./src/app/_services/data-sharing.service.ts");
    /* harmony import */


    var _children_child_card_component_child_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./children/child-card-component/child-card.component */
    "./src/app/profile/children/child-card-component/child-card.component.ts");
    /* harmony import */


    var _children_children_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./children/children.component */
    "./src/app/profile/children/children.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var routes = [{
      "path": "profile",
      "component": _profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
      "children": [{
        "path": "my-profile",
        "component": _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__["MyProfileComponent"]
      }, {
        "path": "children",
        "component": _children_children_component__WEBPACK_IMPORTED_MODULE_12__["ChildrenComponent"]
      }, {
        "path": "my-result",
        "component": _my_results_my_result_component__WEBPACK_IMPORTED_MODULE_3__["MyResultComponent"]
      }]
    }];

    var ProfileModule = function ProfileModule() {
      _classCallCheck(this, ProfileModule);
    };

    ProfileModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__["MyProfileComponent"], _my_results_my_result_component__WEBPACK_IMPORTED_MODULE_3__["MyResultComponent"], _profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], _children_child_card_component_child_card_component__WEBPACK_IMPORTED_MODULE_11__["ChildCardComponent"], _children_children_component__WEBPACK_IMPORTED_MODULE_12__["ChildrenComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_9__["QRCodeModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["HashLocationStrategy"]
      }, _services_data_sharing_service__WEBPACK_IMPORTED_MODULE_10__["DataSharingService"]]
    })], ProfileModule);
    /***/
  },

  /***/
  "./src/app/restore-password/restore-password.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/restore-password/restore-password.component.ts ***!
    \****************************************************************/

  /*! exports provided: RestorePasswordComponent */

  /***/
  function srcAppRestorePasswordRestorePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RestorePasswordComponent", function () {
      return RestorePasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_AppConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_models/AppConstants */
    "./src/app/_models/AppConstants.ts");
    /* harmony import */


    var _models_restorePassword_restorePasswordModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_models/restorePassword/restorePasswordModels */
    "./src/app/_models/restorePassword/restorePasswordModels.ts");
    /* harmony import */


    var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_services/api/api.service */
    "./src/app/_services/api/api.service.ts");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var RestorePasswordComponent = /*#__PURE__*/function () {
      function RestorePasswordComponent(apiService, toastr, router, modalService) {
        _classCallCheck(this, RestorePasswordComponent);

        this.apiService = apiService;
        this.toastr = toastr;
        this.router = router;
        this.modalService = modalService;
        this.loading = false;
        this.emailPattern = _models_AppConstants__WEBPACK_IMPORTED_MODULE_1__["InputPatterns"].EMAIL_PATTERN;
        this.restorePasswordModel = new _models_restorePassword_restorePasswordModels__WEBPACK_IMPORTED_MODULE_2__["UserRestorePasswordModel"]();
        this.restorePasswordErrorViewModel = new _models_restorePassword_restorePasswordModels__WEBPACK_IMPORTED_MODULE_2__["RestorePasswordErrorViewModel"]();
      }

      _createClass(RestorePasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openModal",
        value: function openModal() {
          var _this48 = this;

          this.modalService.open(this.modalChildComponent, {
            ariaLabelledBy: 'modal-basic-title',
            centered: true,
            size: 'lg'
          }).result.then(function (result) {
            _this48.gotToLogin();
          }, function (reason) {
            _this48.gotToLogin();
          });
        }
      }, {
        key: "gotToLogin",
        value: function gotToLogin() {
          this.router.navigate(['/login']);
        }
      }, {
        key: "restorePassword",
        value: function restorePassword() {
          var _this49 = this;

          this.loading = true;
          this.apiService.restorePassword(this.restorePasswordModel).subscribe(function (response) {
            _this49.loading = false;

            if (response.success) {
              _this49.openModal();
            } else {
              if (response.code === 1000) {
                _this49.toastr.errorToastr("<b>Application error</b><br>".concat(response.message), 'Oops!', {
                  enableHTML: true
                });
              } else {
                _this49.restorePasswordErrorViewModel.setStateErrorByResponseCode(response.code);
              }
            }
          }, function (error) {
            _this49.toastr.errorToastr("Error occured!", 'Oops!', {
              enableHTML: true,
              dismiss: "click",
              showCloseButton: true
            });

            _this49.loading = false;
          });
        }
      }, {
        key: "onChangeValue",
        value: function onChangeValue() {
          this.restorePasswordErrorViewModel.checkEmailInput(this.restorePasswordModel.email);
        }
      }]);

      return RestorePasswordComponent;
    }();

    RestorePasswordComponent.ctorParameters = function () {
      return [{
        type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('restoreResult', {
      "static": false
    }), __metadata("design:type", Object)], RestorePasswordComponent.prototype, "modalChildComponent", void 0);

    RestorePasswordComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-restore-password',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./restore-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/restore-password/restore-password.component.html"))["default"]
    }), __metadata("design:paramtypes", [_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])], RestorePasswordComponent);
    /***/
  },

  /***/
  "./src/app/sign-up-verified/sign-up-verified.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/sign-up-verified/sign-up-verified.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignUpVerifiedSignUpVerifiedComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAtdmVyaWZpZWQvc2lnbi11cC12ZXJpZmllZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/sign-up-verified/sign-up-verified.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/sign-up-verified/sign-up-verified.component.ts ***!
    \****************************************************************/

  /*! exports provided: SignUpVerifiedComponent */

  /***/
  function srcAppSignUpVerifiedSignUpVerifiedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpVerifiedComponent", function () {
      return SignUpVerifiedComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SignUpVerifiedComponent = /*#__PURE__*/function () {
      function SignUpVerifiedComponent() {
        _classCallCheck(this, SignUpVerifiedComponent);
      }

      _createClass(SignUpVerifiedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignUpVerifiedComponent;
    }();

    SignUpVerifiedComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'sign-up-verified',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./sign-up-verified.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up-verified/sign-up-verified.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./sign-up-verified.component.scss */
      "./src/app/sign-up-verified/sign-up-verified.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], SignUpVerifiedComponent);
    /***/
  },

  /***/
  "./src/app/sign-up/sign-up.component.scss":
  /*!************************************************!*\
    !*** ./src/app/sign-up/sign-up.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignUpSignUpComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/sign-up/sign-up.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sign-up/sign-up.component.ts ***!
    \**********************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_sign_up_signUpModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_models/sign-up/signUpModel */
    "./src/app/_models/sign-up/signUpModel.ts");
    /* harmony import */


    var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/api/api.service */
    "./src/app/_services/api/api.service.ts");
    /* harmony import */


    var _models_AppConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_models/AppConstants */
    "./src/app/_models/AppConstants.ts");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _services_helpers_validationService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_services/helpers/validationService */
    "./src/app/_services/helpers/validationService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../_services/script-loader.service */
    "./src/app/_services/script-loader.service.ts");
    /* harmony import */


    var _services_helpers_contentHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../_services/helpers/contentHelper */
    "./src/app/_services/helpers/contentHelper.ts");
    /* harmony import */


    var _services_localStorage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../_services/localStorage.service */
    "./src/app/_services/localStorage.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SignUpComponent = /*#__PURE__*/function () {
      function SignUpComponent(apiService, localStoregeService, toastr, router, _script) {
        _classCallCheck(this, SignUpComponent);

        this.apiService = apiService;
        this.localStoregeService = localStoregeService;
        this.toastr = toastr;
        this.router = router;
        this._script = _script;
        this.loading = false;
        this.emailPattern = _models_AppConstants__WEBPACK_IMPORTED_MODULE_3__["InputPatterns"].EMAIL_PATTERN;
        this.userSignUpModel = new _models_sign_up_signUpModel__WEBPACK_IMPORTED_MODULE_1__["UserSignUpModel"]();
        this.signUpErrorViewModel = new _models_sign_up_signUpModel__WEBPACK_IMPORTED_MODULE_1__["SignUpErrorViewModel"]();
        this.USACountrySelected = false;
      }

      _createClass(SignUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this50 = this;

          _services_helpers_contentHelper__WEBPACK_IMPORTED_MODULE_8__["ContentHelper"].setLoading(true);

          var countryUSA;
          this.apiService.getCountries().subscribe(function (response) {
            _this50.countries = response.items;
            localStorage.setItem(_models_AppConstants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].LOCAL_STORAGE_COUNTRIES_KEY, JSON.stringify(response.items));
            _this50.country_USA = _this50.countries.find(function (x) {
              return x.alpha2Code === _models_AppConstants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].USA_COUNTRY_ALPHA2CODE;
            });

            _this50.countries.forEach(function (c) {
              if (c.alpha2Code === _models_AppConstants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].USA_COUNTRY_ALPHA2CODE) {
                c.name = "United States";
                countryUSA = c;
              }
            });

            _this50.apiService.getStates().subscribe(function (response) {
              _this50.states = response.items;
              localStorage.setItem(_models_AppConstants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].LOCAL_STORAGE_STATES_KEY, JSON.stringify(response.items));

              if (countryUSA) {
                _this50.userSignUpModel.countryId = countryUSA.id;

                _this50.onCountrySelected(countryUSA.id);
              }

              _services_helpers_contentHelper__WEBPACK_IMPORTED_MODULE_8__["ContentHelper"].setLoading(false);
            }, function (error) {
              _services_helpers_contentHelper__WEBPACK_IMPORTED_MODULE_8__["ContentHelper"].setLoading(false);
            });
          }, function (error) {
            _services_helpers_contentHelper__WEBPACK_IMPORTED_MODULE_8__["ContentHelper"].setLoading(false);
          });
          var date_input = $('#dateOfBirth'); //our date input has the name "date"

          date_input.datepicker();
          date_input.change(function (event) {
            _this50.userSignUpModel.dateOfBirthForView = date_input.val();

            _this50.formChangedBaseHandler();
          });
        }
      }, {
        key: "signUp",
        value: function signUp(form) {
          var _this51 = this;

          if (!form.valid) return;
          this.loading = true;
          this.userSignUpModel.parseDateOfBirth();
          this.apiService.signUp(this.userSignUpModel).subscribe(function (response) {
            if (!response.success) {
              _this51.signUpErrorViewModel.setStateErrorByResponseCode(response.code);

              _this51.loading = false;
              return;
            }

            _this51.router.navigate(['/sign-up-verified']);
          }, function (error) {
            _this51.loading = false;
          });
        }
      }, {
        key: "formChangedBaseHandler",
        value: function formChangedBaseHandler() {
          this.checkFormFields();
        }
      }, {
        key: "emailChangeValue",
        value: function emailChangeValue(event) {
          this.checkFormFields();

          if (this.userSignUpModel.email && !_services_helpers_validationService__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].ifEmailMatchPattern(this.userSignUpModel.email)) {
            this.signUpErrorViewModel.emailErrorPopover.showPopower(_models_AppConstants__WEBPACK_IMPORTED_MODULE_3__["PopowerErrorMessages"].EMAIL_PATTERN_NOT_MATCHES);
            this.signUpErrorViewModel.emailError = true;
          }
        }
      }, {
        key: "passwordChangeValue",
        value: function passwordChangeValue() {
          this.checkFormFields();

          if (this.userSignUpModel.password && !_services_helpers_validationService__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].ifPasswordMatchPattern(this.userSignUpModel.password)) {
            this.signUpErrorViewModel.passwordErrorPopover.showPopower(_models_AppConstants__WEBPACK_IMPORTED_MODULE_3__["PopowerErrorMessages"].PASSWORD_PATTERN_NOT_MATCHES);
            this.signUpErrorViewModel.passwordError = true;
          }
        } // Show fields with red color to show that field should be filled

      }, {
        key: "checkFormFields",
        value: function checkFormFields() {
          this.signUpErrorViewModel.setStateNoErrors();
          if (!this.userSignUpModel.email || !_services_helpers_validationService__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].ifEmailMatchPattern(this.userSignUpModel.email)) this.signUpErrorViewModel.emailError = true;
          if (!this.userSignUpModel.password || !_services_helpers_validationService__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].ifPasswordMatchPattern(this.userSignUpModel.password)) this.signUpErrorViewModel.passwordError = true;
          if (!this.userSignUpModel.phone) this.signUpErrorViewModel.phoneError = true;
          if (!this.userSignUpModel.firstName || !_services_helpers_validationService__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].ifNameMatchPattern(this.userSignUpModel.firstName)) this.signUpErrorViewModel.firstNameError = true;
          if (!this.userSignUpModel.lastName || !_services_helpers_validationService__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].ifNameMatchPattern(this.userSignUpModel.lastName)) this.signUpErrorViewModel.lastNameError = true;
          if (this.userSignUpModel.gender == undefined) this.signUpErrorViewModel.sexError = true;
          if (!this.userSignUpModel.dateOfBirthForView) this.signUpErrorViewModel.dateOfBirthError = true;
          if (!this.userSignUpModel.countryId) this.signUpErrorViewModel.countryError = true;
          if (!this.userSignUpModel.stateId) this.signUpErrorViewModel.stateError = true;
          if (!this.userSignUpModel.facilityCode) this.signUpErrorViewModel.facilityCodeError = true;
          if (!this.userSignUpModel.eula) this.signUpErrorViewModel.termsAndConditionError = true;
        }
      }, {
        key: "closeModalPrivacy",
        value: function closeModalPrivacy() {
          var body = document.querySelector('body');
          body.classList.remove('modal-open-privacy');
        }
      }, {
        key: "openModalPrivacy",
        value: function openModalPrivacy() {
          var body = document.querySelector('body');
          body.classList.add('modal-open-privacy');
        }
      }, {
        key: "initModalPrivacyHandler",
        value: function initModalPrivacyHandler() {
          var body = document.querySelector('body');
          var btnPrivacy = document.querySelectorAll('.btn-privacy-js');
          btnPrivacy.forEach(function (btn) {
            btn.addEventListener('click', function () {
              body.classList.add('modal-open-privacy');
            });
          });
        }
      }, {
        key: "onCountrySelected",
        value: function onCountrySelected(value) {
          this.USACountrySelected = value === this.country_USA.id;
          this.userSignUpModel.stateId = undefined;
        }
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ctorParameters = function () {
      return [{
        type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _services_localStorage_service__WEBPACK_IMPORTED_MODULE_9__["LocalStorageService"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _services_script_loader_service__WEBPACK_IMPORTED_MODULE_7__["ScriptLoaderService"]
      }];
    };

    SignUpComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-sign-up',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./sign-up.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./sign-up.component.scss */
      "./src/app/sign-up/sign-up.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _services_localStorage_service__WEBPACK_IMPORTED_MODULE_9__["LocalStorageService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_script_loader_service__WEBPACK_IMPORTED_MODULE_7__["ScriptLoaderService"]])], SignUpComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var environment = {
      production: false,
      apiUrl: 'https://app-shs-nonprod-zscu-userapi-dev.azurewebsites.net',
      firebase: {
        apiKey: "AIzaSyDNmKsQkoHA-lCKRh-_ff6173sjcmudmnY",
        authDomain: "my-city-problems.firebaseapp.com",
        databaseURL: "https://my-city-problems.firebaseio.com",
        projectId: "my-city-problems",
        storageBucket: "my-city-problems.appspot.com",
        messagingSenderId: "601651303017",
        appId: "1:601651303017:web:c9989bbf0c9627b0dc88f8"
      }
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! exports provided: getBaseUrl */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getBaseUrl", function () {
      return getBaseUrl;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    function getBaseUrl() {
      return document.getElementsByTagName('base')[0].href;
    }

    var providers = [{
      provide: 'BASE_URL',
      useFactory: getBaseUrl,
      deps: []
    }];

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\shala\Documents\GitHub\MyCity\city-v2\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
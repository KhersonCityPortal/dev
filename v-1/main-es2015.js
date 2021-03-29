(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/spinner.component */ "./src/app/shared/spinner.component.ts");




class AppComponent {
    /**
     *
     */
    constructor() {
        console.log("AppComponent");
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/full/full.component */ "./src/app/layouts/full/full.component.ts");
/* harmony import */ var _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/full/header/header.component */ "./src/app/layouts/full/header/header.component.ts");
/* harmony import */ var _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/full/sidebar/sidebar.component */ "./src/app/layouts/full/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./demo-material-module */ "./src/app/demo-material-module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/spinner.component */ "./src/app/shared/spinner.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _services_data_provider_data_provider_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/data-provider/data-provider.service */ "./src/app/services/data-provider/data-provider.service.ts");
/* harmony import */ var _services_firebaseDynamicLink_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/firebaseDynamicLink.service */ "./src/app/services/firebaseDynamicLink.service.ts");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/__ivy_ngcc__/fesm2015/angularx-qrcode.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/script-loader.service */ "./src/app/services/script-loader.service.ts");




























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"]
        },
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__["AngularFirestore"],
        _services_data_provider_data_provider_service__WEBPACK_IMPORTED_MODULE_20__["DataProviderService"],
        _services_firebaseDynamicLink_service__WEBPACK_IMPORTED_MODULE_21__["FirebaseDynamicLinkService"],
        _services_script_loader_service__WEBPACK_IMPORTED_MODULE_23__["ScriptLoaderService"]
    ], imports: [[
            angularx_qrcode__WEBPACK_IMPORTED_MODULE_22__["QRCodeModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _demo_material_module__WEBPACK_IMPORTED_MODULE_13__["DemoMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutes"]),
            _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].firebase),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_17__["AngularFireDatabaseModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_9__["FullComponent"],
        _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_10__["AppHeaderComponent"],
        _shared_spinner_component__WEBPACK_IMPORTED_MODULE_15__["SpinnerComponent"],
        _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["AppSidebarComponent"]], imports: [angularx_qrcode__WEBPACK_IMPORTED_MODULE_22__["QRCodeModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
        _demo_material_module__WEBPACK_IMPORTED_MODULE_13__["DemoMaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_17__["AngularFireDatabaseModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_9__["FullComponent"],
                    _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_10__["AppHeaderComponent"],
                    _shared_spinner_component__WEBPACK_IMPORTED_MODULE_15__["SpinnerComponent"],
                    _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["AppSidebarComponent"],
                ],
                imports: [
                    angularx_qrcode__WEBPACK_IMPORTED_MODULE_22__["QRCodeModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                    _demo_material_module__WEBPACK_IMPORTED_MODULE_13__["DemoMaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutes"]),
                    _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].firebase),
                    _angular_fire_database__WEBPACK_IMPORTED_MODULE_17__["AngularFireDatabaseModule"],
                ],
                providers: [
                    {
                        provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"],
                        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"]
                    },
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__["AngularFirestore"],
                    _services_data_provider_data_provider_service__WEBPACK_IMPORTED_MODULE_20__["DataProviderService"],
                    _services_firebaseDynamicLink_service__WEBPACK_IMPORTED_MODULE_21__["FirebaseDynamicLinkService"],
                    _services_script_loader_service__WEBPACK_IMPORTED_MODULE_23__["ScriptLoaderService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/full/full.component */ "./src/app/layouts/full/full.component.ts");

const AppRoutes = [
    {
        path: '',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__["FullComponent"],
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() | material-component-material-module */[__webpack_require__.e("default~dashboard-dashboard-module~material-component-material-module"), __webpack_require__.e("material-component-material-module")]).then(__webpack_require__.bind(null, /*! ./material-component/material.module */ "./src/app/material-component/material.module.ts")).then(m => m.MaterialComponentsModule)
            },
            {
                path: 'dashboard',
                loadChildren: () => Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~dashboard-dashboard-module~material-component-material-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(m => m.DashboardModule)
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/demo-material-module.ts":
/*!*****************************************!*\
  !*** ./src/app/demo-material-module.ts ***!
  \*****************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/table.js");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/accordion */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/accordion.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/bidi.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/overlay.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/platform.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/observers.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/portal.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */












/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
class DemoMaterialModule {
}
DemoMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DemoMaterialModule });
DemoMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DemoMaterialModule_Factory(t) { return new (t || DemoMaterialModule)(); }, imports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"],
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"],
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__["CdkAccordionModule"],
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"],
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["PortalModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoMaterialModule, { exports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"],
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"],
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__["CdkAccordionModule"],
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"],
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["PortalModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"],
                    _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"],
                    _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__["CdkAccordionModule"],
                    _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"],
                    _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["PortalModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layouts/full/full.component.ts":
/*!************************************************!*\
  !*** ./src/app/layouts/full/full.component.ts ***!
  \************************************************/
/*! exports provided: FullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullComponent", function() { return FullComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/layout.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/spinner.component */ "./src/app/shared/spinner.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function FullComponent_footer_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "@\u043D\u043E\u0432\u0438\u043D\u0438\u041Ci\u0441\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/dashboard"]; };
/** @title Responsive sidenav */
class FullComponent {
    constructor(changeDetectorRef, media, menuItems, _router) {
        this.menuItems = menuItems;
        this._router = _router;
        this.testValue = "testValue";
        this.showFooter = true;
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnInit() {
        this.handleFooter(this._router.url);
        this._router.events.subscribe((route) => {
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                jquery__WEBPACK_IMPORTED_MODULE_3__(window).scrollTop(0);
                console.log(route.url);
                this.handleFooter(route.url);
            }
        });
    }
    handleFooter(route) {
        if (route !== "/dashboard")
            this.showFooter = false;
        else
            this.showFooter = true;
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
FullComponent.ɵfac = function FullComponent_Factory(t) { return new (t || FullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__["MenuItems"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
FullComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FullComponent, selectors: [["app-full-layout"]], decls: 15, vars: 3, consts: [[1, "main-container"], [1, "fixed-topbar"], [1, "topbar-wrap"], ["routerLink", "/dashboard", 1, "label"], [1, "topbar-nav--wrap"], [3, "routerLink"], [1, "main-container--wrap"], [4, "ngIf"]], template: function FullComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \u0425\u0435\u0440\u0441\u043E\u043D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u041D\u043E\u0432\u0438\u043D\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u041F\u0440\u043E \u043F\u0440\u043E\u0435\u043A\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, FullComponent_footer_14_Template, 3, 0, "footer", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showFooter);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_5__["SpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".fixed-topbar[_ngcontent-%COMP%]     .mat-toolbar {\n  z-index: 999;\n  position: fixed;\n}\n\n.fixed-topbar[_ngcontent-%COMP%]     .mat-tab-group {\n  margin-top: 55px !important;\n}\n\n.fixed-topbar[_ngcontent-%COMP%]     .mat-tab-header {\n  z-index: 999;\n  width: 100vw;\n  position: fixed !important;\n}\n\n.fixed-topbar[_ngcontent-%COMP%]     .mat-tab-body-wrapper {\n  position: relative !important;\n  margin-top: 55px;\n}\n\n.fixed-topbar[_ngcontent-%COMP%] {\n  z-index: 999;\n  width: 100vw;\n  position: fixed !important;\n  background-color: #ffffff;\n}\n\n.main-container--wrap[_ngcontent-%COMP%] {\n  margin-top: 110px;\n  margin-bottom: 50px;\n}\n\n.topbar-wrap[_ngcontent-%COMP%] {\n  background-color: #fff;\n  font-size: 1.5rem;\n  display: flex;\n  justify-content: space-between;\n  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05) !important;\n  -webkit-box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05) !important;\n}\n\n.topbar-wrap[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #0d70b4;\n  display: flex;\n  align-items: center;\n  padding: 1.1rem;\n  font-weight: 800;\n  cursor: pointer;\n}\n\n.topbar-wrap[_ngcontent-%COMP%]   .topbar-nav--wrap[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n}\n\n.topbar-wrap[_ngcontent-%COMP%]   .topbar-nav--wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  list-style: none;\n  margin: 0px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.topbar-wrap[_ngcontent-%COMP%]   .topbar-nav--wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex !important;\n  height: 100%;\n  align-items: center;\n  cursor: pointer;\n  display: inline-block;\n  padding: 0px 20px 0px 20px;\n  transition-property: background-color, color;\n  transition-duration: 0.5s;\n  transition-timing-function: ease;\n}\n\n.topbar-wrap[_ngcontent-%COMP%]   .topbar-nav--wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #f3f8f9;\n}\n\n.topbar-wrap[_ngcontent-%COMP%]   .sign-in[_ngcontent-%COMP%] {\n  color: #0d70b4;\n}\n\na[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n  background-color: blue;\n  color: white;\n  text-decoration: none;\n  margin: 10px;\n  transition-property: background-color, color;\n  transition-duration: 2s;\n  transition-timing-function: ease;\n  font-weight: bold;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: red;\n  background-color: green;\n}\n\nfooter[_ngcontent-%COMP%] {\n  z-index: 999;\n  width: 100vw;\n  bottom: 0px;\n  background-color: #fff;\n  box-shadow: 5px 0px 30px rgba(0, 0, 0, 0.15) !important;\n  -webkit-box-shadow: 5px 0px 30px rgba(0, 0, 0, 0.15) !important;\n}\n\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0.5rem;\n  font-size: 0.8rem;\n}\n\nfooter[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.topbar-wrap[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.position-fixed[_ngcontent-%COMP%] {\n  position: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9mdWxsL2Z1bGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFSSxZQUFZO0VBQ1osZUFBZTtBQUhuQjs7QUFBQTtFQU1JLDJCQUEyQjtBQUYvQjs7QUFKQTtFQVVJLFlBQVk7RUFDWixZQUFZO0VBQ1osMEJBQTBCO0FBRjlCOztBQVZBO0VBZUksNkJBQTZCO0VBQzdCLGdCQUFnQjtBQURwQjs7QUFLQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLHlCQUF5QjtBQUYzQjs7QUFLQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFGckI7O0FBTUE7RUFDRSxzQkFBc0I7RUFFdEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsdURBQXVEO0VBQ3ZELCtEQUErRDtBQUpqRTs7QUFIQTtFQVVJLGNBOUNtQjtFQStDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFIbkI7O0FBWkE7RUFtQkksZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7QUFIdkI7O0FBbEJBO0VBdUJNLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBRHpCOztBQTNCQTtFQThCUSx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUUxQiw0Q0FBNEM7RUFDNUMseUJBQXlCO0VBQ3pCLGdDQUFnQztBQUF4Qzs7QUF2Q0E7RUF5Q1UseUJBNUU4QjtBQThFeEM7O0FBM0NBO0VBK0NJLGNBbkZtQjtBQW1GdkI7O0FBSUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLDRDQUE0QztFQUM1Qyx1QkFBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtBQURuQjs7QUFJQTtFQUNFLFVBQVU7RUFDVix1QkFBdUI7QUFEekI7O0FBSUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUVaLFdBQVc7RUFDWCxzQkFBc0I7RUFFdEIsdURBQXVEO0VBQ3ZELCtEQUErRDtBQUhqRTs7QUFMQTtFQVVJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0FBRHJCOztBQUtBO0VBQ0Usc0JBQXNCO0FBRnhCOztBQUtBO0VBQ0Usc0JBQXNCO0FBRnhCOztBQUtBO0VBQ0UsZUFBZTtBQUZqQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZnVsbC9mdWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLXByaW1hcnk6ICMwZDcwYjQ7XHJcbiRjb2xvci1iYWNrZ3JvdW5kLS1idXR0b24taG92ZXI6ICNmM2Y4Zjk7XHJcblxyXG4uZml4ZWQtdG9wYmFyIHtcclxuICA6Om5nLWRlZXAgLm1hdC10b29sYmFyIHtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5tYXQtdGFiLWdyb3VwIHtcclxuICAgIG1hcmdpbi10b3A6IDU1cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAubWF0LXRhYi1oZWFkZXIge1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubWF0LXRhYi1ib2R5LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1NXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZpeGVkLXRvcGJhciB7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ubWFpbi1jb250YWluZXItLXdyYXAge1xyXG4gIG1hcmdpbi10b3A6IDExMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgLy8gbWF4LWhlaWdodDogODN2aDtcclxuICAvLyBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbi50b3BiYXItd3JhcCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYm94LXNoYWRvdzogMHB4IDVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSkgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpICFpbXBvcnRhbnQ7XHJcblxyXG4gIC5sYWJlbCB7XHJcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEuMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAudG9wYmFyLW5hdi0td3JhcCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHVsIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBsaSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XHJcblxyXG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGNvbG9yO1xyXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmFja2dyb3VuZC0tYnV0dG9uLWhvdmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuc2lnbi1pbiB7XHJcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgfVxyXG59XHJcblxyXG5hIHtcclxuICBwYWRkaW5nOiA1cHggMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGNvbG9yO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDJzO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgLy8gcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHJcbiAgYm94LXNoYWRvdzogNXB4IDBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSkgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCAwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XHJcbiAgcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH1cclxufVxyXG5cclxuZm9vdGVyICoge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50b3BiYXItd3JhcCAqe1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5wb3NpdGlvbi1maXhlZHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FullComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-full-layout',
                templateUrl: 'full.component.html',
                styleUrls: ['full.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["MediaMatcher"] }, { type: _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__["MenuItems"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layouts/full/header/header.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layouts/full/header/header.component.ts ***!
  \*********************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");



class AppHeaderComponent {
}
AppHeaderComponent.ɵfac = function AppHeaderComponent_Factory(t) { return new (t || AppHeaderComponent)(); };
AppHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppHeaderComponent, selectors: [["app-header"]], decls: 20, vars: 1, consts: [["mat-icon-button", "", 1, "m-r-5", 3, "matMenuTriggerFor"], ["src", "assets/images/users/my-photo.png", "alt", "user", 1, "profile-pic"], [1, "mymegamenu"], ["profile", "matMenu"], ["mat-menu-item", ""]], template: function AppHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-menu", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "account_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "notifications_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Disable notifications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Sign Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
    } }, directives: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["_MatMenu"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuItem"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layouts/full/sidebar/sidebar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layouts/full/sidebar/sidebar.component.ts ***!
  \***********************************************************/
/*! exports provided: AppSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarComponent", function() { return AppSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/layout.js");
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
/* harmony import */ var _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/accordion/accordion.directive */ "./src/app/shared/accordion/accordion.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/accordion/accordionlink.directive */ "./src/app/shared/accordion/accordionlink.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/accordion/accordionanchor.directive */ "./src/app/shared/accordion/accordionanchor.directive.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");













function AppSidebarComponent_mat_list_item_26_a_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("label label-", badge_r5.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r5.value);
} }
const _c0 = function (a1) { return ["/", a1]; };
function AppSidebarComponent_mat_list_item_26_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppSidebarComponent_mat_list_item_26_a_1_span_6_Template, 2, 4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, menuitem_r2.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuitem_r2.badge);
} }
function AppSidebarComponent_mat_list_item_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppSidebarComponent_mat_list_item_26_a_1_Template, 7, 6, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("group", menuitem_r2.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r2.type === "link");
} }
class AppSidebarComponent {
    constructor(changeDetectorRef, media, menuItems) {
        this.menuItems = menuItems;
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
AppSidebarComponent.ɵfac = function AppSidebarComponent_Factory(t) { return new (t || AppSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__["MenuItems"])); };
AppSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppSidebarComponent, selectors: [["app-sidebar"]], decls: 27, vars: 2, consts: [[1, "user-profile", 2, "background", "url(assets/images/background/user-info.jpg) no-repeat"], [1, "profile-img"], ["src", "assets/images/favicon.png", "alt", "user"], [1, "profile-text"], [1, "", 3, "matMenuTriggerFor"], [1, "ti-angle-down", "font-12", "m-l-5"], [1, "mymegamenu"], ["sdprofile", "matMenu"], ["mat-menu-item", ""], ["appAccordion", ""], ["appAccordionLink", "", "routerLinkActive", "selected", 3, "group", 4, "ngFor", "ngForOf"], ["appAccordionLink", "", "routerLinkActive", "selected", 3, "group"], ["class", "", "appAccordionToggle", "", 3, "routerLink", 4, "ngIf"], ["appAccordionToggle", "", 1, "", 3, "routerLink"], ["fxFlex", ""], [3, "class", 4, "ngFor", "ngForOf"]], template: function AppSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " User ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-menu", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "account_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "notifications_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Disable notifications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Sign Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-nav-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AppSidebarComponent_mat_list_item_26_Template, 2, 2, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems.getMenuitem());
    } }, directives: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["_MatMenu"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNavList"], _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_4__["AccordionDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_6__["AccordionLinkDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_8__["AccordionAnchorDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"] }, { type: _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__["MenuItems"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/data-provider/data-provider.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/data-provider/data-provider.service.ts ***!
  \*****************************************************************/
/*! exports provided: DataProviderService, DataProviderHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataProviderService", function() { return DataProviderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataProviderHelper", function() { return DataProviderHelper; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _dataProviderExtension_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dataProviderExtension.service */ "./src/app/services/data-provider/dataProviderExtension.service.ts");







class DataProviderService {
    constructor(firestore, afAuth) {
        this.firestore = firestore;
        this.afAuth = afAuth;
        // private fireNews: any = [];
        this.initialized = false;
        this.dataProviderHelper = new DataProviderHelper();
    }
    init() {
        let promise = new Promise((resolve, reject) => {
            if (this.initialized) {
                console.log("DataProviderService ready");
                resolve("Success!");
                return;
            }
            console.log("💥 DataProviderService init start");
            this.initFirebaseAnonimus().then((res => {
                resolve("Success!");
                this.initialized = true;
            }));
        });
        return promise;
    }
    initFirebaseAnonimus() {
        let promise = new Promise((resolve, reject) => {
            this.afAuth.signInAnonymously().then(() => {
                console.log("✅ firebase initialized");
                let fireNews = [];
                this.firestore.collection('global_news').get().subscribe(fireItem => {
                    fireItem.docs.forEach((item) => {
                        var el = this.parseFirebaseItem(item.data(), item.id);
                        fireNews.push(el);
                    });
                    this.dataProviderHelper.init(fireNews);
                    console.log("🌐 firebase: got global_news");
                    console.log(fireNews);
                    resolve("Success!");
                });
            });
        });
        return promise;
    }
    initTestData() {
        let fireNews = [];
        for (let index = 0; index < 10; index++) {
            var d1 = {
                fullText: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
                shortText: `тестhh\nN\nM\nM\nUu\nU\nJ\n ..`,
                imageUrl: `assets/images/background/post-icon.svg`,
                images: [`assets/images/background/post-icon.svg`],
                subtitle: "",
                title: `Тест новость ${index}`,
                id: index.toString(),
                category: "Tw9CypPH0HU9MGVOp8S1",
                categoryName: "Освітні події",
                date: new Date("1970-01-19"),
                dateViewModel: "1970-01-19",
                image_F_Url: `assets/images/background/post-icon.svg`,
                info: "тестhh\nN\nM\nM\nUu\nU\nJ\nJj\nJ\nJ\nJ\nJhu\nUyy\nYjh\nHh\nHhh\nH\n\nHh\nHhh\n\nH\nH\nH\nH\nHh\n\nH\nH\nH\nH",
                likes: 1,
                name: "тест новость",
                views: 3
            };
            if (index === 1) {
                d1.imageUrl = `assets/images/background/test/test-1.jpg`;
                d1.images = [`assets/images/background/test/test-1.jpg`,
                    `assets/images/background/test/test-2.jpg`];
                d1.fullText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum \n\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
            }
            if (index === 2) {
                d1.imageUrl = `assets/images/background/test/test-8.jpg`;
                d1.images = [`assets/images/background/test/test-1.jpg`,
                    `assets/images/background/test/test-2.jpg`,
                    `assets/images/background/test/test-3.jpg`,
                    `assets/images/background/test/test-8.jpg`,];
                d1.fullText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum \n\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
            }
            fireNews.push(d1);
        }
        this.dataProviderHelper.init(fireNews);
    }
    parseFirebaseItem(item, id) {
        console.log("⚪ fire db item: ", item);
        console.log("_________\n\n");
        let location;
        if (item.lon && item.lon[0] &&
            item.lat && item.lat[0]) {
            location = {
                lon: item.lon[0],
                lat: item.lat[0],
            };
        }
        let model = {
            fullText: item.info,
            shortText: `${item.info.substring(0, 120)} ...`,
            imageUrl: item.image_f_url[0] == undefined ?
                `assets/images/background/default.jpg` : item.image_f_url[0],
            images: item.image_f_url,
            subtitle: "",
            title: item.name,
            id: id,
            category: item.category,
            categoryName: item.category_name,
            date: new Date(item.date.seconds),
            dateViewModel: _dataProviderExtension_service__WEBPACK_IMPORTED_MODULE_3__["DataProviderExtension"].dateTimeToUkrainianString(item.date.seconds),
            // dateViewModel: formatDate(new Date(itemData.date.seconds), 'yyyy-MM-dd', 'en-US'),
            image_F_Url: item.image_f_url[0] == undefined ?
                `assets/images/background/default.jpg` : item.image_f_url[0],
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
    getById(id) {
        let promise = new Promise((resolve, reject) => {
            if (!this.initialized) {
                this.init().then(() => {
                    resolve(this.dataProviderHelper.getById(id));
                });
                return;
            }
            let result = this.dataProviderHelper.getById(id);
            resolve(result);
        });
        return promise;
    }
    getAll() {
        let promise = new Promise((resolve, reject) => {
            if (!this.initialized) {
                this.init().then(() => {
                    resolve(this.dataProviderHelper.getAll());
                });
                return;
            }
            resolve(this.dataProviderHelper.getAll());
        });
        return promise;
    }
    getPagedArticles(skip, take) {
        return this.dataProviderHelper.getPagedArticles(skip, take);
    }
    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
DataProviderService.ɵfac = function DataProviderService_Factory(t) { return new (t || DataProviderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"])); };
DataProviderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataProviderService, factory: DataProviderService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataProviderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }]; }, null); })();
class DataProviderHelper {
    constructor() {
        this.data = [];
    }
    init(data) {
        if (!data)
            return;
        this.data = data;
    }
    getById(id) {
        let result;
        let article = this.data.find((x) => { return x.id === id; });
        if (article)
            result = { success: true, item: article };
        else
            result = { success: false, item: article };
        return result;
    }
    getPagedArticles(skip, take) {
        return this.data.slice(skip, take);
    }
    getAll() {
        return this.data;
    }
}


/***/ }),

/***/ "./src/app/services/data-provider/dataProviderExtension.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/services/data-provider/dataProviderExtension.service.ts ***!
  \*************************************************************************/
/*! exports provided: DataProviderExtension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataProviderExtension", function() { return DataProviderExtension; });
class DataProviderExtension {
    static dateTimeToUkrainianString(miliseconds) {
        let d = new Date(miliseconds * 1000);
        let cDay = d.getDate();
        let cYear = d.getFullYear();
        let cMonth = this.monthNamesUK[d.getMonth()];
        return `${cDay} ${cMonth} ${cYear}`;
    }
}
DataProviderExtension.monthNamesEN = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
DataProviderExtension.monthNamesUK = ["cічня", "лютого", "березня", "квітня", "травня", "червня", "липня",
    "серпня", "вересня", "жовтня", "листопада", "грудня"];


/***/ }),

/***/ "./src/app/services/firebaseDynamicLink.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/firebaseDynamicLink.service.ts ***!
  \*********************************************************/
/*! exports provided: FirebaseDynamicLinkService, CreateDynamicLinkRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseDynamicLinkService", function() { return FirebaseDynamicLinkService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDynamicLinkRequest", function() { return CreateDynamicLinkRequest; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





class FirebaseDynamicLinkService {
    constructor(http) {
        this.http = http;
        this.template = `https://mycitykherson.page.link/?link=https://kherson-city.web.app/%23/dashboard&apn=com.mycity.kherson`;
        this.subdomain = `https://mycitykherson.page.link`;
        this.test = "test";
    }
    getDynamicLink(articleId, type) {
        let base64Data = this.requestParamsToBase64(articleId, type);
        let requestModel = this.getRequestModel(base64Data);
        return this.http.post(`https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].firebase.apiKey}`, requestModel);
    }
    getRequestModel(base64Data) {
        return {
            dynamicLinkInfo: {
                domainUriPrefix: "https://mycitykherson.page.link",
                link: `https://mycitykherson.page.link/${base64Data}`,
                androidInfo: {
                    "androidPackageName": "com.mycity.kherson"
                },
                iosInfo: {
                    "iosBundleId": "com.mycity.kherson"
                }
            }
        };
    }
    requestParamsToBase64(id, type) {
        const model = {
            id,
            type
        };
        return btoa(JSON.stringify(model));
    }
}
FirebaseDynamicLinkService.ɵfac = function FirebaseDynamicLinkService_Factory(t) { return new (t || FirebaseDynamicLinkService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
FirebaseDynamicLinkService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FirebaseDynamicLinkService, factory: FirebaseDynamicLinkService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FirebaseDynamicLinkService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();
class CreateDynamicLinkRequest {
}


/***/ }),

/***/ "./src/app/services/script-loader.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/script-loader.service.ts ***!
  \***************************************************/
/*! exports provided: ScriptLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptLoaderService", function() { return ScriptLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);



class ScriptLoaderService {
    constructor() {
        this._scripts = [];
    }
    /**
     * @deprecated
     * @param tag
     * @param {string} scripts
     * @returns {Promise<any[]>}
     */
    load(tag, ...scripts) {
        scripts.forEach((src) => {
            if (!this._scripts[src]) {
                this._scripts[src] = { src: src, loaded: false };
            }
        });
        let promises = [];
        scripts.forEach((src) => promises.push(this.loadScript(tag, src)));
        return Promise.all(promises);
    }
    /**
     * Lazy load list of scripts
     * @param tag
     * @param scripts
     * @param loadOnce
     * @returns {Promise<any[]>}
     */
    loadScripts(tag, scripts, loadOnce) {
        loadOnce = loadOnce || false;
        scripts.forEach((script) => {
            if (!this._scripts[script]) {
                this._scripts[script] = { src: script, loaded: false };
            }
        });
        let promises = [];
        scripts.forEach((script) => promises.push(this.loadScript(tag, script, loadOnce)));
        return Promise.all(promises);
    }
    /**
     * Lazy load a single script
     * @param tag
     * @param {string} src
     * @param loadOnce
     * @returns {Promise<any>}
     */
    loadScript(tag, src, loadOnce) {
        loadOnce = loadOnce || false;
        if (!this._scripts[src]) {
            this._scripts[src] = { src: src, loaded: false };
        }
        return new Promise((resolve, reject) => {
            // resolve if already loaded
            if (this._scripts[src].loaded && loadOnce) {
                resolve({ src: src, loaded: true });
            }
            else {
                // load script tag
                let scriptTag = jquery__WEBPACK_IMPORTED_MODULE_1__('<script/>').
                    attr('type', 'text/javascript').
                    attr('src', this._scripts[src].src);
                jquery__WEBPACK_IMPORTED_MODULE_1__(tag).append(scriptTag);
                this._scripts[src] = { src: src, loaded: true };
                resolve({ src: src, loaded: true });
            }
        });
    }
    isScriptLoaded(scriptName) {
        return jquery__WEBPACK_IMPORTED_MODULE_1__('script[src="' + scriptName + '"]').length != 0;
    }
}
ScriptLoaderService.ɵfac = function ScriptLoaderService_Factory(t) { return new (t || ScriptLoaderService)(); };
ScriptLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ScriptLoaderService, factory: ScriptLoaderService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScriptLoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/accordion/accordion.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/accordion/accordion.directive.ts ***!
  \*********************************************************/
/*! exports provided: AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return AccordionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





class AccordionDirective {
    constructor(router) {
        this.router = router;
        this.navlinks = [];
        setTimeout(() => this.checkOpenLinks());
    }
    closeOtherLinks(selectedLink) {
        this.navlinks.forEach((link) => {
            if (link !== selectedLink) {
                link.selected = false;
            }
        });
    }
    addLink(link) {
        this.navlinks.push(link);
    }
    removeGroup(link) {
        const index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    }
    checkOpenLinks() {
        this.navlinks.forEach((link) => {
            if (link.group) {
                const routeUrl = this.router.url;
                const currentUrl = routeUrl.split('/');
                if (currentUrl.indexOf(link.group) > 0) {
                    link.selected = true;
                    this.closeOtherLinks(link);
                }
            }
        });
    }
    ngAfterContentChecked() {
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]))
            .subscribe(e => this.checkOpenLinks());
    }
}
AccordionDirective.ɵfac = function AccordionDirective_Factory(t) { return new (t || AccordionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AccordionDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AccordionDirective, selectors: [["", "appAccordion", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appAccordion]'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/accordion/accordionanchor.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/accordion/accordionanchor.directive.ts ***!
  \***************************************************************/
/*! exports provided: AccordionAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return AccordionAnchorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ "./src/app/shared/accordion/accordionlink.directive.ts");




class AccordionAnchorDirective {
    constructor(navlink) {
        this.navlink = navlink;
    }
    onClick(e) {
        this.navlink.toggle();
    }
}
AccordionAnchorDirective.ɵfac = function AccordionAnchorDirective_Factory(t) { return new (t || AccordionAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"])); };
AccordionAnchorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AccordionAnchorDirective, selectors: [["", "appAccordionToggle", ""]], hostBindings: function AccordionAnchorDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccordionAnchorDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionAnchorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appAccordionToggle]'
            }]
    }], function () { return [{ type: _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"]]
            }] }]; }, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/accordion/accordionlink.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/accordion/accordionlink.directive.ts ***!
  \*************************************************************/
/*! exports provided: AccordionLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return AccordionLinkDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion.directive */ "./src/app/shared/accordion/accordion.directive.ts");




class AccordionLinkDirective {
    constructor(nav) {
        this._selected = false;
        this.nav = nav;
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = value;
        if (value) {
            this.nav.closeOtherLinks(this);
        }
    }
    ngOnInit() {
        this.nav.addLink(this);
    }
    ngOnDestroy() {
        this.nav.removeGroup(this);
    }
    toggle() {
        this.selected = !this.selected;
    }
}
AccordionLinkDirective.ɵfac = function AccordionLinkDirective_Factory(t) { return new (t || AccordionLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"])); };
AccordionLinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AccordionLinkDirective, selectors: [["", "appAccordionLink", ""]], hostVars: 2, hostBindings: function AccordionLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx.selected);
    } }, inputs: { group: "group", selected: "selected" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionLinkDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appAccordionLink]'
            }]
    }], function () { return [{ type: _accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"]]
            }] }]; }, { group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.selected']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/accordion/index.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/accordion/index.ts ***!
  \*******************************************/
/*! exports provided: AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionanchor.directive */ "./src/app/shared/accordion/accordionanchor.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__["AccordionAnchorDirective"]; });

/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ "./src/app/shared/accordion/accordionlink.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"]; });

/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.directive */ "./src/app/shared/accordion/accordion.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return _accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"]; });






/***/ }),

/***/ "./src/app/shared/menu-items/menu-items.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/menu-items/menu-items.ts ***!
  \*************************************************/
/*! exports provided: MenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItems", function() { return MenuItems; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const MENUITEMS = [
    // { state: 'destination', name: 'Destination', type: 'link', icon: 'adb' },
    { state: 'custom-questions', name: 'Custom questions builder', type: 'link', icon: 'adb' },
    { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer' },
    { state: 'button', type: 'link', name: 'Buttons', icon: 'crop_7_5' },
];
class MenuItems {
    getMenuitem() {
        return MENUITEMS;
    }
}
MenuItems.ɵfac = function MenuItems_Factory(t) { return new (t || MenuItems)(); };
MenuItems.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuItems, factory: MenuItems.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuItems, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion */ "./src/app/shared/accordion/index.ts");




class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__["MenuItems"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionAnchorDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"]], exports: [_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionAnchorDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionAnchorDirective"],
                    _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"],
                    _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"]
                ],
                exports: [
                    _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionAnchorDirective"],
                    _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"],
                    _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"]
                ],
                providers: [_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__["MenuItems"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/spinner.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/spinner.component.ts ***!
  \*********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function SpinnerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SpinnerComponent {
    constructor(router, document) {
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
                this.isSpinnerVisible = false;
            }
        }, () => {
            this.isSpinnerVisible = false;
        });
    }
    ngOnDestroy() {
        this.isSpinnerVisible = false;
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], inputs: { backgroundColor: "backgroundColor" }, decls: 1, vars: 1, consts: [["class", "preloader", 4, "ngIf"], [1, "preloader"], [1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 4, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spinner',
                template: `<div class="preloader" *ngIf="isSpinnerVisible">
        <div class="spinner">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>
    </div>`,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }]; }, { backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    useTestData: false,
    production: false,
    firebase: {
        apiKey: "AIzaSyDNmKsQkoHA-lCKRh-_ff6173sjcmudmnY",
        authDomain: "my-city-problems.firebaseapp.com",
        databaseURL: "https://my-city-problems.firebaseio.com",
        projectId: "my-city-problems",
        storageBucket: "my-city-problems.appspot.com",
        messagingSenderId: "601651303017",
        appId: "1:601651303017:web:c9989bbf0c9627b0dc88f8"
    },
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\shala\Documents\GitHub\MyCity\WebAppRepo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
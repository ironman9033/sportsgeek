(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-admin-module~user-user-module"],{

/***/ "1lvy":
/*!*******************************************!*\
  !*** ./src/app/common/constants/utils.ts ***!
  \*******************************************/
/*! exports provided: stringToColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToColor", function() { return stringToColor; });
function stringToColor(string) {
    let hash = 0;
    let i;
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */
    return color;
}


/***/ }),

/***/ "3GAt":
/*!*************************************************************!*\
  !*** ./src/app/user/leader-board/leader-board.component.ts ***!
  \*************************************************************/
/*! exports provided: LeaderBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderBoardComponent", function() { return LeaderBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/components/loading/loading.component */ "4cPp");
/* harmony import */ var src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/components/snackbar/snackbar.component */ "j7cY");
/* harmony import */ var src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/constants/error-message */ "jsD4");
/* harmony import */ var src_app_common_constants_links__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/constants/links */ "IV7L");
/* harmony import */ var src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/constants/snackbar-properties */ "fc4o");
/* harmony import */ var src_app_common_constants_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/common/constants/utils */ "1lvy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_service_user_service_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/common/service/user_service/user.service */ "2/mB");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_common_service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/common/service/login_state/loginstate.service */ "1d9a");
/* harmony import */ var src_app_common_service_statistics_user_statictics_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/common/service/statistics/user-statictics.service */ "+IU6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");

























function LeaderBoardComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "RANK");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "background-color": a0, "color": a1 }; };
function LeaderBoardComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](2, _c0, ctx_r1.un == element_r8.userName ? "#E4E6FF" : "", ctx_r1.un == element_r8.userName ? "black" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.paginator.pageIndex * ctx_r1.paginator.pageSize + i_r9 + 1, " ");
} }
function LeaderBoardComponent_th_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
const _c1 = function (a1) { return { "padding": "10px", "background-color": a1, "border-radius": "50%" }; };
function LeaderBoardComponent_td_47_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c1, ctx_r11.stringToColorFunction(element_r10.firstName + element_r10.lastName)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](element_r10.firstName.substr(0, 1).toUpperCase() + element_r10.lastName.substr(0, 1).toUpperCase());
} }
function LeaderBoardComponent_td_47_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 44);
} if (rf & 2) {
    const element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("src", element_r10.profilePicture, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("alt", element_r10.firstName.substr(0, 1).toUpperCase() + element_r10.lastName.substr(0, 1).toUpperCase());
} }
const _c2 = function () { return { "margin-left": "5px" }; };
function LeaderBoardComponent_td_47_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LeaderBoardComponent_td_47_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16); const element_r10 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r15.gotoUserProfile(element_r10.userId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, LeaderBoardComponent_td_47_span_3_Template, 2, 4, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, LeaderBoardComponent_td_47_img_4_Template, 1, 2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](5, _c0, ctx_r3.un == element_r10.userName ? "#E4E6FF" : "", ctx_r3.un == element_r10.userName ? "black" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !element_r10.profilePicture);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", element_r10.profilePicture);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](8, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", element_r10.firstName + " " + element_r10.lastName, " ");
} }
function LeaderBoardComponent_th_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function LeaderBoardComponent_td_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](2, _c0, ctx_r5.un == element_r17.userName ? "#E4E6FF" : "", ctx_r5.un == element_r17.userName ? "black" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", element_r17.availablePoints, " ");
} }
function LeaderBoardComponent_tr_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 45);
} }
const _c3 = function (a0) { return { evenrow: a0 }; };
function LeaderBoardComponent_tr_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 46);
} if (rf & 2) {
    const index_r19 = ctx.index;
    const element_r20 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c3, index_r19 % 2 == 1))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](4, _c0, ctx_r7.un == element_r20.userName ? "#E4E6FF" : "", ctx_r7.un == element_r20.userName ? "black" : ""));
} }
const _c4 = function () { return [10, 20, 50]; };
class LeaderBoardComponent {
    constructor(userservice, dialog, snackbar, loginStateService, userstats, router) {
        var _a;
        this.userservice = userservice;
        this.dialog = dialog;
        this.snackbar = snackbar;
        this.loginStateService = loginStateService;
        this.userstats = userstats;
        this.router = router;
        this.first = src_app_common_constants_links__WEBPACK_IMPORTED_MODULE_7__["first"];
        this.second = src_app_common_constants_links__WEBPACK_IMPORTED_MODULE_7__["second"];
        this.third = src_app_common_constants_links__WEBPACK_IMPORTED_MODULE_7__["third"];
        this.userBadge = src_app_common_constants_links__WEBPACK_IMPORTED_MODULE_7__["userbadge"];
        this.userStats = [];
        this.userFutureBets = [];
        this.displayedColumns = ['rank', 'firstName', 'availablePoints'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.loginState = this.loginStateService.getLoginState();
        this.un = this.loginState.username;
        this.role = (_a = this.loginState) === null || _a === void 0 ? void 0 : _a.role;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.userFutureBets = yield this.getUsersFutureContest();
            // console.log(this.userFutureBets);
            this.userStats = yield this.getUsers();
            // console.log(this.userStats);
            this.dataSource.data = this.userStats;
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            this.sort1();
        });
    }
    stringToColorFunction(color) {
        return Object(src_app_common_constants_utils__WEBPACK_IMPORTED_MODULE_9__["stringToColor"])(color);
    }
    findsum(data) {
        data.forEach((element) => {
            let obj = this.userFutureBets.find(o => o.userId == element.userId);
            if (obj)
                element.availablePoints += obj.contestPoints;
        });
        data.sort((obj1, obj2) => {
            if (obj1.availablePoints < obj2.availablePoints) {
                return 1;
            }
            else if (obj1.availablePoints > obj2.availablePoints) {
                return -1;
            }
            return 0;
        });
    }
    sort1() {
        this.userStats = this.userStats.sort((low, high) => +high.availablePoints - +low.availablePoints);
    }
    sortData(sort) {
        const data = this.userStats.slice();
        if (!sort.active || sort.direction === '') {
            this.userStats = data;
            return;
        }
        this.userStats = data.sort((a, b) => {
            const isDesc = sort.direction === 'desc';
            switch (sort.active) {
                case 'name': return this.compare(a.availablePoints, b.availablePoints, isDesc);
                default: return 0;
            }
        });
    }
    compare(a, b, isDesc) {
        return (a < b ? -1 : 1) * (isDesc ? 1 : -1);
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    // GET USER DETAILS
    getUsers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let panelClass = 'green';
            let snackbarMsg = '';
            let snackbarRef = null;
            const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"], { disableClose: true });
            let userModel = [];
            let resp = null;
            try {
                resp = yield this.userstats.getUserStats();
                userModel = resp.body;
                this.findsum(userModel);
                if (userModel) {
                    dialogRef.close();
                    return userModel;
                }
                else {
                    snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_6__["NO_RESP"];
                    panelClass = 'red';
                }
            }
            catch (ex) {
                snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_6__["getErrorMessage"])(ex);
                panelClass = 'red';
            }
            finally {
                dialogRef.close();
            }
            if (snackbarMsg) {
                snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_8__["getSnackbarProperties"])(snackbarMsg, panelClass));
            }
            return [];
        });
    }
    // USERS FUTURE CONTEST
    getUsersFutureContest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let panelClass = 'green';
            let snackbarMsg = '';
            let snackbarRef = null;
            const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"], { disableClose: true });
            let userFutureBets = [];
            let resp = null;
            try {
                resp = yield this.userstats.getUserFutureBets();
                userFutureBets = resp.body;
                if (userFutureBets) {
                    dialogRef.close();
                    return userFutureBets;
                }
                else {
                    snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_6__["NO_RESP"];
                    panelClass = 'red';
                }
            }
            catch (ex) {
                snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_6__["getErrorMessage"])(ex);
                panelClass = 'red';
            }
            finally {
                dialogRef.close();
            }
            if (snackbarMsg) {
                snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_8__["getSnackbarProperties"])(snackbarMsg, panelClass));
            }
            return [];
        });
    }
    gotoUserProfile(id) {
        // this.location.replaceState('');
        this.router.navigate([this.role + `/view-users-profile/${id}`]);
    }
}
LeaderBoardComponent.ɵfac = function LeaderBoardComponent_Factory(t) { return new (t || LeaderBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_common_service_user_service_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_common_service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_14__["LoginstateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_common_service_statistics_user_statictics_service__WEBPACK_IMPORTED_MODULE_15__["UserStaticticsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"])); };
LeaderBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: LeaderBoardComponent, selectors: [["app-leader-board"]], viewQuery: function LeaderBoardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 54, vars: 17, consts: [[1, "line"], [1, "vl"], [1, "container1"], [1, "item1"], [1, "innerr1"], ["alt", "", 1, "card-image", 3, "src"], [1, "card-name", "txtbg"], ["loading", "lazy", "onerror", "this.src='https://firebasestorage.googleapis.com/v0/b/sportsgeek-74e1e.appspot.com/o/69bba4a0-c114-4379-9854-e4381a3130bc.png?alt=media'", 1, "card-image", 3, "src"], [1, "txtbg"], [1, "item2"], [1, "innerr2"], ["alt", "", 1, "card-image2", 3, "src"], ["loading", "lazy", "onerror", "this.src='https://firebasestorage.googleapis.com/v0/b/sportsgeek-74e1e.appspot.com/o/69bba4a0-c114-4379-9854-e4381a3130bc.png?alt=media'", 1, "card-image2", "pp2", 3, "src"], [1, "item3"], [1, "innerr3"], ["alt", "", 1, "card-image3", 3, "src"], ["loading", "lazy", "onerror", "this.src='https://firebasestorage.googleapis.com/v0/b/sportsgeek-74e1e.appspot.com/o/69bba4a0-c114-4379-9854-e4381a3130bc.png?alt=media'", 1, "card-image3", "pp3", 3, "src"], [1, "vl1"], [1, "parent-container", "container-fluid"], [1, "mat-elevation-z20", "container", "main-container"], [1, "conatiner-header"], [1, "inner-conatiner"], [1, "inner-container-actions"], ["appearance", "outline", "color", "accent"], ["matInput", "", "placeholder", "Type something here", "type", "search", 2, "color", "white", 3, "keyup"], ["color", "accent", "matSuffix", ""], ["mat-table", "", "matSort", "", "matSortActive", "availablePoints", "matSortDirection", "desc", 1, "mat-elevation-z21", 3, "dataSource", "matSortChange"], ["matColumnDef", "rank"], ["mat-header-cell", "", "class", "highlight", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "ngStyle", 4, "matCellDef"], ["matColumnDef", "firstName"], ["mat-cell", "", "class", "pointer", 3, "ngStyle", "click", 4, "matCellDef"], ["matColumnDef", "availablePoints"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", "ngStyle", 4, "matRowDef", "matRowDefColumns"], ["color", "accent", "showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", "", 1, "highlight"], ["mat-cell", "", 3, "ngStyle"], ["mat-cell", "", 1, "pointer", 3, "ngStyle", "click"], [1, "inside-td"], ["loading", "lazy", 3, "ngStyle", 4, "ngIf"], ["class", "profile-picture thumbnail-image", "loading", "lazy", 3, "src", "alt", 4, "ngIf"], [3, "ngStyle"], ["loading", "lazy", 3, "ngStyle"], ["loading", "lazy", 1, "profile-picture", "thumbnail-image", 3, "src", "alt"], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "ngStyle"]], template: function LeaderBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](28, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "Leader Board");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keyup", function LeaderBoardComponent_Template_input_keyup_38_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "mat-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "table", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("matSortChange", function LeaderBoardComponent_Template_table_matSortChange_41_listener($event) { return ctx.sortData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](42, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](43, LeaderBoardComponent_th_43_Template, 2, 0, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](44, LeaderBoardComponent_td_44_Template, 2, 5, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](45, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](46, LeaderBoardComponent_th_46_Template, 2, 0, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](47, LeaderBoardComponent_td_47_Template, 7, 9, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](48, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](49, LeaderBoardComponent_th_49_Template, 2, 0, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](50, LeaderBoardComponent_td_50_Template, 2, 5, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](51, LeaderBoardComponent_tr_51_Template, 1, 0, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](52, LeaderBoardComponent_tr_52_Template, 1, 7, "tr", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](53, "mat-paginator", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("src", ctx.first, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", (ctx.userStats[0] == null ? null : ctx.userStats[0].firstName) + " " + (ctx.userStats[0] == null ? null : ctx.userStats[0].lastName), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("src", ctx.userStats[0] == null ? null : ctx.userStats[0].profilePicture, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.userStats[0] == null ? null : ctx.userStats[0].availablePoints, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("src", ctx.second, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", (ctx.userStats[1] == null ? null : ctx.userStats[1].firstName) + " " + (ctx.userStats[1] == null ? null : ctx.userStats[1].lastName), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("src", ctx.userStats[1] == null ? null : ctx.userStats[1].profilePicture, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.userStats[1] == null ? null : ctx.userStats[1].availablePoints, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("src", ctx.third, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", (ctx.userStats[2] == null ? null : ctx.userStats[2].firstName) + " " + (ctx.userStats[2] == null ? null : ctx.userStats[2].lastName), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("src", ctx.userStats[2] == null ? null : ctx.userStats[2].profilePicture, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.userStats[2] == null ? null : ctx.userStats[2].availablePoints, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](16, _c4));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatSuffix"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__["DefaultStyleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__["DefaultClassDirective"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Lato:300\");\r\n.container1[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    \r\n    \r\n    \r\n    \r\n    padding: 20px;\r\n    align-content: stretch;\r\n    background: #353535;\r\n    \r\n    \r\n    height: 300px;\r\n    width: auto;\r\n}\r\n\r\n.innerr1[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    height: 100%;\r\n    align-self: center;\r\n    vertical-align: middle;\r\n    margin-top: 10%;\r\n    text-align: center;\r\n    \r\n}\r\n.innerr2[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    text-align: center;\r\n    \r\n    margin-top: 10%;\r\n    \r\n}\r\n.innerr3[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    text-align: center;\r\n    \r\n    margin-top: 10%;\r\n    \r\n}\r\n.item1[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    order: 1;\r\n    \r\n    background: linear-gradient(to right, #ffd700, #ffd910, #ffe700);\r\n    \r\n    color: rgb(2, 2, 2);\r\n    font-weight: bolder;\r\n    border-radius: 10px 10px 0px 0px;\r\n    width: 20%;\r\n    animation: rotate 1.5s linear infinite;\r\n}\r\n.png-over[_ngcontent-%COMP%] {\r\n    height: 10%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0\r\n}\r\n.card-image[_ngcontent-%COMP%] {\r\n    height: 20%;\r\n    border-radius: 50%;\r\n    margin-bottom: 20px;\r\n}\r\n.card-image2[_ngcontent-%COMP%] {\r\n    height: 20%;\r\n    border-radius: 50%;\r\n    margin-bottom: 10px;\r\n}\r\n.card-image3[_ngcontent-%COMP%] {\r\n    height: 20%;\r\n    border-radius: 50%;\r\n    margin-bottom: 10px;\r\n}\r\n.pp3[_ngcontent-%COMP%]{\r\n    height: 25%;\r\n}\r\n.pp2[_ngcontent-%COMP%]{\r\n    height: 23%;\r\n}\r\n.item2[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    \r\n    \r\n    \r\n    background: linear-gradient(to right, yellow, green);\r\n    margin-top: 40px;\r\n    border-radius: 10px 10px 0px 0px;\r\n    width: 20%;\r\n    font-weight: bolder;\r\n    animation: rotate 1.5s linear infinite;\r\n}\r\n.item3[_ngcontent-%COMP%] {\r\n    order: 1;\r\n    \r\n    \r\n    background: linear-gradient(to left, #CD7F32, #CD7F99);\r\n    \r\n    margin-top: 80px;\r\n    \r\n    border-radius: 10px 10px 0px 0px;\r\n    width: 20%;\r\n    font-weight: bolder;\r\n    animation: rotate 1.5s linear infinite;\r\n}\r\n\r\n.parent-container[_ngcontent-%COMP%] {\r\n    background-color: #353535;\r\n    padding-top: 50px;\r\n    padding-bottom: 50px;\r\n}\r\n.main-container[_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n    padding-bottom: 20px;\r\n    background-color: #292929;\r\n    border: 1px solid gray;\r\n    border-radius: 10px;\r\n}\r\n.conatiner-header[_ngcontent-%COMP%] {\r\n    color: white;\r\n    background-color: #16191c;\r\n    padding: 10px 10px;\r\n    font-size: 20px;\r\n    border-radius: 10px 10px 0px 0px;\r\n}\r\n.inner-conatiner[_ngcontent-%COMP%] {\r\n    padding: 10px 30px 20px;\r\n    background-color: #383737;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background-color: #333333;\r\n}\r\n.highlight[_ngcontent-%COMP%] {\r\n    background-color: #282850;\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n.evenrow[_ngcontent-%COMP%] {\r\n    background-color: #3b3a3a;\r\n}\r\ntd[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n}\r\n.mat-row[_ngcontent-%COMP%]:hover {\r\n    background-color: #311f1f;\r\n}\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\nmat-paginator[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    background: #282850;\r\n}\r\n.mat-cell[_ngcontent-%COMP%] {\r\n    padding-right: 10px;\r\n}\r\n.profile-picture[_ngcontent-%COMP%] {\r\n    border-radius: 50%;\r\n    height: 40px;\r\n    width: 40px;\r\n    background-color: orange;\r\n    \r\n    \r\n}\r\n.pointer[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n.line[_ngcontent-%COMP%] {\r\n    height: 6px;\r\n    border-radius: 4px;\r\n    background: red;\r\n    \r\n    \r\n    \r\n    \r\n    background: linear-gradient(to right, orange, yellow, green, cyan, blue, violet);\r\n    \r\n    animation: rotate 1.5s linear infinite;\r\n}\r\n.txtbg[_ngcontent-%COMP%] {\r\n    \r\n    background: #16191c;\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n.vl[_ngcontent-%COMP%] {\r\n    \r\n    border-radius: 4px;\r\n    width: 6px;\r\n    height: 300px;\r\n    left: 0%;\r\n    position: absolute;\r\n    background: linear-gradient(to bottom, orange, yellow, green, cyan, blue, violet);\r\n    animation: rotate 1.5s linear infinite;\r\n}\r\n.vl1[_ngcontent-%COMP%] {\r\n    \r\n    border-radius: 4px;\r\n    width: 6px;\r\n    min-height: 305px;\r\n    height: auto;\r\n    position: absolute;\r\n    right: 0%;\r\n    top: 69px;\r\n    background: linear-gradient(to bottom, orange, yellow, green, cyan, blue, violet);\r\n    animation: rotate 1.5s linear infinite;\r\n}\r\n@keyframes rotate {\r\n    0% {\r\n        filter: hue-rotate(0deg);\r\n    }\r\n    100% {\r\n        filter: hue-rotate(360deg);\r\n    }\r\n}\r\n@media only screen and (max-width: 480px) {\r\n    .vl1[_ngcontent-%COMP%] {\r\n        \r\n        border-radius: 4px;\r\n        width: 6px;\r\n        min-height: 305px;\r\n        height: auto;\r\n        position: absolute;\r\n        right: 0%;\r\n        top: 60px;\r\n        background: linear-gradient(to bottom, orange, yellow, green, cyan, blue, violet);\r\n        animation: rotate 1.5s linear infinite;\r\n    }\r\n\r\n    .item1[_ngcontent-%COMP%] {\r\n        width: 27%;\r\n    }\r\n    .item2[_ngcontent-%COMP%] {\r\n        width: 27%;\r\n    }\r\n    .item3[_ngcontent-%COMP%] {\r\n        width: 27%;\r\n    }\r\n}\r\n.inside-td[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWRlci1ib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtEQUErRDtBQUMvRDtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLCtCQUErQjtJQUMvQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw0REFBNEQ7SUFDNUQsNENBQTRDO0lBQzVDLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFHQTs7Ozs7OztHQU9HO0FBRUg7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLG1CQUFtQjtJQUNuQixnRUFBZ0U7SUFDaEUseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixzQ0FBc0M7QUFDMUM7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOO0FBQ0o7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLDhEQUE4RDtJQUM5RCx5QkFBeUI7SUFDekIsaUhBQWlIO0lBQ2pILG9EQUFvRDtJQUNwRCxnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsc0NBQXNDO0FBQzFDO0FBRUE7SUFDSSxRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixzREFBc0Q7SUFDdEQseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsc0NBQXNDO0FBQzFDO0FBR0EsZUFBZTtBQUVmO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQ0FBZ0M7QUFDcEM7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsV0FBVztBQUNmO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQiw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLCtDQUErQztJQUUvQywwQkFBMEI7SUFFMUIsMkJBQTJCO0lBRTNCLDBCQUEwQjtJQUMxQixnRkFBZ0Y7SUFDaEYsbUNBQW1DO0lBQ25DLHNDQUFzQztBQUMxQztBQUVBO0lBQ0ksc0ZBQXNGO0lBQ3RGLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0Isb0NBQW9DO0FBQ3hDO0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0lBQ2IsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixpRkFBaUY7SUFDakYsc0NBQXNDO0FBQzFDO0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULGlGQUFpRjtJQUNqRixzQ0FBc0M7QUFDMUM7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7QUFDSjtBQUVBO0lBQ0k7UUFDSSw0QkFBNEI7UUFDNUIsa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixpQkFBaUI7UUFDakIsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsU0FBUztRQUNULGlGQUFpRjtRQUNqRixzQ0FBc0M7SUFDMUM7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImxlYWRlci1ib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzozMDBcIik7XHJcbi5jb250YWluZXIxIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xyXG4gICAgLyogYm9yZGVyLXdpZHRoOiAxMHB4OyAqL1xyXG4gICAgLyogYm9yZGVyLXN0eWxlOiBncm9vdmU7ICovXHJcbiAgICAvKiBib3JkZXItY29sb3I6IHllbGxvd2dyZWVuOyAqL1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzUzNTM1O1xyXG4gICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMxNGZmZTksICNmZmViM2IsICNmZjAwZTApOyAqL1xyXG4gICAgLyogYW5pbWF0aW9uOiByb3RhdGUgMS41cyBsaW5lYXIgaW5maW5pdGU7ICovXHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcblxyXG4vKiBAa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgZmlsdGVyOiBodWUtcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgZmlsdGVyOiBodWUtcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbn0gKi9cclxuXHJcbi5pbm5lcnIxIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDIwJTsgKi9cclxufVxyXG5cclxuLmlubmVycjIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLyogdmVydGljYWwtYWxpZ246IG1pZGRsZTsgKi9cclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIC8qIG1hcmdpbi1yaWdodDogMjAlOyAqL1xyXG59XHJcblxyXG4uaW5uZXJyMyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvKiB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAqL1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgLyogbWFyZ2luLXJpZ2h0OiAyMCU7ICovXHJcbn1cclxuXHJcbi5pdGVtMSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG9yZGVyOiAxO1xyXG4gICAgLyogcGFkZGluZzogNjBweDsgKi9cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZDcwMCwgI2ZmZDkxMCwgI2ZmZTcwMCk7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjRkZENzAwOyAqL1xyXG4gICAgY29sb3I6IHJnYigyLCAyLCAyKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBhbmltYXRpb246IHJvdGF0ZSAxLjVzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuLnBuZy1vdmVyIHtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMFxyXG59XHJcblxyXG4uY2FyZC1pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWltYWdlMiB7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWltYWdlMyB7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5wcDN7XHJcbiAgICBoZWlnaHQ6IDI1JTtcclxufVxyXG5cclxuLnBwMntcclxuICAgIGhlaWdodDogMjMlO1xyXG59XHJcblxyXG4uaXRlbTIge1xyXG4gICAgLyogb3JkZXI6IDE7ICovXHJcbiAgICAvKiBwYWRkaW5nOiA2MHB4OyAqL1xyXG4gICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2IxYjFiNiAwJSwgIzVkNWU1Yyk7ICovXHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjQzBDMEMwOyAqL1xyXG4gICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTQ1M2ZmLCAjN2U3NTIzLCAjZjc5Y2VjLCBvcmFuZ2UsIHllbGxvdywgZ3JlZW4sIGN5YW4sIGJsdWUsIHZpb2xldCk7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHllbGxvdywgZ3JlZW4pO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBhbmltYXRpb246IHJvdGF0ZSAxLjVzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuLml0ZW0zIHtcclxuICAgIG9yZGVyOiAxO1xyXG4gICAgLyogcGFkZGluZzogNjBweDsgKi9cclxuICAgIC8qIG1hcmdpbjogMTBweDsgKi9cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjQ0Q3RjMyLCAjQ0Q3Rjk5KTtcclxuICAgIC8qIGJhY2tncm91bmQ6ICNDRDdGMzI7ICovXHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgLyogaGVpZ2h0OiAxMHB4OyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGFuaW1hdGlvbjogcm90YXRlIDEuNXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG5cclxuLyogQk9UVE9NIERJViAqL1xyXG5cclxuLnBhcmVudC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MzUzNTtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmNvbmF0aW5lci1oZWFkZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTkxYztcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xyXG59XHJcblxyXG4uaW5uZXItY29uYXRpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMzBweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4MzczNztcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG59XHJcblxyXG4uaGlnaGxpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI4NTA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmV2ZW5yb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiM2EzYTtcclxufVxyXG5cclxudGQge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5tYXQtcm93OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTFmMWY7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWF0LXBhZ2luYXRvciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICMyODI4NTA7XHJcbn1cclxuXHJcbi5tYXQtY2VsbCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ucHJvZmlsZS1waWN0dXJlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gICAgLyogZGlzcGxheTogbm9uZTsgKi9cclxuICAgIC8qIGJvcmRlcjogbm9uZSFpbXBvcnRhbnQ7ICovXHJcbn1cclxuXHJcbi5wb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICAvKiBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgKi9cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIG9yYW5nZSwgeWVsbG93LCBncmVlbiwgY3lhbiwgYmx1ZSwgdmlvbGV0KTtcclxuICAgIC8qIEZvciBTYWZhcmkgNS4xIHRvIDYuMCAqL1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHJpZ2h0LCBvcmFuZ2UsIHllbGxvdywgZ3JlZW4sIGN5YW4sIGJsdWUsIHZpb2xldCk7XHJcbiAgICAvKiBGb3IgT3BlcmEgMTEuMSB0byAxMi4wICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChyaWdodCwgb3JhbmdlLCB5ZWxsb3csIGdyZWVuLCBjeWFuLCBibHVlLCB2aW9sZXQpO1xyXG4gICAgLyogRm9yIEZpcmVmb3ggMy42IHRvIDE1ICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIG9yYW5nZSwgeWVsbG93LCBncmVlbiwgY3lhbiwgYmx1ZSwgdmlvbGV0KTtcclxuICAgIC8qIFN0YW5kYXJkIHN5bnRheCAobXVzdCBiZSBsYXN0KSAqL1xyXG4gICAgYW5pbWF0aW9uOiByb3RhdGUgMS41cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi50eHRiZyB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIG9yYW5nZSwgeWVsbG93LCBncmVlbiwgY3lhbiwgYmx1ZSwgdmlvbGV0KTsgKi9cclxuICAgIGJhY2tncm91bmQ6ICMxNjE5MWM7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnZsIHtcclxuICAgIC8qIGJvcmRlci1sZWZ0OiA2cHggc29saWQ7ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGxlZnQ6IDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgb3JhbmdlLCB5ZWxsb3csIGdyZWVuLCBjeWFuLCBibHVlLCB2aW9sZXQpO1xyXG4gICAgYW5pbWF0aW9uOiByb3RhdGUgMS41cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi52bDEge1xyXG4gICAgLyogYm9yZGVyLWxlZnQ6IDZweCBzb2xpZDsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDVweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwJTtcclxuICAgIHRvcDogNjlweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIG9yYW5nZSwgeWVsbG93LCBncmVlbiwgY3lhbiwgYmx1ZSwgdmlvbGV0KTtcclxuICAgIGFuaW1hdGlvbjogcm90YXRlIDEuNXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgZmlsdGVyOiBodWUtcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgZmlsdGVyOiBodWUtcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC52bDEge1xyXG4gICAgICAgIC8qIGJvcmRlci1sZWZ0OiA2cHggc29saWQ7ICovXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIHdpZHRoOiA2cHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzA1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMCU7XHJcbiAgICAgICAgdG9wOiA2MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIG9yYW5nZSwgeWVsbG93LCBncmVlbiwgY3lhbiwgYmx1ZSwgdmlvbGV0KTtcclxuICAgICAgICBhbmltYXRpb246IHJvdGF0ZSAxLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbTEge1xyXG4gICAgICAgIHdpZHRoOiAyNyU7XHJcbiAgICB9XHJcbiAgICAuaXRlbTIge1xyXG4gICAgICAgIHdpZHRoOiAyNyU7XHJcbiAgICB9XHJcbiAgICAuaXRlbTMge1xyXG4gICAgICAgIHdpZHRoOiAyNyU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbnNpZGUtdGR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "3s9q":
/*!********************************************************************************!*\
  !*** ./src/app/user/my-matches/view-old-matches/view-old-matches.component.ts ***!
  \********************************************************************************/
/*! exports provided: ViewOldMatchesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewOldMatchesComponent", function() { return ViewOldMatchesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/components/loading/loading.component */ "4cPp");
/* harmony import */ var src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/components/snackbar/snackbar.component */ "j7cY");
/* harmony import */ var src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/constants/error-message */ "jsD4");
/* harmony import */ var src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/constants/snackbar-properties */ "fc4o");
/* harmony import */ var src_app_common_constants_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/constants/utils */ "1lvy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_common_service_bot_bot_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/common/service/bot/bot.service */ "9vxe");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_common_service_matches_service_matches_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/common/service/matches_service/matches.service */ "gD1G");
/* harmony import */ var src_app_common_service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/common/service/login_state/loginstate.service */ "1d9a");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
























function ViewOldMatchesComponent_h2_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Winner : ", ctx_r0.matchData == null ? null : ctx_r0.matchData.team1Short, " ");
} }
function ViewOldMatchesComponent_h2_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Winner : ", ctx_r1.matchData == null ? null : ctx_r1.matchData.team2Short, " ");
} }
function ViewOldMatchesComponent_h2_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Draw / Cancelled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ViewOldMatchesComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Username ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return { "padding": "10px", "background-color": a1, "border-radius": "50%" }; };
function ViewOldMatchesComponent_td_44_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](2, _c0, ctx_r14.stringToColorFunction(element_r13.firstName + element_r13.lastName)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](element_r13.firstName.substr(0, 1).toUpperCase() + element_r13.lastName.substr(0, 1).toUpperCase());
} }
function ViewOldMatchesComponent_td_44_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "img", 39);
} if (rf & 2) {
    const element_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", element_r13.profilePicture, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("alt", element_r13.firstName.substr(0, 1).toUpperCase() + element_r13.lastName.substr(0, 1).toUpperCase());
} }
const _c1 = function (a0, a1) { return { "background-color": a0, "color": a1 }; };
const _c2 = function () { return { "margin-left": "5px" }; };
function ViewOldMatchesComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, ViewOldMatchesComponent_td_44_span_3_Template, 2, 4, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ViewOldMatchesComponent_td_44_img_4_Template, 1, 2, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](5, _c1, ctx_r4.un == element_r13.username ? "#E4E6FF" : "", ctx_r4.un == element_r13.username ? "black" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !element_r13.profilePicture);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", element_r13.profilePicture);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](8, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", element_r13.firstName + " " + element_r13.lastName, " ");
} }
function ViewOldMatchesComponent_th_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Bet Team ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ViewOldMatchesComponent_td_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](2, _c1, ctx_r6.un == element_r18.username ? "#E4E6FF" : "", ctx_r6.un == element_r18.username ? "black" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", element_r18.teamShortName, " ");
} }
function ViewOldMatchesComponent_th_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Bet Points ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ViewOldMatchesComponent_td_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](2, _c1, ctx_r8.un == element_r19.username ? "#E4E6FF" : "", ctx_r8.un == element_r19.username ? "black" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", element_r19.contestPoints, " ");
} }
function ViewOldMatchesComponent_th_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Winning Points ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ViewOldMatchesComponent_td_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](2, _c1, ctx_r10.un == element_r20.username ? "#E4E6FF" : "", ctx_r10.un == element_r20.username ? "black" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", element_r20.winningPoints, " ");
} }
function ViewOldMatchesComponent_tr_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 40);
} }
const _c3 = function (a0) { return { "evenrow": a0 }; };
function ViewOldMatchesComponent_tr_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 41);
} if (rf & 2) {
    const index_r22 = ctx.index;
    const element_r23 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](2, _c3, index_r22 % 2 == 1))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](4, _c1, ctx_r12.un == element_r23.username ? "#E4E6FF" : "", ctx_r12.un == element_r23.username ? "black" : ""));
} }
const _c4 = function () { return [10, 20]; };
class ViewOldMatchesComponent {
    constructor(route, botservice, snackbar, dialog, matchservice, loginStateService) {
        this.route = route;
        this.botservice = botservice;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.matchservice = matchservice;
        this.loginStateService = loginStateService;
        this.teamColor = {
            1: "#ff0",
            2: "#2561ae",
            3: "#00416a",
            4: "#7300ab",
            5: "#ace5ee",
            6: "#004f91",
            7: "#ed1f27",
            8: "RGB(37 ,74 ,165)",
            9: "#d5152c",
            10: "#f7a721",
            //in case if the ids of the above teams changes, default colors will be used
            t1: 'pink',
            t2: 'silver' //
        };
        this.teamFontColor = {
            1: "black",
            2: "#fff",
            3: "#fff",
            4: "#fff",
            5: "black",
            6: "#fff",
            7: "#fff",
            8: "white",
            9: "#fff",
            10: "black",
            //in case if the ids of the above teams changes, default colors will be used
            t1: 'black',
            t2: 'black' //
        };
        this.borderTop = {
            1: "5px solid #ef9b0f",
            2: "5px solid #4B9CD3",
            3: "5px solid #1d2951",
            4: "5px solid #430064",
            5: "5px solid #9bc4e2",
            6: "5px solid blue",
            7: "5px solid #af002a",
            8: "5px solid #1877F2",
            9: "5px solid #800000",
            10: "5px solid #F05E23",
            //in case if the ids of the above teams changes, default colors will be used
            t1: 'pink',
            t2: 'silver' //
        };
        this.fetchBotDetails = [];
        this.displayedColumns = ['username', 'teamshortname', 'contestPoints', 'winningPoints'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.loginState = this.loginStateService.getLoginState();
        // userId = this.loginState?.userId;
        // role = this.loginState?.role;
        this.un = this.loginState.username;
        // THIS IS FOR CALCULATION PURPOSE ONLY
        this.team1points = 0;
        this.team2points = 0;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.params.subscribe(data => {
                this.matchId = data.id;
            });
            this.calc = yield this.getAllPlayerBetsByMatchIdForCalculation(this.matchId);
            this.fetchBotDetails = yield this.getAllPlayerBetsByMatchId(this.matchId);
            // console.log(this.fetchBotDetails);
            this.dataSource.data = this.fetchBotDetails;
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            this.matchData = yield this.getMatchById(this.matchId);
            // console.log(this.matchData);
        });
    }
    stringToColorFunction(color) {
        return Object(src_app_common_constants_utils__WEBPACK_IMPORTED_MODULE_8__["stringToColor"])(color);
    }
    Team1TotalUsers(inputs1, inputs2) {
        let counter = 0;
        for (const input1 of inputs1) {
            if (input1.teamShortName === (inputs2 === null || inputs2 === void 0 ? void 0 : inputs2.team1Short))
                counter += 1;
        }
        return counter;
    }
    Team2TotalUsers(inputs1, inputs2) {
        let counter = 0;
        for (const input1 of inputs1) {
            if (input1.teamShortName === (inputs2 === null || inputs2 === void 0 ? void 0 : inputs2.team2Short))
                counter += 1;
        }
        return counter;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    getMatchById(matchId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let panelClass = 'green';
            let snackbarMsg = '';
            let snackbarRef = null;
            const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"], { disableClose: true });
            let matchModel = [];
            let resp = null;
            try {
                resp = yield this.matchservice.viewMatchById(matchId);
                matchModel = resp.body;
                if (matchModel) {
                    dialogRef.close();
                    return matchModel;
                }
                else {
                    snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_6__["NO_RESP"];
                    panelClass = 'red';
                }
            }
            catch (ex) {
                snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_6__["getErrorMessage"])(ex);
                panelClass = 'red';
            }
            finally {
                dialogRef.close();
            }
            if (snackbarMsg) {
                snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_7__["getSnackbarProperties"])(snackbarMsg, panelClass));
            }
            return [];
        });
    }
    // GET ALL PLAYER BETS ON TEAM
    getAllPlayerBetsByMatchId(matchId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let panelClass = 'green';
            let snackbarMsg = '';
            let snackbarRef = null;
            const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"], { disableClose: true });
            let botModel = [];
            let resp = null;
            try {
                resp = yield this.botservice.viewAllContestByMatchId(matchId);
                botModel = resp.body;
                this.findsum(botModel);
                if (botModel) {
                    dialogRef.close();
                    return botModel;
                }
                else {
                    snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_6__["NO_RESP"];
                    panelClass = 'red';
                }
            }
            catch (ex) {
                snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_6__["getErrorMessage"])(ex);
                panelClass = 'red';
            }
            finally {
                dialogRef.close();
            }
            if (snackbarMsg) {
                snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_7__["getSnackbarProperties"])(snackbarMsg, panelClass));
            }
            return [];
        });
    }
    findsum(data) {
        data.forEach((element) => {
            if (element.teamShortName == this.calc.team1Short) {
                this.team1points += element.contestPoints;
            }
            else if (element.teamShortName == this.calc.team2Short)
                this.team2points += element.contestPoints;
        });
    }
    getAllPlayerBetsByMatchIdForCalculation(matchId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let panelClass = 'green';
            let snackbarMsg = '';
            let snackbarRef = null;
            const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"], { disableClose: true });
            let matchModel = [];
            let resp = null;
            try {
                resp = yield this.matchservice.viewMatchById(matchId);
                matchModel = resp.body;
                if (matchModel) {
                    dialogRef.close();
                    return matchModel;
                }
                else {
                    snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_6__["NO_RESP"];
                    panelClass = 'red';
                }
            }
            catch (ex) {
                snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_6__["getErrorMessage"])(ex);
                panelClass = 'red';
            }
            finally {
                dialogRef.close();
            }
            if (snackbarMsg) {
                snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_7__["getSnackbarProperties"])(snackbarMsg, panelClass));
            }
            return [];
        });
    }
    getColorForTeam1() {
        return this.matchData && this.matchData.team1Id ? this.teamColor[this.matchData.team1Id] : this.teamColor.t1;
    }
    getColorForTeam2() {
        return this.matchData && this.matchData.team2Id ? this.teamColor[this.matchData.team2Id] : this.teamColor.t2;
    }
    getFontColorForTeam1() {
        return this.matchData && this.matchData.team1Id ? this.teamFontColor[this.matchData.team1Id] : this.teamFontColor.t1;
    }
    getFontColorForTeam2() {
        return this.matchData && this.matchData.team2Id ? this.teamFontColor[this.matchData.team2Id] : this.teamFontColor.t2;
    }
    getBorderColorForTeam1() {
        return this.matchData && this.matchData.team1Id ? this.borderTop[this.matchData.team1Id] : this.borderTop.t1;
    }
    getBorderColorForTeam2() {
        return this.matchData && this.matchData.team2Id ? this.borderTop[this.matchData.team2Id] : this.borderTop.t2;
    }
}
ViewOldMatchesComponent.ɵfac = function ViewOldMatchesComponent_Factory(t) { return new (t || ViewOldMatchesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_common_service_bot_bot_service__WEBPACK_IMPORTED_MODULE_11__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_common_service_matches_service_matches_service__WEBPACK_IMPORTED_MODULE_14__["MatchesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_common_service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_15__["LoginstateService"])); };
ViewOldMatchesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: ViewOldMatchesComponent, selectors: [["app-view-old-matches"]], viewQuery: function ViewOldMatchesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 57, vars: 37, consts: [[1, "card"], [1, "left"], [1, "right"], [4, "ngIf"], [1, "match-details"], [1, "team1"], ["loading", "lazy", 2, "border-radius", "50%", 3, "src"], [1, "team-name"], [1, "team-points"], [1, "details"], [1, "date"], [1, "versus"], [1, "venue"], [1, "team2"], [1, "parent-container", "container-fluid"], [1, "mat-elevation-z20", "container", "main-container"], [1, "conatiner-header"], [1, "inner-conatiner"], [1, "inner-container-actions"], ["appearance", "outline", "color", "accent"], ["matInput", "", "placeholder", "Search Players", "type", "search", 2, "color", "white", 3, "keyup"], ["color", "accent", "matSuffix", ""], ["mat-table", "", "matSort", "", 1, "mat-elevation-z21", 3, "dataSource"], ["matColumnDef", "username"], ["mat-header-cell", "", "mat-sort-header", "", "class", "highlight", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "ngStyle", 4, "matCellDef"], ["matColumnDef", "teamshortname"], ["matColumnDef", "contestPoints"], ["matColumnDef", "winningPoints"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", "ngStyle", 4, "matRowDef", "matRowDefColumns"], ["color", "accent", "showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", "", 1, "highlight"], ["mat-cell", "", 3, "ngStyle"], [1, "inside-td"], ["loading", "lazy", 3, "ngStyle", 4, "ngIf"], ["class", "profile-picture thumbnail-image", "loading", "lazy", 3, "src", "alt", 4, "ngIf"], [3, "ngStyle"], ["loading", "lazy", 3, "ngStyle"], ["loading", "lazy", 1, "profile-picture", "thumbnail-image", 3, "src", "alt"], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "ngStyle"]], template: function ViewOldMatchesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ViewOldMatchesComponent_h2_4_Template, 2, 1, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, ViewOldMatchesComponent_h2_5_Template, 2, 1, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, ViewOldMatchesComponent_h2_6_Template, 2, 0, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](17, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "VS");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](28, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, " Match Result ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "mat-form-field", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyup", function ViewOldMatchesComponent_Template_input_keyup_38_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](42, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](43, ViewOldMatchesComponent_th_43_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](44, ViewOldMatchesComponent_td_44_Template, 7, 9, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](45, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](46, ViewOldMatchesComponent_th_46_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](47, ViewOldMatchesComponent_td_47_Template, 2, 5, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](48, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](49, ViewOldMatchesComponent_th_49_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](50, ViewOldMatchesComponent_td_50_Template, 2, 5, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](51, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](52, ViewOldMatchesComponent_th_52_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](53, ViewOldMatchesComponent_td_53_Template, 2, 5, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](54, ViewOldMatchesComponent_tr_54_Template, 1, 0, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](55, ViewOldMatchesComponent_tr_55_Template, 1, 7, "tr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](56, "mat-paginator", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("border-top", ctx.getBorderColorForTeam1())("background-color", ctx.getColorForTeam1());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("border-top", ctx.getBorderColorForTeam2())("background-color", ctx.getColorForTeam2());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.matchData == null ? null : ctx.matchData.winnerTeamId) == (ctx.matchData == null ? null : ctx.matchData.team1Id));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.matchData == null ? null : ctx.matchData.winnerTeamId) == (ctx.matchData == null ? null : ctx.matchData.team2Id));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !(ctx.matchData == null ? null : ctx.matchData.winnerTeamId));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx.matchData == null ? null : ctx.matchData.team1Logo, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("color", ctx.getFontColorForTeam1());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx.matchData == null ? null : ctx.matchData.team1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("color", ctx.getFontColorForTeam1());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" (", ctx.Team1TotalUsers(ctx.fetchBotDetails, ctx.matchData), " bets) ", ctx.team1points, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](17, 33, ctx.matchData == null ? null : ctx.matchData.startDatetime, "medium"), " IST ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx.matchData == null ? null : ctx.matchData.venue, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx.matchData == null ? null : ctx.matchData.team2Logo, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("color", ctx.getFontColorForTeam2());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx.matchData == null ? null : ctx.matchData.team2, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("color", ctx.getFontColorForTeam2());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", ctx.team2points, " ( ", ctx.Team2TotalUsers(ctx.fetchBotDetails, ctx.matchData), " bets)");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](36, _c4));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatSuffix"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__["DefaultStyleDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__["DefaultClassDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap\");\r\nbody[_ngcontent-%COMP%] {\r\n  background: linear-gradient(to right, #fdeff9, #ec38bc, #7303c0, #03001e);\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Montserrat\", sans-serif;\r\n  \r\n  background-size: cover;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-attachment: fixed;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  height: auto;\r\n  align-self: flex-start;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n  \r\n  \r\n  \r\n  transform: translate(-4%, 5%);\r\n  width: auto;\r\n  min-width: 600px;\r\n  background: rgba(255, 255, 255, 0.5);\r\n  border-radius: 10px;\r\n  overflow: hidden;\r\n  transition: 0.5s;\r\n  box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.2);\r\n  height: auto;\r\n  margin-bottom: 40px;\r\n  margin-top: 20px;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  \r\n}\r\n.left[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 0%;\r\n  left: -120%;\r\n  width: 60%;\r\n  height: 30%;\r\n  transition: 0.5s;\r\n  box-sizing: border-box;\r\n  \r\n  transform: skewX(-5deg);\r\n}\r\n.card[_ngcontent-%COMP%]    > .left[_ngcontent-%COMP%] {\r\n  left: -10%;\r\n}\r\n.right[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 0%;\r\n  right: -120%;\r\n  width: 60%;\r\n  height: 30%;\r\n  transition: 0.5s;\r\n  box-sizing: border-box;\r\n  \r\n  transform: skewX(-5deg);\r\n}\r\n.card[_ngcontent-%COMP%]    > .right[_ngcontent-%COMP%] {\r\n  right: -9%;\r\n}\r\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 20px;\r\n  text-align: center;\r\n  box-sizing: border-box;\r\n  transition: 0.5s;\r\n}\r\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  background: #ff0057;\r\n  color: #fff;\r\n}\r\n.match-details[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  \r\n}\r\n.versus[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  height: 50px;\r\n  font-size: 24px;\r\n  border-radius: 50%;\r\n  background: #e91e63;\r\n  color: #fff;\r\n  text-align: center;\r\n  line-height: 50px;\r\n  margin: 20px auto;\r\n}\r\n.date[_ngcontent-%COMP%] {\r\n  margin: 20px 0 0;\r\n}\r\n.team1[_ngcontent-%COMP%] {\r\n  width: 180px;\r\n  float: left;\r\n  padding: 10px 15px 0px;\r\n  box-sizing: border-box;\r\n  text-align: center;\r\n}\r\n.team2[_ngcontent-%COMP%] {\r\n  width: 180px;\r\n  float: left;\r\n  padding: 10px 15px 0px;\r\n  box-sizing: border-box;\r\n  text-align: center;\r\n}\r\n.team1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .team2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.details[_ngcontent-%COMP%] {\r\n  width: auto;\r\n  min-width: 39%;\r\n  min-height: 200px;\r\n  height: auto;\r\n  float: left;\r\n  text-align: center;\r\n}\r\nh3.team-name[_ngcontent-%COMP%] {\r\n  padding: 15px 0 0;\r\n  \r\n  text-align: right;\r\n  transition: 0.5s;\r\n  margin-top: 40px;\r\n  \r\n}\r\nh3.team-points[_ngcontent-%COMP%] {\r\n  \r\n  \r\n  text-align: right;\r\n  transition: 0.5s;\r\n  \r\n  \r\n}\r\n.team1[_ngcontent-%COMP%]   h3.team-name[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n}\r\n.team1[_ngcontent-%COMP%]   h3.team-points[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n}\r\n.card[_ngcontent-%COMP%]   .team1[_ngcontent-%COMP%]   h3.team-name[_ngcontent-%COMP%] {\r\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\r\n  font-size: large;\r\n}\r\n.card[_ngcontent-%COMP%]   .team2[_ngcontent-%COMP%]   h3.team-name[_ngcontent-%COMP%] {\r\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\r\n  font-size: large;\r\n}\r\n\r\n.parent-container[_ngcontent-%COMP%] {\r\n  background-color: #353535;\r\n  padding-top: 50px;\r\n  padding-bottom: 50px;\r\n}\r\n.main-container[_ngcontent-%COMP%] {\r\n  padding: 0px;\r\n  padding-bottom: 20px;\r\n  background-color: #292929;\r\n  border: 1px solid gray;\r\n  border-radius: 10px;\r\n}\r\n.conatiner-header[_ngcontent-%COMP%] {\r\n  color: white;\r\n  background-color: #16191c;\r\n  padding: 10px 10px;\r\n  font-size: 20px;\r\n  border-radius: 10px 10px 0px 0px;\r\n}\r\n.inner-conatiner[_ngcontent-%COMP%] {\r\n  padding: 5px;\r\n  background-color: #383737;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background-color: #333333;\r\n}\r\n.highlight[_ngcontent-%COMP%] {\r\n  background-color: #282850;\r\n  font-size: 15px;\r\n  color: #fff;\r\n}\r\n.evenrow[_ngcontent-%COMP%] {\r\n  background-color: #3b3a3a;\r\n}\r\ntd[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n}\r\n.mat-row[_ngcontent-%COMP%]:hover {\r\n  background-color: #311f1f;\r\n}\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\nmat-paginator[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  background: #282850;\r\n}\r\n.mat-cell[_ngcontent-%COMP%] {\r\n  padding-right: 10px;\r\n}\r\n@media only screen and (max-width: 480px) {\r\n  \r\n\r\n  .card[_ngcontent-%COMP%] {\r\n    transform: translate(-4%, 5%);\r\n    width: 320px;\r\n    min-width: 310px;\r\n    background: rgba(255, 255, 255, 0.5);\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    transition: 0.5s;\r\n    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.2);\r\n    height: 310px;\r\n    margin: 30px;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    \r\n  }\r\n\r\n  .left[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0%;\r\n    left: -120%;\r\n    width: 60%;\r\n    height: 30%;\r\n    transition: 0.5s;\r\n    box-sizing: border-box;\r\n    \r\n    transform: skewX(-5deg);\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%]    > .left[_ngcontent-%COMP%] {\r\n    left: -10%;\r\n  }\r\n\r\n  .right[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0%;\r\n    right: -100%;\r\n    width: 60%;\r\n    height: 30%;\r\n    transition: 0.5s;\r\n    box-sizing: border-box;\r\n    \r\n    transform: skewX(-5deg);\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%]    > .right[_ngcontent-%COMP%] {\r\n    right: -9%;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    margin: 0;\r\n    padding: 20px;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n    transition: 0.5s;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    background: #ff0057;\r\n    color: #fff;\r\n    font-size: 1rem;\r\n    \r\n  }\r\n\r\n  .match-details[_ngcontent-%COMP%] {\r\n    position: relative;\r\n  }\r\n\r\n  .versus[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n    height: 35px;\r\n    font-size: 1rem;\r\n    border-radius: 50%;\r\n    background: #e91e63;\r\n    color: #fff;\r\n    text-align: center;\r\n    margin-bottom: 10px;\r\n    margin-top: 10px;\r\n    line-height: 2.3;\r\n  }\r\n\r\n  .date[_ngcontent-%COMP%] {\r\n    margin: 20px 0 0;\r\n    font-size: 0.6rem;\r\n    line-height: 1.5;\r\n    width: 100%;\r\n  }\r\n\r\n  .team1[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    float: left;\r\n    padding: 10px 20px 20px;\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n  }\r\n\r\n  .venue[_ngcontent-%COMP%] {\r\n    font-size: 0.6rem;\r\n    line-height: 1;\r\n  }\r\n\r\n  .team2[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    float: left;\r\n    padding: 10px 20px 20px;\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n  }\r\n\r\n  .team1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .team2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .details[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n    min-height: 20%;\r\n    min-width: 36%;\r\n    float: left;\r\n    text-align: center;\r\n  }\r\n\r\n  h3.team-name[_ngcontent-%COMP%] {\r\n    padding: 15px 0 0;\r\n    \r\n    text-align: right;\r\n    transition: 0.5s;\r\n    margin-top: 75px;\r\n    \r\n    font-size: 0.7rem;\r\n    line-height: 1;\r\n  }\r\n\r\n  h3.team-points[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    text-align: right;\r\n    transition: 0.5s;\r\n    \r\n    \r\n    line-height: 1.4;\r\n    font-size: 0.7rem;\r\n  }\r\n\r\n  .team1[_ngcontent-%COMP%]   h3.team-name[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    font-size: 0.7rem;\r\n    font-family: \"Montserrat\", sans-serif;\r\n    font-weight: bolder;\r\n  }\r\n\r\n  .team1[_ngcontent-%COMP%]   h3.team-points[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    font-size: 0.7rem;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%]   .team1[_ngcontent-%COMP%]   h3.team-name[_ngcontent-%COMP%] {\r\n    font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\r\n    font-size: large;\r\n    font-size: 0.7rem;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%]   .team2[_ngcontent-%COMP%]   h3.team-name[_ngcontent-%COMP%] {\r\n    font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\r\n    font-size: large;\r\n    font-size: 0.7rem;\r\n  }\r\n}\r\n.profile-picture[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  height: 40px;\r\n  width: 40px;\r\n  background-color: orange;\r\n  \r\n  \r\n}\r\n.inside-td[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\ntd[_ngcontent-%COMP%]{\r\n  padding: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctb2xkLW1hdGNoZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyR0FBMkc7QUFDM0c7RUFDRSx5RUFBeUU7RUFDekUsU0FBUztFQUNULFVBQVU7RUFDVixxQ0FBcUM7RUFDckMsd0NBQXdDO0VBQ3hDLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsY0FBYztFQUNkLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsK0NBQStDO0VBQy9DLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscURBQXFEO0FBQ3ZEO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjtBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlDQUFpQztBQUNuQztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSx3RUFBd0U7RUFDeEUsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSx3RUFBd0U7RUFDeEUsZ0JBQWdCO0FBQ2xCO0FBRUEsa0JBQWtCO0FBRWxCO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsV0FBVztBQUNiO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0U7aUVBQytEOztFQUUvRDtJQUNFLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQiwrQ0FBK0M7SUFDL0MsYUFBYTtJQUNiLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixxREFBcUQ7RUFDdkQ7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsbUNBQW1DO0lBQ25DLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkMsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztJQUNYLFNBQVM7SUFDVCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGVBQWU7SUFDZixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsa0JBQWtCO0VBQ3BCOztFQUVBOztJQUVFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixxQ0FBcUM7SUFDckMsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHdFQUF3RTtJQUN4RSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usd0VBQXdFO0lBQ3hFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7QUFDRjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQiw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoidmlldy1vbGQtbWF0Y2hlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczoyMDAsMzAwLDQwMCw1MDAsNjAwLDcwMCw4MDAsOTAwJmRpc3BsYXk9c3dhcFwiKTtcclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmRlZmY5LCAjZWMzOGJjLCAjNzMwM2MwLCAjMDMwMDFlKTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgLyogYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL3N0YWRpdW0nKTsgKi9cclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbiAgLyogdG9wOiA1MCU7ICovXHJcbiAgLyogbGVmdDogMjUlOyAqL1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00JSwgNSUpO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1pbi13aWR0aDogNjAwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIC8qIGJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpOyAqL1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMCU7XHJcbiAgbGVmdDogLTEyMCU7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBoZWlnaHQ6IDMwJTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLyogYm9yZGVyLXRvcDogNXB4IHNvbGlkICM0MzAwNjQ7ICovXHJcbiAgdHJhbnNmb3JtOiBza2V3WCgtNWRlZyk7XHJcbn1cclxuXHJcbi5jYXJkID4gLmxlZnQge1xyXG4gIGxlZnQ6IC0xMCU7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMCU7XHJcbiAgcmlnaHQ6IC0xMjAlO1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgaGVpZ2h0OiAzMCU7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8qIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZWY5YjBmOyAqL1xyXG4gIHRyYW5zZm9ybTogc2tld1goLTVkZWcpO1xyXG59XHJcblxyXG4uY2FyZCA+IC5yaWdodCB7XHJcbiAgcmlnaHQ6IC05JTtcclxufVxyXG5cclxuLmNhcmQgaDIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5jYXJkIGgyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmYwMDU3O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubWF0Y2gtZGV0YWlscyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qIGNvbG9yOiBibGFjazsgKi9cclxufVxyXG5cclxuLnZlcnN1cyB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogI2U5MWU2MztcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbn1cclxuXHJcbi5kYXRlIHtcclxuICBtYXJnaW46IDIwcHggMCAwO1xyXG59XHJcblxyXG4udGVhbTEge1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHggMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGVhbTIge1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHggMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGVhbTEgaW1nLFxyXG4udGVhbTIgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5kZXRhaWxzIHtcclxuICB3aWR0aDogYXV0bztcclxuICBtaW4td2lkdGg6IDM5JTtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oMy50ZWFtLW5hbWUge1xyXG4gIHBhZGRpbmc6IDE1cHggMCAwO1xyXG4gIC8qIG1hcmdpbi1ib3R0b206IDE1cHg7ICovXHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIC8qIHRleHQtZGVjb3JhdGlvbjogMTBweCBzb2xpZDsgKi9cclxufVxyXG5cclxuaDMudGVhbS1wb2ludHMge1xyXG4gIC8qIHBhZGRpbmc6IDE1cHggMCAwOyAqL1xyXG4gIC8qIG1hcmdpbi1ib3R0b206IDE1cHg7ICovXHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICAvKiBtYXJnaW4tdG9wOiA0MHB4OyAqL1xyXG4gIC8qIHRleHQtZGVjb3JhdGlvbjogMTBweCBzb2xpZDsgKi9cclxufVxyXG5cclxuLnRlYW0xIGgzLnRlYW0tbmFtZSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnRlYW0xIGgzLnRlYW0tcG9pbnRzIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uY2FyZCAudGVhbTEgaDMudGVhbS1uYW1lIHtcclxuICBmb250LWZhbWlseTogXCJGcmFua2xpbiBHb3RoaWMgTWVkaXVtXCIsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi5jYXJkIC50ZWFtMiBoMy50ZWFtLW5hbWUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuLyogZGlzcGxheSB0YWJsZSAqL1xyXG5cclxuLnBhcmVudC1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTM1MzU7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uY29uYXRpbmVyLWhlYWRlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjE5MWM7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcclxufVxyXG5cclxuLmlubmVyLWNvbmF0aW5lciB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzODM3Mzc7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG59XHJcblxyXG4uaGlnaGxpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODUwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmV2ZW5yb3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjNhM2E7XHJcbn1cclxuXHJcbnRkIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm1hdC1yb3c6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTFmMWY7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1wYWdpbmF0b3Ige1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICMyODI4NTA7XHJcbn1cclxuXHJcbi5tYXQtY2VsbCB7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC8qIFNUWUxFUyBIRVJFIGZvciBCUk9XU0VSIFdJTkRPV1Mgd2l0aCBhIG1heC13aWR0aCBvZiA0ODBweC5cclxuICAgICAgIFRoaXMgd2lsbCB3b3JrIG9uIGRlc2t0b3BzIHdoZW4gdGhlIHdpbmRvdyBpcyBuYXJyb3dlZC4gICovXHJcblxyXG4gIC5jYXJkIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00JSwgNSUpO1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgaGVpZ2h0OiAzMTBweDtcclxuICAgIG1hcmdpbjogMzBweDtcclxuICB9XHJcblxyXG4gIC5jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAvKiBib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTsgKi9cclxuICB9XHJcblxyXG4gIC5sZWZ0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMCU7XHJcbiAgICBsZWZ0OiAtMTIwJTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLyogYm9yZGVyLXRvcDogNXB4IHNvbGlkICM0MzAwNjQ7ICovXHJcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC01ZGVnKTtcclxuICB9XHJcblxyXG4gIC5jYXJkID4gLmxlZnQge1xyXG4gICAgbGVmdDogLTEwJTtcclxuICB9XHJcblxyXG4gIC5yaWdodCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDAlO1xyXG4gICAgcmlnaHQ6IC0xMDAlO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAvKiBib3JkZXItdG9wOiA1cHggc29saWQgI2VmOWIwZjsgKi9cclxuICAgIHRyYW5zZm9ybTogc2tld1goLTVkZWcpO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQgPiAucmlnaHQge1xyXG4gICAgcmlnaHQ6IC05JTtcclxuICB9XHJcblxyXG4gIC5jYXJkIGgyIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQgaDIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmMDA1NztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgLyogbGluZS1oZWlnaHQ6IDE7ICovXHJcbiAgfVxyXG5cclxuICAubWF0Y2gtZGV0YWlscyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAudmVyc3VzIHtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogI2U5MWU2MztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMi4zO1xyXG4gIH1cclxuXHJcbiAgLmRhdGUge1xyXG4gICAgbWFyZ2luOiAyMHB4IDAgMDtcclxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnRlYW0xIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDIwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnZlbnVlIHtcclxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgfVxyXG5cclxuICAudGVhbTIge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAudGVhbTEgaW1nLFxyXG4gIC50ZWFtMiBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuZGV0YWlscyB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbWluLWhlaWdodDogMjAlO1xyXG4gICAgbWluLXdpZHRoOiAzNiU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIGgzLnRlYW0tbmFtZSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDAgMDtcclxuICAgIC8qIG1hcmdpbi1ib3R0b206IDE1cHg7ICovXHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOiAxMHB4IHNvbGlkOyAqL1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICB9XHJcblxyXG4gIGgzLnRlYW0tcG9pbnRzIHtcclxuICAgIC8qIHBhZGRpbmc6IDE1cHggMCAwOyAqL1xyXG4gICAgLyogbWFyZ2luLWJvdHRvbTogMTVweDsgKi9cclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIC8qIG1hcmdpbi10b3A6IDFweDsgKi9cclxuICAgIC8qIHRleHQtZGVjb3JhdGlvbjogMTBweCBzb2xpZDsgKi9cclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICB9XHJcblxyXG4gIC50ZWFtMSBoMy50ZWFtLW5hbWUge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB9XHJcblxyXG4gIC50ZWFtMSBoMy50ZWFtLXBvaW50cyB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgfVxyXG5cclxuICAuY2FyZCAudGVhbTEgaDMudGVhbS1uYW1lIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgfVxyXG5cclxuICAuY2FyZCAudGVhbTIgaDMudGVhbS1uYW1lIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvZmlsZS1waWN0dXJlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICAvKiBkaXNwbGF5OiBub25lOyAqL1xyXG4gIC8qIGJvcmRlcjogbm9uZSFpbXBvcnRhbnQ7ICovXHJcbn1cclxuXHJcbi5pbnNpZGUtdGR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRke1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "9vxe":
/*!***************************************************!*\
  !*** ./src/app/common/service/bot/bot.service.ts ***!
  \***************************************************/
/*! exports provided: BotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotService", function() { return BotService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _constants_http_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/http-urls */ "74hc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




// let contestBaseURL = 'http://localhost:8081/contest';
// let contestBaseURL = 'http://localhost:8080/contest';
class BotService {
    constructor(http) {
        this.http = http;
    }
    viewAllContestByMatchId(matchId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["matchBaseURL"] + '/' + matchId + '/contest', { observe: 'response' }).toPromise();
        });
    }
    viewAllContestByUserAndMatchId(userId, matchId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["usersBaseURL"] + '/' + userId + '/contest/' + matchId, { observe: 'response' }).toPromise();
        });
    }
    addBet(botModel) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["contestBaseURL"], botModel, { observe: 'response' }).toPromise();
        });
    }
    updateBet(contestId, botModel) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.put(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["contestBaseURL"] + '/' + contestId, botModel, { observe: 'response' }).toPromise();
        });
    }
}
BotService.ɵfac = function BotService_Factory(t) { return new (t || BotService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
BotService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BotService, factory: BotService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AYzf":
/*!*********************************************************!*\
  !*** ./src/app/user/my-matches/my-matches.component.ts ***!
  \*********************************************************/
/*! exports provided: MyMatchesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMatchesComponent", function() { return MyMatchesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/components/loading/loading.component */ "4cPp");
/* harmony import */ var src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/components/snackbar/snackbar.component */ "j7cY");
/* harmony import */ var src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/constants/error-message */ "jsD4");
/* harmony import */ var src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/constants/snackbar-properties */ "fc4o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_service_bot_bot_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/service/bot/bot.service */ "9vxe");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_common_service_matches_service_matches_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/common/service/matches_service/matches.service */ "gD1G");
/* harmony import */ var src_app_common_service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/common/service/login_state/loginstate.service */ "1d9a");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");














function MyMatchesComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No Upcoming Matches, Please Place Bets to Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MyMatchesComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MyMatchesComponent_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const upcomingmatches_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.gotoBettingPage(upcomingmatches_r6.matchId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "VS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const upcomingmatches_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", upcomingmatches_r6.team1Short ? ctx_r1.teamColor[upcomingmatches_r6.team1Short] : ctx_r1.teamColor.t1)("border-top", upcomingmatches_r6.team1Short ? ctx_r1.borderTop[upcomingmatches_r6.team1Short] : ctx_r1.borderTop.t1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", upcomingmatches_r6.team2Short ? ctx_r1.teamColor[upcomingmatches_r6.team2Short] : ctx_r1.teamColor.t2)("border-top", upcomingmatches_r6.team2Short ? ctx_r1.borderTop[upcomingmatches_r6.team2Short] : ctx_r1.borderTop.t2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", upcomingmatches_r6 == null ? null : upcomingmatches_r6.team1Short, " vs ", upcomingmatches_r6 == null ? null : upcomingmatches_r6.team2Short, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", upcomingmatches_r6 == null ? null : upcomingmatches_r6.team1Logo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", upcomingmatches_r6.team1Short ? ctx_r1.teamFontColor[upcomingmatches_r6.team1Short] : ctx_r1.teamFontColor.t1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", upcomingmatches_r6 == null ? null : upcomingmatches_r6.team1Short, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](13, 20, upcomingmatches_r6 == null ? null : upcomingmatches_r6.startDatetime, "short"), " IST ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", upcomingmatches_r6 == null ? null : upcomingmatches_r6.venue, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", upcomingmatches_r6 == null ? null : upcomingmatches_r6.team2Logo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", upcomingmatches_r6.team2Short ? ctx_r1.teamFontColor[upcomingmatches_r6.team2Short] : ctx_r1.teamFontColor.t2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", upcomingmatches_r6 == null ? null : upcomingmatches_r6.team2Short, " ");
} }
function MyMatchesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No Live Match Available, Please Come back later");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MyMatchesComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "VS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const livematch_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "view-live-match/", livematch_r9.matchId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", livematch_r9.team1Short ? ctx_r3.teamColor[livematch_r9.team1Short] : ctx_r3.teamColor.t1)("border-top", livematch_r9.team1Short ? ctx_r3.borderTop[livematch_r9.team1Short] : ctx_r3.borderTop.t1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", livematch_r9.team2Short ? ctx_r3.teamColor[livematch_r9.team2Short] : ctx_r3.teamColor.t2)("border-top", livematch_r9.team2Short ? ctx_r3.borderTop[livematch_r9.team2Short] : ctx_r3.borderTop.t2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", livematch_r9 == null ? null : livematch_r9.team1Short, " vs ", livematch_r9 == null ? null : livematch_r9.team2Short, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", livematch_r9 == null ? null : livematch_r9.team1Logo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", livematch_r9.team1Short ? ctx_r3.teamFontColor[livematch_r9.team1Short] : ctx_r3.teamFontColor.t1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", livematch_r9 == null ? null : livematch_r9.team1Short, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](13, 21, livematch_r9 == null ? null : livematch_r9.startDatetime, "short"), " IST ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", livematch_r9 == null ? null : livematch_r9.venue, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", livematch_r9 == null ? null : livematch_r9.team2Logo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", livematch_r9.team2Short ? ctx_r3.teamFontColor[livematch_r9.team2Short] : ctx_r3.teamFontColor.t2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", livematch_r9 == null ? null : livematch_r9.team2Short, " ");
} }
function MyMatchesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No Matches are played yet, wait for the first match");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MyMatchesComponent_div_10_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const oldmatches_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Winner : ", oldmatches_r10.winnerTeamName, " ");
} }
function MyMatchesComponent_div_10_h2_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Draw / Cancelled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MyMatchesComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, MyMatchesComponent_div_10_h2_3_Template, 2, 1, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, MyMatchesComponent_div_10_h2_4_Template, 2, 0, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "VS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const oldmatches_r10 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "view-old-match/", oldmatches_r10.matchId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", oldmatches_r10.team1Short ? ctx_r5.teamColor[oldmatches_r10.team1Short] : ctx_r5.teamColor.t1)("border-top", oldmatches_r10.team1Short ? ctx_r5.borderTop[oldmatches_r10.team1Short] : ctx_r5.borderTop.t1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", oldmatches_r10.team2Short ? ctx_r5.teamColor[oldmatches_r10.team2Short] : ctx_r5.teamColor.t2)("border-top", oldmatches_r10.team2Short ? ctx_r5.borderTop[oldmatches_r10.team2Short] : ctx_r5.borderTop.t2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", oldmatches_r10.winnerTeamName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !oldmatches_r10.winnerTeamName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", oldmatches_r10 == null ? null : oldmatches_r10.team1Logo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", oldmatches_r10.team1Short ? ctx_r5.teamFontColor[oldmatches_r10.team1Short] : ctx_r5.teamFontColor.t1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", oldmatches_r10 == null ? null : oldmatches_r10.team1Short, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](13, 21, oldmatches_r10 == null ? null : oldmatches_r10.startDatetime, "short"), " IST ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", oldmatches_r10 == null ? null : oldmatches_r10.venue, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", oldmatches_r10 == null ? null : oldmatches_r10.team2Logo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", oldmatches_r10.team2Short ? ctx_r5.teamFontColor[oldmatches_r10.team2Short] : ctx_r5.teamFontColor.t2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", oldmatches_r10 == null ? null : oldmatches_r10.team2Short, " ");
} }
class MyMatchesComponent {
    constructor(botservice, snackbar, dialog, matchservice, loginStateService, router) {
        var _a, _b;
        this.botservice = botservice;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.matchservice = matchservice;
        this.loginStateService = loginStateService;
        this.router = router;
        this.teamColor = {
            CSK: "#ff0",
            DC: "#2561ae",
            GT: "#00416a",
            KKR: "#7300ab",
            LSG: "#ace5ee",
            MI: "#004f91",
            PBKS: "#ed1f27",
            RR: "RGB(37 ,74 ,165)",
            RCB: "#d5152c",
            SRH: "#f7a721",
            //in case if the ids of the above teams changes, default colors will be used
            t1: 'pink',
            t2: 'silver' //
        };
        this.teamFontColor = {
            CSK: "black",
            DC: "#fff",
            GT: "#fff",
            KKR: "#fff",
            LSG: "black",
            MI: "#fff",
            PBKS: "#fff",
            RR: "white",
            RCB: "#fff",
            SRH: "black",
            //in case if the ids of the above teams changes, default colors will be used
            t1: 'black',
            t2: 'black' //
        };
        this.borderTop = {
            CSK: "5px solid #ef9b0f",
            DC: "5px solid #4B9CD3",
            GT: "5px solid #1d2951",
            KKR: "5px solid #430064",
            LSG: "5px solid #9bc4e2",
            MI: "5px solid blue",
            PBKS: "5px solid #af002a",
            RR: "5px solid #1877F2",
            RCB: "5px solid #800000",
            SRH: "5px solid #F05E23",
            //in case if the ids of the above teams changes, default colors will be used
            t1: 'pink',
            t2: 'silver' //
        };
        this.upcoming = "../assets/img/upcoming.jpg";
        this.loginState = this.loginStateService.getLoginState();
        this.userId = (_a = this.loginState) === null || _a === void 0 ? void 0 : _a.userId;
        this.role = (_b = this.loginState) === null || _b === void 0 ? void 0 : _b.role;
        this.un = this.loginState.username;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.upcomingMatches = yield this.UpcomingMatches(this.userId);
            // console.log(this.upcomingMatches);
            this.liveMatch = yield this.LiveMatch(this.userId);
            // console.log(this.liveMatch);
            this.oldMatches = yield this.MatchResult(this.userId);
            // console.log(this.oldMatches);
        });
    }
    // UPCOMING MATCHES
    UpcomingMatches(userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let panelClass = 'green';
            let snackbarMsg = '';
            let snackbarRef = null;
            const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], { disableClose: true });
            let upcomingMatches = [];
            let resp = null;
            try {
                resp = yield this.matchservice.upcomingMatches(userId);
                upcomingMatches = resp.body;
                if (upcomingMatches) {
                    dialogRef.close();
                    return upcomingMatches;
                }
                else {
                    snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_3__["NO_RESP"];
                    panelClass = 'red';
                }
            }
            catch (ex) {
                snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_3__["getErrorMessage"])(ex);
                panelClass = 'red';
            }
            finally {
                dialogRef.close();
            }
            if (snackbarMsg) {
                snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_4__["getSnackbarProperties"])(snackbarMsg, panelClass));
            }
            return [];
        });
    }
    // LIVE MATCH
    LiveMatch(userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let panelClass = 'green';
            let snackbarMsg = '';
            let snackbarRef = null;
            const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], { disableClose: true });
            let liveMatch = [];
            let resp = null;
            try {
                resp = yield this.matchservice.liveMatch(userId);
                liveMatch = resp.body;
                if (liveMatch) {
                    dialogRef.close();
                    return liveMatch;
                }
                else {
                    snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_3__["NO_RESP"];
                    panelClass = 'red';
                }
            }
            catch (ex) {
                snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_3__["getErrorMessage"])(ex);
                panelClass = 'red';
            }
            finally {
                dialogRef.close();
            }
            if (snackbarMsg) {
                snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_4__["getSnackbarProperties"])(snackbarMsg, panelClass));
            }
            return [];
        });
    }
    // OLD MATCHES RESULTS
    MatchResult(userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let panelClass = 'green';
            let snackbarMsg = '';
            let snackbarRef = null;
            const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], { disableClose: true });
            let oldMatches = [];
            let resp = null;
            try {
                resp = yield this.matchservice.allMatchResult(userId);
                oldMatches = resp.body;
                if (oldMatches) {
                    dialogRef.close();
                    return oldMatches;
                }
                else {
                    snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_3__["NO_RESP"];
                    panelClass = 'red';
                }
            }
            catch (ex) {
                snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_3__["getErrorMessage"])(ex);
                panelClass = 'red';
            }
            finally {
                dialogRef.close();
            }
            if (snackbarMsg) {
                snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_4__["getSnackbarProperties"])(snackbarMsg, panelClass));
            }
            return [];
        });
    }
    gotoBettingPage(id) {
        // this.location.replaceState('');
        this.router.navigate([this.role + `/match-list/betting-page/${id}`]);
    }
}
MyMatchesComponent.ɵfac = function MyMatchesComponent_Factory(t) { return new (t || MyMatchesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_common_service_bot_bot_service__WEBPACK_IMPORTED_MODULE_6__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_common_service_matches_service_matches_service__WEBPACK_IMPORTED_MODULE_9__["MatchesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_common_service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_10__["LoginstateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"])); };
MyMatchesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MyMatchesComponent, selectors: [["app-my-matches"]], decls: 11, vars: 6, consts: [[1, "pt-0", "pb-0", "mt-0", "mb-0"], ["mat-align-tabs", "center"], ["label", "Upcoming"], ["class", "alt", 4, "ngIf"], ["class", "card", 3, "click", 4, "ngFor", "ngForOf"], ["label", "Live"], ["class", "card", 3, "routerLink", 4, "ngFor", "ngForOf"], ["label", "Results"], [1, "alt"], [1, "card", 3, "click"], [1, "left"], [1, "right"], [1, "match-details"], [1, "team1"], ["loading", "lazy", 2, "border-radius", "50%", 3, "src"], [1, "team-name"], [1, "details"], [1, "date"], [1, "versus"], [1, "venue"], [1, "team2"], [1, "card", 3, "routerLink"], [4, "ngIf"]], template: function MyMatchesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-tab-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, MyMatchesComponent_div_3_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, MyMatchesComponent_div_4_Template, 22, 23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, MyMatchesComponent_div_6_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, MyMatchesComponent_div_7_Template, 22, 24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, MyMatchesComponent_div_9_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, MyMatchesComponent_div_10_Template, 22, 24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.upcomingMatches == null ? null : ctx.upcomingMatches.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.upcomingMatches);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.liveMatch == null ? null : ctx.liveMatch.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.liveMatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.oldMatches == null ? null : ctx.oldMatches.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.oldMatches);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');\r\nbody[_ngcontent-%COMP%] {\r\n    \r\n    background: linear-gradient(to right, #01a9ac, #1c1f9b);\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Montserrat', sans-serif;\r\n    \r\n    background-size: cover;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    height: auto;\r\n    align-self: flex-start;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    left: 5%;\r\n    transform: translate(-4%, 5%);\r\n    width: auto;\r\n    min-width: 650px;\r\n    background: rgba(255, 255, 255, 0.5);\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    transition: 0.5s;\r\n    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.2);\r\n    height: auto;\r\n    margin: 40px;\r\n    cursor: pointer;\r\n    \r\n}\r\n.card[_ngcontent-%COMP%]:hover {\r\n    background: #fff;\r\n    \r\n}\r\n.left[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0%;\r\n    left: -120%;\r\n    width: 60%;\r\n    height: 30%;\r\n    transition: 0.5s;\r\n    box-sizing: border-box;\r\n    \r\n    transform: skewX(-5deg);\r\n}\r\n.card[_ngcontent-%COMP%]:hover > .left[_ngcontent-%COMP%] {\r\n    left: -10%;\r\n}\r\n.right[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0%;\r\n    right: -120%;\r\n    width: 60%;\r\n    height: 30%;\r\n    transition: 0.5s;\r\n    box-sizing: border-box;\r\n    \r\n    transform: skewX(-5deg);\r\n}\r\n.card[_ngcontent-%COMP%]:hover > .right[_ngcontent-%COMP%] {\r\n    right: -9%;\r\n}\r\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    margin: 0;\r\n    padding: 20px;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n    transition: 0.5s;\r\n}\r\n.card[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%] {\r\n    background: #ff0057;\r\n    color: #fff;\r\n}\r\n.match-details[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    \r\n}\r\n.versus[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    height: 50px;\r\n    font-size: 24px;\r\n    border-radius: 50%;\r\n    background: #e91e63;\r\n    color: #fff;\r\n    text-align: center;\r\n    line-height: 50px;\r\n    margin: 20px auto;\r\n}\r\n.date[_ngcontent-%COMP%] {\r\n    margin: 20px 0 0;\r\n}\r\n.team1[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    float: left;\r\n    padding: 10px 20px 20px;\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n    height: auto;\r\n}\r\n.team2[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    float: left;\r\n    padding: 10px 20px 20px;\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n    height: auto;\r\n}\r\n.team1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .team2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 150px;\r\n    height: auto;\r\n}\r\n.details[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    min-width: 39%;\r\n    min-height: 200px;\r\n    float: left;\r\n    text-align: center;\r\n    height: auto;\r\n}\r\nh3.team-name[_ngcontent-%COMP%] {\r\n    padding: 15px 0 0;\r\n    \r\n    text-align: right;\r\n    transition: 0.5s;\r\n    margin-top: 40px;\r\n    \r\n}\r\n.team1[_ngcontent-%COMP%]   h3.team-name[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n}\r\n.card[_ngcontent-%COMP%]:hover   .team1[_ngcontent-%COMP%]   h3.team-name[_ngcontent-%COMP%] {\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    font-size: large;\r\n}\r\n.card[_ngcontent-%COMP%]:hover   .team2[_ngcontent-%COMP%]   h3.team-name[_ngcontent-%COMP%] {\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    font-size: large;\r\n}\r\nmat-tab-group[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    \r\n    min-height: 90vh;\r\n}\r\n.mat-tab-body-content[_ngcontent-%COMP%] {\r\n    overflow-y: hidden;\r\n}\r\n.alt[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    margin-top: 40%;\r\n}\r\n@media only screen and (max-width: 480px) {\r\n    \r\n\r\n       .card[_ngcontent-%COMP%] {\r\n        transform: translate(-4%, 5%);\r\n        width: 270px;\r\n        background: rgba(255, 255, 255, 0.5);\r\n        border-radius: 10px;\r\n        overflow: hidden;\r\n        transition: 0.5s;\r\n        box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.2);\r\n        height: 310px;\r\n        margin: 30px;\r\n    }\r\n    \r\n    .card[_ngcontent-%COMP%] {\r\n        background: #fff;\r\n        min-width: 270px;\r\n        \r\n    }\r\n    \r\n    .left[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        bottom: 0%;\r\n        left: -120%;\r\n        width: 60%;\r\n        height: 30%;\r\n        transition: 0.5s;\r\n        box-sizing: border-box;\r\n        \r\n        transform: skewX(-5deg);\r\n    }\r\n    \r\n    .card[_ngcontent-%COMP%] > .left[_ngcontent-%COMP%] {\r\n        left: -10%;\r\n    }\r\n    \r\n    .right[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        bottom: 0%;\r\n        right: -100%;\r\n        width: 60%;\r\n        height: 30%;\r\n        transition: 0.5s;\r\n        box-sizing: border-box;\r\n        \r\n        transform: skewX(-5deg);\r\n    }\r\n    \r\n    .card[_ngcontent-%COMP%] > .right[_ngcontent-%COMP%] {\r\n        right: -9%;\r\n    }\r\n    \r\n    .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        width: auto;\r\n        margin: 0;\r\n        padding: 20px;\r\n        text-align: center;\r\n        box-sizing: border-box;\r\n        transition: 0.5s;\r\n    }\r\n    \r\n    .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        background: #ff0057;\r\n        color: #fff;\r\n    }\r\n    \r\n    .match-details[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        \r\n    }\r\n    \r\n    .versus[_ngcontent-%COMP%] {\r\n        width: 35px;\r\n        height: 35px;\r\n        font-size: 1rem;\r\n        border-radius: 50%;\r\n        background: #e91e63;\r\n        color: #fff;\r\n        text-align: center;\r\n        margin-bottom: 10px;\r\n        margin-top: 10px;\r\n        line-height: 2.3;\r\n    }\r\n    \r\n    .date[_ngcontent-%COMP%] {\r\n        margin: 20px 0 0;\r\n        font-size: 0.6rem;\r\n        line-height: 1.5;\r\n        width: 100%;\r\n    }\r\n    \r\n    .team1[_ngcontent-%COMP%] {\r\n        width: 100px;\r\n        float: left;\r\n        padding: 10px 20px 20px;\r\n        box-sizing: border-box;\r\n        text-align: center;\r\n    }\r\n\r\n    .venue[_ngcontent-%COMP%]{\r\n        font-size: 0.6rem;\r\n        line-height: 1;\r\n    }\r\n    \r\n    .team2[_ngcontent-%COMP%] {\r\n        width: 100px;\r\n        float: left;\r\n        padding: 10px 20px 20px;\r\n        box-sizing: border-box;\r\n        text-align: center;\r\n    }\r\n    \r\n    .team1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .team2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n    \r\n    .details[_ngcontent-%COMP%] {\r\n        width: 25%;\r\n        min-height: 20%;\r\n        float: left;\r\n        text-align: center;\r\n        min-width: 0;\r\n    }\r\n    \r\n    h3.team-name[_ngcontent-%COMP%] {\r\n        padding: 15px 0 0;\r\n        \r\n        text-align: right;\r\n        transition: 0.5s;\r\n        margin-top: 75px;\r\n        \r\n        font-size: 0.7rem;\r\n        line-height: 1;\r\n    }\r\n    \r\n    h3.team-points[_ngcontent-%COMP%] {\r\n        \r\n        \r\n        text-align: right;\r\n        transition: 0.5s;\r\n        \r\n        \r\n        font-size: 0.7rem;\r\n    }\r\n    \r\n    .team1[_ngcontent-%COMP%]   h3.team-name[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n        font-size: 0.7rem;\r\n        font-family: 'Montserrat', sans-serif;\r\n        font-weight: bolder;\r\n    }\r\n    \r\n    .team1[_ngcontent-%COMP%]   h3.team-points[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n        font-size: 0.7rem;\r\n    }\r\n    \r\n    .card[_ngcontent-%COMP%]   .team1[_ngcontent-%COMP%]   h3.team-name[_ngcontent-%COMP%] {\r\n        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n        font-size: large;\r\n        font-size: 0.7rem;\r\n    }\r\n    \r\n    .card[_ngcontent-%COMP%]   .team2[_ngcontent-%COMP%]   h3.team-name[_ngcontent-%COMP%] {\r\n        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n        font-size: large;\r\n        font-size: 0.7rem;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LW1hdGNoZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyR0FBMkc7QUFDM0c7SUFDSSwrQkFBK0I7SUFDL0IsdURBQXVEO0lBQ3ZELFNBQVM7SUFDVCxVQUFVO0lBQ1YscUNBQXFDO0lBQ3JDLHdDQUF3QztJQUN4QyxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxRQUFRO0lBQ1IsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLCtDQUErQztJQUMvQyxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixxREFBcUQ7QUFDekQ7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkMsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkMsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztBQUNmO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUVBOztJQUVJLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUNBQWlDO0FBQ3JDO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLHdFQUF3RTtJQUN4RSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLHdFQUF3RTtJQUN4RSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBR0E7SUFDSTtpRUFDNkQ7O09BRTFEO1FBQ0MsNkJBQTZCO1FBQzdCLFlBQVk7UUFDWixvQ0FBb0M7UUFDcEMsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsK0NBQStDO1FBQy9DLGFBQWE7UUFDYixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixxREFBcUQ7SUFDekQ7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFdBQVc7UUFDWCxVQUFVO1FBQ1YsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixzQkFBc0I7UUFDdEIsbUNBQW1DO1FBQ25DLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsWUFBWTtRQUNaLFVBQVU7UUFDVixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLHNCQUFzQjtRQUN0QixtQ0FBbUM7UUFDbkMsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksV0FBVztRQUNYLFNBQVM7UUFDVCxhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLHNCQUFzQjtRQUN0QixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsV0FBVztJQUNmOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFlBQVk7UUFDWixXQUFXO1FBQ1gsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUN0QixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsY0FBYztJQUNsQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixXQUFXO1FBQ1gsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUN0QixrQkFBa0I7SUFDdEI7O0lBRUE7O1FBRUksV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsZUFBZTtRQUNmLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQix5QkFBeUI7UUFDekIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsaUNBQWlDO1FBQ2pDLGlCQUFpQjtRQUNqQixjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksdUJBQXVCO1FBQ3ZCLHlCQUF5QjtRQUN6QixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQixpQ0FBaUM7UUFDakMsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixxQ0FBcUM7UUFDckMsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLHdFQUF3RTtRQUN4RSxnQkFBZ0I7UUFDaEIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksd0VBQXdFO1FBQ3hFLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7O0FBRUoiLCJmaWxlIjoibXktbWF0Y2hlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjIwMCwzMDAsNDAwLDUwMCw2MDAsNzAwLDgwMCw5MDAmZGlzcGxheT1zd2FwJyk7XHJcbmJvZHkge1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzNiM2EzYTsgKi9cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAxYTlhYywgIzFjMWY5Yik7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9zdGFkaXVtJyk7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbiAgICAvKiB0b3A6IDUwJTsgKi9cclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQlLCA1JSk7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1pbi13aWR0aDogNjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogNDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8qIG1hcmdpbi1ib3R0b206IDQwcHg7ICovXHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAvKiBib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTsgKi9cclxufVxyXG5cclxuLmxlZnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwJTtcclxuICAgIGxlZnQ6IC0xMjAlO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAvKiBib3JkZXItdG9wOiA1cHggc29saWQgIzQzMDA2NDsgKi9cclxuICAgIHRyYW5zZm9ybTogc2tld1goLTVkZWcpO1xyXG59XHJcblxyXG4uY2FyZDpob3Zlcj4ubGVmdCB7XHJcbiAgICBsZWZ0OiAtMTAlO1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwJTtcclxuICAgIHJpZ2h0OiAtMTIwJTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLyogYm9yZGVyLXRvcDogNXB4IHNvbGlkICNlZjliMGY7ICovXHJcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC01ZGVnKTtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXI+LnJpZ2h0IHtcclxuICAgIHJpZ2h0OiAtOSU7XHJcbn1cclxuXHJcbi5jYXJkIGgyIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciBoMiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmYwMDU3O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5tYXRjaC1kZXRhaWxzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8qIGNvbG9yOiBibGFjazsgKi9cclxufVxyXG5cclxuLnZlcnN1cyB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICNlOTFlNjM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbn1cclxuXHJcbi5kYXRlIHtcclxuICAgIG1hcmdpbjogMjBweCAwIDA7XHJcbn1cclxuXHJcbi50ZWFtMSB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDIwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4udGVhbTIge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnRlYW0xIGltZyxcclxuLnRlYW0yIGltZyB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5kZXRhaWxzIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWluLXdpZHRoOiAzOSU7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5oMy50ZWFtLW5hbWUge1xyXG4gICAgcGFkZGluZzogMTVweCAwIDA7XHJcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAxNXB4OyAqL1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIC8qIHRleHQtZGVjb3JhdGlvbjogMTBweCBzb2xpZDsgKi9cclxufVxyXG5cclxuLnRlYW0xIGgzLnRlYW0tbmFtZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciAudGVhbTEgaDMudGVhbS1uYW1lIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIC50ZWFtMiBoMy50ZWFtLW5hbWUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxubWF0LXRhYi1ncm91cCB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIC8qIGhlaWdodDogODIuM3ZoOyAqL1xyXG4gICAgbWluLWhlaWdodDogOTB2aDtcclxufVxyXG5cclxuLm1hdC10YWItYm9keS1jb250ZW50IHtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG5cclxuLmFsdCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IDQwJTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC8qIFNUWUxFUyBIRVJFIGZvciBCUk9XU0VSIFdJTkRPV1Mgd2l0aCBhIG1heC13aWR0aCBvZiA0ODBweC4gXHJcbiAgICAgICBUaGlzIHdpbGwgd29yayBvbiBkZXNrdG9wcyB3aGVuIHRoZSB3aW5kb3cgaXMgbmFycm93ZWQuICAqL1xyXG5cclxuICAgICAgIC5jYXJkIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNCUsIDUlKTtcclxuICAgICAgICB3aWR0aDogMjcwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICAgIGhlaWdodDogMzEwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBtaW4td2lkdGg6IDI3MHB4O1xyXG4gICAgICAgIC8qIGJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpOyAqL1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubGVmdCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMCU7XHJcbiAgICAgICAgbGVmdDogLTEyMCU7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBoZWlnaHQ6IDMwJTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgLyogYm9yZGVyLXRvcDogNXB4IHNvbGlkICM0MzAwNjQ7ICovXHJcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgtNWRlZyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYXJkPi5sZWZ0IHtcclxuICAgICAgICBsZWZ0OiAtMTAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucmlnaHQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDAlO1xyXG4gICAgICAgIHJpZ2h0OiAtMTAwJTtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIGhlaWdodDogMzAlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAvKiBib3JkZXItdG9wOiA1cHggc29saWQgI2VmOWIwZjsgKi9cclxuICAgICAgICB0cmFuc2Zvcm06IHNrZXdYKC01ZGVnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQ+LnJpZ2h0IHtcclxuICAgICAgICByaWdodDogLTklO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FyZCBoMiB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQgaDIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZjAwNTc7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYXRjaC1kZXRhaWxzIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLyogY29sb3I6IGJsYWNrOyAqL1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudmVyc3VzIHtcclxuICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTkxZTYzO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuMztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRhdGUge1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAwIDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRlYW0xIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4IDIwcHg7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnZlbnVle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGVhbTIge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRlYW0xIGltZyxcclxuICAgIC50ZWFtMiBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRldGFpbHMge1xyXG4gICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgbWluLWhlaWdodDogMjAlO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtaW4td2lkdGg6IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGgzLnRlYW0tbmFtZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAwIDA7XHJcbiAgICAgICAgLyogbWFyZ2luLWJvdHRvbTogMTVweDsgKi9cclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgICAgICAgLyogdGV4dC1kZWNvcmF0aW9uOiAxMHB4IHNvbGlkOyAqL1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoMy50ZWFtLXBvaW50cyB7XHJcbiAgICAgICAgLyogcGFkZGluZzogMTVweCAwIDA7ICovXHJcbiAgICAgICAgLyogbWFyZ2luLWJvdHRvbTogMTVweDsgKi9cclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgIC8qIG1hcmdpbi10b3A6IDFweDsgKi9cclxuICAgICAgICAvKiB0ZXh0LWRlY29yYXRpb246IDEwcHggc29saWQ7ICovXHJcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50ZWFtMSBoMy50ZWFtLW5hbWUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGVhbTEgaDMudGVhbS1wb2ludHMge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYXJkIC50ZWFtMSBoMy50ZWFtLW5hbWUge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FyZCAudGVhbTIgaDMudGVhbS1uYW1lIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIH1cclxuXHJcbn0iXX0= */"] });


/***/ }),

/***/ "B46U":
/*!******************************************************************************!*\
  !*** ./src/app/user/user-profile/update-profile/update-profile.component.ts ***!
  \******************************************************************************/
/*! exports provided: UpdateProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfileComponent", function() { return UpdateProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/components/loading/loading.component */ "4cPp");
/* harmony import */ var src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/components/snackbar/snackbar.component */ "j7cY");
/* harmony import */ var src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/constants/error-message */ "jsD4");
/* harmony import */ var src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/constants/snackbar-properties */ "fc4o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_service_user_service_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/service/user_service/user.service */ "2/mB");
/* harmony import */ var src_app_common_service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/common/service/login_state/loginstate.service */ "1d9a");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_common_model_user_user_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/common/model/user/user-model */ "LqFS");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_components_file_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular-material-components/file-input */ "OC/Z");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ "FKr1");























function UpdateProfileComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "first name is reqiured ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UpdateProfileComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "first name must have atleast 4 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UpdateProfileComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "first name must have less than 100 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UpdateProfileComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "first name is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UpdateProfileComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "last name is reqiured ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UpdateProfileComponent_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "last name must have atleast 4 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UpdateProfileComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "last name must have less than 100 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UpdateProfileComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "last name is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UpdateProfileComponent_mat_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gender_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", gender_r14.genderId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", gender_r14.name, " ");
} }
function UpdateProfileComponent_mat_error_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "email is reqiured ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UpdateProfileComponent_mat_error_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "email must have less than 200 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UpdateProfileComponent_mat_error_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "email is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UpdateProfileComponent_mat_error_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "phone no. is reqiured");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UpdateProfileComponent_mat_error_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " phone no. is invalid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
class UpdateProfileComponent {
    constructor(fb, userService, loginStateService, snackbar, dialog, router, matDialogRef, data) {
        var _a, _b, _c, _d, _e, _f, _g;
        this.fb = fb;
        this.userService = userService;
        this.loginStateService = loginStateService;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.router = router;
        this.matDialogRef = matDialogRef;
        this.data = data;
        this.gender = [{ genderId: 1, name: "Male" }, { genderId: 2, name: "Female" }];
        this.userModel = data;
        // console.log(this.userModel);
        this.userForm = this.fb.group({
            // userId: [{ value: this.userModel.userId, disabled: true }],
            username: [{ value: (_a = this.data) === null || _a === void 0 ? void 0 : _a.username, disabled: true }],
            // , Validators.pattern('[a-zA-Z ]+')
            genderId: [(_b = this.data) === null || _b === void 0 ? void 0 : _b.genderId],
            // , [Validators.required, Validators.minLength(1), Validators.maxLength(1), Validators.pattern('[1-2]+')]
            firstname: [(_c = this.data) === null || _c === void 0 ? void 0 : _c.firstName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]+')]],
            lastname: [(_d = this.data) === null || _d === void 0 ? void 0 : _d.lastName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]+')]],
            mobilenumber: [(_e = this.data) === null || _e === void 0 ? void 0 : _e.mobileNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[1-9][0-9]{9}')]],
            email: [(_f = this.data) === null || _f === void 0 ? void 0 : _f.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            profilePicture: [(_g = this.data) === null || _g === void 0 ? void 0 : _g.profilePicture]
            // , [Validators.required, Validators.minLength(4), Validators.maxLength(500)]
        });
    }
    ngOnInit() { }
    get form() {
        return this.userForm.controls;
    }
    updateUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.userForm.valid) {
                // this.userModel.firstName = this.form.firstname.value;
                // this.userModel.lastName = this.form.lastname.value;
                // this.userModel.mobileNumber = this.form.mobilenumber.value;
                // this.userModel.email = this.form.email.value;
                const loginState = this.loginStateService.getLoginState();
                var formData = new FormData();
                formData.append("username", this.form.username.value);
                formData.append("firstName", this.form.firstname.value);
                formData.append("lastName", this.form.lastname.value);
                formData.append("email", this.form.email.value);
                formData.append("mobileNumber", this.form.mobilenumber.value);
                formData.append("genderId", this.form.genderId.value);
                formData.append("profilePicture", this.form.profilePicture.value);
                let panelClass = 'green';
                let snackbarMsg = '';
                let snackbarRef = null;
                this.snackbar.dismiss();
                const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], { disableClose: true });
                let resp = null;
                try {
                    resp = yield this.userService.updateUser(this.userModel.userId, formData);
                    this.userModel = resp.body;
                    if (this.userModel != null) {
                        snackbarMsg = 'Profile successfully updated';
                        this.matDialogRef.close(this.userModel);
                        // this.loginStateService.destroySession(loginState.role);
                        // this.router.navigate(['/login']);
                    }
                    else {
                        snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_5__["NO_RESP"];
                        panelClass = 'red';
                    }
                }
                catch (ex) {
                    snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_5__["getErrorMessage"])(ex);
                    panelClass = 'red';
                }
                finally {
                    dialogRef.close();
                    if (snackbarMsg) {
                        // location.reload();
                        snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_6__["getSnackbarProperties"])(snackbarMsg, panelClass));
                    }
                }
            }
        });
    }
    closeDialogBox() {
        this.matDialogRef.close();
    }
}
UpdateProfileComponent.ɵfac = function UpdateProfileComponent_Factory(t) { return new (t || UpdateProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_common_service_user_service_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_common_service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_9__["LoginstateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"], 8)); };
UpdateProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: UpdateProfileComponent, selectors: [["app-update-profile"]], decls: 64, vars: 15, consts: [[1, "sub-container-1-inner"], [3, "formGroup", "ngSubmit"], [1, "title"], [1, "signup-container"], [1, "first"], [1, "field-container"], ["appearance", "fill", "color", "accent"], ["matInput", "", "formControlName", "username", "autocomplete", "off"], ["matInput", "", "formControlName", "firstname", "autocomplete", "off"], [4, "ngIf"], ["matInput", "", "formControlName", "lastname", "autocomplete", "off"], ["formControlName", "genderId"], [3, "value", 4, "ngFor", "ngForOf"], [1, "second"], ["formControlName", "profilePicture"], ["color", "accent", "ngxMatFileInputIcon", ""], ["matInput", "", "formControlName", "email", "autocomplete", "off"], ["matInput", "", "formControlName", "mobilenumber", "autocomplete", "off"], [1, "action-container"], ["mat-raised-button", "", "color", "accent", "type", "submit"], ["type", "reset", "mat-raised-button", "", "color", "warn", 3, "click"], [3, "value"]], template: function UpdateProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function UpdateProfileComponent_Template_form_ngSubmit_1_listener() { return ctx.updateUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "User Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, UpdateProfileComponent_mat_error_17_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, UpdateProfileComponent_mat_error_18_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, UpdateProfileComponent_mat_error_19_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, UpdateProfileComponent_mat_error_20_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, UpdateProfileComponent_mat_error_26_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, UpdateProfileComponent_mat_error_27_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, UpdateProfileComponent_mat_error_28_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, UpdateProfileComponent_mat_error_29_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, UpdateProfileComponent_mat_option_35_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Profile Pic");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "ngx-mat-file-input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "folder");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](48, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, UpdateProfileComponent_mat_error_49_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, UpdateProfileComponent_mat_error_50_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, UpdateProfileComponent_mat_error_51_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "Phone no.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](56, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](57, UpdateProfileComponent_mat_error_57_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](58, UpdateProfileComponent_mat_error_58_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UpdateProfileComponent_Template_button_click_62_listener() { return ctx.closeDialogBox(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.firstname.errors == null ? null : ctx.form.firstname.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.firstname.errors == null ? null : ctx.form.firstname.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.firstname.errors == null ? null : ctx.form.firstname.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.firstname.errors == null ? null : ctx.form.firstname.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.firstname.errors == null ? null : ctx.form.firstname.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.lastname.errors == null ? null : ctx.form.lastname.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.lastname.errors == null ? null : ctx.form.lastname.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.lastname.errors == null ? null : ctx.form.lastname.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.email.errors == null ? null : ctx.form.email.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.email.errors == null ? null : ctx.form.email.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.email.errors == null ? null : ctx.form.email.errors.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.mobilenumber.errors == null ? null : ctx.form.mobilenumber.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.form.mobilenumber.errors == null ? null : ctx.form.mobilenumber.errors.minlength) || (ctx.form.mobilenumber.errors == null ? null : ctx.form.mobilenumber.errors.maxlength) || (ctx.form.mobilenumber.errors == null ? null : ctx.form.mobilenumber.errors.pattern));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_material_components_file_input__WEBPACK_IMPORTED_MODULE_17__["NgxMatFileInputComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_material_components_file_input__WEBPACK_IMPORTED_MODULE_17__["NgxMatFileInputIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatOption"]], styles: [".sub-container-1-inner[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.signup-container[_ngcontent-%COMP%] {\r\n    background-color: rgb(17, 72, 82);\r\n    display: flex;\r\n}\r\n\r\n.first[_ngcontent-%COMP%] {\r\n    padding: 30px 30px 10px 60px;\r\n}\r\n\r\n.first[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-weight: lighter;\r\n    font-family: Agency Fb;\r\n    font-size: 40px;\r\n    letter-spacing: 3px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.second[_ngcontent-%COMP%] {\r\n    padding: 30px 60px 10px 30px;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n    margin: 10px auto;\r\n    display: blocks;\r\n    width: 300px;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n\r\n.mat-raised-button[_ngcontent-%COMP%] {\r\n    margin: 30px auto;\r\n}\r\n\r\n.action-container[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n    padding-right: 50px;\r\n    background-color: rgb(130, 214, 240);\r\n}\r\n\r\n.action-container[_ngcontent-%COMP%] > .mat-raised-button[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    background-color: rgb(130, 214, 240);\r\n    padding: 10px 0px;\r\n    font-size: 18px;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    .sub-container-1-inner[_ngcontent-%COMP%] {\r\n        height: 90vh;\r\n        width: 230px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: flex-start;\r\n        text-align: center;\r\n    }\r\n\r\n    .title[_ngcontent-%COMP%] {\r\n        background-color: rgb(130, 214, 240);\r\n        padding: 10px 0px;\r\n        font-size: 18px;\r\n        width: auto;\r\n        align-items: center;\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .signup-container[_ngcontent-%COMP%] {\r\n        background-color: rgb(17, 72, 82);\r\n        display: flex;\r\n        flex-direction: column;\r\n        height: 90%;\r\n        overflow-y: auto;\r\n        width: auto;\r\n    }\r\n\r\n    .first[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n    }\r\n\r\n    .second[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n    }\r\n\r\n    .action-container[_ngcontent-%COMP%] {\r\n        background-color: rgb(130, 214, 240);\r\n        width: auto;\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: center;\r\n        align-items: center;\r\n    }\r\n\r\n    .mat-form-field[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n        display: blocks;\r\n        width: auto;\r\n    }\r\n\r\n    .action-container[_ngcontent-%COMP%] > .mat-raised-button[_ngcontent-%COMP%] {\r\n        margin: 5px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBOztJQUVJO1FBQ0ksWUFBWTtRQUNaLFlBQVk7UUFDWixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksb0NBQW9DO1FBQ3BDLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxpQ0FBaUM7UUFDakMsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLG9DQUFvQztRQUNwQyxXQUFXO1FBQ1gsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksU0FBUztRQUNULGVBQWU7UUFDZixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7QUFDSiIsImZpbGUiOiJ1cGRhdGUtcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Yi1jb250YWluZXItMS1pbm5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2lnbnVwLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcsIDcyLCA4Mik7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZmlyc3Qge1xyXG4gICAgcGFkZGluZzogMzBweCAzMHB4IDEwcHggNjBweDtcclxufVxyXG5cclxuLmZpcnN0IHAge1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBmb250LWZhbWlseTogQWdlbmN5IEZiO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uc2Vjb25kIHtcclxuICAgIHBhZGRpbmc6IDMwcHggNjBweCAxMHB4IDMwcHg7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrcztcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIGlucHV0IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMzBweCBhdXRvO1xyXG59XHJcblxyXG4uYWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMwLCAyMTQsIDI0MCk7XHJcbn1cclxuXHJcbi5hY3Rpb24tY29udGFpbmVyPi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMwLCAyMTQsIDI0MCk7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cclxuICAgIC5zdWItY29udGFpbmVyLTEtaW5uZXIge1xyXG4gICAgICAgIGhlaWdodDogOTB2aDtcclxuICAgICAgICB3aWR0aDogMjMwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzAsIDIxNCwgMjQwKTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWdudXAtY29udGFpbmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcsIDcyLCA4Mik7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmZpcnN0IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWNvbmQge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGlvbi1jb250YWluZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzAsIDIxNCwgMjQwKTtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBkaXNwbGF5OiBibG9ja3M7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGlvbi1jb250YWluZXI+Lm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "GtJQ":
/*!**************************************************************************************************!*\
  !*** ./src/app/user/user-profile/view-others-user-profile/view-others-user-profile.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ViewOthersUserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewOthersUserProfileComponent", function() { return ViewOthersUserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/components/loading/loading.component */ "4cPp");
/* harmony import */ var src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/components/snackbar/snackbar.component */ "j7cY");
/* harmony import */ var src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/constants/error-message */ "jsD4");
/* harmony import */ var src_app_common_constants_links__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/constants/links */ "IV7L");
/* harmony import */ var src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/constants/snackbar-properties */ "fc4o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_common_service_user_service_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/service/user_service/user.service */ "2/mB");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_common_service_statistics_user_statictics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/common/service/statistics/user-statictics.service */ "+IU6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");













class ViewOthersUserProfileComponent {
    constructor(route, userservice, dialog, snackbar, userstats) {
        this.route = route;
        this.userservice = userservice;
        this.dialog = dialog;
        this.snackbar = snackbar;
        this.userstats = userstats;
        this.profile = src_app_common_constants_links__WEBPACK_IMPORTED_MODULE_4__["otherUser"];
        this.userStats = [];
        this.userFutureBets = [];
        // usersWinningLosingPoints!:UsersWinningModel;
        this.showForm = false;
    }
    newform() {
        this.showForm = !this.showForm;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.params.subscribe(data => {
                this.userId = data.id;
            });
            // this.userFutureBets = await this.getUsersFutureContest();
            // console.log(this.userFutureBets);
            // this.userStats = await this.getUserStats();
            // console.log(this.userStats);
            this.userData = yield this.getUsers();
            // console.log(this.userData);
            // this.usersWinningLosingPoints = await this.getUserWinningPoints();
            // console.log(this.usersWinningLosingPoints);
            this.usersWinningLoosingPoints = yield this.getUserWinningAndLosingPoints();
            // console.log(this.usersWinningLoosingPoints);
        });
    }
    findsum(data) {
        data.forEach((element) => {
            let obj = this.userFutureBets.find(o => o.userId == element.userId);
            if (obj)
                element.availablePoints += obj.contestPoints;
        });
    }
    // GET USERS FUTURE BETS AND CURRENT POINTS
    // a= this.userStats.find(data => data.userId == this.userId)?.availablePoints;
    // const index = this.userStats.findIndex(data => data.userId == this.userId);
    // this.userStats[index].availablePoints;
    getUserStats() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let panelClass = 'green';
            let snackbarMsg = '';
            let snackbarRef = null;
            const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], { disableClose: true });
            let userModel = [];
            let resp = null;
            try {
                resp = yield this.userstats.getUserStatsById(this.userId);
                userModel = resp.body;
                this.findsum(userModel);
                if (userModel) {
                    dialogRef.close();
                    return userModel;
                }
                else {
                    snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_3__["NO_RESP"];
                    panelClass = 'red';
                }
            }
            catch (ex) {
                snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_3__["getErrorMessage"])(ex);
                panelClass = 'red';
            }
            finally {
                dialogRef.close();
            }
            if (snackbarMsg) {
                snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_5__["getSnackbarProperties"])(snackbarMsg, panelClass));
            }
            return [];
        });
    }
    // USERS FUTURE Bet
    getUsersFutureContest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let panelClass = 'green';
            let snackbarMsg = '';
            let snackbarRef = null;
            const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], { disableClose: true });
            let userFutureBets = [];
            let resp = null;
            try {
                resp = yield this.userstats.getUserFutureBetsById(this.userId);
                userFutureBets = resp.body;
                if (userFutureBets) {
                    dialogRef.close();
                    return userFutureBets;
                }
                else {
                    snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_3__["NO_RESP"];
                    panelClass = 'red';
                }
            }
            catch (ex) {
                snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_3__["getErrorMessage"])(ex);
                panelClass = 'red';
            }
            finally {
                dialogRef.close();
            }
            if (snackbarMsg) {
                snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_5__["getSnackbarProperties"])(snackbarMsg, panelClass));
            }
            return [];
        });
    }
    getUsers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let panelClass = 'green';
            let snackbarMsg = '';
            let snackbarRef = null;
            const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], { disableClose: true });
            let userModel = [];
            let resp = null;
            try {
                resp = yield this.userservice.getUserById(this.userId);
                userModel = resp.body;
                if (userModel) {
                    dialogRef.close();
                    return userModel;
                }
                else {
                    snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_3__["NO_RESP"];
                    panelClass = 'red';
                }
            }
            catch (ex) {
                snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_3__["getErrorMessage"])(ex);
                panelClass = 'red';
            }
            finally {
                dialogRef.close();
            }
            if (snackbarMsg) {
                snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_5__["getSnackbarProperties"])(snackbarMsg, panelClass));
            }
            return [];
        });
    }
    // GET USER STATISTICS
    getUserWinningAndLosingPoints() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let panelClass = 'green';
            let snackbarMsg = '';
            let snackbarRef = null;
            const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], { disableClose: true });
            let usersWinningLosingPoints = [];
            let resp = null;
            try {
                resp = yield this.userstats.getUserWinningLosingPoint(this.userId);
                usersWinningLosingPoints = resp.body;
                if (usersWinningLosingPoints) {
                    dialogRef.close();
                    return usersWinningLosingPoints;
                }
                else {
                    snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_3__["NO_RESP"];
                    panelClass = 'red';
                }
            }
            catch (ex) {
                snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_3__["getErrorMessage"])(ex);
                panelClass = 'red';
            }
            finally {
                dialogRef.close();
            }
            if (snackbarMsg) {
                snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_5__["getSnackbarProperties"])(snackbarMsg, panelClass));
            }
            return [];
        });
    }
}
ViewOthersUserProfileComponent.ɵfac = function ViewOthersUserProfileComponent_Factory(t) { return new (t || ViewOthersUserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_common_service_user_service_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_common_service_statistics_user_statictics_service__WEBPACK_IMPORTED_MODULE_11__["UserStaticticsService"])); };
ViewOthersUserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ViewOthersUserProfileComponent, selectors: [["app-view-others-user-profile"]], decls: 36, vars: 16, consts: [[1, "wrapper"], [1, "left"], ["loading", "lazy", 3, "src", "alt"], [1, "right"], [1, "projects"], [1, "projects_data"], [1, "data"], [1, "blue"], [1, "green"], [1, "green", "p_lower"], [1, "red"], [1, "red", "p_lower"], [1, "social_media"]], template: function ViewOthersUserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Bet history");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Available Points");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Winning Points");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Loosing Points");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-image", "url(" + ctx.profile + ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", ctx.userData == null ? null : ctx.userData.profilePicture, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("alt", ctx.userData.firstName.substr(0, 1) + ctx.userData.lastName.substr(0, 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 12, ctx.userData == null ? null : ctx.userData.firstName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 14, ctx.userData == null ? null : ctx.userData.lastName), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" @", ctx.userData == null ? null : ctx.userData.username, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.userData == null ? null : ctx.userData.availablePoints, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.usersWinningLoosingPoints == null ? null : ctx.usersWinningLoosingPoints.winningPoints, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" (", ctx.usersWinningLoosingPoints == null ? null : ctx.usersWinningLoosingPoints.numberOfWinningMatches, " Matches) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.usersWinningLoosingPoints == null ? null : ctx.usersWinningLoosingPoints.losingPoints, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" (", ctx.usersWinningLoosingPoints == null ? null : ctx.usersWinningLoosingPoints.numberOfLosingMatches, " Matches) ");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["UpperCasePipe"]], styles: ["*[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    list-style: none;\r\n    \r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    background: #1954a1;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: 650px;\r\n    display: flex;\r\n    box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\r\n    width: 35%;\r\n    background: linear-gradient(to right, #01a9ac, #01dbdf);\r\n    padding: 30px 25px;\r\n    border-top-left-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n    background-color: orange;\r\n    width: 100%;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n    width: 35%;\r\n    background: #fff;\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n    padding: 30px 25px;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%] {\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px;\r\n    padding-bottom: 5px;\r\n    border-bottom: 1px solid #e0e0e0;\r\n    color: #353c4e;\r\n    text-transform: uppercase;\r\n    letter-spacing: 5px;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info_data[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .projects_data[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    align-content: center;\r\n\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info_data[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .projects_data[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\r\n    width: 45%;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info_data[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .projects_data[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    color: #353c4e;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n    .wrapper[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        width: auto;\r\n        \r\n        display: flex;\r\n        box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);\r\n    }\r\n}\r\n\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info_data[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    margin-bottom: 10px;\r\n    color: #919aa3;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n    width: 65%;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   .social_media[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   .social_media[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    width: 45px;\r\n    height: 45px;\r\n    background: linear-gradient(to right, #01a9ac, #01dbdf);\r\n    margin-right: 10px;\r\n    border-radius: 5px;\r\n    line-height: 45px;\r\n    text-align: center;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   .social_media[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    display: block;\r\n    font-size: 18px;\r\n}\r\n\r\n.matbtn[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n    background: linear-gradient(to right, #01a9ac, #01dbdf);\r\n}\r\n\r\n.emicon[_ngcontent-%COMP%] {\r\n    background: linear-gradient(to right, #01a9ac, #01dbdf);\r\n}\r\n\r\n.blue[_ngcontent-%COMP%] {\r\n    color: #1954a1;\r\n    font-weight: 500;\r\n}\r\n\r\n.green[_ngcontent-%COMP%] {\r\n    color: green;\r\n    font-weight: 500;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.red[_ngcontent-%COMP%] {\r\n    color: red;\r\n    font-weight: 500;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.p_lower[_ngcontent-%COMP%]{\r\n    margin-top: 0;\r\n    padding-top:0;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    body[_ngcontent-%COMP%]{\r\n        min-height: 90vh;\r\n    }\r\n\r\n    .wrapper[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        top: 50%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        width: 300px;\r\n        \r\n        display: flex;\r\n        box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n    }\r\n \r\n    .wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\r\n        width: 290px;\r\n        background: linear-gradient(to right, #01a9ac, #01dbdf);\r\n        padding: 30px 25px;\r\n        border-top-left-radius: 5px;\r\n        border-top-right-radius: 5px;\r\n        border-bottom-left-radius: 0;\r\n        text-align: center;\r\n        color: #fff;\r\n        height: auto;\r\n    }\r\n    \r\n    .wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n        width: 290px;\r\n        background: #fff;\r\n        border-top-right-radius: 0;\r\n        border-bottom-right-radius: 5px;\r\n        border-bottom-left-radius: 5px;\r\n        padding: 30px 25px;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctb3RoZXJzLXVzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osYUFBYTtJQUNiLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLFVBQVU7SUFDVix1REFBdUQ7SUFDdkQsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0Isa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixxQkFBcUI7O0FBRXpCOztBQUVBOztJQUVJLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFNBQVM7UUFDVCxnQ0FBZ0M7UUFDaEMsV0FBVztRQUNYLHNCQUFzQjtRQUN0QixhQUFhO1FBQ2IsZ0RBQWdEO0lBQ3BEO0FBQ0o7O0FBR0EsNENBQTRDOztBQUU1QztJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1REFBdUQ7SUFDdkQsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVEQUF1RDtBQUMzRDs7QUFFQTtJQUNJLHVEQUF1RDtBQUMzRDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUk7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFNBQVM7UUFDVCxnQ0FBZ0M7UUFDaEMsWUFBWTtRQUNaLHNCQUFzQjtRQUN0QixhQUFhO1FBQ2IsZ0RBQWdEO1FBQ2hELGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLFlBQVk7UUFDWix1REFBdUQ7UUFDdkQsa0JBQWtCO1FBQ2xCLDJCQUEyQjtRQUMzQiw0QkFBNEI7UUFDNUIsNEJBQTRCO1FBQzVCLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsMEJBQTBCO1FBQzFCLCtCQUErQjtRQUMvQiw4QkFBOEI7UUFDOUIsa0JBQWtCO0lBQ3RCOztBQUVKIiwiZmlsZSI6InZpZXctb3RoZXJzLXVzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAvKiBmb250LWZhbWlseTogOyAgICAqL1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQ6ICMxOTU0YTE7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB3aWR0aDogNjUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMjBweCAwIHJnYmEoNjksIDkwLCAxMDAsIDAuMDgpO1xyXG59XHJcblxyXG4ud3JhcHBlciAubGVmdCB7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDFhOWFjLCAjMDFkYmRmKTtcclxuICAgIHBhZGRpbmc6IDMwcHggMjVweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ud3JhcHBlciAubGVmdCBpbWcge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ud3JhcHBlciAubGVmdCBoNCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ud3JhcHBlciAubGVmdCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLndyYXBwZXIgLnJpZ2h0IHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDI1cHg7XHJcbn1cclxuXHJcbi53cmFwcGVyIC5yaWdodCAuaW5mbyxcclxuLndyYXBwZXIgLnJpZ2h0IC5wcm9qZWN0cyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4ud3JhcHBlciAucmlnaHQgLmluZm8gaDMsXHJcbi53cmFwcGVyIC5yaWdodCAucHJvamVjdHMgaDMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcclxuICAgIGNvbG9yOiAjMzUzYzRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbn1cclxuXHJcbi53cmFwcGVyIC5yaWdodCAuaW5mb19kYXRhLFxyXG4ud3JhcHBlciAucmlnaHQgLnByb2plY3RzX2RhdGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4ud3JhcHBlciAucmlnaHQgLmluZm9fZGF0YSAuZGF0YSxcclxuLndyYXBwZXIgLnJpZ2h0IC5wcm9qZWN0c19kYXRhIC5kYXRhIHtcclxuICAgIHdpZHRoOiA0NSU7XHJcbn1cclxuXHJcbi53cmFwcGVyIC5yaWdodCAuaW5mb19kYXRhIC5kYXRhIGg0LFxyXG4ud3JhcHBlciAucmlnaHQgLnByb2plY3RzX2RhdGEgLmRhdGEgaDQge1xyXG4gICAgY29sb3I6ICMzNTNjNGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAvKiBtaW4td2lkdGg6IDY1MHB4OyAqL1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMjBweCAwIHJnYmEoNjksIDkwLCAxMDAsIDAuMDgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyogLC53cmFwcGVyIC5yaWdodCAucHJvamVjdHNfZGF0YSAuZGF0YSBwICovXHJcblxyXG4ud3JhcHBlciAucmlnaHQgLmluZm9fZGF0YSAuZGF0YSBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogIzkxOWFhMztcclxufVxyXG5cclxuLndyYXBwZXIgLmxlZnQgcCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi53cmFwcGVyIC5yaWdodCB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG59XHJcblxyXG4ud3JhcHBlciAuc29jaWFsX21lZGlhIHVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi53cmFwcGVyIC5zb2NpYWxfbWVkaWEgdWwgbGkge1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMWE5YWMsICMwMWRiZGYpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi53cmFwcGVyIC5zb2NpYWxfbWVkaWEgdWwgbGkgYSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4ubWF0YnRuIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAxYTlhYywgIzAxZGJkZik7XHJcbn1cclxuXHJcbi5lbWljb24ge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDFhOWFjLCAjMDFkYmRmKTtcclxufVxyXG5cclxuLmJsdWUge1xyXG4gICAgY29sb3I6ICMxOTU0YTE7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uZ3JlZW4ge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5yZWQge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4ucF9sb3dlcntcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDowO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcbiAgICBib2R5e1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgICB9XHJcblxyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIC8qIG1pbi13aWR0aDogNjUwcHg7ICovXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAyMHB4IDAgcmdiYSg2OSwgOTAsIDEwMCwgMC4wOCk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiBcclxuICAgIC53cmFwcGVyIC5sZWZ0IHtcclxuICAgICAgICB3aWR0aDogMjkwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDFhOWFjLCAjMDFkYmRmKTtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4IDI1cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAud3JhcHBlciAucmlnaHQge1xyXG4gICAgICAgIHdpZHRoOiAyOTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMjVweDtcclxuICAgIH1cclxuXHJcbn0iXX0= */"] });


/***/ }),

/***/ "Kbag":
/*!********************************************************************************************!*\
  !*** ./src/app/user/betting-page/insert-update-contest/insert-update-contest.component.ts ***!
  \********************************************************************************************/
/*! exports provided: InsertUpdateContestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertUpdateContestComponent", function() { return InsertUpdateContestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/components/loading/loading.component */ "4cPp");
/* harmony import */ var src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/components/snackbar/snackbar.component */ "j7cY");
/* harmony import */ var src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/constants/error-message */ "jsD4");
/* harmony import */ var src_app_common_constants_links__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/constants/links */ "IV7L");
/* harmony import */ var src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/constants/snackbar-properties */ "fc4o");
/* harmony import */ var src_app_common_model_bot_BotModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/model/bot/BotModel */ "SLye");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/common/service/login_state/loginstate.service */ "1d9a");
/* harmony import */ var src_app_common_service_bot_bot_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/common/service/bot/bot.service */ "9vxe");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_common_service_user_service_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/common/service/user_service/user.service */ "2/mB");
/* harmony import */ var src_app_common_service_matches_service_matches_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/common/service/matches_service/matches.service */ "gD1G");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "bTqV");























function InsertUpdateContestComponent_div_0_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Bet Points is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function InsertUpdateContestComponent_div_0_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Minimum Points is ", ctx_r3.matchData.minimumPoints, " ");
} }
function InsertUpdateContestComponent_div_0_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function InsertUpdateContestComponent_div_0_mat_error_22_Template_mat_error_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r8.availableContestPointsValidator($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Available Points + Bet Points of This Match = ", ctx_r4.AvailableContestPoints, " ");
} }
function InsertUpdateContestComponent_div_0_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function InsertUpdateContestComponent_div_0_mat_error_23_Template_mat_error_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r10.availablePointsValidator($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Available Points = ", ctx_r5.userData == null ? null : ctx_r5.userData.availablePoints, " ");
} }
function InsertUpdateContestComponent_div_0_button_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Update Bet");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function InsertUpdateContestComponent_div_0_button_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Place Bet");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function InsertUpdateContestComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function InsertUpdateContestComponent_div_0_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r12.PlaceBet(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Select Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "mat-radio-group", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "mat-radio-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "mat-radio-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Bet Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function InsertUpdateContestComponent_div_0_Template_input_change_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r14.minPointsValidator($event); })("change", function InsertUpdateContestComponent_div_0_Template_input_change_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r15.availableContestPointsValidator($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, InsertUpdateContestComponent_div_0_mat_error_18_Template, 2, 0, "mat-error", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, InsertUpdateContestComponent_div_0_mat_error_19_Template, 2, 1, "mat-error", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "mat-error", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function InsertUpdateContestComponent_div_0_Template_mat_error_change_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r16.minPointsValidator($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, InsertUpdateContestComponent_div_0_mat_error_22_Template, 2, 1, "mat-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, InsertUpdateContestComponent_div_0_mat_error_23_Template, 2, 1, "mat-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, InsertUpdateContestComponent_div_0_button_25_Template, 2, 0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, InsertUpdateContestComponent_div_0_button_26_Template, 2, 0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InsertUpdateContestComponent_div_0_Template_span_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r17.closeDialogBox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r0.botForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", (ctx_r0.checkk == null ? null : ctx_r0.checkk.contestPoints) ? "Update Bet" : "Place Bet", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", ctx_r0.matchData == null ? null : ctx_r0.matchData.team1Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", (ctx_r0.matchData == null ? null : ctx_r0.matchData.team1Id) === (ctx_r0.checkk == null ? null : ctx_r0.checkk.teamId));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.matchData == null ? null : ctx_r0.matchData.team1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", ctx_r0.matchData == null ? null : ctx_r0.matchData.team2Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", (ctx_r0.matchData == null ? null : ctx_r0.matchData.team2Id) === (ctx_r0.checkk == null ? null : ctx_r0.checkk.teamId));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.matchData == null ? null : ctx_r0.matchData.team2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.form.contestPoints.errors == null ? null : ctx_r0.form.contestPoints.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.form.contestPoints.errors == null ? null : ctx_r0.form.contestPoints.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Minimum Points is ", ctx_r0.matchData == null ? null : ctx_r0.matchData.minimumPoints, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.botData == null ? null : ctx_r0.botData.contestId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !(ctx_r0.botData == null ? null : ctx_r0.botData.contestId));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.checkk == null ? null : ctx_r0.checkk.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !(ctx_r0.checkk == null ? null : ctx_r0.checkk.userId));
} }
function InsertUpdateContestComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx_r1.teamLoader[ctx_r1.selectedTeamId], _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
} }
class InsertUpdateContestComponent {
    constructor(fb, loginStateService, botservice, dialog, snackbar, userservice, matchservice, matDialogRef, data) {
        var _a;
        this.fb = fb;
        this.loginStateService = loginStateService;
        this.botservice = botservice;
        this.dialog = dialog;
        this.snackbar = snackbar;
        this.userservice = userservice;
        this.matchservice = matchservice;
        this.matDialogRef = matDialogRef;
        this.data = data;
        this.teamLoader = {
            1: src_app_common_constants_links__WEBPACK_IMPORTED_MODULE_6__["csk"],
            2: src_app_common_constants_links__WEBPACK_IMPORTED_MODULE_6__["dc"],
            3: src_app_common_constants_links__WEBPACK_IMPORTED_MODULE_6__["gt"],
            4: src_app_common_constants_links__WEBPACK_IMPORTED_MODULE_6__["kkr"],
            5: src_app_common_constants_links__WEBPACK_IMPORTED_MODULE_6__["lsg"],
            6: src_app_common_constants_links__WEBPACK_IMPORTED_MODULE_6__["mi"],
            7: src_app_common_constants_links__WEBPACK_IMPORTED_MODULE_6__["pbks"],
            8: src_app_common_constants_links__WEBPACK_IMPORTED_MODULE_6__["rr"],
            9: src_app_common_constants_links__WEBPACK_IMPORTED_MODULE_6__["rcb"],
            10: src_app_common_constants_links__WEBPACK_IMPORTED_MODULE_6__["srh"],
            //in case if the ids of the above teams changes, default colors will be used
            t1: 'pink',
            t2: 'silver' //
        };
        this.selectedTeamId = null;
        this.isloading = false;
        this.loginState = this.loginStateService.getLoginState();
        this.botData = data;
        if (data) {
            this.botForm = this.fb.group({
                // contestId: [{ value: this.botData.contestId, disabled: true }],
                // userId: [{value: localStorage.getItem('userId'),disabled:true}],
                matchId: [{ value: this.data.matchId, disabled: true }],
                selectTeam: [this.data.teamId, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                contestPoints: [this.data.contestPoints, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[1-9]{1,}[0-9]{1,3}$')]]
            });
        }
        else {
            this.botForm = this.fb.group({
                // contestId: [{  disabled: true }],
                // userId: [{value: localStorage.getItem('userId'),disabled:true}],
                matchId: [{ value: (_a = this.data) === null || _a === void 0 ? void 0 : _a.matchId, disabled: true }],
                selectTeam: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                contestPoints: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[1-9][0-9]*$')]]
            });
        }
    }
    ngOnInit() {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.matchData = yield this.getMatchById(this.data.matchId);
            // console.log(this.matchData);
            this.checkk = yield this.getPlayersBetByUserAndMatchId(this.loginState.userId, this.data.matchId);
            // console.log(this.checkk);
            this.userData = yield this.getUsersById();
            // console.log(this.userData);
            // this.mPoints = this.matchData.minimumPoints;
            // console.log('this is minimum points : ' +this.mPoints);
            // this.botForm.get('contestPoints')?.valueChanges.subscribe(value => {
            //   this.changedValue = value;
            //   console.log('changed Value : '+this.changedValue);
            // });
            // this.n();
            this.minPointsValidator(this.matchData.minimumPoints);
            this.AvailableContestPoints = ((_a = this.botData) === null || _a === void 0 ? void 0 : _a.contestPoints) + ((_b = this.userData) === null || _b === void 0 ? void 0 : _b.availablePoints);
        });
    }
    minPointsValidator(minimumPoint) {
        var _a;
        const f = this.botForm.controls.contestPoints;
        let cp = (_a = this.botForm.get('contestPoints')) === null || _a === void 0 ? void 0 : _a.value;
        minimumPoint = this.matchData.minimumPoints;
        if (cp < minimumPoint) {
            f.setErrors([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        }
    }
    availableContestPointsValidator(availablePoints) {
        var _a;
        const f = this.botForm.controls.contestPoints;
        let cp = (_a = this.botForm.get('contestPoints')) === null || _a === void 0 ? void 0 : _a.value;
        let userAvailablePoints = this.userData.availablePoints;
        let userContestPointsOfCurrentMatch = this.botData.contestPoints;
        availablePoints = userAvailablePoints + userContestPointsOfCurrentMatch;
        if (cp > availablePoints) {
            f.setErrors([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        }
    }
    availablePointsValidator(availablePoints) {
        var _a;
        const f = this.botForm.controls.contestPoints;
        let cp = (_a = this.botForm.get('contestPoints')) === null || _a === void 0 ? void 0 : _a.value;
        let userAvailablePoints = this.userData.availablePoints;
        if (cp > userAvailablePoints) {
            f.setErrors([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        }
    }
    // n() {
    //   const cp = this.botForm.get('contestPoints');
    //   this.botForm.get('contestPoints')?.valueChanges.subscribe(value => {
    //     console.log('changed Value : ' + value);
    //     if (value < this.matchData.minimumPoints) {
    //       let f=this.matchData.minimumPoints;
    //       cp?.setValidators([Validators.required]);
    //     }else if(value > this.matchData.minimumPoints){
    //       cp?.clearValidators();
    //     }
    //     cp?.updateValueAndValidity();
    //   });
    // if (this.mPoints > this.changedValue) {
    //   this.botForm.controls['constestPoints']?.setErrors({invalidNumber:true});
    // }else{
    //   this.botForm.controls['constestPoints']?.setErrors(null);
    // }
    // }
    // async ngOnChanges(changes: SimpleChanges){
    //   const previousMatchData = <MatchModel>changes.matchData.previousValue;
    //   const currentMatchData = <MatchModel>changes.matchData.currentValue;
    //   console.log('Previous : '+ (previousMatchData ? previousMatchData.minimumPoints : 'NULL'));
    //   console.log('Current : ' +currentMatchData.minimumPoints);
    // }
    getUsersById() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let panelClass = 'green';
            let snackbarMsg = '';
            let snackbarRef = null;
            const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], { disableClose: true });
            let userModel = [];
            let resp = null;
            try {
                resp = yield this.userservice.getUserById(this.loginState.userId);
                userModel = resp.body;
                if (userModel) {
                    dialogRef.close();
                    return userModel;
                }
                else {
                    snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_5__["NO_RESP"];
                    panelClass = 'red';
                }
            }
            catch (ex) {
                snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_5__["getErrorMessage"])(ex);
                panelClass = 'red';
            }
            finally {
                dialogRef.close();
            }
            if (snackbarMsg) {
                snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_7__["getSnackbarProperties"])(snackbarMsg, panelClass));
            }
            return [];
        });
    }
    getMatchById(matchId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let panelClass = 'green';
            let snackbarMsg = '';
            let snackbarRef = null;
            const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], { disableClose: true });
            let matchModel = [];
            let resp = null;
            try {
                resp = yield this.matchservice.viewMatchById(matchId);
                matchModel = resp.body;
                if (matchModel) {
                    dialogRef.close();
                    return matchModel;
                }
                else {
                    snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_5__["NO_RESP"];
                    panelClass = 'red';
                }
            }
            catch (ex) {
                snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_5__["getErrorMessage"])(ex);
                panelClass = 'red';
            }
            finally {
                dialogRef.close();
            }
            if (snackbarMsg) {
                snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_7__["getSnackbarProperties"])(snackbarMsg, panelClass));
            }
            return [];
        });
    }
    // CHECK IF PLAYER HAS PLACED BET
    getPlayersBetByUserAndMatchId(userId, matchId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let panelClass = 'green';
            let snackbarMsg = '';
            let snackbarRef = null;
            const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], { disableClose: true });
            let botModel = [];
            let resp = null;
            try {
                resp = yield this.botservice.viewAllContestByUserAndMatchId(userId, matchId);
                botModel = resp.body;
                if (botModel) {
                    dialogRef.close();
                    return botModel;
                }
                else {
                    snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_5__["NO_RESP"];
                    panelClass = 'red';
                }
            }
            catch (ex) {
                snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_5__["getErrorMessage"])(ex);
                panelClass = 'red';
            }
            finally {
                dialogRef.close();
            }
            // if (snackbarMsg) {
            //   snackbarRef = this.snackbar.openFromComponent(SnackbarComponent,
            //     getSnackbarProperties(snackbarMsg, panelClass));
            // }
            return [];
        });
    }
    reload() {
        location.reload();
    }
    get form() {
        return this.botForm.controls;
    }
    reset(field) {
        this.form[field].setValue('');
    }
    PlaceBet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.botForm.valid) {
                if (!this.botData.contestId) {
                    this.botData = new src_app_common_model_bot_BotModel__WEBPACK_IMPORTED_MODULE_8__["BotModel"]();
                    this.botData.contestId = 0;
                    this.botData.userId = this.loginState.userId;
                    this.botData.matchId = this.data.matchId;
                    this.botData.contestPoints = this.form.contestPoints.value;
                    this.botData.teamId = this.form.selectTeam.value;
                    this.selectedTeamId = this.form.selectTeam.value;
                    // this.botData.winningPoints = 0;
                    let panelClass = 'green';
                    let snackbarMsg = '';
                    let snackbarRef = null;
                    this.snackbar.dismiss();
                    // const dialogRef = this.dialog.open(LoadingComponent, { disableClose: true });
                    this.isloading = true;
                    let resp = null;
                    try {
                        resp = yield this.botservice.addBet(this.botData);
                        this.botData = resp.body;
                        if (this.botData != null) 
                        // && this.botData.contestId > 0
                        {
                            snackbarMsg = 'Bet successfully Placed!';
                            this.matDialogRef.close(this.botData);
                            this.isloading = false;
                            // this.reload();
                        }
                        else {
                            snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_5__["NO_RESP"];
                            panelClass = 'red';
                        }
                    }
                    catch (ex) {
                        snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_5__["getErrorMessage"])(ex);
                        panelClass = 'red';
                    }
                    finally {
                        // dialogRef.close();
                        this.isloading = false;
                        if (snackbarMsg) {
                            snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_7__["getSnackbarProperties"])(snackbarMsg, panelClass));
                        }
                    }
                }
                else {
                    this.botData = new src_app_common_model_bot_BotModel__WEBPACK_IMPORTED_MODULE_8__["BotModel"]();
                    this.botData.contestId = this.botData.contestId;
                    this.botData.userId = this.loginState.userId;
                    this.botData.matchId = this.data.matchId;
                    this.botData.teamId = this.form.selectTeam.value;
                    this.botData.contestPoints = this.form.contestPoints.value;
                    this.selectedTeamId = this.form.selectTeam.value;
                    let panelClass = 'green';
                    let snackbarMsg = '';
                    let snackbarRef = null;
                    this.snackbar.dismiss();
                    // const dialogRef = this.dialog.open(LoadingComponent, { disableClose: true });
                    this.isloading = true;
                    let resp = null;
                    try {
                        resp = yield this.botservice.updateBet(this.data.contestId, this.botData);
                        this.botData = resp.body;
                        if (this.botData != null) {
                            snackbarMsg = 'Bet successfully updated!';
                            this.matDialogRef.close(this.botData);
                            this.isloading = false;
                            // this.reload();
                        }
                        else {
                            snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_5__["NO_RESP"];
                            panelClass = 'red';
                        }
                    }
                    catch (ex) {
                        snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_5__["getErrorMessage"])(ex);
                        panelClass = 'red';
                    }
                    finally {
                        // dialogRef.close();
                        this.isloading = false;
                        if (snackbarMsg) {
                            snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_7__["getSnackbarProperties"])(snackbarMsg, panelClass));
                        }
                    }
                }
            }
        });
    }
    closeDialogBox() {
        this.matDialogRef.close();
    }
}
InsertUpdateContestComponent.ɵfac = function InsertUpdateContestComponent_Factory(t) { return new (t || InsertUpdateContestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_common_service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_10__["LoginstateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_common_service_bot_bot_service__WEBPACK_IMPORTED_MODULE_11__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_common_service_user_service_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_common_service_matches_service_matches_service__WEBPACK_IMPORTED_MODULE_14__["MatchesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"], 8)); };
InsertUpdateContestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: InsertUpdateContestComponent, selectors: [["app-insert-update-contest"]], decls: 2, vars: 2, consts: [["class", "sub-container-1-inner", 4, "ngIf"], [4, "ngIf"], [1, "sub-container-1-inner"], [3, "formGroup", "ngSubmit"], [1, "title"], [1, "field-container"], ["formControlName", "selectTeam"], ["type", "number", 3, "value", "checked"], ["appearance", "fill", "color", "accent"], ["matInput", "", "formControlName", "contestPoints", "type", "number", "autocomplete", "off", 3, "change"], [3, "change"], [3, "change", 4, "ngIf"], [1, "action-container"], ["mat-raised-button", "", "color", "accent", "type", "submit", 4, "ngIf"], ["mat-raised-button", "", 1, "cancel-btn", 3, "click"], ["mat-raised-button", "", "color", "accent", "type", "submit"], ["alt", "", 3, "src"]], template: function InsertUpdateContestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, InsertUpdateContestComponent_div_0_Template, 29, 15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, InsertUpdateContestComponent_div_1_Template, 2, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isloading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isloading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatLabel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"]], styles: [".sub-container-1-inner[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    background: linear-gradient(to right, #fdeff9, #8e86d1);\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n    margin: 10px auto;\r\n    display: blocks;\r\n    width: 300px;\r\n}\r\n\r\nmat-radio-button[_ngcontent-%COMP%] {\r\n    margin: 10px auto;\r\n    display: flex;\r\n    \r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n\r\n.mat-raised-button[_ngcontent-%COMP%] {\r\n    margin: 30px auto;\r\n}\r\n\r\n.action-container[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n    padding-right: 50px;\r\n}\r\n\r\n.action-container[_ngcontent-%COMP%] > .mat-raised-button[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    background: linear-gradient(to right, #dd3e54, #6be585);\r\n    \r\n    padding: 10px 0px;\r\n    font-size: 18px;\r\n}\r\n\r\n.cancel-btn[_ngcontent-%COMP%] {\r\n    background-color: #f44336;\r\n    border-radius: 4px;\r\n    padding: 6px 15px 8px;\r\n    cursor: pointer;\r\n    box-shadow: 1px 1px 1px #1b1d1f;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n   \r\n    .title[_ngcontent-%COMP%] {\r\n        background: linear-gradient(to right, #dd3e54, #6be585);\r\n        \r\n        \r\n        font-size: 0.7rem;\r\n        width: auto;\r\n    }\r\n\r\n    .field-container[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-direction: column;\r\n        width: 100%;\r\n        height: auto;\r\n        font-size: 0.7rem;\r\n    }\r\n \r\n    .mat-form-field[_ngcontent-%COMP%] {\r\n        margin: 10px auto;\r\n        display: blocks;\r\n        width: auto;\r\n    }\r\n    \r\n    .action-container[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n        padding-right: 0;\r\n        display: flex;\r\n        flex-direction: column;\r\n        \r\n    }\r\n    \r\n    .cancel-btn[_ngcontent-%COMP%] {\r\n        \r\n        border-radius: 4px;\r\n        margin: 0 15px 8px;\r\n        cursor: pointer;\r\n        box-shadow: 1px 1px 1px #1b1d1f;\r\n    }\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc2VydC11cGRhdGUtY29udGVzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHVEQUF1RDtBQUMzRDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVEQUF1RDtJQUN2RCwrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsK0JBQStCO0FBQ25DOztBQUVBOztJQUVJO1FBQ0ksdURBQXVEO1FBQ3ZELCtCQUErQjtRQUMvQix1QkFBdUI7UUFDdkIsaUJBQWlCO1FBQ2pCLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsV0FBVztRQUNYLFlBQVk7UUFDWixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsZUFBZTtRQUNmLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSwrQkFBK0I7UUFDL0Isa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsK0JBQStCO0lBQ25DOztBQUVKIiwiZmlsZSI6Imluc2VydC11cGRhdGUtY29udGVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Yi1jb250YWluZXItMS1pbm5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmRlZmY5LCAjOGU4NmQxKTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2tzO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG5tYXQtcmFkaW8tYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qIHdpZHRoOiAzMDBweDsgKi9cclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIGlucHV0IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIGlucHV0IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMzBweCBhdXRvO1xyXG59XHJcblxyXG4uYWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5hY3Rpb24tY29udGFpbmVyPi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNkZDNlNTQsICM2YmU1ODUpO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzBkODA0ODsgKi9cclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uY2FuY2VsLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogNnB4IDE1cHggOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzFiMWQxZjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICBcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZGQzZTU0LCAjNmJlNTg1KTtcclxuICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ4MDQ4OyAqL1xyXG4gICAgICAgIC8qIHBhZGRpbmc6IDEwcHggMHB4OyAqL1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5maWVsZC1jb250YWluZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIH1cclxuIFxyXG4gICAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBibG9ja3M7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hY3Rpb24tY29udGFpbmVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLyogd2lkdGg6IDYwJTsgKi9cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhbmNlbC1idG4ge1xyXG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7ICovXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAxNXB4IDhweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzFiMWQxZjtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */"] });


/***/ }),

/***/ "NZxq":
/*!************************************************************************************!*\
  !*** ./src/app/user/user-profile/view-user-profile/view-user-profile.component.ts ***!
  \************************************************************************************/
/*! exports provided: ViewUserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUserProfileComponent", function() { return ViewUserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_common_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/components/change-password/change-password.component */ "Wxjj");
/* harmony import */ var src_app_common_components_confirm_box_confirm_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/components/confirm-box/confirm-box.component */ "KeLs");
/* harmony import */ var src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/components/loading/loading.component */ "4cPp");
/* harmony import */ var src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/components/snackbar/snackbar.component */ "j7cY");
/* harmony import */ var src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/constants/error-message */ "jsD4");
/* harmony import */ var src_app_common_constants_links__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/constants/links */ "IV7L");
/* harmony import */ var src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/constants/snackbar-properties */ "fc4o");
/* harmony import */ var _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../update-profile/update-profile.component */ "B46U");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_service_user_service_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/common/service/user_service/user.service */ "2/mB");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_common_service_statistics_user_statictics_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/common/service/statistics/user-statictics.service */ "+IU6");
/* harmony import */ var src_app_common_service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/common/service/login_state/loginstate.service */ "1d9a");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "ofXK");



















class ViewUserProfileComponent {
    // newform()
    // {
    //   this.showForm =!this.showForm;
    // }
    constructor(userservice, dialog, snackbar, userstats, loginStateService) {
        var _a;
        this.userservice = userservice;
        this.dialog = dialog;
        this.snackbar = snackbar;
        this.userstats = userstats;
        this.loginStateService = loginStateService;
        this.profile = src_app_common_constants_links__WEBPACK_IMPORTED_MODULE_6__["profile"];
        this.userStats = [];
        this.userFutureBets = [];
        this.showForm = false;
        this.loginState = this.loginStateService.getLoginState();
        this.userId = (_a = this.loginState) === null || _a === void 0 ? void 0 : _a.userId;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.userFutureBets = await this.getUsersFutureContest();
            // console.log(this.userFutureBets);
            // this.userStats = await this.getUserStats();
            // console.log(this.userStats);
            this.userData = yield this.getUsers();
            // console.log(this.userData);
            this.usersWinningLosingPoints = yield this.getUserWinningAndLosingPoints();
            // console.log(this.usersWinningLosingPoints);
        });
    }
    findsum(data) {
        data.forEach((element) => {
            let obj = this.userFutureBets.find(o => o.userId == element.userId);
            if (obj)
                element.availablePoints += obj.contestPoints;
        });
    }
    // GET USERS FUTURE BETS AND CURRENT POINTS
    // a= this.userStats.find(data => data.userId == this.userId)?.availablePoints;
    // const index = this.userStats.findIndex(data => data.userId == this.userId);
    // this.userStats[index].availablePoints;
    RemoveProfilePicture() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.dialog.openDialogs.length == 0) {
                const dialogRef1 = this.dialog.open(src_app_common_components_confirm_box_confirm_box_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmBoxComponent"], {
                    panelClass: 'no-padding-dialog',
                    data: 'Are you sure you want to remove?'
                });
                const closeResp = yield dialogRef1.afterClosed().toPromise();
                if (closeResp) {
                    let panelClass = 'green';
                    let snackbarMsg = '';
                    let snackbarRef = null;
                    const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], { disableClose: true });
                    // let userModel: UserModel[] = [];
                    let msg;
                    let resp = null;
                    try {
                        resp = yield this.userservice.deleteProfilePic(this.userData.userId);
                        msg = resp.body.message;
                        if (msg) {
                            snackbarMsg = msg;
                            dialogRef.close();
                            location.reload();
                        }
                        else {
                            snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_5__["NO_RESP"];
                            panelClass = 'red';
                        }
                    }
                    catch (ex) {
                        snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_5__["getErrorMessage"])(ex);
                        panelClass = 'red';
                    }
                    finally {
                        dialogRef.close();
                    }
                    if (snackbarMsg) {
                        snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_7__["getSnackbarProperties"])(snackbarMsg, panelClass));
                    }
                    return [];
                }
            }
        });
    }
    getUserStats() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let panelClass = 'green';
            let snackbarMsg = '';
            let snackbarRef = null;
            const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], { disableClose: true });
            let userModel = [];
            let resp = null;
            try {
                resp = yield this.userstats.getUserStatsById(this.userId);
                userModel = resp.body;
                this.findsum(userModel);
                if (userModel) {
                    dialogRef.close();
                    return userModel;
                }
                else {
                    snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_5__["NO_RESP"];
                    panelClass = 'red';
                }
            }
            catch (ex) {
                snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_5__["getErrorMessage"])(ex);
                panelClass = 'red';
            }
            finally {
                dialogRef.close();
            }
            if (snackbarMsg) {
                snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_7__["getSnackbarProperties"])(snackbarMsg, panelClass));
            }
            return [];
        });
    }
    // USERS FUTURE Bet
    getUsersFutureContest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let panelClass = 'green';
            let snackbarMsg = '';
            let snackbarRef = null;
            const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], { disableClose: true });
            let userFutureBets = [];
            let resp = null;
            try {
                resp = yield this.userstats.getUserFutureBetsById(this.userId);
                userFutureBets = resp.body;
                if (userFutureBets) {
                    dialogRef.close();
                    return userFutureBets;
                }
                else {
                    snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_5__["NO_RESP"];
                    panelClass = 'red';
                }
            }
            catch (ex) {
                snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_5__["getErrorMessage"])(ex);
                panelClass = 'red';
            }
            finally {
                dialogRef.close();
            }
            if (snackbarMsg) {
                snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_7__["getSnackbarProperties"])(snackbarMsg, panelClass));
            }
            return [];
        });
    }
    getUsers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let panelClass = 'green';
            let snackbarMsg = '';
            let snackbarRef = null;
            const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], { disableClose: true });
            let userModel = [];
            let resp = null;
            try {
                resp = yield this.userservice.getUserById(this.userId);
                userModel = resp.body;
                if (userModel) {
                    dialogRef.close();
                    return userModel;
                }
                else {
                    snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_5__["NO_RESP"];
                    panelClass = 'red';
                }
            }
            catch (ex) {
                snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_5__["getErrorMessage"])(ex);
                panelClass = 'red';
            }
            finally {
                dialogRef.close();
            }
            if (snackbarMsg) {
                snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_7__["getSnackbarProperties"])(snackbarMsg, panelClass));
            }
            return [];
        });
    }
    // GET USER STATISTICS
    getUserWinningAndLosingPoints() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let panelClass = 'green';
            let snackbarMsg = '';
            let snackbarRef = null;
            const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], { disableClose: true });
            let usersWinningLosingPoints = [];
            let resp = null;
            try {
                resp = yield this.userstats.getUserWinningLosingPoint(this.userId);
                usersWinningLosingPoints = resp.body;
                if (usersWinningLosingPoints) {
                    dialogRef.close();
                    return usersWinningLosingPoints;
                }
                else {
                    snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_5__["NO_RESP"];
                    panelClass = 'red';
                }
            }
            catch (ex) {
                snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_5__["getErrorMessage"])(ex);
                panelClass = 'red';
            }
            finally {
                dialogRef.close();
            }
            if (snackbarMsg) {
                snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_7__["getSnackbarProperties"])(snackbarMsg, panelClass));
            }
            return [];
        });
    }
    reload() {
        location.reload();
    }
    openUpdateUserProfileForm(data) {
        const dialogRef = this.dialog.open(_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_8__["UpdateProfileComponent"], { panelClass: 'no-padding-dialog', disableClose: true, data });
        dialogRef.afterClosed().toPromise().then(data => {
            if (data) {
                this.reload();
                // this.userData.firstName = data.firstName;
                // this.userData.lastName = data.lastName;
                // this.userData.email = data.email;
                // this.userData.mobileNumber = data.mobileNumber;
                // if (this.userData.profilePicture !== data.profilePicture) {
                //   this.userData.profilePicture = data.profilePicture;
                // }else{
                // }
            }
        });
    }
    openUpdateUserPasswordForm() {
        const dialogRef = this.dialog.open(src_app_common_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__["ChangePasswordComponent"], { panelClass: 'no-padding-dialog', disableClose: true });
        dialogRef.afterClosed().toPromise().then(data => {
            if (data) {
                this.reload();
            }
        });
    }
}
ViewUserProfileComponent.ɵfac = function ViewUserProfileComponent_Factory(t) { return new (t || ViewUserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_common_service_user_service_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_common_service_statistics_user_statictics_service__WEBPACK_IMPORTED_MODULE_13__["UserStaticticsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_common_service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_14__["LoginstateService"])); };
ViewUserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: ViewUserProfileComponent, selectors: [["app-view-user-profile"]], decls: 58, vars: 17, consts: [[1, "wrapper"], [1, "left"], ["loading", "lazy", "onerror", "this.src='assets/icons/icon-128x128.png'", "width", "100", 3, "src"], ["title", "Remove Profile Picture", 1, "fas", "fa-trash-alt", "remove", 3, "click"], [1, "right"], [1, "info"], [1, "info_data"], [1, "data"], [1, "emicon"], [1, "projects"], [1, "projects_data"], [1, "blue"], [1, "green"], [1, "green", "p_lower"], [1, "red"], [1, "red", "p_lower"], [1, "social_media"], ["mat-fab", "", "color", "accent", "matTooltip", "Update Profile", 1, "matbtn", 3, "click"], ["mat-fab", "", "color", "accent", "matTooltip", "Change Password", 1, "matbtn", 3, "click"]], template: function ViewUserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ViewUserProfileComponent_Template_i_click_5_listener() { return ctx.RemoveProfilePicture(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "information");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "phone_iphone");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "Bet history");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "Available Points");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "Winning Points");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45, "Loosing Points");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ViewUserProfileComponent_Template_button_click_52_listener() { return ctx.openUpdateUserProfileForm(ctx.userData); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54, "manage_accounts");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ViewUserProfileComponent_Template_button_click_55_listener() { return ctx.openUpdateUserPasswordForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](57, "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-image", "url(" + ctx.profile + ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx.userData == null ? null : ctx.userData.profilePicture, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 13, ctx.userData == null ? null : ctx.userData.firstName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 15, ctx.userData == null ? null : ctx.userData.lastName), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" @", ctx.userData == null ? null : ctx.userData.username, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.userData == null ? null : ctx.userData.email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.userData == null ? null : ctx.userData.mobileNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.userData == null ? null : ctx.userData.availablePoints, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.usersWinningLosingPoints == null ? null : ctx.usersWinningLosingPoints.winningPoints, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" (", ctx.usersWinningLosingPoints == null ? null : ctx.usersWinningLosingPoints.numberOfWinningMatches, " Matches) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.usersWinningLosingPoints == null ? null : ctx.usersWinningLosingPoints.losingPoints, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" (", ctx.usersWinningLosingPoints == null ? null : ctx.usersWinningLosingPoints.numberOfLosingMatches, " Matches) ");
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltip"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_18__["UpperCasePipe"]], styles: ["*[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    list-style: none;\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: 650px;\r\n    \r\n    display: flex;\r\n    box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);\r\n}\r\n\r\n\r\n@media screen and (max-width: 700px) {\r\n    .wrapper[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        width: auto;\r\n        \r\n        display: flex;\r\n        box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);\r\n    }\r\n}\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\r\n    width: 35%;\r\n    background: linear-gradient(to right, #01a9ac, #01dbdf);\r\n    padding: 30px 25px;\r\n    border-top-left-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n}\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n    width: 35%;\r\n    background: #fff;\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n    padding: 30px 25px;\r\n}\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%] {\r\n    margin-bottom: 25px;\r\n}\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px;\r\n    padding-bottom: 5px;\r\n    border-bottom: 1px solid #e0e0e0;\r\n    color: #353c4e;\r\n    text-transform: uppercase;\r\n    letter-spacing: 5px;\r\n}\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info_data[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .projects_data[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info_data[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .projects_data[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\r\n    width: 45%;\r\n}\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info_data[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .projects_data[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    color: #353c4e;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info_data[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    margin-bottom: 10px;\r\n    color: #919aa3;\r\n}\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n}\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n    width: 65%;\r\n}\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%]   .social_media[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%]   .social_media[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    width: 45px;\r\n    height: 45px;\r\n    background: linear-gradient(to right, #01a9ac, #01dbdf);\r\n    margin-right: 10px;\r\n    border-radius: 5px;\r\n    line-height: 45px;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%]   .social_media[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    display: block;\r\n    font-size: 18px;\r\n}\r\n\r\n\r\n.matbtn[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n    background: linear-gradient(to right, #01a9ac, #01dbdf);\r\n}\r\n\r\n\r\n.emicon[_ngcontent-%COMP%] {\r\n    background: linear-gradient(to right, #01a9ac, #01dbdf);\r\n}\r\n\r\n\r\n.blue[_ngcontent-%COMP%] {\r\n    color: #1954a1;\r\n    font-weight: 500;\r\n}\r\n\r\n\r\n.green[_ngcontent-%COMP%] {\r\n    color: green;\r\n    font-weight: 500;\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-bottom: 0;\r\n}\r\n\r\n\r\n.red[_ngcontent-%COMP%] {\r\n    color: red;\r\n    font-weight: 500;\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-bottom: 0;\r\n}\r\n\r\n\r\n.p_lower[_ngcontent-%COMP%]{\r\n    margin-top: 0;\r\n    padding-top:0;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n\r\n.remove[_ngcontent-%COMP%] {\r\n    color: red;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    body[_ngcontent-%COMP%]{\r\n        min-height: 150vh;\r\n    }\r\n\r\n    .wrapper[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        top: 50%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        width: 300px;\r\n        \r\n        display: flex;\r\n        box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n    }\r\n \r\n    .wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\r\n        width: 290px;\r\n        background: linear-gradient(to right, #01a9ac, #01dbdf);\r\n        padding: 30px 25px;\r\n        border-top-left-radius: 5px;\r\n        border-top-right-radius: 5px;\r\n        border-bottom-left-radius: 0;\r\n        text-align: center;\r\n        color: #fff;\r\n        height: auto;\r\n    }\r\n    \r\n    .wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n        width: 290px;\r\n        background: #fff;\r\n        border-top-right-radius: 0;\r\n        border-bottom-right-radius: 5px;\r\n        border-bottom-left-radius: 5px;\r\n        padding: 30px 25px;\r\n    }\r\n\r\n    .info_data[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCOzs7QUFHQTs7R0FFRzs7O0FBRUg7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsZ0RBQWdEO0FBQ3BEOzs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixTQUFTO1FBQ1QsZ0NBQWdDO1FBQ2hDLFdBQVc7UUFDWCxzQkFBc0I7UUFDdEIsYUFBYTtRQUNiLGdEQUFnRDtJQUNwRDtBQUNKOzs7QUFFQTtJQUNJLFVBQVU7SUFDVix1REFBdUQ7SUFDdkQsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQixrQkFBa0I7QUFDdEI7OztBQUVBOztJQUVJLG1CQUFtQjtBQUN2Qjs7O0FBRUE7O0lBRUksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7OztBQUVBOztJQUVJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7OztBQUVBOztJQUVJLFVBQVU7QUFDZDs7O0FBRUE7O0lBRUksY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7O0FBR0EsNkNBQTZDOzs7QUFFN0M7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVEQUF1RDtJQUN2RCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLFlBQVk7SUFDWix1REFBdUQ7QUFDM0Q7OztBQUVBO0lBQ0ksdURBQXVEO0FBQzNEOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0FBQ25COzs7QUFFQTs7SUFFSTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsU0FBUztRQUNULGdDQUFnQztRQUNoQyxZQUFZO1FBQ1osc0JBQXNCO1FBQ3RCLGFBQWE7UUFDYixnREFBZ0Q7UUFDaEQsYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLHVEQUF1RDtRQUN2RCxrQkFBa0I7UUFDbEIsMkJBQTJCO1FBQzNCLDRCQUE0QjtRQUM1Qiw0QkFBNEI7UUFDNUIsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGdCQUFnQjtRQUNoQiwwQkFBMEI7UUFDMUIsK0JBQStCO1FBQy9CLDhCQUE4QjtRQUM5QixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO0lBQzFCOzs7QUFHSiIsImZpbGUiOiJ2aWV3LXVzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAvKiBmb250LWZhbWlseTogOyAgICAqL1xyXG59XHJcblxyXG5cclxuLyogYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTk1NGExO1xyXG59ICovXHJcblxyXG4ud3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgd2lkdGg6IDY1MHB4O1xyXG4gICAgLyogbWluLXdpZHRoOiA2NTBweDsgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAyMHB4IDAgcmdiYSg2OSwgOTAsIDEwMCwgMC4wOCk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAvKiBtaW4td2lkdGg6IDY1MHB4OyAqL1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMjBweCAwIHJnYmEoNjksIDkwLCAxMDAsIDAuMDgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4ud3JhcHBlciAubGVmdCB7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDFhOWFjLCAjMDFkYmRmKTtcclxuICAgIHBhZGRpbmc6IDMwcHggMjVweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ud3JhcHBlciAubGVmdCBpbWcge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLndyYXBwZXIgLmxlZnQgaDQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLndyYXBwZXIgLmxlZnQgcCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi53cmFwcGVyIC5yaWdodCB7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMzBweCAyNXB4O1xyXG59XHJcblxyXG4ud3JhcHBlciAucmlnaHQgLmluZm8sXHJcbi53cmFwcGVyIC5yaWdodCAucHJvamVjdHMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLndyYXBwZXIgLnJpZ2h0IC5pbmZvIGgzLFxyXG4ud3JhcHBlciAucmlnaHQgLnByb2plY3RzIGgzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XHJcbiAgICBjb2xvcjogIzM1M2M0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG59XHJcblxyXG4ud3JhcHBlciAucmlnaHQgLmluZm9fZGF0YSxcclxuLndyYXBwZXIgLnJpZ2h0IC5wcm9qZWN0c19kYXRhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi53cmFwcGVyIC5yaWdodCAuaW5mb19kYXRhIC5kYXRhLFxyXG4ud3JhcHBlciAucmlnaHQgLnByb2plY3RzX2RhdGEgLmRhdGEge1xyXG4gICAgd2lkdGg6IDQ1JTtcclxufVxyXG5cclxuLndyYXBwZXIgLnJpZ2h0IC5pbmZvX2RhdGEgLmRhdGEgaDQsXHJcbi53cmFwcGVyIC5yaWdodCAucHJvamVjdHNfZGF0YSAuZGF0YSBoNCB7XHJcbiAgICBjb2xvcjogIzM1M2M0ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuXHJcbi8qICwud3JhcHBlciAucmlnaHQgLnByb2plY3RzX2RhdGEgLmRhdGEgcCAgKi9cclxuXHJcbi53cmFwcGVyIC5yaWdodCAuaW5mb19kYXRhIC5kYXRhIHAge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGNvbG9yOiAjOTE5YWEzO1xyXG59XHJcblxyXG4ud3JhcHBlciAubGVmdCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLndyYXBwZXIgLnJpZ2h0IHtcclxuICAgIHdpZHRoOiA2NSU7XHJcbn1cclxuXHJcbi53cmFwcGVyIC5zb2NpYWxfbWVkaWEgdWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLndyYXBwZXIgLnNvY2lhbF9tZWRpYSB1bCBsaSB7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAxYTlhYywgIzAxZGJkZik7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLndyYXBwZXIgLnNvY2lhbF9tZWRpYSB1bCBsaSBhIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5tYXRidG4ge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDFhOWFjLCAjMDFkYmRmKTtcclxufVxyXG5cclxuLmVtaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMWE5YWMsICMwMWRiZGYpO1xyXG59XHJcblxyXG4uYmx1ZSB7XHJcbiAgICBjb2xvcjogIzE5NTRhMTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5ncmVlbiB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4ucmVkIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4ucF9sb3dlcntcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDowO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuXHJcbi5yZW1vdmUge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cclxuICAgIGJvZHl7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTUwdmg7XHJcbiAgICB9XHJcblxyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIC8qIG1pbi13aWR0aDogNjUwcHg7ICovXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAyMHB4IDAgcmdiYSg2OSwgOTAsIDEwMCwgMC4wOCk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiBcclxuICAgIC53cmFwcGVyIC5sZWZ0IHtcclxuICAgICAgICB3aWR0aDogMjkwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDFhOWFjLCAjMDFkYmRmKTtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4IDI1cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAud3JhcHBlciAucmlnaHQge1xyXG4gICAgICAgIHdpZHRoOiAyOTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5mb19kYXRhe1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICBcclxufSJdfQ== */"] });


/***/ }),

/***/ "SLye":
/*!**********************************************!*\
  !*** ./src/app/common/model/bot/BotModel.ts ***!
  \**********************************************/
/*! exports provided: BotModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotModel", function() { return BotModel; });
class BotModel {
}


/***/ }),

/***/ "dBPv":
/*!**********************************************************************************!*\
  !*** ./src/app/user/my-matches/view-live-matches/view-live-matches.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ViewLiveMatchesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewLiveMatchesComponent", function() { return ViewLiveMatchesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/components/loading/loading.component */ "4cPp");
/* harmony import */ var src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/components/snackbar/snackbar.component */ "j7cY");
/* harmony import */ var src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/constants/error-message */ "jsD4");
/* harmony import */ var src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/constants/snackbar-properties */ "fc4o");
/* harmony import */ var src_app_common_constants_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/constants/utils */ "1lvy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_common_service_bot_bot_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/common/service/bot/bot.service */ "9vxe");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_common_service_matches_service_matches_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/common/service/matches_service/matches.service */ "gD1G");
/* harmony import */ var src_app_common_service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/common/service/login_state/loginstate.service */ "1d9a");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
























function ViewLiveMatchesComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Username ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return { "padding": "10px", "background-color": a1, "border-radius": "50%" }; };
function ViewLiveMatchesComponent_td_43_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](2, _c0, ctx_r9.stringToColorFunction(element_r8.firstName + element_r8.lastName)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](element_r8.firstName.substr(0, 1).toUpperCase() + element_r8.lastName.substr(0, 1).toUpperCase());
} }
function ViewLiveMatchesComponent_td_43_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "img", 37);
} if (rf & 2) {
    const element_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", element_r8.profilePicture, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("alt", element_r8.firstName.substr(0, 1).toUpperCase() + element_r8.lastName.substr(0, 1).toUpperCase());
} }
const _c1 = function (a0, a1) { return { "background-color": a0, "color": a1 }; };
const _c2 = function () { return { "margin-left": "5px" }; };
function ViewLiveMatchesComponent_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, ViewLiveMatchesComponent_td_43_span_3_Template, 2, 4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ViewLiveMatchesComponent_td_43_img_4_Template, 1, 2, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](5, _c1, ctx_r1.un == element_r8.username ? "#E4E6FF" : "", ctx_r1.un == element_r8.username ? "black" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !element_r8.profilePicture);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", element_r8.profilePicture);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](8, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", element_r8.firstName + " " + element_r8.lastName, " ");
} }
function ViewLiveMatchesComponent_th_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Bet Team ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ViewLiveMatchesComponent_td_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](2, _c1, ctx_r3.un == element_r13.username ? "#E4E6FF" : "", ctx_r3.un == element_r13.username ? "black" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", element_r13.teamShortName, " ");
} }
function ViewLiveMatchesComponent_th_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Bet Points ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ViewLiveMatchesComponent_td_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](2, _c1, ctx_r5.un == element_r14.username ? "#E4E6FF" : "", ctx_r5.un == element_r14.username ? "black" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", element_r14.contestPoints, " ");
} }
function ViewLiveMatchesComponent_tr_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 38);
} }
const _c3 = function (a0) { return { "evenrow": a0 }; };
function ViewLiveMatchesComponent_tr_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 39);
} if (rf & 2) {
    const index_r16 = ctx.index;
    const element_r17 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](2, _c3, index_r16 % 2 == 1))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](4, _c1, ctx_r7.un == element_r17.username ? "#E4E6FF" : "", ctx_r7.un == element_r17.username ? "black" : ""));
} }
const _c4 = function () { return [10, 20]; };
class ViewLiveMatchesComponent {
    constructor(route, botservice, snackbar, dialog, matchservice, loginStateService) {
        this.route = route;
        this.botservice = botservice;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.matchservice = matchservice;
        this.loginStateService = loginStateService;
        this.teamColor = {
            1: "#ff0",
            2: "#2561ae",
            3: "#00416a",
            4: "#7300ab",
            5: "#ace5ee",
            6: "#004f91",
            7: "#ed1f27",
            8: "RGB(37 ,74 ,165)",
            9: "#d5152c",
            10: "#f7a721",
            //in case if the ids of the above teams changes, default colors will be used
            t1: 'pink',
            t2: 'silver' //
        };
        this.teamFontColor = {
            1: "black",
            2: "#fff",
            3: "#fff",
            4: "#fff",
            5: "black",
            6: "#fff",
            7: "#fff",
            8: "white",
            9: "#fff",
            10: "black",
            //in case if the ids of the above teams changes, default colors will be used
            t1: 'black',
            t2: 'black' //
        };
        this.borderTop = {
            1: "5px solid #ef9b0f",
            2: "5px solid #4B9CD3",
            3: "5px solid #1d2951",
            4: "5px solid #430064",
            5: "5px solid #9bc4e2",
            6: "5px solid blue",
            7: "5px solid #af002a",
            8: "5px solid #1877F2",
            9: "5px solid #800000",
            10: "5px solid #F05E23",
            //in case if the ids of the above teams changes, default colors will be used
            t1: 'pink',
            t2: 'silver' //
        };
        this.fetchBotDetails = [];
        this.displayedColumns = ['username', 'teamshortname', 'contestPoints'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.loginState = this.loginStateService.getLoginState();
        this.un = this.loginState.username;
        // THIS IS FOR CALCULATION PURPOSE ONLY
        this.team1points = 0;
        this.team2points = 0;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.params.subscribe(data => {
                this.matchId = data.id;
            });
            this.calc = yield this.getAllPlayerBetsByMatchIdForCalculation(this.matchId);
            this.fetchBotDetails = yield this.getAllPlayerBetsByMatchId(this.matchId);
            // console.log(this.fetchBotDetails);
            this.dataSource.data = this.fetchBotDetails;
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            this.matchData = yield this.getMatchById(this.matchId);
            // console.log(this.matchData);
        });
    }
    stringToColorFunction(color) {
        return Object(src_app_common_constants_utils__WEBPACK_IMPORTED_MODULE_8__["stringToColor"])(color);
    }
    Team1TotalUsers(inputs1, inputs2) {
        let counter = 0;
        for (const input1 of inputs1) {
            if (input1.teamShortName === (inputs2 === null || inputs2 === void 0 ? void 0 : inputs2.team1Short))
                counter += 1;
        }
        return counter;
    }
    Team2TotalUsers(inputs1, inputs2) {
        let counter = 0;
        for (const input1 of inputs1) {
            if (input1.teamShortName === (inputs2 === null || inputs2 === void 0 ? void 0 : inputs2.team2Short))
                counter += 1;
        }
        return counter;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    getMatchById(matchId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let panelClass = 'green';
            let snackbarMsg = '';
            let snackbarRef = null;
            const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"], { disableClose: true });
            let matchModel = [];
            let resp = null;
            try {
                resp = yield this.matchservice.viewMatchById(matchId);
                matchModel = resp.body;
                if (matchModel) {
                    dialogRef.close();
                    return matchModel;
                }
                else {
                    snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_6__["NO_RESP"];
                    panelClass = 'red';
                }
            }
            catch (ex) {
                snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_6__["getErrorMessage"])(ex);
                panelClass = 'red';
            }
            finally {
                dialogRef.close();
            }
            if (snackbarMsg) {
                snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_7__["getSnackbarProperties"])(snackbarMsg, panelClass));
            }
            return [];
        });
    }
    // GET ALL PLAYER BETS ON TEAM
    getAllPlayerBetsByMatchId(matchId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let panelClass = 'green';
            let snackbarMsg = '';
            let snackbarRef = null;
            const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"], { disableClose: true });
            let botModel = [];
            let resp = null;
            try {
                resp = yield this.botservice.viewAllContestByMatchId(matchId);
                botModel = resp.body;
                this.findsum(botModel);
                if (botModel) {
                    dialogRef.close();
                    return botModel;
                }
                else {
                    snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_6__["NO_RESP"];
                    panelClass = 'red';
                }
            }
            catch (ex) {
                snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_6__["getErrorMessage"])(ex);
                panelClass = 'red';
            }
            finally {
                dialogRef.close();
            }
            if (snackbarMsg) {
                snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_7__["getSnackbarProperties"])(snackbarMsg, panelClass));
            }
            return [];
        });
    }
    findsum(data) {
        data.forEach((element) => {
            if (element.teamShortName == this.calc.team1Short) {
                this.team1points += element.contestPoints;
            }
            else if (element.teamShortName == this.calc.team2Short)
                this.team2points += element.contestPoints;
        });
    }
    getAllPlayerBetsByMatchIdForCalculation(matchId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let panelClass = 'green';
            let snackbarMsg = '';
            let snackbarRef = null;
            const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"], { disableClose: true });
            let matchModel = [];
            let resp = null;
            try {
                resp = yield this.matchservice.viewMatchById(matchId);
                matchModel = resp.body;
                if (matchModel) {
                    dialogRef.close();
                    return matchModel;
                }
                else {
                    snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_6__["NO_RESP"];
                    panelClass = 'red';
                }
            }
            catch (ex) {
                snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_6__["getErrorMessage"])(ex);
                panelClass = 'red';
            }
            finally {
                dialogRef.close();
            }
            if (snackbarMsg) {
                snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_7__["getSnackbarProperties"])(snackbarMsg, panelClass));
            }
            return [];
        });
    }
    getColorForTeam1() {
        return this.matchData && this.matchData.team1Id ? this.teamColor[this.matchData.team1Id] : this.teamColor.t1;
    }
    getColorForTeam2() {
        return this.matchData && this.matchData.team2Id ? this.teamColor[this.matchData.team2Id] : this.teamColor.t2;
    }
    getFontColorForTeam1() {
        return this.matchData && this.matchData.team1Id ? this.teamFontColor[this.matchData.team1Id] : this.teamFontColor.t1;
    }
    getFontColorForTeam2() {
        return this.matchData && this.matchData.team2Id ? this.teamFontColor[this.matchData.team2Id] : this.teamFontColor.t2;
    }
    getBorderColorForTeam1() {
        return this.matchData && this.matchData.team1Id ? this.borderTop[this.matchData.team1Id] : this.borderTop.t1;
    }
    getBorderColorForTeam2() {
        return this.matchData && this.matchData.team2Id ? this.borderTop[this.matchData.team2Id] : this.borderTop.t2;
    }
}
ViewLiveMatchesComponent.ɵfac = function ViewLiveMatchesComponent_Factory(t) { return new (t || ViewLiveMatchesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_common_service_bot_bot_service__WEBPACK_IMPORTED_MODULE_11__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_common_service_matches_service_matches_service__WEBPACK_IMPORTED_MODULE_14__["MatchesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_common_service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_15__["LoginstateService"])); };
ViewLiveMatchesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: ViewLiveMatchesComponent, selectors: [["app-view-live-matches"]], viewQuery: function ViewLiveMatchesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 53, vars: 36, consts: [[1, "card"], [1, "left"], [1, "right"], [1, "match-details"], [1, "team1"], ["loading", "lazy", 2, "border-radius", "50%", 3, "src"], [1, "team-name"], [1, "team-points"], [1, "details"], [1, "date"], [1, "versus"], [1, "venue"], [1, "team2"], [1, "parent-container", "container-fluid"], [1, "mat-elevation-z20", "container", "main-container"], [1, "conatiner-header"], [1, "inner-conatiner"], [1, "inner-container-actions"], ["appearance", "outline", "color", "accent"], ["matInput", "", "placeholder", "Search Players", "type", "search", 2, "color", "white", 3, "keyup"], ["color", "accent", "matSuffix", ""], ["mat-table", "", "matSort", "", 1, "mat-elevation-z21", 3, "dataSource"], ["matColumnDef", "username"], ["mat-header-cell", "", "mat-sort-header", "", "class", "highlight", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "ngStyle", 4, "matCellDef"], ["matColumnDef", "teamshortname"], ["matColumnDef", "contestPoints"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", "ngStyle", 4, "matRowDef", "matRowDefColumns"], ["color", "accent", "showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", "", 1, "highlight"], ["mat-cell", "", 3, "ngStyle"], [1, "inside-td"], ["loading", "lazy", 3, "ngStyle", 4, "ngIf"], ["class", "profile-picture thumbnail-image", "loading", "lazy", 3, "src", "alt", 4, "ngIf"], [3, "ngStyle"], ["loading", "lazy", 3, "ngStyle"], ["loading", "lazy", 1, "profile-picture", "thumbnail-image", 3, "src", "alt"], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "ngStyle"]], template: function ViewLiveMatchesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](16, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "VS");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](22, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, " Bet Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyup", function ViewLiveMatchesComponent_Template_input_keyup_37_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](41, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](42, ViewLiveMatchesComponent_th_42_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](43, ViewLiveMatchesComponent_td_43_Template, 7, 9, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](44, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](45, ViewLiveMatchesComponent_th_45_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](46, ViewLiveMatchesComponent_td_46_Template, 2, 5, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](47, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](48, ViewLiveMatchesComponent_th_48_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](49, ViewLiveMatchesComponent_td_49_Template, 2, 5, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](50, ViewLiveMatchesComponent_tr_50_Template, 1, 0, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](51, ViewLiveMatchesComponent_tr_51_Template, 1, 7, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](52, "mat-paginator", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("border-top", ctx.getBorderColorForTeam1())("background-color", ctx.getColorForTeam1());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("border-top", ctx.getBorderColorForTeam2())("background-color", ctx.getColorForTeam2());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", ctx.matchData == null ? null : ctx.matchData.team1Short, " vs ", ctx.matchData == null ? null : ctx.matchData.team2Short, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx.matchData == null ? null : ctx.matchData.team1Logo, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("color", ctx.getFontColorForTeam1());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx.matchData == null ? null : ctx.matchData.team1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("color", ctx.getFontColorForTeam1());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" (", ctx.Team1TotalUsers(ctx.fetchBotDetails, ctx.matchData), " bets) ", ctx.team1points, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](16, 32, ctx.matchData == null ? null : ctx.matchData.startDatetime, "medium"), " IST ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx.matchData == null ? null : ctx.matchData.venue, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx.matchData == null ? null : ctx.matchData.team2Logo, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("color", ctx.getFontColorForTeam2());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx.matchData == null ? null : ctx.matchData.team2, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("color", ctx.getFontColorForTeam2());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", ctx.team2points, " ( ", ctx.Team2TotalUsers(ctx.fetchBotDetails, ctx.matchData), " bets)");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](35, _c4));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatSuffix"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__["DefaultStyleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__["DefaultClassDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["DatePipe"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');\r\nbody[_ngcontent-%COMP%] {\r\n    \r\n    background: linear-gradient(to right, #fdeff9, #ec38bc, #7303c0, #03001e);\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Montserrat', sans-serif;\r\n    \r\n    background-size: cover;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    height: auto;\r\n    align-self: flex-start;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    \r\n    transform: translate(-4%, 5%);\r\n    width: 600px;\r\n    background: rgba(255, 255, 255, 0.5);\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    transition: 0.5s;\r\n    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.2);\r\n    height: auto;\r\n    margin: 30px;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    \r\n}\r\n.left[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0%;\r\n    left: -120%;\r\n    width: 60%;\r\n    height: 30%;\r\n    transition: 0.5s;\r\n    box-sizing: border-box;\r\n    \r\n    transform: skewX(-5deg);\r\n}\r\n.card[_ngcontent-%COMP%] > .left[_ngcontent-%COMP%] {\r\n    left: -10%;\r\n}\r\n.right[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0%;\r\n    right: -120%;\r\n    width: 60%;\r\n    height: 30%;\r\n    transition: 0.5s;\r\n    box-sizing: border-box;\r\n    \r\n    transform: skewX(-5deg);\r\n}\r\n.card[_ngcontent-%COMP%] > .right[_ngcontent-%COMP%] {\r\n    right: -9%;\r\n}\r\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    margin: 0;\r\n    padding: 20px;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n    transition: 0.5s;\r\n}\r\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    background: #ff0057;\r\n    color: #fff;\r\n}\r\n.match-details[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    \r\n}\r\n.versus[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    height: 50px;\r\n    font-size: 24px;\r\n    border-radius: 50%;\r\n    background: #e91e63;\r\n    color: #fff;\r\n    text-align: center;\r\n    line-height: 50px;\r\n    margin: 20px auto;\r\n}\r\n.date[_ngcontent-%COMP%] {\r\n    margin: 20px 0 0;\r\n}\r\n.team1[_ngcontent-%COMP%] {\r\n    width: 180px;\r\n    float: left;\r\n    padding: 10px 15px 0px;\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n}\r\n.team2[_ngcontent-%COMP%] {\r\n    width: 180px;\r\n    float: left;\r\n    padding: 10px 15px 0px;\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n}\r\n.team1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .team2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.details[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    min-width: 39%;\r\n    min-height: 200px;\r\n    height: auto;\r\n    float: left;\r\n    text-align: center;\r\n}\r\nh3.team-name[_ngcontent-%COMP%] {\r\n    padding: 15px 0 0;\r\n    \r\n    text-align: right;\r\n    transition: 0.5s;\r\n    margin-top: 40px;\r\n    \r\n}\r\nh3.team-points[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    text-align: right;\r\n    transition: 0.5s;\r\n    \r\n    \r\n}\r\n.team1[_ngcontent-%COMP%]   h3.team-name[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n}\r\n.team1[_ngcontent-%COMP%]   h3.team-points[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n}\r\n.card[_ngcontent-%COMP%]   .team1[_ngcontent-%COMP%]   h3.team-name[_ngcontent-%COMP%] {\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    font-size: large;\r\n}\r\n.card[_ngcontent-%COMP%]   .team2[_ngcontent-%COMP%]   h3.team-name[_ngcontent-%COMP%] {\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    font-size: large;\r\n}\r\n\r\n.parent-container[_ngcontent-%COMP%] {\r\n    background-color: #353535;\r\n    padding-top: 50px;\r\n    padding-bottom: 50px;\r\n}\r\n.main-container[_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n    padding-bottom: 20px;\r\n    background-color: #292929;\r\n    border: 1px solid gray;\r\n    border-radius: 10px;\r\n}\r\n.conatiner-header[_ngcontent-%COMP%] {\r\n    color: white;\r\n    background-color: #16191c;\r\n    padding: 10px 10px;\r\n    font-size: 20px;\r\n    border-radius: 10px 10px 0px 0px;\r\n}\r\n.inner-conatiner[_ngcontent-%COMP%] {\r\n    padding: 10px 30px 20px;\r\n    background-color: #383737;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background-color: #333333;\r\n}\r\n.highlight[_ngcontent-%COMP%] {\r\n    background-color: #282850;\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n.evenrow[_ngcontent-%COMP%] {\r\n    background-color: #3b3a3a;\r\n}\r\ntd[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n}\r\n.mat-row[_ngcontent-%COMP%]:hover {\r\n    background-color: #311f1f;\r\n}\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\nmat-paginator[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    background: #282850;\r\n}\r\n.mat-cell[_ngcontent-%COMP%] {\r\n    padding-right: 10px;\r\n}\r\n@media only screen and (max-width: 480px) {\r\n    \r\n\r\n       .card[_ngcontent-%COMP%] {\r\n        transform: translate(-4%, 5%);\r\n        width: 320px;\r\n        background: rgba(255, 255, 255, 0.5);\r\n        border-radius: 10px;\r\n        overflow: hidden;\r\n        transition: 0.5s;\r\n        box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.2);\r\n        height: 310px;\r\n        margin: 30px;\r\n    }\r\n\r\n    .card[_ngcontent-%COMP%] {\r\n        background: #fff;\r\n        \r\n    }\r\n\r\n    .left[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        bottom: 0%;\r\n        left: -120%;\r\n        width: 60%;\r\n        height: 30%;\r\n        transition: 0.5s;\r\n        box-sizing: border-box;\r\n        \r\n        transform: skewX(-5deg);\r\n    }\r\n\r\n    .card[_ngcontent-%COMP%] > .left[_ngcontent-%COMP%] {\r\n        left: -10%;\r\n    }\r\n\r\n    .right[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        bottom: 0%;\r\n        right: -100%;\r\n        width: 60%;\r\n        height: 30%;\r\n        transition: 0.5s;\r\n        box-sizing: border-box;\r\n        \r\n        transform: skewX(-5deg);\r\n    }\r\n\r\n    .card[_ngcontent-%COMP%] > .right[_ngcontent-%COMP%] {\r\n        right: -9%;\r\n    }\r\n\r\n    .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        width: auto;\r\n        margin: 0;\r\n        padding: 20px;\r\n        text-align: center;\r\n        box-sizing: border-box;\r\n        transition: 0.5s;\r\n    }\r\n\r\n    .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        background: #ff0057;\r\n        color: #fff;\r\n    }\r\n\r\n    .match-details[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        \r\n    }\r\n\r\n    .versus[_ngcontent-%COMP%] {\r\n        width: 35px;\r\n        height: 35px;\r\n        font-size: 1rem;\r\n        border-radius: 50%;\r\n        background: #e91e63;\r\n        color: #fff;\r\n        text-align: center;\r\n        margin-bottom: 10px;\r\n        margin-top: 10px;\r\n        line-height: 2.3;\r\n    }\r\n\r\n    .date[_ngcontent-%COMP%] {\r\n        margin: 20px 0 0;\r\n        font-size: 0.6rem;\r\n        line-height: 1.5;\r\n        width: 100%;\r\n    }\r\n\r\n    .team1[_ngcontent-%COMP%] {\r\n        width: 100px;\r\n        float: left;\r\n        padding: 10px 20px 20px;\r\n        box-sizing: border-box;\r\n        text-align: center;\r\n    }\r\n\r\n    .venue[_ngcontent-%COMP%]{\r\n        font-size: 0.6rem;\r\n        line-height: 1;\r\n    }\r\n\r\n    .team2[_ngcontent-%COMP%] {\r\n        width: 100px;\r\n        float: left;\r\n        padding: 10px 20px 20px;\r\n        box-sizing: border-box;\r\n        text-align: center;\r\n    }\r\n\r\n    .team1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .team2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n\r\n    .details[_ngcontent-%COMP%] {\r\n        width: 25%;\r\n        min-height: 20%;\r\n        min-width: 37%;\r\n        float: left;\r\n        text-align: center;\r\n    }\r\n\r\n    h3.team-name[_ngcontent-%COMP%] {\r\n        padding: 15px 0 0;\r\n        \r\n        text-align: right;\r\n        transition: 0.5s;\r\n        margin-top: 75px;\r\n        \r\n        font-size: 0.7rem;\r\n        line-height: 1;\r\n    }\r\n\r\n    h3.team-points[_ngcontent-%COMP%] {\r\n        \r\n        \r\n        text-align: right;\r\n        transition: 0.5s;\r\n        \r\n        \r\n        line-height: 1.4;\r\n        font-size: 0.7rem;\r\n    }\r\n\r\n    .team1[_ngcontent-%COMP%]   h3.team-name[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n        font-size: 0.7rem;\r\n        font-family: 'Montserrat', sans-serif;\r\n        font-weight: bolder;\r\n    }\r\n\r\n    .team1[_ngcontent-%COMP%]   h3.team-points[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n        font-size: 0.7rem;\r\n    }\r\n\r\n    .card[_ngcontent-%COMP%]   .team1[_ngcontent-%COMP%]   h3.team-name[_ngcontent-%COMP%] {\r\n        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n        font-size: large;\r\n        font-size: 0.7rem;\r\n    }\r\n\r\n    .card[_ngcontent-%COMP%]   .team2[_ngcontent-%COMP%]   h3.team-name[_ngcontent-%COMP%] {\r\n        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n        font-size: large;\r\n        font-size: 0.7rem;\r\n    }\r\n\r\n}\r\n.profile-picture[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  height: 40px;\r\n  width: 40px;\r\n  background-color: orange;\r\n  \r\n  \r\n}\r\n.inside-td[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctbGl2ZS1tYXRjaGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkdBQTJHO0FBQzNHO0lBQ0ksNkRBQTZEO0lBQzdELHlFQUF5RTtJQUN6RSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHFDQUFxQztJQUNyQyx3Q0FBd0M7SUFDeEMsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLCtDQUErQztJQUMvQyxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFEQUFxRDtBQUN6RDtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyx1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyx1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUNBQWlDO0FBQ3JDO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGlDQUFpQztBQUNyQztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLHdFQUF3RTtJQUN4RSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLHdFQUF3RTtJQUN4RSxnQkFBZ0I7QUFDcEI7QUFHQSxrQkFBa0I7QUFFbEI7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdDQUFnQztBQUNwQztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBR0E7SUFDSTtpRUFDNkQ7O09BRTFEO1FBQ0MsNkJBQTZCO1FBQzdCLFlBQVk7UUFDWixvQ0FBb0M7UUFDcEMsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsK0NBQStDO1FBQy9DLGFBQWE7UUFDYixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLHFEQUFxRDtJQUN6RDs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsV0FBVztRQUNYLFVBQVU7UUFDVixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLHNCQUFzQjtRQUN0QixtQ0FBbUM7UUFDbkMsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixZQUFZO1FBQ1osVUFBVTtRQUNWLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsc0JBQXNCO1FBQ3RCLG1DQUFtQztRQUNuQyx1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsU0FBUztRQUNULGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsc0JBQXNCO1FBQ3RCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsV0FBVztJQUNmOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7UUFDWCx1QkFBdUI7UUFDdkIsc0JBQXNCO1FBQ3RCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7UUFDWCx1QkFBdUI7UUFDdkIsc0JBQXNCO1FBQ3RCLGtCQUFrQjtJQUN0Qjs7SUFFQTs7UUFFSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixlQUFlO1FBQ2YsY0FBYztRQUNkLFdBQVc7UUFDWCxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIseUJBQXlCO1FBQ3pCLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGlDQUFpQztRQUNqQyxpQkFBaUI7UUFDakIsY0FBYztJQUNsQjs7SUFFQTtRQUNJLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFDekIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsaUNBQWlDO1FBQ2pDLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLHFDQUFxQztRQUNyQyxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksd0VBQXdFO1FBQ3hFLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSx3RUFBd0U7UUFDeEUsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjs7QUFFSjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQiw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InZpZXctbGl2ZS1tYXRjaGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MjAwLDMwMCw0MDAsNTAwLDYwMCw3MDAsODAwLDkwMCZkaXNwbGF5PXN3YXAnKTtcclxuYm9keSB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZGVmZjksICM0NTcyYzcpOyAqL1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmRlZmY5LCAjZWMzOGJjLCAjNzMwM2MwLCAjMDMwMDFlKTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL3N0YWRpdW0nKTsgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICAgIC8qIHRvcDogNTAlOyAqL1xyXG4gICAgLyogbGVmdDogMjUlOyAqL1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQlLCA1JSk7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMzBweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC8qIGJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpOyAqL1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDAlO1xyXG4gICAgbGVmdDogLTEyMCU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC8qIGJvcmRlci10b3A6IDVweCBzb2xpZCAjNDMwMDY0OyAqL1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtNWRlZyk7XHJcbn1cclxuXHJcbi5jYXJkPi5sZWZ0IHtcclxuICAgIGxlZnQ6IC0xMCU7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDAlO1xyXG4gICAgcmlnaHQ6IC0xMjAlO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAvKiBib3JkZXItdG9wOiA1cHggc29saWQgI2VmOWIwZjsgKi9cclxuICAgIHRyYW5zZm9ybTogc2tld1goLTVkZWcpO1xyXG59XHJcblxyXG4uY2FyZD4ucmlnaHQge1xyXG4gICAgcmlnaHQ6IC05JTtcclxufVxyXG5cclxuLmNhcmQgaDIge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5jYXJkIGgyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjAwNTc7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm1hdGNoLWRldGFpbHMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLyogY29sb3I6IGJsYWNrOyAqL1xyXG59XHJcblxyXG4udmVyc3VzIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogI2U5MWU2MztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxufVxyXG5cclxuLmRhdGUge1xyXG4gICAgbWFyZ2luOiAyMHB4IDAgMDtcclxufVxyXG5cclxuLnRlYW0xIHtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4IDBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZWFtMiB7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweCAwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGVhbTEgaW1nLFxyXG4udGVhbTIgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZGV0YWlscyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDM5JTtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmgzLnRlYW0tbmFtZSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDAgMDtcclxuICAgIC8qIG1hcmdpbi1ib3R0b206IDE1cHg7ICovXHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOiAxMHB4IHNvbGlkOyAqL1xyXG59XHJcblxyXG5oMy50ZWFtLXBvaW50cyB7XHJcbiAgICAvKiBwYWRkaW5nOiAxNXB4IDAgMDsgKi9cclxuICAgIC8qIG1hcmdpbi1ib3R0b206IDE1cHg7ICovXHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAvKiBtYXJnaW4tdG9wOiA0MHB4OyAqL1xyXG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOiAxMHB4IHNvbGlkOyAqL1xyXG59XHJcblxyXG4udGVhbTEgaDMudGVhbS1uYW1lIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi50ZWFtMSBoMy50ZWFtLXBvaW50cyB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uY2FyZCAudGVhbTEgaDMudGVhbS1uYW1lIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi5jYXJkIC50ZWFtMiBoMy50ZWFtLW5hbWUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuXHJcbi8qIGRpc3BsYXkgdGFibGUgKi9cclxuXHJcbi5wYXJlbnQtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTM1MzU7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4ubWFpbi1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5jb25hdGluZXItaGVhZGVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjE5MWM7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcclxufVxyXG5cclxuLmlubmVyLWNvbmF0aW5lciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHggMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODM3Mzc7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxufVxyXG5cclxuLmhpZ2hsaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODUwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5ldmVucm93IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjNhM2E7XHJcbn1cclxuXHJcbnRkIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubWF0LXJvdzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzExZjFmO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1wYWdpbmF0b3Ige1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjgyODUwO1xyXG59XHJcblxyXG4ubWF0LWNlbGwge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC8qIFNUWUxFUyBIRVJFIGZvciBCUk9XU0VSIFdJTkRPV1Mgd2l0aCBhIG1heC13aWR0aCBvZiA0ODBweC5cclxuICAgICAgIFRoaXMgd2lsbCB3b3JrIG9uIGRlc2t0b3BzIHdoZW4gdGhlIHdpbmRvdyBpcyBuYXJyb3dlZC4gICovXHJcblxyXG4gICAgICAgLmNhcmQge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00JSwgNSUpO1xyXG4gICAgICAgIHdpZHRoOiAzMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgICAgaGVpZ2h0OiAzMTBweDtcclxuICAgICAgICBtYXJnaW46IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgLyogYm94LXNoYWRvdzogMCAwIDAgMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7ICovXHJcbiAgICB9XHJcblxyXG4gICAgLmxlZnQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDAlO1xyXG4gICAgICAgIGxlZnQ6IC0xMjAlO1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMCU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIC8qIGJvcmRlci10b3A6IDVweCBzb2xpZCAjNDMwMDY0OyAqL1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2tld1goLTVkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkPi5sZWZ0IHtcclxuICAgICAgICBsZWZ0OiAtMTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMCU7XHJcbiAgICAgICAgcmlnaHQ6IC0xMDAlO1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMCU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIC8qIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZWY5YjBmOyAqL1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2tld1goLTVkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkPi5yaWdodCB7XHJcbiAgICAgICAgcmlnaHQ6IC05JTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZCBoMiB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZCBoMiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmMDA1NztcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICAubWF0Y2gtZGV0YWlscyB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC8qIGNvbG9yOiBibGFjazsgKi9cclxuICAgIH1cclxuXHJcbiAgICAudmVyc3VzIHtcclxuICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTkxZTYzO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuMztcclxuICAgIH1cclxuXHJcbiAgICAuZGF0ZSB7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDAgMDtcclxuICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZWFtMSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC52ZW51ZXtcclxuICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIH1cclxuXHJcbiAgICAudGVhbTIge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAudGVhbTEgaW1nLFxyXG4gICAgLnRlYW0yIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXRhaWxzIHtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwJTtcclxuICAgICAgICBtaW4td2lkdGg6IDM3JTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaDMudGVhbS1uYW1lIHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDAgMDtcclxuICAgICAgICAvKiBtYXJnaW4tYm90dG9tOiAxNXB4OyAqL1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNzVweDtcclxuICAgICAgICAvKiB0ZXh0LWRlY29yYXRpb246IDEwcHggc29saWQ7ICovXHJcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgaDMudGVhbS1wb2ludHMge1xyXG4gICAgICAgIC8qIHBhZGRpbmc6IDE1cHggMCAwOyAqL1xyXG4gICAgICAgIC8qIG1hcmdpbi1ib3R0b206IDE1cHg7ICovXHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAvKiBtYXJnaW4tdG9wOiAxcHg7ICovXHJcbiAgICAgICAgLyogdGV4dC1kZWNvcmF0aW9uOiAxMHB4IHNvbGlkOyAqL1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnRlYW0xIGgzLnRlYW0tbmFtZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnRlYW0xIGgzLnRlYW0tcG9pbnRzIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIC50ZWFtMSBoMy50ZWFtLW5hbWUge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIC50ZWFtMiBoMy50ZWFtLW5hbWUge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLnByb2ZpbGUtcGljdHVyZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cclxuICAvKiBib3JkZXI6IG5vbmUhaW1wb3J0YW50OyAqL1xyXG59XHJcblxyXG4uaW5zaWRlLXRke1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "fR/j":
/*!*************************************************************!*\
  !*** ./src/app/user/betting-page/betting-page.component.ts ***!
  \*************************************************************/
/*! exports provided: BettingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BettingPageComponent", function() { return BettingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/components/loading/loading.component */ "4cPp");
/* harmony import */ var src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/components/snackbar/snackbar.component */ "j7cY");
/* harmony import */ var src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/constants/error-message */ "jsD4");
/* harmony import */ var src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/constants/snackbar-properties */ "fc4o");
/* harmony import */ var src_app_common_constants_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/constants/utils */ "1lvy");
/* harmony import */ var _insert_update_contest_insert_update_contest_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./insert-update-contest/insert-update-contest.component */ "Kbag");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_common_service_bot_bot_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/common/service/bot/bot.service */ "9vxe");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_common_service_matches_service_matches_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/common/service/matches_service/matches.service */ "gD1G");
/* harmony import */ var src_app_common_service_user_service_user_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/common/service/user_service/user.service */ "2/mB");
/* harmony import */ var src_app_common_service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/common/service/login_state/loginstate.service */ "1d9a");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");





























function BettingPageComponent_mat_icon_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "trending_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function BettingPageComponent_mat_icon_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "trending_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function BettingPageComponent_mat_icon_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "trending_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function BettingPageComponent_mat_icon_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "trending_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function BettingPageComponent_button_49_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BettingPageComponent_button_49_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r14.openInsertDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Place Bet");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function BettingPageComponent_button_50_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BettingPageComponent_button_50_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r16.openUpdateDialog(ctx_r16.checkk); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Update Bet");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function BettingPageComponent_th_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " User ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return { "padding": "10px", "background-color": a1, "border-radius": "50%" }; };
function BettingPageComponent_td_66_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c0, ctx_r19.stringToColorFunction(element_r18.firstName + element_r18.lastName)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](element_r18.firstName.substr(0, 1).toUpperCase() + element_r18.lastName.substr(0, 1).toUpperCase());
} }
function BettingPageComponent_td_66_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 53);
} if (rf & 2) {
    const element_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("src", element_r18.profilePicture, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("alt", element_r18.firstName.substr(0, 1).toUpperCase() + element_r18.lastName.substr(0, 1).toUpperCase());
} }
const _c1 = function (a0, a1) { return { "background-color": a0, "color": a1 }; };
const _c2 = function () { return { "margin-left": "5px" }; };
function BettingPageComponent_td_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, BettingPageComponent_td_66_span_3_Template, 2, 4, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, BettingPageComponent_td_66_img_4_Template, 1, 2, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](6, _c1, ctx_r7.un == element_r18.username ? "#E4E6FF" : "", ctx_r7.un == element_r18.username ? "black" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !element_r18.profilePicture);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", element_r18.profilePicture);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](9, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", element_r18.firstName, " ", element_r18.lastName, " ");
} }
function BettingPageComponent_th_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Bet Team ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function BettingPageComponent_td_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](2, _c1, ctx_r9.un == element_r23.username ? "#E4E6FF" : "", ctx_r9.un == element_r23.username ? "black" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", element_r23.teamShortName, " ");
} }
function BettingPageComponent_th_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Bet Points ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function BettingPageComponent_td_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](2, _c1, ctx_r11.un == element_r24.username ? "#E4E6FF" : "", ctx_r11.un == element_r24.username ? "black" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", element_r24.contestPoints, " ");
} }
function BettingPageComponent_tr_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 54);
} }
const _c3 = function (a0) { return { "evenrow": a0 }; };
function BettingPageComponent_tr_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 55);
} if (rf & 2) {
    const index_r26 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](1, _c3, index_r26 % 2 == 1));
} }
const _c4 = function () { return [10, 20, 30, 40, 50]; };
class BettingPageComponent {
    constructor(fb, route, botservice, snackbar, dialog, matchservice, userservice, loginStateService, router) {
        var _a;
        this.fb = fb;
        this.route = route;
        this.botservice = botservice;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.matchservice = matchservice;
        this.userservice = userservice;
        this.loginStateService = loginStateService;
        this.router = router;
        this.teamColor = {
            1: "#ff0",
            2: "#2561ae",
            3: "#00416a",
            4: "#7300ab",
            5: "#ace5ee",
            6: "#004f91",
            7: "#ed1f27",
            8: "RGB(37 ,74 ,165)",
            9: "#d5152c",
            10: "#f7a721",
            //in case if the ids of the above teams changes, default colors will be used
            t1: 'pink',
            t2: 'silver' //
        };
        this.teamFontColor = {
            1: "black",
            2: "#fff",
            3: "#fff",
            4: "#fff",
            5: "black",
            6: "#fff",
            7: "#fff",
            8: "white",
            9: "#fff",
            10: "black",
            //in case if the ids of the above teams changes, default colors will be used
            t1: 'black',
            t2: 'black' //
        };
        this.borderTop = {
            1: "5px solid #ef9b0f",
            2: "5px solid #4B9CD3",
            3: "5px solid #1d2951",
            4: "5px solid #430064",
            5: "5px solid #9bc4e2",
            6: "5px solid blue",
            7: "5px solid #af002a",
            8: "5px solid #1877F2",
            9: "5px solid #800000",
            10: "5px solid #F05E23",
            //in case if the ids of the above teams changes, default colors will be used
            t1: 'pink',
            t2: 'silver' //
        };
        this.teamShortName = {
            1: "CSK",
            2: "DC",
            3: "GT",
            4: "KKR",
            5: "LSG",
            6: "MI",
            7: "PBKS",
            8: "RR",
            9: "RCB",
            10: "SRH"
        };
        this.botData = [];
        this.displayedColumns = ['username', 'teamshortname', 'contestPoints'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.loginState = this.loginStateService.getLoginState();
        this.un = (_a = this.loginState) === null || _a === void 0 ? void 0 : _a.username;
        // THIS IS FOR CALCULATION PURPOSE ONLY
        this.team1points = 0;
        this.team2points = 0;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.params.subscribe((data) => {
                this.matchId = data.id;
            });
            this.calc = yield this.getAllPlayerBetsByMatchIdForCalculation(this.matchId);
            this.botData = yield this.getAllPlayerBetsByMatchId(this.matchId);
            // console.log(this.botData);
            this.dataSource.data = this.botData;
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            this.matchData = yield this.getMatchById(this.matchId);
            // console.log(this.matchData);
            this.checkMatchDate(this.matchData.startDatetime);
            this.checkk = yield this.getPlayersBetByUserAndMatchId(this.loginState.userId, this.matchId);
            // console.log(this.checkk);
            this.selectedTeam = this.matchData.team1Id === this.checkk.teamId ? this.matchData.team1 : this.matchData.team2Id === this.checkk.teamId ? this.matchData.team2 : 'N/A';
            this.userData = yield this.getUsersById();
            // console.log(this.userData);
            this.team1Total = this.Team1TotalUsers(this.botData, this.matchData);
            this.team2Total = this.Team2TotalUsers(this.botData, this.matchData);
        });
    }
    stringToColorFunction(color) {
        return Object(src_app_common_constants_utils__WEBPACK_IMPORTED_MODULE_8__["stringToColor"])(color);
    }
    checkMatchDate(dateSent) {
        // this.location.replaceState('');
        let currentDate = new Date();
        dateSent = new Date(dateSent);
        var diffMs = (dateSent.getTime() - currentDate.getTime()); // milliseconds between now & Christmas
        var diffDays = Math.floor(diffMs / 86400000); // days
        // console.log(diffDays);
        const days = diffDays;
        // return  this.days;
        if (days >= 5) {
            this.router.navigate([this.loginState.role + `/match-list`]);
            let panelClass = 'red';
            let snackbarMsg = 'Match Out of Range ;-)';
            let snackbarRef = null;
            snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_7__["getSnackbarProperties"])(snackbarMsg, panelClass));
        }
        else if (days < 0) {
            this.router.navigate([this.loginState.role + `/match-list`]);
            let panelClass = 'red';
            let snackbarMsg = 'Match Out of Range ;-)';
            let snackbarRef = null;
            snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_7__["getSnackbarProperties"])(snackbarMsg, panelClass));
        }
    }
    Team1TotalUsers(inputs1, inputs2) {
        let counter = 0;
        for (const input1 of inputs1) {
            if (input1.teamShortName === (inputs2 === null || inputs2 === void 0 ? void 0 : inputs2.team1Short))
                counter += 1;
        }
        return counter;
    }
    Team2TotalUsers(inputs1, inputs2) {
        let counter = 0;
        for (const input1 of inputs1) {
            if (input1.teamShortName === (inputs2 === null || inputs2 === void 0 ? void 0 : inputs2.team2Short))
                counter += 1;
        }
        return counter;
    }
    getUsersById() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let panelClass = 'green';
            let snackbarMsg = '';
            let snackbarRef = null;
            const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"], {
                disableClose: true,
            });
            let userModel = [];
            let resp = null;
            try {
                resp = yield this.userservice.getUserById(this.loginState.userId);
                userModel = resp.body;
                if (userModel) {
                    dialogRef.close();
                    return userModel;
                }
                else {
                    snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_6__["NO_RESP"];
                    panelClass = 'red';
                }
            }
            catch (ex) {
                snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_6__["getErrorMessage"])(ex);
                panelClass = 'red';
            }
            finally {
                dialogRef.close();
            }
            if (snackbarMsg) {
                snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_7__["getSnackbarProperties"])(snackbarMsg, panelClass));
            }
            return [];
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    getMatchById(matchId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let panelClass = 'green';
            let snackbarMsg = '';
            let snackbarRef = null;
            const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"], {
                disableClose: true,
            });
            let matchModel = [];
            let resp = null;
            try {
                resp = yield this.matchservice.viewMatchById(matchId);
                matchModel = resp.body;
                if (matchModel) {
                    dialogRef.close();
                    return matchModel;
                }
                else {
                    snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_6__["NO_RESP"];
                    panelClass = 'red';
                }
            }
            catch (ex) {
                snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_6__["getErrorMessage"])(ex);
                panelClass = 'red';
            }
            finally {
                dialogRef.close();
            }
            if (snackbarMsg) {
                snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_7__["getSnackbarProperties"])(snackbarMsg, panelClass));
            }
            return [];
        });
    }
    // GET ALL PLAYER BETS ON TEAM
    getAllPlayerBetsByMatchId(matchId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let panelClass = 'green';
            let snackbarMsg = '';
            let snackbarRef = null;
            const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"], {
                disableClose: true,
            });
            let botModel = [];
            let resp = null;
            try {
                resp = yield this.botservice.viewAllContestByMatchId(matchId);
                botModel = resp.body;
                this.findsum(botModel);
                if (botModel) {
                    dialogRef.close();
                    return botModel;
                }
                else {
                    snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_6__["NO_RESP"];
                    panelClass = 'red';
                }
            }
            catch (ex) {
                snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_6__["getErrorMessage"])(ex);
                panelClass = 'red';
            }
            finally {
                dialogRef.close();
            }
            if (snackbarMsg) {
                snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_7__["getSnackbarProperties"])(snackbarMsg, panelClass));
            }
            return [];
        });
    }
    // CHECK IF PLAYER HAS PLACED BET
    getPlayersBetByUserAndMatchId(userId, matchId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let panelClass = 'green';
            let snackbarMsg = '';
            let snackbarRef = null;
            const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"], {
                disableClose: true,
            });
            let botModel = [];
            let resp = null;
            try {
                resp = yield this.botservice.viewAllContestByUserAndMatchId(userId, matchId);
                botModel = resp.body;
                if (botModel) {
                    dialogRef.close();
                    return botModel;
                }
                else {
                    snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_6__["NO_RESP"];
                    panelClass = 'red';
                }
            }
            catch (ex) {
                snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_6__["getErrorMessage"])(ex);
                panelClass = 'yellow';
            }
            finally {
                dialogRef.close();
            }
            if (snackbarMsg) {
                snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_7__["getSnackbarProperties"])(snackbarMsg, panelClass));
            }
            return [];
        });
    }
    //  ADD BETS AND UPDATE BETS
    playAudio() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let audio = new Audio();
            audio.src = '';
            audio.load();
            audio.play();
        });
    }
    openInsertDialog() {
        const dialogRef = this.dialog.open(_insert_update_contest_insert_update_contest_component__WEBPACK_IMPORTED_MODULE_9__["InsertUpdateContestComponent"], {
            panelClass: 'no-padding-dialog',
            disableClose: true,
            data: { matchId: this.matchId },
        });
        dialogRef
            .afterClosed()
            .toPromise()
            .then((data) => {
            if (data) {
                // this.botData.push(data);
                // this.dataSource.data = this.botData;
                this.playAudio();
                this.botData.push(data);
                let volume = this.botData.map((d) => d.contestId == data.contestId ? Object.assign(Object.assign({}, d), { contestPoints: data.contestPoints, firstName: this.userData.firstName, lastName: this.userData.lastName, teamShortName: this.teamShortName[data.teamId], username: this.userData.username }) : d);
                this.userData.availablePoints -= data.contestPoints;
                this.oldPoints = data.contestPoints;
                this.dataSource.data = volume;
                this.botData = volume;
                this.checkk = data;
                this.team1points = 0;
                this.team2points = 0;
                this.findsum(volume);
                this.team1Total = this.Team1TotalUsers(volume, this.matchData);
                this.team2Total = this.Team2TotalUsers(volume, this.matchData);
                this.selectedTeam = this.matchData.team1Id === this.checkk.teamId ? this.matchData.team1 : this.matchData.team2Id === this.checkk.teamId ? this.matchData.team2 : 'N/A';
                // location.reload();
            }
        });
    }
    openUpdateDialog(data) {
        const dialogRef = this.dialog.open(_insert_update_contest_insert_update_contest_component__WEBPACK_IMPORTED_MODULE_9__["InsertUpdateContestComponent"], {
            panelClass: 'no-padding-dialog',
            disableClose: true,
            data,
        });
        dialogRef
            .afterClosed()
            .toPromise()
            .then((data) => {
            if (data) {
                // this.botData.push(data);
                // this.dataSource.data = data;
                // this.dataSource.data.find((payload) => {
                //   if (payload.contestId == data.contestId) {
                //     let indexNo = this.botData.findIndex(q => q.contestId == data.contestId);
                //     this.botData.splice(indexNo,1);
                //     this.botData.push(data);
                //     this.dataSource.data = this.botData;
                //   }
                // });
                this.playAudio();
                let tempBotData = this.botData;
                let indexOfTempBotData = tempBotData.findIndex(i => i.contestId == data.contestId);
                let volume = this.botData.map((d) => d.contestId == data.contestId ? Object.assign(Object.assign({}, d), { contestPoints: data.contestPoints, firstName: tempBotData[indexOfTempBotData].firstName, lastName: tempBotData[indexOfTempBotData].lastName, teamShortName: this.teamShortName[data.teamId] }) : d);
                if (this.oldPoints == null) {
                    this.userData.availablePoints = this.userData.availablePoints + this.checkk.contestPoints - data.contestPoints;
                }
                else if (this.oldPoints != null) {
                    this.userData.availablePoints = this.userData.availablePoints + this.oldPoints - data.contestPoints;
                }
                this.oldPoints = data.contestPoints;
                this.dataSource.data = volume;
                this.botData = volume;
                this.team1points = 0;
                this.team2points = 0;
                this.findsum(volume);
                this.team1Total = this.Team1TotalUsers(volume, this.matchData);
                this.team2Total = this.Team2TotalUsers(volume, this.matchData);
                this.checkk = data;
                this.selectedTeam = this.matchData.team1Id === this.checkk.teamId ? this.matchData.team1 : this.matchData.team2Id === this.checkk.teamId ? this.matchData.team2 : 'N/A';
                // location.reload();
            }
        });
    }
    findsum(data) {
        data.forEach((element) => {
            if (element.teamShortName == this.calc.team1Short) {
                this.team1points += element.contestPoints;
            }
            else if (element.teamShortName == this.calc.team2Short)
                this.team2points += element.contestPoints;
        });
    }
    getAllPlayerBetsByMatchIdForCalculation(matchId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let panelClass = 'green';
            let snackbarMsg = '';
            let snackbarRef = null;
            const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"], {
                disableClose: true,
            });
            let matchModel = [];
            let resp = null;
            try {
                resp = yield this.matchservice.viewMatchById(matchId);
                matchModel = resp.body;
                if (matchModel) {
                    dialogRef.close();
                    return matchModel;
                }
                else {
                    snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_6__["NO_RESP"];
                    panelClass = 'red';
                }
            }
            catch (ex) {
                snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_6__["getErrorMessage"])(ex);
                panelClass = 'red';
            }
            finally {
                dialogRef.close();
            }
            if (snackbarMsg) {
                snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_7__["getSnackbarProperties"])(snackbarMsg, panelClass));
            }
            return [];
        });
    }
    getColorForTeam1() {
        return this.matchData && this.matchData.team1Id
            ? this.teamColor[this.matchData.team1Id]
            : this.teamColor.t1;
    }
    getColorForTeam2() {
        return this.matchData && this.matchData.team2Id
            ? this.teamColor[this.matchData.team2Id]
            : this.teamColor.t2;
    }
    getFontColorForTeam1() {
        return this.matchData && this.matchData.team1Id
            ? this.teamFontColor[this.matchData.team1Id]
            : this.teamFontColor.t1;
    }
    getFontColorForTeam2() {
        return this.matchData && this.matchData.team2Id
            ? this.teamFontColor[this.matchData.team2Id]
            : this.teamFontColor.t2;
    }
    getBorderColorForTeam1() {
        return this.matchData && this.matchData.team1Id
            ? this.borderTop[this.matchData.team1Id]
            : this.borderTop.t1;
    }
    getBorderColorForTeam2() {
        return this.matchData && this.matchData.team2Id
            ? this.borderTop[this.matchData.team2Id]
            : this.borderTop.t2;
    }
}
BettingPageComponent.ɵfac = function BettingPageComponent_Factory(t) { return new (t || BettingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_common_service_bot_bot_service__WEBPACK_IMPORTED_MODULE_13__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_common_service_matches_service_matches_service__WEBPACK_IMPORTED_MODULE_16__["MatchesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_common_service_user_service_user_service__WEBPACK_IMPORTED_MODULE_17__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_common_service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_18__["LoginstateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"])); };
BettingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: BettingPageComponent, selectors: [["app-betting-page"]], viewQuery: function BettingPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 76, vars: 44, consts: [[1, "card"], [1, "left"], [1, "right"], [1, "match-details"], [1, "team1"], ["loading", "lazy", 2, "border-radius", "50%", 3, "src"], [1, "team-name"], [1, "team-points"], [1, "details"], [1, "date"], [1, "versus"], [1, "venue"], [1, "team2"], [1, "middle__div"], [1, "left__div"], ["class", "trend__up", 4, "ngIf"], ["class", "trend__down", 4, "ngIf"], [1, "fas", "fa-users"], [1, "middle"], [1, "points"], [1, "right__div"], [1, "teamData"], [1, "selectedTeam"], ["mat-raised-button", "", "matRipple", "", "color", "accent", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 3, "click", 4, "ngIf"], [1, "parent-container", "container-fluid"], [1, "mat-elevation-z20", "container", "main-container"], [1, "conatiner-header"], [1, "inner-conatiner"], [1, "inner-container-actions"], ["appearance", "outline", "color", "accent"], ["matInput", "", "placeholder", "Search Players", "type", "search", 2, "color", "white", 3, "keyup"], ["color", "accent", "matSuffix", ""], ["mat-table", "", "matSort", "", 1, "mat-elevation-z21", 3, "dataSource"], ["matColumnDef", "username"], ["mat-header-cell", "", "mat-sort-header", "", "class", "highlight", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "ngStyle", 4, "matCellDef"], ["matColumnDef", "teamshortname"], ["matColumnDef", "contestPoints"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", 4, "matRowDef", "matRowDefColumns"], ["color", "accent", "showFirstLastButtons", "", 3, "pageSizeOptions"], [1, "trend__up"], [1, "trend__down"], ["mat-raised-button", "", "matRipple", "", "color", "accent", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "", 1, "highlight"], ["mat-cell", "", 3, "ngStyle"], [1, "inside-td"], ["loading", "lazy", 3, "ngStyle", 4, "ngIf"], ["class", "profile-picture thumbnail-image", "loading", "lazy", 3, "src", "alt", 4, "ngIf"], [3, "ngStyle"], ["loading", "lazy", 3, "ngStyle"], ["loading", "lazy", 1, "profile-picture", "thumbnail-image", 3, "src", "alt"], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass"]], template: function BettingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](16, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "VS");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](30, BettingPageComponent_mat_icon_30_Template, 2, 0, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, BettingPageComponent_mat_icon_31_Template, 2, 0, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](32, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "h2", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](38, BettingPageComponent_mat_icon_38_Template, 2, 0, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](39, BettingPageComponent_mat_icon_39_Template, 2, 0, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](40, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](49, BettingPageComponent_button_49_Template, 2, 0, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](50, BettingPageComponent_button_50_Template, 2, 0, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54, " Bet Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "mat-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keyup", function BettingPageComponent_Template_input_keyup_60_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "mat-icon", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "table", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](64, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](65, BettingPageComponent_th_65_Template, 2, 0, "th", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](66, BettingPageComponent_td_66_Template, 7, 10, "td", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](67, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](68, BettingPageComponent_th_68_Template, 2, 0, "th", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](69, BettingPageComponent_td_69_Template, 2, 5, "td", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](70, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](71, BettingPageComponent_th_71_Template, 2, 0, "th", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](72, BettingPageComponent_td_72_Template, 2, 5, "td", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](73, BettingPageComponent_tr_73_Template, 1, 0, "tr", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](74, BettingPageComponent_tr_74_Template, 1, 3, "tr", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](75, "mat-paginator", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("border-top", ctx.getBorderColorForTeam1())("background-color", ctx.getColorForTeam1());
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("border-top", ctx.getBorderColorForTeam2())("background-color", ctx.getColorForTeam2());
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.matchData == null ? null : ctx.matchData.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("src", ctx.matchData == null ? null : ctx.matchData.team1Logo, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("color", ctx.getFontColorForTeam1());
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx.matchData == null ? null : ctx.matchData.team1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("color", ctx.getFontColorForTeam1());
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.team1points);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](16, 40, ctx.matchData == null ? null : ctx.matchData.startDatetime, "medium"), " IST ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx.matchData == null ? null : ctx.matchData.venue, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("src", ctx.matchData == null ? null : ctx.matchData.team2Logo, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("color", ctx.getFontColorForTeam2());
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx.matchData == null ? null : ctx.matchData.team2, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("color", ctx.getFontColorForTeam2());
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.team2points);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.team1Total > ctx.team2Total);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.team1Total < ctx.team2Total);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.team1Total, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Available Points : ", ctx.userData == null ? null : ctx.userData.availablePoints, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.team2Total > ctx.team1Total);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.team2Total < ctx.team1Total);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.team2Total, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Selected Team : ", ctx.selectedTeam, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Bet Points : ", (ctx.checkk == null ? null : ctx.checkk.contestPoints) || "N/A", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !(ctx.checkk == null ? null : ctx.checkk.userId));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.checkk == null ? null : ctx.checkk.userId);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](43, _c4));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatSuffix"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRipple"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_25__["DefaultStyleDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_25__["DefaultClassDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["DatePipe"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');\r\nbody[_ngcontent-%COMP%] {\r\n    background: linear-gradient(to right, #258153, #1c5bd1);\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Montserrat', sans-serif;\r\n    \r\n    background-size: cover;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    height: auto;\r\n    align-self: flex-start;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    \r\n    transform: translate(-4%, 5%);\r\n    width: 600px;\r\n    background: rgba(255, 255, 255, 0.5);\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    transition: 0.5s;\r\n    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.2);\r\n    height: auto;\r\n    margin: 30px;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    \r\n}\r\n.left[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0%;\r\n    left: -120%;\r\n    width: 60%;\r\n    height: 30%;\r\n    transition: 0.5s;\r\n    box-sizing: border-box;\r\n    \r\n    transform: skewX(-5deg);\r\n}\r\n.card[_ngcontent-%COMP%] > .left[_ngcontent-%COMP%] {\r\n    left: -10%;\r\n}\r\n.right[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0%;\r\n    right: -120%;\r\n    width: 60%;\r\n    height: 30%;\r\n    transition: 0.5s;\r\n    box-sizing: border-box;\r\n    \r\n    transform: skewX(-5deg);\r\n}\r\n.card[_ngcontent-%COMP%] > .right[_ngcontent-%COMP%] {\r\n    right: -9%;\r\n}\r\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    margin: 0;\r\n    padding: 20px;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n    transition: 0.5s;\r\n}\r\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    background: #ff0057;\r\n    color: #fff;\r\n}\r\n.match-details[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    \r\n}\r\n.versus[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    height: 50px;\r\n    font-size: 24px;\r\n    border-radius: 50%;\r\n    background: #e91e63;\r\n    color: #fff;\r\n    text-align: center;\r\n    line-height: 50px;\r\n    margin: 20px auto;\r\n}\r\n.date[_ngcontent-%COMP%] {\r\n    margin: 20px 0 0;\r\n}\r\n.team1[_ngcontent-%COMP%] {\r\n    width: 180px;\r\n    float: left;\r\n    padding: 10px 15px 0px;\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n    height: auto;\r\n}\r\n.team2[_ngcontent-%COMP%] {\r\n    width: 180px;\r\n    float: left;\r\n    padding: 10px 15px 0px;\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n    height: auto;\r\n}\r\n.team1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .team2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.details[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    min-width: 39%;\r\n    min-height: 200px;\r\n    height: auto;\r\n    float: left;\r\n    text-align: center;\r\n}\r\nh3.team-name[_ngcontent-%COMP%] {\r\n    padding: 20px 0 0;\r\n    \r\n    text-align: right;\r\n    transition: 0.5s;\r\n    margin-top: 40px;\r\n    \r\n}\r\nh3.team-points[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    text-align: right;\r\n    transition: 0.5s;\r\n    \r\n    \r\n}\r\n.team1[_ngcontent-%COMP%]   h3.team-name[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n}\r\n.team1[_ngcontent-%COMP%]   h3.team-points[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n}\r\n.card[_ngcontent-%COMP%]   .team1[_ngcontent-%COMP%]   h3.team-name[_ngcontent-%COMP%] {\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    font-size: large;\r\n}\r\n.card[_ngcontent-%COMP%]   .team2[_ngcontent-%COMP%]   h3.team-name[_ngcontent-%COMP%] {\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    font-size: large;\r\n}\r\n\r\n\r\n.sub-container-1-inner[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n.signup-container[_ngcontent-%COMP%] {\r\n    \r\n    display: flex;\r\n}\r\n.first[_ngcontent-%COMP%] {\r\n    padding: 30px 30px 10px 60px;\r\n}\r\n.first[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 80px;\r\n    width: 80px;\r\n    margin: 0 0 20px 0;\r\n}\r\n.first[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-weight: lighter;\r\n    font-family: Agency Fb;\r\n    font-size: 40px;\r\n    letter-spacing: 3px;\r\n    padding-bottom: 10px;\r\n}\r\n.second[_ngcontent-%COMP%] {\r\n    padding: 30px 60px 10px 30px;\r\n}\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n    margin: 10px auto;\r\n    display: blocks;\r\n    width: 300px;\r\n}\r\nmat-radio-button[_ngcontent-%COMP%] {\r\n    margin: 10px auto;\r\n    display: flex;\r\n    \r\n}\r\n.mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n.mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n.mat-raised-button[_ngcontent-%COMP%] {\r\n    margin: 30px auto;\r\n}\r\n.action-container[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n    padding-right: 50px;\r\n}\r\n.action-container[_ngcontent-%COMP%] > .mat-raised-button[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n}\r\n.title[_ngcontent-%COMP%] {\r\n    background: linear-gradient(to right, #dd3e54, #6be585);\r\n    \r\n    padding: 10px 0px;\r\n    font-size: 18px;\r\n}\r\n.cancel-btn[_ngcontent-%COMP%] {\r\n    background-color: #f44336;\r\n    border-radius: 4px;\r\n    padding: 6px 15px 8px;\r\n    cursor: pointer;\r\n    box-shadow: 1px 1px 1px #1b1d1f;\r\n}\r\n\r\n.parent-container[_ngcontent-%COMP%] {\r\n    background-color: #353535;\r\n    padding-top: 50px;\r\n    padding-bottom: 50px;\r\n}\r\n.main-container[_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n    padding-bottom: 20px;\r\n    background-color: #292929;\r\n    border: 1px solid gray;\r\n    border-radius: 10px;\r\n}\r\n.conatiner-header[_ngcontent-%COMP%] {\r\n    color: white;\r\n    background-color: #16191c;\r\n    padding: 10px 10px;\r\n    font-size: 20px;\r\n    border-radius: 10px 10px 0px 0px;\r\n}\r\n.inner-conatiner[_ngcontent-%COMP%] {\r\n    padding: 10px 30px 20px;\r\n    background-color: #383737;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background-color: #333333;\r\n}\r\n.highlight[_ngcontent-%COMP%] {\r\n    background-color: #282850;\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n.evenrow[_ngcontent-%COMP%] {\r\n    background-color: #3b3a3a;\r\n}\r\ntd[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n}\r\n.mat-row[_ngcontent-%COMP%]:hover {\r\n    background-color: #311f1f;\r\n}\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\nmat-paginator[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    background: #282850;\r\n}\r\n.mat-cell[_ngcontent-%COMP%] {\r\n    padding-right: 10px;\r\n}\r\n\r\n.points[_ngcontent-%COMP%] {\r\n    background: conic-gradient( #fd004c, #fe9000, #fff020, #3edf4b, #fd004c);\r\n    animation: rotate 1.5s infinite linear;\r\n    padding: 0 7px;\r\n    border-radius: 20px;\r\n}\r\n@keyframes rotate {\r\n    0% {\r\n        filter: hue-rotate(0deg);\r\n    }\r\n    100% {\r\n        filter: hue-rotate(360deg);\r\n    }\r\n}\r\n.middle__div[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    width: 50%;\r\n}\r\n\r\n.trend__up[_ngcontent-%COMP%] {\r\n    color: greenyellow;\r\n    margin-right: 10px;\r\n}\r\n.trend__down[_ngcontent-%COMP%] {\r\n    color: red;\r\n    margin-right: 10px;\r\n}\r\n.fas[_ngcontent-%COMP%] {\r\n    color: magenta;\r\n}\r\n.left__div[_ngcontent-%COMP%] {\r\n    font-weight: bolder;\r\n}\r\n.right__div[_ngcontent-%COMP%] {\r\n    font-weight: bolder;\r\n}\r\n.teamData[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 500px;\r\n}\r\n.selectedTeam[_ngcontent-%COMP%]{\r\n  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);\r\n  color: white;\r\n  margin-top: 10px;\r\n  padding: 5px 10px;\r\n  border-radius: 20px;\r\n  width: auto;\r\n  text-align: center;\r\n}\r\n@media only screen and (max-width: 480px) {\r\n    \r\n\r\n       .card[_ngcontent-%COMP%] {\r\n        transform: translate(-4%, 5%);\r\n        width: 320px;\r\n        background: rgba(255, 255, 255, 0.5);\r\n        border-radius: 10px;\r\n        overflow: hidden;\r\n        transition: 0.5s;\r\n        box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.2);\r\n        height: 310px;\r\n        margin: 30px;\r\n    }\r\n\r\n    .card[_ngcontent-%COMP%] {\r\n        background: #fff;\r\n        \r\n    }\r\n\r\n    .left[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        bottom: 0%;\r\n        left: -120%;\r\n        width: 60%;\r\n        height: 30%;\r\n        transition: 0.5s;\r\n        box-sizing: border-box;\r\n        \r\n        transform: skewX(-5deg);\r\n    }\r\n\r\n    .card[_ngcontent-%COMP%] > .left[_ngcontent-%COMP%] {\r\n        left: -10%;\r\n    }\r\n\r\n    .right[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        bottom: 0%;\r\n        right: -100%;\r\n        width: 60%;\r\n        height: 30%;\r\n        transition: 0.5s;\r\n        box-sizing: border-box;\r\n        \r\n        transform: skewX(-5deg);\r\n    }\r\n\r\n    .card[_ngcontent-%COMP%] > .right[_ngcontent-%COMP%] {\r\n        right: -9%;\r\n    }\r\n\r\n    .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        width: auto;\r\n        margin: 0;\r\n        padding: 20px;\r\n        text-align: center;\r\n        box-sizing: border-box;\r\n        transition: 0.5s;\r\n    }\r\n\r\n    .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        background: #ff0057;\r\n        color: #fff;\r\n    }\r\n\r\n    .match-details[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        \r\n    }\r\n\r\n    .versus[_ngcontent-%COMP%] {\r\n        width: 35px;\r\n        height: 35px;\r\n        font-size: 1rem;\r\n        border-radius: 50%;\r\n        background: #e91e63;\r\n        color: #fff;\r\n        text-align: center;\r\n        margin-bottom: 10px;\r\n        margin-top: 10px;\r\n        line-height: 2.3;\r\n    }\r\n\r\n    .date[_ngcontent-%COMP%] {\r\n        margin: 20px 0 0;\r\n        font-size: 0.6rem;\r\n        line-height: 1.5;\r\n        width: 100%;\r\n    }\r\n\r\n    .team1[_ngcontent-%COMP%] {\r\n        width: 100px;\r\n        float: left;\r\n        padding: 10px 20px 20px;\r\n        box-sizing: border-box;\r\n        text-align: center;\r\n    }\r\n\r\n    .venue[_ngcontent-%COMP%]{\r\n        font-size: 0.6rem;\r\n        line-height: 1;\r\n    }\r\n\r\n    .team2[_ngcontent-%COMP%] {\r\n        width: 100px;\r\n        float: left;\r\n        padding: 10px 20px 20px;\r\n        box-sizing: border-box;\r\n        text-align: center;\r\n    }\r\n\r\n    .team1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .team2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n\r\n    .details[_ngcontent-%COMP%] {\r\n        width: 25%;\r\n        min-height: 20%;\r\n        min-width: 37%;\r\n        float: left;\r\n        text-align: center;\r\n    }\r\n\r\n    h3.team-name[_ngcontent-%COMP%] {\r\n        padding: 15px 0 0;\r\n        \r\n        text-align: right;\r\n        transition: 0.5s;\r\n        margin-top: 75px;\r\n        \r\n        font-size: 0.7rem;\r\n        line-height: 1;\r\n    }\r\n\r\n    h3.team-points[_ngcontent-%COMP%] {\r\n        \r\n        \r\n        text-align: right;\r\n        transition: 0.5s;\r\n        \r\n        \r\n        font-size: 0.7rem;\r\n    }\r\n\r\n    .team1[_ngcontent-%COMP%]   h3.team-name[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n        font-size: 0.7rem;\r\n        font-family: 'Montserrat', sans-serif;\r\n        font-weight: bolder;\r\n    }\r\n\r\n    .team1[_ngcontent-%COMP%]   h3.team-points[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n        font-size: 0.7rem;\r\n    }\r\n\r\n    .card[_ngcontent-%COMP%]   .team1[_ngcontent-%COMP%]   h3.team-name[_ngcontent-%COMP%] {\r\n        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n        font-size: large;\r\n        font-size: 0.7rem;\r\n    }\r\n\r\n    .card[_ngcontent-%COMP%]   .team2[_ngcontent-%COMP%]   h3.team-name[_ngcontent-%COMP%] {\r\n        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n        font-size: large;\r\n        font-size: 0.7rem;\r\n    }\r\n\r\n    \r\n\r\n    .middle__div[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: space-around;\r\n        width: 100%;\r\n    }\r\n\r\n    .middle[_ngcontent-%COMP%]{\r\n        \r\n        width: 30%;\r\n    }\r\n\r\n    .left__div[_ngcontent-%COMP%] {\r\n        font-weight: bolder;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-around;\r\n    }\r\n\r\n    .right__div[_ngcontent-%COMP%] {\r\n        font-weight: bolder;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-around;\r\n    }\r\n\r\n    .teamData[_ngcontent-%COMP%]{\r\n      flex-direction: column;\r\n      width: auto;\r\n    }\r\n\r\n}\r\n.profile-picture[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  height: 40px;\r\n  width: 40px;\r\n  background-color: orange;\r\n  \r\n  \r\n}\r\n.inside-td[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJldHRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJHQUEyRztBQUMzRztJQUNJLHVEQUF1RDtJQUN2RCxTQUFTO0lBQ1QsVUFBVTtJQUNWLHFDQUFxQztJQUNyQyx3Q0FBd0M7SUFDeEMsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLCtDQUErQztJQUMvQyxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFEQUFxRDtBQUN6RDtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyx1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyx1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBRUE7O0lBRUksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztBQUNyQztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixpQ0FBaUM7QUFDckM7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSx3RUFBd0U7SUFDeEUsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSx3RUFBd0U7SUFDeEUsZ0JBQWdCO0FBQ3BCO0FBR0E7Ozs7Ozs7Q0FPQztBQUdELGVBQWU7QUFFZjtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGFBQWE7QUFDakI7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSx1REFBdUQ7SUFDdkQsK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsK0JBQStCO0FBQ25DO0FBR0Esa0JBQWtCO0FBRWxCO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQ0FBZ0M7QUFDcEM7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsV0FBVztBQUNmO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBLGVBQWU7QUFFZjtJQUNJLHdFQUF3RTtJQUN4RSxzQ0FBc0M7SUFDdEMsY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKO0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixVQUFVO0FBQ2Q7QUFHQTs7R0FFRztBQUVIO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkO0FBRUE7RUFDRSxrR0FBa0c7RUFDbEcsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFFQTtJQUNJO2lFQUM2RDs7T0FFMUQ7UUFDQyw2QkFBNkI7UUFDN0IsWUFBWTtRQUNaLG9DQUFvQztRQUNwQyxtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQiwrQ0FBK0M7UUFDL0MsYUFBYTtRQUNiLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIscURBQXFEO0lBQ3pEOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixXQUFXO1FBQ1gsVUFBVTtRQUNWLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsc0JBQXNCO1FBQ3RCLG1DQUFtQztRQUNuQyx1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFlBQVk7UUFDWixVQUFVO1FBQ1YsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixzQkFBc0I7UUFDdEIsbUNBQW1DO1FBQ25DLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFdBQVc7UUFDWCxTQUFTO1FBQ1QsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxZQUFZO1FBQ1osV0FBVztRQUNYLHVCQUF1QjtRQUN2QixzQkFBc0I7UUFDdEIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osV0FBVztRQUNYLHVCQUF1QjtRQUN2QixzQkFBc0I7UUFDdEIsa0JBQWtCO0lBQ3RCOztJQUVBOztRQUVJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGVBQWU7UUFDZixjQUFjO1FBQ2QsV0FBVztRQUNYLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQix5QkFBeUI7UUFDekIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsaUNBQWlDO1FBQ2pDLGlCQUFpQjtRQUNqQixjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksdUJBQXVCO1FBQ3ZCLHlCQUF5QjtRQUN6QixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQixpQ0FBaUM7UUFDakMsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixxQ0FBcUM7UUFDckMsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLHdFQUF3RTtRQUN4RSxnQkFBZ0I7UUFDaEIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksd0VBQXdFO1FBQ3hFLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7O0lBRUEsZUFBZTs7SUFFZjtRQUNJLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsNkJBQTZCO1FBQzdCLFdBQVc7SUFDZjs7SUFFQTtRQUNJLDJCQUEyQjtRQUMzQixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qiw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qiw2QkFBNkI7SUFDakM7O0lBRUE7TUFDRSxzQkFBc0I7TUFDdEIsV0FBVztJQUNiOztBQUVKO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLDRCQUE0QjtBQUM5QjtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckIiLCJmaWxlIjoiYmV0dGluZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MjAwLDMwMCw0MDAsNTAwLDYwMCw3MDAsODAwLDkwMCZkaXNwbGF5PXN3YXAnKTtcclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNTgxNTMsICMxYzViZDEpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvc3RhZGl1bScpOyAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4gICAgLyogdG9wOiA1MCU7ICovXHJcbiAgICAvKiBsZWZ0OiAyNSU7ICovXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNCUsIDUlKTtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLyogYm94LXNoYWRvdzogMCAwIDAgMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7ICovXHJcbn1cclxuXHJcbi5sZWZ0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMCU7XHJcbiAgICBsZWZ0OiAtMTIwJTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLyogYm9yZGVyLXRvcDogNXB4IHNvbGlkICM0MzAwNjQ7ICovXHJcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC01ZGVnKTtcclxufVxyXG5cclxuLmNhcmQ+LmxlZnQge1xyXG4gICAgbGVmdDogLTEwJTtcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMCU7XHJcbiAgICByaWdodDogLTEyMCU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC8qIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZWY5YjBmOyAqL1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtNWRlZyk7XHJcbn1cclxuXHJcbi5jYXJkPi5yaWdodCB7XHJcbiAgICByaWdodDogLTklO1xyXG59XHJcblxyXG4uY2FyZCBoMiB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLmNhcmQgaDIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmMDA1NztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubWF0Y2gtZGV0YWlscyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvKiBjb2xvcjogYmxhY2s7ICovXHJcbn1cclxuXHJcbi52ZXJzdXMge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTkxZTYzO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgICBtYXJnaW46IDIwcHggMCAwO1xyXG59XHJcblxyXG4udGVhbTEge1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnRlYW0yIHtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4IDBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi50ZWFtMSBpbWcsXHJcbi50ZWFtMiBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5kZXRhaWxzIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1pbi13aWR0aDogMzklO1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDMudGVhbS1uYW1lIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMCAwO1xyXG4gICAgLyogbWFyZ2luLWJvdHRvbTogMTVweDsgKi9cclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAvKiB0ZXh0LWRlY29yYXRpb246IDEwcHggc29saWQ7ICovXHJcbn1cclxuXHJcbmgzLnRlYW0tcG9pbnRzIHtcclxuICAgIC8qIHBhZGRpbmc6IDE1cHggMCAwOyAqL1xyXG4gICAgLyogbWFyZ2luLWJvdHRvbTogMTVweDsgKi9cclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIC8qIG1hcmdpbi10b3A6IDQwcHg7ICovXHJcbiAgICAvKiB0ZXh0LWRlY29yYXRpb246IDEwcHggc29saWQ7ICovXHJcbn1cclxuXHJcbi50ZWFtMSBoMy50ZWFtLW5hbWUge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnRlYW0xIGgzLnRlYW0tcG9pbnRzIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5jYXJkIC50ZWFtMSBoMy50ZWFtLW5hbWUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuLmNhcmQgLnRlYW0yIGgzLnRlYW0tbmFtZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG5cclxuLyogLmNhcmQ6aG92ZXIgLnRlYW0xIGgzLnRlYW0tbmFtZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIC50ZWFtMSBoMy50ZWFtLXBvaW50cyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuKi9cclxuXHJcblxyXG4vKiBhZGQgdXBkYXRlICovXHJcblxyXG4uc3ViLWNvbnRhaW5lci0xLWlubmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zaWdudXAtY29udGFpbmVyIHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMxYjFkMWY7ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZmlyc3Qge1xyXG4gICAgcGFkZGluZzogMzBweCAzMHB4IDEwcHggNjBweDtcclxufVxyXG5cclxuLmZpcnN0IGltZyB7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIG1hcmdpbjogMCAwIDIwcHggMDtcclxufVxyXG5cclxuLmZpcnN0IHAge1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBmb250LWZhbWlseTogQWdlbmN5IEZiO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uc2Vjb25kIHtcclxuICAgIHBhZGRpbmc6IDMwcHggNjBweCAxMHB4IDMwcHg7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrcztcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiB3aWR0aDogMzAwcHg7ICovXHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCBpbnB1dCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCBpbnB1dCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDMwcHggYXV0bztcclxufVxyXG5cclxuLmFjdGlvbi1jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uYWN0aW9uLWNvbnRhaW5lcj4ubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZGQzZTU0LCAjNmJlNTg1KTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMwZDgwNDg7ICovXHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmNhbmNlbC1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDZweCAxNXB4IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMxYjFkMWY7XHJcbn1cclxuXHJcblxyXG4vKiBkaXNwbGF5IHRhYmxlICovXHJcblxyXG4ucGFyZW50LWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzNTM1O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLm1haW4tY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uY29uYXRpbmVyLWhlYWRlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxOTFjO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5pbm5lci1jb25hdGluZXIge1xyXG4gICAgcGFkZGluZzogMTBweCAzMHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzNzM3O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbn1cclxuXHJcbi5oaWdobGlnaHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4Mjg1MDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZXZlbnJvdyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzYTNhO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm1hdC1yb3c6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxMWYxZjtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtcGFnaW5hdG9yIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzI4Mjg1MDtcclxufVxyXG5cclxuLm1hdC1jZWxsIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi8qIE1pZGRsZSBEaXYgKi9cclxuXHJcbi5wb2ludHMge1xyXG4gICAgYmFja2dyb3VuZDogY29uaWMtZ3JhZGllbnQoICNmZDAwNGMsICNmZTkwMDAsICNmZmYwMjAsICMzZWRmNGIsICNmZDAwNGMpO1xyXG4gICAgYW5pbWF0aW9uOiByb3RhdGUgMS41cyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICBwYWRkaW5nOiAwIDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlIHtcclxuICAgIDAlIHtcclxuICAgICAgICBmaWx0ZXI6IGh1ZS1yb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBmaWx0ZXI6IGh1ZS1yb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuLm1pZGRsZV9fZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG5cclxuLyogLnVwX2Fycm93IHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxufSAqL1xyXG5cclxuLnRyZW5kX191cCB7XHJcbiAgICBjb2xvcjogZ3JlZW55ZWxsb3c7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi50cmVuZF9fZG93biB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZmFzIHtcclxuICAgIGNvbG9yOiBtYWdlbnRhO1xyXG59XHJcblxyXG4ubGVmdF9fZGl2IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbi5yaWdodF9fZGl2IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbi50ZWFtRGF0YXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbi5zZWxlY3RlZFRlYW17XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIsMCwzNiwxKSAwJSwgcmdiYSg5LDksMTIxLDEpIDM1JSwgcmdiYSgwLDIxMiwyNTUsMSkgMTAwJSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB3aWR0aDogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC8qIFNUWUxFUyBIRVJFIGZvciBCUk9XU0VSIFdJTkRPV1Mgd2l0aCBhIG1heC13aWR0aCBvZiA0ODBweC5cclxuICAgICAgIFRoaXMgd2lsbCB3b3JrIG9uIGRlc2t0b3BzIHdoZW4gdGhlIHdpbmRvdyBpcyBuYXJyb3dlZC4gICovXHJcblxyXG4gICAgICAgLmNhcmQge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00JSwgNSUpO1xyXG4gICAgICAgIHdpZHRoOiAzMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgICAgaGVpZ2h0OiAzMTBweDtcclxuICAgICAgICBtYXJnaW46IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgLyogYm94LXNoYWRvdzogMCAwIDAgMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7ICovXHJcbiAgICB9XHJcblxyXG4gICAgLmxlZnQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDAlO1xyXG4gICAgICAgIGxlZnQ6IC0xMjAlO1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMCU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIC8qIGJvcmRlci10b3A6IDVweCBzb2xpZCAjNDMwMDY0OyAqL1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2tld1goLTVkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkPi5sZWZ0IHtcclxuICAgICAgICBsZWZ0OiAtMTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMCU7XHJcbiAgICAgICAgcmlnaHQ6IC0xMDAlO1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMCU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIC8qIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZWY5YjBmOyAqL1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2tld1goLTVkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkPi5yaWdodCB7XHJcbiAgICAgICAgcmlnaHQ6IC05JTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZCBoMiB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZCBoMiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmMDA1NztcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICAubWF0Y2gtZGV0YWlscyB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC8qIGNvbG9yOiBibGFjazsgKi9cclxuICAgIH1cclxuXHJcbiAgICAudmVyc3VzIHtcclxuICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTkxZTYzO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuMztcclxuICAgIH1cclxuXHJcbiAgICAuZGF0ZSB7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDAgMDtcclxuICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZWFtMSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC52ZW51ZXtcclxuICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIH1cclxuXHJcbiAgICAudGVhbTIge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAudGVhbTEgaW1nLFxyXG4gICAgLnRlYW0yIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXRhaWxzIHtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwJTtcclxuICAgICAgICBtaW4td2lkdGg6IDM3JTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaDMudGVhbS1uYW1lIHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDAgMDtcclxuICAgICAgICAvKiBtYXJnaW4tYm90dG9tOiAxNXB4OyAqL1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNzVweDtcclxuICAgICAgICAvKiB0ZXh0LWRlY29yYXRpb246IDEwcHggc29saWQ7ICovXHJcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgaDMudGVhbS1wb2ludHMge1xyXG4gICAgICAgIC8qIHBhZGRpbmc6IDE1cHggMCAwOyAqL1xyXG4gICAgICAgIC8qIG1hcmdpbi1ib3R0b206IDE1cHg7ICovXHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAvKiBtYXJnaW4tdG9wOiAxcHg7ICovXHJcbiAgICAgICAgLyogdGV4dC1kZWNvcmF0aW9uOiAxMHB4IHNvbGlkOyAqL1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZWFtMSBoMy50ZWFtLW5hbWUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZWFtMSBoMy50ZWFtLXBvaW50cyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZCAudGVhbTEgaDMudGVhbS1uYW1lIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZCAudGVhbTIgaDMudGVhbS1uYW1lIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBNaWRkbGUgRGl2ICovXHJcblxyXG4gICAgLm1pZGRsZV9fZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLm1pZGRsZXtcclxuICAgICAgICAvKiBtYXJnaW46IDAgMTBweCAwIDEwcHg7ICovXHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH1cclxuXHJcbiAgICAubGVmdF9fZGl2IHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIH1cclxuXHJcbiAgICAucmlnaHRfX2RpdiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnRlYW1EYXRhe1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5wcm9maWxlLXBpY3R1cmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXHJcbiAgLyogYm9yZGVyOiBub25lIWltcG9ydGFudDsgKi9cclxufVxyXG5cclxuLmluc2lkZS10ZHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "hxRI":
/*!*****************************************************************!*\
  !*** ./src/app/user/user-dashboard/user-dashboard.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function() { return UserDashboardComponent; });
/* harmony import */ var src_app_common_constants_links__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/constants/links */ "IV7L");
/* harmony import */ var src_app_common_constants_roles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/constants/roles */ "BVGi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/service/login_state/loginstate.service */ "1d9a");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class UserDashboardComponent {
    constructor(loginStateService, router) {
        this.loginStateService = loginStateService;
        this.router = router;
        this.trophy = src_app_common_constants_links__WEBPACK_IMPORTED_MODULE_0__["trophy"];
        this.chennai2021 = src_app_common_constants_links__WEBPACK_IMPORTED_MODULE_0__["chennaiWin"];
        this.allteams = src_app_common_constants_links__WEBPACK_IMPORTED_MODULE_0__["allteams"];
        loginStateService.role = src_app_common_constants_roles__WEBPACK_IMPORTED_MODULE_1__["RU"];
    }
    ngOnInit() {
    }
}
UserDashboardComponent.ɵfac = function UserDashboardComponent_Factory(t) { return new (t || UserDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_common_service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_3__["LoginstateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
UserDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UserDashboardComponent, selectors: [["app-user-dashboard"]], decls: 32, vars: 9, consts: [["id", "carouselExampleIndicators", "data-ride", "carousel", "data-interval", "4000", 1, "carousel", "slide", "container-fluid"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], ["role", "listbox", 1, "carousel-inner"], [1, "carousel-item", "active"], [1, "carousel-caption", "d-none", "d-md-block"], [1, "display-4"], [1, "lead"], [1, "carousel-item"], [1, "display-4", 2, "color", "rgb(23, 211, 48)", "font-weight", "bolder"], [1, "lead", 2, "color", "rgb(48, 219, 85)", "font-weight", "bolder"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]], template: function UserDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Game On!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Luck is what happens when preparation meets opportunity.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Get Prepared!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Only 1 Team Stands at Last.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Place Bet on Your Favourite Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "If you must play, decide upon three things at the start: the rules of the game, the stakes, and the quitting time");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMapInterpolate1"]("background-image: url('", ctx.chennai2021, "')");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMapInterpolate1"]("background-image: url('", ctx.trophy, "')");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMapInterpolate1"]("background-image: url('", ctx.allteams, "')");
    } }, styles: [".carousel-item[_ngcontent-%COMP%] {\r\n    height: 85vh;\r\n    min-height: 350px;\r\n    background: no-repeat center center scroll;\r\n    background-size: cover;\r\n    transition-duration: 0.5s;\r\n}\r\n\r\n#carouselExampleIndicators[_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDBDQUEwQztJQUkxQyxzQkFBc0I7SUFDdEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJ1c2VyLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWl0ZW0ge1xyXG4gICAgaGVpZ2h0OiA4NXZoO1xyXG4gICAgbWluLWhlaWdodDogMzUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBzY3JvbGw7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbn1cclxuXHJcbiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "sbTx":
/*!*********************************************************!*\
  !*** ./src/app/user/match-list/match-list.component.ts ***!
  \*********************************************************/
/*! exports provided: MatchListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchListComponent", function() { return MatchListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/components/snackbar/snackbar.component */ "j7cY");
/* harmony import */ var src_app_common_constants_links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/constants/links */ "IV7L");
/* harmony import */ var src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/constants/snackbar-properties */ "fc4o");
/* harmony import */ var src_app_common_store_actions_match_upcomingmatch_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/store/actions/match/upcomingmatch.action */ "j5Nc");
/* harmony import */ var src_app_common_store_state_match_upcomingMatches_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/store/state/match/upcomingMatches.state */ "MIaQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_service_matches_service_matches_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/service/matches_service/matches.service */ "gD1G");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_common_service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/common/service/login_state/loginstate.service */ "1d9a");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");















function MatchListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MatchListComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3); const matchdata_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r2.gotoBettingPage(matchdata_r1.matchId, matchdata_r1.startDatetime); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "VS");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const matchdata_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", matchdata_r1.team1Id ? ctx_r0.teamColor[matchdata_r1.team1Id] : ctx_r0.teamColor.t1)("border-top", matchdata_r1.team1Id ? ctx_r0.borderTop[matchdata_r1.team1Id] : ctx_r0.borderTop.t1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", matchdata_r1.team2Id ? ctx_r0.teamColor[matchdata_r1.team2Id] : ctx_r0.teamColor.t2)("border-top", matchdata_r1.team2Id ? ctx_r0.borderTop[matchdata_r1.team2Id] : ctx_r0.borderTop.t2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", matchdata_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", matchdata_r1.team1Logo, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("color", matchdata_r1.team1Id ? ctx_r0.teamFontColor[matchdata_r1.team1Id] : ctx_r0.teamFontColor.t1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", matchdata_r1.team1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](13, 19, matchdata_r1.startDatetime, "medium"), " IST ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", matchdata_r1.venue, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", matchdata_r1.team2Logo, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("color", matchdata_r1.team2Id ? ctx_r0.teamFontColor[matchdata_r1.team2Id] : ctx_r0.teamFontColor.t2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", matchdata_r1.team2, " ");
} }
class MatchListComponent {
    constructor(matchservice, snackbar, dialog, router, loginStateService, store) {
        var _a;
        this.matchservice = matchservice;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.router = router;
        this.loginStateService = loginStateService;
        this.store = store;
        this.teamColor = {
            1: "#ff0",
            2: "#2561ae",
            3: "#00416a",
            4: "#7300ab",
            5: "#ace5ee",
            6: "#004f91",
            7: "#ed1f27",
            8: "RGB(37 ,74 ,165)",
            9: "#d5152c",
            10: "#f7a721",
            //in case if the ids of the above teams changes, default colors will be used
            t1: 'pink',
            t2: 'silver' //
        };
        this.teamFontColor = {
            1: "black",
            2: "#fff",
            3: "#fff",
            4: "#fff",
            5: "black",
            6: "#fff",
            7: "#fff",
            8: "white",
            9: "#fff",
            10: "black",
            //in case if the ids of the above teams changes, default colors will be used
            t1: 'black',
            t2: 'black' //
        };
        this.borderTop = {
            1: "5px solid #ef9b0f",
            2: "5px solid #4B9CD3",
            3: "5px solid #1d2951",
            4: "5px solid #430064",
            5: "5px solid #9bc4e2",
            6: "5px solid blue",
            7: "5px solid #af002a",
            8: "5px solid #1877F2",
            9: "5px solid #800000",
            10: "5px solid #F05E23",
            //in case if the ids of the above teams changes, default colors will be used
            t1: 'pink',
            t2: 'silver' //
        };
        this.stadium = src_app_common_constants_links__WEBPACK_IMPORTED_MODULE_3__["stadium"];
        this.clearButton = false;
        this.searchTitle = 'Place Bet on the upcoming Matches!';
        // async getMatchDetails(): Promise<any> {
        //   let panelClass = 'green';
        //   let snackbarMsg = '';
        //   let snackbarRef = null;
        //   const dialogRef = this.dialog.open(LoadingComponent, { disableClose: true });
        //   let matchModel: MatchModel[] = [];
        //   let resp = null;
        //   try {
        //     resp = await this.matchservice.getAllUpcomingMatches();
        //     matchModel = resp.body;
        //     if (matchModel) {
        //       dialogRef.close();
        //       return matchModel;
        //     } else {
        //       snackbarMsg = NO_RESP;
        //       panelClass = 'red';
        //     }
        //   } catch (ex) {
        //     snackbarMsg = getErrorMessage(ex);
        //     panelClass = 'red';
        //   } finally {
        //     dialogRef.close();
        //   }
        //   if (snackbarMsg) {
        //     snackbarRef = this.snackbar.openFromComponent(SnackbarComponent,
        //       getSnackbarProperties(snackbarMsg, panelClass));
        //   }
        //   return [];
        // }
        // getColorForTeam1(){
        //   return this.matchData && this.matchData.team1Id ? this.teamColor[this.matchData.team1Id] : this.teamColor.t1;
        // }
        // getColorForTeam2(){
        //   return this.matchData && this.matchData.team2Id ? this.teamColor[this.matchData.team2Id] : this.teamColor.t2;
        // }
        this.loginState = this.loginStateService.getLoginState();
        this.role = (_a = this.loginState) === null || _a === void 0 ? void 0 : _a.role;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.matchData = yield this.getMatchDetails();
            // console.log(this.matchData);
            this.matchData$.subscribe((res) => {
                this.matchData = res;
            });
        });
    }
    getMatchDetails() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.upcomingmatchLoadedSub = this.upcomingmatchLoaded$.subscribe((loadedmatchdata) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!loadedmatchdata) {
                    yield this.store.dispatch(new src_app_common_store_actions_match_upcomingmatch_action__WEBPACK_IMPORTED_MODULE_5__["GetUpcomingMatch"]());
                }
            }));
        });
    }
    gotoBettingPage(id, dateSent) {
        // this.location.replaceState('');
        let currentDate = new Date();
        dateSent = new Date(dateSent);
        var diffMs = (dateSent.getTime() - currentDate.getTime()); // milliseconds between now & Christmas
        var diffDays = Math.floor(diffMs / 86400000); // days
        // console.log(diffDays);
        const days = diffDays;
        // return  this.days;
        if (days < 5) {
            this.router.navigate([this.role + `/match-list/betting-page/${id}`]);
        }
        else {
            let panelClass = 'yellow';
            let snackbarMsg = 'We Understand your Curiosity! But this Match is out of range';
            let snackbarRef = null;
            snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_4__["getSnackbarProperties"])(snackbarMsg, panelClass));
        }
    }
    ngOnDestroy() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.upcomingmatchLoadedSub.unsubscribe();
        });
    }
}
MatchListComponent.ɵfac = function MatchListComponent_Factory(t) { return new (t || MatchListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_common_service_matches_service_matches_service__WEBPACK_IMPORTED_MODULE_8__["MatchesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_common_service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_12__["LoginstateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
MatchListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: MatchListComponent, selectors: [["app-match-list"]], decls: 2, vars: 3, consts: [["class", "card", 3, "click", 4, "ngFor", "ngForOf"], [1, "card", 3, "click"], [1, "left"], [1, "right"], [1, "match-details"], [1, "team1"], ["loading", "lazy", 2, "border-radius", "50%", 3, "src"], [1, "team-name"], [1, "details"], [1, "date"], [1, "versus"], [1, "venue"], [1, "team2"]], template: function MatchListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MatchListComponent_div_1_Template, 22, 22, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-image", "url(" + ctx.stadium + ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.matchData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap\");\r\nbody[_ngcontent-%COMP%] {\r\n  background: linear-gradient(to right, #fdeff9, #4572c7);\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Montserrat\", sans-serif;\r\n  \r\n  background-size: cover;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-attachment: fixed;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  height: auto;\r\n  align-self: flex-start;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n  \r\n  \r\n  \r\n  transform: translate(-4%, 5%);\r\n  width: auto;\r\n  min-width: 600px;\r\n  background: rgba(255, 255, 255, 0.5);\r\n  border-radius: 10px;\r\n  overflow: hidden;\r\n  transition: 0.5s;\r\n  box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.2);\r\n  height: auto;\r\n  margin: 30px;\r\n  cursor: pointer;\r\n}\r\n.card[_ngcontent-%COMP%]:hover {\r\n  background: #fff;\r\n  \r\n}\r\n.left[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 0%;\r\n  left: -120%;\r\n  width: 60%;\r\n  height: 30%;\r\n  transition: 0.5s;\r\n  box-sizing: border-box;\r\n  \r\n  transform: skewX(-5deg);\r\n}\r\n.card[_ngcontent-%COMP%]:hover    > .left[_ngcontent-%COMP%] {\r\n  left: -10%;\r\n}\r\n.right[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 0%;\r\n  right: -120%;\r\n  width: 60%;\r\n  height: 30%;\r\n  transition: 0.5s;\r\n  box-sizing: border-box;\r\n  \r\n  transform: skewX(-5deg);\r\n}\r\n.card[_ngcontent-%COMP%]:hover    > .right[_ngcontent-%COMP%] {\r\n  right: -9%;\r\n}\r\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  width: auto;\r\n  margin: 0;\r\n  padding: 20px;\r\n  text-align: center;\r\n  box-sizing: border-box;\r\n  transition: 0.5s;\r\n}\r\n.card[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%] {\r\n  background: #ff0057;\r\n  color: #fff;\r\n}\r\n.match-details[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n.versus[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  height: 50px;\r\n  font-size: 24px;\r\n  border-radius: 50%;\r\n  background: #e91e63;\r\n  color: #fff;\r\n  text-align: center;\r\n  line-height: 50px;\r\n  margin: 20px auto;\r\n}\r\n.date[_ngcontent-%COMP%] {\r\n  margin: 20px 0 0;\r\n}\r\n.team1[_ngcontent-%COMP%] {\r\n  width: 180px;\r\n  float: left;\r\n  padding: 10px 20px 20px;\r\n  box-sizing: border-box;\r\n  text-align: center;\r\n  height: auto;\r\n}\r\n.team2[_ngcontent-%COMP%] {\r\n  width: 180px;\r\n  float: left;\r\n  padding: 10px 20px 20px;\r\n  box-sizing: border-box;\r\n  text-align: center;\r\n  height: auto;\r\n}\r\n.team1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .team2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 150px;\r\n    height: auto;\r\n}\r\n.details[_ngcontent-%COMP%] {\r\n  width: auto;\r\n  min-width: 39%;\r\n  min-height: 200px;\r\n  height: auto;\r\n  float: left;\r\n  text-align: center;\r\n}\r\nh3.team-name[_ngcontent-%COMP%] {\r\n  padding: 15px 0 0;\r\n  \r\n  text-align: right;\r\n  transition: 0.5s;\r\n  margin-top: 40px;\r\n  \r\n}\r\nh3.team-points[_ngcontent-%COMP%] {\r\n  \r\n  \r\n  text-align: right;\r\n  transition: 0.5s;\r\n  \r\n  \r\n}\r\n.team1[_ngcontent-%COMP%]   h3.team-name[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  color: black;\r\n}\r\n.team1[_ngcontent-%COMP%]   h3.team-points[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  color: black;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover   .team1[_ngcontent-%COMP%]   h3.team-name[_ngcontent-%COMP%] {\r\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\r\n  font-size: large;\r\n}\r\n.card[_ngcontent-%COMP%]:hover   .team2[_ngcontent-%COMP%]   h3.team-name[_ngcontent-%COMP%] {\r\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\r\n  font-size: large;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n  \r\n\r\n  .card[_ngcontent-%COMP%] {\r\n    transform: translate(-4%, 5%);\r\n    width: 270px;\r\n    min-width: 310px;\r\n    background: rgba(255, 255, 255, 0.5);\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    transition: 0.5s;\r\n    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.2);\r\n    height: 310px;\r\n    margin: 30px;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    \r\n  }\r\n\r\n  .left[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0%;\r\n    left: -120%;\r\n    width: 60%;\r\n    height: 30%;\r\n    transition: 0.5s;\r\n    box-sizing: border-box;\r\n    \r\n    transform: skewX(-5deg);\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%]    > .left[_ngcontent-%COMP%] {\r\n    left: -10%;\r\n  }\r\n\r\n  .right[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0%;\r\n    right: -100%;\r\n    width: 60%;\r\n    height: 30%;\r\n    transition: 0.5s;\r\n    box-sizing: border-box;\r\n    \r\n    transform: skewX(-5deg);\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%]    > .right[_ngcontent-%COMP%] {\r\n    right: -9%;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    margin: 0;\r\n    padding: 20px;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n    transition: 0.5s;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    background: #ff0057;\r\n    color: #fff;\r\n  }\r\n\r\n  .match-details[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    \r\n  }\r\n\r\n  .versus[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n    height: 35px;\r\n    font-size: 1rem;\r\n    border-radius: 50%;\r\n    background: #e91e63;\r\n    color: #fff;\r\n    text-align: center;\r\n    margin-bottom: 10px;\r\n    margin-top: 10px;\r\n    line-height: 2.3;\r\n  }\r\n\r\n  .date[_ngcontent-%COMP%] {\r\n    margin: 20px 0 0;\r\n    font-size: 0.6rem;\r\n    line-height: 1.5;\r\n    width: 100%;\r\n  }\r\n\r\n  .team1[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    float: left;\r\n    padding: 10px 20px 20px;\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n  }\r\n\r\n  .venue[_ngcontent-%COMP%] {\r\n    font-size: 0.6rem;\r\n    line-height: 1;\r\n  }\r\n\r\n  .team2[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    float: left;\r\n    padding: 10px 20px 20px;\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n  }\r\n\r\n  .team1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .team2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .details[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n    min-height: 20%;\r\n    min-width: 35%;\r\n    float: left;\r\n    text-align: center;\r\n  }\r\n\r\n  h3.team-name[_ngcontent-%COMP%] {\r\n    padding: 15px 0 0;\r\n    \r\n    text-align: right;\r\n    transition: 0.5s;\r\n    margin-top: 75px;\r\n    \r\n    font-size: 0.7rem;\r\n    line-height: 1.5;\r\n  }\r\n\r\n  h3.team-points[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    text-align: right;\r\n    transition: 0.5s;\r\n    \r\n    \r\n    font-size: 0.7rem;\r\n  }\r\n\r\n  .team1[_ngcontent-%COMP%]   h3.team-name[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    font-size: 0.7rem;\r\n    font-family: \"Montserrat\", sans-serif;\r\n    font-weight: bolder;\r\n  }\r\n\r\n  .team1[_ngcontent-%COMP%]   h3.team-points[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    font-size: 0.7rem;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%]   .team1[_ngcontent-%COMP%]   h3.team-name[_ngcontent-%COMP%] {\r\n    font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\r\n    font-size: large;\r\n    font-size: 0.7rem;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%]   .team2[_ngcontent-%COMP%]   h3.team-name[_ngcontent-%COMP%] {\r\n    font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\r\n    font-size: large;\r\n    font-size: 0.7rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGNoLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyR0FBMkc7QUFDM0c7RUFDRSx1REFBdUQ7RUFDdkQsU0FBUztFQUNULFVBQVU7RUFDVixxQ0FBcUM7RUFDckMsd0NBQXdDO0VBQ3hDLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsY0FBYztFQUNkLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsK0NBQStDO0VBQy9DLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFEQUFxRDtBQUN2RDtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1DQUFtQztFQUNuQyx1QkFBdUI7QUFDekI7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1DQUFtQztFQUNuQyx1QkFBdUI7QUFDekI7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBRUE7O0lBRUksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlDQUFpQztBQUNuQztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFFQTs7R0FFRztBQUVIO0VBQ0Usd0VBQXdFO0VBQ3hFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usd0VBQXdFO0VBQ3hFLGdCQUFnQjtBQUNsQjtBQUVBOzs7R0FHRztBQUVIO0VBQ0U7aUVBQytEOztFQUUvRDtJQUNFLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQiwrQ0FBK0M7SUFDL0MsYUFBYTtJQUNiLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixxREFBcUQ7RUFDdkQ7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsbUNBQW1DO0lBQ25DLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkMsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztJQUNYLFNBQVM7SUFDVCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7O0VBRUE7O0lBRUUsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFVBQVU7SUFDVixlQUFlO0lBQ2YsY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixxQ0FBcUM7SUFDckMsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHdFQUF3RTtJQUN4RSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usd0VBQXdFO0lBQ3hFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJtYXRjaC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjIwMCwzMDAsNDAwLDUwMCw2MDAsNzAwLDgwMCw5MDAmZGlzcGxheT1zd2FwXCIpO1xyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZGVmZjksICM0NTcyYzcpO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvc3RhZGl1bScpOyAqL1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICAvKiB0b3A6IDUwJTsgKi9cclxuICAvKiBsZWZ0OiAyNSU7ICovXHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQlLCA1JSk7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWluLXdpZHRoOiA2MDBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogMzBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIC8qIGJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpOyAqL1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMCU7XHJcbiAgbGVmdDogLTEyMCU7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBoZWlnaHQ6IDMwJTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLyogYm9yZGVyLXRvcDogNXB4IHNvbGlkICM0MzAwNjQ7ICovXHJcbiAgdHJhbnNmb3JtOiBza2V3WCgtNWRlZyk7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyID4gLmxlZnQge1xyXG4gIGxlZnQ6IC0xMCU7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMCU7XHJcbiAgcmlnaHQ6IC0xMjAlO1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgaGVpZ2h0OiAzMCU7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8qIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZWY5YjBmOyAqL1xyXG4gIHRyYW5zZm9ybTogc2tld1goLTVkZWcpO1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciA+IC5yaWdodCB7XHJcbiAgcmlnaHQ6IC05JTtcclxufVxyXG5cclxuLmNhcmQgaDIge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIGgyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmYwMDU3O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubWF0Y2gtZGV0YWlscyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udmVyc3VzIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjZTkxZTYzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxufVxyXG5cclxuLmRhdGUge1xyXG4gIG1hcmdpbjogMjBweCAwIDA7XHJcbn1cclxuXHJcbi50ZWFtMSB7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnRlYW0yIHtcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4IDIwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4udGVhbTEgaW1nLFxyXG4udGVhbTIgaW1nIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmRldGFpbHMge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1pbi13aWR0aDogMzklO1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBmbG9hdDogbGVmdDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmgzLnRlYW0tbmFtZSB7XHJcbiAgcGFkZGluZzogMTVweCAwIDA7XHJcbiAgLyogbWFyZ2luLWJvdHRvbTogMTVweDsgKi9cclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgLyogdGV4dC1kZWNvcmF0aW9uOiAxMHB4IHNvbGlkOyAqL1xyXG59XHJcblxyXG5oMy50ZWFtLXBvaW50cyB7XHJcbiAgLyogcGFkZGluZzogMTVweCAwIDA7ICovXHJcbiAgLyogbWFyZ2luLWJvdHRvbTogMTVweDsgKi9cclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIC8qIG1hcmdpbi10b3A6IDQwcHg7ICovXHJcbiAgLyogdGV4dC1kZWNvcmF0aW9uOiAxMHB4IHNvbGlkOyAqL1xyXG59XHJcblxyXG4udGVhbTEgaDMudGVhbS1uYW1lIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnRlYW0xIGgzLnRlYW0tcG9pbnRzIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLyogLmNhcmQ6aG92ZXIgLnRlYW0xIGgzLnRlYW0tbmFtZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0gKi9cclxuXHJcbi5jYXJkOmhvdmVyIC50ZWFtMSBoMy50ZWFtLW5hbWUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIgLnRlYW0yIGgzLnRlYW0tbmFtZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVwiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4vKlxyXG4uY2FyZDpob3ZlciAudGVhbTEgaDMudGVhbS1wb2ludHMge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59ICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLyogU1RZTEVTIEhFUkUgZm9yIEJST1dTRVIgV0lORE9XUyB3aXRoIGEgbWF4LXdpZHRoIG9mIDQ4MHB4LlxyXG4gICAgICAgVGhpcyB3aWxsIHdvcmsgb24gZGVza3RvcHMgd2hlbiB0aGUgd2luZG93IGlzIG5hcnJvd2VkLiAgKi9cclxuXHJcbiAgLmNhcmQge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQlLCA1JSk7XHJcbiAgICB3aWR0aDogMjcwcHg7XHJcbiAgICBtaW4td2lkdGg6IDMxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICBoZWlnaHQ6IDMxMHB4O1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC8qIGJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpOyAqL1xyXG4gIH1cclxuXHJcbiAgLmxlZnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwJTtcclxuICAgIGxlZnQ6IC0xMjAlO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAvKiBib3JkZXItdG9wOiA1cHggc29saWQgIzQzMDA2NDsgKi9cclxuICAgIHRyYW5zZm9ybTogc2tld1goLTVkZWcpO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQgPiAubGVmdCB7XHJcbiAgICBsZWZ0OiAtMTAlO1xyXG4gIH1cclxuXHJcbiAgLnJpZ2h0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMCU7XHJcbiAgICByaWdodDogLTEwMCU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC8qIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZWY5YjBmOyAqL1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtNWRlZyk7XHJcbiAgfVxyXG5cclxuICAuY2FyZCA+IC5yaWdodCB7XHJcbiAgICByaWdodDogLTklO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQgaDIge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgfVxyXG5cclxuICAuY2FyZCBoMiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmYwMDU3O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAubWF0Y2gtZGV0YWlscyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvKiBjb2xvcjogYmxhY2s7ICovXHJcbiAgfVxyXG5cclxuICAudmVyc3VzIHtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogI2U5MWU2MztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMi4zO1xyXG4gIH1cclxuXHJcbiAgLmRhdGUge1xyXG4gICAgbWFyZ2luOiAyMHB4IDAgMDtcclxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnRlYW0xIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDIwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnZlbnVlIHtcclxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgfVxyXG5cclxuICAudGVhbTIge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAudGVhbTEgaW1nLFxyXG4gIC50ZWFtMiBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuZGV0YWlscyB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbWluLWhlaWdodDogMjAlO1xyXG4gICAgbWluLXdpZHRoOiAzNSU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIGgzLnRlYW0tbmFtZSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDAgMDtcclxuICAgIC8qIG1hcmdpbi1ib3R0b206IDE1cHg7ICovXHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOiAxMHB4IHNvbGlkOyAqL1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gIH1cclxuXHJcbiAgaDMudGVhbS1wb2ludHMge1xyXG4gICAgLyogcGFkZGluZzogMTVweCAwIDA7ICovXHJcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAxNXB4OyAqL1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgLyogbWFyZ2luLXRvcDogNDBweDsgKi9cclxuICAgIC8qIHRleHQtZGVjb3JhdGlvbjogMTBweCBzb2xpZDsgKi9cclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gIH1cclxuXHJcbiAgLnRlYW0xIGgzLnRlYW0tbmFtZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIH1cclxuXHJcbiAgLnRlYW0xIGgzLnRlYW0tcG9pbnRzIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICB9XHJcblxyXG4gIC5jYXJkIC50ZWFtMSBoMy50ZWFtLW5hbWUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVwiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICB9XHJcblxyXG4gIC5jYXJkIC50ZWFtMiBoMy50ZWFtLW5hbWUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVwiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICB9XHJcbn1cclxuIl19 */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(src_app_common_store_state_match_upcomingMatches_state__WEBPACK_IMPORTED_MODULE_6__["UpcomingMatchState"].getUpcomingMatchData)
], MatchListComponent.prototype, "matchData$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(src_app_common_store_state_match_upcomingMatches_state__WEBPACK_IMPORTED_MODULE_6__["UpcomingMatchState"].upcomingMatchLoaded)
], MatchListComponent.prototype, "upcomingmatchLoaded$", void 0);


/***/ })

}]);
//# sourceMappingURL=default~admin-admin-module~user-user-module.js.map
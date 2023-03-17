(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+IU6":
/*!**********************************************************************!*\
  !*** ./src/app/common/service/statistics/user-statictics.service.ts ***!
  \**********************************************************************/
/*! exports provided: UserStaticticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStaticticsService", function() { return UserStaticticsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _constants_http_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/http-urls */ "74hc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




// let usersBaseURL = 'http://localhost:8081/users';
class UserStaticticsService {
    constructor(http) {
        this.http = http;
    }
    getUserWinningLosingPoint(userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["usersBaseURL"] + '/' + userId + '/winning-losing-points', { observe: 'response' }).toPromise();
        });
    }
    // async getUserLossingPoint(userId:number): Promise<any> {
    //   return await this.http.get<UsersLoosingModel>(usersBaseURL + '/' + userId + '/loosing-points', { observe: 'response' }).toPromise();
    // }
    getUserStats() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["usersBaseURL"] + '/statistics', { observe: 'response' }).toPromise();
        });
    }
    getUserStatsById(userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["usersBaseURL"] + '/statistics/' + userId, { observe: 'response' }).toPromise();
        });
    }
    getUserFutureBets() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["usersBaseURL"] + '/future-contest', { observe: 'response' }).toPromise();
        });
    }
    getUserFutureBetsById(userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["usersBaseURL"] + '/future-contest/' + userId, { observe: 'response' }).toPromise();
        });
    }
    // NGXS SERVICES
    getUserStatsNGXS() {
        return this.http.get(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["usersBaseURL"] + '/statistics');
    }
    getUserFutureBetsNGXS() {
        return this.http.get(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["usersBaseURL"] + '/future-contest');
    }
}
UserStaticticsService.ɵfac = function UserStaticticsService_Factory(t) { return new (t || UserStaticticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UserStaticticsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserStaticticsService, factory: UserStaticticsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\gupts005.VF-ROOT\MyFiles\Practice Projects\Angular\sportsgeek\src\main.ts */"zUnb");


/***/ }),

/***/ "16jV":
/*!*********************************************************************************!*\
  !*** ./src/app/common/service/authentication_service/authentication.service.ts ***!
  \*********************************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _constants_http_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/http-urls */ "74hc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






// let jwtlogin_api = "http://localhost:8081/users/authenticate";
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
};
class AuthenticationService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    login(loginmodel) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
            });
            let options = { headers: headers };
            return yield this.http
                .post(_constants_http_urls__WEBPACK_IMPORTED_MODULE_2__["usersBaseURL"] + '/authenticate', loginmodel, {
                headers: headers,
                observe: 'response',
            })
                .toPromise();
        });
    }
    // login(loginmodel: LoginModel, role:string): Observable<any> {
    //   // loginmodel.username = loginmodel.username + role.charAt(0).toUpperCase();
    //   return this.http.post(jwtlogin_api, loginmodel, httpOptions);
    // }
    isLoggedIn() {
        return !!localStorage.getItem('loginState');
    }
    // getToken() {
    //   let authToken = localStorage.getItem('loginState');
    //   return (authToken != null) ? true : false;
    // }
    loggedout() {
        let removeToken = localStorage.removeItem('loginState');
        if (removeToken == null) {
            this.router.navigate(['']);
        }
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "1d9a":
/*!******************************************************************!*\
  !*** ./src/app/common/service/login_state/loginstate.service.ts ***!
  \******************************************************************/
/*! exports provided: LoginstateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginstateService", function() { return LoginstateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoginstateService {
    constructor() {
        this.role = 'User';
    }
    createSession(loginStateModel) {
        this.role = loginStateModel.role;
        localStorage.setItem('loginState', JSON.stringify(loginStateModel));
        // localStorage.setItem('token');
    }
    destroySession(role) {
        localStorage.removeItem('loginState');
        // localStorage.removeItem('token');
        this.role = role;
    }
    getLoginState() {
        return JSON.parse(localStorage.getItem('loginState') + '');
    }
    isLoginStateValidForUser(currentUser) {
        // currentUser = currentUser.toLowerCase();
        const loginState = this.getLoginState();
        if (loginState === null ||
            (loginState != null && loginState.role !== currentUser)) {
            return true;
        }
        else {
            return false;
        }
    }
}
LoginstateService.ɵfac = function LoginstateService_Factory(t) { return new (t || LoginstateService)(); };
LoginstateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginstateService, factory: LoginstateService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "2/mB":
/*!*************************************************************!*\
  !*** ./src/app/common/service/user_service/user.service.ts ***!
  \*************************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _constants_http_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/http-urls */ "74hc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




// let userBaseUrl = 'http://localhost:8081/users';
// let addUserUrl = 'http://localhost:8081/users/add-user';
class UserService {
    constructor(http) {
        this.http = http;
    }
    getAllUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["usersBaseURL"], { observe: 'response' }).toPromise();
        });
    }
    getUserById(userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["usersBaseURL"] + '/' + userId, { observe: 'response' }).toPromise();
        });
    }
    updateRole(userId, roleId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.put(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["usersBaseURL"] + '/' + userId + '/update-role' + '/' + roleId, { observe: 'response' }).toPromise();
        });
    }
    // async signup(userWithPasswordModel: UserWithPasswordModel): Promise<any>
    signup(formData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["usersBaseURL"] + '/register', formData, { observe: 'response' }).toPromise();
        });
    }
    // async addUser(userModel: UserModel): Promise<any> {
    //   return await this.http.post<UserWithPasswordModel>(usersBaseURL + '/register', userModel, { observe: 'response' }).toPromise();
    // }
    // async updateUser(userId: number, model: UserModel): Promise<any> {
    updateUser(userId, formData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.put(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["usersBaseURL"] + '/' + userId, formData, { observe: 'response' }).toPromise();
        });
    }
    deleteUser(userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.delete(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["usersBaseURL"] + '/' + userId, { observe: 'response' }).toPromise();
        });
    }
    deleteProfilePic(userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.delete(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["usersBaseURL"] + '/' + userId + '/remove-profile-picture', { observe: 'response' }).toPromise();
        });
    }
    updateActiveStatus(userId, isActive) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.put(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["usersBaseURL"] + '/' + userId + '/' + 'update-status/' + isActive, { observe: 'response' }).toPromise();
        });
    }
    updatePassword(newPasswordModel) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.put(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["usersBaseURL"] + '/update-password', newPasswordModel, { observe: 'response' }).toPromise();
        });
    }
    // NGXS SERVICES
    getAllUserNGXS() {
        return this.http.get(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["usersBaseURL"]);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "2hmw":
/*!***********************************************************************************!*\
  !*** ./src/app/common/service/forgot-password/reset-password-with-otp.service.ts ***!
  \***********************************************************************************/
/*! exports provided: ResetPasswordWithOtpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordWithOtpService", function() { return ResetPasswordWithOtpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _constants_http_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/http-urls */ "74hc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




// let userBaseUrl = 'http://localhost:8081/users';
class ResetPasswordWithOtpService {
    constructor(http) {
        this.http = http;
    }
    sendOtp(otp) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["usersBaseURL"] + '/forget-password', otp, { observe: 'response' }).toPromise();
        });
    }
    updateForgotPassword(forgotPassword) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.put(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["usersBaseURL"] + '/forget-password', forgotPassword, { observe: 'response' }).toPromise();
        });
    }
}
ResetPasswordWithOtpService.ɵfac = function ResetPasswordWithOtpService_Factory(t) { return new (t || ResetPasswordWithOtpService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ResetPasswordWithOtpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ResetPasswordWithOtpService, factory: ResetPasswordWithOtpService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "4SCC":
/*!********************************************!*\
  !*** ./src/app/common/guard/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _constants_roles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/roles */ "BVGi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/login_state/loginstate.service */ "1d9a");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(loginStateService, router) {
        this.loginStateService = loginStateService;
        this.router = router;
    }
    canActivate(route, state) {
        const role = route.data.roles;
        const loginState = this.loginStateService.getLoginState();
        if (loginState == null && role[0] === _constants_roles__WEBPACK_IMPORTED_MODULE_0__["RU"]) {
            return true;
        }
        if (!this.loginStateService.isLoginStateValidForUser(role[0])) {
            return true;
        }
        else {
            // this.router.navigate(['/' + role[0] + '/login']);
            this.router.navigate(['/login']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_2__["LoginstateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "4cPp":
/*!****************************************************************!*\
  !*** ./src/app/common/components/loading/loading.component.ts ***!
  \****************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");


class LoadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 4, vars: 0, consts: [["color", "accent"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please wait!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__["MatSpinner"]], styles: ["div[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n    padding-top: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJsb2FkaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "74hc":
/*!***********************************************!*\
  !*** ./src/app/common/constants/http-urls.ts ***!
  \***********************************************/
/*! exports provided: baseURL, NodeJSUrl, usersBaseURL, matchBaseURL, contestBaseURL, rechargeBaseURL, teamBaseURL, venueBaseURL, tournamentBaseURL, chatBaseURL, ContestLogBaseURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseURL", function() { return baseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeJSUrl", function() { return NodeJSUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersBaseURL", function() { return usersBaseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchBaseURL", function() { return matchBaseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contestBaseURL", function() { return contestBaseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rechargeBaseURL", function() { return rechargeBaseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teamBaseURL", function() { return teamBaseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "venueBaseURL", function() { return venueBaseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tournamentBaseURL", function() { return tournamentBaseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatBaseURL", function() { return chatBaseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContestLogBaseURL", function() { return ContestLogBaseURL; });
// export const baseURL = 'http://localhost:8080'
const baseURL = 'http://13.235.40.160:8080';
// export const baseURL = 'https://sportsgeek-api-qa.herokuapp.com' //qa
const NodeJSUrl = 'wss://bbdipl.herokuapp.com';
// export const NodeJSUrl = 'ws://localhost:8081'
const usersBaseURL = baseURL + '/users';
const matchBaseURL = baseURL + '/matches';
const contestBaseURL = baseURL + '/contest';
const rechargeBaseURL = baseURL + '/recharge';
const teamBaseURL = baseURL + '/teams';
const venueBaseURL = baseURL + '/venues';
const tournamentBaseURL = baseURL + '/tournaments';
const chatBaseURL = baseURL + '/public-chat';
const ContestLogBaseURL = baseURL + '/contest-log';


/***/ }),

/***/ "7Uuh":
/*!*******************************************************!*\
  !*** ./src/app/common/store/state/user/user.state.ts ***!
  \*******************************************************/
/*! exports provided: userStateModel, UserState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userStateModel", function() { return userStateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserState", function() { return UserState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/components/loading/loading.component */ "4cPp");
/* harmony import */ var _actions_user_user_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/user/user.action */ "nWFD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_service_user_service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/service/user_service/user.service */ "2/mB");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");








class userStateModel {
}
let UserState = class UserState {
    constructor(userservice, dialog) {
        this.userservice = userservice;
        this.dialog = dialog;
    }
    static getUserData(userstatemodel) {
        return userstatemodel.user;
    }
    static UserLoaded(userstatemodel) {
        return userstatemodel.userLoaded;
    }
    getUsers({ getState, setState }) {
        const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], {
            disableClose: true,
        });
        return this.userservice.getAllUserNGXS().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((res) => {
            const state = getState();
            setState(Object.assign(Object.assign({}, state), { user: res, userLoaded: true }));
            dialogRef.close();
        }));
    }
};
UserState.ɵfac = function UserState_Factory(t) { return new (t || UserState)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_common_service_user_service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
UserState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: UserState, factory: UserState.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_user_user_action__WEBPACK_IMPORTED_MODULE_4__["GetUser"])
], UserState.prototype, "getUsers", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], UserState, "getUserData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], UserState, "UserLoaded", null);
UserState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'allusers',
        defaults: {
            user: [],
            userLoaded: false,
            selectedUser: null,
        },
    })
], UserState);



/***/ }),

/***/ "8ng7":
/*!***************************************************************!*\
  !*** ./src/app/common/model/user/user-with-password-model.ts ***!
  \***************************************************************/
/*! exports provided: UserWithPasswordModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserWithPasswordModel", function() { return UserWithPasswordModel; });
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-model */ "LqFS");

class UserWithPasswordModel extends _user_model__WEBPACK_IMPORTED_MODULE_0__["UserModel"] {
    constructor() {
        super();
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BVGi":
/*!*******************************************!*\
  !*** ./src/app/common/constants/roles.ts ***!
  \*******************************************/
/*! exports provided: RA, RU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RA", function() { return RA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RU", function() { return RU; });
const RA = 'Admin';
const RU = 'User';


/***/ }),

/***/ "DbvX":
/*!*************************************************************************!*\
  !*** ./src/app/common/components/footer/about-us/about-us.component.ts ***!
  \*************************************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
    onNavigate() {
        window.open("https://en.wikipedia.org/wiki/Indian_Premier_League");
    }
    goToTwitter() {
        window.open("https://twitter.com/SportsGeekApp");
    }
    goToInstagram() {
        window.open("https://www.instagram.com/sportsgeekapp");
    }
    goToFacebook() {
        window.open("https://www.facebook.com/SportsGeekApp");
    }
}
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(); };
AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], decls: 29, vars: 0, consts: [[1, "section"], [1, "container"], [1, "content-section"], [1, "title"], [1, "content"], [1, "button"], ["routerLink", "", 3, "click"], [1, "social"], [1, "icon-box"], [1, "box", 3, "click"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-twitter"], [1, "fab", "fa-instagram"], [1, "image-section"], ["src", "assets/img/ipl.jpg", "alt", ""]], template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "BBD IPL (Online Fantasy Cricket Game)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " The Indian Premier League (IPL) is a professional Twenty20 cricket league, contested by eight teams based out of eight different Indian cities. The league was founded by the Board of Control for Cricket in India (BCCI) in 2007. It is usually held between March and May of every year and has an exclusive window in the ICC Future Tours Programme. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " There have been 14 seasons of the IPL tournament. The current IPL title holders are the Chennai Super Kings, who won the 2021 season. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " IPL 2022 will start from 26 March. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutUsComponent_Template_a_click_17_listener() { return ctx.onNavigate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutUsComponent_Template_div_click_21_listener() { return ctx.goToFacebook(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutUsComponent_Template_div_click_23_listener() { return ctx.goToTwitter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutUsComponent_Template_div_click_25_listener() { return ctx.goToInstagram(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap\");\r\n*[_ngcontent-%COMP%] {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  box-sizing: border-box;\r\n  \r\n}\r\n.section[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  background-color: #ddd;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  display: block;\r\n  margin: auto;\r\n  padding-top: 80px;\r\n}\r\n.content-section[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 55%;\r\n}\r\n.image-section[_ngcontent-%COMP%] {\r\n  float: right;\r\n  width: 40%;\r\n}\r\n.image-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n.content-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n  text-transform: uppercase;\r\n  font-size: 28px;\r\n}\r\n.content-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n  color: #5d5d5d;\r\n  font-size: 21px;\r\n}\r\n.content-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  font-family: sans-serif;\r\n  font-size: 18px;\r\n  line-height: 1.5;\r\n}\r\n.content-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n.content-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  background-color: #3d3d3d;\r\n  padding: 12px 40px;\r\n  text-decoration: none;\r\n  color: #fff;\r\n  font-size: 25px;\r\n  letter-spacing: 1.5px;\r\n}\r\n.content-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: #a52a2a;\r\n  color: #fff;\r\n}\r\n.content-section[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\r\n  margin: 40px 40px;\r\n  cursor: pointer;\r\n}\r\n.content-section[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: #a52a2a;\r\n  font-size: 30px;\r\n  padding: 0px 10px;\r\n}\r\n\r\n.icon-box[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: flex-start;\r\n    align-items: flex-start;\r\n    \r\n    flex-direction: row;\r\n    align-content: flex-start;\r\n    margin-left: -35px;\r\n}\r\n.icon-box[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\nmargin-right: 20px;\r\nwidth: 60px;\r\nheight: 60px;\r\nborder-radius: 30px;\r\ndisplay: flex;\r\nflex-direction: row;\r\njustify-content: center;\r\nalign-items: center;\r\ntransition: transform 1s;\r\ncursor: pointer;   \r\n}\r\n.icon-box[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  color: #fff;\r\n}\r\n.icon-box[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:hover{\r\n  transform: rotate(360deg)\r\n}\r\n.icon-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{\r\n  transition:  transform 1s, filter 2s ease-in-out;\r\n  transform: scale(1.4)\r\n}\r\n.icon-box[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(1){\r\n  background-image: linear-gradient(#3b5998, #486ab4);\r\n}\r\n.icon-box[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(2){\r\n  background-image: linear-gradient(#55acee, #1fd1f9);\r\n}\r\n.icon-box[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(3){\r\nbackground: linear-gradient(#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); \r\n}\r\n.icon-box[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(4){\r\nbackground-image: linear-gradient(#1695da, #0072b1);\r\n}\r\n.icon-box[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(5){\r\nbackground-image: linear-gradient(#ff3232, #FF0000); \r\n}\r\n.icon-box[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(6){\r\nbackground-image: linear-gradient(#C92228, #c73c40);\r\n}\r\n@media screen and (max-width: 768px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    display: block;\r\n    margin: auto;\r\n    padding-top: 50px;\r\n  }\r\n  .content-section[_ngcontent-%COMP%] {\r\n    float: none;\r\n    width: 100%;\r\n    display: block;\r\n    margin: auto;\r\n  }\r\n  .image-section[_ngcontent-%COMP%] {\r\n    float: none;\r\n    width: 100%;\r\n    padding-bottom: 70px;\r\n  }\r\n  .image-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: auto;\r\n    display: block;\r\n    margin: auto;\r\n  }\r\n  .content-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 19px;\r\n  }\r\n  .content-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n  .content-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 9px 30px;\r\n  }\r\n  .content-section[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n}\r\n@media only screen and (max-width: 480px) {\r\n\r\n    .container[_ngcontent-%COMP%] {\r\n        width: 80%;\r\n        display: block;\r\n        margin: auto;\r\n        padding-top: 20px;\r\n      }\r\n\r\n      body[_ngcontent-%COMP%]{\r\n          height: 215vh;\r\n      }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUZBQXFGO0FBQ3JGO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsd0NBQXdDO0FBQzFDO0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaO0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQ0FBa0M7QUFDcEM7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFFQTs7R0FFRztBQUNIO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtJQUN6Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsV0FBVztBQUNYLFlBQVk7QUFDWixtQkFBbUI7QUFDbkIsYUFBYTtBQUNiLG1CQUFtQjtBQUNuQix1QkFBdUI7QUFDdkIsbUJBQW1CO0FBQ25CLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7QUFDQTtFQUNFO0FBQ0Y7QUFDQTtFQUNFLGdEQUFnRDtFQUNoRDtBQUNGO0FBQ0E7RUFDRSxtREFBbUQ7QUFDckQ7QUFDQTtFQUNFLG1EQUFtRDtBQUNyRDtBQUNBO0FBQ0Esd0ZBQXdGO0FBQ3hGO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7RUFDRTtJQUNFLFVBQVU7SUFDVixjQUFjO0lBQ2QsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtFQUNkO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsWUFBWTtFQUNkO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGO0FBRUE7O0lBRUk7UUFDSSxVQUFVO1FBQ1YsY0FBYztRQUNkLFlBQVk7UUFDWixpQkFBaUI7TUFDbkI7O01BRUE7VUFDSSxhQUFhO01BQ2pCO0FBQ04iLCJmaWxlIjoiYWJvdXQtdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuKiB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLyogZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjsgKi9cclxufVxyXG5cclxuLnNlY3Rpb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmctdG9wOiA4MHB4O1xyXG59XHJcblxyXG4uY29udGVudC1zZWN0aW9uIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogNTUlO1xyXG59XHJcblxyXG4uaW1hZ2Utc2VjdGlvbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbi5pbWFnZS1zZWN0aW9uIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uY29udGVudC1zZWN0aW9uIC50aXRsZSB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbn1cclxuXHJcbi5jb250ZW50LXNlY3Rpb24gLmNvbnRlbnQgaDMge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgY29sb3I6ICM1ZDVkNWQ7XHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG59XHJcblxyXG4uY29udGVudC1zZWN0aW9uIC5jb250ZW50IHAge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbi5jb250ZW50LXNlY3Rpb24gLmNvbnRlbnQgLmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jb250ZW50LXNlY3Rpb24gLmNvbnRlbnQgLmJ1dHRvbiBhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2QzZDNkO1xyXG4gIHBhZGRpbmc6IDEycHggNDBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxufVxyXG5cclxuLmNvbnRlbnQtc2VjdGlvbiAuY29udGVudCAuYnV0dG9uIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhNTJhMmE7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jb250ZW50LXNlY3Rpb24gLnNvY2lhbCB7XHJcbiAgbWFyZ2luOiA0MHB4IDQwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY29udGVudC1zZWN0aW9uIC5zb2NpYWwgaSB7XHJcbiAgY29sb3I6ICNhNTJhMmE7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xyXG59XHJcblxyXG4vKiAuY29udGVudC1zZWN0aW9uIC5zb2NpYWwgaTpob3ZlciB7XHJcbiAgY29sb3I6ICMzZDNkM2Q7XHJcbn0gKi9cclxuLmljb24tYm94e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAvKiBoZWlnaHQ6IDc1dmg7ICovXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMzVweDtcclxufSAgXHJcbi5pY29uLWJveCAuYm94IHtcclxubWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG53aWR0aDogNjBweDtcclxuaGVpZ2h0OiA2MHB4O1xyXG5ib3JkZXItcmFkaXVzOiAzMHB4O1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5mbGV4LWRpcmVjdGlvbjogcm93O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxudHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xyXG5jdXJzb3I6IHBvaW50ZXI7ICAgXHJcbn0gIFxyXG4uaWNvbi1ib3ggLmJveCBpe1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4uaWNvbi1ib3ggLmJveDpob3ZlcntcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpXHJcbn0gIFxyXG4uaWNvbi1ib3ggaTpob3ZlcntcclxuICB0cmFuc2l0aW9uOiAgdHJhbnNmb3JtIDFzLCBmaWx0ZXIgMnMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpXHJcbn1cclxuLmljb24tYm94IC5ib3g6bnRoLWNoaWxkKDEpe1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjM2I1OTk4LCAjNDg2YWI0KTtcclxufVxyXG4uaWNvbi1ib3ggLmJveDpudGgtY2hpbGQoMil7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM1NWFjZWUsICMxZmQxZjkpO1xyXG59XHJcbi5pY29uLWJveCAuYm94Om50aC1jaGlsZCgzKXtcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmMDk0MzMgMCUsI2U2NjgzYyAyNSUsI2RjMjc0MyA1MCUsI2NjMjM2NiA3NSUsI2JjMTg4OCAxMDAlKTsgXHJcbn1cclxuLmljb24tYm94IC5ib3g6bnRoLWNoaWxkKDQpe1xyXG5iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzE2OTVkYSwgIzAwNzJiMSk7XHJcbn1cclxuLmljb24tYm94IC5ib3g6bnRoLWNoaWxkKDUpe1xyXG5iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2ZmMzIzMiwgI0ZGMDAwMCk7IFxyXG59XHJcbi5pY29uLWJveCAuYm94Om50aC1jaGlsZCg2KXtcclxuYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNDOTIyMjgsICNjNzNjNDApO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICB9XHJcbiAgLmNvbnRlbnQtc2VjdGlvbiB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIC5pbWFnZS1zZWN0aW9uIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNzBweDtcclxuICB9XHJcbiAgLmltYWdlLXNlY3Rpb24gaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIC5jb250ZW50LXNlY3Rpb24gLnRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICB9XHJcbiAgLmNvbnRlbnQtc2VjdGlvbiAuY29udGVudCAuYnV0dG9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmNvbnRlbnQtc2VjdGlvbiAuY29udGVudCAuYnV0dG9uIGEge1xyXG4gICAgcGFkZGluZzogOXB4IDMwcHg7XHJcbiAgfVxyXG4gIC5jb250ZW50LXNlY3Rpb24gLnNvY2lhbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJvZHl7XHJcbiAgICAgICAgICBoZWlnaHQ6IDIxNXZoO1xyXG4gICAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "EV2v":
/*!***********************************************************!*\
  !*** ./src/app/common/store/state/match/matches.state.ts ***!
  \***********************************************************/
/*! exports provided: matchStateModel, MatchState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchStateModel", function() { return matchStateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchState", function() { return MatchState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _actions_match_matches_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/match/matches.action */ "kfxs");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/components/loading/loading.component */ "4cPp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_service_matches_service_matches_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/service/matches_service/matches.service */ "gD1G");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");








class matchStateModel {
}
let MatchState = class MatchState {
    constructor(ms, dialog) {
        this.ms = ms;
        this.dialog = dialog;
    }
    static getMatchData(state) {
        return state.match;
    }
    static MatchLoaded(state) {
        return state.matchLoaded;
    }
    getMatches({ getState, setState }) {
        const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"], {
            disableClose: true,
        });
        return this.ms.getAllMatchesNGXS().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => {
            const state = getState();
            setState(Object.assign(Object.assign({}, state), { match: res, matchLoaded: true }));
            dialogRef.close();
        }));
    }
    static selectedMatch(state) {
        return state.selectedMatch;
    }
    setSelectedMatch({ getState, setState }, { matchId }) {
        const state = getState();
        let matchList = state.match;
        // console.log('INDEX', index);
        const index = matchList.findIndex((findId) => findId.matchId === matchId);
        // console.log('SDSDSDSD', matchList[matchId]);
        setState(Object.assign(Object.assign({}, state), { selectedMatch: matchList[index] }));
    }
};
MatchState.ɵfac = function MatchState_Factory(t) { return new (t || MatchState)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_common_service_matches_service_matches_service__WEBPACK_IMPORTED_MODULE_6__["MatchesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
MatchState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: MatchState, factory: MatchState.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_match_matches_action__WEBPACK_IMPORTED_MODULE_2__["GetMatch"])
], MatchState.prototype, "getMatches", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_match_matches_action__WEBPACK_IMPORTED_MODULE_2__["SetSelectedMatch"])
], MatchState.prototype, "setSelectedMatch", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], MatchState, "getMatchData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], MatchState, "MatchLoaded", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], MatchState, "selectedMatch", null);
MatchState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'matches',
        defaults: {
            match: [],
            matchLoaded: false,
            selectedMatch: null,
        },
    })
], MatchState);



/***/ }),

/***/ "GXNF":
/*!**************************************************************!*\
  !*** ./src/app/common/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _constants_roles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/roles */ "BVGi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/login_state/loginstate.service */ "1d9a");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function FooterComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00A9 2022, BBD IPL, All rights reserved");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "About Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h6", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h6", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Rules ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FooterComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00A9 2022, BBD IPL, All rights reserved ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "About Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h6", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h6", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Rules ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class FooterComponent {
    constructor(loginStateService2) {
        this.loginStateService2 = loginStateService2;
    }
    ngOnInit() {
    }
    isRoleAdmin() {
        const loginState = this.loginStateService2.getLoginState();
        return loginState != null && loginState.role === _constants_roles__WEBPACK_IMPORTED_MODULE_0__["RA"];
    }
    isRoleUser() {
        const loginState = this.loginStateService2.getLoginState();
        return loginState != null && loginState.role === _constants_roles__WEBPACK_IMPORTED_MODULE_0__["RU"];
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_2__["LoginstateService"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 2, consts: [[1, "text-center", "text-lg-start", "customf"], ["class", "text-center p-3 footer-content", "style", "background-color: rgba(0, 0, 0, 0.2);", 4, "ngIf"], [1, "text-center", "p-3", "footer-content", 2, "background-color", "rgba(0, 0, 0, 0.2)"], [1, "text-light"], [1, "example-spacer"], ["routerLink", "Admin/about-us"], ["routerLink", "Admin/contact-us"], ["routerLink", "Admin/rules"], ["routerLink", "User/about-us"], ["routerLink", "User/contact-us"], ["routerLink", "User/rules"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FooterComponent_div_1_Template, 13, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FooterComponent_div_2_Template, 13, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isRoleAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isRoleUser());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=BioRhyme:wght@200;300&display=swap');\r\n.customf[_ngcontent-%COMP%] {\r\n    \r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    \r\n    background: linear-gradient(45deg, #cc1ab3, #1318a5);\r\n    \r\n}\r\n.text-light[_ngcontent-%COMP%] {\r\n    font-size: 1.1em;\r\n    font-family: 'BioRhyme', serif;\r\n}\r\n.footer-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    \r\n}\r\na[_ngcontent-%COMP%] {\r\n    \r\n    color: white;\r\n    margin-right: 20px;\r\n}\r\n.example-spacer[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n}\r\n@media only screen and (max-width: 480px) {\r\n    \r\n\r\n    .footer-content[_ngcontent-%COMP%]{\r\n        font-size: 0.6em;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBGQUEwRjtBQUMxRjtJQUNJLHFCQUFxQjtJQUNyQixPQUFPO0lBQ1AsU0FBUztJQUNULFdBQVc7SUFDWCxrRUFBa0U7SUFDbEUsb0RBQW9EO0lBQ3BELHdCQUF3QjtBQUM1QjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDhCQUE4QjtBQUNsQztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQ0FBb0M7QUFDeEM7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSTtpRUFDNkQ7O0lBRTdEO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CaW9SaHltZTp3Z2h0QDIwMDszMDAmZGlzcGxheT1zd2FwJyk7XHJcbi5jdXN0b21mIHtcclxuICAgIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2NjZmYwMCwgbWFyb29uLCAjRkY1RjFGKTsgKi9cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2NjMWFiMywgIzEzMThhNSk7XHJcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXHJcbn1cclxuXHJcbi50ZXh0LWxpZ2h0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBmb250LWZhbWlseTogJ0Jpb1JoeW1lJywgc2VyaWY7XHJcbn1cclxuXHJcbi5mb290ZXItY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cclxufVxyXG5cclxuYSB7XHJcbiAgICAvKiB0ZXh0LWRlY29yYXRpb246IG5vbmU7ICovXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLyogU1RZTEVTIEhFUkUgZm9yIEJST1dTRVIgV0lORE9XUyB3aXRoIGEgbWF4LXdpZHRoIG9mIDQ4MHB4LiBcclxuICAgICAgIFRoaXMgd2lsbCB3b3JrIG9uIGRlc2t0b3BzIHdoZW4gdGhlIHdpbmRvdyBpcyBuYXJyb3dlZC4gICovXHJcblxyXG4gICAgLmZvb3Rlci1jb250ZW50e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC42ZW07XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "HXgO":
/*!***************************************************!*\
  !*** ./src/app/common/model/login/login-model.ts ***!
  \***************************************************/
/*! exports provided: LoginModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModel", function() { return LoginModel; });
class LoginModel {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}


/***/ }),

/***/ "IV7L":
/*!*******************************************!*\
  !*** ./src/app/common/constants/links.ts ***!
  \*******************************************/
/*! exports provided: ipl, first, second, third, profile, register, stadium, userbadge, allteams, chennaiWin, trophy, teamFlags, otherUser, csk, mi, gt, lsg, kkr, rcb, rr, pbks, srh, dc, place_bet_music */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ipl", function() { return ipl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "second", function() { return second; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "third", function() { return third; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profile", function() { return profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stadium", function() { return stadium; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userbadge", function() { return userbadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allteams", function() { return allteams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chennaiWin", function() { return chennaiWin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trophy", function() { return trophy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teamFlags", function() { return teamFlags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "otherUser", function() { return otherUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csk", function() { return csk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mi", function() { return mi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gt", function() { return gt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lsg", function() { return lsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kkr", function() { return kkr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rcb", function() { return rcb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rr", function() { return rr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pbks", function() { return pbks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "srh", function() { return srh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dc", function() { return dc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "place_bet_music", function() { return place_bet_music; });
const ipl = 'https://firebasestorage.googleapis.com/v0/b/react-128c5.appspot.com/o/ipl.jpg?alt=media';
const first = 'https://firebasestorage.googleapis.com/v0/b/react-128c5.appspot.com/o/first.png?alt=media';
const second = 'https://firebasestorage.googleapis.com/v0/b/react-128c5.appspot.com/o/second.png?alt=media';
const third = 'https://firebasestorage.googleapis.com/v0/b/react-128c5.appspot.com/o/third.png?alt=media';
const profile = 'https://firebasestorage.googleapis.com/v0/b/react-128c5.appspot.com/o/profile-section.jpg?alt=media';
const register = 'https://firebasestorage.googleapis.com/v0/b/react-128c5.appspot.com/o/register.jpg?alt=media';
const stadium = 'https://firebasestorage.googleapis.com/v0/b/react-128c5.appspot.com/o/stadium.jpg?alt=media';
const userbadge = 'https://firebasestorage.googleapis.com/v0/b/sportsgeek-74e1e.appspot.com/o/69bba4a0-c114-4379-9854-e4381a3130bc.png?alt=media';
const allteams = 'https://firebasestorage.googleapis.com/v0/b/react-128c5.appspot.com/o/allteams.jpg?alt=media';
const chennaiWin = 'https://firebasestorage.googleapis.com/v0/b/react-128c5.appspot.com/o/chennaiWon2021.jpg?alt=media';
const trophy = 'https://firebasestorage.googleapis.com/v0/b/react-128c5.appspot.com/o/trophy.jpg?alt=media';
const teamFlags = 'https://firebasestorage.googleapis.com/v0/b/react-128c5.appspot.com/o/team_flags.jpg?alt=media';
const otherUser = 'https://firebasestorage.googleapis.com/v0/b/react-128c5.appspot.com/o/otherUser.jpg?alt=media';
const csk = 'https://firebasestorage.googleapis.com/v0/b/react-128c5.appspot.com/o/csk.gif?alt=media';
const mi = 'https://firebasestorage.googleapis.com/v0/b/react-128c5.appspot.com/o/mi.gif?alt=media';
const gt = 'https://firebasestorage.googleapis.com/v0/b/react-128c5.appspot.com/o/gt.gif?alt=media';
const lsg = 'https://firebasestorage.googleapis.com/v0/b/react-128c5.appspot.com/o/lgt.gif?alt=media';
const kkr = 'https://firebasestorage.googleapis.com/v0/b/react-128c5.appspot.com/o/kkr.gif?alt=media';
const rcb = 'https://firebasestorage.googleapis.com/v0/b/react-128c5.appspot.com/o/rcb.gif?alt=media';
const rr = 'https://firebasestorage.googleapis.com/v0/b/react-128c5.appspot.com/o/rr.gif?alt=media';
const pbks = 'https://firebasestorage.googleapis.com/v0/b/react-128c5.appspot.com/o/pbks.gif?alt=media';
const srh = 'https://firebasestorage.googleapis.com/v0/b/react-128c5.appspot.com/o/srh.gif?alt=media';
const dc = 'https://firebasestorage.googleapis.com/v0/b/react-128c5.appspot.com/o/dc.gif?alt=media';
const place_bet_music = 'https://firebasestorage.googleapis.com/v0/b/react-128c5.appspot.com/o/place_contest.mp3?alt=media';


/***/ }),

/***/ "KeLs":
/*!************************************************************************!*\
  !*** ./src/app/common/components/confirm-box/confirm-box.component.ts ***!
  \************************************************************************/
/*! exports provided: ConfirmBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmBoxComponent", function() { return ConfirmBoxComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ConfirmBoxComponent {
    constructor(matDialogRef, data) {
        this.matDialogRef = matDialogRef;
        this.data = data;
        this.title = data;
    }
    ngOnInit() {
    }
    confirm() {
        this.matDialogRef.close(true);
    }
    decline() {
        this.matDialogRef.close(false);
    }
}
ConfirmBoxComponent.ɵfac = function ConfirmBoxComponent_Factory(t) { return new (t || ConfirmBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"], 8)); };
ConfirmBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConfirmBoxComponent, selectors: [["app-confirm-box"]], decls: 11, vars: 1, consts: [[1, "confirm-box"], [1, "confirm-box-inner"], [1, "footer"], [1, "yes", 3, "click"], [1, "no", 3, "click"]], template: function ConfirmBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Are you sure! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmBoxComponent_Template_div_click_7_listener() { return ctx.confirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmBoxComponent_Template_div_click_9_listener() { return ctx.decline(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
    } }, styles: [".cofirm-box[_ngcontent-%COMP%] {\r\n    width: 500px;\r\n    height: 300px;\r\n    background: rgb(14, 11, 11);\r\n    color: #112121;\r\n}\r\n\r\n.confirm-box-inner[_ngcontent-%COMP%] {\r\n    width: 500px;\r\n    font-size: 18px;\r\n    padding: 50px;\r\n    height: 250px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    background: aqua;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n    color: white;\r\n    display: flex;\r\n    font-size: 20px;\r\n    font-weight: bolder;\r\n}\r\n\r\n.yes[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #0d8048;\r\n    height: 100%;\r\n    width: 50%;\r\n}\r\n\r\n.yes[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    background-color: #07502d;\r\n}\r\n\r\n.no[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #f44336;\r\n    height: 100%;\r\n    width: 50%;\r\n}\r\n\r\n.no[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    background-color: #d11c0f;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n    .cofirm-box[_ngcontent-%COMP%] {\r\n        width: 250px;\r\n        height: 300px;\r\n        background: rgb(14, 11, 11);\r\n        color: #112121;\r\n    }\r\n\r\n    .confirm-box-inner[_ngcontent-%COMP%] {\r\n        width: 240px;\r\n        font-size: 18px;\r\n        padding: 50px;\r\n        height: 250px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n        text-align: center;\r\n        background: aqua;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tYm94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsMkJBQTJCO1FBQzNCLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osZUFBZTtRQUNmLGFBQWE7UUFDYixhQUFhO1FBQ2IsYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJjb25maXJtLWJveC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb2Zpcm0tYm94IHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTQsIDExLCAxMSk7XHJcbiAgICBjb2xvcjogIzExMjEyMTtcclxufVxyXG5cclxuLmNvbmZpcm0tYm94LWlubmVyIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiBhcXVhO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4ueWVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ4MDQ4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLnllczpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc1MDJkO1xyXG59XHJcblxyXG4ubm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ubm86aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxMWMwZjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvZmlybS1ib3gge1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigxNCwgMTEsIDExKTtcclxuICAgICAgICBjb2xvcjogIzExMjEyMTtcclxuICAgIH1cclxuXHJcbiAgICAuY29uZmlybS1ib3gtaW5uZXIge1xyXG4gICAgICAgIHdpZHRoOiAyNDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgcGFkZGluZzogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBhcXVhO1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "LqFS":
/*!*************************************************!*\
  !*** ./src/app/common/model/user/user-model.ts ***!
  \*************************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
class UserModel {
    constructor() { }
}


/***/ }),

/***/ "MIaQ":
/*!*******************************************************************!*\
  !*** ./src/app/common/store/state/match/upcomingMatches.state.ts ***!
  \*******************************************************************/
/*! exports provided: upcomingmatchStateModel, UpcomingMatchState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upcomingmatchStateModel", function() { return upcomingmatchStateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingMatchState", function() { return UpcomingMatchState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions_match_upcomingmatch_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/match/upcomingmatch.action */ "j5Nc");
/* harmony import */ var src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/components/loading/loading.component */ "4cPp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_service_matches_service_matches_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/service/matches_service/matches.service */ "gD1G");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");








class upcomingmatchStateModel {
}
let UpcomingMatchState = class UpcomingMatchState {
    constructor(ms, dialog) {
        this.ms = ms;
        this.dialog = dialog;
    }
    static getUpcomingMatchData(upcomingmatchstate) {
        return upcomingmatchstate.upcomingmatch;
    }
    static upcomingMatchLoaded(upcomingmatchloadedstate) {
        return upcomingmatchloadedstate.upcomingmatchLoaded;
    }
    getUpcomingMatches({ getState, setState, }) {
        // const dialogRef = this.dialog.open(LoadingComponent, {
        //   disableClose: false,
        // });
        return this.ms.getAllUpcomingMatchesNGXS().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((res) => {
            const upcomingmatchstate = getState();
            setState(Object.assign(Object.assign({}, upcomingmatchstate), { upcomingmatch: res, upcomingmatchLoaded: true }));
            // dialogRef.close();
        }));
    }
    static selectedUpcomingMatch(upcomingmatchstate) {
        return upcomingmatchstate.upcomingselectedMatch;
    }
    setSelectedUpcomingMatch({ getState, setState }, { matchId }) {
        const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"], {
            disableClose: true,
        });
        const upcomingmatchstate = getState();
        let matchList = upcomingmatchstate.upcomingmatch;
        const index = matchList.findIndex((findId) => findId.matchId == matchId);
        // console.log('INDEX',matchList[index]);
        setState(Object.assign(Object.assign({}, upcomingmatchstate), { upcomingselectedMatch: matchList[index] }));
        dialogRef.close();
    }
};
UpcomingMatchState.ɵfac = function UpcomingMatchState_Factory(t) { return new (t || UpcomingMatchState)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_common_service_matches_service_matches_service__WEBPACK_IMPORTED_MODULE_6__["MatchesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
UpcomingMatchState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: UpcomingMatchState, factory: UpcomingMatchState.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_match_upcomingmatch_action__WEBPACK_IMPORTED_MODULE_3__["GetUpcomingMatch"])
], UpcomingMatchState.prototype, "getUpcomingMatches", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_match_upcomingmatch_action__WEBPACK_IMPORTED_MODULE_3__["SetUpcomingSelectedMatch"])
], UpcomingMatchState.prototype, "setSelectedUpcomingMatch", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], UpcomingMatchState, "getUpcomingMatchData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], UpcomingMatchState, "upcomingMatchLoaded", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], UpcomingMatchState, "selectedUpcomingMatch", null);
UpcomingMatchState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'upcomingmatches',
        defaults: {
            upcomingmatch: [],
            upcomingmatchLoaded: false,
            upcomingselectedMatch: null,
        },
    })
], UpcomingMatchState);



/***/ }),

/***/ "NO3i":
/*!**************************************************************!*\
  !*** ./src/app/common/store/state/match/oldMatches.state.ts ***!
  \**************************************************************/
/*! exports provided: oldMatchStateModel, OldMatchState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oldMatchStateModel", function() { return oldMatchStateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OldMatchState", function() { return OldMatchState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/components/loading/loading.component */ "4cPp");
/* harmony import */ var _actions_match_oldmatch_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/match/oldmatch.action */ "ljpH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_service_matches_service_matches_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/service/matches_service/matches.service */ "gD1G");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");








class oldMatchStateModel {
}
let OldMatchState = class OldMatchState {
    constructor(ms, dialog) {
        this.ms = ms;
        this.dialog = dialog;
    }
    static getOldMatchData(oldmatchstate) {
        return oldmatchstate.oldmatch;
    }
    static OldMatchLoaded(oldmatchloadedstate) {
        return oldmatchloadedstate.oldmatchLoaded;
    }
    getOldMatches({ getState, setState }) {
        const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], {
            disableClose: true,
        });
        return this.ms.getAllOldMatchesNGXS().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((res) => {
            const oldmatchstate = getState();
            setState(Object.assign(Object.assign({}, oldmatchstate), { oldmatch: res, oldmatchLoaded: true }));
            dialogRef.close();
        }));
    }
    static selectedOldMatch(oldmatchstate) {
        return oldmatchstate.selectedOldMatch;
    }
    setOldSelectedMatch({ getState, setState }, { matchId }) {
        const state = getState();
        let matchList = state.oldmatch;
        // console.log('INDEX', index);
        const index = matchList.findIndex((findId) => findId.matchId === matchId);
        // console.log('SDSDSDSD', matchList[matchId]);
        setState(Object.assign(Object.assign({}, state), { selectedOldMatch: matchList[index] }));
    }
};
OldMatchState.ɵfac = function OldMatchState_Factory(t) { return new (t || OldMatchState)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_common_service_matches_service_matches_service__WEBPACK_IMPORTED_MODULE_6__["MatchesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
OldMatchState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: OldMatchState, factory: OldMatchState.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_match_oldmatch_action__WEBPACK_IMPORTED_MODULE_4__["GetOldMatch"])
], OldMatchState.prototype, "getOldMatches", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_match_oldmatch_action__WEBPACK_IMPORTED_MODULE_4__["SetOldSelectedMatch"])
], OldMatchState.prototype, "setOldSelectedMatch", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], OldMatchState, "getOldMatchData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], OldMatchState, "OldMatchLoaded", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], OldMatchState, "selectedOldMatch", null);
OldMatchState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'oldmatches',
        defaults: {
            oldmatch: [],
            oldmatchLoaded: false,
            selectedOldMatch: null,
        },
    })
], OldMatchState);



/***/ }),

/***/ "O3ga":
/*!********************************************************************!*\
  !*** ./src/app/common/store/actions/user/userfuturebets.action.ts ***!
  \********************************************************************/
/*! exports provided: GetUserFB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserFB", function() { return GetUserFB; });
class GetUserFB {
}
GetUserFB.type = '[UserFutureBets] Get';


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_service_authentication_service_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/service/authentication_service/authentication.service */ "16jV");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/components/header/header.component */ "brmR");
/* harmony import */ var _common_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/components/footer/footer.component */ "GXNF");







function AppComponent_app_header_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("deviceXs", ctx_r0.deviceXs);
} }
function AppComponent_app_footer_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer");
} }
class AppComponent {
    constructor(authservice3, mediaObserver) {
        this.authservice3 = authservice3;
        this.mediaObserver = mediaObserver;
        this.title = 'BBD IPL';
    }
    ngOnDestroy() {
        this.mediaSub.unsubscribe();
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            // console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs' ? true : false;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_service_authentication_service_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 2, consts: [[3, "deviceXs", 4, "ngIf"], [4, "ngIf"], [3, "deviceXs"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_header_0_Template, 1, 1, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_app_footer_2_Template, 1, 0, "app-footer", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authservice3.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authservice3.isLoggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _common_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _common_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"], encapsulation: 2 });


/***/ }),

/***/ "Tn1y":
/*!***************************************************************!*\
  !*** ./src/app/common/store/actions/user/userstats.action.ts ***!
  \***************************************************************/
/*! exports provided: GetUserStats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserStats", function() { return GetUserStats; });
class GetUserStats {
}
GetUserStats.type = '[UserStats] Get';


/***/ }),

/***/ "Wxjj":
/*!********************************************************************************!*\
  !*** ./src/app/common/components/change-password/change-password.component.ts ***!
  \********************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _constants_error_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/error-message */ "jsD4");
/* harmony import */ var _constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/snackbar-properties */ "fc4o");
/* harmony import */ var _model_change_password_NewPassword__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/change-password/NewPassword */ "q5mM");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loading/loading.component */ "4cPp");
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../snackbar/snackbar.component */ "j7cY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/login_state/loginstate.service */ "1d9a");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_user_service_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../service/user_service/user.service */ "2/mB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");



















function ChangePasswordComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "USER CHANGE PASSWORD");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "ADMIN CHANGE PASSWORD");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "password is reqiured");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "password must have atleast 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "password must have less than 40 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "password is reqiured");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "password must have atleast 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "password must have less than 40 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "password is reqiured");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "password must have atleast 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "password must have less than 40 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "confirm password does not match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
class ChangePasswordComponent {
    constructor(fb, loginStateService, snackbar, dialog, router, userService, matDialogRef) {
        this.fb = fb;
        this.loginStateService = loginStateService;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.router = router;
        this.userService = userService;
        this.matDialogRef = matDialogRef;
        this.hide = true;
        this.hide1 = true;
        this.hide2 = true;
        this.changePasswordForm = this.fb.group({
            currentPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(40)]],
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(40)]],
            newConfPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(40)]],
        });
    }
    ngOnInit() {
    }
    get form() {
        return this.changePasswordForm.controls;
    }
    changePassword() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.changePasswordForm.valid) {
                const loginState = this.loginStateService.getLoginState();
                const newPasswordModel = new _model_change_password_NewPassword__WEBPACK_IMPORTED_MODULE_4__["NewPasswordModel"]();
                newPasswordModel.userId = loginState.userId;
                newPasswordModel.oldPassword = this.form.currentPassword.value;
                newPasswordModel.newPassword = this.form.newPassword.value;
                let panelClass = 'green';
                let snackbarMsg = '';
                let snackbarRef = null;
                this.snackbar.dismiss();
                const dialogRef = this.dialog.open(_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], { disableClose: true });
                let resp = null;
                try {
                    // if (loginState.role === 'User') {
                    resp = yield this.userService.updatePassword(newPasswordModel);
                    // } else if (loginState.role === 'Admin') {
                    // resp = await this.adminService.updatePassword(newPasswordModel);
                    // }
                    const msg = resp.body.message;
                    if (msg) {
                        snackbarMsg = msg + '! Please Login again.';
                        this.loginStateService.destroySession(loginState.role);
                        this.matDialogRef.close();
                        this.router.navigate(['/login']);
                    }
                    else {
                        snackbarMsg = _constants_error_message__WEBPACK_IMPORTED_MODULE_2__["NO_RESP"];
                        panelClass = 'red';
                    }
                }
                catch (ex) {
                    snackbarMsg = Object(_constants_error_message__WEBPACK_IMPORTED_MODULE_2__["getErrorMessage"])(ex);
                    panelClass = 'red';
                }
                finally {
                    dialogRef.close();
                }
                if (snackbarMsg) {
                    snackbarRef = this.snackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"], Object(_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_3__["getSnackbarProperties"])(snackbarMsg, panelClass));
                }
            }
        });
    }
    closeDialogBox() {
        this.matDialogRef.close();
    }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_8__["LoginstateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_user_service_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"])); };
ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ChangePasswordComponent, selectors: [["app-change-password"]], decls: 43, vars: 26, consts: [[1, "sub-container-2"], [3, "formGroup"], [4, "ngIf"], [1, "field-container"], ["appearance", "fill", "color", "accent"], ["matInput", "", "formControlName", "currentPassword", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["matInput", "", "formControlName", "newPassword", 3, "type"], ["matInput", "", "formControlName", "newConfPassword", 3, "pattern", "type"], ["mat-raised-button", "", "color", "accent", "type", "submit", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ChangePasswordComponent_p_2_Template, 2, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ChangePasswordComponent_p_3_Template, 2, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Current Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_9_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, ChangePasswordComponent_mat_error_12_Template, 2, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ChangePasswordComponent_mat_error_13_Template, 2, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ChangePasswordComponent_mat_error_14_Template, 2, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_20_listener() { return ctx.hide1 = !ctx.hide1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, ChangePasswordComponent_mat_error_23_Template, 2, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, ChangePasswordComponent_mat_error_24_Template, 2, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, ChangePasswordComponent_mat_error_25_Template, 2, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_31_listener() { return ctx.hide2 = !ctx.hide2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, ChangePasswordComponent_mat_error_34_Template, 2, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, ChangePasswordComponent_mat_error_35_Template, 2, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, ChangePasswordComponent_mat_error_36_Template, 2, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, ChangePasswordComponent_mat_error_37_Template, 2, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_39_listener() { return ctx.changePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Change Password Now!");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_41_listener() { return ctx.closeDialogBox(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.changePasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loginStateService.role === "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loginStateService.role === "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.currentPassword.errors == null ? null : ctx.form.currentPassword.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.currentPassword.errors == null ? null : ctx.form.currentPassword.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.currentPassword.errors == null ? null : ctx.form.currentPassword.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", ctx.hide1 ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.hide1 ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.newPassword.errors == null ? null : ctx.form.newPassword.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.newPassword.errors == null ? null : ctx.form.newPassword.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.newPassword.errors == null ? null : ctx.form.newPassword.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("pattern", ctx.form.newPassword.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", ctx.hide2 ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.hide2 ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.newConfPassword.errors == null ? null : ctx.form.newConfPassword.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.newConfPassword.errors == null ? null : ctx.form.newConfPassword.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.newConfPassword.errors == null ? null : ctx.form.newConfPassword.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.newConfPassword.errors == null ? null : ctx.form.newConfPassword.errors.pattern);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatError"]], styles: [".sub-container-2[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  padding: 50px;\r\n  background-color: aqua;\r\n  text-align: center;\r\n}\r\n\r\n.sub-container-2[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n  letter-spacing: 3px;\r\n  font-family: Agency Fb;\r\n  color: rgb(15, 14, 14);\r\n}\r\n\r\n.mat-button-container[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n  margin: 10px auto;\r\n  display: blocks;\r\n  width: 400px;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  \r\n  color: black;\r\n}\r\n\r\n.mat-raised-button[_ngcontent-%COMP%] {\r\n  margin: 30px auto;\r\n  display: block;\r\n  width: 400px;\r\n}\r\n\r\n.mat-dialog-container[_ngcontent-%COMP%] {\r\n  background-color: aqua;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    .sub-container-2[_ngcontent-%COMP%] {\r\n        max-height: 90vh;\r\n        padding: 0;\r\n        margin-top: 20px;\r\n        background-color: aqua;\r\n        text-align: center;\r\n        overflow-y: auto;\r\n        width: 220px;\r\n      }\r\n\r\n      .sub-container-2[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 1rem;\r\n        letter-spacing: 1px;\r\n        font-family: Agency Fb;\r\n        color: rgb(15, 14, 14);\r\n        font-weight: bolder;\r\n      }\r\n\r\n      .mat-form-field[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n        display: blocks;\r\n        width: 200px;\r\n      }\r\n\r\n      .mat-raised-button[_ngcontent-%COMP%] {\r\n        margin: 30px auto;\r\n        display: block;\r\n        width: auto;\r\n      }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOztJQUVJO1FBQ0ksZ0JBQWdCO1FBQ2hCLFVBQVU7UUFDVixnQkFBZ0I7UUFDaEIsc0JBQXNCO1FBQ3RCLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsWUFBWTtNQUNkOztNQUVBO1FBQ0UsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLG1CQUFtQjtNQUNyQjs7TUFFQTtRQUNFLFNBQVM7UUFDVCxlQUFlO1FBQ2YsWUFBWTtNQUNkOztNQUVBO1FBQ0UsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxXQUFXO01BQ2I7QUFDTiIsImZpbGUiOiJjaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWItY29udGFpbmVyLTIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc3ViLWNvbnRhaW5lci0yIGZvcm0gcCB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgZm9udC1mYW1pbHk6IEFnZW5jeSBGYjtcclxuICBjb2xvcjogcmdiKDE1LCAxNCwgMTQpO1xyXG59XHJcblxyXG4ubWF0LWJ1dHRvbi1jb250YWluZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuICBkaXNwbGF5OiBibG9ja3M7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQgaW5wdXQge1xyXG4gIC8qIGNvbG9yOiB3aGl0ZTsgKi9cclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcbiAgICAuc3ViLWNvbnRhaW5lci0yIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA5MHZoO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN1Yi1jb250YWluZXItMiBmb3JtIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBBZ2VuY3kgRmI7XHJcbiAgICAgICAgY29sb3I6IHJnYigxNSwgMTQsIDE0KTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBkaXNwbGF5OiBibG9ja3M7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gICAgICAgIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_material_components_file_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-material-components/file-input */ "OC/Z");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var mat_table_filter__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! mat-table-filter */ "6Ugt");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-pick-datetime */ "z17N");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _common_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./common/components/change-password/change-password.component */ "Wxjj");
/* harmony import */ var _common_components_confirm_box_confirm_box_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./common/components/confirm-box/confirm-box.component */ "KeLs");
/* harmony import */ var _common_components_footer_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./common/components/footer/about-us/about-us.component */ "DbvX");
/* harmony import */ var _common_components_footer_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./common/components/footer/contact-us/contact-us.component */ "ymDI");
/* harmony import */ var _common_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./common/components/footer/footer.component */ "GXNF");
/* harmony import */ var _common_components_footer_rules_rules_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./common/components/footer/rules/rules.component */ "z8b/");
/* harmony import */ var _common_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./common/components/forgot-password/forgot-password.component */ "ty9h");
/* harmony import */ var _common_components_header_header_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./common/components/header/header.component */ "brmR");
/* harmony import */ var _common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./common/components/loading/loading.component */ "4cPp");
/* harmony import */ var _common_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./common/components/not-found/not-found.component */ "mIit");
/* harmony import */ var _common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./common/components/snackbar/snackbar.component */ "j7cY");
/* harmony import */ var _common_guard_auth_guard__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./common/guard/auth.guard */ "4SCC");
/* harmony import */ var _common_service_http_interceptor_http_interceptor_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./common/service/http-interceptor/http-interceptor.service */ "rtly");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @ngxs/logger-plugin */ "/wON");
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @ngxs/devtools-plugin */ "xuHu");
/* harmony import */ var _common_store_state_match_matches_state__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./common/store/state/match/matches.state */ "EV2v");
/* harmony import */ var _common_store_state_match_upcomingMatches_state__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./common/store/state/match/upcomingMatches.state */ "MIaQ");
/* harmony import */ var _common_store_state_user_user_state__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./common/store/state/user/user.state */ "7Uuh");
/* harmony import */ var _common_store_state_match_oldMatches_state__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./common/store/state/match/oldMatches.state */ "NO3i");
/* harmony import */ var _common_store_state_user_userstats_state__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./common/store/state/user/userstats.state */ "Zy3G");
/* harmony import */ var _common_store_state_user_userfuturebets_state__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./common/store/state/user/userfuturebets.state */ "htab");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/core */ "fXoL");

































































// console.log("app module loaded");
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_60__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_33__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_60__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _common_service_http_interceptor_http_interceptor_service__WEBPACK_IMPORTED_MODULE_46__["HttpInterceptorService"],
            multi: true
        },
        _common_guard_auth_guard__WEBPACK_IMPORTED_MODULE_45__["AuthGuard"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_32__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            mat_table_filter__WEBPACK_IMPORTED_MODULE_30__["MatTableFilterModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_31__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_31__["OwlNativeDateTimeModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
            _angular_material_components_file_input__WEBPACK_IMPORTED_MODULE_0__["NgxMatFileInputModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_50__["MatTooltipModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_48__["ServiceWorkerModule"].register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_49__["environment"].production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
            }),
            _ngxs_store__WEBPACK_IMPORTED_MODULE_51__["NgxsModule"].forRoot([_common_store_state_match_matches_state__WEBPACK_IMPORTED_MODULE_54__["MatchState"], _common_store_state_match_upcomingMatches_state__WEBPACK_IMPORTED_MODULE_55__["UpcomingMatchState"], _common_store_state_user_user_state__WEBPACK_IMPORTED_MODULE_56__["UserState"], _common_store_state_match_oldMatches_state__WEBPACK_IMPORTED_MODULE_57__["OldMatchState"], _common_store_state_user_userstats_state__WEBPACK_IMPORTED_MODULE_58__["UserStatisticsState"], _common_store_state_user_userfuturebets_state__WEBPACK_IMPORTED_MODULE_59__["UserFBState"]]),
            // NgxsModule.forRoot([MatchState,UpcomingMatchState], { developmentMode: !environment.production }),
            _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_52__["NgxsLoggerPluginModule"].forRoot(),
            _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_53__["NgxsReduxDevtoolsPluginModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_60__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_33__["AppComponent"],
        _common_components_header_header_component__WEBPACK_IMPORTED_MODULE_41__["HeaderComponent"],
        _common_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_38__["FooterComponent"],
        _common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_42__["LoadingComponent"],
        _common_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_43__["NotFoundComponent"],
        _common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_44__["SnackbarComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_47__["LoginComponent"],
        _common_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_34__["ChangePasswordComponent"],
        _common_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_40__["ForgotPasswordComponent"],
        _common_components_confirm_box_confirm_box_component__WEBPACK_IMPORTED_MODULE_35__["ConfirmBoxComponent"],
        _common_components_footer_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_36__["AboutUsComponent"],
        _common_components_footer_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_37__["ContactUsComponent"],
        _common_components_footer_rules_rules_component__WEBPACK_IMPORTED_MODULE_39__["RulesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_32__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
        mat_table_filter__WEBPACK_IMPORTED_MODULE_30__["MatTableFilterModule"],
        ng_pick_datetime__WEBPACK_IMPORTED_MODULE_31__["OwlDateTimeModule"],
        ng_pick_datetime__WEBPACK_IMPORTED_MODULE_31__["OwlNativeDateTimeModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
        _angular_material_components_file_input__WEBPACK_IMPORTED_MODULE_0__["NgxMatFileInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_50__["MatTooltipModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_48__["ServiceWorkerModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_51__["ɵk"], _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_52__["NgxsLoggerPluginModule"], _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_53__["NgxsReduxDevtoolsPluginModule"]] }); })();


/***/ }),

/***/ "Zy3G":
/*!************************************************************!*\
  !*** ./src/app/common/store/state/user/userstats.state.ts ***!
  \************************************************************/
/*! exports provided: userStatisticsStateModel, UserStatisticsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userStatisticsStateModel", function() { return userStatisticsStateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStatisticsState", function() { return UserStatisticsState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/components/loading/loading.component */ "4cPp");
/* harmony import */ var _actions_user_userstats_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/user/userstats.action */ "Tn1y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_service_statistics_user_statictics_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/service/statistics/user-statictics.service */ "+IU6");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");








class userStatisticsStateModel {
}
let UserStatisticsState = class UserStatisticsState {
    constructor(userstatsservice, dialog) {
        this.userstatsservice = userstatsservice;
        this.dialog = dialog;
    }
    static getUserStatsData(userstatemodel) {
        return userstatemodel.userStats;
    }
    static UserStatsLoaded(userstatemodel) {
        return userstatemodel.userStatsLoaded;
    }
    getUsers({ getState, setState }) {
        const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], {
            disableClose: true,
        });
        return this.userstatsservice.getUserStatsNGXS().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((res) => {
            const state = getState();
            setState(Object.assign(Object.assign({}, state), { userStats: res, userStatsLoaded: true }));
            dialogRef.close();
        }));
    }
};
UserStatisticsState.ɵfac = function UserStatisticsState_Factory(t) { return new (t || UserStatisticsState)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_common_service_statistics_user_statictics_service__WEBPACK_IMPORTED_MODULE_6__["UserStaticticsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
UserStatisticsState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: UserStatisticsState, factory: UserStatisticsState.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_user_userstats_action__WEBPACK_IMPORTED_MODULE_4__["GetUserStats"])
], UserStatisticsState.prototype, "getUsers", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], UserStatisticsState, "getUserStatsData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], UserStatisticsState, "UserStatsLoaded", null);
UserStatisticsState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'userstats',
        defaults: {
            userStats: [],
            userStatsLoaded: false,
            selectedUserStats: null,
        },
    })
], UserStatisticsState);



/***/ }),

/***/ "brmR":
/*!**************************************************************!*\
  !*** ./src/app/common/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _constants_roles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/roles */ "BVGi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_authentication_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/authentication_service/authentication.service */ "16jV");
/* harmony import */ var _service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/login_state/loginstate.service */ "1d9a");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function HeaderComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "monetization_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "monetization_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Place Bets ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HeaderComponent_div_6_div_2_Template, 3, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HeaderComponent_div_6_div_3_Template, 4, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.deviceXs);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.deviceXs);
} }
function HeaderComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "leaderboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "leaderboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Leader Board ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HeaderComponent_div_7_div_2_Template, 3, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HeaderComponent_div_7_div_3_Template, 4, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.deviceXs);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.deviceXs);
} }
function HeaderComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "sports_cricket");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "sports_cricket");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "My Matches ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HeaderComponent_div_8_div_2_Template, 3, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HeaderComponent_div_8_div_3_Template, 4, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.deviceXs);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.deviceXs);
} }
function HeaderComponent_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "monetization_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "monetization_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Place Bets ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HeaderComponent_div_9_div_2_Template, 3, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HeaderComponent_div_9_div_3_Template, 4, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.deviceXs);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.deviceXs);
} }
function HeaderComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "leaderboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "leaderboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Leader Board ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HeaderComponent_div_10_div_2_Template, 3, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HeaderComponent_div_10_div_3_Template, 4, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.deviceXs);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.deviceXs);
} }
function HeaderComponent_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "sports_cricket");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_11_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "sports_cricket");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "My Matches ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HeaderComponent_div_11_div_2_Template, 3, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HeaderComponent_div_11_div_3_Template, 4, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.deviceXs);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.deviceXs);
} }
function HeaderComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Manage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "button", 34);
} }
function HeaderComponent_a_33_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_a_33_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_34_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_a_34_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    // isAuthenticated = false;
    constructor(authservice1, loginStateService2, router) {
        this.authservice1 = authservice1;
        this.loginStateService2 = loginStateService2;
        this.router = router;
    }
    ngOnInit() { }
    logout() {
        this.loginStateService2.destroySession(this.loginStateService2.role);
        this.router.navigate(['']);
    }
    isRoleAdmin() {
        const loginState = this.loginStateService2.getLoginState();
        return loginState != null && loginState.role === _constants_roles__WEBPACK_IMPORTED_MODULE_0__["RA"];
    }
    isRoleUser() {
        const loginState = this.loginStateService2.getLoginState();
        return loginState != null && loginState.role === _constants_roles__WEBPACK_IMPORTED_MODULE_0__["RU"];
    }
    goToHome() {
        const loginState = this.loginStateService2.getLoginState();
        if (loginState != null && loginState.role === _constants_roles__WEBPACK_IMPORTED_MODULE_0__["RU"]) {
            this.router.navigate(['/User/home']);
        }
        else {
            this.router.navigate(['/Admin/home']);
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_authentication_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_3__["LoginstateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { deviceXs: "deviceXs" }, decls: 35, vars: 12, consts: [[1, "mat-elevation-z8"], [1, "home"], ["title", "Home", 1, "ahome", 3, "click"], ["class", "bets", 4, "ngIf"], ["class", "leader-board", 4, "ngIf"], ["class", "my-matches", 4, "ngIf"], [1, "example-spacer"], ["class", "profile", 4, "ngIf"], [1, "row"], [1, "col"], ["ngbDropdown", "", 1, "d-inline-block", "dropdownbtn"], ["class", "btn btn-primary", "id", "dropdownBasic1", "ngbDropdownToggle", "", 4, "ngIf"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], ["ngbDropdownItem", "", "routerLink", "Admin/manage-matches"], ["ngbDropdownItem", "", "routerLink", "Admin/manage-old-matches"], ["ngbDropdownItem", "", "routerLink", "Admin/manage-user"], ["ngbDropdownItem", "", "routerLink", "Admin/manage-team"], ["ngbDropdownItem", "", "routerLink", "Admin/manage-recharge"], ["ngbDropdownItem", "", "routerLink", "Admin/manage-venue"], ["mat-raised-button", "", "class", "logout", 3, "click", 4, "ngIf"], [1, "bets"], ["routerLink", "User/match-list", "title", "Match List", 1, "ahome"], [4, "ngIf"], [1, "leader-board"], ["routerLink", "User/leader-board", "title", "Leaderboard", 1, "ahome"], [1, "my-matches"], ["routerLink", "User/my-matches", "title", "My Matches", 1, "ahome"], ["routerLink", "Admin/match-list", "title", "Match List", 1, "ahome"], ["routerLink", "Admin/leader-board", "title", "Leaderboard", 1, "ahome"], ["routerLink", "Admin/my-matches", "title", "My Matches", 1, "ahome"], [1, "profile"], ["routerLink", "User/view-your-profile", "title", "View Your Profile", 1, "ahome"], [1, "fas", "fa-user-circle"], ["routerLink", "Admin/view-your-profile", "matTooltip", "View Your Profile", 1, "ahome"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-primary"], ["mat-raised-button", "", 1, "logout", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_3_listener() { return ctx.goToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HeaderComponent_div_6_Template, 4, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HeaderComponent_div_7_Template, 4, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HeaderComponent_div_8_Template, 4, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HeaderComponent_div_9_Template, 4, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HeaderComponent_div_10_Template, 4, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HeaderComponent_div_11_Template, 4, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HeaderComponent_div_13_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, HeaderComponent_div_14_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, HeaderComponent_button_18_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, HeaderComponent_button_19_Template, 1, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Matches");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Update Match Result");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Recharge");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Venue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, HeaderComponent_a_33_Template, 2, 0, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, HeaderComponent_a_34_Template, 3, 0, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isRoleUser());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isRoleUser());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isRoleUser());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isRoleUser());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isRoleUser());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isRoleUser());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isRoleUser());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isRoleUser());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authservice1.isLoggedIn() && ctx.isRoleAdmin() && !ctx.deviceXs);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authservice1.isLoggedIn() && ctx.isRoleAdmin() && ctx.deviceXs);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authservice1.isLoggedIn() && !ctx.deviceXs);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authservice1.isLoggedIn() && ctx.deviceXs);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdownItem"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdownToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatAnchor"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=BioRhyme:wght@200;300&display=swap');\r\n.example-spacer[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n}\r\n.space[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n}\r\n.ahome[_ngcontent-%COMP%] {\r\n    color: aliceblue;\r\n    text-decoration: none;\r\n    font-family: 'BioRhyme', serif;\r\n}\r\n.dropdownbtn[_ngcontent-%COMP%] {\r\n    margin-right: 20px;\r\n}\r\na[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n}\r\n.home[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n    cursor: pointer;\r\n}\r\nmat-icon[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n}\r\n.bets[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n    text-decoration: none;\r\n}\r\n.leader-board[_ngcontent-%COMP%] {\r\n    margin-left: 20px;\r\n    text-decoration: none;\r\n}\r\n.my-matches[_ngcontent-%COMP%] {\r\n    margin-left: 20px;\r\n    text-decoration: none;\r\n}\r\n.profile[_ngcontent-%COMP%] {\r\n    margin-right: 20px;\r\n    margin-left: 10px;\r\n}\r\nmat-toolbar[_ngcontent-%COMP%] {\r\n    background: linear-gradient(45deg, #1318a5, #cc1ab3);\r\n}\r\n.logout[_ngcontent-%COMP%] {\r\n    background-color: #ccff00;\r\n    font-family: 'BioRhyme', serif;\r\n    font-weight: bold;\r\n}\r\n@media only screen and (max-width: 410px) {\r\n    \r\n    \r\n    .home[_ngcontent-%COMP%] {\r\n        margin-left: 0;\r\n        margin-right: 0;\r\n    }\r\n\r\n    .bets[_ngcontent-%COMP%]{\r\n        margin-left: 10px;\r\n    }\r\n\r\n    .leader-board[_ngcontent-%COMP%]{\r\n        margin-left: 10px;\r\n    }\r\n\r\n    .my-matches[_ngcontent-%COMP%]{\r\n        margin-left: 10px;\r\n    }\r\n}\r\n@media only screen and (max-width: 350px) {\r\n\r\n    .profile[_ngcontent-%COMP%] {\r\n        margin-left: 10px;\r\n        margin-right: 10px;\r\n    }\r\n\r\n    .logout[_ngcontent-%COMP%]{\r\n        margin-left: 0;\r\n        margin-right: 0;\r\n    }\r\n\r\n    .dropdownbtn[_ngcontent-%COMP%]{\r\n        margin-right: 5px;\r\n    }\r\n\r\n}\r\n\r\n@media only screen and (min-device-width: 701px) and (max-device-width: 915px) {\r\n    \r\n\r\n    .ahome[_ngcontent-%COMP%]{\r\n        font-size: 0.7rem;\r\n        \r\n    }\r\n    .fa-comments[_ngcontent-%COMP%]{\r\n        font-size: large;\r\n    }\r\n\r\n    .fa-user-circle[_ngcontent-%COMP%]{\r\n        font-size: large;\r\n    }\r\n    \r\n  }\r\n@media only screen and (min-device-width: 601px) and (max-device-width: 701px) {\r\n    \r\n\r\n    .ahome[_ngcontent-%COMP%]{\r\n        font-size: 0.5rem;\r\n        \r\n    }\r\n    .fa-comments[_ngcontent-%COMP%]{\r\n        font-size: large;\r\n    }\r\n\r\n    .fa-user-circle[_ngcontent-%COMP%]{\r\n        font-size: large;\r\n    }\r\n\r\n    .dropdownbtn[_ngcontent-%COMP%]{\r\n        margin-right: 10px;\r\n    }\r\n    .profile[_ngcontent-%COMP%] {\r\n        margin-left: 10px;\r\n        margin-right: 10px;\r\n    }\r\n\r\n    .logout[_ngcontent-%COMP%]{\r\n        margin-left: 0;\r\n        margin-right: 0;\r\n    }\r\n\r\n    .home[_ngcontent-%COMP%] {\r\n        margin-left: 0;\r\n        margin-right: 0;\r\n    }\r\n\r\n    .bets[_ngcontent-%COMP%]{\r\n        margin-left: 10px;\r\n    }\r\n\r\n    .leader-board[_ngcontent-%COMP%]{\r\n        margin-left: 10px;\r\n    }\r\n\r\n    .my-matches[_ngcontent-%COMP%]{\r\n        margin-left: 10px;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBGQUEwRjtBQUMxRjtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQiw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksb0RBQW9EO0FBQ3hEO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsOEJBQThCO0lBQzlCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0k7aUVBQzZEOztJQUU3RDtRQUNJLGNBQWM7UUFDZCxlQUFlO0lBQ25COztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7QUFFQTs7SUFFSTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7QUFFSjtBQUVDLDRDQUE0QztBQUM1QztJQUNHLDhCQUE4Qjs7SUFFOUI7UUFDSSxpQkFBaUI7O0lBRXJCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0VBRUY7QUFFQTtJQUNFLDhCQUE4Qjs7SUFFOUI7UUFDSSxpQkFBaUI7O0lBRXJCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxlQUFlO0lBQ25COztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCO0VBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CaW9SaHltZTp3Z2h0QDIwMDszMDAmZGlzcGxheT1zd2FwJyk7XHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLnNwYWNlIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmFob21lIHtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogJ0Jpb1JoeW1lJywgc2VyaWY7XHJcbn1cclxuXHJcbi5kcm9wZG93bmJ0biB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uaG9tZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxubWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG4uYmV0cyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmxlYWRlci1ib2FyZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLm15LW1hdGNoZXMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5wcm9maWxlIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5tYXQtdG9vbGJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMxMzE4YTUsICNjYzFhYjMpO1xyXG59XHJcblxyXG4ubG9nb3V0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2ZmMDA7XHJcbiAgICBmb250LWZhbWlseTogJ0Jpb1JoeW1lJywgc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTBweCkge1xyXG4gICAgLyogU1RZTEVTIEhFUkUgZm9yIEJST1dTRVIgV0lORE9XUyB3aXRoIGEgbWF4LXdpZHRoIG9mIDQ4MHB4LiBcclxuICAgICAgIFRoaXMgd2lsbCB3b3JrIG9uIGRlc2t0b3BzIHdoZW4gdGhlIHdpbmRvdyBpcyBuYXJyb3dlZC4gICovXHJcbiAgICBcclxuICAgIC5ob21lIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmJldHN7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxlYWRlci1ib2FyZHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAubXktbWF0Y2hlc3tcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xyXG5cclxuICAgIC5wcm9maWxlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ291dHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmRyb3Bkb3duYnRue1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIC8qIGRpZmZlcmVudCB0ZWNobmlxdWVzIGZvciBpUGFkIHNjcmVlbmluZyAqL1xyXG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNzAxcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogOTE1cHgpIHtcclxuICAgIC8qIEZvciBwb3J0cmFpdCBsYXlvdXRzIG9ubHkgKi9cclxuXHJcbiAgICAuYWhvbWV7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuZmEtY29tbWVudHN7XHJcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIH1cclxuXHJcbiAgICAuZmEtdXNlci1jaXJjbGV7XHJcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNjAxcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNzAxcHgpIHtcclxuICAgIC8qIEZvciBwb3J0cmFpdCBsYXlvdXRzIG9ubHkgKi9cclxuXHJcbiAgICAuYWhvbWV7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuZmEtY29tbWVudHN7XHJcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIH1cclxuXHJcbiAgICAuZmEtdXNlci1jaXJjbGV7XHJcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIH1cclxuXHJcbiAgICAuZHJvcGRvd25idG57XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnByb2ZpbGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAubG9nb3V0e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuaG9tZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5iZXRze1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5sZWFkZXItYm9hcmR7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm15LW1hdGNoZXN7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "fc4o":
/*!*********************************************************!*\
  !*** ./src/app/common/constants/snackbar-properties.ts ***!
  \*********************************************************/
/*! exports provided: getSnackbarProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSnackbarProperties", function() { return getSnackbarProperties; });
function getSnackbarProperties(data, panelClass) {
    return {
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        data,
        duration: 10000,
        panelClass
    };
}


/***/ }),

/***/ "gD1G":
/*!*******************************************************************!*\
  !*** ./src/app/common/service/matches_service/matches.service.ts ***!
  \*******************************************************************/
/*! exports provided: MatchesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesService", function() { return MatchesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _constants_http_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/http-urls */ "74hc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




// let matchBaseURL = 'http://localhost:8081/matches';
// let usersBaseURL = 'http://localhost:8081';
class MatchesService {
    constructor(http) {
        this.http = http;
    }
    getAllMatches() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["matchBaseURL"], { observe: 'response' }).toPromise();
        });
    }
    getAllUpcomingMatches() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["matchBaseURL"] + '/upcoming', { observe: 'response' }).toPromise();
        });
    }
    getAllOldMatches() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["matchBaseURL"] + '/old-matches', { observe: 'response' }).toPromise();
        });
    }
    addMatches(matchModel) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["matchBaseURL"], matchModel, { observe: 'response' }).toPromise();
        });
    }
    updateMatches(matchId, model) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.put(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["matchBaseURL"] + '/' + matchId, model, { observe: 'response' }).toPromise();
        });
    }
    updateMatchResult(matchId, resultStatus, winnerTeamId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.put(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["matchBaseURL"] + '/update-match/' + matchId + '/' + resultStatus + '/' + winnerTeamId, { observe: 'response' }).toPromise();
        });
    }
    deleteMatch(matchId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.delete(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["matchBaseURL"] + '/' + matchId).toPromise();
        });
    }
    updateMatchWinner(matchId, resultStatus, winnerTeamId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.put(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["matchBaseURL"] + '/update-match/' + matchId + '/' + resultStatus + '/' + winnerTeamId, { observe: 'response' }).toPromise();
        });
    }
    viewMatchById(matchId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["matchBaseURL"] + '/' + matchId, { observe: 'response' }).toPromise();
        });
    }
    upcomingMatches(userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["usersBaseURL"] + '/' + userId + '/upcoming', { observe: 'response' }).toPromise();
        });
    }
    liveMatch(userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["usersBaseURL"] + '/' + userId + '/live', { observe: 'response' }).toPromise();
        });
    }
    allMatchResult(userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["usersBaseURL"] + '/' + userId + '/result', { observe: 'response' }).toPromise();
        });
    }
    // NGXS SERVICES
    getAllMatchesNGXS() {
        return this.http.get(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["matchBaseURL"]);
    }
    getAllUpcomingMatchesNGXS() {
        return this.http.get(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["matchBaseURL"] + '/upcoming');
    }
    getAllOldMatchesNGXS() {
        return this.http.get(_constants_http_urls__WEBPACK_IMPORTED_MODULE_1__["matchBaseURL"] + '/old-matches');
    }
}
MatchesService.ɵfac = function MatchesService_Factory(t) { return new (t || MatchesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
MatchesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MatchesService, factory: MatchesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "htab":
/*!*****************************************************************!*\
  !*** ./src/app/common/store/state/user/userfuturebets.state.ts ***!
  \*****************************************************************/
/*! exports provided: userFBStateModel, UserFBState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userFBStateModel", function() { return userFBStateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFBState", function() { return UserFBState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/components/loading/loading.component */ "4cPp");
/* harmony import */ var _actions_user_userfuturebets_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/user/userfuturebets.action */ "O3ga");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_service_statistics_user_statictics_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/service/statistics/user-statictics.service */ "+IU6");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");








class userFBStateModel {
}
let UserFBState = class UserFBState {
    constructor(userstatsservice, dialog) {
        this.userstatsservice = userstatsservice;
        this.dialog = dialog;
    }
    static getUserFB(state) {
        return state.userFutureBets;
    }
    static UserLoaded(state) {
        return state.userFutureBetsLoaded;
    }
    getUsers({ getState, setState }) {
        const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], {
            disableClose: true,
        });
        return this.userstatsservice.getUserFutureBetsNGXS().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((res) => {
            const state = getState();
            setState(Object.assign(Object.assign({}, state), { userFutureBets: res, userFutureBetsLoaded: true }));
            dialogRef.close();
        }));
    }
};
UserFBState.ɵfac = function UserFBState_Factory(t) { return new (t || UserFBState)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_common_service_statistics_user_statictics_service__WEBPACK_IMPORTED_MODULE_6__["UserStaticticsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
UserFBState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: UserFBState, factory: UserFBState.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_user_userfuturebets_action__WEBPACK_IMPORTED_MODULE_4__["GetUserFB"])
], UserFBState.prototype, "getUsers", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], UserFBState, "getUserFB", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], UserFBState, "UserLoaded", null);
UserFBState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'userFB',
        defaults: {
            userFutureBets: [],
            userFutureBetsLoaded: false,
            selectedUserFB: null,
        },
    })
], UserFBState);



/***/ }),

/***/ "j5Nc":
/*!********************************************************************!*\
  !*** ./src/app/common/store/actions/match/upcomingmatch.action.ts ***!
  \********************************************************************/
/*! exports provided: GetUpcomingMatch, SetUpcomingSelectedMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUpcomingMatch", function() { return GetUpcomingMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUpcomingSelectedMatch", function() { return SetUpcomingSelectedMatch; });
class GetUpcomingMatch {
}
GetUpcomingMatch.type = '[UpcomingMatch] Get';
class SetUpcomingSelectedMatch {
    constructor(matchId) {
        this.matchId = matchId;
    }
}
SetUpcomingSelectedMatch.type = '[UpcomingMatch] Set';


/***/ }),

/***/ "j7cY":
/*!******************************************************************!*\
  !*** ./src/app/common/components/snackbar/snackbar.component.ts ***!
  \******************************************************************/
/*! exports provided: SnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarComponent", function() { return SnackbarComponent; });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");





class SnackbarComponent {
    constructor(snackBarRef, data) {
        this.snackBarRef = snackBarRef;
        this.data = data;
    }
    ngOnInit() {
    }
}
SnackbarComponent.ɵfac = function SnackbarComponent_Factory(t) { return new (t || SnackbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBarRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MAT_SNACK_BAR_DATA"])); };
SnackbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SnackbarComponent, selectors: [["app-snackbar"]], decls: 7, vars: 1, consts: [[1, "flex"], [1, "data"], ["mat-icon-button", "", 3, "click"]], template: function SnackbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SnackbarComponent_Template_button_click_4_listener() { return ctx.snackBarRef.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.data, " ");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".red {\r\n    background-color: #ff2020;\r\n    color: whitesmoke;\r\n}\r\n\r\n.green {\r\n    background-color: #0c8048;\r\n    color: whitesmoke;\r\n}\r\n\r\n.blue {\r\n    background-color: #2263b9;\r\n}\r\n\r\n.yellow {\r\n    background-color: yellow;\r\n    color: black;\r\n}\r\n\r\n.data {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    /* color: whitesmoke; */\r\n    font-weight: bolder;\r\n}\r\n\r\n/* .data1 {\r\n    background-color: #ff2020;\r\n}\r\n\r\n.data2 {\r\n    background-color: #0c8048;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNuYWNrYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBR0E7Ozs7OztHQU1HIiwiZmlsZSI6InNuYWNrYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjIwMjA7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLmdyZWVuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYzgwNDg7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLmJsdWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyNjNiOTtcclxufVxyXG5cclxuLnllbGxvdyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5kYXRhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8qIGNvbG9yOiB3aGl0ZXNtb2tlOyAqL1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuXHJcbi8qIC5kYXRhMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYyMDIwO1xyXG59XHJcblxyXG4uZGF0YTIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBjODA0ODtcclxufSAqL1xyXG4iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ "jVCE":
/*!*********************************************************!*\
  !*** ./src/app/common/model/change-password/sendotp.ts ***!
  \*********************************************************/
/*! exports provided: SendOtpForForgotPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendOtpForForgotPassword", function() { return SendOtpForForgotPassword; });
class SendOtpForForgotPassword {
}


/***/ }),

/***/ "jsD4":
/*!***************************************************!*\
  !*** ./src/app/common/constants/error-message.ts ***!
  \***************************************************/
/*! exports provided: NO_RESP, getErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NO_RESP", function() { return NO_RESP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorMessage", function() { return getErrorMessage; });
const NO_RESP = `Action is completed but Server didn't sent any response`;
function getErrorMessage(ex, component) {
    let msg = '';
    const e = ex.error;
    if (e) {
        if (+ex.status === 500 || +ex.status === 0) {
            msg = 'Sorry the server is down! please contact the admin';
        }
        else {
            msg = e.message;
        }
    }
    return msg;
}


/***/ }),

/***/ "kfxs":
/*!**************************************************************!*\
  !*** ./src/app/common/store/actions/match/matches.action.ts ***!
  \**************************************************************/
/*! exports provided: AddMatch, UpdateMatch, GetMatch, SetSelectedMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMatch", function() { return AddMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMatch", function() { return UpdateMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMatch", function() { return GetMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSelectedMatch", function() { return SetSelectedMatch; });
// All Matches-----------------------------------------------
class AddMatch {
    constructor(payload) {
        this.payload = payload;
    }
}
AddMatch.type = '[MatchModel] Add';
class UpdateMatch {
    constructor(payload, id) {
        this.payload = payload;
        this.id = id;
    }
}
UpdateMatch.type = '[MatchModel] Update';
class GetMatch {
}
GetMatch.type = '[MatchModel] Get';
class SetSelectedMatch {
    constructor(matchId) {
        this.matchId = matchId;
    }
}
SetSelectedMatch.type = '[MatchModel] Set';


/***/ }),

/***/ "ljpH":
/*!***************************************************************!*\
  !*** ./src/app/common/store/actions/match/oldmatch.action.ts ***!
  \***************************************************************/
/*! exports provided: GetOldMatch, SetOldSelectedMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOldMatch", function() { return GetOldMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetOldSelectedMatch", function() { return SetOldSelectedMatch; });
class GetOldMatch {
}
GetOldMatch.type = '[OldMatchesModel] Get';
class SetOldSelectedMatch {
    constructor(matchId) {
        this.matchId = matchId;
    }
}
SetOldSelectedMatch.type = '[OldMatchesModel] Set';


/***/ }),

/***/ "mIit":
/*!********************************************************************!*\
  !*** ./src/app/common/components/not-found/not-found.component.ts ***!
  \********************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _constants_roles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/roles */ "BVGi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/login_state/loginstate.service */ "1d9a");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class NotFoundComponent {
    constructor(loginStateService, router) {
        this.loginStateService = loginStateService;
        this.router = router;
    }
    ngOnInit() {
    }
    goToHome() {
        const loginState = this.loginStateService.getLoginState();
        if (loginState != null && loginState.role === _constants_roles__WEBPACK_IMPORTED_MODULE_0__["RU"]) {
            this.router.navigate(['/User/home']);
        }
        else {
            this.router.navigate(['/Admin/home']);
        }
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_2__["LoginstateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 11, vars: 0, consts: [[1, "container"], [1, "page-wrap", "d-flex", "flex-row", "align-items-center"], [1, "row", "justify-content-center"], [1, "col-md-12", "text-center"], [1, "display-1", "d-block"], [1, "mb-4", "lead"], ["routerLink", "", 1, "btn", "btn-link", 3, "click"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Oops! We can't seem to find the page you are looking for. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotFoundComponent_Template_a_click_9_listener() { return ctx.goToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Back to Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".notfound[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 70%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #1f5a40;\r\n  color: #161616;\r\n}\r\n\r\n.notfound-inner[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-size: 100px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  color: #aeaccc;\r\n  background-color: #161616;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  height: auto;\r\n  min-height: 90%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content:center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7OztFQUlFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6Im5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGZvdW5kIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDcwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmNWE0MDtcclxuICBjb2xvcjogIzE2MTYxNjtcclxufVxyXG5cclxuLm5vdGZvdW5kLWlubmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDEwMHB4O1xyXG59XHJcblxyXG5oMSxcclxuaDIsXHJcbnAsXHJcbmEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgY29sb3I6ICNhZWFjY2M7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTYxNjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1pbi1oZWlnaHQ6IDkwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "nAVN":
/*!***********************************************************************!*\
  !*** ./src/app/user/user-registration/user-registration.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationComponent", function() { return UserRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/components/loading/loading.component */ "4cPp");
/* harmony import */ var src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/components/snackbar/snackbar.component */ "j7cY");
/* harmony import */ var src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/constants/error-message */ "jsD4");
/* harmony import */ var src_app_common_constants_links__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/constants/links */ "IV7L");
/* harmony import */ var src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/constants/snackbar-properties */ "fc4o");
/* harmony import */ var src_app_common_model_user_user_with_password_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/model/user/user-with-password-model */ "8ng7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_common_service_user_service_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/common/service/user_service/user.service */ "2/mB");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_components_file_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular-material-components/file-input */ "OC/Z");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ "FKr1");






















function UserRegistrationComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "first name is reqiured ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "first name must have atleast 4 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "first name must have less than 100 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "first name is invalid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "last name is reqiured ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "last name must have atleast 3 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "last name must have less than 100 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "last name is invalid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_mat_error_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "email is reqiured ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_mat_error_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "email must have less than 30 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_mat_error_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "email is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_mat_error_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "only BBD email is allowed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_mat_error_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "phone no. is reqiured");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_mat_error_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " phone no. is invalid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_mat_error_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "username is reqiured ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_mat_error_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "username must have atleast 4 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_mat_error_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "username must have less than 50 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_mat_error_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "no special characters are allowed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_mat_error_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "password is reqiured ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_mat_error_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "password must have atleast 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_mat_error_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "password must have less than 40 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_mat_error_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "password must contain atleast 1 letter, digits, special character ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_mat_error_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "confirm password is reqiured ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_mat_error_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "confirm password must have atleast 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_mat_error_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "confirm password must have less than 40 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_mat_error_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "confirm password does not match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
class UserRegistrationComponent {
    constructor(fb, 
    // private loginStateService: LoginstateService,
    router, userService, snackbar, dialog) {
        this.fb = fb;
        this.router = router;
        this.userService = userService;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.image = src_app_common_constants_links__WEBPACK_IMPORTED_MODULE_5__["register"];
        this.hide = true;
        this.signupForm = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9 ]+')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(40), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@%!])[0-9a-zA-Z@%!]{8,}$/)]],
            confPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(40)]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[1-9][0-9]{9}')]],
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]+')]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]+')]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[A-Za-z0-9._%+-]+@bbd.co.za$/)]],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            profilePicture: ['']
        });
    }
    ngOnInit() {
    }
    get form() {
        return this.signupForm.controls;
    }
    signup() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.signupForm.valid) {
                let userWithPasswordModel = new src_app_common_model_user_user_with_password_model__WEBPACK_IMPORTED_MODULE_7__["UserWithPasswordModel"]();
                // userWithPasswordModel.userId = 0;
                // userWithPasswordModel.username = this.form.username.value;
                // userWithPasswordModel.password = this.form.password.value;
                // userWithPasswordModel.firstName = this.form.firstname.value;
                // userWithPasswordModel.lastName = this.form.lastname.value;
                // userWithPasswordModel.email = this.form.email.value;
                // userWithPasswordModel.mobileNumber = this.form.phone.value;
                // userWithPasswordModel.genderId = this.form.gender.value;
                // userWithPasswordModel.status = false;
                // userWithPasswordModel.roleId = 2;
                // userWithPasswordModel.availablePoints = 500;
                var formData = new FormData();
                formData.append("username", this.form.username.value);
                formData.append("password", this.form.password.value);
                formData.append("firstName", this.form.firstname.value);
                formData.append("lastName", this.form.lastname.value);
                formData.append("email", this.form.email.value);
                formData.append("mobileNumber", this.form.phone.value);
                formData.append("genderId", this.form.gender.value);
                formData.append("roleId", 2);
                formData.append("availablePoints", 500);
                formData.append("profilePicture", this.form.profilePicture.value);
                let panelClass = 'green';
                let snackbarMsg = '';
                let snackbarRef = null;
                this.snackbar.dismiss();
                const dialogRef = this.dialog.open(src_app_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"], { disableClose: true });
                let resp = null;
                try {
                    resp = yield this.userService.signup(formData);
                    userWithPasswordModel = resp.body;
                    if (userWithPasswordModel != null && userWithPasswordModel.userId > 0) {
                        snackbarMsg = 'Your data has been Submitted, Please wait for the Admin to Approve!';
                        this.router.navigate(['/login']);
                    }
                    else {
                        snackbarMsg = src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_4__["NO_RESP"];
                        panelClass = 'red';
                    }
                }
                catch (ex) {
                    snackbarMsg = Object(src_app_common_constants_error_message__WEBPACK_IMPORTED_MODULE_4__["getErrorMessage"])(ex);
                    panelClass = 'red';
                }
                finally {
                    dialogRef.close();
                }
                if (snackbarMsg) {
                    snackbarRef = this.snackbar.openFromComponent(src_app_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__["SnackbarComponent"], Object(src_app_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_6__["getSnackbarProperties"])(snackbarMsg, panelClass));
                }
            }
        });
    }
}
UserRegistrationComponent.ɵfac = function UserRegistrationComponent_Factory(t) { return new (t || UserRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_common_service_user_service_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"])); };
UserRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: UserRegistrationComponent, selectors: [["app-user-registration"]], decls: 103, vars: 37, consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "split-screen"], [1, "left"], [1, "copy"], [1, "right"], [3, "formGroup", "ngSubmit"], ["fxFlexFill", "auto", "fxLayoutGap", "20px", 1, "inner-container", "container"], [1, "field-container"], ["appearance", "fill", "color", "accent"], ["matInput", "", "formControlName", "firstname", "autocomplete", "off"], [4, "ngIf"], ["matInput", "", "formControlName", "lastname", "autocomplete", "off"], ["matInput", "", "formControlName", "email", "autocomplete", "off"], ["matInput", "", "formControlName", "phone", "autocomplete", "off"], ["formControlName", "profilePicture"], ["aria-hidden", "true", 1, "fa", "fa-folder-open-o"], ["matInput", "", "formControlName", "username", "autocomplete", "off"], ["matInput", "", "formControlName", "password", 3, "type"], [1, "fa", "fa-fw", "fa-eye", "field-icon", 3, "click"], ["matInput", "", "formControlName", "confPassword", 3, "type", "pattern"], ["formControlName", "gender"], ["value", "1", "type", "number"], ["value", "2", "type", "number"], ["type", "submit", "mat-raised-button", "", "matRipple", "", 1, "btnlog", "mt-2", "mb-2"], [1, "loginnow", 3, "routerLink"]], template: function UserRegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Sign up to start winning Big");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Place Bets on your favourite team");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function UserRegistrationComponent_Template_form_ngSubmit_16_listener() { return ctx.signup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, UserRegistrationComponent_mat_error_26_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, UserRegistrationComponent_mat_error_27_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, UserRegistrationComponent_mat_error_28_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, UserRegistrationComponent_mat_error_29_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](34, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, UserRegistrationComponent_mat_error_35_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, UserRegistrationComponent_mat_error_36_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](37, UserRegistrationComponent_mat_error_37_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, UserRegistrationComponent_mat_error_38_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](43, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](44, UserRegistrationComponent_mat_error_44_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](45, UserRegistrationComponent_mat_error_45_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](46, UserRegistrationComponent_mat_error_46_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](47, UserRegistrationComponent_mat_error_47_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, "Phone no.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](52, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](53, UserRegistrationComponent_mat_error_53_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](54, UserRegistrationComponent_mat_error_54_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](58, "Profile Pic");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "ngx-mat-file-input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](60, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](64, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](65, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](66, UserRegistrationComponent_mat_error_66_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](67, UserRegistrationComponent_mat_error_67_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](68, UserRegistrationComponent_mat_error_68_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](69, UserRegistrationComponent_mat_error_69_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](73, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](74, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserRegistrationComponent_Template_span_click_75_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](76, UserRegistrationComponent_mat_error_76_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](77, UserRegistrationComponent_mat_error_77_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](78, UserRegistrationComponent_mat_error_78_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](79, UserRegistrationComponent_mat_error_79_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](83, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](84, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserRegistrationComponent_Template_span_click_85_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](86, UserRegistrationComponent_mat_error_86_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](87, UserRegistrationComponent_mat_error_87_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](88, UserRegistrationComponent_mat_error_88_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](89, UserRegistrationComponent_mat_error_89_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](90, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "mat-radio-group", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "mat-radio-button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](93, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](94, "mat-radio-button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](95, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](97, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](98, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](100, " Already have an account! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](101, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](102, "Login now");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background-image", "url(" + ctx.image + ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.firstname.errors == null ? null : ctx.form.firstname.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.firstname.errors == null ? null : ctx.form.firstname.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.firstname.errors == null ? null : ctx.form.firstname.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.firstname.errors == null ? null : ctx.form.firstname.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.lastname.errors == null ? null : ctx.form.lastname.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.lastname.errors == null ? null : ctx.form.lastname.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.lastname.errors == null ? null : ctx.form.lastname.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.lastname.errors == null ? null : ctx.form.lastname.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.email.errors == null ? null : ctx.form.email.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.email.errors == null ? null : ctx.form.email.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.email.errors == null ? null : ctx.form.email.errors.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.email.errors == null ? null : ctx.form.email.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.phone.errors == null ? null : ctx.form.phone.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.form.phone.errors == null ? null : ctx.form.phone.errors.minlength) || (ctx.form.phone.errors == null ? null : ctx.form.phone.errors.maxlength) || (ctx.form.phone.errors == null ? null : ctx.form.phone.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.username.errors == null ? null : ctx.form.username.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.username.errors == null ? null : ctx.form.username.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.username.errors == null ? null : ctx.form.username.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.username.errors == null ? null : ctx.form.username.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.password.errors == null ? null : ctx.form.password.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.password.errors == null ? null : ctx.form.password.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.password.errors == null ? null : ctx.form.password.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.password.errors == null ? null : ctx.form.password.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("pattern", ctx.form.password.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.confPassword.errors == null ? null : ctx.form.confPassword.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.confPassword.errors == null ? null : ctx.form.confPassword.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.confPassword.errors == null ? null : ctx.form.confPassword.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.confPassword.errors == null ? null : ctx.form.confPassword.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", "/login");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_material_components_file_input__WEBPACK_IMPORTED_MODULE_17__["NgxMatFileInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatRipple"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatError"]], styles: ["*[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    font-family: sans-serif;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: sans-serif;\r\n    font-weight: 500;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n    text-align: center;\r\n    margin: auto;\r\n    background: blur;\r\n}\r\n\r\n\r\n\r\n.btnlog[_ngcontent-%COMP%] {\r\n    border: none;\r\n    outline: none;\r\n    height: 50px;\r\n    width: 90%;\r\n    background-color: black;\r\n    color: white;\r\n    border-radius: 4px;\r\n    font-weight: bold;\r\n}\r\n\r\n.btnlog[_ngcontent-%COMP%]:hover {\r\n    background: white;\r\n    border: 1px solid;\r\n    color: black;\r\n}\r\n\r\n[_ngcontent-%COMP%]:root {\r\n    font-size: 100%;\r\n    font-size: 16px;\r\n    line-height: 1.5;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: blue;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.small[_ngcontent-%COMP%] {\r\n    font-size: 80%;\r\n    text-align: center;\r\n}\r\n\r\n.split-screen[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.left[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n}\r\n\r\n.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.left[_ngcontent-%COMP%] {\r\n    background-size: cover;\r\n}\r\n\r\n.right[_ngcontent-%COMP%] {\r\n    background-color: #F0FFFF;\r\n}\r\n\r\n.left[_ngcontent-%COMP%]   .copy[_ngcontent-%COMP%] {\r\n    color: white;\r\n    text-align: center;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-font-smoothing: grayscale;\r\n}\r\n\r\n.left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-weight: 400;\r\n}\r\n\r\n.right[_ngcontent-%COMP%]   .copy[_ngcontent-%COMP%] {\r\n    color: black;\r\n    text-align: center;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.right[_ngcontent-%COMP%]   .copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 1.5em 0;\r\n    font-size: 0.875rem;\r\n}\r\n\r\nmat-label[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-bottom: 0.5rem;\r\n    font-size: 0.75rem;\r\n}\r\n\r\n@media screen and (min-width: 700px) {\r\n    .split-screen[_ngcontent-%COMP%] {\r\n        flex-direction: row;\r\n        height: auto;\r\n        min-height: 100vh;\r\n    }\r\n    .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        width: 50%;\r\n        height: auto;\r\n        min-height: 100vh;\r\n    }\r\n    .inner-container[_ngcontent-%COMP%] {\r\n        min-width: 10px;\r\n        max-width: 500px;\r\n        width: 100%;\r\n        justify-content: space-around;\r\n        min-height: 100vh;\r\n    }\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    \r\n    display: block;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.inner-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: stretch;\r\n    justify-content: space-around;\r\n    flex-wrap: wrap;\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.mat-button-container[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n.field-icon[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-left: -25px;\r\n    margin-top: -25px;\r\n    position: relative;\r\n    z-index: 2;\r\n}\r\n\r\nmat-radio-button[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n}\r\n\r\n.loginnow[_ngcontent-%COMP%]:hover{\r\n  background-color: rgb(92, 92, 167);\r\n  color: #F0FFFF;\r\n  border-radius: 10px;\r\n  padding: 6px;\r\n  text-decoration: none;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 1.4rem;\r\n        font-weight: 400;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBR0E7Ozs7OztHQU1HOztBQUVIO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCO0lBQ0E7O1FBRUksYUFBYTtRQUNiLFVBQVU7UUFDVixZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCw2QkFBNkI7UUFDN0IsaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsY0FBYztJQUNkLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTs7SUFFSTtRQUNJLGlCQUFpQjtRQUNqQixnQkFBZ0I7SUFDcEI7O0FBRUoiLCJmaWxlIjoidXNlci1yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiBibHVyO1xyXG59XHJcblxyXG5cclxuLyogbWF0LWZvcm0tZmllbGQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG59ICovXHJcblxyXG4uYnRubG9nIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmJ0bmxvZzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc3BsaXQtc2NyZWVuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4ubGVmdCxcclxuLnJpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sZWZ0IHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGRkZGO1xyXG59XHJcblxyXG4ubGVmdCAuY29weSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxufVxyXG5cclxuLmxlZnQgcCB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4ucmlnaHQgLmNvcHkge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5yaWdodCAuY29weSBwIHtcclxuICAgIG1hcmdpbjogMS41ZW0gMDtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbn1cclxuXHJcbm1hdC1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAgIC5zcGxpdC1zY3JlZW4ge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgfVxyXG4gICAgLmxlZnQsXHJcbiAgICAucmlnaHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICB9XHJcbiAgICAuaW5uZXItY29udGFpbmVyIHtcclxuICAgICAgICBtaW4td2lkdGg6IDEwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIH1cclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgLyogYm9yZGVyLXJhZGl1czogOHB4OyAqL1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uaW5uZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5maWVsZC1pY29uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcclxuICAgIG1hcmdpbi10b3A6IC0yNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubG9naW5ub3c6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCA5MiwgMTY3KTtcclxuICBjb2xvcjogI0YwRkZGRjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "nWFD":
/*!**********************************************************!*\
  !*** ./src/app/common/store/actions/user/user.action.ts ***!
  \**********************************************************/
/*! exports provided: GetUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUser", function() { return GetUser; });
class GetUser {
}
GetUser.type = '[UserModel] Get';


/***/ }),

/***/ "q5mM":
/*!*************************************************************!*\
  !*** ./src/app/common/model/change-password/NewPassword.ts ***!
  \*************************************************************/
/*! exports provided: NewPasswordModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPasswordModel", function() { return NewPasswordModel; });
class NewPasswordModel {
}


/***/ }),

/***/ "rtly":
/*!*****************************************************************************!*\
  !*** ./src/app/common/service/http-interceptor/http-interceptor.service.ts ***!
  \*****************************************************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login_state/loginstate.service */ "1d9a");


class HttpInterceptorService {
    constructor(loginstate) {
        this.loginstate = loginstate;
    }
    intercept(req, next) {
        // const tokenizedReq: string = JSON.parse(localStorage.getItem('token')+'')?.token;
        // console.log("interception in progress");
        const authToken = this.loginstate.getLoginState();
        // const authToken = localStorage.getItem('token');
        if (authToken) {
            const cloned = req.clone({ headers: req.headers.set("Authorization", "Bearer " + authToken.token) });
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    }
}
HttpInterceptorService.ɵfac = function HttpInterceptorService_Factory(t) { return new (t || HttpInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_1__["LoginstateService"])); };
HttpInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpInterceptorService, factory: HttpInterceptorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ty9h":
/*!********************************************************************************!*\
  !*** ./src/app/common/components/forgot-password/forgot-password.component.ts ***!
  \********************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _constants_error_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/error-message */ "jsD4");
/* harmony import */ var _constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/snackbar-properties */ "fc4o");
/* harmony import */ var _model_change_password_change_forgot_password__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/change-password/change-forgot-password */ "w/iN");
/* harmony import */ var _model_change_password_sendotp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/change-password/sendotp */ "jVCE");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loading/loading.component */ "4cPp");
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../snackbar/snackbar.component */ "j7cY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _service_forgot_password_reset_password_with_otp_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../service/forgot-password/reset-password-with-otp.service */ "2hmw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");



















function ForgotPasswordComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "email is reqiured");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "email must have atleast 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "email must have less than 40 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "mobilenumber is reqiured");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "mobilenumber must have atleast 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "mobilenumber must have 10 digits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "otp is reqiured");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "otp must have atleast 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "otp must have less than 40 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_mat_error_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "password is reqiured");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_mat_error_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "password must have atleast 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_mat_error_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "password must have less than 40 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_mat_error_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "password is reqiured");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_mat_error_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "password must have atleast 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_mat_error_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "password must have less than 40 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_mat_error_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "confirm password does not match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
class ForgotPasswordComponent {
    constructor(fb, snackbar, dialog, resetPassword, router
    // private matDialogRef: MatDialogRef<ForgotPasswordComponent>
    ) {
        this.fb = fb;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.resetPassword = resetPassword;
        this.router = router;
        this.hide = true;
        this.generateOtp = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(40)]],
            mobilenumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]]
        });
        this.otpWithNewPassword = this.fb.group({
            otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(40)]],
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(40)]],
            newConfPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(40)]],
        });
    }
    ngOnInit() {
    }
    get otpform() {
        return this.generateOtp.controls;
    }
    get otpWithNewPasswordForm() {
        return this.otpWithNewPassword.controls;
    }
    sendOtp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.generateOtp.valid) {
                const sendOtpModel = new _model_change_password_sendotp__WEBPACK_IMPORTED_MODULE_5__["SendOtpForForgotPassword"]();
                sendOtpModel.email = this.otpform.email.value;
                sendOtpModel.mobileNumber = this.otpform.mobilenumber.value;
                let panelClass = 'green';
                let snackbarMsg = '';
                let snackbarRef = null;
                this.snackbar.dismiss();
                const dialogRef = this.dialog.open(_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], { disableClose: true });
                let resp = null;
                try {
                    resp = yield this.resetPassword.sendOtp(sendOtpModel);
                    const msg = resp.body;
                    if (msg) {
                        localStorage.setItem('userId', resp.body.userId);
                        snackbarMsg = 'Please check your Email for OTP.';
                        // this.matDialogRef.close();
                    }
                    else {
                        snackbarMsg = _constants_error_message__WEBPACK_IMPORTED_MODULE_2__["NO_RESP"];
                        panelClass = 'red';
                    }
                }
                catch (ex) {
                    snackbarMsg = Object(_constants_error_message__WEBPACK_IMPORTED_MODULE_2__["getErrorMessage"])(ex);
                    panelClass = 'red';
                }
                finally {
                    dialogRef.close();
                }
                if (snackbarMsg) {
                    snackbarRef = this.snackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__["SnackbarComponent"], Object(_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_3__["getSnackbarProperties"])(snackbarMsg, panelClass));
                }
            }
        });
    }
    getUserId() {
        let userId = localStorage.getItem('userId');
        return userId;
    }
    newPasswordWithOtp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.otpWithNewPassword.valid) {
                const otpWithNewPassword = new _model_change_password_change_forgot_password__WEBPACK_IMPORTED_MODULE_4__["ChangeForgotPassword"]();
                otpWithNewPassword.otp = this.otpWithNewPasswordForm.otp.value;
                otpWithNewPassword.userId = this.getUserId();
                otpWithNewPassword.password = this.otpWithNewPasswordForm.newPassword.value;
                let panelClass = 'green';
                let snackbarMsg = '';
                let snackbarRef = null;
                this.snackbar.dismiss();
                const dialogRef = this.dialog.open(_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], { disableClose: true });
                let resp = null;
                try {
                    resp = yield this.resetPassword.updateForgotPassword(otpWithNewPassword);
                    const msg = resp.body;
                    if (msg) {
                        snackbarMsg = 'Password Changed Sucessfully! Please Login to Continue.';
                        // snackbarMsg = 'Password Changed! Please Login to Continue.';
                        localStorage.removeItem('userId');
                        this.router.navigate(['/login']);
                        // this.matDialogRef.close();
                    }
                    else {
                        snackbarMsg = _constants_error_message__WEBPACK_IMPORTED_MODULE_2__["NO_RESP"];
                        panelClass = 'red';
                    }
                }
                catch (ex) {
                    // this.router.navigate(['/login']);
                    // localStorage.removeItem('userId');
                    snackbarMsg = Object(_constants_error_message__WEBPACK_IMPORTED_MODULE_2__["getErrorMessage"])(ex);
                    panelClass = 'red';
                }
                finally {
                    dialogRef.close();
                }
                if (snackbarMsg) {
                    snackbarRef = this.snackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__["SnackbarComponent"], Object(_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_3__["getSnackbarProperties"])(snackbarMsg, panelClass));
                }
            }
        });
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_forgot_password_reset_password_with_otp_service__WEBPACK_IMPORTED_MODULE_11__["ResetPasswordWithOtpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"])); };
ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 64, vars: 27, consts: [[1, "parent"], [1, "sub-container-2"], [3, "formGroup", "ngSubmit"], [1, "field-container"], ["appearance", "fill", "color", "accent"], ["matInput", "", "formControlName", "email", "type", "email"], [4, "ngIf"], ["matInput", "", "formControlName", "mobilenumber"], ["mat-raised-button", "", "color", "accent", "type", "submit"], ["matInput", "", "formControlName", "otp", "type", "number"], ["matInput", "", "formControlName", "newPassword", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["matInput", "", "formControlName", "newConfPassword", 3, "pattern", "type"], ["mat-raised-button", "", "color", "accent", "routerLink", "/login", 2, "text-decoration", "none"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_2_listener() { return ctx.sendOtp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "OTP WILL BE SENT TO YOUR REGISTERED EMAIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, ForgotPasswordComponent_mat_error_10_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, ForgotPasswordComponent_mat_error_11_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, ForgotPasswordComponent_mat_error_12_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, ForgotPasswordComponent_mat_error_18_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, ForgotPasswordComponent_mat_error_19_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, ForgotPasswordComponent_mat_error_20_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Send Otp");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_25_listener() { return ctx.newPasswordWithOtp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "ENTER THE OTP RECIEVED ON EMAIL AND NEW PASSWORD");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "OTP");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](32, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, ForgotPasswordComponent_mat_error_33_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, ForgotPasswordComponent_mat_error_34_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, ForgotPasswordComponent_mat_error_35_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](40, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_button_click_41_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](44, ForgotPasswordComponent_mat_error_44_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](45, ForgotPasswordComponent_mat_error_45_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](46, ForgotPasswordComponent_mat_error_46_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](51, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_button_click_52_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](55, ForgotPasswordComponent_mat_error_55_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](56, ForgotPasswordComponent_mat_error_56_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](57, ForgotPasswordComponent_mat_error_57_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](58, ForgotPasswordComponent_mat_error_58_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, " Change Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63, "Go Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.generateOtp);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.otpform.email.errors == null ? null : ctx.otpform.email.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.otpform.email.errors == null ? null : ctx.otpform.email.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.otpform.email.errors == null ? null : ctx.otpform.email.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.otpform.mobilenumber.errors == null ? null : ctx.otpform.mobilenumber.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.otpform.mobilenumber.errors == null ? null : ctx.otpform.mobilenumber.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.otpform.mobilenumber.errors == null ? null : ctx.otpform.mobilenumber.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.otpWithNewPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.otpWithNewPasswordForm.otp.errors == null ? null : ctx.otpWithNewPasswordForm.otp.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.otpWithNewPasswordForm.otp.errors == null ? null : ctx.otpWithNewPasswordForm.otp.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.otpWithNewPasswordForm.otp.errors == null ? null : ctx.otpWithNewPasswordForm.otp.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.otpWithNewPasswordForm.newPassword.errors == null ? null : ctx.otpWithNewPasswordForm.newPassword.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.otpWithNewPasswordForm.newPassword.errors == null ? null : ctx.otpWithNewPasswordForm.newPassword.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.otpWithNewPasswordForm.newPassword.errors == null ? null : ctx.otpWithNewPasswordForm.newPassword.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("pattern", ctx.otpWithNewPasswordForm.newPassword.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.otpWithNewPasswordForm.newConfPassword.errors == null ? null : ctx.otpWithNewPasswordForm.newConfPassword.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.otpWithNewPasswordForm.newConfPassword.errors == null ? null : ctx.otpWithNewPasswordForm.newConfPassword.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.otpWithNewPasswordForm.newConfPassword.errors == null ? null : ctx.otpWithNewPasswordForm.newConfPassword.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.otpWithNewPasswordForm.newConfPassword.errors == null ? null : ctx.otpWithNewPasswordForm.newConfPassword.errors.pattern);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"]], styles: [".sub-container-2[_ngcontent-%COMP%] {\r\n    padding: 50px;\r\n    background-color: #1b1d1f;\r\n    text-align: center;\r\n}\r\n\r\n.sub-container-2[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n    letter-spacing: 3px;\r\n    font-family: Agency Fb;\r\n    color: white;\r\n}\r\n\r\n.mat-button-container[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n    margin: 10px auto;\r\n    display: blocks;\r\n    width: 400px;\r\n    background: rgb(33, 53, 71);\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n\r\n.mat-raised-button[_ngcontent-%COMP%] {\r\n    margin: 30px auto;\r\n    display: block;\r\n    width: 400px;\r\n}\r\n\r\n.parent[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    \r\n    width: auto;\r\n    height: 100vh;\r\n    background-color: #1b1d1f;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n\r\n@media screen and (max-width:600px) {\r\n    .parent[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        \r\n        width: auto;\r\n        height: auto;\r\n        background-color: #1b1d1f;\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n    }\r\n    .mat-form-field[_ngcontent-%COMP%] {\r\n        margin: 10px auto;\r\n        display: blocks;\r\n        width: auto;\r\n        background: rgb(33, 53, 71);\r\n    }\r\n    .mat-raised-button[_ngcontent-%COMP%] {\r\n        margin: 30px auto;\r\n        display: block;\r\n        width: auto;\r\n    }\r\n\r\n    .sub-container-2[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 1rem;\r\n        letter-spacing: 3px;\r\n        font-family: Agency Fb;\r\n        color: white;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtJQUNaLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYiw0QkFBNEI7UUFDNUIsV0FBVztRQUNYLFlBQVk7UUFDWix5QkFBeUI7UUFDekIsZUFBZTtRQUNmLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixXQUFXO1FBQ1gsMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsY0FBYztRQUNkLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWItY29udGFpbmVyLTIge1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjFkMWY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdWItY29udGFpbmVyLTIgZm9ybSBwIHtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICBmb250LWZhbWlseTogQWdlbmN5IEZiO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubWF0LWJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9ja3M7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzMsIDUzLCA3MSk7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCBpbnB1dCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4ucGFyZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWQxZjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KSB7XHJcbiAgICAucGFyZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjFkMWY7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBibG9ja3M7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDMzLCA1MywgNzEpO1xyXG4gICAgfVxyXG4gICAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuc3ViLWNvbnRhaW5lci0yIGZvcm0gcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEFnZW5jeSBGYjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/components/forgot-password/forgot-password.component */ "ty9h");
/* harmony import */ var _common_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/components/not-found/not-found.component */ "mIit");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _user_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user-registration/user-registration.component */ "nAVN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: '', redirectTo: 'login',
        pathMatch: 'full'
    },
    { path: 'Admin', loadChildren: () => Promise.all(/*! import() | admin-admin-module */[__webpack_require__.e("default~admin-admin-module~user-user-module"), __webpack_require__.e("admin-admin-module")]).then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "jkDv")).then(m => m.AdminModule) },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _user_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_4__["UserRegistrationComponent"] },
    { path: 'forgot-password', component: _common_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_1__["ForgotPasswordComponent"] },
    { path: 'User', loadChildren: () => Promise.all(/*! import() | user-user-module */[__webpack_require__.e("default~admin-admin-module~user-user-module"), __webpack_require__.e("user-user-module")]).then(__webpack_require__.bind(null, /*! ./user/user.module */ "7UCR")).then(m => m.UserModule) },
    { path: '**', component: _common_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/components/loading/loading.component */ "4cPp");
/* harmony import */ var _common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/components/snackbar/snackbar.component */ "j7cY");
/* harmony import */ var _common_constants_error_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/constants/error-message */ "jsD4");
/* harmony import */ var _common_constants_links__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/constants/links */ "IV7L");
/* harmony import */ var _common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/constants/snackbar-properties */ "fc4o");
/* harmony import */ var _common_model_login_login_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/model/login/login-model */ "HXgO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_service_authentication_service_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/service/authentication_service/authentication.service */ "16jV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/service/login_state/loginstate.service */ "1d9a");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "FKr1");





















function LoginComponent_div_0_form_6_h6_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h6", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " USER LOGIN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function LoginComponent_div_0_form_6_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "ADMIN LOGIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function LoginComponent_div_0_form_6_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "username is reqiured");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function LoginComponent_div_0_form_6_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "username must have atleast 4 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function LoginComponent_div_0_form_6_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "password is reqiured");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function LoginComponent_div_0_form_6_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "password must have atleast 5 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/forgot-password"]; };
const _c1 = function () { return ["/register"]; };
function LoginComponent_div_0_form_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_0_form_6_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r8.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Welcome BBDiers, Sign in to start Winning Big ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, LoginComponent_div_0_form_6_h6_6_Template, 2, 0, "h6", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, LoginComponent_div_0_form_6_p_7_Template, 2, 0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, LoginComponent_div_0_form_6_mat_error_12_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, LoginComponent_div_0_form_6_mat_error_13_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LoginComponent_div_0_form_6_Template_span_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r10.hide = !ctx_r10.hide; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, LoginComponent_div_0_form_6_mat_error_21_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, LoginComponent_div_0_form_6_mat_error_22_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Forgot Password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, " Wanna Start Placing Bets? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, " Hit me to Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r1.loginform);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.userType === "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.userType === "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.form.username.errors == null ? null : ctx_r1.form.username.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.form.username.errors == null ? null : ctx_r1.form.username.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", ctx_r1.hide ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r1.hide);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.form.password.errors == null ? null : ctx_r1.form.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.form.password.errors == null ? null : ctx_r1.form.password.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](12, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](13, _c1));
} }
function LoginComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, LoginComponent_div_0_form_6_Template, 36, 14, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", ctx_r0.iplImage, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isLoggedIn);
} }
class LoginComponent {
    // isLoginFailed = false;
    // errorMessage!: '';
    constructor(fb, authservice2, router, loginStateService, snackbar, dialog) {
        this.fb = fb;
        this.authservice2 = authservice2;
        this.router = router;
        this.loginStateService = loginStateService;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.hide = true;
        this.iplImage = _common_constants_links__WEBPACK_IMPORTED_MODULE_5__["ipl"];
        this.isLoggedIn = false;
        const loginStateModel = this.loginStateService.getLoginState();
        if (loginStateModel !== null) {
            this.router.navigate(['/' + loginStateModel.role + '/home']);
            return;
        }
        this.loginform = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]],
        });
    }
    ngOnInit() {
        // if (localStorage.getItem('token')) {
        //   this.router.navigate(['/adminHome']);
        // }
    }
    get form() {
        return this.loginform.controls;
    }
    reset(field) {
        this.form[field].setValue('');
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.loginform.valid) {
                let panelClass = 'green';
                let snackbarMsg = '';
                let snackbarRef = null;
                let loginStateModel;
                const loginModel = new _common_model_login_login_model__WEBPACK_IMPORTED_MODULE_7__["LoginModel"](this.form.username.value, this.form.password.value);
                this.snackbar.dismiss();
                const dialogRef = this.dialog.open(_common_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"], { disableClose: true });
                try {
                    const resp = yield this.authservice2.login(loginModel);
                    loginStateModel = resp.body;
                    if (loginStateModel != null) {
                        if (loginStateModel.role === 'Admin' || loginStateModel.status) {
                            this.loginStateService.createSession(loginStateModel);
                            // localStorage.setItem('token', resp.body.token);
                            // localStorage.setItem('userId', resp.body.data.userId);
                            const url = ['/' + this.loginStateService.getLoginState().role + '/home'];
                            this.router.navigate(url);
                        }
                        else {
                            if (this.loginStateService.role === 'User') {
                                snackbarMsg = 'sorry you are not verified yet or you have been blocked! please contact the admin';
                            }
                            else {
                                snackbarMsg = 'sorry you have been blocked! please contact the admin';
                            }
                            panelClass = 'red';
                        }
                    }
                    else {
                        snackbarMsg = _common_constants_error_message__WEBPACK_IMPORTED_MODULE_4__["NO_RESP"];
                        panelClass = 'red';
                    }
                }
                catch (ex) {
                    snackbarMsg = Object(_common_constants_error_message__WEBPACK_IMPORTED_MODULE_4__["getErrorMessage"])(ex, 'login');
                    panelClass = 'red';
                }
                finally {
                    dialogRef.close();
                }
                if (snackbarMsg) {
                    snackbarRef = this.snackbar.openFromComponent(_common_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__["SnackbarComponent"], Object(_common_constants_snackbar_properties__WEBPACK_IMPORTED_MODULE_6__["getSnackbarProperties"])(snackbarMsg, panelClass));
                }
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_common_service_authentication_service_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_common_service_login_state_loginstate_service__WEBPACK_IMPORTED_MODULE_11__["LoginstateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], inputs: { userType: "userType" }, decls: 1, vars: 1, consts: [["class", "section", "fxLayoutAlign", "center center", "fxFlexFill", "", 4, "ngIf"], ["fxLayoutAlign", "center center", "fxFlexFill", "", 1, "section"], [1, "container"], [1, "row", "no-gutters"], [1, "col-lg-5"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "col-lg-7", "px-5", "pt-5"], ["class", "form1", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "form1", 3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "toolbar"], [1, "col-lg-7"], ["class", "mat-subheading-2", 4, "ngIf"], [4, "ngIf"], ["appearance", "fill", "color", "accent"], ["matInput", "", "autocomplete", "off", "formControlName", "username"], ["matInput", "", "formControlName", "password", 3, "type"], [1, "fa", "fa-fw", "fa-eye", "field-icon", 3, "click"], ["type", "submit", "mat-raised-button", "", "matRipple", "", 1, "btnlog", "mt-3", "mb-5"], [1, "forgotPassword", 3, "routerLink"], ["mat-icon-button", "", 1, "nav-link", 3, "routerLink"], [1, "fas", "fa-sign-in-alt"], [1, "mat-subheading-2"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, LoginComponent_div_0_Template, 7, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.authservice2.isLoggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["FlexFillDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRipple"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatAnchor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatError"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Mate+SC&display=swap');\r\n*[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n.section[_ngcontent-%COMP%] {\r\n    background: #343148;\r\n    height: auto;\r\n}\r\n.toolbar[_ngcontent-%COMP%] {\r\n    font-family: 'Mate SC', serif;\r\n    font-size: large;\r\n    background: rgb(60, 60, 182);\r\n    color: #fff;\r\n    padding: 15px;\r\n    width: 100%;\r\n}\r\n.row[_ngcontent-%COMP%] {\r\n    background: rgba(161, 157, 168, 0.795);\r\n    border-radius: 30px;\r\n    box-shadow: 12px 12px 22px grey;\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n    border-top-left-radius: 30px;\r\n    border-bottom-left-radius: 30px;\r\n}\r\n.btnlog[_ngcontent-%COMP%] {\r\n    border: none;\r\n    outline: none;\r\n    height: 50px;\r\n    width: 100%;\r\n    background-color: black;\r\n    color: white;\r\n    border-radius: 4px;\r\n    font-weight: bold;\r\n}\r\n.btnlog[_ngcontent-%COMP%]:hover {\r\n    background: white;\r\n    border: 1px solid;\r\n    color: black;\r\n}\r\nmat-form-field[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n    width: 100%;\r\n}\r\n.field-icon[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-left: -25px;\r\n    \r\n    position: absolute;\r\n    \r\n    size: 100px;\r\n}\r\n.forgotPassword[_ngcontent-%COMP%]{\r\n  color: aquamarine;\r\n}\r\n@media only screen and (max-width: 480px) {\r\n\r\n    .section[_ngcontent-%COMP%]{\r\n        background-color: #fff;\r\n        height: auto;\r\n    }\r\n\r\n    .row[_ngcontent-%COMP%] {\r\n        background: rgba(161, 157, 168, 0.795);\r\n        border-radius: 0;\r\n        box-shadow: 12px 12px 22px grey;\r\n        display: flex;\r\n        flex-direction: column;\r\n        margin-top: auto;\r\n    }\r\n\r\n    img[_ngcontent-%COMP%] {\r\n        border-top-left-radius: 0;\r\n        border-bottom-left-radius: 0;\r\n        margin-top: 20%;\r\n    }\r\n\r\n}\r\n@media only screen and (max-height: 670px) {\r\n    img[_ngcontent-%COMP%] {\r\n        border-top-left-radius: 0;\r\n        border-bottom-left-radius: 0;\r\n        margin-top: 50%;\r\n    }\r\n}\r\n@media only screen and (min-height: 800px) {\r\n    img[_ngcontent-%COMP%] {\r\n        border-top-left-radius: 0;\r\n        border-bottom-left-radius: 0;\r\n        margin-top: 10%;\r\n    }\r\n}\r\n@media only screen and (min-height: 800px) {\r\n    img[_ngcontent-%COMP%] {\r\n        border-top-left-radius: 0;\r\n        border-bottom-left-radius: 0;\r\n        margin-top: 10%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQTRFO0FBQzVFO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLG1CQUFtQjtJQUNuQiwrQkFBK0I7QUFDbkM7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QiwrQkFBK0I7QUFDbkM7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBOztJQUVJO1FBQ0ksc0JBQXNCO1FBQ3RCLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxzQ0FBc0M7UUFDdEMsZ0JBQWdCO1FBQ2hCLCtCQUErQjtRQUMvQixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLHlCQUF5QjtRQUN6Qiw0QkFBNEI7UUFDNUIsZUFBZTtJQUNuQjs7QUFFSjtBQUVBO0lBQ0k7UUFDSSx5QkFBeUI7UUFDekIsNEJBQTRCO1FBQzVCLGVBQWU7SUFDbkI7QUFDSjtBQUVBO0lBQ0k7UUFDSSx5QkFBeUI7UUFDekIsNEJBQTRCO1FBQzVCLGVBQWU7SUFDbkI7QUFDSjtBQUVBO0lBQ0k7UUFDSSx5QkFBeUI7UUFDekIsNEJBQTRCO1FBQzVCLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWF0ZStTQyZkaXNwbGF5PXN3YXAnKTtcclxuKiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnNlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZDogIzM0MzE0ODtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnRvb2xiYXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNYXRlIFNDJywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDYwLCA2MCwgMTgyKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTYxLCAxNTcsIDE2OCwgMC43OTUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDEycHggMTJweCAyMnB4IGdyZXk7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzBweDtcclxufVxyXG5cclxuLmJ0bmxvZyB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYnRubG9nOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5maWVsZC1pY29uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcclxuICAgIC8qIG1hcmdpbi10b3A6IC0yNXB4OyAqL1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLyogei1pbmRleDogMjsgKi9cclxuICAgIHNpemU6IDEwMHB4O1xyXG59XHJcblxyXG4uZm9yZ290UGFzc3dvcmR7XHJcbiAgY29sb3I6IGFxdWFtYXJpbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcbiAgICAuc2VjdGlvbntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAucm93IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2MSwgMTU3LCAxNjgsIDAuNzk1KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDEycHggMTJweCAyMnB4IGdyZXk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNjcwcHgpIHtcclxuICAgIGltZyB7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogODAwcHgpIHtcclxuICAgIGltZyB7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogODAwcHgpIHtcclxuICAgIGltZyB7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "w/iN":
/*!************************************************************************!*\
  !*** ./src/app/common/model/change-password/change-forgot-password.ts ***!
  \************************************************************************/
/*! exports provided: ChangeForgotPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeForgotPassword", function() { return ChangeForgotPassword; });
class ChangeForgotPassword {
}


/***/ }),

/***/ "ymDI":
/*!*****************************************************************************!*\
  !*** ./src/app/common/components/footer/contact-us/contact-us.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const _c0 = ["map"];
class ContactUsComponent {
    constructor() {
        this.lat = -60.612604;
        this.lng = -44.817546;
    }
    ngOnInit() {
    }
    onChoseLocation(event) {
        this.lat = event.coords.lat;
        this.lng = event.coords.lng;
    }
    onNavigate() {
        window.open("https://www.google.com/maps/place/54%C2%B028'50.5%22S+36%C2%B023'33.1%22W/@-54.480704,-36.3947017,17z/data=!3m1!4b1!4m9!1m2!2m1!1slone+island!3m5!1s0x0:0x0!7e2!8m2!3d-54.4807043!4d-36.3925134");
    }
}
ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) { return new (t || ContactUsComponent)(); };
ContactUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactUsComponent, selectors: [["app-contact-us"]], viewQuery: function ContactUsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mapElement = _t.first);
    } }, decls: 24, vars: 0, consts: [[1, "section"], [1, "container"], [1, "content-section"], [1, "title"], [1, "content"], [1, "social"], ["href", ""], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-twitter"], [1, "fab", "fa-instagram"], [1, "image-section"], [1, "nav_url", 3, "click"]], template: function ContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "BBD IPL (Online Fantasy Cricket Game)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Email : info.sportgeek@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Mobile : 9033481597 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactUsComponent_Template_p_click_22_listener() { return ctx.onNavigate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Click here to see in Google Maps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');\r\n*[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    box-sizing: border-box;\r\n}\r\n.section[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    min-height: 100vh;\r\n    background-color: #ddd;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    display: block;\r\n    margin: auto;\r\n    padding-top: 100px;\r\n}\r\n.content-section[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 55%;\r\n}\r\n.image-section[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 40%;\r\n}\r\n.content-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    text-transform: uppercase;\r\n    font-size: 28px;\r\n}\r\n.content-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    color: #5d5d5d;\r\n    font-size: 21px;\r\n}\r\n.content-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    line-height: 1.5;\r\n}\r\n.content-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n    margin-top: 30px;\r\n}\r\n.content-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    background-color: #3d3d3d;\r\n    padding: 12px 40px;\r\n    text-decoration: none;\r\n    color: #fff;\r\n    font-size: 25px;\r\n    letter-spacing: 1.5px;\r\n    font-family: 'Odibee Sans', cursive;\r\n}\r\n.content-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: #a52a2a;\r\n    color: #fff;\r\n}\r\n.content-section[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\r\n    margin: 40px 40px;\r\n}\r\n.content-section[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #a52a2a;\r\n    font-size: 30px;\r\n    padding: 0px 10px;\r\n}\r\n.content-section[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\r\n    color: #3d3d3d;\r\n}\r\n@media screen and (max-width:768px) {\r\n    .container[_ngcontent-%COMP%] {\r\n        width: 80%;\r\n        display: block;\r\n        margin: auto;\r\n        padding-top: 20px;\r\n    }\r\n    .content-section[_ngcontent-%COMP%] {\r\n        float: none;\r\n        width: 100%;\r\n        display: block;\r\n        margin: auto;\r\n    }\r\n    .image-section[_ngcontent-%COMP%] {\r\n        float: none;\r\n        width: 100%;\r\n        padding-bottom: 70px;\r\n    }\r\n    .image-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        height: auto;\r\n        display: block;\r\n        margin: auto;\r\n        padding-bottom: 70px;\r\n    }\r\n    .content-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n        font-size: 19px;\r\n    }\r\n    .content-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n    }\r\n    .content-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        padding: 9px 30px;\r\n    }\r\n    .content-section[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n    }\r\n}\r\n.nav_url[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    color: blue;\r\n}\r\n@media only screen and (max-width: 480px) {\r\n\r\n    .container[_ngcontent-%COMP%] {\r\n        width: 80%;\r\n        display: block;\r\n        margin: auto;\r\n        padding-top: 20px;\r\n      }\r\n\r\n      body[_ngcontent-%COMP%]{\r\n          height: 160vh;\r\n      }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnRkFBZ0Y7QUFDaEY7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7QUFDZDtBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZDtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG1DQUFtQztBQUN2QztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsY0FBYztRQUNkLFlBQVk7UUFDWixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFdBQVc7UUFDWCxXQUFXO1FBQ1gsY0FBYztRQUNkLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxXQUFXO1FBQ1gsb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGNBQWM7UUFDZCxZQUFZO1FBQ1osb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKO0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmO0FBRUE7O0lBRUk7UUFDSSxVQUFVO1FBQ1YsY0FBYztRQUNkLFlBQVk7UUFDWixpQkFBaUI7TUFDbkI7O01BRUE7VUFDSSxhQUFhO01BQ2pCO0FBQ04iLCJmaWxlIjoiY29udGFjdC11cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T2RpYmVlK1NhbnMmZGlzcGxheT1zd2FwJyk7XHJcbioge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LXNlY3Rpb24ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNTUlO1xyXG59XHJcblxyXG4uaW1hZ2Utc2VjdGlvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG4uY29udGVudC1zZWN0aW9uIC50aXRsZSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG59XHJcblxyXG4uY29udGVudC1zZWN0aW9uIC5jb250ZW50IGgzIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBjb2xvcjogIzVkNWQ1ZDtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG5cclxuLmNvbnRlbnQtc2VjdGlvbiAuY29udGVudCBwIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbi5jb250ZW50LXNlY3Rpb24gLmNvbnRlbnQgLmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uY29udGVudC1zZWN0aW9uIC5jb250ZW50IC5idXR0b24gYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2QzZDNkO1xyXG4gICAgcGFkZGluZzogMTJweCA0MHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09kaWJlZSBTYW5zJywgY3Vyc2l2ZTtcclxufVxyXG5cclxuLmNvbnRlbnQtc2VjdGlvbiAuY29udGVudCAuYnV0dG9uIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E1MmEyYTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uY29udGVudC1zZWN0aW9uIC5zb2NpYWwge1xyXG4gICAgbWFyZ2luOiA0MHB4IDQwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LXNlY3Rpb24gLnNvY2lhbCBpIHtcclxuICAgIGNvbG9yOiAjYTUyYTJhO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LXNlY3Rpb24gLnNvY2lhbCBpOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjM2QzZDNkO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIH1cclxuICAgIC5jb250ZW50LXNlY3Rpb24ge1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICAgIC5pbWFnZS1zZWN0aW9uIHtcclxuICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNzBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZS1zZWN0aW9uIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNzBweDtcclxuICAgIH1cclxuICAgIC5jb250ZW50LXNlY3Rpb24gLnRpdGxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQtc2VjdGlvbiAuY29udGVudCAuYnV0dG9uIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuY29udGVudC1zZWN0aW9uIC5jb250ZW50IC5idXR0b24gYSB7XHJcbiAgICAgICAgcGFkZGluZzogOXB4IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGVudC1zZWN0aW9uIC5zb2NpYWwge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLm5hdl91cmwge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYm9keXtcclxuICAgICAgICAgIGhlaWdodDogMTYwdmg7XHJcbiAgICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "z8b/":
/*!*******************************************************************!*\
  !*** ./src/app/common/components/footer/rules/rules.component.ts ***!
  \*******************************************************************/
/*! exports provided: RulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesComponent", function() { return RulesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class RulesComponent {
    constructor() { }
    ngOnInit() {
    }
}
RulesComponent.ɵfac = function RulesComponent_Factory(t) { return new (t || RulesComponent)(); };
RulesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RulesComponent, selectors: [["app-rules"]], decls: 40, vars: 0, consts: [[1, "container"]], template: function RulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Rules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "1. Register by putting Rs 100.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "2. You will get Rs 100 X 5 = 500 points.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "3. On each match, you can bet minimum 10 points on any team (few matches have higher minimum points).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "4. If you do not bet on any match, your bet will be put automatically on the losing team of 10 points.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "5. Simple principle \"Winners win what losers lose in that match, in the same proportion of their bet\".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "6. Losers do not get anything from losing match.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "7. Your total points will be visible in the Profile Tab.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "8. You can bet anytime, update any number of times and any amount until the match has started.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Distribution among winners at the end of IPL Season");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Once all the matches are over, the top 3 winners will get amount divided in the proportion of their winning shares. The amount to be divided will be the total collection for this season. If there are 30 participants, then the total amount will be = Rs 100 X 30 = 3000. If the top 3 winners have points as 2800, 1000, 700, then the top winner would get = (2800 / (2800 + 1000 + 700)) * 3000 = (2800 / 4500) * 3000 = 1866");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Note :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " The final few matches may have bet restriction to 20 % of their balance amount. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Terms and Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " All the players would be bound by the terms and conditions of the game. In case of any discrepancy or dispute, the organizer's decision will be final and binding ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\r\n    background: linear-gradient(to right, #333333, #dd1818);\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: auto;\r\n    padding: 50px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    height: auto;\r\n    padding: 40px;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    body[_ngcontent-%COMP%] {\r\n        background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);\r\n        display: flex;\r\n        flex-direction: column;\r\n        height: auto;\r\n        padding: 10px;\r\n    }\r\n\r\n    .container[_ngcontent-%COMP%] {\r\n        color: #fff;\r\n        height: auto;\r\n        padding: 5px;\r\n    }\r\n\r\n    \r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1REFBdUQ7QUFDM0Q7O0FBRUE7SUFDSSxnRUFBZ0U7SUFDaEUsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTs7SUFFSTtRQUNJLGdFQUFnRTtRQUNoRSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLFlBQVk7UUFDWixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixZQUFZO0lBQ2hCOzs7O0FBSUoiLCJmaWxlIjoicnVsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzMzMzMzLCAjZGQxODE4KTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxMmMyZTksICNjNDcxZWQsICNmNjRmNTkpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogNDBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cclxuICAgIGJvZHkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzEyYzJlOSwgI2M0NzFlZCwgI2Y2NGY1OSk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG59Il19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .then(() => {
    if ('serviceWorker' in navigator && _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        navigator.serviceWorker.register('ngsw-worker.js');
    }
})
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "7UCR":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_material_components_file_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular-material-components/file-input */ "OC/Z");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var mat_table_filter__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! mat-table-filter */ "6Ugt");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-pick-datetime */ "z17N");
/* harmony import */ var _betting_page_betting_page_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./betting-page/betting-page.component */ "fR/j");
/* harmony import */ var _betting_page_insert_update_contest_insert_update_contest_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./betting-page/insert-update-contest/insert-update-contest.component */ "Kbag");
/* harmony import */ var _leader_board_leader_board_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./leader-board/leader-board.component */ "3GAt");
/* harmony import */ var _match_list_match_list_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./match-list/match-list.component */ "sbTx");
/* harmony import */ var _my_matches_my_matches_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./my-matches/my-matches.component */ "AYzf");
/* harmony import */ var _my_matches_view_live_matches_view_live_matches_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./my-matches/view-live-matches/view-live-matches.component */ "dBPv");
/* harmony import */ var _my_matches_view_old_matches_view_old_matches_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./my-matches/view-old-matches/view-old-matches.component */ "3s9q");
/* harmony import */ var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.component */ "hxRI");
/* harmony import */ var _user_profile_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./user-profile/update-profile/update-profile.component */ "B46U");
/* harmony import */ var _user_profile_view_others_user_profile_view_others_user_profile_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./user-profile/view-others-user-profile/view-others-user-profile.component */ "GtJQ");
/* harmony import */ var _user_profile_view_user_profile_view_user_profile_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./user-profile/view-user-profile/view-user-profile.component */ "NZxq");
/* harmony import */ var _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./user-registration/user-registration.component */ "nAVN");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./user-routing.module */ "Yu5h");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/core */ "fXoL");


































// import { ChatComponent } from './chat/chat.component';












// console.log("user module loaded");
class UserModule {
}
UserModule.ɵfac = function UserModule_Factory(t) { return new (t || UserModule)(); };
UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵdefineNgModule"]({ type: UserModule });
UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_44__["UserRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
            // BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            mat_table_filter__WEBPACK_IMPORTED_MODULE_30__["MatTableFilterModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_31__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_31__["OwlNativeDateTimeModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTabsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
            _angular_material_components_file_input__WEBPACK_IMPORTED_MODULE_0__["NgxMatFileInputModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MatTooltipModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵsetNgModuleScope"](UserModule, { declarations: [_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_39__["UserDashboardComponent"],
        _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_43__["UserRegistrationComponent"],
        _match_list_match_list_component__WEBPACK_IMPORTED_MODULE_35__["MatchListComponent"],
        _leader_board_leader_board_component__WEBPACK_IMPORTED_MODULE_34__["LeaderBoardComponent"],
        _betting_page_betting_page_component__WEBPACK_IMPORTED_MODULE_32__["BettingPageComponent"],
        _user_profile_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_40__["UpdateProfileComponent"],
        _user_profile_view_user_profile_view_user_profile_component__WEBPACK_IMPORTED_MODULE_42__["ViewUserProfileComponent"],
        _my_matches_my_matches_component__WEBPACK_IMPORTED_MODULE_36__["MyMatchesComponent"],
        _my_matches_view_live_matches_view_live_matches_component__WEBPACK_IMPORTED_MODULE_37__["ViewLiveMatchesComponent"],
        _my_matches_view_old_matches_view_old_matches_component__WEBPACK_IMPORTED_MODULE_38__["ViewOldMatchesComponent"],
        _user_profile_view_others_user_profile_view_others_user_profile_component__WEBPACK_IMPORTED_MODULE_41__["ViewOthersUserProfileComponent"],
        _betting_page_insert_update_contest_insert_update_contest_component__WEBPACK_IMPORTED_MODULE_33__["InsertUpdateContestComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _user_routing_module__WEBPACK_IMPORTED_MODULE_44__["UserRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
        // BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
        mat_table_filter__WEBPACK_IMPORTED_MODULE_30__["MatTableFilterModule"],
        ng_pick_datetime__WEBPACK_IMPORTED_MODULE_31__["OwlDateTimeModule"],
        ng_pick_datetime__WEBPACK_IMPORTED_MODULE_31__["OwlNativeDateTimeModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTabsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
        _angular_material_components_file_input__WEBPACK_IMPORTED_MODULE_0__["NgxMatFileInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MatTooltipModule"]] }); })();


/***/ }),

/***/ "Yu5h":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _common_components_footer_rules_rules_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../common/components/footer/rules/rules.component */ "z8b/");
/* harmony import */ var _common_components_footer_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../common/components/footer/contact-us/contact-us.component */ "ymDI");
/* harmony import */ var _common_components_footer_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../common/components/footer/about-us/about-us.component */ "DbvX");
/* harmony import */ var _my_matches_view_old_matches_view_old_matches_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-matches/view-old-matches/view-old-matches.component */ "3s9q");
/* harmony import */ var _my_matches_view_live_matches_view_live_matches_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-matches/view-live-matches/view-live-matches.component */ "dBPv");
/* harmony import */ var _my_matches_my_matches_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-matches/my-matches.component */ "AYzf");
/* harmony import */ var _betting_page_betting_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./betting-page/betting-page.component */ "fR/j");
/* harmony import */ var _common_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../common/guard/auth.guard */ "4SCC");
/* harmony import */ var _user_profile_view_others_user_profile_view_others_user_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-profile/view-others-user-profile/view-others-user-profile.component */ "GtJQ");
/* harmony import */ var _user_profile_view_user_profile_view_user_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-profile/view-user-profile/view-user-profile.component */ "NZxq");
/* harmony import */ var _leader_board_leader_board_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./leader-board/leader-board.component */ "3GAt");
/* harmony import */ var _match_list_match_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./match-list/match-list.component */ "sbTx");
/* harmony import */ var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.component */ "hxRI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");
















// import { ChatComponent } from './chat/chat.component';
const routes = [
    { path: 'home', component: _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["UserDashboardComponent"], canActivate: [_common_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]], data: { roles: ['User'] } },
    { path: 'match-list', component: _match_list_match_list_component__WEBPACK_IMPORTED_MODULE_11__["MatchListComponent"], canActivate: [_common_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]], data: { roles: ['User'] } },
    { path: 'leader-board', component: _leader_board_leader_board_component__WEBPACK_IMPORTED_MODULE_10__["LeaderBoardComponent"], canActivate: [_common_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]], data: { roles: ['User'] } },
    { path: 'view-your-profile', component: _user_profile_view_user_profile_view_user_profile_component__WEBPACK_IMPORTED_MODULE_9__["ViewUserProfileComponent"], canActivate: [_common_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]], data: { roles: ['User'] } },
    { path: 'view-users-profile/:id', component: _user_profile_view_others_user_profile_view_others_user_profile_component__WEBPACK_IMPORTED_MODULE_8__["ViewOthersUserProfileComponent"], canActivate: [_common_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]], data: { roles: ['User'] } },
    { path: 'match-list/betting-page/:id', component: _betting_page_betting_page_component__WEBPACK_IMPORTED_MODULE_6__["BettingPageComponent"], canActivate: [_common_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]], data: { roles: ['User'] } },
    { path: 'my-matches', component: _my_matches_my_matches_component__WEBPACK_IMPORTED_MODULE_5__["MyMatchesComponent"], canActivate: [_common_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]], data: { roles: ['User'] } },
    { path: 'my-matches/view-live-match/:id', component: _my_matches_view_live_matches_view_live_matches_component__WEBPACK_IMPORTED_MODULE_4__["ViewLiveMatchesComponent"], canActivate: [_common_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]], data: { roles: ['User'] } },
    { path: 'my-matches/view-old-match/:id', component: _my_matches_view_old_matches_view_old_matches_component__WEBPACK_IMPORTED_MODULE_3__["ViewOldMatchesComponent"], canActivate: [_common_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]], data: { roles: ['User'] } },
    { path: 'about-us', component: _common_components_footer_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__["AboutUsComponent"], canActivate: [_common_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]], data: { roles: ['User'] } },
    { path: 'contact-us', component: _common_components_footer_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_1__["ContactUsComponent"], canActivate: [_common_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]], data: { roles: ['User'] } },
    { path: 'rules', component: _common_components_footer_rules_rules_component__WEBPACK_IMPORTED_MODULE_0__["RulesComponent"], canActivate: [_common_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]], data: { roles: ['User'] } },
];
class UserRoutingModule {
}
UserRoutingModule.ɵfac = function UserRoutingModule_Factory(t) { return new (t || UserRoutingModule)(); };
UserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: UserRoutingModule });
UserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](UserRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map
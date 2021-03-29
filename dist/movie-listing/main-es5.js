(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/artur/dev1/movie-listing/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "2Rin":
    /*!******************************************!*\
      !*** ./src/app/services/util.service.ts ***!
      \******************************************/

    /*! exports provided: UtilService */

    /***/
    function Rin(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilService", function () {
        return UtilService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UtilService = /*#__PURE__*/function () {
        function UtilService() {
          _classCallCheck(this, UtilService);
        }

        _createClass(UtilService, [{
          key: "sortBy",
          value: function sortBy(collection, col, dir) {
            var _this = this;

            collection = _toConsumableArray(collection).sort(function (a, b) {
              var aVal;
              var bVal;
              aVal = a[col];
              bVal = b[col];

              if (_this.isString(aVal)) {
                aVal = aVal.trim().toUpperCase();
              }

              if (_this.isString(bVal)) {
                bVal = bVal.trim().toUpperCase();
              }

              if (aVal === bVal) {
                return 0;
              } else if (aVal > bVal) {
                return dir * -1;
              } else {
                return dir * 1;
              }
            });
            return collection;
          }
        }, {
          key: "isString",
          value: function isString(val) {
            return val && (typeof val === 'string' || val instanceof String);
          }
        }]);

        return UtilService;
      }();

      UtilService.ɵfac = function UtilService_Factory(t) {
        return new (t || UtilService)();
      };

      UtilService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UtilService,
        factory: UtilService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: false,
        endPoint: 'http://localhost:3000'
      };
      /***/
    },

    /***/
    "IURz":
    /*!***************************************************!*\
      !*** ./src/app/components/main/main.component.ts ***!
      \***************************************************/

    /*! exports provided: MainComponent */

    /***/
    function IURz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
        return MainComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/db.service */
      "ajt+");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");

      var MainComponent = /*#__PURE__*/function () {
        function MainComponent(dbService, utilService) {
          _classCallCheck(this, MainComponent);

          this.dbService = dbService;
          this.utilService = utilService;
          this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
          this.genreList = [];
          this.displayList = [];
          this.isDefault = true;
          this.direction = -1;
          this.columnSelected = 'popularity';
          this.genreIds = [];
          this.rate = 2;
          this.gridsize = 1;
        }

        _createClass(MainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadMovies();
            this.loadGenres();
          }
        }, {
          key: "loadMovies",
          value: function loadMovies() {
            var _this2 = this;

            this.subscription.add(this.dbService.getAllMovies().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (items) {
              return !!items;
            })).subscribe(function (items) {
              _this2.movieList = items;
              console.log('items', items.results);

              if (_this2.isDefault) {
                _this2.displayList = _this2.utilService.sortBy(items.results, _this2.columnSelected, _this2.direction);
                console.log('this.displayList', _this2.displayList);
              }
            }));
          }
        }, {
          key: "loadGenres",
          value: function loadGenres() {
            var _this3 = this;

            this.subscription.add(this.dbService.getGenres().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (items) {
              return !!items;
            })).subscribe(function (items) {
              _this3.genreList = items;
              console.log('genres', items);
            }));
          }
        }, {
          key: "addRemoveToFilter",
          value: function addRemoveToFilter(id) {
            var obj = this.genreIds.find(function (item) {
              return item === id;
            });

            if (obj) {
              var ids = this.genreIds.filter(function (item) {
                return item !== id;
              });
              this.genreIds = [];
              this.genreIds = ids;
            } else {
              this.genreIds.push(id);
            }

            console.log('this.genreIds', this.genreIds);
            this.filterMovieList();
          }
        }, {
          key: "filterMovieList",
          value: function filterMovieList() {
            var _this4 = this;

            var temp = this.utilService.sortBy(this.movieList.results, this.columnSelected, this.direction);

            if (this.genreIds.length > 0) {
              this.displayList = [];
              this.displayList = temp.filter(function (item) {
                return item.genre_ids.some(function (i) {
                  return _this4.genreIds.includes(i);
                });
              });
              this.displayList = this.displayList.filter(function (item) {
                return item.vote_average >= _this4.rate;
              });
            }
          }
        }, {
          key: "filterRate",
          value: function filterRate(rate) {
            this.rate = rate;

            if (this.displayList.length > 0) {
              this.filterMovieList();
              var temp = this.displayList;
              this.displayList = [];
              this.displayList = temp.filter(function (item) {
                return item.vote_average >= rate;
              });
            }
          }
        }, {
          key: "getGenreById",
          value: function getGenreById(id) {
            return this.genreList.find(function (item) {
              return item.id === id;
            }) ? this.genreList.find(function (item) {
              return item.id === id;
            }).name : '';
          }
        }, {
          key: "resetFilter",
          value: function resetFilter() {
            this.displayList = this.utilService.sortBy(this.movieList.results, this.columnSelected, this.direction);
          }
        }, {
          key: "counter",
          value: function counter(i) {
            return new Array(parseInt(i));
          }
        }, {
          key: "floorNumber",
          value: function floorNumber(i) {
            return Math.floor(i);
          }
        }, {
          key: "updateSetting",
          value: function updateSetting(event) {
            this.gridsize = event.value;
          }
        }]);

        return MainComponent;
      }();

      MainComponent.ɵfac = function MainComponent_Factory(t) {
        return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_db_service__WEBPACK_IMPORTED_MODULE_3__["DbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]));
      };

      MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: MainComponent,
        selectors: [["app-main"]],
        decls: 7,
        vars: 2,
        consts: [[1, "gridSizeValue"], ["step", "1", "min", "1", "max", "10", 3, "value", "change"], ["gridsize", ""]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Grid Size (px): ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "b", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-slider", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function MainComponent_Template_mat_slider_change_5_listener($event) {
              return ctx.updateSetting($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_r0.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", _r0);
          }
        },
        directives: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSlider"]],
        styles: [".example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 200px;\n  margin: 10px;\n  border: 1px solid #555;\n}\n\n.card-wrapper[_ngcontent-%COMP%] {\n  font-family: \"Source Sans Pro\", Arial, sans-serif;\n}\n\n.card-wrapper[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 150px;\n  border: 1px solid #c0c0c0;\n  border-radius: 10px;\n  display: inline-block;\n  margin: 20px;\n  min-height: 380px;\n  vertical-align: top;\n}\n\n@media screen and (max-width: 450px) {\n  .card-wrapper[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n\n.card-wrapper[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .genre-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  list-style: none;\n  padding-left: 0px;\n  padding-left: 10px;\n}\n\n.card-wrapper[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .genre-container[_ngcontent-%COMP%]   .genre-card[_ngcontent-%COMP%] {\n  font-size: 1em;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.6);\n  display: inline-block;\n  margin-right: 5px;\n}\n\n.card-wrapper[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .img-card[_ngcontent-%COMP%] {\n  display: inline;\n  width: 150px;\n}\n\n@media screen and (max-width: 450px) {\n  .card-wrapper[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .img-card[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n\n.card-wrapper[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .title-card[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #000;\n  display: flex;\n  align-content: flex-start;\n  padding-left: 10px;\n}\n\n.card-wrapper[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .rate-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  margin-left: 10px;\n}\n\n.card-wrapper[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .rate-container[_ngcontent-%COMP%]   .rate-title[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.card-wrapper[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .rate-container[_ngcontent-%COMP%]   .rate-stars[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksaURBQUE7QUFDSjs7QUFDSTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ1I7O0FBQVE7RUFUSjtJQVVRLFlBQUE7RUFHVjtBQUNGOztBQURRO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFHWjs7QUFEWTtFQUNJLGNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQUdoQjs7QUFBUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBRVo7O0FBRFk7RUFISjtJQUlRLFlBQUE7RUFJZDtBQUNGOztBQURRO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFHWjs7QUFEUTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUFHWjs7QUFGWTtFQUNJLGVBQUE7QUFJaEI7O0FBRlk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQUloQiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcbiAgfVxuXG4uY2FyZC13cmFwcGVyIHtcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4gICAgLmNhcmQtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAzODBweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5nZW5yZS1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7IFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cbiAgICAgICAgICAgIC5nZW5yZS1jYXJkIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmltZy1jYXJkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAudGl0bGUtY2FyZCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAucmF0ZS1jb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgLnJhdGUtdGl0bGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yYXRlLXN0YXJzIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgfVxufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "KeIb":
    /*!***************************************************!*\
      !*** ./src/app/services/request-cache.service.ts ***!
      \***************************************************/

    /*! exports provided: RequestCacheService */

    /***/
    function KeIb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestCacheService", function () {
        return RequestCacheService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var maxAge = 30000;

      var RequestCacheService = /*#__PURE__*/function () {
        function RequestCacheService() {
          _classCallCheck(this, RequestCacheService);

          this.cache = new Map();
        }

        _createClass(RequestCacheService, [{
          key: "get",
          value: function get(req) {
            var url = req.urlWithParams;
            var cached = this.cache.get(url);

            if (!cached) {
              return undefined;
            }

            return cached.response;
          }
        }, {
          key: "put",
          value: function put(req, response) {
            var _this5 = this;

            var url = req.url;
            var newUrl = this.buildCachedUrl(url);
            var entry = {
              url: url,
              response: response,
              lastRead: Date.now()
            };
            this.cache.forEach(function (expiredEntry) {
              var oldUrl = _this5.buildCachedUrl(expiredEntry.url);

              if (newUrl === oldUrl) {
                _this5.cache["delete"](expiredEntry.url);
              }
            });
            this.cache.set(url, entry);
          }
        }, {
          key: "buildCachedUrl",
          value: function buildCachedUrl(url) {
            var temp = url.split('&');
            return "".concat(temp[0]);
          }
        }]);

        return RequestCacheService;
      }();

      RequestCacheService.ɵfac = function RequestCacheService_Factory(t) {
        return new (t || RequestCacheService)();
      };

      RequestCacheService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RequestCacheService,
        factory: RequestCacheService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'movie-listing';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/main/main.component */
      "IURz");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _services_caching_Interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/caching-Interceptor */
      "tF5u");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
          useClass: _services_caching_Interceptor__WEBPACK_IMPORTED_MODULE_6__["CachingInterceptor"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"]]
        });
      })();
      /***/

    },

    /***/
    "ajt+":
    /*!****************************************!*\
      !*** ./src/app/services/db.service.ts ***!
      \****************************************/

    /*! exports provided: DbService */

    /***/
    function ajt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DbService", function () {
        return DbService;
      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var DbService = /*#__PURE__*/function () {
        function DbService(http) {
          _classCallCheck(this, DbService);

          this.http = http;
          this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endPoint;
          this.errorMessage = '';
        }

        _createClass(DbService, [{
          key: "getAllMovies",
          value: function getAllMovies() {
            return this.http.get("".concat(this.api, "/movies")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (items) {
              return !!items;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (items) {
              return items;
            }));
          }
        }, {
          key: "getGenres",
          value: function getGenres() {
            return this.http.get("".concat(this.api, "/genres")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (items) {
              return !!items;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (items) {
              return items;
            }));
          }
        }]);

        return DbService;
      }();

      DbService.ɵfac = function DbService_Factory(t) {
        return new (t || DbService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      DbService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: DbService,
        factory: DbService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "tF5u":
    /*!*************************************************!*\
      !*** ./src/app/services/caching-Interceptor.ts ***!
      \*************************************************/

    /*! exports provided: CachingInterceptor */

    /***/
    function tF5u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CachingInterceptor", function () {
        return CachingInterceptor;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _request_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./request-cache.service */
      "KeIb");

      var CachingInterceptor = /*#__PURE__*/function () {
        function CachingInterceptor(cache) {
          _classCallCheck(this, CachingInterceptor);

          this.cache = cache;
        }

        _createClass(CachingInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            console.log("inside");
            req = req.clone({
              setHeaders: {
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'application/json'
              }
            });
            console.log("req", req);
            var cachedResponse = this.cache.get(req);
            return cachedResponse ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(cachedResponse) : this.sendRequest(req, next, this.cache);
          }
        }, {
          key: "sendRequest",
          value: function sendRequest(req, next, cache) {
            return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) {
              if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                event = event.clone({
                  headers: event.headers.set('Access-Control-Allow-Origin', '*')
                });
                cache.put(req, event);
              }
            }));
          }
        }]);

        return CachingInterceptor;
      }();

      CachingInterceptor.ɵfac = function CachingInterceptor_Factory(t) {
        return new (t || CachingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_request_cache_service__WEBPACK_IMPORTED_MODULE_4__["RequestCacheService"]));
      };

      CachingInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: CachingInterceptor,
        factory: CachingInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/main/main.component */
      "IURz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
      }, {
        path: 'main',
        component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]
      }, {
        path: '**',
        redirectTo: 'main'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map
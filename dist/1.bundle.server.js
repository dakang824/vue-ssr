exports.ids = [1];
exports.modules = {

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_5954443c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(463);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(483);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_5954443c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_5954443c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "0a3700f2"
  
)

component.options.__file = "src/views/home/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5954443c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(464);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5954443c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5954443c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "content" },
    [
      _vm.bannerShow
        ? _c(
            "swiper",
            {
              ref: "mySwiper",
              staticClass: "home_swiper wow fadeIn",
              attrs: { options: _vm.swiperOptions }
            },
            [
              _vm._l(_vm.banners, function(banner) {
                return _c(
                  "swiper-slide",
                  {
                    key: banner.id,
                    staticStyle: { cursor: "pointer" },
                    style: { backgroundImage: "url(" + banner.image + ")" }
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "link",
                        on: {
                          click: function($event) {
                            return _vm.tourl(banner)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "inner" }, [
                          _c("div", { staticClass: "text" }, [
                            _c("img", {
                              attrs: { src: banner.font_image, alt: "" }
                            })
                          ])
                        ])
                      ]
                    )
                  ]
                )
              }),
              _vm._v(" "),
              _c("div", {
                staticClass: "home-pagination swiper-pagination",
                attrs: { slot: "pagination" },
                slot: "pagination"
              })
            ],
            2
          )
        : _vm._e(),
      _vm._ssrNode(
        ' <div id="elaborately" class="section section_1 wow fadeInUp"><div class="inner"><div class="section_title"><img' +
          _vm._ssrAttr("src", __webpack_require__(465)) +
          ' alt></div> <div class="list_box"><div data-wow-delay=".1s" class="item wow fadeInUp"><div class="bg"><div class="icon"><i class="iconfont iconguanli"></i></div> <div class="line"></div> <div class="title">基础系统班</div> <a href="javascript:;" class="view">查看课程</a></div></div> <div data-wow-delay=".2s" class="item wow fadeInUp"><div class="bg"><div class="icon"><i class="iconfont iconzhengzhi"></i></div> <div class="line"></div> <div class="title">钻石精讲班</div> <a href="javascript:;" class="view">查看课程</a></div></div> <div data-wow-delay=".3s" class="item wow fadeInUp"><div class="bg"><div class="icon"><i class="iconfont iconzhongxiyijieheweichuangbaxiangliaofa"></i></div> <div class="line"></div> <div class="title">超钻密训班</div> <a href="javascript:;" class="view">查看课程</a></div></div> <div data-wow-delay=".4s" class="item wow fadeInUp"><div class="bg"><div class="icon"><i class="iconfont iconjiaoyu"></i></div> <div class="line"></div> <div class="title">提前面试班</div> <a href="javascript:;" class="view">查看课程</a></div></div></div></div></div> '
      ),
      _vm._ssrNode(
        '<div id="optimization" class="section section_2">',
        "</div>",
        [
          _vm._ssrNode(
            '<div class="inner">',
            "</div>",
            [
              _vm._ssrNode(
                '<div class="section_title wow fadeInUp"><img' +
                  _vm._ssrAttr("src", __webpack_require__(466)) +
                  " alt></div> "
              ),
              _vm._ssrNode(
                '<div class="list_box">',
                "</div>",
                _vm._l(_vm.free_course, function(item, index) {
                  return _vm._ssrNode(
                    "<div" +
                      _vm._ssrAttr(
                        "data-wow-delay",
                        ((index + 1) / 10).toFixed(1) + "s"
                      ) +
                      ' class="item wow fadeInUp">',
                    "</div>",
                    [
                      _vm._ssrNode(
                        '<div class="bg">',
                        "</div>",
                        [
                          _vm._ssrNode(
                            '<div class="img_box"><img' +
                              _vm._ssrAttr("src", item.images) +
                              ' alt></div> <div class="text_box"><div class="title"><span class="tag">' +
                              _vm._ssrEscape(_vm._s(item.category_name)) +
                              "</span>" +
                              _vm._ssrEscape(
                                _vm._s(item.title) + "\n              "
                              ) +
                              "</div> " +
                              _vm._ssrList(item.teacher, function(el) {
                                return (
                                  '<div class="speaker"><div class="img"><img' +
                                  _vm._ssrAttr("src", el.avatar) +
                                  ' alt></div> <div class="name">' +
                                  _vm._ssrEscape(_vm._s(el.name)) +
                                  '</div> <div class="tag">' +
                                  _vm._ssrEscape(
                                    "主讲：" + _vm._s(el.subject)
                                  ) +
                                  "</div></div>"
                                )
                              }) +
                              '</div> <div class="bottom"><div class="price"><span class="old">' +
                              _vm._ssrEscape(
                                "￥" + _vm._s(item.original_price)
                              ) +
                              '</span> <span class="now">' +
                              _vm._ssrEscape(
                                _vm._s(item.price == 0 ? "免费" : item.price)
                              ) +
                              '</span></div> <div class="num">' +
                              _vm._ssrEscape(
                                "已有" + _vm._s(item.buy_num) + "人购买"
                              ) +
                              "</div></div> "
                          ),
                          _vm._ssrNode(
                            '<div class="hover_text">',
                            "</div>",
                            [
                              _vm._ssrNode(
                                '<div class="text">' +
                                  _vm._ssrEscape(
                                    "\n                " +
                                      _vm._s(item.description) +
                                      "\n              "
                                  ) +
                                  "</div> "
                              ),
                              item.is_receive == 0
                                ? _c(
                                    "el-button",
                                    {
                                      staticClass: "btn",
                                      on: {
                                        click: function($event) {
                                          return _vm.draw(
                                            item.id,
                                            item.is_receive
                                          )
                                        }
                                      }
                                    },
                                    [_vm._v("立即领取")]
                                  )
                                : _vm._e(),
                              _vm._ssrNode(" "),
                              item.is_receive == 1
                                ? _c(
                                    "el-button",
                                    {
                                      staticClass: "btn",
                                      on: {
                                        click: function($event) {
                                          return _vm.playlesson(
                                            item.id,
                                            item.is_receive
                                          )
                                        }
                                      }
                                    },
                                    [_vm._v("立即播放")]
                                  )
                                : _vm._e()
                            ],
                            2
                          )
                        ],
                        2
                      )
                    ]
                  )
                }),
                0
              ),
              _vm._ssrNode(" "),
              _c(
                "el-dialog",
                {
                  attrs: { title: "免费领取", visible: _vm.dialogFormVisible },
                  on: {
                    "update:visible": function($event) {
                      _vm.dialogFormVisible = $event
                    }
                  }
                },
                [
                  _c(
                    "el-form",
                    { attrs: { model: _vm.form } },
                    [
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            label: "您的名字",
                            "label-width": _vm.formLabelWidth
                          }
                        },
                        [
                          _c("el-input", {
                            attrs: {
                              autocomplete: "off",
                              placeholder: "请输入您的姓名"
                            },
                            model: {
                              value: _vm.form.name,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "name", $$v)
                              },
                              expression: "form.name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            label: "电话号码",
                            "label-width": _vm.formLabelWidth
                          }
                        },
                        [
                          _c("el-input", {
                            attrs: {
                              autocomplete: "off",
                              placeholder: "请输入您的电话号码"
                            },
                            model: {
                              value: _vm.form.phone,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "phone", $$v)
                              },
                              expression: "form.phone"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            label: "电子邮箱",
                            "label-width": _vm.formLabelWidth
                          }
                        },
                        [
                          _c("el-input", {
                            attrs: {
                              autocomplete: "off",
                              placeholder: "请输入您的电子邮箱（非必填）"
                            },
                            model: {
                              value: _vm.form.email,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "email", $$v)
                              },
                              expression: "form.email"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            label: "QQ号码",
                            "label-width": _vm.formLabelWidth
                          }
                        },
                        [
                          _c("el-input", {
                            attrs: {
                              autocomplete: "off",
                              placeholder: "请输入您的QQ号码（非必填）"
                            },
                            model: {
                              value: _vm.form.qq,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "qq", $$v)
                              },
                              expression: "form.qq"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            label: "留言内容",
                            "label-width": _vm.formLabelWidth
                          }
                        },
                        [
                          _c("el-input", {
                            attrs: {
                              type: "textarea",
                              maxlength: "200",
                              "show-word-limit": "",
                              placeholder: "请输入您的留言内容（非必填）"
                            },
                            model: {
                              value: _vm.form.content,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "content", $$v)
                              },
                              expression: "form.content"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "dialog-footer",
                      attrs: { slot: "footer" },
                      slot: "footer"
                    },
                    [
                      _c(
                        "el-button",
                        {
                          on: {
                            click: function($event) {
                              _vm.dialogFormVisible = false
                            }
                          }
                        },
                        [_vm._v("取 消")]
                      ),
                      _vm._v(" "),
                      _c(
                        "el-button",
                        {
                          staticClass: "enter_btn",
                          attrs: { type: "primary" },
                          on: {
                            click: function($event) {
                              return _vm.receive()
                            }
                          }
                        },
                        [_vm._v("确 定")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            2
          )
        ]
      ),
      _vm._ssrNode(
        ' <div id="discipline" class="section section_3"><div class="inner"><div class="section_title wow fadeInUp"><img' +
          _vm._ssrAttr("src", __webpack_require__(467)) +
          ' alt></div> <div data-wow-delay=".1s" class="text_box wow fadeInUp">\n        拥有一支思想创新，锐意进取的团队，勇担时代使命，持续创造新的市场，秉承不忘初心，开发优质课程，推进品质服务，努力打造服务、品质始终如一的教育品牌。\n      </div> <div data-wow-delay=".2s" class="list_box wow fadeInUp"><div class="item"><div class="icon"><img' +
          _vm._ssrAttr("src", __webpack_require__(468)) +
          ' alt></div> <div class="num_box"><div class="num"><span' +
          _vm._ssrAttr("data-num", _vm.site_info.senior_consultant) +
          ">" +
          _vm._ssrEscape(_vm._s(_vm.site_info.senior_consultant)) +
          '</span>课\n            </div> <div class="text">高级顾问团队打造</div></div></div> <div class="item"><div class="icon"><img' +
          _vm._ssrAttr("src", __webpack_require__(469)) +
          ' alt></div> <div class="num_box"><div class="num"><span' +
          _vm._ssrAttr("data-num", _vm.site_info.teacher_resources) +
          ">" +
          _vm._ssrEscape(_vm._s(_vm.site_info.teacher_resources)) +
          '</span>K\n            </div> <div class="text">专业教师资源</div></div></div> <div class="item"><div class="icon"><img' +
          _vm._ssrAttr("src", __webpack_require__(470)) +
          ' alt></div> <div class="num_box"><div class="num"><span' +
          _vm._ssrAttr("data-num", _vm.site_info.course_num) +
          ">" +
          _vm._ssrEscape(_vm._s(_vm.site_info.course_num)) +
          '</span>个\n            </div> <div class="text">网络课程随时随地的听课</div></div></div></div></div></div> <div id="goodness" class="section section_4"><div class="inner"><div class="section_title wow fadeInUp"><img' +
          _vm._ssrAttr("src", __webpack_require__(471)) +
          ' alt></div> <div class="list_box"><div class="line"><img' +
          _vm._ssrAttr("src", __webpack_require__(472)) +
          ' alt></div> <div class="row_item"><div data-wow-delay=".1s" class="item wow slideInDown"><img' +
          _vm._ssrAttr("src", __webpack_require__(473)) +
          ' alt></div> <div data-wow-delay=".3s" class="item wow slideInDown"><img' +
          _vm._ssrAttr("src", __webpack_require__(474)) +
          ' alt></div> <div data-wow-delay=".5s" class="item wow slideInDown"><img' +
          _vm._ssrAttr("src", __webpack_require__(475)) +
          ' alt></div></div> <div class="row_item"><div data-wow-delay=".2s" class="item wow slideInUp"><img' +
          _vm._ssrAttr("src", __webpack_require__(476)) +
          ' alt></div> <div data-wow-delay=".4s" class="item wow slideInUp"><img' +
          _vm._ssrAttr("src", __webpack_require__(477)) +
          ' alt></div> <div data-wow-delay=".6s" class="item wow slideInUp"><img' +
          _vm._ssrAttr("src", __webpack_require__(478)) +
          " alt></div></div></div></div></div> "
      ),
      _vm._ssrNode('<div id="teacher" class="section section_5">', "</div>", [
        _vm._ssrNode(
          '<div class="inner">',
          "</div>",
          [
            _vm._ssrNode(
              '<div class="section_title wow fadeInUp"><img' +
                _vm._ssrAttr("src", __webpack_require__(479)) +
                " alt></div> "
            ),
            _vm._ssrNode(
              '<div data-wow-delay=".2s" class="seciton_5_slider wow fadeInUp">',
              "</div>",
              [
                _c(
                  "swiper",
                  {
                    staticClass: "fiveSwiper wow fadeIn",
                    attrs: { options: _vm.fiveSliderOption }
                  },
                  _vm._l(_vm.teachers, function(item) {
                    return _c("swiper-slide", { key: item.id }, [
                      _c("div", { staticClass: "bg" }, [
                        _c("div", { staticClass: "img" }, [
                          _c("img", { attrs: { src: item.avatar, alt: "" } })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "name" }, [
                          _vm._v(_vm._s(item.name))
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "tag" }, [
                          _vm._v(_vm._s(item.subject))
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "text" }, [
                          _vm._v(
                            "\n                " +
                              _vm._s(item.content) +
                              "\n              "
                          )
                        ])
                      ])
                    ])
                  }),
                  1
                ),
                _vm._ssrNode(
                  ' <div class="swiper-button-next"></div> <div class="swiper-button-prev"></div>'
                )
              ],
              2
            )
          ],
          2
        )
      ]),
      _vm._ssrNode(
        ' <div class="section section_6"><div class="inner"><div class="section_title wow fadeInUp"><img' +
          _vm._ssrAttr("src", __webpack_require__(480)) +
          ' alt></div> <div class="img_box"><img data-wow-delay=".1s"' +
          _vm._ssrAttr("src", __webpack_require__(481)) +
          ' alt class="img wow zoomIn"> <div class="img_center"><img' +
          _vm._ssrAttr("src", __webpack_require__(482)) +
          " alt></div></div></div></div> "
      ),
      _c("go-top"),
      _vm._ssrNode(" "),
      _c("pendant", { attrs: { site: _vm.site } })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_1_title.c32d2da.png";

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_2_title.e9abd52.png";

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_3_title.7c969a2.png";

/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_3_icon_03.0776f87.png";

/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_3_icon_01.c35f189.png";

/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_3_icon_02.d16499e.png";

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_4_title.16799ed.png";

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_4_img_line.ca29759.png";

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_4_img_01.72cdf95.png";

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_4_img_02.9bc2b0a.png";

/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_4_img_03.4fb9227.png";

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_4_img_04.0960b12.png";

/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_4_img_05.5da91d6.png";

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_4_img_06.9ae0f7a.png";

/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_5_title.1fef701.png";

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_6_title.075204f.png";

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_6_img_01.49f9aad.png";

/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_6_img.c365560.jpg";

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(484);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(485);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(486);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "home",
  inject: ["reload"],
  asyncData: function () {
    var _asyncData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(_ref) {
      var store;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              store = _ref.store;
              _context.next = 3;
              return store.dispatch("home/getBanner");

            case 3:
              _context.next = 5;
              return store.dispatch("home/getTeachers");

            case 5:
              _context.next = 7;
              return store.dispatch("home/free_course");

            case 7:
              _context.next = 9;
              return store.dispatch("home/category");

            case 9:
              return _context.abrupt("return", store.dispatch("home/getSiteInfo"));

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function asyncData(_x) {
      return _asyncData.apply(this, arguments);
    }

    return asyncData;
  }(),
  data: function data() {
    var that = this;
    return {
      dialogFormVisible: false,
      form: {
        name: "",
        phone: "",
        email: "",
        qq: "",
        content: "",
        delivery: false
      },
      formLabelWidth: "120px",
      course_id: 0,
      swiperOptions: {
        autoplay: true,
        loop: true,
        pagination: {
          el: ".home-pagination",
          clickable: true
        }
      },
      fiveSliderOption: {
        slidesPerView: "auto",
        loopedSlides: 6,
        autoplay: true,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: ".seciton_5_slider .swiper-button-next",
          prevEl: ".seciton_5_slider .swiper-button-prev"
        }
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapState"])({
    banners: function banners(state) {
      return state.home.banners;
    },
    bannerShow: function bannerShow(state) {
      return state.home.banner;
    },
    category: function category(state) {
      return state.home.category;
    },
    free_course: function free_course(state) {
      return state.home.free_course;
    },
    teachers: function teachers(state) {
      return state.home.teachers;
    },
    site: function site(state) {
      return state.home.site;
    },
    site_info: function site_info(state) {
      return state.home.site_info;
    }
  })),
  mounted: function mounted() {
    var _this = this;

    document.title = "欢迎来到北京中盛润德";

    if (document.documentElement.clientWidth <= 768) {
      this.formLabelWidth = "80px";
    }

    function dynamicNum(dom) {
      if (jquery__WEBPACK_IMPORTED_MODULE_3___default()(dom).hasClass("animated") || jquery__WEBPACK_IMPORTED_MODULE_3___default()(window).width() <= 767) {
        dom.find(".item").each(function (i, e) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_3___default()(e).hasClass("active")) {
            jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).addClass("active");
            var count = 0;
            var result = jquery__WEBPACK_IMPORTED_MODULE_3___default()(e).find(".num span").attr("data-num");
            var pre = result / 60;
            var number = 0;
            var setDynamic = setInterval(function () {
              number += pre;
              count++;
              jquery__WEBPACK_IMPORTED_MODULE_3___default()(e).find(".num span").text(parseInt(number));

              if (count >= 60) {
                jquery__WEBPACK_IMPORTED_MODULE_3___default()(e).find(".num span").text(result);
                clearInterval(setDynamic);
              }
            }, 20);
          }
        });
      }
    }

    setTimeout(function () {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()(window).scroll(function () {
        dynamicNum(jquery__WEBPACK_IMPORTED_MODULE_3___default()(".section_3 .list_box"));
      });

      if (_this.$route.query.aurl) {
        var top = jquery__WEBPACK_IMPORTED_MODULE_3___default()("#" + _this.$route.query.aurl).offset().top;
        jquery__WEBPACK_IMPORTED_MODULE_3___default()("html,body").animate({
          scrollTop: top
        }, 500);
      }
    }, 200);
  },
  methods: {
    tourl: function tourl(e) {
      if (e.jump_type == 3) {
        window.open(e.url, "_blank");
      }
    },
    seeclass: function seeclass(id) {
      sessionStorage.setItem("navId", 2);
      var routeUrl = this.$router.resolve({
        path: "/lesson",
        query: {
          id: id
        }
      });
      window.open(routeUrl.href, "_blank");
      this.reload();
    },
    playlesson: function playlesson(id) {
      this.$router.push({
        path: "/video",
        query: {
          id: id
        }
      });
    },
    routerLink: function routerLink() {
      var routeUrl = this.$router.resolve({
        path: "/share",
        query: {
          id: 96
        }
      });
      window.open(routeUrl.href, "_blank");
    },
    receive: function receive() {
      var _this2 = this;

      var _this$form = this.form,
          name = _this$form.name,
          phone = _this$form.phone,
          email = _this$form.email,
          qq = _this$form.qq,
          content = _this$form.content;

      if (!name.trim()) {
        this.$message({
          message: "名字不能为空",
          type: "warning"
        });
      } else if (!phone.trim()) {
        this.$message({
          message: "手机号不能为空",
          type: "warning"
        });
      } else {
        this.dialogFormVisible = false;
        var token = localStorage.getItem("token");

        if (token) {
          this.post("course/receive", {
            course_id: this.course_id,
            name: name,
            phone: phone,
            email: email,
            qq: qq,
            content: content
          }).then(function (res, error) {
            if (res.code == 1) {
              _this2.$message({
                message: "领取成功",
                type: "success"
              });

              _this2.$router.replace({
                name: "User"
              });
            } else {
              _this2.$message.error(res.msg);
            }
          });
        } else {
          this.$message.error("请进行登录");
          this.$router.replace({
            name: "Login"
          });
        }
      }
    },
    draw: function draw(id, is_receive) {
      if (is_receive == 0) {
        this.dialogFormVisible = true;
      }

      this.course_id = id;
    }
  }
});

/***/ })

};;
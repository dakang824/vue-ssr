(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_5954443c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(440);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(460);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_5954443c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_5954443c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/home/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5954443c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(441);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5954443c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5954443c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 441:
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
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "section section_1 wow fadeInUp",
          attrs: { id: "elaborately" }
        },
        [
          _c("div", { staticClass: "inner" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "list_box" }, [
              _c(
                "div",
                {
                  staticClass: "item wow fadeInUp",
                  attrs: { "data-wow-delay": ".1s" }
                },
                [
                  _c("div", { staticClass: "bg" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("div", { staticClass: "line" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "title" }, [_vm._v("基础系统班")]),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "view",
                        attrs: { href: "javascript:;" },
                        on: {
                          click: function($event) {
                            return _vm.seeclass(4)
                          }
                        }
                      },
                      [_vm._v("查看课程")]
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "item wow fadeInUp",
                  attrs: { "data-wow-delay": ".2s" }
                },
                [
                  _c("div", { staticClass: "bg" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("div", { staticClass: "line" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "title" }, [_vm._v("钻石精讲班")]),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "view",
                        attrs: { href: "javascript:;" },
                        on: {
                          click: function($event) {
                            return _vm.seeclass(2)
                          }
                        }
                      },
                      [_vm._v("查看课程")]
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "item wow fadeInUp",
                  attrs: { "data-wow-delay": ".3s" }
                },
                [
                  _c("div", { staticClass: "bg" }, [
                    _vm._m(3),
                    _vm._v(" "),
                    _c("div", { staticClass: "line" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "title" }, [_vm._v("超钻密训班")]),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "view",
                        attrs: { href: "javascript:;" },
                        on: {
                          click: function($event) {
                            return _vm.seeclass(3)
                          }
                        }
                      },
                      [_vm._v("查看课程")]
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "item wow fadeInUp",
                  attrs: { "data-wow-delay": ".4s" }
                },
                [
                  _c("div", { staticClass: "bg" }, [
                    _vm._m(4),
                    _vm._v(" "),
                    _c("div", { staticClass: "line" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "title" }, [_vm._v("提前面试班")]),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "view",
                        attrs: { href: "javascript:;" },
                        on: {
                          click: function($event) {
                            return _vm.seeclass(1)
                          }
                        }
                      },
                      [_vm._v("查看课程")]
                    )
                  ])
                ]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "section section_2", attrs: { id: "optimization" } },
        [
          _c(
            "div",
            { staticClass: "inner" },
            [
              _vm._m(5),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "list_box" },
                _vm._l(_vm.free_course, function(item, index) {
                  return _c(
                    "div",
                    {
                      key: item.id,
                      staticClass: "item wow fadeInUp",
                      attrs: {
                        "data-wow-delay": ((index + 1) / 10).toFixed(1) + "s"
                      }
                    },
                    [
                      _c("div", { staticClass: "bg" }, [
                        _c("div", { staticClass: "img_box" }, [
                          _c("img", { attrs: { src: item.images, alt: "" } })
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "text_box" },
                          [
                            _c("div", { staticClass: "title" }, [
                              _c("span", { staticClass: "tag" }, [
                                _vm._v(_vm._s(item.category_name))
                              ]),
                              _vm._v(_vm._s(item.title) + "\n              ")
                            ]),
                            _vm._v(" "),
                            _vm._l(item.teacher, function(el) {
                              return _c(
                                "div",
                                { key: el.id, staticClass: "speaker" },
                                [
                                  _c("div", { staticClass: "img" }, [
                                    _c("img", {
                                      attrs: { src: el.avatar, alt: "" }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "name" }, [
                                    _vm._v(_vm._s(el.name))
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "tag" }, [
                                    _vm._v("主讲：" + _vm._s(el.subject))
                                  ])
                                ]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "bottom" }, [
                          _c("div", { staticClass: "price" }, [
                            _c("span", { staticClass: "old" }, [
                              _vm._v("￥" + _vm._s(item.original_price))
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "now" }, [
                              _vm._v(
                                _vm._s(item.price == 0 ? "免费" : item.price)
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "num" }, [
                            _vm._v("已有" + _vm._s(item.buy_num) + "人购买")
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "hover_text" },
                          [
                            _c("div", { staticClass: "text" }, [
                              _vm._v(
                                "\n                " +
                                  _vm._s(item.description) +
                                  "\n              "
                              )
                            ]),
                            _vm._v(" "),
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
                            _vm._v(" "),
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
                          1
                        )
                      ])
                    ]
                  )
                }),
                0
              ),
              _vm._v(" "),
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
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "section section_3", attrs: { id: "discipline" } },
        [
          _c("div", { staticClass: "inner" }, [
            _vm._m(6),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "text_box wow fadeInUp",
                attrs: { "data-wow-delay": ".1s" }
              },
              [
                _vm._v(
                  "\n        拥有一支思想创新，锐意进取的团队，勇担时代使命，持续创造新的市场，秉承不忘初心，开发优质课程，推进品质服务，努力打造服务、品质始终如一的教育品牌。\n      "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "list_box wow fadeInUp",
                attrs: { "data-wow-delay": ".2s" }
              },
              [
                _c("div", { staticClass: "item" }, [
                  _vm._m(7),
                  _vm._v(" "),
                  _c("div", { staticClass: "num_box" }, [
                    _c("div", { staticClass: "num" }, [
                      _c(
                        "span",
                        {
                          attrs: { "data-num": _vm.site_info.senior_consultant }
                        },
                        [_vm._v(_vm._s(_vm.site_info.senior_consultant))]
                      ),
                      _vm._v("课\n            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "text" }, [
                      _vm._v("高级顾问团队打造")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "item" }, [
                  _vm._m(8),
                  _vm._v(" "),
                  _c("div", { staticClass: "num_box" }, [
                    _c("div", { staticClass: "num" }, [
                      _c(
                        "span",
                        {
                          attrs: { "data-num": _vm.site_info.teacher_resources }
                        },
                        [_vm._v(_vm._s(_vm.site_info.teacher_resources))]
                      ),
                      _vm._v("K\n            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "text" }, [_vm._v("专业教师资源")])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "item" }, [
                  _vm._m(9),
                  _vm._v(" "),
                  _c("div", { staticClass: "num_box" }, [
                    _c("div", { staticClass: "num" }, [
                      _c(
                        "span",
                        { attrs: { "data-num": _vm.site_info.course_num } },
                        [_vm._v(_vm._s(_vm.site_info.course_num))]
                      ),
                      _vm._v("个\n            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "text" }, [
                      _vm._v("网络课程随时随地的听课")
                    ])
                  ])
                ])
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _vm._m(10),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "section section_5", attrs: { id: "teacher" } },
        [
          _c("div", { staticClass: "inner" }, [
            _vm._m(11),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "seciton_5_slider wow fadeInUp",
                attrs: { "data-wow-delay": ".2s" }
              },
              [
                _vm.show
                  ? _c(
                      "swiper",
                      {
                        staticClass: "fiveSwiper wow fadeIn",
                        attrs: { options: _vm.fiveSliderOption }
                      },
                      _vm._l(_vm.teachers, function(item) {
                        return _c("swiper-slide", { key: item.id }, [
                          _c("div", { staticClass: "bg" }, [
                            _c("div", { staticClass: "img" }, [
                              _c("img", {
                                attrs: { src: item.avatar, alt: "" }
                              })
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
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "swiper-button-next" }),
                _vm._v(" "),
                _c("div", { staticClass: "swiper-button-prev" })
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _vm._m(12),
      _vm._v(" "),
      _c("go-top"),
      _vm._v(" "),
      _c("pendant", { attrs: { site: _vm.site } })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section_title" }, [
      _c("img", {
        attrs: { src: __webpack_require__(442), alt: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon" }, [
      _c("i", { staticClass: "iconfont iconguanli" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon" }, [
      _c("i", { staticClass: "iconfont iconzhengzhi" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon" }, [
      _c("i", {
        staticClass: "iconfont iconzhongxiyijieheweichuangbaxiangliaofa"
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon" }, [
      _c("i", { staticClass: "iconfont iconjiaoyu" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section_title wow fadeInUp" }, [
      _c("img", {
        attrs: { src: __webpack_require__(443), alt: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section_title wow fadeInUp" }, [
      _c("img", {
        attrs: { src: __webpack_require__(444), alt: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon" }, [
      _c("img", {
        attrs: { src: __webpack_require__(445), alt: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon" }, [
      _c("img", {
        attrs: { src: __webpack_require__(446), alt: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon" }, [
      _c("img", {
        attrs: { src: __webpack_require__(447), alt: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "section section_4", attrs: { id: "goodness" } },
      [
        _c("div", { staticClass: "inner" }, [
          _c("div", { staticClass: "section_title wow fadeInUp" }, [
            _c("img", {
              attrs: { src: __webpack_require__(448), alt: "" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "list_box" }, [
            _c("div", { staticClass: "line" }, [
              _c("img", {
                attrs: {
                  src: __webpack_require__(449),
                  alt: ""
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row_item" }, [
              _c(
                "div",
                {
                  staticClass: "item wow slideInDown",
                  attrs: { "data-wow-delay": ".1s" }
                },
                [
                  _c("img", {
                    attrs: {
                      src: __webpack_require__(450),
                      alt: ""
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "item wow slideInDown",
                  attrs: { "data-wow-delay": ".3s" }
                },
                [
                  _c("img", {
                    attrs: {
                      src: __webpack_require__(451),
                      alt: ""
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "item wow slideInDown",
                  attrs: { "data-wow-delay": ".5s" }
                },
                [
                  _c("img", {
                    attrs: {
                      src: __webpack_require__(452),
                      alt: ""
                    }
                  })
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row_item" }, [
              _c(
                "div",
                {
                  staticClass: "item wow slideInUp",
                  attrs: { "data-wow-delay": ".2s" }
                },
                [
                  _c("img", {
                    attrs: {
                      src: __webpack_require__(453),
                      alt: ""
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "item wow slideInUp",
                  attrs: { "data-wow-delay": ".4s" }
                },
                [
                  _c("img", {
                    attrs: {
                      src: __webpack_require__(454),
                      alt: ""
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "item wow slideInUp",
                  attrs: { "data-wow-delay": ".6s" }
                },
                [
                  _c("img", {
                    attrs: {
                      src: __webpack_require__(455),
                      alt: ""
                    }
                  })
                ]
              )
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section_title wow fadeInUp" }, [
      _c("img", {
        attrs: { src: __webpack_require__(456), alt: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section section_6" }, [
      _c("div", { staticClass: "inner" }, [
        _c("div", { staticClass: "section_title wow fadeInUp" }, [
          _c("img", {
            attrs: { src: __webpack_require__(457), alt: "" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "img_box" }, [
          _c("img", {
            staticClass: "img wow zoomIn",
            attrs: {
              "data-wow-delay": ".1s",
              src: __webpack_require__(458),
              alt: ""
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "img_center" }, [
            _c("img", {
              attrs: { src: __webpack_require__(459), alt: "" }
            })
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_1_title.c32d2da.png";

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_2_title.e9abd52.png";

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_3_title.7c969a2.png";

/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_3_icon_03.0776f87.png";

/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_3_icon_01.c35f189.png";

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_3_icon_02.d16499e.png";

/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_4_title.16799ed.png";

/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_4_img_line.ca29759.png";

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_4_img_01.72cdf95.png";

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_4_img_02.9bc2b0a.png";

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_4_img_03.4fb9227.png";

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_4_img_04.0960b12.png";

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_4_img_05.5da91d6.png";

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_4_img_06.9ae0f7a.png";

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_5_title.1fef701.png";

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_6_title.075204f.png";

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_6_img_01.49f9aad.png";

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/section_6_img.c365560.jpg";

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(461);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(462);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(463);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);


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
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "home",
  inject: ['reload'],
  asyncData: function asyncData(_ref) {
    var store = _ref.store;
    return store.dispatch("home/getBanner");
  },
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
      teachers: [],
      free_course: [],
      category: [],
      site: {},
      site_info: {},
      course_id: 0,
      show: false,
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
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])({
    banners: function banners(state) {
      return state.home.banners;
    },
    bannerShow: function bannerShow(state) {
      return state.home.banner;
    }
  })),
  mounted: function mounted() {
    var _this = this;

    document.title = "欢迎来到北京中盛润德";

    if (document.documentElement.clientWidth <= 768) {
      this.formLabelWidth = "80px";
    }

    function dynamicNum(dom) {
      if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(dom).hasClass("animated") || jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).width() <= 767) {
        dom.find(".item").each(function (i, e) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_1___default()(e).hasClass("active")) {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass("active");
            var count = 0;
            var result = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e).find(".num span").attr("data-num");
            var pre = result / 60;
            var number = 0;
            var setDynamic = setInterval(function () {
              number += pre;
              count++;
              jquery__WEBPACK_IMPORTED_MODULE_1___default()(e).find(".num span").text(parseInt(number));

              if (count >= 60) {
                jquery__WEBPACK_IMPORTED_MODULE_1___default()(e).find(".num span").text(result);
                clearInterval(setDynamic);
              }
            }, 20);
          }
        });
      }
    }

    setTimeout(function () {
      if (_this.$route.query.aurl) {
        var top = jquery__WEBPACK_IMPORTED_MODULE_1___default()("#" + _this.$route.query.aurl).offset().top;
        jquery__WEBPACK_IMPORTED_MODULE_1___default()("html,body").animate({
          scrollTop: top
        }, 500);
      }
    }, 200);
    this.get("home/category", false).then(function (res) {
      _this.category = res.data;
      setTimeout(function () {
        if (_this.$route.query.aurl) {
          var top = jquery__WEBPACK_IMPORTED_MODULE_1___default()("#" + _this.$route.query.aurl).offset().top;
          jquery__WEBPACK_IMPORTED_MODULE_1___default()("html,body").animate({
            scrollTop: top
          }, 500);
        }
      }, 200);
    });
    this.get("home/free_course", false).then(function (res) {
      _this.free_course = res.data;
      setTimeout(function () {
        if (_this.$route.query.aurl) {
          var top = jquery__WEBPACK_IMPORTED_MODULE_1___default()("#" + _this.$route.query.aurl).offset().top;
          jquery__WEBPACK_IMPORTED_MODULE_1___default()("html,body").animate({
            scrollTop: top
          }, 500);
        }
      }, 200);
    });
    this.get("teacher/list", false).then(function (res) {
      _this.teachers = res.data;
      _this.show = true;
      setTimeout(function () {
        if (_this.$route.query.aurl) {
          var top = jquery__WEBPACK_IMPORTED_MODULE_1___default()("#" + _this.$route.query.aurl).offset().top;
          jquery__WEBPACK_IMPORTED_MODULE_1___default()("html,body").animate({
            scrollTop: top
          }, 500);
        }
      }, 200);
    });
    this.get("site_info", false).then(function (res) {
      _this.site = res.data;
      _this.site_info = res.data.course;
      setTimeout(function () {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).scroll(function () {
          dynamicNum(jquery__WEBPACK_IMPORTED_MODULE_1___default()(".section_3 .list_box"));
        });

        if (_this.$route.query.aurl) {
          var top = jquery__WEBPACK_IMPORTED_MODULE_1___default()("#" + _this.$route.query.aurl).offset().top;
          jquery__WEBPACK_IMPORTED_MODULE_1___default()("html,body").animate({
            scrollTop: top
          }, 500);
        }
      }, 200);
    });
    setTimeout(function () {
      if (_this.$route.query.aurl) {
        var top = jquery__WEBPACK_IMPORTED_MODULE_1___default()("#" + _this.$route.query.aurl).offset().top;
        jquery__WEBPACK_IMPORTED_MODULE_1___default()("html,body").animate({
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

}]);
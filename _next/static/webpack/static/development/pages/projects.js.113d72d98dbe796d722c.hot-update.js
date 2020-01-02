webpackHotUpdate("static\\development\\pages\\projects.js",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _components_ExternalLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ExternalLink */ "./components/ExternalLink.js");
/* harmony import */ var _data_projects_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/projects.json */ "./data/projects.json");
var _data_projects_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/projects.json */ "./data/projects.json", 1);
/* harmony import */ var _data_languages_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data/languages.json */ "./data/languages.json");
var _data_languages_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/languages.json */ "./data/languages.json", 1);
/* harmony import */ var _data_global_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/global.json */ "./data/global.json");
var _data_global_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/global.json */ "./data/global.json", 1);





var _jsxFileName = "C:\\Users\\mattm\\Desktop\\Coding\\Projects\\react-website\\pages\\projects.js";








var ProjectLangIcon = function ProjectLangIcon(props) {
  var lang = _data_languages_json__WEBPACK_IMPORTED_MODULE_10__[props.type][props.name];
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
    src: _data_global_json__WEBPACK_IMPORTED_MODULE_11__.paths.img + props.type + "/" + lang.img,
    className: "projectIcon",
    title: lang.displayName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  });
};

var ProjectCard = function ProjectCard(props) {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "projectCard" + (props.active ? " projectActive" : ""),
    onClick: props.onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "projectTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, props.project.title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
    className: "projectImg",
    src: _data_global_json__WEBPACK_IMPORTED_MODULE_11__.paths.img + "projects/" + props.project.img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "projectDesc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, props.project.desc, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "projectInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "projectInfoLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Languages:", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), props.project.languages.map(function (language) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ProjectLangIcon, {
      type: "languages",
      name: language,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "projectInfoLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Frameworks:", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), props.project.frameworks.map(function (framework) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ProjectLangIcon, {
      type: "frameworks",
      name: framework,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    });
  }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "projectButtonContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_ExternalLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "projectButton",
    href: props.project.demo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "VIEW"), props.project.source == "" ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "projectButton projectButtonDisabled",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "CODE") : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_ExternalLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "projectButton",
    href: props.project.source,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "CODE"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "projectSeparator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }));
};

var ProjectContainer =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ProjectContainer, _React$Component);

  function ProjectContainer(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProjectContainer);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProjectContainer).call(this, props));
    _this.state = {
      activeProject: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProjectContainer, [{
    key: "handleClick",
    value: function handleClick(title) {
      if (window.innerWidth > _data_global_json__WEBPACK_IMPORTED_MODULE_11__.constants.mobileWidth) {
        this.setState({
          activeProject: title
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, this.state.activeProject ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "projectFade",
        onClick: function onClick() {
          _this2.handleClick(null);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }) : "", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "projectContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, _data_projects_json__WEBPACK_IMPORTED_MODULE_9__.map(function (project) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ProjectCard, {
          project: project,
          active: project.title == _this2.state.activeProject,
          key: project.title,
          onClick: function onClick() {
            _this2.handleClick(project.title);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        });
      })));
    }
  }]);

  return ProjectContainer;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var Projects = function Projects() {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    page: "Projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ProjectContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "3453486974",
    dynamic: [_data_global_json__WEBPACK_IMPORTED_MODULE_11__.colors.accentDark, _data_global_json__WEBPACK_IMPORTED_MODULE_11__.colors.textLight, _data_global_json__WEBPACK_IMPORTED_MODULE_11__.colors.accentLight, _data_global_json__WEBPACK_IMPORTED_MODULE_11__.colors.disabled, _data_global_json__WEBPACK_IMPORTED_MODULE_11__.constants.mobileWidth + 1, _data_global_json__WEBPACK_IMPORTED_MODULE_11__.constants.headerHeight + 200, _data_global_json__WEBPACK_IMPORTED_MODULE_11__.constants.headerHeight + 200, _data_global_json__WEBPACK_IMPORTED_MODULE_11__.constants.headerHeight + 185, _data_global_json__WEBPACK_IMPORTED_MODULE_11__.constants.headerHeight + 200, _data_global_json__WEBPACK_IMPORTED_MODULE_11__.constants.headerHeight + 200, _data_global_json__WEBPACK_IMPORTED_MODULE_11__.constants.mobileWidth],
    __self: this
  }, ".projectContainer{box-sizing:border-box;width:100%;padding:50px 30px 50px 30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.projectCard{box-sizing:border-box;border-radius:20px;margin:30px;width:350px;height:435px;padding:30px;display:inline-block;background-color:#fff;box-shadow:10px 10px 10px #ccc;cursor:pointer;position:relative;bottom:0px;will-change:bottom,box-shadow;-webkit-transition:bottom 0.2s,box-shadow 0.2s;transition:bottom 0.2s,box-shadow 0.2s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;}.projectTitle{font-size:28px;position:relative;margin:0 0 30px 0;}.projectDesc{display:none;font-size:16px;}.projectImg{width:350px;position:absolute;left:0px;bottom:0px;border-radius:0 0 20px 20px;}.projectInfo{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.projectInfoLabel{margin-top:40px;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.projectIcon{width:48px;height:48px;position:relative;top:10px;}.projectButtonContainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.projectButton{box-sizing:border-box;background-color:".concat(_data_global_json__WEBPACK_IMPORTED_MODULE_11__.colors.accentDark, ";color:").concat(_data_global_json__WEBPACK_IMPORTED_MODULE_11__.colors.textLight, ";padding:20px;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;text-align:center;font-size:24px;border-radius:10px;margin-top:30px;margin-left:10px;margin-right:10px;position:relative;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);box-shadow:5px 5px 10px #aaa;will-change:transform,box-shadow;-webkit-transition:-webkit-transform 0.2s,box-shadow 0.2s;-webkit-transition:transform 0.2s,box-shadow 0.2s;transition:transform 0.2s,box-shadow 0.2s;}.projectButton:not(.projectButtonDisabled):hover{background-color:").concat(_data_global_json__WEBPACK_IMPORTED_MODULE_11__.colors.accentLight, ";-webkit-transform:translateY(-5px);-ms-transform:translateY(-5px);transform:translateY(-5px);box-shadow:10px 10px 10px #aaa;}.projectButton:not(.projectButtonDisabled):active{-webkit-transform:translateY(5px);-ms-transform:translateY(5px);transform:translateY(5px);box-shadow:0px 0px 10px #aaa;}.projectButtonDisabled{cursor:not-allowed;box-shadow:unset;background-color:").concat(_data_global_json__WEBPACK_IMPORTED_MODULE_11__.colors.disabled, ";}.projectSeparator{display:none;}@media only screen and (min-width:").concat(_data_global_json__WEBPACK_IMPORTED_MODULE_11__.constants.mobileWidth + 1, "px){.projectCard:not(.projectActive):hover{bottom:10px;box-shadow:15px 15px 10px #ccc;}.projectCard.projectActive{cursor:unset;margin:0;width:calc(100% - 200px);height:calc(100vh - ").concat(_data_global_json__WEBPACK_IMPORTED_MODULE_11__.constants.headerHeight + 200, "px);border-radius:30px 20px 20px 30px;position:fixed;bottom:100px;left:100px;box-shadow:unset;z-index:3;}.projectCard.projectActive .projectImg{position:absolute;left:0px;bottom:0px;border-radius:20px 0 0 20px;width:unset;height:calc(100vh - ").concat(_data_global_json__WEBPACK_IMPORTED_MODULE_11__.constants.headerHeight + 200, "px);}.projectCard.projectActive .projectTitle{font-size:42px;top:5px;left:calc(100vh - ").concat(_data_global_json__WEBPACK_IMPORTED_MODULE_11__.constants.headerHeight + 185, "px);}.projectCard.projectActive .projectDesc{display:inline-block;position:absolute;width:calc(calc(calc(100vw - 200px) - calc(100vh - ").concat(_data_global_json__WEBPACK_IMPORTED_MODULE_11__.constants.headerHeight + 200, "px)) - 100px);left:calc(100vh - ").concat(_data_global_json__WEBPACK_IMPORTED_MODULE_11__.constants.headerHeight + 200, "px);top:80px;font-size:24px;margin:30px 50px;}.projectCard.projectActive .projectInfoLabel{position:relative;left:50px;}.projectFade{display:block;position:fixed;z-index:1;left:0;top:0;width:100vw;height:100vh;background-color:#00000099;}}@media only screen and (max-width:").concat(_data_global_json__WEBPACK_IMPORTED_MODULE_11__.constants.mobileWidth, "px){.projectContainer{display:block;padding:0px;margin:0px;width:100%;padding-top:0px;}.projectCard{cursor:unset;-webkit-transition:unset;transition:unset;margin:0px;width:100%;display:block;border-radius:0px;background:none;box-shadow:unset;height:unset;padding-top:10px;padding-left:50px;padding-right:50px;}.projectCard:first-child{padding-top:80px;}.projectCard:last-child{padding-bottom:100px;}.projectCard:hover{bottom:unset;box-shadow:unset;}.projectCard:not(:last-child) .projectSeparator{display:block;height:1px;margin-top:100px;margin-bottom:60px;background-color:#aaa;}.projectTitle{font-size:36px;}.projectImg{width:100%;max-width:300px;position:static;border-radius:15px;}.projectDesc{display:block;padding:25px 10px 0px 10px;}.projectButtonContainer{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.projectButton{min-width:200px;}.projectButtonDisabled{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWF0dG1cXERlc2t0b3BcXENvZGluZ1xcUHJvamVjdHNcXHJlYWN0LXdlYnNpdGVcXHBhZ2VzXFxwcm9qZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRXFCLEFBRzJCLEFBU0EsQUFpQlAsQUFLRixBQUlELEFBT0MsQUFLRyxBQUlMLEFBTUUsQUFLUyxBQWtCd0IsQUFLcEIsQUFJUCxBQUtOLEFBS0EsQUFJQyxBQVlLLEFBUUgsQUFLTSxBQVNILEFBSUosQUFhQSxBQU9ELEFBY0ksQUFHSSxBQUdSLEFBSUMsQUFPQyxBQUdKLEFBTUcsQUFJQyxBQUdDLEFBR0gsV0EvSkYsQUFnSkssQ0FoS0MsQUFnRWMsQ0FwRWpCLEFBK0RoQixBQVNXLEFBMERRLEFBb0JBLEFBOEJsQixDQXRFZ0IsQUFhSCxBQStCRCxBQWdCZ0IsQ0EvS1YsQUFpR1QsQUFxRVQsQ0FqSlksQUFpS1osQ0FqQ0EsQ0E1RFUsQUFzQkMsQ0FoRE0sRUF1Q0UsQUFrRG5CLENBbExXLEFBU1EsQUFxRDJCLEFBMENwQixDQXBEUixBQXdFaUMsRUE4RGpDLENBL0JOLENBdkNBLEFBZ0ZLLENBcEtsQixBQTBHQyxDQUlXLENBMUdGLEFBa0pULEdBckw0QixBQTBCVixHQStENEIsQ0FrRWxDLENBdkNpQixDQWhGbEIsQUE0Rm1GLEFBY3RGLEVBcklJLEFBMkNILEFBcUpULENBZm9CLENBdkZwQixBQWlHb0IsR0FySE8sQUFnRXBCLENBdkM4QyxDQW9EcEMsRUF2SFcsQUFnQjdCLENBMUJBLENBcUhjLENBdElELEVBdUpBLEVBMkNaLElBM01hLEFBMExVLENBVXZCLEVBcERjLEFBWWQsQ0FsSmEsQ0EwR0EsQUE2Q0QsRUFwR3VCLEtBOERuQyxDQW5GbUIsQUFlQSxHQTBGUyxBQWlCYixDQXZKRixBQTBCZCxBQWdGc0QsSUE1QnRELENBa0dDLElBN0lELEdBcUM4QixDQXZFUixBQXVKRixRQTNEZ0IsSUExQ3RCLENBb0ZiLEtBa0JpQixHQXZKSyxJQWtEVixHQXFCYixNQWlGbUIsS0EvQ2xCLEVBVW1ELENBdkJuQyxDQTNGZSxDQWJSLElBOEVRLEdBdUZqQixNQTVEQSxPQTZESSxNQTVETixJQTVGRyxFQTBCUSxBQWVBLEdBd0J4QixFQTRCbUIsQUE0REMsUUF4SkQsRUFpSFIsS0FqRVEsRUE2Q1AsQ0E0RFMsQ0F2Q0osT0FqSEwsQ0E2RlgsTUE3Q2UsQ0FrRUcsR0FqSGEsQUF3Si9CLFdBeEdtQixHQWtFbkIsV0FsSW1CLEtBaUJxQixBQWdEeEIsZ0JBQ0MsV0ExQmxCLEFBZUEsTUFZbUIsa0JBQ0Esa0JBQ00saUJBbkRZLEVBakJyQix5REFDaEIsUUFvRThCLGFBbkQ5QixnQkFvRG1DLGlDQUNTLHNKQUM1QyIsImZpbGUiOiJDOlxcVXNlcnNcXG1hdHRtXFxEZXNrdG9wXFxDb2RpbmdcXFByb2plY3RzXFxyZWFjdC13ZWJzaXRlXFxwYWdlc1xccHJvamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0LmpzXCI7XHJcbmltcG9ydCBFeHRlcm5hbExpbmsgZnJvbSBcIi4uL2NvbXBvbmVudHMvRXh0ZXJuYWxMaW5rXCI7XHJcbmltcG9ydCBwcm9qZWN0RGF0YSBmcm9tIFwiLi4vZGF0YS9wcm9qZWN0cy5qc29uXCI7XHJcbmltcG9ydCBsYW5ndWFnZURhdGEgZnJvbSBcIi4uL2RhdGEvbGFuZ3VhZ2VzLmpzb25cIjtcclxuaW1wb3J0IGdsb2JhbCBmcm9tIFwiLi4vZGF0YS9nbG9iYWwuanNvblwiO1xyXG5cclxuY29uc3QgUHJvamVjdExhbmdJY29uID0gcHJvcHMgPT4ge1xyXG5cdGNvbnN0IGxhbmcgPSBsYW5ndWFnZURhdGFbcHJvcHMudHlwZV1bcHJvcHMubmFtZV07XHJcblx0cmV0dXJuIChcclxuXHRcdDxpbWcgc3JjPXtnbG9iYWwucGF0aHMuaW1nK3Byb3BzLnR5cGUrXCIvXCIrbGFuZy5pbWd9IGNsYXNzTmFtZT1cInByb2plY3RJY29uXCIgdGl0bGU9e2xhbmcuZGlzcGxheU5hbWV9IC8+XHJcblx0KVxyXG59XHJcblxyXG5jb25zdCBQcm9qZWN0Q2FyZCA9IHByb3BzID0+IChcclxuXHQ8ZGl2IGNsYXNzTmFtZT17XCJwcm9qZWN0Q2FyZFwiKyAocHJvcHMuYWN0aXZlID8gXCIgcHJvamVjdEFjdGl2ZVwiIDogXCJcIil9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG5cdFx0PHAgY2xhc3NOYW1lPVwicHJvamVjdFRpdGxlXCI+e3Byb3BzLnByb2plY3QudGl0bGV9PC9wPlxyXG5cdFx0PGltZyBjbGFzc05hbWU9XCJwcm9qZWN0SW1nXCIgc3JjPXtnbG9iYWwucGF0aHMuaW1nK1wicHJvamVjdHMvXCIrcHJvcHMucHJvamVjdC5pbWd9IC8+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2plY3REZXNjXCI+e3Byb3BzLnByb2plY3QuZGVzY31cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0SW5mb1wiPlxyXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cInByb2plY3RJbmZvTGFiZWxcIj5MYW5ndWFnZXM6PGJyPjwvYnI+e3Byb3BzLnByb2plY3QubGFuZ3VhZ2VzLm1hcChsYW5ndWFnZSA9PiA8UHJvamVjdExhbmdJY29uIHR5cGU9XCJsYW5ndWFnZXNcIiBuYW1lPXtsYW5ndWFnZX0gLz4pfTwvcD5cclxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJwcm9qZWN0SW5mb0xhYmVsXCI+RnJhbWV3b3Jrczo8YnI+PC9icj57cHJvcHMucHJvamVjdC5mcmFtZXdvcmtzLm1hcChmcmFtZXdvcmsgPT4gPFByb2plY3RMYW5nSWNvbiB0eXBlPVwiZnJhbWV3b3Jrc1wiIG5hbWU9e2ZyYW1ld29ya30gLz4pfTwvcD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxicj48L2JyPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RCdXR0b25Db250YWluZXJcIj5cclxuXHRcdFx0XHQ8RXh0ZXJuYWxMaW5rIGNsYXNzTmFtZT1cInByb2plY3RCdXR0b25cIiBocmVmPXtwcm9wcy5wcm9qZWN0LmRlbW99PlZJRVc8L0V4dGVybmFsTGluaz5cclxuXHRcdFx0XHR7KHByb3BzLnByb2plY3Quc291cmNlPT1cIlwiID9cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdEJ1dHRvbiBwcm9qZWN0QnV0dG9uRGlzYWJsZWRcIj5DT0RFPC9kaXY+XHJcblx0XHRcdFx0XHQ6XHJcblx0XHRcdFx0XHQ8RXh0ZXJuYWxMaW5rIGNsYXNzTmFtZT1cInByb2plY3RCdXR0b25cIiBocmVmPXtwcm9wcy5wcm9qZWN0LnNvdXJjZX0+Q09ERTwvRXh0ZXJuYWxMaW5rPlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RTZXBhcmF0b3JcIj48L2Rpdj5cclxuXHQ8L2Rpdj5cclxuKVxyXG5cclxuY2xhc3MgUHJvamVjdENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdGFjdGl2ZVByb2plY3Q6IG51bGxcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGhhbmRsZUNsaWNrKHRpdGxlKSB7XHJcblx0XHRpZih3aW5kb3cuaW5uZXJXaWR0aCA+IGdsb2JhbC5jb25zdGFudHMubW9iaWxlV2lkdGgpIHtcclxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7YWN0aXZlUHJvamVjdDogdGl0bGV9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0KHRoaXMuc3RhdGUuYWN0aXZlUHJvamVjdCkgPyA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RGYWRlXCIgb25DbGljaz17KCkgPT4ge3RoaXMuaGFuZGxlQ2xpY2sobnVsbCl9fT48L2Rpdj4gOiBcIlwiXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdENvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0e3Byb2plY3REYXRhLm1hcChwcm9qZWN0ID0+IChcclxuXHRcdFx0XHRcdFx0PFByb2plY3RDYXJkIHByb2plY3Q9e3Byb2plY3R9IGFjdGl2ZT17cHJvamVjdC50aXRsZT09dGhpcy5zdGF0ZS5hY3RpdmVQcm9qZWN0fSBrZXk9e3Byb2plY3QudGl0bGV9IG9uQ2xpY2s9eygpID0+IHt0aGlzLmhhbmRsZUNsaWNrKHByb2plY3QudGl0bGUpfX0gLz5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8Lz5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IFByb2plY3RzID0gKCkgPT4gKFxyXG5cdDxMYXlvdXQgcGFnZT1cIlByb2plY3RzXCI+XHJcblx0XHQ8UHJvamVjdENvbnRhaW5lciAvPlxyXG5cdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuXHRcdFx0LnByb2plY3RDb250YWluZXIge1xyXG5cdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0cGFkZGluZzogNTBweCAzMHB4IDUwcHggMzBweDtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5wcm9qZWN0Q2FyZCB7XHJcblx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cdFx0XHRcdG1hcmdpbjogMzBweDtcclxuXHRcdFx0XHR3aWR0aDogMzUwcHg7XHJcblx0XHRcdFx0aGVpZ2h0OiA0MzVweDtcclxuXHRcdFx0XHRwYWRkaW5nOiAzMHB4O1xyXG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4ICNjY2M7XHJcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRib3R0b206IDBweDtcclxuXHRcdFx0XHR3aWxsLWNoYW5nZTogYm90dG9tLCBib3gtc2hhZG93O1xyXG5cdFx0XHRcdHRyYW5zaXRpb246IGJvdHRvbSAwLjJzLCBib3gtc2hhZG93IDAuMnM7XHJcblx0XHRcdFx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG5cdFx0XHR9XHJcblx0XHRcdC5wcm9qZWN0VGl0bGUge1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMjhweDtcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0bWFyZ2luOiAwIDAgMzBweCAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5wcm9qZWN0RGVzYyB7XHJcblx0XHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0LnByb2plY3RJbWcge1xyXG5cdFx0XHRcdHdpZHRoOiAzNTBweDtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0bGVmdDogMHB4O1xyXG5cdFx0XHRcdGJvdHRvbTogMHB4O1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0LnByb2plY3RJbmZvIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdH1cclxuXHRcdFx0LnByb2plY3RJbmZvTGFiZWwge1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6IDQwcHg7XHJcblx0XHRcdFx0ZmxleC1ncm93OiAxO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5wcm9qZWN0SWNvbiB7XHJcblx0XHRcdFx0d2lkdGg6IDQ4cHg7XHJcblx0XHRcdFx0aGVpZ2h0OiA0OHB4O1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHR0b3A6IDEwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0LnByb2plY3RCdXR0b25Db250YWluZXIge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0fVxyXG5cdFx0XHQucHJvamVjdEJ1dHRvbiB7XHJcblx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke2dsb2JhbC5jb2xvcnMuYWNjZW50RGFya307XHJcblx0XHRcdFx0Y29sb3I6ICR7Z2xvYmFsLmNvbG9ycy50ZXh0TGlnaHR9O1xyXG5cdFx0XHRcdHBhZGRpbmc6IDIwcHg7XHJcblx0XHRcdFx0ZmxleC1ncm93OiAxO1xyXG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRmb250LXNpemU6IDI0cHg7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdFx0XHRtYXJnaW4tdG9wOiAzMHB4O1xyXG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAjYWFhO1xyXG5cdFx0XHRcdHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIGJveC1zaGFkb3c7XHJcblx0XHRcdFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMsIGJveC1zaGFkb3cgMC4ycztcclxuXHRcdFx0fVxyXG5cdFx0XHQucHJvamVjdEJ1dHRvbjpub3QoLnByb2plY3RCdXR0b25EaXNhYmxlZCk6aG92ZXIge1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR7Z2xvYmFsLmNvbG9ycy5hY2NlbnRMaWdodH07XHJcblx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4ICNhYWE7XHJcblx0XHRcdH1cclxuXHRcdFx0LnByb2plY3RCdXR0b246bm90KC5wcm9qZWN0QnV0dG9uRGlzYWJsZWQpOmFjdGl2ZSB7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XHJcblx0XHRcdFx0Ym94LXNoYWRvdzogMHB4IDBweCAxMHB4ICNhYWE7XHJcblx0XHRcdH1cclxuXHRcdFx0LnByb2plY3RCdXR0b25EaXNhYmxlZCB7XHJcblx0XHRcdFx0Y3Vyc29yOiBub3QtYWxsb3dlZDtcclxuXHRcdFx0XHRib3gtc2hhZG93OiB1bnNldDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke2dsb2JhbC5jb2xvcnMuZGlzYWJsZWR9O1xyXG5cdFx0XHR9XHJcblx0XHRcdC5wcm9qZWN0U2VwYXJhdG9yIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7Z2xvYmFsLmNvbnN0YW50cy5tb2JpbGVXaWR0aCArIDF9cHgpIHtcclxuXHRcdFx0XHQucHJvamVjdENhcmQ6bm90KC5wcm9qZWN0QWN0aXZlKTpob3ZlciB7XHJcblx0XHRcdFx0XHRib3R0b206IDEwcHg7XHJcblx0XHRcdFx0XHRib3gtc2hhZG93OiAxNXB4IDE1cHggMTBweCAjY2NjO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQucHJvamVjdENhcmQucHJvamVjdEFjdGl2ZSB7XHJcblx0XHRcdFx0XHRjdXJzb3I6IHVuc2V0O1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4KTtcclxuXHRcdFx0XHRcdGhlaWdodDogY2FsYygxMDB2aCAtICR7Z2xvYmFsLmNvbnN0YW50cy5oZWFkZXJIZWlnaHQgKyAyMDB9cHgpO1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMzBweCAyMHB4IDIwcHggMzBweDtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdFx0XHRcdGJvdHRvbTogMTAwcHg7XHJcblx0XHRcdFx0XHRsZWZ0OiAxMDBweDtcclxuXHRcdFx0XHRcdGJveC1zaGFkb3c6IHVuc2V0O1xyXG5cdFx0XHRcdFx0ei1pbmRleDogMztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnByb2plY3RDYXJkLnByb2plY3RBY3RpdmUgLnByb2plY3RJbWcge1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0bGVmdDogMHB4O1xyXG5cdFx0XHRcdFx0Ym90dG9tOiAwcHg7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAyMHB4IDAgMCAyMHB4O1xyXG5cdFx0XHRcdFx0d2lkdGg6IHVuc2V0O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gJHtnbG9iYWwuY29uc3RhbnRzLmhlYWRlckhlaWdodCArIDIwMH1weCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5wcm9qZWN0Q2FyZC5wcm9qZWN0QWN0aXZlIC5wcm9qZWN0VGl0bGUge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiA0MnB4O1xyXG5cdFx0XHRcdFx0dG9wOiA1cHg7XHJcblx0XHRcdFx0XHRsZWZ0OiBjYWxjKDEwMHZoIC0gJHtnbG9iYWwuY29uc3RhbnRzLmhlYWRlckhlaWdodCArIDE4NX1weCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5wcm9qZWN0Q2FyZC5wcm9qZWN0QWN0aXZlIC5wcm9qZWN0RGVzYyB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHR3aWR0aDogY2FsYyhjYWxjKGNhbGMoMTAwdncgLSAyMDBweCkgLSBjYWxjKDEwMHZoIC0gJHtnbG9iYWwuY29uc3RhbnRzLmhlYWRlckhlaWdodCArIDIwMH1weCkpIC0gMTAwcHgpO1xyXG5cdFx0XHRcdFx0bGVmdDogY2FsYygxMDB2aCAtICR7Z2xvYmFsLmNvbnN0YW50cy5oZWFkZXJIZWlnaHQgKyAyMDB9cHgpO1xyXG5cdFx0XHRcdFx0dG9wOiA4MHB4O1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyNHB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAzMHB4IDUwcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5wcm9qZWN0Q2FyZC5wcm9qZWN0QWN0aXZlIC5wcm9qZWN0SW5mb0xhYmVsIHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdGxlZnQ6IDUwcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5wcm9qZWN0RmFkZSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdFx0XHRcdHotaW5kZXg6IDE7XHJcblx0XHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRcdFx0d2lkdGg6IDEwMHZ3O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAxMDB2aDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA5OTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtnbG9iYWwuY29uc3RhbnRzLm1vYmlsZVdpZHRofXB4KSB7XHJcblx0XHRcdFx0LnByb2plY3RDb250YWluZXIge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwcHg7XHJcblx0XHRcdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0cGFkZGluZy10b3A6IDBweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnByb2plY3RDYXJkIHtcclxuXHRcdFx0XHRcdGN1cnNvcjogdW5zZXQ7XHJcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiB1bnNldDtcclxuXHRcdFx0XHRcdG1hcmdpbjogMHB4O1xyXG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDBweDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IG5vbmU7XHJcblx0XHRcdFx0XHRib3gtc2hhZG93OiB1bnNldDtcclxuXHRcdFx0XHRcdGhlaWdodDogdW5zZXQ7XHJcblx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMTBweDtcclxuXHRcdFx0XHRcdHBhZGRpbmctbGVmdDogNTBweDtcclxuXHRcdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5wcm9qZWN0Q2FyZDpmaXJzdC1jaGlsZCB7XHJcblx0XHRcdFx0XHRwYWRkaW5nLXRvcDogODBweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnByb2plY3RDYXJkOmxhc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQucHJvamVjdENhcmQ6aG92ZXIge1xyXG5cdFx0XHRcdFx0Ym90dG9tOiB1bnNldDtcclxuXHRcdFx0XHRcdGJveC1zaGFkb3c6IHVuc2V0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQucHJvamVjdENhcmQ6bm90KDpsYXN0LWNoaWxkKSAucHJvamVjdFNlcGFyYXRvciB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRcdGhlaWdodDogMXB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMTAwcHg7XHJcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2FhYTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnByb2plY3RUaXRsZSB7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDM2cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5wcm9qZWN0SW1nIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0bWF4LXdpZHRoOiAzMDBweDtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBzdGF0aWM7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQucHJvamVjdERlc2Mge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAyNXB4IDEwcHggMHB4IDEwcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5wcm9qZWN0QnV0dG9uQ29udGFpbmVyIHtcclxuXHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnByb2plY3RCdXR0b24ge1xyXG5cdFx0XHRcdFx0bWluLXdpZHRoOiAyMDBweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnByb2plY3RCdXR0b25EaXNhYmxlZCB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG4gICAgXHRgfTwvc3R5bGU+XHJcblx0PC9MYXlvdXQ+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0czsiXX0= */\n/*@ sourceURL=C:\\Users\\mattm\\Desktop\\Coding\\Projects\\react-website\\pages\\projects.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=projects.js.113d72d98dbe796d722c.hot-update.js.map
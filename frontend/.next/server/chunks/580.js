exports.id = 580;
exports.ids = [580];
exports.modules = {

/***/ 368:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Nav.js



function Nav() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/products",
      children: "Products"
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/sell",
      children: "Sell"
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/orders",
      children: "Orders"
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/account",
      children: "Account"
    })]
  });
}
;// CONCATENATED MODULE: ./components/Header.js




function Header() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "bar",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: "Sick fits"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "sub-bar"
    }), /*#__PURE__*/jsx_runtime_.jsx(Nav, {})]
  });
}
;// CONCATENATED MODULE: ./components/Page.js



function Page({
  children,
  cool
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx("h2", {
      children: " I am the page component"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
      children: [" ", cool, " "]
    }), children]
  });
}

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;
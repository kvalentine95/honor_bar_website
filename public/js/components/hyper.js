webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actions = exports.actions = {
  reviewRightClick: reviewRightClick,
  reviewLeftClick: reviewLeftClick,
  intro: intro,
  showMenu: showMenu
};

function reviewRightClick(state, actions) {
  return { reviewStatus: { currentReview: state.reviewStatus.currentReview + 1 } };
}

function reviewLeftClick(state, actions) {
  return { reviewStatus: { currentReview: state.reviewStatus.currentReview - 1 } };
}

function showMenu() {}

function intro(state, actions) {
  console.log('Just ran my first action');
  return { count: state.count + 1 };
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(15);

var _Header2 = _interopRequireDefault(_Header);

var _TopImg = __webpack_require__(20);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _OurStory = __webpack_require__(16);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(19);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuote = __webpack_require__(17);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

var _Reviews = __webpack_require__(18);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _ContactUs = __webpack_require__(13);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Footer = __webpack_require__(14);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(
      'div',
      null,
      (0, _hyperapp.h)(_Header2.default, { state: state, actions: actions }),
      (0, _hyperapp.h)(_TopImg2.default, { state: state, actions: actions }),
      (0, _hyperapp.h)(_OurStory2.default, { state: state, actions: actions }),
      (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, actions: actions }),
      (0, _hyperapp.h)(_RandomQuote2.default, { state: state, actions: actions }),
      (0, _hyperapp.h)(_Reviews2.default, { state: state, actions: actions }),
      (0, _hyperapp.h)(_ContactUs2.default, { state: state, actions: actions }),
      (0, _hyperapp.h)(_Footer2.default, { state: state, actions: actions })
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var companyInfo = {
  title: 'Be Honored',
  phone: '(408)-768-9986',
  location: 'Los Angeles, California'
};
var specialMenuData = [{
  title: 'Honor Burger',
  description: 'Fresh ground chuck, cheddar & tomato, topped with coleslaw',
  price: 15,
  classTitle: 'box-image1'
}, {
  title: 'Veggie Club',
  description: 'Persian cucumber, French feta, avocado, arugula & pickled onion',
  price: 14,
  classTitle: 'box-image2'
}, {
  title: 'Hand-Cut French Fries',
  description: 'U.S.#1 Kennebec potatoes, served with dipping sauces',
  price: 5,
  classTitle: 'box-image3'
}];

var reviews = [{
  review: 'I\'ve heard only good things about Honor Bar and I finally got to try it for myself this past weekend. Everyone says you have to try the chucked sandwich, you must! 100% one of the best chicken sandwiches I\'ve ever had. Enjoyed it with a nice glass of rosé, it was lovely. The restaurant is on the smaller side so If you go on a busy day like the weekends there\'s likely to be a wait. Highly recommend waiting for a table outside if it\'s a nice day out. All in all the staff was great, food was delicious, and the experience lived up to the hype. Don\'t miss out on this place!',
  highlight: 'Best restaurant in the LA area',
  company: 'The Food Network'
}, {
  review: 'I\'ve heard only good things about Honor Bar and I finally got to try it for myself this past weekend. Everyone says you have to try the chucked sandwich, you must! 100% one of the best chicken sandwiches I\'ve ever had. Enjoyed it with a nice glass of rosé, it was lovely. The restaurant is on the smaller side so If you go on a busy day like the weekends there\'s likely to be a wait. Highly recommend waiting for a table outside if it\'s a nice day out. All in all the staff was great, food was delicious, and the experience lived up to the hype. Don\'t miss out on this place!',
  highlight: 'Best restaurant. Period.',
  company: 'HBO'
}, {
  review: 'I\'ve heard only good things about Honor Bar and I finally got to try it for myself this past weekend. Everyone says you have to try the chucked sandwich, you must! 100% one of the best chicken sandwiches I\'ve ever had. Enjoyed it with a nice glass of rosé, it was lovely. The restaurant is on the smaller side so If you go on a busy day like the weekends there\'s likely to be a wait. Highly recommend waiting for a table outside if it\'s a nice day out. All in all the staff was great, food was delicious, and the experience lived up to the hype. Don\'t miss out on this place!',
  highlight: 'Fast and modern',
  company: 'LA Times'
}];

var randomQuote = [{
  author: 'Jacques Pepin',
  quote: 'Great cooking favors the prepared hands'
}];

var globalState = exports.globalState = {
  count: 0,
  companyInfo: companyInfo,
  specialMenuData: specialMenuData,
  reviews: reviews,
  reviewStatus: {
    currentReview: 0
  }

};

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactUs;

var _hyperapp = __webpack_require__(0);

function ContactUs(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "ContactUs", "class": "texture" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h2",
        { "class": "comp-title" },
        "Contact Us"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "box" },
        (0, _hyperapp.h)(
          "div",
          { "class": "row" },
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "div",
              { "class": "title" },
              state.companyInfo.location
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "address" },
              "122 South Beverly Drive",
              (0, _hyperapp.h)("br", null),
              "Beverly Hills, California 90212"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              (0, _hyperapp.h)(
                "strong",
                null,
                "email: "
              ),
              (0, _hyperapp.h)(
                "a",
                { href: "#" },
                "honor_bar@gmail.com"
              )
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "h5",
              null,
              "Call directly"
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "title" },
              "+ ",
              state.companyInfo.phone
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              (0, _hyperapp.h)(
                "strong",
                null,
                "Sun \u2013 Thurs:"
              ),
              " 11:30am \u2013 11pm"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              (0, _hyperapp.h)(
                "strong",
                null,
                "Fri \u2013 Sat:"
              ),
              " 11:30am \u2013 12am"
            )
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _hyperapp = __webpack_require__(0);

function Footer(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "footer",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "nav",
        { "class": "menu" },
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Our Story"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Special Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Contact Us"
        )
      ),
      (0, _hyperapp.h)(
        "ul",
        { "class": "social_media" },
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "#" },
            (0, _hyperapp.h)("i", { "class": "fa fa-facebook-official", "aria-hidden": "true" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "#" },
            (0, _hyperapp.h)("i", { "class": "fa fa-twitter", "aria-hidden": "true" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "#" },
            (0, _hyperapp.h)("i", { "class": "fa fa-instagram", "aria-hidden": "true" })
          )
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "copyright" },
        "\xA9 2017 Copyright"
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "header",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "logo" },
        "Logo"
      ),
      (0, _hyperapp.h)(
        "nav",
        null,
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Locations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Catering"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservations"
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "OurStory" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "title" },
            "Our Story"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "Cooking is the Art of Adjustment"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Escape the hustle and bustle by ducking into the cool, dark atmosphere of The Honor Bar in Beverly Hills, a cozy little nook tucked next to the South Beverly Grill. Relax with a crisp martini and one of our delectable sandwiches. The highlight here is surely the French fries, served piping hot in a silver julep cup. Walk-ins only."
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "quote" },
            (0, _hyperapp.h)(
              "i",
              null,
              "  \"Nobody knows how to make a more crowd-pleasing sandwich better than these guys\" - ",
              (0, _hyperapp.h)(
                "strong",
                null,
                "Marisa Dunn"
              )
            )
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#", "class": "reserve-btn" },
            "Reserve"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)(
            "div",
            { "class": "video-img" },
            (0, _hyperapp.h)("img", { src: "https://s3.amazonaws.com/siteninja/multitenant/images/61863/images/original/Screen_Shot_2016-06-29_at_4.53.14_PM.png?1467244440" })
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RandomQuote;

var _hyperapp = __webpack_require__(0);

function RandomQuote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "RandomQuote" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h1",
        null,
        "\u201CGreat cooking favors the prepared hands\u201D"
      ),
      (0, _hyperapp.h)(
        "span",
        { "class": "author" },
        "- Jacques Pepin -"
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  var currentReview = function currentReview() {
    return (0, _hyperapp.h)(
      "div",
      null,
      (0, _hyperapp.h)(
        "h2",
        null,
        state.reviews[state.reviewStatus.currentReview].company
      ),
      (0, _hyperapp.h)(
        "h4",
        null,
        "\"",
        state.reviews[state.reviewStatus.currentReview].highlight,
        "\""
      ),
      (0, _hyperapp.h)(
        "p",
        null,
        state.reviews[state.reviewStatus.currentReview].review
      ),
      (0, _hyperapp.h)("div", { "class": "author" })
    );
  };

  var leftClickButton = function leftClickButton() {
    if (state.reviewStatus.currentReview == 0) {} else {
      actions.reviewLeftClick();
    }
  };
  var rightClickButton = function rightClickButton() {
    if (state.reviewStatus.currentReview == state.reviews.length - 1) {} else {
      actions.reviewRightClick();
    }
  };
  return (0, _hyperapp.h)(
    "section",
    { id: "Reviews" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-8 chef" },
          (0, _hyperapp.h)("img", { src: "http://cdn.playbuzz.com/cdn/76d5533e-7e04-48ca-973e-8e05c34428ca/61a58a6a-7780-41d5-ac94-77891e70c103.jpg" })
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "comp-title" },
            "Reviews"
          ),
          currentReview(),
          (0, _hyperapp.h)(
            "div",
            { "class": "arrows" },
            (0, _hyperapp.h)("i", { onclick: leftClickButton, "class": "fa fa-arrow-left " + (state.reviewStatus.currentReview > 0 ? 'ready' : ''), "aria-hidden": "true" }),
            (0, _hyperapp.h)("i", { onclick: rightClickButton, "class": "fa fa-arrow-right " + (state.reviewStatus.currentReview == state.reviews.length - 1 ? '' : 'ready'), "aria-hidden": "true" })
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  var loopMenu = function loopMenu() {
    return state.specialMenuData.map(function (item) {
      return (0, _hyperapp.h)(
        "div",
        { "class": "col-md-4" },
        (0, _hyperapp.h)(
          "div",
          { "class": "box" },
          (0, _hyperapp.h)(
            "div",
            { "class": item.classTitle },
            (0, _hyperapp.h)(
              "div",
              { "class": "price-circle" },
              "$",
              item.price
            )
          ),
          (0, _hyperapp.h)(
            "span",
            { "class": "title" },
            item.title
          ),
          (0, _hyperapp.h)(
            "p",
            { "class": "details" },
            item.description
          )
        )
      );
    });
  };
  return (0, _hyperapp.h)(
    "section",
    { id: "SpecialMenu", "class": "texture" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "title" },
        "Special Menu"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Honorable Flavor of Winter"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "row boxes" },
        loopMenu()
      ),
      (0, _hyperapp.h)(
        "a",
        { href: "#" },
        "View Full Menu"
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "TopImg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "title" },
        (0, _hyperapp.h)(
          "h5",
          null,
          "Welcome"
        ),
        (0, _hyperapp.h)(
          "h1",
          null,
          state.companyInfo.title
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "contact-info" },
        (0, _hyperapp.h)(
          "div",
          { "class": "booking" },
          "Book Table Directly"
        ),
        (0, _hyperapp.h)(
          "h2",
          null,
          "(408) 768 9986"
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "hours" },
          "Opening hours: ",
          (0, _hyperapp.h)(
            "strong",
            null,
            "MON-FRI:"
          ),
          " 09:00-21:00/",
          (0, _hyperapp.h)(
            "strong",
            null,
            "WEEKEND: "
          ),
          "09:00-22:00"
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _hyperappReduxDevtools = __webpack_require__(12);

var _hyperappReduxDevtools2 = _interopRequireDefault(_hyperappReduxDevtools);

var _actions = __webpack_require__(9);

var _globalState = __webpack_require__(11);

var _App = __webpack_require__(10);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: _globalState.globalState,
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    },
    load: function load(state, actions) {
      actions.intro();
    }
  },
  mixins: [(0, _hyperappReduxDevtools2.default)()]
});

/***/ })
],[21]);
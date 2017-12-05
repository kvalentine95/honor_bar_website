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
  up: up,
  intro: intro,
  showMenu: showMenu
};

function up(state, actions) {
  return { count: state.count + 1 };
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

var _Header = __webpack_require__(14);

var _Header2 = _interopRequireDefault(_Header);

var _TopImg = __webpack_require__(19);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _OurStory = __webpack_require__(15);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(18);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuote = __webpack_require__(16);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

var _Reviews = __webpack_require__(17);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _ContactUs = __webpack_require__(13);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

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
      (0, _hyperapp.h)(_ContactUs2.default, { state: state, actions: actions })
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
var globalState = exports.globalState = {
  count: 0
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
              "Los Angeles, California"
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
              "+ (408) - 768 - 9986"
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
/* 15 */
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
/* 16 */
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
/* 17 */
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
          (0, _hyperapp.h)(
            "h2",
            null,
            "The Food Network"
          ),
          (0, _hyperapp.h)(
            "h4",
            null,
            "\"Best restaurant in the LA area\""
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Honor Bar is a nice and chill bar. Gets a good deal of traffic based on where it is and since I live in the neighborhood it's easy to say because there really aren't very many bars at all in the Beverly Hills area that makes sense. The Ambiance is really cool. They are usually showing a game of some sort so it gives you that sports bar feel a little bit on the upscale side. Decently priced food and drinks. As well as the fact the food itself is pretty good. I find myself here all the time. If you're in the area it is definitely recommended."
          ),
          (0, _hyperapp.h)("div", { "class": "author" }),
          (0, _hyperapp.h)(
            "div",
            { "class": "arrows" },
            (0, _hyperapp.h)("i", { "class": "fa fa-arrow-left", "aria-hidden": "true" }),
            (0, _hyperapp.h)("i", { "class": "fa fa-arrow-right ready", "aria-hidden": "true" })
          )
        )
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
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

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
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box" },
            (0, _hyperapp.h)(
              "div",
              { "class": "box-image1" },
              (0, _hyperapp.h)(
                "div",
                { "class": "price-circle" },
                "$15"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { "class": "title" },
              "Honor Burger"
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "details" },
              "Fresh ground chuck, cheddar & tomato, topped with coleslaw"
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box" },
            (0, _hyperapp.h)(
              "div",
              { "class": "box-image2" },
              (0, _hyperapp.h)(
                "div",
                { "class": "price-circle" },
                "$14"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { "class": "title" },
              "Veggie Club"
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "details" },
              "Persian cucumber, French feta, avocado, arugula & pickled onion"
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box" },
            (0, _hyperapp.h)(
              "div",
              { "class": "box-image3" },
              (0, _hyperapp.h)(
                "div",
                { "class": "price-circle" },
                "$5"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { "class": "title" },
              "Hand-Cut French Fries"
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "details" },
              "U.S.#1 Kennebec potatoes, served with dipping sauces"
            )
          )
        )
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
/* 19 */
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
          "Be Honored"
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
/* 20 */
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
  state: { globalState: _globalState.globalState },
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
],[20]);
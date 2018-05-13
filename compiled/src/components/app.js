'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      movies: [{ title: 'Mean Girls' }, { title: 'Hackers' }, { title: 'The Grey' }, { title: 'Sunshine' }, { title: 'Ex Machina' }]
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
    // put methods here


    /*
    +-----------------
    Movie Lits
    *-----------------
    
      *----------*
    	movie title
      *----------*  
    
    *-----------------
    
    */

  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'h1',
        null,
        'test'
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwibW92aWVzIiwidGl0bGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLENBQ1QsRUFBQ0MsT0FBTyxZQUFSLEVBRFMsRUFFVCxFQUFDQSxPQUFPLFNBQVIsRUFGUyxFQUdULEVBQUNBLE9BQU8sVUFBUixFQUhTLEVBSVQsRUFBQ0EsT0FBTyxVQUFSLEVBSlMsRUFLVCxFQUFDQSxPQUFPLFlBQVIsRUFMUztBQURHLEtBQWI7QUFIaUI7QUFZbEI7Ozs7d0NBRW1CLENBRW5CO0FBREE7OztBQUdIOzs7Ozs7Ozs7Ozs7Ozs7NkJBYVc7QUFDUCxhQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERDtBQUdEOzs7O0VBcENlQyxNQUFNQyxTOztBQXVDeEJDLE9BQU9QLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb3ZpZXM6IFtcblx0XHRcdCAge3RpdGxlOiAnTWVhbiBHaXJscyd9LFxuXHRcdFx0ICB7dGl0bGU6ICdIYWNrZXJzJ30sXG5cdFx0XHQgIHt0aXRsZTogJ1RoZSBHcmV5J30sXG5cdFx0XHQgIHt0aXRsZTogJ1N1bnNoaW5lJ30sXG5cdFx0XHQgIHt0aXRsZTogJ0V4IE1hY2hpbmEnfSxcblx0XHRcdF1cbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIFx0Ly8gcHV0IG1ldGhvZHMgaGVyZVxuICB9XG5cbi8qXG4rLS0tLS0tLS0tLS0tLS0tLS1cbk1vdmllIExpdHNcbiotLS0tLS0tLS0tLS0tLS0tLVxuXG4gICotLS0tLS0tLS0tKlxuXHRtb3ZpZSB0aXRsZVxuICAqLS0tLS0tLS0tLSogIFxuXG4qLS0tLS0tLS0tLS0tLS0tLS1cblxuKi8gIFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgIFx0PGgxPnRlc3Q8L2gxPlxuICAgICk7XG4gIH1cbn1cblxud2luZG93LkFwcCA9IEFwcDsiXX0=
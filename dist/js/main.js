"use strict";

(function () {

  var text1 = ["👋 Hi there. I’m Ellipsis.", "I’m learning how to help people be more productive at work.", "If you want to know when I have any announcements, tell me your email address."];

  var text2 = ["OK! Now if you have a moment before I add you to the list, there’s one more thing.", "What’s one repetitive task at work you wish could be automated?"];

  var pad = "***************";

  var text1Counters = [0, text1.slice(0, 1).concat("").join(pad).length, text1.slice(0, 2).concat("").join(pad).length, text1.slice(0, 3).join(pad).length];

  var text2Counters = [0, text2.slice(0, 1).concat("").join(pad).length, text2.slice(0, 2).join(pad).length];

  var SignupForm = React.createClass({
    displayName: "SignupForm",

    propTypes: {
      counter: React.PropTypes.number.isRequired,
      hasClickedOk: React.PropTypes.bool.isRequired,
      onOk: React.PropTypes.func.isRequired
    },

    getInitialState: function getInitialState() {
      return {
        email: '',
        oneTask: ''
      };
    },

    onChangeEmail: function onChangeEmail(event) {
      this.setState({ email: event.target.value });
    },

    onEmailKeyPress: function onEmailKeyPress(event) {
      if (event.which === 13) {
        event.preventDefault();
        if (this.hasEmail() && !this.props.hasClickedOk) {
          event.target.blur();
          this.onOk();
        }
      }
    },

    onChangeOneTask: function onChangeOneTask(event) {
      this.setState({ oneTask: event.target.value });
    },

    onOk: function onOk() {
      this.props.onOk();
    },

    onSubmit: function onSubmit() {},

    hasEmail: function hasEmail() {
      return (/^[^@]+@[^@]+\.[^@]+$/.test(this.state.email)
      );
    },

    render: function render() {
      return React.createElement(
        "div",
        { id: "mc_embed_signup" },
        React.createElement(
          "form",
          {
            action: "//ellipsis.us14.list-manage.com/subscribe/post?u=7e90c1fb7ff3d6aab44c1c25e&id=6ad5b3cc3f", method: "post",
            name: "mc-embedded-subscribe-form",
            noValidate: true
          },
          React.createElement(
            "div",
            { id: "mc_embed_signup_scroll" },
            React.createElement(
              "div",
              { className: "columns columns-elastic" },
              this.renderSection1(),
              this.renderSection2(),
              this.renderSection3(),
              this.renderSection4()
            ),
            this.renderSection5()
          )
        )
      );
    },

    renderSection1: function renderSection1() {
      return React.createElement(
        "div",
        { className: "column-group" },
        React.createElement(
          "div",
          { className: "column-row" },
          React.createElement(
            "div",
            { className: "column column-shrink" },
            this.renderEllipsisAvatar()
          ),
          React.createElement(
            "div",
            { className: "column column-expand" },
            this.renderText1()
          )
        )
      );
    },

    renderTextSlowly: function renderTextSlowly(text, textCounters, key) {
      var _this = this;

      return text.map(function (p, i) {
        if (_this.props.counter > textCounters[i]) {
          return React.createElement(
            "p",
            { key: "p" + i + "-" + key },
            p.slice(0, _this.props.counter - textCounters[i])
          );
        }
      });
    },

    renderTextImmediately: function renderTextImmediately(text, key) {
      return text.map(function (p, i) {
        return React.createElement(
          "p",
          { key: "p" + i + "-" + key },
          p
        );
      });
    },

    renderText1: function renderText1() {
      if (this.props.hasClickedOk) {
        return this.renderTextImmediately(text1, 't1');
      } else {
        return this.renderTextSlowly(text1, text1Counters, 't1');
      }
    },

    renderText2: function renderText2() {
      return this.renderTextSlowly(text2, text2Counters, 't2');
    },

    renderSection2: function renderSection2() {
      if (this.props.hasClickedOk || this.props.counter > text1Counters[3]) {
        return React.createElement(
          "div",
          { className: "column-group fade-in" },
          React.createElement(
            "div",
            { className: "column-row" },
            React.createElement(
              "div",
              { className: "column column-shrink pvm" },
              this.renderPersonAvatar()
            ),
            React.createElement(
              "div",
              { className: "column column-expand ptm pbxl" },
              React.createElement(
                "div",
                { className: "mc-field-group" },
                React.createElement(
                  "div",
                  { className: "columns columns-elastic" },
                  React.createElement(
                    "div",
                    { className: "column column-expand" },
                    React.createElement("input", { type: "email",
                      autoFocus: true,
                      value: this.state.email,
                      name: "EMAIL",
                      className: "required email form-input form-input-borderless",
                      id: "mce-EMAIL",
                      placeholder: "Your email address (required)",
                      onChange: this.onChangeEmail,
                      onKeyPress: this.onEmailKeyPress
                    })
                  ),
                  React.createElement(
                    "div",
                    { className: "column column-shrink pvs" },
                    React.createElement(
                      "button",
                      { type: "button",
                        className: "button-primary button-s button-shrink visibility",
                        disabled: !this.hasEmail() || this.props.hasClickedOk,
                        onClick: this.onOk
                      },
                      "OK"
                    )
                  )
                )
              )
            )
          )
        );
      }
    },

    renderSection3: function renderSection3() {
      if (this.props.hasClickedOk) {
        return React.createElement(
          "div",
          { className: "column-group" },
          React.createElement(
            "div",
            { className: "column-row" },
            React.createElement(
              "div",
              { className: "column column-shrink ptm" },
              this.renderEllipsisAvatar()
            ),
            React.createElement(
              "div",
              { className: "column column-expand ptm" },
              this.renderText2()
            )
          )
        );
      }
    },

    renderSection4: function renderSection4() {
      if (this.props.hasClickedOk && this.props.counter > text2Counters[2]) {
        return React.createElement(
          "div",
          { className: "column-group fade-in" },
          React.createElement(
            "div",
            { className: "column-row" },
            React.createElement(
              "div",
              { className: "column column-shrink pvm" },
              this.renderPersonAvatar()
            ),
            React.createElement(
              "div",
              { className: "column column-expand pvm" },
              React.createElement(
                "div",
                { className: "mc-field-group" },
                React.createElement("input", {
                  autoFocus: true,
                  type: "text",
                  value: this.state.oneTask,
                  onChange: this.onChangeOneTask,
                  name: "ONETASK",
                  className: "form-input form-input-borderless",
                  id: "mce-ONETASK",
                  placeholder: "Totally optional\u2026 press enter to skip",
                  onKeyPress: this.onSubmit
                })
              )
            )
          )
        );
      }
    },

    renderSection5: function renderSection5() {
      if (this.props.hasClickedOk && this.props.counter > text2Counters[2]) {
        return React.createElement(
          "div",
          null,
          React.createElement(
            "div",
            { style: { position: "absolute", left: "-5000px" }, "aria-hidden": "true" },
            React.createElement("input", { type: "text", name: "b_7e90c1fb7ff3d6aab44c1c25e_6ad5b3cc3f", tabIndex: "-1", value: "" })
          ),
          React.createElement(
            "div",
            { className: "mtxl align-c" },
            React.createElement(
              "button",
              { type: "submit", name: "subscribe", className: "button button-primary" },
              "Keep me updated"
            )
          )
        );
      }
    },

    renderEllipsisAvatar: function renderEllipsisAvatar() {
      return React.createElement(
        "svg",
        { width: "32px", height: "32px", viewBox: "0 0 32 32", version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement(
          "title",
          null,
          "Ellipsis"
        ),
        React.createElement(
          "g",
          { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
          React.createElement(
            "g",
            { id: "Group-32" },
            React.createElement("path", { d: "M9.99430406,8 L22.0056959,8 C23.1073421,8 24,8.89260695 24,9.99430406 L24,22.0056959 C24,23.1073421 23.1073931,24 22.0056959,24 L4,24 L8,28 L8,9.99430406 C8,8.89265794 8.89260695,8 9.99430406,8 Z M0,28 L0,32 L4,32 L22.0056959,32 C27.5257734,32 32,27.5255177 32,22.0056959 L32,9.99430406 C32,4.47422663 27.5255177,0 22.0056959,0 L9.99430406,0 C4.47422663,0 0,4.47448226 0,9.99430406 L0,28 Z", id: "square", fill: "#21222C" }),
            React.createElement("path", { d: "M9.99430406,6 L22.0056959,6 C24.211886,6 26,7.78801187 26,9.99430406 L26,22.0056959 C26,24.211886 24.2119881,26 22.0056959,26 L4,26 L6,28 L6,9.99430406 C6,7.78811402 7.78801187,6 9.99430406,6 Z M2,28 L2,30 L4,30 L22.0056959,30 C26.4211783,30 30,26.4209738 30,22.0056959 L30,9.99430406 C30,5.57882171 26.4209738,2 22.0056959,2 L9.99430406,2 C5.57882171,2 2,5.57902618 2,9.99430406 L2,28 Z", id: "square", fill: "#FFFFFF" }),
            React.createElement("path", { d: "M4,9.99430406 C4,6.68374134 6.68324555,4 9.99430406,4 L22.0056959,4 C25.3162587,4 28,6.69303423 28,10 L28,16 L28,22 C28,25.3137085 25.3167544,28 22.0056959,28 L4,28 L4,9.99430406 Z", id: "Combined-Shape", fill: "#21222C" }),
            React.createElement("rect", { id: "Rectangle-13-Copy-2", fill: "#FFFFFF", x: "9", y: "15", width: "9", height: "2", rx: "1" }),
            React.createElement("rect", { id: "Rectangle-13-Copy", fill: "#FFFFFF", x: "9", y: "9", width: "14", height: "2", rx: "1" }),
            React.createElement("rect", { id: "Rectangle-13", fill: "#FFFFFF", x: "9", y: "21", width: "14", height: "2", rx: "1" })
          )
        )
      );
    },

    renderPersonAvatar: function renderPersonAvatar() {
      return React.createElement(
        "svg",
        { width: "32px", height: "32px", viewBox: "0 0 32 32", version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement(
          "g",
          { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
          React.createElement(
            "g",
            { id: "horse_head", fill: "#21222C" },
            React.createElement(
              "g",
              { transform: "translate(0.750000, 3.000000)", id: "horse" },
              React.createElement("path", { d: "M21.9991566,9.92295168 L19.3002737,6.94487402 L16.6013908,4.8043807 C16.3687285,3.96679636 14.9727546,2.43122507 14.9727546,2.43122507 C14.2747677,0.523394072 13.3441184,0.337264218 13.3441184,0.337264218 L13.3906509,0.756056389 C13.3441184,1.1283161 13.2510535,1.96590044 13.1579885,2.85001724 L11.5293523,0.942186242 C11.0174952,-0.686449977 10.7383004,0.290731755 10.7383004,0.290731755 C9.94724857,1.22138102 10.8313654,4.10639375 10.8313654,4.10639375 L10.5521706,4.432121 C9.38885901,4.94397809 8.08595003,6.66567924 8.08595003,6.66567924 L9.48192393,6.38648446 L7.15530076,9.41109458 C2.96737906,14.7157954 0.501158498,15.5533797 0.501158498,15.5533797 C-0.336425843,16.0187044 0.128898791,17.9265354 0.128898791,17.9265354 C-0.103763526,19.089847 0.640755888,20.2531586 0.640755888,20.2531586 L2.45552196,20.904613 C2.45552196,20.904613 4.3168205,18.8571847 5.38706715,18.996782 L2.45552196,20.904613 C4.54948281,21.8352623 5.94545672,19.6017041 5.94545672,19.6017041 C6.36424889,19.3225093 8.64433959,19.3690417 8.64433959,19.3690417 L11.9481445,18.4849249 C13.4837158,18.9037171 15.9034039,17.6938731 15.9034039,17.6938731 L17.9042998,26.5815736 L30.375,19.9274313 L21.9991566,9.92295168 L21.9991566,9.92295168 Z M2.36245703,21.2023048 C2.36245703,21.2023048 1.52487269,21.9933567 1.0130156,21.2488373 C1.0130156,21.2488373 0.873418205,18.3172921 2.22285964,18.6430193 C2.22285964,18.6430193 3.52576862,19.9459283 2.36245703,21.2023048 L2.36245703,21.2023048 Z M11.9481445,13.1987211 C11.9481445,13.1987211 11.2036251,13.4313834 10.691768,12.4076692 C10.691768,12.4076692 11.5293523,10.8720979 12.7857288,12.4076692 C12.7857288,12.4076692 12.4600016,13.1521886 11.9481445,13.1987211 L11.9481445,13.1987211 Z", transform: "translate(15.187500, 13.290787) scale(-1, 1) translate(-15.187500, -13.290787) " })
            )
          )
        )
      );
    }
  });

  function nextCharSpeed() {
    return Math.random() * (40 - 10) + 10;
  }

  var counter = 8;
  var hasClickedOk = false;

  function next() {
    setTimeout(function () {
      ReactDOM.render(React.createElement(SignupForm, {
        counter: counter,
        hasClickedOk: hasClickedOk,
        onOk: function onOk() {
          counter = 0;
          hasClickedOk = true;
        }
      }), document.getElementById('main'));
      ++counter;
      next();
    }, nextCharSpeed());
  }

  next();
})();


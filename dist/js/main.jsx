(function() {

var text1 = [
  "👋 Hi there. I’m Ellipsis.",
  "I’m learning to help people be more productive at work.",
  "Unlike other software, I adapt to the way you and your team work. You ask questions, and I’ll do my best to get you answers.",
  "I can also perform tedious tasks, and remember information.",
  "I’d love to keep you updated with any announcements. What is your email address?"
];

var text2 = [
  "OK! Now before I add you to the list, I’d love to know:",
  "What’s one thing I could do to help you?"
];

function getCounterForTextAtIndex(textNodes, index) {
  if (index === 0) {
    return 0;
  } else {
    let sliced = textNodes.slice(0, index);
    if (index <= textNodes.length) {
      sliced = sliced.concat("");
    }
    return sliced.join("***************").length;
  }
}

var SignupForm = React.createClass({
  propTypes: {
    counter: React.PropTypes.number.isRequired,
    hasClickedOk: React.PropTypes.bool.isRequired,
    onOk: React.PropTypes.func.isRequired
  },

  getInitialState: function() {
    return {
      email: '',
      oneTask: '',
      hasScrolled: false
    };
  },

  onChangeEmail: function(event) {
    this.setState({ email: event.target.value });
  },

  onEmailKeyPress: function(event) {
    if (event.which === 13) {
      event.preventDefault();
      if (this.hasEmail() && !this.props.hasClickedOk) {
        event.target.blur();
        this.onOk();
      }
    }
  },

  onChangeOneTask: function(event) {
    this.setState({ oneTask: event.target.value });
  },

  onOk: function() {
    this.props.onOk();
  },

  onSubmit: function() {

  },

  hasEmail: function() {
    return /^[^@]+@[^@]+\.[^@]+$/.test(this.state.email);
  },

  render: function() {
    return (
      <div id="mc_embed_signup">
        <form
          action="//ellipsis.us14.list-manage.com/subscribe/post?u=7e90c1fb7ff3d6aab44c1c25e&amp;id=6ad5b3cc3f" method="post"
          name="mc-embedded-subscribe-form"
          noValidate={true}
        >
          <div id="mc_embed_signup_scroll">

            <div className="columns columns-elastic">
              {this.renderSection1()}
              {this.renderSection2()}
              {this.renderSection3()}
              {this.renderSection4()}
            </div>

            {this.renderSection5()}

          </div>
        </form>
      </div>

    );
  },

  renderSection1: function() {
    return (
      <div className="column-group">
        <div className="column-row">
          <div className="column column-shrink">
            {this.renderEllipsisAvatar()}
          </div>
          <div className="column column-expand">
            {this.renderText1()}
          </div>
        </div>
      </div>
    );
  },

  renderTextSlowly: function(text, key) {
    return text.map((p, i) => {
      let limit = getCounterForTextAtIndex(text, i);
      if (this.props.counter > limit) {
        return (
          <p key={`p${i}-${key}`}>{p.slice(0, this.props.counter - limit)}</p>
        );
      }
    });
  },

  renderTextImmediately: function(text, key) {
    return text.map((p, i) => (
      <p key={`p${i}-${key}`}>{p}</p>
    ));
  },

  renderText1: function() {
    if (this.props.hasClickedOk) {
      return this.renderTextImmediately(text1, 't1');
    } else {
      return this.renderTextSlowly(text1, 't1');
    }
  },

  renderText2: function() {
    return this.renderTextSlowly(text2, 't2');
  },

  renderSection2: function() {
    var limit = getCounterForTextAtIndex(text1, text1.length);
    if (this.props.hasClickedOk || this.props.counter > limit) {
      return (
        <div className="column-group fade-in">
          <div className="column-row">
            <div className="column column-shrink pvm">
              {this.renderPersonAvatar()}
            </div>
            <div className="column column-expand ptm pbxl">
              <div className="mc-field-group">
                <div className="columns columns-elastic">
                  <div className="column column-expand">
                    <input type="email"
                      autoFocus={true}
                      value={this.state.email}
                      name="EMAIL"
                      className="required email form-input form-input-borderless"
                      id="mce-EMAIL"
                      placeholder="Your email address (required)"
                      onChange={this.onChangeEmail}
                      onKeyPress={this.onEmailKeyPress}
                    />
                  </div>
                  <div className="column column-shrink pvs">
                    <button type="button"
                      className="button-primary button-s button-shrink visibility"
                      disabled={!this.hasEmail() || this.props.hasClickedOk}
                      onClick={this.onOk}
                    >OK</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  },

  renderSection3: function() {
    if (this.props.hasClickedOk) {
      return (
        <div className="column-group">
          <div className="column-row">
            <div className="column column-shrink ptm">
              {this.renderEllipsisAvatar()}
            </div>
            <div className="column column-expand ptm">
              {this.renderText2()}
            </div>
          </div>
        </div>
      );
    }
  },

  renderSection4: function() {
    var limit = getCounterForTextAtIndex(text2, text2.length);
    if (this.props.hasClickedOk && this.props.counter > limit) {
      return (
        <div ref="section4" className="column-group fade-in">
          <div className="column-row">
            <div className="column column-shrink pvm">
              {this.renderPersonAvatar()}
            </div>
            <div className="column column-expand pvm">
              <div className="mc-field-group">
                <input
                  autoFocus={true}
                  type="text"
                  value={this.state.oneTask}
                  onChange={this.onChangeOneTask}
                  name="ONETASK"
                  className="form-input form-input-borderless"
                  id="mce-ONETASK"
                  placeholder="Totally optional… press enter to skip"
                  onKeyPress={this.onSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
  },

  renderSection5: function() {
    var limit = getCounterForTextAtIndex(text2, text2.length);
    if (this.props.hasClickedOk && this.props.counter > limit) {
      return (
        <div ref="section5">
          <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true"><input type="text" name="b_7e90c1fb7ff3d6aab44c1c25e_6ad5b3cc3f" tabIndex="-1" value="" /></div>
          <div className="mtl mbxxl align-c">
            <button type="submit" name="subscribe" className="button button-primary">
              Keep me updated
            </button>
          </div>
          <p className="type-xs type-weak align-c">
            Ellipsis is being built and trained by <a href="https://twitter.com/andrewcatton" target="_blank">Andrew</a>, <a href="https://twitter.com/attaboy" target="_blank">Luke</a> and <a href="https://twitter.com/matteomelani" target="_blank">Matteo</a> in Menlo Park and Toronto.
          </p>
        </div>
      );
    }
  },

  renderEllipsisAvatar: function() {
    return (
      <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>Ellipsis</title>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Group-32">
            <path d="M9.99430406,8 L22.0056959,8 C23.1073421,8 24,8.89260695 24,9.99430406 L24,22.0056959 C24,23.1073421 23.1073931,24 22.0056959,24 L4,24 L8,28 L8,9.99430406 C8,8.89265794 8.89260695,8 9.99430406,8 Z M0,28 L0,32 L4,32 L22.0056959,32 C27.5257734,32 32,27.5255177 32,22.0056959 L32,9.99430406 C32,4.47422663 27.5255177,0 22.0056959,0 L9.99430406,0 C4.47422663,0 0,4.47448226 0,9.99430406 L0,28 Z" id="square" fill="#21222C"></path>
            <path d="M9.99430406,6 L22.0056959,6 C24.211886,6 26,7.78801187 26,9.99430406 L26,22.0056959 C26,24.211886 24.2119881,26 22.0056959,26 L4,26 L6,28 L6,9.99430406 C6,7.78811402 7.78801187,6 9.99430406,6 Z M2,28 L2,30 L4,30 L22.0056959,30 C26.4211783,30 30,26.4209738 30,22.0056959 L30,9.99430406 C30,5.57882171 26.4209738,2 22.0056959,2 L9.99430406,2 C5.57882171,2 2,5.57902618 2,9.99430406 L2,28 Z" id="square" fill="#FFFFFF"></path>
            <path d="M4,9.99430406 C4,6.68374134 6.68324555,4 9.99430406,4 L22.0056959,4 C25.3162587,4 28,6.69303423 28,10 L28,16 L28,22 C28,25.3137085 25.3167544,28 22.0056959,28 L4,28 L4,9.99430406 Z" id="Combined-Shape" fill="#21222C"></path>
            <rect id="Rectangle-13-Copy-2" fill="#FFFFFF" x="9" y="15" width="9" height="2" rx="1"></rect>
            <rect id="Rectangle-13-Copy" fill="#FFFFFF" x="9" y="9" width="14" height="2" rx="1"></rect>
            <rect id="Rectangle-13" fill="#FFFFFF" x="9" y="21" width="14" height="2" rx="1"></rect>
          </g>
        </g>
      </svg>
    );
  },

  renderPersonAvatar: function() {
    return (
      <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="horse_head" fill="#21222C">
            <g transform="translate(0.750000, 3.000000)" id="horse">
              <path d="M21.9991566,9.92295168 L19.3002737,6.94487402 L16.6013908,4.8043807 C16.3687285,3.96679636 14.9727546,2.43122507 14.9727546,2.43122507 C14.2747677,0.523394072 13.3441184,0.337264218 13.3441184,0.337264218 L13.3906509,0.756056389 C13.3441184,1.1283161 13.2510535,1.96590044 13.1579885,2.85001724 L11.5293523,0.942186242 C11.0174952,-0.686449977 10.7383004,0.290731755 10.7383004,0.290731755 C9.94724857,1.22138102 10.8313654,4.10639375 10.8313654,4.10639375 L10.5521706,4.432121 C9.38885901,4.94397809 8.08595003,6.66567924 8.08595003,6.66567924 L9.48192393,6.38648446 L7.15530076,9.41109458 C2.96737906,14.7157954 0.501158498,15.5533797 0.501158498,15.5533797 C-0.336425843,16.0187044 0.128898791,17.9265354 0.128898791,17.9265354 C-0.103763526,19.089847 0.640755888,20.2531586 0.640755888,20.2531586 L2.45552196,20.904613 C2.45552196,20.904613 4.3168205,18.8571847 5.38706715,18.996782 L2.45552196,20.904613 C4.54948281,21.8352623 5.94545672,19.6017041 5.94545672,19.6017041 C6.36424889,19.3225093 8.64433959,19.3690417 8.64433959,19.3690417 L11.9481445,18.4849249 C13.4837158,18.9037171 15.9034039,17.6938731 15.9034039,17.6938731 L17.9042998,26.5815736 L30.375,19.9274313 L21.9991566,9.92295168 L21.9991566,9.92295168 Z M2.36245703,21.2023048 C2.36245703,21.2023048 1.52487269,21.9933567 1.0130156,21.2488373 C1.0130156,21.2488373 0.873418205,18.3172921 2.22285964,18.6430193 C2.22285964,18.6430193 3.52576862,19.9459283 2.36245703,21.2023048 L2.36245703,21.2023048 Z M11.9481445,13.1987211 C11.9481445,13.1987211 11.2036251,13.4313834 10.691768,12.4076692 C10.691768,12.4076692 11.5293523,10.8720979 12.7857288,12.4076692 C12.7857288,12.4076692 12.4600016,13.1521886 11.9481445,13.1987211 L11.9481445,13.1987211 Z" transform="translate(15.187500, 13.290787) scale(-1, 1) translate(-15.187500, -13.290787) "></path>
            </g>
          </g>
        </g>
      </svg>
    );
  },

  componentDidUpdate: function() {
    if (!this.state.hasScrolled && this.refs.section4 && this.refs.section5) {
      var footerHeight = document.getElementById('footer').offsetHeight;
      var windowBottom = window.scrollY + window.innerHeight - footerHeight;
      var section5Bottom = this.refs.section5.offsetTop + this.refs.section5.scrollHeight;
      var diff = section5Bottom - windowBottom;
      if (diff <= 0) return;
      window.scrollTo(0, window.scrollY + diff);
      this.setState({ hasScrolled: true });
    }
  }
});

function nextCharSpeed() {
   return Math.random() * (40 - 10) + 10;
}

var counter = 8;
var hasClickedOk = false;

function next() {
  setTimeout(() => {
    ReactDOM.render(React.createElement(SignupForm, {
      counter: counter,
      hasClickedOk: hasClickedOk,
      onOk: () => {
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

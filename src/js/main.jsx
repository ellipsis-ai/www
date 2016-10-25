(function() {

var text1 = [
  "👋 Hi there. I’m Ellipsis.",
  "I’m learning how to help people be more productive at work.",
  "If you want to know when I have any announcements, tell me your email address.",
];

var text2 = [
  "OK! Now if you have a moment before I add you to the list, there’s one more thing.",
  "What’s one repetitive task at work you wish could be automated?"
];

var pad = "***************";

var text1Counters = [
  0,
  text1.slice(0, 1).concat("").join(pad).length,
  text1.slice(0, 2).concat("").join(pad).length,
  text1.slice(0, 3).join(pad).length,
];

var text2Counters = [
  0,
  text2.slice(0, 1).concat("").join(pad).length,
  text2.slice(0, 2).join(pad).length
];

var SignupForm = React.createClass({
  propTypes: {
    counter: React.PropTypes.number.isRequired,
    hasClickedOk: React.PropTypes.bool.isRequired,
    onOk: React.PropTypes.func.isRequired
  },

  getInitialState: function() {
    return {
      email: '',
      oneTask: ''
    };
  },

  onChangeEmail: function(event) {
    this.setState({ email: event.target.value });
  },

  onEmailKeyPress: function(event) {
    if (event.which === 13) {
      event.preventDefault();
      event.target.blur();
      if (this.hasEmail() && !this.props.hasClickedOk) {
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

  renderTextSlowly: function(text, textCounters, key) {
    return text.map((p, i) => {
      if (this.props.counter > textCounters[i]) {
        return (
          <p key={`p${i}-${key}`}>{p.slice(0, this.props.counter - textCounters[i])}</p>
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
      return this.renderTextSlowly(text1, text1Counters, 't1');
    }
  },

  renderText2: function() {
    return this.renderTextSlowly(text2, text2Counters, 't2');
  },

  renderSection2: function() {
    if (this.props.hasClickedOk || this.props.counter > text1Counters[3]) {
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
    if (this.props.hasClickedOk && this.props.counter > text2Counters[2]) {
      return (
        <div className="column-group fade-in">
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
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  },

  renderSection5: function() {
    if (this.props.hasClickedOk && this.props.counter > text2Counters[2]) {
      return (
        <div>
          <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true"><input type="text" name="b_7e90c1fb7ff3d6aab44c1c25e_6ad5b3cc3f" tabIndex="-1" value="" /></div>
          <div className="mtxl align-c">
            <button type="submit" name="subscribe" className="button button-primary" disabled={!!this.state.oneTask}>
              Keep me updated
            </button>
          </div>
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
      <svg width="27px" height="32px" viewBox="0 0 27 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>Person</title>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="simpler" transform="translate(-28.000000, -353.000000)" fill="#21222C">
            <path d="M45.2581377,385 L30.4059282,385 C31.0326242,384.222716 31.6273247,383.360226 32.2839296,382.368711 C33.2208437,380.954646 33.5446251,379.129506 33.2490137,376.895032 C33.1071203,375.824224 32.3138386,374.745764 31.7285281,373.853713 C29.9006066,371.066272 27.9102728,368.192234 28.0031296,363.741719 C28.0765108,360.220466 30.2226491,357.451109 32.2609763,355.683006 C36.4099685,352.082807 46.0135116,351.996558 49.6022333,356.088863 C51.0242978,357.709856 52.1785732,360.115089 52.3750678,362.855928 C52.4960945,364.541956 52.2919488,364.997545 51.801234,366.122607 C51.2280957,367.591274 55.3652635,371.49543 54.3097571,372.485207 C53.6715843,373.108077 53.0334116,373.079212 52.3020344,373.538626 C51.7476761,373.806416 52.3938478,374.597958 52.0422442,375.906647 C51.7834973,376.869297 51.2729591,377.281066 51.1168068,378.11156 C51.0034311,378.712868 51.6760339,378.874933 51.4211126,380.088331 C51.2030557,381.124709 50.5026307,381.436666 49.3681787,381.609164 C47.8657775,381.836263 46.7914911,381.472835 45.2852644,381.429711 C44.2680136,381.426928 44.5260649,383.650969 45.2581377,385 Z" id="head">
            </path>
          </g>
        </g>
      </svg>
    );
  }
});

function nextCharSpeed() {
   return Math.random() * (50 - 10) + 10;
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

//backbone view //

import User from '..models/user-input';

export default Backbone.View.extend({

  events: {
    submit(ev) {
      ev.preventDefault();

      var username = this.$el.find('.login-user').val();
      var password = this.$el.find('.login-psw').val();
      var submit = new User({username, password});
      var errorMsg = submit.getValidationErrors();

      if (errorMsg) {
        alert(errorMsg);
      } else {
        window.location = 'http://www.theironyard.com';
      }
    },
  },
});

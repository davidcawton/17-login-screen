//Backbone Model //

export default Backbone.Model.extend({
  users: [
    {user: 'admin@google.com', password: 'pandas'},
    {user: 'dcawton@gmail.com', password: 'honeycrisp'},
    {user: 'aaron@theironyard.com', password: 'password123'},
  ],

  getValidationErrors() {
    var username = this.get('username');
    var password = this.get('password');

    var userCorrect = this.users.reduce(function(cary, over) {
      if (over.user === username) {
        return true;
      }

      return cary;
    }, false);

    var passCorrect = this.user.reduce(function(cary, over) {
      if (over.password === password) {
        return true;
      }

      return cary;
    }, false);

    if (username === '') {
      return 'Please enter an email before loggin in.';
    }

    if (!username) {
      return 'Email is not correct.';
    }

    if (password === '') {
      return 'Please enter a password to continue.';
    }

    if (!password) {
      return 'Password does not match email address.';
    }
  },
});

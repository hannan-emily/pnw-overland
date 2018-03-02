'use strict';
var bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      validate: {
        len: { //validate it's length
          args: [1,99],
          msg: 'Invalid user name. Must be between 1 and 99 characters.' //occurs on failure
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'Invalid email address.' //occurs on failure
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: { //validate it's length
          args: [8,99], //restrict password length, must be min. 8 characters, max 99 chars
          msg: 'Password must be at least 8 characters.'//occurs on failure
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: function(pendingUser, options) { //this encrypts the password BEFORE the user is created in the database
        if (pendingUser && pendingUser.password) {
          var hash = bcrypt.hashSync(pendingUser.password, 10);
          pendingUser.password = hash;
        }
      }
    }
  });
  user.associate = function(models) { //this is a class method
    // associations can be defined here
  };

  //SEQUELIZE DOES NOT CALL THESE FUNCTIONS. WE CALL THESE FUNCTIONS LATER ON.

  //attaching a function on to a class using protoypes
  //we just made up 'isValidPassword' as a new function name
  //comparing user password with hashed password
  user.prototype.validPassword = function(passwordTyped) {
    //'this' refers to this current record from our database, THIS model, & the instances built from this model
    return bcrypt.compareSync(passwordTyped, this.password);
  };

  //removes sensitive password from the user object
  //this "cleaned up" object will be called in our routes
  //we'll use this later on
  user.prototype.toJSON = function() {
    var userData = this.get();
    delete userData.password;
    return userData;
  };
  return user;
};

// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Hosts } from './hosts.js';

Meteor.methods({
  'hosts.insert'(firstName, lastName, street, city, state, zip, email, phone, spaceType, spaceAvailable) {
    check(spaceAvailable, String);
    check(spaceType, String);
    check(phone, String);
    check(email, String);
    check(zip, String);
    check(state, String);
    check(city, String);
    check(street, String);
    check(lastName, String);
    check(firstName, String);

    return Hosts.insert({
      firstName: firstName,
      lastName: lastName,
      street: street,
      city: city,
      state: state,
      zip: zip,
      email: email,
      phone: phone,
      spaceType: spaceType,
      spaceAvailable: spaceAvailable,
      createdAt: new Date(),
    });
  },

  'hosts.updateSpaceAvailable'(amount) {
    check(amount, Number);

    Hosts.update({ firstName: "Samir" }, 
      { $set: { spaceAvailable: parseFloat(amount)  } }
    )
  }

});

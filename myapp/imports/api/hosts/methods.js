// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Hosts } from './hosts.js';

Meteor.methods({
  'hosts.insert'(firstName, lastName, street, city, state, zip, phone) {
    check(phone, String);
    check(zip, String);
    check(state, String);
    check(city, String);
    check(street, String);
    check(lastName, String);
    check(firstName, String);

    return Hosts.insert({
      phone,
      zip,
      state,
      city,
      street,
      lastName,
      firstName,
      createdAt: new Date(),
    });
  },
});

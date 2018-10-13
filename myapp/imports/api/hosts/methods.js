// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Hosts } from './hosts.js';

Meteor.methods({
  'hosts.insert'(firstName, lastName) {
    check(lastName, String);
    check(firstName, String);

    return Hosts.insert({
      lastName,
      firstName,
      createdAt: new Date(),
    });
  },
});

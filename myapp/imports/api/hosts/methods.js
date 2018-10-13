// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Hosts } from './hosts.js';

Meteor.methods({
  'hosts.insert'(title, url) {
    check(url, String);
    check(title, String);

    return Hosts.insert({
      url,
      title,
      createdAt: new Date(),
    });
  },
});

// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Hosts } from '../hosts.js';

Meteor.publish('hosts.all', function () {
  return Hosts.find({});
});

import { Hosts } from '/imports/api/hosts/hosts.js';
import { Meteor } from 'meteor/meteor';

import './hello.html';

Template.hello.onCreated(function helloOnCreated() {
	Meteor.subscribe('hosts.all');
});

// Template.hello.helpers({
//   hosts() {
//     return Hosts.find({});
//   },
// });

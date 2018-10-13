import { Hosts } from '/imports/api/hosts/hosts.js';
import { Meteor } from 'meteor/meteor';
import './info.html';

Template.info.onCreated(function () {
  Meteor.subscribe('hosts.all');
});

// Template.info.helpers({
//   hosts() {
//     return Hosts.find({});
//   },
// });

// Template.info.events({
//   'submit .info-link-add'(event) {
//     event.preventDefault();

//     const target = event.target;
//     const title = target.title;
//     const url = target.url;

//     Meteor.call('hosts.insert', title.value, url.value, (error) => {
//       if (error) {
//         alert(error.error);
//       } else {
//         title.value = '';
//         url.value = '';
//       }
//     });
//   },
// });

Template.info.events({
  'submit .new-host': function(event) {
    debugger;

    var firstName = event.target.title.value;

    Meteor.call('hosts.insert', firstName, "Johnson", (error) => {
      if (error) {
        alert(error.error);
      }
    });

    event.target.title.value = "";
  },
});

import { Hosts } from '/imports/api/hosts/hosts.js';
import { Meteor } from 'meteor/meteor';
import './bookForm.html';

Template.bookForm.onCreated(function () {
	Meteor.subscribe('hosts.all');
});

// Template.hostForm.helpers({
//   hosts() {
//     return Hosts.find({});
//   },
// });

// Template.hostForm.events({
//   'submit .hostForm-link-add'(event) {
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

Template.bookForm.events({
	'submit .new-booking': function(event) {

		debugger;
		var spaceAmnt = event.target.spaceAmnt.value;

		Meteor.call('hosts.insert', firstName, lastName, street, city, state, zip, email, phone, spaceType, spaceAvailable, (error) => {
				if (error) {
					alert(error.error);
				}
			});

			event.target.spaceAmnt.value = "";
	},
});

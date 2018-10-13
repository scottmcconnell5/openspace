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
		var firstName = event.target.firstName.value;
		var lastName = event.target.lastName.value;
		var street = event.target.street.value;
		var city = event.target.city.value;
		var state = event.target.state.value;
		var zip = event.target.zip.value;
		var phone = event.target.phone.value;

		Meteor.call('hosts.insert', firstName, lastName, street, city, state, zip, phone, (error) => {
				if (error) {
					alert(error.error);
				}
			});

			event.target.firstName.value = "";
			event.target.lastName.value = "";
			event.target.street.value = "";
			event.target.city.value = "";
			event.target.state.value = "";
			event.target.zip.value = "";
			event.target.phone.value = "";
	},
});

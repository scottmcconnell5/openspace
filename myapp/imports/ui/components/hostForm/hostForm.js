import { Hosts } from '/imports/api/hosts/hosts.js';
import { Meteor } from 'meteor/meteor';
import './hostForm.html';
import '/imports/ui/stylesheets/hostForm.css';

Template.hostForm.onCreated(function () {
	Meteor.subscribe('hosts.all');
});

// Template.hostForm.helpers({
//   hosts() {
//     return Hosts.find({});
//   },
// });


Template.hostForm.events({
	'submit .new-host': function(event) {
		var firstName = event.target.firstName.value;
		var lastName = event.target.lastName.value;
		var street = event.target.street.value;
		var city = event.target.city.value;
		var state = event.target.state.value;
		var zip = event.target.zip.value;
		var email = event.target.email.value;
		var phone = event.target.phone.value;
		var spaceType = event.target.spaceType.value;
		var spaceAvailable = parseFloat(event.target.spaceAvailable.value);
		var termsAccepted = $("input[name='termsAccepted']").is(":checked");

		if (firstName && lastName && street && city && state && zip && email && phone && spaceType && spaceAvailable && termsAccepted) {

			Meteor.call('hosts.insert', firstName, lastName, street, city, state, zip, email, phone, spaceType, spaceAvailable, (error) => {
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
				event.target.email.value = "";
				event.target.phone.value = "";
				event.target.spaceType.value = "";
				event.target.spaceAvailable.value = "";

		} else {
			alert('Please fill out all required fields before submitting');
			return false;
		}
	},
});

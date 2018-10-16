import { Hosts } from '/imports/api/hosts/hosts.js';
import { Meteor } from 'meteor/meteor';
import './bookForm.html';

Template.bookForm.onCreated(function () {
	Meteor.subscribe('hosts.all');
});

Template.bookForm.events({
	'submit .new-booking': function(event) {

		debugger;
		var spaceAmnt = event.target.spaceAmnt.value;

		Meteor.call('hosts.updateSpaceAvailable', Number(spaceAmnt), (error) => {
			if (error) {
				alert(error.error);
			}
		});

		event.target.spaceAmnt.value = "";
	},
});

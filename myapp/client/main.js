import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Hosts = new Mongo.Collection('hosts');

Template.hostTemplate.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hostTemplate.helpers({
	counter() {
		return Template.instance().counter.get();
	},
});

Template.body.events({
	'click button'(event, instance) {
		debugger;
		switch (event.target.id) {
			case "HostInfoSubmit":
				console.log("Clicked");
				var firstName = event.target.title.value;
				Hosts.insert({
					firstName: firstName,
					createdAt: new Date()
				});
				return false;
				break; 
			case "searchBarButton":
				return false;
				break;
		}
	},
});

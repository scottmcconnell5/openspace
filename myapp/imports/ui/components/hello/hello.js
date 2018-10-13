import './hello.html';
import { Hosts } from '/imports/api/hosts/hosts.js';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

Template.list_items.onCreated(function list_itemsOnCreated(){
  Meteor.subscribe('hosts.all');
});

Template.list_items.helpers({
  hosts() {
    return Hosts.find({});
  }
});

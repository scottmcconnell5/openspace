// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Hosts } from '../../api/hosts/hosts.js';

Meteor.startup(() => {
  // if the Hosts collection is empty
  if (Hosts.find().count() === 0) {
    debugger;
    const data = [
      {
        firstName: 'Scott',
        lastName: 'McConnell',
        street: '1262 Farm Road',
        city: 'Berwyn',
        state: 'Pennsylvania',
        zip: '19312',
        phone: '6103124662',
        createdAt: new Date(),
      },
    ];

    data.forEach(host => Hosts.insert(host));
  }
});

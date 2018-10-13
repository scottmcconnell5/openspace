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
        street: '1262 Farm Rd',
        city: 'Berwyn',
        state: 'Pennsylvania',
        zip: '19312',
        phone: '6103124662',
        createdAt: new Date(),
      },
      {
        firstName: 'Josh',
        lastName: 'France',
        street: '220 Alexander Ave',
        city: 'Durham',
        state: 'North Carolina',
        zip: '27705',
        phone: '9802146075',
        createdAt: new Date(),
      },
      {
        firstName: 'Samir',
        lastName: 'Agadi',
        street: '207 Erwin Rd',
        city: 'Durham',
        state: 'North Carolina',
        zip: '27705',
        phone: '2486335250',
        createdAt: new Date(),
      },
    ];

    data.forEach(host => Hosts.insert(host));
  }
});

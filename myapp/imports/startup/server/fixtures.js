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
        email: 'skm44@duke.edu',
        phone: '6103124662',
        spaceType: 'Garage',
        spaceAvailable: '160',
        createdAt: new Date(),
      },
      {
        firstName: 'Josh',
        lastName: 'France',
        street: '220 Alexander Ave',
        city: 'Durham',
        state: 'North Carolina',
        zip: '27705',
        email: 'jrf36@duke.edu',
        phone: '9802146075',
        spaceType: 'Shed',
        spaceAvailable: '100',
        createdAt: new Date(),
      },
      {
        firstName: 'Samir',
        lastName: 'Agadi',
        street: '207 Erwin Rd',
        city: 'Durham',
        state: 'North Carolina',
        zip: '27705',
        email: 'sa280@duke.edu',
        phone: '2486335250',
        spaceType: 'Closet',
        spaceAvailable: '50',
        createdAt: new Date(),
      },
    ];

    data.forEach(host => Hosts.insert(host));
  }
});

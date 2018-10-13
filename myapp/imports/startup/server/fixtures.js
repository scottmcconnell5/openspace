// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Hosts } from '../../api/hosts/hosts.js';

Meteor.startup(() => {
  // if the Hosts collection is empty
  if (Hosts.find().count() === 0) {
    const data = [
      {
        title: 'Do the Tutorial',
        url: 'https://www.meteor.com/try',
        createdAt: new Date(),
      },
      {
        title: 'Follow the Guide',
        url: 'http://guide.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Read the Docs',
        url: 'https://docs.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Discussions',
        url: 'https://forums.meteor.com',
        createdAt: new Date(),
      },
    ];

    data.forEach(host => Hosts.insert(host));
  }
});

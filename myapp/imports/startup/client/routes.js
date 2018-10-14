import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/hostSignUp/hostSignUp.js';
import '../../ui/pages/bookSpace/bookSpace.js';
import '../../ui/pages/not-found/not-found.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

FlowRouter.route('/BecomeAHost', {
  name: 'App.hostSignUp',
  action() {
    BlazeLayout.render('App_body', { main: 'App_hostSignUp' });
  },
});

FlowRouter.route('/BookASpace', {
  name: 'App.bookSpace',
  action() {
    BlazeLayout.render('App_body', { main: 'App_bookSpace' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};

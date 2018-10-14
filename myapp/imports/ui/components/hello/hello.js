import './hello.html';
import '/imports/ui/stylesheets/hello.css';
import { Hosts } from '/imports/api/hosts/hosts.js';


Template.list_items.onCreated(function list_itemsOnCreated(){
  Meteor.subscribe('hosts.all');
});

Template.list_items.helpers({
  hosts() {
    return Hosts.find({});
  }
});

Template.map.helpers({
  initMap(){
    debugger;
    var durham = {lat:35.9940, lng:-78.8986};
            // The map, centered at Uluru
    var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 12, center: durham});
            // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: durham, map: map});
  }
});

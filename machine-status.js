
var firebase_email = 'YOUR_EMAIL'
var firebase_password = 'YOUR_PASSWORD'
var firebase_sandbox = 'https://firstbuild-sandbox.firebaseio.com'

var Firebase = require('firebase');
var ref = new Firebase(firebase_sandbox);
var credentials = { email: firebase_email, password: firebase_password };
var writable_firebase 


ref.authWithPassword(credentials, function(err, auth) {

  if (err) {
    console.error('Failed to login with credentials:', err);
  }
  else if (auth) {
    ref.child('users').child(auth.uid).once('value', function(snapshot) {
      console.log(JSON.stringify(snapshot.val(), null, 2));
    });
  }
  else {
    console.error('Failed to login with credentials!');
    console.error('Make sure you entered your email and password correctly.');
  }

  writable_firebase = ref.child('users').child(auth.uid)

  // setup the green bean
  var greenBean = require("green-bean");
  greenBean.connect("laundry", function(laundry){

      // subscribe to the end of cycle
      console.log("Subscribing to machineStatus.");

      // https://github.com/GEMakers/gea-plugin-laundry#laundrymachinestatus
      laundry.machineStatus.subscribe(function (value) {

          // get the push for end of cycle
          console.log("machineStatus:", value);

          // if(value){  // <--- That's gonna be zero...

          // current_machine_status will be !OVERWRITTEN! after every status change.
          content = {'current_machine_status': value};
          writable_firebase.update(content, function(err) {});

      });
  });

});


This contains some sample code to listen to a laundry machine and then push that status change into FireBase.


#### Get started

Connect to raspberry pi, then run:

```
git clone https://github.com/firstbuild/green-bean-firebase-laundry
cd green-bean-firebase-laundry
npm install
```

#### Set your credentials!

Edit `machine-status.js` with your own `firebase_email`, `firebase_password`, and change the `firebase_sandbox` if you are not using FirstBuild's FireBase sandbox.

#### Run It!

```
node machine-status.js
```

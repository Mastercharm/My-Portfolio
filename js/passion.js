var firebaseConfig = {
    apiKey: "AIzaSyBiM79M4Q0KGF2KXtSHHKw0TVPplKvzoRw",
    authDomain: "portfolio-sai.firebaseapp.com",
    databaseURL: "https://portfolio-sai.firebaseio.com",
    projectId: "portfolio-sai",
    storageBucket: "portfolio-sai.appspot.com",
    messagingSenderId: "481657113658",
    appId: "1:481657113658:web:5b6d0e1afc74e7f73d3903",
    measurementId: "G-DXEF0C9N9J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
var x="",i,y;
//var p0=document.getElementById("P0");
var ref = firebase.database().ref('Poetry');
ref.on("value", function(snapshot) {
   console.log(snapshot.val()[0]);
    //p0.innerHTML=snapshot.val()[0];
    //p1.innerHTML=snapshot.val()[1];
    y=snapshot.val()
    for(i=0;i<y.length;i++){
      x+=y[i];
      document.getElementById("Poetry"+i).innerHTML=y[i];
    }
    
}, function (error) {
   console.log("Error: " + error.code);
});
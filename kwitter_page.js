//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyD7H0dFugaiWCgA87z4IJj11fM3ad7drEA",
      authDomain: "kwitter-eea19.firebaseapp.com",
      databaseURL: "https://kwitter-eea19-default-rtdb.firebaseio.com",
      projectId: "kwitter-eea19",
      storageBucket: "kwitter-eea19.appspot.com",
      messagingSenderId: "826241773536",
      appId: "1:826241773536:web:936931c885da424affc585"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {

      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({

            name: user_name,
            message: msg,
            like: 0

      });

      document.getElementById("msg").value = "";


}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
      }

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDfK5U-2xuLkAzH3Hbb4XOPSKcdofBld5o",
    authDomain: "straight-code.firebaseapp.com",
    projectId: "straight-code",
    storageBucket: "straight-code.appspot.com",
    messagingSenderId: "885715598271",
    appId: "1:885715598271:web:367c41f8ab5503c01eff0a",
    measurementId: "G-E7RE98T9H6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("Signed Up Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    if(email != password){
      alert("email or password is incorrect...")
    }
    if(email === password){
      window.location.href="../straight-code/admin/dashboard/dist/index.html"; 
    }
    else{
      alert("No user found...")
    }   
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("Successfully Logged Out");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      window.location.href="../straight-code/admin/dashboard/dist/index.html";
      alert(email+" user Logged In ");
    }else{
      alert("Log In Needed...")
    }
  })
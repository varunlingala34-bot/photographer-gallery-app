<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA-G2guae7rX9w3uQYVDMiIlzWN5j9lnJQ",
    authDomain: "framefolio-gallery.firebaseapp.com",
    projectId: "framefolio-gallery",
    storageBucket: "framefolio-gallery.firebasestorage.app",
    messagingSenderId: "867132582416",
    appId: "1:867132582416:web:66c9463dab4e38a0533895",
    measurementId: "G-FWDJ42K5V3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

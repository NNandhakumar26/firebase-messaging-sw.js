importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyD08uiBNQZ5Q6TPAgh2PYNjJ-u8ufLv-qE",
  authDomain: "pushnotification-c0d01.firebaseapp.com",
  projectId: "pushnotification-c0d01",
  storageBucket: "pushnotification-c0d01.appspot.com",
  messagingSenderId: "161680014416",
  appId: "1:161680014416:web:bf6e209095acc025fce555"
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});



{/* <script>
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("/firebase-messaging-sw.js");
    });
  }
</script> */}

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyB-Trwc013o80XBdvszSMLBLtwMEiLK4zE",
    authDomain: "unidad4-a09cf.firebaseapp.com",
    databaseURL: "https://unidad4-a09cf-default-rtdb.firebaseio.com",
    projectId: "unidad4-a09cf",
    storageBucket: "unidad4-a09cf.appspot.com",
    messagingSenderId: "436768050347",
    appId: "1:436768050347:web:ee0d9de198985a91c6bbee"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //obtener datos del html

  
  var txtUsuario = document.getElementById("usuario");
  var txtMensaje = document.getElementById("mensaje");
  var btnEnviar = document.getElementById("btnenviar");
  var chatlista = document.getElementById("chatlista");

  //Ejecutar accion en el boton
  btnEnviar.addEventListener("click",function(){
    var usuario = txtUsuario.value;
    var mensaje = txtMensaje.value;
    var html = "<li>"+usuario+" dice: "+mensaje+"</li>";

    chatlista.innerHTML += html;

    firebase.database().ref('chat').push({
        user: usuario,
        message: mensaje
    })
  });

  /*Mostrar datos*/
  firebase.database().ref('chat').on('value', (snapshot) => {
    var html1 = '';
    //console.log(snapshot.val());
    snapshot.forEach(function (e){
      var elemento = e.val();
      var usuario1 = elemento.user;
      var mensaje1 = elemento.message;
      html1 += "<br><li><div class='txt'><img id='profile-photo' src='https://i.imgur.com/gh8KUOd.png' class='rounded-square bt-left' width='50px'/>"
      +usuario1+" dice: <br><div class='chat ml-6 p-3'>"+mensaje1+"</li></div></div>";
    });
    chatlista.innerHTML = html1;
  })
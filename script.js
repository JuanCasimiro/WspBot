let =
  "Gracias por comunicarte con IRNIA CAR. Confirmamos el turno para el día…. a las ….";

//

let send = document.getElementById("send");

send.onclick = function () {
  let numero = document.getElementById("numero").value;
  let fecha = document.getElementById("fecha").value;
  let hora = document.getElementById("hora").value;

  location.href = "https://api.whatsapp.com/send?phone=" + numero + "&text=" + buildMessage(fecha, hora);
};

function buildMessage(fecha, hora) {
  return (
    "Gracias por comunicarte con IRNIA CAR. Confirmamos el turno para el día " +
    fecha +
    " a las " +
    hora + ', te esperamos en nuestro taller: https://maps.app.goo.gl/EVPDkadauWkzSYao8' 
  );
}

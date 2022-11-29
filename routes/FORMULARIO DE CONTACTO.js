var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async (req, res, next) => (
var nombres = req.body.Nombres;
var CP= req.body.cp;
var ciudad = req.body.ciudad;
var provincia = req.body.provincia;
var mail = req.body.mail;
var mensaje = req.body.mensaje;

var obj = (
  to: 'franco_frasso@hotmail.com',
  subject: 'contacto desde maquetado',
  html: nombres + " " + "se contacto a traves del maquetado, su mail es" + mail + ciudad + provincia + CP +"hizo el siguiente comentario" + mensaje)

var transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth {
  user: process.env.SMTP_USER,
  pass: process.env.SMTP_PASS
}
    })



var info = await transporter.sendMail(obj)

res.render('index', {
  message: 'mensaje enviado correctamente'
});
module.exports = router;
)
)

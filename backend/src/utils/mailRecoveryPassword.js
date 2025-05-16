import nodemailer from 'nodemailer'
import { config } from './config.js'
//Configurar el transportador para enviar correos
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: config.APPUSER.USER,
        pass: config.APPUSER.PASS
    }
})
//Definir a quien se le va a enviar el correo
const sendEmail = async (to, subject, text, html) => {
    try {
        const info = await transporter.sendMail({
            from: `"soporte EPA" <${config.APPUSER.USER}>`,
            to: to,
            subject: subject,
            text: text,
            html: html
        })
        return info
    } catch (err) {
        console.log("error: ", err)
    }
}
//Generar el código HTML para el correo
const HTMLRecoveryEmail = (code) => {
    return `
      <div style="font-family: Arial, sans-serif; text-align: center; background-color: #f4f4f9; padding: 20px; border: 1px solid #ddd; border-radius: 10px; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2c3e50; font-size: 24px; margin-bottom: 20px;">Password Recovery</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.5;">
          Hola, recibimos una solicitud para restablecer tu contraseña. Usa el código de verificación a continuación para continuar:
        </p>
        <div style="display: inline-block; padding: 10px 20px; margin: 20px 0; font-size: 18px; font-weight: bold; color: #fff; background-color: #ff5050; border-radius: 5px; border: 1px solid #e62222;">
          ${code}
        </div>
        <p style="font-size: 14px; color: #777; line-height: 1.5;">
          Este código estará disponible durante los próximos <strong>20 minutos</strong>. Si no solicitaste este correo electrónico, puedes ignorarlo.
        </p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <footer style="font-size: 12px; color: #aaa;">
          Si necesita más ayuda, ponte en contacto con nuestro equipo de soporte en
          <a href="mailto:support@example.com" style="color:#3437db; text-decoration: none;">support@example.com</a>.
        </footer>
      </div>
    `
}
export { sendEmail, HTMLRecoveryEmail }
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const sendContactMail = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message)
    return res.status(400).json({ success: false, error: "Todos los campos son obligatorios." });

  try {
    // Configurar transporte
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Contenido del correo
    const mailOptions = {
      from: `"Portfolio - ${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `Nuevo mensaje de ${name}`,
      text: `
        Nombre: ${name}
        Correo: ${email}

        Mensaje:
        ${message}
        `,
        };

        // Enviar
        await transporter.sendMail(mailOptions);

        return res.status(200).json({ success: true, message: "Correo enviado correctamente." });
        } catch (error) {
        console.error("Error enviando correo:", error);
        return res.status(500).json({ success: false, error: "Error enviando el correo." });
        }
    };

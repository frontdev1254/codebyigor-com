require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

// Criação do servidor Express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Usando variável de ambiente
    pass: process.env.EMAIL_PASS, // Usando variável de ambiente
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Importação dinâmica do 'franc-min' (por ser um módulo ESM)
let franc;
import('franc-min').then(module => {
  franc = module.franc;
}).catch(err => {
  console.error('Erro ao importar franc-min:', err);
});

// Função para detectar o idioma baseado na mensagem do usuário
const detectLanguage = async (message) => {
  if (!franc) {
    console.error('Biblioteca franc-min ainda não carregada. Usando inglês como padrão.');
    return 'en'; // Caso a importação falhe, assume inglês
  }

  const lang = franc(message);
  console.log(`Idioma detectado: ${lang}`); // Log para verificar a detecção

  return lang === 'por' ? 'pt' : 'en'; // Se o idioma for português, retorna 'pt', senão 'en'
};

// Função para enviar e-mail de resposta automática
const sendAutoReply = (email, language) => {
  const subject = language === 'pt' ? 'Obrigado pelo seu contato!' : 'Thank you for reaching out!';
  const text = language === 'pt'
    ? 'Olá,\n\nObrigado por entrar em contato! Recebemos sua mensagem e retornaremos em até um dia útil.\n\nPor favor, note que esta é uma mensagem automática—não responda a este e-mail.\n\nAtenciosamente,\nCodeByIgor'
    : 'Hello,\n\nThank you for reaching out! We have received your message and will get back to you within one business day.\n\nPlease note that this is an automated message—do not reply to this email.\n\nBest regards,\nCodeByIgor';

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Erro ao enviar resposta automática:', error);
    } else {
      console.log(`Resposta automática enviada com sucesso em ${language}:`, info);
    }
  });
};

// Rota para enviar o e-mail
app.post('/send-email', async (req, res) => {
  const { firstName, email, type, comment } = req.body;

  try {
    // Aguarda a detecção do idioma antes de prosseguir
    const language = await detectLanguage(comment);

    console.log(`Enviando resposta automática no idioma: ${language}`); // Log para depuração

    const mailOptions = {
  from: `"Formulário do Site" <${process.env.EMAIL_USER}>`, // Nome + e-mail
  to: 'codebyigor@gmail.com',
  subject: `Novo contato de ${firstName}`,
  text: `Você recebeu uma nova mensagem de contato:\n\nNome: ${firstName}\nE-mail: ${email}\nTipo: ${type}\nComentário: ${comment}`,
};

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ type: 'error', message: 'Falha ao enviar o e-mail' });
      }

      // Envia resposta automática para o remetente no idioma correto
      sendAutoReply(email, language);

      return res.status(200).json({ type: 'success', message: 'E-mail enviado com sucesso!' });
    });
  } catch (error) {
    console.error('Erro ao processar a detecção de idioma:', error);
    res.status(500).json({ type: 'error', message: 'Erro interno do servidor' });
  }
});

// Inicia o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
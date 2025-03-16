import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const PrivacyPolicy: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Política de Privacidad
        </Typography>
        
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            1. Información que recopilamos
          </Typography>
          <Typography paragraph>
            Recopilamos información que usted nos proporciona directamente cuando:
          </Typography>
          <ul>
            <li>Se registra en nuestra plataforma</li>
            <li>Realiza una reserva</li>
            <li>Se comunica con nosotros</li>
            <li>Utiliza nuestros servicios</li>
          </ul>
          <Typography paragraph>
            La información puede incluir:
          </Typography>
          <ul>
            <li>Nombre y apellidos</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Información de pago</li>
            <li>Datos de uso de la plataforma</li>
          </ul>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            2. Uso de la información
          </Typography>
          <Typography paragraph>
            Utilizamos la información recopilada para:
          </Typography>
          <ul>
            <li>Proporcionar y mejorar nuestros servicios</li>
            <li>Procesar sus reservas y pagos</li>
            <li>Enviarle información sobre nuestros servicios</li>
            <li>Responder a sus consultas y solicitudes</li>
            <li>Prevenir actividades fraudulentas</li>
          </ul>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            3. Compartir información
          </Typography>
          <Typography paragraph>
            No vendemos ni compartimos su información personal con terceros, excepto:
          </Typography>
          <ul>
            <li>Cuando sea necesario para proporcionar nuestros servicios</li>
            <li>Cuando lo exija la ley</li>
            <li>Con su consentimiento explícito</li>
          </ul>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            4. Seguridad
          </Typography>
          <Typography paragraph>
            Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal.
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            5. Sus derechos
          </Typography>
          <Typography paragraph>
            Usted tiene derecho a:
          </Typography>
          <ul>
            <li>Acceder a su información personal</li>
            <li>Corregir información inexacta</li>
            <li>Solicitar la eliminación de sus datos</li>
            <li>Oponerse al procesamiento de sus datos</li>
            <li>Retirar su consentimiento</li>
          </ul>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            6. Contacto
          </Typography>
          <Typography paragraph>
            Para cualquier consulta sobre nuestra política de privacidad, puede contactarnos en:
          </Typography>
          <Typography>
            Email: privacy@conest.com
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="body2" color="text.secondary">
            Última actualización: {new Date().toLocaleDateString()}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default PrivacyPolicy; 
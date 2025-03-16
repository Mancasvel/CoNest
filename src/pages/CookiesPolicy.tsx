import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const CookiesPolicy: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Política de Cookies
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            1. ¿Qué son las cookies?
          </Typography>
          <Typography paragraph>
            Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web. Estas cookies nos ayudan a hacer que su experiencia en CoNest sea mejor y más personalizada.
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            2. Tipos de cookies que utilizamos
          </Typography>
          <Typography paragraph>
            Utilizamos los siguientes tipos de cookies:
          </Typography>
          <ul>
            <li>
              <strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio web
            </li>
            <li>
              <strong>Cookies de rendimiento:</strong> Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio
            </li>
            <li>
              <strong>Cookies de funcionalidad:</strong> Permiten recordar sus preferencias y configuraciones
            </li>
            <li>
              <strong>Cookies de publicidad:</strong> Utilizadas para mostrar anuncios relevantes
            </li>
          </ul>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            3. ¿Cómo utilizamos las cookies?
          </Typography>
          <Typography paragraph>
            Las cookies nos ayudan a:
          </Typography>
          <ul>
            <li>Mantener su sesión activa</li>
            <li>Recordar sus preferencias</li>
            <li>Mejorar la seguridad</li>
            <li>Analizar el uso del sitio</li>
            <li>Personalizar su experiencia</li>
          </ul>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            4. Control de cookies
          </Typography>
          <Typography paragraph>
            Usted puede controlar y gestionar las cookies de varias maneras:
          </Typography>
          <ul>
            <li>A través de la configuración de su navegador</li>
            <li>Utilizando nuestro panel de preferencias de cookies</li>
            <li>Rechazando las cookies no esenciales</li>
          </ul>
          <Typography paragraph>
            Tenga en cuenta que al deshabilitar ciertas cookies, algunas funciones de nuestro sitio web pueden no funcionar correctamente.
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            5. Cookies de terceros
          </Typography>
          <Typography paragraph>
            Algunas cookies son establecidas por servicios externos que aparecen en nuestras páginas. Estas cookies pueden ser establecidas por:
          </Typography>
          <ul>
            <li>Servicios de análisis (Google Analytics)</li>
            <li>Redes sociales</li>
            <li>Proveedores de publicidad</li>
            <li>Servicios de pago</li>
          </ul>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            6. Actualizaciones de la política
          </Typography>
          <Typography paragraph>
            Podemos actualizar esta política de cookies ocasionalmente. Le notificaremos sobre cualquier cambio significativo publicando la nueva política de cookies en esta página.
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            7. Contacto
          </Typography>
          <Typography paragraph>
            Si tiene alguna pregunta sobre nuestra política de cookies, puede contactarnos en:
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

export default CookiesPolicy; 
import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ mb: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Link href="/privacy" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography color="primary" sx={{ '&:hover': { textDecoration: 'underline' } }}>
              Privacy
            </Typography>
          </Link>
          <Link href="/terms" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography color="primary" sx={{ '&:hover': { textDecoration: 'underline' } }}>
              Terms
            </Typography>
          </Link>
          <Link href="/cookies" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography color="primary" sx={{ '&:hover': { textDecoration: 'underline' } }}>
              Cookies
            </Typography>
          </Link>
        </Box>

        <Typography variant="h3" component="h1" gutterBottom align="center">
          Términos y Condiciones
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            1. Aceptación de los términos
          </Typography>
          <Typography paragraph>
            Al acceder y utilizar CoNest, usted acepta estar sujeto a estos términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro servicio.
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            2. Descripción del servicio
          </Typography>
          <Typography paragraph>
            CoNest es una plataforma que permite a los usuarios:
          </Typography>
          <ul>
            <li>Buscar y reservar espacios de trabajo</li>
            <li>Gestionar sus reservas</li>
            <li>Comunicarse con otros usuarios</li>
            <li>Acceder a servicios adicionales relacionados con el espacio de trabajo</li>
          </ul>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            3. Cuenta de usuario
          </Typography>
          <Typography paragraph>
            Para utilizar nuestros servicios, usted debe:
          </Typography>
          <ul>
            <li>Ser mayor de 18 años</li>
            <li>Proporcionar información precisa y completa</li>
            <li>Mantener la seguridad de su cuenta</li>
            <li>Notificarnos inmediatamente sobre cualquier uso no autorizado</li>
          </ul>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            4. Reservas y pagos
          </Typography>
          <Typography paragraph>
            Al realizar una reserva, usted acepta:
          </Typography>
          <ul>
            <li>Pagar todos los cargos aplicables</li>
            <li>Respetar las políticas de cancelación</li>
            <li>Utilizar el espacio de acuerdo con las normas establecidas</li>
            <li>Ser responsable de cualquier daño causado durante su uso</li>
          </ul>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            5. Conducta del usuario
          </Typography>
          <Typography paragraph>
            Usted se compromete a:
          </Typography>
          <ul>
            <li>No violar ninguna ley o regulación aplicable</li>
            <li>No infringir los derechos de otros usuarios</li>
            <li>No interferir con el funcionamiento del servicio</li>
            <li>No realizar actividades que puedan dañar la plataforma</li>
          </ul>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            6. Propiedad intelectual
          </Typography>
          <Typography paragraph>
            Todo el contenido y funcionalidad de CoNest es propiedad exclusiva de nuestra empresa y está protegido por las leyes de propiedad intelectual.
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            7. Limitación de responsabilidad
          </Typography>
          <Typography paragraph>
            CoNest no será responsable por:
          </Typography>
          <ul>
            <li>Daños indirectos o consecuentes</li>
            <li>Pérdida de datos o beneficios</li>
            <li>Interrupciones del servicio</li>
            <li>Acciones de terceros</li>
          </ul>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            8. Modificaciones
          </Typography>
          <Typography paragraph>
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en la plataforma.
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
} 
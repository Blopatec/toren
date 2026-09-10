# Sitio web Toren

Sitio estático, responsivo y sin dependencias externas, preparado para publicar en `www.toren.cl`.

## Archivos
- `index.html`: sitio comercial principal.
- `styles.css`: estilos responsivos y visuales.
- `script.js`: menú móvil, animaciones y validación del formulario.
- `favicon.svg`: ícono del sitio.
- `privacidad.html`: borrador de política de privacidad (debe revisarse con los datos legales definitivos de Toren antes de producción).
- `robots.txt` y `sitemap.xml`: base SEO.

## Formulario
En esta versión el formulario valida los campos y abre el cliente de correo del visitante con un mensaje dirigido a `contacto@toren.cl`. Para envío silencioso desde la web se requiere conectar un backend, una función serverless o un servicio de formularios.

## Publicación
Suba todos los archivos a la raíz pública del hosting de `toren.cl` conservando sus nombres. El sitio no requiere compilación.

## Recomendado antes de producción
1. Confirmar correo comercial definitivo.
2. Completar razón social, RUT y datos legales si se desean publicar.
3. Revisar la política de privacidad con asesoría competente.
4. Conectar el formulario a un backend si se desea envío directo sin abrir el cliente de correo.
5. Agregar analítica solo después de definir la política de cookies/consentimiento correspondiente.

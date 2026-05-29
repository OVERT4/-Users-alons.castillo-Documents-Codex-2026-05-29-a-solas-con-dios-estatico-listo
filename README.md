# A Solas con Dios — Brújula Bíblica

Sitio estático sin backend y sin APIs de inteligencia artificial.

## Cómo verlo

Abre `index.html` en el navegador.

## Cómo publicarlo

Sube estos archivos a la raíz del repositorio:

```text
assets/
index.html
script.js
styles.css
README.md
```

En Vercel no necesitas variables de entorno ni comandos de build. El sitio funciona como una página estática.

## Privacidad

El diario, favoritos, historial, preferencias, recordatorios y contador de hábito se guardan únicamente en `localStorage`, dentro del dispositivo del usuario. No hay backend ni base de datos.

El widget de versículo del día intenta consultar `https://bible-api.com/data/rvr1909/random/NT` una vez al día. Esa consulta no envía lo que el usuario escribió.

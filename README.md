# Autentisering med JWT

Detta projekt är en del av kursen "Backend-baserad webbutveckling" och innehåller användarregistrering, inloggning och skyddade resurser med hjälp av JSON Web Tokens (JWT).

## Funktioner

- Registrera nya användare
- Logga in och ta emot JWT
- Spara JWT i webbläsarens localStorage
- Visa skyddad sida med användarinformation (dashboard.html)
- Logga ut

## Filstruktur

- index.html — startsida med registrering och inloggning
- dashboard.html — sida som kräver inloggning
- style.css — stil för hela webbplatsen
- script.js — API-funktionalitet via JavaScript
-_redirects - till publicering netlify
## API-anrop

Backend finns på:  
`https://s-kerhet.onrender.com`

### POST /register
json
{ "username": "Hanan", "password": "6666" }

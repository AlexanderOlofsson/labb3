Enclaire Product Showcase

En fullstack-applikation och fiktivt case byggd med TypeScript, React, Express, och PostgreSQL som låter användare visa upp en 3D-produkt, välja färger och skriva upp sitt mail för väntan på att produkten ska finnas i lager.

## Funktioner

Produktvisning: Interaktiv produktvisning med en 3D-modell (GLTF) som roterar. (three)

Färgval: Användare kan välja olika färger och se produktens uppdaterade pris.

Notifiering: Användare kan registrera sitt mail i väntan för notifikationer om produkten är tillbaka i lager.

Databasrelation: Två tabeller - products och interests - med en relation mellan dem (1 till n).

## Projektet uppfyller följande krav för G:

Fullstack med frontend, backend och en databas.

All kod är skriven med TypeScript (ingen JavaScript/JSX).

TDD (Testdriven utveckling): Tester skrevs först, sedan implementerades koden.

BDD med Given-When-Then: Funktionalitet som verifierar användarflöden.

E2E-Test.

UML-diagram: Databasens tabeller och relation.

Vissa DRY-principer har följts för kodoptimering.

## Förberedelse

Se till att ha följande installerat:

Node.js

PostgreSQL

## Konfigurera databas

Skapa en PostgreSQL-databas och använd tabellerna från filen database.sql i backend-mappen.

## Miljövariabler

Skapa en .env-fil i backend-mappen, exempelvis:

DB_USER=din_användare
DB_PASSWORD=ditt_lösenord
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=din_databas

eller:

DATABASE_URL=postgresql://postgres:database@localhost:5432/postgres
PORT=5000

## Starta backend

cd backend
npm install
npm start

Backend körs nu på http://localhost:5000.

## Starta frontend

cd frontend
npm install
npm start

Frontend körs nu på http://localhost:3000.

## Kör Cypress-tester

Se till att både backend och frontend körs.

cd frontend
npx cypress open

Kör både E2E-tester och komponenttester från Cypress-gränssnittet.

## UML-diagram

Databasens tabeller och deras relation (1 till n):

products: Innehåller produkter och deras information.

interests: Användarintressen som refererar till produkter.

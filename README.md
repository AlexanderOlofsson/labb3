## FEEDBACK UPDATE

Efter feedbacken:

"\* jag vill ha ett BDD test som vi gått igenom med cucumber. Alltså en .feature fil (kravspecen) och en .ts fil (test-implementation)."

Så skapade jag ett liknande test som jag redan hade och använde mig utav fast med hjälp av cucumber genom att använda mig utav en .feature fil och .ts fil.

Varför cucumber inte fanns med i början utan jag skrev endast manuellt given, when osv är att det inte stod som krav på ithsdistans.se

Jag skapade tester (vissa tester används inte längre) först och sedan implementerade jag kod så att testerna gick igenom, simpelt exempel:

https://github.com/AlexanderOlofsson/labb3/commit/e1237a82554c6c80f6d45e79764a4bbe1c238f81

https://github.com/AlexanderOlofsson/labb3/commit/4537a887ba4eab3afb7408230e5df4619aa1f5c3

Alla krav är nu uppfyllda. Jag satsar på godkänt.

## Projektet

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

BDD (cucumber) med Given-When-Then: Funktionalitet som verifierar användarflöden.

E2E-Test.

UML-diagram: Databasens tabeller och relation. (Finns i rotmappen)

Vissa DRY-principer har följts för kodoptimering.

## Förberedelse

Se till att ha följande installerat:

Node.js

PostgreSQL

## Konfigurera databas

Skapa en PostgreSQL-databas och använd tabellerna från filen database.sql i backend-mappen.

## Miljövariabler

Skapa en .env-fil i backend-mappen, exempelvis:

DATABASE_URL=postgresql://postgres:database@localhost:5432/postgres
PORT=5000

eller:

DB_USER=din_användare
DB_PASSWORD=ditt_lösenord
DB_HOST=localhost
DB_PORT=5000
DB_DATABASE=din_databas

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

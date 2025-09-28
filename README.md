# Examinerande uppgift - Trullo
### Sara J. Pallander, FJS24


## Teoretiska resonemang
### Motivera ditt val av databas
Jag valde MongoDB eftersom det är någon används i branschen, mer specifikt i samband med den tech stack vi har fått lära oss. Därför kändes det nyttigt att lära sig använda det praktiskt, som i detta projekt. Det är i dessa samband man får en mer djupgående förståelse för hur ett verktyg/ramverk - i detta fall databas - fungerar, speciellt när man lär sig genom att lösa problem man stöter på under projektets utveckling.

### Redogör vad de olika teknikerna (ex. verktyg, npm-paket, etc.) gör i applikationen
**Typescript** för att säkerställa typning och minska eventuella buggar. 

**Express** föredras som ramverk för Node för hur den förenklar arbetsprocessen och hur man strukturerar routes. Bra anpassat för att bygga REST API:er.

**Mongoose** för att underlätta hur man interagerar med MongoDB.

**Bcrypt + JWT** för kryptering och autentisering. Jag valde dessa för det är vad jag vet hur man använder sen innan.

**Zod** för validering. Jag har tidigare använt express validator och ville testa Zod för det är populärt och kan vara bra att kunna.


### Redogör översiktligt hur applikationen fungerar
Applikationen tillåter en användare att skapa ett konto, logga in, uppdatera sina uppgifter och ta bort sitt konto. Användareuppgifter krypteras innan de sparas i databasen och inloggningen valideras via JWT för ökad säkerhet. 

Man kan dessutom skapa/ta bort en task, tilldela den till en användare och uppdatera dess status. När en användare tas bort så tas även kopplingen till tasks bort, om det finns några.

## Körguide
Installera alla nödvändiga paket:

```bash
npm install
```

Klistra in angivna nycklar i ``.env``.<br>
Starta sedan igång servern för att koppla till databasen:

```bash
npm run dev
```

För att testa koden använde jag Thunder Client.

***
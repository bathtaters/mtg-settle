# MTG Sett-le
Wordle-style MTG app for guessing sets based on artwork

View live: https://settle.gg

Built on React framework, with Tailwinds + DaisyUI
Uses MTGJSON for card & set data, and Scryfall for Artwork

---

### Dev Note
You must create ./src/assets/credentials.json with an API key from [the server](https://github.com/bathtaters/mtg-settle-server).
```json
{
  "apiKey": "Bearer <API user token>",
  "apiUrl": "https://<API domain>/api/client/"
}
```

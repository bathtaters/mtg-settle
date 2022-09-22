# MTG Sett-le
Wordle-style MTG app for guessing sets based on artwork

View live: https://settle.gg

Built on React framework, with Tailwinds + DaisyUI
Uses MTGJSON for card & set data, and Scryfall for Artwork

---

### Dev Note
You must create ./src/assets/credentials.json with your MTGJSON API key.
```json
{
  "apiKey": "Bearer <API user token>",
  "apiUrl": "https://<API domain>/api/client/"
}
```

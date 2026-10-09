# Madurai Basha Restaurant — React Project

This project packages the supplied TSX app as a runnable React + Vite project using JSX.

## Requirements
- Node.js 18+ recommended
- npm

## Run the frontend
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## Run the optional Express API
In a second terminal:
```bash
npm run server
```
The API runs on http://localhost:5000.

## Assets
Place these original media files in the `public/` folder for them to appear:
- `Gemini_Generated_Image_q6l1v9q6l1v9q6l1.png` (restaurant logo)
- `gemini_generated_video_3ba040cb.mp4` (hero background video)

Those two media files were referenced by the uploaded source but were not included with it, so they are not bundled here.

## Notes
- Styling uses the Tailwind CSS CDN, as in the supplied source. An internet connection is needed for Tailwind utility styles to load.
- Reservation and order API routes are demo endpoints that log submitted data; they do not persist records to a database.

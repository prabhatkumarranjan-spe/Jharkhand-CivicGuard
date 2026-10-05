# CivicGuard frontend

## Run locally

Start the backend, then run `npm run dev` from this directory. The development
build uses `http://localhost:5000/api` unless `VITE_API_URL` is set.

## Deploy the full stack

The root `render.yaml` deploys the backend API to Render. In Render, use
**New → Blueprint** to connect this repository and supply the private
`MONGODB_URI` and `GEMINI_API_KEY` values when prompted. The MongoDB Atlas
network access list must allow the Render service to connect. Render provides
the API's HTTPS base URL after deployment.

In GitHub repository settings, enable **Pages** with **GitHub Actions** as the
source. Push to `main` or manually run the **Deploy frontend to GitHub Pages**
workflow. The workflow uses
`https://civicguard-jharkhand-api.onrender.com/api` by default; if Render
assigns a different hostname, add an Actions repository variable named
`VITE_API_URL` with the actual backend URL ending in `/api`. Vite builds with
the correct project-page path automatically.

Without that build variable, the deployed frontend shows a configuration error
instead of trying to send requests to `localhost` on a visitor's computer.

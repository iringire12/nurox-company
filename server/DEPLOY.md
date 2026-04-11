# Backend Deployment

This backend is designed to run on Vercel while MongoDB Atlas hosts the database.

## Atlas

1. Create or open your Atlas project and cluster.
2. Go to `Security` -> `Database Access` and create a database user.
3. Go to `Security` -> `Network Access` and allow your backend host IP.
4. In `Connect` -> `Drivers`, copy the `mongodb+srv://...` connection string.
5. Replace the placeholders in `MONGODB_URI`.

## Vercel

Create a second Vercel project for the backend and point it at the `server` directory in this repository.

Use these project settings:

- Root Directory: `server`
- Framework Preset: `Other`
- Install Command: `npm install`
- Build Command: leave empty or use the default Vercel setting
- Output Directory: leave empty

Set these environment variables:

- `MONGODB_URI`
- `JWT_SECRET`
- `JWT_EXPIRES_IN=7d`
- `CLIENT_URL=https://your-frontend.vercel.app`
- `CLIENT_URLS=https://your-frontend.vercel.app,https://your-preview-domain.vercel.app`

After deployment, test:

- `https://your-backend-domain.vercel.app/api/health`

## Frontend

After the backend is live, set this in the frontend host:

- `REACT_APP_API_URL=https://your-backend-url/api`

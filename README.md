This is a project based on the 2023 Smart-Wear Workshop with modified resources.
## Difference from 2023 version

Add github pages support.
Added multiple deployment support, now it can using deploy.sh to fast do the static depolyment.

## Getting Started

First, install  run the development server:

```bash
pnpm dev 
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project supports both static and dynamic deployment options:

### Static Deployment
For static deployment, use the provided `deploy.sh` script which automatically builds and deploys to your HTTP server:

```bash
./deploy.sh
```

### Dynamic Deployment on Vercel
Another way to deploy is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

### Custom Domain
Both deployment methods support custom domain configuration. For Vercel deployment, you can configure your custom domain through the Vercel dashboard.

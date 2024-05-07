## Dockerize

```bash
docker build -t saas-landingpage .
docker run -it -p 3000:3000 saas-landingpage
```

## Run the project (locale dev mode)

```bash
npm i
npm run  dev
```

## Meet the product

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Make sure you have the [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions installed on vscode.

## Things you need to replace

In no particular order, here are the things you should look into changing to make the site your own:

- Change the images on the site (including the social image embedded when sharing the url, saved as `opengraph-image.png`)

- Change all the copywriting and text on the homepage

- Change the terms of service & privacy policy to yours

- Add whatever you want to your header by modifying the `items` array in `header.tsx`

- Replace the theme in `src/app/global.css` with your own shadcn theme, which you can [generate here](https://ui.shadcn.com/themes) by choosing your colors and clicking `copy code`. Note I created a new color called `minor` which isn't native to shadcn, so you may need to add a replacement for that on some typographys

- Replace the SEO metadata and titles in `layout.tsx`

- Replace all the links with whatever you want
- There's also a husky integration I added, feel free to set that up by running `npx husky install`

## Next steps to build a SaaS from this repo

If you're building a full SaaS off of this repo, here's what you should look into doing next, depending on what you need:

- If you need any environment variables, create a `.env.local` and use them in standard NextJS style

- Create the login / signup logic. I'd personally recommend using [Supabase <> NextJS's integration](https://supabase.com/docs/guides/auth/quickstarts/nextjs), since it's super simple and quick to setup

- Logic to show different header items for someone logged in vs someone not (if your app needs it)

- Additional components if you're modifying the homepage

- If you're SaaS has already launched, you can add more elements to the landing page like customer testimonials, demos, etc. A full list of things I'd recommend is [here](https://map.sistilli.dev/public/startups/concepts/SaaS+Landing+Page+Design+Standards)

- Code the rest of your SaaS!
- Create more designs on figma (see section below)

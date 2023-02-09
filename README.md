react typescript
tailwind
packagaes

npm i framer-motion react-anchor-link-smooth-scroll and hero icons
> npm -i -D @types/react-anchor-link-smooth-scroll@1.0.2 allow typescript to be able to identyfi type
npm i -D @types/react-anchor-link-smooth-scroll@1.0.2 @types/node

at viteconfig.ts
add
import path from 'path'
 resolve: {
    alias: [{find: "@", replacement: path.resolve(__dirname, 'src')}]
  }



tscongig.json add 
"path": {
      "@/*": ["./src/*"]
        }


after installing tailwind i added prettier.config.cjs to add tailwind classes 

npm install -D prettier prettier-plugin-tailwindcss
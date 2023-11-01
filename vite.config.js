// vite.config.js
export default {
    build: {
      rollupOptions: {
        input: {
          main: './src/index.html',
          accion: './src/accion.html',
          animacion: './src/animacion.html',
          aventura: './src/aventura.html',
          comedia: './src/comedia.html'
        }
      }
    }
}  


/*
import { defineConfig } from 'vite';



export default defineConfig({
    base: "https://profWilliamArte.github.io/htmlcssvite01",
    
});

*/


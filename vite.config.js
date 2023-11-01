// vite.config.js
/*
export default {
    build: {
      rollupOptions: {
        input: {
          index: 'index.html',
          accion: 'accion.html',
          animacion: 'animacion.html',
          aventura: 'aventura.html',
          comedia: 'comedia.html'
        }
      }
    }
}  


*/
import { defineConfig } from 'vite';
export default defineConfig({
    base: "https://profWilliamArte.github.io/htmlcssvite01",
    server: {
        port: "http://localhost:4173/htmlcssvite01", // Puerto en el que se ejecutará el servidor local
      },
    build: {
        rollupOptions: {
          input: {
            index: 'index.html',
            accion: 'accion.html',
            animacion: 'animacion.html',
            aventura: 'aventura.html',
            comedia: 'comedia.html'
          }
        }
      }
    
});




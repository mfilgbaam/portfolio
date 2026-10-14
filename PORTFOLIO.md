# Personalizar el portfolio

Ejecuta `npm run dev` y abre la ruta `/portfolio/`. `npm run build` comprueba TypeScript y genera la web; `npm run lint` comprueba ESLint.

Los proyectos de `src/App.tsx` son ejemplos, no trabajos reales. Edita la lista `projects` para cambiar título, descripción, categoría, tags, año y texto detallado. El identificador `id` forma la URL `#/proyecto/id`. Esta navegación por hash permite abrir enlaces directamente en GitHub Pages, sin configuración adicional del servidor.

Coloca los recursos en `public/media/` y añade al proyecto:

```ts
images: [
  { src: `${import.meta.env.BASE_URL}/media/captura.webp`, alt: 'Descripción de la captura' },
],
video: `${import.meta.env.BASE_URL}/media/demo.mp4`,
```

Las imágenes aparecen en la galería y el vídeo en un reproductor con controles. Sin vídeo aparece un estado pendiente explícito. Las ilustraciones conceptuales están hechas con CSS y no necesitan servicios externos. Personaliza también los textos de portada y sobre mí, el nombre en `index.html` y el enlace de contacto de GitHub.

Los tags seleccionados se combinan: un proyecto debe contener todos ellos. El selector de categoría aplica un filtro adicional. «Limpiar» borra los tags; el estado vacío permite restablecer ambos filtros.

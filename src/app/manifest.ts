import { MetadataRoute } from 'next';
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Formato Consultoria',
    short_name: 'Formato',
    description: 'Ajudamos a conectar pessoas a seus negócios. Buscamos inovação e crescimento pessoal. Alinhamos objetivos, criamos conexão e colocamos ideias brilhantes em prática',
    start_url: '/',
    display: 'standalone',
    // background_color: '#fff',
    // theme_color: 'rgb(181, 12, 251)',
    icons: [
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/x-icon',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/x-icon',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/x-icon',
      },
    ],
  }
}
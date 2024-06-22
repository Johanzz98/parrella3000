


export const metadata = {
  title: 'Parrella Chile | Moda Urbana',
  
}

export default function RootLayout({ children }) {
 return (
  <html lang="en">
 
    <link rel="icon" href="/assets/icono/p.png" />
    <title>{metadata.title}</title>
 
  <body>
    {children}
  </body>
</html>
  )
}

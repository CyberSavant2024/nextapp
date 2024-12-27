import '@/app/global.css'
import 'easymde/dist/easymde.min.css'

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body
         
        >
          {children}
        </body>
      </html>
    );
  }
  
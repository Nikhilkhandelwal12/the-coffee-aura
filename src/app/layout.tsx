import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {title:'The कॉffee Aura | A Sip of Good Vibes',description:'Coffee, comfort and good vibes. Explore the menu and order from The कॉffee Aura.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}

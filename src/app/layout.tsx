import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LoanOS — The mortgage CRM built by a loan officer, for loan officers',
  description:
    'AI-powered deal management, automations, and pipeline tracking built for independent mortgage brokers. Join the beta waitlist.',
  openGraph: {
    title: 'LoanOS — Built by a loan officer, for loan officers',
    description: 'Join the waitlist for the LoanOS beta.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

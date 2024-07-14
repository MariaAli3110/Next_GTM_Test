import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-W9FPQCL8" />
      <body>{children}</body>
      <GoogleAnalytics gaId="G-LLDHGD0FTK" />
    </html>
  )
}
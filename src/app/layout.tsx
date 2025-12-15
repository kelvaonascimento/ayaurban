import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AYA Urban - Análise Estratégica Completa | RPK Agência",
  description: "Relatório técnico completo com análise de mercado, estratégia de campanhas e projeções de vendas para o AYA Urban",
  keywords: "AYA Urban, WIND Incorporadora, análise imobiliária, marketing imobiliário, ABC Paulista",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import {
  Home, Building2, MapPin, DollarSign, Users, TrendingUp, Target,
  Phone, Mail, ArrowRight, Check, Star, Waves, Dumbbell, Coffee,
  Wine, Film, Baby, Dog, Leaf, ShoppingCart, Briefcase, Palette,
  UtensilsCrossed, Car, Sparkles, BarChart3, Activity,
  ChevronDown, Menu, X, ChevronLeft, ChevronRight, TrendingDown,
  AlertCircle, Zap, Award, LineChart, FileText, Download, Search,
  CheckCircle, Clock, Shield, Wifi, Mountain, TreePine, Sun,
  Globe, Instagram, Facebook, ExternalLink, Heart
} from 'lucide-react'
import Image from 'next/image'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis,
  PolarRadiusAxis, Radar, Legend, AreaChart, Area
} from 'recharts'

export default function AyaUrbanLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [checklistWeek, setChecklistWeek] = useState(0)

  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 1], [0, -30])

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'visao-geral', 'mercado', 'publico', 'concorrentes', 'estrategia', 'checklist', 'contato']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  // Data from artifact
  const incomeData = [
    { name: 'Classe E', value: 31.9, color: '#6b7280', desc: 'até 2 SM' },
    { name: 'Classe D', value: 20.8, color: '#9ca3af', desc: '2-4 SM' },
    { name: 'Classe C', value: 33.1, color: '#d1d5db', desc: '4-10 SM' },
    { name: 'Classe B', value: 7.7, color: '#f59e0b', desc: '10-20 SM' },
    { name: 'Classe A', value: 6.5, color: '#ff6b35', desc: '+20 SM' },
  ]

  // Dados de m² - Pesquisa 2025 - Fonte: PDF Análise Estratégica Ribeirão 3
  // Ribeirão Pires: periférico ~R$ 4k/m², central R$ 6.5k-10k/m²
  // AYA Urban: ticket médio ~R$ 550k, tipologias 54-133m² (~R$ 8.938/m² médio)
  const priceM2Data = [
    { location: 'AYA Urban', price: 8938, fill: '#ff6b35' },       // R$ 550k / 61,5m² média
    { location: 'Duetto', price: 6400, fill: '#22c55e' },          // R$ 280-400k / 40-57m² (pronto)
    { location: 'Áquila', price: 7350, fill: '#3b82f6' },          // R$ 441k / 60m²
    { location: 'AYA Resort', price: 8400, fill: '#f59e0b' },      // R$ 580k / 69m² (concorrente)
    { location: 'Periférico', price: 4000, fill: '#9ca3af' },      // Média bairros periféricos RP
  ]

  // Dados dos concorrentes pesquisados - 2025 (Raio 3km do empreendimento)
  // Fonte: PDF Análise Estratégica Ribeirão 3 - Wind Incorporadora
  const concorrentesData = [
    {
      nome: 'AYA Home Resort',
      cidade: 'Ribeirão Pires',
      construtora: 'Wind/RAP',
      metragem: '69-114m² (Cobert. 229m²)',
      quartos: '2-3 dorms (1-2 suítes)',
      preco: 'R$ 580k-930k',
      precoM2: 8400,
      entrega: 'Início 2028',
      lazer: 'Condomínio clube: piscina, jacuzzi, sauna, cinema, salão jogos, brinquedoteca, espaço gourmet. 96 unidades, 2 vagas/apto',
      distancia: '~1 km',
      status: 'Lançamento 2025 - Vendas em andamento',
      link: 'https://windincorporadora.com.br/'
    },
    {
      nome: 'Residencial Áquila',
      cidade: 'Ribeirão Pires',
      construtora: 'Obra Nobre',
      metragem: '58-60m²',
      quartos: '2 dorms (1 suíte)',
      preco: 'R$ 441k',
      precoM2: 7350,
      entrega: 'Dez/2026',
      lazer: '450m da Estação CPTM, 150m do Hospital. Sacada grill, coworking, brinquedoteca, playground. 36 unidades',
      distancia: '~1,5 km',
      status: 'Em obras - ~50% vendido',
      link: 'https://obranobre.com.br/lancamentos/'
    },
    {
      nome: 'Residencial Duetto',
      cidade: 'Ribeirão Pires',
      construtora: 'Toth Construtora',
      metragem: '40-57m²',
      quartos: '1-3 dorms (opções c/ suíte)',
      preco: 'R$ 250k-400k',
      precoM2: 6400,
      entrega: 'Entregue 2025',
      lazer: 'Planta flexível, salão de festas, fitness externo. Bairro Roncon, 5-7 min do Centro',
      distancia: '~2,5 km',
      status: 'Pronto - Últimas unidades',
      link: 'https://tothconstrutora.com.br/'
    }
  ]

  // Comparativo AYA Urban vs Concorrentes locais (raio 3km Ribeirão Pires)
  // Fonte: PDF Análise Estratégica - Wind Incorporadora
  const radarData = [
    { subject: 'Custo-Benefício', AYAUrban: 75, AYAResort: 60, Aquila: 80, Duetto: 90 },
    { subject: 'Metragem', AYAUrban: 85, AYAResort: 95, Aquila: 70, Duetto: 55 },
    { subject: 'Localização', AYAUrban: 95, AYAResort: 90, Aquila: 95, Duetto: 70 },
    { subject: 'Lazer/Estrutura', AYAUrban: 95, AYAResort: 90, Aquila: 65, Duetto: 50 },
    { subject: 'Exclusividade', AYAUrban: 90, AYAResort: 85, Aquila: 75, Duetto: 60 },
    { subject: 'Valorização', AYAUrban: 95, AYAResort: 80, Aquila: 75, Duetto: 70 },
  ]

  const employmentData = [
    { mes: 'Jan', saldo: 162 },
    { mes: 'Fev', saldo: 104 },
    { mes: 'Mar', saldo: 104 },
    { mes: 'Abr', saldo: 106 },
    { mes: 'Mai', saldo: 74 },
    { mes: 'Jun', saldo: 10 },
    { mes: 'Jul', saldo: -60 },
    { mes: 'Ago', saldo: -22 },
    { mes: 'Set', saldo: 97 },
  ]

  // Checklist data por semana
  const checklistWeeks = [
    {
      week: 'Semana 1-2',
      title: 'Preparação e Setup',
      tasks: [
        { item: 'Finalizar materiais de apoio (imagens 3D, plantas humanizadas)', type: 'prep' },
        { item: 'Preparar tabela de preços e condições de pagamento', type: 'prep' },
        { item: 'Configurar tracking (pixel Meta, GA4, UTMs)', type: 'audit' },
        { item: 'Landing page responsiva com formulário de lead', type: 'strategy' },
        { item: 'Listar e preparar corretores parceiros para follow-up', type: 'prep' },
        { item: 'Definir script de atendimento e qualificação de leads', type: 'strategy' },
      ]
    },
    {
      week: 'Semana 3-4',
      title: 'Lançamento Inicial',
      tasks: [
        { item: 'Iniciar campanhas Meta Ads (Facebook/Instagram)', type: 'execution' },
        { item: 'Foco em leads locais (Ribeirão Pires, Mauá)', type: 'strategy' },
        { item: 'Criativos: vídeo teaser e carrossel de plantas', type: 'creative' },
        { item: 'Lookalike de base de leads existente', type: 'execution' },
        { item: 'Segmentação por interesse: imóveis, financiamento, família', type: 'execution' },
        { item: 'Monitorar CPL inicial e taxa de qualificação', type: 'analysis' },
      ]
    },
    {
      week: 'Semana 5-6',
      title: 'Escala e Diversificação',
      tasks: [
        { item: 'Expandir geo para ABC + Zona Sul SP', type: 'strategy' },
        { item: 'Testar Google Ads (search "apartamento Ribeirão Pires")', type: 'execution' },
        { item: 'Remarketing para visitantes da LP que não converteram', type: 'execution' },
        { item: 'Análise de CPL por público e otimização de criativos', type: 'analysis' },
        { item: 'Testes A/B de headlines e CTAs', type: 'creative' },
        { item: 'Ajustar segmentação por renda (R$8k-15k)', type: 'optimization' },
      ]
    },
    {
      week: 'Semana 7-8',
      title: 'Otimização e Conteúdo',
      tasks: [
        { item: 'Ajustar públicos com base em dados de CPL', type: 'optimization' },
        { item: 'Produzir depoimentos e provas sociais (early-adopters)', type: 'creative' },
        { item: 'Criar conteúdo educativo (posts sobre financiamento MCMV/SBPE)', type: 'creative' },
        { item: 'Stories e Reels para engajamento orgânico', type: 'creative' },
        { item: 'Pausar segmentos de baixo ROI', type: 'optimization' },
        { item: 'Expandir públicos de melhor performance', type: 'optimization' },
      ]
    },
    {
      week: 'Semana 9-10',
      title: 'Aceleração Pré-Lançamento',
      tasks: [
        { item: 'Intensificar ads com senso de urgência ("condição de lançamento")', type: 'execution' },
        { item: 'Parcerias locais: corretores, imobiliárias, influenciadores', type: 'strategy' },
        { item: 'E-mail marketing para base de leads "quentes"', type: 'execution' },
        { item: 'Preparação do stand/showroom (se aplicável)', type: 'prep' },
        { item: 'Aumentar budget em campanhas de alta conversão', type: 'optimization' },
        { item: 'Criar urgência: "últimas unidades com desconto"', type: 'creative' },
      ]
    },
    {
      week: 'Semana 11-12',
      title: 'Evento de Lançamento',
      tasks: [
        { item: 'Evento presencial ou live de lançamento', type: 'execution' },
        { item: 'Oferta especial de lançamento (bônus, desconto na entrada)', type: 'strategy' },
        { item: 'Cobertura em tempo real (stories, vídeos)', type: 'creative' },
        { item: 'Report e análise de resultados das 12 semanas', type: 'reporting' },
        { item: 'Documentar learnings e best practices', type: 'reporting' },
        { item: 'Planejar estratégia para os próximos 3 meses', type: 'strategy' },
      ]
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* MENU ULTRA CLEAN */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Image src="/Logo---Agência-RPK-Vert(preto).png" alt="Agência RPK" width={100} height={50} className="h-12 w-auto" />
              <div className="h-6 w-px bg-gray-300"></div>
              <span className="text-sm font-semibold text-gray-700">AYA Urban</span>
            </div>

            <div className="hidden md:flex space-x-6">
              {[
                { id: 'visao-geral', label: 'Visão Geral' },
                { id: 'mercado', label: 'Mercado' },
                { id: 'publico', label: 'Público' },
                { id: 'concorrentes', label: 'Concorrentes' },
                { id: 'estrategia', label: 'Estratégia' },
                { id: 'checklist', label: 'Checklist' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? 'text-orange-600'
                      : 'text-gray-600 hover:text-orange-500'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO BENTO GRID */}
      <section ref={heroRef} id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(135deg, #fff5f0 0%, #ffffff 50%, #fff8f0 100%)',
              'linear-gradient(135deg, #fff8f0 0%, #ffffff 50%, #fff5f0 100%)',
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-400/20 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        <motion.div style={{ opacity, scale, y }} className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white px-4 py-2 rounded-full mb-6 shadow-lg"
            >
              <Zap className="h-4 w-4" />
              <span className="text-sm font-bold">Análise Estratégica • Agência RPK</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none"
            >
              <motion.span
                className="text-gray-900 inline-block"
                whileHover={{ scale: 1.05, color: '#ff6b35', textShadow: '0 0 20px rgba(255, 107, 53, 0.5)' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                AYA
              </motion.span>
              <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 inline-block relative animate-gradient-shift"
                whileHover={{ scale: 1.05 }}
              >
                Urban
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{ mixBlendMode: 'overlay' }}
                />
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto mb-6"
            >
              <p className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">
                Análise Estratégica de Mercado Imobiliário
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Documento executivo desenvolvido pela <strong className="text-orange-600">Agência RPK</strong> para o
                <strong> AYA Urban</strong> em Ribeirão Pires/SP. Empreendimento com <strong>60 unidades</strong> de
                <strong> 54m² a 133m²</strong>, ticket médio até <strong>R$ 600 mil</strong>.
                Entrega: <strong>Outubro/2029</strong>. Incorporação: <strong>Wind/RAP</strong>.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500"
            >
              <span className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-orange-600" />
                60 unidades
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-400"></span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-orange-600" />
                Entrega: Outubro 2029
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-400"></span>
              <span className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-orange-600" />
                Tipologias: 54m² a 133m²
              </span>
            </motion.div>
          </div>

          {/* BENTO GRID HERO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
          >
            {/* Large Card - Preço e Tipologias */}
            <div className="md:col-span-2 md:row-span-2 bg-gray-900 rounded-3xl p-8 text-white relative overflow-hidden cursor-pointer hover-lift">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={80}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-white/60">TICKET MÉDIO</span>
                  <DollarSign className="h-8 w-8 text-orange-500" />
                </div>
                <p className="text-5xl md:text-6xl font-black mb-2">até R$ 600k</p>
                <p className="text-lg text-white/60 mb-4">Financiamento SBPE ou MCMV Faixa 3</p>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="bg-white/10 rounded-xl p-3 text-center">
                    <p className="text-2xl font-black text-orange-400">R$ 8.938</p>
                    <p className="text-xs text-white/60">Preço/m² médio</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 text-center">
                    <p className="text-2xl font-black text-green-400">-35%</p>
                    <p className="text-xs text-white/60">Ticket vs Resort</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-xs text-white/50 mb-2">TIPOLOGIAS (2 e 3 DORMS)</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-white/10 px-2 py-1 rounded">54,3m²</span>
                    <span className="text-xs bg-white/10 px-2 py-1 rounded">60,8m²</span>
                    <span className="text-xs bg-white/10 px-2 py-1 rounded">69,5m²</span>
                    <span className="text-xs bg-orange-500/30 px-2 py-1 rounded">133m² Duplex</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Unidades */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white border-2 border-gray-200 rounded-3xl p-6 hover:border-orange-300 transition-all group cursor-pointer hover-lift relative overflow-hidden"
            >
              <GlowingEffect disabled={false} proximity={80} blur={12} spread={25} borderWidth={2} />
              <div className="flex items-center justify-between mb-3 relative z-10">
                <span className="text-xs font-bold text-gray-500 uppercase">Unidades</span>
                <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <Building2 className="h-6 w-6 text-orange-600" />
                </motion.div>
              </div>
              <p className="text-4xl font-black text-gray-900 mb-1 relative z-10">60</p>
              <p className="text-sm text-gray-600 font-semibold relative z-10">+ 4 coberturas duplex</p>
            </motion.div>

            {/* Lazer */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-orange-600 rounded-3xl p-6 text-white cursor-pointer hover-lift relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 opacity-30"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="flex items-center justify-between mb-3 relative z-10">
                <span className="text-xs font-bold text-white/80 uppercase">Lazer</span>
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                  <Sparkles className="h-6 w-6" />
                </motion.div>
              </div>
              <p className="text-2xl font-black mb-1 relative z-10">26 Itens</p>
              <p className="text-sm text-white/80 relative z-10">14 cobertos + 12 descobertos</p>
            </motion.div>

            {/* Público Local */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              animate={{
                boxShadow: ["0 0 0 0 rgba(239, 68, 68, 0.4)", "0 0 0 10px rgba(239, 68, 68, 0)", "0 0 0 0 rgba(239, 68, 68, 0)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-red-50 border-2 border-red-200 rounded-3xl p-6 cursor-pointer hover-lift"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-red-600 uppercase">Público Local</span>
                <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </motion.div>
              </div>
              <p className="text-4xl font-black text-red-600 mb-1">4-7 mil</p>
              <p className="text-sm text-red-700">famílias c/ renda ≥R$8k</p>
            </motion.div>

            {/* Entrega */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white border-2 border-gray-200 rounded-3xl p-6 hover:border-orange-300 transition-all cursor-pointer hover-lift"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-gray-500 uppercase">Entrega</span>
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>
                  <Clock className="h-6 w-6 text-gray-900" />
                </motion.div>
              </div>
              <p className="text-4xl font-black text-gray-900 mb-1">Out/29</p>
              <p className="text-sm text-gray-600">Outubro de 2029</p>
            </motion.div>
          </motion.div>

          {/* PDF Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-16 relative z-20"
          >
            {[
              { label: 'Perfil Econômico', file: '/docs/perfil-economico-ribeirao-pires.pdf' },
              { label: 'Panorama Atual', file: '/docs/panorama-ribeirao-pires.pdf' },
              { label: 'Panorama Imobiliário', file: '/docs/panorama-imobiliario-ribeirao-pires.pdf' }
            ].map((doc, i) => (
              <a key={i} href={doc.file} target="_blank" rel="noopener noreferrer" download>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-orange-300 text-orange-600 hover:bg-orange-50 bg-white/90 backdrop-blur-sm shadow-sm"
                >
                  <FileText className="mr-2 h-3 w-3" />
                  {doc.label}
                  <Download className="ml-2 h-3 w-3" />
                </Button>
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator - fora do container com opacity */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <ChevronDown className="h-8 w-8 text-orange-500" />
        </motion.div>
      </section>

      {/* VISÃO GERAL - BENTO GRID */}
      <section id="visao-geral" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-bold mb-4">
              SEÇÃO 01
            </span>
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
                Visão Geral
              </span>
            </h2>
            <p className="text-xl text-gray-600">Especificações técnicas e diferenciais</p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Especificações - Tall Card */}
            <Card className="md:row-span-2 border border-gray-200 bg-white hover:border-gray-300 transition-all hover-lift cursor-pointer relative overflow-hidden">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={80}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-gray-700" />
                  </div>
                  <CardTitle className="text-gray-900">Especificações</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { label: 'Endereço', value: 'R. José P. S. Novaes Jr.' },
                  { label: 'Incorporação', value: 'Wind + RAP' },
                  { label: 'Torre', value: '1 torre, 10 pavimentos' },
                  { label: 'Terreno', value: '1.202,90m²' },
                  { label: 'Vagas', value: '64 (incl. 2 PNE)' },
                  { label: 'Elevadores', value: '2 por andar' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="text-sm text-gray-600">{item.label}</span>
                    <span className="text-sm font-bold text-gray-900">{item.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Estrutura Card */}
            <Card className="border border-gray-200 bg-white hover:border-gray-300 transition-all hover-lift cursor-pointer relative overflow-hidden">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={80}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-gray-700" />
                  </div>
                  <CardTitle className="text-gray-900">Estrutura</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">2 Subsolos</span>
                  <span className="font-bold text-gray-900">Garagem</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">Térreo</span>
                  <span className="font-bold text-gray-900">Lazer</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">1º ao 5º</span>
                  <span className="font-bold text-gray-900">50 unid. Tipo</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">6º Pav.</span>
                  <span className="font-bold text-gray-900">6 Tipo + 4 Duplex</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">7º Pav.</span>
                  <span className="font-bold text-gray-900">Varandas + Lazer</span>
                </div>
              </CardContent>
            </Card>

            {/* Unidades Card */}
            <Card className="border border-gray-200 bg-white hover:border-gray-300 transition-all hover-lift cursor-pointer relative overflow-hidden">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={80}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                    <Home className="h-5 w-5 text-gray-700" />
                  </div>
                  <CardTitle className="text-gray-900">Unidades</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-4 bg-gray-50 rounded-xl">
                  <p className="text-4xl font-black text-gray-900 mb-1">60</p>
                  <p className="text-sm text-gray-600">Total de apartamentos</p>
                </div>
                <div className="flex justify-between items-center py-2 border-t border-gray-100">
                  <span className="text-sm text-gray-600">Entrega</span>
                  <span className="text-lg font-bold text-gray-900">Outubro/2029</span>
                </div>
              </CardContent>
            </Card>

            {/* Tipologias Card */}
            <Card className="md:col-span-3 border border-gray-200 bg-white hover:border-gray-300 transition-all hover-lift cursor-pointer relative overflow-hidden">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={80}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                    <Home className="h-5 w-5 text-gray-700" />
                  </div>
                  <div>
                    <CardTitle className="text-gray-900">Tipologias Disponíveis</CardTitle>
                    <CardDescription>4 opções de plantas para diferentes perfis</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    { metragem: '54,30m²', quartos: '2 Dormitórios', suites: '1 Suíte', tipo: 'Tipo', cor: 'gray' },
                    { metragem: '60,80m²', quartos: '2 Dormitórios', suites: '1 Suíte', tipo: 'Tipo', cor: 'gray' },
                    { metragem: '69,53m²', quartos: '3 Dormitórios', suites: '2 Suítes', tipo: 'Tipo', cor: 'orange' },
                    { metragem: '133,33m²', quartos: '3 Dormitórios', suites: '2 Suítes', tipo: 'Cobertura Duplex', cor: 'orange' },
                  ].map((planta, i) => (
                    <div key={i} className={`rounded-xl p-6 text-center border-2 ${planta.cor === 'orange' ? 'border-orange-300 bg-orange-50' : 'border-gray-200 bg-gray-50'}`}>
                      <p className={`text-3xl font-black mb-2 ${planta.cor === 'orange' ? 'text-orange-600' : 'text-gray-900'}`}>{planta.metragem}</p>
                      <p className="text-sm font-bold text-gray-700 mb-1">{planta.quartos}</p>
                      <p className="text-sm text-gray-600 mb-2">{planta.suites}</p>
                      <span className={`text-xs px-3 py-1 rounded-full ${planta.cor === 'orange' ? 'bg-orange-200 text-orange-700' : 'bg-gray-200 text-gray-700'}`}>
                        {planta.tipo}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Lazer Coberto */}
                <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                      <Building2 className="h-4 w-4 text-orange-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Lazer Coberto — 14 itens</h4>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      'Lobby', 'Bicicletário', 'Lavanderia', 'Espaço Delivery',
                      'Espaço Manual', 'Coworking', 'Espaço Work', 'Espaço Beauty',
                      'Espaço Fitness', 'Espaço Família', 'Salão de Jogos', 'Brinquedoteca',
                      'Salão de Festas 1', 'Salão de Festas 2'
                    ].map((item, i) => (
                      <div key={i} className="bg-white rounded-lg p-3 text-center border border-gray-200">
                        <span className="text-sm font-medium text-gray-800">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lazer Descoberto */}
                <div className="mt-4 p-6 bg-green-50 rounded-xl border border-green-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                      <Leaf className="h-4 w-4 text-green-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Lazer Descoberto — 12 itens</h4>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      'Horta', 'Playground', 'Fitness Externo', 'Espaço Gourmet',
                      'Pet Place', 'Espaço Piquenique', 'Redário', 'Pista de Caminhada',
                      'Praça do Fogo', 'Deck Bem-Estar', 'Jacuzzi', 'Solarium'
                    ].map((item, i) => (
                      <div key={i} className="bg-white rounded-lg p-3 text-center border border-green-200">
                        <span className="text-sm font-medium text-gray-800">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Localização Card */}
            <Card className="md:col-span-3 border border-gray-200 bg-white relative overflow-hidden">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={80}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <CardHeader>
                <CardTitle className="text-gray-900">Localização</CardTitle>
                <CardDescription>Rua José Pinto da Silva Novaes Junior - Ribeirão Pires, SP</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-orange-600" />
                        Endereço Completo
                      </h4>
                      <p className="text-gray-700">Rua José Pinto da Silva Novaes Junior, 0</p>
                      <p className="text-gray-700">Ribeirão Pires - SP</p>
                      <p className="text-gray-600">CEP: 09400-620</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-bold text-gray-900 mb-3">Diferenciais da Região</h4>
                      <ul className="space-y-2">
                        {[
                          'Proximidade com o ABC Paulista',
                          'Fácil acesso a São Paulo',
                          'Região em desenvolvimento',
                          'Qualidade de vida'
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                            <Check className="h-4 w-4 text-green-600" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-orange-600" />
                      Comparativo de Lazer
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-700">AYA Urban</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div className="bg-orange-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                          </div>
                          <span className="text-sm font-bold text-orange-600">26 itens</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-700">AYA Resort</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                          <span className="text-sm font-bold text-gray-600">22 itens</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-700">Áquila</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '31%' }}></div>
                          </div>
                          <span className="text-sm font-bold text-gray-600">~8 itens</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-700">Duetto</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '19%' }}></div>
                          </div>
                          <span className="text-sm font-bold text-gray-600">~5 itens</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-4">AYA Urban lidera em quantidade de lazer na região</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* MERCADO - BENTO GRID */}
      <section id="mercado" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-bold mb-4">
              SEÇÃO 02
            </span>
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
                Mercado
              </span>
            </h2>
            <p className="text-xl text-gray-600">Dados demográficos e econômicos</p>
            <p className="text-sm text-gray-500 mt-2">Dados: Caravela | Análise: Agência RPK</p>
          </motion.div>

          {/* Big Numbers Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { value: '119 mil', label: 'População', sub: '-4.6% em 5 anos', color: 'gray' },
              { value: 'R$ 3,9 bi', label: 'PIB', sub: 'R$33k p/capita', color: 'orange' },
              { value: 'R$ 3.054', label: 'Salário', sub: 'vs R$3.900 SP', color: 'red' },
              { value: '~40 mil', label: 'Domicílios', sub: '~3 pessoas/dom', color: 'gray' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className={`border-2 hover-lift cursor-pointer ${stat.color === 'orange' ? 'border-orange-200 bg-orange-50' : stat.color === 'red' ? 'border-red-200 bg-red-50' : 'border-gray-200'}`}>
                  <CardContent className="p-6 text-center">
                    <motion.p
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
                      className={`text-4xl font-black mb-1 ${stat.color === 'orange' ? 'text-orange-600' : stat.color === 'red' ? 'text-red-600' : 'text-gray-900'}`}
                    >
                      {stat.value}
                    </motion.p>
                    <p className="text-sm font-bold text-gray-900 mb-1">{stat.label}</p>
                    <p className="text-xs text-gray-600">{stat.sub}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Charts Bento Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Income Distribution */}
            <Card className="border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Distribuição de Renda</CardTitle>
                <CardDescription>População por classe social</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie
                      data={incomeData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {incomeData.map((entry, i) => (
                        <Cell key={i} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px' }}
                      formatter={(value: any) => [`${value}%`, 'Participação']}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {incomeData.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-xs text-gray-700">{item.name} {item.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Price Comparison */}
            <Card className="border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Preço m²</CardTitle>
                <CardDescription>Comparativo regional</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={priceM2Data} layout="vertical">
                    <XAxis type="number" tick={{ fill: '#6b7280', fontSize: 11 }} tickFormatter={(v) => `${(v/1000).toFixed(0)}k`} />
                    <YAxis type="category" dataKey="location" tick={{ fill: '#6b7280', fontSize: 12 }} width={100} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px' }}
                      formatter={(value: any) => [`R$ ${value.toLocaleString()}`, 'Preço/m²']}
                    />
                    <Bar dataKey="price" radius={[0, 8, 8, 0]}>
                      {priceM2Data.map((entry, i) => (
                        <Cell key={i} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                <div className="bg-orange-50 rounded-xl p-3 border border-orange-200 mt-4">
                  <p className="text-xs text-orange-900">
                    <strong>AYA Urban R$ 8.938/m²</strong> - Similar a Santo André (Motiró ~R$ 8.345/m²), acima de Mauá (~R$ 6.900/m²)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Employment Trend */}
            <Card className="md:col-span-2 border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Empregos 2025</CardTitle>
                <CardDescription>Saldo de empregos formais (CAGED) • Projeção 2026: -229</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={220}>
                  <AreaChart data={employmentData}>
                    <defs>
                      <linearGradient id="gradientOrange" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ff6b35" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="#ff6b35" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="mes" tick={{ fill: '#6b7280', fontSize: 12 }} />
                    <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} />
                    <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px' }} />
                    <Area type="monotone" dataKey="saldo" stroke="#ff6b35" strokeWidth={3} fill="url(#gradientOrange)" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Diferenciais da Localização */}
          <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white mb-6">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-blue-900">Diferenciais da Localização - Bairro Pastoril</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { icon: '🚂', titulo: 'Estação CPTM', desc: 'Linha 10-Turquesa', detalhe: '~1h30 até SP via trem' },
                  { icon: '🏥', titulo: 'Hospital', desc: 'Hospital e Maternidade RP', detalhe: 'Centro Alto - 100 leitos' },
                  { icon: '🏪', titulo: 'Comércio', desc: 'Shopping Duaik, Compre Bem', detalhe: 'Centro a poucos minutos' },
                  { icon: '🎓', titulo: 'Educação', desc: 'FIRP/UNIESP', detalhe: 'Faculdade local' },
                  { icon: '🚗', titulo: 'São Paulo', desc: '40-45 min de carro', detalhe: '39km de distância' },
                  { icon: '🏢', titulo: 'ABC Paulista', desc: '20-30 min', detalhe: 'Santo André, Mauá' },
                  { icon: '🏞️', titulo: 'Estância Turística', desc: 'Qualidade de vida', detalhe: 'IDH 0.784 (alto)' },
                  { icon: '🚑', titulo: 'UPAs', desc: 'UPA Centro e Santa Luzia', detalhe: 'Atendimento 24h' },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border border-blue-100 text-center">
                    <span className="text-2xl mb-2 block">{item.icon}</span>
                    <p className="font-bold text-gray-900 text-sm">{item.titulo}</p>
                    <p className="text-xs text-blue-700">{item.desc}</p>
                    <p className="text-xs text-gray-500 mt-1">{item.detalhe}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Alertas e Oportunidades */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <AlertCircle className="h-6 w-6 text-amber-600" />
                  <CardTitle className="text-amber-900">Pontos de Atenção</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    'Preço/m² 55% acima de Mauá',
                    'Entrega apenas em Out/2029',
                    'Concorrência com preços menores',
                    'Necessidade de expansão geográfica',
                  ].map((alert, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-amber-800">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600"></div>
                      {alert}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <CardTitle className="text-green-900">Oportunidades</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    'Escassez de verticais em Ribeirão Pires',
                    'Tipologias variadas (54m²-133m²)',
                    'Preço acessível vs Santo André',
                    'Acesso fácil ao ABC via CPTM',
                    'Estância turística - qualidade de vida',
                  ].map((opp, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-green-800">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div>
                      {opp}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PÚBLICO - ANÁLISE DE MERCADO */}
      <section id="publico" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-green-50"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-bold mb-4">
              SEÇÃO 03 • PÚBLICO-ALVO
            </span>
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-green-600">
                Público-Alvo
              </span>
            </h2>
            <p className="text-xl text-gray-600">Análise de Renda e Perfil do Comprador</p>
          </motion.div>

          {/* Cálculo de Renda Card */}
          <Card className="border-2 border-orange-300 bg-gradient-to-br from-orange-50 to-white mb-8">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-orange-200 flex items-center justify-center flex-shrink-0">
                  <DollarSign className="h-8 w-8 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-orange-900 mb-3">
                    Perfil de Renda para o AYA Urban
                  </h3>
                  <p className="text-lg text-orange-800 mb-4">
                    Ticket até <strong>R$ 600.000</strong> • Renda familiar: <strong>R$ 8.000 - R$ 15.000/mês</strong> • Financiamento SBPE ou MCMV Faixa 3
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { value: 'R$ 8-15k', label: 'Renda familiar/mês', color: 'orange' },
                      { value: 'até R$ 600k', label: 'Ticket médio', color: 'gray' },
                      { value: 'SBPE', label: 'Financiamento', color: 'orange' },
                      { value: 'MCMV F3', label: 'Alternativa', color: 'gray' },
                    ].map((stat, i) => (
                      <div key={i} className="bg-white rounded-xl p-4 text-center border border-orange-100">
                        <p className={`text-2xl font-black ${stat.color === 'orange' ? 'text-orange-600' : 'text-gray-900'}`}>
                          {stat.value}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Público Qualificado */}
          <Card className="border-2 border-green-300 bg-gradient-to-br from-green-50 to-white mb-8">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-green-200 flex items-center justify-center flex-shrink-0">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-green-900 mb-3">
                    Núcleos Familiares Compatíveis em Ribeirão Pires
                  </h3>
                  <p className="text-lg text-green-800 mb-4">
                    Com <strong>~40.000 domicílios</strong> e <strong>10-18% com renda ≥ R$ 8.000/mês</strong>, estimamos:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {[
                      { value: '~4.000', label: 'Faixa conservadora (10%)', color: 'green' },
                      { value: '~7.200', label: 'Faixa otimista (18%)', color: 'green' },
                      { value: '~R$ 3.054', label: 'Salário médio local', color: 'gray' },
                      { value: '~40 mil', label: 'Domicílios RP', color: 'gray' },
                    ].map((stat, i) => (
                      <div key={i} className="bg-white rounded-xl p-4 text-center border border-green-100">
                        <p className={`text-2xl font-black ${stat.color === 'green' ? 'text-green-600' : 'text-gray-900'}`}>
                          {stat.value}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-green-100 rounded-xl p-4 border border-green-200">
                    <p className="text-sm text-green-900">
                      <strong>Análise do PDF:</strong> A demanda potencial (4.000-7.200 famílias) supera em várias vezes a oferta de 60 unidades, indicando <strong>rápida absorção se o produto for bem posicionado</strong>. Mudanças na legislação municipal (2023) liberando construções verticais tendem a liberar essa demanda reprimida.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personas Grid */}
          <h3 className="text-2xl font-black text-gray-900 mb-6 text-center">Personas do AYA Urban</h3>
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {[
              {
                title: 'Casal Jovem',
                traits: ['25-35 anos', 'Renda R$14-20k', 'Primeiro imóvel', '2 dorms ideal'],
                icon: Users,
                color: 'orange',
                desc: 'Busca sair do aluguel, valoriza localização e preço acessível'
              },
              {
                title: 'Família em Crescimento',
                traits: ['30-45 anos', 'Renda R$18-25k', '1-2 filhos', '3 dorms preferido'],
                icon: Home,
                color: 'blue',
                desc: 'Busca mais espaço, escola próxima e área de lazer'
              },
              {
                title: 'Profissional ABC',
                traits: ['28-40 anos', 'Trabalha no ABC', 'Home office parcial', 'Busca qualidade'],
                icon: Briefcase,
                color: 'green',
                desc: 'Foge do trânsito de SP, valoriza natureza e custo-benefício'
              },
              {
                title: 'Investidor',
                traits: ['35-55 anos', 'Renda R$20k+', 'Diversificação', 'Potencial aluguel'],
                icon: TrendingUp,
                color: 'purple',
                desc: 'Busca valorização em região em desenvolvimento'
              },
            ].map((persona, i) => (
              <Card key={i} className={`border-2 border-${persona.color}-200 hover:border-${persona.color}-400 transition-all hover-lift`}>
                <CardContent className="p-5">
                  <div className={`w-12 h-12 rounded-xl bg-${persona.color}-100 flex items-center justify-center mb-3`}>
                    <persona.icon className={`h-6 w-6 text-${persona.color}-600`} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{persona.title}</h4>
                  <ul className="space-y-1 mb-3">
                    {persona.traits.map((trait, j) => (
                      <li key={j} className="text-xs text-gray-600 flex items-center gap-1">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${persona.color}-400`}></div>
                        {trait}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-500 italic">{persona.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Expansão Geográfica */}
          <Card className="border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-white">
            <CardContent className="p-8">
              <h3 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
                <Target className="h-6 w-6 text-orange-600" />
                Estratégia de Expansão Geográfica
              </h3>
              <p className="text-gray-700 mb-6">
                Além de Ribeirão Pires, recomenda-se campanha em regiões próximas com público qualificado:
              </p>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { cidade: 'Ribeirão Pires', familias: '~5.100', prioridade: 'Alta', cor: 'orange' },
                  { cidade: 'Mauá', familias: '~12.000', prioridade: 'Alta', cor: 'orange' },
                  { cidade: 'Santo André', familias: '~45.000', prioridade: 'Média', cor: 'blue' },
                  { cidade: 'São Bernardo', familias: '~55.000', prioridade: 'Média', cor: 'blue' },
                  { cidade: 'SP Zona Leste', familias: '~80.000', prioridade: 'Explorar', cor: 'gray' },
                ].map((item, i) => (
                  <div key={i} className={`p-4 rounded-xl border-2 border-${item.cor}-200 bg-${item.cor}-50 text-center`}>
                    <p className="font-bold text-gray-900 text-sm">{item.cidade}</p>
                    <p className={`text-xl font-black text-${item.cor}-600`}>{item.familias}</p>
                    <p className="text-xs text-gray-500">Classes A+B</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full bg-${item.cor}-200 text-${item.cor}-800 mt-2 inline-block`}>
                      {item.prioridade}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CONCORRENTES */}
      <section id="concorrentes" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-bold mb-4">
              SEÇÃO 04
            </span>
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
                Concorrentes
              </span>
            </h2>
          </motion.div>

          {/* Comparison Table */}
          <Card className="border-2 border-gray-200 mb-8 overflow-x-auto hover-lift">
            <CardContent className="p-6">
              <table className="w-full min-w-[900px]">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 text-sm font-bold text-gray-600">Empreendimento</th>
                    <th className="text-left py-3 text-sm font-bold text-gray-600">Construtora</th>
                    <th className="text-left py-3 text-sm font-bold text-gray-600">Local</th>
                    <th className="text-left py-3 text-sm font-bold text-gray-600">Área</th>
                    <th className="text-left py-3 text-sm font-bold text-gray-600">Preço</th>
                    <th className="text-left py-3 text-sm font-bold text-orange-600">R$/m²</th>
                    <th className="text-left py-3 text-sm font-bold text-gray-600">Entrega</th>
                  </tr>
                </thead>
                <tbody>
                  <motion.tr
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="border-b-2 border-orange-200 bg-orange-50"
                  >
                    <td className="py-4 font-black text-orange-600">AYA Urban</td>
                    <td className="py-4 font-bold text-orange-600">Wind/RAP</td>
                    <td className="py-4 text-gray-900">Ribeirão Pires</td>
                    <td className="py-4 font-bold text-gray-900">54-70m²</td>
                    <td className="py-4 text-gray-900 font-bold">~R$ 550k</td>
                    <td className="py-4 font-black text-orange-600">R$ 8.938</td>
                    <td className="py-4 text-gray-900">Out/29</td>
                  </motion.tr>
                  {[
                    // RIBEIRÃO PIRES - Concorrentes diretos (mesmo segmento 50-70m²)
                    { name: 'AYA Home Resort', construtora: 'Wind/RAP', local: 'Ribeirão Pires', area: '69-114m²', price: 'R$580k-930k', priceM2: 'R$ 8.400', date: 'Início 2028', link: 'https://windincorporadora.com.br/' },
                    { name: 'Residencial Duetto', construtora: 'Toth Construtora', local: 'Ribeirão Pires', area: '40-57m²', price: 'R$242k-378k', priceM2: 'R$ 6.400', date: '2025', link: 'https://tothconstrutora.com.br/' },
                    { name: 'Residencial Áquila', construtora: 'Obra Nobre', local: 'Ribeirão Pires', area: '58-60m²', price: '~R$ 440k', priceM2: 'R$ 7.350', date: 'Dez/2026', link: 'https://obranobre.com.br/lancamentos/' },

                    // MAUÁ - Vila Bocaina (bairro nobre) - Dados validados Dez/2024
                    { name: 'Edifício Angélica', construtora: 'Paulo Makoto', local: 'Mauá', area: '60-85m²', price: 'R$360k-480k', priceM2: 'R$ 6.000', date: '2025', link: 'https://www.paulomakoto.com.br/apartamento/edificio-angelica' },
                    { name: 'Gran Vista', construtora: 'AZCA Incorporadora', local: 'Mauá', area: '92-184m²', price: 'A partir R$726k', priceM2: 'R$ 7.900', date: '2026', link: 'https://www.granvistamaua.com.br/' },
                    { name: 'Residencial Mandarim', construtora: 'A definir', local: 'Mauá', area: '83-220m²', price: 'A partir R$570k', priceM2: 'R$ 6.800', date: '2026', link: 'https://residencialmandarim.com/' },

                    // SANTO ANDRÉ - Mesmo segmento (50-70m², 2-3 dorms)
                    { name: 'Vision Campestre', construtora: 'Econ', local: 'Sto André', area: '43-67m²', price: 'A partir R$367k', priceM2: 'R$ 6.672', date: '10/2026', link: 'https://www.construtorapatriani.com.br/' },
                    { name: 'Motiró Casa Branca', construtora: 'Jacy/Motiró', local: 'Sto André', area: '57-90m²', price: 'R$473k-807k', priceM2: 'R$ 8.345', date: '02/2028', link: 'https://casabranca.bymotiro.com.br/' },
                    { name: 'Jump by Motiró', construtora: 'Jacy/Motiró', local: 'Sto André', area: 'Variadas', price: 'Consultar', priceM2: 'R$ 9.000', date: '07/2025', link: 'https://grupomotiro.com.br/' },
                  ].map((comp, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ backgroundColor: '#f9fafb' }}
                      className="border-b border-gray-100 transition-colors"
                    >
                      <td className="py-3 text-gray-700 text-sm">
                        <a href={comp.link} target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 hover:underline">
                          {comp.name}
                        </a>
                      </td>
                      <td className="py-3 text-gray-600 text-xs">{comp.construtora}</td>
                      <td className="py-3 text-gray-600 text-xs">{comp.local}</td>
                      <td className="py-3 text-gray-600 text-sm">{comp.area}</td>
                      <td className="py-3 text-gray-600 text-sm font-semibold">{comp.price}</td>
                      <td className="py-3 text-gray-900 text-sm font-bold">{comp.priceM2}</td>
                      <td className="py-3 text-gray-600 text-sm">{comp.date}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600">
                  <strong className="text-orange-600">9 empreendimentos</strong> mapeados (mesmo segmento 50-70m²):
                  <strong> 3 em Ribeirão Pires</strong>, <strong>3 em Santo André</strong>, <strong>3 em Mauá</strong>
                </p>
                <span className="text-xs text-gray-500">Fontes: Portais imobiliários, Construtoras | Dez/2024</span>
              </div>
            </CardContent>
          </Card>

          {/* Resumo Preço/m² por Região */}
          <Card className="border-2 border-orange-200 mb-8 hover-lift">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-orange-600" />
                Comparativo de Preço/m² por Região - Segmento 50-70m² (2-3 dorms)
              </CardTitle>
              <CardDescription>Dados reais pesquisados em Dezembro/2024 - Fontes: Portais imobiliários, Construtoras</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { region: 'AYA Urban', aya: true, min: 8938, max: 8938, avg: 'R$ 8.938', color: 'orange', desc: 'Ribeirão Pires' },
                  { region: 'Mauá', aya: false, min: 6000, max: 7900, avg: 'R$ 6.900', color: 'gray', desc: 'Angélica, Gran Vista, Mandarim' },
                  { region: 'Santo André', aya: false, min: 6672, max: 9000, avg: 'R$ 8.006', color: 'gray', desc: 'Vision, Motiró' },
                ].map((item, i) => (
                  <div key={i} className={`p-4 rounded-xl border-2 ${item.aya ? 'border-orange-400 bg-orange-50' : item.color === 'green' ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-gray-50'}`}>
                    <h4 className={`font-bold mb-1 text-sm ${item.aya ? 'text-orange-600' : item.color === 'green' ? 'text-green-700' : 'text-gray-900'}`}>{item.region}</h4>
                    <p className={`text-xl font-black ${item.aya ? 'text-orange-600' : item.color === 'green' ? 'text-green-600' : 'text-gray-900'}`}>{item.avg}</p>
                    <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-4 p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                <div className="text-center">
                  <p className="text-xs text-gray-600 uppercase font-bold">AYA vs Mauá</p>
                  <p className="text-2xl font-black text-yellow-600">+30%</p>
                  <p className="text-xs text-gray-500">acima da média</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-600 uppercase font-bold">AYA vs Santo André</p>
                  <p className="text-2xl font-black text-yellow-600">+12%</p>
                  <p className="text-xs text-gray-500">similar ao Motiró</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
                <p className="text-sm text-amber-900">
                  <strong>Análise:</strong> O AYA Urban está posicionado no segmento <strong>médio-alto</strong> da região, com preço/m² similar aos lançamentos de Santo André (Motiró Casa Branca ~R$ 8.345/m²). Compete diretamente com empreendimentos de mesmo padrão, oferecendo diferencial em Ribeirão Pires onde há escassez de produtos verticais.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Vantagens */}
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { title: 'Pioneirismo', desc: 'Produto vertical em RP', icon: Award },
              { title: 'Preço', desc: 'R$ 8.938/m²', icon: DollarSign },
              { title: 'Tipologias', desc: '54m² a 133m²', icon: Home },
              { title: 'Entrega', desc: 'Outubro/2029', icon: Clock },
            ].map((vantagem, i) => (
              <Card key={i} className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-200 flex items-center justify-center mx-auto mb-3">
                    <vantagem.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{vantagem.title}</h4>
                  <p className="text-sm text-gray-600">{vantagem.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ANÁLISE SWOT */}
      <section id="swot" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-bold mb-4">
              ANÁLISE ESTRATÉGICA
            </span>
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
                Análise SWOT
              </span>
            </h2>
            <p className="text-xl text-gray-600">Forças, Fraquezas, Oportunidades e Ameaças</p>
          </motion.div>

          {/* SWOT Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* STRENGTHS - Forças */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-white h-full hover-lift">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-green-200 flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-green-900">Forças (Strengths)</CardTitle>
                      <CardDescription>Pontos fortes internos do projeto</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      { text: 'Localização Premium: Centro de RP, próximo a comércio, escolas, hospital e estação de trem', strong: true },
                      { text: 'Produto Versátil: 2-3 dorms (54-69m²) + coberturas duplex 133m² - atende diversos perfis', strong: true },
                      { text: 'Qualidade Construtiva Wind/RAP: padrão elevado, 26 itens de lazer (14 cobertos + 12 descobertos)', strong: true },
                      { text: 'Exclusividade: apenas 60 unidades, torre única - ambiente familiar e baixa densidade', strong: true },
                      { text: '64 vagas de garagem (suficientes + extras para visitantes), portaria 24h, segurança moderna', strong: false },
                      { text: 'Flexibilidade de Pagamento: parcelamento longo durante obra, entrada facilitada, uso de FGTS', strong: false },
                      { text: 'Gap de mercado: único produto "padrão bom" até R$ 600k na região central de RP', strong: true },
                      { text: 'Melhor custo-benefício vs AYA Resort (preço mais acessível) e vs Áquila/Duetto (26 itens de lazer vs ~8 e ~5)', strong: false },
                      { text: 'Demanda reprimida: lei de zoneamento 2023 liberou verticais, famílias aguardavam opções', strong: false },
                      { text: 'Potencial de valorização: pioneirismo vertical tende a elevar preços significativamente', strong: true },
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className={`flex items-start gap-2 text-sm ${item.strong ? 'font-bold text-green-900' : 'text-gray-700'}`}
                      >
                        <CheckCircle className={`h-4 w-4 mt-0.5 flex-shrink-0 ${item.strong ? 'text-green-600' : 'text-green-400'}`} />
                        <span>{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* WEAKNESSES - Fraquezas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-white h-full hover-lift">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-red-200 flex items-center justify-center">
                      <AlertCircle className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <CardTitle className="text-red-900">Fraquezas (Weaknesses)</CardTitle>
                      <CardDescription>Pontos fracos internos a melhorar</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      { text: 'Prazo de Entrega Longo: 10/2029 (~4 anos) - risco de atrasos e mudanças econômicas', critical: true },
                      { text: 'Pouco Histórico de Verticalização: público local não acostumado com apartamentos', critical: true },
                      { text: 'Resistência cultural: muitos residem em casas/sobrados, preferem "quintal próprio"', critical: false },
                      { text: 'Concorrência Interna: AYA Home Resort do mesmo grupo pode criar sobreposição de público', critical: false },
                      { text: 'Marca Wind sem recall imediato: diferente de Helbor, MRV, Cyrela - desafio de credibilidade inicial', critical: true },
                      { text: 'Terreno menor (1.202m²): lazer distribuído no térreo e cobertura, sem grandes áreas abertas', critical: false },
                      { text: 'Salário médio local modesto (~R$ 3.054/mês) - público-alvo limitado em RP', critical: false },
                      { text: 'Possível proximidade de via movimentada ou linha férrea - verificar ruído', critical: false },
                      { text: 'Dependência de financiamento: maioria dos compradores precisará de crédito aprovado em 2029', critical: false },
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className={`flex items-start gap-2 text-sm ${item.critical ? 'font-bold text-red-900' : 'text-gray-700'}`}
                      >
                        <AlertCircle className={`h-4 w-4 mt-0.5 flex-shrink-0 ${item.critical ? 'text-red-600' : 'text-red-400'}`} />
                        <span>{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* OPPORTUNITIES - Oportunidades */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white h-full hover-lift">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-200 flex items-center justify-center">
                      <Target className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-blue-900">Oportunidades (Opportunities)</CardTitle>
                      <CardDescription>Fatores externos favoráveis</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      { text: 'Mercado Imobiliário Local em Expansão: lei de zoneamento 2023 liberou prédios mais altos', key: true },
                      { text: 'Carência de Moradia Vertical de Médio Padrão: único na faixa até R$ 600k na região central', key: true },
                      { text: 'Financiamento Favorável: tendência de queda da Selic barateia crédito até 2029', key: true },
                      { text: 'Demanda potencial (4.000-7.200 famílias) supera em várias vezes a oferta de 60 unidades', key: true },
                      { text: 'Capturar compradores de concorrentes: quem não fechou AYA Resort pelo preço, quem quer mais que Áquila', key: false },
                      { text: 'Estância Turística: eventos (Festival do Chocolate, Natal Encantado) valorizam a cidade', key: false },
                      { text: 'Parcerias públicas: prefeitura investindo em infraestrutura turística e revitalização do centro', key: false },
                      { text: 'Diferenciais Sustentáveis: energia solar, tomadas para carros elétricos podem destacar vs concorrência', key: false },
                      { text: 'Valorização até entrega: comum ganhos de 20%+ do lançamento à obra pronta', key: true },
                      { text: 'Atrair moradores do ABC/SP que buscam custo-benefício e estilo de vida mais tranquilo', key: false },
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className={`flex items-start gap-2 text-sm ${item.key ? 'font-bold text-blue-900' : 'text-gray-700'}`}
                      >
                        <Sparkles className={`h-4 w-4 mt-0.5 flex-shrink-0 ${item.key ? 'text-blue-600' : 'text-blue-400'}`} />
                        <span>{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* THREATS - Ameaças */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white h-full hover-lift">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-orange-200 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <CardTitle className="text-orange-900">Ameaças (Threats)</CardTitle>
                      <CardDescription>Fatores externos desfavoráveis</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      { text: 'Novos Concorrentes no Curto Prazo: sucesso do AYA Home Resort demonstra mercado e pode atrair competição', high: true },
                      { text: 'Instabilidade Econômica: alta de juros além do previsto ou inflação descontrolada podem frear compras', high: true },
                      { text: 'Atrasos ou Custos de Obra: 4 anos sujeitos a riscos de insumos - atrasos minam confiança', high: true },
                      { text: 'Resistência Cultural: parte da população de RP ainda prefere casas a apartamentos', high: true },
                      { text: 'Saturação de Crédito: público elegível pode já estar comprometido com outros financiamentos', high: true },
                      { text: 'Recessão pode estagnar empregos e renda local, reduzindo capacidade de compra', high: false },
                      { text: 'Mudanças no programa MCMV ou condições SBPE podem afetar elegibilidade dos compradores', high: false },
                      { text: 'Percepção de segurança: eventual aumento de criminalidade na região central prejudica imagem', high: false },
                      { text: 'Concorrentes com entrega mais próxima (2025-2027) captam clientes impacientes', high: false },
                      { text: 'Outras incorporadoras perceberam potencial de RP e podem lançar projetos similares', high: false },
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className={`flex items-start gap-2 text-sm ${item.high ? 'font-bold text-orange-900' : 'text-gray-700'}`}
                      >
                        <AlertCircle className={`h-4 w-4 mt-0.5 flex-shrink-0 ${item.high ? 'text-orange-600' : 'text-orange-400'}`} />
                        <span>{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* SWOT Summary - Key Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <Card className="border-2 border-gray-300 bg-gradient-to-br from-gray-50 to-white">
              <CardHeader>
                <CardTitle className="text-gray-900">Ações Estratégicas Recomendadas</CardTitle>
                <CardDescription>Baseadas na análise SWOT</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      Explorar Forças + Oportunidades
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                        <span><strong>Gap de mercado:</strong> Único produto médio padrão até R$ 600k no centro de RP - posicionamento único</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                        <span><strong>Tipologias versáteis:</strong> 2-3 dorms (54-69m²) + coberturas 133m² atende diversos perfis familiares</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                        <span><strong>Valorização na planta:</strong> Histórico de ganhos de 20%+ até entrega - investidores atentos</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-red-600" />
                      Mitigar Fraquezas + Ameaças
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                        <span><strong>Construir marca Wind:</strong> Cases de sucesso, parceria RAP, certificações e depoimentos de compradores</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                        <span><strong>Educar sobre vertical:</strong> Conteúdo sobre benefícios de apartamento vs casa (segurança, praticidade)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                        <span><strong>Condições flexíveis:</strong> Parcelar entrada, facilitar financiamento MCMV/SBPE, assessoria completa</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* PERSONAS DETALHADAS */}
      <section id="personas" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-bold mb-4">
              PÚBLICOS-ALVO
            </span>
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
                Personas Compradoras
              </span>
            </h2>
            <p className="text-xl text-gray-600">Perfil detalhado, comportamento e chamadas publicitárias</p>
          </motion.div>

          {/* Persona 1: Casal Jovem */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-orange-500 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white">Persona 1: Casal Jovem</CardTitle>
                    <CardDescription className="text-orange-100">Lucas e Marina, 28-35 anos</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Demographics & Psychographics */}
                  <div>
                    <h4 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                      <Users className="h-5 w-5 text-orange-600" />
                      Demografia & Perfil
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><strong>Idade:</strong> 28-35 anos</li>
                      <li><strong>Renda:</strong> R$ 10k-14k/mês combinada</li>
                      <li><strong>Família:</strong> Casal sem filhos ou com bebê a caminho</li>
                      <li><strong>Trabalho:</strong> Técnicos ou analistas em indústrias do ABC ou comércio local</li>
                      <li><strong>Localização Atual:</strong> Aluguel em Ribeirão Pires ou cidades vizinhas</li>
                      <li><strong>Valores:</strong> Estabilidade, construir patrimônio, planejar o futuro</li>
                    </ul>
                  </div>

                  {/* Pain Points */}
                  <div>
                    <h4 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      Dores & Frustrações
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Aluguel consome parte significativa da renda sem construir patrimônio</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Dificuldade de juntar entrada para financiamento</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Receio de não conseguir pagar parcelas a longo prazo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Incerteza sobre mercado imobiliário e momento certo de comprar</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Falta de opções de qualidade na faixa de preço acessível</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Desires */}
                  <div>
                    <h4 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                      <Target className="h-5 w-5 text-green-600" />
                      Desejos & Objetivos
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Sair do aluguel e ter imóvel próprio para começar a vida</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Apartamento com 2 dorms para possível família no futuro</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Parcelas que caibam no orçamento sem sufocar</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Condomínio com 26 itens de lazer (jacuzzi, fitness, playground, pet place e mais)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Localização prática, perto do trabalho e transporte</span>
                      </li>
                    </ul>
                  </div>

                  {/* Behavior */}
                  <div>
                    <h4 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                      <Activity className="h-5 w-5 text-blue-600" />
                      Comportamento de Compra
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><strong>Pesquisa:</strong> Instagram, portais imobiliários, indicações de amigos</li>
                      <li><strong>Decisão:</strong> Emocional + racional, busca segurança e confiança</li>
                      <li><strong>Tempo:</strong> 3-6 meses de pesquisa e simulações</li>
                      <li><strong>Influência:</strong> Decisão conjunta do casal, consultam pais</li>
                      <li><strong>Financiamento:</strong> MCMV Faixa 3 ou SBPE - até 80% financiado</li>
                      <li><strong>Visita:</strong> Visitam decorado juntos, avaliam vizinhança</li>
                    </ul>
                  </div>
                </div>

                {/* Ad Calls */}
                <div className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-2xl p-6 border-2 border-orange-300">
                  <h4 className="font-black text-orange-900 mb-4 flex items-center gap-2 text-lg">
                    <Zap className="h-6 w-6 text-orange-600" />
                    Chamadas Publicitárias para Casal Jovem
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { headline: '"Seu primeiro apê no centro de Ribeirão Pires. A partir de R$ 350k."', format: 'Meta Ads - Feed' },
                      { headline: '"Saia do aluguel! Parcelas a partir de R$ 2.800/mês."', format: 'Google Ads - Search' },
                      { headline: '"2 dorms, 26 itens de lazer e entrada facilitada. Conheça o AYA Urban."', format: 'Meta Ads - Stories' },
                      { headline: '"Financiamento MCMV ou SBPE. Assessoria gratuita para aprovação."', format: 'Google Display' },
                      { headline: '"Casais jovens de RP estão trocando aluguel por patrimônio."', format: 'Meta Ads - Reels' },
                      { headline: '"Perto do trabalho, do trem e da família. Seu lar no centro de RP."', format: 'Instagram Stories' },
                    ].map((ad, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(255, 107, 53, 0.2)' }}
                        className="bg-white rounded-xl p-4 border border-orange-200 cursor-pointer"
                      >
                        <p className="font-bold text-gray-900 text-sm mb-2">{ad.headline}</p>
                        <span className="text-xs text-orange-600 font-medium">{ad.format}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Persona 2: Família com Filhos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-white overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-500 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white">Persona 2: Família com Filhos</CardTitle>
                    <CardDescription className="text-green-100">André e Cláudia, 35-45 anos</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Demographics & Psychographics */}
                  <div>
                    <h4 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                      <Users className="h-5 w-5 text-green-600" />
                      Demografia & Perfil
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><strong>Idade:</strong> 35-45 anos</li>
                      <li><strong>Renda:</strong> R$ 12k-18k/mês combinada</li>
                      <li><strong>Família:</strong> Casal com 1-2 filhos em idade escolar</li>
                      <li><strong>Trabalho:</strong> Funcionários públicos, professores ou gerentes de empresas locais</li>
                      <li><strong>Localização Atual:</strong> Casa ou apartamento pequeno em RP ou região</li>
                      <li><strong>Valores:</strong> Segurança, educação dos filhos, qualidade de vida, conforto familiar</li>
                    </ul>
                  </div>

                  {/* Pain Points */}
                  <div>
                    <h4 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      Dores & Frustrações
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Imóvel atual não comporta mais a família que cresceu</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Falta de espaço de lazer seguro para as crianças</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Preocupação com segurança em casa antiga ou bairro afastado</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Deslocamento longo até escolas e serviços básicos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Alto custo de manutenção de casa (IPTU, reformas, segurança)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Desires */}
                  <div>
                    <h4 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                      <Target className="h-5 w-5 text-green-600" />
                      Desejos & Objetivos
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Apartamento com 3 dorms para cada filho ter seu quarto</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Condomínio com playground, brinquedoteca, espaço família e 26 itens de lazer</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Segurança 24h - portaria, câmeras, controle de acesso</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Próximo a escolas, hospital e comércio</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Upgrade de padrão de vida sem sair de Ribeirão Pires</span>
                      </li>
                    </ul>
                  </div>

                  {/* Behavior */}
                  <div>
                    <h4 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                      <Activity className="h-5 w-5 text-blue-600" />
                      Comportamento de Compra
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><strong>Pesquisa:</strong> Grupos de Facebook locais, indicação de vizinhos/parentes</li>
                      <li><strong>Decisão:</strong> Prática e funcional, foco em espaço e segurança</li>
                      <li><strong>Tempo:</strong> 4-8 meses, pesquisa detalhada e comparação</li>
                      <li><strong>Influência:</strong> Esposa tem voz forte na decisão final</li>
                      <li><strong>Financiamento:</strong> Venda do imóvel atual + complemento SBPE</li>
                      <li><strong>Visita:</strong> Visitam com toda a família, avaliam área de lazer</li>
                    </ul>
                  </div>
                </div>

                {/* Ad Calls */}
                <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-2xl p-6 border-2 border-green-300">
                  <h4 className="font-black text-green-900 mb-4 flex items-center gap-2 text-lg">
                    <Zap className="h-6 w-6 text-green-600" />
                    Chamadas Publicitárias para Família com Filhos
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { headline: '"3 dorms, 26 itens de lazer e segurança 24h. O upgrade que sua família merece."', format: 'Meta Ads - Feed' },
                      { headline: '"Playground, brinquedoteca e jacuzzi. Seus filhos vão amar morar aqui."', format: 'Instagram Stories' },
                      { headline: '"Pertinho da escola, do hospital e do shopping. Vida prática no centro de RP."', format: 'Meta Ads - Reels' },
                      { headline: '"Troque a casa antiga por um apê moderno. Chega de reformas e preocupações."', format: 'Google Display' },
                      { headline: '"69m² com 3 dorms e suíte. Cada um com seu espaço, todos com conforto."', format: 'Facebook Ads' },
                      { headline: '"Segurança de condomínio fechado no coração de Ribeirão Pires."', format: 'YouTube Pre-Roll' },
                    ].map((ad, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(34, 197, 94, 0.2)' }}
                        className="bg-white rounded-xl p-4 border border-green-200 cursor-pointer"
                      >
                        <p className="font-bold text-gray-900 text-sm mb-2">{ad.headline}</p>
                        <span className="text-xs text-green-600 font-medium">{ad.format}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Persona 3: Casal Aposentado */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-500 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Home className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white">Persona 3: Casal Aposentado</CardTitle>
                    <CardDescription className="text-purple-100">Nilton e Vera, 55-65 anos</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Demographics & Psychographics */}
                  <div>
                    <h4 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                      <Users className="h-5 w-5 text-purple-600" />
                      Demografia & Perfil
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><strong>Idade:</strong> 55-65 anos</li>
                      <li><strong>Renda:</strong> R$ 8k-12k/mês (aposentadoria + renda extra)</li>
                      <li><strong>Família:</strong> Casal com filhos adultos que já saíram de casa</li>
                      <li><strong>Trabalho:</strong> Aposentados ou prestes a se aposentar</li>
                      <li><strong>Localização Atual:</strong> Casa grande em RP ou região com manutenção cara</li>
                      <li><strong>Valores:</strong> Tranquilidade, praticidade, saúde, convivência familiar</li>
                    </ul>
                  </div>

                  {/* Pain Points */}
                  <div>
                    <h4 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      Dores & Frustrações
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Casa grande demais para manter - esforço físico e financeiro</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Preocupação com segurança em casa térrea isolada</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Falta de vizinhança e convivência social no dia a dia</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Dificuldade de acessar serviços médicos e comércio rapidamente</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Patrimônio imobilizado em imóvel antigo sem liquidez</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Desires */}
                  <div>
                    <h4 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                      <Target className="h-5 w-5 text-green-600" />
                      Desejos & Objetivos
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Apartamento prático e confortável, fácil de manter</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Condomínio com portaria 24h e segurança</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>26 itens de lazer: fitness, deck bem-estar, pista de caminhada, jacuzzi e mais</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Proximidade de hospital, farmácias e serviços essenciais</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Vender casa e sobrar dinheiro para complementar aposentadoria</span>
                      </li>
                    </ul>
                  </div>

                  {/* Behavior */}
                  <div>
                    <h4 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                      <Activity className="h-5 w-5 text-blue-600" />
                      Comportamento de Compra
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><strong>Pesquisa:</strong> Indicação de filhos/netos, visita presencial, jornal local</li>
                      <li><strong>Decisão:</strong> Conservadora, precisa confiar na construtora e no corretor</li>
                      <li><strong>Tempo:</strong> 6-12 meses, decisão lenta e cuidadosa</li>
                      <li><strong>Influência:</strong> Filhos têm papel importante na decisão</li>
                      <li><strong>Financiamento:</strong> Venda da casa atual cobre maior parte ou totalidade</li>
                      <li><strong>Visita:</strong> Várias visitas, avaliam acabamento e acessibilidade</li>
                    </ul>
                  </div>
                </div>

                {/* Ad Calls */}
                <div className="bg-gradient-to-r from-purple-100 to-purple-50 rounded-2xl p-6 border-2 border-purple-300">
                  <h4 className="font-black text-purple-900 mb-4 flex items-center gap-2 text-lg">
                    <Zap className="h-6 w-6 text-purple-600" />
                    Chamadas Publicitárias para Casal Aposentado
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { headline: '"Troque a casa grande por um apê prático e seguro. Chegou sua hora de descansar."', format: 'Facebook Ads' },
                      { headline: '"Portaria 24h, 26 itens de lazer e hospital a 5 min. Tranquilidade para você."', format: 'Google Display' },
                      { headline: '"Venda sua casa e sobre dinheiro. 2 dorms com conforto no centro de RP."', format: 'Meta Ads - Feed' },
                      { headline: '"Menos manutenção, mais qualidade de vida. Conheça o AYA Urban."', format: 'Instagram Stories' },
                      { headline: '"Seus filhos vão adorar saber que você está seguro e bem cuidado."', format: 'Facebook Ads' },
                      { headline: '"54m² é tudo que você precisa. Espaço ideal para o casal curtir a vida."', format: 'YouTube Pre-Roll' },
                    ].map((ad, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(147, 51, 234, 0.2)' }}
                        className="bg-white rounded-xl p-4 border border-purple-200 cursor-pointer"
                      >
                        <p className="font-bold text-gray-900 text-sm mb-2">{ad.headline}</p>
                        <span className="text-xs text-purple-600 font-medium">{ad.format}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Persona 4: Investidor */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white">Persona 4: Investidor</CardTitle>
                    <CardDescription className="text-blue-100">Eduardo, 40-55 anos, Empresário</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Demographics & Psychographics */}
                  <div>
                    <h4 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                      <Users className="h-5 w-5 text-blue-600" />
                      Demografia & Perfil
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><strong>Idade:</strong> 40-55 anos</li>
                      <li><strong>Renda:</strong> R$ 15k+/mês (empresário ou profissional liberal)</li>
                      <li><strong>Família:</strong> Casado, já possui imóvel próprio</li>
                      <li><strong>Trabalho:</strong> Empresário, médico, advogado, engenheiro</li>
                      <li><strong>Localização Atual:</strong> Santo André, São Bernardo ou Mauá</li>
                      <li><strong>Valores:</strong> Rentabilidade, segurança patrimonial, diversificação</li>
                    </ul>
                  </div>

                  {/* Pain Points */}
                  <div>
                    <h4 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      Dores & Frustrações
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Dinheiro parado em aplicações de baixo rendimento</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Bolsa de valores volátil demais para perfil conservador</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Imóveis no ABC muito caros, margem de valorização apertada</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Dificuldade em encontrar oportunidades de entrada antecipada</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Receio de investir em construtoras sem histórico sólido</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Desires */}
                  <div>
                    <h4 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                      <Target className="h-5 w-5 text-green-600" />
                      Desejos & Objetivos
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Comprar na planta com potencial de valorização de 20%+ até entrega</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Diversificar patrimônio em mercado emergente com demanda reprimida</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Opção de revenda com lucro ou aluguel para renda passiva</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Construtora Wind/RAP com histórico de entregas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Unidades compactas (54-69m²) com alta liquidez de mercado</span>
                      </li>
                    </ul>
                  </div>

                  {/* Behavior */}
                  <div>
                    <h4 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                      <Activity className="h-5 w-5 text-blue-600" />
                      Comportamento de Compra
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><strong>Pesquisa:</strong> Google, portais especializados, análise de mercado regional</li>
                      <li><strong>Decisão:</strong> Racional, foco em números: preço/m², valorização projetada, VGV</li>
                      <li><strong>Tempo:</strong> 1-3 meses, decide rápido quando os números fecham</li>
                      <li><strong>Influência:</strong> Contador, assessor financeiro, corretor de confiança</li>
                      <li><strong>Financiamento:</strong> Preferencialmente à vista ou 50%+ de entrada</li>
                      <li><strong>Visita:</strong> Visita técnica focada em documentação e cronograma de obra</li>
                    </ul>
                  </div>
                </div>

                {/* Ad Calls */}
                <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl p-6 border-2 border-blue-300">
                  <h4 className="font-black text-blue-900 mb-4 flex items-center gap-2 text-lg">
                    <Zap className="h-6 w-6 text-blue-600" />
                    Chamadas Publicitárias para Investidor
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { headline: '"60 unidades. Demanda de 4.000+ famílias. Faça as contas."', format: 'Google Ads - Search' },
                      { headline: '"R$ 8.938/m² hoje. Histórico de 20%+ de valorização até entrega."', format: 'LinkedIn Ads' },
                      { headline: '"Ribeirão Pires: o próximo polo de valorização do ABC Paulista."', format: 'Google Display' },
                      { headline: '"Wind Incorporadora + RAP Engenharia. Solidez para seu investimento."', format: 'Facebook Ads' },
                      { headline: '"Unidades compactas com alta liquidez. Aluguel ou revenda, você escolhe."', format: 'LinkedIn Sponsored' },
                      { headline: '"Entrada em 60x + financiamento SBPE. Alavancagem inteligente."', format: 'Google Ads - Display' },
                    ].map((ad, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.2)' }}
                        className="bg-white rounded-xl p-4 border border-blue-200 cursor-pointer"
                      >
                        <p className="font-bold text-gray-900 text-sm mb-2">{ad.headline}</p>
                        <span className="text-xs text-blue-600 font-medium">{ad.format}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ESTRATÉGIA */}
      <section id="estrategia" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-bold mb-4">
              SEÇÃO 05
            </span>
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
                Estratégia
              </span>
            </h2>
          </motion.div>

          {/* Digital Presence */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { title: 'Landing Page', url: 'ayaurban.com.br', action: 'Analisar SEO', icon: Globe },
              { title: 'Instagram', url: '@ayaurban', action: 'Ver perfil', icon: Instagram },
              { title: 'Meta Ads', url: 'Biblioteca', action: 'Ver criativos', icon: Facebook },
            ].map((item, i) => (
              <Card key={i} className="border-2 border-gray-200 hover:border-orange-300 transition-all">
                <CardContent className="p-6">
                  <item.icon className="h-8 w-8 text-orange-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{item.url}</p>
                  <Button variant="outline" size="sm" className="w-full border-orange-300 text-orange-600 hover:bg-orange-50">
                    {item.action}
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Strategy Phases */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center font-black">
                    1
                  </div>
                  <CardTitle className="text-orange-900">Fase 1: Setup (1-4 sem)</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    'Materiais 3D e plantas humanizadas',
                    'Tracking: Pixel, GA4, UTMs',
                    'Landing page responsiva',
                    'Campanhas Meta Ads iniciais',
                  ].map((task, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <ChevronRight className="h-4 w-4 text-orange-600" />
                      {task}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-black">
                    2
                  </div>
                  <CardTitle className="text-green-900">Fase 2: Escala (5-12 sem)</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    'Expandir geo ABC + SP',
                    'Google Ads + Remarketing',
                    'Conteúdo MCMV/SBPE',
                    'Evento de lançamento',
                  ].map((task, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <ChevronRight className="h-4 w-4 text-green-600" />
                      {task}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Geographic Targeting + KPIs */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Segmentação Geográfica</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { city: 'Ribeirão Pires', priority: 'Primário', color: 'orange' },
                    { city: 'Mauá', priority: 'Primário', color: 'orange' },
                    { city: 'Santo André', priority: 'Secundário', color: 'green' },
                    { city: 'São Bernardo', priority: 'Secundário', color: 'green' },
                    { city: 'SP Zona Sul', priority: 'Expansão', color: 'blue' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-600" />
                        <span className="text-sm font-medium text-gray-900">{item.city}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold bg-${item.color}-100 text-${item.color}-700`}>
                        {item.priority}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Metas de 12 Semanas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { metric: 'Leads', target: '300-500', color: 'orange' },
                    { metric: 'CPL', target: '< R$ 80', color: 'green' },
                    { metric: 'Vendas', target: '15-25 un', color: 'blue' },
                    { metric: 'VGV', target: 'R$ 9-15M', color: 'purple' },
                  ].map((kpi, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-4 text-center">
                      <p className="text-xl font-black text-gray-900">{kpi.metric}</p>
                      <p className="text-xs text-gray-600 mt-1">{kpi.target}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section id="checklist" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-bold mb-4">
              SEÇÃO 06 • FINAL
            </span>
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
                Checklist
              </span>
            </h2>
          </motion.div>

          {/* Deadline */}
          <Card className="border-2 border-orange-300 bg-gradient-to-r from-orange-100 to-orange-50 mb-8">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-orange-200 flex items-center justify-center">
                    <Clock className="h-7 w-7 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900">Deadline: 1 Semana</h3>
                    <p className="text-gray-700">Checklist de tarefas para análise inicial completa</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Checklist Carousel */}
          <div className="relative">
            {/* Week Navigation */}
            <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
              {checklistWeeks.map((week, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setChecklistWeek(i)}
                  className={`px-5 py-3 rounded-xl font-bold text-sm transition-all ${
                    checklistWeek === i
                      ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {week.week}
                </motion.button>
              ))}
            </div>

            {/* Carousel Content */}
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={checklistWeek}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ type: "spring", stiffness: 200, damping: 30 }}
                >
                  <Card className="border-2 border-gray-200 hover-lift">
                    <CardHeader className="bg-gradient-to-r from-orange-50 to-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-2xl text-gray-900 mb-2">
                            {checklistWeeks[checklistWeek].title}
                          </CardTitle>
                          <CardDescription className="text-lg">
                            {checklistWeeks[checklistWeek].week} • 12 semanas de implementação
                          </CardDescription>
                        </div>
                        <div className="flex gap-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setChecklistWeek((prev) => (prev > 0 ? prev - 1 : checklistWeeks.length - 1))}
                            className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center hover:border-orange-400 transition-colors"
                          >
                            <ChevronLeft className="h-5 w-5 text-gray-700" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setChecklistWeek((prev) => (prev < checklistWeeks.length - 1 ? prev + 1 : 0))}
                            className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center hover:border-orange-400 transition-colors"
                          >
                            <ChevronRight className="h-5 w-5 text-gray-700" />
                          </motion.button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="grid md:grid-cols-2 gap-4">
                        {checklistWeeks[checklistWeek].tasks.map((task, i) => (
                          <motion.label
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ scale: 1.02, backgroundColor: '#fff7ed' }}
                            className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl cursor-pointer hover:shadow-md transition-all group"
                          >
                            <input
                              type="checkbox"
                              className="w-5 h-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500 mt-0.5 cursor-pointer"
                            />
                            <div className="flex-1">
                              <span className="text-sm text-gray-700 group-hover:text-gray-900">
                                {task.item}
                              </span>
                              <span className={`ml-2 px-2 py-0.5 rounded text-xs font-semibold ${
                                task.type === 'audit' ? 'bg-blue-100 text-blue-700' :
                                task.type === 'strategy' ? 'bg-purple-100 text-purple-700' :
                                task.type === 'creative' ? 'bg-pink-100 text-pink-700' :
                                task.type === 'execution' ? 'bg-orange-100 text-orange-700' :
                                task.type === 'analysis' ? 'bg-green-100 text-green-700' :
                                task.type === 'optimization' ? 'bg-yellow-100 text-yellow-700' :
                                task.type === 'reporting' ? 'bg-gray-200 text-gray-700' :
                                'bg-gray-100 text-gray-600'
                              }`}>
                                {task.type}
                              </span>
                            </div>
                          </motion.label>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {checklistWeeks.map((_, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setChecklistWeek(i)}
                  className={`h-2 rounded-full cursor-pointer transition-all ${
                    checklistWeek === i ? 'w-12 bg-orange-600' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Resumo Executivo */}
          <Card className="border-2 border-gray-200">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-gray-900">Resumo Executivo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: 'Produto', desc: 'Vertical no centro de RP. 54-69m² + Duplex 133m² (até R$600k). Out/29. 60 unidades. Wind/RAP.', icon: Building2, color: 'orange' },
                  { title: 'Mercado', desc: 'Demanda: 4.000-7.200 famílias qualificadas. Gap de oferta: único médio padrão até R$600k na região central.', icon: Target, color: 'blue' },
                  { title: 'Estratégia', desc: 'Foco local + ABC. MCMV/SBPE. 4 personas. 12 semanas de ativação. Meta: 15-25 vendas no lançamento.', icon: CheckCircle, color: 'green' },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className={`w-12 h-12 rounded-2xl bg-${item.color}-100 flex items-center justify-center mx-auto mb-3`}>
                      <item.icon className={`h-6 w-6 text-${item.color}-600`} />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Fontes */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 mb-3">Fontes de dados:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Caravela', 'IBGE', 'CAGED', 'BCB', 'Receita Federal', 'ABRAINC', 'Secovi-SP'].map((source, i) => (
                <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                  {source}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contato" className="py-32 bg-gradient-to-br from-orange-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">Vamos Executar?</h2>
          <p className="text-xl text-white/90 mb-12">A RPK está pronta para implementar esta estratégia</p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-50 px-12 py-6 text-lg font-black rounded-2xl shadow-2xl">
            Falar com RPK
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 py-12 text-center">
        <div className="text-2xl font-black bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent mb-4">
          RPK
        </div>
        <p className="text-gray-400 text-sm">Análise Confidencial • AYA Urban</p>
        <p className="text-gray-500 text-xs mt-2">© 2025 RPK Agency • Dados: Caravela, IBGE, CAGED</p>
      </footer>
    </div>
  )
}

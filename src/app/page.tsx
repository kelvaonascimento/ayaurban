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
  Globe, Instagram, Facebook, ExternalLink
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

  // Dados de m² - A Preencher quando tivermos os valores do AYA Urban
  const priceM2Data = [
    { location: 'AYA Urban', price: 0, fill: '#ff6b35' },         // A Preencher
    { location: 'Mauá AP', price: 8500, fill: '#9ca3af' },        // Splendore Vila Bocaina - 195m²
    { location: 'S. Bernardo', price: 11000, fill: '#d1d5db' },   // Lançamentos alto padrão
    { location: 'Sto André', price: 13000, fill: '#f59e0b' },     // Jardim/Campestre (Patriani, Motiró)
  ]

  // Comparativo - A Preencher quando tivermos dados completos
  const radarData = [
    { subject: 'Localização', AYA: 0, Splendor: 90, LeReve: 92 },
    { subject: 'Preço/m²', AYA: 0, Splendor: 55, LeReve: 50 },
    { subject: 'Lazer', AYA: 0, Splendor: 85, LeReve: 75 },
    { subject: 'Tech', AYA: 0, Splendor: 95, LeReve: 80 },
    { subject: 'Metragem', AYA: 70, Splendor: 95, LeReve: 85 },
    { subject: 'Pioneirismo', AYA: 0, Splendor: 60, LeReve: 65 },
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
      title: 'Sprint Inicial & Auditorias',
      tasks: [
        { item: 'Análise SEO completa da landing page', type: 'audit' },
        { item: 'Auditoria Google Analytics (GA4) e configuração de eventos', type: 'audit' },
        { item: 'Auditoria Meta Business Manager e Pixel', type: 'audit' },
        { item: 'Análise histórica de campanhas e CAC', type: 'audit' },
        { item: 'Levantamento de criativos existentes', type: 'strategy' },
        { item: 'Mapeamento completo de pixel e eventos', type: 'audit' },
      ]
    },
    {
      week: 'Semana 3-4',
      title: 'Setup & Estruturação',
      tasks: [
        { item: 'Criar campanha Look-a-Like expandida (ABC + SP)', type: 'strategy' },
        { item: 'Configurar Remarketing para não-convertidos', type: 'strategy' },
        { item: 'Desenvolver criativos focados nas tipologias (54-133m²)', type: 'creative' },
        { item: 'Definir novo geo-targeting (ABC, Mauá, SP Zona Sul)', type: 'strategy' },
        { item: 'Montar planilha de CAC e projeções', type: 'strategy' },
        { item: 'Compilar materiais da pasta do cliente', type: 'prep' },
      ]
    },
    {
      week: 'Semana 5-6',
      title: 'Lançamento & Otimização',
      tasks: [
        { item: 'Ativar campanhas Look-a-Like em Meta Ads', type: 'execution' },
        { item: 'Ativar Google Search para "apartamento alto padrão ABC"', type: 'execution' },
        { item: 'Configurar segmentação por renda (R$20k+)', type: 'execution' },
        { item: 'Setup de remarketing cross-platform', type: 'execution' },
        { item: 'Criar variações de criativos A/B', type: 'creative' },
        { item: 'Monitorar CPL e CAC inicial', type: 'analysis' },
      ]
    },
    {
      week: 'Semana 7-8',
      title: 'Ajustes & Expansão',
      tasks: [
        { item: 'Analisar dados de conversão das primeiras 4 semanas', type: 'analysis' },
        { item: 'Ajustar lances e orçamento por região', type: 'optimization' },
        { item: 'Expandir públicos de melhor performance', type: 'optimization' },
        { item: 'Pausar segmentos de baixo ROI', type: 'optimization' },
        { item: 'Criar novos criativos baseados em insights', type: 'creative' },
        { item: 'Implementar testes de copy', type: 'creative' },
      ]
    },
    {
      week: 'Semana 9-10',
      title: 'Scale & Performance',
      tasks: [
        { item: 'Aumentar budget em campanhas de alta conversão', type: 'optimization' },
        { item: 'Testar novos formatos de anúncio (Reels, Stories)', type: 'creative' },
        { item: 'Implementar retargeting agressivo', type: 'execution' },
        { item: 'Criar landing page específica para ABC', type: 'strategy' },
        { item: 'Análise de concorrentes ativos no período', type: 'analysis' },
        { item: 'Report executivo para cliente', type: 'reporting' },
      ]
    },
    {
      week: 'Semana 11-12',
      title: 'Consolidação & Sprint Final',
      tasks: [
        { item: 'Revisão completa de todas as métricas', type: 'analysis' },
        { item: 'Ajustes finais de otimização', type: 'optimization' },
        { item: 'Preparar relatório final com projeções', type: 'reporting' },
        { item: 'Documentar learnings e best practices', type: 'reporting' },
        { item: 'Planejar estratégia para próximos 3 meses', type: 'strategy' },
        { item: 'Apresentação de resultados e recomendações', type: 'reporting' },
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
                <strong> 54m² a 133m²</strong>, incluindo <strong>4 coberturas duplex</strong>.
                Previsão de entrega: <strong>Outubro/2029</strong>.
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
            {/* Large Card - Tipologias */}
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
                  <span className="text-sm font-medium text-white/60">TIPOLOGIAS</span>
                  <Home className="h-8 w-8 text-orange-500" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-white/80">54,30m²</span>
                    <span className="text-orange-400 font-bold">2 dorms (1 suíte)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-white/80">60,80m²</span>
                    <span className="text-orange-400 font-bold">2 dorms (1 suíte)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-white/80">69,53m²</span>
                    <span className="text-orange-400 font-bold">3 dorms (2 suítes)</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-white/80">133,33m² <span className="text-xs text-orange-400">(Cobertura Duplex)</span></span>
                    <span className="text-orange-400 font-bold">3 dorms (2 suítes)</span>
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
              <p className="text-2xl font-black mb-1 relative z-10">A Preencher</p>
              <p className="text-sm text-white/80 relative z-10">Aguardando dados</p>
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
              <p className="text-4xl font-black text-red-600 mb-1">360-540</p>
              <p className="text-sm text-red-700">famílias qualificadas</p>
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

                {/* Lazer - A Preencher */}
                <div className="mt-8 p-6 bg-amber-50 rounded-xl border-2 border-amber-200 border-dashed">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="h-6 w-6 text-amber-600" />
                    <h4 className="text-lg font-bold text-amber-900">Área de Lazer - Dados Pendentes</h4>
                  </div>
                  <p className="text-amber-800 mb-4">
                    Os itens de lazer do AYA Urban ainda não foram informados. Esta seção será atualizada assim que recebermos as informações completas do empreendimento.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['Piscina', 'Academia', 'Salão de Festas', 'Churrasqueira', 'Playground', 'Pet Place', 'Coworking', 'Outros'].map((item, i) => (
                      <div key={i} className="bg-white/50 rounded-lg p-3 text-center border border-amber-200">
                        <span className="text-sm text-amber-700">A Confirmar</span>
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
                  <div className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200 border-dashed flex flex-col items-center justify-center">
                    <AlertCircle className="h-12 w-12 text-amber-500 mb-4" />
                    <h4 className="font-bold text-amber-900 mb-2">Análise Competitiva</h4>
                    <p className="text-amber-800 text-center text-sm">
                      Comparativo com concorrentes será atualizado após receber dados completos de lazer e preços.
                    </p>
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
              { value: 'R$ 3,9 bi', label: 'PIB', sub: 'R$31k p/capita', color: 'orange' },
              { value: 'R$ 3.000', label: 'Salário', sub: 'vs R$3.900 SP', color: 'red' },
              { value: '36 mil', label: 'Domicílios', sub: '~3.3 pessoas/dom', color: 'gray' },
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
                    <strong>AYA 35% mais barato</strong> que Santo André e 23% abaixo de S. Bernardo (lançamentos alto padrão)
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

          {/* Alertas e Oportunidades */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                  <CardTitle className="text-red-900">Alertas</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    '52.7% classes E+D',
                    'Poupança -31.8%',
                    'Crédito -42.9%',
                  ].map((alert, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-red-800">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
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
                    '1º vertical alto padrão',
                    'Só 1.85% em aptos',
                    '50 min de SP',
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

      {/* PÚBLICO - INSIGHT CRÍTICO */}
      <section id="publico" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-orange-50"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-bold mb-4">
              SEÇÃO 03 • CRÍTICO
            </span>
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                Público-Alvo
              </span>
            </h2>
            <p className="text-xl text-gray-600">Mercado Local Insuficiente</p>
          </motion.div>

          {/* Alert Card */}
          <Card className="border-2 border-red-300 bg-gradient-to-br from-red-100 to-white mb-8">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-red-200 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="h-8 w-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-red-900 mb-3">
                    Mercado Local Insuficiente
                  </h3>
                  <p className="text-lg text-red-800 mb-4">
                    Renda necessária: <strong>R$18k-22k/mês</strong>. Apenas <strong>360-540 famílias</strong> locais qualificam.
                    Entrada <strong>R$160k</strong> (20%) + parcela ~<strong>R$6k/mês</strong> (30% renda).
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { value: '360-540', label: 'Famílias RP', color: 'red' },
                      { value: 'R$ 160k', label: 'Entrada', color: 'gray' },
                      { value: '~R$ 6k', label: 'Parcela', color: 'orange' },
                      { value: '1-1.5%', label: 'População', color: 'gray' },
                    ].map((stat, i) => (
                      <div key={i} className="bg-white rounded-xl p-4 text-center">
                        <p className={`text-2xl font-black ${stat.color === 'red' ? 'text-red-600' : stat.color === 'orange' ? 'text-orange-600' : 'text-gray-900'}`}>
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

          {/* Solution Card */}
          <Card className="border-2 border-orange-300 bg-gradient-to-br from-orange-100 to-white">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-orange-200 flex items-center justify-center flex-shrink-0">
                  <Target className="h-8 w-8 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-orange-900 mb-3">
                    Expansão Geográfica Obrigatória
                  </h3>
                  <p className="text-lg text-orange-800 mb-6">
                    <strong>ABC + SP Capital = solução.</strong> Foco em famílias de classe A/B que buscam qualidade de vida com preço acessível.
                  </p>

                  {/* Personas Grid */}
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { title: 'Executivo ABC', traits: ['Trabalha ABC', 'R$20k-35k/mês', 'Busca qualidade'], icon: Briefcase, color: 'orange' },
                      { title: 'Lifestyle Migrator', traits: ['Mora SP', 'Remote work', 'Busca natureza'], icon: Mountain, color: 'green' },
                      { title: 'Investidor', traits: ['Valorização', '1º vertical', 'Diversificação'], icon: TrendingUp, color: 'blue' },
                    ].map((persona, i) => (
                      <div key={i} className="bg-white rounded-xl p-4 border border-gray-200">
                        <div className={`w-10 h-10 rounded-xl bg-${persona.color}-100 flex items-center justify-center mb-3`}>
                          <persona.icon className={`h-5 w-5 text-${persona.color}-600`} />
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">{persona.title}</h4>
                        <ul className="space-y-1">
                          {persona.traits.map((trait, j) => (
                            <li key={j} className="text-xs text-gray-600 flex items-center gap-1">
                              <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                              {trait}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Budget Suggestion */}
          <div className="mt-8 bg-gray-50 rounded-3xl p-8 border border-gray-200">
            <h3 className="text-xl font-black text-gray-900 mb-6 text-center">
              Budget Sugerido (R$9k/mês)
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { tipo: 'Tráfego Frio', valor: 5400, pct: 60, color: 'orange' },
                { tipo: 'Remarketing', valor: 2700, pct: 30, color: 'blue' },
                { tipo: 'Lookalike', valor: 900, pct: 10, color: 'green' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 text-center">
                  <p className="text-sm text-gray-600 mb-2">{item.tipo}</p>
                  <p className="text-3xl font-black text-gray-900 mb-1">R$ {item.valor.toLocaleString()}</p>
                  <p className={`text-lg font-bold text-${item.color}-600 mb-3`}>{item.pct}%</p>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full bg-${item.color}-500 rounded-full`} style={{ width: `${item.pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
                    <td className="py-4 font-bold text-orange-600">WIND Incorporadora</td>
                    <td className="py-4 text-gray-900">Ribeirão Pires</td>
                    <td className="py-4 font-bold text-gray-900">114m²</td>
                    <td className="py-4 text-gray-900 font-bold">R$959k-962k</td>
                    <td className="py-4 font-black text-orange-600">R$ 8.420</td>
                    <td className="py-4 text-gray-900">Mar/28</td>
                  </motion.tr>
                  {[
                    // RIBEIRÃO PIRES - Único concorrente real na cidade
                    { name: 'Residencial Vértice', construtora: 'Toth Construtora', local: 'Ribeirão Pires', area: '40-57m²', price: 'R$270k-350k', priceM2: 'R$ 6.140', date: '2025', link: 'https://tothconstrutora.com.br/obras/residencial-vertice/' },

                    // SANTO ANDRÉ - Bairro Jardim (Alto Padrão)
                    { name: 'Le Rêve Résidences', construtora: 'Le Rêve', local: 'Sto André (Jardim)', area: '128m²', price: 'R$1.79M', priceM2: 'R$ 14.031', date: '2025', link: 'https://lerevejardim.com/' },
                    { name: 'Splendor Jardim', construtora: 'Patriani', local: 'Sto André (Jardim)', area: '160-165m²', price: 'R$2.06M', priceM2: 'R$ 12.875', date: 'Dez/26', link: 'https://www.construtorapatriani.com.br/imovel/splendor-jardim-patriani' },
                    { name: 'Figueiras by Motiró', construtora: 'Grupo Motiró', local: 'Sto André (Jardim)', area: '112m²', price: 'R$969k+', priceM2: 'R$ 8.651', date: 'Nov/25', link: 'https://figueirasmotiro.com.br/' },

                    // SANTO ANDRÉ - Bairro Campestre
                    { name: 'Vista Campestre', construtora: 'Patriani', local: 'Sto André (Campestre)', area: '134m²', price: 'R$2.0M+', priceM2: 'R$ 14.925', date: '2026', link: 'https://www.construtorapatriani.com.br/imovel/vista-campestre' },
                    { name: 'Mirai Campestre', construtora: 'Patriani', local: 'Sto André (Campestre)', area: '79-93m²', price: 'R$900k+', priceM2: 'R$ 10.000', date: 'Entregue', link: 'https://www.construtorapatriani.com.br/imovel/mirai-campestre-patriani' },
                    { name: 'CONCEPT Campestre', construtora: 'Sabbahi', local: 'Sto André (Campestre)', area: '92m²', price: 'R$920k', priceM2: 'R$ 10.000', date: 'Jan/25', link: 'https://braido.com.br/concept/' },
                    { name: 'Motiró Casa Branca', construtora: 'Grupo Motiró', local: 'Sto André', area: '57-90m²', price: 'R$570k+', priceM2: 'R$ 8.143', date: '2025', link: 'https://casabranca.bymotiro.com.br/' },

                    // MAUÁ - Concorrentes diretos
                    { name: 'Splendore Mauá', construtora: 'F. Bonano', local: 'Mauá (V. Bocaina)', area: '195m²', price: 'R$1.67M', priceM2: 'R$ 8.548', date: 'Set/27', link: 'https://fbonanoengenharia.com.br/empreendimentos/splendore/' },
                    { name: 'Res. Mandarim', construtora: 'Qualibens', local: 'Mauá', area: '83-110m²', price: 'R$570k+', priceM2: 'R$ 5.700', date: '2025', link: 'https://residencialmandarim.com/' },

                    // SÃO BERNARDO DO CAMPO
                    { name: 'Unique MBigucci', construtora: 'MBigucci', local: 'S. Bernardo (Rudge Ramos)', area: '36-54m²', price: 'R$407k+', priceM2: 'R$ 11.305', date: 'Pronto', link: 'https://www.mbigucci.com.br/unique' },
                    { name: 'Helbor Trilogy', construtora: 'Helbor', local: 'S. Bernardo', area: '77-94m²', price: 'R$800k+', priceM2: 'R$ 9.300', date: 'Pronto', link: 'https://www.helbor.com.br/trilogyhomeoffice' },
                    { name: 'Motiró Santa Filomena', construtora: 'Grupo Motiró', local: 'S. Bernardo', area: '54-75m²', price: 'R$550k+', priceM2: 'R$ 8.500', date: '2025', link: 'https://grupomotiro.com.br/empreendimentos/motiro-santa-filomena/' },
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
                  <strong className="text-orange-600">13 empreendimentos</strong> mapeados:
                  <strong> 1 em Ribeirão Pires</strong>, <strong>7 em Santo André</strong>, <strong>3 em São Bernardo</strong>, <strong>2 em Mauá</strong>
                </p>
                <span className="text-xs text-gray-500">Fontes: Construtoras, ABC Apartamentos, Apto.vc | Dez/2024</span>
              </div>
            </CardContent>
          </Card>

          {/* Resumo Preço/m² por Região */}
          <Card className="border-2 border-orange-200 mb-8 hover-lift">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-orange-600" />
                Comparativo de Preço/m² por Região - Lançamentos Alto Padrão
              </CardTitle>
              <CardDescription>Dados reais pesquisados em Dezembro/2024 - Fontes: Construtoras, ABC Apartamentos, Apto.vc</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                {[
                  { region: 'Ribeirão Pires', aya: true, min: 6140, max: 8420, avg: 'R$ 8.420', color: 'orange', desc: 'AYA Urban' },
                  { region: 'Mauá', aya: false, min: 5700, max: 8548, avg: 'R$ 7.124', color: 'gray', desc: 'Splendore, Mandarim' },
                  { region: 'São Bernardo', aya: false, min: 8500, max: 11305, avg: 'R$ 9.700', color: 'gray', desc: 'Unique, Helbor, Motiró' },
                  { region: 'Santo André', aya: false, min: 8143, max: 14925, avg: 'R$ 11.375', color: 'gray', desc: 'Patriani, Motiró, Le Rêve' },
                ].map((item, i) => (
                  <div key={i} className={`p-4 rounded-xl border-2 ${item.aya ? 'border-orange-400 bg-orange-50' : 'border-gray-200 bg-gray-50'}`}>
                    <h4 className={`font-bold mb-1 ${item.aya ? 'text-orange-600' : 'text-gray-900'}`}>{item.region}</h4>
                    <p className={`text-2xl font-black ${item.aya ? 'text-orange-600' : 'text-gray-900'}`}>{item.avg}</p>
                    <p className="text-xs text-gray-500 mt-1">Min: R$ {item.min.toLocaleString()} | Max: R$ {item.max.toLocaleString()}</p>
                    <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-3 gap-4 p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                <div className="text-center">
                  <p className="text-xs text-gray-600 uppercase font-bold">AYA vs Santo André</p>
                  <p className="text-2xl font-black text-green-600">-26% a -43%</p>
                  <p className="text-xs text-gray-500">mais barato que lançamentos alto padrão</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-600 uppercase font-bold">AYA vs São Bernardo</p>
                  <p className="text-2xl font-black text-green-600">-13% a -25%</p>
                  <p className="text-xs text-gray-500">mais barato que lançamentos alto padrão</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-600 uppercase font-bold">AYA vs Mauá Alto Padrão</p>
                  <p className="text-2xl font-black text-yellow-600">~igual</p>
                  <p className="text-xs text-gray-500">competitivo com Splendore (R$ 8.548)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vantagens */}
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { title: 'Pioneirismo', desc: '1º vertical alto padrão', icon: Award },
              { title: 'Preço', desc: '35% + barato/m²', icon: DollarSign },
              { title: 'Lazer', desc: '31 itens resort', icon: Sparkles },
              { title: 'Local', desc: '50 min SP', icon: MapPin },
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
                      { text: 'Pioneirismo: 1º empreendimento vertical alto padrão em Ribeirão Pires', strong: true },
                      { text: '31 itens de lazer - conceito resort único na região', strong: true },
                      { text: 'Preço/m² competitivo (R$ 8.420) - 35% mais acessível que lançamentos alto padrão Santo André', strong: true },
                      { text: 'Metragem ampla (114m²) - acima da média regional (70-80m²)', strong: false },
                      { text: 'Diferenciais exclusivos: Beach Arena, Pet Place, Smart Home, Energia Solar', strong: true },
                      { text: 'Localização estratégica: 50 min de SP, próximo a natureza', strong: false },
                      { text: 'Construtora WIND com histórico sólido no mercado', strong: false },
                      { text: 'Infraestrutura completa: 2 torres, elevadores, segurança 24h', strong: false },
                      { text: 'Sustentabilidade: captação água chuva, energia solar, coleta seletiva', strong: true },
                      { text: 'Tecnologia: Smart Home, Wi-Fi, carregadores elétricos', strong: false },
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
                      { text: 'Público local limitado: apenas 360-540 famílias qualificadas em Ribeirão Pires', critical: true },
                      { text: 'Marca nova sem histórico de vendas na região', critical: false },
                      { text: 'Preço absoluto elevado (R$ 959k-962k) para economia local (salário médio R$ 3.000)', critical: true },
                      { text: 'Dependência de público externo (ABC + SP) para atingir meta de vendas', critical: true },
                      { text: 'Entrega em 2028 (longo prazo) pode reduzir urgência de compra', critical: false },
                      { text: 'Localização em cidade com população em queda (-4,6% em 5 anos)', critical: false },
                      { text: 'Baixa renda per capita local (R$ 31k/ano vs R$ 58k média SP)', critical: false },
                      { text: 'Ausência de grandes empresas/empregos na região', critical: false },
                      { text: 'Baixa oferta de concorrentes diretos em Ribeirão Pires (apenas 1 lançamento identificado)', critical: false },
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
                      { text: 'Mercado ABC (15-20 min): 2,8M habitantes, renda alta, demanda consolidada', key: true },
                      { text: 'Lifestyle Migrators de SP: busca por qualidade de vida + natureza + remote work', key: true },
                      { text: 'Tendência de fuga urbana pós-pandemia (home office permanente)', key: true },
                      { text: 'Demanda crescente por sustentabilidade e tecnologia em imóveis', key: false },
                      { text: 'Mercado investidor: 1º vertical = potencial valorização exclusiva', key: true },
                      { text: 'Ausência de concorrentes diretos com conceito resort em Ribeirão Pires', key: false },
                      { text: 'Infraestrutura regional em desenvolvimento (Rodoanel, Linha 18-Bronze)', key: false },
                      { text: 'Valorização imobiliária esperada com pioneirismo vertical', key: false },
                      { text: 'Expansão geográfica de campanha (ABC + SP) viável com orçamento adequado', key: true },
                      { text: 'Pet market crescente (45% dos lares brasileiros têm pets)', key: false },
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
                      { text: 'Concorrentes em Mauá e ABC competindo pelo mesmo público regional', high: true },
                      { text: 'Patriani (Santo André) com marca forte e produto premium consolidado', high: true },
                      { text: 'Lançamentos de grandes construtoras em Mauá e ABC com verba robusta', high: true },
                      { text: 'Crise econômica e alta de juros pode reduzir poder de compra', high: false },
                      { text: 'Resistência do público ABC em considerar Ribeirão Pires (percepção de "longe")', high: true },
                      { text: 'População local em queda (-4,6%) pode agravar escassez de público', high: false },
                      { text: 'Residencial Vértice (Toth) com preço/m² inferior (R$ 6.140) atrai público preço-sensível', high: false },
                      { text: 'Entrega 2028: concorrentes com entrega 2025-2026 têm vantagem temporal', high: false },
                      { text: 'Budget limitado vs grandes players pode limitar alcance de campanha', high: false },
                      { text: 'Mudanças regulatórias ou ambientais podem atrasar obra', high: false },
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
                        <span><strong>Campanha ABC + SP:</strong> Focar em Lifestyle Migrators e Executivos ABC que buscam qualidade de vida</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                        <span><strong>Diferenciação:</strong> Destacar 31 itens resort e pioneirismo vertical como USPs principais</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                        <span><strong>Investidor:</strong> Posicionar como oportunidade única de valorização (1º vertical da região)</span>
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
                        <span><strong>Expansão Geográfica OBRIGATÓRIA:</strong> 80% do budget em ABC + SP Capital</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                        <span><strong>Combat Objections:</strong> Criar conteúdo sobre "por que Ribeirão Pires?" (natureza + preço + acesso)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                        <span><strong>Diferenciação vs ABC:</strong> Enfatizar resort lifestyle e preço/m² 35% menor que lançamentos Santo André</span>
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

          {/* Persona 1: Executivo ABC */}
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
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white">Persona 1: Executivo ABC</CardTitle>
                    <CardDescription className="text-orange-100">Carlos, 38 anos, Gerente Comercial</CardDescription>
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
                      <li><strong>Idade:</strong> 35-45 anos</li>
                      <li><strong>Renda:</strong> R$ 20k-35k/mês</li>
                      <li><strong>Família:</strong> Casado, 1-2 filhos (5-12 anos)</li>
                      <li><strong>Trabalho:</strong> Gerente/Diretor em empresas do ABC (Santo André, São Bernardo, São Caetano)</li>
                      <li><strong>Localização Atual:</strong> Mora em apartamento no ABC (70-80m²)</li>
                      <li><strong>Valores:</strong> Qualidade de vida, segurança, conforto, status moderado</li>
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
                        <span>Apartamento atual pequeno demais para família crescente</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Áreas de lazer limitadas ou inexistentes no condomínio</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Preços elevados em lançamentos alto padrão Santo André/SBC (R$ 11k-13k/m²)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Falta de contato com natureza no dia a dia</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Trânsito caótico e estresse urbano constante</span>
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
                        <span>Apartamento amplo (100m²+) para acomodar família confortavelmente</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Lazer completo no condomínio (piscina, academia, espaços para crianças)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Preço justo e acessível sem sacrificar qualidade</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Proximidade ao trabalho (15-20 min de carro)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Ambiente mais tranquilo e verde para filhos crescerem</span>
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
                      <li><strong>Pesquisa:</strong> Ativo em portais (Imovelweb, VivaReal, ZAP)</li>
                      <li><strong>Decisão:</strong> Racional, compara preço/m², localização, construtora</li>
                      <li><strong>Tempo:</strong> 3-6 meses de pesquisa antes de decidir</li>
                      <li><strong>Influência:</strong> Esposa é co-decisora (50/50)</li>
                      <li><strong>Financiamento:</strong> 30-40% entrada + financiamento</li>
                      <li><strong>Visita:</strong> Agenda visita nos finais de semana com família</li>
                    </ul>
                  </div>
                </div>

                {/* Ad Calls */}
                <div className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-2xl p-6 border-2 border-orange-300">
                  <h4 className="font-black text-orange-900 mb-4 flex items-center gap-2 text-lg">
                    <Zap className="h-6 w-6 text-orange-600" />
                    Chamadas Publicitárias para Executivo ABC
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { headline: '"114m² a 15 min do ABC. Sua família merece esse espaço."', format: 'Meta Ads - Feed' },
                      { headline: '"35% mais barato que Santo André. Mesmo padrão, preço justo."', format: 'Google Ads - Search' },
                      { headline: '"Resort a 20 min do seu trabalho. Lazer todo dia, não só férias."', format: 'Meta Ads - Stories' },
                      { headline: '"Pioneiro em Ribeirão Pires: valorização garantida + qualidade de vida."', format: 'Google Display' },
                      { headline: '"Piscina aquecida, cinema, pet place. Tudo que falta no seu prédio."', format: 'Meta Ads - Reels' },
                      { headline: '"R$ 8.420/m² vs R$ 13k do ABC. Faça as contas."', format: 'LinkedIn Ads' },
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

          {/* Persona 2: Lifestyle Migrator */}
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
                    <Mountain className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white">Persona 2: Lifestyle Migrator</CardTitle>
                    <CardDescription className="text-green-100">Julia, 32 anos, Designer UX (Remote)</CardDescription>
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
                      <li><strong>Idade:</strong> 28-38 anos</li>
                      <li><strong>Renda:</strong> R$ 15k-28k/mês</li>
                      <li><strong>Família:</strong> Solteiro(a) ou casal sem filhos / DINK (Double Income No Kids)</li>
                      <li><strong>Trabalho:</strong> Remote work (Tech, Design, Marketing Digital)</li>
                      <li><strong>Localização Atual:</strong> SP Capital (Vila Madalena, Pinheiros, Moema) em apto alugado</li>
                      <li><strong>Valores:</strong> Qualidade de vida, natureza, sustentabilidade, lifestyle, bem-estar</li>
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
                        <span>Aluguel absurdo em SP (R$ 3k-5k/mês) sem construir patrimônio</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Poluição, barulho, caos urbano constante</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Falta de áreas verdes, ar puro, contato com natureza</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Custo de vida alto sem real qualidade de vida</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Não precisa estar em SP (trabalha remoto) mas está "preso"</span>
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
                        <span>Comprar imóvel próprio e parar de jogar dinheiro fora com aluguel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Morar em contato com natureza sem abrir mão de conforto urbano</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Espaço para home office confortável e inspirador</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Coworking no prédio para networking e produtividade</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Lifestyle ativo: academia, piscina, espaços wellness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Sustentabilidade: energia solar, coleta seletiva, horta</span>
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
                      <li><strong>Pesquisa:</strong> Instagram, TikTok, Pinterest, blogs de lifestyle</li>
                      <li><strong>Decisão:</strong> Emocional + aspiracional, busca "vibe" e identidade</li>
                      <li><strong>Tempo:</strong> 2-4 meses, decisão rápida quando se identifica</li>
                      <li><strong>Influência:</strong> Redes sociais, influencers, amigos que fizeram a migração</li>
                      <li><strong>Financiamento:</strong> 20-30% entrada, busca condições flexíveis</li>
                      <li><strong>Visita:</strong> Visita sozinho(a) ou com parceiro(a), busca "sentir" o lugar</li>
                    </ul>
                  </div>
                </div>

                {/* Ad Calls */}
                <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-2xl p-6 border-2 border-green-300">
                  <h4 className="font-black text-green-900 mb-4 flex items-center gap-2 text-lg">
                    <Zap className="h-6 w-6 text-green-600" />
                    Chamadas Publicitárias para Lifestyle Migrator
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { headline: '"Pare de pagar aluguel em SP. Compre seu resort a 50 min da capital."', format: 'Meta Ads - Feed' },
                      { headline: '"Remote work + natureza + resort lifestyle. A combinação perfeita."', format: 'Instagram Stories' },
                      { headline: '"Sua vista: serra. Seu escritório: coworking com café. Sua vida: equilibrada."', format: 'Meta Ads - Reels' },
                      { headline: '"Energia solar, horta comunitária, carregador elétrico. Sustentável de verdade."', format: 'TikTok Ads' },
                      { headline: '"114m², piscina aquecida, beach arena. Lifestyle > localização."', format: 'Pinterest Ads' },
                      { headline: '"Troque o caos de SP pelo resort de Ribeirão Pires. Você merece."', format: 'YouTube Pre-Roll' },
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

          {/* Persona 3: Investidor Estratégico */}
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
                    <CardTitle className="text-2xl text-white">Persona 3: Investidor Estratégico</CardTitle>
                    <CardDescription className="text-blue-100">Ricardo, 45 anos, Empresário</CardDescription>
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
                      <li><strong>Renda:</strong> R$ 35k-60k+/mês</li>
                      <li><strong>Família:</strong> Casado, filhos adultos ou adolescentes</li>
                      <li><strong>Trabalho:</strong> Empresário, médico, advogado, executivo sênior</li>
                      <li><strong>Localização Atual:</strong> SP Capital ou ABC, já possui imóvel próprio</li>
                      <li><strong>Valores:</strong> Rentabilidade, valorização, diversificação de portfólio, oportunidade</li>
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
                        <span>Dinheiro parado em poupança/CDB rendendo abaixo da inflação</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Mercado imobiliário tradicional sem oportunidades de valorização</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Ações/Bolsa voláteis demais para perfil conservador</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Falta de diversificação no portfólio (muito concentrado)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Dificuldade em encontrar oportunidades "blue ocean" no imobiliário</span>
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
                        <span>Investimento sólido com potencial de valorização de 30-50%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Pioneirismo: ser o primeiro vertical alto padrão = valorização garantida</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Diversificação geográfica (fora de SP/ABC saturados)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Opção de renda passiva com aluguel (resort atrai inquilinos)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Construtora confiável (WIND) com entrega garantida</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Eventual uso próprio (férias, finais de semana, aposentadoria)</span>
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
                      <li><strong>Pesquisa:</strong> Google, LinkedIn, análise de mercado, consulta corretor de confiança</li>
                      <li><strong>Decisão:</strong> 100% racional, análise ROI, potencial valorização, histórico construtora</li>
                      <li><strong>Tempo:</strong> 1-3 meses, decisão rápida se números fecharem</li>
                      <li><strong>Influência:</strong> Contador, assessor financeiro, corretor especializado</li>
                      <li><strong>Financiamento:</strong> Preferencialmente à vista ou 50%+ entrada</li>
                      <li><strong>Visita:</strong> Visita técnica focada em acabamento, planta, documentação</li>
                    </ul>
                  </div>
                </div>

                {/* Ad Calls */}
                <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl p-6 border-2 border-blue-300">
                  <h4 className="font-black text-blue-900 mb-4 flex items-center gap-2 text-lg">
                    <Zap className="h-6 w-6 text-blue-600" />
                    Chamadas Publicitárias para Investidor Estratégico
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { headline: '"1º vertical de Ribeirão Pires. Pioneirismo = valorização exponencial."', format: 'Google Ads - Search' },
                      { headline: '"R$ 8.420/m² hoje. R$ 12k/m² em 2028. Faça as contas da valorização."', format: 'LinkedIn Ads' },
                      { headline: '"Diversifique seu portfólio: imóvel resort com potencial de 40% valorização."', format: 'Google Display' },
                      { headline: '"Investimento sólido: WIND Incorporadora + conceito único + demanda reprimida."', format: 'Facebook Ads' },
                      { headline: '"Renda passiva garantida: resort atrai inquilinos de alto padrão facilmente."', format: 'LinkedIn Sponsored' },
                      { headline: '"Oportunidade blue ocean: primeiro a entrar colhe os maiores frutos."', format: 'Google Ads - Display' },
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
              { title: 'Landing Page', url: 'ayahomeresort.com.br', action: 'Analisar SEO', icon: Globe },
              { title: 'Instagram', url: '@ayahomeresort', action: 'Ver perfil', icon: Instagram },
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
                  <CardTitle className="text-orange-900">Fase 1: Sprint (1-2 sem)</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    'Auditoria SEO',
                    'Setup GA4 + eventos',
                    'Auditoria Meta',
                    'CAC histórico',
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
                  <CardTitle className="text-green-900">Fase 2: Execução (3+ sem)</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    'Look-a-Like ABC + SP',
                    'Remarketing',
                    'Criativos 114m²',
                    'Segmentação R$20k+',
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
                    { city: 'Ribeirão Pires', priority: 'Alta', color: 'orange' },
                    { city: 'Santo André', priority: 'Muito Alta', color: 'green' },
                    { city: 'São Bernardo', priority: 'Alta', color: 'orange' },
                    { city: 'São Caetano', priority: 'Muito Alta', color: 'green' },
                    { city: 'SP Zona Sul', priority: 'Estratégica', color: 'blue' },
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
                <CardTitle className="text-gray-900">KPIs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { metric: 'CAC', target: 'Definir baseline', color: 'orange' },
                    { metric: 'CPL', target: '< R$ 150', color: 'green' },
                    { metric: 'CVR LP', target: '> 3%', color: 'blue' },
                    { metric: 'ROAS', target: '> 5x', color: 'purple' },
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
                  { title: 'Produto', desc: '1º Home Resort Ribeirão Pires. 114m² (R$959k-962k). Mar/28. 30+ lazer.', icon: Building2, color: 'orange' },
                  { title: 'Desafio', desc: 'Mercado local limitado (360-540 famílias). 52.7% E+D. Economia fraca.', icon: AlertCircle, color: 'red' },
                  { title: 'Solução', desc: 'Expansão ABC + SP. Lifestyle + investimento. Pioneirismo + preço.', icon: CheckCircle, color: 'green' },
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

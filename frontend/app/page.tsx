'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Shield, Tv, Zap, Star } from 'lucide-react'
import YouTubePlayer from './components/Videos'

export default function LandingPage() {
  const [openModal, setOpenModal] = useState(false)
  const [showPix, setShowPix] = useState(false)
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-indigo-500/20" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block mb-4 rounded-full bg-purple-500/10 px-4 py-1 text-sm text-purple-400">
              Transforme sua performance
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Treinamento de alta performance, <span className="text-purple-400">para resultados reais</span>, em qualquer lugar
            </h1>

            <p className="mt-6 text-lg text-neutral-300">
              Programas exclusivos, coaching profissional e acesso imediato a técnicas que transformam sua vida pessoal e profissional.
            </p>

            <div className="mt-8 flex gap-4">
             <Button
              size="lg"
              className="text-lg px-8 py-6 bg-purple-600 text-white rounded-lg 
                        hover:bg-purple-700 hover:scale-105 transition transform duration-300"
              onClick={() => window.open('https://go.hotmart.com/Y103633718M?ap=6b86', '_blank')}
            >
              Comece agora
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 text-black border border-black rounded-lg 
                        hover:bg-black hover:text-white hover:scale-105 transition transform duration-300"
              onClick={() => window.open('https://go.hotmart.com/Y103633718M?ap=6b86', '_blank')}
            >
              Ver planos
            </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col gap-6"
          >
            {/* Imagem principal */}
            <img 
              src="https://framerusercontent.com/images/Hjp5ag5t8AvnejzOM98DCSHUTI.png?scale-down-to=1024&width=1974&height=817" 
              alt="Treinamento de alta performance" 
              className="rounded-xl shadow-lg"
            />

            {/* Player de vídeo */}
            <YouTubePlayer url="https://youtu.be/c6MEKGagyCI" />
          </motion.div>
        </div>
      </section>

      {/* Números de confiança */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {["+10.000 alunos", "99,9% satisfação", "Suporte 24/7", "Garantia de resultados"].map((item) => (
            <div key={item} className="text-neutral-300 font-medium">{item}</div>
          ))}
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Por que escolher nosso programa?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-purple-400" />,
                title: 'Resultados rápidos',
                desc: 'Metodologias comprovadas para evolução contínua em tempo recorde.',
              },
              {
                icon: <Shield className="w-8 h-8 text-purple-400" />,
                title: 'Treinamento seguro',
                desc: 'Acompanhamento profissional e conteúdo confiável.',
              },
              {
                icon: <Star className="w-8 h-8 text-purple-400" />,
                title: 'Experiência premium',
                desc: 'Acesso a técnicas avançadas e suporte especializado.',
              },
            ].map((b) => (
              <Card key={b.title} className="bg-neutral-900 border-neutral-800">
                <CardContent className="p-6">
                  {b.icon}
                  <h3 className="mt-4 text-xl font-semibold text-white">{b.title}</h3>
                  <p className="mt-2 text-neutral-400">{b.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* Segunda imagem */}
      <section className="py-24">
        <div className="relative max-w-7xl mx-auto px-6">
          <img 
            src="https://framerusercontent.com/images/AsohuQKEFZj1qhAaCYMtwJCG0.png?scale-down-to=1024&width=2731&height=4096" 
            alt="Alta performance" 
            className="rounded-xl shadow-xl mx-auto"
          />
        </div>
      </section>

      {/* MODAL DE PAGAMENTO */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Comece sua transformação hoje mesmo</h2>
          <p className="mt-4 text-neutral-300">Acesso imediato aos programas premium.</p>
          <Button
            onClick={() => window.open('https://go.hotmart.com/Y103633718M?ap=6b86', '_blank')}
            size="lg"
            className="mt-8 px-10 py-6 text-lg bg-purple-600 text-white rounded-lg 
                      hover:bg-purple-700 hover:scale-105 transition transform duration-300"
          >
            Quero participar agora
          </Button>
        </div>
      </section>

      <footer className="py-8 border-t border-neutral-800 text-center text-sm text-neutral-500">
        © 2025 High Performance Coaching • Todos os direitos reservados
      </footer>
    </main>
  )
}

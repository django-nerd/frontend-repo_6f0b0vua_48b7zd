import TopNav from './components/TopNav'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <TopNav />

      {/* Hero with Spline 3D asset */}
      <section className="relative h-[420px] sm:h-[520px]">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/0 via-slate-950/30 to-slate-950" />
        <div className="absolute inset-x-0 bottom-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="max-w-xl rounded-2xl border border-slate-700/60 bg-slate-900/70 backdrop-blur-xl p-5 shadow-lg shadow-cyan-500/10"
            >
              <h1 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                Edufyx Digital Identity
              </h1>
              <p className="mt-2 text-slate-300">
                A futuristic, holographic profile experience. Explore your learning identity with smooth interactions and neon accents.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content preview cards */}
      <section className="relative z-10 -mt-6 sm:-mt-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="rounded-2xl border border-slate-700/60 bg-slate-900/60 backdrop-blur-xl p-5 shadow-lg hover:shadow-cyan-500/10 transition-shadow"
              >
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 ring-1 ring-cyan-400/40 shadow-[0_0_25px_rgba(34,211,238,0.45)] mb-4" />
                <h3 className="text-white font-semibold mb-1">Neon-accented Card {i}</h3>
                <p className="text-slate-300 text-sm">Clean spacing, rounded edges, and subtle motion for a modern feel.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Edufyx
      </footer>
    </div>
  )
}

export default App

import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Edit3, KeyRound, Link2, Trophy, Mail, Phone, School, UserCircle2, BadgeCheck } from 'lucide-react'

const InfoRow = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-700/60">
    <div className="mt-0.5 rounded-lg p-2 bg-slate-800/60 border border-slate-700/60 text-cyan-300">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <p className="text-xs uppercase tracking-wider text-slate-400">{label}</p>
      <p className="text-sm text-white">{value}</p>
    </div>
  </div>
)

const ActionButton = ({ icon: Icon, label, onClick, variant = 'default' }) => {
  const variants = {
    default: 'bg-slate-900/60 hover:bg-slate-900/80 border-slate-700/60 text-slate-200',
    neon: 'bg-cyan-500/15 hover:bg-cyan-500/25 border-cyan-400/50 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.25)]'
  }
  return (
    <motion.button
      whileHover={{ y: -1, boxShadow: '0 10px 25px rgba(34,211,238,0.15)' }}
      whileTap={{ y: 0 }}
      onClick={onClick}
      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border transition-all ${variants[variant]}`}
    >
      <Icon className="h-5 w-5" />
      <span className="text-sm font-medium">{label}</span>
    </motion.button>
  )
}

const roleBadgeColors = {
  Student: 'from-fuchsia-500 to-pink-500',
  Teacher: 'from-cyan-500 to-blue-600',
  Parent: 'from-emerald-500 to-teal-600',
  Admin: 'from-amber-500 to-orange-600'
}

const ProfilePage = () => {
  const profile = {
    name: 'Alex Johnson',
    role: 'Student',
    email: 'alex.johnson@edufyx.com',
    phone: '+1 (555) 012-3456',
    school: 'Northview High School',
    class: 'Grade 10 - A',
    avatar: 'https://i.pravatar.cc/128?img=5'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Spline hero */}
      <section className="relative h-[320px] sm:h-[380px] md:h-[420px]">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/30 to-slate-950" />
        <div className="absolute inset-x-0 bottom-6 sm:bottom-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-3 rounded-2xl px-3 py-2 sm:px-4 sm:py-3 bg-slate-900/60 backdrop-blur-xl border border-slate-700/60 shadow-lg shadow-cyan-500/10"
            >
              <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-xl overflow-hidden ring-1 ring-cyan-400/40">
                <img src={profile.avatar} alt={profile.name} className="h-full w-full object-cover" />
                <div className="absolute -right-1 -bottom-1 bg-cyan-500 rounded-full p-1 ring-2 ring-slate-900 shadow-[0_0_15px_rgba(34,211,238,0.8)]">
                  <BadgeCheck className="h-4 w-4 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-white text-xl sm:text-2xl font-semibold leading-tight">{profile.name}</h1>
                <div className="mt-1 inline-flex items-center gap-2">
                  <span className={`text-xs sm:text-sm px-2 py-1 rounded-lg text-white bg-gradient-to-r ${roleBadgeColors[profile.role]}`}>{profile.role}</span>
                  <span className="text-xs sm:text-sm text-cyan-200/80">Edufyx</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="-mt-8 sm:-mt-12 relative z-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Left column: Info */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              <div className="rounded-2xl border border-slate-700/60 bg-slate-900/60 backdrop-blur-xl p-4 sm:p-6 shadow-lg shadow-cyan-500/10">
                <h2 className="text-white text-lg font-semibold mb-4">Profile Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <InfoRow icon={Mail} label="Email" value={profile.email} />
                  <InfoRow icon={Phone} label="Phone" value={profile.phone} />
                  <InfoRow icon={School} label="School" value={profile.school} />
                  <InfoRow icon={UserCircle2} label="Class" value={profile.class} />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-700/60 bg-gradient-to-br from-slate-900/70 to-slate-950/70 backdrop-blur-xl p-4 sm:p-6 shadow-lg shadow-cyan-500/10">
                <h2 className="text-white text-lg font-semibold mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
                  <ActionButton icon={Edit3} label="Edit Profile" variant="neon" onClick={() => alert('Edit Profile')} />
                  <ActionButton icon={KeyRound} label="Change Password" onClick={() => alert('Change Password')} />
                  <ActionButton icon={Link2} label="Manage Linked Accounts" onClick={() => alert('Manage Linked Accounts')} />
                  <ActionButton icon={Trophy} label="View Achievements" onClick={() => alert('View Achievements')} />
                </div>
              </div>
            </div>

            {/* Right column: Neon card */}
            <div className="space-y-6 sm:space-y-8">
              <div className="rounded-2xl relative overflow-hidden p-6 border border-cyan-400/40 bg-slate-900/60 backdrop-blur-xl shadow-[0_0_45px_rgba(34,211,238,0.25)]">
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-600/10" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 ring-1 ring-cyan-400/40 shadow-[0_0_25px_rgba(34,211,238,0.45)]" />
                    <div>
                      <p className="text-cyan-200 text-sm">Edufyx</p>
                      <p className="text-white font-semibold leading-tight">Digital Identity</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm">
                    Manage your learning identity with holographic verification, secure credentials, and cross-campus access.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-700/60 bg-slate-900/60 backdrop-blur-xl p-6">
                <h3 className="text-white font-semibold mb-3">Tips</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>Use your institutional email for seamless syncing.</li>
                  <li>Link parent accounts for progress updates.</li>
                  <li>Complete your profile to unlock badges.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-12 sm:mt-16 py-8 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Edufyx
      </footer>
    </div>
  )
}

export default ProfilePage

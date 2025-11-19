import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Bell, MessageSquare, Search, ChevronDown, LogOut, Settings, User as UserIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const IconButton = ({ children, label }) => (
  <motion.button
    aria-label={label}
    className="relative inline-flex items-center justify-center h-10 w-10 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-cyan-400/60 text-slate-200 hover:text-white shadow-inner shadow-slate-900/40 backdrop-blur-md transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
  >
    {children}
    <span className="sr-only">{label}</span>
  </motion.button>
)

const ProfileAvatar = () => {
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <motion.button
          className="group inline-flex items-center gap-2 pl-1 pr-2 py-1 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-cyan-400/60 text-slate-200 hover:text-white shadow-inner shadow-slate-900/40 backdrop-blur-md transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative h-8 w-8 rounded-lg overflow-hidden bg-gradient-to-br from-cyan-500/80 to-blue-600/80 ring-1 ring-cyan-400/40 shadow-[0_0_20px_rgba(34,211,238,0.45)]">
            <img
              src="https://i.pravatar.cc/64?img=5"
              alt="Profile"
              className="h-full w-full object-cover mix-blend-overlay"
            />
          </div>
          <div className="hidden sm:flex flex-col items-start leading-tight">
            <span className="text-xs text-slate-300">Welcome</span>
            <span className="text-sm font-medium text-white">Alex Johnson</span>
          </div>
          <ChevronDown className={classNames('h-4 w-4 transition-transform text-slate-400 group-hover:text-white', open && 'rotate-180')} />
        </motion.button>
      </DropdownMenu.Trigger>

      <AnimatePresence>
        {open && (
          <DropdownMenu.Content forceMount asChild align="end" sideOffset={10}>
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.16 }}
              className="z-50 w-60 rounded-2xl border border-slate-700/70 bg-slate-900/95 backdrop-blur-xl p-2 shadow-2xl shadow-cyan-500/10"
            >
              <div className="px-3 py-2 mb-2 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/60">
                <p className="text-sm text-slate-300">Signed in as</p>
                <p className="text-sm font-medium text-white truncate">alex.johnson@edufyx.com</p>
              </div>

              <DropdownMenu.Item asChild>
                <Link
                  to="/profile"
                  className="group flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-200 hover:text-white hover:bg-cyan-500/10 border border-transparent hover:border-cyan-400/40 transition-colors"
                >
                  <UserIcon className="h-5 w-5 text-cyan-300 group-hover:text-cyan-200" />
                  <span>Profile</span>
                </Link>
              </DropdownMenu.Item>

              <DropdownMenu.Item asChild>
                <a
                  href="#settings"
                  className="group flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-200 hover:text-white hover:bg-cyan-500/10 border border-transparent hover:border-cyan-400/40 transition-colors"
                >
                  <Settings className="h-5 w-5 text-cyan-300 group-hover:text-cyan-200" />
                  <span>Settings</span>
                </a>
              </DropdownMenu.Item>

              <DropdownMenu.Separator className="my-2 h-px bg-slate-700/60" />

              <DropdownMenu.Item asChild>
                <button
                  className="w-full group flex items-center gap-3 px-3 py-2.5 rounded-xl text-rose-300 hover:text-white hover:bg-rose-500/10 border border-transparent hover:border-rose-400/40 transition-colors"
                  onClick={() => alert('Logged out')}
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </DropdownMenu.Item>
            </motion.div>
          </DropdownMenu.Content>
        )}
      </AnimatePresence>
    </DropdownMenu.Root>
  )
}

const TopNav = () => {
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="relative">
        {/* Neon line */}
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between rounded-2xl border border-slate-700/60 bg-slate-900/60 backdrop-blur-xl px-3 sm:px-4 py-2.5 shadow-lg shadow-cyan-500/10">
            {/* Left: Logo */}
            <Link to="/" className="group inline-flex items-center gap-2">
              <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 ring-1 ring-cyan-400/50 shadow-[0_0_25px_rgba(34,211,238,0.45)]" />
              <div className="flex flex-col">
                <span className="text-sm leading-none text-cyan-300 tracking-wider">Edufyx</span>
                <span className="text-white font-semibold leading-tight -mt-0.5">Identity</span>
              </div>
            </Link>

            {/* Center: Search (icon only on mobile) */}
            <div className="flex-1 mx-2 hidden md:flex">
              <div className="relative w-full max-w-md">
                <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
                  <Search className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  placeholder="Search courses, messages, people..."
                  className="w-full h-11 pl-10 pr-4 rounded-xl bg-slate-800/60 border border-slate-700/60 focus:border-cyan-400/60 focus:outline-none text-slate-200 placeholder:text-slate-400 shadow-inner shadow-slate-900/40"
                />
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="md:hidden">
                <IconButton label="Search">
                  <Search className="h-5 w-5" />
                </IconButton>
              </div>
              <IconButton label="Notifications">
                <div className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                <Bell className="h-5 w-5" />
              </IconButton>
              <IconButton label="Messages">
                <MessageSquare className="h-5 w-5" />
              </IconButton>
              <ProfileAvatar />
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default TopNav

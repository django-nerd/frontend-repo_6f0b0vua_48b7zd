import TopNav from './TopNav'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <TopNav />
      <main>{children}</main>
    </div>
  )
}

export default Layout

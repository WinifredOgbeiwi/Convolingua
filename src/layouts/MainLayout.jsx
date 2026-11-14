import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { ROUTES } from '../data/siteContent'

export default function MainLayout() {
  // `key` changes on every navigation, so re-clicking the same anchor still scrolls.
  const { pathname, hash, search, key } = useLocation()
  const isAuthPage =
    pathname === ROUTES.login || pathname === ROUTES.forgotPassword

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: isAuthPage ? 'instant' : 'smooth' })
  }, [pathname, hash, search, key, isAuthPage])

  useEffect(() => {
    document.documentElement.classList.toggle('is-login', isAuthPage)
    document.body.classList.toggle('is-login', isAuthPage)
    return () => {
      document.documentElement.classList.remove('is-login')
      document.body.classList.remove('is-login')
    }
  }, [isAuthPage])

  return (
    <>
      <Header />
      <main className={isAuthPage ? 'main--login' : undefined}>
        <Outlet />
      </main>
      {!isAuthPage && <Footer />}
    </>
  )
}

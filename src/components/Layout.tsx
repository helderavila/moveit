import { GetServerSideProps } from 'next'
import { Sidebar } from '../components/Sidebar'

import { ThemeProvider } from '../contexts/ThemeContext'


export default function Layout({ children, currentTheme }) {
  return (
    <ThemeProvider currentTheme={currentTheme}>
      <div>
        <Sidebar />
        {children}
      </div>
    </ThemeProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { currentTheme } = ctx.req.cookies

  return {
    props: {
      currentTheme: currentTheme ?? 'light'
    }
  }
}
import Footer from '@/components/landing-page/Footer'
import Navbar from '@/components/landing-page/Navbar'
import Head from 'next/head'
import { usePathname } from 'next/navigation'
import NextProgress from 'nextjs-progressbar'
import { ReactNode } from 'react'
// import ChatBot from '../app-ui/flow-editor/chat/Chatbot'


type Props = {
  children: ReactNode
}

function LandingPageLayout({ children }: Props) {
  const pathname = usePathname();

  return (
    <>
      <>

        <Head>
          <title>Zigment.ai</title>
        </Head>
        <Navbar />
        <NextProgress />
        <main className="pt-[80px] bg-white">
          {children}
        </main>

        {/* <ChatBot skip_cookie={false} absolute widget_id={"1704285101-48395187-77f0-4e8b-9990-e5dd7e2a87bb-1704285101"} /> */}

        {/* staging */}
        {/* <ChatBot skip_cookie={false} absolute widget_id={"1698668684-ab840fd4-235b-49c4-be6c-e9efa52324b7-1698668684"} /> */}

        <Footer />
      </>
    </>
  )
}

export default LandingPageLayout
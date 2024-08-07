import Contents from '../components/history/Contents'
import Header from '../components/header/Header'
import Footer from '../components/Footer'

const History: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <Header />
      <Contents />
      <Footer />
    </div>
  )
}

export default History

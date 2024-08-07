import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Login from './pages/Login'
import Join from './pages/Join'
import JoinSuccess from './pages/JoinSuccess'
import History from './pages/History'
import Main from './pages/Main'
import Counselor from './pages/Counselor'
import Counseling from './pages/Counseling'
import Review from './pages/Review'
import Post from './pages/Post'
import Complete from './pages/Complete'
import MoreReviews from './pages/Reviews'
import CustomerServcie from './pages/CustomerService'
import Reservation from './pages/Reservation'
import Info from './pages/Info'
import FindId from './pages/FindId'
import FindPw from './pages/FindPw'
import Policy from './pages/Policy'
import MyPage from './pages/MyPage'
import DeleteAccount from './pages/DeleteAccount'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/joinsuccess" element={<JoinSuccess />} />
        <Route path="/history" element={<History />} />
        <Route path="/review" element={<Review />} />
        <Route path="/review/complete" element={<Complete />} />
        <Route path="/post" element={<Post />} />
        <Route path="/counseling" element={<Counseling />} />
        <Route path="/counseling/counselor" element={<Counselor />} />
        <Route path="/counseling/counselor/reviews" element={<MoreReviews />} />
        <Route path="/customerservice" element={<CustomerServcie />} />
        <Route path="/counseling/reservation" element={<Reservation />} />
        <Route path="/info" element={<Info />} />
        <Route path="/findid" element={<FindId />} />
        <Route path="/findpw" element={<FindPw />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/deleteaccount" element={<DeleteAccount />} />
      </Routes>
    </Router>
  )
}

export default App

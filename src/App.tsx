
import './App.css'
import Loader from './components/Loader'
import Header from './components/Header'
import JobEmpSection from './components/JobSection'
import FeaturedJob from './components/FeaturedJob'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JobDownload from './components/JobDownload'
import { Footer } from './components/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {


  return (
    <>
     <Loader></Loader>
     <Header></Header>
     <JobEmpSection></JobEmpSection>
     <FeaturedJob></FeaturedJob>
     <JobDownload></JobDownload>
     <Footer></Footer>
     </>
  )
}

export default App;

import '../App.css';
import Header from '../components/Header';
import { Aside } from '../components/Aside'
import { Footer } from '../components/Footer'

function Home() {
  return (
    <div className="Container">
      <Header />
      <Aside />
      <Footer />
    </div>
  );
}

export default Home;

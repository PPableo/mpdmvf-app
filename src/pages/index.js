import Landing from '@/components/Landing';
import NavBar from '@/components/NavBar.jsx';
import Reviews from '@/components/Reviews.jsx';
import Footer from '@/components/Footer';
import Features from '@/components/Features';

export default function Home() {
  return (
    <>
      <NavBar />
      <Landing />
      <Reviews />
      <Features />
      <Footer />
    </>
  );
}
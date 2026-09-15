import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Clients } from '@/components/Clients';
import { Services } from '@/components/Services';
import { Portfolio } from '@/components/Portfolio';
import { WhyUs } from '@/components/WhyUs';
import { ContactCTA } from '@/components/ContactCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return <main>
    <Navbar /><Hero /><About /><Clients /><Services />
    {/* <Portfolio /> */}
    <WhyUs /><ContactCTA />
    <Footer /></main>;
}

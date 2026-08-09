/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import DataSection from './components/DataSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FooterContact from './components/FooterContact';

export default function App() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen selection:bg-amber-500/30">
      <Navbar />
      <Hero />
      <Mission />
      <DataSection />
      <Testimonials />
      <FAQ />
      <FooterContact />
    </div>
  );
}

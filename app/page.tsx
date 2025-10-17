import React from 'react'
import ServicesSection from './_hompage/ServiceSection'
import HeroSection from './_hompage/HeroSection'
import EliminateITChallengesSection from './_hompage/Intos'
import WhyChooseUsSection from './_hompage/WhyChooseUsSection'
// import HowWeWorkSection from './_hompage/HowWeWorkSection'
import TestimonialsSection from './_hompage/TestimonialsSection'
// import NewsInsightsSection from './_hompage/NewsInsightsSection'
import FAQ from './_hompage/FAQ'

const page = () => {
  return (
    <div>
      <HeroSection />
      <EliminateITChallengesSection />
      <ServicesSection />
      <WhyChooseUsSection />
      {/* <HowWeWorkSection /> */}
      <TestimonialsSection />
      <FAQ />
      {/* <NewsInsightsSection /> */}
      {/* Add any additional sections here */}
    </div>
  )
}

export default page
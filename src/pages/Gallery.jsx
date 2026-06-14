import { useState } from 'react'
import PageHeader from '../components/common/PageHeader'
import Container from '../components/common/Container'
import SectionHeader from '../components/common/SectionHeader'
import CTASection from '../components/common/CTASection'
import GalleryCard from '../components/cards/GalleryCard'
import { galleryCategories, galleryItems } from '../data/gallery'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filteredItems = activeCategory === 'All' ? galleryItems : galleryItems.filter((item) => item.category === activeCategory || item.serviceType === activeCategory)

  return (
    <>
      <PageHeader label="Gallery" title="Before and After Cleaning Results" description="See examples of how CleanHouse helps transform rooms, bathrooms, offices, and home areas into cleaner spaces." cta="Request Cleaning Service" />
      <section className="py-16 md:py-20">
        <Container>
          <SectionHeader eyebrow="Results" title="Cleaning Result Examples" description="Filter by category to review example before-and-after cleaning cards." align="center" />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {galleryCategories.map((category) => (
              <button
                className={`min-h-11 rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${activeCategory === category ? 'bg-green-600 text-white' : 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-100'}`}
                type="button"
                onClick={() => setActiveCategory(category)}
                key={category}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => <GalleryCard item={item} key={item.id} />)}
          </div>
        </Container>
      </section>
      <CTASection title="Want Your Space to Look Cleaner Too?" description="Book via WhatsApp or request a quote for your home, office, bathroom, kitchen, or deep cleaning needs." />
    </>
  )
}

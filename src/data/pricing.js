export const pricingPackages = [
  {
    id: 1,
    name: 'Standard Cleaning',
    description: 'For regular cleaning needs. Suitable for homes, small offices, and weekly cleaning.',
    bestFor: ['Homes', 'Small offices', 'Weekly cleaning', 'Light cleaning needs', 'Busy families'],
    features: ['Floor sweeping and mopping', 'Dusting visible surfaces', 'Basic bathroom cleaning', 'Trash removal', 'Light kitchen surface cleaning', 'General room tidying'],
    highlighted: false,
    ctaText: 'Choose Standard Cleaning',
    whatsappMessage:
      'Hello CleanHouse, I want to request Standard Cleaning. Please send me more information about price and availability.',
  },
  {
    id: 2,
    name: 'Deep Cleaning',
    description: 'For detailed and intensive cleaning. Suitable for dirty rooms, bathrooms, kitchens, and full house cleaning.',
    bestFor: ['Dirty rooms', 'Bathrooms', 'Kitchens', 'Full house cleaning', 'Move-in or move-out cleaning'],
    features: ['Detailed dust removal', 'Intensive bathroom cleaning', 'Kitchen area cleaning', 'Hard-to-reach area cleaning', 'Stain-focused cleaning', 'Floor and surface deep cleaning', 'Full room refresh'],
    highlighted: true,
    ctaText: 'Choose Deep Cleaning',
    whatsappMessage:
      'Hello CleanHouse, I want to request Deep Cleaning. Please send me more information about price and availability.',
  },
]

export const comparisonRows = [
  ['Best for', 'Regular cleaning', 'Intensive cleaning'],
  ['Home cleaning', 'Yes', 'Yes'],
  ['Office cleaning', 'Yes', 'Yes'],
  ['Bathroom cleaning', 'Basic', 'Detailed'],
  ['Kitchen cleaning', 'Light', 'Detailed'],
  ['Hard-to-reach areas', 'Limited', 'Yes'],
  ['Recommended frequency', 'Weekly / regular', 'Monthly / special needs'],
  ['Custom quote', 'Available', 'Available'],
]

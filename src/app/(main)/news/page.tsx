import CategorySection from '@/components/Articles/Category'
import LatestArticles from '@/components/Articles/LatestArticles'
import React from 'react'

// export const metadata = {
//   title: 'Contact The Trusted Prop – Reach Out for Support, Partnerships, or Feedback',
//   description: 'Have a question, feedback, or business inquiry? Contact The Trusted Prop team directly. We’re here to support traders, partners, and affiliate collaborators.',
//   keywords: 'contact The Trusted Prop, reach out, prop firm support, affiliate inquiry, business proposal, customer care, trader help, feedback',
//   openGraph: {
//     title: 'Contact The Trusted Prop – Reach Out for Support, Partnerships, or Feedback',
//     description: 'Have a question, feedback, or business inquiry? Contact The Trusted Prop team directly. We’re here to support traders, partners, and affiliate collaborators.',
//     locale: 'en_US',
//     images: [
//       {
//         url: `https://media.thetrustedprop.com/uploads/lotsize_Medium_93333bb1aa.png`,
//         width: 1200,
//         height: 630,
//         alt: 'Free Prop Firm Giveaways Win $5K-$200K | The Trusted Prop'
//       }
//     ],
//     url: 'https://www.thetrustedprop.com/free-giveaway',
//     site_name: 'The Trusted Prop'
//   }
// }


const news = () => {
  return (
     <div className=" px-20">

        <CategorySection />
        <LatestArticles/>
        </div>
    )
}

export default news
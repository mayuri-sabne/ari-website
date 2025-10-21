import ToolCardCarousel from '@/components/ai-tools/Card'
import AiToolReviews from '@/components/ai-tools/Reviews'
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


const aitools = () => {
  return (
     <div className=" px-20">

          <ToolCardCarousel />
          <AiToolReviews/>
        </div>
    )
}

export default aitools
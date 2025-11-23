import CouponCode from "@/components/Homepage/CouponCode";
import FeaturedNews from "@/components/Homepage/FeaturedNews";
import LatestAITools from "@/components/Homepage/LatestAITools";
import MainPage from "@/components/Homepage/MainPage";
import NewsletterSection from "@/components/Homepage/Newsletter";
import Testimonials from "@/components/Homepage/Testimonials";
import { fetchAPI } from "@/lib/api";

export default async function Home() {
    const featuredTools = await fetchAPI("/tools/featured");

  return (
    <div>
      <MainPage />
      <div className="px-20">
        <LatestAITools tools={featuredTools}/>
        <FeaturedNews />
        <CouponCode />
        <Testimonials />
        <NewsletterSection />
      </div>
    </div>
  );
}

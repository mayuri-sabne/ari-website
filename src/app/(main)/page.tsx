import CouponCode from "@/components/Homepage/CouponCode";
import FeaturedNews from "@/components/Homepage/FeaturedNews";
import InfoCards from "@/components/Homepage/InfoCards";
import LatestAITools from "@/components/Homepage/LatestAITools";
import MainPage from "@/components/Homepage/MainPage";
import NewsletterSection from "@/components/Homepage/Newsletter";
import Testimonials from "@/components/Homepage/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" px-20">
   <MainPage />
   <InfoCards/>
   <LatestAITools/>
   <FeaturedNews/>
   <CouponCode/>
   <Testimonials />
   <NewsletterSection/>
    </div>
  );
}

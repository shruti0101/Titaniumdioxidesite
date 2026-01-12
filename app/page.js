import Hero from "@/components/Landingpage/Hero";
import Whychoose from "@/components/Landingpage/Whychoose";
import Industries from "@/components/Landingpage/Industries"
import AboutUs from "@/components/Landingpage/About";
import Products from "@/components/Landingpage/Products";
import ProductCategorySection from "@/components/Landingpage/Categories";
import Certificates from "@/components/Landingpage/Certificates";
import Cta from "@/components/Landingpage/Cta";
import Countup from "@/components/Countup"
import Quality from "@/components/Landingpage/Quality"
 import Faq from "@/components/Landingpage/Faq"
 import Form from "@/components/Landingpage/Form"
import Testimonial from "@/components/Landingpage/Testmonial";

import Enquiry from "@/components/Enquiry"
import Citeskeyword from "@/components/Citieskeyword";
export default function Home() {
  return (
<>



<Hero></Hero>
<Enquiry></Enquiry>
<AboutUs></AboutUs>
<ProductCategorySection></ProductCategorySection>
<Whychoose></Whychoose>
<Countup></Countup>
<Products></Products>
<Cta></Cta>

<Industries></Industries>



<Certificates></Certificates>
<Form></Form>
{/* <Ti></Ti> */}
<Quality></Quality>
<Testimonial></Testimonial>
<Faq></Faq>
<Citeskeyword></Citeskeyword>
</>
  );
}

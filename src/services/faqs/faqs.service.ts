import { StrapiResultType } from "@/types/strapi.types";
import { FAQPageType } from "@/types/faq.types";
import { strapiGet } from "../common/strapi.service";


class FAQsAPI {

    getFAQPages = async () : Promise<StrapiResultType<FAQPageType>> =>strapiGet(`/faq-pages`, );   
    
}

const faqsApi = new FAQsAPI();

export default faqsApi;
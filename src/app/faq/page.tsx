import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import FAQCard from "@/components/faq/FAQCard";

export default function FAQPage() {
  return (
    <>   

    <main>  
    <section>      
       <h1 className="mb-4">Preguntas frecuentes</h1>

       <div className="grid grid-cols-12 gap-4 mb-8">

        <FAQCard label="Seccion 1" href="/faq/section-1"/>
        <FAQCard label="Seccion 2" href="/faq/section-2"/>
        <FAQCard label="Seccion 3" href="/faq/section-3"/>
        <FAQCard label="Seccion 4" href="/faq/section-4"/>
        <FAQCard label="Seccion 5" href="/faq/section-5"/>
        <FAQCard label="Seccion 6" href="/faq/section-6"/>
        <FAQCard label="Seccion 7" href="/faq/section-7"/>
        <FAQCard label="Seccion 8" href="/faq/section-8"/>

       </div>
  
    </section>

    <section className="flex flex-col">
        <h2>Seccion 2</h2>
    </section>
    </main>
    </>
  );
}

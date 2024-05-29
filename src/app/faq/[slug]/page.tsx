import React from 'react';
import FAQSection from "@/components/faq/FAQSection";
import faqsApi from "@/services/faqs/faqs.service";

const renderChildren = (children: TextNode[]) => {
  return children.map((child, index) => {
      if (child.type === 'text') {
          return (
              <span key={index} style={{
                  fontWeight: child.bold ? 'bold' : 'normal',
                  textDecoration: child.underline ? 'underline' : 'none'
              }}>
                  {child.text}
              </span>
          );
      }
      return null;
  });
};

const renderBody = (body: BodyNode[]) => {
  return body.map((block, index) => {
      switch (block.type) {
          case 'paragraph':
              return (
                  <p key={index}>
                      {renderChildren(block.children)}
                  </p>
              );
          case 'list':
              return block.format === 'ordered' ? (
                  <ol key={index}>
                      {block.children.map((item, itemIndex) => (
                          <li key={itemIndex}>
                              {renderChildren(item.children)}
                          </li>
                      ))}
                  </ol>
              ) : (
                  <ul key={index}>
                      {block.children.map((item, itemIndex) => (
                          <li key={itemIndex}>
                              {renderChildren(item.children)}
                          </li>
                      ))}
                  </ul>
              );
          default:
              return null;
      }
  });
};

type FAQPageProps = {
  params: {
      slug: string;
  };
};

export default async function FAQPage({ params }: FAQPageProps) {
  const faqPages = await faqsApi.getFAQPages();
  const faqPage = faqPages.data.find(page => page.attributes.slug === `/${params.slug}`);
  

  return (
      <main>
          <FAQSection sections={faqPages.data} />
          <section className="flex flex-col">
              <h2>{faqPage?.attributes.title}</h2>
              <div>
                  {faqPage?.attributes.body ? renderBody(faqPage.attributes.body) : <p>No content found.</p>}
              </div>
          </section>
      </main>
  );
}
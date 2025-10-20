import React from "react";
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography";
import { QuantumCircuitDiagram } from "@/components/ui/quantum-circuit-diagram";
import { getDictionary } from "@/lib/get-dictionary";

import { i18n } from "@/lib/i18n-config";

interface Props {
  params: {
    lang: typeof i18n.locales[number];
  };
}

export default async function QuantumComputing({ params }: Props) {
  const dictionary = await getDictionary(params.lang);
  const dict = dictionary.homePage.latestNews.quantum;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <TypographyH1 className="mb-6">{dict.title}</TypographyH1>
        <TypographyP className="text-xl text-gray-600 max-w-3xl mx-auto">
          {dict.excerpt}
        </TypographyP>
      </section>
      
      <section className="mb-16">
        <TypographyP className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          {dict.introduction}
        </TypographyP>
        <div className="mt-8">
          <QuantumCircuitDiagram />
        </div>
      </section>

      <section className="mb-16">
        <TypographyH2 className="text-2xl font-bold mb-8 text-center">{dict.timeline.title}</TypographyH2>
        <div className="space-y-8">
          {Object.entries(dict.timeline.events).map(([year, event]: [string, any]) => (
            <div key={year} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="text-2xl font-bold text-blue-600">{year}</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <TypographyH2 className="text-2xl font-bold mb-8 text-center">{dict.market.title}</TypographyH2>
        <TypographyP className="text-lg text-gray-700 max-w-3xl mx-auto">
          {dict.market.description}
        </TypographyP>
      </section>

      <section className="mb-16">
        <TypographyH2 className="text-2xl font-bold mb-12 text-center">{dict.literacy.title}</TypographyH2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {dict.literacy.sections.map((section: any, index: number) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-blue-600">{section.title}</h3>
              <TypographyP>{section.content}</TypographyP>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 p-8 rounded-lg max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-6 text-center text-blue-800">
            {dict.literacy.applications.title}
          </h3>
          <ul className="grid md:grid-cols-2 gap-4">
            {dict.literacy.applications.list.map((item: string, index: number) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-blue-600">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

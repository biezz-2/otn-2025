import React from "react";
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography";
import { getDictionary } from "@/lib/get-dictionary";
import { i18n } from "@/lib/i18n-config";
import { GreenTechTimeline } from "@/components/ui/green-tech-timeline";
import { EmissionsChart } from "@/components/ui/emissions-chart";
import { TechnologyTable } from "@/components/ui/technology-table";

interface Props {
  params: {
    lang: typeof i18n.locales[number];
  };
}

export default async function GreenTechnology({ params }: Props) {
  const dictionary = await getDictionary(params.lang);
  const dict = dictionary.homePage.latestNews.greenTech;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <TypographyH1 className="mb-6">{dict.title}</TypographyH1>
        <TypographyP className="text-xl text-gray-600 max-w-3xl mx-auto">
          {dict.excerpt}
        </TypographyP>
      </section>

      <section className="mb-16">
        <TypographyH2 className="text-2xl font-bold mb-8 text-center">
          {dict.timeline.title}
        </TypographyH2>
        <GreenTechTimeline data={dict.timeline.events} />
      </section>

      <section className="mb-16">
        <TypographyH2 className="text-2xl font-bold mb-8 text-center">
          {dict.overview.title}
        </TypographyH2>
        <TypographyP className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          {dict.overview.description}
        </TypographyP>
        <EmissionsChart data={dict.overview.emissions} />
      </section>

      <section className="mb-16">
        <TypographyH2 className="text-2xl font-bold mb-8 text-center">
          {dict.technologies.title}
        </TypographyH2>
        <TechnologyTable data={dict.technologies.items} />
      </section>

      <section className="mb-16">
        <TypographyH2 className="text-2xl font-bold mb-12 text-center">
          {dict.innovations.title}
        </TypographyH2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {dict.innovations.sections.map((section: any, index: number) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-green-600">{section.title}</h3>
              <TypographyP>{section.content}</TypographyP>
            </div>
          ))}
        </div>

        <div className="bg-green-50 p-8 rounded-lg max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-6 text-center text-green-800">
            {dict.innovations.impact.title}
          </h3>
          <ul className="grid md:grid-cols-2 gap-4">
            {dict.innovations.impact.list.map((item: string, index: number) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-green-600">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

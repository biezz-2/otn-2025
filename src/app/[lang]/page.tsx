import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const homeDict = dictionary.homePage;

  const featuredTech = [
    {
      title: homeDict.featured.ai.title,
      description: homeDict.featured.ai.description,
      icon: "/home/Artificial-intellegence.webp",
    },
    {
      title: homeDict.featured.blockchain.title,
      description: homeDict.featured.blockchain.description,
      icon: "/home/Blockchain.avif",
    },
    {
      title: homeDict.featured.iot.title,
      description: homeDict.featured.iot.description,
      icon: "/home/IoT-Solution.jpg",
    },
  ];

  const latestNews = [
    {
      title: homeDict.latestNews.quantum.title,
      date: "2024-10-15",
      excerpt: homeDict.latestNews.quantum.excerpt,
      image: "/next.svg",
      href: `/${lang}/quantum`
    },
    {
      title: homeDict.latestNews.greenTech.title,
      date: "2024-10-14",
      excerpt: homeDict.latestNews.greenTech.excerpt,
      image: "/vercel.svg",
      href: `/${lang}/green-tech`
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg mb-12">
        <TypographyH1 className="mb-6">
          {homeDict.hero.title}
        </TypographyH1>
        <TypographyP className="text-xl md:text-2xl mb-8">{homeDict.hero.subtitle}</TypographyP>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200 font-['Tinos',_serif]">
          {homeDict.hero.exploreButton}
        </button>
      </section>

      {/* Featured Technologies Section */}
      <section className="mb-12">
        <TypographyH2 className="mb-8 text-center">
          {homeDict.featured.title}
        </TypographyH2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTech.map((tech, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-200 flex flex-col items-center text-center"
            >
              <div className="w-[64px]">
                <AspectRatio ratio={16 / 9}>
                  <Image src={tech.icon} alt={tech.title} fill className="object-cover mb-4" />
                </AspectRatio>
              </div>
              <h3 className="text-xl font-semibold mb-2 font-['Tinos',_serif]">{tech.title}</h3>
              <TypographyP className="text-gray-600">{tech.description}</TypographyP>
            </div>
          ))}
        </div>
      </section>

      {/* Latest News Section */}
      <section>
        <TypographyH2 className="mb-8 text-center">
          {homeDict.latestNews.title}
        </TypographyH2>
        <div className="grid md:grid-cols-2 gap-8">
          {latestNews.map((news, index) => (
                        <Link
              href={news.href}
              key={index}
            >
              <article
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-200 hover:border-blue-300"
              >
                <Image src={news.image} alt={news.title} width={128} height={128} className="mb-4 w-full h-32 object-cover rounded-md" />
                <h3 className="text-xl font-semibold mb-2 font-['Tinos',_serif]">{news.title}</h3>
                <p className="text-gray-500 text-sm mb-3 font-['Tinos',_serif]">{news.date}</p>
                <p className="text-gray-600 font-['Tinos',_serif]">{news.excerpt}</p>
                <span className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium font-['Tinos',_serif]">
                  {homeDict.latestNews.readMore}
                </span>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

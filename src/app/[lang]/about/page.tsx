import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";

export default async function About({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);
  const aboutDict = dictionary.aboutPage;

  const milestones = [
    {
      year: "2024",
      title: aboutDict.journey.launch.title,
      description: aboutDict.journey.launch.description,
    },
    {
      year: "2024",
      title: aboutDict.journey.growth.title,
      description: aboutDict.journey.growth.description,
    },
    {
      year: "2025",
      title: aboutDict.journey.hub.title,
      description: aboutDict.journey.hub.description,
    },
  ];

  const teamMembers = [
    {
      name: aboutDict.team.member1.name,
      role: aboutDict.team.member1.role,
      bio: aboutDict.team.member1.bio,
    },
    {
      name: aboutDict.team.member2.name,
      role: aboutDict.team.member2.role,
      bio: aboutDict.team.member2.bio,
    },
    {
      name: aboutDict.team.member3.name,
      role: aboutDict.team.member3.role,
      bio: aboutDict.team.member3.bio,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-50 rounded-lg mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{aboutDict.hero.title}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {aboutDict.hero.subtitle}
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-8 bg-blue-50 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{aboutDict.mission.title}</h2>
            <p className="text-gray-700">{aboutDict.mission.text}</p>
          </div>
          <div className="p-8 bg-purple-50 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{aboutDict.vision.title}</h2>
            <p className="text-gray-700">{aboutDict.vision.text}</p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">{aboutDict.journey.title}</h2>
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-4 items-start"
            >
              <div className="font-bold text-xl text-blue-600 md:w-24">
                {milestone.year}
              </div>
              <div className="flex-1 pb-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">{aboutDict.team.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-200"
            >
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-blue-600 mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
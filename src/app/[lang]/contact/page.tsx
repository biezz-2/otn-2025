import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";
import ContactForm from "./contact-form";

export default async function Contact({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);
  const contactDict = dictionary.contactPage;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Contact Header */}
      <section className="text-center py-16 bg-gray-50 rounded-lg mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{contactDict.hero.title}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {contactDict.hero.subtitle}
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-6">{contactDict.getInTouch}</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">{contactDict.location.title}</h3>
              <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: contactDict.location.address }} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{contactDict.email}</h3>
              <p className="text-gray-600">info@techofera.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{contactDict.phone}</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{contactDict.businessHours.title}</h3>
              <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: contactDict.businessHours.hours }} />
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">{contactDict.followUs}</h3>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map((platform) => (
                <button
                  key={platform}
                  className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">{contactDict.sendMessage.title}</h2>
          <ContactForm dictionary={contactDict} />
        </div>
      </div>
    </div>
  );
}
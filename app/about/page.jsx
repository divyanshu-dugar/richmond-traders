export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
          About <span className="text-blue-600">Richmond Traders Inc.</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Richmond Traders Inc. is a trusted importer and distributor of quality
          agricultural and specialty food ingredients, proudly serving North America
          from our base in Toronto, Canada.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-white shadow-lg rounded-2xl p-10 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-blue-600 pl-3">
          Our Mission
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Our mission is to provide quality agricultural ingredients for our customers
          with excellent service at a competitive price. We aspire to be the most admired
          distribution company—creating value, growing responsibly, and serving the needs
          of our customers.
        </p>
        <p className="text-gray-600 leading-relaxed">
          To achieve this, we collaborate with the best, brightest, and most innovative
          suppliers, ensuring that every partnership contributes to providing exceptional
          products and services across North America.
        </p>
        <p className="text-gray-600 leading-relaxed">
          We are continuously expanding the size and global reach of our core business:
          sourcing, transporting, distributing, marketing, and selling. Our commitment is
          to diversify and enrich our product portfolio while growing responsibly.
        </p>
      </div>

      {/* Values Section */}
      <div className="space-y-10">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Our Core Values
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          At Richmond Traders Inc., our core values guide our behavior, influence
          our decisions, and reflect who we are. They represent our commitment
          to integrity, excellence, and service in everything we do.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Integrity", desc: "We consistently fulfill our promises. We speak up and walk the walk." },
            { title: "Quality", desc: "We strive to deliver the best quality products to our customers." },
            { title: "Service", desc: "We delight our customers through reliable and personalized service." },
            { title: "Community", desc: "We prioritize the safety and well-being of our people and communities." },
            { title: "Innovation", desc: "We achieve superior results by embracing new ideas and solutions." },
            { title: "Leadership", desc: "We motivate, empathize, and inspire to grow for the benefit of all." },
            { title: "Resourcefulness", desc: "We use our intelligence, creativity, and experience to find efficient solutions." },
            { title: "Teamwork", desc: "We work together, support one another, and celebrate mutual success." },
            { title: "Responsibility", desc: "We are accountable, committed, and action-oriented in everything we do." },
          ].map((value) => (
            <div
              key={value.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-blue-600 mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl shadow-lg p-10 text-center space-y-4">
        <h2 className="text-3xl font-semibold">Get in Touch</h2>
        <p className="text-blue-100 max-w-2xl mx-auto">
          Have questions or want to learn more about our products?  
          Our team would love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <div>
            <p className="font-semibold">📞 +1 (416) 292 - 5008</p>
          </div>
          <div>
            <p className="font-semibold">✉️ info@richmondimports.com</p>
          </div>
          <div>
            <p className="font-semibold">
              📍 153 Eddystone Ave, North York, ON M3N 1H5, Canada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

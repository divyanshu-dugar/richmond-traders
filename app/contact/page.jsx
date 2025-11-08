"use client";

export default function Contact() {
  return (
    <section className="min-h-screen py-16 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">
            Contact <span className="text-emerald-600">Richmond Traders</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question or need more information about our products?  
            We’re here to help. Reach out via phone, email, or message us directly.
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
              <div className="space-y-3 text-gray-600">
                <p><strong>Phone:</strong> +1 (416) 292-5008</p>
                <p><strong>Email:</strong> info@richmondimports.com</p>
                <p><strong>Address:</strong><br />
                  153 Eddystone Ave<br />
                  North York, ON M3N 1H5<br />
                  Canada
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Open Hours</h2>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Mon - Thu:</strong> 8:00 am - 5:00 pm</li>
                <li><strong>Friday:</strong> 8:00 am - 4:00 pm</li>
                <li><strong>Sat & Sun:</strong> Closed</li>
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-md px-4 py-2 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-md px-4 py-2 outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full border border-gray-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-md px-4 py-2 outline-none resize-none"
              ></textarea>
              <button
                type="button"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 rounded-md transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Embed */}
        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5764.43008750191!2d-79.520837!3d43.747631!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3035ff0413d3%3A0xc66c2332a2c3a150!2s153%20Eddystone%20Ave%2C%20North%20York%2C%20ON%20M3N%201H5%2C%20Canada!5e0!3m2!1sen!2sus!4v1762644247728!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

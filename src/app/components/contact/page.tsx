"use client";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Adventure Travels | Home</title>
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:300,400,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
      </Head>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-center text-4xl font-bold mb-4">CONTACT</h1>
          <p className="text-center text-lg mb-8">
            Let&apos;s get in touch. Send us a message:
          </p>
          <div className="space-y-6">
            <p className="flex items-center text-lg">
              <i className="fa fa-map-marker fa-fw text-2xl text-gray-600 mr-4"></i>
              C23 Adventure Lane, Explore City, World
            </p>
            <p className="flex items-center text-lg">
              <i className="fa fa-phone fa-fw text-2xl text-gray-600 mr-4"></i>
              Phone: +923 456 7890
            </p>
            <p className="flex items-center text-lg">
              <i className="fa fa-envelope fa-fw text-2xl text-gray-600 mr-4"></i>
              Email: info@adventuretravels.com
            </p>
            <form className="mt-6 space-y-4">
              <input
                type="text"
                name="Name"
                placeholder="Name"
                required
                className="w-full border border-gray-300 p-2 rounded"
              />
              <input
                type="email"
                name="Email"
                placeholder="Email"
                required
                className="w-full border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="Subject"
                placeholder="Subject"
                required
                className="w-full border border-gray-300 p-2 rounded"
              />
              <textarea
                name="Message"
                placeholder="Message"
                required
                className="w-full border border-gray-300 p-2 rounded h-32"
              ></textarea>
              <button
                type="submit"
                className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800"
              >
                <i className="fa fa-paper-plane"></i> SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>&copy; 2024 Adventure Travels</p>
      </footer>
    </>
  );
}

import Image from 'next/image';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-purple-800 mb-8">About Us</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">We strive to create innovative solutions that make a positive impact on the world, one line of code at a time.</p>
          <div className="flex justify-center">
            <Image src="/mission-image.jpg" alt="Our Mission" width={400} height={300} className="rounded-lg" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Team</h3>
            <p className="text-gray-600">A diverse group of passionate individuals working together to achieve greatness.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Values</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Innovation</li>
              <li>Collaboration</li>
              <li>Integrity</li>
              <li>Excellence</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded" />
            <input type="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded" />
            <textarea placeholder="Your Message" rows={4} className="w-full p-2 border border-gray-300 rounded"></textarea>
            <button type="submit" className="bg-purple-600 text-white font-semibold py-2 px-4 rounded hover:bg-purple-700 transition duration-300">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

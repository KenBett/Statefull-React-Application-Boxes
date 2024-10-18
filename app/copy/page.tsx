import Image from "next/image";
export default function Page(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-purple-800 md:text-rose-500 mb-8">About us</h1>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
         <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2> 
         <p className="text-gray-600 mb-4">We Strive to Create innovative solutions that make a positive impact on the world, one line of code at a time</p>
         <div className="flex justify-center">
         <Image src="/mission-image.jpg" alt="Our Mission" width={400} height={300} className="rounded-lg"/> 
         </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Team</h3>
            <p className="text-gray-600">A diverse group of passionate individuals working together to achive greatness</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
           <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Values</h3> 
           <ul className="list-disc list-inside text-gray-600">
            <li>Innovation</li>
            <li>Collaboration</li>
            <li>Integrty</li>
            <li>Excellence</li>
           </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
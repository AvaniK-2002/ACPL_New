import React from 'react'
import {useState} from 'react'
function Form() {

    // Move options and selected state here so the form can access them
      const options: string[] = [
        "Software Development",
        "E-Learning",
        "Corporate training",
      ];
      const [selected, setSelected] = useState<string>("");
    
  return (
    <div>
      <section className="bg-gradient-to-b from-[#f7f9fc] to-[#d9f0fa] py-0 px-6 md:px-12 lg:px-20">
  <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[400px]">
    
    {/* Left Side - Form */}
    <div className="flex flex-col justify-center p-12 bg-gradient-to-b from-[#f7f9fc] to-[#d9f0fa]">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Ready to Build Smarter Solutions?
      </h2>

      {/* Form Fields */}
      <form className="space-y-4 w-100 mx-auto">
        {/* Full Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1 text-sm">
            Full Name *
          </label>
          <input
            type="text"
            required
            className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-gray-700 font-medium mb-1 text-sm">
            Contact Number *
          </label>
          <input
            type="tel"
            required
            placeholder="+91 9876543210"
            className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-1 text-sm">
            Email ID *
          </label>
          <input
            type="email"
            required
            className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        {/* Budget Dropdown */}
        <div>
          <label className="block text-gray-700 font-medium mb-1 text-sm">
            I’m willing to spend *
          </label>
          <select
            required
            className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <option value="">-- Select Budget --</option>
            <option value="0-1 lac">0 - 1 Lac</option>
            <option value="1-2 lac">1 - 2 Lac</option>
            <option value="3-4 lac">3 - 4 Lac</option>
            <option value="4 lac plus">4 Lac Plus</option>
          </select>
        </div>

        {/* Enquiry For */}
        <div className="mb-6">
          <p className="font-medium text-gray-800 mb-3">Enquiry For</p>
          <div className="grid grid-cols-2 gap-4">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setSelected(option)}
                className={`px-4 py-2 rounded-full shadow-md text-sm transition-colors ${
                  selected === option
                    ? "bg-sky-500 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <div>
  <label className="block text-gray-700 font-medium mb-1 text-sm">
    Message
  </label>
  <textarea
    rows={5}
    placeholder="Write your message here..."
    className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
  ></textarea>
</div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 rounded-md shadow-md transition text-sm"
        >
          Send Message
        </button>
      </form>
    </div>

    {/* Right Side - Image */}
    <div className="hidden lg:block h-full">
      <img
        src="/img/Group 23.png"
        alt="AI illustration"
        className="w-full h-full object-cover ml-20"
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default Form;

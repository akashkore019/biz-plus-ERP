import React from 'react';

const testimonials = [
  {
    quote: "BizPlus ERP has transformed how we manage our business. The insights we get are invaluable.",
    author: "John Smith",
    role: "CEO",
    company: "TechCorp"
  },
  {
    quote: "The cloud-based access has made our remote work transition seamless. Highly recommended!",
    author: "Sarah Johnson",
    role: "Operations Director",
    company: "Innovate Inc"
  },
  {
    quote: "Customer support is exceptional. They're always there when we need them.",
    author: "Michael Brown",
    role: "IT Manager",
    company: "Global Solutions"
  }
];

function TestimonialCard({ quote, author, role, company }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex mb-4">
        <div className="flex-shrink-0">
          <svg className="h-8 w-8 text-blue-500" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
        </div>
        <div className="ml-4">
          <p className="text-gray-600 mb-4">{quote}</p>
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 font-semibold">
                {author.charAt(0)}
              </span>
            </div>
            <div className="ml-3">
              <h4 className="font-semibold text-gray-900">{author}</h4>
              <p className="text-gray-500 text-sm">
                {role}, {company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Happy Clients</h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
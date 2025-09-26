import React from "react";
import { Element } from "react-scroll";

// Example testimonials data and Testimonial component
const testimonials = [
  {
    quote: "This is a great testimonial.",
    name: "Jane Doe",
    title: "Software Engineer at ExampleCorp",
    image: "https://via.placeholder.com/48",
  },
];

const Testimonial = ({ quote, name, title, image }) => (
  <div className="bg-white dark:bg-gray-700 rounded-xl shadow p-6 flex flex-col items-start">
    <div className="mb-4 text-gray-700 dark:text-gray-200 italic">"{quote}"</div>
    <div className="flex items-center mt-auto">
      {image && (
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full mr-3 border-2 border-primary-600 dark:border-primary-400"
        />
      )}
      <div>
        <div className="font-semibold text-gray-900 dark:text-gray-100">{name}</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">{title}</div>
      </div>
    </div>
  </div>
);

export const Testimonials = () => (
  <Element name="testimonials">
+ <section id="testimonials" className="py-24 scroll-mt-24 md:scroll-mt-28 bg-gray-50 dark:bg-gray-800">      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  </Element>
);


import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Harish demonstrated exceptional problem-solving skills and innovative thinking during our AI hackathon. His approach to machine learning challenges was both creative and technically sound.",
      author: "Dr. Sarah Johnson",
      role: "AI Research Director",
      company: "Tredence Analytics",
      rating: 5
    },
    {
      quote: "The conversational PDF query system developed by Harish revolutionized how our team processes research documents. His technical expertise in NLP is truly impressive.",
      author: "Prof. Michael Chen",
      role: "Computer Science Faculty",
      company: "SASTRA University",
      rating: 5
    },
    {
      quote: "Harish's leadership in competitive programming and his mentorship through the Omega program has significantly elevated our students' algorithmic thinking capabilities.",
      author: "Dr. Priya Sharma",
      role: "Head of Department",
      company: "ACE Club, SASTRA",
      rating: 5
    },
    {
      quote: "Working with Harish on the diabetes prediction model was enlightening. His systematic approach to machine learning and attention to healthcare applications shows great promise.",
      author: "Dr. James Wilson",
      role: "Healthcare Analytics Specialist",
      company: "Medical AI Solutions",
      rating: 5
    }
  ];

  const achievements = [
    {
      title: "1st Place Winner",
      description: "DAKSH Workshops AI Challenge",
      year: "2023"
    },
    {
      title: "Top 12 Finalist",
      description: "Tredence Infinity AI Hackathon",
      year: "2024"
    },
    {
      title: "Gold Medal",
      description: "MSSC Sports & Basketball Tournament",
      year: "2020"
    },
    {
      title: "9.0+ SGPA",
      description: "Consistent Academic Excellence",
      year: "5 Semesters"
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-elegant-white">
      <div className="content-width section-padding">
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-display-sm text-elegant-charcoal mb-6">
            What People Say
          </h2>
          <p className="text-lg text-elegant-gray-600 max-w-3xl mx-auto">
            Testimonials from faculty, industry professionals, and collaborators who have 
            witnessed my technical expertise and leadership capabilities.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-elegant animate-fade-in">
              <div className="mb-6">
                <Quote className="w-8 h-8 text-elegant-gray-300 mb-4" />
                <p className="text-elegant-gray-700 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-elegant-charcoal">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-elegant-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-elegant-gray-700">
                    {testimonial.company}
                  </div>
                </div>
                
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-elegant-charcoal text-elegant-charcoal" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="max-w-5xl mx-auto">
          <h3 className="font-display font-semibold text-2xl text-elegant-charcoal mb-12 text-center">
            Key Achievements & Recognition
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 card-elegant animate-slide-in">
                <div className="font-bold text-lg text-elegant-charcoal mb-2">
                  {achievement.title}
                </div>
                <div className="text-sm text-elegant-gray-600 mb-2">
                  {achievement.description}
                </div>
                <div className="text-xs text-elegant-gray-700 font-medium">
                  {achievement.year}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Recognition */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="card-elegant">
            <h3 className="font-display font-semibold text-xl text-elegant-charcoal mb-4">
              Research Contribution
            </h3>
            <p className="text-elegant-gray-700 leading-relaxed">
              Published research on "Block-Based Separable Reversible Data Hiding Using Homomorphic Encryption" 
              contributing to advances in secure data concealment and privacy preservation in encrypted images.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

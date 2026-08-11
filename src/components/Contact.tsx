
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "harishnarasimhan0135@gmail.com",
      href: "mailto:harishnarasimhan0135@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8838408213",
      href: "tel:+918838408213"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Madurai, Tamil Nadu",
      secondary: "Plot No. 4, Erikarai St., Velmurugan Nagar"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/HarishNarasimhanK",
      username: "HarishNarasimhanK"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/harish-narasimhan-k-17ba45254/",
      username: "harish-narasimhan-k"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://x.com/HarishK86889090",
      username: "@HarishK86889090"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-elegant-light">
      <div className="content-width section-padding">
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-display-sm text-elegant-charcoal mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-elegant-gray-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, innovative projects, 
            or potential collaborations in AI and machine learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="font-display font-semibold text-2xl text-elegant-charcoal mb-8">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="p-3 bg-elegant-white rounded-lg shadow-sm">
                        <IconComponent className="w-5 h-5 text-elegant-charcoal" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-elegant-charcoal">
                          {method.label}
                        </div>
                        {method.href ? (
                          <a 
                            href={method.href}
                            className="text-elegant-gray-600 hover:text-elegant-charcoal transition-colors duration-300"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <div className="text-elegant-gray-600">{method.value}</div>
                        )}
                        {method.secondary && (
                          <div className="text-sm text-elegant-gray-700 mt-1">
                            {method.secondary}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-lg text-elegant-charcoal mb-4">
                Connect on Social Media
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 bg-elegant-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                    >
                      <IconComponent className="w-5 h-5 text-elegant-charcoal group-hover:text-elegant-gray-600" />
                      <div>
                        <div className="font-medium text-elegant-charcoal">{social.label}</div>
                        <div className="text-sm text-elegant-gray-600">{social.username}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in">
            <div className="card-elegant">
              <h3 className="font-display font-semibold text-2xl text-elegant-charcoal mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-elegant-charcoal mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-elegant-gray-200 rounded-lg focus:ring-2 focus:ring-elegant-charcoal focus:border-elegant-charcoal transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-elegant-charcoal mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-elegant-gray-200 rounded-lg focus:ring-2 focus:ring-elegant-charcoal focus:border-elegant-charcoal transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-elegant-charcoal mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-elegant-gray-200 rounded-lg focus:ring-2 focus:ring-elegant-charcoal focus:border-elegant-charcoal transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-elegant-charcoal mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-elegant-gray-200 rounded-lg focus:ring-2 focus:ring-elegant-charcoal focus:border-elegant-charcoal transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-elegant-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

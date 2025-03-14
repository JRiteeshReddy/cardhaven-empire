
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center slide-up">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">About CardsForYou</h1>
            <p className="text-xl text-gray-600 mb-8">
              Your premier destination for high-quality trading cards.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="slide-up">
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  CardsForYou was founded in 2018 by a group of passionate card collectors who wanted to create a premium destination for trading card enthusiasts.
                </p>
                <p className="text-gray-600 mb-4">
                  What started as a small online shop has grown into a trusted source for collectors and players around the world, offering authentic, high-quality cards from popular franchises.
                </p>
                <p className="text-gray-600">
                  Our team personally verifies the authenticity and condition of every card we sell, ensuring that our customers receive only the best products for their collections.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-card transition-transform duration-500 hover:scale-[1.02] slide-up delay-2">
                <img
                  src="https://images.unsplash.com/photo-1627856013562-41b4b5f5bdb5?q=80&w=1600&auto=format&fit=crop"
                  alt="Team of card collectors"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center slide-up">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At CardsForYou, our mission is to provide collectors and players with access to authentic trading cards in pristine condition. We aim to foster a community where enthusiasts can share their passion and find the cards they've been searching for.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Authenticity",
                  description: "We guarantee the authenticity of every card we sell, protecting our customers from counterfeits.",
                },
                {
                  title: "Quality",
                  description: "Our team carefully inspects and grades each card to ensure it meets our high standards.",
                },
                {
                  title: "Community",
                  description: "We strive to build a community of collectors who share knowledge and passion for trading cards.",
                },
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-6 rounded-2xl shadow-sm slide-up"
                  style={{ animationDelay: `${index * 100 + 300}ms` }}
                >
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 slide-up">
            <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600">
              Our dedicated team of card enthusiasts is committed to providing you with the best trading card experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
                bio: "Alex has been collecting cards since childhood and founded CardsForYou to share his passion with others.",
              },
              {
                name: "Sarah Chen",
                role: "Card Specialist",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
                bio: "Sarah is our expert on rare and limited edition cards, with over 10 years of experience in card grading.",
              },
              {
                name: "Michael Rodriguez",
                role: "Community Manager",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
                bio: "Michael organizes our community events and ensures customers have the best possible experience.",
              },
            ].map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-card transition-all duration-300 hover:shadow-card-hover slide-up"
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container px-4 text-center">
          <div className="max-w-3xl mx-auto slide-up">
            <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
            <p className="text-white/80 mb-8">
              Become a member today to receive exclusive offers, early access to new
              releases, and join our community of card enthusiasts.
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 button-effect"
              asChild
            >
              <Link to="/join-contact">Become a Member</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

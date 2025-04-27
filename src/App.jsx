import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import { useSpring } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import "remixicon/fonts/remixicon.css";

// Data
import gameFAQs from "./gameFAQs";
import gameSubscriptions from "./gameSubscriptions";

// Icons
import { Plus } from "lucide-react";
import { Check } from "lucide-react";

// Assets
import Testimonials1 from "./assets/Testimonial1.png";
import Testimonials2 from "./assets/Testimonial2.png";
import Testimonials3 from "./assets/Testimonial3.png";

const App = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 40,
    restDelta: 0.002,
  });

  return (
    <main className="w-full h-full text-stone-800 bg-amber-50 font-[Boldonse]">
      {/* Navbar Section */}
      <nav className="w-full p-4 px-6 md:p-6 lg:p-8 xl:p-4 xl:px-12 flex items-center justify-between relative border-b-2 border-stone-800">
        {/* Brand Logo */}
        <h2
          className={`text-xl font-semibold z-50 transition-colors duration-200 ${
            navOpen ? "text-amber-50" : "text-stone-800"
          }`}
        >
          100Cr.
        </h2>

        {/* Nav Menu */}
        <div
          onClick={() => setNavOpen(!navOpen)}
          className={`p-4 px-2.5 rounded-full flex flex-col gap-2 z-50 transition-colors duration-200 ${
            navOpen ? "bg-amber-50" : "bg-stone-800"
          }`}
        >
          <div
            className={`w-6 h-[0.8px] transition-transform duration-200 ${
              navOpen
                ? "rotate-[405deg] translate-y-1 bg-stone-800"
                : "bg-amber-50"
            }`}
          ></div>
          <div
            className={`w-6 h-[0.8px] transition-transform duration-200 ${
              navOpen
                ? "-rotate-[405deg] -translate-y-1 bg-stone-800"
                : "bg-amber-50"
            }`}
          ></div>
        </div>

        {/* Nav Links */}
        <div
          className={`w-full h-screen text-lg fixed inset-0 flex flex-col gap-4 items-center justify-center text-amber-50 bg-stone-800 transition-transform duration-200 ${
            navOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Mechanism</a>
          <a href="">Subscription</a>
          <a href="">Testimonials</a>
          <a href="">FAQs</a>
          <a href="">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full pt-12 p-6 flex flex-col gap-6 items-center">
        <h2 className="text-lg text-center">
          The ₹100 Crore Game. <br /> A real—life financial challenge.
        </h2>
        <p className="text-sm text-center leading-relaxed text-stone-600">
          This ain't Netflix. It's your shortcut to financial freedom—play
          smart, earn fast, and win big.
        </p>
        <button className="p-4 px-6 text-xs rounded-xl text-amber-50 bg-stone-800">
          Enter the Game
        </button>
      </section>

      {/* Trailer Section */}
      <section className="w-full pt-12 p-6 flex items-center">
        <video
          src=""
          className="w-full h-[25vh] rounded-xl object-cover bg-stone-600"
        ></video>
      </section>

      {/* About Section */}
      <section className="w-full pt-12 p-6 flex flex-col gap-6 items-start">
        <h2 className="text-xl capitalize">About The Game</h2>
        <p className="text-sm leading-relaxed text-stone-600">
          The ₹100 Crore Game is not a course, it's a real-life challenge.
          <br />
          <br />
          You start at ₹0 and level up by building skills, making money, and
          beating real-world challenges. It's like playing a game—but every win
          grows your bank account.
          <br />
          <br />
          Join thousands leveling up their income, one move at a time.
        </p>
        <button className="p-4 px-6 text-xs rounded-xl text-amber-50 bg-stone-800">
          Join the Game
        </button>
      </section>

      {/* Mechanism Section */}
      <section className="w-full pt-12 p-6 flex flex-col gap-6 items-start">
        <h2 className="text-xl capitalize">How It Works?</h2>
        <p className="text-sm leading-relaxed text-stone-600">
          I'm on a 7-year mission to make ₹100 crore from scratch. No money, no
          safety net—just skills, hustle, and the internet.
          <br />
          <br />
          And here's the twist:
          <br />
          You get to watch, learn, and play along.
        </p>
        <div ref={containerRef} className="w-full flex gap-4">
          <div className="w-[5%] flex relative items-center flex-col">
            <div className="w-[4px] h-full rounded-xl absolute top-0 bg-stone-400" />
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="w-[4px] h-full rounded-xl absolute top-0 bg-stone-600"
            />
          </div>
          <div className="w-[95%] flex flex-col gap-6">
            <p className="text-sm leading-relaxed text-stone-600">
              🚀 I document every move—what I build, sell, fail, and win.
              <br />
              <br />
              💸 You learn the exact steps I use to make money from zero.
              <br />
              <br />
              🎯 Every level (₹0 → ₹1K → ₹10K → ₹1L → ₹1Cr and beyond) brings
              bigger challenges, strategies, and systems.
              <br />
              <br />
              🔥 I share it all—for free. You watch it like a show, but apply it
              like a blueprint.
              <br />
              <br />
              👥 Want more? Join the community, complete challenges, and earn
              your first ₹1K, ₹10K, or even more—just by following what works.
              <br />
              <br />⚡ And when you're ready to stop watching and start earning
              serious money, the Side Quest and Inner Circle take you deeper.
            </p>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-stone-600">
          This is not a course. It's a money-making experience.
          <br />
          <br />
          I'm playing to reach ₹100 Cr. You're playing to reach your own next
          level.
        </p>
        <button className="p-4 px-6 text-xs rounded-xl text-amber-50 bg-stone-800">
          Let's Go—PLAYYY!
        </button>
      </section>

      {/* Subscription Section */}
      <section className="w-full pt-12 p-6 flex flex-col gap-6 items-start">
        <h2 className="text-xl capitalize">Pick Your Path</h2>
        <p className="text-sm leading-relaxed text-stone-600">
          You can watch for free — but winners play differently.
          <br />
          <br />
          If you want faster growth, real community, and proven strategies,
          level up with these options:
        </p>
        <div className="w-full h-full flex flex-col gap-6">
          {gameSubscriptions.map((subscription) => (
            <div
              key={subscription.id}
              className="w-full p-6 flex flex-col gap-6 rounded-xl border-2 border-r-4 border-b-4 border-stone-600 text-stone-600"
            >
              <h2 className="text-lg underline">{subscription.name}</h2>
              <div className="flex flex-col gap-4">
                {subscription.benefits.map((benefit) => (
                  <div className="w-full text-sm leading-relaxed flex gap-2">
                    <p className="pt-0.5">
                      <Check size={18} />
                    </p>
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
              <button className="p-4 px-6 text-xs rounded-xl border-2 border-r-4 border-b-4 border-stone-600">
                {subscription.price}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full pt-12 p-6 flex flex-col gap-6 items-start">
        <h2 className="text-xl leading-relaxed capitalize">
          Receipts Don't Lie
        </h2>
        <p className="text-sm leading-relaxed text-stone-600">
          Join thousands of players who turned ideas into income.
          <br />
          <br />
          Your story could be next.
        </p>
        <div className="w-full h-full flex flex-col gap-6">
          <img src={Testimonials1} alt="" className="rounded-xl" />
          <img src={Testimonials2} alt="" className="rounded-xl" />
          <img src={Testimonials3} alt="" className="rounded-xl" />
        </div>
      </section>

      {/* FAQs Section */}
      <section className="w-full pt-12 p-6 flex flex-col gap-6 items-start">
        <h2 className="text-xl leading-relaxed capitalize">Still Thinking?</h2>
        <p className="text-sm leading-relaxed text-stone-600">
          Got questions? Good. That means you're serious.
          <br />
          <br />
          No confusion. Just clear moves.
        </p>
        <div className="w-full h-full flex flex-col gap-6">
          {gameFAQs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 rounded-xl border-2 border-r-4 border-b-4 border-stone-600 text-stone-600"
              >
                <div className="flex gap-6 justify-between items-center">
                  <p className="text-sm leading-relaxed">{faq.question}</p>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Plus size={20} />
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-6 text-xs leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full pt-12 p-6 flex flex-col gap-6 items-start">
        <h2 className="text-xl capitalize">Questions? Hit Us Up!</h2>
        <p className="text-sm leading-relaxed text-stone-600">
          We're just one message away from helping you start your game.
          <br />
          <br />
          DM{" "}
          <a
            href="https://www.instagram.com/the100croregame/"
            target="_blank"
            className="text-stone-800"
          >
            @the100croregame
          </a>{" "}
          or email{" "}
          <a
            href="mailto:support@the100croregame.com"
            target="_blank"
            className="text-stone-800"
          >
            support@the100croregame.com
          </a>
        </p>
        <div className="flex gap-2 items-center">
          <a
            href="https://www.instagram.com/the100croregame/"
            target="_blank"
            className="p-4 px-6 text-xs rounded-xl text-amber-50 bg-stone-800"
          >
            DM on Instagram
          </a>
          <a
            href="mailto:support@the100croregame.com"
            target="_blank"
            className="p-4 px-6 text-xs rounded-xl border-2 border-stone-800 text-stone-800"
          >
            Send Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full mt-12 pt-12 p-6 flex gap-6 flex-col text-amber-50 bg-stone-800">
        {/* Brand Logo */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">100Cr.</h2>
          <p className="text-sm leading-relaxed">
            Built with big dreams & bigger hustle.
          </p>
        </div>

        {/* Footer Links */}
        <div className="w-full flex flex-wrap">
          <div className="w-1/2 flex flex-col gap-4">
            <h2 className="text-lg underline">Quick Links</h2>
            <div className="w-full text-sm flex flex-col gap-2">
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Mechanism</a>
              <a href="">Subscription</a>
              <a href="">Testimonials</a>
              <a href="">FAQs</a>
              <a href="">Contact</a>
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <h2 className="text-lg underline">Social Links</h2>
            <div className="w-full text-sm flex flex-col gap-2">
              <a
                href="mailto:support@the100croregame.com"
                target="_blank"
                className="flex gap-2 items-center"
              >
                <i class="ri-mail-line"></i>
                <span>Send an Email</span>
              </a>
              <a
                href="https://www.instagram.com/the100croregame/"
                target="_blank"
                className="flex gap-2 items-center"
              >
                <i class="ri-instagram-line"></i>
                <span>Follow on IG</span>
              </a>
              <a
                href="https://www.youtube.com/@the100croregame"
                target="_blank"
                className="flex gap-2 items-center"
              >
                <i class="ri-youtube-line"></i>
                <span>Subscribe on YT</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Trademark */}
        <div className="w-full pt-6 border-t-2 border-amber-50">
          <p className="text-xs text-center leading-relaxed">
            © 2025 The ₹100 Crore Game. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default App;

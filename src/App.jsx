import { useRef } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import { useSpring } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import { Pagination } from "swiper/modules";
import "remixicon/fonts/remixicon.css";
import "swiper/css";
import "swiper/css/pagination";

// Data
import gameFAQs from "./gameFAQs";
import gameSubscriptions from "./gameSubscriptions";

// Icons
import { Play } from "lucide-react";
import { Plus } from "lucide-react";
import { Check } from "lucide-react";

// Assets
import Trailer from "./assets/Trailer.png";
import Testimonial1 from "./assets/Testimonial1.png";
import Testimonial2 from "./assets/Testimonial2.png";
import Testimonial3 from "./assets/Testimonial3.png";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  const scrollToSection = useCallback((id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

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
      <nav className="w-full p-4 px-6 md:p-4 md:px-12 lg:px-20 xl:p-6 xl:px-24 flex items-center justify-between relative border-b-2 border-stone-800 z-40">
        {/* Brand Logo */}
        <h2
          className={`text-xl lg:text-2xl font-semibold z-50 transition-colors duration-200 ${
            navOpen ? "text-amber-50" : "text-stone-800"
          }`}
        >
          100Cr.
        </h2>

        {/* Nav Links: XL */}
        <div className={`text-base hidden xl:flex gap-6`}>
          <span
            onClick={() => {
              scrollToSection("#Hero");
            }}
          >
            Home
          </span>
          <span
            onClick={() => {
              scrollToSection("#About");
            }}
          >
            About
          </span>
          <span
            onClick={() => {
              scrollToSection("#Mechanism");
            }}
          >
            Mechanism
          </span>
          <span
            onClick={() => {
              scrollToSection("#Subscription");
            }}
          >
            Subscription
          </span>
          <span
            onClick={() => {
              scrollToSection("#Testimonials");
            }}
          >
            Testimonials
          </span>
          <span
            onClick={() => {
              scrollToSection("#FAQs");
            }}
          >
            FAQs
          </span>
          <span
            onClick={() => {
              scrollToSection("#Contact");
            }}
          >
            Contact
          </span>
        </div>

        {/* Nav Menu */}
        <div
          onClick={() => setNavOpen(!navOpen)}
          className={`p-4 px-2.5 lg:p-5 lg:px-3.5 rounded-full flex flex-col gap-2 xl:hidden z-50 transition-colors duration-200 ${
            navOpen ? "bg-amber-50" : "bg-stone-800"
          }`}
        >
          <div
            className={`w-6 h-[1.5px] transition-transform duration-200 ${
              navOpen
                ? "rotate-[405deg] translate-y-1 bg-stone-800"
                : "bg-amber-50"
            }`}
          ></div>
          <div
            className={`w-6 h-[1.5px] transition-transform duration-200 ${
              navOpen
                ? "-rotate-[405deg] -translate-y-1.5 bg-stone-800"
                : "bg-amber-50"
            }`}
          ></div>
        </div>

        {/* Nav Links */}
        <div
          className={`w-full h-screen text-lg lg:text-2xl fixed inset-0 flex flex-col gap-4 items-center justify-center text-amber-50 bg-stone-800 transition-transform duration-200 ${
            navOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <span
            onClick={() => {
              setNavOpen(!navOpen);
              scrollToSection("#Hero");
            }}
          >
            Home
          </span>
          <span
            onClick={() => {
              setNavOpen(!navOpen);
              scrollToSection("#About");
            }}
          >
            About
          </span>
          <span
            onClick={() => {
              setNavOpen(!navOpen);
              scrollToSection("#Mechanism");
            }}
          >
            Mechanism
          </span>
          <span
            onClick={() => {
              setNavOpen(!navOpen);
              scrollToSection("#Subscription");
            }}
          >
            Subscription
          </span>
          <span
            onClick={() => {
              setNavOpen(!navOpen);
              scrollToSection("#Testimonials");
            }}
          >
            Testimonials
          </span>
          <span
            onClick={() => {
              setNavOpen(!navOpen);
              scrollToSection("#FAQs");
            }}
          >
            FAQs
          </span>
          <span
            onClick={() => {
              setNavOpen(!navOpen);
              scrollToSection("#Contact");
            }}
          >
            Contact
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="Hero"
        className="w-full pt-14 xl:pt-20 p-6 md:px-12 lg:px-20 flex flex-col gap-6 lg:gap-8 items-center"
      >
        <h2 className="text-lg lg:text-2xl xl:text-5xl text-center leading-loose xl:leading-normal">
          The ₹100 Crore Game. <br /> A real—life financial challenge.
        </h2>
        <p className="xl:w-[60%] md:px-12 lg:px-20 text-sm lg:text-lg text-center leading-loose text-stone-600">
          This ain't Netflix. It's your shortcut to financial freedom—play
          smart, earn fast, and win big.
        </p>
        <button
          onClick={() => scrollToSection("#Subscription")}
          className="p-4 px-6 xl:px-8 text-xs lg:text-base rounded-xl text-amber-50 bg-stone-800"
        >
          Enter the Game
        </button>
      </section>

      {/* Trailer Section */}
      <section className="w-full pt-12 xl:pt-16 p-6 md:px-12 lg:px-20 xl:px-48 flex items-center justify-center">
        <div className="relative w-full">
          <video
            src=""
            poster={Trailer}
            className="w-full h-fit rounded-xl object-cover bg-stone-400"
          ></video>

          <button
            className="absolute inset-0 flex items-center justify-center"
            onClick={() => {
              const video = document.querySelector("video");
              video?.play();
            }}
          >
            <Play className="w-14 h-14 xl:w-16 xl:h-16 text-white bg-black bg-opacity-50 rounded-full p-4 hover:bg-opacity-75 transition" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        id="About"
        className="w-full pt-12 xl:pt-16 p-6 md:px-12 lg:px-20 xl:px-48 flex flex-col gap-6 lg:gap-8 items-start"
      >
        <h2 className="text-xl lg:text-2xl xl:text-3xl capitalize">
          About The Game
        </h2>
        <p className="text-sm lg:text-lg xl:text-lg leading-loose lg:leading-loose text-stone-600">
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
        <button
          onClick={() => scrollToSection("#Subscription")}
          className="p-4 px-6 xl:px-8 text-xs lg:text-base rounded-xl text-amber-50 bg-stone-800"
        >
          Join the Game
        </button>
      </section>

      {/* Mechanism Section */}
      <section
        id="Mechanism"
        className="w-full pt-12 xl:pt-16 p-6 md:px-12 lg:px-20 xl:px-48 flex flex-col gap-6 lg:gap-8 items-start"
      >
        <h2 className="text-xl lg:text-2xl xl:text-3xl capitalize">
          How It Works?
        </h2>
        <p className="text-sm lg:text-lg xl:text-lg leading-loose lg:leading-loose text-stone-600">
          I'm on a 7-year mission to make ₹100 crore from scratch. No money, no
          safety net—just skills, hustle, and the internet.
          <br />
          <br />
          And here's the twist:
          <br />
          You get to watch, learn, and play along.
        </p>
        <div ref={containerRef} className="w-full flex gap-4">
          <div className="w-[5%] xl:w-[2%] flex relative items-center flex-col">
            <div className="w-[4px] xl:w-[6px] h-full rounded-xl absolute top-0 bg-stone-400" />
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="w-[4px] xl:w-[6px] h-full rounded-xl absolute top-0 bg-stone-600"
            />
          </div>
          <div className="w-[95%] xl:w-[98%] flex flex-col gap-6">
            <p className="text-sm lg:text-lg xl:text-lg leading-loose lg:leading-loose text-stone-600">
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
        <p className="text-sm lg:text-lg xl:text-lg leading-loose lg:leading-loose text-stone-600">
          This is not a course. It's a money-making experience.
          <br />
          <br />
          I'm playing to reach ₹100 Cr. You're playing to reach your own next
          level.
        </p>
        <button
          onClick={() => scrollToSection("#Subscription")}
          className="p-4 px-6 xl:px-8 text-xs lg:text-base rounded-xl text-amber-50 bg-stone-800"
        >
          Let's Go—PLAYYY!
        </button>
      </section>

      {/* Subscription Section */}
      <section
        id="Subscription"
        className="w-full pt-12 xl:pt-16 p-6 md:px-12 lg:px-20 xl:px-48 flex flex-col gap-6 lg:gap-8 items-start relative" // Added relative here
      >
        <h2 className="text-xl lg:text-2xl xl:text-3xl capitalize">
          Pick Your Path
        </h2>
        <p className="text-sm lg:text-lg xl:text-lg leading-loose lg:leading-loose text-stone-600">
          You can watch for free — but winners play differently.
          <br />
          <br />
          If you want faster growth, real community, and proven strategies,
          level up with these options:
        </p>

        <div className="w-full pb-6">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
              el: ".subscription-pagination",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            modules={[Pagination]}
          >
            {gameSubscriptions.map((subscription) => (
              <SwiperSlide key={subscription.id}>
                <div className="h-full p-6 lg:p-8 flex flex-col gap-6 rounded-xl border-2 border-r-4 border-b-4 border-stone-600 text-stone-600">
                  <div className="flex flex-col gap-6 flex-grow">
                    <h2 className="text-lg lg:text-lg underline">
                      {subscription.name}
                    </h2>
                    <div className="flex flex-col gap-4">
                      {subscription.benefits.map((benefit, index) => (
                        <div
                          key={index}
                          className="w-full text-sm lg:text-sm leading-loose lg:leading-loose flex gap-2"
                        >
                          <p className="pt-0.5 lg:p-0">
                            <Check size={18} className="lg:size-6" />
                          </p>
                          <p>{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button className="mt-auto p-4 px-6 text-xs lg:text-sm rounded-xl border-2 border-r-4 border-b-4 border-stone-600 w-full">
                    {subscription.price}
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination */}
          <div className="subscription-pagination absolute bottom-0 left-0 right-0 flex justify-center gap-0.5"></div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="Testimonials"
        className="w-full pt-12 xl:pt-16 p-6 md:px-12 lg:px-20 xl:px-48 flex flex-col gap-6 lg:gap-8 items-start"
      >
        <h2 className="text-xl lg:text-2xl xl:text-3xl capitalize">
          Receipts Don't Lie
        </h2>
        <p className="text-sm lg:text-lg xl:text-lg leading-loose lg:leading-loose text-stone-600">
          Join thousands of players who turned ideas into income.
          <br />
          <br />
          Your story could be next.
        </p>
        <div className="w-full rounded-xl overflow-x-auto">
          <div
            className="flex gap-6 lg:gap-8"
            style={{ minWidth: "max-content" }}
          >
            <img
              src={Testimonial1}
              alt=""
              className="w-[300px] rounded-xl flex-shrink-0"
            />
            <img
              src={Testimonial2}
              alt=""
              className="w-[300px] rounded-xl flex-shrink-0"
            />
            <img
              src={Testimonial3}
              alt=""
              className="w-[300px] rounded-xl flex-shrink-0"
            />
            {/* Add more images if needed */}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section
        id="FAQs"
        className="w-full pt-12 xl:pt-16 p-6 md:px-12 lg:px-20 xl:px-48 flex flex-col gap-6 lg:gap-8 items-start"
      >
        <h2 className="text-xl lg:text-2xl xl:text-3xl capitalize">
          Still Thinking?
        </h2>
        <p className="text-sm lg:text-lg xl:text-lg leading-loose lg:leading-loose text-stone-600">
          Got questions? Good. That means you're serious.
          <br />
          <br />
          No confusion. Just clear moves.
        </p>
        <div className="w-full h-full flex flex-col gap-6 lg:gap-8">
          {gameFAQs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 lg:p-8 rounded-xl border-2 border-r-4 border-b-4 border-stone-600 text-stone-600"
              >
                <div className="flex gap-6 justify-between items-center">
                  <p className="text-sm lg:text-lg xl:text-lg leading-loose lg:leading-loose">
                    {faq.question}
                  </p>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Plus size={20} className="lg:size-8" />
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
                      <p className="pt-6 text-xs lg:text-base leading-loose lg:leading-loose text-stone-500">
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
      <section
        id="Contact"
        className="w-full pt-12 xl:pt-16 p-6 md:px-12 lg:px-20 xl:px-48 flex flex-col gap-6 lg:gap-8 items-start"
      >
        <h2 className="text-xl lg:text-2xl xl:text-3xl capitalize">
          Questions? Hit Us Up!
        </h2>
        <p className="text-sm lg:text-lg xl:text-lg leading-loose lg:leading-loose text-stone-600">
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
        <div className="flex gap-2 xl:gap-4 items-center">
          <a
            href="https://www.instagram.com/the100croregame/"
            target="_blank"
            className="p-4 px-6 xl:px-8 text-xs xl:text-base text-center rounded-xl text-amber-50 bg-stone-800"
          >
            DM on Instagram
          </a>
          <a
            href="mailto:support@the100croregame.com"
            target="_blank"
            className="p-4 px-6 xl:px-8 text-xs xl:text-base text-center rounded-xl border-2 border-stone-800 text-stone-800"
          >
            Send Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full mt-12 pt-12 xl:pt-16 p-6 md:px-12 lg:px-20 xl:px-48 flex gap-6 md:gap-8 flex-col text-amber-50 bg-stone-800">
        {/* Brand Logo */}
        <div className="flex flex-col gap-2 xl:gap-4">
          <h2 className="text-xl xl:text-2xl font-semibold">100Cr.</h2>
          <p className="text-sm xl:text-lg leading-loose">
            Built with big dreams & bigger hustle.
          </p>
        </div>

        {/* Footer Links */}
        <div className="w-full flex flex-wrap">
          <div className="w-1/2 flex flex-col gap-4 md:gap-6">
            <h2 className="text-lg xl:text-xl underline">Quick Links</h2>
            <div className="w-full text-sm xl:text-base flex flex-col gap-2">
              <span onClick={() => scrollToSection("#Hero")}>Home</span>
              <span onClick={() => scrollToSection("#About")}>About</span>
              <span onClick={() => scrollToSection("#Mechanism")}>
                Mechanism
              </span>
              <span onClick={() => scrollToSection("#Subscription")}>
                Subscription
              </span>
              <span onClick={() => scrollToSection("#Testimonials")}>
                Testimonials
              </span>
              <span onClick={() => scrollToSection("#FAQs")}>FAQs</span>
              <span onClick={() => scrollToSection("#Contact")}>Contact</span>
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-4 md:gap-6">
            <h2 className="text-lg xl:text-xl underline">Social Links</h2>
            <div className="w-full text-sm xl:text-base flex flex-col gap-2">
              <a
                href="mailto:support@the100croregame.com"
                target="_blank"
                className="flex gap-2 items-center"
              >
                <i class="ri-mail-line text-lg xl:text-xl"></i>
                <span>Send an Email</span>
              </a>
              <a
                href="https://www.instagram.com/the100croregame/"
                target="_blank"
                className="flex gap-2 items-center"
              >
                <i class="ri-instagram-line text-lg xl:text-xl"></i>
                <span>Follow on IG</span>
              </a>
              <a
                href="https://www.youtube.com/@the100croregame"
                target="_blank"
                className="flex gap-2 items-center"
              >
                <i class="ri-youtube-line text-lg xl:text-xl"></i>
                <span>Subscribe on YT</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Trademark */}
        <div className="w-full pt-6 border-t-2 border-amber-50">
          <p className="text-xs xl:text-base text-center leading-loose">
            © 2025 The ₹100 Crore Game. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default App;

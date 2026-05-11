"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Utensils } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="largeSmall"
        background="none"
        cardStyle="subtle-shadow"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Our Story",
          id: "about",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Pizza Paradise"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Pizza Paradise"
      description="Authentic New York style pizza, crafted daily with the finest ingredients in the heart of the city."
      buttons={[
        {
          text: "View Menu",
          href: "#menu",
        },
        {
          text: "Contact Us",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/flat-lay-composition-with-hot-pepperoni-pizza-wooden-table_632805-19.jpg"
      imageAlt="hot fresh pepperoni pizza"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Story"
      title="A Slice of New York"
      description="Since our founding, we have dedicated ourselves to perfecting the NY-style thin crust. We bring tradition and taste to every table."
      subdescription="Come experience why we are the city's favorite slice."
      icon={Utensils}
      imageSrc="http://img.b2bpic.net/free-photo/confident-young-indian-man-black-shirt-sitting-pizzeria-with-pizza_627829-5493.jpg"
      imageAlt="pizza restaurant interior modern"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Classic Pepperoni",
          price: "$18",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-mushroom-pizza-with-cheese-marble_114579-15513.jpg",
        },
        {
          id: "p2",
          name: "Fresh Margherita",
          price: "$16",
          imageSrc: "http://img.b2bpic.net/free-photo/set-italian-food_23-2147772120.jpg",
        },
        {
          id: "p3",
          name: "Meat Lovers",
          price: "$22",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-pizza-arrangement_23-2149333837.jpg",
        },
        {
          id: "p4",
          name: "Garden Veggie",
          price: "$19",
          imageSrc: "http://img.b2bpic.net/free-photo/young-happy-girl-with-slice-pizza_1163-2265.jpg",
        },
        {
          id: "p5",
          name: "BBQ Chicken",
          price: "$20",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-hand-holding-sauce-bottle_23-2148773532.jpg",
        },
        {
          id: "p6",
          name: "Truffle Special",
          price: "$24",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-hand-holding-glass-bottle-oil-near-hot-pizza-marble-background_114579-38418.jpg",
        },
      ]}
      title="Our Menu"
      description="Browse our hand-selected range of classic and specialty pizzas."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Sarah J.",
          date: "Oct 2023",
          title: "Regular",
          quote: "The best thin crust in NYC, hands down.",
          tag: "Fan",
          avatarSrc: "http://img.b2bpic.net/free-photo/young-pretty-woman-eating-pizza-bar_1303-19913.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-composition-with-hot-pepperoni-pizza-wooden-table_632805-19.jpg",
          imageAlt: "happy customer eating pizza",
        },
        {
          id: "t2",
          name: "Mike D.",
          date: "Sept 2023",
          title: "Foodie",
          quote: "Flavorful ingredients and perfect crust.",
          tag: "Reviewer",
          avatarSrc: "http://img.b2bpic.net/free-photo/would-you-like-some-salad-dear_637285-12955.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/confident-young-indian-man-black-shirt-sitting-pizzeria-with-pizza_627829-5493.jpg",
          imageAlt: "happy customer eating pizza",
        },
        {
          id: "t3",
          name: "Emily R.",
          date: "Aug 2023",
          title: "Customer",
          quote: "Always fresh and hot. Great vibes.",
          tag: "Fan",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-man-black-suit_23-2148401442.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-mushroom-pizza-with-cheese-marble_114579-15513.jpg",
          imageAlt: "happy customer eating pizza",
        },
        {
          id: "t4",
          name: "David W.",
          date: "July 2023",
          title: "Visitor",
          quote: "Authentic NYC pizza at its finest.",
          tag: "Reviewer",
          avatarSrc: "http://img.b2bpic.net/free-photo/glad-smiling-woman-holds-tasty-pizza-indicates-with-thumb-aside-as-shows-place-where-she-bought-it-advertises-pizzeria-wears-red-bandana-white-shirt-isolated-yellow-wall_273609-28924.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/set-italian-food_23-2147772120.jpg",
          imageAlt: "happy customer eating pizza",
        },
        {
          id: "t5",
          name: "Chloe B.",
          date: "June 2023",
          title: "Local",
          quote: "Can't get enough of their pepperoni slice.",
          tag: "Fan",
          avatarSrc: "http://img.b2bpic.net/free-photo/cheerful-friends-sitting-cafe-eating-drinking-alcohol_171337-19735.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-pizza-arrangement_23-2149333837.jpg",
          imageAlt: "happy customer eating pizza",
        },
      ]}
      title="What Our Fans Say"
      description="Don't take our word for it — hear what our customers have to say about the Paradise experience."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "10k+",
          title: "Pizzas Served",
          items: [
            "Per Year",
            "Freshly Baked",
          ],
        },
        {
          id: "m2",
          value: "5+",
          title: "Years Open",
          items: [
            "Community Trust",
            "Local Pride",
          ],
        },
        {
          id: "m3",
          value: "100%",
          title: "Satisfaction",
          items: [
            "Customer Happiness",
            "Quality Ingredients",
          ],
        },
      ]}
      title="By The Numbers"
      description="What keeps us going every single day."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Do you offer delivery?",
          content: "Yes, we deliver within a 5-mile radius.",
        },
        {
          id: "f2",
          title: "Are you open for events?",
          content: "We handle catering and large events.",
        },
        {
          id: "f3",
          title: "Can I customize toppings?",
          content: "Absolutely! Build your own dream pizza.",
        },
      ]}
      title="Frequently Asked"
      description="Got questions? We've got answers."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Contact"
      title="Get in Touch"
      description="Want to order or ask about catering? Drop us a line."
      buttons={[
        {
          text: "Contact Us",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Pizza Paradise"
      columns={[
        {
          title: "Links",
          items: [
            {
              label: "Home",
              href: "#hero",
            },
            {
              label: "Menu",
              href: "#menu",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Pizza Paradise"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

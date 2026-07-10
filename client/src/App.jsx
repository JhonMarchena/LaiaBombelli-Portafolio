import React from "react";
import MainLayout from "./components/mainLayout";
import ScrollReveal from "./components/scrollReveal";

import { BagCarousel } from "./components/carousel";

//PAGES IMPORT
import HomePage from "./pages/home-page/homepage";
import CarouselArticles from "./pages/articles-page/carousel-articles";
import Articles from "./pages/articles-page/articles-slide";
import FashionShow from "./pages/fashion-show-page/fashionshow";
import AboutMe from "./pages/personal-data/aboutme";

function App() {
  return (
    <MainLayout>
      <section id="home">
        <HomePage />
      </section>
      <section id="carousel-articles">
        <CarouselArticles />
      </section>
      <section id="fashion-show">
        <ScrollReveal>
          <FashionShow />
        </ScrollReveal>
      </section>
      <section id="about-me">
        <ScrollReveal>
          <AboutMe />
        </ScrollReveal>
      </section>

      <section>
        <BagCarousel />
      </section>
    </MainLayout>
  );
}

export default App;

import React from "react";
import MainLayout from "./components/mainLayout.jsx";
import ScrollReveal from "./components/scrollReveal.jsx";
import { BagCarousel } from "./components/carousel.jsx";

//PAGES IMPORT
import HomePage from "./pages/home-page/homepage.jsx";
import CarouselArticles from "./pages/home-page/carousel-articles.jsx";
import Articles from "./pages/articles-page/articles-slide.jsx";
import FashionShow from "./pages/fashion-show-page/fashionshow.jsx";
import AboutMe from "./pages/personal-data/aboutme.jsx";
import ContactFooter from "./pages/personal-data/contac-footer.jsx";

function App() {
  return (
    <MainLayout>
      <section id="home">
        <HomePage />
      </section>
      <section id="carousel-articles">
        <CarouselArticles />
      </section>
      <section id="articles">
        <Articles />
      </section>
      <section id="fashion-show">
        <FashionShow />
      </section>
      <section id="shooting">

      </section>
      <section id="about-me">
        <ScrollReveal>
          <AboutMe />
        </ScrollReveal>
      </section>
      <section id="contact">
        <ContactFooter />
      </section>
    </MainLayout>
  );
}

export default App;

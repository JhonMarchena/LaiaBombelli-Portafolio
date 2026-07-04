import React from "react";
import HomePage from "./pages/home-page/homepage";
import ScrollReveal from "./components/scrollReveal";
import CarouselArticles from "./pages/articles-page/carousel-articles";
import Articles from "./pages/articles-page/articles";
import FashionShow from "./pages/fashion-show-page/fashionshow";
import MainLayout from "./components/mainLayout";

function App() {
  return (
    <MainLayout>
      <section id="home">
        <HomePage />
      </section>
      <section id="carousel-articles">
        <ScrollReveal>
          <CarouselArticles />
        </ScrollReveal>
      </section>
      <section id="fashion-show">
        <ScrollReveal>
          <FashionShow />
        </ScrollReveal>
      </section>
    </MainLayout>
  );
}

export default App;

import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";

const Index = () => {
  useEffect(() => {
    document.title = "Светлица - Церковные товары";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Categories />
    </div>
  );
};

export default Index;

import React from "react";
import Header from "../../components/Header/Header";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import CategoryContainer from "../../components/CategoryContainer/CategoryContainer";
import SuperSavings from "../../components/SuperSavings/SuperSavings";

export default function MainPage() {
  return (
    <div>
      <Header />
      <WhyChooseUs />
      <CategoryContainer />
      <SuperSavings />
    </div>
  );
}

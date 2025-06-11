import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Solution from "@/components/Solution";
import Program from "@/components/Program";
import Results from "@/components/Results";
import Team from "@/components/Team";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Problems />
      <Solution />
      <Program />
      <Results />
      <Team />
      <Pricing />
      <FAQ />
    </div>
  );
};

export default Index;

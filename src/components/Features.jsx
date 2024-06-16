import Container from "./Container";
import Accordion from "./Accordian";

const Features = ()=> {

  return (
    <Container>
    <div className="my-20">
    <div className="p-8 border border-gray-100 rounded-3xl bg-white light:bg-gray-800 light:border-gray-700 shadow-2xl shadow-gray-600/10 light:shadow-none">
      <Accordion 
        title="Do you prefer Android or iOS"
        answer="I like to use iOS products"
      />
      <Accordion
        title="Do you prefer writing CSS or Tailwind?"
        answer="I like to use Tailwind"
      />
      <Accordion title="Firebase or Supabase?" answer="I am using Supabase!" />
    </div>
    </div>
    </Container>
  );
};

export default Features;

import Container from "./Container";
import Accordion from "./Accordian";
import Image from "next/image";

const Features = () => {
  return (
    <Container>
      <div id="features" className="my-20">
        <div className="p-8 border border-gray-100 rounded-3xl bg-white light:bg-gray-800 light:border-gray-700 shadow-2xl shadow-gray-600/10 light:shadow-none">
          <Accordion
            title={
                <h3 className="text-primary">Facial Attractiveness</h3>
            }
            answer={
                <div>
                <p className="mb-4">This is a paragraph inside the accordion.</p>
                <div className="relative w-full h-64">
                  <Image
                    src="/assets/subjectiveFaceScale.png"
                    alt="Subjective Face Scale" 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h4 className="mt-4">Additional Content</h4>
                  <p>More content inside a div element.</p>
                </div>
              </div>
            }
          />
          <Accordion
            title={
                <h3 className="text-primary">Height</h3>
            }
            answer="I like to use Tailwind"
          />
          <Accordion
            title={
                <h3 className="text-primary">Physique</h3>
            }
            answer={
                <div>
                <p className="mb-4">This is a paragraph inside the accordion.</p>
                <div className="relative w-full h-64">
                  <Image
                    src="/assets/subjectiveBodyScale.png"
                    alt="Subjective Face Scale" 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h4 className="mt-4">Additional Content</h4>
                  <p>More content inside a div element.</p>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default Features;
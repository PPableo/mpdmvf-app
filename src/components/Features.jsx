import Container from "./Container";
import Accordion from "./Accordian";
import Image from "next/image";

const Features = () => {
  return (
    <Container>
      <div id="features" className="my-20">
        <div className="p-8 border border-gray-100 rounded-3xl bg-white light:bg-gray-800 light:border-gray-700 shadow-2xl shadow-gray-600/10 light:shadow-none">
          <Accordion
            title={<h3 className="text-primary text-3xl py-2">Face</h3>}
            answer={
              <div>
                <p className="mb-4  semi-bold">
                 Face Value: 50%
                </p>
                <div className="relative w-full h-80">
                  <Image
                    src="/assets/subjectiveFaceScale.png"
                    alt="Subjective Face Scale"
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h4 className="mt-4">Find your value out of 10</h4>
                  <p>
                  Whichever face is similar to yours is your approximate facial
                  attractiveness
                  </p>
                </div>
              </div>
            }
          />
          <Accordion
            title={<h3 className="text-primary text-3xl py-2">Height</h3>}
            answer={
              <div>
                <p className="mb-4">
                  Height Value: 30%
                </p>
                <div className="relative w-full h-80">
                  <Image
                    src="/assets/SubjectiveHeightScale.png"
                    alt="Subjective Height Scale"
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h4 className="mt-4">Find your value out of 10</h4>
                  <p>More content inside a div element.</p>
                </div>
              </div>
            }
          />
          <Accordion
            title={<h3 className="text-primary  text-3xl py-2">Physique</h3>}
            answer={
              <div>
                <p className="mb-4">
                Body Value: 20%
                </p>
                <div className="relative w-full h-80">
                  <Image
                    src="/assets/SubjectiveBodyScale.png"
                    alt="Subjective Face Scale"
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h4 className="mt-4">Find your value out of 10</h4>
                  <p>Start with your body fat percentage</p>
                  <p>
                    <span className="text-red-500 font-semibold bg-red-100 rounded px-1">
                      If you're below 20%
                    </span>
                    body fat, you'll add or minus points dependent on body
                    composition based off BMI
                  </p>
                </div>
                <div className="relative w-full h-80">
                  <Image
                    src="/assets/subjectiveBodyComp.png"
                    alt="Subjective Body Comp"
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
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

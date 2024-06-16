import { useState } from "react";

const Mpdmvf = () => {
  const [face, setFace] = useState("");
  const [height, setHeight] = useState("");
  const [body, setBody] = useState("");
  const [result, setResult] = useState("");
  const [faceValidation, setFaceValidation] = useState("");
  const [heightValidation, setHeightValidation] = useState("");
  const [bodyValidation, setBodyValidation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset previous validation messages
    setFaceValidation("");
    setHeightValidation("");
    setBodyValidation("");

    // Ensure all inputs are entered and within valid range
    let isValid = true;

    if (face === "" || face < 1 || face > 10) {
      setFaceValidation("Enter a valid number between 1 and 10");
      isValid = false;
    }

    if (height === "" || height < 1 || height > 10) {
      setHeightValidation("Enter a valid number between 1 and 10");
      isValid = false;
    }

    if (body === "" || body < 1 || body > 10) {
      setBodyValidation("Enter a valid number between 1 and 10");
      isValid = false;
    }

    if (!isValid) {
      setResult("");
      return;
    }

    const faceWeighted = face * 5;
    const heightWeighted = height * 3;
    const bodyWeighted = body * 2;
    const egoBoost = (faceWeighted + heightWeighted + bodyWeighted) / 10;
    const calculatedResult =
      (faceWeighted + heightWeighted + bodyWeighted) / 10;

    let statement;
    if (calculatedResult <= 3) {
      statement = "Impossible";
    } else if (calculatedResult > 3 && calculatedResult <= 4) {
      statement = "Brother....";
    } else if (calculatedResult > 4 && calculatedResult <= 5) {
      statement = "It's rough out there";
    } else if (calculatedResult > 5 && calculatedResult <= 6) {
      statement = "If you fail here, fix your personality";
    } else if (calculatedResult > 6 && calculatedResult <= 7) {
      statement = "Easy Mode";
    } else if (calculatedResult > 7.5 && calculatedResult <= 10) {
      statement = "You're different";
    } else {
      statement = "Enter a Valid Number";
    }

    setResult(`Your PDMV is ${egoBoost.toFixed(2)}, ${statement}`);
  };

  return (
    <div className="py-8 mt-16 border-y border-gray-100 light:border-gray-800">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
      >
        <div className="text-center">
          <label className="text-lg font-semibold text-gray-700 light:text-white">
            What is your face score?
          </label>
          <input
            className="mt-2 text-gray-500 block w-full p-2 border rounded"
            type="number"
            value={face}
            onChange={(e) => setFace(Number(e.target.value))}
          />
          <div style={{ color: "red", fontWeight: "bold" }}>
            {faceValidation}
          </div>
        </div>
        <div className="text-center">
          <label className="text-lg font-semibold text-gray-700 light:text-white">
            What is your height score?
          </label>
          <input
            className="mt-2 text-gray-500 block w-full p-2 border rounded"
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
          />
          <div style={{ color: "red", fontWeight: "bold" }}>
            {heightValidation}
          </div>
        </div>
        <div className="text-center">
          <label className="text-lg font-semibold text-gray-700 light:text-white">
            What is your body score?
          </label>
          <input
            className="mt-2 text-gray-500 block w-full p-2 border rounded"
            type="number"
            value={body}
            onChange={(e) => setBody(Number(e.target.value))}
          />
          <div style={{ color: "red", fontWeight: "bold" }}>
            {bodyValidation}
          </div>
        </div>
        <div className="col-span-1 sm:col-span-3 flex justify-center">
          <button
            type="submit"
            className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 light:before:border-gray-700 light:before:bg-gray-800 sm:w-auto"
          >
            Submit
          </button>
        </div>
        {result && (
          <p className="mt-4 text-gray-700 light:text-gray-300 col-span-1 sm:col-span-3 text-center">
            <span className="text-primary text-3xl font-semibold">{result}</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Mpdmvf;

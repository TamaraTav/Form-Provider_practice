import { useState } from "react";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

interface Inputs {
  name: string;
  lastName: string;
  education: string;
  experience: string;
  date: string;
}

function App() {
  const [step, setStep] = useState(1);

  const methods = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log(data);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {step === 1 && <PersonalInfo />}
          {step === 2 && <Education />}
          {step === 3 && <Experience />}
          <button type="submit">Submit</button>
        </form>
      </FormProvider>

      <button onClick={() => step >= 2 && setStep(step - 1)}>Go back</button>
      <button onClick={() => step <= 2 && setStep(step + 1)}>Go forward</button>
    </>
  );
}

export default App;

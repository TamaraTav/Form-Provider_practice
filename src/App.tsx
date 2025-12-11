import { useState, useEffect } from "react";
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

// LocalStorage-იდან მონაცემების წაკითხვა
const getCachedFormData = (): Partial<Inputs> | null => {
  try {
    const cached = localStorage.getItem("formData");
    return cached ? JSON.parse(cached) : null;
  } catch {
    return null;
  }
};

// LocalStorage-ში მონაცემების შენახვა
const saveFormDataToCache = (data: Partial<Inputs>) => {
  try {
    localStorage.setItem("formData", JSON.stringify(data));
  } catch (error) {
    console.error("Failed to save form data to cache:", error);
  }
};

// LocalStorage-იდან მონაცემების წაშლა
const clearFormCache = () => {
  try {
    localStorage.removeItem("formData");
  } catch (error) {
    console.error("Failed to clear form cache:", error);
  }
};

function App() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // React Hook Form-ის ჩაშენებული caching მექანიზმები:
  // 1. defaultValues - საწყისი მნიშვნელობები (ქეშირება)
  // 2. getValues() - მიმდინარე მნიშვნელობების წაკითხვა
  // 3. watch() - მნიშვნელობების მონიტორინგი (რეაქტიული)
  // 4. formState - form-ის მდგომარეობა (dirty, touched, isValid, და სხვა)

  const cachedData = getCachedFormData();

  const methods = useForm<Inputs>({
    mode: "onChange", // validation რეალურ დროში
    defaultValues: cachedData || {
      name: "",
      lastName: "",
      education: "",
      experience: "",
      date: "",
    },
    // shouldUnregister: false - form-ის მონაცემები რჩება მეხსენებაში კომპონენტის unmount-ის შემდეგაც
    shouldUnregister: false,
  });

  // LocalStorage-ში ავტომატური შენახვა - watch() მეთოდით
  // watch() არის React Hook Form-ის ჩაშენებული მეთოდი, რომელიც აკვირდება form-ის ცვლილებებს
  useEffect(() => {
    const subscription = methods.watch((value) => {
      // ყოველ ცვლილებაზე ინახება LocalStorage-ში
      saveFormDataToCache(value);
    });

    return () => subscription.unsubscribe();
  }, [methods]);

  // Next ღილაკის ფუნქცია - ამოწმებს მიმდინარე step-ის ველებს
  const handleNext = async () => {
    let isValid = false;

    if (step === 1) {
      // Step 1 validation: name და lastName
      isValid = await methods.trigger(["name", "lastName"]);
    } else if (step === 2) {
      // Step 2 validation: education
      isValid = await methods.trigger(["education"]);
    }

    if (isValid) {
      setStep(step + 1);
    }
  };

  // Submit ფუნქცია - მხოლოდ ბოლო step-ზე
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log("Form submitted with data:", data);

    // Submit-ის შემდეგ ვშლით cache-ს, რადგან form დასრულებულია
    clearFormCache();

    setIsSubmitted(true);

    // აქ შეგიძლიათ დაამატოთ:
    // - API call მონაცემების გასაგზავნად
    // - Redirect სხვა გვერდზე
    // - Success message-ის ჩვენება
  };

  // თუ form დასაბმიტებულია, ვაჩვენებთ success message-ს
  if (isSubmitted) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h2>✅ Form Successfully Submitted!</h2>
        <p>Thank you for completing the form.</p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setStep(1);
            clearFormCache(); // cache-ის გასუფთავება
            methods.reset(); // form-ის გასუფთავება
          }}
        >
          Fill Again
        </button>
      </div>
    );
  }

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {step === 1 && <PersonalInfo />}
          {step === 2 && <Education />}
          {step === 3 && <Experience />}

          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            {step > 1 && (
              <button type="button" onClick={() => setStep(step - 1)}>
                Go Back
              </button>
            )}

            {step < 3 ? (
              <button type="button" onClick={handleNext}>
                Next
              </button>
            ) : (
              <button type="submit">Submit</button>
            )}
          </div>
        </form>
      </FormProvider>
    </>
  );
}

export default App;

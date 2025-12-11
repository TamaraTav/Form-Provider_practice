import { useState, useEffect } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Review from "./components/Review";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { Inputs } from "./types";
import styles from "./styles/App.module.css";

// LocalStorage-იდან მონაცემების წაკითხვა
const getCachedFormData = (): Partial<Inputs> | null => {
  try {
    const cached = localStorage.getItem("formData");
    if (!cached) return null;
    const parsed = JSON.parse(cached);
    // Ensure arrays are properly formatted
    if (parsed.education && !Array.isArray(parsed.education)) {
      parsed.education = [];
    }
    if (parsed.experience && !Array.isArray(parsed.experience)) {
      parsed.experience = [];
    }
    return parsed;
  } catch {
    return null;
  }
};

// LocalStorage-ში მონაცემების შენახვა
const saveFormDataToCache = (data: Record<string, unknown>) => {
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

  const cachedData = getCachedFormData();

  const methods = useForm<Inputs>({
    mode: "onChange",
    defaultValues: cachedData || {
      name: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      address: "",
      city: "",
      country: "",
      postalCode: "",
      gender: "",
      profilePhoto: null,
      education: [
        {
          degreeLevel: "",
          institutionName: "",
          fieldOfStudy: "",
          startDate: "",
          endDate: "",
          isCurrent: false,
          gpa: "",
          description: "",
        },
      ],
      experience: [
        {
          jobTitle: "",
          companyName: "",
          employmentType: "",
          startDate: "",
          endDate: "",
          isCurrent: false,
          location: "",
          description: "",
          skillsUsed: "",
        },
      ],
    },
    shouldUnregister: false,
  });

  // LocalStorage-ში ავტომატური შენახვა
  useEffect(() => {
    const subscription = methods.watch((value) => {
      saveFormDataToCache(value);
    });

    return () => subscription.unsubscribe();
  }, [methods]);

  // Next/Review ღილაკის ფუნქცია
  const handleNext = async () => {
    let isValid = false;

    if (step === 1) {
      isValid = await methods.trigger([
        "name",
        "lastName",
        "email",
        "phone",
        "dateOfBirth",
        "address",
        "city",
        "country",
        "postalCode",
        "gender",
      ]);
    } else if (step === 2) {
      isValid = await methods.trigger("education");
    } else if (step === 3) {
      // Step 3-ისთვის validation-ის შემოწმება
      isValid = await methods.trigger("experience");
    }

    // თუ validation გავიდა, გადავდივართ შემდეგ step-ზე
    if (isValid) {
      setStep(step + 1);
    }
  };

  // Submit ფუნქცია
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log("Form submitted with data:", data);
    clearFormCache();
    setIsSubmitted(true);
  };

  // Success screen
  if (isSubmitted) {
    return (
      <div className={styles.appContainer}>
        <div className={styles.successContainer}>
          <h2 className={styles.successTitle}>
            ✅ Form Successfully Submitted!
          </h2>
          <p className={styles.successMessage}>
            Thank you for completing the form.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setStep(1);
              clearFormCache();
              methods.reset();
            }}
            className={styles.successButton}
          >
            Fill Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.appContainer}>
      <div className={styles.formContainer}>
        <FormProvider {...methods}>
          <form
            onSubmit={(e) => {
              // მხოლოდ Step 4-ზე ვაძლევთ form-ს submit-ის საშუალებას
              if (step === 4) {
                methods.handleSubmit(onSubmit)(e);
              } else {
                e.preventDefault();
              }
            }}
          >
            {step === 1 && <PersonalInfo />}
            {step === 2 && <Education />}
            {step === 3 && <Experience />}
            {step === 4 && <Review />}

            <div className={styles.navigationContainer}>
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className={`${styles.button} ${styles.buttonSecondary}`}
                >
                  Go Back
                </button>
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className={`${styles.button} ${styles.buttonPrimary}`}
                >
                  Next
                </button>
              ) : step === 3 ? (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNext();
                  }}
                  className={`${styles.button} ${styles.buttonPrimary}`}
                >
                  Review
                </button>
              ) : (
                <button
                  type="submit"
                  className={`${styles.button} ${styles.buttonPrimary}`}
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default App;

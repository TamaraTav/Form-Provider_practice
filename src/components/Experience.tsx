import { useFormContext } from "react-hook-form";

export default function Experience() {
  const { register, formState: { errors } } = useFormContext();
  return (
    <>
      <h2>Step 3: Experience</h2>
      <div>
        <label htmlFor="experience">Experience:</label>
        <input 
          type="text" 
          id="experience" 
          {...register("experience", { 
            required: "Experience is required",
            minLength: {
              value: 5,
              message: "Experience must be at least 5 characters"
            }
          })} 
        />
        {errors.experience && <span style={{ color: "red", display: "block" }}>{errors.experience.message as string}</span>}
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input 
          type="date" 
          id="date" 
          {...register("date", { 
            required: "Date is required"
          })} 
        />
        {errors.date && <span style={{ color: "red", display: "block" }}>{errors.date.message as string}</span>}
      </div>
    </>
  );
}

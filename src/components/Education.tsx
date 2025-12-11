import { useFormContext } from "react-hook-form";

export default function Education() {
  const { register, formState: { errors } } = useFormContext();
  return (
    <div>
      <h2>Step 2: Education</h2>
      <div>
        <label htmlFor="education">Education:</label>
        <input 
          type="text" 
          id="education" 
          {...register("education", { 
            required: "Education is required",
            minLength: {
              value: 3,
              message: "Education must be at least 3 characters"
            }
          })} 
        />
        {errors.education && <span style={{ color: "red", display: "block" }}>{errors.education.message as string}</span>}
      </div>
    </div>
  );
}

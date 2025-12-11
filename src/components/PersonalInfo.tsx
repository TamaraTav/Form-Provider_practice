import { useFormContext } from "react-hook-form";

export default function PersonalInfo() {
  const { register, formState: { errors } } = useFormContext();
  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      <div>
        <label htmlFor="name">Name: </label>
        <input 
          type="text" 
          id="name" 
          {...register("name", { 
            required: "Name is required",
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters"
            }
          })} 
        />
        {errors.name && <span style={{ color: "red", display: "block" }}>{errors.name.message as string}</span>}
      </div>
      <div>
        <label htmlFor="lastName">Last Name: </label>
        <input 
          type="text" 
          id="lastName" 
          {...register("lastName", { 
            required: "Last name is required",
            minLength: {
              value: 2,
              message: "Last name must be at least 2 characters"
            }
          })} 
        />
        {errors.lastName && <span style={{ color: "red", display: "block" }}>{errors.lastName.message as string}</span>}
      </div>
    </div>
  );
}

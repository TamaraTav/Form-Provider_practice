import { useFormContext } from "react-hook-form";

export default function Experience() {
  const { register, watch } = useFormContext();
  const experience = watch("experience");
  console.log(experience);
  return (
    <>
      <div>
        <label htmlFor="experience">experience:</label>
        <input type="text" id="experience" {...register("experience")} />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" {...register("date")} />
      </div>
    </>
  );
}

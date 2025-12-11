import { useFormContext } from "react-hook-form";

export default function Education() {
  const { register } = useFormContext();
  return (
    <div>
      <label htmlFor="education">Education:</label>
      <input type="text" id="education" {...register("education")} />
    </div>
  );
}

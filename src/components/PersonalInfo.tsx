import { useFormContext } from "react-hook-form";

export default function PersonalInfo() {
  const { register } = useFormContext();
  return (
    <div>
      <div>
        <label htmlFor="name">name: </label>
        <input type="text" id="name" {...register("name")} />
      </div>
      <div>
        <label htmlFor="lastName">lastName: </label>
        <input type="text" id="lastName" {...register("lastName")} />
      </div>
    </div>
  );
}

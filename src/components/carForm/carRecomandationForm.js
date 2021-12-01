import { useState } from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} placeholder="First name" />
      <input {...register("lastName")} placeholder="Last name" />
      <select {...register("status")}>
        <option value="">Select...</option>
        <option value="Firstcar">First car</option>
        <option value="Bigfamily">Big family</option>
      </select>
      <p>{result}</p>
      <input type="submit" />
    </form>
  );
}

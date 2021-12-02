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
      <select {...register("priceRange")}>
        <option value="">Price Range</option>
        <option value="700_1099">700-1099</option>
        <option value="1100_1599">1100-1599</option>
        <option value="1600_2099">1600-2099</option>
        <option value="2100_3499">2100-3499</option>
        <option value="3500_4999">3500-4999</option>
        <option value="5000_7999">5000-7999</option>
      </select>
      <select {...register("displacement")}>
        <option value="">Price Range</option>
        <option value="small">Small displacement</option>
        <option value="mid">Midranged displacements</option>
        <option value="long">Traveling</option>
      </select>
      <select {...register("cargoCapacity")}>
        <option value="">Cargo capacity</option>
        <option value="small">Small cargo</option>
        <option value="mid">Mid cagro</option>
        <option value="large">Large cargo</option>
      </select>
      <p>{result}</p>
      <input type="submit" />
    </form>
  );
}

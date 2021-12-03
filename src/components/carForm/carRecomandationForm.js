import { useState } from "react";
import { useForm } from "react-hook-form";
import '../../layout/carRecomandationForm.css';

export default function App() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  
  const onSubmit = (data) => {
    setResult(JSON.stringify(data));
    analyzeResult(data);
  
  }
  
  const analyzeResult = (result) => {
    if(result["status"]=="Firstcar"){
      console.log("categorie1");
    }else if(result["status"]=="Bigfamilly"){

      var carform = document.getElementById('carform');
        carform.style.display = 'block';
        carform.innerHTML = '';

      var results = document.createElement('div');
            results.innerHTML = '<h1 style="text-align:center">Cars we reccomand for you:<br/></h1>' + '<h3 style="text-align:center">' + "Categ1" + ' for you</h3>';      
            carform.append(results);
    }
  }

  return (
    <div id="carform">
      <h3>Car recomandation</h3>
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <select {...register("status")}>
        <option value="">Select...</option>
        <option value="Firstcar">First car</option>
        <option value="Bigfamilly">Big family</option>
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
        <option value="">Diplacement Range</option>
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
      {analyzeResult(result)}
      <input type="submit" />
    </form>
    </div>
  );
}

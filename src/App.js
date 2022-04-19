import "./App.css";
import { useState , useEffect} from "react";

function App() {
  const [result, setResult] = useState({});
  const [route,setRoute]=useState({line:"",direction:""})
  useEffect(()=>{
    console.log()
    if(route?.line&&route.direction){
      fetch(`https://data.etabus.gov.hk/v1/transport/kmb/route/${route?.line}/${route.direction}/1`)
      .then(res=>res.json())
      .then(result=>{
        console.log(result)
        setResult(result)})
    }
  },[route.line,route.direction])

  return (
    <div className="App">
      <div>路線-巴士站 （請選擇路線）</div>
      <button onClick={()=>setRoute({line:"118",direction:"inbound"})}>118（去程） </button> <button onClick={()=>setRoute({line:"118",direction:"outbound"})}>118 (返程) </button>{" "}
      <button onClick={()=>setRoute({line:"606",direction:"inbound"})}>606 （去程）</button> <button onClick={()=>setRoute({line:"606",direction:"outbound"})}>606 (返程)</button>{" "}
      <div>路線：{result?.data?.route}</div>
      <div>方向：{result?.data?.bound==='I'?"返程":result?.data?.bound==='O'?"去程":""}</div>
      <div>起點：{result?.data?.orig_tc}</div>
      <div>{result?.data?.orig_sc}</div>
      <div>{result?.data?.orig_en}</div>
      <div>終點：{result?.data?.dest_tc}</div>
      <div>終點：{result?.data?.dest_sc}</div>
      <div>終點：{result?.data?.dest_en}</div>
      
    </div>
  );
}

export default App;

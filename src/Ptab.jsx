import P from "./P";

function Ptab() {
    let options = ["hi-tech", "fast", "durable"];
    let specialFeatures={a: "hi-tech", b: "lightweight", c: "long-lasting"};
     let features = [<li>"hi-tech"</li>,<li>"fast"</li>,<li>"durable"</li>];
  return (
    <>
      <P title="Phone" price={1000} features={options} specialFeatures={specialFeatures} option={features}/>
      <P title="Laptop" price={2000} features={options} specialFeatures={specialFeatures} />
      <P title="Tablet" price={500} features={options} specialFeatures={specialFeatures} />
    </>
  );
}

export default Ptab;
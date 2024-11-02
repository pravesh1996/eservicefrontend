import { useEffect,useRef, useState } from "react";

const OtpInput = ({ length = 6, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
const inputRefs = useRef([]);

useEffect(()=>{
  if(inputRefs.current[0]){
    inputRefs.current[0].focus();
  }
},[]);


  const handleChange = (index,e) => {
    const value = e.target.value;
    if(isNaN(value))return;

    const newOtp = [...otp];
    //allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    //submit trigger
    const combinedOtp = newOtp.join("");
    if(combinedOtp.length === length) onOtpSubmit(combinedOtp);



 // Move to the next empty input if the current input is filled
 const nextEmptyIndex = newOtp.findIndex((val) => val === "");
 if (nextEmptyIndex !== -1 && inputRefs.current[nextEmptyIndex]) {
   inputRefs.current[nextEmptyIndex].focus();
 }
 };

  const handleclick = (index) => {
    inputRefs.current[index].setSelectionRange(1,1);

  };
  const handleKeyDown = (index, e) => {
     // Move focus to the previous input field on backspace if current is empty
     if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };
  return(
     <div>
      {otp.map((value,index)=>(
       <input key={index} type="text"
        ref={(input)=>(inputRefs.current[index] = input)}
        value={value}
        onChange={(e)=>handleChange(index,e)}
        onClick={()=>handleclick(index)}
        onKeyDown={(e)=>handleKeyDown(index,e)}
        className="otpInput"
        />
      ))}
      </div>
    );
  };




export default OtpInput;

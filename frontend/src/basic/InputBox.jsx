import { useState } from "react";

export default function InputBox({type, label, placeholder, onChange}) {

    const [inputType, setInputType] = useState(type);
    const typeIs = inputType=="text"?"password":"text";
    return <div>
      <div className="text-sm font-medium text-left py-2">
        {label}
      </div>
      <input type={inputType} onChange={onChange} placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200" />
      { type =="password" && 
        <div className="flex text-sm gap-1 mt-2">
          <input onChange={(e) => setInputType(typeIs)} type="checkbox"></input><span>show password</span>
        </div>
      }
    </div>
}
import { useNavigate } from "react-router-dom"
import { Button } from "./Button"

export const Appbar = ({username}) => {
    const navigate = useNavigate();
    return (
    <div className=" bg-slate-200 shadow h-16 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4">
            PayTM Wallet
        </div>
        <div className="flex h-max w-max mt-2">
                 
                <Button onClick={() => {
                    navigate("/signin");
                    localStorage.clear();
                    }
                }label = {"Log out"}/>    
            <div className="flex flex-col w-max justify-center h-full mx-4 cursor-pointer">
                Hello, {username?username.split("@")[0]:"U"}
            </div>
            
        </div>
    </div>
)}
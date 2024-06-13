
import { useEffect, useState } from "react";
import { set } from "react-hook-form";
function LoginData({datalogin}) {
    console.log(datalogin);
    let [response, setResponse] = useState("");
    let sendData = async (data)=>{
        let url = "http://localhost/apiHospital/login";
        try {
            let respuesta = await fetch(url,{
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(data)
            });
            if (respuesta.status === 401) {
                alert("El usuario y/o la contraseña es incorrecto");
            }else{
                let userLogin = await respuesta.json();
                alert(`Bienvenido: ${userLogin.name}`);
                
                //guardar datos en localStorage
                //localStorage.setItem("userLogin", JSON.stringify(userLogin));
                location.href = "/dashboard";
                return userLogin;
            }
        } catch (error) {
            console.log(error);
        }
    };

    //realizar peticion a la api
    useEffect(()=>{
        if (datalogin){
            let user = sendData(datalogin);
            setResponse(user);
        }
    },[datalogin]);

    console.log(response);
    
    return (
        <div>

        </div>
    )
}
export default LoginData;
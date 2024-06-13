import"./../../assets/sb-admin-2.min.css";
import LoginData from "../../components/frontend/logindata";
import { useForm } from "react-hook-form";
import { useState } from "react";
function Login() {

    let { register, handleSubmit, formState:{errors} } = useForm();
    let [dataform, setDataForm] = useState("");
    //console.log(datos);
    //console.log(errors);
    let sendDataForm = handleSubmit((data)=>{
        console.log(data);
        setDataForm(data);
        
    });
      

    return(
        <>
        
        <div className="bg-gradient-primary">

        
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                    
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <form onSubmit={ sendDataForm } className="user">
                                            <div className="form-group">
                                                <input type="text" {...register("name",
                                                    {required: true}
                                                )} className="form-control form-control-user"
                                                    id="usuarioForm" placeholder="Enter User..."/>
                                                    <span className="text-danger"> { errors.name && "El usuario es obligatorio"} </span>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" {...register("password",
                                                    {required: true})
                                                } className="form-control form-control-user"
                                                    id="contraForm" placeholder="Password" />
                                                    <span className="text-danger"> { errors.password && "La contraseña es obligatorio" } </span>
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                                    <label className="custom-control-label">Remember
                                                        Me</label>
                                                </div>
                                            </div>
                                            <button type="submit" className="btnLogin btn btn-primary btn-user btn-block">
                                                Login
                                            </button>
                                            <hr/>
                                            <a href="index.html" className="btn btn-google btn-user btn-block">
                                                <i className="fab fa-google fa-fw"></i> Login with Google
                                            </a>
                                            <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                                <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                            </a>
                                        </form>
                                        <hr/>
                                        <div className="text-center">
                                            <a className="small" href="forgot-password.html">Forgot Password?</a>
                                        </div>
                                        <div className="text-center">
                                            <a className="small" href="register.html">Create an Account!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            </div>
        </div>
        <LoginData datalogin ={dataform}/>

        </>
    )
}
export default Login;
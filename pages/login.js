import React from "react";
import _Head from "../components/Head";

const Login = () => (
    <div className="mycontainer">
        <_Head title="Login" />
        <form className="myform">
            <div className="form-group">
                <label htmlFor="email">Email Adres</label>
                <input type="email" className="form-control" placeholder="Email giriniz." />
            </div>
            <div className="form-group">
                <label htmlFor="pwd">Parola</label>
                <input type="password" className="form-control" placeholder="Şifrenizi giriniz." />
            </div>
            <button type="submit" className="mybtn btn btn-primary">Giriş Yap</button>
        </form>
        <style jsx>{`
            .mycontainer{
                width: 360px;
                padding: 8% 0 0;
                margin: auto;
            }
            .myform {
                position: relative;
                z-index:1;
                background: #FFFFFF;
                max-width: 360px;
                margin: 0 auto 100px;
                padding: 45px;
                box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
            }
            
        `}</style>
    </div>
);
export default Login;

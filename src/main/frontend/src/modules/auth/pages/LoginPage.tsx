import { useState } from "react";


export default function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log({
            email,
            password
        });
    };


    return (

        <div className="min-h-screen flex items-center justify-center bg-slate-50">

            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">

                <h1 className="text-2xl font-bold text-slate-900 mb-6">
                    Iniciar sesión
                </h1>


                <form onSubmit={handleSubmit} className="space-y-4">


                    <div>

                        <label className="block text-sm mb-1">
                            Correo
                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            className="w-full border rounded-lg px-3 py-2"
                            placeholder="correo@ejemplo.com"
                        />

                    </div>



                    <div>

                        <label className="block text-sm mb-1">
                            Contraseña
                        </label>


                        <input
                            type="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            className="w-full border rounded-lg px-3 py-2"
                            placeholder="********"
                        />

                    </div>



                    <button
                        className="
                        w-full 
                        bg-blue-600 
                        text-white 
                        py-2 
                        rounded-lg
                        hover:bg-blue-700
                        "
                    >
                        Ingresar
                    </button>


                </form>

            </div>

        </div>

    );

} 
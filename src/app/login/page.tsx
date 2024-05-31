import LoginForm from "@/components/auth/LoginForm";

const LoginPage = () => {
    return <div className="flex items-center w-full flex-col">

        <h2 className="mb-4">Iniciar Sesión en la red Social:</h2>

        <LoginForm/>
    </div>
}

export default LoginPage;
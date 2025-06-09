'use client'
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();

    return (
        <div
            className="flex items-center justify-center h-screen"
        >
            <h1
                className="text-4xl font-bold"
            >
                Login
            </h1>
            <button
                onClick={() => {
                    router.push('/');
                }}
            >
                Ir a Inicio
            </button>
        </div>
    );
}
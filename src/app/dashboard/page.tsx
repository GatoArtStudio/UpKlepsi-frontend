'use client'
import { useRouter } from 'next/navigation';

export default function Dashboard() {

    const router = useRouter();

    return (
        <div
            className="flex flex-col gap-2 items-center justify-center h-screen"
        >
            <h1
                className="text-4xl font-bold"
            >
                Dashboard
            </h1>
            <button
                className="btn p-3 rounded-2xl hover:scale-105"
                onClick={() => {
                    router.push('/');
                }}
            >
                Ir a Inicio
            </button>
        </div>
    );
}
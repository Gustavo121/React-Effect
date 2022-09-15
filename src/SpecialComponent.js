import { useEffect } from "react";

export default function SpecialComponent() {
    useEffect(() => {
        document.title = 'Componente visível!';

        // componentWillUnmount - Quando o componente for desmontado
        return () => {
            document.title = 'React Hooks | useEffect';
        }
    }, []);

    return (
        <div>
            <h3>Cheque o título da página!</h3>
        </div>
    )
}
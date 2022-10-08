import { useState, useCallback, memo } from 'react'

const Button = memo(({ handleClick, name }) => {
    console.log(`Renderizado botão ${name}`)
    return <button onClick={handleClick}>{name}</button>
})

Button.displayName = 'Memo Button'

export default function MemoizationPage() {
    const [contadorUm, setContadorUm] = useState(0)
    const [contadorDois, setContadorDois] = useState(0)

    const memoizedContadorUm = useCallback(() => {
        setContadorUm(contadorUm + 1)
    }, [contadorUm])

    const memoizedContadorDois = useCallback(() => {
        setContadorDois(contadorDois + 1)
    }, [contadorDois])

    return (
        <div>
            {contadorUm} - {contadorDois}
            <button handleClick={() => setContadorUm(contadorUm + 1)} name="Botão UM"></button>
            <button handleClick={() => setContadorUm(contadorDois + 1)} name="Botão DOIS"></button>
        </div>
    )
}
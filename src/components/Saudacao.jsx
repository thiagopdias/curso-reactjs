function Saudacao({nome}) {
    function gerarSaudação(algumNome) {
        return `Olá, ${algumNome}, tude bem?`
    }

    return (
        <>
            {
                nome && <p>{gerarSaudação(nome)}</p>
            }
        </>
    )
}

export default Saudacao
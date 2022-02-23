const Spinner = () => {
    /*Renderizado*/
    return(
        <>
        <div className="mx-5 my-5">
            <span className="h1">Cargando...</span>
            <div className="spinner-border text-primary" role="status"></div>
        </div>
        </>
    )
};

export default Spinner;
import propTypes from "prop-types";
const edgar =" edgar"

const objeto ={
    nombre:'edgar',
    edad:30,
}

const data = () => {
    return<h2>llamada a funcion recomendables crear afuera para evitar el redibujado  al usar el componente </h2>
}



export function App({title,number}){
   
    return (
        <>
              <h2>{title}</h2>
              <h1>Edgar</h1>
              <p>No se permiten los objetos sin la key</p>
              <p>Imprimir variables no objetos: {1 + 1}</p>
              <p>Imprimir variables {2 * 10}</p>
              <p>Imprimir variables {edgar}</p>
              <p>Imprimir objeto convirtiendolo en json {JSON.stringify(objeto)}</p>
              <code>{JSON.stringify(objeto)}</code>
              <p>{data()}</p>
              <p>{number + 1}</p>
        </>
                                         
    );
}
App.propTypes = {
    title: propTypes.string.isRequired,
    number: propTypes.number

}
App.defaultProps = {
    title:"no haty titulo"
}
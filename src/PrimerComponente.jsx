const string = 'Esto es un texto';
const number = 123456;
const array = ['Curso de React', 'Youtube', 4, 100000];
const boolean = true;
const funcion = () => 1 + 1;
const objeto = { nombre: 'Curso de Javascript', duracion: 4 };
const fecha = new Date();

const PrimerComponente = () => {
   return (
      // Fragment, los elementos a renderizar deben tener un solo Padre
      <>
         <h1>{string}</h1>
         <h2>{number}</h2>
         <h3>{array}</h3>
         <h1>{boolean}</h1>
         <h2>{funcion()}</h2>
         {/* Los objetos en JSX no se renderizan directamente, se debe usar JSON.stringify() para renderizarlos */}
         <h3>{JSON.stringify(objeto)}</h3>
         <h1>{JSON.stringify(fecha)}</h1>
      </>
   );
};

export default PrimerComponente;

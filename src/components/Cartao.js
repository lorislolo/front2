import Paragrafo from './Paragrafo';
import Titulo from './Titulo';
import MinhaFoto from './MinhaFoto';
import HelloWorld from './HelloWorld';

function Cartao(props){
    return(
        <div>
            <Paragrafo/>
            <Titulo
            Titulo = {props.Titulo}
            Subtitulo = {props.Subtitulo}
            />
            <MinhaFoto/>
            <HelloWorld/>
        </div>
    )
}
export default Cartao
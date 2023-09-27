import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {
    return (
        (props.colaboradores.length > 0) && 
        <section style={{backgroundColor: props.corSecundaria}} className='time'>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => {
                    return <Colaborador key={colaborador.nome}
                                        nome={colaborador.nome}
                                        imagem={colaborador.imagem}
                                        cargo={colaborador.cargo}
                                        corFundo={props.corPrimaria}
                            />
                })}
            </div>
        </section>
    );
};

export default Time;
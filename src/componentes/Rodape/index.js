import './Rodape.css'

const Rodape = () => {
    return (
        <div className='rodape-pagina'>
            <div className='media'>
                <img src='/imagens/fb.png' alt='Facebook Logo' />
                <img src='/imagens/tw.png' alt='Twitter Logo' />
                <img src='/imagens/ig.png' alt='Instagram Logo' />
            </div>
            <div>
                <img src='/imagens/logo.png' alt='Logo'/>
            </div>
            <div>
                <p className='develop'>Desenvolvido por Matheus</p>
            </div>
        </div>
    );
};

export default Rodape;
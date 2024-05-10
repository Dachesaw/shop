import './ModalContent.css'

const ModalContent = ({active, setActive}) => {
    return ( 
    <div className={active ? "modalcontent-wrap active" : "modalcontent-wrap"} onClick={() => setActive(false)}>
        <div className={active ? "modalcontent active" : "modalcontent"} onClick={e => e.stopPropagation()}>
            <button className='close-modalcontent' onClick={() => setActive(false)}>x</button>
            <h3>Вход или регистрация</h3>
            <p>Введите номер телефона. Мы отправим вам код в СМС.</p>
            <form action="number">
                <input className='form' type="tel" placeholder='Номер телефона'/>
                <input className='submit-button' type="submit" value="Получить код" />
            </form>
        </div>
    </div>
    );
}
 
export default ModalContent;
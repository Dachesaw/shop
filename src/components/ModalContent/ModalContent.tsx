import './ModalContent.css'

const ModalContent = () => {
    return ( 
    <div className="modalcontent-wrap">
        <div className="modalcontent">
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
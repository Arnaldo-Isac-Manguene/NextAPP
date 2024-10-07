import emailjs from 'emailjs-com';

const enviarMensagem = (event) => {
    event.preventDefault();

    const email = document.getElementById('email-form').value;
    const mensagem = document.getElementById('message-form').value;

    const templateParams = {
        to_email: 'info@gmail.com',
        from_email: email,
        message: mensagem
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Mensagem enviada com sucesso!');
        }, (error) => {
            console.error('FAILED...', error);
            alert('Erro ao enviar a mensagem.');
        });}

export default function Formulario(){
    
    return (
        <form onsubmit={enviarMensagem} method="post" class="mx-3 form-control">
            <div class="mb-3">
                <h4>Deixe uma mensagem</h4>
            </div>
            <div class="mb-3">
                <label for="email-form" class="form-label">Seu E-mail</label>
                <input type="email" class="form-control" id="email-form" placeholder="name@example.com" />                
            </div>
            <div class="mb-3">
                <label for="message-form" class="form-label">Escreva a mensagem</label>
                <textarea class="form-control" id="message-form" rows="3"></textarea>
            </div>
            <div class="mb-3 justify-content-end d-flex">
                <button type="submit" class="btn btn-secondary">Enviar</button>  
            </div>
        </form>
    )
}
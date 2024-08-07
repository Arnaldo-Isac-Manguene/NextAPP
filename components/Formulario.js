const enviarMensagem = (event)=> {
    event.preventDefault();
    window.alert('olá');
    return "Mnesagem enviada";
}

export default function Formulario(){
    
    return (
        <form onsubmit="enviarMensagem(event)" method="post" class="mx-3 form-control">
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
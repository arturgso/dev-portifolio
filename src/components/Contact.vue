<template>
    <section class="contact" id="contato">
        <div class="contact-heading">
            <h2>Contato</h2>
            <p>
                Tem uma ideia, projeto ou oportunidade? Fique à vontade para entrar
                em contato.
            </p>
        </div>

        <p class="phone">Telefone: <a href="tel:+5500000000000">+55 (00) 00000-0000</a></p>

        <form class="contact-form" action="mailto:artur@example.com" method="post" enctype="text/plain">
            <label>
                Nome
                <input type="text" name="name" placeholder="Seu nome" required />
            </label>

            <label>
                Email
                <input type="email" name="email" placeholder="seu@email.com" required />
            </label>

            <label>
                Mensagem
                <textarea name="message" placeholder="Escreva sua mensagem" rows="5" required></textarea>
            </label>

            <button class="contact-button" type="submit">Enviar mensagem</button>
        </form>
    </section>
</template>

<style scoped>
.contact {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 7rem 0;
    scroll-margin-top: 2rem;
}

.contact-heading h2 {
    margin: 0 0 0.75rem;
    color: #d9d9d9;
    font-size: 2rem;
    font-weight: 800;
}

.contact-heading p {
    max-width: 620px;
    margin: 0;
    color: #a7a7a7;
    font-size: 1.05rem;
    line-height: 1.7;
}

.phone {
    margin: 0;
    color: #a7a7a7;
    font-size: 1.05rem;
    font-weight: 700;
}

.phone a {
    color: #22C55E;
    text-decoration: none;
}

.contact-form {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    max-width: 760px;
}

.contact-form label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: #d9d9d9;
    font-size: 0.95rem;
    font-weight: 800;
}

.contact-form label:nth-child(3),
.contact-button {
    grid-column: 1 / -1;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 0.85rem 1rem;
    border: 1px solid #2f2f2f;
    border-radius: 0.35rem;
    outline: 0;
    background: transparent;
    color: #d9d9d9;
    font: inherit;
    resize: vertical;
    transition: border-color 150ms;
}

.contact-form input:focus,
.contact-form textarea:focus {
    border-color: #22C55E;
}

.contact-button {
    display: inline-flex;
    width: fit-content;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1rem;
    border-radius: 0.35rem;
    font-size: 0.95rem;
    font-weight: 800;
    cursor: pointer;
    transition: background-color 150ms, border-color 150ms, color 150ms, transform 150ms;
}

.contact-button {
    border: 1px solid #22C55E;
    background: #22C55E;
    color: #0f0f0f;
}

.contact-button:hover {
    border-color: #22C55E;
    transform: translateY(-2px);
}

@media (max-width: 760px) {
    .contact {
        margin: 5rem 0;
    }
}

@media (max-width: 420px) {
    .contact-form {
        grid-template-columns: 1fr;
    }

    .contact-heading h2 {
        font-size: 1.75rem;
    }

    .contact-heading p {
        font-size: 1rem;
    }

    .contact-button {
        width: 100%;
    }
}
</style>

<script setup lang="ts">
const projects = [
    {
        title: "sloty",
        description:
            "Plataforma de agendamento online para empresas, com gestão de horários, serviços, profissionais e disponibilidade em tempo real.",
        link: "https://sloty.app.br",
        image: "/projects/sloty.png",
    },

    {
        title: "boutique dkids",
        description:
            "E-commerce de moda infantil desenvolvido para oferecer uma experiência de compra simples, rápida e responsiva.",
        link: "https://boutiquedkids.com.br",
        image: "/projects/dkids.png",
    },

    {
        title: "polaris",
        description:
            "Plataforma para organização de listas de presentes e compras pessoais, facilitando o planejamento e o compartilhamento.",
        link: "https://polaris-demo-xi.vercel.app",
        image: "/projects/polaris.png",
    },

    {
        title: "oriontask",
        description:
            "Aplicativo de gerenciamento de tarefas inspirado nos conceitos de dharma e karma para incentivar produtividade e consistência.",
        link: "https://oriontask-demo.vercel.app",
        image: "/projects/oriontask.png",
    },

    {
        title: "hermes",
        description:
            "CLI que utiliza IA para gerar mensagens de commit padronizadas a partir das alterações do Git, simplificando o fluxo de desenvolvimento.",
        link: "https://github.com/arturgso/hermes",
        image: "/projects/hermes.png",
    },
];
</script>

<template>
    <section class="projects" id="projetos">
        <div class="projects-heading">
            <h2>Projetos</h2>
            <p>
                Alguns trabalhos e estudos que representam meu processo de
                desenvolvimento.
            </p>
        </div>

        <div class="project-grid">
            <article
                v-for="project in projects"
                :key="project.title"
                class="project-card"
            >
                <div>
                    <div
                        class="project-preview"
                        :style="{ backgroundImage: `url(${project.image})` }"
                        aria-hidden="true"
                    ></div>
                    <h3>{{ project.title }}</h3>
                    <p>{{ project.description }}</p>
                </div>

                <a
                    :href="project.link"
                    class="demo-button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Acessar
                </a>
            </article>
        </div>
    </section>
</template>

<style scoped>
.projects {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin: 7rem 0;
    scroll-margin-top: 2rem;
}

.projects-heading {
    text-align: center;
}

.projects-heading h2 {
    margin: 0 0 0.75rem;
    color: #d9d9d9;
    font-size: 2rem;
    font-weight: 800;
}

.projects-heading p {
    margin: 0 auto;
    max-width: 620px;
    color: #a7a7a7;
    font-size: 1.125rem;
    line-height: 1.6;
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
}

.project-card {
    display: flex;
    min-height: 260px;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    padding: 1.5rem;
    border: 1px solid #2f2f2f;
    border-radius: 0.5rem;
    background: #1f1f1f;
    transition:
        border-color 150ms,
        transform 150ms,
        background 150ms;
}

.project-card h3 {
    text-transform: capitalize;
}

.project-preview {
    width: 100%;
    background-size: cover;
    aspect-ratio: 16 / 9;
    margin-bottom: 1.25rem;
    border: 1px solid #2f2f2f;
    border-radius: 0.35rem;
    /*background: #22c55e;*/
}

.preview-green {
    background: linear-gradient(135deg, #052e16, #22c55e);
}

.preview-blue {
    background: linear-gradient(135deg, #082f49, #0ea5e9);
}

.preview-purple {
    background: linear-gradient(135deg, #2e1065, #a855f7);
}

.project-card:hover {
    border-color: #22c55e;
    background: #222222;
    transform: translateY(-4px);
}

.project-card h3 {
    margin: 0 0 0.75rem;
    color: #d9d9d9;
    font-size: 1.25rem;
    font-weight: 800;
}

.project-card p {
    margin: 0;
    color: #a7a7a7;
    font-size: 0.98rem;
    line-height: 1.6;
}

.demo-button {
    display: inline-flex;
    width: fit-content;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1rem;
    border: 1px solid #22c55e;
    border-radius: 0.35rem;
    color: #22c55e;
    font-size: 0.95rem;
    font-weight: 800;
    text-decoration: none;
    transition:
        background-color 150ms,
        color 150ms,
        transform 150ms;
}

.demo-button:hover {
    background-color: #22c55e;
    color: #0f0f0f;
    transform: scale(1.03);
}

@media (max-width: 900px) {
    .projects {
        margin: 5rem 0;
    }
}

@media (max-width: 640px) {
    .projects {
        gap: 2.5rem;
        margin: 4rem 0;
    }

    .projects-heading h2 {
        font-size: 1.75rem;
    }

    .projects-heading p {
        font-size: 1rem;
    }

    .project-grid {
        grid-template-columns: 1fr;
    }
}
</style>

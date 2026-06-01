<script setup lang="ts">
const projects = [
    {
        title: 'Dashboard Financeiro',
        description: 'Interface para visualizar receitas, despesas e métricas de desempenho em tempo real.',
        demoUrl: '#',
        previewClass: 'preview-green',
    },
    {
        title: 'API de Tarefas',
        description: 'Serviço REST para gerenciamento de tarefas com autenticação e filtros por status.',
        demoUrl: '#',
        previewClass: 'preview-blue',
    },
    {
        title: 'Landing Page SaaS',
        description: 'Página responsiva para apresentação de produto, planos e captura de leads.',
        demoUrl: '#',
        previewClass: 'preview-purple',
    },
];
</script>

<template>
    <section class="projects" id="projetos">
        <div class="projects-heading">
            <h2>Projetos</h2>
            <p>Alguns trabalhos e estudos que representam meu processo de desenvolvimento.</p>
        </div>

        <div class="project-grid">
            <article v-for="project in projects" :key="project.title" class="project-card">
                <div>
                    <div class="project-preview" :class="project.previewClass" aria-hidden="true"></div>
                    <h3>{{ project.title }}</h3>
                    <p>{{ project.description }}</p>
                </div>

                <a :href="project.demoUrl" class="demo-button" target="_blank" rel="noopener noreferrer">
                    Ver demo
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
    transition: border-color 150ms, transform 150ms, background 150ms;
}

.project-preview {
    width: 100%;
    aspect-ratio: 16 / 9;
    margin-bottom: 1.25rem;
    border: 1px solid #2f2f2f;
    border-radius: 0.35rem;
    background: #22C55E;
}

.preview-green {
    background: linear-gradient(135deg, #052e16, #22C55E);
}

.preview-blue {
    background: linear-gradient(135deg, #082f49, #0ea5e9);
}

.preview-purple {
    background: linear-gradient(135deg, #2e1065, #a855f7);
}

.project-card:hover {
    border-color: #22C55E;
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
    border: 1px solid #22C55E;
    border-radius: 0.35rem;
    color: #22C55E;
    font-size: 0.95rem;
    font-weight: 800;
    text-decoration: none;
    transition: background-color 150ms, color 150ms, transform 150ms;
}

.demo-button:hover {
    background-color: #22C55E;
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

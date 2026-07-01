<script setup lang="ts">
import { t } from '../i18n';

const technologies = [
    { name: 'JavaScript', icon: '/javascript.svg' },
    { name: 'TypeScript', icon: '/typescript.svg' },
    { name: 'Vue', icon: '/vue.svg' },
    { name: 'React', icon: '/react.svg' },
    { name: 'Tailwind CSS', icon: '/tailwind.svg' },
    { name: 'Node.js', icon: '/nodejs.svg' },
    { name: 'Java', icon: '/java.svg' },
    { name: 'Spring', icon: '/spring.svg' },
    { name: 'Go', icon: '/go.svg' },
    { name: 'PostgreSQL', icon: '/postgres.svg' },
    { name: 'Redis', icon: '/redis.svg' },
    { name: 'Git', icon: '/git.svg' },
    { name: 'Docker', icon: '/docker.svg' },
    { name: 'Bash', icon: '/bash.svg' },
    { name: 'Linux', icon: '/tux.svg' },
    { name: 'GitHub', icon: '/github.svg' },
];
</script>

<template>
    <section class="tech-stack" id="stack">
        <div class="stack-heading">
            <h2>{{ t('stack.title') }}</h2>
            <p>{{ t('stack.subtitle') }}</p>
        </div>

        <ul class="tech-list">
            <li v-for="technology in technologies" :key="technology.name" class="tech-item">
                <img :src="technology.icon" :alt="technology.name" />
            </li>
        </ul>
    </section>
</template>

<style scoped>
.tech-stack {
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    margin: 7rem 0;
    scroll-margin-top: 2rem;
}

.stack-heading {
    text-align: center;
}

.stack-heading h2 {
    margin: 0 0 0.75rem;
    color: #d9d9d9;
    font-size: 2rem;
    font-weight: 800;
}

.stack-heading p {
    margin: 0 auto;
    max-width: 620px;
    color: #a7a7a7;
    font-size: 1.125rem;
    line-height: 1.6;
}

.tech-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(82px, 1fr));
    gap: 2.5rem 2rem;
    margin: 0;
    padding: 0;
    list-style: none;
}

.tech-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 0;
    gap: 0.65rem;
    color: #d9d9d9;
    text-align: center;
    transition: color 150ms, transform 150ms;
}

.tech-item:hover {
    color: #22C55E;
    transform: translateY(-4px);
}

.tech-item img {
    width: 64px;
    height: 64px;
    object-fit: contain;
}

@media (max-width: 900px) {
    .tech-stack {
        gap: 3rem;
        margin: 5rem 0;
    }
    .tech-list {
        grid-template-columns: repeat(auto-fit, minmax(76px, 1fr));
        gap: 2rem 1.5rem;
    }
}

@media (max-width: 640px) {
    .tech-stack {
        gap: 2.5rem;
        margin: 4rem 0;
    }

    .stack-heading h2 {
        font-size: 1.75rem;
    }

    .stack-heading p {
        font-size: 1rem;
    }

    .tech-item img {
        width: 54px;
        height: 54px;
    }

}

@media (max-width: 380px) {
    .tech-list {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1.5rem 1rem;
    }

    .stack-heading h2 {
        font-size: 1.5rem;
    }

    .stack-heading p {
        font-size: 0.95rem;
    }
}
</style>

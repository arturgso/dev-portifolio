<script setup lang="ts">
import { computed } from 'vue';
import { locale, toggleLocale, t } from '../i18n';

interface HeaderLinks {
    title: string;
    route: string;
}

const headerLinks = computed<HeaderLinks[]>(() => [
    {
        title: t('nav.home'),
        route: "#home",
    },
    {
        title: t('nav.about'),
        route: "#sobre",
    },
    {
        title: t('nav.stack'),
        route: "#stack",
    },
    {
        title: t('nav.projects'),
        route: "#projetos",
    },
    {
        title: t('nav.contact'),
        route: "#contato",
    },
]);
</script>

<template>
    <nav class="nav-button">
        <div class="nav-list">
            <ul class="header-links">
                <li v-for="item in headerLinks" :key="item.title">
                    <a class="header-link" :href="item.route">{{
                        item.title
                    }}</a>
                </li>
            </ul>
            <div class="actions-container">
                <button
                    class="lang-switcher"
                    @click="toggleLocale"
                    :aria-label="locale === 'pt' ? 'Switch to English' : 'Mudar para Português'"
                >
                    <svg class="globe-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    <span class="lang-text">{{ locale.toUpperCase() }}</span>
                </button>
                <ul class="social-links">
                    <li>
                        <a
                            href="https://github.com/arturgso"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span
                                class="social-icon github-icon"
                                aria-label="github"
                            ></span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/arturgaollidev/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span
                                class="social-icon linkedin-icon"
                                aria-label="linkedin"
                            ></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>


<style scoped>
.nav-button {
    display: flex;
    padding: 0.5rem 0;
    flex-direction: row;
    justify-content: space-between;
    color: #a7a7a7;
}

.nav-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
}

.header-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 0;
    padding: 0;
    list-style: none;
}

.header-link {
    color: inherit;
    font-size: 1.125rem;
    font-weight: 700;
    text-transform: capitalize;
    text-decoration: none;
    transition: color 150ms;
}

.header-link:hover {
    color: #22c55e;
}

.actions-container {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.lang-switcher {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    background: transparent;
    border: 1px solid #2f2f2f;
    border-radius: 2rem;
    padding: 0.4rem 0.8rem;
    color: #a7a7a7;
    cursor: pointer;
    font-size: 0.85rem;
    font-weight: 700;
    font-family: inherit;
    transition: all 150ms ease;
    outline: none;
}

.lang-switcher:hover {
    color: #22c55e;
    border-color: #22c55e;
    background: rgba(34, 197, 94, 0.05);
    transform: translateY(-1px);
}

.globe-svg {
    width: 14px;
    height: 14px;
}

.social-links {
    display: flex;
    flex-shrink: 0;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
    list-style: none;
}

.social-icon {
    display: block;
    width: 40px;
    height: 40px;
    background-color: #a7a7a7;
    transition:
        transform 150ms,
        background-color 150ms;
}

.social-icon:hover {
    background-color: #22c55e;
    transform: scale(1.1);
}

.github-icon {
    mask: url("/github.svg") center / contain no-repeat;
    -webkit-mask: url("/github.svg") center / contain no-repeat;
}

.linkedin-icon {
    mask: url("/linkedin.svg") center / contain no-repeat;
    -webkit-mask: url("/linkedin.svg") center / contain no-repeat;
}

@media (max-width: 760px) {
    .nav-list {
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
    }

    .header-links {
        gap: 0.75rem 1rem;
    }

    .header-link {
        font-size: 1rem;
    }

    .social-icon {
        width: 34px;
        height: 34px;
    }
}

@media (max-width: 420px) {
    .header-links {
        gap: 0.5rem 0.75rem;
    }

    .header-link {
        font-size: 0.9rem;
    }
}
</style>

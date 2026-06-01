<script setup lang="ts">

interface HeaderLinks {
    title: string;
    route: string;
}

const headerLinks: HeaderLinks[] = [
    {
        title: "home",
        route: "#home"
    },
    {
        title: "sobre mim",
        route: "#sobre"
    },
    {
        title: "stack",
        route: "#stack"
    },
{
        title: "projetos",
        route: "#projetos"
    },
    {
        title: "contato",
        route: "#contato"
    },
]
</script>

<template>
    <nav class="nav-button">
        <div class="nav-list">
            <ul class="header-links">
                <li v-for="item in headerLinks" :key="item.title">
                    <a class="header-link" :href="item.route">{{ item.title }}</a>
                </li>
            </ul>
            <ul class="social-links">
                <li>
                    <a href="https://codeberg.org/vexis" target="_blank" rel="noopener noreferrer">
                    <span class="social-icon github-icon" aria-label="github"></span>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/arturgaollidev/" target="_blank" rel="noopener noreferrer">
                    <span class="social-icon linkedin-icon" aria-label="linkedin"></span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>

.nav-button {
    display: flex;
    padding: 0.5rem 0;
    flex-direction: row;
    justify-content: space-between;
    color: #A7A7A7;
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
    color: #22C55E;
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
    transition: transform 150ms, background-color 150ms;
}

.social-icon:hover {
    background-color: #22C55E;
    transform: scale(1.1);
}

.github-icon {
    mask: url('/github.svg') center / contain no-repeat;
    -webkit-mask: url('/github.svg') center / contain no-repeat;
}

.linkedin-icon {
    mask: url('/linkedin.svg') center / contain no-repeat;
    -webkit-mask: url('/linkedin.svg') center / contain no-repeat;
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

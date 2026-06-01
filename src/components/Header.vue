<script setup lang="ts">

interface HeaderLinks {
    title: string;
    route: string;
}

const headerLinks: HeaderLinks[] = [
    {
        title: "home",
        route: ""
    },
    {
        title: "sobre mim",
        route: ""
    },
    {
        title: "stack",
        route: ""
    },
{
        title: "projetos",
        route: ""
    },
    {
        title: "contato",
        route: ""
    },
]
</script>

<template>
    <nav class="nav-button">
        <ul class="nav-list">
            <div class="header-links">
                <li v-for="item in headerLinks" :key="item.title">
                    <button class="header-link">
                    {{ item.title }}
                    </button>
                </li>
            </div>
            <div class="social-links">
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
            </div>
        </ul>
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
    width: 100%;
}

.header-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.header-link {
    color: inherit;
    font-size: 1.125rem;
    font-weight: 700;
    text-transform: capitalize;
    background: none;
    border: 0;
    cursor: pointer;
    transition: color 150ms;
}

.header-link:hover {
    color: #22C55E;
}

.social-links {
    display: flex;
    gap: 0.5rem;
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
</style>

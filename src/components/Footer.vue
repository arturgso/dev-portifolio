<template>
    <footer class="footer">
        <p>Desenvolvido por Artur</p>
        <div class="footer-links">
            <a href="https://codeberg.org/vexis" target="_blank" rel="noopener noreferrer">Codeberg</a>
            <a href="https://www.linkedin.com/in/arturgaollidev/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 2rem 0;
    border-top: 1px solid #2f2f2f;
    color: #a7a7a7;
}

.footer p {
    margin: 0;
    font-size: 0.95rem;
    font-weight: 700;
}

.footer-links {
    display: flex;
    gap: 1rem;
}

.footer a {
    color: inherit;
    font-size: 0.95rem;
    font-weight: 800;
    text-decoration: none;
    transition: color 150ms;
}

.footer a:hover {
    color: #22C55E;
}

@media (max-width: 640px) {
    .footer {
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
}
</style>

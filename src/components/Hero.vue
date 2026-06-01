<script setup lang="ts">
</script>

<template>
    <section class="hero-container" id="home">
        <h1 class="message">
            Olá 👋,<br />
            Meu nome é<br />
            <span>Artur</span><br />
            Eu faço sites para web
        </h1>
        <div class="dev-pic"></div>
    </section>
</template>

<style scoped>
    .hero-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        gap: 4rem;
        margin: 6em 0;
        min-width: 0;
    }

    .message {
        margin: 0;
        color: #d9d9d9;
        font-size: 3rem;
        font-weight: 800;
        line-height: 1.2;
        overflow-wrap: anywhere;
    }

    .message span {
        background: linear-gradient(90deg, #22C55E, #86efac);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }

    .dev-pic {
        width: 260px;
        height: 260px;
        flex: 0 0 260px;
        padding: 6px;
        border-radius: 50%;
        background: linear-gradient(160deg, #22C55E 0%, #16a34a 45%, #86efac 100%);
    }

    .dev-pic::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: url("/dev.webp") center calc(50% + 20px) / cover no-repeat;
    }

    @media (max-width: 1200px) {
        .message {
            font-size: 2.5rem;
        }

        .dev-pic {
            width: 220px;
            height: 220px;
            flex-basis: 220px;
        }
    }

    @media (max-width: 900px) {
        .hero-container {
            gap: 2rem;
            margin: 3.5em 0;
        }

        .message {
            font-size: 1.75rem;
        }

        .dev-pic {
            width: 160px;
            height: 160px;
            flex-basis: 160px;
        }

    }

    @media (max-width: 640px) {
        .hero-container {
            flex-direction: column;
            align-items: center;
            gap: 2rem;
            margin: 3em 0;
            text-align: center;
        }

        .message {
            font-size: 1.6rem;
        }

        .dev-pic {
            width: 150px;
            height: 150px;
            flex-basis: 150px;
        }
    }

    @media (max-width: 380px) {
        .message {
            font-size: 1.4rem;
        }

        .dev-pic {
            width: 130px;
            height: 130px;
            flex-basis: 130px;
        }
    }
</style>

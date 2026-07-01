<script setup lang="ts">
import { t } from '../i18n';
</script>

<template>
    <section class="about" id="sobre">
        <div class="section-heading">
            <h2>{{ t('about.title') }}</h2>
        </div>

        <div class="about-content">
            <p>
                {{ t('about.text') }}
            </p>
        </div>
    </section>
</template>

<style scoped>
.about {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    margin: 7rem 0;
    scroll-margin-top: 2rem;
}

.section-heading {
    text-align: center;
}

.section-heading h2 {
    margin: 0;
    color: #d9d9d9;
    font-size: 2rem;
    font-weight: 800;
}

.about-content {
    max-width: 720px;
    text-align: center;
}

.about-content p {
    margin: 0;
    color: #a7a7a7;
    font-size: 1.05rem;
    line-height: 1.7;
}

@media (max-width: 760px) {
    .about {
        margin: 5rem 0;
    }
}

@media (max-width: 640px) {
    .section-heading h2 {
        font-size: 1.75rem;
    }

    .about-content p {
        font-size: 1rem;
    }
}
</style>

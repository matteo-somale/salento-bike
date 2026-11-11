<script setup>
import { getNewsList } from '~/utils/news'

const props = defineProps({
    slugCorrente: { type: String, required: true },
})

const altreNews = computed(() =>
    getNewsList().filter((item) => item.slug !== props.slugCorrente).slice(0, 2)
)
</script>

<template>
    <section class="py-5">
        <div class="">
            <div class="row align-items-end g-4 mb-4">
                <div class="col-12 col-md-8 d-flex flex-column">
                    <p class="eyebrow text-orange mb-0">BLOG & NEWS</p>
                    <h2 class="text-primary mt-2">Altri racconti, consigli ed eventi dal&nbsp;Salento</h2>
                </div>
                <div class="col-12 col-md-4 d-none d-md-flex justify-content-end">
                    <NuxtLink to="/news" class="d-flex align-items-center fw-bold gap-2 text-orange text-decoration-none">
                        <span>Torna a tutte le news</span>
                        <span aria-hidden="true">&rarr;</span>
                    </NuxtLink>
                </div>
            </div>
            <div class="row g-4">
                <div
                    v-for="(item, index) in altreNews"
                    :key="item.slug"
                    class="col-12 col-md-6"
                    data-aos="fade-up"
                    :data-aos-delay="index * 100"
                >
                    <NuxtLink :to="`/news/${item.slug}`" class="d-block text-decoration-none">
                        <NuxtImg :src="item.immagine" class="rounded-sm w-100 mb-3 article-cover" :alt="item.titolo"
                            format="webp" sizes="xs:100vw sm:540px md:660px" loading="lazy" />
                        <p class="eyebrow text-orange">{{ item.dataFormattata }}</p>
                        <h3 class="fw-bold text-primary title-clamp-3">{{ item.titolo }}</h3>
                    </NuxtLink>
                </div>
            </div>
            <NuxtLink to="/news" class="btn btn-outline-primary w-100 d-md-none mt-4">
                Vedi tutte le news
            </NuxtLink>
        </div>
    </section>
</template>

<style scoped>
.article-cover {
    height: 280px;
    object-fit: cover;
}

.title-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>

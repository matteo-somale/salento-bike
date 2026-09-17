<!-- pages/index.vue -->
<template>
  <div>

    <CarouselHero></CarouselHero>

    <JumboMap></JumboMap>

    <CarouselDestination></CarouselDestination>
    <BannerApp></BannerApp>

    <CheckArticles></CheckArticles>

    <JumboSlowCard></JumboSlowCard>
  </div>
</template>

<script setup>
function handleClick() {
  console.log('cliccato')
}
</script>
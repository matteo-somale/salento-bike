<template>
    <GalleriaMasonry></GalleriaMasonry>

    <MainVideo
        subtitle="da chi l'ha provato"
        title="I video dal Salento in&nbsp;bici"
        text="Su due ruote tra paesaggi mozzafiato, antiche masserie e borghi del Barocco. Guarda i video di chi già ha fatto questa esperienza!"
        :youtube-links="youtubeLinks"
        button-link="/percorso"
    ></MainVideo>

    <JumboSlowCard></JumboSlowCard>
</template>

<script setup>
const youtubeLinks = [
  'https://www.youtube.com/embed/yRV_RfbSl8k?list=PLVEJssP1vh2Y9s1WmoRJz4-09JK9O515K&enablejsapi=1',
  'https://www.youtube.com/embed/VWKEaJizJKc?list=PLVEJssP1vh2Y9s1WmoRJz4-09JK9O515K&enablejsapi=1',
  'https://www.youtube.com/embed/QruvlHL8b7Q?list=PLVEJssP1vh2Y9s1WmoRJz4-09JK9O515K&enablejsapi=1',
  'https://www.youtube.com/embed/IEHfoeXHQ60?list=PLVEJssP1vh2Y9s1WmoRJz4-09JK9O515K&enablejsapi=1',
  'https://www.youtube.com/embed/FbQ9DHrIP-k?list=PLVEJssP1vh2Y9s1WmoRJz4-09JK9O515K&enablejsapi=1',
  'https://www.youtube.com/embed/xji1bGCTPmw'
]
</script>

<template>
    <SinglePercorsoHero
      image="/img/destinazioni/hero-salento-segnaposto.jpg"
      overlay-color="#1C4059"
      logo="/logo/logo-ladriatica-vert-white.svg"
      title="PLACEHOLDER - Titolo da sostituire con contenuti reali"
      text="PLACEHOLDER - Testo da sostituire con la descrizione reale della Ladriatica."
      button-text="PLACEHOLDER - Vedi i percorsi"
      button-link="/percorsi"
    ></SinglePercorsoHero>

    <BannerCitation
      background-color="#1C4059"
      logo="/logo/logo-ladriatica-vert-white.svg"
      eyebrow="IL SALENTO orientale"
      title="PLACEHOLDER - Titolo da sostituire con contenuti reali"
      text="PLACEHOLDER - Testo da sostituire con la citazione/descrizione reale per la Ladriatica."
      subtitle="PLACEHOLDER - Nome e cognome"
    ></BannerCitation>

    <PercorsoParagrafo
      sopratitolo="IL SALENTO orientale"
      titolo="La magia di Finibus Terrae"
      testo="Partendo da Lecce si pedala immergendosi nel verde dell’Oasi delle Cesine e arrivare a Otranto per scoprire la magia della cava di bauxite sul mare e la suggestione del faro più a Est d’Italia. Si attraversa l’intero parco regionale, uno scrigno di tesori naturali, fino alla terra estrema di Finibus Terrae per far ritorno a Lecce dai borghi antichi dell’entroterra, fra muretti a secco, patriarchi verdi e la terra di dolmen e menhir"
      immagine="/img/destinazioni/foto-lecce-segnaposto.jpg"
      logo="/logo/logo-ladriatica-simple.svg"
      colore-sfondo="#007FC3"
      :alt-layout="false"
      :bottoni="[{ testoBottone: 'Scopri i percorsi', linkBottone: '/about' }]"
    ></PercorsoParagrafo>

    <PercorsoParagrafo
      sopratitolo="lungo il percorso"
      titolo="Barocco, mare e natura"
      testo="È un itinerario ricco di chicche, lontani dal clamore del turismo balneare: dal famoso barocco di Lecce fino alla suggestione del mosaico di Otranto e ai tesori bizantini nelle chiese rupestri; dalla piscina naturale nella roccia fino ai muretti a secco e ai borghi incantati."
      immagine="/img/destinazioni/foto-lecce-segnaposto.jpg"
      logo="/logo/logo-ladriatica-simple.svg"
      colore-sfondo="#007FC3"
      :alt-layout="true"
      :bottoni="[{ testoBottone: 'Scopri i punti di interesse', linkBottone: '/about' }]"
    ></PercorsoParagrafo>

    <PercorsoParagrafo
      sopratitolo="BAROCCO E TRADIZIONE"
      titolo="Fra borghi, mare e campagna"
      testo="Si parte da Lecce e si arriva al mare seguendo un percorso ciclabile su strade a bassa intensità di traffico che attraversano il Salento ionico. Un viaggio in sei tappe tra spiagge selvagge e fitte pinete, centri storici, piccole frazioni e la rete dei parchi naturali che si affacciano sulla costa ionica. Dal rosa dei fenicotteri al verde intenso dei pini marittimi, dal giallo delle ginestre in fiore all'azzurro del mare: preparati a pedalare tra i colori!"
      immagine="/img/destinazioni/foto-lecce-segnaposto.jpg"
      logo="/logo/logo-ladriatica-simple.svg"
      colore-sfondo="#007FC3"
      :alt-layout="false"
      :bottoni="[{ testoBottone: 'Scopri le location', linkBottone: '/about' }]"
    ></PercorsoParagrafo>
</template>

<script setup>

</script>
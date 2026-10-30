<template>
    <SinglePercorsoHero
      image="/img/galleria/ciclonica/11_TORRE_SABEA_phROBERTOGUIDO.jpg"
      overlay-color="#119660"
      logo="/logo/logo-ciclonica-vert-white.svg"
      title="Scopri il Salento Ionico in bici"
      text="La straordinaria avventura di pedalare nelle terre del Salento tra parchi costieri, borghi e spiagge selvagge"
      button-text="Vedi i percorsi"
      button-link="/percorsi?destination=ciclonica"
      button-variant="btn-secondary"
    ></SinglePercorsoHero>
    

    <!-- md e superiori: impilati -->
    <div class="d-none d-md-flex py-5 flex-column gap-5">
      <PercorsoParagrafo
        v-for="(percorso, index) in percorsi"
        :key="index"
        v-bind="percorso"
      ></PercorsoParagrafo>
    </div>

    <!-- sotto md: swiper classico -->
    <div class="d-md-none py-5">
      <ClientOnly>
        <swiper-container
          class="percorsi-swiper"
          pagination="true"
          slides-per-view="1"
          space-between="16"
        >
          <swiper-slide v-for="(percorso, index) in percorsi" :key="index">
            <PercorsoParagrafo v-bind="percorso"></PercorsoParagrafo>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>

    <BannerCitation
      background-color="#119660"
      logo="/logo/logo-ciclonica-vert-white.svg"
      eyebrow="DALL'IDEATORE DEL LOGO"
      title="Perché il logo Ciclonica"
      text="Credo molto nelle reti e nella cooperazione tra enti e componenti positive della comunità. Credo nella necessità di tenere insieme tutte le terre dei parchi salentini, luoghi che rappresentano radici, prospettive e visioni condivise del Salento. <br> Ho immaginato Ciclonica come un asse di collegamento tra i comuni dell'area ionico salentina, capace di unire territori, persone e futuro. Ho ideato il nome e il concept del logo, facendo incontrare la bicicletta al tamburello della pizzica salentina, ovvero il movimento al ritmo ancestrale di questa terra, il suono della natura al battito del cuore. <br> “Sono fiero di aver contribuito fin dall'inizio alla fondazione della Green Community Jonico-Adriatica”"
      subtitle="Agostino Indennitate"
    ></BannerCitation>

    <BannerPassport></BannerPassport>

    <BannerGuidaCiclonica></BannerGuidaCiclonica>

    <MainVideo
        subtitle="da chi l'ha provato"
        title="I video dal Salento in&nbsp;bici"
        text="Su due ruote tra paesaggi mozzafiato, antiche masserie e borghi del Barocco. Guarda i video di chi già ha fatto questa esperienza!"
        :youtube-links="youtubeLinks"
        button-link="/percorso"
    ></MainVideo>

    <JumboGreenRoad></JumboGreenRoad>

    <JumboSlowCard></JumboSlowCard>
</template>

<script setup>
const youtubeLinks = [
  'https://www.youtube.com/embed/yRV_RfbSl8k?list=PLVEJssP1vh2Y9s1WmoRJz4-09JK9O515K&enablejsapi=1',
  'https://www.youtube.com/embed/VWKEaJizJKc?list=PLVEJssP1vh2Y9s1WmoRJz4-09JK9O515K&enablejsapi=1',
  'https://www.youtube.com/embed/QruvlHL8b7Q?list=PLVEJssP1vh2Y9s1WmoRJz4-09JK9O515K&enablejsapi=1',
  'https://www.youtube.com/embed/IEHfoeXHQ60?list=PLVEJssP1vh2Y9s1WmoRJz4-09JK9O515K&enablejsapi=1',
  'https://www.youtube.com/embed/FbQ9DHrIP-k?list=PLVEJssP1vh2Y9s1WmoRJz4-09JK9O515K&enablejsapi=1'
]

const percorsi = [
  {
    sopratitolo: 'IL SALENTO IONICO',
    titolo: 'Un percorso unico',
    testo: `Si parte da Lecce e si arriva al mare seguendo un percorso ciclabile su strade a bassa intensità di traffico, sterrati e interpoderali. 
Un viaggio in sei tappe,  o in 5 anelli giornalieri, tra spiagge selvagge e fitte pinete, centri storici, piccole frazioni e la rete dei parchi naturali che si affacciano sulla costa ionica. Dal rosa dei fenicotteri al verde intenso dei pini marittimi, dal giallo delle ginestre in fiore all’azzurro del mare: preparati a pedalare tra i colori!`,
    immagini: ['/img/galleria/ciclonica/08_BAIAVERDE_phROBERTOGUIDO.jpg'],
    logo: '/logo/logo-ciclonica-simple.svg',
    coloreSfondo: '#119660',
    altLayout: false,
    bottoni: [{ testoBottone: 'Scopri i percorsi', linkBottone: 'https://ebike.bikesquare.eu/percorsi?destinations=salento&tags=ciclonica', icona: 'lucide:bike' }],
  },
  {
    sopratitolo: 'Barocco e tradizione',
    titolo: 'Scopri il Salento più autentico',
    testo: `Lecce, capitale del Barocco, Galatina, patria della taranta e del pasticciotto, le spiagge di
Gallipoli e quelle di Ugento, la costa intatta di Portoselvaggio e le piccole marine ancora non interessate dal turismo di massa. Un viaggio in un Salento inaspettato, facile da pedalare e bello da scoprire soprattutto in bassa stagione.`,
    immagini: [
      '/img/foto-nard-barocca.jpg',
      '/img/galleria/ciclonica/13_PORTOSELVAGGIO_phROBERTOGUIDO.jpg',
    ],
    logo: '/logo/logo-ciclonica-simple.svg',
    coloreSfondo: '#119660',
    altLayout: true,
    bottoni: [{ testoBottone: 'Scopri i punti di interesse', linkBottone: 'https://ebike.bikesquare.eu/pois?destination=salento&tags=ciclonica&categorie=da-vedere,informazioni-turistiche,spiagge,parco-area-naturalistica', icona: 'fluent:image-search-24-filled' }],
  },
  {
    sopratitolo: 'lungo il percorso',
    titolo: 'Una rete di ospitalità bikefriendly',
    testo: `Abbiamo messo insieme una rete di strutture bike-friendly, luoghi accoglienti che combinano la tradizionale ospitalità del territorio con l’attenzione all’ambiente e le esigenze dei ciclisti. Molti operatori della rete hanno partecipato a un corso ASTA – Alta Scuola di Turismo Ambientale, per migliorare la loro proposta di accoglienza e arricchirla di servizi e informazioni per chi va in bicicletta. `,
    immagini: ['/img/galleria/ciclonica/12_SANTAMARIAALBAGNO_1_phROBERTOGUIDO.jpg'],
    logo: '/logo/logo-ciclonica-simple.svg',
    coloreSfondo: '#119660',
    altLayout: false,
    bottoni: [{ testoBottone: 'Scopri le location', linkBottone: 'https://ebike.bikesquare.eu/pois?destination=salento&tags=ciclonica&categorie=enogastronomia,noleggio-e-bike,mangiare,dormire,esperienze-benessere,informazioni-turistiche', icona: 'ph:map-pin-fill' }],
  },
]
</script>

<style scoped>
.percorsi-swiper swiper-slide {
  padding-bottom: 2.5rem;
  box-sizing: border-box;
}
</style>

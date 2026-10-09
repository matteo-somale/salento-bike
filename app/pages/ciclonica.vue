<template>
    <SinglePercorsoHero
      image="/img/destinazioni/hero-salento-segnaposto.jpg"
      overlay-color="#119660"
      logo="/logo/logo-ciclonica-vert-white.svg"
      title="Scopri il Salento Ionico in bici"
      text="La straordinaria avventura di pedalare nelle terre del Salento tra parchi costieri, borghi e spiagge selvagge"
      button-text="Vedi i percorsi"
      button-link="/percorsi"
    ></SinglePercorsoHero>

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

    <PercorsoParagrafo
      sopratitolo="IL SALENTO IONICO"
      titolo="Un percorso unico"
      testo="Si parte da Lecce e si arriva al mare seguendo un percorso ciclabile su strade a bassa intensità di traffico, sterrati e interpoderali. 
Un viaggio in sei tappe,  o in 5 anelli giornalieri, tra spiagge selvagge e fitte pinete, centri storici, piccole frazioni e la rete dei parchi naturali che si affacciano sulla costa ionica. Dal rosa dei fenicotteri al verde intenso dei pini marittimi, dal giallo delle ginestre in fiore all’azzurro del mare: preparati a pedalare tra i colori!"
      immagine="/img/destinazioni/foto-lecce-segnaposto.jpg"
      logo="/logo/logo-ciclonica-simple.svg"
      colore-sfondo="#119660"
      :alt-layout="false"
      :bottoni="[{ testoBottone: 'Scopri i percorsi', linkBottone: '/about' }]"
    ></PercorsoParagrafo>

    <PercorsoParagrafo
      sopratitolo="barocco e tradizione"
      titolo="Scopri il Salento più autentico"
      testo="Lecce, capitale del barocco, Galatina, patria della taranta e del pasticciotto, le spiagge di
Gallipoli e quelle di Ugento, la costa intatta di Portoselvaggio e le piccole marine ancora non interessate dal turismo di massa. Un viaggio in un Salento inaspettato, facile da pedalare e bello da scoprire soprattutto in bassa stagione."
      immagine="/img/destinazioni/foto-dest-salento.png"
      logo="/logo/logo-ciclonica-simple.svg"
      colore-sfondo="#119660"
      :alt-layout="true"
      :bottoni="[{ testoBottone: 'Scopri i punti di interesse', linkBottone: '/about' }]"
    ></PercorsoParagrafo>

    <PercorsoParagrafo
      sopratitolo="lungo il percorso"
      titolo="Una rete di ospitalità Bikefriendly"
      testo="Abbiamo messo insieme una rete di strutture bike-friendly, luoghi accoglienti che combinano la tradizionale ospitalità del territorio con l’attenzione all’ambiente e le esigenze dei ciclisti. Molti operatori della rete hanno partecipato a un corso ASTA – Alta Scuola di Turismo Ambientale, per migliorare la loro proposta di accoglienza e arricchirla di servizi e informazioni per chi va in bicicletta. "
      immagine="/img/destinazioni/hero-salento-segnaposto.jpg"
      logo="/logo/logo-ciclonica-simple.svg"
      colore-sfondo="#119660"
      :alt-layout="false"
      :bottoni="[{ testoBottone: 'Scopri le location', linkBottone: '/about' }]"
    ></PercorsoParagrafo>
</template>

<script setup>

</script>
<template>
  <div class="bg-gray-950 text-white flex-col w-full h-screen font-sans">
      <PageHeader :mode="garecentrale ? ['rem', 'train'] : ['metro']">{{ snowdon ? 'Snowdon' : garecentrale ? 'Gare Centrale' : 'Berri-UQAM' }}</PageHeader>
      <SectionHeader>Prochains départs</SectionHeader>
      <div class="divide-gray-900 divide-y-4" v-if="snowdon">
        <NextDeparture line="2" direction="Côte-Vertu" next="2" following="8" />
        <NextDeparture line="2" direction="Montmorency" next="1" following="7" />
        <NextDeparture line="5" direction="Saint-Michel" next="1" following="5" />
      </div>
      <div class="divide-gray-900 divide-y-4" v-else-if="garecentrale">
        <NextDeparture line="A1" direction="Brossard" next="1" following="3" />
        <NextDeparture line="A2" direction="YUL-Aéroport-Montréal-Trudeau" next="7" following="17" airport />
        <NextDeparture line="A3" direction="Anse-à-l'Orme" next="2" following="12" />
        <NextDeparture line="A4" direction="Deux-Montagnes" next="4" following="9" />
        <NextDeparture line="13" direction="Mont-Saint-Hilaire" next="1" following="41" />
      </div>
      <div class="divide-gray-900 divide-y-4" v-else>
        <NextDeparture line="1" direction="Honoré-Beaugrand" next="1" following="5" />
        <NextDeparture line="1" direction="Angrignon" next="4" following="11" />
        <NextDeparture line="2" direction="Côte-Vertu" next="2" following="8" />
        <NextDeparture line="2" direction="Montmorency" next="1" following="7" />
        <NextDeparture line="4" direction="Longueuil–Université-de-Sherbrooke" next="1" following="5" />
      </div>
      <SectionHeader>À venir</SectionHeader>
      <div class="px-8 py-4 text-5xl flex items-start gap-x-6">
        <nuxt-icon name="lines/A" filled class="text-7xl"/>
        <p>Le service débutera à 7 h le <b>samedi 3 février</b>, sur toutes les branches, pour une maintenance du système. Navette disponibles. Détails au <u>artm.quebec/rem-samedi</u>.</p>
      </div>
      <SectionHeader>Votre station</SectionHeader>
      <div class="divide-gray-900 divide-y-4" v-if="snowdon || garecentrale">
        <VerticalStatus type="elevator" :routesOut="[]" />
        <VerticalStatus type="escalator" :routesOut="[]" />
      </div>
      <div class="divide-gray-900 divide-y-4" v-else>
        <VerticalStatus type="elevator" :routesOut="[['Accès UQÀM', 'Billetterie'], ['Billetterie', 'Quai Honoré-Beaugrand']]" />
        <VerticalStatus type="escalator" :routesOut="[['Quai Honoré-Beaugrand', 'Corridor vers la ligne 4 - jaune'], ['Quai Montmorency', 'Quai Honoré-Beaugrand']]" />
      </div>
      <SectionHeader>État du réseau</SectionHeader>
      <div class="divide-gray-900 divide-y-4 text-3xl" v-if="snowdon">
        <StatusGroup title="Interruption" :statuses="[]" />
        <StatusGroup title="Ralentissement" :statuses="[]" />
        <StatusGroup title="Service normal" :lines="[1,2,4,5,'A1','A2','A3','A4',11,12,13,14,15]" />
      </div>
      <div class="divide-gray-900 divide-y-4 text-3xl" v-else>
        <StatusGroup title="Interruption" :statuses="[
            {
                line: '5',
                route: ['Snowdon', 'Saint-Michel'],
                note: 'Intrusion sur la voie. Reprise prévue à 16:00.'
            }
        ]" />
        <StatusGroup title="Ralentissement" v-if="!garecentrale" :statuses="[
            {
                line: 'A4',
                route: ['YUL-Aéroport', 'Bois-Franc'],
                note: 'Achalandage élevé. Prévoir quelques minutes de plus à vos déplacements vers l\'aéroport.'
            }
        ]" />
        <StatusGroup title="Service normal" :lines="[1,2,4,'A1', 'A2', 'A3',11,12,13,14,15]" />
      </div>
  </div>
</template>

<script setup lang="ts">
const { params } = useRoute()

const snowdon = params.stopid === 'snowdon'
const garecentrale = params.stopid === 'garecentrale' 
</script>
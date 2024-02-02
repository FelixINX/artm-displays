<template>
<div class="w-screen h-screen bg-gray-950 flex flex-col justify-center text-white font-display">
    <p class="absolute top-6 left-14 text-2xl">Sur n'importe quel page, déplacez votre souris vers ce coin pour revenir ici.</p>
    <div class="container mx-auto p-8">
        <h1 class="text-7xl font-bold">Totem d'accueil</h1>
        <div class="space-x-2 text-5xl mt-4">
            <NuxtLink class="bg-gray-900 p-2" to="/departures/berriuqam">Berri-UQAM</NuxtLink>
            <NuxtLink class="bg-gray-900 p-2" to="/departures/garecentrale">Gare Centrale</NuxtLink>
            <NuxtLink class="bg-gray-900 p-2" to="/departures/snowdon">Snowdon</NuxtLink>
        </div>
    </div>
</div>
</template>
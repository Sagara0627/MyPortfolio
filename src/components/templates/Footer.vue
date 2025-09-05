<script setup lang="ts">
const icons = [
  { name: 'github', icon: 'fa-brands fa-github', url: 'https://github.com/Sagara0627' },
  // { name: 'x', icon: 'fa-brands fa-square-x-twitter', url: 'https://x.com/gara41679531?s=21&t=E1vRoFGOAilAzpCgBBw-fA' },
  // { name: 'facebook', icon: 'fa-brands fa-facebook', url: 'https://facebook.com/share/1DHjj2Z1VG/?mibextid=wwXlfr' },
  // { name: 'instagram', icon: 'fa-brands fa-instagram', url: 'https://instagram.com/garastagrm' },
  { name: 'qiita', icon: 'fa-solid fa-q', url: 'https://qiita.com/s-y0001' },
]
</script>

<template>
  <v-footer class="py-4 px-8 d-flex justify-space-between align-center">
    <div>© 2025 Sagara Yuya</div>
    <div>
      <v-btn v-for="icon in icons" :key="icon.name" :icon="icon.icon" :href="icon.url" variant="flat" target="_blank" rel="noopener" />
    </div>
  </v-footer>
</template>

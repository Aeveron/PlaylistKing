<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
import Homepage from '@/components/Homepage';
import Navbar from '@/components/Navbar';
import PlaylistSelect from '@/components/playlist-control/PlaylistSelect';

export default {
  name: 'App',
  components: {
    Homepage,
    Navbar,
    PlaylistSelect
  }
}
</script>

<style>
</style>

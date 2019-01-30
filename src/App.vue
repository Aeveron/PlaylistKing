<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
import Homepage from '@/components/Homepage';
import Navbar from '@/components/Navbar';

export default {
  name: 'App',
  components: {
    Homepage,
    Navbar
  }
}
</script>

<style>
</style>

<template>
<div>
    <b-button @click="removeSong(index)">X</b-button>
</div>
</template>

<script>
import vids from '@/components/VideoPlayer';
export default {
  data() {
    return {
      
    };
  },
  methods: {
    removeSong: function(index) {
      this.vids.splice(index, 1);
    }
  }
};
</script>

<style>
</style>

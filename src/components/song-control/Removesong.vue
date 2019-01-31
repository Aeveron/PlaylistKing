<template>
<div>
    <b-button>X</b-button>
</div>
</template>

<script>
import Videos from "@/components/VideoPlayer";
export default {
  data() {
    return {
      currentVideo: Videos[0]
    };
  },
  methods: {
    removeSong: function(index) {
      this.currentVideo.splice(index, 1);
    }
  }
};
</script>

<style>
</style>

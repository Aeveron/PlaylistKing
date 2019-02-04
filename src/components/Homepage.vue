<template>
  <div>
    <navbar/>
    <playlist-select></playlist-select>
    <video-player></video-player>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import PlaylistSelect from "@/components/playlist-control/PlaylistSelect";
import VideoPlayer from "@/components/VideoPlayer";
import Removesong from '@/components/song-control/Removesong';

export default {
  data() {
    return {};
  },
  components: { Navbar: Navbar, PlaylistSelect, VideoPlayer, Removesong }
};
</script>

<style scoped>
</style>

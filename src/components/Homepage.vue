<template>
  <div>
    <navbar/>
    <playlist-select></playlist-select>
    <search></search>
    <video-player></video-player>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import PlaylistSelect from "@/components/playlist-control/PlaylistSelect";
import VideoPlayer from "@/components/VideoPlayer";
import Removesong from '@/components/song-control/Removesong';
import Search from '@/components/song-control/Search';

export default {
  data() {
    return {};
  },
  components: { Navbar: Navbar, PlaylistSelect, VideoPlayer, Removesong, Search }
};
</script>

<style scoped>
</style>

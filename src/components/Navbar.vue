<template>
  <div class="nav-bar">
    <b-navbar
      toggleable="md"
      type="dark"
      variant="dark"
    >
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-nav-text
        class="navtextcolor"
        style="font-size: 30px"
      >Playlist King</b-nav-text>

      <b-collapse
        is-nav
        id="nav_collapse"
      >
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item-dropdown left>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em
                class="navtextcolor"
                style="font-size: 20px"
              >Saved playlists and more</em>
            </template>
            <b-dropdown-item
              href="#"
              variant="dark"
              style="font-size: 15px"
            >All playlists</b-dropdown-item>
            <b-dropdown-item
              href="#"
              variant="dark"
              style="font-size: 15px"
            >History</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>

      <b-collapse
        is-nav
        id="nav_collapse"
      >
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form
            action="http://www.youtube.com/results"
            method="get"
            target=""
          >
            <b-form-input
              name="search_query"
              maxlength="128"
              size="md"
              class="mr-sm-3"
              type="text"
              placeholder="Search for a song or vid"
            />
            <b-button v-on="click=searchForSong()"
              size="md"
              class="my-2 my-sm-0"
              type="submit"
              variant="warning"
            >Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em
                class="navtextcolor"
                style="font-size: 20px"
              >User</em>
            </template>
            <b-dropdown-item
              href="#"
              variant="dark"
            >Profile</b-dropdown-item>
            <b-dropdown-item
              href="#"
              variant="dark"
            >Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<script>
import Search from '@/components/song-control/Search';
import axios from 'axios';

export default {
  name: 'Navbar',
  components: { Search },
  data () {
    return {
      searchValue: ""
    }
  },
  methods: {
    searchForSong () {
      axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key={1z0xOQGZo0Xxwj2bih7ylXyD}').then(function (response) {
        console.log(response);
      })
        .catch(function (error) {
          console.log(error);
        });
    } 
  }
  
};

</script>

<style scoped>
.navtextcolor {
  color: orange;
  padding: 5px;
}
.nav-bar {
  margin: 0px 10px;
}
</style>
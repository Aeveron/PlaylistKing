<template>
  <div class="nav-bar">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-nav-text class="navtextcolor" style="font-size: 30px">Playlist King</b-nav-text>

      <b-collapse is-nav id="nav_collapse">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
        

          <b-nav-item-dropdown left>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em class="navtextcolor" style="font-size: 20px">Saved playlists and more</em>
            </template>
            <b-dropdown-item href="#" variant="dark" style="font-size: 15px">All playlists</b-dropdown-item>
            <b-dropdown-item href="#" variant="dark" style="font-size: 15px">History</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>

      <b-collapse is-nav id="nav_collapse">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-3" type="text" placeholder="Search for a song or vid" />
            <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="warning">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em class="navtextcolor" style="font-size: 20px">User</em>
            </template>
            <b-dropdown-item href="#" variant="dark">Profile</b-dropdown-item>
            <b-dropdown-item href="#" variant="dark">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default {
      name: 'Navbar'
  };
</script>

<style scoped>
.navtextcolor{
    color: orange;
}

</style>
<template>
  <b-navbar toggleable="md" type="dark" variant="dark" sticky>
    <b-navbar-brand href="#" to="/">
      <img src="../assets/konddify_icon.png" class="d-inline-block align-top" alt="Konddify"> <span>Konddify</span>
    </b-navbar-brand>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto text-right">
        <div class="logo d-md-none d-lg-none d-xl-none mt-2"></div>
        <b-nav-item-dropdown no-caret>
          <template slot="button-content">
            <span><icon name="building"></icon> Propiedades</span>
          </template>
          <b-dropdown-item href="#" to="/admin/properties"><icon name="list"></icon> Lista</b-dropdown-item>
          <b-dropdown-item href="#" to="/admin/addProp"><icon name="plus"></icon> Agregar</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="#"><icon name="bug"></icon> Incidentes</b-nav-item>
        <b-nav-item href="#"><icon name="bell"></icon> Avisos</b-nav-item>
        <b-nav-item href="#"><icon name="gavel"></icon> Reglamentos</b-nav-item>
        <b-nav-item href="#"><icon name="file"></icon> Reportes</b-nav-item>
        <b-nav-item-dropdown no-caret>
          <template slot="button-content">
            <span><icon name="cogs"></icon> Configuración</span>
          </template>
          <b-dropdown-item href="#" to="/info/profile"><icon name="user"></icon> Perfil</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="#" @click="handleLogout()" v-if="isLoggedIn"><icon name="sign-out"></icon> Salir</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { isLoggedIn, logout } from '../utils/auth-api';

export default {
  name: 'app-nav-admin',
  methods: {
    handleLogout() {
      logout();
      this.$router.push('/');
    },
    isLoggedIn() {
      return isLoggedIn();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>

.logo {
  border-bottom: 1px solid hsla(0,0%,100%,.2);
}

</style>

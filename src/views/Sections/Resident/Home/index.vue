<template>
  <div>
    <app-nav></app-nav>

    <b-container class="mt-3">
      <b-row>
        <b-col>
          <div>
            <b-alert :show="dismissCountDown" dismissible variant="warning"
                     @dismissed="dismissCountDown=0"
                     @dismiss-count-down="countDownChanged">
              Suspensión del servicio de recolección de basura. <a href="#" class="alert-link">Más información</a>.
            </b-alert>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col><h3 class="text-center">Bienvenido, {{showUserFullName}}!</h3></b-col>
      </b-row>
    </b-container>

    <hr/>

    <b-container>
        <b-row>
          <b-col>
            <h5 class="p-1 mt-3 mb-4">Mis Propiedades:</h5>
            <div role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-btn block href="#" v-b-toggle.accordion1 variant="light"><b>Coto 1 - Casa #23</b></b-btn>
                </b-card-header>
                <b-collapse id="accordion1" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-list-group>
                      <b-list-group-item class="d-flex justify-content-between align-items-center">
                        Tipo de propiedad
                        <b-badge variant="secondary" pill>Propietario</b-badge>
                      </b-list-group-item>
                      <b-list-group-item class="d-flex justify-content-between align-items-center">
                        Terreno
                        <b-badge variant="primary" pill>250 mts</b-badge>
                      </b-list-group-item>
                      <b-list-group-item class="d-flex justify-content-between align-items-center">
                        Construcción
                        <b-badge variant="primary" pill>435 mts</b-badge>
                      </b-list-group-item>
                      <b-list-group-item class="d-flex justify-content-between align-items-center">
                        Resumen de cuenta
                        <b-badge variant="success" pill>Al Corriente</b-badge>
                      </b-list-group-item>
                      <b-list-group-item class="d-flex justify-content-between align-items-center">
                        Estado de cuenta
                        <b-badge variant="success" pill>$0.00 MXN</b-badge>
                      </b-list-group-item>
                      <b-list-group-item class="d-flex justify-content-between align-items-center">
                        Próximo Pago
                        <b-badge variant="success" pill>Agosto 25, 2018</b-badge>
                      </b-list-group-item>
                      <b-list-group-item>
                         <b-button class="btn-block" size="md" variant="danger" disabled>Pagar</b-button>
                      </b-list-group-item>
                    </b-list-group>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-btn block href="#" v-b-toggle.accordion2 variant="light"><b>Coto 1 - Casa #62</b></b-btn>
                </b-card-header>
                <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-list-group>
                      <b-list-group-item class="d-flex justify-content-between align-items-center">
                        Tipo de propiedad
                        <b-badge variant="secondary" pill>Propietario</b-badge>
                      </b-list-group-item>
                      <b-list-group-item class="d-flex justify-content-between align-items-center">
                        Terreno
                        <b-badge variant="primary" pill>150 mts</b-badge>
                      </b-list-group-item>
                      <b-list-group-item class="d-flex justify-content-between align-items-center">
                        Construcción
                        <b-badge variant="primary" pill>225 mts</b-badge>
                      </b-list-group-item>
                      <b-list-group-item class="d-flex justify-content-between align-items-center">
                        Resumen de cuenta
                        <b-badge variant="warning" pill>Pago Pendiente</b-badge>
                      </b-list-group-item>
                      <b-list-group-item class="d-flex justify-content-between align-items-center">
                        Estado de cuenta
                        <b-badge variant="warning" pill>$1,200.00 MXN</b-badge>
                      </b-list-group-item>
                      <b-list-group-item class="d-flex justify-content-between align-items-center">
                        Fecha max de pago
                        <b-badge variant="warning" pill>Julio 15, 2018</b-badge>
                      </b-list-group-item>
                      <b-list-group-item>
                         <b-button class="btn-block" size="md" variant="danger">Pagar</b-button>
                      </b-list-group-item>
                    </b-list-group>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-btn block href="#" v-b-toggle.accordion3 variant="light"><b>Coto 1 - Casa #88</b></b-btn>
                </b-card-header>
                <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-list-group>
                      <b-list-group-item class="d-flex justify-content-between align-items-center">
                        Tipo de propiedad
                        <b-badge variant="secondary" pill>Propietario</b-badge>
                      </b-list-group-item>
                      <b-list-group-item class="d-flex justify-content-between align-items-center">
                        Terreno
                        <b-badge variant="primary" pill>150 mts</b-badge>
                      </b-list-group-item>
                      <b-list-group-item class="d-flex justify-content-between align-items-center">
                        Construcción
                        <b-badge variant="primary" pill>245 mts</b-badge>
                      </b-list-group-item>
                      <b-list-group-item class="d-flex justify-content-between align-items-center">
                        Resumen de cuenta
                        <b-badge variant="success" pill>Al Corriente</b-badge>
                      </b-list-group-item>
                      <b-list-group-item class="d-flex justify-content-between align-items-center">
                        Estado de cuenta
                        <b-badge variant="success" pill>$0.00 MXN</b-badge>
                      </b-list-group-item>
                      <b-list-group-item class="d-flex justify-content-between align-items-center">
                        Próximo Pago
                        <b-badge variant="success" pill>Agosto 25, 2018</b-badge>
                      </b-list-group-item>
                      <b-list-group-item>
                         <b-button class="btn-block" size="md" variant="danger" disabled>Pagar</b-button>
                      </b-list-group-item>
                    </b-list-group>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import AppNav from '../../../../components/AppNav';
import { getUserFullName } from '../../../../utils/info-api';

export default {
  name: 'resident-home',
  components: {
    AppNav,
  },
  data() {
    return {
      dismissSecs: 7,
      dismissCountDown: 0,
      showUserFullName: '',
    };
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },

    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },

    isLoggedIn() {
      // return isLoggedIn();
      return true;
    },

    getUserFullname() {
      this.showUserFullName = getUserFullName();
    },

  },
  mounted() {
    this.showAlert();
    this.getUserFullname();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

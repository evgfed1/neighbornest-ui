<template>

  <h1 class="text-center">Association info</h1>

  <br>
  <br>
  <br>
  <br>

  <div class="text-center">
    <h2>Access</h2>
    <div>
      <ul>Please choose your association</ul>

      <div class="dropdown mb-5">
        <button class="btn btn-outline-dark ms-1 me-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {{ selectedAssociation ? selectedAssociation.name : 'Select an association' }}
        </button>

        <button @click="$router.push('/association')" type="button" class="btn btn-outline-dark">Enter</button>

        <ul class="dropdown-menu">
          <li v-for="(association, index) in activeAssociations" :key="index">
            <a @click="selectAssociation(association)" class="dropdown-item" href="#"> {{ association.name }} </a>
          </li>
        </ul>
      </div>

    </div>
  </div>
  <br>
  <br>
  <br>
  <br>
  <div class="text-center">
    <p class="help-text"><span class="text-gray">Access denied? Search by power of representation and name</span></p>
    <button type="button" class="btn btn-outline-dark ms-1 me-1">Access request</button>
    <br>
    <br>
    <br>
    <p class="margin-top-3">Are You the chairman of association?</p>
    <button @click="$router.push('/registration')" type="button" class="btn btn-outline-dark ms-1 me-1">
      Registration Association
    </button>
  </div>

</template>


<script>

export default {
  name: "AssociationEnterView",
  data() {
    return {
      selectedAssociation: null,
      activeAssociations: [],
      isEnteredInCoop: sessionStorage.getItem('isEnteredInCoop'),
      isLoggedIn: sessionStorage.getItem('isLoggedIn')

    }
  },
  methods: {

    getActiveAssociations() {
      this.$http.get('/association/search')
          .then(response => {
            console.log(response.data)
            this.activeAssociations = response.data;
          })
          .catch(error => {
            console.error('Error fetching active associations:', error);
          });

    },

    selectAssociation(association) {
      this.selectedAssociation = association;
      sessionStorage.setItem('selectedAssociation', JSON.stringify(association));
    },

  },

  mounted() {
    this.getActiveAssociations()

    // const storedAssociation = sessionStorage.getItem('selectedAssociation');
    // if (storedAssociation) {
    //   this.selectedAssociation = JSON.parse(storedAssociation);
    // }
  }
}
</script>
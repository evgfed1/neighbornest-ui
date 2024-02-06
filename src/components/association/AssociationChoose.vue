<template>
  <div class="text-center">
    <h2>Access</h2>
    <div>
      <ul>Please choose your association</ul>

      <div class="dropdown mb-5">
        <div class="d-inline-block">
          <button class="btn btn-outline-dark ms-1 me-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ selectedAssociation ? selectedAssociation.associationName : 'Select an association' }}
          </button>

          <ul class="dropdown-menu">
            <li v-for="(association, index) in userActiveAssociations" :key="index">
              <a @click="selectAssociation(association)" class="dropdown-item" href="#"> {{ association.associationName}} </a>
            </li>
          </ul>
        </div>

        <div class="d-inline-block">
          <div v-if="selectedAssociation">
            <button @click="$router.push('/association')" type="button" class="btn btn-outline-dark">Enter</button>
          </div>
        </div>

      </div>

    </div>
  </div>

</template>


<script>
export default {
  name: "AssociationChoose",

  data() {
    return {
      selectedAssociation: null,
      activeAssociations: [],
      userActiveAssociations: [
        {
          associationId: 0,
          associationName: '',
          associationStatus: '',
          residentId: 0,
          residentUserId: 0,
          residentUserRoleId: 0,
          residentUserRoleName: '',
          residentStatus: '',
          roleId: 0,
          roleName: ''
        }
      ]
    }
  },
  methods: {

    getUserAssociations() {
      this.$http.get("/association/search/users", {
        params: {
          userId: sessionStorage.getItem('userId')
        }
      }).then(response => {
        this.userActiveAssociations = response.data;
        console.log(this.userActiveAssociations)
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },

    selectAssociation(association) {
      this.selectedAssociation = association;
      sessionStorage.setItem('selectedAssociation', JSON.stringify(association));
    },

    // getActiveAssociations() {
    //   this.$http.get('/association/search/all')
    //       .then(response => {
    //         console.log(response.data)
    //         this.activeAssociations = response.data;
    //       })
    //       .catch(error => {
    //         console.error('Error fetching active associations:', error);
    //       });
    // },
  },
  mounted() {
  //   this.getActiveAssociations()
    this.getUserAssociations()

    // const storedAssociation = sessionStorage.getItem('selectedAssociation');
    // if (storedAssociation) {
    //   this.selectedAssociation = JSON.parse(storedAssociation);
    // }
  }

}
</script>


<template>
  <div class="text-center">
    <h2>Access</h2>
    <div>
      <ul>Please choose your association</ul>

      <div class="dropdown mb-5">
        <button class="btn btn-outline-dark ms-1 me-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {{ selectedAssociation ? selectedAssociation.associationName : 'Select an association' }}
        </button>

        <button @click="$router.push('/association')" type="button" class="btn btn-outline-dark">Enter</button>

        <ul class="dropdown-menu">
          <li v-for="(association, index) in activeUserAssociations" :key="index">
            <a @click="selectAssociation(association)" class="dropdown-item" href="#"> {{ association.associationName }} </a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>


<script>
export default {
  name: "AssociationChoose",

  data() {
    return {
      userId: sessionStorage.getItem('userId'),
      selectedAssociation: null,
      activeAssociations: [],
      activeUserAssociations: [
        {
          associationId: null,
          associationName: '',
          associationStatus: '',
          residentId: null,
          residentUserId: null,
          residentUserRoleId: null,
          residentUserRoleName: '',
          residentStatus: '',
          roleId: null,
          roleName: ''
        }
      ],
    }
  },
  methods: {

    selectAssociation(association) {
      this.selectedAssociation = association;

      sessionStorage.setItem('selectedAssociation', JSON.stringify(association));

      sessionStorage.setItem('associationId', association.associationId)
      sessionStorage.setItem('associationName', association.associationName)
      sessionStorage.setItem('associationStatus', association.associationStatus)
      sessionStorage.setItem('residentId', association.residentId)
      sessionStorage.setItem('residentUserId', association.residentUserId)
      sessionStorage.setItem('residentUserRoleId', association.residentUserRoleId)
      sessionStorage.setItem('residentUserRoleName', association.residentUserRoleName)
      sessionStorage.setItem('residentStatus', association.residentStatus)
      sessionStorage.setItem('roleId', association.roleId)
      sessionStorage.setItem('roleName', association.roleName)
      
      // sessionStorage.setItem('associationId', this.activeUserAssociations.associationId)
      // sessionStorage.setItem('associationName', this.activeUserAssociations.associationName)
      // sessionStorage.setItem('associationStatus', this.activeUserAssociations.associationStatus)
      // sessionStorage.setItem('residentId', this.activeUserAssociations.residentId)
      // sessionStorage.setItem('residentUserId', this.activeUserAssociations.residentUserId)
      // sessionStorage.setItem('residentUserRoleId', this.activeUserAssociations.residentUserRoleId)
      // sessionStorage.setItem('residentUserRoleName', this.activeUserAssociations.residentUserRoleName)
      // sessionStorage.setItem('residentStatus', this.activeUserAssociations.residentStatus)
      // sessionStorage.setItem('roleId', this.activeUserAssociations.roleId)
      // sessionStorage.setItem('roleName', this.activeUserAssociations.roleName)
    },

    getActiveAssociations() {
      this.$http.get('/association/search/users', {
            params: {
              userId: this.userId
            }
          }
      ).then(response => {
        console.log('To chto prishlo s backend: ' + response.data)
        this.activeUserAssociations = response.data;

        console.log('All assoc: ' + this.activeAssociations)
        console.log('User assoc: ' + this.activeUserAssociations)
      }).catch(error => {
        console.error('Error fetching active associations:', error);
      });
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


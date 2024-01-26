<template>

  <h1 class="text-center">Association info</h1>

  <div class="container-fluid text-center">
    <div class="row">
      <div class="col-4">
        <h5>Association text 1</h5>
        <div></div>
      </div>

      <div class="col-4">
        <h5>Association text 2</h5>
        <div>text 2</div>
      </div>

      <div class="col-4">
        <h5>Association text 3</h5>
        <div>text 3</div>
      </div>
    </div>
  </div>
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
          Available associations
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Association 1</a></li>
          <li><a class="dropdown-item" href="#">Association 2</a></li>
          <li><a class="dropdown-item" href="#">Association 3</a></li>
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
    <p class="margin-top-3">Are You chairman of association?</p>
    <button @click="$router.push('/registration')" type="button" class="btn btn-outline-dark ms-1 me-1">
      Registration Association
    </button>
  </div>

</template>


<script>
export default {
  name: "AssociationView",
  data() {
    return {
      isEnteredInCoop: sessionStorage.getItem('isEnteredInCoop'),
      isLoggedIn: sessionStorage.getItem('isLoggedIn')

    }
  },
  methods: {
    // changeStatusForCoop() {
    //   this.isEnteredInCoop = !this.isEnteredInCoop;
    //   alert(this.isEnteredInCoop)
    // }


  }
}
</script>
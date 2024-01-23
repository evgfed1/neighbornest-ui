<template>

  <div class="row mt-3 mb-3 text-center">
    <h1>Consumption info</h1>
  </div>

  <div class="container-fluid text-center">
    <div class="row">


      <div class="col-4">
        <div class="row">
          <div class="col-6">
            <h4>Some data</h4>
          </div>
          <div class="col-6">
            <h4>Some data</h4>
          </div>
        </div>
      </div>


      <div class="col-4">

        <div class="row">
          <div class="col-5">
            <div class="input-group mb-3">
              <span class="input-group-text">From:</span>
              <!--              <vue-flatpickr v-model="dateFrom" class="form-control" :config="flatpickrConfig"></vue-flatpickr>-->
              <vue-flatpickr v-model="dateFrom" type="text"
                             class="form-control"></vue-flatpickr>
            </div>
          </div>
          <div class="col-5">
            <div class="input-group mb-3">
              <span class="input-group-text">To:</span>
              <!--              <vue-flatpickr v-model="dateTo" class="form-control" :config="flatpickrConfig"></vue-flatpickr>-->
              <vue-flatpickr v-model="dateTo" type="text"
                             class="form-control"></vue-flatpickr>
            </div>
          </div>
          <div class="col-2">
            <button @click="sendConsumptionRequest" type="button" class="btn btn-outline-dark">
              Show
            </button>
          </div>
        </div>

        <table class="table table-bordered mt-3">
          <thead>
          <tr>
            <th scope="col">Period</th>
            <th scope="col">Hot water</th>
            <th scope="col">Cold water</th>
            <th scope="col">Electricity</th>
            <th scope="col">Gas</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th>{{ dateCurrent }}</th>
            <td>{{ consumptionInfo.hotWater }}</td>
            <td>{{ consumptionInfo.coldWater }}</td>
            <td>{{ consumptionInfo.electricity }}</td>
            <td>{{ consumptionInfo.gas }}</td>
          </tr>
          </tbody>
        </table>

      </div>

      <div class="col-4">

        <h5>Consumption text 3</h5>
        <div>Create function for adding consumption
        </div>

      </div>

    </div>
  </div>

</template>

<script>
import VueFlatpickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  name: "ConsumptionView",
  components: {VueFlatpickr},

  data() {
    return {
      userId: sessionStorage.getItem('userId'),
      consumptionInfo: {
        hotWater: null,
        coldWater: null,
        electricity: null,
        gas: null,
      },
      dateCurrent: null,
      dateFrom: null,
      dateTo: null,
      errorResponse: {
        message: '',
        errorCode: 0
      },
      errorMessage: '',
      // flatpickrConfig: {
      //   dateFormat: 'Y-m',
      // }
    }
  },
  methods: {
    sendConsumptionRequest() {
      if (this.timePeriodIsNotEmpty()) {
        this.sendConsumptionByPeriod()
      } else {
        this.handleErrorAlert()
        alert("hernja")
      }
    },

    timePeriodIsNotEmpty() {
      return this.dateFrom !== null &&
          this.dateFrom !== 0 &&
          this.dateFrom !== '' &&
          this.dateTo !== null &&
          this.dateTo !== 0 &&
          this.dateTo !== '';
    },

    sendConsumptionByPeriod() {
      this.$http.get('/consumption/period', {
        params: {
          userId: this.userId,
          dateFrom: this.dateFrom,
          dateTo: this.dateTo
        }
      }).then(response => {
        this.consumptionInfo = response.data
      }).catch(error => {
        this.errorResponse = error.response.data
        const httpStatusCode = error.response.status
        if (httpStatusCode === 403 && this.errorResponse.errorCode === 111) {
          this.errorMessage = this.errorResponse.message
          setTimeout(this.errorMessage = '', 2000)
        }
      })
    },
    handleErrorAlert() {
      this.errorMessage = 'Please choose period properly';
      setTimeout(() => {
        this.errorMessage = '';
      }, 2000);
    }
  }
}
</script>
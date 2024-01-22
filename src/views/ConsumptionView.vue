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
              <!--              <vue-flatpickr v-model="consumptionResponse.dateFrom" class="form-control" :config="flatpickrConfig"></vue-flatpickr>-->
              <vue-flatpickr v-model="consumptionResponse.consumptionInfo.dateFrom" type="text"
                             class="form-control"></vue-flatpickr>
            </div>
          </div>
          <div class="col-5">
            <div class="input-group mb-3">
              <span class="input-group-text">To:</span>
              <!--              <vue-flatpickr v-model="consumptionResponse.dateTo" class="form-control" :config="flatpickrConfig"></vue-flatpickr>-->
              <vue-flatpickr v-model="consumptionResponse.consumptionInfo.dateTo" type="text"
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
            <th scope="col">userId</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th>{{ consumptionResponse.consumptionInfo.dateCurrent }}</th>
            <td>{{ consumptionResponse.consumptionInfo.hotWater }}</td>
            <td>{{ consumptionResponse.consumptionInfo.coldWater }}</td>
            <td>{{ consumptionResponse.consumptionInfo.electricity }}</td>
            <td>{{ consumptionResponse.consumptionInfo.gas }}</td>
            <td>{{ consumptionResponse.userId }}</td>
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
      consumptionResponse: {
        userId: sessionStorage.getItem('userId'),
        consumptionInfo: {
          hotWater: null,
          coldWater: null,
          electricity: null,
          gas: null,
          dateCurrent: null,
          dateFrom: null,
          dateTo: null,
        },

      },
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
      return this.consumptionResponse.consumptionInfo.dateFrom !== null &&
          this.consumptionResponse.consumptionInfo.dateTo !== null &&
          this.consumptionResponse.consumptionInfo.dateFrom !== '' &&
          this.consumptionResponse.consumptionInfo.dateTo !== '' &&
          this.consumptionResponse.consumptionInfo.dateFrom !== 0 &&
          this.consumptionResponse.consumptionInfo.dateTo !== 0;
    },

    sendConsumptionByPeriod() {
      this.$http.get('/consumption/period', {
        params: {
          hotWater: this.consumptionResponse.consumptionInfo.hotWater,
          coldWater: this.consumptionResponse.consumptionInfo.coldWater,
          electricity: this.consumptionResponse.consumptionInfo.electricity,
          gas: this.consumptionResponse.consumptionInfo.gas,
          userId: this.consumptionResponse.userId,
          dateFrom: this.consumptionResponse.consumptionInfo.dateFrom,
          dateTo: this.consumptionResponse.consumptionInfo.dateTo
        }
      }).then(response => {
        this.consumptionResponse = response.data
        sessionStorage.setItem('userId', this.consumptionResponse.userId)
        sessionStorage.setItem('hotWater', this.consumptionResponse.consumptionInfo.hotWater)
        sessionStorage.setItem('coldWater', this.consumptionResponse.consumptionInfo.coldWater)
        sessionStorage.setItem('electricity', this.consumptionResponse.consumptionInfo.electricity)
        sessionStorage.setItem('gas', this.consumptionResponse.consumptionInfo.gas)
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
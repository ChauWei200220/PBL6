<template>
  <div>
    <v-container
      id="dashboard-view"
      fluid
      tag="section"
    >
      <v-row>
        <v-col
          v-for="({ actionIcon, actionText, ...attrs }, i) in stats"
          :key="i"
          cols="12"
          md="6"
          lg="3"
        >
          <material-stat-card v-bind="attrs">
            <template #actions>
              <v-icon
                class="mr-2"
                small
                v-text="actionIcon"
              />
              <div class="text-truncate">
                {{ actionText }}
              </div>
            </template>
          </material-stat-card>
        </v-col>

        <v-col
          cols="12"
          md="12"
        >
          <material-card
            color="orange"
            full-header
          >
            <template #heading>
              <div class="pa-8 white--text display">
                <div>
                  <div class="text-h4 font-weight-light">
                    Examination
                  </div>
                  <div class="text-caption">
                    All examination of 1st term, 2021
                  </div>
                </div>
                <div class="button-add">
                  <v-btn
                    outlined
                    large
                    fab
                    @click="showAddDialog=true"
                  ><v-icon>mdi-plus</v-icon>
                  </v-btn>
                </div>
              </div>
            </template>
            <v-card-text>
              <v-data-table
                :headers="headers"
                :items="items"
                @click:row="editItem(items[1])"
              />
            </v-card-text>
          </material-card>
        </v-col>
      </v-row>
    </v-container>
    <edit-dialog
      :dialog.sync="dialog"
      :item.sync="tmpItem"
      @close-dialog="dialog=false"
    >
    </edit-dialog>
    <add-dialog
    :visible.sync="showAddDialog"
    @set-new-item="addItem($event)"
    @close-dialog="showAddDialog=false"
    >
    </add-dialog>
  </div>
</template>

<script>
  // Utilities
  import { get } from 'vuex-pathify'
  import Vue from 'vue'
  import AddDialog from '../layouts/default/AddDialog'
  import EditDialog from '../layouts/default/editDialog'

  const lineSmooth = Vue.chartist.Interpolation.cardinal({
    tension: 0,
  })

  export default {
    name: 'DashboardView',
    components: { EditDialog, AddDialog },
    data: () => ({
      tmpItem: {},
      setTime: [
        '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00',
      ],
      activePicker: null,
      date: null,
      menu: false,
      showAddDialog: false,
      dialog: false,
      charts: [{
        type: 'Bar',
        color: 'primary',
        title: 'Website Views',
        subtitle: 'Last Campaign Performance',
        time: 'updated 10 minutes ago',
        data: {
          labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
          series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
          ],
        },
        options: {
          axisX: {
            showGrid: false,
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0,
          },
        },
        responsiveOptions: [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0]
              },
            },
          }],
        ],
      }, {
        type: 'Line',
        color: 'success',
        title: 'Daily Sales',
        subtitle: '<i class="mdi mdi-arrow-up green--text"></i><span class="green--text">55%</span>&nbsp;increase in today\'s sales',
        time: 'updated 4 minutes ago',
        data: {
          labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
          series: [
            [230, 750, 450, 300, 280, 240, 200, 190],
          ],
        },
        options: {
          lineSmooth,
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      }, {
        type: 'Line',
        color: 'info',
        title: 'Completed Tasks',
        subtitle: 'Last Campaign Performance',
        time: 'campaign sent 26 minutes ago',
        data: {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
            [12, 17, 7, 17, 23, 18, 38],
          ],
        },
        options: {
          lineSmooth,
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      }],
      headers: [
        {
          sortable: false,
          text: 'Name exam',
          value: 'nameExam',
        },
        {
          sortable: false,
          text: 'Detailed',
          value: 'detailed',
          align: 'right',
        },
        {
          sortable: false,
          text: 'Date',
          value: 'date',
          align: 'right',
        },
        {
          sortable: false,
          text: 'Starting time',
          value: 'startingTime',
          align: 'right',
        },
        {
          sortable: false,
          text: 'Ending time',
          value: 'endingTime',
          align: 'right',
        },
        {
          sortable: false,
          text: 'Teacher',
          value: 'teacher',
          align: 'right',
        },
      ],
      items: [
        {
          nameExam: 'HM01',
          teacher: 'Pham Minh Tuan',
          date: '01-11-2021',
          startingTime: '07:00',
          endingTime: '08:00',
          detailed: 'HM & UD',
        },
        {
          nameExam: 'AV01',
          teacher: 'Pham Minh Tuan',
          date: '01-11-2021',
          startingTime: '07:00',
          endingTime: '08:00',
          detailed: 'Anh Van 01',
        },
        {
          nameExam: 'JP02',
          teacher: 'Pham Minh Tuan',
          date: '01-11-2021',
          startingTime: '07:00',
          endingTime: '08:00',
          detailed: 'Japanese',
        },
        {
          nameExam: 'AT03',
          teacher: 'Pham Minh Tuan',
          date: '01-11-2021',
          startingTime: '07:00',
          endingTime: '08:00',
          detailed: 'ATTT 03',
        },
      ],
      stats: [
        {
          color: '#FD9A13',
          icon: 'mdi-message-bookmark-outline',
          title: 'Examination',
          value: '45',
        },
        {
          color: 'primary',
          icon: 'mdi-chart-bar',
          title: 'Number of the pupils',
          value: '351',
        },
        {
          color: 'success',
          icon: 'mdi-account',
          title: 'Professor',
          value: '15',
        },
        {
          color: 'info',
          icon: 'mdi-twitter',
          title: 'Attendance',
          value: '+1000',
        },
      ],
      tabs: 0,
    }),

    computed: {
      sales: get('sales/sales'),
      totalSales () {
        return this.sales.reduce((acc, val) => acc + val.salesInM, 0)
      },
    },
    watch: {
      menu (val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
      },
      editItem (item) {
        this.dialog = true
        this.tmpItem = item
      },
      addItem (item) {
        console.log(item)
        this.items.push(item)
        this.showAddDialog = false
      },
    },
  }
</script>

<style>
.display {
  display: flex;
  flex-direction: row;
}
.button-add {
  margin-left: 67%;
}
</style>

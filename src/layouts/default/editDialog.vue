<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="600px"
  >
    <template v-slot:activator="{ on, attrs }"></template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Examination</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="6"
            >
              <v-text-field
                label="Name exam"
                v-model="item.nameExam"
                required
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="6"
            >
              <v-text-field
                label="Detailed"
                v-model="item.detailed"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="4"
            >
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="2021-11-01"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                  min="1950-01-01"
                  @change="save"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col
              cols="12"
              sm="4"
            >
              <v-select
                v-model="item.startingTime"
                :items="setTime"
                label="Starting time"
              ></v-select>
            </v-col>
            <v-col
              cols="12"
              sm="4"
            >
              <v-select
                v-model="item.endingTime"
                :items="setTime"
                label="Ending time"
              ></v-select>
            </v-col>
          </v-row>
          <v-col cols="12">
            <v-text-field
              label="Teacher"
              v-model="item.teacher"
              required
            ></v-text-field>
          </v-col>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue darken-1"
          text
          @click="$emit('close-dialog')"
        >
          Close
        </v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="$emit('close-dialog')"
        >
          Edit
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: {
      dialog: Boolean,
      item: Object,
    },
    data () {
      return {
        setTime: [
          '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00',
        ],
        activePicker: null,
        date: null,
        menu: null,
      }
    },
    watch: {
      menu (val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },
    },
    methods: {
      save (date) {
        console.log(date)
        this.$refs.menu.save(date)
      },
    },
  }
</script>

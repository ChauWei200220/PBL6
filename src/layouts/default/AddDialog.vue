<template>
  <v-row justify="center">
    <v-dialog
      :value="visible"
      persistent
      max-width="600px"
    >
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
                  ref="newName"
                  label="Name exam"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  ref="newDetailed"
                  label="Detailed"
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
                      label="Date"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    ref="newDate"
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
                  ref="newStartingTime"
                  :items="setTime"
                  label="Starting time"
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="4"
              >
                <v-select
                  ref="newEndingTime"
                  :items="setTime"
                  label="Ending time"
                ></v-select>
              </v-col>
            </v-row>
            <v-col cols="12">
              <v-text-field
                ref="newTeacher"
                label="Teacher"
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
            @click="setNewItem()"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  import { ref, onMounted } from 'vue'
  export default {
    props: {
      visible: Boolean,
    },
    setup () {
      const newName = ref(null)
      onMounted(() => {
        newName.value.focus()
      })
      return {
        newName,
      }
    },
    data () {
      return {
        newItem: {},
        setTime: [
          '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00',
        ],
        activePicker: null,
        date: null,
        menu: false,
      }
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
      setNewItem () {
        this.newItem.nameExam = 'AV01'
        this.newItem.detailed = 'Anh Van 01'
        this.newItem.date = '01-11-2021'
        this.newItem.startingTime = '09:00'
        this.newItem.endingTime = '10:00'
        this.newItem.teacher = 'Pham Minh Tuan'
        this.$emit('set-new-item', this.newItem)
      },
    },
  }
</script>

<style>
</style>

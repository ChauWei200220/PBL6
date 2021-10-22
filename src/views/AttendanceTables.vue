<template>
  <v-container
    id="regular-tables-view"
    fluid
    tag="section"
  >
    <view-intro
      heading="Attendance Tables"
      link="components/simple-tables"
    />

    <material-card
      icon="mdi-clipboard-text"
      icon-small
      title="All examination"
      color="accent"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th class="primary--text">
              ID
            </th>
            <th class="primary--text">
              Name
            </th>
            <th class="primary--text">
              Class
            </th>
            <th class="primary--text">
              Examination
            </th>
            <th class="primary--text">
              Date
            </th>
            <th class="primary--text">
              Time
            </th>
            <th class="text-right primary--text">
              Attendance
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Do Van Trinh</td>
            <td>18TCLC-Nhat</td>
            <td>HM01</td>
            <td>01/10/2021</td>
            <td>15:00</td>
            <td class="text-right">
              Checked
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>Pham Tran Nhan Nghia</td>
            <td>18TCLC-Nhat</td>
            <td>AT03</td>
            <td>01/10/2021</td>
            <td>15:00</td>
            <td class="text-right">
              Checked
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>Chau Bao Nhat Vy</td>
            <td>18TCLC-Nhat</td>
            <td>JP02</td>
            <td>01/10/2021</td>
            <td>15:00</td>
            <td class="text-right">
              Checked
            </td>
          </tr>

          <tr>
            <td>4</td>
            <td>Thai Thi Thu Loan</td>
            <td>18TCLC-Nhat</td>
            <td>HM01</td>
            <td>01/10/2021</td>
            <td>15:00</td>
            <td class="text-right">
              Checked
            </td>
          </tr>

          <tr>
            <td>5</td>
            <td>Nguyen Thanh Dung</td>
            <td>18TCLC-Nhat</td>
            <td>JP02</td>
            <td>01/10/2021</td>
            <td>15:00</td>
            <td class="text-right">
              Checked
            </td>
          </tr>

          <tr>
            <td>6</td>
            <td>Nguyen Tien Dat</td>
            <td>18TCLC-Nhat</td>
            <td>AT03</td>
            <td>01/10/2021</td>
            <td>15:00</td>
            <td class="text-right">
              Failed
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </material-card>

    <div class="py-3" />

    <material-card
      dark
      icon="mdi-clipboard-plus"
      icon-small
      title="AV01 examination"
      color="accent"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Class</th>
            <th>Examination</th>
            <th>Date</th>
            <th>Time</th>
            <th class="text-right">
              Attendance
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Nguyen Van A</td>
            <td>18T1</td>
            <td>AV01</td>
            <td>01/10/2021</td>
            <td>15:00</td>
            <td class="text-right">
              Checked
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>Nguyen Van B</td>
            <td>18T2</td>
            <td>AV01</td>
            <td>01/10/2021</td>
            <td>15:00</td>
            <td class="text-right">
              Checked
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>Nguyen Van C</td>
            <td>18T1</td>
            <td>AV01</td>
            <td>01/10/2021</td>
            <td>15:00</td>
            <td class="text-right">
              Checked
            </td>
          </tr>

          <tr>
            <td>4</td>
            <td>Nguyen Van D</td>
            <td>18T3</td>
            <td>AV01</td>
            <td>01/10/2021</td>
            <td>15:00</td>
            <td class="text-right">
              Checked
            </td>
          </tr>

          <tr>
            <td>5</td>
            <td>Nguyen Van E</td>
            <td>18T3</td>
            <td>AV01</td>
            <td>01/10/2021</td>
            <td>15:00</td>
            <td class="text-right">
              Checked
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </material-card>
  </v-container>
</template>

<script>
  export default {
    name: 'RegularTablesView',
  }
</script>

<template>
  <div>
    <label for="time">выбрать направление</label><br>
    <select name="route" id="route" @change="" v-model="routeType">
      <option value="из A в B">из A в B</option>
      <option value="из B в A">из B в A</option>
      <option value="из A в B и обратно в А">из A в B и обратно в А</option>
    </select>
    <br>
    <br>
    <div 
      v-if="this.routeType !== 'из B в A'"
    >
      <label for="time">Выберите время</label><br>{{toValue}}
      <select name="time" id="time" v-model="toValue">
        <option :value="item" v-for="item in timetable.to">{{getLocalTime(item)}}(из A в B)</option>
      </select>
      <br><br>
    </div>
    <div 
      v-if="this.routeType !== 'из A в B'"
    >
      <label for="time2">Выберите обратное время</label><br>{{backValue}}
      <select name="time" id="time2" v-model="backValue">
        <option :value="item" v-for="item in backFiltered">{{getLocalTime(item)}}(из B в A)</option>
      </select><br><br>
    </div>
    <div>
      <label for="num">Количество билетов</label><br>
      <input id="num" type="number" v-model.number="countTickets" ><br>
    </div><br>
    <div>
      Вы выбрали {{countTickets}} билета по маршруту {{routeType}} стоимостью {{resultPrice}}р.<br>
      Это путешествие займет у вас {{roadTime}} минут. <br>
      Теплоход отправляется в {{resultTimeTo}}, а прибудет в {{resultTimeBack}}.<br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RouteCalculator',
  data: () => ({
    timetable: {
      to: [
        '2021-08-21 18:00:00Z+03:00',
        '2021-08-21 18:30:00Z+03:00',
        '2021-08-21 18:45:00Z+03:00',
        '2021-08-21 19:00:00Z+03:00',
        '2021-08-21 19:15:00Z+03:00',
        '2021-08-21 21:00:00Z+03:00',
      ],
      back:[
        '2021-08-21 18:30:00Z+03:00',
        '2021-08-21 18:45:00Z+03:00',
        '2021-08-21 19:00:00Z+03:00',
        '2021-08-21 19:15:00Z+03:00',
        '2021-08-21 19:35:00Z+03:00',
        '2021-08-21 21:50:00Z+03:00',
        '2021-08-21 21:55:00Z+03:00',
      ]
    },
    timeOneSide: 50,
    routeType: 'из A в B',
    countTickets: 1,
    toValue: '2021-08-21 18:00:00Z+03:00',
    backValue: '2021-08-21 18:30:00Z+03:00',
  }),
  computed:{
    routPrice(){
      return this.routeType ===  "из A в B и обратно в А" ? 1200 : 700
    },
    resultPrice(){
      return this.countTickets * this.routPrice
    },
    backFiltered(){
      if(this.routeType !== 'из A в B и обратно в А') return this.timetable.back;
      let toTime = this.getTimeWithRoadTime(this.toValue);
      let newBackTimes = this.timetable.back.filter(item=>{
        return +toTime < +new Date(item);
      });
      this.backValue = newBackTimes[0];
      return newBackTimes;
    },
    roadTime(){
      if(this.routeType !== 'из A в B и обратно в А') return 50;
      let minutes = +new Date(this.getTimeWithRoadTime(this.backValue)) - +new Date(this.toValue) 
      return minutes / 60000;
    },
    resultTimeBack(){
      if(this.routeType === 'из A в B') return this.getLocalTime(this.getTimeWithRoadTime(this.toValue));
      return this.getLocalTime(this.getTimeWithRoadTime(this.backValue));
    },
    resultTimeTo(){
      if(this.routeType === 'из B в A') return this.getLocalTime(this.backValue);
      return this.getLocalTime(this.toValue);
    }
  },
  methods: {
    getLocalTime(timeString){
      const currentDate = new Date(timeString);
      return `${('0'+currentDate.getHours()).slice(-2)}:${('0'+currentDate.getMinutes()).slice(-2)}`;
    },
    getTimeWithRoadTime(time){
      let timeWithRoad = new Date(time);
      timeWithRoad.setMinutes(timeWithRoad.getMinutes() + this.timeOneSide);
      return timeWithRoad;
    }
  },
}
</script>

<style></style>


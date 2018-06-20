import 'moment/locale/sr-cyrl';
import * as FullCalendar from '@medical-cloud/cgm_de_fullcalendar';


/* Serbian i18n for the jQuery UI date picker plugin. */
/* Written by Dejan Dimić. */
FullCalendar.datepickerLocale('sr-cyrl', 'sr', {
  closeText: "Затвори",
  prevText: "&#x3C;",
  nextText: "&#x3E;",
  currentText: "Данас",
  monthNames: [ "Јануар","Фебруар","Март","Април","Мај","Јун",
  "Јул","Август","Септембар","Октобар","Новембар","Децембар" ],
  monthNamesShort: [ "Јан","Феб","Мар","Апр","Мај","Јун",
  "Јул","Авг","Сеп","Окт","Нов","Дец" ],
  dayNames: [ "Недеља","Понедељак","Уторак","Среда","Четвртак","Петак","Субота" ],
  dayNamesShort: [ "Нед","Пон","Уто","Сре","Чет","Пет","Суб" ],
  dayNamesMin: [ "Не","По","Ут","Ср","Че","Пе","Су" ],
  weekHeader: "Сед",
  dateFormat: "dd.mm.yy",
  firstDay: 1,
  isRTL: false,
  showMonthAfterYear: false,
  yearSuffix: "" });


FullCalendar.locale("sr-cyrl", {
  buttonText: {
    prev: "Претходна",
    next: "следећи",
    month: "Месец",
    week: "Недеља",
    day: "Дан",
    list: "Планер"
  },
  allDayText: "Цео дан",
  eventLimitText: function(n) {
    return "+ још " + n;
  },
  noEventsMessage: "Нема догађаја за приказ"
});

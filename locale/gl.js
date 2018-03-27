import 'moment/locale/gl';
import * as FullCalendar from 'cgm_de_fullcalendar';


/* Galician localization for 'UI date picker' jQuery extension. */
/* Translated by Jorge Barreiro <yortx.barry@gmail.com>. */
FullCalendar.datepickerLocale('gl', 'gl', {
  closeText: "Pechar",
  prevText: "&#x3C;Ant",
  nextText: "Seg&#x3E;",
  currentText: "Hoxe",
  monthNames: [ "Xaneiro","Febreiro","Marzo","Abril","Maio","Xuño",
  "Xullo","Agosto","Setembro","Outubro","Novembro","Decembro" ],
  monthNamesShort: [ "Xan","Feb","Mar","Abr","Mai","Xuñ",
  "Xul","Ago","Set","Out","Nov","Dec" ],
  dayNames: [ "Domingo","Luns","Martes","Mércores","Xoves","Venres","Sábado" ],
  dayNamesShort: [ "Dom","Lun","Mar","Mér","Xov","Ven","Sáb" ],
  dayNamesMin: [ "Do","Lu","Ma","Mé","Xo","Ve","Sá" ],
  weekHeader: "Sm",
  dateFormat: "dd/mm/yy",
  firstDay: 1,
  isRTL: false,
  showMonthAfterYear: false,
  yearSuffix: "" });


FullCalendar.locale("gl", {
  buttonText: {
    month: "Mes",
    week: "Semana",
    day: "Día",
    list: "Axenda"
  },
  allDayHtml: "Todo<br/>o día",
  eventLimitText: "máis",
  noEventsMessage: "Non hai eventos para amosar"
});

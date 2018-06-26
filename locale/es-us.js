import 'moment/locale/es-us';
import * as FullCalendar from 'cgm_de_fullcalendar';


/* Inicialización en español para la extensión 'UI date picker' para jQuery. */
/* Traducido por Vester (xvester@gmail.com). */
FullCalendar.datepickerLocale('es-us', 'es', {
  closeText: "Cerrar",
  prevText: "&#x3C;Ant",
  nextText: "Sig&#x3E;",
  currentText: "Hoy",
  monthNames: [ "enero","febrero","marzo","abril","mayo","junio",
  "julio","agosto","septiembre","octubre","noviembre","diciembre" ],
  monthNamesShort: [ "ene","feb","mar","abr","may","jun",
  "jul","ago","sep","oct","nov","dic" ],
  dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
  dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
  dayNamesMin: [ "D","L","M","X","J","V","S" ],
  weekHeader: "Sm",
  dateFormat: "dd/mm/yy",
  firstDay: 1,
  isRTL: false,
  showMonthAfterYear: false,
  yearSuffix: "" });


FullCalendar.locale("es-us", {
  buttonText: {
    month: "Mes",
    week: "Semana",
    day: "Día",
    list: "Agenda"
  },
  allDayHtml: "Todo<br/>el día",
  eventLimitText: "más",
  noEventsMessage: "No hay eventos para mostrar"
});

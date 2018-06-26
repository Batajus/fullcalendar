import * as exportHooks from 'cgm_de_fullcalendar'
import GcalEventSource from './GcalEventSource'

exportHooks.EventSourceParser.registerClass(GcalEventSource);

(exportHooks as any).GcalEventSource = GcalEventSource

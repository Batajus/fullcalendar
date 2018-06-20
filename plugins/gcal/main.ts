import * as exportHooks from '@medical-cloud/cgm_de_fullcalendar'
import GcalEventSource from './GcalEventSource'

exportHooks.EventSourceParser.registerClass(GcalEventSource);

(exportHooks as any).GcalEventSource = GcalEventSource

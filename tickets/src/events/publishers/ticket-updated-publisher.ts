import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@raieenryuutickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}

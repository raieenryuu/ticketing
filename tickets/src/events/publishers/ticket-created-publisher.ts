import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@raieenryuutickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}

import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from "@raieenryuutickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}

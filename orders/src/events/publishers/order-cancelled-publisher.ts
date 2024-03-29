import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from "@raieenryuutickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}

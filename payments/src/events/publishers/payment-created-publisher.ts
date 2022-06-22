import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from "@raieenryuutickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}

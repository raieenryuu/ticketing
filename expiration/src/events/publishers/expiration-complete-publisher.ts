import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@raieenryuutickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}

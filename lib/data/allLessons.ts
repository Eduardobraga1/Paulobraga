import { anatomyLessons } from "./anatomyLessons";
import { patientInteractionsLessons } from "./patientInteractionsLessons";
import { emergencyLessons } from "./emergencyLessons";
import { pharmacologyLessons } from "./pharmacologyLessons";
import { diagnosticLessons } from "./diagnosticLessons";

export const allLessons = [
  ...anatomyLessons,
  ...patientInteractionsLessons,
  ...emergencyLessons,
  ...pharmacologyLessons,
  ...diagnosticLessons,
];

import { templates as govtechDemoTemplates } from "./govtech-demo-cert";
import { templates as testimonialsTemplates, templates2 as testimonialsTemplates2 } from "./testimonials";
import { templates as certificateOfAwardTemplates } from "./certificate-of-award";
import { templates } from "./certificateOfAchievement";
import { geekOut2020Template } from "./geekOut2020";
import { geekOut2021Template } from "./geekOut2021";
import { templates as drivingLicense } from "./driver-license-v3";
import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";


export const registry: TemplateRegistry<any> = {
  default: govtechDemoTemplates,
  CERTIFICATE_OF_ACHIEVEMENT: templates,
  GEEK_OUT_2020: geekOut2020Template,
  GEEK_OUT_2021: geekOut2021Template,
  GOVTECH_DEMO: govtechDemoTemplates,
  TESTIMONIALS: testimonialsTemplates,
  TESTIMONIALS2: testimonialsTemplates2,
  CERTIFICATE_OF_AWARD: certificateOfAwardTemplates,
  DRIVING_LICENSE: drivingLicense
};

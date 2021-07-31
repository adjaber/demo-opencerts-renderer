import { templates as govtechDemoTemplates } from "./govtech-demo-cert";
import { templates1 as testimonialsTemplates, templates2 as testimonialsTemplates2 } from "./testimonials";
import { templates3 as certificateOfAwardTemplates } from "./certificate-of-award";
import { templates4 } from "./certificateOfAchievement";
import { geekOut2020Template } from "./geekOut2020";

import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";


export const registry: TemplateRegistry<any> = {
  default: govtechDemoTemplates,
  CERTIFICATE_OF_ACHIEVEMENT: templates,
  GEEK_OUT_2020: geekOut2020Template,
  GOVTECH_DEMO: govtechDemoTemplates,
  TESTIMONIALS: testimonialsTemplates,
  TESTIMONIALS2: testimonialsTemplates2,
  CERTIFICATE_OF_AWARD: certificateOfAwardTemplates
};

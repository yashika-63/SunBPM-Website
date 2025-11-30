import image1 from "../../public/images/Home/choose-sunbpm1.jpg";
import image2 from "../../public/images/Home/choose-sunbpm2.jpg";
import image3 from "../../public/images/Home/choose-sunbpm3.jpg";
import image4 from "../../public/images/Home/choose-sunbpm4.jpg";
import image5 from "../../public/images/Home/choose-sunbpm5.jpg";
import image6 from "../../public/images/Home/choose-sunbpm6.jpg";
import image7 from "../../public/images/Home/choose-sunbpm7.jpg";
import image8 from "../../public/images/Home/choose-sunbpm8.jpg";

import {
  Server,           // For on-premises setup
  Building2,        // For centralized operations
  Rocket,           // For faster time to market
  ShieldCheck,      // For enhanced accountability
  Workflow,         // For automation
  CalendarCheck2,   // For quick deployment
  IndianRupee,       // For cost reduction
  BarChart3         // For budget tracking & impact
} from 'lucide-react';

const valueProps = [
  {
    icon: Server,
    title: "On-Premises Setup",
    description: "Maintain complete data sovereignty with secure, self-hosted deployment built for enterprises.",
    image: image1,
  },
  {
    icon: Building2,
    title: "Centralized Operations",
    description: "Bring every department, process, and workflow onto one unified platform for seamless coordination.",
    image: image2,
  },
  {
    icon: Rocket,
    title: "Faster Time to Market",
    description: "Accelerate innovation with configurable workflows that adapt rapidly to changing needs.",
    image: image3,
  },
  {
    icon: ShieldCheck,
    title: "Enhanced Accountability",
    description: "Strengthen governance with crystal-clear responsibility mapping and transparent audit trails.",
    image: image4,
  },
  {
    icon: Workflow,
    title: "Automation of Business Processes",
    description: "Eliminate repetitive tasks using intelligent automation designed to boost efficiency at scale.",
    image: image5,
  },
  {
    icon: CalendarCheck2,
    title: "Deployment in 10–16 Weeks",
    description: "Experience a fully operational system in record time with our rapid implementation framework.",
    image: image6,
  },
  {
    icon: IndianRupee,
    title: "Cut Operational Costs",
    description: "Lower overheads by optimizing workflows, reducing manual dependency, and eliminating inefficiencies.",
    image: image7,
  },
  {
    icon: BarChart3,
    title: "Track Budgets to Beneficiary",
    description: "Gain deep financial visibility with end-to-end traceability from budget allocation to last-mile usage.",
    image: image8,
  },
];

export default valueProps;
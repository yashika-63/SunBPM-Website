import image1 from "../../public/images/Home/choose-sunbpm.jpg";


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
    description: "Keep full control with secure, local deployment.",
    image: image1,
  },
  {
    icon: Building2,
    title: "Centralized Operations",
    description: "Unify business functions under one platform.",
    image: image1,
  },
  {
    icon: Rocket,
    title: "Faster Time to Market",
    description: "Launch and adapt processes quickly.",
    image: image1,
  },
  {
    icon: ShieldCheck,
    title: "Enhanced Accountability",
    description: "Ensure transparency with role-based responsibilities.",
    image: image1,
  },
  {
    icon: Workflow,
    title: "Automation of Business Processes",
    description: "Reduce manual work through smart automation.",
    image: image1,
  },
  {
    icon: CalendarCheck2,
    title: "Deployment in 10-16 Weeks",
    description: "Achieve complete rollout in record time.",
    image: image1,
  },
  {
    icon: IndianRupee,
    title: "Cut Operational Costs",
    description: "Optimize resources and reduce operational expenses.",
    image: image1,
  },
  {
    icon: BarChart3,
    title: "Track Budgets to Beneficiary",
    description: "Monitor fund allocation with evidence-based tracking.",
    image: image1,
  },
];

export default valueProps;
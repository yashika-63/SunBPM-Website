import {
  FaSearch,
  FaDatabase,
  FaCogs,
  FaCloudUploadAlt,
  FaCheckCircle,
  FaUserGraduate,
} from "react-icons/fa";

const DAcoreServices = [
  {
    title: "Project Discovery",
    icon: <FaSearch />,
    desc: `We evaluate business goals, data availability, and performance expectations while identifying gaps, data quality concerns, and defining KPIs for analytics success.`,
  },
  {
    title: "Data Collection & Preparation",
    icon: <FaDatabase />,
    desc: `We gather data from multiple internal and external sources, clean and transform it, engineer features, and build a structured data foundation for analytics.`,
  },
  {
    title: "Model Development",
    icon: <FaCogs />,
    desc: `We perform exploratory data analysis and build predictive, classification, and clustering models using suitable machine learning and statistical algorithms.`,
  },
  {
    title: "Model Deployment",
    icon: <FaCloudUploadAlt />,
    desc: `We deploy analytics models into business systems using APIs or custom applications while ensuring automated versioning and continuous pipeline updates.`,
  },
  {
    title: "Testing & Go Live",
    icon: <FaCheckCircle />,
    desc: `We test the models in controlled environments, validate performance, and monitor live deployment to ensure reliable, accurate, and stable results.`,
  },
  {
    title: "Knowledge Transfer & Support",
    icon: <FaUserGraduate />,
    desc: `We conduct workshops and user training, deliver documentation, and provide ongoing support to ensure smooth adoption and long-term analytics performance.`,
  },
];


export default DAcoreServices;
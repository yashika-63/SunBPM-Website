import {
  FaCloudUploadAlt,
  FaHandshake,
  FaWrench,
  FaRocket,
  FaCode,
} from "react-icons/fa";

const SREcoreServices = [
  {
    title: "Release Management",
    icon: <FaCloudUploadAlt />,
    desc:
      "We manage planning, scheduling, and controlling of software builds and releases to ensure smooth deployment with minimal business disruption while maintaining version control and rollback mechanisms for stability.",
  },
  {
    title: "Vendor Updates",
    icon: <FaHandshake />,
    desc:
      "We coordinate with third-party vendors to manage patches, upgrades, and compliance-driven updates, applying vendor-recommended best practices to maintain security and performance.",
  },
  {
    title: "Minor Enhancements",
    icon: <FaWrench />,
    desc:
      "We deliver small functional and UI improvements with quick turnaround, enhancing user experience and efficiency without disrupting core business processes.",
  },
  {
    title: "New Applications & Major Releases",
    icon: <FaRocket />,
    desc:
      "We provide end-to-end support for rolling out new applications or major modules, including robust testing, user training, and seamless migration to minimize operational risk.",
  },
  {
    title: "New Developments",
    icon: <FaCode />,
    desc:
      "We offer ongoing development support for new features, integrations, and system extensions following agile practices to reduce delivery cycles and maximize business value.",
  },
];

export default SREcoreServices;

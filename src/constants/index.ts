import { challengesImg, flexibleImg } from "../../public/assets";

export const navLinks = [
  {
    id: "service",
    title: "Service",
  },
  {
    id: "pricing",
    title: "Pricing",
  },
  {
    id: "ourAudits",
    title: "Our Audits",
  },
  {
    id: "tools",
    title: "Tools",
  },
  {
    id: "resources",
    title: "Resources",
  },
  {
    id: "referEranSecure",
    title: "Refer Eran Secure",
  },
];

export const BandAQuillaudits = [
  {
    bAudits: [
      {
        point:
          "Exploits like reentrancy and front-running \n can let attackers withdraw extra funds and \n manipulate transaction timing for unfair \n gains",
      },
      {
        point:
          "Vulnerabilities could allow users to mint CDP \n tokens or pension shares indefinitely, \n disrupting the system's economic balance",
      },
    ],

    AAudits: [
      {
        point: "Implementation of reentrancy protection \n mechanisms.",
      },
      {
        point:
          "Ensure precision in decimal handling with \n standard libraries, recalculate accurately, fix \n logic errors, and secure referral systems \n against exploitation.",
      },
    ],
  },
];

export const CarpeDiem = [
  {
    title: "CarpeDiem Pension's Flexible, Blockchain-Enabled Future",
    info: "CarpeDiem Pension redefines retirement planning with a unique approach that deviates from traditional pension funds. With no minimum age for retirement, it offers flexibility and freedom, ensuring all genders receive equal treatment. CarpeDiem Pension ensures blockchain transparency, anonymity, and global accessibility, safeguarding pensions during international relocation. Easily transfer pensions to loved ones; share wallet access. Re-deposit payouts for increased future benefits. Importantly, CarpeDiem Pension prioritizes deposit security by avoiding utilizing client funds for internal investments. To become a part of this forward-thinking pension scheme, one simply needs to install and configure a blockchain wallet.",
    image: flexibleImg,
  },
  {
    title:
      "CarpeDiem Pension's Challenges: Enhancing Security Against Reentrancy, Front-Running, and Infinite Minting",
    info: "CarpeDiem Pension confronts critical security challenges, including the risks of reentrancy and front-running exploits.Malicious actors may exploit contract vulnerabilities, withdrawing excess funds or manipulating transaction timing for unfair advantages. System faces infinite minting threats, risking economic stability with endless creation of CDP tokens or pension shares.  Addressing these challenges is paramount to safeguarding the integrity and security of CarpeDiem Pension.",
    image: challengesImg,
  },
];

export const pensionJourney = [
  {
    title: "CarpeDiem Pension's Journey Through our Audit Process",
    points: [
      {
        point:
          "Collected and reviewed all relevant documentation, including whitepaper, technical specifications, and design documents.",
      },
      {
        point:
          "Obtained a clear understanding of the CDP platform's functionality, economic model, and intended user interactions.",
      },
      {
        point:
          "Discussed client concerns and specific areas of focus for the audit.",
      },
    ],
  },
  {
    title: "Manual Code Review:",
    points: [
      {
        point:
          "Conducted a line-by-line review of the smart contract code, focusing on:",
      },
    ],
  },
  {
    title: "Functional Testing:",
    points: [
      {
        point:
          "Developed and executed a comprehensive set of test cases covering various user interactions and edge cases.",
      },
      {
        point:
          "Simulated different deposit, claim, and referral scenarios to assess functionality and uncover potential exploits.",
      },
      {
        point:
          "Focused on scenarios identified during the manual review and client concerns (e.g., infinite minting, reward calculation errors).",
      },
      {
        point:
          "Leveraged tools like Hardhat and Ganache to deploy and test the smart contract locally.",
      },
    ],
  },
  {
    title: "Automated Testing:",
    points: [
      {
        point:
          "Employed static analysis tools like Slither to identify vulnerabilities through automated code scanning.",
      },
      {
        point:
          "Utilized symbolic execution tools like Mythril to explore various code execution paths and uncover potential attack vectors.",
      },
      {
        point:
          "Integrated unit tests are written by the CDP team to verify specific contract functions and their behaviour.",
      },
    ],
  },
  {
    title: "Reporting & Remediation:",
    points: [
      {
        point:
          "Prepared a detailed report outlining all identified vulnerabilities, categorized by severity and potential impact.",
      },
      {
        point:
          "Provided clear recommendations for fixing each vulnerability, including code snippets and best practices.",
      },
      {
        point:
          "Collaborated with the CDP team to prioritize and address the identified issues.",
      },
      {
        point:
          "Conducted additional verification testing after vulnerability fixes were implemented.",
      },
    ],
  },
];

export const manualmorepoints = [
  {
    pointss: "Vulnerability identification:",
    ans: "Searching for known vulnerabilities like reentrancy, front-running, integer overflows, and access control issues etc.",
  },
  {
    pointss: "Logic flaws:",
    ans: "Identifying inconsistencies or unintended behaviors in the code logic.",
  },
  {
    pointss: "Tokenomics correctness:",
    ans: "Verifying if the code accurately implements the intended economic model and token distribution mechanisms.",
  },
  {
    pointss: "Solidity best practices:",
    ans: " Compliance with secure coding standards and adherence to established guidelines.",
  },
];

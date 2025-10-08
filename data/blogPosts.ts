export interface BlogPost {
  slug: string; // URL-friendly version of the title
  title: string;
  author: string;
  date: string; // Format: "Month Day, Year"
  excerpt: string;
  coverImage: string; // Path to the post's image in the /public folder
  content: string; // Full post content in HTML
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "understanding-the-sarfaesi-act-2002",
    title: "A Client's Guide to the SARFAESI Act, 2002",
    author: "Mr. R. Jagadeesan",
    date: "October 8, 2025",
    excerpt:
      "The SARFAESI Act is a powerful tool for banks. But what does it mean for borrowers? We break down the key aspects of asset reconstruction and security interest enforcement.",
    coverImage: "/images/blog/banking-law.png",
    content: `
      <p class="mb-4 text-lg">The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002 empowers banks and financial institutions to recover their dues in an efficient manner. While it streamlines the recovery process for lenders, it's crucial for borrowers to understand their rights and the procedures involved.</p>
      
      <h3 class="text-2xl font-serif text-brand-navy mb-4 mt-8">When Can the SARFAESI Act Be Invoked?</h3>
      <p class="mb-4">A lender can only initiate proceedings under the SARFAESI Act if the loan account is classified as a Non-Performing Asset (NPA). An account is typically classified as an NPA if the principal or interest payment is overdue by 90 days. This act applies to secured loans where the bank has a charge on assets like property or machinery.</p>
      
      <h3 class="text-2xl font-serif text-brand-navy mb-4 mt-8">The Process Explained</h3>
      <ol class="list-decimal list-inside space-y-3 mb-4">
        <li><strong>Demand Notice:</strong> The process begins when the lender sends a demand notice to the defaulting borrower, asking to repay the outstanding dues within 60 days.</li>
        <li><strong>Taking Possession:</strong> If the borrower fails to comply, the lender can take possession of the secured assets. This can be either symbolic or physical possession.</li>
        <li><strong>Sale of Assets:</strong> The lender can then sell the assets through public auction or private treaty to recover the outstanding amount.</li>
      </ol>

      <h3 class="text-2xl font-serif text-brand-navy mb-4 mt-8">What Are Your Rights as a Borrower?</h3>
      <p class="mb-4">While the act is powerful, it is not without checks and balances. Borrowers have specific rights:</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Right to Representation:</strong> Upon receiving the 60-day notice, you have the right to make a representation or raise objections to the lender. The lender is obligated to reply to your representation within 15 days.</li>
          <li><strong>Right to Appeal:</strong> If you are aggrieved by the lender's actions, you have the right to file an appeal with the Debt Recovery Tribunal (DRT) within 45 days.</li>
          <li><strong>Right to Fair Value:</strong> The lender must ensure the secured asset is sold at a fair market value and must follow a transparent auction process.</li>
      </ul>

      <hr class="my-8"/>
      
      <p class="text-base italic text-neutral-grey"><strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. The provisions of the SARFAESI Act are complex and require careful legal examination. For specific advice on your situation, please consult a qualified legal professional.</p>
      <p class="mt-4">If you are facing proceedings under the SARFAESI Act, our team has extensive experience in banking law and can provide the expert guidance you need. <a href="/contact" class="text-brand-navy font-semibold hover:underline">Contact us today</a> for a consultation.</p>
    `,
    tags: ["Banking Law", "SARFAESI", "Debt Recovery", "NPA"],
  },
  {
    slug: "navigating-property-disputes-in-chennai",
    title: "Navigating Property Disputes in Chennai: A Primer",
    author: "Mr. M.A. Abdul Wahab",
    date: "September 25, 2025",
    excerpt:
      "Property disputes can be complex and emotionally taxing. This article provides a foundational understanding of the common types of property disputes and the initial steps you should take.",
    coverImage: "/images/blog/property-law.png",
    content: `
      <p class="mb-4 text-lg">In a city with a rich history like Chennai, property is often more than just an asset; it's a legacy. However, this also means that disputes related to title, inheritance, and boundaries are common. Navigating these requires a clear understanding of the law and a strategic approach.</p>
      
      <h3 class="text-2xl font-serif text-brand-navy mb-4 mt-8">Common Types of Property Disputes</h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>Title Disputes:</strong> Who is the rightful owner of the property? This can arise from forged documents, unclear sale deeds, or fraudulent transfers.</li>
        <li><strong>Inheritance & Partition Suits:</strong> Disputes among family members over the division of ancestral or inherited property.</li>
        <li><strong>Boundary and Encroachment Issues:</strong> Disagreements with neighbours over the exact demarcation of property lines.</li>
        <li><strong>Landlord-Tenant Disputes:</strong> Issues related to rent, eviction, and the terms of the rental agreement, governed by the Tamil Nadu Regulation of Rights and Responsibilities of Landlords and Tenants Act.</li>
      </ul>

      <h3 class="text-2xl font-serif text-brand-navy mb-4 mt-8">The First and Most Critical Step: Documentation</h3>
      <p class="mb-4">The strength of any property case lies in its documentation. Before proceeding with any legal action, it is essential to gather and verify all relevant documents:</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Parent Documents & Sale Deeds:</strong> To trace the history and ownership of the property.</li>
          <li><strong>Patta, Chitta, and Adangal Extracts:</strong> Government revenue records that establish ownership and land classification.</li>
          <li><strong>Encumbrance Certificate (EC):</strong> To verify that the property is free from any legal or monetary liabilities.</li>
          <li><strong>Legal Heirship Certificate & Succession Certificate:</strong> Essential for inheritance claims.</li>
      </ul>

      <hr class="my-8"/>
      
      <p class="text-base italic text-neutral-grey"><strong>Disclaimer:</strong> This article is intended to provide a general overview and is not a substitute for professional legal advice. Every property dispute has unique facts that require a tailored legal strategy.</p>
      <p class="mt-4">If you are facing a property-related legal issue, our firm possesses deep expertise in property law and litigation. We can assist you in verifying documents, providing legal opinions, and representing you in court. <a href="/contact" class="text-brand-navy font-semibold hover:underline">Contact us</a> to protect your rights and assets.</p>
    `,
    tags: ["Property Law", "Litigation", "Chennai", "Real Estate"],
  },
  {
    slug: "the-importance-of-a-will-testamentary-law",
    title: "Why Every Adult Needs a Will: An Introduction to Testamentary Law",
    author: "Mr. K.V. Subramanian",
    date: "September 10, 2025",
    excerpt:
      "A Will is one of the most important documents you will ever create. It ensures your assets are distributed according to your wishes. Learn about the basics of Will creation, probate, and succession in India.",
    coverImage: "/images/blog/testamentary-law.png",
    content: `
      <p class="mb-4 text-lg">Estate planning is a topic many prefer to avoid, but creating a Will is a crucial act of responsibility towards your loved ones. It provides clarity, prevents disputes, and ensures your legacy is handled exactly as you intend. In the absence of a Will, your assets are distributed according to the rigid rules of succession laws, which may not align with your wishes.</p>
      
      <h3 class="text-2xl font-serif text-brand-navy mb-4 mt-8">What Makes a Will Valid?</h3>
      <p class="mb-4">Under Indian law, a Will (or "Testament") must meet certain criteria to be legally valid:</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>It must be in writing.</li>
        <li>It must be signed by the person making the Will (the "Testator").</li>
        <li>It must be attested by at least two witnesses, who must have seen the Testator sign or affix their mark to the Will.</li>
      </ul>
      <p class="mb-4">While it is not mandatory to register a Will, registration can add an extra layer of authenticity.</p>

      <h3 class="text-2xl font-serif text-brand-navy mb-4 mt-8">What is Probate?</h3>
      <p class="mb-4">Probate is the legal process of validating a Will in a court of law. The court certifies that the Will is the final and true testament of the deceased. In cities like Chennai, obtaining a probate from the High Court is mandatory for a Will to be enforced and for the title of the property to be transferred to the beneficiaries.</p>

      <hr class="my-8"/>
      
      <p class="text-base italic text-neutral-grey"><strong>Disclaimer:</strong> The information provided here is for general educational purposes only. Drafting a Will and navigating the probate process can be complex. You should always seek advice from a qualified legal professional.</p>
      <p class="mt-4">Our firm has extensive experience in Testamentary Jurisdiction, from drafting legally sound Wills to handling the entire probate process in the High Court at Madras. <a href="/contact" class="text-brand-navy font-semibold hover:underline">Secure your family's future by contacting us today</a>.</p>
    `,
    tags: ["Testamentary Law", "Will", "Probate", "Estate Planning"],
  },
  {
    slug: "understanding-employee-rights-in-india",
    title: "Know Your Rights: An Overview of Labour & Service Law in India",
    author: "Mr. S. Deenadhayalan",
    date: "August 28, 2025",
    excerpt:
      "The relationship between an employer and an employee is governed by a complex set of laws. Understanding your rights is the first step toward ensuring fair treatment in the workplace.",
    coverImage: "/images/blog/labour-law.png",
    content: `
      <p class="mb-4 text-lg">Labour and service laws in India are designed to protect the interests of employees and ensure a just and equitable work environment. These laws cover everything from working hours and wages to conditions for termination and prevention of harassment.</p>
      
      <h3 class="text-2xl font-serif text-brand-navy mb-4 mt-8">Key Areas of Protection for Employees</h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>Wrongful Termination:</strong> An employer cannot terminate an employee arbitrarily. The termination must be in accordance with the terms of the employment contract and the principles of natural justice.</li>
        <li><strong>Workplace Harassment:</strong> The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 provides a robust framework for preventing and addressing harassment.</li>
        <li><strong>Wages and Working Hours:</strong> Laws like the Minimum Wages Act and the Factories Act regulate payment of wages, overtime, and working hours to prevent exploitation.</li>
        <li><strong>Social Security:</strong> Acts related to Provident Fund (PF), Gratuity, and Employees' State Insurance (ESI) provide a social safety net for employees.</li>
      </ul>

      <h3 class="text-2xl font-serif text-brand-navy mb-4 mt-8">What to Do if Your Rights are Violated</h3>
      <p class="mb-4">If you believe your rights as an employee have been violated, it is crucial to act promptly. The first step is often to raise the issue internally through the company's prescribed grievance redressal mechanism. If that fails, you may need to approach the Labour Court or the appropriate legal forum.</p>
      
      <hr class="my-8"/>
      
      <p class="text-base italic text-neutral-grey"><strong>Disclaimer:</strong> This article is a brief overview and is not a substitute for legal advice. Labour laws are intricate and the applicability of various statutes depends on the nature of the establishment and the employee's role.</p>
      <p class="mt-4">Our advocates are well-versed in labour and service jurisprudence and have represented both employers and employees in a variety of disputes. If you are facing a workplace legal issue, <a href="/contact" class="text-brand-navy font-semibold hover:underline">contact us for confidential and expert advice</a>.</p>
    `,
    tags: [
      "Labour Law",
      "Service Matters",
      "Employee Rights",
      "Workplace Harassment",
    ],
  },
  {
    slug: "demystifying-arbitration-as-a-dispute-resolution-tool",
    title: "Arbitration vs. Litigation: A Guide for Businesses",
    author: "Mr. K.V. Subramanian",
    date: "August 15, 2025",
    excerpt:
      "When commercial disputes arise, court is not the only option. Arbitration offers a private, efficient, and often faster alternative to traditional litigation. Learn when it might be the right choice for your business.",
    coverImage: "/images/blog/arbitration.png",
    content: `
      <p class="mb-4 text-lg">In the world of commerce, time is money. Lengthy court battles can drain resources and damage business relationships. Arbitration has emerged as a preferred method of dispute resolution for many businesses due to its flexibility, confidentiality, and speed.</p>
      
      <h3 class="text-2xl font-serif text-brand-navy mb-4 mt-8">What is Arbitration?</h3>
      <p class="mb-4">Arbitration is a form of Alternative Dispute Resolution (ADR) where a dispute is submitted to one or more arbitrators who make a binding decision. This decision, known as an "arbitral award," is legally enforceable in a court of law. The entire process is governed by the Arbitration and Conciliation Act, 1996 in India.</p>

      <h3 class="text-2xl font-serif text-brand-navy mb-4 mt-8">Key Advantages of Arbitration Over Litigation</h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>Speed:</strong> Arbitration is generally much faster than litigation, which can be mired in procedural delays.</li>
        <li><strong>Confidentiality:</strong> Arbitration proceedings are private, unlike court proceedings which are public. This is crucial for protecting business secrets and reputations.</li>
        <li><strong>Expertise:</strong> The parties can choose an arbitrator who has specific expertise in their industry, which may not be the case with a judge.</li>
        <li><strong>Finality:</strong> The grounds for appealing an arbitral award are very limited, which leads to a quicker final resolution.</li>
      </ul>

      <h3 class="text-2xl font-serif text-brand-navy mb-4 mt-8">Is Arbitration Right for You?</h3>
      <p class="mb-4">Arbitration is only possible if both parties have agreed to it, usually via an "arbitration clause" in their original contract. It is an excellent tool for commercial, construction, and technical disputes. However, for matters involving criminal law or rights affecting the public at large, litigation remains the only path.</p>
      
      <hr class="my-8"/>
      
      <p class="text-base italic text-neutral-grey"><strong>Disclaimer:</strong> This information is for general guidance only and does not constitute legal advice. The choice between arbitration and litigation depends on the specific circumstances of your contract and dispute.</p>
      <p class="mt-4">Our firm has significant experience in domestic and international arbitration. We can assist with drafting arbitration clauses, representing you in arbitral proceedings, and enforcing arbitral awards. <a href="/contact" class="text-brand-navy font-semibold hover:underline">Contact us to discuss your dispute resolution strategy</a>.</p>
    `,
    tags: ["Arbitration", "ADR", "Dispute Resolution", "Commercial Law"],
  },
];

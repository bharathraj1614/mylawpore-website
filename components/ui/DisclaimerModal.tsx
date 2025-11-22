"use client";

import { motion } from "framer-motion";

interface DisclaimerModalProps {
  onAccept: () => void;
}

export default function DisclaimerModal({ onAccept }: DisclaimerModalProps) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 py-6 sm:px-6">
      {/* Backdrop with Blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Decorative Top Border */}
        <div className="h-2 w-full bg-brand-gold" />

        {/* Scrollable Content Area */}
        <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-navy/5 text-brand-navy mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-navy">
              Disclaimer
            </h2>
            <p className="mt-2 text-xs sm:text-sm font-medium text-brand-gold uppercase tracking-wider">
              Bar Council of India Rules
            </p>
          </div>

          <div className="prose prose-sm max-w-none text-neutral-600">
            <p className="text-sm sm:text-base leading-relaxed text-center mb-6">
              According to the rules of the Bar Council of India, we are not
              permitted to solicit work or advertise. By clicking on the
              <span className="font-semibold text-brand-navy"> "I Agree" </span>
              button below, you acknowledge the following:
            </p>

            <ul className="space-y-4 list-none pl-0 mt-4">
              <ListItem>
                There has been no advertisement, personal communication,
                solicitation, invitation, or inducement of any sort whatsoever
                from us or any of our members to solicit any work through this
                website.
              </ListItem>
              <ListItem>
                You wish to gain more information about us for your own
                information and use.
              </ListItem>
              <ListItem>
                Any information obtained or materials downloaded from this
                website is completely at your own volition and any transmission,
                receipt, or use of this site would not create any lawyer-client
                relationship.
              </ListItem>
            </ul>
          </div>
        </div>

        {/* Footer / Action Area */}
        <div className="p-6 sm:p-8 bg-neutral-50 border-t border-neutral-100 flex flex-col items-center">
          <button
            onClick={onAccept}
            className="w-full sm:w-auto min-w-[200px] bg-brand-navy text-white font-semibold py-3.5 px-8 rounded-lg shadow-lg hover:bg-brand-navy/90 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-brand-navy"
          >
            I Agree & Continue
          </button>
          <p className="mt-4 text-[10px] text-neutral-400 text-center">
            By entering this site, you confirm you are accessing this
            information voluntarily.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

// Helper Component for List Items
function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-sm text-neutral-600 text-left bg-neutral-50 p-3 rounded-lg border border-neutral-100">
      <div className="flex-shrink-0 mt-0.5">
        <svg
          className="w-5 h-5 text-brand-gold"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <span className="leading-snug">{children}</span>
    </li>
  );
}

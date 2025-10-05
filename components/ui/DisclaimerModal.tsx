"use client";

interface DisclaimerModalProps {
  onAccept: () => void;
}

export default function DisclaimerModal({ onAccept }: DisclaimerModalProps) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="bg-neutral-off-white rounded-lg shadow-xl max-w-2xl w-full p-8 m-4 text-center">
        <h2 className="text-2xl font-serif text-brand-navy mb-4">
          Legal Disclaimer & Confirmation
        </h2>
        <p className="text-sm text-neutral-grey mb-6 font-sans leading-relaxed">
          According to the rules of the Bar Council of India, we are not
          permitted to solicit work or advertise. By clicking on the &quot;I
          Agree&quot; button below, you acknowledge the following:
        </p>
        <ul className="text-xs text-left text-neutral-grey mb-8 font-sans space-y-2">
          <li>
            *** There has been no advertisement, personal communication,
            solicitation, invitation, or inducement of any sort whatsoever from
            us or any of our members to solicit any work through this website.
          </li>
          <li>
            *** You wish to gain more information about us for your own
            information and use.
          </li>
          <li>
            *** Any information obtained or materials downloaded from this
            website is completely at your own volition and any transmission,
            receipt, or use of this site would not create any lawyer-client
            relationship.
          </li>
        </ul>
        <button
          onClick={onAccept}
          className="bg-brand-gold text-brand-navy font-bold py-3 px-8 rounded hover:bg-opacity-90 transition-colors duration-300"
        >
          I Agree & Continue to Site
        </button>
      </div>
    </div>
  );
}

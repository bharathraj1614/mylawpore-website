import { DharmaChakra } from "@/components/ui/DharmaChakra"; // Import your component

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-neutral-off-white bg-opacity-90 backdrop-blur-sm">
      <DharmaChakra
        size={80} /* Adjust size for loader, e.g., 80px */
        color="#C0A062" /* Use brand-gold for the color */
        className="loader-spin" /* Apply the spinning animation */
      />

      <p className="mt-4 font-sans text-lg font-semibold text-brand-navy">
        Upholding Order...
      </p>
    </div>
  );
}

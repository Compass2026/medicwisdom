import { Poppins, Public_Sans } from "next/font/google";

/**
 * Poppins (headings) appears in the old site's own stylesheet; its heavy
 * weights sit well beside the logo's blocky wordmark, and its tall metrics
 * keep inline heading links at ≥ 24px touch height. Public Sans keeps long
 * course pages easy to read.
 */
const poppins = Poppins({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-poppins", display: "swap" });
const publicSans = Public_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-public-sans", display: "swap" });

export const fontClassNames = `${poppins.variable} ${publicSans.variable}`;

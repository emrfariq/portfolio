import type { Metadata } from 'next';
import ContactContent from '@/components/contact/ContactContent';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Direct contact frequencies — WhatsApp, Instagram, GitHub, and LinkedIn. No long forms, no automated queues. Direct priority channels to Emir Muhammad Al Fariq.',
};

export default function ContactPage() {
  return <ContactContent />;
}

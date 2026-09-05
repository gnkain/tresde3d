import { ArrowUpRight } from 'lucide-react';

export default function CtaBar() {
  return (
    <div className="cta-bar">
      <span className="cta-text">Have a project in mind? Let's make it real.</span>
      <a className="cta-button" href="mailto:tresde@gmail.com">Request a quote <ArrowUpRight size={14} /></a>
    </div>
  );
}

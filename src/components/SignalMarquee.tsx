type SignalMarqueeProps = {
  items: string[];
  variant?: 'home' | 'archive' | 'article' | 'about';
  fullBleed?: boolean;
};

export function SignalMarquee({
  items,
  variant = 'home',
  fullBleed = false,
}: SignalMarqueeProps) {
  const sequence = [...items, ...items];

  return (
    <div
      className={`signal-marquee signal-marquee-${variant}${fullBleed ? ' signal-marquee-full-bleed' : ''}`}
      aria-hidden="true"
    >
      <div>
        {sequence.map((item, index) => (
          <span className="signal-marquee-item" key={`${item}-${index}`}>
            {item}<i>◆</i>
          </span>
        ))}
      </div>
    </div>
  );
}

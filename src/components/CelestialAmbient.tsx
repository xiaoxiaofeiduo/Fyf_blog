const particles = Array.from({ length: 12 }, (_, index) => index);

export function CelestialAmbient() {
  return (
    <div className="celestial-ambient" aria-hidden="true">
      <div className="veda-rail">
        <span>VEDA</span>
        <i />
        <small>LINK 00</small>
      </div>

      <div className="twin-drive-emblem">
        <span className="drive-ring drive-ring-left" />
        <span className="drive-ring drive-ring-right" />
        <span className="drive-core">00</span>
        <small>TWIN DRIVE</small>
      </div>

      <div className="trans-am-gauge">
        <span>TRANS-AM</span>
        <div><i /><i /><i /><i /><i /></div>
        <small>STANDBY</small>
      </div>

      <div className="gn-particle-field">
        {particles.map((particle) => <i key={particle} />)}
      </div>
    </div>
  );
}

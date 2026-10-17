import c from "../beams.module.css";

/* 20 */ export const ShootingStars = () => <div className={c.sw} role="img" aria-label="Shooting stars"><i className={c.shoot} style={{ '--y': '16%', '--d': '2.6s' }} /><i className={c.shoot} style={{ '--y': '44%', '--d': '3.4s', animationDelay: '0.9s' }} /><i className={c.shoot} style={{ '--y': '70%', '--d': '2.9s', animationDelay: '1.6s' }} /></div>;

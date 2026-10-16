import { useEffect } from 'react';
import { AnimationProvider } from './AnimationProvider';
import { AudioProvider } from './AudioProvider';
import { LenisProvider } from './LenisProvider';
import { ExperienceProvider } from './ExperienceProvider';
import { initPointer } from '../motion/pointer';
import { initPerformanceMode } from '../performance/performanceMode';
import { initViewportDirector } from '../performance/viewportDirector';

/**
 * Everything a Hanoryx page expects above it, in the order the site mounts it:
 * animation environment (GSAP plugins) -> audio -> smooth scroll -> experience
 * (the full-screen synthesis takeover). The pointer tracker, the fast-scroll
 * governor and the viewport director start once.
 *
 * Needs a react-router <Router> above it (smooth scroll resets on navigation).
 *
 *   smoothScroll   Lenis smooth scrolling. Turn off for docs and tools. (default true)
 *   audio          mount the ambient-audio provider.                   (default true)
 *   experience     mount the synthesis-takeover provider.              (default true)
 *   audioSrc       URL of the ambient track; none is shipped.
 */
export function HanoryxProvider({ children, smoothScroll = true, audio = true, experience = true, audioSrc }) {
  useEffect(() => {
    initPointer();
    initPerformanceMode();
    initViewportDirector();
  }, []);

  let tree = children;
  if (experience) tree = <ExperienceProvider>{tree}</ExperienceProvider>;
  if (smoothScroll) tree = <LenisProvider>{tree}</LenisProvider>;
  if (audio) tree = <AudioProvider src={audioSrc}>{tree}</AudioProvider>;
  return <AnimationProvider>{tree}</AnimationProvider>;
}

export default HanoryxProvider;

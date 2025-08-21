'use client';

import { useEffect } from 'react';
import posthog from 'posthog-js';

const POSTHOG_KEY = 'phc_VZX1tioRIHsGxMdBVLlW7PEKGOw13antIazxQHTM7V0';
const POSTHOG_HOST = 'https://us.posthog.com';

export default function PostHogProvider () {
  useEffect(() => {
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
    });

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      posthog.capture('ui_interaction', {
        tag: target.tagName,
        id: target.id,
        classes: target.className,
        text: target.textContent?.trim().slice(0, 100),
      });
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}

import React from "react";

export default function CookiesPolicy() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase mb-6">
        Cookies Policy
      </h1>
      <p className="text-sm text-gray-500 uppercase tracking-[0.2em] mb-10">
        Last updated: March 2026
      </p>
      <div className="space-y-6 text-gray-700 leading-relaxed text-base">
        <p>
          We use cookies and similar technologies to understand how visitors use this
          website, improve performance and keep certain preferences (such as cookie
          consent) remembered between visits.
        </p>
        <p>
          Essential cookies are required for the site to function and cannot be switched
          off in our systems. Analytics cookies help us understand which pages are most
          useful so we can improve the experience. We do not use cookies to track
          sensitive personal data or to sell your information to third parties.
        </p>
        <p>
          You can control cookies at any time through your browser settings and, where
          available, through in-product cookie preferences. Blocking some types of
          cookies may impact your experience of the site.
        </p>
      </div>
    </div>
  );
}


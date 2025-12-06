'use client';

import { communityData } from '@/data/community';

export function Community() {
  return (
    <section className="min-h-screen py-12 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-[11px] uppercase tracking-[0.2em] text-accent mb-8 block">
          Community
        </span>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {communityData.map((entry) => (
            <div
              key={entry.id}
              className="group p-5 rounded-xl bg-background-secondary/50 border border-border
                       hover:border-accent/20 hover:bg-background-secondary transition-all"
            >
              <h3 className="font-display text-foreground italic mb-1">
                {entry.name}
              </h3>
              <span className="text-sm text-accent">
                {entry.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { EXPERIENCE } from '../../content/profile';
import Reveal from '../reveal';

function ExperienceList() {
  return (
    <ol class="grid gap-6">
      {EXPERIENCE.map(role => (
        <Reveal
          as="li"
          key={role.when + role.org}
          class="grid grid-cols-1 sm:grid-cols-[104px_1fr] gap-x-6 gap-y-0.5"
        >
          <span class="text-sm leading-[24px] text-ink-subtle tabular-nums">
            {role.when}
          </span>
          <div>
            <p class="text-[15px] leading-[24px] text-ink">
              <span class="font-semibold">{role.title}</span>
              <span class="text-ink-muted"> · {role.org}</span>
            </p>
            <p class="text-sm leading-[22px] text-ink-muted">{role.what}</p>
            {role.skills.length > 0 && (
              <p class="text-sm leading-[22px] text-ink-subtle mt-0.5">
                {role.skills.join(', ')}
              </p>
            )}
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

export default ExperienceList;

import { WorkItem } from '../../content/profile';
import Reveal from '../reveal';

interface WorkRowProps {
  item: WorkItem;
}

function WorkRow({ item }: WorkRowProps) {
  return (
    <Reveal as="li">
      <h3 class="text-[17px] leading-[26px] font-semibold text-ink">
        {item.title}
      </h3>
      <p class="text-sm leading-[22px] text-ink-subtle mb-2">{item.meta}</p>
      <p class="text-[15px] leading-[26px] text-ink-muted">{item.body}</p>
      {item.link && (
        <p class="mt-2 text-[15px] leading-[24px]">
          <a
            href={item.link.href}
            target="_blank"
            rel="noopener"
            data-native
            class="underline decoration-1 underline-offset-4 hover:decoration-2"
          >
            {item.link.label}
            <span class="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
      )}
    </Reveal>
  );
}

export default WorkRow;

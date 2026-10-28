import { BLOG, POSTS } from '../../content/profile';
import Reveal from '../reveal';

function PostList() {
  return (
    <>
      <ul class="grid gap-4">
        {POSTS.map(post => (
          <Reveal
            as="li"
            key={post.href}
            class="grid grid-cols-1 sm:grid-cols-[104px_1fr] gap-x-6 gap-y-0.5"
          >
            <span class="text-sm leading-[24px] text-ink-subtle tabular-nums">
              {post.date}
            </span>
            <a
              href={post.href}
              target="_blank"
              rel="noopener"
              data-native
              class="text-[15px] leading-[24px] font-medium"
            >
              {post.title}
            </a>
          </Reveal>
        ))}
      </ul>
      <p class="mt-5 text-[15px] leading-[24px]">
        <a
          href={BLOG}
          target="_blank"
          rel="noopener"
          data-native
          class="underline decoration-1 underline-offset-4 hover:decoration-2"
        >
          All posts
          <span class="sr-only">
            {' '}
            on blog.delgaudio.dev (opens in a new tab)
          </span>
        </a>
      </p>
    </>
  );
}

export default PostList;

import { Link } from 'preact-router';

export interface CardProps {
  header: string;
  description: string;
  link: string;
  classNames?: string[];
}

function Card(props: CardProps) {
  return (
    <Link
      href="#"
      class="block max-w-sm p-6 bg-white border border-cod-gray-200 rounded-lg shadow hover:bg-cod-gray-100 dark:bg-cod-gray-800 dark:border-cod-gray-700 dark:hover:bg-cod-gray-700"
    >
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p class="font-normal text-cod-gray-700 dark:text-cod-gray-200">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </Link>
  );
}

export default Card;
